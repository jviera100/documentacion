# Guía Maestra de Comandos Linux (Versión Exhaustiva)

Esta guía es un compendio detallado y meticuloso de comandos de Linux, diseñada para ser una referencia completa para administradores de sistemas y usuarios avanzados. La estructura está organizada por funcionalidad, desde los conceptos más básicos hasta las operaciones más complejas, integrando las mejores prácticas y la profundidad técnica.

## 0. 📂 Conceptos Fundamentales del Sistema

### 0.1. Jerarquía de Directorios Principales en Linux (FHS)

El Filesystem Hierarchy Standard (FHS) define la estructura de directorios principal en los sistemas Linux.

| Directorio | Propósito Técnico |
| :--- | :--- |
| `/` | **Raíz (Root)**: El directorio principal del cual todos los demás directorios y archivos descienden. |
| `/bin` | **Binarios Esenciales**: Comandos binarios esenciales para todos los usuarios (ej: `ls`, `cp`, `cat`). En sistemas modernos, es un enlace a `/usr/bin`. |
| `/sbin` | **Binarios del Sistema**: Comandos binarios esenciales para la administración del sistema (ej: `reboot`, `iptables`, `fdisk`). Enlace a `/usr/sbin`. |
| `/etc` | **Configuración (Etcetera)**: Archivos de configuración específicos del host para todo el sistema. |
| `/home` | **Directorios de Usuario**: Contiene los directorios personales para los usuarios del sistema. |
| `/root` | **Home de Root**: El directorio personal para el superusuario (root). |
| `/usr` | **Recursos del Sistema de Usuario**: Datos de solo lectura compartibles, incluyendo binarios, librerías, documentación y código fuente. |
| `/var` | **Archivos Variables**: Archivos que se espera que crezcan y cambien de tamaño, como logs, bases de datos, y colas de correo/impresión. |
| `/tmp` | **Archivos Temporales**: Archivos temporales que pueden ser eliminados entre reinicios del sistema. |
| `/dev` | **Archivos de Dispositivo**: Representaciones de dispositivos de hardware y software (ej: `/dev/sda1`, `/dev/null`). |
| `/proc` | **Sistema de Archivos de Procesos**: Un sistema de archivos virtual que proporciona información sobre los procesos y el kernel en tiempo real. |
| `/boot` | **Archivos de Arranque**: Archivos estáticos del gestor de arranque (boot loader), como el kernel de Linux (`vmlinuz`) y el `initramfs`. |
| `/lib` | **Librerías Esenciales**: Librerías compartidas esenciales para los binarios en `/bin` y `/sbin`. Enlace a `/usr/lib`. |
| `/lib64` | **Librerías de 64 bits**: Librerías esenciales de 64 bits. Enlace a `/usr/lib64`. |
| `/opt` | **Software Opcional**: Software de aplicaciones de terceros. |
| `/mnt` | **Montaje Temporal**: Punto de montaje genérico para sistemas de archivos montados temporalmente por un administrador. |
| `/media` | **Medios Removibles**: Punto de montaje para medios removibles como CDs o unidades USB. |
| `/run` | **Datos en Tiempo de Ejecución**: Datos variables de tiempo de ejecución. Información sobre el sistema en ejecución desde el último arranque. |
| `/sys` | **Sistema de Archivos del Sistema**: Un sistema de archivos virtual que contiene información sobre dispositivos, drivers y el kernel. |

### 0.2. Archivos de Configuración Clave en `/etc`

| Archivo/Directorio | Propósito Técnico |
| :--- | :--- |
| `/etc/passwd` | Base de datos de usuarios: nombre, UID, GID, shell, directorio personal. |
| `/etc/shadow` | Contraseñas de usuario encriptadas y políticas de expiración. |
| `/etc/group` | Define los grupos del sistema y sus miembros. |
| `/etc/gshadow` | Contraseñas de grupo encriptadas. |
| `/etc/fstab` | **F**ile **S**ystem **Tab**le: Sistemas de archivos a montar automáticamente en el arranque. |
| `/etc/crontab` | Tareas programadas a nivel de sistema (cron jobs). |
| `/etc/sudoers` | Archivo de configuración principal para el comando `sudo`. **Usar `visudo` para editar.** |
| `/etc/sudoers.d/` | Directorio para archivos de configuración adicionales de `sudo`. |
| `/etc/hostname` | Nombre de host del sistema. |
| `/etc/hosts` | Mapeo estático de direcciones IP a nombres de host. |
| `/etc/resolv.conf` | Configuración de los servidores de nombres DNS. |
| `/etc/nsswitch.conf` | **N**ame **S**ervice **S**witch: Configura el orden de resolución de nombres (ej: hosts, dns). |
| `/etc/login.defs` | Configuración predeterminada para la creación de usuarios y políticas de contraseñas. |
| `/etc/skel/` | **Skel**eton: Directorio que contiene archivos y directorios modelo que se copian al home de un nuevo usuario. |
| `/etc/systemd/system/` | Unidades de `systemd` personalizadas o modificadas por el administrador. |
| `/etc/motd` | **M**essage **o**f **t**he **D**ay: Mensaje mostrado a los usuarios después de un inicio de sesión exitoso. |
| `/etc/issue` | Mensaje mostrado *antes* del prompt de login en consolas locales. |

---

## 1. 🧭 Navegación y Exploración del Sistema

### 1.1. Ubicación y Navegación

| Comando | Descripción | Ejemplo |
| :--- | :--- | :--- |
| `pwd` | **P**rint **W**orking **D**irectory. Muestra la ruta absoluta del directorio actual. | `pwd` |
| `cd [ruta]` | **C**hange **D**irectory. Cambia el directorio de trabajo actual. | `cd /var/log` |
| `cd ~` o `cd` | Cambia al directorio "home" del usuario actual. | `cd` |
| `cd ..` | Cambia al directorio padre del actual. | `cd ..` |
| `cd -` | Cambia al directorio de trabajo anterior. | `cd -` |
| `cd /` | Cambia al directorio raíz del sistema. | `cd /` |

### 1.2. Listado de Contenidos

| Comando | Descripción |
| :--- | :--- |
| `ls` | **L**i**s**t. Lista archivos y directorios. |
| `ls -l` | Formato largo, muestra permisos, propietario, tamaño, fecha. |
| `ls -a` | Muestra todos los archivos, incluyendo los ocultos (que empiezan con `.`). |
| `ls -h` | Muestra los tamaños en formato legible por humanos (KB, MB, GB). |
| `ls -t` | Ordena los archivos por fecha de modificación (los más nuevos primero). |
| `ls -r` | Invierte el orden de la clasificación. `ls -ltr` es muy común para ver los archivos más recientes al final. |
| `ls -R` | Lista el contenido de los directorios de forma recursiva. |
| `ls -d */` | Lista solo los directorios en la ubicación actual. |
| `ls -i` | Muestra el número de inodo de cada archivo. |
| `ls -F` | Agrega un indicador de tipo de archivo (`/` para directorios, `*` para ejecutables, `@` para enlaces simbólicos). |
| `tree` | Muestra la estructura de directorios en forma de árbol (puede necesitar instalación: `dnf install tree`). |
| `tree -L [nivel]` | Limita la profundidad del árbol a `[nivel]` niveles. |

### 1.3. Análisis de Espacio en Disco

| Comando | Descripción |
| :--- | :--- |
| `df` | **D**isk **F**ree. Muestra el uso de espacio en disco por sistema de archivos. |
| `df -h` | Muestra el uso de disco en formato legible por humanos. **(Más usado)** |
| `df -hT` | Muestra el uso de disco y el tipo de sistema de archivos (ext4, xfs, etc.). |
| `df -i` | Muestra el uso de inodos en lugar de bloques. |
| `du` | **D**isk **U**sage. Estima el espacio usado por archivos y directorios. |
| `du -h` | Muestra los tamaños en formato legible. |
| `du -s` | **S**ummarize. Muestra solo un total para cada argumento. |
| `du -sh [directorio]` | Muestra el tamaño total de un directorio en formato legible. **(Esencial)** |
| `du -h --max-depth=1` | Muestra el tamaño de los directorios y archivos en el nivel actual, sin profundizar más. |

### 1.4. Análisis de Memoria

| Comando | Descripción |
| :--- | :--- |
| `free` | Muestra la cantidad de memoria RAM y swap libre y usada. |
| `free -h` | Muestra la salida en formato legible por humanos. **(Más usado)** |
| `free -m` / `-g` | Muestra la salida en Megabytes / Gigabytes. |
| `free -t` | Muestra una línea con el total de RAM y swap. |

### 1.5. Información del Sistema y Hardware

| Comando | Descripción |
| :--- | :--- |
| `uname -a` | Muestra toda la información del kernel de Linux. |
| `lscpu` | Muestra información sobre la arquitectura de la CPU. |
| `lsblk` | **L**i**s**t **Bl**oc**k** Devices. Lista los dispositivos de bloque (discos, particiones). |
| `lspci` | Lista todos los dispositivos PCI. |
| `lsusb` | Lista todos los dispositivos USB. |
| `hostname` | Muestra o establece el nombre de host del sistema. |
| `hostnamectl` | Controla el nombre de host del sistema (método moderno con systemd). |
| `date` | Muestra o establece la fecha y hora del sistema. |
| `uptime` | Muestra cuánto tiempo ha estado funcionando el sistema, los usuarios conectados y el promedio de carga. |

---

## 2. 🗄️ Gestión de Archivos y Directorios

### 2.1. Creación

| Comando | Descripción | Ejemplo |
| :--- | :--- | :--- |
| `touch [archivo]` | Crea un archivo vacío si no existe, o actualiza su fecha de modificación si ya existe. | `touch mi_archivo.txt` |
| `touch a b c` | Crea múltiples archivos. | `touch file{1..3}.txt` |
| `mkdir [directorio]` | **M**a**k**e **Dir**ectory. Crea un nuevo directorio. | `mkdir mi_directorio` |
| `mkdir -p [ruta]` | Crea un directorio, incluyendo todos los directorios padres necesarios en la ruta. | `mkdir -p proyectos/año/mes` |

### 2.2. Copia

| Comando | Descripción | Ejemplo |
| :--- | :--- | :--- |
| `cp [origen] [destino]` | **C**o**p**y. Copia archivos o directorios. | `cp archivo.txt copia.txt` |
| `cp [archivo] [dir]/` | Copia un archivo a un directorio. | `cp reporte.pdf ~/Documentos/` |
| `cp -r [dir1] [dir2]` | Copia un directorio y todo su contenido de forma **r**ecursiva. | `cp -r /var/log /tmp/backup_logs` |
| `cp -v` | **V**erbose. Muestra lo que se está haciendo. | `cp -v *.txt backups/` |
| `cp -p` | **P**reserve. Conserva los atributos del archivo (modo, propietario, fechas). | `cp -p archivo_original nuevo_archivo` |
| `cp -a` | **A**rchive. Equivale a `-pPR`, preserva todo y copia recursivamente. Ideal para backups. | `cp -a /origen /destino` |

### 2.3. Movimiento y Renombrado

| Comando | Descripción | Ejemplo |
| :--- | :--- | :--- |
| `mv [origen] [destino]` | **M**o**v**e. Mueve o renombra archivos y directorios. | `mv reporte.txt report_final.txt` |
| `mv [archivo] [dir]/` | Mueve un archivo a un directorio. | `mv imagen.jpg ~/Imágenes/` |
| `mv -v` | **V**erbose. Muestra lo que se está haciendo. | `mv -v *.log logs_archivados/` |
| `mv -i` | **I**nteractive. Pide confirmación antes de sobrescribir. | `mv -i archivo.conf /etc/` |
| `mv -n` | **N**o-clobber. No sobrescribe un archivo existente en el destino. | `mv -n * /destino_comun/` |

### 2.4. Eliminación

| Comando | Descripción | **PRECAUCIÓN** |
| :--- | :--- | :--- |
| `rm [archivo]` | **R**e**m**ove. Elimina archivos. | **¡IRREVERSIBLE!** No hay papelera de reciclaje en la CLI. |
| `rm -f [archivo]` | **F**orce. Fuerza la eliminación sin pedir confirmación. | Usar con extremo cuidado. |
| `rm -r [directorio]` | **R**ecursive. Elimina un directorio y todo su contenido. | **¡MUY PELIGROSO!** Puede borrar grandes cantidades de datos. |
| `rm -rf [directorio]` | Elimina forzada y recursivamente. | **EL COMANDO MÁS PELIGROSO DE LINUX.** Verifica dos veces la ruta. |
| `rm -i` | **I**nteractive. Pide confirmación para cada eliminación. | Recomendado para principiantes o al borrar con comodines. |
| `rmdir [directorio]` | **R**e**m**ove **Dir**ectory. Elimina un directorio, pero **solo si está vacío**. | Es más seguro que `rm -r`. |

### 2.5. Enlaces (Links)

Los enlaces son "accesos directos" a otros archivos o directorios.

#### Enlaces Duros (Hard Links)

| Comando | Descripción |
| :--- | :--- |
| `ln [archivo_original] [enlace_duro]` | Crea un enlace duro. Es otro nombre para los mismos datos en el disco. |
| `ls -i` | Muestra el número de inodo. Los enlaces duros comparten el mismo inodo. |

**Características de los Enlaces Duros:**
- No se pueden crear para directorios.
- Solo funcionan dentro del mismo sistema de archivos.
- El archivo original no se elimina hasta que se borra el último enlace duro que apunta a él.

#### Enlaces Simbólicos (Symbolic Links o Soft Links)

| Comando | Descripción |
| :--- | :--- |
| `ln -s [ruta_original] [enlace_simbólico]` | Crea un enlace simbólico. Apunta a una *ruta*, no a los datos directamente. |
| `ls -l` | Muestra a dónde apunta el enlace simbólico (ej: `enlace -> /ruta/original`). |

**Características de los Enlaces Simbólicos:**
- Pueden apuntar a directorios.
- Pueden cruzar sistemas de archivos.
- Si el archivo original se elimina, el enlace simbólico queda "roto" (dangling link).
- **Se recomienda usar rutas absolutas al crearlos para evitar problemas.**

---

## 3. 📝 Visualización y Manipulación de Contenido

### 3.1. Visualización de Archivos

| Comando | Descripción | Uso Recomendado |
| :--- | :--- | :--- |
| `cat [archivo]` | **Cat**enate. Muestra el contenido completo de uno o más archivos. | Archivos pequeños. |
| `less [archivo]` | Visor de texto paginado. Permite navegar hacia adelante y atrás. | **El mejor visor para archivos grandes.** (Usa las flechas, `PageUp/Down`, `/` para buscar, `q` para salir). |
| `more [archivo]` | Visor de texto paginado más antiguo. Solo permite avanzar. | `less` es superior. |
| `head [archivo]` | Muestra las primeras 10 líneas de un archivo. | `head -n 20 archivo.log` para ver 20 líneas. |
| `tail [archivo]` | Muestra las últimas 10 líneas de un archivo. | `tail -n 50 archivo.log` para ver 50 líneas. |
| `tail -f [archivo]` | **F**ollow. Muestra las últimas líneas y sigue mostrando el contenido nuevo que se añade. | **Esencial para monitorear logs en tiempo real.** |

### 3.2. Edición de Archivos de Texto

| Editor | Descripción | Nivel |
| :--- | :--- | :--- |
| `nano` | Editor de texto simple y muy intuitivo. Los comandos se muestran en la parte inferior. | Principiante |
| `vim` / `vi` | Editor de texto modal muy potente y eficiente. Requiere aprendizaje. | Intermedio/Avanzado |
| `emacs` | Un editor de texto extensible, personalizable y autodocumentado. | Avanzado |

### 3.3. Redirección de Entrada/Salida (I/O)

Controla de dónde vienen los datos (entrada) y a dónde van (salida).

| Operador | Nombre | Descripción | Ejemplo |
| :--- | :--- | :--- |
| `>` | Redirección de Salida | Envía la salida estándar (stdout) a un archivo, **sobrescribiéndolo**. | `ls -l > lista_archivos.txt` |
| `>>` | Anexar Salida | Envía la salida estándar (stdout) a un archivo, **agregándola al final**. | `echo "Nuevo log" >> sistema.log` |
| `<` | Redirección de Entrada | Toma la entrada estándar (stdin) de un archivo en lugar del teclado. | `sort < lista_desordenada.txt` |
| `2>` | Redirección de Error | Envía la salida de error estándar (stderr) a un archivo, **sobrescribiéndolo**. | `find / -name "*.conf" 2> errores.txt` |
| `2>>` | Anexar Error | Envía la salida de error estándar (stderr) a un archivo, **agregándola al final**. | `comando_erroneo 2>> log_de_errores.txt` |
| `&>` o `>&` | Redirigir stdout y stderr | Envía tanto la salida estándar como el error estándar al mismo archivo. | `comando &> salida_completa.txt` |
| `/dev/null` | El Agujero Negro | Un archivo especial que descarta todo lo que se le escribe. | `comando_ruidoso 2> /dev/null` |

### 3.4. Tuberías (Pipes)

Las tuberías (`|`) son una de las herramientas más potentes de la línea de comandos. Conectan la salida estándar de un comando con la entrada estándar del siguiente.

| Comando | Descripción |
| :--- | :--- |
| `ls -l /etc | less` | Muestra el listado largo de `/etc` usando el paginador `less`. |
| `history | grep "ssh"` | Busca la palabra "ssh" en el historial de comandos. |
| `ps aux | grep "httpd"` | Muestra todos los procesos y filtra solo los que contienen "httpd". |
| `cat archivo.log | sort | uniq -c` | Muestra el contenido, lo ordena, y luego cuenta las líneas únicas adyacentes. |

### 3.5. Comandos de Procesamiento de Texto

| Comando | Descripción | Ejemplo |
| :--- | :--- | :--- |
| `grep [patrón] [archivo]` | **G**lobal **R**egular **E**xpression **P**rint. Busca líneas que coincidan con un patrón. | `grep -i "error" /var/log/messages` |
| `wc` | **W**ord **C**ount. Cuenta líneas, palabras y caracteres. | `wc -l archivo.txt` (cuenta solo líneas). |
| `sort` | Ordena las líneas de un archivo de texto. | `sort -n datos.txt` (ordena numéricamente). |
| `uniq` | Reporta o filtra líneas repetidas adyacentes. | `uniq -c` (cuenta las ocurrencias). |
| `cut` | Elimina secciones de cada línea de archivos. | `cut -d':' -f1 /etc/passwd` (corta por `:` y toma el campo 1). |
| `tr` | **Tr**anslate. Traduce o elimina caracteres. | `cat archivo.txt | tr 'a-z' 'A-Z'` (convierte a mayúsculas). |
| `sed` | **S**tream **Ed**itor. Editor de flujo para filtrar y transformar texto. | `sed 's/viejo/nuevo/g' archivo.txt` (sustituye texto). |
| `awk` | Lenguaje de programación para procesar y analizar texto. | `awk '{print $1, $3}' archivo.txt` (imprime columnas). |
| `diff` | Compara archivos línea por línea. | `diff archivo1.conf archivo2.conf` |
| `tee` | Lee de la entrada estándar y escribe a la salida estándar y a archivos. | `ls -l | tee listado.txt` (muestra en pantalla y guarda en archivo). |

---

## 4. 🔍 Búsqueda y Filtrado

### 4.1. Búsqueda de Archivos

| Comando | Descripción | Ejemplo |
| :--- | :--- | :--- |
| `find [ruta] [expresión]` | Herramienta de búsqueda muy potente y flexible. | `find /home/user -name "*.pdf"` |
| `locate [patrón]` | Busca archivos usando una base de datos pre-construida. Es muy rápido. | `locate httpd.conf` |
| `updatedb` | Actualiza la base de datos de `locate` (requiere `sudo`). | `sudo updatedb` |
| `which [comando]` | Muestra la ruta completa del ejecutable de un comando. | `which python` |
| `whereis [comando]` | Localiza el binario, la fuente y la página del manual de un comando. | `whereis ls` |

#### Opciones Avanzadas de `find`

`find` es extremadamente potente. Su sintaxis es `find [ruta...] [opciones] [acción]`.

| Opción de `find` | Descripción | Ejemplo |
| :--- | :--- | :--- |
| `-name [patrón]` | Busca por nombre de archivo (sensible a mayúsculas). | `find . -name "MiFoto.JPG"` |
| `-iname [patrón]` | Busca por nombre de archivo (**i**nsensible a mayúsculas). | `find . -iname "mifoto.jpg"` |
| `-type [f/d/l]` | Busca por tipo de archivo: **f**ile (archivo), **d**irectory (directorio), **l**ink (enlace). | `find /etc -type d` |
| `-user [nombre]` | Busca archivos cuyo propietario es `[nombre]`. | `find /home -user juan` |
| `-group [nombre]` | Busca archivos cuyo grupo propietario es `[nombre]`. | `find /var/www -group apache` |
| `-perm [modo]` | Busca archivos con permisos exactos a `[modo]`. | `find . -perm 644` |
| `-perm -[modo]` | Busca archivos que tengan *al menos* los permisos de `[modo]` (más común). | `find . -perm -644` |
| `-size [+/-][n][c/k/M/G]` | Busca por tamaño. `+` (más de), `-` (menos de). `c` (bytes), `k` (KB), `M` (MB), `G` (GB). | `find / -size +100M` |
| `-mtime [-/+]n` | Busca archivos modificados en las últimas `n`*24 horas. `-n` (hace menos de n días), `+n` (hace más de n días). | `find . -mtime -7` |
| `-mmin [-/+]n` | Busca archivos modificados en los últimos `n` minutos. | `find . -mmin -60` |
| `-exec [comando] {} \;` | Ejecuta `[comando]` en cada archivo encontrado. `{}` se reemplaza por el nombre del archivo. | `find . -type f -name "*.tmp" -exec rm -f {} \;` |
| `-delete` | Elimina los archivos encontrados. Más eficiente que `-exec rm`. | `find . -type f -name "*.bak" -delete` |

### 4.2. Búsqueda de Contenido en Archivos (`grep`)

| Comando | Descripción | Ejemplo |
| :--- | :--- | :--- |
| `grep [patrón] [archivo]` | Busca un patrón dentro de uno o más archivos. | `grep "root" /etc/passwd` |
| `grep -r [patrón] [dir]` | Busca de forma **r**ecursiva en un directorio. | `grep -r "API_KEY" /var/www` |
| `grep -i [patrón]` | Búsqueda **i**nsensible a mayúsculas/minúsculas. | `grep -i "failure" app.log` |
| `grep -v [patrón]` | **V**erbatim. Muestra las líneas que **NO** coinciden con el patrón. | `ps aux | grep -v "grep"` |
| `grep -l [patrón] [archivos]` | Muestra solo los nombres de los archivos (`l`ist) que contienen el patrón. | `grep -l "main" *.py` |
| `grep -c [patrón] [archivo]` | Muestra un recuento (`c`ount) de las líneas que coinciden. | `grep -c "error" system.log` |
| `grep -n [patrón] [archivo]` | Muestra el número (`n`umber) de línea junto a la línea coincidente. | `grep -n "config" setup.py` |
| `grep -E [patrón]` | Usa Expresiones Regulares Extendidas (ERE). Permite `+`, `?`, `|`. | `grep -E "warn|error" app.log` |

---

## 5. 🔐 Gestión de Permisos de Archivos

### 5.1. Interpretación de Permisos

La salida de `ls -l` muestra los permisos en un formato de 10 caracteres: `d rwx r-x r--`

- **Carácter 1**: Tipo de archivo (`d`: directorio, `-`: archivo, `l`: enlace simbólico).
- **Caracteres 2-4**: Permisos para el **Usuario** (propietario).
- **Caracteres 5-7**: Permisos para el **Grupo** propietario.
- **Caracteres 8-10**: Permisos para **Otros** (todos los demás).

| Permiso | Símbolo | Significado para Archivos | Significado para Directorios |
| :--- | :--- | :--- | :--- |
| Lectura | `r` | Se puede leer el contenido del archivo. | Se puede listar el contenido del directorio (`ls`). |
| Escritura | `w` | Se puede modificar el contenido del archivo. | Se pueden crear/eliminar/renombrar archivos dentro del directorio. |
| Ejecución | `x` | Se puede ejecutar el archivo (si es un script o programa). | Se puede entrar (`cd`) al directorio. |

### 5.2. Cambio de Permisos (`chmod`)

| Método | Comando | Descripción |
| :--- | :--- | :--- |
| **Simbólico** | `chmod [quién][operador][permiso] [archivo]` | El método más intuitivo. |
| **Octal** | `chmod [números] [archivo]` | El método más rápido y común para administradores. |

#### Método Simbólico

- **Quién**: `u` (usuario), `g` (grupo), `o` (otros), `a` (todos).
- **Operador**: `+` (añadir), `-` (quitar), `=` (establecer exactamente).
- **Permiso**: `r` (lectura), `w` (escritura), `x` (ejecución).

| Ejemplo | Descripción |
| :--- | :--- |
| `chmod u+x script.sh` | Añade permiso de ejecución para el usuario. |
| `chmod g-w datos.txt` | Quita permiso de escritura para el grupo. |
| `chmod o=r config.conf` | Establece que otros solo tengan permiso de lectura. |
| `chmod a+r archivo.log` | Añade permiso de lectura para todos. |
| `chmod -R g+w proyecto/` | Añade recursivamente permiso de escritura para el grupo en un directorio. |

#### Método Octal

Se basa en la suma de valores numéricos para cada conjunto de permisos:
- `r` = 4
- `w` = 2
- `x` = 1

| Número | Permisos | Descripción |
| :--- | :--- | :--- |
| 7 | `rwx` | Lectura, escritura y ejecución (4+2+1). |
| 6 | `rw-` | Lectura y escritura (4+2). |
| 5 | `r-x` | Lectura y ejecución (4+1). |
| 4 | `r--` | Solo lectura (4). |
| 0 | `---` | Sin permisos. |

| Ejemplo | Equivalente a | Uso Común |
| :--- | :--- | :--- |
| `chmod 755 script.sh` | `u=rwx,go=r-x` | Scripts y programas ejecutables. |
| `chmod 644 archivo.txt` | `u=rw,go=r` | Archivos de texto y datos estándar. |
| `chmod 777 temporal/` | `a=rwx` | **INSEGURO.** A veces usado para directorios temporales. Evitar si es posible. |
| `chmod 600 clave_privada` | `u=rw,go=` | Archivos sensibles que solo el propietario debe leer/escribir. |
| `chmod 770 dir_compartido/`| `ug=rwx,o=` | Directorio compartido para un grupo, sin acceso para otros. |

### 5.3. Cambio de Propietario (`chown` y `chgrp`)

| Comando | Descripción | Requiere `sudo` |
| :--- | :--- | :--- |
| `chown [usuario] [archivo]` | **Ch**ange **Own**er. Cambia el usuario propietario de un archivo. | Sí |
| `chown [usuario]:[grupo] [archivo]` | Cambia tanto el usuario como el grupo propietario a la vez. | Sí |
| `chgrp [grupo] [archivo]` | **Ch**ange **Gr**ou**p**. Cambia solo el grupo propietario. | Sí (a menos que seas el propietario y miembro del nuevo grupo). |
| `chown -R [usuario] [directorio]` | Cambia la propiedad de un directorio y todo su contenido de forma **R**ecursiva. | Sí |

### 5.4. Permisos Especiales

| Permiso | Octal | Descripción |
| :--- | :--- | :--- |
| **SUID** (Set User ID) | `4` | Un ejecutable con SUID se ejecuta con los permisos de su propietario, no del usuario que lo ejecuta. (Ej: `passwd`). Se ve como una `s` en los permisos del usuario (`-rwsr-xr-x`). |
| **SGID** (Set Group ID) | `2` | En un ejecutable, se ejecuta con los permisos del grupo propietario. En un directorio, los nuevos archivos creados heredan el grupo del directorio. Se ve como una `s` en los permisos del grupo (`-rwxr-sr-x`). |
| **Sticky Bit** | `1` | En un directorio, solo el propietario del archivo (o root) puede eliminar o renombrar un archivo, incluso si otros tienen permisos de escritura en el directorio. (Ej: `/tmp`). Se ve como una `t` en los permisos de otros (`drwxrwxrwt`). |

| Ejemplo | Descripción |
| :--- | :--- |
| `chmod u+s /usr/local/bin/mi_app` | Añade el bit SUID. |
| `chmod g+s /datos/compartidos` | Añade el bit SGID a un directorio compartido. |
| `chmod +t /espacio/publico` | Añade el Sticky Bit. |
| `chmod 4755 ejecutable` | Establece SUID y permisos `rwxr-xr-x`. |
| `chmod 2775 dir_grupo` | Establece SGID y permisos `rwxrwxr-x`. |
| `chmod 1777 /tmp` | Establece Sticky Bit y permisos `rwxrwxrwx`. |

### 5.5. Máscara de Permisos por Defecto (`umask`)

El comando `umask` establece los permisos por defecto para los nuevos archivos y directorios. La máscara se "resta" de los permisos base (`666` para archivos, `777` para directorios).

| Comando | Descripción |
| :--- | :--- |
| `umask` | Muestra la máscara actual en formato octal. |
| `umask -S` | Muestra la máscara en formato simbólico (los permisos que se *permiten*). |
| `umask 022` | Una máscara común. Archivos: `644`, Directorios: `755`. |
| `umask 077` | Una máscara muy restrictiva. Archivos: `600`, Directorios: `700`. |

---

## 6. 👤 Gestión de Usuarios y Grupos

La administración de usuarios y grupos es una tarea fundamental en Linux. Todos los comandos de esta sección generalmente requieren privilegios de `sudo`.

### 6.1. Archivos de Configuración Principales

| Archivo | Contenido y Formato (separado por `:`) |
| :--- | :--- |
| `/etc/passwd` | `nombre:x:UID:GID:comentario:directorio_home:shell_login` |
| `/etc/shadow` | `nombre:contraseña_hash:último_cambio:edad_mín:edad_máx:aviso:inactividad:expiración:` |
| `/etc/group` | `nombre_grupo:x:GID:lista_de_miembros_secundarios` |
| `/etc/gshadow` | `nombre_grupo:contraseña_grupo:administradores_grupo:miembros_grupo` |

### 6.2. Comandos de Consulta de Identidad

| Comando | Descripción |
| :--- | :--- |
| `id [usuario]` | Muestra el User ID (UID), Group ID (GID) primario y grupos a los que pertenece un usuario. |
| `groups [usuario]` | Muestra solo los grupos a los que pertenece un usuario. |
| `whoami` | Muestra el nombre del usuario actual. |
| `who` | Muestra quién está conectado al sistema. |
| `w` | Muestra quién está conectado y qué están haciendo. |
| `last` | Muestra un listado de los últimos inicios de sesión en el sistema. |
| `getent [db] [llave]` | Obtiene entradas de bases de datos administrativas. Útil para ver usuarios/grupos (`getent passwd juan`). |

### 6.3. Gestión de Usuarios

#### `useradd`: Creación de Usuarios

| Opción | Descripción | Ejemplo |
| :--- | :--- | :--- |
| `useradd [nombre]` | Crea un usuario con los valores por defecto. | `sudo useradd juan` |
| `-c "[comentario]"` | Añade un comentario (ej: nombre completo). | `sudo useradd -c "Juan Pérez" juan` |
| `-d [ruta]` | Especifica la ruta del directorio home. | `sudo useradd -d /web/juan juan` |
| `-m` | Crea el directorio home si no existe. **(Generalmente deseado)** | `sudo useradd -m juan` |
| `-g [grupo]` | Especifica el GID o nombre del grupo primario. | `sudo useradd -g desarrolladores juan` |
| `-G [grupos]` | Especifica una lista de grupos secundarios (separados por comas). | `sudo useradd -G wheel,docker juan` |
| `-s [shell]` | Especifica el shell de login del usuario. | `sudo useradd -s /bin/bash juan` |
| `-u [UID]` | Especifica el User ID (UID) para el usuario. | `sudo useradd -u 1001 juan` |
| `-r` | Crea un usuario de sistema (UID bajo). | `sudo useradd -r nginx_user` |

#### `usermod`: Modificación de Usuarios

| Opción | Descripción | Ejemplo |
| :--- | :--- | :--- |
| `-c "[comentario]"` | Cambia el campo de comentario. | `sudo usermod -c "Juan A. Pérez" juan` |
| `-d [ruta]` | Cambia el directorio home. Usar con `-m` para mover el contenido. | `sudo usermod -d /newhome/juan -m juan` |
| `-g [grupo]` | Cambia el grupo primario. | `sudo usermod -g sysadmins juan` |
| `-G [grupos]` | Reemplaza la lista de grupos secundarios. | `sudo usermod -G wheel,produccion juan` |
| `-aG [grupo]` | **A**ñade (`-a`) un usuario a un grupo secundario **sin quitarlo de otros**. | `sudo usermod -aG docker juan` |
| `-l [nuevo_nombre]` | Cambia el nombre de usuario. | `sudo usermod -l j.perez juan` |
| `-s [shell]` | Cambia el shell de login. | `sudo usermod -s /sbin/nologin juan` |
| `-L` | **L**ock. Bloquea la cuenta del usuario (pone un `!` en el hash de la contraseña). | `sudo usermod -L juan` |
| `-U` | **U**nlock. Desbloquea la cuenta del usuario. | `sudo usermod -U juan` |
| `-e [YYYY-MM-DD]` | Establece la fecha de expiración de la cuenta. | `sudo usermod -e 2024-12-31 juan` |

#### `userdel`: Eliminación de Usuarios

| Opción | Descripción | Ejemplo |
| :--- | :--- | :--- |
| `userdel [nombre]` | Elimina un usuario, pero **no borra su directorio home**. | `sudo userdel juan` |
| `-r` | **R**emove. Elimina un usuario **y su directorio home y cola de correo**. | `sudo userdel -r juan` |

### 6.4. Gestión de Grupos

| Comando | Descripción | Ejemplo |
| :--- | :--- | :--- |
| `groupadd [nombre]` | Crea un nuevo grupo. | `sudo groupadd desarrolladores` |
| `groupadd -g [GID]` | Crea un grupo con un Group ID (GID) específico. | `sudo groupadd -g 1500 desarrolladores` |
| `groupmod -n [nuevo]` | Cambia el **n**ombre de un grupo. | `sudo groupmod -n devs desarrolladores` |
| `groupmod -g [GID]` | Cambia el **G**ID de un grupo. | `sudo groupmod -g 1501 devs` |
| `groupdel [nombre]` | Elimina un grupo. | `sudo groupdel devs` |
| `newgrp [grupo]` | Cambia el grupo primario del usuario en un nuevo shell. | `newgrp docker` |

### 6.5. Gestión de Contraseñas y Políticas

| Comando | Descripción | Ejemplo |
| :--- | :--- | :--- |
| `passwd` | Permite al usuario actual cambiar su propia contraseña. | `passwd` |
| `passwd [usuario]` | Permite a `root` cambiar la contraseña de cualquier usuario. | `sudo passwd juan` |
| `passwd -l [usuario]` | Bloquea la cuenta (equivalente a `usermod -L`). | `sudo passwd -l juan` |
| `passwd -u [usuario]` | Desbloquea la cuenta (equivalente a `usermod -U`). | `sudo passwd -u juan` |
| `passwd -d [usuario]` | Elimina la contraseña de un usuario (permite login sin contraseña, **muy inseguro**). | `sudo passwd -d juan` |
| `passwd -S [usuario]` | Muestra el estado de la contraseña de una cuenta. | `sudo passwd -S juan` |

#### `chage`: Control de Antigüedad de Contraseñas

| Opción | Descripción | Ejemplo |
| :--- | :--- | :--- |
| `chage -l [usuario]` | **L**ist. Muestra la política de expiración de contraseña para un usuario. | `sudo chage -l juan` |
| `chage -m [días]` | Días **m**ínimos entre cambios de contraseña. `0` para permitir cambios en cualquier momento. | `sudo chage -m 1 juan` |
| `chage -M [días]` | Días **M**áximos de validez de la contraseña. | `sudo chage -M 90 juan` |
| `chage -W [días]` | Días de a**W**iso (Warning) antes de que la contraseña expire. | `sudo chage -W 7 juan` |
| `chage -I [días]` | Días de **I**nactividad permitidos después de que la contraseña expire antes de bloquear la cuenta. | `sudo chage -I 14 juan` |
| `chage -E [YYYY-MM-DD]` | Fecha de **E**xpiración de la cuenta. | `sudo chage -E 2024-12-31 juan` |
| `chage -d 0 [usuario]` | Establece la fecha del último cambio a 0 (1 de Enero de 1970), forzando al usuario a cambiarla en el próximo login. | `sudo chage -d 0 juan` |

### 6.6. Elevación de Privilegios

| Comando | Descripción |
| :--- | :--- |
| `su [usuario]` | **S**ubstitute **U**ser. Cambia al `[usuario]`. No carga el perfil del nuevo usuario (entorno "sucio"). |
| `su - [usuario]` | Inicia un shell de login como `[usuario]`. Carga el perfil del nuevo usuario (entorno "limpio"). **Recomendado.** |
| `sudo [comando]` | **S**uper**u**ser **Do**. Ejecuta un único comando con privilegios de `root` (o de otro usuario). |
| `sudo -i` o `sudo -s` | Inicia un shell interactivo como `root`. `-i` simula un login completo. |
| `sudo -u [usuario] [cmd]` | Ejecuta un comando como otro usuario, no como `root`. |
| `visudo` | **El único método seguro para editar `/etc/sudoers`**. Realiza una comprobación de sintaxis antes de guardar. |

#### Sintaxis Básica de `/etc/sudoers`

La sintaxis general es `quién dónde = (como_quién) qué_comando`.

| Ejemplo de Regla | Descripción |
| :--- | :--- |
| `root ALL=(ALL:ALL) ALL` | El usuario `root` puede ejecutar cualquier comando en cualquier host como cualquier usuario/grupo. |
| `%wheel ALL=(ALL) ALL` | Cualquier miembro del grupo `wheel` puede ejecutar cualquier comando. |
| `juan ALL=(ALL) /usr/sbin/reboot` | El usuario `juan` puede ejecutar el comando `reboot`. |
| `sara ALL=(ALL) NOPASSWD: ALL` | La usuaria `sara` puede ejecutar cualquier comando sin que se le pida la contraseña. **(Usar con precaución)**. |

---

## 7. ⚙️ Gestión de Procesos

Un proceso es una instancia de un programa en ejecución. La gestión de procesos es clave para el monitoreo y la estabilidad del sistema.

### 7.1. Visualización de Procesos

| Comando | Descripción |
| :--- | :--- |
| `ps` | **P**rocess **S**tatus. Muestra los procesos del shell actual. |
| `ps aux` | Muestra **a**ll (todos) los procesos, en formato de **u**suario, incluyendo los que no tienen terminal (**x**). (Sintaxis BSD). |
| `ps -ef` | Muestra **e**very (todos) los procesos en formato **f**ull (completo). (Sintaxis System V). |
| `ps --forest` | Muestra los procesos en un formato de árbol, mostrando las relaciones padre-hijo. |
| `pstree` | Similar a `ps --forest`, a menudo con una salida más visual. |
| `top` | Muestra una vista dinámica y en tiempo real de los procesos, ordenada por uso de CPU. Interactivo. |
| `htop` | Una versión mejorada de `top` con colores, scroll y gestión más sencilla. (Puede necesitar `dnf install htop`). |

### 7.2. Control de Procesos (Señales)

Se pueden enviar señales a los procesos para controlar su comportamiento.

| Comando | Descripción |
| :--- | :--- |
| `kill [PID]` | Envía una señal a un proceso por su **P**rocess **ID**. Por defecto envía SIGTERM (15). |
| `kill -l` | Lista todas las señales disponibles. |
| `kill -9 [PID]` o `kill -SIGKILL [PID]` | Envía la señal SIGKILL (9), que termina el proceso de forma forzada (no se puede ignorar). |
| `killall [nombre_proceso]` | Mata todos los procesos con un nombre específico. |
| `pkill [patrón]` | Mata procesos basándose en un patrón de nombre u otros criterios. |
| `pkill -u [usuario]` | Mata todos los procesos de un usuario específico. |

#### Señales Más Comunes

| Señal | Número | Acción |
| :--- | :--- | :--- |
| `SIGHUP` | 1 | **H**ang**up**. Usualmente reinicia un demonio para que relea su configuración. |
| `SIGINT` | 2 | **Int**errupt. Lo que se envía al presionar `Ctrl+C`. Pide al proceso que termine. |
| `SIGKILL` | 9 | Matar. Termina el proceso de forma inmediata. No se puede capturar ni ignorar. |
| `SIGTERM` | 15 | **Term**inate. Pide al proceso que termine de forma ordenada (limpiando, cerrando archivos). Es la señal por defecto de `kill`. |
| `SIGSTOP` | 19 | Detiene (pausa) la ejecución de un proceso. No se puede ignorar. |
| `SIGCONT` | 18 | **Cont**inue. Reanuda la ejecución de un proceso que fue detenido. |

### 7.3. Trabajos en Segundo Plano (Job Control)

| Comando / Símbolo | Descripción |
| :--- | :--- |
| `[comando] &` | Ejecuta un comando en segundo plano (background). |
| `jobs` | Lista los trabajos activos en el shell actual. |
| `fg %[número]` | Trae un trabajo al primer plano (**f**ore**g**round). `fg` sin número trae el último. |
| `bg %[número]` | Reanuda un trabajo detenido y lo pone en segundo plano (**b**ack**g**round). |
| `Ctrl+Z` | Suspende el proceso que se está ejecutando en primer plano (le envía SIGSTOP). |

### 7.4. Prioridad de Procesos

| Comando | Descripción |
| :--- | :--- |
| `nice -n [valor] [comando]` | Inicia un comando con un valor de "nice" específico (-20 a 19). Mayor valor = menor prioridad. |
| `renice [valor] -p [PID]` | Cambia la prioridad de un proceso en ejecución. |

---

## 8. 🌐 Redes y Transferencia de Archivos

### 8.1. Configuración y Diagnóstico de Red

| Comando | Descripción |
| :--- | :--- |
| `ip addr` o `ip a` | Muestra las direcciones IP y la información de las interfaces de red. (Reemplaza a `ifconfig`). |
| `ip link` | Muestra información sobre las interfaces a nivel de enlace (capa 2). |
| `ip route` | Muestra la tabla de enrutamiento del sistema. (Reemplaza a `route`). |
| `ping [host]` | Envía paquetes ICMP ECHO_REQUEST para probar la conectividad con un host. |
| `ss -tunlp` | Muestra todos los sockets TCP (`t`) y UDP (`u`) que están escuchando (`l`), con sus números de puerto (`n`) y nombres de proceso (`p`). (Reemplaza a `netstat`). |
| `traceroute [host]` | Traza la ruta de red hacia un host, mostrando los saltos intermedios. |
| `mtr [host]` | Combina `ping` y `traceroute` en una herramienta de diagnóstico de red interactiva. |
| `dig [host]` | Herramienta avanzada para realizar consultas DNS. |
| `host [host]` | Herramienta simple para realizar consultas DNS. |
| `nslookup [host]` | Herramienta interactiva para consultas DNS. |

### 8.2. Transferencia de Archivos

| Comando | Descripción |
| :--- | :--- |
| `wget [URL]` | Descargador de archivos no interactivo. Ideal para scripts. |
| `wget -c [URL]` | **C**ontinúa una descarga interrumpida. |
| `wget -O [archivo] [URL]` | Guarda el archivo con un nombre de **O**utput diferente. |
| `curl [URL]` | Herramienta de transferencia de datos multipropósito. Muestra la salida en la terminal por defecto. |
| `curl -o [archivo] [URL]` | Guarda la salida en un archivo (`o`utput). |
| `curl -O [URL]` | Guarda la salida en un archivo con el mismo nombre que en la URL. |
| `curl -I [URL]` | Muestra solo las cabeceras HTTP de la respuesta. |
| `ssh [usuario]@[host]` | **S**ecure **Sh**ell. Conecta de forma segura a un host remoto. |
| `scp [origen] [destino]` | **S**ecure **C**o**p**y. Copia archivos de forma segura entre hosts a través de SSH. |
| `sftp [usuario]@[host]` | **S**ecure **F**ile **T**ransfer **P**rotocol. Un programa interactivo similar a FTP para transferir archivos de forma segura. |

#### Ejemplos de `scp`

| Comando | Descripción |
| :--- | :--- |
| `scp archivo.txt user@remoto:/home/user/` | Copia un archivo local a un host remoto. |
| `scp user@remoto:/var/log/syslog .` | Copia un archivo remoto al directorio local actual (`.`). |
| `scp -r directorio/ user@remoto:/backups/` | Copia un directorio local de forma recursiva a un host remoto. |
| `scp -P [puerto] ...` | Especifica un puerto SSH diferente al 22. |

---

## 9. 📦 Gestión de Paquetes de Software (DNF/RPM)

En sistemas basados en Red Hat (RHEL, CentOS, Fedora), `dnf` es el gestor de paquetes de alto nivel y `rpm` es la herramienta de bajo nivel.

### 9.1. `dnf` (Dandified YUM)

| Comando | Descripción |
| :--- | :--- |
| `dnf search [término]` | Busca paquetes en los repositorios. |
| `dnf info [paquete]` | Muestra información detallada de un paquete. |
| `dnf install [paquete]` | Instala un paquete y todas sus dependencias. |
| `dnf remove [paquete]` | Elimina un paquete y las dependencias que no se necesiten. |
| `dnf update` o `dnf upgrade` | Actualiza todos los paquetes instalados a su última versión. |
| `dnf update [paquete]` | Actualiza solo un paquete específico. |
| `dnf list installed` | Lista todos los paquetes instalados. |
| `dnf list available` | Lista todos los paquetes disponibles para instalar. |
| `dnf provides [ruta_o_capacidad]` | Averigua qué paquete proporciona un archivo o una capacidad. |
| `dnf history` | Muestra un historial de las transacciones (install, remove, update). |
| `dnf history undo [ID]` | Deshace una transacción específica. |
| `dnf repolist` | Lista los repositorios de software habilitados. |
| `dnf clean all` | Limpia la caché de paquetes. |
| `dnf groupinstall "[nombre grupo]"` | Instala un grupo de paquetes predefinido. |

### 9.2. `rpm` (RPM Package Manager)

`rpm` opera directamente sobre archivos `.rpm` y la base de datos local, sin gestionar dependencias.

| Opción | Modo | Descripción | Ejemplo |
| :--- | :--- | :--- |
| `-q` | Query | Consulta la base de datos de paquetes. | `rpm -qa` (query all) |
| `-i` | Install | Instala un paquete desde un archivo `.rpm`. | `sudo rpm -ivh paquete.rpm` |
| `-e` | Erase | Elimina (desinstala) un paquete ya instalado. | `sudo rpm -e nombre-paquete` |
| `-U` | Upgrade | Actualiza un paquete. Instala si no existe. | `sudo rpm -Uvh paquete-nuevo.rpm` |
| `-V` | Verify | Verifica la integridad de un paquete instalado. | `rpm -V httpd` |

#### Opciones Comunes de Consulta (`rpm -q`)

| Opción Adicional | Descripción | Ejemplo |
| :--- | :--- | :--- |
| `-a` | **A**ll. Consulta todos los paquetes instalados. | `rpm -qa | grep httpd` |
| `-f [archivo]` | **F**ile. Muestra a qué paquete pertenece un archivo. | `rpm -qf /etc/httpd/conf/httpd.conf` |
| `-l [paquete]` | **L**ist. Lista todos los archivos que contiene un paquete. | `rpm -ql httpd` |
| `-i [paquete]` | **I**nformation. Muestra información detallada del paquete. | `rpm -qi httpd` |
| `-c [paquete]` | **C**onfig files. Lista solo los archivos de configuración del paquete. | `rpm -qc httpd` |
| `-d [paquete]` | **D**oc files. Lista solo los archivos de documentación. | `rpm -qd httpd` |
| `--scripts [paquete]` | Muestra los scripts (pre/post install/uninstall) de un paquete. | `rpm -q --scripts httpd` |
| `-p [archivo.rpm]` | **P**ackage file. Permite hacer consultas sobre un archivo `.rpm` sin instalarlo. | `rpm -qlp paquete.rpm` |

---

## 10. 🚀 Gestión de Servicios (systemd)

`systemd` es el sistema de inicio y gestor de servicios en la mayoría de las distribuciones modernas de Linux.

### 10.1. Gestión de Unidades de Servicio

| Comando | Descripción |
| :--- | :--- |
| `systemctl start [servicio]` | Inicia (arranca) un servicio. |
| `systemctl stop [servicio]` | Detiene un servicio. |
| `systemctl restart [servicio]` | Reinicia un servicio (lo detiene y luego lo inicia). |
| `systemctl reload [servicio]` | Recarga la configuración del servicio sin reiniciarlo (si el servicio lo soporta). |
| `systemctl status [servicio]` | Muestra el estado detallado de un servicio, incluyendo si está activo, habilitado y los últimos logs. |
| `systemctl is-active [servicio]` | Comprueba si un servicio está actualmente activo (en ejecución). |
| `systemctl enable [servicio]` | Habilita un servicio para que se inicie automáticamente en el arranque del sistema. |
| `systemctl disable [servicio]` | Deshabilita un servicio para que no se inicie en el arranque. |
| `systemctl is-enabled [servicio]` | Comprueba si un servicio está habilitado para el arranque. |
| `systemctl enable --now [servicio]` | Habilita y arranca un servicio en un solo comando. |
| `systemctl mask [servicio]` | Enmascara un servicio, impidiendo que se inicie de cualquier forma (incluso como dependencia). Es un `disable` más fuerte. |
| `systemctl unmask [servicio]` | Deshace el enmascaramiento de un servicio. |

### 10.2. Análisis y Logs del Sistema (`journalctl`)

`journalctl` es la herramienta para consultar los logs centralizados gestionados por `systemd-journald`.

| Comando | Descripción |
| :--- | :--- |
| `journalctl` | Muestra todos los logs, desde el más antiguo. |
| `journalctl -b` | Muestra los logs solo del arranque actual (**b**oot). |
| `journalctl -u [servicio]` | Muestra los logs de una unidad de servicio específica (**u**nit). |
| `journalctl -f` | Sigue (**f**ollow) los logs en tiempo real, similar a `tail -f`. |
| `journalctl --since "[tiempo]"` | Muestra logs desde un tiempo específico (ej: "1 hour ago", "2024-01-15 14:00:00"). |
| `journalctl -p [prioridad]` | Filtra por **p**rioridad (ej: `err`, `warning`, `info`, `debug`). |
| `journalctl -k` | Muestra solo los mensajes del **k**ernel. |

---

## 11. 🗜️ Compresión y Archivado

### 11.1. `tar` (Tape Archive)

La herramienta estándar para empaquetar múltiples archivos en un solo archivo (`.tar`), y opcionalmente comprimirlo.

| Opción | Descripción |
| :--- | :--- |
| `-c` | **C**reate. Crea un nuevo archivo tar. |
| `-x` | **E**xtract. Extrae archivos de un archivo tar. |
| `-v` | **V**erbose. Muestra los archivos que se están procesando. |
| `-f [archivo]` | **F**ile. Especifica el nombre del archivo tar. **Casi siempre es necesaria.** |
| `-t` | **T**est. Lista el contenido de un archivo tar sin extraerlo. |
| `-z` | Usa compresión **gz**ip (`.tar.gz` o `.tgz`). |
| `-j` | Usa compresión **bzip2** (`.tar.bz2`). |
| `-J` | Usa compresión **xz** (`.tar.xz`). |
| `-C [directorio]` | Cambia al `[directorio]` antes de realizar la operación. |

| Ejemplo | Descripción |
| :--- | :--- |
| `tar -cvf archivo.tar /ruta/a/directorio` | Crea un archivo tar (sin comprimir) del directorio. |
| `tar -czvf archivo.tar.gz /ruta/a/directorio` | Crea un archivo tar comprimido con gzip. |
| `tar -xvf archivo.tar` | Extrae un archivo tar en el directorio actual. |
| `tar -xzvf archivo.tar.gz -C /ruta/destino` | Extrae un tar.gz en un directorio específico. |
| `tar -tf archivo.tar.gz` | Lista el contenido de un tar.gz. |

### 11.2. `zip` y `unzip`

Formato de compresión común en sistemas Windows.

| Comando | Descripción |
| :--- | :--- |
| `zip archivo.zip [archivos...]` | Comprime archivos en un archivo `.zip`. |
| `zip -r archivo.zip [directorio]` | Comprime un directorio de forma recursiva. |
| `unzip archivo.zip` | Extrae un archivo `.zip` en el directorio actual. |
| `unzip -l archivo.zip` | Lista el contenido de un archivo `.zip` sin extraerlo. |
| `unzip archivo.zip -d /ruta/destino` | Extrae un `.zip` en un directorio específico. |

### 11.3. Otros Compresores

| Comando | Descripción |
| :--- | :--- |
| `gzip [archivo]` | Comprime un archivo, reemplazándolo por `[archivo].gz`. |
| `gunzip [archivo].gz` | Descomprime un archivo `.gz`. |
| `bzip2 [archivo]` | Comprime usando el algoritmo bzip2 (generalmente mejor compresión que gzip). |
| `bunzip2 [archivo].bz2` | Descomprime un archivo `.bz2`. |

---

## 12. 📜 Shell, Scripting y Variables de Entorno

### 12.1. Expansiones de Shell

El shell procesa la línea de comandos antes de ejecutarla, expandiendo ciertos patrones.

| Expansión | Ejemplo | Resultado |
| :--- | :--- | :--- |
| **Nombre de Ruta (Globbing)** | `ls *.txt` | Lista todos los archivos que terminan en `.txt`. |
| **Tilde (`~`)** | `cd ~` | Cambia al directorio home del usuario. |
| **Llaves (`{}`)** | `echo file{1..3}.jpg` | `file1.jpg file2.jpg file3.jpg` |
| **Variable (`$`)** | `echo $USER` | Muestra el nombre del usuario actual. |
| **Sustitución de Comando** | `echo "Hoy es $(date +%F)"` | `Hoy es 2024-08-19` |

### 12.2. Quoting (Uso de Comillas)

| Comillas | Descripción | Ejemplo |
| :--- | :--- | :--- |
| **Dobles (`"`)** | Permite expansiones de variables y sustitución de comandos. Previene globbing y expansión de palabras. | `echo "Mi usuario es $USER"` -> `Mi usuario es juan` |
| **Simples (`'`)** | Previene **toda** expansión. El texto se trata de forma literal. | `echo 'Mi usuario es $USER'` -> `Mi usuario es $USER` |
| **Invertida (`` ` ``)** | Sustitución de comando (obsoleta). Preferir `$(...)`. | `echo "Kernel: `uname -r`"` |
| **Barra Invertida (`\`)** | Carácter de escape. Quita el significado especial del siguiente carácter. | `echo "El precio es de \$50"` |

### 12.3. Variables y Alias

| Comando | Descripción | Ejemplo |
| :--- | :--- | :--- |
| `VARIABLE=valor` | Asigna un valor a una variable de shell (local). | `NOMBRE="Juan"` |
| `export VARIABLE` | Convierte una variable de shell en una variable de entorno, haciéndola disponible para procesos hijos. | `export NOMBRE` |
| `export VAR="valor"` | Define y exporta una variable de entorno en un paso. | `export EDITOR=vim` |
| `unset VARIABLE` | Elimina una variable. | `unset NOMBRE` |
| `env` | Muestra todas las variables de entorno. | `env | less` |
| `set` | Muestra todas las variables de shell y entorno, y funciones. | `set | less` |
| `alias nombre='comando'` | Crea un atajo para un comando. | `alias ll='ls -l --color=auto'` |
| `unalias nombre` | Elimina un alias. | `unalias ll` |

### 12.4. Archivos de Inicio del Shell

| Archivo | Cuándo se lee | Propósito |
| :--- | :--- | :--- |
| `/etc/profile` | Al iniciar un shell de login (para todos los usuarios). | Variables de entorno y configuraciones globales. |
| `~/.bash_profile` | Al iniciar un shell de login (para un usuario específico). | Variables de entorno personales (`PATH`, etc.). |
| `~/.bashrc` | Al iniciar un shell interactivo que no es de login. | Alias, funciones, configuración del prompt. |
| `source [archivo]` | Ejecuta un script en el shell actual, aplicando sus cambios inmediatamente. | `source ~/.bashrc` |

---

## 13. 🩺 Ayuda y Documentación del Sistema

### 13.1. Comandos Principales de Ayuda

| Comando | Descripción |
| :--- | :--- |
| `man [comando]` | **Man**ual. Muestra la página del manual de un comando. Es la fuente de documentación principal. |
| `[comando] --help` | Muestra un mensaje de uso breve y las opciones del comando. |
| `apropos [palabra]` | Busca páginas de manual que contengan una palabra clave en su nombre o descripción. Equivale a `man -k`. |
| `whatis [comando]` | Muestra una descripción de una sola línea de un comando desde su página de manual. |
| `info [comando]` | Muestra la documentación en formato `info`, que a menudo es más detallada y está hipervinculada. |

### 13.2. Secciones del Manual

Las páginas `man` están divididas en secciones. Puedes especificar una con `man [sección] [comando]`.

| Sección | Contenido |
| :--- | :--- |
| 1 | Comandos ejecutables o de shell. |
| 5 | Formatos de archivo y convenciones (ej: `man 5 passwd`). |
| 8 | Comandos de administración del sistema. |

### 13.3. Búsqueda Avanzada en Manuales

| Comando | Descripción |
| :--- | :--- |
| `man -k [palabra]` | Busca una palabra clave en los nombres y descripciones de las páginas del manual. |
| `man -K [palabra]` | Busca una palabra clave en el texto completo de **todas** las páginas del manual (puede ser lento). |

---
De acuerdo. A continuación se presenta la tabla exhaustiva de todos los comandos, atajos y sintaxis presentes en el documento proporcionado, sin omisiones ni resúmenes, tal como fue solicitado. La información ha sido extraída y organizada meticulosamente para su auditoría.

### Tabla Principal de Comandos

| Comando Completo | Descripción | Capítulo | Sección/Contexto |
| :--- | :--- | :--- | :--- |
| `ssh student@serverb` | Inicia una sesión de Secure Shell (SSH) en el servidor `serverb` con el usuario `student`. | Introducción | Orientación al entorno del aula |
| `systemctl enable --now cockpit.socket` | Activa y arranca de inmediato el socket para la consola web (Cockpit). | Introducción | Orientación al entorno del aula |
| `lab action exercise` | Sintaxis general para ejecutar un script de ejercicio. `action` puede ser `start`, `grade`, o `finish`. `exercise` es el nombre de la actividad. | Introducción | Realización de ejercicios de laboratorio |
| `lab start [Tab][Tab]` | Utiliza la finalización de tabulaciones para listar todos los ejercicios que se pueden iniciar con el comando `lab`. | Introducción | Realización de ejercicios de laboratorio |
| `usermod -L user01` | Bloquea la contraseña de la cuenta de usuario `user01`. | 2 | Conceptos básicos de Shell |
| `ssh remoteuser@remotehost` | Inicia una sesión SSH en un sistema remoto (`remotehost`) como un usuario específico (`remoteuser`), usualmente autenticando con contraseña. | 2 | Inicie sesión en un sistema remoto |
| `ssh -i mylab.pem remoteuser@remotehost` | Inicia una sesión SSH utilizando un archivo de clave privada (`mylab.pem`) para la autenticación, en lugar de una contraseña. | 2 | Inicie sesión en un sistema remoto |
| `chmod 600 mylab.pem` | Cambia los permisos del archivo de clave privada para que solo el propietario pueda leerlo (permiso 600), un requisito de seguridad de SSH. | 2 | Inicie sesión en un sistema remoto |
| `exit` | Finaliza la sesión de shell actual, cerrando la conexión si es una sesión remota. | 2 | Cerrar sesión desde un sistema remoto |
| `yelp` | Inicia la aplicación de ayuda de GNOME. | 2 | Referencias (Acceder a la línea de comandos con el escritorio) |
| `yelp help:gnome-help/shell-introduction` | Abre la ayuda de GNOME directamente en la sección de introducción al shell. | 2 | Referencias (Acceder a la línea de comandos con el escritorio) |
| `lab start cli-desktop` | Prepara el entorno de laboratorio para el ejercicio guiado `cli-desktop`. | 2 | Ejercicio guiado: Acceso a la línea de comandos con el escritorio |
| `passwd` | Cambia la contraseña del usuario actual. Solicita la contraseña actual y luego la nueva dos veces. | 2 | Ejercicio guiado: Acceso a la línea de comandos con el escritorio |
| `lab finish cli-desktop` | Limpia el entorno de laboratorio después de completar el ejercicio `cli-desktop`. | 2 | Ejercicio guiado: Acceso a la línea de comandos con el escritorio |
| `whoami` | Muestra el nombre de usuario del usuario actualmente conectado. | 2 | Sintaxis básica de comandos |
| `command1 ; command2` | Ejecuta `command1` y luego `command2` en la misma línea, secuencialmente. | 2 | Sintaxis básica de comandos |
| `date` | Muestra la fecha y hora actuales del sistema. | 2 | Escribir comandos simples |
| `date +%R` | Muestra la hora actual en formato de 24 horas (HH:MM). | 2 | Escribir comandos simples |
| `date +%x` | Muestra la fecha actual en el formato local (MM/DD/YYYY). | 2 | Escribir comandos simples |
| `file /etc/passwd` | Examina el archivo `/etc/passwd` y muestra su tipo (en este caso, texto ASCII). | 2 | Escribir comandos simples |
| `file /bin/passwd` | Examina el archivo `/bin/passwd` y muestra su tipo (en este caso, un ejecutable ELF de 64 bits). | 2 | Escribir comandos simples |
| `file /home` | Examina `/home` y muestra su tipo (en este caso, un directorio). | 2 | Escribir comandos simples |
| `cat /etc/passwd` | Muestra el contenido completo del archivo `/etc/passwd` en la salida estándar. | 2 | Ver el contenido de los archivos |
| `cat file1 file2` | Concatena y muestra el contenido de `file1` seguido del contenido de `file2`. | 2 | Ver el contenido de los archivos |
| `less` | Muestra el contenido de un archivo página por página, permitiendo desplazarse hacia arriba y hacia abajo. | 2 | Ver el contenido de los archivos |
| `head /etc/passwd` | Muestra las primeras 10 líneas del archivo `/etc/passwd`. | 2 | Ver el contenido de los archivos |
| `tail -n 3 /etc/passwd` | Muestra las últimas 3 líneas del archivo `/etc/passwd`. | 2 | Ver el contenido de los archivos |
| `wc /etc/passwd` | Cuenta las líneas, palabras y caracteres en el archivo `/etc/passwd`. | 2 | Ver el contenido de los archivos |
| `wc -l /etc/passwd` | Cuenta únicamente el número de líneas en el archivo `/etc/passwd`. | 2 | Ver el contenido de los archivos |
| `wc -c /etc/group /etc/hosts` | Cuenta el número de caracteres en los archivos especificados y muestra un total. | 2 | Ver el contenido de los archivos |
| `useradd --[Tab][Tab]` | Utiliza la finalización de tabulaciones para mostrar todas las opciones disponibles para el comando `useradd`. | 2 | Descripción de la finalización de tabulaciones |
| `head -n 3 \ /usr/share/dict/words \ /usr/share/dict/linux.words` | Muestra las primeras 3 líneas de dos archivos, usando la barra invertida `\` para continuar el comando en múltiples líneas. | 2 | Escribir un comando largo en varias líneas |
| `history` | Muestra una lista numerada de los comandos ejecutados anteriormente en la sesión de shell actual. | 2 | Mostrar el historial de comandos |
| `!ls` | Ejecuta el comando más reciente en el historial que comienza con "ls". | 2 | Mostrar el historial de comandos |
| `!26` | Ejecuta el comando número 26 de la lista del historial. | 2 | Mostrar el historial de comandos |
| `lab start cli-review` | Prepara el entorno de laboratorio para el laboratorio de revisión `cli-review`. | 2 | Laboratorio: Acceso a la línea de comandos |
| `file zcat` | Determina el tipo de archivo del script `zcat`. | 2 | Laboratorio: Acceso a la línea de comandos |
| `wc zcat` | Cuenta las líneas, palabras y bytes del script `zcat`. | 2 | Laboratorio: Acceso a la línea de comandos |
| `head zcat` | Muestra las primeras 10 líneas del script `zcat`. | 2 | Laboratorio: Acceso a la línea de comandos |
| `tail zcat` | Muestra las últimas 10 líneas del script `zcat`. | 2 | Laboratorio: Acceso a la línea de comandos |
| `!!` | Repite y ejecuta el último comando ingresado. | 2 | Laboratorio: Acceso a la línea de comandos |
| `tail -n 20 zcat` | Muestra las últimas 20 líneas del script `zcat`. | 2 | Laboratorio: Acceso a la línea de comandos |
| `lab grade cli-review` | Califica el trabajo realizado en el laboratorio `cli-review`. | 2 | Laboratorio: Acceso a la línea de comandos |
| `lab finish cli-review` | Limpia el entorno de laboratorio después de completar el laboratorio `cli-review`. | 2 | Laboratorio: Acceso a la línea de comandos |
| `pwd` | Muestra la ruta completa del directorio de trabajo actual (Print Working Directory). | 3 | Navegar por rutas en el sistema de archivos |
| `ls` | Lista el contenido del directorio de trabajo actual. | 3 | Navegar por rutas en el sistema de archivos |
| `cd Videos` | Cambia el directorio de trabajo actual al subdirectorio `Videos`. | 3 | Navegar por rutas en el sistema de archivos |
| `cd /home/user/Documents` | Cambia el directorio de trabajo actual a la ruta absoluta `/home/user/Documents`. | 3 | Navegar por rutas en el sistema de archivos |
| `cd` | Cambia el directorio de trabajo actual al directorio de inicio del usuario. | 3 | Navegar por rutas en el sistema de archivos |
| `touch Videos/blockbuster1.ogg` | Crea un archivo vacío llamado `blockbuster1.ogg` en el directorio `Videos`, o actualiza su marca de tiempo si ya existe. | 3 | Navegar por rutas en el sistema de archivos |
| `ls -l` | Lista el contenido del directorio en formato largo, mostrando permisos, propietario, tamaño, fecha de modificación, etc. | 3 | Navegar por rutas en el sistema de archivos |
| `ls -la` | Lista todo el contenido del directorio (incluidos los archivos ocultos que comienzan con `.`) en formato largo. | 3 | Navegar por rutas en el sistema de archivos |
| `ls -l ~` | Lista el contenido del directorio de inicio del usuario (`~`) en formato largo. | 3 | Navegar por rutas en el sistema de archivos |
| `cd -` | Cambia al directorio de trabajo anterior. | 3 | Navegar por rutas en el sistema de archivos |
| `cd .` | Cambia al directorio actual (no tiene efecto práctico). | 3 | Navegar por rutas en el sistema de archivos |
| `cd ..` | Cambia al directorio padre (sube un nivel en la jerarquía). | 3 | Navegar por rutas en el sistema de archivos |
| `mkdir ProjectX ProjectY ProjectZ` | Crea tres directorios llamados `ProjectX`, `ProjectY`, y `ProjectZ` en el directorio actual. | 3 | Crear directorios |
| `mkdir -p Thesis/Chapter1` | Crea el directorio `Chapter1` dentro de `Thesis`, creando también el directorio padre `Thesis` si no existe. | 3 | Crear directorios |
| `ls -R Thesis/` | Lista el contenido del directorio `Thesis` y todos sus subdirectorios de forma recursiva. | 3 | Crear directorios |
| `cp blockbuster1.ogg blockbuster3.ogg` | Copia el archivo `blockbuster1.ogg` a un nuevo archivo llamado `blockbuster3.ogg` en el mismo directorio. | 3 | Copiar archivos y directorios |
| `cp thesis_chapter1.txt thesis_chapter2.txt ProjectX` | Copia los archivos `thesis_chapter1.txt` y `thesis_chapter2.txt` al directorio `ProjectX`. | 3 | Copiar archivos y directorios |
| `cp -r ../Thesis/ .` | Copia el directorio `Thesis` del directorio padre y todo su contenido al directorio actual (`.`). | 3 | Copiar archivos y directorios |
| `mv thesis_chapter2.txt thesis_chapter2_reviewed.txt` | Renombra (mueve) el archivo `thesis_chapter2.txt` a `thesis_chapter2_reviewed.txt` en el mismo directorio. | 3 | Mover archivos y directorios |
| `mv -v thesis_chapter1.txt Thesis/Chapter1` | Mueve el archivo `thesis_chapter1.txt` al directorio `Thesis/Chapter1` y muestra una salida detallada (`-v`) de la operación. | 3 | Mover archivos y directorios |
| `rm Thesis/Chapter1/thesis_chapter1.txt` | Elimina (borra) el archivo `thesis_chapter1.txt` del directorio `Thesis/Chapter1`. | 3 | Eliminar archivos y directorios |
| `rm -r Thesis/Chapter1` | Elimina el directorio `Thesis/Chapter1` y todo su contenido de forma recursiva (`-r`). | 3 | Eliminar archivos y directorios |
| `rm -ri Thesis` | Elimina el directorio `Thesis` de forma recursiva (`-r`) y solicita confirmación para cada archivo y directorio (`-i`). | 3 | Eliminar archivos y directorios |
| `rmdir ProjectZ` | Elimina el directorio `ProjectZ`, pero solo si está vacío. | 3 | Eliminar archivos y directorios |
| `lab start files-manage` | Prepara el entorno para el ejercicio `files-manage`. | 3 | Ejercicio guiado: administración de archivos con herramientas de línea de comandos |
| `ssh student@servera` | Inicia una sesión SSH en `servera` como usuario `student`. | 3 | Ejercicio guiado: administración de archivos con herramientas de línea de comandos |
| `mkdir Music Pictures Videos` | Crea tres directorios en el directorio actual. | 3 | Ejercicio guiado: administración de archivos con herramientas de línea de comandos |
| `touch song{1..6}.mp3` | Utiliza la expansión de llaves para crear seis archivos vacíos, desde `song1.mp3` hasta `song6.mp3`. | 3 | Ejercicio guiado: administración de archivos con herramientas de línea de comandos |
| `mv song*.mp3 Music` | Mueve todos los archivos que coinciden con el patrón `song*.mp3` al directorio `Music`. | 3 | Ejercicio guiado: administración de archivos con herramientas de línea de comandos |
| `lab finish files-manage` | Limpia el entorno después del ejercicio `files-manage`. | 3 | Ejercicio guiado: administración de archivos con herramientas de línea de comandos |
| `ln newfile.txt /tmp/newfile-hlink2.txt` | Crea un enlace duro llamado `newfile-hlink2.txt` en `/tmp` que apunta a los mismos datos que `newfile.txt`. | 3 | Crear enlaces duros |
| `ls -il newfile.txt /tmp/newfile-hlink2.txt` | Lista los archivos mostrando su número de inodo (`-i`) y formato largo (`-l`), para verificar si son enlaces duros al mismo archivo. | 3 | Crear enlaces duros |
| `df` | Muestra el uso del espacio en disco para todos los sistemas de archivos montados (disk free). | 3 | Limitaciones de los enlaces duros |
| `ln -s /home/user/newfile-link2.txt /tmp/newfile-symlink.txt` | Crea un enlace simbólico (o suave) llamado `newfile-symlink.txt` que apunta a la ruta del archivo `/home/user/newfile-link2.txt`. | 3 | Crear enlaces simbólicos |
| `cd -P /home/user/configfiles` | Cambia al directorio real al que apunta un enlace simbólico, en lugar de usar el nombre del enlace simbólico en la ruta. | 3 | Crear enlaces simbólicos |
| `lab start files-make` | Prepara el entorno para el ejercicio `files-make`. | 3 | Ejercicio guiado: Establecer vínculos entre archivos |
| `ln /home/student/files/target.file /home/student/links/file.hardlink` | Crea un enlace duro. | 3 | Ejercicio guiado: Establecer vínculos entre archivos |
| `ln -s /tmp /home/student/tempdir` | Crea un enlace simbólico a un directorio. | 3 | Ejercicio guiado: Establecer vínculos entre archivos |
| `lab finish files-make` | Limpia el entorno después del ejercicio `files-make`. | 3 | Ejercicio guiado: Establecer vínculos entre archivos |
| `mkdir glob; cd glob` | Crea un directorio llamado `glob` y luego cambia a ese directorio. | 3 | Expansión de nombres de ruta y coincidencia de patrones |
| `touch alfa bravo charlie delta echo able baker cast dog easy` | Crea múltiples archivos vacíos con los nombres especificados. | 3 | Expansión de nombres de ruta y coincidencia de patrones |
| `ls a*` | Lista todos los archivos en el directorio actual cuyos nombres comienzan con la letra 'a'. | 3 | Expansión de nombres de ruta y coincidencia de patrones |
| `ls *a*` | Lista todos los archivos en el directorio actual cuyos nombres contienen la letra 'a'. | 3 | Expansión de nombres de ruta y coincidencia de patrones |
| `ls [ac]*` | Lista todos los archivos en el directorio actual cuyos nombres comienzan con 'a' o 'c'. | 3 | Expansión de nombres de ruta y coincidencia de patrones |
| `ls ????` | Lista todos los archivos en el directorio actual cuyos nombres tienen exactamente cuatro caracteres. | 3 | Expansión de nombres de ruta y coincidencia de patrones |
| `ls ?????` | Lista todos los archivos en el directorio actual cuyos nombres tienen exactamente cinco caracteres. | 3 | Expansión de nombres de ruta y coincidencia de patrones |
| `echo {Sunday,Monday,Tuesday,Wednesday}.log` | Utiliza la expansión de llaves para generar una lista de cadenas. | 3 | Expansión de aparatos ortopédicos |
| `echo file{1..3}.txt` | Utiliza la expansión de llaves con una secuencia numérica para generar `file1.txt file2.txt file3.txt`. | 3 | Expansión de aparatos ortopédicos |
| `echo ~root` | Muestra la ruta al directorio de inicio del usuario `root`. | 3 | Expansión de tilde |
| `echo ~nonexistinguser` | Intenta expandir la tilde a un usuario que no existe, resultando en la cadena literal. | 3 | Expansión de tilde |
| `VARIABLENAME=value` | Sintaxis para asignar un valor a una variable de shell. | 3 | Expansión variable |
| `echo $USERNAME` | Muestra el valor almacenado en la variable `USERNAME`. | 3 | Expansión variable |
| `echo ${USERNAME}` | Muestra el valor de la variable `USERNAME`, usando llaves para una delimitación clara. | 3 | Expansión variable |
| `echo Today is $(date +%A).` | Utiliza la sustitución de comandos para insertar la salida del comando `date +%A` dentro de la cadena de `echo`. | 3 | Sustitución de comandos |
| `echo 'Will variable $myhost evaluate to $(hostname -s)?'` | Usa comillas simples para evitar cualquier expansión de shell, imprimiendo la cadena literalmente. | 3 | Proteger los argumentos de la expansión |
| `lab start files-review` | Prepara el entorno para el laboratorio de revisión `files-review`. | 3 | Laboratorio: Administrar archivos desde la línea de comandos |
| `mkdir -p ~/Documents/project_plans` | Crea un directorio y su directorio padre si no existen. | 3 | Laboratorio: Administrar archivos desde la línea de comandos |
| `touch tv_season{1..2}_episode{1..6}.ogg` | Usa expansiones de llaves anidadas para crear una serie de archivos. | 3 | Laboratorio: Administrar archivos desde la línea de comandos |
| `mv tv_season1* Videos/season1` | Mueve todos los archivos que comienzan con `tv_season1` al directorio `Videos/season1`. | 3 | Laboratorio: Administrar archivos desde la línea de comandos |
| `cp chapters/mystery_chapter[56].odf changes` | Copia los archivos `mystery_chapter5.odf` y `mystery_chapter6.odf` al directorio `changes`. | 3 | Laboratorio: Administrar archivos desde la línea de comandos |
| `cp mystery_chapter5.odf mystery_chapter5_$(date +%F).odf` | Copia un archivo, agregando la fecha actual (formato YYYY-MM-DD) al nuevo nombre de archivo mediante sustitución de comandos. | 3 | Laboratorio: Administrar archivos desde la línea de comandos |
| `lab grade files-review` | Califica el trabajo realizado en el laboratorio `files-review`. | 3 | Laboratorio: Administrar archivos desde la línea de comandos |
| `lab finish files-review` | Limpia el entorno después del laboratorio `files-review`. | 3 | Laboratorio: Administrar archivos desde la línea de comandos |
| `man topic` | Muestra la página del manual para un `topic` específico. | 4 | Introducción a las páginas del manual de Linux |
| `man 5 passwd` | Muestra la página del manual para `passwd` específicamente de la sección 5 (formatos de archivo). | 4 | Introducción a las páginas del manual de Linux |
| `man -k passwd` | Busca páginas de manual que contengan la palabra clave `passwd` en sus nombres y descripciones cortas (equivale a `apropos`). | 4 | Buscar páginas de manual por palabra clave |
| `man -K passwd` | Realiza una búsqueda de texto completo de la palabra clave `passwd` en todas las páginas del manual. | 4 | Buscar páginas de manual por palabra clave |
| `lab start help-manual` | Prepara el entorno para el ejercicio `help-manual`. | 4 | Ejercicio guiado: Leer páginas del manual |
| `gedit + manual` | Abre el archivo `manual` en el editor `gedit` con el cursor posicionado en la última línea. | 4 | Ejercicio guiado: Leer páginas del manual |
| `man 1 su` | Muestra la página del manual para el comando `su` de la sección 1. | 4 | Ejercicio guiado: Leer páginas del manual |
| `whereis passwd` | Localiza los archivos binarios, de origen y de manual para el comando `passwd`. | 4 | Ejercicio guiado: Leer páginas del manual |
| `lab finish help-manual` | Limpia el entorno después del ejercicio `help-manual`. | 4 | Ejercicio guiado: Leer páginas del manual |
| `lab start help-review` | Prepara el entorno para el laboratorio de revisión `help-review`. | 4 | Laboratorio: Obtener ayuda en Red Hat Enterprise Linux |
| `man -t bash | lpr -Pps` | Formatea la página del manual de `bash` para impresión (formato PostScript) y la envía a la impresora `ps`. | 4 | Laboratorio: Obtener ayuda en Red Hat Enterprise Linux |
| `man -t passwd > passwd.ps` | Formatea la página del manual de `passwd` para impresión y redirige la salida al archivo `passwd.ps`. | 4 | Laboratorio: Obtener ayuda en Red Hat Enterprise Linux |
| `evince /home/student/passwd.ps` | Abre un archivo PostScript con el visor de documentos `evince`. | 4 | Laboratorio: Obtener ayuda en Red Hat Enterprise Linux |
| `evince -w /home/student/passwd.ps` | Abre un archivo PostScript en modo de vista previa. | 4 | Laboratorio: Obtener ayuda en Red Hat Enterprise Linux |
| `evince -i 3 /home/student/passwd.ps` | Abre un archivo PostScript comenzando en la página 3. | 4 | Laboratorio: Obtener ayuda en Red Hat Enterprise Linux |
| `lp passwd.ps -P 2-3` | Sintaxis para imprimir solo las páginas 2 y 3 de un archivo. | 4 | Laboratorio: Obtener ayuda en Red Hat Enterprise Linux |
| `firefox /usr/share/doc` | Abre el navegador Firefox en el directorio de documentación del sistema. | 4 | Laboratorio: Obtener ayuda en Red Hat Enterprise Linux |
| `lab grade help-review` | Califica el trabajo realizado en el laboratorio `help-review`. | 4 | Laboratorio: Obtener ayuda en Red Hat Enterprise Linux |
| `lab finish help-review` | Limpia el entorno después del laboratorio `help-review`. | 4 | Laboratorio: Obtener ayuda en Red Hat Enterprise Linux |
| `date > /tmp/saved-timestamp` | Redirige la salida estándar del comando `date` para sobrescribir el archivo `/tmp/saved-timestamp`. | 5 | Redirigir la salida a un archivo |
| `echo "new line" >> /tmp/many-lines-of-information` | Redirige la salida de `echo` para agregarla (anexarla) al final del archivo especificado. | 5 | Redirigir la salida a un archivo |
| `find /etc -name passwd 2> /tmp/errors` | Redirige solo el error estándar (canal 2) del comando `find` al archivo `/tmp/errors`. | 5 | Redirigir la salida a un archivo |
| `find /etc -name passwd &> /tmp/all-message-output` | Redirige tanto la salida estándar como el error estándar al mismo archivo, sobrescribiéndolo. | 5 | Redirigir la salida a un archivo |
| `ls -l /usr/bin | less` | Conecta la salida estándar de `ls -l` a la entrada estándar de `less` mediante una tubería (`|`). | 5 | Construir canalizaciones |
| `ls | wc -l` | Conecta la salida de `ls` a `wc -l` para contar el número de archivos en el directorio actual. | 5 | Construir canalizaciones |
| `ls -l | tee /tmp/saved-output | less` | Usa `tee` para enviar la salida de `ls -l` tanto al archivo `/tmp/saved-output` como al comando `less`. | 5 | Canalizaciones, redireccionamiento y anexión a un archivo |
| `find / -name passwd 2>&1 | less` | Redirige el error estándar al mismo destino que la salida estándar, y luego canaliza ambos a `less`. | 5 | Canalizaciones, redireccionamiento y anexión a un archivo |
| `vi filename` | Abre un archivo en el editor de texto `vi`. | 5 | Editar archivos con Vim |
| `vim filename` | Abre un archivo en el editor de texto `vim` (versión mejorada de `vi`). | 5 | Editar archivos con Vim |
| `vimtutor` | Inicia el tutorial interactivo para aprender a usar `vim`. | 5 | Editar archivos con Vim |
| `lab start edit-editfile` | Prepara el entorno para el ejercicio `edit-editfile`. | 5 | Ejercicio guiado: edición de archivos de texto desde la solicitud de shell |
| `lab finish edit-editfile` | Limpia el entorno después del ejercicio `edit-editfile`. | 5 | Ejercicio guiado: edición de archivos de texto desde la solicitud de shell |
| `set | less` | Muestra todas las variables de shell y funciones definidas, canalizando la salida a `less` para una visualización paginada. | 5 | Uso de variables de shell |
| `HISTTIMEFORMAT="%F %T "` | Establece una variable de shell para que el comando `history` muestre la fecha y hora de cada comando. | 5 | Configurar Bash con variables de shell |
| `PS1="[\u@\h \W]\$ "` | Cambia la variable `PS1` para modificar la apariencia del prompt del shell. | 5 | Configurar Bash con variables de shell |
| `export EDITOR=vim` | Establece y exporta la variable de entorno `EDITOR`, que define el editor de texto predeterminado para muchos programas. | 5 | Configurar programas con variables de entorno |
| `export PATH=${PATH}:/home/user/sbin` | Agrega el directorio `/home/user/sbin` a la variable de entorno `PATH`. | 5 | Configurar programas con variables de entorno |
| `env` | Muestra todas las variables de entorno actuales. | 5 | Configurar programas con variables de entorno |
| `alias hello='echo "Hello, this is a long string."'` | Crea un alias llamado `hello` que ejecuta el comando `echo` especificado. | 5 | Alias de Bash |
| `unset file1` | Elimina (desdefine) la variable de shell `file1`. | 5 | Desactivación y anulación de la exportación de variables y alias |
| `export -n PS1` | Elimina el atributo de exportación de una variable, convirtiéndola de una variable de entorno a una variable de shell local. | 5 | Desactivación y anulación de la exportación de variables y alias |
| `unalias hello` | Elimina el alias llamado `hello`. | 5 | Desactivación y anulación de la exportación de variables y alias |
| `lab start edit-bashconfig` | Prepara el entorno para el ejercicio `edit-bashconfig`. | 5 | Ejercicio guiado: Cambiar el entorno de Shell |
| `source ~/.bashrc` | Ejecuta los comandos en el archivo `~/.bashrc` en el shell actual, aplicando los cambios sin necesidad de cerrar sesión. | 5 | Ejercicio guiado: Cambiar el entorno de Shell |
| `lab finish edit-bashconfig` | Limpia el entorno después del ejercicio `edit-bashconfig`. | 5 | Ejercicio guiado: Cambiar el entorno de Shell |
| `lab start edit-review` | Prepara el entorno para el laboratorio de revisión `edit-review`. | 5 | Lab: Crear, ver y editar archivos de texto |
| `ls -al > $lab_file` | Lista todos los archivos en formato largo y redirige la salida para sobrescribir el archivo cuyo nombre está en la variable `$lab_file`. | 5 | Lab: Crear, ver y editar archivos de texto |
| `echo "------------" >> $lab_file` | Agrega una línea de guiones al final del archivo cuyo nombre está en la variable `$lab_file`. | 5 | Lab: Crear, ver y editar archivos de texto |
| `ls Documents/ | tee -a $lab_file` | Lista el contenido de `Documents`, lo muestra en la terminal y lo agrega al final del archivo en `$lab_file`. | 5 | Lab: Crear, ver y editar archivos de texto |
| `lab grade edit-review` | Califica el trabajo realizado en el laboratorio `edit-review`. | 5 | Lab: Crear, ver y editar archivos de texto |
| `lab finish edit-review` | Limpia el entorno después del laboratorio `edit-review`. | 5 | Lab: Crear, ver y editar archivos de texto |
| `id` | Muestra la información de identidad del usuario actual (UID, GID, grupos). | 6 | ¿Qué es un usuario? |
| `id user02` | Muestra la información de identidad para el usuario `user02`. | 6 | ¿Qué es un usuario? |
| `ls -ld Documents` | Muestra la información en formato largo para el directorio `Documents` en sí, no su contenido. | 6 | ¿Qué es un usuario? |
| `ps -au` | Muestra los procesos en ejecución para todos los usuarios (`a`) con información detallada del usuario (`u`). | 6 | ¿Qué es un usuario? |
| `su - user02` | Cambia al usuario `user02`, iniciando un shell de inicio de sesión (entorno limpio). | 6 | Cambiar cuentas de usuario |
| `su -` | Cambia al usuario `root`, iniciando un shell de inicio de sesión. | 6 | Cambiar cuentas de usuario |
| `sudo usermod -L user02` | Ejecuta el comando `usermod -L user02` con privilegios de superusuario. | 6 | Ejecutar comandos con sudo |
| `sudo tail /var/log/secure` | Ejecuta el comando `tail` en un archivo protegido con privilegios de superusuario. | 6 | Ejecutar comandos con sudo |
| `sudo -i` | Inicia un shell de inicio de sesión interactivo como `root`. | 6 | Obtenga un shell raíz interactivo con sudo |
| `visudo` | Edita el archivo de configuración de `sudo` (`/etc/sudoers`) de forma segura, realizando una verificación de sintaxis antes de guardar. | 6 | Configurar sudo |
| `lab start users-superuser` | Prepara el entorno para el ejercicio `users-superuser`. | 6 | Ejercicio guiado: Obtener acceso de superusuario |
| `sudo su` | Cambia al usuario `root` dentro del entorno del usuario actual (shell sin inicio de sesión). | 6 | Ejercicio guiado: Obtener acceso de superusuario |
| `lab finish users-superuser` | Limpia el entorno después del ejercicio `users-superuser`. | 6 | Ejercicio guiado: Obtener acceso de superusuario |
| `useradd username` | Crea una nueva cuenta de usuario local llamada `username`. | 6 | Administrar usuarios locales |
| `usermod -c "Operator One" operator1` | Modifica la cuenta de usuario `operator1` para agregar un comentario ("Operator One"). | 6 | Modificar usuarios existentes desde la línea de comandos |
| `userdel -r operator3` | Elimina la cuenta de usuario `operator3` y su directorio de inicio (`-r`). | 6 | Eliminar usuarios de la línea de comandos |
| `find / -nouser -o -nogroup` | Busca en todo el sistema de archivos archivos que no tengan un propietario de usuario o grupo válido. | 6 | Eliminar usuarios de la línea de comandos |
| `passwd user01` | Establece o cambia la contraseña para el usuario `user01` (requiere privilegios de `root`). | 6 | Establecer contraseñas desde la línea de comandos |
| `lab start users-user` | Prepara el entorno para el ejercicio `users-user`. | 6 | Ejercicio guiado: Administrar cuentas de usuario locales |
| `lab finish users-user` | Limpia el entorno después del ejercicio `users-user`. | 6 | Ejercicio guiado: Administrar cuentas de usuario locales |
| `groupadd -g 10000 group01` | Crea un nuevo grupo llamado `group01` con un ID de grupo (GID) específico de 10000. | 6 | Crear grupos desde la línea de comandos |
| `groupmod -n group0022 group02` | Renombra el grupo `group02` a `group0022`. | 6 | Modificación de grupos existentes desde la línea de comandos |
| `groupdel group0022` | Elimina el grupo `group0022`. | 6 | Eliminar grupos de la línea de comandos |
| `usermod -aG group01 user03` | Agrega (`-a`) el usuario `user03` al grupo suplementario (`-G`) `group01` sin eliminarlo de otros grupos. | 6 | Cambiar la pertenencia a grupos desde la línea de comandos |
| `newgrp group01` | Inicia un nuevo shell en el que el grupo principal del usuario se cambia temporalmente a `group01`. | 6 | Cambiar temporalmente el grupo principal |
| `lab start users-group` | Prepara el entorno para el ejercicio `users-group`. | 6 | Ejercicio guiado: Administrar cuentas de grupo local |
| `echo "%admin ALL=(ALL) ALL" >> /etc/sudoers.d/admin` | Agrega una regla a un archivo de configuración de `sudo` para otorgar privilegios de administrador a todos los miembros del grupo `admin`. | 6 | Ejercicio guiado: Administrar cuentas de grupo local |
| `lab finish users-group` | Limpia el entorno después del ejercicio `users-group`. | 6 | Ejercicio guiado: Administrar cuentas de grupo local |
| `chage -m 0 -M 90 -W 7 -I 14 sysadmin05` | Cambia la política de antigüedad de la contraseña para `sysadmin05`: mínimo 0 días, máximo 90, advertencia 7, inactividad 14. | 6 | Configurar la caducidad de contraseñas |
| `chage -E $(date -d "+30 days" +%F) cloudadmin10` | Establece la fecha de expiración de la cuenta `cloudadmin10` para dentro de 30 días. | 6 | Configurar la caducidad de contraseñas |
| `chage -d 0 cloudadmin10` | Establece la fecha del último cambio de contraseña a 0, forzando al usuario `cloudadmin10` a cambiarla en el próximo inicio de sesión. | 6 | Configurar la caducidad de contraseñas |
| `usermod -L sysadmin03` | Bloquea la cuenta de usuario `sysadmin03`, impidiendo inicios de sesión con contraseña. | 6 | Restringir acceso |
| `usermod -U operator1` | Desbloquea la cuenta de usuario `operator1`. | 6 | Restringir acceso |
| `usermod -s /sbin/nologin newapp` | Cambia el shell de inicio de sesión del usuario `newapp` a `/sbin/nologin`, lo que impide inicios de sesión interactivos. | 6 | El shell nologin |
| `lab start users-password` | Prepara el entorno para el ejercicio `users-password`. | 6 | Ejercicio guiado: Administrar contraseñas de usuario |
| `lab finish users-password` | Limpia el entorno después del ejercicio `users-password`. | 6 | Ejercicio guiado: Administrar contraseñas de usuario |
| `lab start users-review` | Prepara el entorno para el laboratorio de revisión `users-review`. | 6 | Laboratorio: Administrar usuarios y grupos locales |
| `lab grade users-review` | Califica el trabajo realizado en el laboratorio `users-review`. | 6 | Laboratorio: Administrar usuarios y grupos locales |
| `lab finish users-review` | Limpia el entorno después del laboratorio `users-review`. | 6 | Laboratorio: Administrar usuarios y grupos locales |
| `chmod go-rw document.pdf` | Elimina (`-`) los permisos de lectura (`r`) y escritura (`w`) para el grupo (`g`) y otros (`o`) en el archivo `document.pdf`. | 7 | Cambiar permisos con el método simbólico |
| `chmod a+x myscript.sh` | Agrega (`+`) permiso de ejecución (`x`) para todos (`a`) en el archivo `myscript.sh`. | 7 | Cambiar permisos con el método simbólico |
| `chmod -R g+rwx /home/user/myfolder` | Agrega recursivamente (`-R`) permisos de lectura, escritura y ejecución para el grupo en el directorio y todo su contenido. | 7 | Cambiar permisos con el método simbólico |
| `chmod 644 sample.txt` | Establece los permisos del archivo `sample.txt` a lectura/escritura para el propietario, y solo lectura para el grupo y otros (notación octal). | 7 | Cambiar permisos con el método octal |
| `chmod 750 sampledir` | Establece los permisos del directorio `sampledir` a lectura/escritura/ejecución para el propietario, lectura/ejecución para el grupo, y sin permisos para otros. | 7 | Cambiar permisos con el método octal |
| `chown student app.conf` | Cambia el propietario del archivo `app.conf` al usuario `student`. | 7 | Cambiar la propiedad de un usuario o grupo de archivos y directorios |
| `chown -R student Pictures` | Cambia recursivamente (`-R`) el propietario del directorio `Pictures` y todo su contenido al usuario `student`. | 7 | Cambiar la propiedad de un usuario o grupo de archivos y directorios |
| `chown :admins Pictures` | Cambia solo el grupo propietario del directorio `Pictures` al grupo `admins`. | 7 | Cambiar la propiedad de un usuario o grupo de archivos y directorios |
| `chown visitor:guests Pictures` | Cambia tanto el usuario propietario (`visitor`) como el grupo propietario (`guests`) del directorio `Pictures`. | 7 | Cambiar la propiedad de un usuario o grupo de archivos y directorios |
| `chgrp` | Comando alternativo para cambiar solo la propiedad del grupo de un archivo o directorio. | 7 | Cambiar la propiedad de un usuario o grupo de archivos y directorios |
| `lab start perms-cli` | Prepara el entorno para el ejercicio `perms-cli`. | 7 | Ejercicio guiado: Administrar permisos del sistema de archivos desde la línea de comandos |
| `mkdir /home/consultants` | Crea el directorio `/home/consultants`. | 7 | Ejercicio guiado: Administrar permisos del sistema de archivos desde la línea de comandos |
| `chmod g+w /home/consultants` | Agrega permiso de escritura para el grupo en el directorio. | 7 | Ejercicio guiado: Administrar permisos del sistema de archivos desde la línea de comandos |
| `chmod 770 /home/consultants` | Establece permisos de lectura/escritura/ejecución para el propietario y el grupo, y sin permisos para otros. | 7 | Ejercicio guiado: Administrar permisos del sistema de archivos desde la línea de comandos |
| `lab finish perms-cli` | Limpia el entorno después del ejercicio `perms-cli`. | 7 | Ejercicio guiado: Administrar permisos del sistema de archivos desde la línea de comandos |
| `chmod g+s example` | Agrega el bit especial `setgid` (SGID) al directorio `example`. | 7 | Configuración de permisos especiales |
| `chmod 2770 example` | Establece permisos usando notación octal de 4 dígitos, donde el `2` inicial establece el bit `setgid`. | 7 | Configuración de permisos especiales |
| `umask` | Muestra el valor actual de la máscara de creación de archivos de usuario. | 7 | Permisos de archivo predeterminados |
| `umask 077` | Establece la máscara de creación de archivos de usuario a `077`, lo que resulta en permisos más restrictivos para los archivos nuevos. | 7 | Permisos de archivo predeterminados |
| `lab start perms-default` | Prepara el entorno para el ejercicio `perms-default`. | 7 | Ejercicio guiado: Administrar permisos predeterminados y acceso a archivos |
| `echo "umask 007" >> ~/.bashrc` | Agrega un comando `umask` al archivo de inicio de Bash del usuario para que el cambio sea persistente. | 7 | Ejercicio guiado: Administrar permisos predeterminados y acceso a archivos |
| `lab finish perms-default` | Limpia el entorno después del ejercicio `perms-default`. | 7 | Ejercicio guiado: Administrar permisos predeterminados y acceso a archivos |
| `lab start perms-review` | Prepara el entorno para el laboratorio de revisión `perms-review`. | 7 | Laboratorio: Controlar el acceso a los archivos |
| `chmod 2770 /home/techdocs` | Establece el bit `setgid` y permisos `rwxrwx---` en el directorio. | 7 | Laboratorio: Controlar el acceso a los archivos |
| `chmod o+t /home/dbadmin1/grading/review2` | Agrega el permiso especial "sticky bit" (`t`) a un directorio. | 7 | Laboratorio: Administrar usuarios y grupos, permisos y procesos |
| `lab grade perms-review` | Califica el trabajo realizado en el laboratorio `perms-review`. | 7 | Laboratorio: Controlar el acceso a los archivos |
| `lab finish perms-review` | Limpia el entorno después del laboratorio `perms-review`. | 7 | Laboratorio: Controlar el acceso a los archivos |
| `top` | Muestra una vista dinámica y en tiempo real de los procesos del sistema, ordenada por uso de CPU. | 8 | Importancia de los estados de proceso |
| `ps aux` | Muestra todos los procesos (`a`), incluidos los que no tienen un terminal de control (`x`), en un formato orientado al usuario (`u`). | 8 | Procesos de listado |
| `ps lax` | Muestra todos los procesos (`a`) en un formato largo (`l`), incluidos los que no tienen un terminal de control (`x`). | 8 | Procesos de listado |
| `ps -ef` | Muestra todos los procesos (`-e`) en un formato de lista completo (`-f`). Sintaxis estándar de UNIX. | 8 | Procesos de listado |
| `ps --forest` | Muestra los procesos en un formato de árbol, mostrando las relaciones padre-hijo. | 8 | Procesos de listado |
| `sleep 10000 &` | Ejecuta el comando `sleep` en segundo plano (`&`). | 8 | Ejecutar trabajos en segundo plano |
| `jobs` | Muestra la lista de trabajos (procesos en segundo plano o detenidos) en la sesión de shell actual. | 8 | Ejecutar trabajos en segundo plano |
| `fg %1` | Trae el trabajo número 1 al primer plano. | 8 | Ejecutar trabajos en segundo plano |
| `ps j` | Muestra los procesos en formato de trabajo, incluyendo PGID y SID. | 8 | Ejecutar trabajos en segundo plano |
| `bg %1` | Reanuda la ejecución del trabajo detenido número 1 en segundo plano. | 8 | Ejecutar trabajos en segundo plano |
| `lab start processes-control` | Prepara el entorno para el ejercicio `processes-control`. | 8 | Ejercicio guiado: Trabajos de control |
| `chmod +x /home/student/bin/control` | Hace que un archivo de script sea ejecutable. | 8 | Ejercicio guiado: Trabajos de control |
| `tail -f ~/control_outfile` | Muestra las últimas líneas de un archivo y continúa mostrando las nuevas líneas a medida que se agregan. | 8 | Ejercicio guiado: Trabajos de control |
| `lab finish processes-control` | Limpia el entorno después del ejercicio `processes-control`. | 8 | Ejercicio guiado: Trabajos de control |
| `kill -l` | Lista todos los nombres y números de señales disponibles. | 8 | Enviar señales por solicitud explícita |
| `kill 5194` | Envía la señal predeterminada (SIGTERM, 15) al proceso con PID 5194. | 8 | Enviar señales por solicitud explícita |
| `kill -9 5199` | Envía la señal SIGKILL (9), que no se puede ignorar, para terminar forzosamente el proceso con PID 5199. | 8 | Enviar señales por solicitud explícita |
| `pgrep -l -u bob` | Busca (`grep`) y lista (`-l`) los PID de los procesos que pertenecen al usuario (`-u`) `bob`. | 8 | Controle procesos específicos |
| `pkill -SIGKILL -u bob` | Envía la señal SIGKILL a todos los procesos que pertenecen al usuario `bob`. | 8 | Controle procesos específicos |
| `w` | Muestra quién está conectado y qué están haciendo. | 8 | Controle procesos específicos |
| `pstree -p bob` | Muestra los procesos del usuario `bob` en un formato de árbol, incluyendo sus PIDs (`-p`). | 8 | Controle procesos específicos |
| `killall control` | Envía la señal predeterminada (SIGTERM) a todos los procesos cuyo nombre de comando es `control`. | 8 | Procesos múltiples de señales |
| `kill -SIGTERM %1` | Envía la señal SIGTERM al trabajo número 1. | 8 | Terminar trabajos en segundo plano |
| `lab start processes-kill` | Prepara el entorno para el ejercicio `processes-kill`. | 8 | Ejercicio guiado: Matar procesos |
| `kill -SIGSTOP %1` | Envía la señal SIGSTOP para suspender (detener) el trabajo número 1. | 8 | Ejercicio guiado: Matar procesos |
| `kill -SIGCONT %1` | Envía la señal SIGCONT para reanudar la ejecución del trabajo número 1. | 8 | Ejercicio guiado: Matar procesos |
| `pkill -SIGTERM tail` | Envía la señal SIGTERM a todos los procesos llamados `tail`. | 8 | Ejercicio guiado: Matar procesos |
| `lab finish processes-kill` | Limpia el entorno después del ejercicio `processes-kill`. | 8 | Ejercicio guiado: Matar procesos |
| `uptime` | Muestra la hora actual, cuánto tiempo ha estado funcionando el sistema, cuántos usuarios están conectados y los promedios de carga. | 8 | Describir el promedio de carga |
| `lscpu` | Muestra información sobre la arquitectura de la CPU. | 8 | Interpretar valores promedio de carga |
| `lab start processes-monitor` | Prepara el entorno para el ejercicio `processes-monitor`. | 8 | Ejercicio guiado: Supervisar la actividad del proceso |
| `lab finish processes-monitor` | Limpia el entorno después del ejercicio `processes-monitor`. | 8 | Ejercicio guiado: Supervisar la actividad del proceso |
| `lab start processes-review` | Prepara el entorno para el laboratorio de revisión `processes-review`. | 8 | Laboratorio: Supervisión y gestión de procesos de Linux |
| `grep "model name" /proc/cpuinfo | wc -l` | Cuenta el número de CPUs (núcleos) en el sistema. | 8 | Laboratorio: Supervisión y gestión de procesos de Linux |
| `lab grade processes-review` | Califica el trabajo realizado en el laboratorio `processes-review`. | 8 | Laboratorio: Supervisión y gestión de procesos de Linux |
| `lab finish processes-review` | Limpia el entorno después del laboratorio `processes-review`. | 8 | Laboratorio: Supervisión y gestión de procesos de Linux |
| `systemctl list-units --type=service` | Lista todas las unidades de tipo `service` que `systemd` ha cargado. | 9 | Enumerar unidades de servicio |
| `systemctl list-units --all` | Lista todas las unidades cargadas, independientemente de su estado de activación. | 9 | Enumerar unidades de servicio |
| `systemctl list-unit-files --type=service` | Lista el estado (enabled, disabled, static, etc.) de todos los archivos de unidad de servicio instalados. | 9 | Enumerar unidades de servicio |
| `systemctl status sshd.service` | Muestra información detallada sobre el estado actual del servicio `sshd`. | 9 | Ver estados de servicio |
| `systemctl is-active sshd.service` | Comprueba si un servicio está actualmente activo (en ejecución) y devuelve `active` o `inactive`. | 9 | Verificar el estado de un servicio |
| `systemctl is-enabled sshd.service` | Comprueba si un servicio está configurado para iniciarse automáticamente en el arranque y devuelve `enabled` o `disabled`. | 9 | Verificar el estado de un servicio |
| `systemctl is-failed sshd.service` | Comprueba si una unidad ha entrado en un estado de fallo. | 9 | Verificar el estado de un servicio |
| `lab start services-identify` | Prepara el entorno para el ejercicio `services-identify`. | 9 | Ejercicio guiado: Identificación de procesos del sistema iniciados automáticamente |
| `ps -p 747` | Muestra información sobre el proceso con el PID 747. | 9 | Ejercicio guiado: Identificación de procesos del sistema iniciados automáticamente |
| `lab finish services-identify` | Limpia el entorno después del ejercicio `services-identify`. | 9 | Ejercicio guiado: Identificación de procesos del sistema iniciados automáticamente |
| `systemctl start sshd` | Inicia el servicio `sshd`. | 9 | Servicios de inicio y parada |
| `systemctl stop sshd.service` | Detiene el servicio `sshd`. | 9 | Servicios de inicio y parada |
| `systemctl restart sshd.service` | Reinicia (detiene y luego inicia) el servicio `sshd`. | 9 | Reiniciar y volver a cargar servicios |
| `systemctl reload sshd.service` | Le indica al servicio `sshd` que vuelva a cargar su configuración sin reiniciarse. | 9 | Reiniciar y volver a cargar servicios |
| `systemctl reload-or-restart sshd.service` | Intenta recargar la configuración del servicio; si no es compatible, lo reinicia. | 9 | Reiniciar y volver a cargar servicios |
| `systemctl list-dependencies sshd.service` | Muestra una jerarquía de las unidades de las que depende el servicio `sshd` para iniciarse. | 9 | Enumerar dependencias de unidades |
| `systemctl mask sendmail.service` | Enmascara un servicio, impidiendo que se inicie manual o automáticamente. | 9 | Servicios de máscara y desenmascaramiento |
| `systemctl unmask sendmail` | Elimina la máscara de un servicio, permitiendo que se inicie de nuevo. | 9 | Servicios de máscara y desenmascaramiento |
| `systemctl enable sshd.service` | Habilita un servicio para que se inicie automáticamente en el arranque. | 9 | Habilitar servicios para que se inicien o detengan en el arranque |
| `systemctl enable --now sshd.service` | Habilita un servicio para el arranque y lo inicia inmediatamente en la sesión actual. | 9 | Habilitar servicios para que se inicien o detengan en el arranque |
| `systemctl disable --now sshd.service` | Deshabilita un servicio para el arranque y lo detiene inmediatamente en la sesión actual. | 9 | Habilitar servicios para que se inicien o detengan en el arranque |
| `lab start services-control` | Prepara el entorno para el ejercicio `services-control`. | 9 | Ejercicio guiado: Servicios del sistema de control |
| `systemctl reboot` | Reinicia el sistema. | 9 | Ejercicio guiado: Servicios del sistema de control |
| `lab finish services-control` | Limpia el entorno después del ejercicio `services-control`. | 9 | Ejercicio guiado: Servicios del sistema de control |
| `lab start services-review` | Prepara el entorno para el laboratorio de revisión `services-review`. | 9 | Laboratorio: Servicios de control y demonios |
| `lab grade services-review` | Califica el trabajo realizado en el laboratorio `services-review`. | 9 | Laboratorio: Servicios de control y demonios |
| `lab finish services-review` | Limpia el entorno después del laboratorio `services-review`. | 9 | Laboratorio: Servicios de control y demonios |
| `ssh hostname` | Ejecuta el comando `hostname` en un sistema remoto a través de SSH sin iniciar un shell interactivo. | 10 | Descripción de Secure Shell |
| `w --from` | Muestra quién está conectado, incluyendo la dirección IP o nombre de host desde donde se conectaron. | 10 | Identificación de usuarios remotos |
| `ssh-keygen -lf /etc/ssh/ssh_host_ecdsa_key.pub` | Muestra la huella digital (`-l`) de un archivo de clave pública de host SSH (`-f`). | 10 | Comprobación estricta de claves de host |
| `ssh-keygen -R remotesystemname` | Elimina la entrada para `remotesystemname` del archivo `~/.ssh/known_hosts`. | 10 | Solución de problemas de clave de host |
| `lab start ssh-access` | Prepara el entorno para el ejercicio `ssh-access`. | 10 | Ejercicio guiado: Acceso a la línea de comandos remota |
| `rm /home/student/.ssh/known_hosts` | Elimina el archivo de hosts conocidos de SSH del usuario. | 10 | Ejercicio guiado: Acceso a la línea de comandos remota |
| `lab finish ssh-access` | Limpia el entorno después del ejercicio `ssh-access`. | 10 | Ejercicio guiado: Acceso a la línea de comandos remota |
| `ssh-keygen` | Genera un par de claves SSH (pública y privada) para la autenticación sin contraseña. | 10 | Generación de claves SSH |
| `ssh-keygen -f .ssh/key-with-pass` | Genera un par de claves SSH y las guarda en archivos con el nombre base `key-with-pass`. | 10 | Generación de claves SSH |
| `ssh-copy-id -i .ssh/key-with-pass.pub user@remotehost` | Copia una clave pública específica al archivo `authorized_keys` de un usuario en un host remoto. | 10 | Compartir la clave pública |
| `eval $(ssh-agent)` | Inicia el agente SSH y configura las variables de entorno necesarias en el shell actual. | 10 | Autenticación no interactiva con el Administrador de claves |
| `ssh-add .ssh/key-with-pass` | Agrega una clave privada al agente SSH, solicitando la frase de contraseña una vez para almacenarla en caché. | 10 | Autenticación no interactiva con el Administrador de claves |
| `ssh -v user@remotehost` | Inicia una conexión SSH en modo detallado (`-v`), mostrando información de depuración útil para la solución de problemas. | 10 | Solución de problemas básicos de conexión SSH |
| `lab start ssh-configure` | Prepara el entorno para el ejercicio `ssh-configure`. | 10 | Ejercicio guiado: Configuración de la autenticación basada en claves SSH |
| `lab finish ssh-configure` | Limpia el entorno después del ejercicio `ssh-configure`. | 10 | Ejercicio guiado: Configuración de la autenticación basada en claves SSH |
| `lab start ssh-customize` | Prepara el entorno para el ejercicio `ssh-customize`. | 10 | Ejercicio guiado: Personalización de la configuración del servicio OpenSSH |
| `lab finish ssh-customize` | Limpia el entorno después del ejercicio `ssh-customize`. | 10 | Ejercicio guiado: Personalización de la configuración del servicio OpenSSH |
| `lab start ssh-review` | Prepara el entorno para el laboratorio de revisión `ssh-review`. | 10 | Laboratorio: Configuración y protección de SSH |
| `lab grade ssh-review` | Califica el trabajo realizado en el laboratorio `ssh-review`. | 10 | Laboratorio: Configuración y protección de SSH |
| `lab finish ssh-review` | Limpia el entorno después del laboratorio `ssh-review`. | 10 | Laboratorio: Configuración y protección de SSH |
| `ip addr show dev eth0` | Muestra la información de dirección (IP, MAC) para la interfaz de red `eth0`. | 11 | Direcciones IPv6 |
| `ip -br addr show dev eth0` | Muestra la información de dirección para `eth0` en un formato breve y legible. | 11 | Direcciones IPv6 |
| `ping6 ff02::1%ens3` | Hace ping a la dirección de multidifusión de todos los nodos en el enlace local, especificando la interfaz de salida `ens3`. | 11 | Subredes IPv6 |
| `ip link show` | Muestra información sobre todas las interfaces de red. | 11 | Recopilar información de la interfaz de red |
| `ip -s link show ens3` | Muestra estadísticas detalladas (paquetes, errores, etc.) para la interfaz `ens3`. | 11 | Mostrar estadísticas de rendimiento |
| `ping -c3 192.0.2.254` | Envía 3 paquetes ICMP ECHO_REQUEST al host `192.0.2.254` para probar la conectividad. | 11 | Verificar la conectividad entre hosts |
| `ip route` | Muestra la tabla de enrutamiento IPv4. | 11 | Describir la tabla de enrutamiento |
| `ip -6 route` | Muestra la tabla de enrutamiento IPv6. | 11 | Describir la tabla de enrutamiento |
| `tracepath access.redhat.com` | Traza la ruta de red hacia un destino, mostrando cada salto. | 11 | Trazar rutas de tráfico |
| `ss -ta` | Muestra todos (`-a`) los sockets TCP (`-t`). | 11 | Solucionar problemas de puerto y servicio |
| `lab start net-validate` | Prepara el entorno para el ejercicio `net-validate`. | 11 | Ejercicio guiado: Validar la configuración de red |
| `lab finish net-validate` | Limpia el entorno después del ejercicio `net-validate`. | 11 | Ejercicio guiado: Validar la configuración de red |
| `nmcli dev status` | Muestra el estado de todos los dispositivos de red gestionados por NetworkManager. | 11 | Describir el servicio NetworkManager |
| `nmcli con show --active` | Muestra solo las conexiones de red que están actualmente activas. | 11 | Ver información de red |
| `nmcli con add con-name eno2 type ethernet ifname eno2` | Agrega una nueva conexión de red llamada `eno2` para la interfaz `eno2`. | 11 | Agregar una conexión de red |
| `nmcli con up static-ens3` | Activa (levanta) la conexión de red llamada `static-ens3`. | 11 | Administrar conexiones de red |
| `nmcli dev disconnect ens3` | Desconecta la interfaz de red `ens3`, desactivando su conexión activa. | 11 | Administrar conexiones de red |
| `nmcli con mod static-ens3 +ipv4.dns 2.2.2.2` | Modifica la conexión `static-ens3` para agregar (`+`) un servidor DNS. | 11 | Actualizar la configuración de conexión de red |
| `nmcli con reload` | Vuelve a cargar todos los perfiles de conexión desde el disco. | 11 | Actualizar la configuración de conexión de red |
| `nmcli con del static-ens3` | Elimina el perfil de conexión llamado `static-ens3`. | 11 | Eliminar una conexión de red |
| `nmcli gen permissions` | Muestra los permisos de PolicyKit para que el usuario actual realice acciones de NetworkManager. | 11 | Permisos para modificar la configuración de NetworkManager |
| `lab start net-configure` | Prepara el entorno para el ejercicio `net-configure`. | 11 | Ejercicio guiado: configuración de redes desde la línea de comandos |
| `lab finish net-configure` | Limpia el entorno después del ejercicio `net-configure`. | 11 | Ejercicio guiado: configuración de redes desde la línea de comandos |
| `lab start net-edit` | Prepara el entorno para el ejercicio `net-edit`. | 11 | Ejercicio guiado: Edición de archivos de configuración de red |
| `lab finish net-edit` | Limpia el entorno después del ejercicio `net-edit`. | 11 | Ejercicio guiado: Edición de archivos de configuración de red |
| `hostname` | Muestra el nombre de host actual del sistema. | 11 | Actualizar el nombre de host del sistema |
| `hostnamectl hostname host.example.com` | Establece el nombre de host estático del sistema a `host.example.com`. | 11 | Actualizar el nombre de host del sistema |
| `hostnamectl status` | Muestra el estado detallado del nombre de host (estático, transitorio, etc.). | 11 | Actualizar el nombre de host del sistema |
| `getent hosts hostname` | Obtiene entradas de la base de datos de hosts, consultando `/etc/hosts` y DNS según la configuración de `nsswitch.conf`. | 11 | Configurar la resolución de nombres |
| `host servera.lab.example.com` | Realiza una consulta DNS para el nombre de host especificado. | 11 | Prueba de resolución de nombres DNS |
| `dig servera.lab.example.com` | Realiza una consulta DNS detallada para el nombre de host especificado. | 11 | Prueba de resolución de nombres DNS |
| `lab start net-hostnames` | Prepara el entorno para el ejercicio `net-hostnames`. | 11 | Ejercicio guiado: Configurar nombres de host y resolución de nombres |
| `lab finish net-hostnames` | Limpia el entorno después del ejercicio `net-hostnames`. | 11 | Ejercicio guiado: Configurar nombres de host y resolución de nombres |
| `lab start net-review` | Prepara el entorno para el laboratorio de revisión `net-review`. | 11 | Laboratorio: Administración de redes |
| `echo "10.0.1.1 private" >> /etc/hosts` | Agrega una entrada estática al archivo `/etc/hosts`. | 11 | Laboratorio: Administración de redes |
| `lab grade net-review` | Califica el trabajo realizado en el laboratorio `net-review`. | 11 | Laboratorio: Administración de redes |
| `lab finish net-review` | Limpia el entorno después del laboratorio `net-review`. | 11 | Laboratorio: Administración de redes |
| `rhc connect -a host_key -o 117018` | Registra un sistema en Red Hat usando una clave de activación y un ID de organización. | 12 | Suscribir un sistema mediante el comando rhc |
| `rhc disconnect` | Anula el registro de un sistema de Red Hat. | 12 | Suscribir un sistema mediante el comando rhc |
| `subscription-manager register --username <yourusername>` | Registra un sistema en Red Hat usando credenciales de nombre de usuario y contraseña. | 12 | Suscribir un sistema mediante el comando subscription-manager |
| `subscription-manager list --available` | Lista todas las suscripciones disponibles para la cuenta. | 12 | Suscribir un sistema mediante el comando subscription-manager |
| `subscription-manager attach --auto` | Adjunta automáticamente una suscripción compatible al sistema. | 12 | Suscribir un sistema mediante el comando subscription-manager |
| `subscription-manager unregister` | Anula el registro del sistema de Red Hat Subscription Management. | 12 | Suscribir un sistema mediante el comando subscription-manager |
| `rct` | Inspecciona los certificados de derechos y las suscripciones adjuntas en el sistema. | 12 | Certificados de derechos |
| `rpm -qa` | Consulta (`-q`) todos (`-a`) los paquetes RPM instalados en el sistema. | 12 | Examinar paquetes RPM |
| `rpm -qf /etc/yum.repos.d` | Consulta (`-q`) qué paquete es propietario del archivo (`-f`) especificado. | 12 | Examinar paquetes RPM |
| `rpm -qi dnf` | Muestra información detallada (`-i`) sobre el paquete `dnf` instalado. | 12 | Examinar paquetes RPM |
| `rpm -ql dnf` | Lista (`-l`) todos los archivos que pertenecen al paquete `dnf` instalado. | 12 | Examinar paquetes RPM |
| `rpm -qc openssh-clients` | Lista solo los archivos de configuración (`-c`) que pertenecen al paquete `openssh-clients`. | 12 | Examinar paquetes RPM |
| `rpm -qd openssh-clients` | Lista solo los archivos de documentación (`-d`) que pertenecen al paquete `openssh-clients`. | 12 | Examinar paquetes RPM |
| `rpm -q --scripts openssh-server` | Muestra los scripts de pre/post instalación/desinstalación del paquete `openssh-server`. | 12 | Examinar paquetes RPM |
| `rpm -q --changelog audit` | Muestra el registro de cambios del paquete `audit`. | 12 | Examinar paquetes RPM |
| `rpm -qlp podman-4.0.0-6.el9.x86_64.rpm` | Lista (`-l`) los archivos dentro de un archivo de paquete RPM (`-p`) sin instalarlo. | 12 | Examinar paquetes RPM |
| `rpm -ivh podman-4.0.0-6.el9.x86_64.rpm` | Instala (`-i`) un paquete RPM desde un archivo, mostrando una salida detallada (`-v`) y una barra de progreso (`-h`). | 12 | Instalar paquetes RPM |
| `rpm2cpio httpd-2.4.51-7.el9_0.x86_64.rpm | cpio -idv` | Extrae el contenido de un archivo RPM al directorio actual. | 12 | Extracción de paquetes RPM |
| `rpm2cpio ... | cpio -tv` | Lista el contenido de un archivo RPM sin extraerlo. | 12 | Extracción de paquetes RPM |
| `lab start software-rpm` | Prepara el entorno para el ejercicio `software-rpm`. | 12 | Ejercicio guiado: Explicar e investigar paquetes de software RPM |
| `sudo rpm -ivh rhcsa-script-1.0.0-1.noarch.rpm` | Instala un paquete RPM local con privilegios de superusuario. | 12 | Ejercicio guiado: Explicar e investigar paquetes de software RPM |
| `lab finish software-rpm` | Limpia el entorno después del ejercicio `software-rpm`. | 12 | Ejercicio guiado: Explicar e investigar paquetes de software RPM |
| `dnf list 'http*'` | Lista todos los paquetes instalados y disponibles cuyos nombres comienzan con `http`. | 12 | Buscar software con DNF |
| `dnf search all 'web server'` | Busca paquetes que contengan 'web server' en su nombre, resumen o descripción. | 12 | Buscar software con DNF |
| `dnf info httpd` | Muestra información detallada sobre el paquete `httpd`. | 12 | Buscar software con DNF |
| `dnf provides /var/www/html` | Busca qué paquete proporciona el archivo o la capacidad `/var/www/html`. | 12 | Buscar software con DNF |
| `dnf install httpd` | Instala el paquete `httpd` y todas sus dependencias. | 12 | Instalar y eliminar software con DNF |
| `dnf update` | Actualiza todos los paquetes instalados en el sistema a sus últimas versiones disponibles. | 12 | Instalar y eliminar software con DNF |
| `dnf remove httpd` | Elimina (desinstala) el paquete `httpd` y las dependencias que ya no son necesarias. | 12 | Instalar y eliminar software con DNF |
| `dnf group list` | Lista todos los grupos de paquetes disponibles y instalados. | 12 | Instalar y eliminar grupos de software con DNF |
| `dnf group info "RPM Development Tools"` | Muestra información detallada sobre un grupo de paquetes, incluyendo los paquetes que contiene. | 12 | Instalar y eliminar grupos de software con DNF |
| `dnf group install "RPM Development Tools"` | Instala todos los paquetes predeterminados y obligatorios del grupo de paquetes especificado. | 12 | Instalar y eliminar grupos de software con DNF |
| `dnf history` | Muestra un historial de las transacciones de DNF (instalaciones, eliminaciones, actualizaciones). | 12 | Ver historial de transacciones |
| `dnf history undo 6` | Deshace la transacción con el ID 6, eliminando los paquetes que se instalaron o reinstalando los que se eliminaron. | 12 | Ver historial de transacciones |
| `lab start software-dnf` | Prepara el entorno para el ejercicio `software-dnf`. | 12 | Ejercicio guiado: Instalación y actualización de paquetes de software con DNF |
| `lab finish software-dnf` | Limpia el entorno después del ejercicio `software-dnf`. | 12 | Ejercicio guiado: Instalación y actualización de paquetes de software con DNF |
| `dnf repolist all` | Lista todos los repositorios de software configurados, tanto habilitados como deshabilitados. | 12 | Habilitación de repositorios de software de Red Hat |
| `dnf config-manager --enable rhel-9-server-debug-rpms` | Habilita un repositorio de software específico. | 12 | Habilitación de repositorios de software de Red Hat |
| `dnf config-manager --add-repo="URL"` | Agrega un nuevo repositorio de software desde una URL, creando un archivo `.repo`. | 12 | Agregar repositorios DNF |
| `rpm --import https://.../RPM-GPG-KEY-EPEL-9` | Importa una clave GPG pública para verificar la firma de los paquetes RPM. | 12 | Paquetes de configuración RPM para repositorios locales |
| `dnf install https://.../epel-release-latest-9.noarch.rpm` | Instala un paquete RPM directamente desde una URL. | 12 | Paquetes de configuración RPM para repositorios locales |
| `lab start software-repo` | Prepara el entorno para el ejercicio `software-repo`. | 12 | Ejercicio guiado: Habilitar repositorios de software DNF |
| `dnf config-manager --disable rht-updates` | Deshabilita un repositorio de software. | 12 | Ejercicio guiado: Habilitar repositorios de software DNF |
| `lab finish software-repo` | Limpia el entorno después del ejercicio `software-repo`. | 12 | Ejercicio guiado: Habilitar repositorios de software DNF |
| `lab start software-review` | Prepara el entorno para el laboratorio de revisión `software-review`. | 12 | Laboratorio: Instalación y actualización de paquetes de software |
| `sudo dnf install rhcsa-script-1.0.0-1.noarch.rpm` | Instala un paquete RPM local usando DNF, que también resolverá dependencias si es necesario. | 12 | Laboratorio: Instalación y actualización de paquetes de software |
| `lab grade software-review` | Califica el trabajo realizado en el laboratorio `software-review`. | 12 | Laboratorio: Instalación y actualización de paquetes de software |
| `lab finish software-review` | Limpia el entorno después del laboratorio `software-review`. | 12 | Laboratorio: Instalación y actualización de paquetes de software |
| `lsblk` | Lista los dispositivos de bloque (discos y particiones) y sus puntos de montaje. | 13 | Identificar un dispositivo de bloque |
| `lsblk -fp` | Lista los dispositivos de bloque mostrando la ruta completa del dispositivo (`-p`) y la información del sistema de archivos (`-f`). | 13 | Montar sistema de archivos con UUID de partición |
| `mount /dev/vda4 /mnt/data` | Monta el sistema de archivos en el dispositivo `/dev/vda4` en el directorio `/mnt/data`. | 13 | Montar el sistema de archivos con el nombre de la partición |
| `mount UUID="..." /mnt/data` | Monta un sistema de archivos especificando su UUID en lugar del nombre del dispositivo. | 13 | Montar sistema de archivos con UUID de partición |
| `umount /mnt/data` | Desmonta el sistema de archivos que está montado en `/mnt/data`. | 13 | Desmontar sistemas de archivos |
| `lsof /mnt/data` | Lista los archivos abiertos (`List Open Files`) en un punto de montaje, mostrando qué procesos lo están utilizando. | 13 | Desmontar sistemas de archivos |
| `lab start fs-mount` | Prepara el entorno para el ejercicio `fs-mount`. | 13 | Ejercicio guiado: Montar y desmontar sistemas de archivos |
| `lab finish fs-mount` | Limpia el entorno después del ejercicio `fs-mount`. | 13 | Ejercicio guiado: Montar y desmontar sistemas de archivos |
| `updatedb` | Actualiza la base de datos utilizada por el comando `locate`. | 13 | Localizar archivos por nombre |
| `locate passwd` | Busca rápidamente en la base de datos de archivos cualquier archivo o directorio que contenga "passwd" en su ruta. | 13 | Localizar archivos por nombre |
| `locate -i messages` | Realiza una búsqueda con `locate` que no distingue entre mayúsculas y minúsculas. | 13 | Localizar archivos por nombre |
| `locate -n 5 passwd` | Limita la salida de `locate` a los primeros 5 resultados. | 13 | Localizar archivos por nombre |
| `find / -name sshd_config` | Busca en todo el sistema de archivos (`/`) un archivo con el nombre exacto `sshd_config`. | 13 | Búsqueda de archivos en tiempo real |
| `find / -name '*.txt'` | Busca archivos cuyos nombres terminen en `.txt`. Las comillas son importantes para evitar la expansión del shell. | 13 | Búsqueda de archivos en tiempo real |
| `find / -iname '*messages*'` | Realiza una búsqueda de archivos por nombre que no distingue entre mayúsculas y minúsculas (`-iname`). | 13 | Búsqueda de archivos en tiempo real |
| `find -user developer` | Busca archivos en el directorio actual y subdirectorios que son propiedad del usuario `developer`. | 13 | Buscar archivos según la propiedad o el permiso |
| `find /home -perm 764` | Busca archivos en `/home` que tengan exactamente los permisos `764`. | 13 | Buscar archivos según la propiedad o el permiso |
| `find /home -perm -324` | Busca archivos en `/home` que tengan *al menos* los permisos especificados (propietario: wx, grupo: w, otros: r). | 13 | Buscar archivos según la propiedad o el permiso |
| `find -size +10G` | Busca archivos de más de 10 Gigabytes. | 13 | Buscar archivos según el tamaño |
| `find / -mmin 120` | Busca archivos en todo el sistema que fueron modificados hace exactamente 120 minutos. | 13 | Búsqueda de archivos en función del tiempo de modificación |
| `find /etc -type d` | Busca solo directorios (`-type d`) dentro de `/etc`. | 13 | Buscar archivos según el tipo de archivo |
| `lab start fs-locate` | Prepara el entorno para el ejercicio `fs-locate`. | 13 | Ejercicio guiado: Localización de archivos en el sistema |
| `lab finish fs-locate` | Limpia el entorno después del ejercicio `fs-locate`. | 13 | Ejercicio guiado: Localización de archivos en el sistema |
| `lab start fs-review` | Prepara el entorno para el laboratorio de revisión `fs-review`. | 13 | Laboratorio: Acceso a sistemas de archivos Linux |
| `du /usr/share > /mnt/freespace/results.txt` | Calcula el uso del disco para el directorio `/usr/share` y guarda la salida en un archivo. | 13 | Laboratorio: Acceso a sistemas de archivos Linux |
| `find / -iname review5-path 2>/dev/null` | Busca un archivo, redirigiendo los mensajes de error (como "Permission denied") a `/dev/null` para ocultarlos. | 13 | Laboratorio: Acceso a sistemas de archivos Linux |
| `lab grade fs-review` | Califica el trabajo realizado en el laboratorio `fs-review`. | 13 | Laboratorio: Acceso a sistemas de archivos Linux |
| `lab finish fs-review` | Limpia el entorno después del laboratorio `fs-review`. | 13 | Laboratorio: Acceso a sistemas de archivos Linux |
| `dnf install cockpit` | Instala el paquete de la consola web. | 14 | Habilitar la consola web |
| `firewall-cmd --add-service=cockpit --permanent` | Agrega permanentemente el servicio `cockpit` a la zona de firewall predeterminada. | 14 | Habilitar la consola web |
| `firewall-cmd --reload` | Vuelve a cargar la configuración del firewall para aplicar los cambios permanentes. | 14 | Habilitar la consola web |
| `lab start support-cockpit` | Prepara el entorno para el ejercicio `support-cockpit`. | 14 | Ejercicio guiado: Análisis y administración de servidores remotos |
| `lab finish support-cockpit` | Limpia el entorno después del ejercicio `support-cockpit`. | 14 | Ejercicio guiado: Análisis y administración de servidores remotos |
| `sos report` | Genera un informe de diagnóstico del sistema (sosreport) para la solución de problemas y el soporte técnico. | 14 | Generar un informe sos desde la línea de comandos |
| `sos clean /path/to/sosreport.tar.xz` | Ofusca información sensible de un sosreport existente. | 14 | Generar un informe sos desde la línea de comandos |
| `lab start support-portal` | Prepara el entorno para el ejercicio `support-portal`. | 14 | Ejercicio guiado: Crear un informe de diagnóstico |
| `systemctl start cockpit.socket` | Inicia el socket de la consola web. | 14 | Ejercicio guiado: Crear un informe de diagnóstico |
| `lab finish support-portal` | Limpia el entorno después del ejercicio `support-portal`. | 14 | Ejercicio guiado: Crear un informe de diagnóstico |
| `insights-client --register` | Registra el sistema con el servicio Red Hat Insights. | 14 | Instalar clientes de Red Hat Insights |
| `lab start rhcsa-rh124-review1` | Prepara el entorno para el primer laboratorio de revisión exhaustiva. | 15 | Laboratorio: Administrar archivos desde la línea de comandos |
| `lab grade rhcsa-rh124-review1` | Califica el trabajo realizado en el primer laboratorio de revisión. | 15 | Laboratorio: Administrar archivos desde la línea de comandos |
| `lab finish rhcsa-rh124-review1` | Limpia el entorno después del primer laboratorio de revisión. | 15 | Laboratorio: Administrar archivos desde la línea de comandos |
| `lab start rhcsa-rh124-review2` | Prepara el entorno para el segundo laboratorio de revisión exhaustiva. | 15 | Laboratorio: Administrar usuarios y grupos, permisos y procesos |
| `lab grade rhcsa-rh124-review2` | Califica el trabajo realizado en el segundo laboratorio de revisión. | 15 | Laboratorio: Administrar usuarios y grupos, permisos y procesos |
| `lab finish rhcsa-rh124-review2` | Limpia el entorno después del segundo laboratorio de revisión. | 15 | Laboratorio: Administrar usuarios y grupos, permisos y procesos |
| `lab start rhcsa-rh124-review3` | Prepara el entorno para el tercer laboratorio de revisión exhaustiva. | 15 | Laboratorio: Configurar y administrar un servidor |
| `lab grade rhcsa-rh124-review3` | Califica el trabajo realizado en el tercer laboratorio de revisión. | 15 | Laboratorio: Configurar y administrar un servidor |
| `lab finish rhcsa-rh124-review3` | Limpia el entorno después del tercer laboratorio de revisión. | 15 | Laboratorio: Configurar y administrar un servidor |
| `lab start rhcsa-rh124-review4` | Prepara el entorno para el cuarto laboratorio de revisión exhaustiva. | 15 | Laboratorio: Administración de redes |
| `lab grade rhcsa-rh124-review4` | Califica el trabajo realizado en el cuarto laboratorio de revisión. | 15 | Laboratorio: Administración de redes |
| `lab finish rhcsa-rh124-review4` | Limpia el entorno después del cuarto laboratorio de revisión. | 15 | Laboratorio: Administración de redes |
| `lab start rhcsa-rh124-review5` | Prepara el entorno para el quinto laboratorio de revisión exhaustiva. | 15 | Laboratorio: Montaje de sistemas de archivos y búsqueda de archivos |
| `lab grade rhcsa-rh124-review5` | Califica el trabajo realizado en el quinto laboratorio de revisión. | 15 | Laboratorio: Montaje de sistemas de archivos y búsqueda de archivos |
| `lab finish rhcsa-rh124-review5` | Limpia el entorno después del quinto laboratorio de revisión. | 15 | Laboratorio: Montaje de sistemas de archivos y búsqueda de archivos |

### Tabla de Atajos de Teclado y Metacaracteres de Shell

| Atajo / Metacarácter | Descripción | Capítulo | Sección/Contexto |
| :--- | :--- | :--- | :--- |
| `Ctrl+Alt+F[1-6]` | Cambia entre las diferentes consolas virtuales de texto. | 2 | Inicie sesión en un sistema local |
| `Ctrl+D` | Finaliza la sesión de shell actual (equivale a `exit`). | 2 | Cerrar sesión desde un sistema remoto |
| `Super` (Tecla de Windows/Comando) | Abre la vista general de Actividades en GNOME. | 2 | Partes del shell de GNOME |
| `Super+M` | Abre o cierra la bandeja de mensajes en GNOME. | 2 | Partes del shell de GNOME |
| `Ctrl+Alt+Flecha Izquierda/Derecha` | Cambia entre espacios de trabajo en GNOME. | 2 | Acceder a espacios de trabajo |
| `Alt+F2` | Abre el cuadro de diálogo "Enter a Command" en GNOME. | 2 | Iniciar un terminal |
| `Super+L` | Bloquea la pantalla en GNOME. | 2 | Bloquear la pantalla y cerrar sesión |
| `Ctrl+Alt+Supr` | Inicia el proceso de apagado del sistema desde GNOME. | 2 | Apague o reinicie el sistema |
| `[Tab]` | Autocompleta un comando o nombre de archivo. Presionar dos veces muestra las opciones. | 2 | Descripción de la finalización de tabulaciones |
| `\` (al final de la línea) | Carácter de escape que permite continuar un comando en la línea siguiente. | 2 | Escribir un comando largo en varias líneas |
| `!` | Metacarácter para la expansión del historial de comandos. | 2 | Mostrar el historial de comandos |
| `Esc+.` o `Alt+.` | Inserta la última palabra del comando anterior en la línea de comandos actual. | 2 | Mostrar el historial de comandos |
| `Ctrl+A` | Mueve el cursor al principio de la línea de comandos. | 2 | Editar la línea de comandos |
| `Ctrl+E` | Mueve el cursor al final de la línea de comandos. | 2 | Editar la línea de comandos |
| `Ctrl+U` | Borra desde el cursor hasta el principio de la línea. | 2 | Editar la línea de comandos |
| `Ctrl+K` | Borra desde el cursor hasta el final de la línea. | 2 | Editar la línea de comandos |
| `Ctrl+R` | Inicia una búsqueda inversa en el historial de comandos. | 2 | Editar la línea de comandos |
| `*` | Comodín que coincide con cero o más caracteres en la expansión de nombres de ruta. | 3 | Expansión de nombres de ruta y coincidencia de patrones |
| `?` | Comodín que coincide con cualquier carácter individual en la expansión de nombres de ruta. | 3 | Expansión de nombres de ruta y coincidencia de patrones |
| `[...]` | Coincide con cualquier carácter dentro de los corchetes en la expansión de nombres de ruta. | 3 | Expansión de nombres de ruta y coincidencia de patrones |
| `{...}` | Expansión de llaves para generar cadenas arbitrarias. | 3 | Expansión de aparatos ortopédicos |
| `~` | Metacarácter que se expande al directorio de inicio del usuario actual. | 3 | Expansión de tilde |
| `$` | Inicia la expansión de una variable o la sustitución de un comando. | 3 | Expansión variable / Sustitución de comandos |
| `>` | Redirige la salida estándar, sobrescribiendo el archivo de destino. | 5 | Redirigir la salida a un archivo |
| `>>` | Redirige la salida estándar, agregándola al final del archivo de destino. | 5 | Redirigir la salida a un archivo |
| `2>` | Redirige el error estándar. | 5 | Redirigir la salida a un archivo |
| `&>` | Redirige tanto la salida estándar como el error estándar al mismo destino. | 5 | Redirigir la salida a un archivo |
| `|` | Tubería (pipe), conecta la salida estándar de un comando a la entrada estándar de otro. | 5 | Construir canalizaciones |
| `Ctrl+z` | Suspende el proceso en primer plano actual (envía la señal SIGTSTP). | 8 | Ejecutar trabajos en segundo plano |
| `Ctrl+c` | Interrumpe y finaliza el proceso en primer plano actual (envía la señal SIGINT). | 8 | Enviar señales por solicitud explícita |
| `Ctrl+\` | Finaliza el proceso en primer plano y genera un volcado de núcleo (envía la señal SIGQUIT). | 8 | Enviar señales por solicitud explícita |
| `%` | Prefijo utilizado en comandos de control de trabajos (`fg`, `bg`, `kill`) para referirse a un número de trabajo. | 8 | Terminar trabajos en segundo plano |