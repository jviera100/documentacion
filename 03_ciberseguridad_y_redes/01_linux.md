# Guía Completa de Comandos Linux/Terminal

Esta guía presenta los comandos esenciales de Linux organizados de forma progresiva, desde los más básicos hasta los más avanzados, agrupados por funcionalidad para facilitar el aprendizaje.

## 1. Navegación y Orientación Básica

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
| `ls -a` | Muestra archivos y carpetas ocultas | Linux/Unix |
| `ls -la` | Combina detalles + archivos ocultos | Linux/Unix |

#### Comandos Avanzados de Listado

| Comando | Descripción |
|---------|-------------|
| `ls -LS` | Ordena por tamaño (mayor a menor) |
| `ls -LSH` | Ordena por tamaño en formato legible (MB, GB) |
| `ls -lr` | Ordena al revés |
| `tree` | Muestra estructura en forma de árbol |

### 1.3 Limpieza y Ayuda

| Comando | Descripción |
|---------|-------------|
| `clear` | Limpia la pantalla de la terminal |
| `Flecha ↑` | Recupera comandos ingresados previamente |

## 2. Gestión de Directorios y Archivos

### 2.1 Creación de Directorios

| Comando | Descripción | Sistema |
|---------|-------------|---------|
| `mkdir carpeta` | Crea una carpeta | Linux/Unix |
| `mkdir carpeta1 carpeta2` | Crea múltiples carpetas | Linux/Unix |
| `ni carpeta` | Crea una carpeta | PowerShell |

### 2.2 Eliminación de Directorios

| Comando | Descripción | Precaución |
|---------|-------------|------------|
| `rmdir carpeta` | Elimina carpeta vacía | Solo carpetas vacías |
| `rm -r carpeta` | Elimina carpeta y contenido recursivamente | **¡Irreversible!** |

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
| `chmod 755 archivo` | Asigna permisos específicos | `chmod 644 archivo.txt` |
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

| Comando | Descripción |
|---------|-------------|
| `grep nombre_grupo /etc/group` | Busca grupo específico |
| `grep -E 'grupo1\|grupo2' /etc/group` | Busca múltiples grupos |

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

| Comando | Descripción |
|---------|-------------|
| `grep usuario /etc/passwd` | Busca usuario específico |
| `grep -E 'user1\|user2' /etc/passwd` | Busca múltiples usuarios |

### 7.7 Eliminación de Grupos

| Comando | Descripción |
|---------|-------------|
| `sudo groupdel nombre_grupo` | Elimina grupo del sistema |

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

| Comando | Descripción |
|---------|-------------|
| `sha256sum archivo >> archivo_hash` | Compara hashes de archivos |

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

## Consejos de Uso

1. **Siempre usa `sudo` con precaución** - Los comandos con privilegios elevados pueden afectar el sistema
2. **Verifica antes de eliminar** - Usa `ls` para confirmar qué vas a eliminar
3. **Usa tab para autocompletar** - Evita errores de escritura
4. **Lee los mensajes de error** - Te indican exactamente qué salió mal
5. **Practica en un entorno seguro** - Usa máquinas virtuales para aprender

## Atajos de Teclado Útiles

| Atajo | Acción |
|-------|--------|
| `Ctrl + C` | Interrumpe comando actual |
| `Ctrl + Z` | Suspende proceso |
| `Ctrl + L` | Limpia pantalla (igual que `clear`) |
| `Ctrl + R` | Busca en historial de comandos |
| `Tab` | Autocompletar |
| `↑/↓` | Navegar historial de comandos |



