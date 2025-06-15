
### 1. Comandos Básicos para la Terminal (Visual Studio Code, cmd, o Command Prompt de Windows)

#### 1.1 Navegación y Gestión de Directorios

1. **Abrir la Terminal**:
    - **cmd**: Abre la terminal.
  
2. **Mostrar Ruta Actual**:
    - **pwd**: Muestra la ruta en la que estás.
  
3. **Cambiar de Directorio**:
    - **cd nombre_carpeta**: Entra a la carpeta especificada.
    - **cd ..**: Sale a la carpeta padre anterior.
    - **cd ~**: Sale a la carpeta principal del usuario.

4. **Listar Contenidos del Directorio**:
    - **dir**: Muestra carpetas y archivos en el directorio actual (Windows).
    - **ls**: Muestra carpetas y archivos en el directorio actual (Unix/Linux).
    - **ls -l**: Muestra detalles de archivos y carpetas como permisos, fechas, tamaños.
    - **ls -a**: Muestra archivos y carpetas ocultas del sistema.
    - **ls -la**: Muestra detalles de archivos y carpetas, incluidas las ocultas.
    - **ls -LS**: Ordena archivos y carpetas por tamaño de mayor a menor.
    - **ls -LSH**: Ordena archivos y carpetas en megabytes.
    - **ls -lr**: Ordena archivos y carpetas al revés.
    - **tree**: Muestra la estructura de directorios en forma de árbol.

#### 1.2 Creación y Eliminación de Directorios/Archivos

1. **Crear Directorio**:
    - **ni**: Crea una carpeta (PowerShell).
    - **mkdir**: Crea una o varias carpetas.

2. **Eliminar Directorio**:
    - **rmdir**: Elimina una carpeta o directorio.

3. **Crear Archivo**:
    - **touch**: Crea un archivo vacío.

4. **Eliminar Archivo**:
    - **rm**: Elimina archivos.

#### 1.3 Manipulación de Archivos

1. **Copiar Archivos**:
    - **cp**: Copia archivos.

2. **Mover Archivos**:
    - **mv**: Mueve archivos.

3. **Cambiar Permisos**:
    - **chmod**: Cambia permisos de archivos o directorios.
      - `+`: Agrega permisos.
      - `-`: Elimina permisos.
      - `=`: Asigna permisos específicos.

4. **Cambiar Propietario**:
    - **chown**: Cambia la propiedad de archivos o carpetas.

5. **Ejecutar Comandos como Superusuario**:
    - **sudo**: Ejecuta comandos como superusuario o administrador.

#### 1.4 Visualización de Contenido de Archivos

1. **Mostrar Contenido**:
    - **cat nombre_archivo**: Muestra el contenido de un archivo.
    - **less nombre_archivo**: Muestra el contenido de un archivo por páginas.
    - **head -n X**: Muestra las primeras X filas de un archivo.
    - **strings nombre_archivo**: Extrae y muestra las cadenas legibles de un archivo binario.
      - Ejemplo: `strings archivo.png`

#### 1.5 Búsqueda y Edición de Archivos

1. **Buscar Contenido**:
    - **grep**: Busca y filtra contenido en un archivo.
    - **find**: Busca archivos en el sistema.

2. **Editar Archivos**:
    - **nano**: Edita archivos desde la terminal.

#### 1.6 Comandos Especiales Relacionados con Archivos Comprimidos y Ocultos

1. **Descifrar Archivos ZIP**:
    - **fcrackzip**: Descifra archivos .zip protegidos con contraseña.
      - Ejemplo: `fcrackzip -v -u -D -p dictionary.txt archivo.zip`

2. **Ocultar o Extraer Datos en Imágenes o Audio**:
    - **steghide**: Oculta o extrae datos en archivos de imagen o audio.
      - Para extraer: `steghide extract -sf imagen.jpg`
      - Para ocultar: `steghide embed -cf imagen.jpg -ef archivo.txt`

3. **Identificar Tipo de Archivo**:
    - **file**: Identifica el tipo real de archivo basado en su contenido.

#### 1.7 Comandos de Ayuda y Manuales

1. **Mostrar Manual de Comandos**:
    - **man**: Muestra el manual de un comando.
      - Ejemplo: `man chown`

2. **Buscar en el Manual de Comandos**:
    - **apropos**: Busca en el manual de comandos.
    - **whatis**: Muestra una sinopsis breve de un comando.

3. **Salir del Modo Lectura**:
    - **q + Enter**: Sale del modo lectura cuando ves "END".

#### 1.8 Operadores de Redirección y Pipes

1. **Usar Pipe**:
    - **|**: Concatena comandos.

2. **Redirigir Salida a Archivo**:
    - **>**: Sobreescribe archivos.
    - **>>**: Agrega texto al final de un archivo.

#### 1.9 Otros Comandos Útiles

1. **Mostrar Contenido de un Comando o Variable**:
    - **echo**: Equivalente a `console.log` en JavaScript y `print` en Python.

2. **Limpiar la Pantalla de la Terminal**:
    - **clear**: Limpia la pantalla de la terminal.

3. **Recuperar Comandos Anteriores**:
    - **Flecha hacia arriba**: Recupera comandos ingresados previamente.

#### 1.10 Hashing y Verificación de Integridad

1. **Generar Hash de un Archivo**:
    - **sha256sum archivo**: Genera el hash SHA-256 de un archivo.
    - **md5sum archivo**: Genera el hash MD5 de un archivo.

2. **Generar Hash en Windows PowerShell**:
    - **Get-FileHash**: Genera el hash de un archivo (Windows PowerShell).

3. **Comparar Hashes de Archivos**:
    - **sha256sum archivo >> archivo_hash**: Compara hashes de archivos.

4. **Comparar Archivos**:
    - **cmp archivo1 archivo2**: Compara archivos y destaca las diferencias.

#### 1.11 Gestión de Usuarios

1. **Agregar Usuario**:
    - **useradd**: Agrega un nuevo usuario.

2. **Modificar Usuario**:
    - **usermod**: Modifica un usuario.

3. **Eliminar Usuario**:
    - **userdel**: Elimina un usuario.

