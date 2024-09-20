Búsquedas de Splunk
Como has aprendido, Splunk tiene su propio lenguaje de consulta, denominado Search Processing Language (SPL) (lenguaje de procesamiento de búsqueda) que se utiliza para buscar y recuperar eventos de índices mediante la aplicación de búsqueda e informes de la herramienta. Una búsqueda SPL puede contener muchos comandos y argumentos diferentes. Por ejemplo, puedes usar comandos para transformar los resultados de búsqueda en un formato de gráfico o filtrar los resultados para obtener información específica. 

Página de búsqueda de Splunk Cloud.
Este es un ejemplo de una búsqueda SPL básica que está consultando un índice para un evento fallido:

index=main fail 

index=main: Es el comienzo del comando de búsqueda que le dice a Splunk que recupere eventos de un index (índice) llamado main. 

fail: Es el término de búsqueda. Le dice a Splunk que devuelva los eventos que contengan el término fail.

Saber cómo usar el SPL de manera efectiva tiene muchos beneficios. Ayuda a acortar el tiempo que se tarda en devolver los resultados de búsqueda y también a obtener los resultados exactos que necesitas de varias fuentes de datos. El SPL admite muchos tipos diferentes de búsquedas que no se incluyen en esta lectura. Si quieres conocer más sobre SPL, puedes consultar la 
Referencia de búsqueda de Splunk
.

Pipe
Es posible que ya conozcas cómo se utiliza el comando pipe en Bash de Linux. A modo de repaso, el comando pipe envía la salida de un comando como entrada a otro comando.

SPL también utiliza la barra vertical o pleca | para separar los comandos individuales en la búsqueda y para encadenar comandos juntos, de forma tal que la salida de un comando se combine en el siguiente comando. Esto es útil porque te permite refinar los datos de varias maneras para obtener los resultados que necesitas, con un solo comando.

Aquí podrás observar un ejemplo de dos comandos separados por una pleca: 

index=main fail| chart count by host

index=main fail: Es el comienzo del comando de búsqueda que le dice a Splunk que recupere eventos de un index (índice) llamado main para eventos que contienen el término de búsqueda fail. 

|: La pleca separa y encadena los dos comandos index=main y chart count by host. Esto significa que la salida del primer comando index=main se usa como la entrada del segundo comando chart count by host. 

chart count by host: Este comando le dice a Splunk que transforme los resultados de búsqueda creando un chart (gráfico) de acuerdo con el count (recuento) o la cantidad de eventos. El argumento by host le dice a Splunk que enumere los eventos por host, que son los nombres de los dispositivos de los que provienen los eventos. Este comando puede ser útil para identificar hosts con recuentos excesivos de errores en un entorno.

Comodín
El comodín es un carácter especial que se puede sustituir por cualquier otro. Se suele simbolizar con un carácter de asterisco *. Los comodines coinciden con los caracteres en los valores de una cadena. En Splunk, el comodín que uses depende del comando con el que lo estés usando. Los comodines son útiles porque pueden ayudar a encontrar eventos que contienen datos similares, pero no completamente idénticos. A continuación, verás un ejemplo de uso de un comodín para expandir los resultados de búsqueda de un término de búsqueda:

index=main fail*

index=main: Este comando recupera eventos de un index (índice) llamado main. 

fail*: El comodín después de fail representa cualquier carácter. Le dice a Splunk que busque todas las terminaciones posibles que contengan el término fail. Esto expande los resultados de búsqueda y devolverá eventos que contengan el término fail, como "failed" o "failure".

Consejo profesional: Las comillas dobles se utilizan para especificar la búsqueda de una frase o cadena exacta. Por ejemplo, si solo quieres buscar eventos que contengan la frase exacta login failure (error de inicio de sesión), puedes colocar la frase entre comillas dobles "login failure". Esta búsqueda coincidirá solo con eventos que contengan la frase exacta login failure y no con otros eventos que contengan las palabras failure o login por separado.