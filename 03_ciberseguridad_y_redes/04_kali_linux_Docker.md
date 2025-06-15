
# 🐳 Guía: Instalación de Kali Linux en Docker + Herramientas

## 📋 Requisitos Previos
- Tener **Docker Desktop** instalado y funcionando.
- Conexión a Internet.

## 🔥 Paso 1: Descargar la Imagen de Kali Linux

```bash
docker pull kalilinux/kali-rolling
```

## 🐚 Paso 2: Crear y Ejecutar un Contenedor Interactivo

```bash
docker run -it --name mi-kali kalilinux/kali-rolling /bin/bash
```

> 📌 Nota:  
`mi-kali` es el nombre del contenedor. Puedes cambiarlo si quieres.

## 🛠️ Paso 3: Actualizar el Sistema Dentro del Contenedor

```bash
apt update && apt upgrade -y
```

## 🛠️ Paso 4: Instalar Herramientas Esenciales

### Nmap
```bash
apt install -y nmap
```

### SQLmap
```bash
apt install -y sqlmap
```

### Metasploit Framework
```bash
apt install -y metasploit-framework
```

### Burp Suite
```bash
apt install -y burpsuite
```
> 🔸 Si no encuentras la versión gratuita directamente, puedes instalarla manualmente desde el sitio oficial:  
https://portswigger.net/burp/communitydownload

## 🚪 Paso 5: Salir del Contenedor

```bash
exit
```

## 🚀 Paso 6: Volver a Ingresar al Contenedor

```bash
docker start -ai mi-kali
```

## 🗂️ Opcional: Montar una Carpeta Local en el Contenedor

Si quieres compartir archivos entre Windows y el contenedor, agrega un volumen:

```bash
docker run -it --name mi-kali -v C:\Users\miPc\Desktop\kali-data:/root/kali-data kalilinux/kali-rolling /bin/bash
```

En este caso:
- Tu carpeta local: `C:\Users\miPc\Desktop\kali-data`
- En el contenedor: `/root/kali-data`

## 🧹 Limpieza

### Ver contenedores activos:
```bash
docker ps
```

### Ver todos los contenedores:
```bash
docker ps -a
```

### Eliminar un contenedor:
```bash
docker rm mi-kali
```
