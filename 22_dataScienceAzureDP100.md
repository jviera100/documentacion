
### Guía de Conceptos para Examen DP-100

### 1. Activos

*Activos de Azure* son recursos que puedes utilizar para desarrollar, entrenar y desplegar tus modelos de Machine Learning. Aquí tienes una lista de algunos activos importantes:

1. **Compute Instances**:
    - Máquinas virtuales que puedes usar para ejecutar tus notebooks y scripts. Son entornos de computación dedicados donde puedes desarrollar y entrenar tus modelos. Al crear una instancia, estás eligiendo el servidor que Azure te rentará para tus tareas específicas.

2. **Compute Clusters**:
    - Conjuntos de máquinas virtuales que pueden escalar en función de la carga de trabajo. Utilizados para entrenamientos intensivos y procesamiento de grandes volúmenes de datos.

3. **Inference Clusters**:
    - Clusters dedicados a realizar inferencias en tiempo real o por lotes. Ideales para desplegar modelos y hacer predicciones en grandes cantidades de datos.

4. **Datastores**:
    - Servicios de almacenamiento donde puedes guardar tus datos. Los datastores comunes incluyen Azure Blob Storage, Azure File Storage y Azure Data Lake. Los datastores son equivalentes al almacenamiento en disco en una computadora y pueden contener archivos y carpetas identificados por URI.

5. **Datasets**:
    - Conjuntos de datos estructurados y organizados para su uso en el entrenamiento de modelos. Estos datos pueden provenir de diferentes fuentes y estar en diversos formatos, como CSV, JSON o Parquet. Los datasets son esenciales para entrenar, validar y probar tus modelos.

6. **Pipelines**:
    - Flujos de trabajo que orquestan diferentes pasos en el proceso de Machine Learning. Cada pipeline define una serie de etapas, como la preparación de datos, el entrenamiento de modelos y la validación.

7. **URI (Uniform Resource Identifier)**:
    - Identifica un recurso en Internet. Una URI de un archivo en Azure Blob Storage podría ser algo como `https://mystorageaccount.blob.core.windows.net/mycontainer/myblob`. En Azure, las URI se utilizan para ubicar archivos y carpetas dentro de los datastores.

### 2. Configuraciones

Hay varias formas de configurar y gestionar tus recursos y modelos en Azure:

1. **AutoML**:
    - Automatiza el proceso de entrenamiento y selección del mejor modelo.

2. **CLI (Command Line Interface)**:
    - Permite configurar y gestionar recursos usando comandos. Ideal para usuarios avanzados que prefieren trabajar desde la terminal.

3. **ARM Templates**:
    - Plantillas en formato JSON que describen la infraestructura y la configuración de tus recursos de Azure. Puedes definir y desplegar recursos como máquinas virtuales, redes y almacenamiento de manera repetible y automatizada. Las ARM templates se pueden escribir directamente en Visual Studio Code y luego importar a Azure.

4. **Azure Machine Learning SDK**:
    - Biblioteca de Python para trabajar con servicios de Azure ML. Permite crear, gestionar y desplegar modelos de forma programática.

5. **Azure Portal**:
    - Interfaz gráfica para gestionar tus recursos de Azure. Facilita la administración de recursos sin necesidad de utilizar código.

### 3. Modelos y Pipelines

1. **Modelos**:
    - Representaciones matemáticas entrenadas para hacer predicciones o clasificaciones basadas en datos. Los modelos pueden ser creados usando diferentes algoritmos y métodos. En el contexto de machine learning, los modelos son equivalentes a las consultas (queries) en una base de datos, ya que extraen y manipulan los datos.

2. **Pipelines**:
    - En Azure Machine Learning, un pipeline es una secuencia de pasos que define el flujo de trabajo completo para el entrenamiento y despliegue de modelos. Los pasos pueden incluir preprocesamiento de datos, entrenamiento de modelos y validación. Los pipelines ayudan a automatizar y gestionar todo el ciclo de vida del machine learning. Piensa en un pipeline como una cadena de producción donde cada paso está claramente definido y lleva al siguiente. En el desarrollo web, los pipelines pueden asemejarse a los controladores en el patrón MVC, controlando el flujo de datos y la lógica de la aplicación.

### 4. Computación

Dependiendo de tus necesidades, puedes elegir diferentes tipos de computación:

1. **CPU (Central Processing Unit)**:
    - Procesador principal de una computadora, usado para ejecutar tareas generales.

2. **GPU (Graphics Processing Unit)**:
    - Procesador especializado en manejar operaciones de procesamiento paralelo, ideal para tareas intensivas como el deep learning.

3. **Spark**:
    - Apache Spark es un motor de análisis de datos de código abierto para el procesamiento distribuido a gran escala. Se utiliza para procesar y analizar grandes volúmenes de datos en paralelo.

4. **HDInsight**:
    - Servicio en la nube de Azure que permite crear y utilizar clusters de Hadoop, Spark y otros frameworks de análisis de datos. Ideal para grandes volúmenes de datos y análisis complejos.

### 5. Entrenamiento

Tienes varias opciones para entrenar tus modelos:

1. **Automated ML**:
    - Permite seleccionar automáticamente el mejor modelo.

2. **ML Pipelines**:
    - Define pasos secuenciales para el entrenamiento y despliegue.

3. **HDInsight**:
    - Usado para entrenar modelos en grandes conjuntos de datos utilizando Spark.

### 6. Consumo de Modelos

Una vez entrenado el modelo, puedes consumirlo mediante:

1. **APIs**:
    - Servicios web que permiten interactuar con tus modelos.

2. **Endpoints**:
    - Direcciones URL que permiten hacer peticiones al modelo entrenado.

3. **Batch Inference**:
    - Se refiere a ejecutar predicciones en grandes conjuntos de datos en bloques, en lugar de hacer predicciones en tiempo real. Es útil cuando se necesita procesar una gran cantidad de datos de una sola vez. En Batch Inference, los datos se cargan en el servicio, se procesan en bloques y los resultados se devuelven, típicamente a través de archivos almacenados en un data store o enviados a una ubicación de almacenamiento especificada. La ejecución de inferencia por lotes generalmente se maneja mediante scripts que se ejecutan en un ambiente de computación especificado (como un clúster de Spark o una instancia dedicada) y los resultados se pueden exportar a un data store.

### 7. Parámetros

Son configuraciones que puedes ajustar para controlar el comportamiento del entrenamiento de tus modelos, como:

1. **Tiempo límite**:
    - Define el tiempo máximo de entrenamiento.

2. **Iteraciones**:
    - Número de veces que el modelo debe ser entrenado.

3. **Recursos de computación**:
    - Selección del tipo de máquina y configuración de hardware.

Los parámetros pueden ser especificados en varias formas:
- **CLI**: Puedes definir parámetros al ejecutar comandos en la línea de comandos.
- **SDK de Python**: Puedes especificar parámetros programáticamente al usar scripts de Python.
- **Azure Portal**: A través de la interfaz gráfica, puedes configurar parámetros al crear o gestionar recursos y experimentos.

### 8. Ambientes (Environments)

Los *ambientes* son configuraciones que definen las dependencias y paquetes necesarios para ejecutar tu código:

1. **Curated Environments**:
    - Ambientes predefinidos y gestionados por Azure que incluyen todas las dependencias necesarias para ejecutar tus experimentos.

2. **User-managed Environments**:
    - Ambientes personalizados que puedes configurar tú mismo según tus necesidades específicas.

3. **Docker**:
    - Herramienta para crear y administrar contenedores, que son entornos de ejecución aislados. Los contenedores pueden incluir todas las dependencias y configuraciones necesarias para ejecutar tus experimentos.

### 9. Implementación de Modelos

1. **Implementación en Línea**:
    - Desplegar un modelo en un endpoint para que pueda ser consumido en tiempo real a través de una API.

2. **Implementación por Lotes**:
    - Desplegar un modelo para procesar grandes conjuntos de datos en bloques, útil para análisis que no requieren respuestas inmediatas. En este caso, los datos se cargan en el servicio y las predicciones se ejecutan en grupos, con los resultados almacenados y accesibles desde un data store o servicio de almacenamiento específico.

