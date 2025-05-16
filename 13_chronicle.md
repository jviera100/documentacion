# Guía Introductoria a las Búsquedas en Chronicle Security Operations

Chronicle Security Operations (anteriormente Google Chronicle) es una plataforma de análisis de seguridad que permite a los equipos de seguridad investigar y responder a amenazas a gran escala. Una de sus funciones principales es la capacidad de buscar a través de grandes volúmenes de datos de telemetría.

## 1. Tipos de Búsqueda en Chronicle

En Chronicle, puedes realizar búsquedas utilizando el campo **Search (Buscar)** y refinar los resultados mediante el menú **Procedural Filtering (Proceso de Filtrado)**. Existen dos tipos principales de búsqueda:

1.  **Búsqueda de Modelos de Datos Unificados (UDM / Unified Data Model)**
2.  **Búsqueda de Registro Sin Procesar (Raw Log Search)**

## 2. Búsqueda de Modelos de Datos Unificados (UDM)

Este es el **tipo de búsqueda predeterminado y recomendado** en Chronicle. UDM es un esquema estándar de Google Cloud para normalizar los datos de seguridad ingeridos y analizados. Las búsquedas UDM son más rápidas y estructuradas.

**Características de la Búsqueda UDM:**
*   Utiliza una sintaxis de campo y valor.
*   Busca sobre datos normalizados, lo que permite consultas consistentes a través de diferentes fuentes de logs.
*   Proporciona resultados más rápidos en comparación con la búsqueda de registros sin procesar.

### A. Sintaxis Básica de Búsqueda UDM

La sintaxis general es `campo_udm OPERADOR valor`.

**Ejemplo de Búsqueda UDM:**
metadata.event_type = "USER_LOGIN"


**Desglose del Ejemplo:**
*   `metadata.event_type`: Es un campo UDM que representa el tipo de evento.
*   `=`: Es el operador de igualdad.
*   `"USER_LOGIN"`: Es el valor que se busca para el campo `metadata.event_type`.
*   **Resultado:** Esta búsqueda devolverá todos los eventos que han sido normalizados y clasificados como un inicio de sesión de usuario.

### B. Campos UDM Comunes y Estructura

Los eventos UDM están estructurados y contienen varios campos que proporcionan contexto. Algunos grupos de campos importantes son:

| Grupo de Campos UDM      | Descripción                                                                                                                               | Ejemplos de Campos                                                               |
| :----------------------- | :---------------------------------------------------------------------------------------------------------------------------------------- | :------------------------------------------------------------------------------- |
| **Entidades (Entities)** | Proporcionan contexto sobre un dispositivo, usuario o proceso involucrado en un evento.                                                     | `principal.hostname`, `principal.user.userid`, `target.ip`, `src.process.file.full_path` |
| **Metadatos del Evento (Event Metadata)** | Contiene una descripción básica del evento.                                                                                    | `metadata.event_type`, `metadata.timestamp`, `metadata.product_log_id`           |
| **Metadatos de Red (Network Metadata)** | Información sobre eventos relacionados con la red y detalles del protocolo.                                                      | `network.ip_protocol`, `network.http.method`, `network.dns.questions.name`       |
| **Resultados de Seguridad (Security Results)** | Describe el resultado o la clasificación de seguridad de un evento, a menudo proveniente de una herramienta de seguridad. | `security_result.action`, `security_result.threat_name`, `security_result.severity` |

**Referencia Completa:**
Para una lista exhaustiva de todos los campos UDM y sus descripciones, consulta la documentación oficial: [Lista de campos UDM de Chronicle](https://cloud.google.com/chronicle/docs/reference/udm-field-reference).

## 3. Búsqueda de Registros Sin Procesar (Raw Log Search)

Si la información que necesitas no está disponible a través de los campos UDM normalizados, o si necesitas buscar una cadena de texto específica que podría no haber sido mapeada a un campo UDM, puedes realizar una búsqueda de registros sin procesar.

**Características de la Búsqueda de Registros Sin Procesar:**
*   Busca directamente en los logs originales sin analizar o normalizar.
*   Puede ser más lenta que una búsqueda UDM, especialmente en grandes volúmenes de datos.
*   Es útil para encontrar cadenas exactas, nombres de usuario, nombres de archivo, hashes, o cualquier texto que no se haya mapeado a UDM.
*   Soporta el uso de expresiones regulares (regex) para búsquedas de patrones complejos.

### A. Sintaxis Básica de Búsqueda de Registros Sin Procesar

Simplemente escribe el término o la frase que deseas buscar.

**Ejemplo de Búsqueda de Registro Sin Procesar:**
USER_LOGIN


**Interpretación del Ejemplo:**
*   Esta búsqueda intentará encontrar la cadena exacta "USER_LOGIN" en cualquier parte de los logs sin procesar.

**Ejemplo con Expresiones Regulares (Regex):**
Para buscar un patrón, como una dirección IP específica dentro de los logs sin procesar:
/192.168.1.\d+/

*   Esto buscaría cualquier IP que comience con `192.168.1.`

**Consejo Profesional:** Utiliza la búsqueda de registros sin procesar con moderación y sé lo más específico posible, o utiliza expresiones regulares para acotar los resultados y mejorar el rendimiento, ya que puede consumir muchos recursos.

## 4. Flujo de Trabajo de Búsqueda en Chronicle

1.  **Comienza con una Búsqueda UDM:** Siempre que sea posible, inicia tu investigación utilizando los campos UDM estructurados. Esto es más eficiente y aprovecha la normalización de datos.
    *   Ejemplo: `principal.hostname = "compromised-ws" AND metadata.event_type = "NETWORK_CONNECTION"`
2.  **Utiliza el Proceso de Filtrado (Procedural Filtering):** Después de una búsqueda inicial, usa el panel de filtros de Chronicle para refinar interactivamente tus resultados basándote en los campos UDM disponibles y sus valores.
3.  **Recurre a la Búsqueda de Registros Sin Procesar si es Necesario:** Si no encuentras lo que buscas con UDM, o necesitas buscar una cadena muy específica o un patrón con regex, cambia a la búsqueda de registros sin procesar.
4.  **Pivota y Expande tu Búsqueda:** Utiliza la información encontrada (IPs, nombres de host, usuarios) para realizar nuevas búsquedas y ampliar el alcance de tu investigación.

Comprender la diferencia entre estos dos tipos de búsqueda y cuándo utilizar cada uno es fundamental para realizar investigaciones de seguridad efectivas en Chronicle.