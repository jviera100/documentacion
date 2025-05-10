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

✅ **1. Toda IP tiene dos partes: Parte de Red + Parte de Host**
Esto siempre depende de la **máscara de subred(Notación CIDR)**. La máscara te dice cuántos bits de la IP se usan para identificar la red y cuántos para identificar al host dentro de esa red.

*   **Ejemplo:** `192.168.1.45` con máscara `/24` (o `255.255.255.0`)
    *   **Parte de Red (los primeros 24 bits):** `192.168.1`
    *   **Parte de Host (los últimos 8 bits):** `.45`
    *   _La **Parte de Host** es la que cambia para identificar a cada dispositivo único DENTRO de la misma red local._
    *   _La **Parte de Red** es común a todos los dispositivos DENTRO de esa misma red local._

✅ **2. Dentro de una LAN (Red Interna): La Subred**
Tu IP (como `192.168.1.45/24`) significa que tu dispositivo pertenece a una **subred local específica**.

*   Para la IP `192.168.1.45` con máscara `/24`:
    *   **Dirección de Red (o Identificador de Red):** `192.168.1.0`. Esta es la dirección que representa a *toda la subred* `192.168.1.0/24`. Se calcula poniendo a cero todos los bits de la "Parte de Host".
    *   **Rango de IPs Asignables a Hosts:** `192.168.1.1` – `192.168.1.254`. Estas son las IPs que pueden usar tus dispositivos.
    *   **Dirección de Broadcast:** `192.168.1.255`. Un mensaje enviado a esta IP llega a *todos* los dispositivos dentro de la subred `192.168.1.0/24`. Se calcula poniendo a uno todos los bits de la "Parte de Host".

*   **Aclaración sobre "192.168.1.X":**
    Cuando decimos "`192.168.1.X`", nos referimos de forma genérica a **cualquier dirección IP de host *válida*** dentro de la subred `192.168.1.0/24`. No es la "red" en sí misma, sino una IP *perteneciente* a esa red. La red como tal se identifica por `192.168.1.0/24`.

✅ **3. NAT y el Router como Puente (Conexión entre Redes)**
 
NAT y la IP Externa Oculta: Correcto. Gracias a NAT, cuando te comunicas con un servidor en Internet (o cualquier otro dispositivo fuera de tu red local), ni tú ves su IP privada interna (si la tiene), ni ellos ven la tuya. Ambos ven la IP pública del router del otro extremo (o la IP pública directa del servidor si no está detrás de NAT). Tú solo conoces tu IP privada y la IP pública de tu router.

*   **Interfaz LAN (Local Area Network):**
    *   Conectada a tu red interna.
    *   Tiene una IP privada de esa red, que actúa como **Puerta de Enlace (Gateway)** para los dispositivos de tu LAN. Ejemplo: `192.168.1.1`.
*   **Interfaz WAN (Wide Area Network):**
    *   Conectada a la red de tu Proveedor de Servicios de Internet (ISP).
    *   Tiene una **IP pública** asignada por tu ISP. Ejemplo: `181.160.25.12`.

*   **El Router Conecta:**
    *   Tu **red privada interna (LAN)** (ej: `192.168.1.0/24`, con hosts como `192.168.1.45`)
    *   Con la **red pública externa (WAN/Internet)**.

*   🔁 **NAT (Network Address Translation) traduce:**
    Cuando un dispositivo de tu LAN (ej: `192.168.1.45`) quiere comunicarse con Internet, el router:
    1.  Recibe la petición del dispositivo LAN.
    2.  **Reemplaza** la IP de origen privada (`192.168.1.45`) con su propia IP pública de la interfaz WAN (`181.160.25.12`).
    3.  Utiliza un puerto único para rastrear la conexión (ej: `181.160.25.12:puerto_aleatorio`).
    4.  Envía la petición a Internet.
    5.  Cuando llega la respuesta a `181.160.25.12:puerto_aleatorio`, el router sabe a qué dispositivo interno (`192.168.1.45`) debe reenviarla.

---

## 🧩 Tabla de diferencias y relaciones

| Concepto                         | ¿Qué es?                                                                 | ¿Dónde está?                               | Relación con otros                                                |
|----------------------------------|--------------------------------------------------------------------------|--------------------------------------------|-------------------------------------------------------------------|
| 1. Enrutador (router)            | Dispositivo que conecta redes distintas y enruta paquetes entre ellas.     | Físicamente entre dos o más redes          | Contiene interfaces. Proporciona la puerta de enlace (gateway) a los hosts. |
| 2. Interfaz                      | Puerto físico o lógico de red en un dispositivo (ej: router, host).      | Parte del router o del host                | Cada interfaz en un router conecta a una red distinta y tiene su propia IP. |
| 3. Puerta de enlace (gateway)    | Dirección IP de la interfaz del router que está *dentro* de una red local específica. | En la interfaz LAN del router, vista desde un host de esa LAN | Es la "salida" que usan los hosts de una red para alcanzar otras redes. |
| 4. Puerta de enlace predeterminada | Dirección IP configurada en un host como su "salida por defecto" para tráfico destinado a redes externas. | Configurada en cada host de la red         | Suele ser la misma IP que la Puerta de Enlace (3) de su red local. |
| 5. Gateway interno (local gateway) | Otro nombre para la Puerta de Enlace (3) o Puerta de Enlace Predeterminada (4) dentro de una red local. | En la red local                            | Es la IP del router en la LAN, que permite salir hacia Internet (vía ISP). |
| 6. Cliente DHCP                  | Dispositivo (como un host) que solicita automáticamente configuración de red. | Cualquier host en la red                   | Recibe IP, máscara, gateway y DNS del Servidor DHCP (7).        |
| 7. Servidor DHCP                 | Entrega configuración de red (IP, máscara, gateway, DNS, etc.) a los clientes DHCP. | Usualmente en el router (para redes domésticas/pequeñas) o un servidor dedicado. | Proporciona los datos de configuración al Cliente DHCP (6).        |
| 8. Red interna (LAN)             | Red local (Local Area Network), donde están tus dispositivos privados.     | "Dentro" del router (conectada a su interfaz LAN) | Usa IPs privadas. Se comunica con redes externas a través de la puerta de enlace y NAT. |
| 9. Red externa (WAN)             | Red amplia (Wide Area Network), típicamente Internet o la red del ISP.   | "Fuera" del router (conectada a su interfaz WAN) | Es lo que hay más allá de tu puerta de enlace predeterminada. Usa IPs públicas. |

---

## 🧩 Esquema de funciones

```
[ Nivel físico y conexión ]
┌───────────────────────────┐
│ Enrutador (Router)        │ ← Hardware que une redes distintas.
│   └→ Interfaces           │     Cada una conecta una red diferente y tiene su IP.
└───────────────────────────┘     (ej: LAN IP 192.168.1.1, WAN IP 181.160.25.12)

[ Configuración del host (Automática) ]
┌───────────────────────────┐
│ Cliente DHCP              │ ← Pide datos automáticamente
│   ← Servidor DHCP         │     (usualmente el router) le entrega:
└───────────────────────────┘

[ Parámetros que recibe el host desde el Servidor DHCP ]
┌───────────────────────────┐
│ IP propia                 │ ← Su identificación única en su red local (ej: 192.168.1.45) 
│ Máscara de subred         │ ← Define la "Parte de Red" y "Parte de Host" de su IP 
│                           │   (ej: /24 o 255.255.255.0) habla directamente en su red.
│ Gateway(Puerta de enlace) │ ← IP de la interfaz LAN del router (ej: 192.168.1.1). 
│                           │   Es la salida para llegar a otras redes.
│ DNS                       │ ← Servidor para traducir nombres de dominio  
│                           │   (ej: google.com) a IPs (ej: 8.8.8.8).  
└───────────────────────────┘

[ Límite de comunicación y Traducción ]
┌───────────────────────────┐
│ Red interna (LAN)         │ ← Donde están tus dispositivos (ej: 192.168.1.0/24).
│ ↕ (Router con NAT)        │ ← Traduce tus IPs internas privadas a una IP pública
│ Red externa (WAN)         │ ← Internet, la red del ISP. Lo que está más allá del router.
└───────────────────────────┘
```

## 🔑 Recuerda:

*   **Puerta de enlace (gateway):** Es una **dirección IP** (lógica) de una **interfaz** (física/lógica) del router, específica para una red.
*   **Interfaz:** Es la conexión física o lógica del router (o host).
*   **Para dos hosts en la MISMA red local (ej: `192.168.1.10` y `192.168.1.20` en `192.168.1.0/24`):**
    *   Tendrán diferente Dirección IP de host (ej: `.10` vs `.20`).
    *   Tendrán diferente Dirección MAC.
    *   Compartirán la misma Parte de Red de su IP (ej: `192.168.1`).
    *   Compartirán la misma Dirección de Red (ej: `192.168.1.0`).
    *   Compartirán la misma Máscara de subred (ej: `/24`).
    *   Compartirán la misma Puerta de Enlace Predeterminada (ej: `192.168.1.1`).
*   **Para dos hosts en REDES DIFERENTES (ej: `192.168.1.10` y `10.0.0.5`):**
    *   Tendrán diferente Dirección IP (y diferente Parte de Red).
    *   Tendrán diferente Dirección MAC.
    *   Tendrán diferente Dirección de Red.
    *   Probablemente diferente Máscara de subred.
    *   Tendrán diferente Puerta de Enlace Predeterminada.
*   ✅ **NAT (Network Address Translation):** Técnica usada por el router para traducir las IPs privadas de tu red interna a una única IP pública (la de su interfaz WAN) para que tus dispositivos puedan navegar en Internet, y viceversa.

---

## Rangos de IP Privada Comunes

| Rango de IP privada             | Máscara de subred (por defecto/común) | Bits para red (original) | Bits para host (original) | Nº de hosts posibles (con máscara por defecto) | Uso típico      |
|---------------------------------|---------------------------------------|--------------------------|---------------------------|------------------------------------------------|-----------------|
| `10.0.0.0` – `10.255.255.255`   | `255.0.0.0` (`/8`)                    | 8                        | 24                        | 16,777,214                                     | Empresas grandes|
| `172.16.0.0` – `172.31.255.255` | `255.240.0.0` (`/12`)                 | 12                       | 20                        | 1,048,574                                      | Empresas medianas|
| `192.168.0.0` – `192.168.255.255`| `255.255.0.0` (`/16` para el rango total, pero comúnmente se usa `/24` para subredes individuales como `192.168.1.0/24`) | 16 (para todo el bloque) | 16 (para todo el bloque) | 65,534 (si se usara todo el bloque /16)       | Hogares / Pequeñas (usando subredes /24) |

📝 En cada subred, se restan 2 direcciones del total posible de combinaciones de la parte de host: una para la **dirección de red** y otra para la **dirección de broadcast**.

🧠 **Ejemplo con máscara `/24` (para la subred `192.168.1.0/24`):**
*   La máscara `/24` significa que los primeros 24 bits son para la Parte de Red (`192.168.1`) y los últimos 8 bits son para la Parte de Host.
*   🪛 8 bits para la Parte de Host → 2⁸ = 256 combinaciones totales (de `0` a `255` para el último octeto).
*   Se restan 2 direcciones especiales:
    *   `192.168.1.0` → Dirección de Red (todos los bits de la Parte de Host son `0`).
    *   `192.168.1.255` → Dirección de Broadcast (todos los bits de la Parte de Host son `1`).
*   ✅ **254 direcciones IP disponibles para hosts:** `192.168.1.1` – `192.168.1.254`.
*   📌 El "host" aquí se refiere a un dispositivo individual (PC, teléfono, etc.) dentro de la subred `192.168.1.0/24`. La "Parte de Host" de su IP (ej: `.45` en `192.168.1.45`) es lo que lo identifica unívocamente dentro de esa subred.

✅ **Sobre el rango `172.16.0.0 – 172.31.255.255`:**
El rango completo definido por la IETF para uso privado es `172.16.0.0/12`. Esto significa que las direcciones van desde `172.16.0.0` hasta `172.31.255.255`. Un administrador puede subdividir este gran bloque `/12` en subredes más pequeñas (como `/16`, `/24`, etc.) según las necesidades de la organización. Si se usa una máscara `/16` dentro de este rango, por ejemplo `172.16.0.0/16`, entonces la red sería `172.16.0.0`, los hosts irían de `172.16.0.1` a `172.16.255.254`, y el broadcast `172.16.255.255`.

