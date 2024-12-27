

### Búsquedas de Splunk

Splunk utiliza su propio lenguaje de consulta, denominado **Search Processing Language (SPL)**, para buscar y recuperar eventos de índices mediante la aplicación de búsqueda e informes de la herramienta. Una búsqueda SPL puede contener muchos comandos y argumentos diferentes, permitiendo transformar resultados de búsqueda en gráficos o filtrar resultados para obtener información específica.

#### 1. Ejemplo de Búsqueda SPL Básica:
```spl
index=main fail
```
- **index=main**: Comienzo del comando de búsqueda, indica a Splunk que recupere eventos de un índice llamado "main".
- **fail**: Término de búsqueda, indica a Splunk que devuelva eventos que contengan el término "fail".

Saber usar el SPL de manera efectiva tiene muchos beneficios, como acortar el tiempo para devolver resultados de búsqueda y obtener exactamente los resultados necesarios de varias fuentes de datos.

#### 2. Pipe
Splunk también utiliza la barra vertical o pleca `|` para separar los comandos individuales en la búsqueda y encadenarlos. Esto permite refinar los datos de varias maneras con un solo comando.

##### Ejemplo de Uso de Pipe:
```spl
index=main fail | chart count by host
```
- **index=main fail**: Comienzo del comando de búsqueda, recupera eventos de un índice "main" para eventos que contienen "fail".
- **|**: La pleca separa y encadena los comandos.
- **chart count by host**: Transforma los resultados de búsqueda creando un gráfico de acuerdo con el recuento de eventos por host (dispositivos de donde provienen los eventos). Útil para identificar hosts con recuentos excesivos de errores.

#### 3. Comodín
Un comodín es un carácter especial (asterisco `*`) que se puede sustituir por cualquier otro. En Splunk, los comodines son útiles para encontrar eventos con datos similares pero no idénticos.

##### Ejemplo de Uso de Comodín:
```spl
index=main fail*
```
- **index=main**: Recupera eventos de un índice llamado "main".
- **fail***: El comodín después de "fail" representa cualquier carácter, indicando a Splunk que busque todas las terminaciones posibles que contengan "fail" (por ejemplo, "failed" o "failure").

#### 4. Consejos Profesionales:
**Consejo profesional**: Las comillas dobles se utilizan para especificar la búsqueda de una frase o cadena exacta. Por ejemplo, para buscar eventos que contengan la frase exacta "login failure":
```spl
"login failure"
```
Esta búsqueda coincidirá solo con eventos que contengan la frase exacta "login failure" y no con otros eventos que contengan "failure" o "login" por separado.

