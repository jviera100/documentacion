# Guía: Instalación de Linux (Ubuntu/Kali) en VirtualBox

Esta guía te llevará paso a paso en la instalación de un sistema operativo Linux (como Ubuntu o Kali) dentro de una Máquina Virtual (VM) utilizando VirtualBox.

## Introducción: Objetivos y Contexto de la Virtualización

La virtualización nos permite ejecutar sistemas operativos completos (llamados **"invitados"** o *guests*) dentro de nuestro sistema operativo principal (llamado **"anfitrión"** o *host*). Esto se logra gracias a un software llamado **hipervisor**.

- **Hipervisor de Tipo 2 (Alojado):** Es el que usaremos. Se instala como una aplicación más en tu Windows, macOS o Linux.  
  👉 *VirtualBox* es el ejemplo perfecto: gratuito, multiplataforma y fácil de usar.

- **Hipervisor de Tipo 1 (Nativo):** Se instala directamente sobre el hardware, siendo él mismo el sistema operativo base.  
  👉 Se usa en servidores y centros de datos (ej. VMware ESXi, Hyper-V).

## Objetivos de la Práctica

- Preparar el entorno descargando VirtualBox y una imagen de Linux.
- Crear, configurar e instalar Linux (Ubuntu/Kali) en una VM.
- Instalar las "Guest Additions" para una integración perfecta (pantalla completa, portapapeles, etc.).
- Realizar una exploración básica de la Interfaz Gráfica de Usuario (GUI).

## Recursos Necesarios

- PC con al menos **4 GB de RAM** y **25-30 GB de espacio libre en disco**.
- Conexión a Internet para las descargas.

## 🧠 9. Simultaneidad en Sistemas Operativos Modernos

La "simultaneidad" en sistemas operativos no es magia: es una gestión precisa de colas, turnos y eventos que ocurre tan rápido que parece que todo sucede al mismo tiempo.

## 🔄 Tabla de Simultaneidad por Componente

| Componente     | Rol Principal                                      | ¿Cómo maneja la "Simultaneidad"?                                                                 |
|----------------|----------------------------------------------------|---------------------------------------------------------------------------------------------------|
| El Kernel      | Administrador de recursos (CPU, RAM).              | Por División de Tiempo (*Time-Slicing*): ejecuta trozos de cada proceso en secuencia rápida.     |
| Wayland        | Director del tráfico gráfico (ventanas, clics).    | En Serie: procesa eventos (teclado, ratón) en orden exacto y los dirige a la app activa.         |
| La Aplicación  | Ejecuta su tarea.                                  | Recibe su turno: obtiene tiempo de CPU y eventos solo cuando le corresponde.                     |

### Paso 1: Descargar el Software Necesario

**VirtualBox**
- Visita [https://virtualbox.org](https://virtualbox.org)
- Descarga el instalador para tu sistema operativo anfitrión (ej. *Windows hosts*).
- Descarga el **VirtualBox Extension Pack** (mejora la compatibilidad con USB).
- Instala ambos con las opciones predeterminadas.

**Imagen ISO de Linux**
- **Ubuntu:** [https://ubuntu.com](https://ubuntu.com) → descarga la versión *Desktop LTS*.
- **Kali Linux:** [https://kali.org](https://kali.org) → descarga la imagen *Installer*.

📝 Un archivo `.iso` es una imagen de disco, como un CD/DVD virtual que contiene el instalador.

---

### Paso 2: Crear la Nueva Máquina Virtual (VM)

1. Abre VirtualBox → clic en "Nueva".
2. **Nombre y Sistema Operativo**
   - Nombre: *Ubuntu VM*, *Kali-Test*, etc.
   - Imagen ISO: selecciona el archivo `.iso` descargado.
   - Tipo y Versión: se detectan automáticamente (Linux / Ubuntu 64-bit o Debian 64-bit).

   ✅ **Marca la casilla "Omitir instalación desatendida"** para tener control total.

3. **Hardware (RAM y CPU)**
   - RAM: mínimo 2048 MB (2 GB), ideal 4096 MB (4 GB).
   - CPU: mínimo 2 núcleos. 
   - Siempre dentro de la **zona verde** y si tienes menos recursos en tu Pc igual funciona, pero si esta lento y puedes aumenta recursos.

4. **¡PUNTO CLAVE! – Deshabilitar EFI**
   - ❌ **NO marques "Habilitar EFI"**.
   - 🛑 Si lo haces, la VM puede quedar atrapada en un bucle de reinstalación.

5. **Disco Duro Virtual**
   - Selecciona *"Crear un disco duro virtual ahora"*.
   - Tamaño: Ubuntu (mín. 25 GB), Kali (mín. 20 GB).
   - Tipo: VDI.
   - Almacenamiento: *Reservado dinámicamente* ✅ (NO *Reservado completamente*).

6. **Finaliza la configuración** haciendo clic en *"Terminar"*.

---



### Paso 3: Instalar el Sistema Operativo Linux

1. Selecciona la VM → clic en "Iniciar".
2. Se abrirá el instalador desde el `.iso`. Sigue el asistente:
   - Selecciona idioma y teclado.
   - Tipo de instalación: *"Borrar disco e instalar..."* (esto **solo** afecta el disco virtual `.vdi`).
   - Configura zona horaria, usuario y contraseña.
3. Al finalizar, haz clic en **"Reiniciar ahora"**.
👉 archivos con extensiones .iso es el instalador y .vdi es la maquina virtual del S.O. huesped ya instalado en sata.
---

### Paso 4: Configuración Crítica de la VM (¡Con la VM Apagada!)

1. Apaga completamente la VM desde el sistema operativo Linux instalado.

2. **Expulsar el ISO de instalación**
   - VirtualBox → selecciona la VM → Configuración → *Almacenamiento*.
   - Bajo *Controlador: IDE*, selecciona el archivo `.iso`.
   - Clic en el icono de disco → "Eliminar disco de la unidad virtual".
   - Asegúrate que el IDE quede en estado **"[Vacío]"**.

3. **Configurar Integración y Red**
   - Configuración > General > Avanzado:
     - Portapapeles compartido: *Bidireccional* (opcional).
     - Arrastrar y soltar: *Bidireccional* (opcional).

   ⚠️ **Advertencia de Seguridad:** Estas funciones pueden ser riesgosas si usas la VM para pentesting.

   - Configuración > Red > Adaptador 1:
     - **NAT (Recomendado):** La VM tiene acceso a internet y está protegida.
     - **Adaptador Puente:** La VM está visible como otro dispositivo en tu red (avanzado).

---



### Paso 5: Instalar las "Guest Additions" de VirtualBox

1. Inicia la VM → inicia sesión en Linux.
2. En el menú de la ventana de la VM:  
   **Dispositivos > Insertar imagen de CD de los Complementos de invitado...**

3. Si aparece una ventana para ejecutar, acepta.  
   Si no, abre una terminal y ejecuta:

```bash
# Actualizar repositorios e instalar dependencias
sudo apt update && sudo apt install -y build-essential dkms linux-headers-$(uname -r) gcc make perl

# Ejecutar el instalador de las Guest Additions
sudo /media/$USER/VBox_GAs_*/VBoxLinuxAdditions.run

# Reiniciar la máquina virtual para aplicar los cambios
echo "Instalación completada. Reiniciando la VM en 5 segundos..."
sleep 5 && sudo reboot
```
✅ Ahora la resolución debería ajustarse dinámicamente y puedes usar pantalla completa con Host + F (Host = Ctrl derecho).

### Paso 6: Crear una Instantánea (Snapshot) – ¡Paso Esencial!
1. En VirtualBox, selecciona la VM.
2. Ve a la pestaña Instantáneas → clic en "Tomar".
3. Pon un nombre descriptivo como:
🏷️ "Instalación limpia + Guest Additions"
4. Para volver a ese estado, selecciona la instantánea y haz clic en "Restaurar".

### Paso 7: Exploración y Personalización
¡Felicidades! Tienes una VM Linux funcional. Puedes explorar:

1. Configuración del sistema
2. Temas
3. Fondos de pantalla
4. Iconos y fuentes
5. Ejemplo, Personalización de Apariencia en Kali: Aplicaciones/Configuración/Accesibilidad para ajustar temas, iconos, tamaño de fuentes.

---

✅ ¡LISTO!
Has completado con éxito la creación y configuración de tu laboratorio de virtualización personal 🚀🐧

### 📊 Tabla Completa: Modos de Red en VirtualBox

| Modo de Red | Acceso a Internet | Visibilidad en Red Local (LAN) | Comunicación Principal | Caso de Uso y Nivel de Seguridad |
| :--- | :--- | :--- | :--- | :--- |
| **NAT** | ✅ **Sí** | ❌ **No.** La VM está oculta tras la IP del PC anfitrión. | VM ↔ Internet | **Uso general y seguro.** Ideal para navegar y actualizar. La VM está protegida y aislada de la red local. |
| **Adaptador Puente (Bridge)** | ✅ **Sí** | ✅ **Sí.** La VM aparece como un dispositivo físico más, con su propia IP del router. | VM ↔ Internet <br> VM ↔ Dispositivos LAN | **Laboratorios de red y servidores.** Máxima flexibilidad, pero ⚠️ **menos seguro**, ya que la VM está expuesta directamente a la red. |
| **Red sólo-anfitrión (Host-only)** | ❌ **No** | ❌ **No.** | VM ↔ PC Anfitrión | **Entorno de pruebas aislado.** Perfecto para comunicar la VM únicamente con el PC físico, sin acceso al exterior. |
| **Red Interna** | ❌ **No** | ❌ **No.** | VM ↔ Otras VMs (en la misma red interna) | **Simulación de LAN aislada.** Ideal para crear laboratorios con varias VMs que se comunican entre sí, pero están completamente aisladas del mundo exterior y del anfitrión. |

## 🧠 Pasos Avanzados y Mantenimiento

Una vez que domines lo básico, aquí tienes tres procedimientos muy útiles para gestionar tus máquinas virtuales como un profesional.

### 🔄 B1: Crear una Copia de Seguridad Completa (Exportar a `.ova`)

Un snapshot es genial para retroceder rápidamente, pero depende del disco original.  
Una **exportación a `.ova`** crea un archivo único y portátil que contiene toda tu VM (configuración, disco, snapshots).  
Es la copia de seguridad definitiva.

**Pasos:**
1. Apaga la VM que quieres exportar.
2. En VirtualBox, ve al menú: `Archivo > Exportar servicio virtualizado...`
3. Selecciona la VM de la lista y haz clic en **Siguiente**.
4. Formato: deja la opción por defecto: **Open Virtualization Format 1.0**.
5. Archivo: elige la carpeta donde guardarás el `.ova` y asígnale un nombre.
6. Haz clic en **Exportar** y espera a que finalice.

👉 Para restaurar esta copia en otro PC:
`Archivo > Importar servicio virtualizado...` y selecciona el archivo `.ova`.

### 📁 B2: Compartir Archivos Fácilmente (Carpetas Compartidas)

Esta es la mejor manera de transferir archivos entre tu PC (anfitrión) y tu VM (invitado) de forma permanente.

#### **Requisitos Previos**
- Las *Guest Additions* deben estar instaladas.
- La VM debe estar apagada para hacer la configuración inicial.

#### **Paso 1: Configurar en VirtualBox (Host)**
1. Selecciona tu VM apagada → `Configuración > Carpetas compartidas`.
2. Haz clic en el ícono de carpeta con un `+` para agregar una nueva.
3. **Ruta de la carpeta:** selecciona la carpeta de tu PC que quieres compartir (ej. `C:\Users\TuUsuario\VM_Share`).
4. **Nombre de la carpeta:** algo simple y sin espacios (ej. `shared`).
5. Marca:
   - ✅ *Automontar*
   - ✅ *Hacer permanente*

#### **Paso 2: Dar Permisos en Linux (Invitado)**

```bash
sudo adduser $USER vboxsf
# Reinicia para aplicar los permisos:
sudo reboot
```
✅ ¡Listo! La carpeta aparecerá automáticamente en /media/sf_shared
(donde shared es el nombre que diste en el Paso 1).

### 📦 B3: Aumentar el Tamaño del Disco si te Quedas sin Espacio
¿Te quedaste corto con el tamaño inicial del disco? No hay problema, puedes ampliarlo.

⚠️ Advertencia: Crea una instantánea antes por seguridad.

Parte 1: Ampliar el Archivo .vdi (Host)
Cierra VirtualBox completamente.

Abre una terminal en tu sistema anfitrión.

En Windows:
cd "C:\Program Files\Oracle\VirtualBox"

Ejecuta este comando (ajusta la ruta y tamaño):
VBoxManage.exe modifymedium disk "C:\Users\TuUsuario\VirtualBox VMs\Ubuntu VM\ubuntu.vdi" --resize 51200

👉 Esto lo expande a 50 GB (51200 MB).

Parte 2: Expandir la Partición (Dentro de la VM Invitada)
1. Inicia la VM de Linux.
2. Instala GParted:

sudo apt update
sudo apt install gparted

3. Abre GParted.
4. Verás una barra con tu partición /dev/sda1 y un área gris "sin asignar".
5. Haz clic derecho sobre /dev/sda1 → Redimensionar/Mover.
6. Arrastra la flecha hasta el final del espacio disponible.
7. Clic en el tic verde "Aplicar todas las operaciones".
8. Reinicia la VM.

✅ Tu sistema Linux ahora podrá usar todo el espacio nuevo.







