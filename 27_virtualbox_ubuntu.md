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

# Práctica de laboratorio - Instalación de Linux en una máquina virtual y exploración de la GUI

## Objetivos

*   Parte 1: Preparar una computadora para la virtualización
*   Parte 2: Instalar un sistema operativo Linux en la máquina virtual
*   Parte 3: Explorar la interfaz gráfica de usuario

## Aspectos básicos/Situación

El poder computacional y los recursos han aumentado enormemente en los últimos 10 años. Una ventaja de los procesadores multinúcleo y las grandes cantidades de memoria RAM es la capacidad de instalar varios sistemas operativos a través del uso de la virtualización en una computadora.

Con la virtualización, una o más computadoras virtuales pueden operar dentro de una computadora física. Las computadoras virtuales que se ejecutan dentro de computadoras físicas se denominan "máquinas virtuales”. Las máquinas virtuales se conocen como “guests (invitados)” y las computadoras físicas se conocen como “hosts (huéspedes)”. Cualquier persona con una computadora y sistema operativo modernos puede ejecutar máquinas virtuales.

En esta práctica de laboratorio, instalará el sistema operativo Linux en una máquina virtual mediante una aplicación de virtualización de equipos de escritorio, como VirtualBox. Después de completar la instalación, explorará la interfaz de la GUI. También explorará la interfaz de línea de comandos usando esta máquina virtual en una práctica de laboratorio posterior en este curso.

## Recursos necesarios

*   Computadora con un mínimo de 2 Gb de RAM y 10 Gb de espacio libre en disco
*   Acceso a Internet de alta velocidad para descargar imágenes de VirtualBox de Oracle y del sistema operativo Linux, como Ubuntu Desktop

## Instrucciones

### Parte 1: Preparar una computadora para la virtualización

En la Parte 1, descargará e instalará software de virtualización de equipos de escritorio y una imagen del sistema operativo Linux. El instructor puede proporcionarle una imagen del sistema operativo Linux.

#### Paso 1: Descargar e instalar VirtualBox.

VMware Player y Oracle VirtualBox son dos programas de virtualización que puede descargar e instalar para admitir el archivo de imagen del sistema operativo. En esta práctica de laboratorio, usará la aplicación VirtualBox.

a.  Navegue hasta [https://www.VirtualBox.org/](https://www.VirtualBox.org/). Haga clic en el enlace de descarga en esta página.

b.  Elija y descargue el archivo de instalación adecuado según su sistema operativo.

c.  Cuando se haya descargado el archivo de VirtualBox, ejecute el instalador y acepte la configuración de instalación predeterminada.

#### Paso 2: Descargar una imagen de Linux

a.  Navegue hasta el sitio web de Ubuntu en [http://www.Ubuntu.com](http://www.Ubuntu.com). Haga clic en el enlace de descarga en esta página para descargar y guardar una imagen de Ubuntu Desktop.

#### Paso 3: Crear una máquina virtual nueva

a.  Haga clic en Inicio y busque Virtualbox. Haga clic en Oracle VM VirtualBox para abrir el administrador. Cuando se abra, haga clic en Nuevo para comenzar la instalación de Ubuntu.

b.  En la pantalla Nombre y sistema operativo, escriba Ubuntu en el campo Nombre. En el campo Tipo, seleccione Linux. En el campo Versión, seleccione la versión descargada correspondiente. Haga clic en Siguiente para continuar.

c.  En la pantalla Tamaño de memoria, **aumente la cantidad de RAM teniendo en cuenta que la memoria de la máquina virtual siempre debe estar en el área verde. Si se excede el área verde, tendrá un efecto adverso en el rendimiento del host.** Haga clic en Siguiente para continuar.

d.  En la pantalla Unidad de disco duro, haga clic en Crear para crear ahora un disco duro virtual.

e.  En la pantalla Tipo de archivo de unidad de disco duro, utilice las configuraciones de tipo de archivo predeterminado de VDI (imagen de disco de VirtualBox). Haga clic en Siguiente para continuar.

f.  En la pantalla Almacenamiento en unidad de disco duro físico, utilice las configuraciones predeterminadas de almacenamiento de asignación dinámica. Haga clic en Siguiente para continuar.

g.  En la pantalla Ubicación y tamaño del archivo, puede ajustar la unidad de disco duro y cambiar el nombre y la ubicación del disco duro virtual. Haga clic en Crear para usar la configuración predeterminada.

h.  Una vez que se creó la unidad de disco duro, la máquina virtual nueva aparece en una lista en la ventana Oracle VM VirtualBox Administrador. Seleccione Ubuntu.

   * **Configuración Opcional para Mejor Rendimiento (RAM y CPU):** Antes de iniciar la máquina virtual por primera vez, puede mejorar su rendimiento ajustando la cantidad de RAM y núcleos de CPU asignados a la máquina virtual. Para acceder a esta configuración:

      1.  En la ventana principal del **VirtualBox Manager** (la ventana donde se listan tus máquinas virtuales), haga clic derecho en la máquina virtual Ubuntu y seleccione "Configuración".  **Esta es la ventana de configuración *general* de la máquina virtual, no la ventana de configuración dentro de la propia máquina virtual Ubuntu.**
      2.  Vaya a la sección "Sistema".
      3.  En la pestaña "Placa Base", **aumente la cantidad de RAM**, asegurándose de permanecer dentro de la zona verde para evitar afectar el rendimiento del sistema *host*.
      4.  Vaya a la pestaña "Procesador".
      5.  **Aumente la cantidad de CPU** asignadas a la máquina virtual, teniendo en cuenta los recursos de su computadora *host*. **Es importante mantenerse dentro de los límites recomendados para evitar afectar el rendimiento del *host*.**
      6.  Haga clic en "Aceptar".

i.  Seleccione Ubuntu y haga clic en Iniciar en el menú superior.

### Parte 2: Instalar Ubuntu en la máquina virtual

#### Paso 1: Monte la imagen.

a.  En la ventana principal del **Administrador de Oracle VM Virtualbox** (donde se listan tus máquinas virtuales), haz clic con el botón secundario del mouse en Ubuntu y selecciona "Configuración". En la ventana Ubuntu – Configuración, haz clic en "Almacenamiento" en el panel izquierdo. Haz clic en "Vacío" en el panel central. En el panel derecho, haz clic en el símbolo de CD y selecciona la ubicación de la imagen de Ubuntu. Haz clic en "Aceptar" para continuar. **Recuerda, esta es la ventana de configuración *general* en el VirtualBox Manager.**

b.  En la ventana principal del **Administrador de Oracle VM VirtualBox**, haz clic en Iniciar en el menú superior.

#### Paso 2: Instale el sistema operativo.

a.  En la pantalla Bienvenido, se le solicitará que pruebe o instale Ubuntu. La opción de prueba no instala el sistema operativo, sino que lo ejecuta directamente desde la imagen. En esta práctica de laboratorio, instalará el sistema operativo de Ubuntu en esta máquina virtual. Haga clic en Instalar Ubuntu.

b.  Siga las instrucciones en pantalla y proporcione la información necesaria cuando se le solicite.

    **Nota:** Si no está conectado a Internet, puede continuar con la instalación y habilitar una red más adelante.

c.  Dado que esta instalación de Ubuntu está en una máquina virtual, es seguro borrar el disco e instalar Ubuntu sin afectar al equipo host. Seleccione Borrar disco e instalar Ubuntu. Caso contrario, la instalación de Ubuntu en una computadora física borraría todos los datos del disco y reemplazaría el sistema operativo existente con Ubuntu. Haga clic en Instalar ahora para comenzar la instalación.

d.  Haga clic en Continuar para borrar el disco e instalar Ubuntu.

e.  En la pantalla ¿Quién es usted?, proporcione su nombre y elija una contraseña. Puede utilizar el nombre de usuario generado o ingresar un nombre de usuario diferente. Escriba su nombre de usuario y contraseña. Si lo desea, puede cambiar los otros parámetros. Haga clic en Continuar.

f.  El sistema operativo Ubuntu ahora está instalando en la máquina virtual. Esto puede tardar varios minutos.

#### Paso 3: Desmontar la Imagen ISO (Crítico)

a. Una vez que la máquina virtual se haya reiniciado después de la instalación de Ubuntu, **antes de volver a encender la máquina virtual**, regresa a la ventana principal del **Administrador de Oracle VM VirtualBox**.
b. **NO** hagas clic derecho en la máquina virtual Ubuntu y ni selecciones "Configuración". **Este paso se realiza directamente en la ventana principal del VirtualBox Manager.**
c. En la sección "Almacenamiento", busca la sección "Controlador IDE". Debajo de "Controlador IDE", **deberías ver "Dispositivo IDE secundario maestro" mostrando el nombre del archivo ISO de Ubuntu que descargaste** (por ejemplo, "ubuntu-22.04.1-desktop-amd64.iso").
d. **Haz clic en el nombre del archivo ISO (Dispositivo IDE secundario maestro)**. Al pasar el mouse por encima, el nombre del archivo ISO debería cambiar de color (por ejemplo, de blanco a celeste).
e. Al hacer clic, **se abrirá un menú desplegable**. En este menú desplegable, **selecciona "Quitar disco"**.
f. Después de seleccionar "Quitar disco", el "Dispositivo IDE secundario maestro" debería mostrar ahora "Vacío".
g. Ahora, puedes iniciar la máquina virtual Ubuntu. Arrancará desde el disco duro virtual (SATA) donde instalaste Ubuntu, en lugar de intentar arrancar nuevamente desde la imagen ISO.

**Este paso es *CRÍTICO* para asegurar que la máquina virtual arranque correctamente desde el disco duro virtual en los siguientes inicios. Si se omite, la máquina virtual podría intentar reinstalar Ubuntu cada vez que se inicie.**


### Parte 3: Explorar la interfaz gráfica de usuario

En esta parte, instalará las Guest Additions de VirtualBox y explorará la interfaz gráfica de usuario (GUI) de Ubuntu.

# Cómo ajustar la resolución de pantalla de Ubuntu en VirtualBox

Esta guía proporciona métodos simplificados para ajustar la resolución de pantalla de Ubuntu en VirtualBox.

---

**Pasos:**

1.  **Insertar la imagen del CD de Complementos de Invitado:**
    *   En VirtualBox, haz clic en el menú superior: Dispositivos > Insertar imagen de CD de los Complementos de Invitado.
    *   Aparecerá un icono de CD en la barra vertical de Ubuntu, con un nombre similar a "VBox_GAs_7.1.4".

2.  **Verificar el CD y ejecutar el instalador:**
    *   Abre la aplicación "Archivos" en Ubuntu y busca un archivo llamado `autorun.sh`.
    *   Haz clic derecho sobre el archivo y selecciona "Ejecutar como un programa". Esto abrirá una terminal.
    *   Espera a que termine el proceso, la terminal se cerrará sola.

3.  **Instalar dependencias (si es necesario):**
    *   Si ves errores durante la instalación o la pantalla no se ajusta correctamente, abre una terminal y ejecuta:

        ```bash
        sudo apt update
        sudo apt install gcc make perl
        ```

4.  **Reiniciar (si es necesario):**

    *   En la mayoría de los casos, la pantalla se ajustará automáticamente. Si no, reinicia la máquina virtual:

        ```bash
        sudo reboot
        ```

5.  **Ajustar la resolución manualmente (si es necesario):**
    *   Si la pantalla no se ajusta automáticamente, abre la configuración de Ubuntu: Ve a Configuración > Pantalla.
    *   Elige la resolución que mejor se adapte a tu pantalla.

Con estos sencillos pasos, Ubuntu debería verse a pantalla completa en VirtualBox.

