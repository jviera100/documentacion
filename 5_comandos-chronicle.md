Búsquedas en Chronicle
En Chronicle, puedes buscar eventos en el campo Search (Buscar) y, además, utilizar el menú Procedural Filtering (proceso de filtrado) para aplicar filtros y refinar aún más los resultados de búsqueda. Por ejemplo, puedes usarlo para incluir o excluir resultados de búsqueda que contengan información específica relacionada a un tipo de evento o una fuente de registro. Hay dos tipos de búsqueda que puedes realizar para encontrar eventos en Chronicle: una búsqueda de modelos de datos unificados (UDM) o una búsqueda de registro sin procesar.

Página de inicio de Chronicle.
Búsqueda de modelos de datos unificados (UDM)
Es el tipo de búsqueda predeterminado que se utiliza en Chronicle. Para hacer una búsqueda UDM, debes escribir lo que quieres buscar, hacer clic en "Search" (Buscar) y seleccionar "UDM Search" (Búsqueda UDM). Con este tipo de búsqueda, Chronicle busca datos de seguridad que se hayan ingerido, analizado y normalizado. Una búsqueda UDM recupera los resultados de búsqueda más rápido que una búsqueda de registro sin procesar, porque busca en datos indexados y estructurados que están normalizados en UDM.


Página de inicio de Chronicle.
Una búsqueda UDM recupera eventos formateados en UDM, que contienen campos UDM. Hay muchos tipos diferentes de campos UDM que se pueden usar para consultar información específica de un evento. En esta lectura no los analizaremos todos, pero si deseas obtener más información, puedes consultar la 
lista de campos UDM de Chronicle
. Todos los eventos UDM contienen un conjunto de campos comunes que incluyen:

Entidades: Se las conoce también como sustantivos. Todos los eventos UDM deben contener al menos una entidad. Este campo brinda contexto adicional sobre un dispositivo, usuario o proceso que está involucrado en un evento. Por ejemplo, un evento UDM que contiene información de entidad incluye los detalles del origen de un evento, como el nombre de host, el nombre de usuario y la dirección IP del evento.

Metadatos del evento: Brinda una descripción básica de un evento, incluidos el tipo de evento, las marcas de tiempo y demás. 

Metadatos de red: Proporciona información sobre eventos relacionados con la red y detalles del protocolo. 

Resultados de seguridad: Indica el resultado relacionado con la seguridad de los eventos. Un ejemplo de un resultado de seguridad puede ser un software antivirus que detecta y pone en cuarentena un archivo malicioso e informa: "virus detectado y en cuarentena". 

A continuación, podrás ver un ejemplo de una búsqueda UDM simple que utiliza el campo de metadatos de eventos para localizar eventos relacionados con los inicios de sesión de los usuarios:

metadata.event_type = “USER_LOGIN” 

metadata.event_type = “USER_LOGIN”: El campo UDM metadata.event_type contiene información sobre el tipo del evento. Esto incluye información como marca de tiempo, conexión de red, autenticación de usuario y demás. Aquí, el tipo de evento especifica USER_LOGIN, que busca eventos relacionados con la autenticación. 

Si usas solo campos de metadatos, puedes comenzar rápidamente a buscar eventos. Mientras sigues practicando la búsqueda en Chronicle con UDM Search, irás encontrando más campos. Prueba usar estos campos para realizar búsquedas específicas con el fin de localizar diferentes eventos.

Búsqueda de registros sin procesar 
Si no puedes encontrar la información que necesitas en los datos normalizados, puedes usar una búsqueda de registros sin procesar, que te permitirá buscar en los registros sin analizar. Para realizar una búsqueda de registros sin procesar, deberás escribir lo que quieres buscar, hacer clic en "Search" (Buscar) y seleccionar "Raw Log Search" (Búsqueda de registro sin procesar). Buscar en registros sin procesar, lleva más tiempo que una búsqueda estructurada. En el campo Search (Buscar), puedes hacer una búsqueda de registro sin procesar si especificas información, como nombres de usuario, nombres de archivo, hashes y demás. Chronicle recuperará los eventos asociados con la búsqueda.

Consejo profesional: La búsqueda de registro sin procesar admite el uso de expresiones regulares, lo que puede ayudarte a acotar una búsqueda para que coincida con patrones específicos.