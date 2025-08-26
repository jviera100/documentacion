# Guía Introductoria a Suricata: Detección de Intrusiones en Red (NIDS/NIPS)

## 1. ¿Qué es Suricata?

Suricata es un motor de **Detección de Intrusiones en Red (NIDS)** y **Prevención de Intrusiones en Red (NIPS)** de alto rendimiento, gratuito y de código abierto. Inspecciona el tráfico de red en tiempo real o desde archivos de captura (`.pcap`) comparándolo con un conjunto de reglas (firmas) para identificar actividad maliciosa, violaciones de políticas o comportamientos anómalos.

**Funcionalidades Clave:**
*   **Detección basada en Firmas:** Utiliza reglas para identificar patrones conocidos de ataques.
*   **Análisis de Protocolos:** Entiende y decodifica una amplia gama de protocolos de red (TCP, UDP, HTTP, TLS, DNS, etc.).
*   **Generación de Alertas:** Registra eventos de seguridad detectados.
*   **Modo IPS (Intrusion Prevention System):** Puede configurarse para bloquear activamente el tráfico malicioso.
*   **Registro Extensivo:** Genera logs detallados en varios formatos, incluyendo `eve.json` (un formato JSON todo-en-uno) y `fast.log` (alertas rápidas).

## 2. Anatomía de una Regla de Suricata

Las reglas son el corazón de Suricata y definen qué buscar en el tráfico de red. Una regla típica tiene la siguiente estructura:

**`ACCIÓN PROTOCOLO IP_ORIGEN PUERTO_ORIGEN -> IP_DESTINO PUERTO_DESTINO (OPCIONES_DE_REGLA)`**

### Ejemplo de Regla Personalizada:
plaintext
alert http $HOME_NET any -> $EXTERNAL_NET any (msg:"GET on wire"; flow:established,to_server; content:"GET"; http_method; sid:12345; rev:3;)

# Desglose de Componentes de Reglas en Suricata

## Componentes de la Regla

| Componente           | Descripción                                                                 | Ejemplo de la Regla                                     |
|----------------------|-----------------------------------------------------------------------------|----------------------------------------------------------|
| **Acción NIDS/NIPS** | Define qué hacer cuando la regla coincide.                                  | `alert`                                                  |
| **Protocolo**        | El protocolo de red al que se aplica la regla.                              | `http`                                                   |
| **IP de Origen**     | Dirección IP o variable de red de origen del tráfico.                       | `$HOME_NET`                                              |
| **Puerto de Origen** | El puerto de origen del tráfico. `any` significa cualquier puerto.          | `any`                                                    |
| **Dirección (->)**   | Dirección del flujo de tráfico inspeccionado.                               | `->`                                                     |
| **IP de Destino**    | Dirección IP o variable de red de destino del tráfico.                      | `$EXTERNAL_NET`                                          |
| **Puerto de Destino**| Puerto de destino del tráfico.                                              | `any`                                                    |
| **Opciones de Regla**| Entre paréntesis, define condiciones exactas y mensaje de alerta.           | `(msg:"GET on wire"; flow:...; sid:...; rev:...;)`       |

## Acciones NIDS/NIPS Comunes

| Acción   | Descripción                                                                                         |
|----------|-----------------------------------------------------------------------------------------------------|
| `alert`  | Genera una alerta y registra el evento. El tráfico no se bloquea. (Modo IDS por defecto)           |
| `drop`   | Genera una alerta, registra y descarta el paquete y flujo subsecuente. (Modo IPS)                  |
| `pass`   | Permite el tráfico sin generar alerta, incluso si coincide con reglas posteriores.                 |
| `reject` | Bloquea el tráfico y envía paquete TCP de reset al origen y/o destino. (Modo IPS)                  |

## Opciones de Regla Comunes

| Opción        | Descripción                                                                                  | Ejemplo                  |
|---------------|----------------------------------------------------------------------------------------------|--------------------------|
| `msg`         | Mensaje descriptivo que se incluirá en la alerta. Debe ir entre comillas dobles.            | `"GET on wire"`          |
| `flow`        | Estado y dirección del flujo de tráfico.                                                     | `established,to_server`  |
| `content`     | Busca una cadena específica en el payload. Es sensible a mayúsculas/minúsculas.             | `"GET"`                  |
| `http_method` | Palabra clave específica para HTTP que detecta métodos como GET, POST, etc.                 | `http_method`            |
| `sid`         | ID único de la regla. Para reglas personalizadas, usar SID > 1,000,000.                     | `12345`                  |
| `rev`         | Número de revisión de la regla. Se incrementa si la regla cambia.                           | `3`                      |

## Variables Predefinidas

- `$HOME_NET`: Red local definida en `suricata.yaml`.
- `$EXTERNAL_NET`: Redes externas.

## Ejecutar Suricata y Analizar Resultados

### A. Comandos Básicos

```bash
# Modo NIDS (tráfico en vivo)
sudo suricata -i <interfaz> -c /etc/suricata/suricata.yaml -S /ruta/a/tus/reglas.rules

# Analizar archivo pcap
sudo suricata -r <archivo.pcap> -c /etc/suricata/suricata.yaml -S /ruta/a/tus/reglas.rules

# Ejemplo específico con desactivación de checksums
sudo suricata -r sample.pcap -S custom.rules -k none
```

### B. Logs Generados

Suricata guarda logs por defecto en `/var/log/suricata/`.

```bash
# Ver archivos de log
ls -l /var/log/suricata

# Ver resumen de alertas
cat /var/log/suricata/fast.log

# Ver log unificado en JSON
cat /var/log/suricata/eve.json
```

### C. Ejemplo de Salida de fast.log

```
11/23/2022-12:38:34.624866  [**] [1:12345:3] GET on wire [**] [Classification: (null)] [Priority: 3] {TCP} 172.21.224.2:49652 -> 142.250.1.139:80
```

- **Timestamp:** Fecha y hora de la alerta.
- **[1:12345:3]:** GID:SID:REV y mensaje.
- **Classification/Priority:** Clasificación (si existe) y prioridad.
- **{TCP}...:** Protocolo, IP y puerto de origen/destino.

### D. Análisis Avanzado con `jq` y `eve.json`

```bash
# Mostrar todo con formato
jq . /var/log/suricata/eve.json

# Mostrar con paginación
jq . /var/log/suricata/eve.json | less

# Extraer campos clave
jq -c "[.timestamp,.flow_id,.alert.signature,.proto,.dest_ip]" /var/log/suricata/eve.json

# Filtrar solo alertas y mostrar severidad
jq "select(.event_type==\"alert\") | .alert.severity" /var/log/suricata/eve.json

# Mostrar todos los eventos de un flow_id específico
jq "select(.flow_id==123456789)" /var/log/suricata/eve.json
```

> **Nota sobre `flow_id`:** Es un identificador único para cada flujo de red. Todos los eventos relacionados (alertas, http, dns, etc.) compartirán el mismo `flow_id`.

## Flujo de Trabajo Típico

1. **Definir/Actualizar Reglas:** Crear reglas personalizadas o usar conjuntos comunitarios (como ET Open).
2. **Configurar Suricata:** Ajustar `suricata.yaml` (interfaces, variables de red, salidas de log).
3. **Ejecutar Suricata:** En tiempo real o contra archivos `.pcap`.
4. **Monitorear Logs:** Usar `fast.log` para alertas rápidas y `eve.json` para análisis detallado.
5. **Analizar Eventos:** Filtrar y correlacionar con `jq` u otras herramientas.
6. **Ajustar Reglas:** Refinar reglas para reducir falsos positivos y mejorar la detección.


