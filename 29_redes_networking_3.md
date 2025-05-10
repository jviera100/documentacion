### Conversión de Decimal a Binario: Valor 192

La tabla ilustra el proceso de conversión del número decimal 192 a su equivalente binario de 8 bits.

*   **Valor decimal:** El número a convertir (en este caso, 192).
*   **Base:** La base del sistema numérico binario (2).
*   **Exponente:** El exponente de la base 2 para cada posición del bit.
*   **Posición:** El valor posicional de cada bit (128, 64, 32, 16, 8, 4, 2, 1).
*   **Bit:** El valor binario (0 o 1) que indica si la posición correspondiente contribuye al valor decimal.

**Tabla de Conversión (Horizontal):**

| **Valor Decimal** | 192 |   |   |   |   |   |   |   |
|---|---|---|---|---|---|---|---|---|
| **Base** | 2 | 2 | 2 | 2 | 2 | 2 | 2 | 2 |
| **Exponente** | 7 | 6 | 5 | 4 | 3 | 2 | 1 | 0 |
| **Posición** | 128 | 64 | 32 | 16 | 8 | 4 | 2 | 1 |
| **Bit** | 1 | 1 | 0 | 0 | 0 | 0 | 0 | 0 |

**Resultado Binario:** 11000000

**Explicación:**

Para obtener 192 en decimal, necesitamos los siguientes valores posicionales:

*   128 (2^7)
*   64 (2^6)

128 + 64 = 192. Por lo tanto, los bits correspondientes a esas posiciones son 1, y los demás son 0. El resultado binario se lee de izquierda a derecha dentro de la tabla, correspondiente al orden de los exponentes y posiciones.

# convirtiendo desde tabla de conversion con calculos de decimal a hexadecimal y viceversa

**1. Tabla de Conversión (Decimal <-> Hexadecimal) - Horizontal:**

| Decimal: | 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Hexadecimal: | 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | A | B | C | D | E | F |

**2. Resumen del Cálculo:**

*   **Decimal -> Hexadecimal (División):**
    *   Divide sucesivamente por 16.
    *   El cociente y el residuo de cada división se convierten a hexadecimal usando la tabla de conversión (arriba).  **Ejemplo:** 202 / 16 = 12 (C) residuo 10 (A) => CA
*   **Hexadecimal -> Decimal (Multiplicación):**
    *   Cada dígito hexadecimal se convierte a decimal usando la tabla de conversión (arriba).
    *   Cada dígito decimal se multiplica por 16 elevado a la potencia de su posición (de derecha a izquierda, comenzando con 0).
    *   Los resultados se suman. **Ejemplo:** 7D = (7 * 16^1) + (13 * 16^0) = 112 + 13 = 125

# convirtiendo desde tabla de posicion y tabla conversion de decimal a binario a hexadecimal

**Tabla de Conversión (decimal a Binario):**

| **Valor decimal** | 197 |   |   |   |   |   |   |   |
|---|---|---|---|---|---|---|---|---|
| **Base** | 2 | 2 | 2 | 2 | 2 | 2 | 2 | 2 |
| **Exponente** | 7 | 6 | 5 | 4 | 3 | 2 | 1 | 0 |
| **Posición** | 128 | 64 | 32 | 16 | 8 | 4 | 2 | 1 |
| **Bit** | 1 | 1 | 0 | 0 | 0 | 1 | 0 | 1 |

128 + 64 + 4 + 1 = 197

**Tabla de Conversión (Binario a hexadecimal):**

| **Valor Binario** | 11000101 |   |   |   |   |   |   |   |
|---|---|---|---|---|---|---|---|---|
| **Exponente** | 3 | 2 | 1 | 0 | 3 | 2 | 1 | 0 |
| **Posición** | 8 | 4 | 2 | 1 | 8 | 4 | 2 | 1 |
| **Bit** | 1 | 1 | 0 | 0 | 0 | 1 | 0 | 1 |

el primero suma 8 + 4 = 12 = c (tabla conversion) y la otra mitad suma 4 + 1 = 5

# convirtiendo desde tabla de posicion y tabla conversion de hexadecimal a binario a decimal

**Tabla de Conversión (hexadecimal a Binario):**

| **Valor Hexadecimal** | 9F |   |   |   |   |   |   |   |
|---|---|---|---|---|---|---|---|---|
| **Exponente** | 3 | 2 | 1 | 0 | 3 | 2 | 1 | 0 |
| **Posición** | 8 | 4 | 2 | 1 | 8 | 4 | 2 | 1 |
| **Bit** | 1 | 0 | 0 | 1 | 1 | 1 | 1 | 1 |

el primero suma 8 + 1 = 9 y la otra mitad suma 8 + 4+ 2 + 1 = 15 (porque F=15)

**Tabla de Conversión (Binario a decimal):**

| **Valor Binario** | 10011111 |   |   |   |   |   |   |   |
|---|---|---|---|---|---|---|---|---|
| **Base** | 2 | 2 | 2 | 2 | 2 | 2 | 2 | 2 |
| **Exponente** | 7 | 6 | 5 | 4 | 3 | 2 | 1 | 0 |
| **Posición** | 128 | 64 | 32 | 16 | 8 | 4 | 2 | 1 |
| **Bit** | 1 | 0 | 0 | 1 | 1 | 1 | 1 | 1 |

128 + 16 + 8 +4 +2 +1 = 159



---------------------------------------------------------------
# **NetGamesLatam_Cisco_Fundamentos de Redes:**

## 🧩 Tabla de diferencias y relaciones

| Concepto                         | ¿Qué es?                                                                 | ¿Dónde está?                               | Relación con otros                                                |
|----------------------------------|--------------------------------------------------------------------------|--------------------------------------------|-------------------------------------------------------------------|
| 1. Enrutador (router)            | Dispositivo que conecta redes distintas.                                 | Físicamente entre dos redes                | Tiene interfaces. Proporciona el gateway a los hosts.             |
| 2. Interfaz                      | Puerto físico o lógico de red en el router.                              | Parte del router                           | Cada interfaz tiene su propia IP y conecta una red distinta.        |
| 3. Puerta de enlace (gateway)    | Dirección IP de la interfaz del router dentro de una red.              | En el router, vista desde el host          | Es la salida del host para ir a otra red.                         |
| 4. Puerta de enlace predeterminada | Dirección IP configurada en el host como “salida por defecto”.         | En cada host                               | Suele coincidir con la IP del gateway (5).                      |
| 5. Gateway interno (local gateway) | Dirección IP.  Otro nombre para la puerta de enlace dentro de una red local. | En la red local                            | Es el gateway hacia Internet (vía ISP).                           |
| 6. Cliente DHCP                  | Dispositivo (como un host) que pide automáticamente configuración de red. | Cualquier host de la red                   | Recibe IP, máscara y gateway del servidor DHCP.                 |
| 7. Servidor DHCP                 | Entrega configuración de red (IP, máscara, gateway, DNS, etc.) a los clientes. | En el router, generalmente                 | Es quien le da los datos necesarios al cliente DHCP.             |
| 8. Red interna                  | Red local (LAN), donde están los dispositivos del hogar o empresa.       | Dentro del router                          | Usa IP privadas. Solo se comunica con Internet usando el gateway. |
| 9. Red externa                  | Red del ISP o Internet.                                                  | Fuera del router (WAN)                     | Es lo que hay más allá del gateway predeterminado.               |

## 🧩 Esquema de funciones

```
[ Nivel físico y conexión ]
┌─────────────────────────────┐
│ 1. Enrutador (Router)       │ ← Hardware que une redes distintas.
│   └→ 2. Interfaces           │     Cada una conecta una red diferente.
└─────────────────────────────┘

[ Configuración del host ]
┌─────────────────────────────┐
│ 8. Cliente DHCP             │ ← Pide datos automáticamente
│   ← 9. Servidor DHCP        │     (usualmente el router)
└─────────────────────────────┘

[ Parámetros que recibe el host ]
┌─────────────────────────────┐
│ IP propia                   │ ← Su identificación única
│ Máscara de subred           │ ← Le dice con quién puede hablar directamente
│ 5/6/7. Gateway (Puerta de enlace) │ ← IP de salida para llegar a otras redes
└─────────────────────────────┘

[ Límite de comunicación ]
┌─────────────────────────────┐
│ 11. Red interna (LAN)       │ ← Donde están tus dispositivos
│ 12. Red externa (WAN)       │ ← Lo que está más allá del router, como Internet
└─────────────────────────────┘
```

## 🔑 Recuerda:

*   Puerta de enlace (gateway) = IP logico de la interfaz
*   interfaz = parte fisica del router
*   Para dos hosts que están en la misma red = tendran diferente direccion IP y mac, mismo IP puerta de enlace (gateway)
*   Para dos hosts que están en red diferentes = tendran diferente direccion IP y mac, diferente IP puerta de enlace (gateway)

## ✅ NAT (Network Address Translation) = técnica para asignar direcciones IP públicas

| Rango de IP privada        | Máscara de subred     | Bits para red | Bits para host | Nº de hosts posibles | Uso típico          |
|---------------------------|------------------------|----------------|----------------|-----------------------|---------------------|
| 10.0.0.0 – 10.255.255.255 | 255.0.0.0 (/8)         | 8              | 24             | 16,777,214            | Empresas grandes    |
| 172.16.0.0 – 172.31.255.255 | 255.240.0.0 (/12)     | 12             | 20             | 1,048,574             | Empresas medianas   |
| 192.168.0.0 – 192.168.255.255 | 255.255.255.0 (/24) | 24             | 8              | 254                   | Hogares / pequeñas  |

* 📝 En cada red, se restan 2 direcciones del total posible (una para la red y otra para broadcast).
* 🧠 Ejemplo con máscara /24 (192.168.1.0/24):
   * 🪛 8 bits para hosts → 2⁸ = 256 combinaciones totales
   * Se restan 2:
       * 192.168.1.0 → Dirección de red (todos los bits en 0)
       * 192.168.1.255 → Broadcast (todos los bits en 1)
       * ✅ 254 direcciones IP disponibles para hosts: 192.168.1.1 – 192.168.1.254
* 📌 El “host” es la parte final de la dirección IP que identifica a cada dispositivo dentro de la red.
*   ✅ El uso de /16 en redes privadas del bloque 172.16.0.0 – 172.31.255.255 depende del administrador, pero el rango oficial definido por la IETF es /12 > asi 172.16.0.0/12.

