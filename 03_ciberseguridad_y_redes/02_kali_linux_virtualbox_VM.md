## **Guía: Instalación de Linux (Ubuntu/Kali) en VirtualBox y exploración de la GUI**

Este documento es una guía paso a paso para instalar un sistema operativo Linux (como Ubuntu o Kali) dentro de una **máquina virtual (VM)** utilizando **VirtualBox**. La virtualización es una tecnología fundamental que permite ejecutar múltiples sistemas operativos en un solo computador físico, facilitando entornos de desarrollo, prueba y aprendizaje flexibles y aislados. Si bien la virtualización es una piedra angular de la computación en la nube, esta guía se enfoca en su aplicación local.

## ¿Qué es la Virtualización?
La **virtualización** crea versiones simuladas (virtuales) de recursos informáticos, como un sistema operativo completo, dentro de tu máquina física. Esto se logra mediante un software especializado.

**Ventajas Clave de Usar VMs Localmente:**
*   Probar software y sistemas operativos diferentes sin afectar tu PC principal (host).
*   Crear entornos de desarrollo o prueba aislados y fácilmente reproducibles.
*   Aprender sobre la administración de sistemas operativos y la configuración de software en un entorno seguro.
*   Facilita la ejecución de aplicaciones que requieren un sistema operativo diferente al de tu máquina host.

## Hipervisores: Los Motores de la Virtualización
El **hipervisor** (también conocido como Monitor de Máquina Virtual o VMM, y a veces coloquialmente "emulador" aunque técnicamente hay diferencias) es el software que crea, ejecuta y gestiona las máquinas virtuales. Es responsable de asignar los recursos del hardware físico (CPU, memoria RAM, espacio en disco, periféricos de red) a cada VM de manera controlada.

Existen dos tipos principales de hipervisores:

*   **Tipo 1 (Bare Metal o Nativo):**
    *   Se instala y ejecuta directamente sobre el hardware físico del computador, actuando como el propio sistema operativo base.
    *   Son altamente eficientes y ofrecen el mejor rendimiento.
    *   Comúnmente usados en entornos de servidor y centros de datos.
    *   Ejemplos: VMware ESXi, Microsoft Hyper-V Server, KVM (integrado en Linux), Xen.

*   **Tipo 2 (Hosted o Alojado):**
    *   Se instala y ejecuta como una aplicación más sobre un sistema operativo ya existente (el "sistema operativo host", ej: Windows, macOS, Linux).
    *   Son más fáciles de instalar y usar para usuarios finales y para propósitos de escritorio o desarrollo.
    *   **En esta guía utilizaremos VirtualBox, un popular hipervisor de Tipo 2, gratuito y multiplataforma.**
    *   Otros ejemplos: VMware Workstation Player/Pro, Parallels Desktop (para macOS).

## Objetivos de esta Guía Práctica
*   Descargar e instalar VirtualBox y una imagen ISO de Linux.
*   Crear y configurar una nueva Máquina Virtual.
*   Instalar Linux (Ubuntu o Kali Linux como ejemplos) en la VM.
*   Instalar las VirtualBox Guest Additions para mejorar la usabilidad e integración.
*   Dar un primer vistazo a la interfaz gráfica del Linux instalado.

*(Esta guía se enfoca en la instalación y configuración inicial. La exploración avanzada de la línea de comandos (CLI) de Linux es un paso posterior).*

**Recursos:**
*   PC con ≥2GB RAM, ≥10-25GB disco libre.
*   Internet para descargas.

**Parte 1: Preparación y Creación de la VM**

1.  **Descargar Software:**
    *   **VirtualBox:** Desde `virtualbox.org`, descarga el instalador para tu SO host y ejecútalo (aceptar predeterminados).
    *   **Imagen ISO de Linux:** Desde `ubuntu.com` (Ubuntu Desktop LTS) o `kali.org` (Kali Linux), descarga el archivo `.iso` (el instalador).

2.  **Crear Nueva Máquina Virtual (VM) en VirtualBox:**
    *   En VirtualBox Manager, clic en "Nuevo".
    *   **Nombre y SO:**
        *   **Nombre:** `Ubuntu_VM` (o `Kali_VM`).
        *   **Imagen ISO:** **Selecciona el archivo `.iso` descargado.** VirtualBox intentará detectar Tipo y Versión.
        *   **Tipo:** `Linux`.
        *   **Versión:** Ej: `Ubuntu (64-bit)` o `Debian (64-bit)` para Kali.
        *   *(Opcional)*: Marcar "Omitir instalación desatendida" para control manual completo.
        *   Clic "Siguiente".
    *   **Hardware:**
        *   **Memoria base (RAM):** Aumentar (ej. 2048MB-4096MB+), **mantenerse en la zona verde.**
        *   **Procesadores (CPU):** Aumentar (ej. 2+ núcleos), **mantenerse en la zona verde.**
        *   **No marcar habilitar EFI:** (solo SO especiales)".porque daria error al iniciar la MV pidiendo el archivo de instalacion nuevamente con extension .ISO
        *   Clic "Siguiente".
    *   **Disco Duro Virtual (.vdi en SATA):**
        *   Seleccionar "Crear un disco duro virtual ahora". (Este será el archivo `.vdi` que se montará en SATA).
        *   **Tamaño del disco:** Ajustar (ej. Ubuntu: 25GB+, Kali: 20-30GB+).
        *   **Tipo de archivo:** `VDI (VirtualBox Disk Image)`.
        *   **Almacenamiento:** NO Elegir "Reservado completamente" (asi ocupa espacio dinamicamente a medida que se usa y no todo el espacio del disco (ROM) desde el principio).
        *   Clic "Siguiente" y "Terminar".
    *   **Resumen:** Verifica la configuración.
    *   **Error Nombre Existente / Limpieza:** Si el nombre de la VM ya existe, VirtualBox dará error. Cambia el nombre. *Para eliminar VMs antiguas o defectuosas que ocupan nombres y espacio: En VirtualBox Manager, clic derecho sobre la VM > Eliminar > "Eliminar todos los archivos".*

**Parte 2: Instalación del Sistema Operativo Linux**

3.  **Iniciar Instalación y Primer Arranque:**
    *   Selecciona la VM creada y clic en "Iniciar".
    *   **(Error de arranque / Selección de ISO):** Si la VM no arranca desde la ISO (que debería estar asignada al IDE virtual) o pide un disco de inicio:
        *   Aparecerá un desplegable o ventana pidiendo seleccionar un medio de inicio.
        *   **Selecciona tu archivo `.iso` (el instalador) nuevamente.** El sistema debería iniciar desde él.
    *   **Proceso de Instalación del SO:**
        *   Sigue el asistente de instalación de Ubuntu/Kali (Idioma, teclado, particionado, usuario, contraseña).
        *   **Particionado:** Seleccionar "Borrar disco e instalar [Ubuntu/Kali]" (esto opera sobre el `.vdi` en SATA y es seguro para el host).
        *   Espera a que la instalación finalice.
    *   **Reinicio Inicial Post-Instalación:** El instalador pedirá reiniciar. Haz clic en "Reiniciar ahora".

4.  **Gestión Post-Reinicio Inicial y Arranque desde Disco Duro Virtual:**
    *   **Situación:** Tras el reinicio inicial, el sistema operativo ya está instalado en el disco duro virtual (`.vdi` en SATA). El archivo `.iso` (instalador en IDE) ya no es necesario para arrancar el SO instalado, y si sigue montado, podría intentar reinstalar.
    *   **Acciones ANTES del siguiente arranque completo del SO (o si intenta reinstalar):**
        1.  **Configurar Portapapeles, arrastrar y soltar, y Red:**
            *   Apaga la VM si llegó a arrancar en el SO instalado.
            *   En VirtualBox Manager > Configuración de la VM (estando apagada):
                *   **General > Avanzado:** "Portapapeles compartido: Bidireccional", "Arrastrar y soltar: Bidireccional"(Opcionalmente util, pero mas vulnerable).
                *   **Red > Adaptador 1:** "Conectado a: Adaptador puente" (para que la VM tenga su propia IP en tu red, como otra máquina)(Opcionalmente util, pero mas vulnerable), es mas seguro red NAT (al final del texto se explica en profundidad).
        2.  **Opción A (Recomendada para evitar reinstalación): Eliminar ISO del IDE.**
            *   Con la VM apagada, en VirtualBox Manager > Configuración de la VM > Almacenamiento.
            *   Selecciona el "Controlador: IDE" y el archivo `.iso` montado.
            *   Haz clic en el icono de CD con una flecha hacia abajo (o clic derecho) y selecciona "Eliminar disco de la unidad virtual". El IDE debe quedar "[Vacío]".
            *   El "Controlador: SATA" con tu archivo `.vdi` debe permanecer intacto. El sistema ahora arrancará desde SATA.
        3.  **Opción B (Alternativa si se van a instalar Guest Additions inmediatamente):** Las Guest Additions también vienen como un archivo `.iso` que se montará en el IDE, reemplazando la ISO de instalación. Puedes proceder directamente a instalar las Guest Additions (paso 5), lo que implícitamente desmontará la ISO de instalación original.

**Parte 3: Configuración Esencial Post-Instalación**

5.  **Instalar VirtualBox Guest Additions (Para resolución, portapapeles, etc.):**
    *   Inicia la VM. Debería arrancar desde el SO instalado en el disco duro virtual (SATA).
    *   Con la VM Ubuntu/Kali iniciada y con sesión activa:
    *   En el menú de la ventana de la VM de VirtualBox: Dispositivos > "Insertar imagen de CD de los Complementos de invitado..." (Esto monta la ISO de Guest Additions en el IDE).
    *   **Comportamiento específico del SO:**
        *   **Kali Linux:** Generalmente, tras insertar el CD de Guest Additions y ejecutar el instalador (`autorun.sh` o `VBoxLinuxAdditions.run` con `sudo`), la resolución se actualiza automáticamente tras el reinicio, o incluso al cerrar y reabrir la sesión/VM.
        *   **Ubuntu:**
            *   Abre el explorador de archivos, navega al CD montado (ej. `VBox_GAs_X.X.X`).
            *   Busca `autorun.sh`. Haz clic derecho > "Ejecutar como un programa" o abre una terminal y ejecuta `sudo ./VBoxLinuxAdditions.run`. Ingresa tu contraseña.
            *   Puede que necesites reiniciar (`sudo reboot`).
            *   Si la pantalla completa no se activa, en la barra de menú de Ubuntu, busca el icono del disco (que representa las Guest Additions montadas). Al hacer clic, podría haber una opción para "Ejecutar programa".
            *   Si aún no funciona, verifica que las dependencias estén instaladas (ver más abajo).
        *   **Si hay errores de dependencias (común si no se instalaron durante la instalación del SO):**
            ```bash
            sudo apt update
            sudo apt install build-essential dkms linux-headers-$(uname -r) gcc make perl
            ```
            Luego, reintenta la instalación de las Guest Additions y reinicia.
    *   **Activar Pantalla Completa:** En el menú de la ventana de VirtualBox > Ver > "Modo pantalla completa" (Host+F, donde Host suele ser Ctrl Derecha). El menú de VirtualBox se ocultará en la parte inferior (baja el mouse para mostrarlo). Para salir: Host+F.

6.  **Crear Instantánea (Snapshot - ¡MUY RECOMENDADO!):**
    *   Una vez el SO esté instalado, actualizado y con Guest Additions funcionando:
        *   En VirtualBox Manager, selecciona la VM (puede estar encendida o apagada).
        *   Pestaña "Instantáneas" (o clic derecho sobre la VM > Instantáneas).
        *   Clic en "Tomar". Dale un nombre (ej. "Instalación Limpia con Guest Additions") y descripción.
    *   **Para restaurar:** Selecciona la instantánea > "Restaurar".

7.  **Personalización de Apariencia en el SO Invitado:**
    *   Dentro de Ubuntu/Kali: Aplicaciones/Configuración/Accesibilidad para ajustar temas, iconos, tamaño de fuentes.

---

**¡Listo!** Tienes tus VMs Linux funcionales.

### 📊 Tabla Completa: Modos de Red en VirtualBox

| Modo de Red | Acceso a Internet | Visibilidad en Red Local (LAN) | Comunicación Principal | Caso de Uso y Nivel de Seguridad |
| :--- | :--- | :--- | :--- | :--- |
| **NAT** | ✅ **Sí** | ❌ **No.** La VM está oculta tras la IP del PC anfitrión. | VM ↔ Internet | **Uso general y seguro.** Ideal para navegar y actualizar. La VM está protegida y aislada de la red local. |
| **Adaptador Puente (Bridge)** | ✅ **Sí** | ✅ **Sí.** La VM aparece como un dispositivo físico más, con su propia IP del router. | VM ↔ Internet <br> VM ↔ Dispositivos LAN | **Laboratorios de red y servidores.** Máxima flexibilidad, pero ⚠️ **menos seguro**, ya que la VM está expuesta directamente a la red. |
| **Red sólo-anfitrión (Host-only)** | ❌ **No** | ❌ **No.** | VM ↔ PC Anfitrión | **Entorno de pruebas aislado.** Perfecto para comunicar la VM únicamente con el PC físico, sin acceso al exterior. |
| **Red Interna** | ❌ **No** | ❌ **No.** | VM ↔ Otras VMs (en la misma red interna) | **Simulación de LAN aislada.** Ideal para crear laboratorios con varias VMs que se comunican entre sí, pero están completamente aisladas del mundo exterior y del anfitrión. |

