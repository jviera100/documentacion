# Configuración Rápida de Entornos Anaconda y Jupyter con Docker

Este documento proporciona comandos prácticos para levantar entornos de desarrollo de Anaconda y Jupyter utilizando Docker, siguiendo una filosofía KISS (Keep It Simple, Stupid).

## 1. Entorno Anaconda con Jupyter Notebook

Este comando levanta un contenedor Docker con la distribución Anaconda, que incluye Jupyter Notebook. Es ideal para ciencia de datos y desarrollo de scripts en Python.

**Comando para levantar el contenedor:**

```bash
docker run -it --rm -p 9999:8888 -v "$(pwd)/anaconda_data:/opt/notebooks" continuumio/anaconda3 jupyter notebook --ip=0.0.0.0 --no-browser --allow-root --NotebookApp.token=''
```

**Explicación del comando:**
* `docker run`: Ejecuta un contenedor Docker.
* `-it`: Modo interactivo y asigna un pseudo-TTY.
* `--rm`: Elimina el contenedor automáticamente al salir.
* `-p 9999:8888`: Mapea el puerto 9999 de su máquina local al puerto 8888 del contenedor (donde Jupyter se ejecuta).
* `-v "$(pwd)/anaconda_data:/opt/notebooks"`: Monta un volumen. `$(pwd)/anaconda_data` (o `%cd%\anaconda_data` en Windows CMD) es una carpeta en su directorio actual que se sincronizará con `/opt/notebooks` dentro del contenedor. Aquí puede guardar sus notebooks y datos.
* `continuumio/anaconda3`: La imagen de Docker a utilizar.
* `jupyter notebook --ip=0.0.0.0 --no-browser --allow-root --NotebookApp.token=''`: El comando que se ejecuta dentro del contenedor para iniciar Jupyter Notebook, accesible desde cualquier IP y sin token de seguridad (para conveniencia en desarrollo local).

**Cómo usarlo:**
1. Asegúrese de tener Docker Desktop (o Docker Engine) instalado y en ejecución.
2. Abra su terminal (CMD o PowerShell en Windows, o Bash en Linux/macOS).
3. Navegue a la carpeta donde desea que se guarden sus notebooks (por ejemplo, `C:\Users\jonat\Desktop\dev\documentacion\`).
4. Ejecute el comando `docker run ...` de arriba.
5. Una vez que el contenedor esté en funcionamiento, abra su navegador web y vaya a `http://localhost:9999`.

## 2. Entorno Básico de Jupyter Notebook

Si solo necesita un entorno básico de Jupyter sin la suite completa de Anaconda, puede usar esta imagen más ligera.

**Comando para levantar el contenedor:**

```bash
docker run -it --rm -p 8888:8888 -v "$(pwd)/jupyter_data:/home/jovyan/work" jupyter/base-notebook
```

**Cómo usarlo:**
1. Siga los pasos 1-3 de la sección anterior.
2. Ejecute el comando `docker run ...` de arriba.
3. Una vez que el contenedor esté en funcionamiento, abra su navegador web y vaya a `http://localhost:8888`.

