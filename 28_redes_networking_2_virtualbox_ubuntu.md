# Pilares de una Red Confiable, Diseño Jerárquico y Virtualización con Linux

Este documento combina los conceptos de diseño de redes confiables y la virtualización, demostrando cómo la instalación de Linux en una máquina virtual se alinea con los principios de escalabilidad y flexibilidad de la nube.

## Pilares de una Red Confiable

Una arquitectura de red confiable se basa en cuatro pilares fundamentales:

*   **Tolerancia a Fallas:** Redundancia de rutas para asegurar la continuidad del servicio ante fallos.
*   **Escalabilidad:** Capacidad de crecer y adaptarse a nuevas demandas sin degradar el rendimiento.
*   **Calidad de Servicio (QoS):** Priorización del tráfico para garantizar una experiencia óptima, especialmente para aplicaciones en tiempo real.
*   **Seguridad:** Protección de la infraestructura y los datos mediante confidencialidad, integridad y disponibilidad.

## Diseño de Redes Jerárquico

Para una gestión eficiente, las redes se estructuran jerárquicamente. Conceptos clave:

*   **Direcciones Físicas (MAC) vs. Lógicas (IP):** La dirección MAC identifica un dispositivo de forma única, mientras que la IP define su ubicación lógica en la red. Las direcciones IP se componen de una parte de red y una parte de host.
*   **Jerarquía para la Escalabilidad:** Dividir redes grandes en segmentos más pequeños facilita la administración y reduce el tráfico de difusión.
*   **Modelo de Tres Capas de diseño de la red física/lógica:**
    *   **Acceso:** Proporciona conectividad a los dispositivos finales.
    *   **Distribución:** Controla el flujo de información entre las redes de acceso.
    *   **Núcleo (Core):** Transporte de alta velocidad de grandes volúmenes de datos entre múltiples redes.

## La Nube, la Virtualización y Linux en una Máquina Virtual

Este módulo introduce el concepto de la nube y cómo la **virtualización** es su base fundamental. La virtualización permite crear múltiples entornos informáticos (máquinas virtuales) dentro de un solo equipo físico, optimizando el uso de recursos y ofreciendo flexibilidad.  **La instalación de Linux en una máquina virtual es una excelente manera de comprender y experimentar con los principios de la virtualización y la nube.**

**Tipos de Nubes:**

*   **Nubes Públicas:** Servicios accesibles al público general a través de Internet.
*   **Nubes Privadas:** Servicios dedicados a una organización específica.
*   **Nubes Híbridas:** Combinación de nubes públicas y privadas.
*   **Nubes Comunitarias:** Servicios diseñados para las necesidades de un grupo específico (ej. salud).

**Virtualización: La Base de la Nube**

La virtualización es la tecnología que hace posible la computación en la nube a gran escala. Permite ejecutar múltiples sistemas operativos y aplicaciones de manera simultánea en un solo servidor físico, maximizando la eficiencia y reduciendo costos.

**Ventajas de la Virtualización (Resumen):**

*   Menor costo (menos hardware, energía y espacio).
*   Prototipos rápidos.
*   Aprovisionamiento de servidores más rápido.
*   Mayor tiempo de actividad y recuperación ante desastres mejorada.
*   Soporte para tecnologías antiguas.

**Hipervisores: Los Administradores de Máquinas Virtuales**

El **hipervisor (emulador)** es el software que gestiona las máquinas virtuales, asignando recursos de la computadora física (CPU, memoria, disco) a cada una. Hay dos tipos principales:

*   **Tipo 1 (Bare Metal):** Se instala directamente sobre el hardware. Más eficiente, usado en servidores (ej. VMware ESXi, Microsoft Hyper-V Server).
*   **Tipo 2 (Hosted):** Se instala sobre un sistema operativo existente (Windows, macOS, Linux). Más fácil de usar para usuarios finales (ej. VirtualBox, VMware Workstation Player).  **Usaremos un hipervisor de Tipo 2 (VirtualBox) en esta guía.**

## **Guía: Instalación de Linux (Ubuntu/Kali) en VirtualBox y exploración de la GUI**

## Objetivos de la Práctica

*   Preparar el entorno para virtualización.
*   Instalar Linux (ej. Ubuntu/Kali) en una Máquina Virtual (VM) usando VirtualBox.
*   Explorar la Interfaz Gráfica de Usuario (GUI) del Linux instalado.
    *(Posteriormente se explorará la línea de comandos).*

## Contexto: Virtualización

La virtualización permite ejecutar múltiples sistemas operativos ("guests" o invitados) en una única computadora física ("host"), aprovechando el aumento de poder computacional (CPU multinúcleo, RAM abundante). Cada "guest" opera como una "máquina virtual" independiente.

**Recursos:**
*   PC con ≥2GB RAM, ≥10-25GB disco libre.
*   Internet para descargas.

**Parte 1: Preparación y Creación de la VM**

1.  **Descargar Software:**
    *   **VirtualBox:** Desde `virtualbox.org`, descarga el instalador para tu SO host y ejecútalo (aceptar predeterminados).
    *   **Imagen ISO de Linux:** Desde `ubuntu.com` (Ubuntu Desktop LTS) o `kali.org` (Kali Linux), descarga el archivo `.iso` (el instalador).

2.  **Crear Nueva Máquina Virtual (VM) en VirtualBox:**
    *   En VirtualBox Manager, clic en "Nuevo".
    *   **(B1 01) Nombre y SO:**
        *   **Nombre:** `Ubuntu_VM` (o `Kali_VM`).
        *   **Imagen ISO:** **Selecciona el archivo `.iso` descargado.** VirtualBox intentará detectar Tipo y Versión.
        *   **Tipo:** `Linux`.
        *   **Versión:** Ej: `Ubuntu (64-bit)` o `Debian (64-bit)` para Kali.
        *   *(Opcional)*: Marcar "Omitir instalación desatendida" para control manual completo.
        *   Clic "Siguiente".
    *   **(B 03) Hardware:**
        *   **Memoria base (RAM):** Aumentar (ej. 2048MB-4096MB+), **mantenerse en la zona verde.**
        *   **Procesadores (CPU):** Aumentar (ej. 2+ núcleos), **mantenerse en la zona verde.**
        *   **(Opcional, recomendado por usuario) Habilitar EFI:** Marcar "Habilitar EFI (solo SO especiales)".
        *   Clic "Siguiente".
    *   **(B1 04) Disco Duro Virtual (.vdi en SATA):**
        *   Seleccionar "Crear un disco duro virtual ahora". (Este será el archivo `.vdi` que se montará en SATA).
        *   **Tamaño del disco:** Ajustar (ej. Ubuntu: 25GB+, Kali: 20-30GB+).
        *   **Tipo de archivo:** `VDI (VirtualBox Disk Image)`.
        *   **Almacenamiento:** Elegir "Reservado completamente" (recomendado por defecto para que no de error de espacio en la instalacion) .
        *   Clic "Siguiente" y "Terminar".
    *   **(B 05) Resumen:** Verifica la configuración.
    *   **(B1 06) Error Nombre Existente / Limpieza:** Si el nombre de la VM ya existe, VirtualBox dará error. Cambia el nombre. *Para eliminar VMs antiguas o defectuosas que ocupan nombres y espacio: En VirtualBox Manager, clic derecho sobre la VM > Eliminar > "Eliminar todos los archivos".*

**Parte 2: Instalación del Sistema Operativo Linux**

3.  **Iniciar Instalación y Primer Arranque:**
    *   Selecciona la VM creada y clic en "Iniciar".
    *   **(B 09 - Error de arranque / Selección de ISO):** Si la VM no arranca desde la ISO (que debería estar asignada al IDE virtual) o pide un disco de inicio:
        *   Aparecerá un desplegable o ventana pidiendo seleccionar un medio de inicio.
        *   **Selecciona tu archivo `.iso` (el instalador) nuevamente.** El sistema debería iniciar desde él.
    *   **(B 10) Proceso de Instalación del SO:**
        *   Sigue el asistente de instalación de Ubuntu/Kali (Idioma, teclado, particionado, usuario, contraseña).
        *   **Particionado:** Seleccionar "Borrar disco e instalar [Ubuntu/Kali]" (esto opera sobre el `.vdi` en SATA y es seguro para el host).
        *   Espera a que la instalación finalice.
    *   **(B1 11) Reinicio Inicial Post-Instalación:** El instalador pedirá reiniciar. Haz clic en "Reiniciar ahora".

4.  **Gestión Post-Reinicio Inicial y Arranque desde Disco Duro Virtual:**
    *   **Situación:** Tras el reinicio inicial, el sistema operativo ya está instalado en el disco duro virtual (`.vdi` en SATA). El archivo `.iso` (instalador en IDE) ya no es necesario para arrancar el SO instalado, y si sigue montado, podría intentar reinstalar.
    *   **Acciones ANTES del siguiente arranque completo del SO (o si intenta reinstalar):**
        1.  **(Opcional pero recomendado AHORA) Configurar Portapapeles y Red:**
            *   Apaga la VM si llegó a arrancar en el SO instalado.
            *   En VirtualBox Manager > Configuración de la VM (estando apagada):
                *   **(B1 07) General > Avanzado:** "Portapapeles compartido: Bidireccional", "Arrastrar y soltar: Bidireccional".
                *   **(B1 08) Red > Adaptador 1:** "Conectado a: Adaptador puente" (para que la VM tenga su propia IP en tu red, como otra máquina).
        2.  **Opción A (Recomendada para evitar reinstalación): Eliminar ISO del IDE.**
            *   Con la VM apagada, en VirtualBox Manager > Configuración de la VM > Almacenamiento.
            *   Selecciona el "Controlador: IDE" y el archivo `.iso` montado.
            *   Haz clic en el icono de CD con una flecha hacia abajo (o clic derecho) y selecciona "Eliminar disco de la unidad virtual". El IDE debe quedar "[Vacío]".
            *   **(B 13, B 14, B1 15)** El "Controlador: SATA" con tu archivo `.vdi` debe permanecer intacto. El sistema ahora arrancará desde SATA.
        3.  **Opción B (Alternativa si se van a instalar Guest Additions inmediatamente):** Las Guest Additions también vienen como un archivo `.iso` que se montará en el IDE, reemplazando la ISO de instalación. Puedes proceder directamente a instalar las Guest Additions (paso 5), lo que implícitamente desmontará la ISO de instalación original.

**Parte 3: Configuración Esencial Post-Instalación**

5.  **(B1 16, B1 17, B1 18) Instalar VirtualBox Guest Additions (Para resolución, portapapeles, etc.):**
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

6.  **(B1 19, B 20, B 21) Crear Instantánea (Snapshot - ¡MUY RECOMENDADO!):**
    *   Una vez el SO esté instalado, actualizado y con Guest Additions funcionando:
        *   En VirtualBox Manager, selecciona la VM (puede estar encendida o apagada).
        *   Pestaña "Instantáneas" (o clic derecho sobre la VM > Instantáneas).
        *   Clic en "Tomar". Dale un nombre (ej. "Instalación Limpia con Guest Additions") y descripción.
    *   **Para restaurar:** Selecciona la instantánea > "Restaurar".

7.  **(B1 22) Personalización de Apariencia en el SO Invitado:**
    *   Dentro de Ubuntu/Kali: Aplicaciones/Configuración/Accesibilidad para ajustar temas, iconos, tamaño de fuentes.

---

**(B 23, B 24, B 25) ¡Listo!** Tienes tus VMs Linux funcionales.