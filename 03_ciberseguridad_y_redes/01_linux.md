# Guía Completa de Comandos Linux/Terminal

Esta guía presenta los comandos esenciales de Linux organizados de forma progresiva, desde los más básicos hasta los más avanzados, agrupados por funcionalidad para facilitar el aprendizaje.

## 0.📁 Directorios Principales en Linux

| Directorio   | Propósito                                                                 |
|--------------|---------------------------------------------------------------------------|
| `/`          | Raíz del sistema. Punto de partida de toda la jerarquía.                  |
| `/bin`       | Binarios esenciales accesibles para todos los usuarios (`ls`, `cp`, etc.).|
| `/sbin`      | Binarios del sistema, usados por el administrador (`reboot`, `iptables`). |
| `/etc`       | Archivos de configuración del sistema y servicios.                        |
| `/home`      | Directorios personales de los usuarios.                                   |
| `/root`      | Directorio personal del usuario root.                                     |
| `/usr`       | Programas y archivos compartidos del sistema (`/usr/bin`, `/usr/lib`).    |
| `/var`       | Datos variables como logs, colas de impresión, bases de datos.            |
| `/tmp`       | Archivos temporales. Se limpia al reiniciar.                              |
| `/dev`       | Archivos de dispositivos (discos, puertos, etc.).                         |
| `/proc`      | Información del sistema y procesos en tiempo real.                        |
| `/boot`      | Archivos de arranque, como el kernel (`vmlinuz`).                         |
| `/lib`       | Bibliotecas esenciales para binarios en `/bin` y `/sbin`.                 |
| `/opt`       | Software adicional o de terceros.                                         |
| `/mnt`       | Punto de montaje temporal para sistemas de archivos externos.             |
| `/media`     | Montaje automático de dispositivos (USB, CD-ROM).                         |
| `/run`       | Datos de estado en tiempo de ejecución (PID, sockets).                    |
| `/sys`       | Información del sistema en tiempo real (dispositivos,procesos)            |

### 0.1. 📁 `/etc` — Configuración del Sistema Linux - Archivos y Subdirectorios Comunes

El directorio `/etc` contiene los archivos de configuración esenciales para el funcionamiento del sistema operativo y sus servicios. Aquí se definen usuarios, redes, tareas programadas, servicios, y parámetros globales. Es uno de los puntos más críticos en la administración de sistemas Linux.

| Archivo/Directorio     | Propósito técnico                                                                 |
|------------------------|------------------------------------------------------------------------------------|
| `/etc/passwd`          | Base de datos de usuarios: nombre, UID, GID, shell, directorio personal.          |
| `/etc/shadow`          | Contraseñas encriptadas de los usuarios.                                          |
| `/etc/group`           | Define los grupos del sistema y sus miembros.                                     |
| `/etc/fstab`           | Tabla de sistemas de archivos a montar automáticamente en el arranque.            |
| `/etc/hostname`        | Nombre del host del sistema.                                                      |
| `/etc/hosts`           | Resolución local de nombres (IP ↔ nombre).                                        |
| `/etc/network/`        | Configuración de interfaces de red (según la distribución).                       |
| `/etc/resolv.conf`     | Servidores DNS utilizados por el sistema.                                         |
| `/etc/crontab`         | Tareas programadas del sistema (cron jobs).                                       |
| `/etc/systemd/`        | Archivos de configuración para servicios y unidades de systemd.                   |
| `/etc/init.d/`         | Scripts de inicio de servicios (usado en sistemas con SysVinit).                  |
| `/etc/profile`         | Variables de entorno globales para todos los usuarios.                            |
| `/etc/bash.bashrc`     | Alias y funciones globales para sesiones Bash.                                    |
| `/etc/issue`           | Mensaje mostrado antes del login (usado por `getty`).                             |
| `/etc/motd`            | “Message of the Day” mostrado tras iniciar sesión.                                |
| `/etc/exports`         | Configuración de directorios compartidos vía NFS.                                 |
| `/etc/alternatives/`   | Sistema de enlaces simbólicos para gestionar múltiples versiones de binarios.     |

### 0.2. 📁 Archivos Ocultos Comunes en Linux/Unix

| Archivo/Directorio | Tipo        | Propósito técnico                                                  |
|--------------------|-------------|---------------------------------------------------------------------|
| `.bashrc`          | Archivo     | Configura alias, funciones y entorno para Bash.                    |
| `.profile`         | Archivo     | Define variables de entorno y comandos al iniciar sesión.          |
| `.config/`         | Directorio  | Contiene configuraciones de apps gráficas y CLI.                   |
| `.local/`          | Directorio  | Instalaciones y datos locales del usuario.                         |
| `.ssh/`            | Directorio  | Claves privadas/públicas y configuración de acceso remoto SSH.     |
| `.git/`            | Directorio  | Metadatos y configuración de repositorios Git.                     |
| `.vimrc`           | Archivo     | Configuración personalizada para el editor Vim.                    |
| `.npmrc`           | Archivo     | Configuración de NPM (Node.js).                                    |
| `.docker/`         | Directorio  | Configuración de Docker CLI y credenciales.                        |
| `.env`             | Archivo     | Variables de entorno para proyectos (usado en desarrollo web).     |

## 1. Navegación y Orientación Básica

### 1.0 🔧 **Conceptos Básicos de la Shell**

| Símbolo | Significado                                                                 |
|---------|------------------------------------------------------------------------------|
| `$`     | Prompt de un usuario normal. Ej: `[user@host ~]$`                            |
| `#`     | Prompt del superusuario (root). Ej: `[root@host ~]#`                         |
| `~`     | Representa el directorio "home" del usuario actual.                          |

### 1.1 Comandos de Ubicación y Navegación

| Comando | Descripción | Ejemplo |
|---------|-------------|---------|
| `pwd` | Muestra la ruta actual donde te encuentras | `pwd` |
| `cd nombre_carpeta` | Entra a la carpeta especificada | `cd documentos` |
| `cd ..` | Sale a la carpeta padre anterior | `cd ..` |
| `cd ~` | Va al directorio principal del usuario | `cd ~` |
| `cd /` | Va al directorio raíz del sistema | `cd /` |

### 1.2 Visualización de Contenidos

#### Comandos Básicos de Listado

| Comando | Descripción | Sistema |
|---------|-------------|---------|
| `ls` | Lista archivos y carpetas básico | Linux/Unix |
| `dir` | Lista archivos y carpetas | Windows |
| `ls -l` | Muestra detalles (permisos, fechas, tamaños) | Linux/Unix |
| `ls -a`/ `ls --all` | Muestra archivos y carpetas ocultas | Linux/Unix |
| `ls -la` | Combina detalles + archivos ocultos | Linux/Unix |

#### Comandos Avanzados de Listado

| Comando | Descripción |
|---------|-------------|
| `ls -LS` | Ordena por tamaño (mayor a menor) |
| `ls -LH` | Lista con detalles y tamaños legibles (KB, MB…), sin orden específico |
| `ls -LH/usr` | Lista el contenido del directorio /usr con detalles y tamaños legibles |
| `ls -LSH` | Ordena por tamaño en formato legible (MB, GB) |
| `ls -LSHR` | Ordena por tamaño (mayor a menor), formato legible, y en orden inverso |
| `ls -lr` | Ordena al revés |
| `tree` | Muestra estructura en forma de árbol |

### 1.3 Limpieza y Ayuda

| Comando | Descripción |
|---------|-------------|
| `clear` | Limpia la pantalla de la terminal |
| `Flecha ↑` | Recupera comandos ingresados previamente |


### **1.4 Productividad y Sintaxis Avanzada en la Shell**

#### 1.4.1 Autocompletado con Tabulador (Tab Completion)

El autocompletado es la herramienta de productividad más importante. Permite completar comandos, nombres de archivo y hasta opciones de comandos.

| Acción | Resultado |
| :--- | :--- |
| `pas<Tab>` | Si es único, se autocompleta a `passwd`. |
| `pas<Tab><Tab>` | Si no es único, muestra todas las opciones que empiezan con "pas" (ej. `passwd`, `paste`). |
| `ls /etc/pass<Tab>` | Autocompleta nombres de archivo o directorios en una ruta. |
| `useradd --<Tab><Tab>` | **(Avanzado)** Muestra todas las opciones disponibles para un comando. |

#### 1.4.2 Historial de Comandos

La shell recuerda los comandos que has ejecutado. El comando `history` los muestra numerados.

| Comando/Atajo | Descripción | Ejemplo |
| :--- | :--- | :--- |
| `history` | Muestra la lista de comandos ejecutados. | `history` |
| `!numero` | Ejecuta el comando con ese número del historial. | `!26` |
| `!string` | Ejecuta el último comando que empezó con `string`. | `!ls` |
| **`!!`** | **Ejecuta el último comando ejecutado.** | `sudo !!` |
| **`^old^new`** | **Sustituye 'old' por 'new' en el último comando y lo ejecuta.** | `^/usr^/tmp` |
| `Ctrl + R` | **Búsqueda inversa:** Empieza a escribir y te mostrará comandos del historial que coincidan. | |
| `Alt` + `.` (o `Esc` + `.`) | Inserta el **último argumento del comando anterior** en la posición del cursor. | |

#### 1.4.3 Edición Rápida de la Línea de Comandos

Usa estos atajos para editar comandos largos sin usar el ratón.

| Atajo | Acción |
| :--- | :--- |
| `Ctrl + A` | Mover el cursor al **inicio** de la línea. |
| `Ctrl + E` | Mover el cursor al **final** de la línea. |
| `Ctrl + U` | **Borrar** desde el cursor hasta el **inicio** de la línea. |
| `Ctrl + K` | **Borrar** desde el cursor hasta el **final** de la línea. |
| `Ctrl + ←/→` | Moverse palabra por palabra. |

#### 1.4.4 Ejecución Múltiple y Multilínea

| Sintaxis | Descripción | Ejemplo |
| :--- | :--- | :--- |
| `comando1 ; comando2` | Ejecuta un comando después del otro, en una sola línea. | `sudo apt update ; sudo apt upgrade -y` |
| `comando \<Enter>` | Permite continuar un comando largo en la siguiente línea para mayor legibilidad. La shell mostrará un prompt secundario (`>`). | `head -n 3 \`<br>`/etc/passwd \`<br>`/etc/group` |

#### Operadores de Control

| Operador | Nombre | Descripción | Ejemplo |
| :--- | :--- | :--- | :--- |
| `;` | Separador | Ejecuta los comandos en secuencia, sin importar el resultado del anterior. | `sudo apt update ; sudo apt upgrade -y` |
| `&&` | Y Lógico | Ejecuta el segundo comando **solo si el primero tiene éxito**. | `mkdir backup && cp *.txt backup/` |
| `||` | O Lógico | Ejecuta el segundo comando **solo si el primero falla**. | `git pull || echo "Error al actualizar"` |
| `\|` | Pipe (Tubería) | La salida del primer comando se convierte en la entrada del segundo. | `ls -l \| grep ".txt"` |
| `\` | Continuación de línea | Permite escribir un comando largo en varias líneas. | `head -n 3 \`<br>`/etc/passwd` |
---

## 2. Gestión de Directorios y Archivos

### 2.1 Creación de Directorios

| Comando | Descripción | Sistema |
|---------|-------------|---------|
| `mkdir carpeta` | Crea una carpeta | Linux/Unix |
| `mkdir carpeta1 carpeta2` | Crea múltiples carpetas | Linux/Unix |
| `ni carpeta` | Crea una carpeta | PowerShell |

### 2.2 Eliminación de Directorios

| Comando           | Descripción                                      | Precaución                                                  |
|------------------|--------------------------------------------------|-------------------------------------------------------------|
| `rmdir carpeta`  | Elimina carpeta vacía                            | Solo carpetas vacías                                        |
| `rm -r carpeta`  | Elimina carpeta y contenido recursivamente       | **¡Irreversible!**                                          |
| `rm -rf carpeta` | Elimina carpeta y contenido recursivamente, forzado | **¡Irreversible! Omite confirmaciones y errores. Úsalo con extrema precaución.** |

#### Ejemplos de Eliminación por Rutas

```bash
# Eliminar desde carpeta actual (ruta relativa)
rm -r mi_carpeta

# Eliminar desde la raíz (ruta absoluta)
rm -r /ruta/absoluta/a/mi_carpeta

# Eliminar desde directorio del usuario (home)
rm -r ~/mi_carpeta
```

### 2.3 Creación y Eliminación de Archivos

| Comando | Descripción |
|---------|-------------|
| `touch archivo.txt` | Crea archivo vacío |
| `rm archivo.txt` | Elimina archivo |
| `rm archivo1.txt archivo2.txt` | Elimina múltiples archivos |

### 2.4 Copia y Movimiento

| Comando | Descripción |
|---------|-------------|
| `cp archivo.txt destino/` | Copia archivo |
| `cp -r carpeta/ destino/` | Copia carpeta recursivamente |
| `mv archivo.txt nuevo_nombre.txt` | Renombra archivo |
| `mv archivo.txt destino/` | Mueve archivo |

## 3. Edición y Manipulación de Contenido

### 3.1 Creación de Contenido en Archivos

#### Método 1: Echo con Redirección
```bash
echo "Contenido" > archivo.txt          # Crea/sobreescribe
echo "Más contenido" >> archivo.txt     # Agrega al final
```

#### Método 2: Echo con Tee
```bash
echo "Chile" | tee pais.txt             # Crea y muestra contenido
echo "Santiago" | tee -a pais.txt       # Agrega al final
```

**Ventaja de `tee`**: Muestra el contenido en pantalla mientras lo escribe al archivo.

#### Operadores de Redirección y Pipes

| Operador | Descripción | Ejemplo |
|----------|-------------|---------|
| `>` | Sobreescribe archivo | `echo "Hola" > archivo.txt` |
| `>>` | Agrega al final | `echo "Mundo" >> archivo.txt` |
| `\|` | Pipe (envía salida al siguiente comando) | `ls \| grep ".txt"` |

### 3.2 Edición Directa de Archivos

| Comando | Descripción | Nivel |
|---------|-------------|-------|
| `nano archivo.txt` | Editor de texto simple y amigable | Principiante |
| `vim archivo.txt` | Editor avanzado con modos | Avanzado |
| `emacs archivo.txt` | Editor completo con muchas funciones | Avanzado |

### 3.3 Visualización de Contenido

| Comando | Descripción | Uso Recomendado |
|---------|-------------|-----------------|
| `cat archivo.txt` | Muestra contenido completo | Archivos pequeños |
| `less archivo.txt` | Muestra contenido por páginas | Archivos grandes |
| `head -n 10 archivo.txt` | Muestra primeras 10 líneas | Vista previa |
| `tail -n 10 archivo.txt` | Muestra últimas 10 líneas | Logs recientes |
| `wc archivo.txt` | **W**ord **C**ount: cuenta líneas, palabras y caracteres. | `wc -l archivo.txt` (muy útil para contar solo líneas) |


## 4. Búsqueda y Filtrado

### 4.1 Búsqueda de Archivos

| Comando | Descripción | Ejemplo |
|---------|-------------|---------|
| `find . -name "*.txt"` | Busca archivos por nombre | `find /home -name "documento.pdf"` |
| `find . -type d` | Busca solo directorios | `find . -type d -name "config"` |
| `find . -size +1M` | Busca archivos mayores a 1MB | `find . -size -100k` |

### 4.2 Búsqueda en Contenido

| Comando | Descripción | Ejemplo |
|---------|-------------|---------|
| `grep "texto" archivo.txt` | Busca texto en archivo | `grep "error" log.txt` |
| `grep -r "texto" directorio/` | Busca recursivamente | `grep -r "TODO" proyecto/` |
| `grep -i "texto" archivo.txt` | Busca ignorando mayúsculas | `grep -i "Error" log.txt` |

## 5. Permisos y Propiedad

### 5.1 Gestión de Permisos

| Comando | Descripción | Ejemplo |
|---------|-------------|---------|
| `chmod +x script.sh` | Agrega permiso de ejecución | `chmod +x mi_script.sh` |
| `chmod -w archivo.txt` | Elimina permiso de escritura | `chmod -w documento.txt` |
| `chmod 755 archivo` | Asigna permisos específicos (uso estandar)| `chmod 644 archivo.txt` |
| `chmod =755 archivo` | Asigna permisos específicos | `chmod 644 archivo.txt` |

#### Tabla de Permisos Numéricos

| Número | Binario | Permisos | Descripción |
|--------|---------|----------|-------------|
| 0 | 000 | --- | Sin permisos |
| 1 | 001 | --x | Solo ejecución |
| 2 | 010 | -w- | Solo escritura |
| 3 | 011 | -wx | Escritura y ejecución |
| 4 | 100 | r-- | Solo lectura |
| 5 | 101 | r-x | Lectura y ejecución |
| 6 | 110 | rw- | Lectura y escritura |
| 7 | 111 | rwx | Todos los permisos |

### 5.2 Cambio de Propiedad

| Comando | Descripción |
|---------|-------------|
| `chown usuario archivo.txt` | Cambia propietario |
| `chown usuario:grupo archivo.txt` | Cambia propietario y grupo |
| `chgrp grupo archivo.txt` | Cambia solo el grupo |

## 6. Comandos con Privilegios Elevados

### 6.1 Superusuario

| Comando | Descripción | Uso |
|---------|-------------|-----|
| `sudo comando` | Ejecuta comando como superusuario | `sudo apt update` |
| `sudo -u usuario comando` | Ejecuta como otro usuario | `sudo -u apache ls /var/www` |

## 7. Gestión de Usuarios y Grupos

### 7.1 Creación de Grupos

| Comando | Descripción |
|---------|-------------|
| `sudo groupadd nombre_grupo` | Crea nuevo grupo |
| `sudo groupadd profesores` | Ejemplo: crea grupo "profesores" |

### 7.2 Verificación de Grupos

| Comando                                 | Descripción                         |
|----------------------------------------|-------------------------------------|
| `grep nombre_grupo /etc/group`         | Busca grupo específico              |
| `grep -E 'grupo1\|grupo2' /etc/group`  | Busca múltiples grupos              |
| `getent group nombre_grupo`            | Muestra información del grupo desde NSS |

### 7.3 Creación de Usuarios

| Comando | Descripción | Características |
|---------|-------------|-----------------|
| `sudo adduser usuario` | Crea usuario interactivamente | Crea directorio /home, solicita datos |
| `sudo useradd usuario` | Crea usuario básico | Sin directorio home por defecto |

### 7.4 Asignación de Usuarios a Grupos

| Comando | Descripción |
|---------|-------------|
| `sudo usermod -aG grupo usuario` | Agrega usuario a grupo adicional |
| `sudo usermod -g grupo usuario` | Cambia grupo primario del usuario |

#### Ejemplo Completo de Gestión de Usuarios

```bash
# 1. Crear grupos
sudo groupadd profesores
sudo groupadd alumnos

# 2. Crear usuarios
sudo adduser perez
sudo adduser bravo

# 3. Asignar usuarios a grupos
sudo usermod -aG profesores perez
sudo usermod -aG profesores bravo

# 4. Verificar asignaciones
grep -E 'profesores|alumnos' /etc/group
```

### 7.5 Eliminación de Usuarios

| Comando | Descripción | Efecto |
|---------|-------------|--------|
| `sudo userdel usuario` | Elimina usuario | Conserva directorio /home |
| `sudo userdel -r usuario` | Elimina usuario completo | Borra directorio /home |

### 7.6 Verificación de Usuarios

| Comando                                 | Descripción                         |
|----------------------------------------|-------------------------------------|
| `grep usuario /etc/passwd`             | Busca usuario específico            |
| `grep -E 'user1\|user2' /etc/passwd`   | Busca múltiples usuarios            |
| `id usuario`                           | Muestra UID, GID y grupos del usuario |
| `groups usuario`                       | Lista los grupos a los que pertenece el usuario |

### 7.7 Eliminación de Grupos

| Comando | Descripción |
|---------|-------------|
| `sudo groupdel nombre_grupo` | Elimina grupo del sistema |

### **7.8 Gestión de Contraseñas**

| Comando | Descripción |
| :--- | :--- |
| `passwd` | Permite al usuario actual cambiar su propia contraseña. |
| `sudo passwd usuario` | Permite al superusuario cambiar la contraseña de otro usuario. |

## 8. Análisis de Archivos y Seguridad

### 8.1 Identificación de Archivos

| Comando | Descripción |
|---------|-------------|
| `file archivo` | Identifica tipo real del archivo |
| `strings archivo.png` | Extrae texto legible de archivos binarios |

### 8.2 Verificación de Integridad (Hashing)

#### Genera Hash en archivo en Linux/Unix

| Comando | Descripción |
|---------|-------------|
| `md5sum archivo` | Genera hash MD5 |
| `sha256sum archivo` | Genera hash SHA-256 |
| `sha256sum archivo >> archivo.hash` | Guarda hash en archivo |

#### Generar Hash en Windows PowerShell

| Comando | Descripción |
|---------|-------------|
| `Get-FileHash archivo` | Genera hash del archivo |
| `Get-FileHash -Algorithm MD5 archivo` | Hash MD5 específico |

#### Comparar Hashes de Archivos

| Comando                        | Descripción                                |
|-------------------------------|--------------------------------------------|
| `sha256sum -c archivo.hash`   | Verifica integridad comparando el hash     |

Ejemplo:
-1. Generar el hash original
sha256sum archivo_original.zip > archivo.hash

- 2. Verificar integridad
sha256sum -c archivo.hash
- Salida esperada: archivo_original.zip: OK

### 8.3 Comparación de Archivos

| Comando | Descripción |
|---------|-------------|
| `cmp archivo1 archivo2` | Compara archivos byte a byte |
| `diff archivo1 archivo2` | Muestra diferencias línea por línea |

### 8.4 Herramientas Especializadas de Seguridad

| Comando | Descripción | Uso |
|---------|-------------|-----|
| `fcrackzip -v -u -D -p diccionario.txt archivo.zip` | Descifra ZIP protegido | Auditoría de seguridad |
| `steghide extract -sf imagen.jpg` | Extrae datos ocultos | Análisis forense |
| `steghide embed -cf imagen.jpg -ef archivo.txt` | Oculta datos en imagen | Esteganografía |

## 9. Sistema de Ayuda y Documentación

### 9.1 Manuales y Ayuda

| Comando | Descripción |
|---------|-------------|
| `man comando` | Muestra manual completo del comando |
| `comando --help` | Muestra ayuda breve |
| `apropos palabra` | Busca comandos relacionados |
| `whatis comando` | Muestra descripción breve |

### 9.2 Navegación en Manuales

| Tecla | Acción |
|-------|--------|
| `q` | Salir del manual |
| `q + Enter` | Sale del modo lectura cuando ves "END". |
| `Espacio` | Página siguiente |
| `b` | Página anterior |
| `/texto` | Buscar texto |

## 10. Comando Echo - Salida de Información

### 10.1 Usos Básicos

| Comando | Descripción |
|---------|-------------|
| `echo "Texto"` | Imprime texto en pantalla |
| `echo $USER` | Muestra variable del sistema |
| `echo "Fecha: $(date)"` | Combina texto con comando |

### 10.2 Uso con Variables

```bash
# Definir variable
NOMBRE="Juan"

# Mostrar variable
echo "Hola, $NOMBRE"
echo "Hola, ${NOMBRE}!"
```

## 11. Ejemplos Prácticos Integrados

### 11.1 Creación de Estructura de Proyecto

```bash
# Crear estructura básica
mkdir proyecto
cd proyecto
mkdir src docs tests
touch README.md src/main.py tests/test_main.py

# Verificar estructura
tree .
```

### 11.2 Gestión Completa de Usuarios para Institución

```bash
# 1. Crear grupos institucionales
sudo groupadd profesores
sudo groupadd alumnos
sudo groupadd administradores

# 2. Crear usuarios
sudo adduser garcia
sudo adduser lopez
sudo adduser martinez

# 3. Asignar roles
sudo usermod -aG profesores garcia
sudo usermod -aG alumnos lopez
sudo usermod -aG administradores martinez

# 4. Verificar configuración
grep -E 'profesores|alumnos|administradores' /etc/group
grep -E 'garcia|lopez|martinez' /etc/passwd

# 5. Crear directorios con permisos específicos
sudo mkdir /proyecto_escuela
sudo chown garcia:profesores /proyecto_escuela
sudo chmod 755 /proyecto_escuela
```

### 11.3 Backup y Verificación de Archivos

```bash
# Crear backup
cp -r documentos/ backup_documentos/

# Verificar integridad
find documentos/ -type f -exec sha256sum {} \; > checksums.txt
find backup_documentos/ -type f -exec sha256sum {} \; > checksums_backup.txt

# Comparar
diff checksums.txt checksums_backup.txt
```
### **11.4 Comandos de Información del Sistema**

| Comando | Descripción |
| :--- | :--- |
| `date` | Muestra la fecha y hora actual del sistema. |
| `date +%x` | Muestra la fecha en formato local (ej. `05/20/2025`). |
| **`date +%F`** | **Muestra la fecha en formato ISO (`AÑO-MES-DÍA`).** |
| **`date +%r`** | **Muestra la hora en formato 12h con AM/PM.** |
| `whoami` | Muestra el nombre del usuario con el que has iniciado sesión. |

## 12 🔧 Acceso Remoto y Gestión de Servicios con SSH

Secure Shell (SSH) es el protocolo estándar para acceder y administrar servidores remotos de forma segura.

### 12.1 **Conexión a un Servidor Remoto**
Para conectarte a una máquina remota, necesitas su dirección IP o nombre, un nombre de usuario y sus credenciales (contraseña o clave SSH).

| Tarea | ⭐ Comando Esencial | Opciones Comunes |
| :--- | :--- | :--- |
| **Conexión con Contraseña** | `ssh usuario@<IP_OBJETIVO>` | El método más básico. Te solicitará la contraseña.|
| **Especificar Puerto** | `ssh -p <PUERTO> usuario@<IP_OBJETIVO>` | `-p`: Util si SSH no corre en el puerto estándar 22. |
| **Usar Llave Privada** | `ssh -i /ruta/a/llave.pem usuario@<IP_OBJETIVO>` | `-i`: Archivo para autenticación con llaves (la clave) en lugar de contraseña. |
| **Configurar Login sin Contraseña** | `ssh-copy-id usuario@<IP_OBJETIVO>` | Copia la clave pública al servidor remoto para habilitar el login sin contraseña. |                     |  |

- **📝 Nota sobre la primera conexión SSH**

La primera vez que te conectes a un servidor, verás un mensaje como:

"The authenticity of host 'remotehost' can't be established..."

Escribe `yes` para aceptar y guardar la clave "huella digital" (fingerprint) del servidor del host, protegiendo conexiones futuras.
Esto es normal y esperado en la primera conexión.

### 12.2 Gestión del Servicio SSH (en el Servidor).

Estos comandos se usan en el servidor al que te quieres conectar para asegurarte de que el servicio SSH está funcionando. La mayoría de sistemas modernos usan systemd.

| Acción                          | ⭐ Comando Esencial                  |
|----------------------------------|-------------------------------------|
| Iniciar servicio (temporal)     | `sudo systemctl start ssh`         |
| Habilitar en el arranque (permanente) | `sudo systemctl enable ssh`        |
| Habilitar y arrancar ahora (mixto) | `sudo systemctl enable ssh --now`  |
| Detener servicio (temporal)     | `sudo systemctl stop ssh`          |
| Deshabilitar en el arranque (permanente) | `sudo systemctl disable ssh`       |
| Ver estado del servicio         | `sudo systemctl status ssh`        |
| Reiniciar servicio              | `sudo systemctl restart ssh`       |
| Ver logs del servicio           | `sudo journalctl -u ssh`           |

### 12.3 🧭 Referencia: Gestores de Servicios por Distribución.

| Distribución             | Gestor de Servicios | Comando para iniciar SSH         |
|--------------------------|---------------------|----------------------------------|
| Ubuntu / Debian          | `systemctl`         | `sudo systemctl start ssh`       |
| Arch Linux | Fedora / CentOS / RHEL / OpenSUSE / SUSE | `systemctl`         | `sudo systemctl start sshd` |
| Alpine Linux             | `rc-service`        | `sudo rc-service sshd start`     |
| Gentoo                   | `rc-service`        | `sudo rc-service sshd start`     |
| Devuan                   | `service`           | `sudo service ssh start`         |
| Void Linux               | `runit`             | `sudo sv up sshd`                |
| Slackware                | `rc`                | `sudo rc sshd start`             |
| FreeBSD                  | `service`           | `sudo service sshd start`        |
| OpenBSD / NetBSD / DragonFly BSD | `rc.d` | `sudo rc.d sshd start`        |
| macOS (Homebrew)         | `brew services`     | `brew services start ssh`        |
| macOS (System)           | `launchctl`         | `sudo launchctl load /Library/LaunchDaemons/ssh.iterm` |
| Windows (PowerShell)     | `Start-Service`     | `Start-Service ssh`              |
| Windows (cmd)            | `net start`         | `net start ssh`                  |
| Windows Subsystem for Linux (WSL)  | `wsl`               | `sudo systemctl start ssh` |



### **13. 🌐 Red y Transferencia de Archivos (Referencia Rápida)**

#### **13.1 `wget` – El Descargador No Interactivo**

**Uso principal:** Bajar archivos de internet. Guarda en disco por defecto.

**Comando Básico:** `wget <URL_DEL_ARCHIVO>`

| Flag | Descripción |
| :--- | :--- |
| `-O <archivo>` | Guardar con un **nombre diferente**. |
| `-c` | **Continuar** una descarga interrumpida. |
| `-P <directorio>` | Guardar en un **directorio específico**. |
| `-b` | Descargar en **segundo plano** (background). |
| `-r` | Descarga **recursiva** (clonar un sitio). |
| `--limit-rate=1m` | **Limita la velocidad** de descarga (ej. 1 MB/s). |
| `-i <archivo.txt>` | Descarga **múltiples URLs** de un archivo. |

---

#### **13.2 `curl` – La Navaja Suiza para URLs**

**Uso principal:** Interactuar con URLs (probar APIs, ver cabeceras, transferir datos). Muestra en pantalla por defecto.

**Comando Básico (para guardar archivo):** `curl <URL> -o <nombre_archivo>`

| Flag | Descripción |
| :--- | :--- |
| `-o <archivo>` | Guardar la salida en un **archivo específico**. |
| `-O` | Guardar con el **nombre original** de la URL. |
| `-I` | Mostrar solo las **cabeceras** (headers) de la respuesta. |
| `-X <MÉTODO>` | Especificar el **método HTTP** (ej. `POST`, `PUT`). |
| `-d <datos>` | **Enviar datos** en una petición (ej. para un formulario). |
| `-H <cabecera>` | Añadir una **cabecera HTTP** personalizada. |

## Consejos de Uso

1. **Siempre usa `sudo` con precaución** - Los comandos con privilegios elevados pueden afectar el sistema
2. **Verifica antes de eliminar** - Usa `ls` para confirmar qué vas a eliminar
3. **Usa tab para autocompletar** - Evita errores de escritura
4. **Lee los mensajes de error** - Te indican exactamente qué salió mal
5. **Practica en un entorno seguro** - Usa máquinas virtuales para aprender

## Atajos de Teclado Útiles

| Atajo | Acción |
|-------|--------|
| `bind -p` | Muestra todos los atajos de teclado (key bindings) disponibles en la shell Bash **(Bourne-Again Shell)**. |
| `Ctrl + C` | Interrumpe comando actual |
| `Ctrl + Z` | Suspende proceso |
| `Ctrl + L` | Limpia pantalla (igual que `clear`) |
| `Ctrl + R` | Busca en historial de comandos |
| `Ctrl + D`/ `exit` | Cierra la sesion de shell actual(logout) |
| `Ctrl + shift + T` | Abre nueva pestaña en emulador terminal gráficos (como GNOME Terminal). |
| `Tab` | Autocompleta comandos o rutas. |
| `ls ~/.ssh` | Lista claves y configuración directorio .ssh del usuario (tu ~ home). |
| `↑/↓` | Navegar historial de comandos |



