## 🧠 1. ¿Qué es Docker?
Docker es como un emulador de aplicaciones.
Similar a VirtualBox, pero mucho más liviano y especializado.
Permite crear contenedores, que son como mini computadoras virtuales que:

*   Tienen su propio sistema operativo (ligero).
*   Ya traen instaladas las librerías y dependencias que necesita tu app.
*   Son aisladas del resto del sistema, por seguridad y control.

**📦 Contenedor = app que corre en su propio entorno**
Como una caja cerrada que simula el entorno real de una app (como si estuviera en un servidor de Google, AWS o Azure).

**Ejemplos de uso:**

*   Probar apps sin ensuciar tu sistema.
*   Simular servidores o servicios (como bases de datos, APIs).
*   Analizar código sospechoso sin poner en riesgo tu equipo.
*   Practicar hacking ético de forma controlada.
*   Desarrollar microservicios en entornos reales.

---

## 📦 2. ¿Qué se puede ejecutar en Docker?
Docker puede contener:

*   **Aplicaciones web** (Node.js, Python, PHP, etc.)
*   **Bases de datos** (MySQL, PostgreSQL, MongoDB)
*   **Herramientas de hacking ético** (como metasploit, nmap, wireshark, etc.)
*   **Sistemas operativos ligeros** (como Alpine o Ubuntu en versión mínima)
*   **Sistemas vulnerables** para practicar ciberseguridad
    *   Ej: DVWA, Metasploitable

---

## 🛠️ 3. Instalación completa de Docker Desktop (Guía paso a paso)
### ✅ Requisitos previos
*   Windows 10/11 Pro o Home (compatible con WSL 2)
*   Virtualización activada en BIOS
*   Tener Visual Studio Code instalado (opcional, pero recomendado)

### 🔽 Paso 1: Descargar e instalar Docker Desktop
1.  Ve a: `https://www.docker.com/products/docker-desktop/`
2.  Descarga la versión para Windows.
3.  Ejecuta el instalador y sigue las instrucciones.
4.  Asegúrate de marcar la opción “Use WSL2 instead of Hyper-V” (si te lo pregunta).
5.  Finaliza la instalación.

### ⚙️ Paso 2: Al abrir Docker por primera vez…
**Sorpresa #1: Instalación de WSL2 + kernel de Linux**
*   Se abrirá una ventana negra (terminal) automáticamente.
*   Te pedirá que presiones una tecla en 60 segundos para continuar.
*   Esto es normal y necesario: Docker necesita instalar el kernel de Linux (porque corre sobre Linux).
*   Cuando termine, te pedirá presionar otra tecla para cerrar.
*   ✅ No estás siendo hackeado. Solo es Docker preparando Linux para funcionar.

**Sorpresa #2: Pantalla de suscripción**
*   Docker te mostrará un mensaje que parece una "versión de pago".
*   Tranquilo, hay una versión gratuita. Solo debes:
    1.  Leer los términos.
    2.  Confirmar que eres un usuario personal o estudiante.
    3.  Marcar “I accept” o “Continue as free user”.
*   ✅ Listo. Docker Desktop se abrirá sin cobrarte nada.

### 🧩 Paso 3: Para usar Docker con VS Code
1.  Abre Visual Studio Code.
2.  Instala la extensión oficial: **Docker** (de Microsoft).
3.  ⚠️ **Importante**: Asegúrate de que Docker Desktop esté abierto y corriendo en segundo plano antes de usarlo en VS Code.

---

## 🧾 4. Comandos básicos de Docker
Aquí te van los más útiles para comenzar:

| Comando | ¿Qué hace? |
| :--- | :--- |
| `docker --version` | Muestra la versión instalada. |
| `docker pull imagen` | Descarga una imagen desde Docker Hub. Ej: `docker pull ubuntu` |
| `docker images` | Lista las imágenes que tienes descargadas. |
| `docker run imagen` | Crea y ejecuta un contenedor desde una imagen. Ej: `docker run ubuntu` |
| `docker ps` | Muestra contenedores activos. |
| `docker ps -a` | Muestra todos los contenedores, activos e inactivos. |
| `docker stop id` | Detiene un contenedor. |
| `docker rm id` | Elimina un contenedor detenido. |
| `docker rmi imagen` | Elimina una imagen. |
| `docker exec -it id bash`| Entra al contenedor (si tiene bash). |

---

## 🧠 5. Docker y ciberseguridad
Sí, Docker se usa mucho en ciberseguridad, especialmente en pentesting y análisis de malware. Ejemplos:

*   Puedes correr sistemas vulnerables como **DVWA**, **bWAPP** o **Metasploitable**.
*   Puedes montar herramientas de análisis en contenedores aislados.
*   Puedes analizar imágenes maliciosas en un entorno que no pone en riesgo tu máquina principal.

🧪 Docker es una alternativa liviana a Kali Linux cuando no puedes o no quieres usar una máquina virtual pesada.