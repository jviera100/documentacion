### Búsquedas en Chronicle

En Chronicle, puedes buscar eventos en el campo **Search (Buscar)** y utilizar el menú **Procedural Filtering (Proceso de Filtrado)** para aplicar filtros y refinar los resultados de búsqueda. Hay dos tipos principales de búsqueda que puedes realizar:

1. **Búsqueda de Modelos de Datos Unificados (UDM)**
2. **Búsqueda de Registro Sin Procesar**

### 1. Búsqueda de Modelos de Datos Unificados (UDM)

Es el tipo de búsqueda predeterminado en Chronicle. Se utiliza para buscar datos de seguridad ingeridos, analizados y normalizados, proporcionando resultados más rápidos que una búsqueda de registro sin procesar.

**Ejemplo de Búsqueda UDM**:
```plaintext
metadata.event_type = "USER_LOGIN"
```

- **metadata.event_type = "USER_LOGIN"**: Busca eventos relacionados con la autenticación de usuarios, utilizando el campo de metadatos de eventos.

**Campos Comunes en Eventos UDM**:
- **Entidades**: Proporcionan contexto adicional sobre un dispositivo, usuario o proceso involucrado en un evento (nombre de host, nombre de usuario, dirección IP, etc.).
- **Metadatos del Evento**: Descripción básica del evento (tipo de evento, marcas de tiempo, etc.).
- **Metadatos de Red**: Información sobre eventos relacionados con la red y detalles del protocolo.
- **Resultados de Seguridad**: Resultado relacionado con la seguridad de los eventos (por ejemplo, "virus detectado y en cuarentena").

Para más información, puedes consultar la [lista de campos UDM de Chronicle](https://cloud.google.com/chronicle/docs/reference/udm-field-reference).

### 2. Búsqueda de Registros Sin Procesar

Si no encuentras la información necesaria en los datos normalizados, puedes realizar una búsqueda de registros sin procesar, buscando en los registros sin analizar.

**Ejemplo de Búsqueda de Registro Sin Procesar**:
```plaintext
USER_LOGIN
```

- **Buscar en Registros Sin Procesar**: Lleva más tiempo que una búsqueda estructurada. Puedes buscar nombres de usuario, nombres de archivo, hashes, etc.

**Consejo Profesional**: La búsqueda de registro sin procesar admite el uso de expresiones regulares, lo que te ayuda a acotar la búsqueda para que coincida con patrones específicos.

