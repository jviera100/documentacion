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

## Práctica de laboratorio: Instalación de Linux Ubuntu en VirtualBox

Este proceso te permite experimentar con Linux sin afectar tu sistema operativo principal y comprender mejor los principios de virtualización.

### Objetivos

*   Instalar un sistema operativo Linux (Ubuntu) en una máquina virtual utilizando VirtualBox.
*   Explorar la interfaz gráfica de usuario (GUI) de Ubuntu.

### Recursos necesarios

*   Computadora con al menos 2 GB de RAM (4GB+ recomendados) y 20 GB de espacio libre en disco.
*   VirtualBox instalado.
*   Imagen ISO de Ubuntu Desktop descargada.

### Parte 1: Crear y Configurar la Máquina Virtual

#### Paso 1: Crear una máquina virtual nueva

*   Abre Oracle VM VirtualBox Manager.
*   Haz clic en "Nueva".
*   Configura la máquina virtual:
    *   **Nombre:** Ubuntu
    *   **Tipo:** Linux
    *   **Versión:** Selecciona la versión correcta de Ubuntu descargada (por ejemplo, Ubuntu 64-bit).
*   Haz clic en "Siguiente".
*   **Memoria (RAM):** Asigna al menos 2048 MB (2 GB) de RAM. Si tienes más RAM disponible, asigna 4096 MB (4 GB) o más. Mantente dentro del área verde recomendada. Haz clic en "Siguiente".
*   **Disco Duro:**
    *   Selecciona "Crear un disco duro virtual ahora".
    *   Haz clic en "Crear".
*   **Tipo de Archivo de Disco Duro:**
    *   Selecciona "VDI (Imagen de Disco de VirtualBox)".
    *   Haz clic en "Siguiente".
*   **Almacenamiento en Disco Duro Físico:**
    *   Selecciona "Reservado dinámicamente".
    *   Haz clic en "Siguiente".
*   **Ubicación del Archivo y Tamaño:**
    *   Asigna al menos 20 GB de espacio.  Elige una ubicación donde tengas suficiente espacio libre.
    *   Haz clic en "Crear".

#### Paso 2: Configurar el Arranque desde la ISO de Ubuntu

*   En Oracle VM VirtualBox Manager, haz clic derecho en la máquina virtual "Ubuntu" y selecciona "Configuración".
*   En la ventana de Configuración, ve a la sección "Almacenamiento".
*   En el árbol "Controlador IDE", debería haber una entrada "Vacío". Haz clic en "Vacío".
*   A la derecha, en "Atributos", haz clic en el icono del CD/DVD (un disco pequeño).
*   Selecciona "Seleccionar un archivo de disco..." y busca la imagen ISO de Ubuntu que descargaste.
*   Haz clic en "Aceptar".

### Parte 2: Instalar Ubuntu en la Máquina Virtual

#### Paso 1: Iniciar la Máquina Virtual

*   En Oracle VM VirtualBox Manager, selecciona la máquina virtual "Ubuntu" y haz clic en "Iniciar".

#### Paso 2: Instalar el sistema operativo Ubuntu

*   La máquina virtual arrancará desde la imagen ISO de Ubuntu.
*   En la pantalla de bienvenida de Ubuntu, selecciona "Instalar Ubuntu".
*   Sigue las instrucciones en pantalla.
*   **Tipo de Instalación:** Selecciona "Borrar disco e instalar Ubuntu" (esto borrará el disco virtual, NO tu disco duro real).  Haz clic en "Instalar ahora".
*   Confirma los cambios en el disco y haz clic en "Continuar".
*   **¿Dónde se encuentra?:**  Selecciona tu zona horaria. Haz clic en "Continuar".
*   **¿Quién es usted?:**  Introduce tu nombre, nombre de usuario, contraseña y nombre de la computadora.  Elige "Solicitar mi contraseña para iniciar sesión". Haz clic en "Continuar".
*   Espera a que se complete la instalación.  **Este proceso puede tardar un tiempo (15-30 minutos).**
*   Una vez completada la instalación, haz clic en "Reiniciar ahora".

#### Paso 3: Desmontar la Imagen ISO

*   Después de reiniciar, Ubuntu te pedirá que quites el medio de instalación.
*   En la ventana de la máquina virtual, ve al menú "Dispositivos" -> "Unidades Ópticas" -> Desmarca la imagen ISO de Ubuntu (debería aparecer el nombre del archivo ISO).  Esto "desmonta" la ISO.
*   Presiona Enter. La máquina virtual se reiniciará.

### Parte 3: Explorar la Interfaz Gráfica de Usuario (GUI)

#### Paso 1: Instalar Guest Additions

*   Inicia sesión en Ubuntu con el usuario y la contraseña que creaste.
*   Para mejorar la resolución de la pantalla y habilitar características como el portapapeles compartido, instala las Guest Additions.
*   En la ventana de la máquina virtual, ve al menú "Dispositivos" -> "Insertar imagen de CD de Guest Additions...".
*   Ubuntu debería detectar automáticamente el CD de Guest Additions.  Si aparece una ventana preguntando qué hacer, selecciona "Ejecutar".
*   Si no aparece ninguna ventana, abre el administrador de archivos, ve al CD de Guest Additions y ejecuta el archivo `autorun.sh` (o similar).  Es posible que necesites abrir una terminal, navegar al directorio del CD y ejecutar `./autorun.sh`.
*   Introduce tu contraseña cuando se te solicite.
*   Espera a que se complete la instalación de Guest Additions.
*   Reinicia la máquina virtual.

#### Paso 2: Explorar Ubuntu

*   Inicia sesión en Ubuntu.
*   Experimenta con la GUI:
    *   Abre el navegador web (Firefox).
    *   Abre el administrador de archivos.
    *   Explora el menú de aplicaciones.
    *   Abre la "Terminal" (línea de comandos).

¡Felicidades! Has instalado Ubuntu en una máquina virtual. Ahora puedes explorar la interfaz gráfica y comprender los beneficios de la virtualización.