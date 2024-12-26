### Uso de Numpy y Pandas en Python

### Librería Numpy

1. **Seed**:
    - `numpy.random.seed()`: Establece una semilla para los datos aleatorios.

2. **Randint**:
    - `numpy.random.randint()`: Genera datos aleatorios.

### Estadísticas

1. **Moda**:
    - ```python
      import statistics as st
      st.mode(lista)
      ```

2. **Mediana**:
    - ```python
      from numpy import quantile
      median = quantile(variable, 0.5, interpolation='midpoint')  # Al 50%
      q1 = quantile(variable, 0.25, interpolation='midpoint')  # Al 25%
      ```

3. **Promedio**:
    - ```python
      from numpy import mean
      promedio = mean(variables)
      ```

### Uso de Pandas

1. **Importar Pandas**:
    - ```python
      import pandas as pd
      ```

2. **DataFrame**:
    - Un DataFrame es el nombre de una estructura de datos similar a una tabla.
    - ```python
      df = pd.DataFrame(data)
      ```

3. **Sumar Valores en DataFrame**:
    - ```python
      df.sum()  # Suma todas las listas/columnas.
      df.loc['fila'].sum()  # Suma una lista/fila específica.
      ```

### Ley de los Grandes y Pequeños Números

1. **Ley de los Grandes Números**: Probabilidad teórica. Cuantas más muestras, más acertado el resultado.
2. **Ley de los Pequeños Números**: Probabilidad empírica. Cuantas menos muestras, menos acertado el resultado y más afecta al resultado al ser pequeño.

### Leer Archivos CSV con Pandas

1. **Leer CSV**:
    - ```python
      df = pd.read_csv("archivo.csv", sep=";", encoding='unicode_escape')
      ```

### Funciones Lambda y Operaciones con Pandas

1. **Lambda**:
    - Una función anónima que se puede utilizar para operaciones rápidas.
    - ```python
      f = lambda x: x + 1
      ```

2. **Indexación con `iloc`**:
    - ```python
      df.iloc[filas, columnas]
      ```

3. **Agrupación con `groupby` y `agg`**:
    - ```python
      grouped = df.groupby('columna').agg({'otra_columna': 'sum'})
      ```

