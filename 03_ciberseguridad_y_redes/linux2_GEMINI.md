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
| `/etc/network/` | Configuración de interfaces de red (según la distribución). |
| `/etc/resolv.conf` | Configuración de los servidores de nombres DNS. |
| `/etc/nsswitch.conf` | **N**ame **S**ervice **S**witch: Configura el orden de resolución de nombres (ej: hosts, dns). |
| `/etc/login.defs` | Configuración predeterminada para la creación de usuarios y políticas de contraseñas. |
| `/etc/skel/` | **Skel**eton: Directorio que contiene archivos y directorios modelo que se copian al home de un nuevo usuario. |
| `/etc/systemd/` | Archivos de configuración para servicios y unidades de systemd. |
| `/etc/systemd/system/` | Unidades de `systemd` personalizadas o modificadas por el administrador. |
| `/etc/init.d/` | Scripts de inicio de servicios (usado en sistemas con SysVinit). |
| `/etc/profile` | Variables de entorno globales para todos los usuarios. |
| `/etc/bash.bashrc` | Alias y funciones globales para sesiones Bash. |
| `/etc/issue` | Mensaje mostrado *antes* del prompt de login en consolas locales. |
| `/etc/motd` | **M**essage **o**f **t**he **D**ay: Mensaje mostrado a los usuarios después de un inicio de sesión exitoso. |
| `/etc/exports` | Configuración de directorios compartidos vía NFS. |
| `/etc/alternatives/` | Sistema de enlaces simbólicos para gestionar múltiples versiones de binarios. |

### 0.3. Archivos Ocultos Comunes en Linux/Unix

| Archivo/Directorio | Tipo | Propósito técnico |
| :--- | :--- | :--- |
| `.bashrc` | Archivo | Configura alias, funciones y entorno para Bash. |
| `.profile` | Archivo | Define variables de entorno y comandos al iniciar sesión. |
| `.config/` | Directorio | Contiene configuraciones de apps gráficas y CLI. |
| `.local/` | Directorio | Instalaciones y datos locales del usuario. |
| `.ssh/` | Directorio | Claves privadas/públicas y configuración de acceso remoto SSH. |
| `.git/` | Directorio | Metadatos y configuración de repositorios Git. |
| `.vimrc` | Archivo | Configuración personalizada para el editor Vim. |
| `.npmrc` | Archivo | Configuración de NPM (Node.js). |
| `.docker/` | Directorio | Configuración de Docker CLI y credenciales. |
| `.env` | Archivo | Variables de entorno para proyectos (usado en desarrollo web). |

---

## 1. 🧭 Navegación y Exploración del Sistema

### 1.0 🔧 **Conceptos Básicos de la Shell**

| Símbolo | Significado |
| :--- | :--- |
| `$` | Prompt de un usuario normal. Ej: `[user@host ~]$` |
| `#` | Prompt del superusuario (root). Ej: `[root@host ~]#` |
| `~` | Representa el directorio "home" del usuario actual. |

### 1.1. Ubicación y Navegación

| Comando | Descripción | Ejemplo |
| :--- | :--- | :--- |
| `pwd` | **P**rint **W**orking **D**irectory. Muestra la ruta absoluta del directorio actual. | `pwd` |
| `cd [ruta]` | **C**hange **D**irectory. Cambia el directorio de trabajo actual. | `cd /var/log` |
| `cd ~` o `cd` | Cambia al directorio "home" del usuario actual. | `cd` |
| `cd ..` | Cambia al directorio padre del actual. | `cd ..` |
| `cd -` | Cambia al directorio de trabajo anterior. | `cd -` |
| `cd /` | Cambia al directorio raíz del sistema. | `cd /` |
| `cd .` | Cambia al directorio actual (no tiene efecto práctico). | `cd .` |
| `cd Videos` | Cambia el directorio de trabajo actual al subdirectorio `Videos`. | `cd Videos` |
| `cd /home/user/Documents` | Cambia el directorio de trabajo actual a la ruta absoluta `/home/user/Documents`. | `cd /home/user/Documents` |
| `cd -P /home/user/configfiles` | Cambia al directorio real al que apunta un enlace simbólico, en lugar de usar el nombre del enlace simbólico en la ruta. | `cd -P /home/user/configfiles` |
| `cd /home/consultants` | Cambiar a directorio consultants | `cd /home/consultants` |
| `cd /tmp/shared` | Cambiar a directorio shared | `cd /tmp/shared` |
| `cd /home/techdocs` | Cambiar a directorio techdocs | `cd /home/techdocs` |

### 1.2. Listado de Contenidos

| Comando | Descripción |
| :--- | :--- |
| `ls` | **L**i**s**t. Lista archivos y directorios. |
| `dir` | Lista archivos y carpetas (Windows). |
| `ls -l` | Formato largo, muestra permisos, propietario, tamaño, fecha. |
| `ls -a` | Muestra todos los archivos, incluyendo los ocultos (que empiezan con `.`). |
| `ls --all` | Alternativa a `ls -a`. |
| `ls -h` | Muestra los tamaños en formato legible por humanos (KB, MB, GB). |
| `ls -t` | Ordena los archivos por fecha de modificación (los más nuevos primero). |
| `ls -r` | Invierte el orden de la clasificación. `ls -ltr` es muy común para ver los archivos más recientes al final. |
| `ls -R` | Lista el contenido de los directorios de forma recursiva. |
| `ls -d */` | Lista solo los directorios en la ubicación actual. |
| `ls -i` | Muestra el número de inodo de cada archivo. |
| `ls -F` | Agrega un indicador de tipo de archivo (`/` para directorios, `*` para ejecutables, `@` para enlaces simbólicos). |
| `ls -la` | Combina `ls -l` y `ls -a`. |
| `ls -LS` | Ordena por tamaño (mayor a menor). |
| `ls -LH` | Lista con detalles y tamaños legibles (KB, MB…), sin orden específico. |
| `ls -LASH` | Lista incluye archivos ocultos con detalles y tamaños legibles (KB, MB…), Ordena por tamaño (mayor a menor). |
| `ls -LH/usr` | Lista el contenido del directorio /usr con detalles y tamaños legibles. |
| `ls -LSH` | Ordena por tamaño en formato legible (MB, GB). |
| `ls -LSHR` | Ordena por tamaño (mayor a menor), formato legible, y en orden inverso. |
| `ls -lr` | Ordena al revés. |
| `ls /` | Muestra el contenido inmediato del directorio raíz. |
| `tree` | Muestra la estructura de directorios en forma de árbol (puede necesitar instalación). |
| `tree -L [nivel]` | Limita la profundidad del árbol a `[nivel]` niveles. |
| `tree -L 1 /` | Muestra la estructura de directorios en forma de árbol, solo hasta el nivel 1. |
| `tree -L 1 -x /` | Muestra la estructura en árbol de la raíz (nivel 1), sin cruzar a otros sistemas de archivos. |
| `tree -f` | Muestra rutas completas en el árbol. |
| `ls -l ~` | Lista el contenido del directorio de inicio del usuario (`~`) en formato largo. | `ls -l ~` |
| `ls -R Thesis/` | Lista el contenido del directorio `Thesis` y todos sus subdirectorios de forma recursiva. | `ls -R Thesis/` |
| `ls a*` | Lista todos los archivos en el directorio actual cuyos nombres comienzan con la letra 'a'. | `ls a*` |
| `ls *a*` | Lista todos los archivos en el directorio actual cuyos nombres contienen la letra 'a'. | `ls *a*` |
| `ls [ac]*` | Lista todos los archivos en el directorio actual cuyos nombres comienzan con 'a' o 'c'. | `ls [ac]*` |
| `ls ????` | Lista todos los archivos en el directorio actual cuyos nombres tienen exactamente cuatro caracteres. | `ls ????` |
| `ls ?????` | Lista todos los archivos en el directorio actual cuyos nombres tienen exactamente cinco caracteres. | `ls ?????` |
| `ls -il newfile.txt /tmp/newfile-hlink2.txt` | Lista los archivos mostrando su número de inodo (`-i`) y formato largo (`-l`), para verificar si son enlaces duros al mismo archivo. | `ls -il newfile.txt /tmp/newfile-hlink2.txt` |
| `ls -ld Documents` | Muestra la información en formato largo para el directorio `Documents` en sí, no su contenido. | `ls -ld Documents` |
| `ls -l test` | Muestra información detallada sobre permisos | `ls -l test` |
| `ls -ld /home` | Muestra información detallada sobre un directorio | `ls -ld /home` |
| `ls -l mytextfile.txt` | Ver propietario de un archivo | `ls -l mytextfile.txt` |
| `ls -l /home` | Listar directorios home | `ls -l /home` |
| `ls directorio` | Listar contenido directorio | `ls directorio` |

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
| `du -h --max-depth=1 . | sort -h` | Muestra el tamaño de los archivos y directorios del primer nivel, ordenamos para ver las mas grandes al final (`.`). |
| `du -ah carpeta/` | Muestra el tamaño de **todos los archivos (`a`)** y directorios, no solo los directorios. |
| `du -csh carpeta1/ carpeta2/` | Muestra el total de varias carpetas y un **gran total (`c`)** al final. |
| `df -Th` | Uso espacio con tipo sistema archivos |

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
| `uname -r` | Mostrar versión kernel ejecución |
| `lscpu` | Muestra información sobre la arquitectura de la CPU. |
| `lsblk` | **L**i**s**t **Bl**oc**k** Devices. Lista los dispositivos de bloque (discos, particiones). |
| `lsblk -fp` | Lista los dispositivos de bloque mostrando la ruta completa del dispositivo (`-p`) y la información del sistema de archivos (`-f`). |
| `lspci` | Lista todos los dispositivos PCI. |
| `lsusb` | Lista todos los dispositivos USB. |
| `hostname` | Muestra o establece el nombre de host del sistema. |
| `hostnamectl` | Controla el nombre de host del sistema (método moderno con systemd). |
| `date` | Muestra o establece la fecha y hora del sistema. |
| `uptime` | Muestra cuánto tiempo ha estado funcionando el sistema, los usuarios conectados y el promedio de carga. |
| `whoami` | Muestra el nombre del usuario con el que has iniciado sesión. |
| `date +%x` | Muestra la fecha en formato local (ej. `05/20/2025`). |
| `date +%F` | Muestra la fecha en formato ISO (`AÑO-MES-DÍA`). |
| `date +%r` | Muestra la hora en formato 12h con AM/PM y segundos (ej. 03:45:10 PM). |
| `date +%R` | Muestra la hora en formato 24h, solo hora y minuto (ej. 15:45). |

### 1.6. Limpieza y Ayuda

| Comando | Descripción |
| :--- | :--- |
| `clear` | Limpia la pantalla de la terminal |
| `Flecha ↑` | Recupera comandos ingresados previamente |

### 1.7. Productividad y Sintaxis Avanzada en la Shell

#### 1.7.1. Autocompletado con Tabulador (Tab Completion)

| Acción | Resultado |
| :--- | :--- |
| `pas<Tab>` | Si es único, se autocompleta a `passwd`. |
| `pas<Tab><Tab>` | Si no es único, muestra todas las opciones que empiezan con "pas" (ej. `passwd`, `paste`). |
| `ls /etc/pass<Tab>` | Autocompleta nombres de archivo o directorios en una ruta. |
| `useradd --<Tab><Tab>` | **(Avanzado)** Muestra todas las opciones disponibles para un comando. |

#### 1.7.2. Historial de Comandos

| Comando/Atajo | Descripción | Ejemplo |
| :--- | :--- | :--- |
| `history` | Muestra la lista de comandos ejecutados. | `history` |
| `!numero` | Ejecuta el comando con ese número del historial. | `!26` |
| `!string` | Ejecuta el último comando que empezó con `string`. | `!ls` |
| `!!` | **Ejecuta el último comando ejecutado.** | `sudo !!` |
| `^old^new` | **Sustituye 'old' por 'new' en el último comando y lo ejecuta.** | `^/usr^/tmp` |
| `Ctrl + R` | **Búsqueda inversa:** Empieza a escribir y te mostrará comandos del historial que coincidan. | |
| `Alt` + `.` (o `Esc` + `.`) | Inserta el **último argumento del comando anterior** en la posición del cursor. | |

#### 1.7.3. Edición Rápida de la Línea de Comandos

| Atajo | Acción |
| :--- | :--- |
| `Ctrl + A` | Mover el cursor al **inicio** de la línea. |
| `Ctrl + E` | Mover el cursor al **final** de la línea. |
| `Ctrl + U` | **Borrar** desde el cursor hasta el **inicio** de la línea. |
| `Ctrl + K` | **Borrar** desde el cursor hasta el **final** de la línea. |
| `Ctrl + ←/→` | Moverse palabra por palabra. |

#### 1.7.4. Encadenamiento de Comandos y Operadores de Control

| Operador | Nombre | Descripción | Ejemplo |
| :--- | :--- | :--- | :--- |
| `;` | Separador | Ejecuta los comandos en secuencia, sin importar el resultado del anterior. | `sudo apt update ; sudo apt upgrade -y` |
| `&&` | Y Lógico | Ejecuta el segundo comando **solo si el primero tiene éxito**. | `mkdir backup && cp *.txt backup/` |
| `||` | O Lógico | Ejecuta el segundo comando **solo si el primero falla**. | `git pull || echo "Error al actualizar"` |
| `\|` | Pipe (Tubería) | La salida del primer comando se convierte en la entrada del segundo. | `ls -l \| grep ".txt"` |
| `\` | Continuación de línea | Permite escribir un comando largo en varias líneas. | `head -n 3 \`<br>`/etc/passwd` |

### 1.8. Expansiones de Shell

#### 1.8.1. Expansión de Nombres de Archivo (Globbing)

##### 1.8.1.1. Metacaracteres Básicos
| Patrón | Coincide con | Ejemplo |
| :--- | :--- | :--- |
| `*` | Cualquier cadena de cero o más caracteres | `ls *.txt` |
| `?` | Cualquier carácter individual | `ls foto?.jpg` |
| `[abc]` | Cualquier carácter listado en los corchetes | `ls archivo[123].txt` |
| `[!abc]` | Cualquier carácter que NO esté en la clase incluida | `ls archivo[!0-9].txt` |
| `[^abc]` | Cualquier carácter que NO esté en la clase incluida | `ls archivo[^0-9].txt` |

##### 1.8.1.2. Clases de Caracteres Predefinidas
| Patrón | Coincide con | Ejemplo |
| :--- | :--- | :--- |
| `[[:alpha:]]` | Cualquier carácter alfabético | `ls *[[:alpha:]].conf` |
| `[[:lower:]]` | Cualquier carácter en minúsculas | `ls [[:lower:]]*.txt` |
| `[[:upper:]]` | Cualquier carácter en mayúsculas | `ls [[:upper:]]*.log` |
| `[[:alnum:]]` | Cualquier dígito o carácter alfabético | `ls *[[:alnum:]].dat` |
| `[[:punct:]]` | Cualquier carácter imprimible que no sea espacio o alfanumérico | `ls *[[:punct:]]*` |
| `[[:digit:]]` | Cualquier dígito de 0 a 9 | `ls log[[:digit:]].txt` |
| `[[:space:]]` | Cualquier carácter de espacio en blanco | `ls *[[:space:]]*` |

##### 1.8.1.3. Patrones Prácticos de Coincidencia
| Nº | Comando / Patrón | Función |
| :--- | :--- | :--- |
| 1 | `*b` | Coincide con archivos que **terminan en "b"** |
| 2 | `b*` | Coincide con archivos que **comienzan con "b"** |
| 3 | `[!b]*` | Coincide con archivos cuyo **primer carácter NO es "b"** |
| 4 | `*b*` | Coincide con archivos que **contienen "b"** en cualquier posición |
| 5 | `*[[:digit:]]*` | Coincide con archivos que **contienen al menos un número** |
| 6 | `[[:upper:]]*` | Coincide con archivos que **comienzan con una letra mayúscula** |
| 7 | `???*` | Coincide con archivos de **al menos tres caracteres de longitud** |
| 8 | `????` | Coincide con archivos de **exactamente cuatro caracteres** |
| 9 | `[ac]*` | Coincide con archivos que **comienzan con "a" o "c"** |

#### 1.8.2. Expansión de Llaves
| Comando | Resultado | Uso |
| :--- | :--- | :--- |
| `echo file{1..5}.txt` | `file1.txt file2.txt file3.txt file4.txt file5.txt` | Generar secuencias |
| `echo {a,b,c}.log` | `a.log b.log c.log` | Múltiples opciones |
| `mkdir {2023,2024,2025}` | Crea directorios para esos años | Organización temporal |
| `echo file{a{1,2},b}.txt` | `filea1.txt filea2.txt fileb.txt` | Expansiones anidadas |
| `touch file{1..2}_{a..c}.txt` | `file1_a.txt file1_b.txt file1_c.txt file2_a.txt file2_b.txt file2_c.txt` | **Expansión anidada múltiple** |
| `touch tv_season{1..2}_episode{1..6}.ogg` | Crea 12 archivos: `tv_season1_episode1.ogg` hasta `tv_season2_episode6.ogg` | **Generación masiva de archivos con patrón** |
| `mkdir season{1..2}` | `season1 season2` | Crear directorios numerados |
| `mkdir {editor,changes,vacation}` | Crea tres directorios con nombres específicos | **Lista de cadenas** vs rangos |

#### 1.8.3. Expansión de Variables
| Comando | Descripción | Ejemplo |
| :--- | :--- | :--- |
| `echo $USER` | Muestra variable del usuario | Muestra nombre del usuario actual |
| `echo ${USER}` | Forma explícita de variable | Evita ambigüedades |
| `NOMBRE=Juan; echo $NOMBRE` | Define y usa variable | Define variable local |

#### 1.8.4. Sustitución de Comandos
| Sintaxis | Descripción | Ejemplo |
| :--- | :--- | :--- |
| `$(comando)` | Ejecuta comando y usa su salida | `echo "Hoy es $(date +%A)"` |
| `echo "Son las $(date +%H) horas"` | Combina texto con salida de comando | Personalización de mensajes |

#### 1.8.5. Prevenir Expansiones (Escape)
| Método | Descripción | Ejemplo |
| :--- | :--- | :--- |
| `\$` | Escapa un carácter específico | `echo "El precio es \$100"` |
| `'texto'` | Comillas simples - NO expansión | `echo 'El usuario es $USER'` |
| `"texto"` | Comillas dobles - permite variables | `echo "El usuario es $USER"` |

---

## 2. 🗄️ Gestión de Archivos y Directorios

### 2.1. Creación

| Comando | Descripción | Ejemplo |
| :--- | :--- | :--- |
| `touch [archivo]` | Crea un archivo vacío si no existe, o actualiza su fecha de modificación si ya existe. | `touch mi_archivo.txt` |
| `touch a b c` | Crea múltiples archivos. | `touch file{1..3}.txt` |
| `mkdir [directorio]` | **M**a**k**e **Dir**ectory. Crea un nuevo directorio. | `mkdir mi_directorio` |
| `mkdir -p [ruta]` | Crea un directorio, incluyendo todos los directorios padres necesarios en la ruta. | `mkdir -p proyectos/año/mes` |
| `mkdir -pv ruta/completa/nueva` | Igual que -p pero muestra cada directorio creado | `mkdir -pv ruta/completa/nueva` |
| `ni carpeta` | Crea una carpeta (PowerShell). | `ni carpeta` |
| `mkdir ProjectX ProjectY ProjectZ` | Crea tres directorios llamados `ProjectX`, `ProjectY`, y `ProjectZ` en el directorio actual. | `mkdir ProjectX ProjectY ProjectZ` |
| `mkdir -p Thesis/Chapter1` | Crea el directorio `Chapter1` dentro de `Thesis`, creando también el directorio padre `Thesis` si no existe. | `mkdir -p Thesis/Chapter1` |
| `mkdir Music Pictures Videos` | Crea tres directorios en el directorio actual. | `mkdir Music Pictures Videos` |
| `mkdir /home/consultants` | Crear directorio consultants | `mkdir /home/consultants` |
| `mkdir /tmp/shared` | Crear directorio shared | `mkdir /tmp/shared` |
| `mkdir /home/techdocs` | Crear directorio techdocs | `mkdir /home/techdocs` |
| `touch Videos/blockbuster1.ogg` | Crea un archivo vacío llamado `blockbuster1.ogg` en el directorio `Videos`, o actualiza su marca de tiempo si ya existe. | `touch Videos/blockbuster1.ogg` |
| `touch song{1..6}.mp3` | Utiliza la expansión de llaves para crear seis archivos vacíos, desde `song1.mp3` hasta `song6.mp3`. | `touch song{1..6}.mp3` |
| `touch consultant1.txt` | Crear archivo consultant1.txt | `touch consultant1.txt` |
| `touch /tmp/shared/defaults` | Crear archivo en directorio específico | `touch /tmp/shared/defaults` |
| `touch /tmp/shared/group` | Crear archivo group | `touch /tmp/shared/group` |
| `touch /tmp/shared/ops_db.txt` | Crear archivo ops_db.txt | `touch /tmp/shared/ops_db.txt` |
| `touch /tmp/shared/ops_net.txt` | Crear archivo ops_net.txt | `touch /tmp/shared/ops_net.txt` |
| `touch /tmp/shared/ops_prod.txt` | Crear archivo ops_prod.txt | `touch /tmp/shared/ops_prod.txt` |
| `touch /tmp/shared/ops_prod2.txt` | Crear archivo ops_prod2.txt | `touch /tmp/shared/ops_prod2.txt` |
| `touch default.txt` | Crear archivo con máscara defecto | `touch default.txt` |
| `touch zero.txt` | Crear archivo con máscara 0 | `touch zero.txt` |
| `touch seven.txt` | Crear archivo con máscara 007 | `touch seven.txt` |
| `touch two-seven.txt` | Crear archivo con máscara 027 | `touch two-seven.txt` |
| `touch /home/techdocs/techdoc1.txt` | Crear archivo techdoc1.txt | `touch /home/techdocs/techdoc1.txt` |
| `touch /home/techdocs/techdoc2.txt` | Crear archivo techdoc2.txt | `touch /home/techdocs/techdoc2.txt` |

### 2.2. Copia

| Comando | Descripción | Ejemplo |
| :--- | :--- | :--- |
| `cp [origen] [destino]` | **C**o**p**y. Copia archivos o directorios. | `cp archivo.txt copia.txt` |
| `cp [archivo] [dir]/` | Copia un archivo a un directorio. | `cp reporte.pdf ~/Documentos/` |
| `cp -r [dir1] [dir2]` | Copia un directorio y todo su contenido de forma **r**ecursiva. | `cp -r /var/log /tmp/backup_logs` |
| `cp -v` | **V**erbose. Muestra lo que se está haciendo. | `cp -v *.txt backups/` |
| `cp -p` | **P**reserve. Conserva los atributos del archivo (modo, propietario, fechas). | `cp -p archivo_original nuevo_archivo` |
| `cp -a` | **A**rchive. Equivale a `-pPR`, preserva todo y copia recursivamente. Ideal para backups. | `cp -a /origen /destino` |
| `cp blockbuster1.ogg blockbuster3.ogg` | Copia el archivo `blockbuster1.ogg` a un nuevo archivo llamado `blockbuster3.ogg` en el mismo directorio. | `cp blockbuster1.ogg blockbuster3.ogg` |
| `cp thesis_chapter1.txt thesis_chapter2.txt ProjectX` | Copia los archivos `thesis_chapter1.txt` y `thesis_chapter2.txt` al directorio `ProjectX`. | `cp thesis_chapter1.txt thesis_chapter2.txt ProjectX` |
| `cp -r ../Thesis/ .` | Copia el directorio `Thesis` del directorio padre y todo su contenido al directorio actual (`.`). | `cp -r ../Thesis/ .` |
| `cp chapters/mystery_chapter[56].odf changes` | Copia los archivos `mystery_chapter5.odf` y `mystery_chapter6.odf` al directorio `changes`. | `cp chapters/mystery_chapter[56].odf changes` |
| `cp mystery_chapter5.odf mystery_chapter5_$(date +%F).odf` | Copia un archivo, agregando la fecha actual (formato YYYY-MM-DD) al nuevo nombre de archivo mediante sustitución de comandos. | `cp mystery_chapter5.odf mystery_chapter5_$(date +%F).odf` |
| `cp /etc/motd /etc/motdOLD` | Copiar archivo motd | `cp /etc/motd /etc/motdOLD` |
| `sudo cp /etc/motd /etc/motdOLD` | Copiar archivo como root | `sudo cp /etc/motd /etc/motdOLD` |

### 2.3. Movimiento y Renombrado

| Comando | Descripción | Ejemplo |
| :--- | :--- | :--- |
| `mv [origen] [destino]` | **M**o**v**e. Mueve o renombra archivos y directorios. | `mv reporte.txt report_final.txt` |
| `mv [archivo] [dir]/` | Mueve un archivo a un directorio. | `mv imagen.jpg ~/Imágenes/` |
| `mv -v` | **V**erbose. Muestra lo que se está haciendo. | `mv -v *.log logs_archivados/` |
| `mv -i` | **I**nteractive. Pide confirmación antes de sobrescribir. | `mv -i archivo.conf /etc/` |
| `mv -n` | **N**o-clobber. No sobrescribe un archivo existente en el destino. | `mv -n * /destino_comun/` |
| `mv -f [origen] [destino]` | Mover archivo forzar sobreescritura | `mv -f file1 file2` |
| `mv ~/archivos/* .` | **El punto (.) representa el directorio actual como destino** | `mv ~/archivos/* .` |
| `mv thesis_chapter2.txt thesis_chapter2_reviewed.txt` | Renombra (mueve) el archivo `thesis_chapter2.txt` a `thesis_chapter2_reviewed.txt` en el mismo directorio. | `mv thesis_chapter2.txt thesis_chapter2_reviewed.txt` |
| `mv -v thesis_chapter1.txt Thesis/Chapter1` | Mueve el archivo `thesis_chapter1.txt` al directorio `Thesis/Chapter1` y muestra una salida detallada (`-v`) de la operación. | `mv -v thesis_chapter1.txt Thesis/Chapter1` |
| `mv song*.mp3 Music` | Mueve todos los archivos que coinciden con el patrón `song*.mp3` al directorio `Music`. | `mv song*.mp3 Music` |
| `mv tv_season1* Videos/season1` | Mueve todos los archivos que comienzan con `tv_season1` al directorio `Videos/season1`. | `mv tv_season1* Videos/season1` |

### 2.4. Eliminación

| Comando | Descripción | **PRECAUCIÓN** |
| :--- | :--- | :--- |
| `rm [archivo]` | **R**e**m**ove. Elimina archivos. | **¡IRREVERSIBLE!** No hay papelera de reciclaje en la CLI. |
| `rm -f [archivo]` | **F**orce. Fuerza la eliminación sin pedir confirmación. | Usar con extremo cuidado. |
| `rm -r [directorio]` | **R**ecursive. Elimina un directorio y todo su contenido. | **¡MUY PELIGROSO!** Puede borrar grandes cantidades de datos. |
| `rm -rf [directorio]` | Elimina forzada y recursivamente. | **EL COMANDO MÁS PELIGROSO DE LINUX.** Verifica dos veces la ruta. |
| `rm -i` | **I**nteractive. Pide confirmación para cada eliminación. | Recomendado para principiantes o al borrar con comodines. |
| `rmdir [directorio]` | **R**e**m**ove **Dir**ectory. Elimina un directorio, pero **solo si está vacío**. | Es más seguro que `rm -r`. |
| `rm Thesis/Chapter1/thesis_chapter1.txt` | Elimina (borra) el archivo `thesis_chapter1.txt` del directorio `Thesis/Chapter1`. | `rm Thesis/Chapter1/thesis_chapter1.txt` |
| `rm -r Thesis/Chapter1` | Elimina el directorio `Thesis/Chapter1` y todo su contenido de forma recursiva (`-r`). | `rm -r Thesis/Chapter1` |
| `rm -ri Thesis` | Elimina el directorio `Thesis` de forma recursiva (`-r`) y solicita confirmación para cada archivo y directorio (`-i`). | `rm -ri Thesis` |
| `rmdir ProjectZ` | Elimina el directorio `ProjectZ`, pero solo si está vacío. | `rmdir ProjectZ` |
| `rm /etc/motdOLD` | Eliminar archivo motdOLD | `rm /etc/motdOLD` |
| `sudo rm /etc/motdOLD` | Eliminar archivo como root | `sudo rm /etc/motdOLD` |

### 2.5. Enlaces (Links)

Los enlaces son "accesos directos" a otros archivos o directorios.

#### Enlaces Duros (Hard Links)

| Comando | Descripción |
| :--- | :--- |
| `ln [archivo_original] [enlace_duro]` | Crea un enlace duro. Es otro nombre para los mismos datos en el disco. |
| `ls -i` | Muestra el número de inodo. Los enlaces duros comparten el mismo inodo. |
| `ln newfile.txt /tmp/newfile-hlink2.txt` | Crea un enlace duro llamado `newfile-hlink2.txt` en `/tmp` que apunta a los mismos datos que `newfile.txt`. |
| `ln /home/student/files/target.file /home/student/links/file.hardlink` | Crea un enlace duro. |

**Características de los Enlaces Duros:**
- No se pueden crear para directorios.
- Solo funcionan dentro del mismo sistema de archivos.
- El archivo original no se elimina hasta que se borra el último enlace duro que apunta a él.

#### Enlaces Simbólicos (Symbolic Links o Soft Links)

| Comando | Descripción |
| :--- | :--- |
| `ln -s [ruta_original] [enlace_simbólico]` | Crea un enlace simbólico. Apunta a una *ruta*, no a los datos directamente. |
| `ls -l` | Muestra a dónde apunta el enlace simbólico (ej: `enlace -> /ruta/original`). |
| `ln -s /home/user/newfile-link2.txt /tmp/newfile-symlink.txt` | Crea un enlace simbólico (o suave) llamado `newfile-symlink.txt` que apunta a la ruta del archivo `/home/user/newfile-link2.txt`. |
| `ln -s /tmp /home/student/tempdir` | Crea un enlace simbólico a un directorio. |

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
| `wc` | **W**ord **C**ount. Cuenta líneas, palabras y caracteres. | `wc -l archivo.txt` (muy útil para contar solo líneas) |
| `file` | Examina un archivo y muestra su tipo. | `file archivo.txt` |
| `cat /etc/passwd` | Muestra el contenido completo del archivo `/etc/passwd` en la salida estándar. | `cat /etc/passwd` |
| `cat file1 file2` | Concatena y muestra el contenido de `file1` seguido del contenido de `file2`. | `cat file1 file2` |
| `head /etc/passwd` | Muestra las primeras 10 líneas del archivo `/etc/passwd`. | `head /etc/passwd` |
| `tail -n 3 /etc/passwd` | Muestra las últimas 3 líneas del archivo `/etc/passwd`. | `tail -n 3 /etc/passwd` |
| `wc /etc/passwd` | Cuenta las líneas, palabras y caracteres en el archivo `/etc/passwd`. | `wc /etc/passwd` |
| `wc -l /etc/passwd` | Cuenta únicamente el número de líneas en el archivo `/etc/passwd`. | `wc -l /etc/passwd` |
| `wc -c /etc/group /etc/hosts` | Cuenta el número de caracteres en los archivos especificados y muestra un total. | `wc -c /etc/group /etc/hosts` |
| `file zcat` | Determina el tipo de archivo del script `zcat`. | `file zcat` |
| `wc zcat` | Cuenta las líneas, palabras y bytes del script `zcat`. | `wc zcat` |
| `head zcat` | Muestra las primeras 10 líneas del script `zcat`. | `head zcat` |
| `tail zcat` | Muestra las últimas 10 líneas del script `zcat`. | `tail zcat` |
| `tail -n 20 zcat` | Muestra las últimas 20 líneas del script `zcat`. | `tail -n 20 zcat` |
| `cat /etc/group` | Ver archivo de grupos | `cat /etc/group` |
| `cat /etc/shadow` | Ver archivo de contraseñas | `cat /etc/shadow` |
| `cat /etc/sudoers.d/operator1` | Ver configuración sudoers | `cat /etc/sudoers.d/operator1` |
| `cat /etc/sudoers.d/admin` | Ver configuración admin | `cat /etc/sudoers.d/admin` |
| `cat ~/.bashrc` | Mostrar contenido bashrc | `cat ~/.bashrc` |
| `cat /etc/login.defs` | Mostrar login.defs | `cat /etc/login.defs` |
| `cat techdoc1.txt` | Mostrar contenido archivo | `cat techdoc1.txt` |
| `cat /home/techdocs/techdoc1.txt` | Mostrar con ruta completa | `cat /home/techdocs/techdoc1.txt` |
| `cat /etc/profile.d/local-umask.sh` | Mostrar script umask | `cat /etc/profile.d/local-umask.sh` |
| `cat archivo` | Mostrar contenido de archivo | `cat archivo` |
| `tail /etc/passwd` | Ver final archivo usuarios | `tail /etc/passwd` |
| `tail /etc/group` | Ver final archivo grupos | `tail /etc/group` |
| `tail /etc/shadow` | Ver final archivo shadow | `tail /etc/shadow` |
| `tail /var/log/secure` | Ver final log secure | `tail /var/log/secure` |
| `tail -5 /var/log/messages` | Ver últimas 5 líneas log | `tail -5 /var/log/messages` |
| `sudo tail -5 /var/log/messages` | Ver log como root | `sudo tail -5 /var/log/messages` |
| `sudo tail /var/log/secure` | Ver log secure como root | `sudo tail /var/log/secure` |
| `tail -f archivo` | Seguir archivo en tiempo real | `tail -f archivo` |

### 3.2. Edición de Archivos de Texto

| Editor | Descripción | Nivel |
| :--- | :--- | :--- |
| `nano` | Editor de texto simple y muy intuitivo. Los comandos se muestran en la parte inferior. | Principiante |
| `vim` / `vi` | Editor de texto modal muy potente y eficiente. Requiere aprendizaje. | Intermedio/Avanzado |
| `emacs` | Un editor de texto extensible, personalizable y autodocumentado. | Avanzado |
| `gedit` | Editor de texto gráfico de GNOME. | Principiante |
| `vimtutor` | Inicia el tutorial interactivo para aprender a usar `vim`. | `vimtutor` |
| `vim /etc/login.defs` | Editar configuración login | `vim /etc/login.defs` |
| `vim /etc/sudoers.d/consultants` | Editar sudoers consultants | `vim /etc/sudoers.d/consultants` |
| `visudo` | Editar sudoers de forma segura | `visudo` |

### 3.3. Redirección de Entrada/Salida (I/O)

Controla de dónde vienen los datos (entrada) y a dónde van (salida).

| Operador | Nombre | Descripción | Ejemplo |
| :--- | :--- | :--- | :--- |
| `>` | Redirección de Salida | Envía la salida estándar (stdout) a un archivo, **sobrescribiéndolo**. | `ls -l > lista_archivos.txt` |
| `>>` | Anexar Salida | Envía la salida estándar (stdout) a un archivo, **agregándola al final**. | `echo "Nuevo log" >> sistema.log` |
| `<` | Redirección de Entrada | Toma la entrada estándar (stdin) de un archivo en lugar del teclado. | `sort < lista_desordenada.txt` |
| `2>` | Redirección de Error | Envía la salida de error estándar (stderr) a un archivo, **sobrescribiéndolo**. | `find / -name "*.conf" 2> errores.txt` |
| `2>>` | Anexar Error | Envía la salida de error estándar (stderr) a un archivo, **agregándola al final**. | `comando_erroneo 2>> log_de_errores.txt` |
| `&>` o `>&` | Redirigir stdout y stderr | Envía tanto la salida estándar como el error estándar al mismo archivo. | `comando &> salida_completa.txt` |
| `/dev/null` | El Agujero Negro | Un archivo especial que descarta todo lo que se le escribe. | `comando_ruidoso 2> /dev/null` |
| `date > /tmp/saved-timestamp` | Redirige la salida estándar del comando `date` para sobrescribir el archivo `/tmp/saved-timestamp`. | `date > /tmp/saved-timestamp` |
| `echo "new line" >> /tmp/many-lines-of-information` | Redirige la salida de `echo` para agregarla (anexarla) al final del archivo especificado. | `echo "new line" >> /tmp/many-lines-of-information` |
| `find /etc -name passwd 2> /tmp/errors` | Redirige solo el error estándar (canal 2) del comando `find` al archivo `/tmp/errors`. | `find /etc -name passwd 2> /tmp/errors` |
| `find /etc -name passwd &> /tmp/all-message-output` | Redirige tanto la salida estándar como el error estándar al mismo archivo, sobrescribiéndolo. | `find /etc -name passwd &> /tmp/all-message-output` |
| `ls -al > $lab_file` | Lista todos los archivos en formato largo y redirige la salida para sobrescribir el archivo cuyo nombre está en la variable `$lab_file`. | `ls -al > $lab_file` |
| `echo "------------" >> $lab_file` | Agrega una línea de guiones al final del archivo cuyo nombre está en la variable `$lab_file`. | `echo "------------" >> $lab_file` |
| `echo "texto" >> archivo` | Agregar texto a archivo | `echo "texto" >> archivo` |
| `echo "%admin ALL=(ALL) ALL" >> /etc/sudoers.d/admin` | Agregar regla sudoers | `echo "%admin ALL=(ALL) ALL" >> /etc/sudoers.d/admin` |
| `echo "This is the first tech doc." > /home/techdocs/techdoc1.txt` | Escribir texto archivo | `echo "This is the first tech doc." > /home/techdocs/techdoc1.txt` |
| `echo "umask 007" >> ~/.bashrc` | Agregar umask bashrc | `echo "umask 007" >> ~/.bashrc` |
| `echo "texto" >> archivo` | Añadir línea archivo | `echo "texto" >> archivo` |

### 3.4. Tuberías (Pipes)

Las tuberías (`|`) son una de las herramientas más potentes de la línea de comandos. Conectan la salida estándar de un comando con la entrada estándar del siguiente.

| Comando | Descripción |
| :--- | :--- |
| `ls -l /etc | less` | Muestra el listado largo de `/etc` usando el paginador `less`. |
| `history | grep "ssh"` | Busca la palabra "ssh" en el historial de comandos. |
| `ps aux | grep "httpd"` | Muestra todos los procesos y filtra solo los que contienen "httpd". |
| `cat archivo.log | sort | uniq -c` | Muestra el contenido, lo ordena, y luego cuenta las líneas únicas adyacentes. |
| `ls | wc -l` | Conecta la salida de `ls` a `wc -l` para contar el número de archivos en el directorio actual. |
| `ls -l | tee /tmp/saved-output | less` | Usa `tee` para enviar la salida de `ls -l` tanto al archivo `/tmp/saved-output` como al comando `less`. |
| `find / -name passwd 2>&1 | less` | Redirige el error estándar al mismo destino que la salida estándar, y luego canaliza ambos a `less`. |
| `ls Documents/ | tee -a $lab_file` | Lista el contenido de `Documents`, lo muestra en la terminal y lo agrega al final del archivo en `$lab_file`. |
| `chage -l cloudadmin10 | grep "Account expires"` | Ver fecha específica de expiración |
| `grep "model name" /proc/cpuinfo | wc -l` | Contar CPUs lógicas |

### 3.5. Comandos de Procesamiento de Texto

| Comando | Descripción | Ejemplo |
| :--- | :--- | :--- |
| `grep [patrón] [archivo]` | **G**lobal **R**egular **E**xpression **P**rint. Busca líneas que coincidan con un patrón. | `grep -i "error" /var/log/messages` |
| `sort` | Ordena las líneas de un archivo de texto. | `sort -n datos.txt` (ordena numéricamente). |
| `uniq` | Reporta o filtra líneas repetidas adyacentes. | `uniq -c` (cuenta las ocurrencias). |
| `cut` | Elimina secciones de cada línea de archivos. | `cut -d':' -f1 /etc/passwd` (corta por `:` y toma el campo 1). |
| `tr` | **Tr**anslate. Traduce o elimina caracteres. | `cat archivo.txt | tr 'a-z' 'A-Z'` (convierte a mayúsculas). |
| `sed` | **S**tream **Ed**itor. Editor de flujo para filtrar y transformar texto. | `sed 's/viejo/nuevo/g' archivo.txt` (sustituye texto). |
| `awk` | Lenguaje de programación para procesar y analizar texto. | `awk '{print $1, $3}' archivo.txt` (imprime columnas). |
| `diff` | Compara archivos línea por línea. | `diff archivo1.conf archivo2.conf` |
| `tee` | Lee de la entrada estándar y escribe a la salida estándar y a archivos. | `ls -l | tee listado.txt` (muestra en pantalla y guarda en archivo). |
| `awk '{print $9 " " $10 " " $11}'` | Procesar texto imprimir columnas específicas | `ls -l | awk '{print $9 " " $10 " " $11}'` |

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
| `find / -name sshd_config` | Busca en todo el sistema de archivos (`/`) un archivo con el nombre exacto `sshd_config`. | `find / -name sshd_config` |
| `find / -name '*.txt'` | Busca archivos cuyos nombres terminen en `.txt`. Las comillas son importantes para evitar la expansión del shell. | `find / -name '*.txt'` |
| `find / -iname '*messages*'` | Realiza una búsqueda de archivos por nombre que no distingue entre mayúsculas y minúsculas (`-iname`). | `find / -iname '*messages*'` |
| `find -user developer` | Busca archivos en el directorio actual y subdirectorios que son propiedad del usuario `developer`. | `find -user developer` |
| `find /home -perm 764` | Busca archivos en `/home` que tengan exactamente los permisos `764`. | `find /home -perm 764` |
| `find /home -perm -324` | Busca archivos en `/home` que tengan *al menos* los permisos especificados (propietario: wx, grupo: w, otros: r). | `find /home -perm -324` |
| `find -size +10G` | Busca archivos de más de 10 Gigabytes. | `find -size +10G` |
| `find / -mmin 120` | Busca archivos en todo el sistema que fueron modificados hace exactamente 120 minutos. | `find / -mmin 120` |
| `find /etc -type d` | Busca solo directorios (`-type d`) dentro de `/etc`. | `find /etc -type d` |
| `find / -nouser -o -nogroup` | Encontrar archivos sin dueño | `find / -nouser -o -nogroup` |
| `find [ruta] -iname [nombre]` | Buscar archivos sin distinguir mayúsculas | `find /home -iname "*.TXT"` |
| `find [ruta] -group [grupo]` | Buscar archivos pertenecen grupo | `find /home -group users` |
| `find [ruta] -uid [id_usuario]` | Buscar archivos por UID | `find /home -uid 1000` |
| `find [ruta] -gid [id_grupo]` | Buscar archivos por GID | `find /home -gid 100` |
| `find [ruta] -perm [permisos] -ls` | Buscar permisos con salida detallada | `find /home -perm 644 -ls` |
| `find [ruta] -size [tamaño]` | Buscar archivos por tamaño | `find /home -size +100M` |
| `find [ruta] -mmin [minutos]` | Buscar archivos modificados tiempo específico | `find /home -mmin -60` |
| `find [ruta] -type [tipo]` | Buscar por tipo archivo | `find /home -type f` |
| `find [ruta] -links [+n]` | Buscar archivos con más n enlaces | `find /home -links +1` |

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
| `chmod go-rw document.pdf` | Cambiar permisos método simbólico |
| `chmod a+x myscript.sh` | Agregar permiso de ejecución para todos |
| `chmod -R g+rwx /home/user/myfolder` | Establecer permisos recursivamente |
| `chmod -R g+rwX demodir` | Establecer permisos con X especial |
| `chmod g+w /home/consultants` | Agregar permiso escritura al grupo |
| `chmod +x archivo` | Otorgar permisos de ejecución |

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
| `chmod 750 sampledir` | Establecer permisos octal directorio |
| `chmod 770 /home/consultants` | Establecer permisos 770 |

### 5.3. Cambio de Propietario (`chown` y `chgrp`)

| Comando | Descripción | Requiere `sudo` |
| :--- | :--- | :--- |
| `chown [usuario] [archivo]` | **Ch**ange **Own**er. Cambia el usuario propietario de un archivo. | Sí |
| `chown [usuario]:[grupo] [archivo]` | Cambia tanto el usuario como el grupo propietario a la vez. | Sí |
| `chgrp [grupo] [archivo]` | **Ch**ange **Gr**ou**p**. Cambia solo el grupo propietario. | Sí (a menos que seas el propietario y miembro del nuevo grupo). |
| `chown -R [usuario] [directorio]` | Cambia la propiedad de un directorio y todo su contenido de forma **R**ecursiva. | Sí |
| `chown student app.conf` | Cambiar propietario del archivo |
| `chown -R student Pictures` | Cambiar propietario recursivamente |
| `chown :admins Pictures` | Cambiar propietario del grupo |
| `chown visitor:guests Pictures` | Cambiar propietario y grupo |
| `chown :consultants /home/consultants` | Cambiar solo grupo propietario |
| `chgrp consultant1 file` | Cambiar propietario del grupo |

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
| `chmod g+s example` | Agregar bit setgid |
| `chmod u-s example` | Quitar bit setuid |
| `chmod 2770 example` | Establecer setgid y permisos octal |
| `chmod 00770 example` | Quitar permisos especiales octal |
| `chmod o+t [directorio]` | Establecer sticky bit directorio |

### 5.5. Máscara de Permisos por Defecto (`umask`)

El comando `umask` establece los permisos por defecto para los nuevos archivos y directorios. La máscara se "resta" de los permisos base (`666` para archivos, `777` para directorios).

| Comando | Descripción |
| :--- | :--- |
| `umask` | Muestra la máscara actual en formato octal. |
| `umask -S` | Muestra la máscara en formato simbólico (los permisos que se *permiten*). |
| `umask 022` | Una máscara común. Archivos: `644`, Directorios: `755`. |
| `umask 077` | Una máscara muy restrictiva. Archivos: `600`, Directorios: `700`. |
| `umask 0` | Establecer máscara en 0 |
| `umask 007` | Establecer máscara en 007 |
| `umask 027` | Establecer máscara en 027 |

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
| `id -gn` | Muestra el nombre del grupo principal |
| `id -un` | Muestra el nombre del usuario actual |

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
| `useradd operator1` | Crear usuario operator1 | `useradd operator1` |
| `useradd operator2` | Crear usuario operator2 | `useradd operator2` |
| `useradd operator3` | Crear usuario operator3 | `useradd operator3` |
| `useradd user01` | Crear usuario user01 | `useradd user01` |
| `useradd user02` | Crear usuario user02 | `useradd user02` |
| `useradd user03` | Crear usuario user03 | `useradd user03` |
| `useradd -u 1000 user02` | Crear usuario con UID específico | `useradd -u 1000 user02` |
| `useradd -G consultants consultant1` | Crear usuario con grupo complementario | `useradd -G consultants consultant1` |
| `useradd -G consultants consultant2` | Crear usuario consultant2 con grupo | `useradd -G consultants consultant2` |
| `useradd -G consultants consultant3` | Crear usuario consultant3 con grupo | `useradd -G consultants consultant3` |
| `useradd --help` | Ver ayuda de useradd | `useradd --help` |

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
| `usermod -c "Operator One" operator1` | Modificar comentario de usuario | `usermod -c "Operator One" operator1` |
| `usermod -c "Operator Two" operator2` | Modificar comentario de operator2 | `usermod -c "Operator Two" operator2` |
| `usermod -g group01 user02` | Cambiar grupo principal | `usermod -g group01 user02` |
| `usermod -aG group01 user03` | Agregar grupos complementarios | `usermod -aG group01 user03` |
| `usermod -aG operators operator1` | Agregar operator1 a grupo operators | `usermod -aG operators operator1` |
| `usermod -aG operators operator2` | Agregar operator2 a grupo operators | `usermod -aG operators operator2` |
| `usermod -aG operators operator3` | Agregar operator3 a grupo operators | `usermod -aG operators operator3` |
| `usermod -aG admin sysadmin1` | Agregar sysadmin1 a grupo admin | `usermod -aG admin sysadmin1` |
| `usermod -aG admin sysadmin2` | Agregar sysadmin2 a grupo admin | `usermod -aG admin sysadmin2` |
| `usermod -aG admin sysadmin3` | Agregar sysadmin3 a grupo admin | `usermod -aG admin sysadmin3` |
| `usermod -L user02` | Bloquear cuenta de usuario | `usermod -L user02` |
| `usermod -L operator1` | Bloquear cuenta operator1 | `usermod -L operator1` |
| `usermod -L sysadmin03` | Bloquear cuenta sysadmin03 | `usermod -L sysadmin03` |
| `usermod -L -e 2022-08-14 cloudadmin10` | Bloquear y establecer expiración | `usermod -L -e 2022-08-14 cloudadmin10` |
| `usermod -U operator1` | Desbloquear cuenta de usuario | `usermod -U operator1` |
| `usermod -s /sbin/nologin newapp` | Cambiar shell de usuario | `usermod -s /sbin/nologin newapp` |
| `usermod -m -d /new/home/path username` | Mover directorio home | `usermod -m -d /new/home/path username` |
| `usermod --help` | Ver ayuda de usermod | `usermod --help` |

#### `userdel`: Eliminación de Usuarios

| Opción | Descripción | Ejemplo |
| :--- | :--- | :--- |
| `userdel [nombre]` | Elimina un usuario, pero **no borra su directorio home**. | `sudo userdel juan` |
| `-r` | **R**emove. Elimina un usuario **y su directorio home y cola de correo**. | `sudo userdel -r juan` |
| `userdel user01` | Eliminar usuario user01 | `userdel user01` |
| `userdel -r operator3` | Eliminar operator3 con directorio | `userdel -r operator3` |

### 6.4. Gestión de Grupos

| Comando | Descripción | Ejemplo |
| :--- | :--- | :--- |
| `groupadd [nombre]` | Crea un nuevo grupo. | `sudo groupadd desarrolladores` |
| `groupadd -g [GID]` | Crea un grupo con un Group ID (GID) específico. | `sudo groupadd -g 1500 desarrolladores` |
| `groupmod -n [nuevo]` | Cambia el **n**ombre de un grupo. | `sudo groupmod -n devs desarrolladores` |
| `groupmod -g [GID]` | Cambia el **G**ID de un grupo. | `sudo groupmod -g 1501 devs` |
| `groupdel [nombre]` | Elimina un grupo. | `sudo groupdel devs` |
| `newgrp [grupo]` | Cambia el grupo primario del usuario en un nuevo shell. | `newgrp docker` |
| `groupadd group01` | Crear grupo básico | `groupadd group01` |
| `groupadd admin` | Crear grupo admin | `groupadd admin` |
| `groupadd -g 10000 group01` | Crear grupo con GID específico | `groupadd -g 10000 group01` |
| `groupadd -g 30000 operators` | Crear grupo operators con GID | `groupadd -g 30000 operators` |
| `groupadd -g 35000 consultants` | Crear grupo consultants con GID | `groupadd -g 35000 consultants` |
| `groupadd -r group02` | Crear grupo de sistema | `groupadd -r group02` |
| `groupmod -n group0022 group02` | Cambiar nombre de grupo | `groupmod -n group0022 group02` |
| `groupmod -g 20000 group0022` | Cambiar GID de grupo | `groupmod -g 20000 group0022` |
| `groupdel group0022` | Eliminar grupo | `groupdel group0022` |

### 6.5. Gestión de Contraseñas y Políticas

| Comando | Descripción | Ejemplo |
| :--- | :--- | :--- |
| `passwd` | Permite al usuario actual cambiar su propia contraseña. | `passwd` |
| `passwd [usuario]` | Permite a `root` cambiar la contraseña de cualquier usuario. | `sudo passwd juan` |
| `passwd -l [usuario]` | Bloquea la cuenta (equivalente a `usermod -L`). | `sudo passwd -l juan` |
| `passwd -u [usuario]` | Desbloquea la cuenta (equivalente a `usermod -U`). | `sudo passwd -u juan` |
| `passwd -d [usuario]` | Elimina la contraseña de un usuario (permite login sin contraseña, **muy inseguro**). | `sudo passwd -d juan` |
| `passwd -S [usuario]` | Muestra el estado de la contraseña de una cuenta. | `sudo passwd -S juan` |
| `passwd user01` | Cambiar contraseña de usuario | `passwd user01` |
| `passwd operator1` | Cambiar contraseña operator1 | `passwd operator1` |
| `passwd operator2` | Cambiar contraseña operator2 | `passwd operator2` |
| `passwd operator3` | Cambiar contraseña operator3 | `passwd operator3` |
| `passwd consultant1` | Cambiar contraseña consultant1 | `passwd consultant1` |
| `passwd consultant2` | Cambiar contraseña consultant2 | `passwd consultant2` |
| `passwd consultant3` | Cambiar contraseña consultant3 | `passwd consultant3` |

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
| `chage -m 0 -M 90 -W 7 -I 14 sysadmin05` | Configurar política de contraseñas | `chage -m 0 -M 90 -W 7 -I 14 sysadmin05` |
| `chage -E $(date -d "+30 days" +%F) cloudadmin10` | Establecer fecha de expiración | `chage -E $(date -d "+30 days" +%F) cloudadmin10` |
| `chage -E 2022-04-09 cloudadmin10` | Establecer expiración específica | `chage -E 2022-04-09 cloudadmin10` |
| `chage -E 2022-06-08 consultant1` | Establecer expiración consultant1 | `chage -E 2022-06-08 consultant1` |
| `chage -E 2022-06-08 consultant2` | Establecer expiración consultant2 | `chage -E 2022-06-08 consultant2` |
| `chage -E 2022-06-08 consultant3` | Establecer expiración consultant3 | `chage -E 2022-06-08 consultant3` |
| `chage -d 0 cloudadmin10` | Forzar cambio de contraseña | `chage -d 0 cloudadmin10` |
| `chage -d 0 operator1` | Forzar cambio operator1 | `chage -d 0 operator1` |
| `chage -d 0 consultant1` | Forzar cambio consultant1 | `chage -d 0 consultant1` |
| `chage -d 0 consultant2` | Forzar cambio consultant2 | `chage -d 0 consultant2` |
| `chage -d 0 consultant3` | Forzar cambio consultant3 | `chage -d 0 consultant3` |
| `chage -M 90 operator1` | Establecer edad máxima de contraseña | `chage -M 90 operator1` |
| `chage -M 15 consultant2` | Establecer edad máxima consultant2 | `chage -M 15 consultant2` |
| `chage -l cloudadmin10` | Ver configuración de expiración | `chage -l cloudadmin10` |
| `chage -l operator1` | Ver configuración operator1 | `chage -l operator1` |

### 6.6. Elevación de Privilegios

| Comando | Descripción |
| :--- | :--- |
| `su [usuario]` | **S**ubstitute **U**ser. Cambia al `[usuario]`. No carga el perfil del nuevo usuario (entorno "sucio"). |
| `su - [usuario]` | Inicia un shell de login como `[usuario]`. Carga el perfil del nuevo usuario (entorno "limpio"). **Recomendado.** |
| `sudo [comando]` | **S**uper**u**ser **Do**. Ejecuta un único comando con privilegios de `root` (o de otro usuario). |
| `sudo -i` o `sudo -s` | Inicia un shell interactivo como `root`. `-i` simula un login completo. |
| `sudo -u [usuario] [cmd]` | Ejecuta un comando como otro usuario, no como `root`. |
| `visudo` | **El único método seguro para editar `/etc/sudoers`**. Realiza una comprobación de sintaxis antes de guardar. |
| `sudo su` | Cambiar a root con sudo |
| `sudo su -` | Cambiar a root con entorno completo |
| `su - operator1` | Cambiar a usuario operator1 |
| `su - sysadmin03` | Cambiar a usuario sysadmin03 |
| `su - newapp` | Cambiar a usuario newapp |
| `su - sysadmin1` | Cambiar a usuario sysadmin1 |
| `su - consultant1` | Cambiar a usuario consultant1 |
| `su - consultant2` | Cambiar a usuario consultant2 |
| `su - tech1` | Cambiar a usuario tech1 |
| `su - tech2` | Cambiar a usuario tech2 |
| `su - database1` | Cambiar a usuario database1 |
| `su - student` | Cambiar a usuario student |
| `sudo cat /etc/sudoers.d/operator1` | Ver archivo sudoers |
| `sudo tail -5 /var/log/messages` | Ver final de log |
| `sudo cp /etc/motd /etc/motdOLD` | Copiar archivo como root |
| `sudo rm /etc/motdOLD` | Eliminar archivo como root |
| `sudo cat /etc/sudoers.d/admin` | Ver configuración admin |

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
| `ps -au` | Ver procesos del usuario actual |
| `ps -a` | Ver todos los procesos con terminal |
| `ps -u` | Ver procesos con información usuario |
| `ps lax` | Listado largo todos los procesos |
| `ps j` | Mostrar información de trabajos |
| `ps -p PID` | Mostrar información proceso específico |
| `pstree -p usuario` | Mostrar árbol procesos con PIDs |
| `pgrep -l -u usuario` | Enumerar PIDs y nombres usuario |

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
| `kill -SIGKILL PID` | Forzar terminación proceso |
| `kill -SIGTERM PID` | Terminación limpia proceso |
| `kill -SIGSTOP %número` | Suspender trabajo |
| `kill -SIGCONT %número` | Reanudar trabajo suspendido |
| `pkill criterio` | Terminar procesos por criterio |
| `pkill -SIGKILL -u usuario` | Terminar procesos usuario |
| `pkill -t tty` | Terminar procesos terminal |
| `pkill -P PPID` | Terminar procesos hijos |
| `pkill -SIGSTOP nombre_proceso` | Suspender procesos por nombre |
| `pkill -SIGCONT nombre_proceso` | Reanudar procesos por nombre |

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
| `ip link show` | Enumerar interfaces de red |
| `ip addr show interfaz` | Mostrar información IP interfaz |
| `ip -br addr` | Lista breve direcciones IP |
| `ip -br addr show interfaz` | Direcciones IP interfaz específica |
| `ip -s link show interfaz` | Estadísticas interfaz |
| `ip -6 route` | Mostrar tabla enrutamiento IPv6 |
| `ping -c<num> destino` | Ping número específico paquetes |
| `ping6 destino` | Prueba conectividad IPv6 |
| `ping6 destino%interfaz` | Ping IPv6 enlace local |
| `ping6 -c <num> destino%interfaz` | Ping IPv6 número específico |
| `tracepath destino` | Rastrear ruta red |
| `tracepath6 destino` | Rastrear ruta IPv6 |
| `traceroute -I` | Traceroute con ICMP |
| `traceroute -T` | Traceroute con TCP |
| `ss -ta` | Mostrar sockets TCP |
| `ss -lt` | Mostrar sockets TCP escucha |

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
| `dnf help` | Mostrar información uso DNF |
| `dnf list [patrón]` | Listar paquetes coinciden patrón |
| `dnf search [palabra-clave]` | Buscar paquetes por palabra clave |
| `dnf search all [palabra-clave]` | Buscar en nombre, resumen y descripción |
| `dnf group list` | Listar grupos paquetes disponibles |
| `dnf group list hidden` | Listar grupos paquetes ocultos |
| `dnf group info "[grupo]"` | Información detallada grupo paquetes |
| `dnf group install "[grupo]"` | Instalar grupo paquetes |
| `dnf history info [ID]` | Detalles transacción específica |
| `dnf repolist all` | Listar todos repositorios configurados |
| `dnf config-manager --enable [repo]` | Habilitar repositorio persistente |
| `dnf config-manager --disable [repo]` | Deshabilitar repositorio persistente |
| `dnf config-manager --add-repo [URL]` | Añadir nuevo repositorio desde URL |
| `dnf module list` | Listar módulos Application Stream |
| `dnf module list [nombre-módulo]` | Listar flujos módulo específico |
| `dnf module info [nombre-módulo]` | Detalles módulo |
| `dnf module info [nombre-módulo]:[flujo]` | Detalles flujo módulo específico |
| `dnf module provides [paquete]` | Módulo que proporciona paquete |

### 9.2. `rpm` (RPM Package Manager)

`rpm` opera directamente sobre archivos `.rpm` y la base de datos local, sin gestionar dependencias.

| Opción | Modo | Descripción | Ejemplo |
| :--- | :--- | :--- | :--- |
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
| `rpm --import [URL/archivo]` | Importar clave pública GPG verificación | `rpm --import key.gpg` |
| `rpm2cpio [archivo.rpm] \| cpio -idv` | Extraer contenido archivo RPM | `rpm2cpio paquete.rpm | cpio -idv` |
| `rpm2cpio [archivo.rpm] \| cpio -tv` | Listar contenido RPM sin extraer | `rpm2cpio paquete.rpm | cpio -tv` |

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
| `systemctl list-units --type=service` | Enumerar servicios activos |
| `systemctl list-units --type=socket --all` | Enumerar todos sockets |
| `systemctl list-units --all` | Enumerar todas unidades |
| `systemctl list-unit-files --type=service` | Mostrar estado archivos servicio |
| `systemctl is-failed unidad` | Verificar si unidad falló |
| `systemctl --failed --type=service` | Enumerar servicios fallidos |
| `systemctl list-dependencies unidad` | Mostrar dependencias unidad |
| `systemctl list-dependencies --reverse unidad` | Mostrar dependencias inversas |
| `systemctl -t help` | Mostrar tipos unidades disponibles |
| `systemctl` | Enumerar unidades cargadas activas |
| `systemctl reload-or-restart unidad` | Recargar o reiniciar unidad |
| `systemctl disable --now unidad` | Deshabilitar y detener unidad |
| `systemctl reboot` | Reiniciar sistema |
| `systemctl reload sshd` | Recargar configuración SSH |
| `systemctl reload sshd.service` | Recargar servicio SSH |

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

### 12.1. Variables y Alias

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
| `HISTTIMEFORMAT="%F %T "` | Establece una variable de shell para que el comando `history` muestre la fecha y hora de cada comando. | `HISTTIMEFORMAT="%F %T "` |
| `PS1="[\u@\h \W]\$ "` | Cambia la variable `PS1` para modificar la apariencia del prompt del shell. | `PS1="[\u@\h \W]\$ "` |
| `export PATH=${PATH}:/home/user/sbin` | Agrega el directorio `/home/user/sbin` a la variable de entorno `PATH`. | `export PATH=${PATH}:/home/user/sbin` |
| `unset file1` | Elimina (desdefine) la variable de shell `file1`. | `unset file1` |
| `export -n PS1` | Elimina el atributo de exportación de una variable, convirtiéndola de una variable de entorno a una variable de shell local. | `export -n PS1` |
| `unalias hello` | Elimina el alias llamado `hello`. | `unalias hello` |

### 12.2. Archivos de Inicio del Shell

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
| `whatis [comando]` | Muestra una descripción de una sola línea de un comando desde su página del manual. |
| `info [comando]` | Muestra la documentación en formato `info`, que a menudo es más detallada y está hipervinculada. |
| `yelp` | Inicia la aplicación de ayuda de GNOME. |
| `yelp help:gnome-help/shell-introduction` | Abre la ayuda de GNOME directamente en la sección de introducción al shell. |

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
| `man -t [topic]` | Formatea una página del manual para impresión en PostScript |
| `mandb` | Genera o actualiza el índice de la base de datos de las páginas del manual |

---

## 14. 🖥️ Entorno Gráfico y Laboratorios

### 14.1. Comandos de Laboratorio

| Comando | Descripción/Uso | Ejemplo |
| :--- | :--- | :--- |
| `lab start [nombre]` | Inicia ejercicio de laboratorio | `lab start help-manual` |
| `lab grade [nombre]` | Califica ejercicio de laboratorio | `lab grade help-review` |
| `lab finish [nombre]` | Finaliza ejercicio de laboratorio | `lab finish help-manual` |
| `lab action exercise` | Sintaxis general para ejecutar un script de ejercicio. `action` puede ser `start`, `grade`, o `finish`. `exercise` es el nombre de la actividad. | `lab start cli-desktop` |
| `lab start [Tab][Tab]` | Utiliza la finalización de tabulaciones para listar todos los ejercicios que se pueden iniciar con el comando `lab`. | `lab start [Tab][Tab]` |

### 14.2. Comandos de Consola Web (Cockpit)

| Comando | Descripción/Uso | Ejemplo |
| :--- | :--- | :--- |
| `systemctl enable --now cockpit.socket` | Habilitar e iniciar socket cockpit | `systemctl enable --now cockpit.socket` |
| `systemctl start cockpit.socket` | Iniciar socket cockpit sesión actual | `systemctl start cockpit.socket` |
| `systemctl status cockpit.socket` | Verificar estado socket cockpit | `systemctl status cockpit.socket` |
| `firewall-cmd --add-service=cockpit --permanent` | Añadir servicio cockpit firewall | `firewall-cmd --add-service=cockpit --permanent` |
| `firewall-cmd --reload` | Recargar configuración firewall | `firewall-cmd --reload` |

### 14.3. Comandos de Diagnóstico y Soporte

| Comando | Descripción/Uso | Ejemplo |
| :--- | :--- | :--- |
| `sos report` | Generar informe diagnóstico sistema | `sos report` |
| `sos report --upload` | Generar sosreport y subir soporte | `sos report --upload` |
| `sos clean [archivo-sosreport]` | Ofuscar información sensible sosreport | `sos clean sosreport.tar.xz` |
| `dnf install sos` | Instalar paquete sos | `dnf install sos` |

### 14.4. Comandos Red Hat Insights

| Comando | Descripción/Uso | Ejemplo |
| :--- | :--- | :--- |
| `insights-client --register` | Registrar cliente Red Hat Insights | `insights-client --register` |
| `insights-client` | Recopilación manual metadatos sistema | `insights-client` |

---

## 15. 🌐 Red y Transferencia de Archivos (Avanzado)

### 15.1. `wget` – El Descargador No Interactivo

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

### 15.2. `curl` – La Navaja Suiza para URLs

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

### 15.3. Comandos de Gestión de Suscripciones (Red Hat)

| Comando | Descripción/Uso | Ejemplo |
| :--- | :--- | :--- |
| `rhc connect -a [clave] -o [ID_org]` | Registrar sistema RHEL 8.8+ con clave activación | `rhc connect -a ABC123 -o ORG456` |
| `rhc connect -u [usuario] -p [contraseña]` | Registrar sistema RHEL 8.8+ con credenciales | `rhc connect -u usuario -p contraseña` |
| `rhc disconnect` | Anular registro sistema gestionado por rhc | `rhc disconnect` |
| `subscription-manager register --username [usuario]` | Registrar sistema en Red Hat Subscription | `subscription-manager register --username usuario` |
| `subscription-manager list --available` | Listar suscripciones disponibles | `subscription-manager list --available` |
| `subscription-manager attach --auto` | Adjuntar automáticamente mejor suscripción | `subscription-manager attach --auto` |
| `subscription-manager attach --pool=[ID_pool]` | Adjuntar suscripción específica por ID pool | `subscription-manager attach --pool=ABC123` |
| `subscription-manager list --consumed` | Mostrar suscripciones utilizadas actualmente | `subscription-manager list --consumed` |
| `subscription-manager unregister` | Anular registro Red Hat Subscription | `subscription-manager unregister` |
| `rct` | Inspeccionar certificados derechos suscripciones | `rct` |

### 15.4. Comandos NetworkManager (nmcli)

| Comando | Descripción/Uso | Ejemplo |
| :--- | :--- | :--- |
| `nmcli dev status` | Estado dispositivos red | `nmcli dev status` |
| `nmcli con show` | Enumerar conexiones configuradas | `nmcli con show` |
| `nmcli con show --active` | Enumerar conexiones activas | `nmcli con show --active` |
| `nmcli con show "nombre-conexión"` | Detalles conexión específica | `nmcli con show "nombre-conexión"` |
| `nmcli dev show interfaz` | Detalles dispositivo específico | `nmcli dev show interfaz` |
| `nmcli con add con-name nombre type ethernet ifname interfaz` | Crear nueva conexión | `nmcli con add con-name nombre type ethernet ifname interfaz` |
| `nmcli con up "nombre-conexión"` | Activar conexión | `nmcli con up "nombre-conexión"` |
| `nmcli con down "nombre-conexión"` | Desactivar conexión | `nmcli con down "nombre-conexión"` |
| `nmcli dev disconnect interfaz` | Desconectar interfaz red | `nmcli dev disconnect interfaz` |
| `nmcli con mod "nombre-conexión" parámetro valor` | Modificar parámetro conexión | `nmcli con mod "nombre-conexión" parámetro valor` |
| `nmcli con mod "nombre-conexión" +parámetro valor` | Añadir valor parámetro múltiple | `nmcli con mod "nombre-conexión" +parámetro valor` |
| `nmcli con reload` | Recargar archivos configuración | `nmcli con reload` |
| `nmcli con reload "nombre-conexión"` | Recargar conexión específica | `nmcli con reload "nombre-conexión"` |
| `nmcli con del "nombre-conexión"` | Eliminar conexión | `nmcli con del "nombre-conexión"` |
| `nmcli gen permissions` | Mostrar permisos usuario | `nmcli gen permissions` |

### 15.5. Comandos de Hostname y Resolución DNS

| Comando | Descripción/Uso | Ejemplo |
| :--- | :--- | :--- |
| `hostnamectl status` | Estado nombre host sistema | `hostnamectl status` |
| `hostnamectl hostname nuevo-nombre` | Establecer nombre host persistente | `hostnamectl hostname nuevo-nombre` |
| `getent hosts nombre-host` | Resolver nombre host | `getent hosts nombre-host` |

---

## 16. ⌨️ Atajos de Teclado y Comportamiento de la Terminal

### 16.1. Atajos de Teclado Útiles

| Atajo | Acción |
| :--- | :--- |
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
| `Ctrl+Alt+F[1-6]` | Cambia entre las diferentes consolas virtuales de texto. |
| `Super` (Tecla de Windows/Comando) | Abre la vista general de Actividades en GNOME. |
| `Super+M` | Abre o cierra la bandeja de mensajes en GNOME. |
| `Ctrl+Alt+Flecha Izquierda/Derecha` | Cambia entre espacios de trabajo en GNOME. |
| `Alt+F2` | Abre el cuadro de diálogo "Enter a Command" en GNOME. |
| `Super+L` | Bloquea la pantalla en GNOME. |
| `Ctrl+Alt+Supr` | Inicia el proceso de apagado del sistema desde GNOME. |

### 16.2. Comportamiento de teclas en la terminal

#### ¿Por qué aparecen letras como `a`, `b`, `c`, `d`?

| Combinación | Resultado visible |
| :--- | :--- |
| `Shift + ↑` | `a` |
| `Shift + ↓` | `b` |
| `Shift + →` | `c` |
| `Shift + ←` | `d` |

> Esto ocurre porque la terminal **no tiene una acción definida** para esas combinaciones, y las interpreta como **secuencias de escape incompletas** o como entrada cruda.

#### ¿Qué está pasando técnicamente?

| Componente | Explicación |
| :--- | :--- |
| Terminal (ej. Bash, Zsh) | Recibe códigos ASCII o secuencias de escape de teclado |
| Emulador de terminal (ej. GNOME Terminal, Konsole) | Traduce pulsaciones a códigos que Bash interpreta |
| Sin mapeo definido | Si `Shift + flecha` no tiene función asignada, puede enviar caracteres como `a`, `b`, `c`, `d` |

#### ¿Cómo se puede verificar?

```bash
# Ver entrada cruda del teclado
cat
# Luego pulsa Shift + flechas y observa qué aparece
# Ctrl+C para salir
```

#### ¿Cómo se soluciona o personaliza?

| Método | Resultado |
| :--- | :--- |
| Usar `showkey` o `xev` | Ver qué códigos se envían por cada tecla |
| Configurar `.inputrc` | Personalizar comportamiento de teclas en Bash |
| Usar terminales avanzados | Algunos permiten mapear combinaciones como `Shift + flecha` a funciones útiles |

---

## 17. 🔐 Seguridad y Análisis de Archivos

### 17.1. Identificación de Archivos

| Comando | Descripción |
| :--- | :--- |
| `file archivo` | Identifica tipo real del archivo |
| `strings archivo.png` | Extrae texto legible de archivos binarios |
| `whereis` | Localiza el binario, código fuente y página del manual para un comando |

### 17.2. Verificación de Integridad (Hashing)

#### Genera Hash en archivo en Linux/Unix

| Comando | Descripción |
| :--- | :--- |
| `md5sum archivo` | Genera hash MD5 |
| `sha256sum archivo` | Genera hash SHA-256 |
| `sha256sum archivo >> archivo.hash` | Guarda hash en archivo |

#### Generar Hash en Windows PowerShell

| Comando | Descripción |
| :--- | :--- |
| `Get-FileHash archivo` | Genera hash del archivo |
| `Get-FileHash -Algorithm MD5 archivo` | Hash MD5 específico |

#### Comparar Hashes de Archivos

| Comando | Descripción |
| :--- | :--- |
| `sha256sum -c archivo.hash` | Verifica integridad comparando el hash |

### 17.3. Comparación de Archivos

| Comando | Descripción |
| :--- | :--- |
| `cmp archivo1 archivo2` | Compara archivos byte a byte |
| `diff archivo1 archivo2` | Muestra diferencias línea por línea |

### 17.4. Herramientas Especializadas de Seguridad

| Comando | Descripción | Uso |
| :--- | :--- | :--- |
| `fcrackzip -v -u -D -p diccionario.txt archivo.zip` | Descifra ZIP protegido | Auditoría de seguridad |
| `steghide extract -sf imagen.jpg` | Extrae datos ocultos | Análisis forense |
| `steghide embed -cf imagen.jpg -ef archivo.txt` | Oculta datos en imagen | Esteganografía |

---

## 18. 🌐 Acceso Remoto y Gestión de Servicios con SSH

Secure Shell (SSH) es el protocolo estándar para acceder y administrar servidores remotos de forma segura.

### 18.1. Conexión a un Servidor Remoto
Para conectarte a una máquina remota, necesitas su dirección IP o nombre, un nombre de usuario y sus credenciales (contraseña o clave SSH).

| Tarea | ⭐ Comando Esencial | Opciones Comunes |
| :--- | :--- | :--- |
| **Conexión con Contraseña** | `ssh usuario@<IP_OBJETIVO>` | El método más básico. Te solicitará la contraseña.|
| **Especificar Puerto** | `ssh -p <PUERTO> usuario@<IP_OBJETIVO>` | `-p`: Util si SSH no corre en el puerto estándar 22. |
| **Usar Llave Privada** | `ssh -i /ruta/a/llave.pem usuario@<IP_OBJETIVO>` | `-i`: Archivo para autenticación con llaves (la clave) en lugar de contraseña. |
| **Configurar Login sin Contraseña** | `ssh-copy-id usuario@<IP_OBJETIVO>` | Copia la clave pública al servidor remoto para habilitar el login sin contraseña. |
| **Cierra sesión SSH y regresa al sistema local** | `exit` | Al finalizar trabajo remoto |
| `ssh-keygen` | Generar par claves SSH |
| `ssh-keygen -f ruta/nombre_clave` | Generar claves archivo específico |
| `ssh-keygen -lf archivo_clave_pública` | Mostrar huella digital clave |
| `ssh-keygen -R nombre_host_remoto` | Eliminar entrada known_hosts |
| `ssh-copy-id -i ruta/clave.pub usuario@host` | Copiar clave específica |
| `ssh -v usuario@host` | Conectar modo verbose |
| `eval $(ssh-agent)` | Iniciar agente SSH |
| `ssh-add` | Añadir identidad por defecto |
| `ssh-add ruta/clave_privada` | Añadir clave específica |
| `ssh dirección-ipv6%interfaz` | SSH IPv6 enlace local |

- **📝 Nota sobre la primera conexión SSH**

La primera vez que te conectes a un servidor, verás un mensaje como:

"The authenticity of host 'remotehost' can't be established..."

Escribe `yes` para aceptar y guardar la clave "huella digital" (fingerprint) del servidor del host, protegiendo conexiones futuras.
Esto es normal y esperado en la primera conexión.

### 18.2. Gestión del Servicio SSH (en el Servidor).

Estos comandos se usan en el servidor al que te quieres conectar para asegurarte de que el servicio SSH está funcionando. La mayoría de sistemas modernos usan systemd.

| Acción | ⭐ Comando Esencial |
| :--- | :--- |
| Iniciar servicio (temporal) | `sudo systemctl start ssh` |
| Habilitar en el arranque (permanente) | `sudo systemctl enable ssh` |
| Habilitar y arrancar ahora (mixto) | `sudo systemctl enable ssh --now` |
| Detener servicio (temporal) | `sudo systemctl stop ssh` |
| Deshabilitar en el arranque (permanente) | `sudo systemctl disable ssh` |
| Ver estado del servicio | `sudo systemctl status ssh` |
| Reiniciar servicio | `sudo systemctl restart ssh` |
| Ver logs del servicio | `sudo journalctl -u ssh` |

### 18.3. 🧭 Referencia: Gestores de Servicios por Distribución.

| Distribución | Gestor de Servicios | Comando para iniciar SSH |
| :--- | :--- | :--- |
| Ubuntu / Debian | `systemctl` | `sudo systemctl start ssh` |
| Arch Linux | Fedora / CentOS / RHEL / OpenSUSE / SUSE | `systemctl` | `sudo systemctl start sshd` |
| Alpine Linux | `rc-service` | `sudo rc-service sshd start` |
| Gentoo | `rc-service` | `sudo rc-service sshd start` |
| Devuan | `service` | `sudo service ssh start` |
| Void Linux | `runit` | `sudo sv up sshd` |
| Slackware | `rc` | `sudo rc sshd start` |
| FreeBSD | `service` | `sudo service sshd start` |
| OpenBSD / NetBSD / DragonFly BSD | `rc.d` | `sudo rc.d sshd start` |
| macOS (Homebrew) | `brew services` | `brew services start ssh` |
| macOS (System) | `launchctl` | `sudo launchctl load /Library/LaunchDaemons/ssh.iterm` |
| Windows (PowerShell) | `Start-Service` | `Start-Service ssh` |
| Windows (cmd) | `net start` | `net start ssh` |
| Windows Subsystem for Linux (WSL) | `wsl` | `sudo systemctl start ssh` |

---

## 19. 🗄️ Sistemas de Archivos y Dispositivos

| Comando | Descripción/Uso | Ejemplo |
| :--- | :--- | :--- |
| `df -H` | Uso espacio formato legible base 10 | `df -H` |
| `du [directorio]` | Uso espacio directorio y subdirectorios | `du /home` |
| `du -h [directorio]` | Uso espacio formato legible | `du -h /home` |
| `lsblk -fp [dispositivo]` | Dispositivos con ruta completa y UUID | `lsblk -fp /dev/sda` |
| `mount [dispositivo] [punto-montaje]` | Montar sistema archivos | `mount /dev/sdb1 /mnt` |
| `mount UUID="[uuid]" [punto-montaje]` | Montar sistema archivos por UUID | `mount UUID="abc-123" /mnt` |
| `umount [punto-montaje]` | Desmontar sistema archivos | `umount /mnt` |
| `lsof [punto-montaje]` | Procesos con archivos abiertos | `lsof /mnt` |

---