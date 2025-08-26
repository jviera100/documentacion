# Administración del sistema Red Hat I (RH124)

## Introducción

Administración del sistema Red Hat I (RH124) está diseñado para profesionales de TI sin experiencia previa en administración de sistemas Linux. El curso proporciona a los estudiantes "habilidades de supervivencia" de administración de Linux al enfocarse en las tareas básicas de administración. Administración del sistema Red Hat I también proporciona una base para los estudiantes que planean convertirse en administradores de sistemas Linux a tiempo completo mediante la introducción de conceptos clave de línea de comandos y herramientas de nivel empresarial. Estos conceptos se desarrollan más en el curso de seguimiento, Administración del sistema Red Hat II (RH134).

### Objetivos del curso

- Adquiera la habilidad suficiente para realizar tareas de administración del sistema central en Red Hat Enterprise Linux.
- Desarrolle las habilidades fundamentales que necesita un administrador de sistemas Red Hat Enterprise Linux con certificación RHCSA.

### Audiencia

- Profesionales de TI de una amplia de disciplinas que necesitan realizar tareas esenciales de administración de Linux, incluida la instalación, el establecimiento de conectividad de red, la administración del almacenamiento físico y la administración de seguridad básica.

### Prerrequisitos

- Este curso no tiene requisitos previos formales; sin embargo, la experiencia previa de administración de sistemas en otros sistemas operativos es beneficiosa.

## Orientación al entorno del aula

En este curso, el principal sistema informático para las actividades prácticas de aprendizaje es `workstation`. Los estudiantes también usan otras dos máquinas para estas actividades: `servera` y `serverb`. Los tres sistemas están en el dominio DNS `lab.example.com`.

Todos los sistemas informáticos de los estudiantes tienen una cuenta de usuario estándar, `student`, que tiene la contraseña `student`. La contraseña `root` en todos los sistemas de los estudiantes es `redhat`.

### Tabla 1. Máquinas para el aula

| Nombre de la máquina | Dirección IP | Rol |
| :--- | :--- | :--- |
| `bastion.lab.example.com` | `172.25.250.254` | Sistema de puerta de enlace para conectar la red privada del estudiante al servidor del aula (siempre debe estar en ejecución) |
| `classroom.example.com` | `172.25.254.254` | Servidor que aloja los materiales necesarios para el aula |
| `workstation.lab.example.com` | `172.25.250.9` | Estación de trabajo gráfica para uso de los estudiantes |
| `servera.lab.example.com` | `172.25.250.10` | Servidor administrado "A" |
| `serverb.lab.example.com` | `172.25.250.11` | Servidor administrado "B" |

La función principal de `bastion` es actuar como un enrutador entre la red que conecta las máquinas de los estudiantes y la red del aula. Si `bastion` está inactivo, las máquinas de otros estudiantes solo pueden acceder a los sistemas de la red individual de estudiantes.

Varios sistemas en el aula brindan servicios de apoyo. Dos servidores, `content.example.com` y `materials.example.com`, son fuentes de software y materiales de laboratorio en actividades prácticas. La información sobre cómo usar estos servidores se proporciona en las instrucciones para esas actividades. Estas actividades las proporciona la máquina virtual `workstation`. Ambos `classroom` y `bastion` siempre deben estar funcionando para un uso adecuado del entorno de laboratorio.

> **Nota**
> Al iniciar sesión en `servera` o `serverb`, es posible que vea un mensaje sobre la activación de `cockpit`. Puede ignorar el mensaje.

```bash
[student@workstation ~]$ ssh student@serverb
Warning: Permanently added 'serverb,172.25.250.11' (ECDSA) to the list of known hosts.
Activate the web console with: systemctl enable --now cockpit.socket

[student@serverb ~]$
```

## Control de sus sistemas

Se le asignan computadoras remotas en un aula de Red Hat Online Learning (ROLE). Se accede a los cursos a su propio ritmo a través de una aplicación web alojada en `rol.redhat.com`. Inicie sesión en este sitio con sus credenciales de usuario del Portal del cliente de Red Hat.

### Control de las máquinas virtuales

Las máquinas virtuales en su entorno de aula se controlan a través de controles de interfaz de página web. El estado de cada máquina virtual de clase se muestra en la pestaña Entorno de laboratorio.

#### Tabla 2. Estados de la máquina

| Estado de la máquina virtual | Descripción |
| :--- | :--- |
| edificio | Se está creando la máquina virtual. |
| activo | La máquina virtual se está ejecutando y está disponible. Si acaba de comenzar, aún podría estar iniciando servicios. |
| detenido | La máquina virtual está completamente apagada. Al iniciarse, la máquina virtual se inicia en el mismo estado en el que estaba antes del apagado. Se conserva el estado del disco. |

#### Tabla 3. Acciones en el aula

| Botón o acción | Descripción |
| :--- | :--- |
| CREAR | Crea el aula ROLE. Crea e inicia todas las máquinas virtuales necesarias para esta clase. La creación puede tardar varios minutos en completarse. |
| BORRAR | Elimine el aula ROLE. Destruye todas las máquinas virtuales del aula. Todo el trabajo guardado en los discos de esos sistemas se pierde. |
| EMPEZAR | Inicie todas las máquinas virtuales del aula. |
| INCIPIENTE | Todas las máquinas virtuales del aula se están iniciando. |
| PARAR | Detenga todas las máquinas virtuales del aula. |

#### Tabla 4. Acciones de la máquina

| Botón o acción | Descripción |
| :--- | :--- |
| CONSOLA ABIERTA | Conéctese a la consola del sistema de la máquina virtual en una nueva pestaña del navegador. Puede iniciar sesión directamente en la máquina virtual y ejecutar comandos, cuando sea necesario. Normalmente, inicie sesión solo en la máquina virtual `workstation` y, desde allí, utilícela para conectarse a las otras máquinas virtuales. |
| ACCIÓN → Inicio | Inicie (encienda) la máquina virtual. |
| ACCIÓN → Apagado | Apague correctamente la máquina virtual, conservando el contenido del disco. |
| ACCIÓN → Apagado | Apague forzosamente la máquina virtual, conservando el contenido del disco. Esto equivale a quitar la energía de una máquina física. |
| ACCIÓN → Restablecer | Apague forzosamente la máquina virtual y restablezca el almacenamiento asociado a su estado inicial. Todo el trabajo guardado en los discos de ese sistema se pierde. |

Al comienzo de un ejercicio, si se le indica que restablezca un solo nodo de máquina virtual, haga clic en `ACCIÓN → Restablecer` solo para esa máquina virtual específica.

Al inicio de un ejercicio, si se le indica que restablezca todas las máquinas virtuales, haga clic en `ACCIÓN → Restablecer` en todas las máquinas virtuales de la lista.

Si desea devolver el entorno del aula a su estado original al comienzo del curso, haga clic en `ELIMINAR` para eliminar todo el entorno del aula. Una vez eliminado el laboratorio, haga clic en `CREAR` para aprovisionar un nuevo conjunto de sistemas de aula.

> **Advertencia**
> La operación `DELETE` no se puede deshacer. Todo el trabajo completado en el entorno del aula se pierde.

### Los temporizadores de parada automática y destrucción automática

La inscripción en Red Hat Online Learning le da derecho a una asignación fija de tiempo en la computadora. Para ayudar a conservar el tiempo asignado, el aula ROLE utiliza temporizadores, que apagan o eliminan el entorno del aula cuando expira el temporizador apropiado.

Para ajustar los temporizadores, ubique los dos botones `+` en la parte inferior de la página de administración del curso. Haga clic en el botón de parada automática `+` para agregar otra hora al temporizador de parada automática. Haga clic en el botón `+` de destrucción automática para agregar otro día al temporizador de destrucción automática. La detención automática tiene un máximo de 11 horas y la destrucción automática tiene un máximo de 14 días. Tenga cuidado de mantener los temporizadores configurados mientras trabaja, para que su entorno no se apague inesperadamente. Tenga cuidado de no configurar los temporizadores innecesariamente altos, lo que podría desperdiciar su asignación de tiempo de suscripción.

### Realización de ejercicios de laboratorio

Es posible que vea los siguientes tipos de actividades de laboratorio en este curso:

- **Ejercicio guiado**: es un ejercicio de práctica práctica que sigue a una sección de presentación. Lo guía a través de un procedimiento a realizar, paso a paso.
- **Un examen**: se usa típicamente cuando se verifica el aprendizaje basado en el conocimiento o cuando una actividad práctica no es práctica por alguna otra razón.
- **Un Laboratorio de fin de capítulo**: es una actividad práctica graduable para ayudarlo a verificar su aprendizaje. Trabajas a través de un conjunto de pasos de alto nivel, basados en los ejercicios guiados de ese capítulo, pero los pasos no te guían a través de cada comando. Se proporciona una solución con un recorrido paso a paso.
- **Un Laboratorio de revisión integral**: se utiliza al final del curso. También es una actividad práctica calificable y puede cubrir el contenido de todo el curso. Trabaja a través de una especificación de lo que debe lograr en la actividad, sin recibir los pasos específicos para hacerlo. Nuevamente, se proporciona una solución con un recorrido paso a paso que cumple con la especificación.

Para preparar el entorno de laboratorio al inicio de cada actividad práctica, ejecute el comando `lab start` con un nombre de actividad especificado de las instrucciones de la actividad. Del mismo modo, al final de cada actividad práctica, ejecute el comando `lab finish` con el mismo nombre de actividad para limpiar después de la actividad. Cada actividad práctica tiene un nombre único dentro de un curso.

La sintaxis para ejecutar un script de ejercicio es la siguiente:

```bash
[student@workstation ~]$ lab action exercise
```

El `action` es una elección de `start`, `grade`, o `finish`. Todos los ejercicios apoyan `start` y `finish`. Solo los laboratorios de fin de capítulo y los laboratorios de revisión integral admiten `grade`.

- **start**: La acción `start` verifica los recursos necesarios para comenzar un ejercicio. Puede incluir la configuración de ajustes, la creación de recursos, la comprobación de los servicios de requisitos previos y la comprobación de los resultados necesarios de ejercicios anteriores. Puede hacer un ejercicio en cualquier momento, incluso sin hacer ejercicios previos.
- **grade**: En el caso de las actividades calificables, la acción `grade` dirige el comando `lab` para evaluar el trabajo y muestra una lista de criterios de calificación con un estado `PASS` o `FAIL` para cada uno. Para lograr un estado `PASS` para todos los criterios, corrija los errores y vuelva a ejecutar la acción `grade`.
- **finish**: La acción `finish` limpia los recursos que se configuraron durante el ejercicio. Puedes hacer ejercicio tantas veces como quieras.

El comando `lab` admite la finalización de tabulaciones. Por ejemplo, para enumerar todos los ejercicios que puede iniciar, escriba `lab start` y presione la tecla `Tab` dos veces.

## Capítulo 1. Introducción a Red Hat Enterprise Linux

- **¿Qué es Linux?**
- **Cuestionario: Introducción a Red Hat Enterprise Linux**
- **Resumen**

### Abstracto

- **Gol**: Defina el código abierto, Linux, las distribuciones de Linux y Red Hat Enterprise Linux.
- **Objetivos**: Explicar el propósito del código abierto, Linux, las distribuciones de Linux y Red Hat Enterprise Linux.
- **Secciones**: ¿Qué es Linux? (y cuestionario)

### ¿Qué es Linux?

- **Objetivos**: Defina y explique el propósito de Linux, el código abierto, las distribuciones de Linux y Red Hat Enterprise Linux.

#### ¿Por qué debería aprender sobre Linux?

Linux es una tecnología crítica para que los profesionales de TI la entiendan.

Linux es de uso generalizado en todo el mundo. Los usuarios de Internet interactúan diariamente con aplicaciones Linux y sistemas de servidores web, navegando por la World Wide Web y utilizando sitios de comercio electrónico para comprar y vender productos.

Linux se usa para mucho más que Internet. Linux administra los sistemas de punto de venta y los mercados de valores del mundo, alimenta televisores inteligentes y sistemas de entretenimiento a bordo, y ejecuta la mayoría de las 500 supercomputadoras más importantes del mundo. Linux proporciona las tecnologías centrales que impulsan la revolución de la nube y las herramientas para crear las últimas generaciones de aplicaciones de microservicios basadas en contenedores, tecnologías de almacenamiento basadas en software y soluciones de big data.

En el centro de datos moderno, Linux y Microsoft Windows son los sistemas operativos predominantes. El uso de Linux continúa expandiéndose en los espacios empresariales, de nube y de dispositivos. Debido a su adopción generalizada, tienes muchas razones para aprender Linux:

- Un usuario de Windows necesita interoperar con sistemas y aplicaciones Linux.
- En el desarrollo de aplicaciones, Linux suele alojar la aplicación y su tiempo de ejecución.
- En la computación en la nube, tanto las instancias de nube privada como las públicas utilizan Linux como sistema operativo.
- Las aplicaciones móviles y los dispositivos de Internet de las cosas (IoT) suelen ejecutarse en Linux.
- Cuando se buscan nuevas oportunidades profesionales en TI, las habilidades de Linux tienen una gran demanda.

#### ¿Qué hace que Linux sea genial?

Si alguien te pregunta "¿Qué hace que Linux sea genial?", entonces tienes muchas respuestas para elegir:

- **Linux es código abierto software.** Ser de código abierto significa que puede ver todo cómo funciona un programa o sistema. También puede experimentar con los cambios y compartirlos libremente para que otros los usen. El modelo de código abierto significa que las mejoras son más fáciles de realizar, lo que permite una innovación más rápida.
- **Linux proporciona un Interfaz de línea de comandos (CLI) para facilitar el acceso y la creación de secuencias de comandos potentes.** Linux se basa en una filosofía de diseño básica en la que los usuarios pueden realizar todas las tareas de administración desde la CLI. Permite una automatización, implementación y aprovisionamiento más fáciles, y simplifica la administración del sistema local y remoto. A diferencia de muchos otros sistemas operativos, estas capacidades estaban en la arquitectura desde el principio y dan como resultado facilidad de uso y estabilidad.
- **Linux es un modular sistema operativo que está diseñado para reemplazar o quitar componentes fácilmente.** Los componentes del sistema se pueden actualizar y actualizar cuando sea necesario. Un sistema Linux puede ser una estación de trabajo de desarrollo de propósito general o un dispositivo de software minimizado a propósito.

#### ¿Qué es el software de código abierto?

Software de código abierto es software con código fuente que cualquiera puede usar, estudiar, modificar y compartir.

El código fuente es el conjunto de instrucciones legibles por humanos que se utilizan para hacer un programa. El código puede estar en forma interpretativa, como un script, o compilado en un ejecutable binario que el equipo ejecuta directamente. El código fuente se convierte en protegido por derechos de autor cuando se crea, y el titular de los derechos de autor controla los términos bajo los cuales se puede copiar, adaptar y distribuir el software. Los usuarios pueden usar el software de acuerdo con su licencia de software.

Algunos programas informáticos utilizan código fuente "propietario" o de "código cerrado" que solo la persona, el equipo o la organización de origen pueden ver, cambiar o distribuir. Las licencias propietarias generalmente restringen al usuario a ejecutar el programa y brindan acceso limitado o nulo a la fuente.

El software de código abierto es diferente. Cuando un titular de derechos de autor proporciona software bajo una licencia de código abierto, otorga al usuario el derecho a ejecutar el programa y ver, modificar, compilar y redistribuir el código fuente a otros, libre de regalías. Las licencias de código abierto promueven la colaboración, el intercambio, la transparencia y la innovación rápida, porque alientan a más personas a modificar y mejorar el software y a compartir mejoras más ampliamente.

El software de código abierto aún se puede proporcionar para uso comercial. El código abierto es una parte fundamental de las operaciones comerciales de muchas organizaciones. Algunas licencias de código abierto permiten reutilizar el código en productos propietarios. Cualquiera puede vender código fuente abierto, pero las licencias de código abierto generalmente permiten al cliente redistribuir el código fuente. Los proveedores de código abierto como Red Hat brindan soporte comercial para implementar, administrar y crear soluciones basadas en productos de código abierto.

El código abierto tiene muchos beneficios para el usuario:

- **Control**: Vea lo que hace el código y mejórelo.
- **Adiestramiento**: Aprenda del código del mundo real y desarrolle más aplicaciones que sean útiles.
- **Seguridad**: Inspeccione el código confidencial y corríjalo incluso sin la ayuda de los desarrolladores originales.
- **Estabilidad**: Confiar en código que pueda sobrevivir a la pérdida del desarrollador original.

#### Tipos de licencias de código abierto

Los desarrolladores de software de código abierto pueden licenciar su software de diferentes maneras. Los términos de licencia de software controlan cómo se puede combinar el código fuente con otro código o reutilizarlo. Para ser de código abierto, las licencias deben permitir a los usuarios usar, ver, cambiar, compilar y distribuir libremente el código.

Dos clases generales de licencias de código abierto son particularmente importantes:

- **Copyleft**: Las licencias están diseñadas para fomentar el mantenimiento del código abierto.
- **Permisivo**: Las licencias están diseñadas para maximizar la reutilización del código.

Las licencias copyleft, o "compartidas", requieren que cualquiera que distribuya el código fuente, con o sin cambios, debe transmitir la libertad para que otros también copien, cambien y distribuyan el código. La ventaja de las licencias copyleft es que ayudan a mantener abierto el código existente y las mejoras a ese código y aumentan la cantidad de código fuente abierto disponible. Las licencias copyleft comunes incluyen el Licencia Pública General GNU (GPL) y el Licencia pública de GNU reducida (LGPL).

Las licencias permisivas maximizan la reutilización del código fuente. Puede usar la fuente para cualquier propósito si se conservan las declaraciones de derechos de autor y licencia, incluida la reutilización de código bajo licencias más restrictivas o propietarias. Aunque las licencias permisivas facilitan la reutilización del código, se corre el riesgo de fomentar mejoras exclusivas de propiedad exclusiva. Ejemplos de licencias permisivas incluyen la licencia MIT/X11, la licencia BSD simplificada y la licencia de software Apache 2.0.

#### ¿Quién desarrolla software de código abierto?

El desarrollo de código abierto hoy en día es abrumadoramente profesional. El código abierto ya no es desarrollado únicamente por un cuerpo de voluntarios. Hoy en día, la mayoría de los desarrolladores de código abierto trabajan para organizaciones que les pagan por participar en proyectos de código abierto para construir y contribuir con las mejoras que la organización y sus clientes necesitan.

Los voluntarios y la comunidad académica siguen desempeñando un papel importante y pueden hacer contribuciones vitales, especialmente en tecnología emergente. La combinación de desarrollo formal e informal proporciona un entorno altamente dinámico y productivo.

#### ¿Qué es una distribución de Linux?

Un Distribución de Linux es un sistema operativo instalable que se construye a partir de un kernel de Linux y que admite programas y bibliotecas de usuario. Un completo Linux El sistema es desarrollado por múltiples comunidades de desarrollo independientes que trabajan cooperativamente en componentes individuales. Una distribución proporciona un método fácil para instalar y administrar un sistema Linux en funcionamiento.

En 1991, el estudiante graduado Linus Torvalds desarrolló un kernel similar a UNIX al que llamó Linux, y lo licenció como software de código abierto bajo la GPL. El kernel es el núcleo del sistema operativo y administra el hardware, la memoria y la programación de programas en ejecución. El kernel de Linux se complementa con otro software de código abierto, incluidas utilidades y programas del Proyecto GNU, una interfaz gráfica del MIT Sistema de ventanas X. El kernel de Linux también incluye otros componentes de código abierto, como el servidor de correo Sendmail y el servidor web HTTP Apache, para convertirse en un sistema operativo completo de código abierto similar a UNIX.

Un desafío importante para los usuarios de Linux es ensamblar todas estas piezas de software de muchas fuentes. Los primeros desarrolladores de Linux proporcionaron una distribución de herramientas preconstruidas y probadas que los usuarios podían descargar e instalar para implementar rápidamente sistemas Linux.

Existen muchas distribuciones de Linux, cada una con diferentes objetivos y criterios de soporte. Generalmente, las distribuciones tienen algunas características comunes:

- Las distribuciones consisten en un kernel de Linux y admiten programas de espacio de usuario.
- Las distribuciones pueden ser pequeñas y de un solo propósito, o pueden incluir miles de programas de código abierto.
- Las distribuciones proporcionan un medio para instalar y actualizar el software y sus componentes.
- El proveedor de distribución admite el software e, idealmente, participa en la comunidad de desarrollo.

#### ¿Quién es Red Hat?

Red Hat es el proveedor líder mundial de soluciones de software de código abierto, mediante el uso de un enfoque impulsado por la comunidad para tecnologías confiables y de alto rendimiento en la nube, Linux, middleware, almacenamiento y virtualización. La misión de Red Hat es ser el catalizador en las comunidades de clientes, colaboradores y socios para crear una mejor tecnología de código abierto.

El papel de Red Hat es ayudar a los clientes a conectarse con la comunidad de código abierto y sus socios para utilizar de manera efectiva las soluciones de software de código abierto. Red Hat participa activamente y apoya a la comunidad de código abierto. Muchos años de experiencia han convencido a la empresa de la importancia del código abierto para el futuro de la industria de TI.

Red Hat es mejor conocido por su participación en la comunidad Linux y la distribución Red Hat Enterprise Linux. Red Hat también participa activamente en otras comunidades de código abierto, incluidos proyectos de middleware que se centran en la comunidad de desarrolladores de JBoss. Red Hat también ofrece soluciones de virtualización, tecnologías en la nube como OpenStack y OpenShift, y los proyectos de almacenamiento basados en software Ceph y Gluster, entre otros.

#### Ecosistema Red Hat Enterprise Linux

Red Hat Enterprise Linux (RHEL) es la distribución comercial de Linux de grado de producción de Red Hat. Red Hat desarrolla e integra software de código abierto en RHEL a través de un proceso de varias etapas.

- **Red Hat Participa** en el apoyo a proyectos individuales de código abierto. Contribuye con código, tiempo de desarrollo, recursos y soporte, y a menudo colabora con desarrolladores de otras distribuciones de Linux, para mejorar la calidad general del software para todos.
- **Los patrocinadores de Red Hat y Integra** proyectos de código abierto en la distribución Fedora impulsada por la comunidad. Fedora proporciona un entorno de trabajo gratuito para servir como laboratorio de desarrollo y campo de pruebas para las características que se incorporarán a los productos CentOS Stream y RHEL.
- **Red Hat Estabiliza** el software CentOS Stream para estar listo para el soporte y la estandarización a largo plazo, y lo integra en RHEL, la distribución lista para producción.

#### Fedora

Fedora es un proyecto comunitario que produce y lanza un sistema operativo gratuito y completo basado en Linux. Red Hat patrocina y trabaja con la comunidad de Fedora para integrar el software upstream más reciente en una distribución segura y de rápido movimiento. El proyecto Fedora contribuye al mundo del código abierto, y cualquiera puede participar.

Fedora prioriza la innovación y la excelencia por encima de la estabilidad a largo plazo. Las actualizaciones importantes ocurren cada seis meses y traen cambios significativos. Fedora admite lanzamientos durante aproximadamente un año, lo que significa las dos últimas actualizaciones, lo que lo hace menos adecuado para el uso de producción compatible. Fedora sigue siendo la fuente de innovación para todo el ecosistema Enterprise Linux. En general, los paquetes comienzan en Fedora y se incluyen en CentOS Stream solo cuando se consideran maduros en estabilidad, seguridad, rendimiento y demanda del cliente.

#### Paquetes adicionales para Enterprise Linux

Un grupo de interés especial (SIG) del proyecto Fedora construye y mantiene un repositorio de paquetes respaldado por la comunidad llamado Paquetes adicionales para Enterprise Linux (EPEL). Las versiones de EPEL se alinean con las principales versiones de RHEL y permiten a los clientes de RHEL ejecutar cargas de trabajo con dependencias de software que no son compatibles con RHEL. Los paquetes EPEL no están incluidos en el soporte de Red Hat, pero son equivalentes al nivel de calidad de Fedora.

Normalmente, los paquetes EPEL se compilan con versiones RHEL. EPEL Next es un repositorio adicional para que los mantenedores de paquetes construyan contra CentOS Stream. Este repositorio es útil cuando CentOS Stream contiene una próxima reorganización de la biblioteca RHEL o si un paquete EPEL tiene un requisito de compilación de versión mínima que ya está en CentOS Stream pero aún no en RHEL.

#### Flujo de CentOS

CentOS Stream es el proyecto ascendente de RHEL. El desarrollo de la próxima versión de RHEL es transparente y abierto a las contribuciones de la comunidad que pueden influir directamente en la próxima versión. Los parches que se envían a CentOS Stream se integran más rápido en RHEL, para permitir cambios significativos durante el ciclo de vida de la versión actual de RHEL. CentOS Stream es una distribución de integración y entrega continua, con compilaciones nocturnas probadas y estables.

El proyecto CentOS da la bienvenida a colaboradores de todo el mundo, para dar a los derivados de RHEL la oportunidad de contribuir a CentOS Stream para su propio beneficio. El proyecto CentOS también tiene como objetivo promover un software de código abierto sostenible que responda más rápido a los exploits de seguridad, las tecnologías emergentes y los requisitos cambiantes de los clientes.

> **Nota**
> Antes de 2019, CentOS Linux era una distribución gratuita y sin soporte, creada por la comunidad a partir del código fuente de Red Hat después de cada lanzamiento importante de RHEL. Aunque la comunidad de CentOS disfrutó de tener un clon de RHEL disponible gratuitamente, este modelo tenía desventajas. Comúnmente, las contribuciones de los desarrolladores a CentOS Linux no se retroportaron a Fedora o RHEL sin un considerable esfuerzo duplicado. Además, se produjeron retrasos significativos entre una versión de RHEL y su compilación de distribución de CentOS correspondiente, con un retraso similar para las correcciones críticas de seguridad, controladores y ajustes de RHEL. Red Hat cambió al modelo CentOS Stream para abordar estos problemas.

Un beneficio de CentOS Stream es que, como fuente para el desarrollo de RHEL, está disponible en las mismas arquitecturas que RHEL, incluidas Intel/AMD x86_64, ARM64, IBM Power e IBM Z.

Muchas organizaciones tecnológicas innovadoras han demostrado que CentOS Stream es un reemplazo viable para el CentOS Linux original. CentOS Stream se puede descargar e instalar gratuitamente para muchos casos de uso, incluido el desarrollo y la producción ligera. Para los usuarios de la comunidad con casos de uso que no son adecuados para una distribución entregada continuamente con versiones de parches asíncronas, Red Hat proporciona suscripciones individuales gratuitas para desarrolladores de RHEL para uso a pequeña escala, como demostraciones, creación de prototipos, control de calidad y producción limitada.

#### Red Hat Enterprise Linux

Red Hat Enterprise Linux (RHEL) es la distribución de Linux de Red Hat lista para producción y con soporte comercial. En la industria informática, RHEL es reconocida como la plataforma líder para la computación de código abierto. RHEL se ha probado exhaustivamente y cuenta con un ecosistema mundial de socios de soporte para certificaciones de hardware y software, servicios de consultoría, capacitación y garantías de soporte y mantenimiento de varios años.

Red Hat crea versiones principales de RHEL directamente desde el proyecto de desarrollo continuo CentOS Stream, que proviene de Fedora. A diferencia del modelo de desarrollo anterior de RHEL, las versiones se construyeron internamente con menos transparencia y la fuente se proporcionó solo para compilar como CentOS Linux después de la versión de RHEL. Ahora el nuevo modelo de desarrollo de CentOS Stream está abierto y disponible para todos, para comentarios y contribuciones, y el código está preparado para ser la próxima versión importante de RHEL.

RHEL utiliza un modelo de soporte basado en suscripción y no cobra tarifas de licencia por software de código abierto. Las suscripciones de soporte de Red Hat proporcionan soporte de productos, mantenimiento, actualizaciones, parches de seguridad y acceso a la base de conocimientos del portal del cliente, utilidades y versiones descargables de los productos de Red Hat.

En la siguiente tabla se enumeran algunas diferencias clave entre Fedora, CentOS Stream y RHEL.

| | Fedora | Flujo de CentOS | RHEL |
| :--- | :--- | :--- | :--- |
| Ciclo de vida esperado | 12-18 meses | 5 años | 10 años |
| Certificado por el proveedor de software | No | Por lo general, no | Sí |
| Documentación proporcionada por | Comunidad | Comunidad | Red Hat |
| Soporte experto disponible | No | No | Sí |
| Equipo de seguridad de productos | No | No | Sí |
| Certificaciones de seguridad | No | No | Sí |
| Opciones sin costo | Sí | Sí | Sí |
| Herramientas de gestión | No | No | Sí |

#### RHEL para Edge

RHEL para Edge es una variante basada en imágenes de RHEL, con un mecanismo de implementación diferente. RHEL proporciona la capacidad de crear imágenes de sistema operativo especialmente diseñadas a través de una herramienta llamada Image Builder. Con este mecanismo, los equipos de TI pueden crear, implementar y mantener estas imágenes de RHEL en menos tiempo durante la vida útil del sistema. Las implementaciones basadas en imágenes están optimizadas para varias arquitecturas perimetrales, pero se pueden personalizar para implementaciones perimetrales específicas.

Las características de Edge en RHEL incluyen capacidades de escalado y administración seguras, incluido el aprovisionamiento sin intervención, la visibilidad del estado del sistema y las correcciones de seguridad rápidas desde una sola interfaz.

#### Red Hat CoreOS

RHEL CoreOS (RHCOS) no es un sistema operativo independiente, sino que se crea a partir de componentes de RHEL y, a continuación, se lanza, actualiza y gestiona como parte de Red Hat OpenShift Container Platform (RHOCP) para aplicaciones nativas de la nube. RHCOS es fundamentalmente un host de contenedor RHEL basado en imágenes, que utiliza el motor de contenedor compatible con Container Runtime Interface (CRI-O) que está integrado en RHOCP. Para obtener más información sobre Red Hat CoreOS, comience por familiarizarse con OpenShift y los contenedores.

#### Imagen de la base universal de Red Hat

Una imagen base universal de Red Hat (UBI) es esencialmente un derivado libremente redistribuible de RHEL. UBI está diseñado para ser una base para casos de uso de aplicaciones web y nativas de la nube que se desarrollan en contenedores. Todo el contenido de UBI es un subconjunto de RHEL, con paquetes procedentes de canales seguros de RHEL, y UBI se admite de manera similar a RHEL cuando se ejecuta en plataformas compatibles con Red Hat, como OpenShift y hosts RHEL.

Con UBI, los desarrolladores pueden centrar sus esfuerzos en su aplicación en la imagen del contenedor. UBI es un conjunto de imágenes base y un conjunto de imágenes de aplicación (como python, ruby, node.js, httpd o nginx). UBI también consta de un conjunto de repositorios RPM, desde los cuales puede actualizar cualquier imagen base de UBI para incluir las dependencias de paquetes que requiere su aplicación.

#### Desarrollo continuo de Red Hat Enterprise Linux

En la comunidad upstream de Fedora, Fedora Rawhide es el entorno de desarrollo continuo para una cadencia regular de lanzamientos públicos de Fedora. La comunidad prueba y prepara nuevas versiones del kernel de Linux, controladores de dispositivos, utilidades y aplicaciones para la próxima distribución de Fedora. El desarrollo de la versión principal de RHEL comienza con la selección de la última versión de Fedora como base para la distribución de desarrollo continuo actual de CentOS Stream.

Antes de que un paquete se introduzca formalmente en CentOS Stream, se somete a pruebas rigurosas para cumplir con los estándares de los paquetes que se incluirán en RHEL. Las actualizaciones que se publican en CentOS Stream son las mismas que las actualizaciones que se publican en la versión secundaria no publicada de RHEL en desarrollo.

Como se muestra en la figura, Fedora 34 es la base de código original para RHEL 9 y para CentOS Stream 9. A medida que se actualizan los paquetes, se insertan en CentOS Stream y en la compilación nocturna de RHEL. Las líneas continuas indican distribuciones o compilaciones que están disponibles para uso público.

Similar a la relación entre Fedora Rawhide y Fedora, CentOS Stream es el entorno de desarrollo continuo para preparar la próxima versión secundaria de RHEL. Red Hat realiza extensas pruebas de hardware, integración, dependencia y rendimiento antes de lanzar la próxima distribución pública de RHEL.

#### Obtención de Red Hat Enterprise Linux

Red Hat Enterprise Linux generalmente se obtiene con una suscripción de soporte paga, y Red Hat ofrece múltiples formas de obtener RHEL y otros productos del ecosistema RHEL, muchos sin costo.

- **Fedora Linux** y los derivados están disponibles gratuitamente en el proyecto Fedora en https://getfedora.org/, incluida una versión emergente de Fedora CoreOS.
- **EPEL y EPEL Siguiente** los paquetes están disponibles gratuitamente en los repositorios del proyecto EPEL. Aprenda a usar EPEL en https://docs.fedoraproject.org/en-US/epel/.
- **Flujo de CentOS** está disponible gratuitamente en https://www.centos.org/centos-stream/.

#### Descarga de evaluación de RHEL

Una copia de evaluación de RHEL está disponible en https://access.redhat.com/products/red-hat-enterprise-linux/evaluation. Debe tener una cuenta (gratuita) en el Portal del cliente para https://access.redhat.com acceder y descargar productos de evaluación. Las evaluaciones de productos le dan derecho a recibir actualizaciones y soporte durante un período limitado. El soporte finaliza cuando finaliza el período de evaluación, pero el software de evaluación continúa funcionando. Encontrará información adicional sobre muchas evaluaciones de productos en las páginas de evaluación del Portal del cliente.

#### Suscripción de desarrollador de Red Hat

Red Hat ofrece una suscripción disponible gratuitamente para muchos productos a través del Red Hat Developer Program en https://developer.redhat.com. Con una suscripción para desarrolladores, los desarrolladores pueden crear, crear prototipos, probar y demostrar rápidamente sus aplicaciones en el mismo software de Red Hat que en los sistemas de producción. Cree una cuenta personal en https://access.redhat.com y, a continuación, regístrese en el programa para desarrolladores. Puede usar una cuenta personal existente, pero no use una cuenta que ya esté asociada con la suscripción de soporte técnico de ninguna organización. La suscripción de desarrollador es autosuficiente, pero proporciona actualizaciones continuas del producto. Red Hat recomienda que las personas que deseen adquirir experiencia con RHEL y los productos para desarrolladores se unan al Programa para desarrolladores.

#### Plataformas de nube pública

Los principales proveedores de nube pública de hiperescala, como Amazon Web Services, Google Cloud Platform y Microsoft Azure, ofrecen imágenes oficiales para implementar instancias de Red Hat Enterprise Linux, con administración de suscripciones desde el servicio Red Hat Cloud Access. Las suscripciones con derecho completo para los productos de RHEL y Red Hat están disponibles a través del proveedor de la nube y son portátiles en nubes híbridas y de múltiples proveedores.

#### Recipientes

Puede utilizar las imágenes base universales de Red Hat y el contenido asociado para el desarrollo y la implementación sin una suscripción a Red Hat. Para el soporte operativo y el acceso a herramientas que no son UBI, los contenedores que se basan en UBI deben implementarse en una plataforma compatible con Red Hat, como OpenShift o Red Hat Enterprise Linux. El acceso a contenido que no es UBI requiere una suscripción a Red Hat.

### Referencias

- Introducción a Red Hat Enterprise Linux
- Suscripción gratuita para desarrolladores individuales de Red Hat Enterprise Linux: preguntas frecuentes
- El camino de código abierto
- Fedora
- Imágenes de Red Hat Universal Base
- Acceso a Red Hat Cloud

### Resumen

- El software de código abierto tiene un código fuente que cualquiera puede usar, estudiar, modificar y compartir libremente.
- Una distribución de Linux es un sistema operativo instalable que se construye a partir de un kernel de Linux y que admite programas y bibliotecas de usuario.
- Red Hat participa en el soporte y la contribución de código a proyectos de código abierto; patrocina e integra el software del proyecto en distribuciones impulsadas por la comunidad; y estabiliza el software para ofrecerlo como productos compatibles listos para la empresa.
- Red Hat Enterprise Linux es la distribución de Linux de código abierto, lista para la empresa y con soporte comercial que proporciona Red Hat.
- Una suscripción gratuita de Red Hat Developer es un método útil para obtener recursos e información de aprendizaje, incluidas las suscripciones de desarrollador a Red Hat Enterprise Linux y otros productos de Red Hat.