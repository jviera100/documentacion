### Resumen sobre Primeras Tablas en Power BI:

1. **Importación y actualización de datos en Power BI**
   - **Rangos, tablas y hojas**: Al importar datos desde Excel, puedes cargar un rango de celdas, tablas con nombre o directamente desde la hoja de Excel. Es recomendable convertir los rangos en tablas para facilitar la actualización automática.
   - **Crear una tabla en Excel**:
     - Selecciona los datos en Excel y ve a la pestaña Insertar > Tabla.
     - Asegúrate de marcar la opción Mi tabla tiene encabezados.
     - Asigna un nombre único a la tabla en la pestaña Diseño de tabla (por ejemplo, Ventas2025).
   - **Actualizar datos**: Cuando añades nuevos datos dentro de la tabla en Excel, Power BI los reflejará automáticamente en el informe sin necesidad de volver a cargar el archivo, siempre que hayas asignado un nombre a la tabla.

2. **Tipos de formato de datos en Power BI**
   - **Detección del tipo de dato**: Power BI detecta automáticamente el tipo de dato de cada columna (texto, numérico, fecha) según los datos del archivo de origen. Este tipo de dato se puede modificar, pero se recomienda hacerlo mediante Power Query.
   - **Formato de columnas**: Puedes ajustar el formato de las columnas numéricas desde la ficha Herramientas de columnas (ej. asignar formato de moneda o fecha).

3. **Creación de formatos personalizados**
   - **Caracteres de formato**:
     - `0`: Muestra siempre un número, incluso si es 0.
     - `#`: Muestra el número solo si hay valor; de lo contrario, omite esa posición.
     - `""` (comillas dobles): Puedes añadir texto estático al formato numérico o de fecha, como " horas".
   - **Ejemplo de formato práctico**:
     - `# ,##0" horas"`: Muestra el número con separadores de miles y agrega "horas" al final.
     - `#,##0.00" horas"`: Muestra el número con separadores de miles y dos decimales con "horas" al final.
     - `#,##0,00" Eur."`: Muestra el número con separadores de miles, dos decimales y añade "Eur." al final.

4. **Eliminar formatos existentes**
   - Para eliminar un formato previamente aplicado a una columna:
     - Selecciona la columna, ve al cuadro de formato y elimina el formato actual.
     - Luego, puedes escribir el nuevo formato personalizado que deseas aplicar.

5. **Importancia de la opción de carga y transformación**
   - Cuando importas datos, selecciona correctamente si deseas cargar o transformar los datos para asegurarte de que se procesen y ajusten correctamente en Power BI.

6. **Formatos numéricos**
   - **Caracteres de formato**:
     - `0`: Muestra siempre un número, incluso si es 0.
     - `#`: Omite los ceros innecesarios.
     - `,`: Separador de miles.
     - `.`: Separador decimal.
   - **Ejemplos de formato**:
     - `#,##0`: Muestra números con separador de miles y sin decimales.
     - `#,##0.00`: Muestra números con separador de miles y dos decimales.
     - `#,##0 "horas"`: Muestra números con separador de miles y añade "horas" al final.

7. **Formatos personalizados de fecha**
   - **Caracteres de formato para fechas**:
     - `d`: Muestra el día del mes (uno o dos dígitos).
     - `dd`: Muestra el día con dos dígitos (01, 02, etc.).
     - `ddd`: Muestra las iniciales del día (lun, mar, mié...).
     - `dddd`: Muestra el nombre completo del día (lunes, martes, etc.).
     - `m`: Muestra el mes en un dígito.
     - `mmmm`: Muestra el mes completo (enero, febrero, etc.).
     - `yyyy`: Muestra el año con cuatro dígitos.
   - **Ejemplos de formatos de fecha**:
     - `dddd, dd "de" mmmm "de" yyyy`: Muestra la fecha como "lunes, 10 de agosto de 2022".
     - `dddd, dd`: Muestra solo el nombre del día y el número del día (como "lunes, 10").
     - `dd/mm/yyyy`: Muestra el día, mes y año en formato numérico (como "10/08/2022").
     - `el dddd, dd "de" mmmm "de" yyyy`: Muestra la fecha en formato extendido comenzando con "el".

### Resumen sobre Primeros Informes en Power BI:

1. **Creación de Informes**
   - En Power BI, se trabaja en la vista de informe seleccionando visualizaciones desde el panel de visualizaciones.
   - Luego, asignas los campos correspondientes en las áreas disponibles del informe.

2. **Tablas**
   - Las tablas son visualizaciones comunes para mostrar datos en formato escrito.
   - **Para crear una tabla**:
     - Selecciona el icono de `TABLA` en el panel de visualizaciones.
     - Arrastra los campos a la zona de `COLUMNAS`.
     - Los campos de texto se agrupan automáticamente y los campos numéricos se totalizan por defecto.

3. **Matrices**
   - Las matrices permiten mostrar datos en una estructura compleja utilizando filas, columnas y valores.
   - **Para crear una matriz**:
     - Selecciona el icono de `MATRIZ` en el panel de visualizaciones.
     - Asigna los campos a las áreas de `FILAS`, `COLUMNAS` y `VALORES`.

### Resumen sobre Operaciones Básicas con los Campos en Power BI:

1. **Eliminar Campos**
   - Para eliminar un campo de informe, haz clic en la `X` al lado del campo en el panel de visualizaciones.

2. **Ordenar Datos**
   - Puedes ordenar los datos de tu informe, seleccionando más opciones y luego eligiendo la opción de ordenar.

3. **Campos de Totales**
   - Puedes agregar el mismo campo varias veces a la matriz o tabla para aplicar diferentes funciones de resumen (Suma, Promedio, Porcentaje).
   - Cambia la función de resumen de un campo haciendo clic en la flecha hacia abajo junto al campo y seleccionando entre las opciones disponibles.

4. **Mostrar Valor Como**
   - Para mostrar los valores como porcentaje (ej. porcentaje sobre el total), selecciona `Mostrar valor como` y elige la opción `Porcentaje del total general`.

### **Agregar el Campo de "Duración" Varias Veces**:

1. **Primero**, agrega el campo `Duración` al área de `Valores`.
2. **Luego**, agrega el mismo campo `Duración` nuevamente al área de `Valores`.
3. **Cambia la función de resumen** para cada campo de `Duración`:
   - Para el primer campo, deja la `Suma`.
   - Para el segundo campo, selecciona `Promedio`.
   - Para el tercer campo, selecciona `Porcentaje del Total General`.

### **Resultado Final**:
Verás tres columnas:
- **Suma de Duración** (total)
- **Promedio de Duración**
- **Porcentaje del Total General de Duración**

### **Ocultar Columnas y Cambiar Nombres de Campos**:

1. **Cambiar el nombre de los campos**: Haz doble clic en el nombre de la columna en la visualización y cambia el nombre (ej. de `Suma de Duración` a `Total Horas`).
2. **Ocultar campos**: En la vista de tabla, expande los campos del panel de datos y haz clic en el icono de ojo junto al campo que deseas ocultar. Para mostrarlo nuevamente, haz clic en el ícono del ojo para hacerlo visible.

### **Agregar un Segundo Informe de Matriz**:

1. En el primer informe, utiliza tres campos: `Cliente` en `Filas`, `Jornadas` (Mañana, Tarde, Noche) en `Columnas`, y `Suma Duración` en `Valores`.
2. En el segundo informe, utiliza `Curso` en `Filas` y `Duración` (Suma) en `Valores`, mostrando solo el total sin las jornadas.

### Cambio de Función Predeterminada de un Campo

**Función predeterminada**: Los campos numéricos en Power BI se resumen por defecto con la función SUMA cuando se agregan al área de totalización.

**Cambiar la función predeterminada**: Si deseas cambiar la función de resumen (por ejemplo, a PROMEDIO, RECUENTO, etc.), selecciona el campo en el panel de datos, ve a Herramientas de columnas, y en Propiedades, elige la opción Resumen. Luego, selecciona la función que desees (como NO RESUMIR si no quieres ningún resumen).

### Instrucciones detalladas: Interacción y Formato en Power BI

Power BI permite filtrar datos automáticamente al hacer clic en un elemento de una visualización y también personalizar el formato de tablas y matrices. Sigue estos pasos para lograrlo:

1. **Aplicar filtros automáticos en un informe**
   - Abrir un informe en Power BI.
   - Seleccionar un elemento en una tabla o matriz:
     - Haz clic en un cliente dentro de una matriz (ej. CLIENTE-002).
     - Observa cómo el resto de las visualizaciones en la página se filtran para mostrar solo los datos relacionados con ese cliente.
   - Verificar el filtro aplicado:
     - Pasa el cursor sobre el ícono de filtro en la tabla para ver los criterios aplicados.
   - Quitar el filtro:
     - Haz clic nuevamente sobre el mismo elemento para eliminar el filtro y restaurar la visualización original.

2. **Modificar el formato de tablas y matrices**
   - Para cambiar el estilo de encabezados y valores en una tabla o matriz:
     - Seleccionar la visualización (Tabla o Matriz) en el informe.
     - Ir a la pestaña "Visualización" en el panel derecho.
     - Hacer clic en "Dar formato a su objeto visual" (icono de brocha).

   - Modificar el formato de la tabla de clientes:
     - **Encabezados**:
       - Expandir la sección "Encabezados de columna" y activar "Negrita".
       - Alinear el texto en "Centrado".
     - **Valores**:
       - Expandir la sección "Valores" y activar "Cursiva".
     - **Fila de Totales**:
       - Expandir la sección "Totales" y escribir: "TOTALES CLIENTE".

   - Modificar el formato de la matriz:
     - **Encabezados de columna**:
       - Expandir la sección "Encabezados de columna" y activar "Negrita".
     - **Encabezados de fila**:
       - Expandir la sección "Encabezados de fila" y activar "Negrita y cursiva".

3. **Aplicar un filtro por provincia en los informes**
   - Seleccionar la tabla o matriz donde aparece la provincia.
   - Hacer clic sobre "ALICANTE" en la lista de provincias.
   - Todas las visualizaciones en la página se filtrarán para mostrar solo los datos relacionados con Alicante.
   - Verificar el filtro:
     - Pasa el cursor sobre el ícono de filtro en cualquier tabla para ver el criterio aplicado.
   - Para quitar el filtro, hacer clic nuevamente en "ALICANTE".

4. **Guardar los cambios**
   - Ir a Archivo > Guardar.
   - Cerrar el archivo si no se requieren más cambios.

Con estos pasos, podrás personalizar el formato de tablas y matrices, aplicar filtros interactivos y mejorar la visualización de los datos en Power BI. 🚀

### Resumen: Uso de Segmentaciones de Datos en Power BI

Las segmentaciones de datos permiten filtrar todas las visualizaciones de una página en Power BI mediante la selección de un único campo.

**Cómo aplicar una segmentación de datos**
- Abrir el archivo BD CURSOS en Power BI y entrar en la vista de informe.
- **Agregar una segmentación de datos**:
  - Ir al panel de visualizaciones.
  - Seleccionar Segmentación de datos.
  - En el área CAMPO, agregar el campo PAÍS.
- **Aplicar un filtro**:
  - Aparecerá una lista de opciones con casillas de verificación.
  - Marcar "ESPAÑA" para filtrar la tabla y la matriz con ese valor.
- **Seleccionar múltiples valores**:
  - Mantener presionada la tecla CTRL y hacer clic en otros elementos para añadir más filtros.

**Configuraciones clave de formato en la segmentación**:
- **Configuración de la segmentación**: Personaliza la apariencia y el comportamiento del filtro.
- **Valores**: Modifica cómo se muestran los datos en la segmentación.

Con esto, puedes aplicar filtros dinámicos a los informes y mejorar la visualización de datos en Power BI.

# Resumen: Uso de Tarjetas en Power BI
Las tarjetas en Power BI son elementos visuales que muestran un único valor totalizado a partir de un campo.

### Cómo crear y configurar una tarjeta

**Insertar una tarjeta:**
- Ir al panel de visualizaciones.
- Seleccionar Tarjeta.

**Asignar un campo:**
- En el área CAMPOS, agregar el campo que se desea totalizar (ejemplo: curso).
- Aplicar la función de resumen **RECUENTO** para contar el total de cursos.

**Aplicar filtros:**
- La tarjeta refleja los filtros aplicados en la página (ejemplo: filtrar por ESPAÑA en el campo PAÍS).

**Personalizar el nombre del campo totalizado:**
- Cambiar el nombre del campo en la configuración para que en la tarjeta aparezca como TOTAL CURSOS.

**Propiedades de formato de la tarjeta:**
- Color de fondo
- Borde
- Sombra

Estas opciones se encuentran en la pestaña GENERAL dentro de las propiedades de formato.

📌 **Nota:** La tarjeta no emite filtros sobre otras visualizaciones, pero sí recibe filtros de otros elementos del informe.

# Resumen: Uso de Gráficos en Power BI
Los gráficos en Power BI permiten visualizar datos de manera clara y estructurada. Existen varios tipos, entre ellos gráficos de barras y gráficos de columnas.

### Diferencia entre gráficos de barras y columnas:

**Gráfico de barras:**
- Crecen sobre el eje horizontal (X).
- El campo totalizado se coloca en X y el campo agrupador en Y.

**Gráfico de columnas:**
- Crecen sobre el eje vertical (Y).
- El campo totalizado se coloca en Y y el campo agrupador en X.

### Cómo crear un gráfico de barras agrupadas:

**Insertar gráfico:**
- Seleccionar el ícono de Gráfico de barras agrupadas en el panel de visualizaciones.

**Asignar campos:**
- **EJE Y:** CURSO
- **EJE X:** DURACIÓN
- **LEYENDA:** JORNADA CURSO

**Interacción con filtros:**
- Los gráficos se actualizan automáticamente según los filtros aplicados en la página.
- Al seleccionar un elemento en el gráfico, se filtrarán las demás visualizaciones.

**Cambio de tipo de gráfico:**
- Para cambiar de barras a columnas apiladas, seleccionar el gráfico y hacer clic en Gráfico de columnas apiladas en el panel de visualizaciones.
- Al cambiar a columnas, la SUMA DE DURACIÓN pasa al EJE Y, y CURSO al EJE X.

📌 **Nota:** Los gráficos interactúan entre sí y con otros informes en la página, permitiendo análisis dinámicos y filtrados específicos.

# Resumen: Uso de Gráficos de Columnas y Líneas en Power BI
Los gráficos de columnas y líneas permiten visualizar dos conjuntos de datos con valores significativamente diferentes en un mismo gráfico, utilizando dos ejes verticales:

- **Eje principal (Y de columnas):** Para valores altos.
- **Eje secundario (Y de líneas):** Para valores bajos.

### Ejemplo práctico:

Se desea representar:
- Suma de la duración de cada curso.
- Número de cursos segmentado por Jornada Curso.

**Para ello:**

**Insertar un gráfico de columnas apiladas y líneas.**

**Asignar los campos:**
- **EJE X:** CURSO
- **EJE Y de COLUMNA:** SUMA DE DURACIÓN (valores altos)
- **EJE Y de LÍNEA:** RECUENTO DE CURSO (valores bajos)
- **LEYENDA:** JORNADA CURSO

### Diferencia con el gráfico de columnas agrupadas y líneas:
- **Columnas apiladas:** La información de cada curso se divide dentro de la misma columna según la jornada.
- **Columnas agrupadas:** Cada jornada tiene su propia columna independiente dentro del mismo eje.

📌 **Nota:** Este tipo de gráfico es útil cuando se comparan dos métricas relacionadas, pero con escalas de valores diferentes.

# Resumen: Uso de Gráficos Circulares y Anillos en Power BI
Los gráficos circulares permiten representar visualmente la distribución de un solo campo sin necesidad de ejes. Se utilizan para mostrar proporciones y comparaciones dentro de un conjunto de datos.

### Ejemplo práctico:

Se desea visualizar el número de cursos por Jornada Curso en un gráfico circular.

**Insertar un gráfico circular y agregar los campos:**
- **LEYENDA:** JORNADA CURSO
- **VALORES:** RECUENTO DE CURSO

Cada segmento del gráfico representa una jornada, mostrando tanto la cantidad de cursos como su porcentaje.

### Gráfico de anillos

Es una alternativa al gráfico circular con una apariencia diferente, pero muestra la misma información.

### Propiedades de formato más comunes:
- **COLUMNAS/BARRAS:** Configuración de series en gráficos de barras o columnas.
- **SEGMENTOS:** Ajustes para gráficos circulares.
- **LEYENDA:** Opciones para formatear, mover o quitar la leyenda.
- **ETIQUETAS DE DATOS:** Para mostrar y personalizar los valores de cada serie.

📌 **Nota:** Los gráficos circulares y de anillos son útiles para representar proporciones dentro de un conjunto de datos, pero deben usarse con pocos valores para mantener la claridad visual.

# Resumen: Uso del Panel de Filtros en Power BI
El Panel de Filtros permite aplicar filtros a diferentes niveles dentro de un informe de Power BI:

- **Filtros de este objeto visual →** Afecta solo al gráfico, tabla o matriz seleccionada.
- **Filtros de esta página →** Afecta a todos los informes en la misma página.
- **Filtros de todas las páginas →** Afecta a todos los informes en todas las páginas del archivo.

### Ejemplo práctico:

1. Abrir el archivo BD CURSOS en Power BI.
2. Crear una nueva página llamada FILTROS.
3. Insertar una tabla con el campo CURSO, configurándolo como:
   - Agrupado
   - Recuento (para contar el número de cursos)
4. Abrir el Panel de Filtros y observar las tres áreas disponibles para aplicar filtros.

📌 **Nota:** Los filtros pueden aplicarse sobre cualquier tipo de informe (gráficos, tablas, matrices) y se configuran de la misma manera en todas las áreas del panel de filtros.

# 8.1. Filtros Básicos en Power BI
Los filtros básicos se utilizan para filtrar los elementos de un campo específico en un informe. Aquí te dejo los pasos clave para utilizar filtros básicos en Power BI:

### Aplicar Filtros a Elementos Específicos:
- Para mostrar solo los cursos de WORD, EXCEL y ACCESS, selecciona el informe y expande los filtros del campo CURSO.
- Marca los elementos que deseas mostrar en el informe.

### Eliminar Filtros:
- En el encabezado del grupo de filtro del campo CURSO, selecciona el botón BORRAR FILTRO para eliminar el filtro.

### Contraer Opciones de Filtro:
- Para contraer las opciones de filtro del campo CURSO, ubícate en el panel a la derecha del grupo de filtro del campo y pulsa el botón CONTRAER.

### Filtrar por Campos No Agregados al Informe:
- Puedes filtrar por campos que no están agregados al informe. Por ejemplo, para filtrar cursos en JORNADA CURSO de TARDE, agrega el campo JORNADA CURSO al área AGREGAR CAMPOS DE DATOS en los filtros del objeto visual y selecciona el elemento TARDE.

### Eliminar Campos Agregados al Panel de Filtros:
- Si deseas quitar un campo del panel de filtros, selecciona el botón QUITAR sobre el nombre del campo en el panel de filtros. Esto también eliminará el filtro aplicado.

# 8.2. Filtros en Campos Totalizados en Power BI
Los filtros en campos totalizados te permiten filtrar datos basados en cantidades numéricas utilizando comparadores. Aquí están los pasos clave para aplicar estos filtros:

### Aplicar Filtros a Campos Totalizados:
- Selecciona el informe y ve al panel de filtros.
- Expande los filtros del campo RECUENTO DE CURSO.
- En el comparador, selecciona la opción ES MAYOR QUE y compara con el valor 50.
- Pulsa la opción APLICAR FILTRO.

### Resultado del Filtro:
- El filtro aplicado mostrará únicamente los cursos donde el recuento es mayor a 50. En este ejemplo, la tabla mostrará 3 cursos.

### Eliminar el Filtro Aplicado:
- Para borrar el filtro aplicado al campo, selecciona la opción adecuada en el panel de filtros.

# 8.3. Filtros TOP N en Power BI
Los filtros TOP N se utilizan para resaltar los valores más altos o más bajos de un campo. Aquí están los pasos clave para aplicar estos filtros:

### Aplicar Filtros TOP N:
- En el panel de filtros del objeto visual, expande los filtros del campo CURSO y selecciona el tipo de filtro TOP N.
- Indica si quieres los valores más altos (SUPERIOR) o más bajos (INFERIOR) y el número de valores que deseas mostrar. En este caso, selecciona los 3 inferiores.
- Arrastra al área POR VALOR del panel de filtro el campo RECUENTO DE CURSO.

### Aplicar el Filtro:
- Pulsa la opción APLICAR FILTRO y verás en la tabla los 3 cursos que menos veces se han dado.

### Eliminar y Contraer el Filtro:
- Borra el filtro aplicado y contrae el filtro del campo CURSO.

### Práctica 6: Insertar Gráfico de Barras Agrupadas
- **Eje Y:** CLIENTE
- **Eje X:** SUMA DE IMPORTE CLIENTE
- Filtrar el gráfico por los dos clientes de ESPAÑA con la suma del importe cliente más alta.
- Guardar los cambios y cerrar el fichero.

# 9. Formatos Condicionales en Power BI
Los formatos condicionales permiten resaltar valores específicos en una matriz o tabla para llamar la atención sobre datos importantes. Aquí están los puntos clave:

### Aplicación del Formato Condicional:
- En una matriz, solo se puede aplicar a los campos del área de valores.
- En una tabla, se puede aplicar a todos los campos, tanto totalizados como agrupados.

### Tipos Principales de Formato Condicional:

**Formato de Fondo y Fuente:**
- Permite resaltar el color de relleno de los datos (fondo) y el color de la fuente (letra).
- Ejemplo: Para resaltar en rojo la SUMA DE DURACION cuando el valor es menor de 1000, selecciona el campo, elige FORMATO CONDICIONAL/COLOR DE FONDO, y establece una regla.

### Pasos para Aplicar Formatos Condicionales:

**Seleccionar Estilo de Formato:**
- Usar REGLAS para establecer condiciones específicas o DEGRADADO para una escala de colores.

**Definir la Condición:**
- Ejemplo: Resaltar valores menores de 1000, se configura entre 0% y 1000.

**Agregar Nuevas Reglas:**
- Puedes seguir agregando nuevas reglas utilizando el botón NUEVA REGLA.

**Eliminar y Modificar Reglas:**
- Para eliminar una regla o cambiar su orden, usa los botones a la derecha de la regla.

### Práctica 7: Formato Condicional:
- Aplicar un formato condicional al campo CURSO para poner la fuente en color azul de los cursos cuya SUMA DE DURACION es mayor de 1200.

### Ten en Cuenta:
- Los formatos condicionales se aplican igual a las matrices, pero solo a los campos del área de valores. Los campos de fila y columnas no tienen esta propiedad.

# 9.1. Formato de Barras de Datos en Power BI
El formato de barras de datos se utiliza para mostrar una barra en cada valor, donde la longitud de la barra representa la magnitud del dato. A continuación, se detallan los pasos clave para aplicar este formato condicional:

### Condiciones para Aplicar el Formato de Barras de Datos:
- Este formato solo se puede aplicar a campos totalizados.
- En una tabla, no se puede aplicar a un campo por el que agrupamos, pero en una matriz sí se puede aplicar al campo en el área de valores.

### Insertar una Nueva Tabla:
- Inserta una nueva tabla en el fichero BD CURSOS que cuente cuántas veces se ha dado cada curso.

### Configurar el Formato de Barras de Datos:
- Ve a las propiedades del campo RECUENTO DE CURSO.
- Selecciona la opción FORMATO CONDICIONAL/BARRA DE DATOS.
- Configura el color de la barra para valores positivos (y negativos, si los hay). También configura el color del eje si hay valores negativos, ya que los valores positivos irán hacia la derecha del eje y los negativos hacia la izquierda.
- Decide si solo quieres mostrar la barra o el dato y la barra juntos.

### Aplicar el Formato:
- Al aceptar, verás una barra en cada recuento de curso, indicando si el valor es alto, medio o bajo.

# 9.2. Formato de Iconos en Power BI
El formato de iconos se utiliza para marcar objetivos y, mediante iconos, visualizar los datos que no alcanzan, cumplen o superan dichos objetivos. Aquí están los puntos clave:

### Aplicación del Formato de Iconos:
- Este formato condicional se puede aplicar tanto al campo por el que agrupamos en la tabla como al que totalizamos. En las matrices, solo se aplica al campo del área de valores.

### Configurar Objetivos:
- Inserta una tabla que sume el importe cliente de cada cliente.
- Define el objetivo: la SUMA DE IMPORTE CLIENTE debe estar entre 20.000 y 60.000.
- Usa iconos para representar los datos:
  - Por debajo de 20.000: icono que indica que no se llega al objetivo.
  - Entre 20.000 y 60.000: icono que indica que se cumple el objetivo.
  - Por encima de 60.000: icono que indica que se supera el objetivo.

### Aplicar Formato de Iconos:
- Ve a la propiedad FORMATO CONDICIONAL del campo SUMA DE IMPORTE CLIENTE y selecciona ICONOS.
- Configura las reglas para cada rango de valores:
  - Valores por debajo del objetivo.
  - Valores que logran el objetivo.
  - Valores que superan el objetivo.
- Ajusta los iconos según tus preferencias.

### Resultado:
- El resultado mostrado en la tabla indicará con iconos si los valores están por debajo, dentro o por encima del objetivo establecido.

# 10. Introducción a Power Query en Power BI
Power Query es el motor que envía los datos a Power BI. Aunque normalmente importamos datos a través de Power BI, también podemos hacerlo a través de Power Query, donde los datos quedan guardados. Aquí están los puntos clave:

### Función de Power Query:
- Power Query maneja los datos con los que trabajamos en Power BI.
- Power BI se utiliza para graficar y formatear esos datos.

### Acceso a Power Query:
- Ve a la ficha INICIO en el fichero BD CURSOS de Power BI.
- En el grupo de botones CONSULTAS, selecciona el botón TRANSFORMAR DATOS.

### Componentes de la Ventana de Power Query:
- **Cinta de Opciones:** Contiene las fichas ARCHIVO, INICIO, TRANSFORMAR, AGREGAR COLUMNA, VISTA, HERRAMIENTAS y AYUDA.
- **Panel de Consultas:** Donde se agregan las tablas importadas desde Power BI (ej., la tabla T_CURSOS).
- **Panel de Contenido:** Muestra el contenido de la tabla seleccionada, incluyendo campos y registros.
- **Panel de Pasos:** Muestra los pasos aplicados sobre la tabla y permite cambiar el nombre de la tabla. No hay botón de deshacer; los pasos incorrectos deben eliminarse manualmente.

### Tipos de Datos y Filtros:
- El tipo de dato se hereda del fichero de origen y se puede cambiar si los valores son compatibles.
- Los filtros aplicados en Power Query afectan a cómo se graficarán los datos en Power BI.

### Actualización y Pasos:
- Cada operación en el panel de contenido se agrega al panel de pasos.
- Cada vez que se actualiza el fichero, Power Query recorre los pasos en orden.

### Recuerda:
- Cada vez que actualicemos nuestro fichero en Power BI, Power Query recorrerá los pasos en el orden configurado y nos mostrará el estado de la tabla en ese paso.

# 10.1. Pasos Iniciales en Power Query
Al cargar una tabla en Power Query desde Power BI, se generan automáticamente tres pasos en el panel de pasos:

### Origen:
- Muestra la ruta del fichero donde está guardada la tabla importada.
- Visualiza las hojas, tablas y rangos definidos en el fichero de origen.
- La barra de fórmulas muestra la ruta del fichero.
- Power Query utiliza el lenguaje de programación M, que se muestra en la barra de fórmulas.
- Puedes cambiar la configuración del paso "Origen" usando la rueda dentada para actualizar la ruta del fichero.

### Navegación:
- Selecciona el nombre de la tabla que estás importando del fichero de origen.
- Permite cambiar de tabla en la importación si se modifica el nombre de la tabla en el fichero de Excel.
- Muestra las columnas y filas de la tabla importada sin asignar el tipo de dato a cada columna.
- Los tipos de datos se indican con iconos (por ejemplo, ABC para texto y 123 para número).

### Tipo Cambiado:
- Asigna el tipo de dato a cada columna.
- Muestra iconos a la izquierda del nombre de cada columna indicando el tipo de dato.
- Si realizas un paso que genera una columna, Power Query puede insertar automáticamente un paso "Tipo Cambiado".
- Revisa los tipos de datos asignados para asegurar que son correctos para los datos con los que trabajarás.
- Puedes eliminar un paso usando el botón de eliminar a la izquierda de cada paso.

### Recuerda:
- Cada operación en el panel de contenido se agrega al panel de pasos.
- No existe un botón de deshacer; los pasos incorrectos deben eliminarse manualmente en el panel de pasos.
- La configuración de la tabla se actualiza en el orden de los pasos aplicados.

# 10.2. Cambiar Origen de Datos en Power Query
Para cambiar el origen de datos de una tabla o varias tablas importadas desde un mismo fichero en Power BI, puedes seguir estos pasos:

### Cambiar el Origen de Datos de una Sola Tabla:
- Ve al panel de pasos y selecciona el paso Origen.
- Usa la rueda dentada para abrir la configuración de dicho paso.
- Actualiza la ruta del fichero de origen seleccionando la nueva ubicación y pulsando Aceptar.

### Cambiar la Ruta de Todo el Fichero de Datos:
- Ve a la ficha INICIO en Power Query.
- En el grupo de botones ORÍGENES DE DATOS, pulsa el botón CONFIGURACIÓN DE ORIGEN DE DATOS.
- Se abrirá un cuadro de diálogo donde puedes seleccionar la nueva ruta del fichero.
- Pulsa el botón CAMBIAR ORIGEN y luego EXAMINAR para navegar a la nueva ubicación del fichero.
- Pulsa Aceptar para actualizar la ruta del fichero de origen.

### Actualizar los Datos en Power Query:
- Para replicar la ruta modificada en todas las tablas del archivo, ve al grupo de botones CONSULTA en la ficha INICIO.
- Pulsa el botón ACTUALIZAR VISTA PREVIA.
- Selecciona ACTUALIZAR TODO para actualizar la ruta de todas las tablas importadas.
- Si solo deseas actualizar la ruta de la tabla seleccionada, selecciona ACTUALIZAR VISTA PREVIA.

# 10.3. Operaciones Básicas en Power Query
Estas son algunas de las operaciones que puedes hacer sobre los datos de la tabla T_CURSOS en el fichero BD CURSOS:

### Eliminar Columnas:
- Selecciona las columnas que no necesitas (por ejemplo, COMERCIAL, IMPORTE COMERCIAL, PAGADO COMERCIAL).
- Haz clic derecho y selecciona QUITAR COLUMNAS o QUITAR OTRAS COLUMNAS.

### Copiar Columna:
- Selecciona la columna que deseas copiar.
- Haz clic derecho y selecciona DUPLICAR COLUMNA.

### Cambiar Nombre de un Paso:
- En el panel de pasos, haz clic derecho en el paso que deseas renombrar (por ejemplo, COLUMNAS QUITADAS).
- Selecciona CAMBIAR NOMBRE y escribe el nuevo nombre (por ejemplo, COLUMNAS COMERCIALES ELIMINADAS).

### Copiar una Tabla:
- En el panel de consultas, haz clic derecho en la tabla que deseas copiar (T_CURSOS).
- Selecciona DUPLICAR.

### Eliminar una Tabla:
- En el panel de consultas, haz clic derecho en la tabla que deseas eliminar.
- Selecciona ELIMINAR.

### Cambiar el Nombre de una Tabla:
- En el panel de consultas, haz clic derecho en la tabla y selecciona CAMBIAR NOMBRE.

### Cambiar el Nombre de una Columna:
- Haz dos clics rápidos en el nombre de la columna o haz clic derecho y selecciona CAMBIAR NOMBRE.

### Quitar Filas:
- Ve a la ficha INICIO, en el grupo de botones REDUCIR FILAS, y selecciona QUITAR FILAS.
- Opciones disponibles: QUITAR FILAS SUPERIORES, QUITAR FILAS INFERIORES, QUITAR FILAS ALTERNAS, QUITAR DUPLICADOS, QUITAR FILAS EN BLANCO, QUITAR ERRORES, FILTRAR DATOS.

### Importar Datos desde Power Query:
- Ve a la ficha INICIO, en el grupo de botones NUEVA CONSULTA, y selecciona NUEVO ORIGEN.
- Selecciona el conector deseado para importar los datos.

### Recuerda:
- Power Query diferencia entre mayúsculas y minúsculas.
- Lo que haces en Power Query no afecta al fichero de origen de Excel.
- Los filtros aplicados en Power Query afectan a los datos cargados y graficados en Power BI.

# 10.4. Transformaciones Básicas en Power Query
Estas son algunas transformaciones comunes que puedes aplicar a columnas de texto y de fecha en la tabla T_CURSOS del fichero BD CURSOS:

### Para Columnas de Texto:
**Formato:**
- Puedes cambiar mayúsculas y minúsculas, agregar prefijos o sufijos.
- Ejemplo: Para poner la primera letra de cada curso en mayúscula, selecciona la columna CURSO, ve a la ficha TRANSFORMAR, y selecciona FORMATO > PONER EN MAYÚSCULA CADA PALABRA.

**Dividir Columna:**
- Separa un dato en varias columnas.
- Ejemplo: Para dividir la columna CLIENTE en dos por el delimitador "-", selecciona CLIENTE, ve a TRANSFORMAR, y selecciona DIVIDIR COLUMNA > POR DELIMITADOR.

**Combinar Columnas:**
- Junta el contenido de columnas seleccionadas.
- Ejemplo: Para combinar CLIENTE.2 y CLIENTE.1 con un separador "//", selecciona ambas columnas, ve a TRANSFORMAR, y selecciona COMBINAR COLUMNAS.

**Extraer:**
- Corta parte del texto de un campo.
- Ejemplo: Para extraer los últimos 3 caracteres de PROFESOR, selecciona la columna, ve a TRANSFORMAR, y selecciona EXTRAER > ULTIMOS CARACTERES y especifica "3".

### Para Columnas de Fecha:
**Agregar Nuevas Columnas:**
- Es común agregar columnas con año, mes, trimestre, etc.
- Ejemplo: Para agregar el año, el nombre del mes y el trimestre de la columna FECHA CURSO, selecciona la columna, ve a AGREGAR COLUMNA, y en el grupo DE FECHA Y HORA, selecciona FECHA y las opciones deseadas (AÑO, MES, TRIMESTRE).

### Recuerda:
- Las transformaciones se pueden realizar desde la ficha TRANSFORMAR para modificar la columna seleccionada o desde la ficha AGREGAR COLUMNA para duplicar la columna y realizar la transformación sobre la duplicada.
- Power Query diferencia entre mayúsculas y minúsculas.
- Lo que haces en Power Query no afecta al fichero de origen de Excel.

# 10.5. Cargar Datos a Power BI
Una vez que hayas realizado todas las transformaciones en Power Query, sigue estos pasos para cargar los datos a Power BI:

### Cerrar y Aplicar Cambios:
- Ve a la ficha INICIO en Power Query.
- Pulsa el botón CERRAR Y APLICAR.

### Actualización Automática:
- Los datos se cargarán automáticamente en Power BI.
- Las visualizaciones insertadas se actualizarán con los datos transformados.
- Los campos eliminados ya no estarán en el panel de datos y vista tabla.
- Las columnas agregadas estarán disponibles y las columnas transformadas tendrán los cambios configurados.

### Recuerda:
- La forma habitual de trabajo es: primero importar los datos, después transformarlos en Power Query y, finalmente, cargar en Power BI para realizar los informes.

### Práctica 8:
**Parte 1:**
1. Inserta una tabla en el fichero de Excel con el nombre T_CLIENTE.
2. Guarda los cambios y cierra el fichero.
3. Abre un Power BI en blanco.
4. Importa la tabla T_CLIENTES al Power BI en blanco.
5. Guarda el fichero con el nombre BD PERSONAS.

**Parte 2:**
1. Ve al editor de Query del fichero 08. BD PERSONAS y, desde la ficha TRANSFORMAR, realiza las siguientes transformaciones:
   - Pon las columnas NOMBRE, APELLIDO1 y APELLIDO2 con la primera letra en mayúscula.
   - Combina las columnas NOMBRE, APELLIDO1 y APELLIDO2, separando cada una por un espacio y nombra la columna combinada como NOMBRE COMPLETO.
   - Divide la columna NIF en dos columnas: una con los 8 números y otra con la letra.
   - Pon la columna con la letra del NIF en mayúscula.
   - Combina ambas columnas del NIF, separando los números de las letras por un guion.
   - Nombra la columna combinada como NIF.
2. Desde la ficha AGREGAR COLUMNA, agrega las siguientes columnas sobre la fecha de incorporación:
   - AÑO: el nombre de la fecha de incorporación.
   - TRIMESTRE: el trimestre del año de la fecha de incorporación.
3. Desde la ficha TRANSFORMAR, pon el prefijo “TRIM.” delante de cada trimestre, de modo que se vean como TRIM. 1, TRIM. 2, TRIM. 3, TRIM. 4.
4. Carga los datos en Power BI.
5. Guarda los cambios al fichero BD PERSONAS.
