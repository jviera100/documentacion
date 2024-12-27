

### 1. Uso de Numpy y Pandas en Python

#### 1.1 Librería Numpy

1. **Seed**:
    - `numpy.random.seed()`: Establece una semilla para los datos aleatorios.
      ```python
      import numpy as np
      np.random.seed(42)
      ```

2. **Randint**:
    - `numpy.random.randint()`: Genera datos aleatorios.
      ```python
      np.random.randint(1, 100, size=10)
      ```

#### 1.2 Estadísticas

1. **Moda**:
    - Utiliza la librería `statistics` para calcular la moda.
      ```python
      import statistics as st
      st.mode([1, 2, 2, 3, 4])
      ```

2. **Mediana**:
    - Utiliza `numpy.quantile` para calcular la mediana y los cuartiles.
      ```python
      from numpy import quantile
      variable = [1, 2, 3, 4, 5, 6, 7, 8, 9]
      median = quantile(variable, 0.5, interpolation='midpoint')  # Al 50%
      q1 = quantile(variable, 0.25, interpolation='midpoint')  # Al 25%
      ```

3. **Promedio**:
    - Utiliza `numpy.mean` para calcular el promedio.
      ```python
      from numpy import mean
      variables = [1, 2, 3, 4, 5]
      promedio = mean(variables)
      ```

### 2. Uso de Pandas

#### 2.1 Importar Pandas

1. **Importar Pandas**:
    - Importa la librería Pandas para manipular estructuras de datos.
      ```python
      import pandas as pd
      ```

#### 2.2 DataFrame

1. **Crear un DataFrame**:
    - Un DataFrame es una estructura de datos similar a una tabla.
      ```python
      data = {
          'columna1': [1, 2, 3, 4],
          'columna2': [10, 20, 30, 40]
      }
      df = pd.DataFrame(data)
      ```

#### 2.3 Operaciones en DataFrame

1. **Sumar Valores en DataFrame**:
    - Suma todas las columnas o una fila específica en un DataFrame.
      ```python
      df.sum()  # Suma todas las columnas.
      df.loc[0].sum()  # Suma una fila específica.
      ```

### 3. Ley de los Grandes y Pequeños Números

1. **Ley de los Grandes Números**:
    - Probabilidad teórica. Cuantas más muestras, más acertado el resultado.
2. **Ley de los Pequeños Números**:
    - Probabilidad empírica. Cuantas menos muestras, menos acertado el resultado y más afecta al resultado al ser pequeño.

### 4. Leer Archivos CSV con Pandas

1. **Leer un Archivo CSV**:
    - Utiliza `pd.read_csv` para leer un archivo CSV.
      ```python
      df = pd.read_csv("archivo.csv", sep=";", encoding='unicode_escape')
      ```

### 5. Funciones Lambda y Operaciones con Pandas

#### 5.1 Lambda

1. **Funciones Lambda**:
    - Una función anónima que se puede utilizar para operaciones rápidas.
      ```python
      f = lambda x: x + 1
      f(5)  # Devuelve 6
      ```

#### 5.2 Indexación con `iloc`

1. **Indexación con `iloc`**:
    - Utiliza `iloc` para indexar filas y columnas.
      ```python
      df.iloc[0, 1]  # Selecciona el valor en la primera fila y segunda columna.
      ```

#### 5.3 Agrupación con `groupby` y `agg`

1. **Agrupación con `groupby` y `agg`**:
    - Agrupa los datos y aplica funciones de agregación.
      ```python
      grouped = df.groupby('columna1').agg({'columna2': 'sum'})
      ```

