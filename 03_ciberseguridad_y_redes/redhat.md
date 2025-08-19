Introducción
Administración del sistema Red Hat I
Administración del sistema Red Hat I (RH124) está diseñado para profesionales de TI sin experiencia previa en administración de sistemas Linux. El curso proporciona a los estudiantes "habilidades de supervivencia" de administración de Linux al enfocarse en las tareas básicas de administración. Administración del sistema Red Hat I también proporciona una base para los estudiantes que planean convertirse en administradores de sistemas Linux a tiempo completo mediante la introducción de conceptos clave de línea de comandos y herramientas de nivel empresarial. Estos conceptos se desarrollan más en el curso de seguimiento, Administración del sistema Red Hat II (RH134).
Objetivos del curso
●	Adquiera la habilidad suficiente para realizar tareas de administración del sistema central en Red Hat Enterprise Linux.
●	Desarrolle las habilidades fundamentales que necesita un administrador de sistemas Red Hat Enterprise Linux con certificación RHCSA.
Audiencia
●	Profesionales de TI de una amplia gama de disciplinas que necesitan realizar tareas esenciales de administración de Linux, incluida la instalación, el establecimiento de conectividad de red, la administración del almacenamiento físico y la administración de seguridad básica.
Prerrequisitos
●	Este curso no tiene requisitos previos formales; sin embargo, la experiencia previa de administración de sistemas en otros sistemas operativos es beneficiosa.
Orientación al entorno del aula
 
Figura 0.1: Entorno del aula
En este curso, el principal sistema informático para las actividades prácticas de aprendizaje es . Los estudiantes también usan otras dos máquinas para estas actividades: y . Los tres sistemas están en el dominio DNS.workstationserveraserverblab.example.com
Todos los sistemas informáticos de los estudiantes tienen una cuenta de usuario estándar, , que tiene la contraseña . La contraseña en todos los sistemas de los estudiantes es .studentstudentrootredhat
Tabla 1. Máquinas para el aula
Nombre de la máquina	Dirección IP	Rol
bastion.lab.example.com	172.25.250.254	Sistema de puerta de enlace para conectar la red privada del estudiante al servidor del aula (siempre debe estar en ejecución)
classroom.example.com	172.25.254.254	Servidor que aloja los materiales necesarios para el aula
workstation.lab.example.com	172.25.250.9	Estación de trabajo gráfica para uso de los estudiantes
servera.lab.example.com	172.25.250.10	Servidor administrado "A"
serverb.lab.example.com	172.25.250.11	Servidor administrado "B"

La función principal de es actuar como un enrutador entre la red que conecta las máquinas de los estudiantes y la red del aula. Si está inactivo, las máquinas de otros estudiantes solo pueden acceder a los sistemas de la red individual de estudiantes.bastionbastion
Varios sistemas en el aula brindan servicios de apoyo. Dos servidores, y , son fuentes de software y materiales de laboratorio en actividades prácticas. La información sobre cómo usar estos servidores se proporciona en las instrucciones para esas actividades. Estas actividades las proporciona la máquina virtual. Ambos y siempre deben estar funcionando para un uso adecuado del entorno de laboratorio.content.example.commaterials.example.comworkstationclassroombastion
Nota
Al iniciar sesión en o , es posible que vea un mensaje sobre la activación de . Puede ignorar el mensaje.serveraserverbcockpit
[student@workstation ~]$ ssh student@serverb
Warning: Permanently added 'serverb,172.25.250.11' (ECDSA) to the list of known hosts.
Activate the web console with: systemctl enable --now cockpit.socket

[student@serverb ~]$
Control de sus sistemas
Se le asignan computadoras remotas en un aula de Red Hat Online Learning (ROLE). Se accede a los cursos a su propio ritmo a través de una aplicación web alojada en rol.redhat.com. Inicie sesión en este sitio con sus credenciales de usuario del Portal del cliente de Red Hat.
Control de las máquinas virtuales
Las máquinas virtuales en su entorno de aula se controlan a través de controles de interfaz de página web. El estado de cada máquina virtual de clase se muestra en la pestaña Entorno de laboratorio.
 
Figura 0.2: Un ejemplo de página de gestión del entorno de laboratorio del curso
Tabla 2. Estados de la máquina
Estado de la máquina virtual	Descripción
edificio	Se está creando la máquina virtual.
activo	La máquina virtual se está ejecutando y está disponible. Si acaba de comenzar, aún podría estar iniciando servicios.
detenido	La máquina virtual está completamente apagada. Al iniciarse, la máquina virtual se inicia en el mismo estado en el que estaba antes del apagado. Se conserva el estado del disco.

Tabla 3. Acciones en el aula
Botón o acción	Descripción
CREAR	Crea el aula ROLE. Crea e inicia todas las máquinas virtuales necesarias para esta clase. La creación puede tardar varios minutos en completarse.
CREAR	Se están creando las máquinas virtuales de aula ROLE. Crea e inicia todas las máquinas virtuales necesarias para esta clase. La creación puede tardar varios minutos en completarse.
BORRAR	Elimine el aula ROLE. Destruye todas las máquinas virtuales del aula. Todo el trabajo guardado en los discos de esos sistemas se pierde.
EMPEZAR	Inicie todas las máquinas virtuales del aula.
INCIPIENTE	Todas las máquinas virtuales del aula se están iniciando.
PARAR	Detenga todas las máquinas virtuales del aula.

Tabla 4. Acciones de la máquina
Botón o acción	Descripción
CONSOLA ABIERTA	Conéctese a la consola del sistema de la máquina virtual en una nueva pestaña del navegador. Puede iniciar sesión directamente en la máquina virtual y ejecutar comandos, cuando sea necesario. Normalmente, inicie sesión solo en la máquina virtual y, desde allí, utilícela para conectarse a las otras máquinas virtuales.workstationssh
ACCIÓN → Inicio	Inicie (encienda) la máquina virtual.
ACCIÓN → Apagado	Apague correctamente la máquina virtual, conservando el contenido del disco.
ACCIÓN → Apagado	Apague forzosamente la máquina virtual, conservando el contenido del disco. Esto equivale a quitar la energía de una máquina física.
ACCIÓN → Restablecer	Apague forzosamente la máquina virtual y restablezca el almacenamiento asociado a su estado inicial. Todo el trabajo guardado en los discos de ese sistema se pierde.

Al comienzo de un ejercicio, si se le indica que restablezca un solo nodo de máquina virtual, haga clic en ACCIÓN → Restablecer solo para esa máquina virtual específica.
Al inicio de un ejercicio, si se le indica que restablezca todas las máquinas virtuales, haga clic en ACCIÓN → Restablecer en todas las máquinas virtuales de la lista.
Si desea devolver el entorno del aula a su estado original al comienzo del curso, haga clic en ELIMINAR para eliminar todo el entorno del aula. Una vez eliminado el laboratorio, haga clic en CREAR para aprovisionar un nuevo conjunto de sistemas de aula.
Advertencia
La operación DELETE no se puede deshacer. Todo el trabajo completado en el entorno del aula se pierde.
Los temporizadores de parada automática y destrucción automática
La inscripción en Red Hat Online Learning le da derecho a una asignación fija de tiempo en la computadora. Para ayudar a conservar el tiempo asignado, el aula ROLE utiliza temporizadores, que apagan o eliminan el entorno del aula cuando expira el temporizador apropiado.
Para ajustar los temporizadores, ubique los dos botones + en la parte inferior de la página de administración del curso. Haga clic en el botón de parada automática + para agregar otra hora al temporizador de parada automática. Haga clic en el botón + de destrucción automática para agregar otro día al temporizador de destrucción automática. La detención automática tiene un máximo de 11 horas y la destrucción automática tiene un máximo de 14 días. Tenga cuidado de mantener los temporizadores configurados mientras trabaja, para que su entorno no se apague inesperadamente. Tenga cuidado de no configurar los temporizadores innecesariamente altos, lo que podría desperdiciar su asignación de tiempo de suscripción.
Realización de ejercicios de laboratorio
Es posible que vea los siguientes tipos de actividades de laboratorio en este curso:
●	Un Ejercicio guiado es un ejercicio de práctica práctica que sigue a una sección de presentación. Lo guía a través de un procedimiento a realizar, paso a paso.
●	Un examen se usa típicamente cuando se verifica el aprendizaje basado en el conocimiento o cuando una actividad práctica no es práctica por alguna otra razón.
●	Un Laboratorio de fin de capítulo es una actividad práctica graduable para ayudarlo a verificar su aprendizaje. Trabajas a través de un conjunto de pasos de alto nivel, basados en los ejercicios guiados de ese capítulo, pero los pasos no te guían a través de cada comando. Se proporciona una solución con un recorrido paso a paso.
●	Un Laboratorio de revisión integral se utiliza al final del curso. También es una actividad práctica calificable y puede cubrir el contenido de todo el curso. Trabaja a través de una especificación de lo que debe lograr en la actividad, sin recibir los pasos específicos para hacerlo. Nuevamente, se proporciona una solución con un recorrido paso a paso que cumple con la especificación.
Para preparar el entorno de laboratorio al inicio de cada actividad práctica, ejecute el comando con un nombre de actividad especificado de las instrucciones de la actividad. Del mismo modo, al final de cada actividad práctica, ejecute el comando con el mismo nombre de actividad para limpiar después de la actividad. Cada actividad práctica tiene un nombre único dentro de un curso.lab startlab finish
La sintaxis para ejecutar un script de ejercicio es la siguiente:
[student@workstation ~]$ lab action exercise
El acción es una elección de , , o . Todos los ejercicios apoyan y . Solo los laboratorios de fin de capítulo y los laboratorios de revisión integral admiten .startgradefinishstartfinishgrade
empezar
La acción verifica los recursos necesarios para comenzar un ejercicio. Puede incluir la configuración de ajustes, la creación de recursos, la comprobación de los servicios de requisitos previos y la comprobación de los resultados necesarios de ejercicios anteriores. Puede hacer un ejercicio en cualquier momento, incluso sin hacer ejercicios previos.start
grado
En el caso de las actividades calificables, la acción dirige el comando para evaluar el trabajo y muestra una lista de criterios de calificación con un estado o para cada uno. Para lograr un estado para todos los criterios, corrija los errores y vuelva a ejecutar la acción.gradelabPASSFAILPASSgrade
terminar
La acción limpia los recursos que se configuraron durante el ejercicio. Puedes hacer ejercicio tantas veces como quieras.finish
El comando admite la finalización de tabulaciones. Por ejemplo, para enumerar todos los ejercicios que puede iniciar, escriba y presione la tecla Tab dos veces.lablab start
Capítulo 1. Introducción a Red Hat Enterprise Linux
¿Qué es Linux?
Cuestionario: Introducción a Red Hat Enterprise Linux
Resumen
Abstracto
Gol	Defina el código abierto, Linux, las distribuciones de Linux y Red Hat Enterprise Linux.
Objetivos	●	
Explicar el propósito del código abierto, Linux, las distribuciones de Linux y Red Hat Enterprise Linux.
Secciones	●	
¿Qué es Linux? (y cuestionario)
¿Qué es Linux?
Objetivos
●	Defina y explique el propósito de Linux, el código abierto, las distribuciones de Linux y Red Hat Enterprise Linux.
¿Por qué debería aprender sobre Linux?
Linux es una tecnología crítica para que los profesionales de TI la entiendan.
Linux es de uso generalizado en todo el mundo. Los usuarios de Internet interactúan diariamente con aplicaciones Linux y sistemas de servidores web, navegando por la World Wide Web y utilizando sitios de comercio electrónico para comprar y vender productos.
Linux se usa para mucho más que Internet. Linux administra los sistemas de punto de venta y los mercados de valores del mundo, alimenta televisores inteligentes y sistemas de entretenimiento a bordo, y ejecuta la mayoría de las 500 supercomputadoras más importantes del mundo. Linux proporciona las tecnologías centrales que impulsan la revolución de la nube y las herramientas para crear las últimas generaciones de aplicaciones de microservicios basadas en contenedores, tecnologías de almacenamiento basadas en software y soluciones de big data.
En el centro de datos moderno, Linux y Microsoft Windows son los sistemas operativos predominantes. El uso de Linux continúa expandiéndose en los espacios empresariales, de nube y de dispositivos. Debido a su adopción generalizada, tienes muchas razones para aprender Linux:
●	Un usuario de Windows necesita interoperar con sistemas y aplicaciones Linux.
●	En el desarrollo de aplicaciones, Linux suele alojar la aplicación y su tiempo de ejecución.
●	En la computación en la nube, tanto las instancias de nube privada como las públicas utilizan Linux como sistema operativo.
●	Las aplicaciones móviles y los dispositivos de Internet de las cosas (IoT) suelen ejecutarse en Linux.
●	Cuando se buscan nuevas oportunidades profesionales en TI, las habilidades de Linux tienen una gran demanda.
¿Qué hace que Linux sea genial?
Si alguien te pregunta "¿Qué hace que Linux sea genial?", entonces tienes muchas respuestas para elegir:
●	Linux es código abierto software.
Ser de código abierto significa que puede ver todo cómo funciona un programa o sistema. También puede experimentar con los cambios y compartirlos libremente para que otros los usen. El modelo de código abierto significa que las mejoras son más fáciles de realizar, lo que permite una innovación más rápida.
●	Linux proporciona un Interfaz de línea de comandos (CLI) para facilitar el acceso y la creación de secuencias de comandos potentes.
Linux se basa en una filosofía de diseño básica en la que los usuarios pueden realizar todas las tareas de administración desde la CLI. Permite una automatización, implementación y aprovisionamiento más fáciles, y simplifica la administración del sistema local y remoto. A diferencia de muchos otros sistemas operativos, estas capacidades estaban en la arquitectura desde el principio y dan como resultado facilidad de uso y estabilidad.
●	Linux es un modular sistema operativo que está diseñado para reemplazar o quitar componentes fácilmente.
Los componentes del sistema se pueden actualizar y actualizar cuando sea necesario. Un sistema Linux puede ser una estación de trabajo de desarrollo de propósito general o un dispositivo de software minimizado a propósito.
¿Qué es el software de código abierto?
Software de código abierto es software con código fuente que cualquiera puede usar, estudiar, modificar y compartir.
El código fuente es el conjunto de instrucciones legibles por humanos que se utilizan para hacer un programa. El código puede estar en forma interpretativa, como un script, o compilado en un ejecutable binario que el equipo ejecuta directamente. El código fuente se convierte en protegido por derechos de autor cuando se crea, y el titular de los derechos de autor controla los términos bajo los cuales se puede copiar, adaptar y distribuir el software. Los usuarios pueden usar el software de acuerdo con su licencia de software.
Algunos programas informáticos utilizan código fuente "propietario" o de "código cerrado" que solo la persona, el equipo o la organización de origen pueden ver, cambiar o distribuir. Las licencias propietarias generalmente restringen al usuario a ejecutar el programa y brindan acceso limitado o nulo a la fuente.
El software de código abierto es diferente. Cuando un titular de derechos de autor proporciona software bajo una licencia de código abierto, otorga al usuario el derecho a ejecutar el programa y ver, modificar, compilar y redistribuir el código fuente a otros, libre de regalías. Las licencias de código abierto promueven la colaboración, el intercambio, la transparencia y la innovación rápida, porque alientan a más personas a modificar y mejorar el software y a compartir mejoras más ampliamente.
El software de código abierto aún se puede proporcionar para uso comercial. El código abierto es una parte fundamental de las operaciones comerciales de muchas organizaciones. Algunas licencias de código abierto permiten reutilizar el código en productos propietarios. Cualquiera puede vender código fuente abierto, pero las licencias de código abierto generalmente permiten al cliente redistribuir el código fuente. Los proveedores de código abierto como Red Hat brindan soporte comercial para implementar, administrar y crear soluciones basadas en productos de código abierto.
El código abierto tiene muchos beneficios para el usuario:
●	Control: Vea lo que hace el código y mejórelo.
●	Adiestramiento: Aprenda del código del mundo real y desarrolle más aplicaciones que sean útiles.
●	Seguridad: Inspeccione el código confidencial y corríjalo incluso sin la ayuda de los desarrolladores originales.
●	Estabilidad: Confiar en código que pueda sobrevivir a la pérdida del desarrollador original.
Tipos de licencias de código abierto
Los desarrolladores de software de código abierto pueden licenciar su software de diferentes maneras. Los términos de licencia de software controlan cómo se puede combinar el código fuente con otro código o reutilizarlo. Para ser de código abierto, las licencias deben permitir a los usuarios usar, ver, cambiar, compilar y distribuir libremente el código.
Dos clases generales de licencias de código abierto son particularmente importantes:
●	Copyleft Las licencias están diseñadas para fomentar el mantenimiento del código abierto.
●	Permisivo Las licencias están diseñadas para maximizar la reutilización del código.
Las licencias copyleft, o "compartidas", requieren que cualquiera que distribuya el código fuente, con o sin cambios, debe transmitir la libertad para que otros también copien, cambien y distribuyan el código. La ventaja de las licencias copyleft es que ayudan a mantener abierto el código existente y las mejoras a ese código y aumentan la cantidad de código fuente abierto disponible. Las licencias copyleft comunes incluyen el Licencia Pública General GNU (GPL) y el Licencia pública de GNU reducida (LGPL).
Las licencias permisivas maximizan la reutilización del código fuente. Puede usar la fuente para cualquier propósito si se conservan las declaraciones de derechos de autor y licencia, incluida la reutilización de código bajo licencias más restrictivas o propietarias. Aunque las licencias permisivas facilitan la reutilización del código, se corre el riesgo de fomentar mejoras exclusivas de propiedad exclusiva. Ejemplos de licencias permisivas incluyen la licencia MIT/X11, la licencia BSD simplificada y la licencia de software Apache 2.0.
¿Quién desarrolla software de código abierto?
El desarrollo de código abierto hoy en día es abrumadoramente profesional. El código abierto ya no es desarrollado únicamente por un cuerpo de voluntarios. Hoy en día, la mayoría de los desarrolladores de código abierto trabajan para organizaciones que les pagan por participar en proyectos de código abierto para construir y contribuir con las mejoras que la organización y sus clientes necesitan.
Los voluntarios y la comunidad académica siguen desempeñando un papel importante y pueden hacer contribuciones vitales, especialmente en tecnología emergente. La combinación de desarrollo formal e informal proporciona un entorno altamente dinámico y productivo.
¿Qué es una distribución de Linux?
Un Distribución de Linux es un sistema operativo instalable que se construye a partir de un kernel de Linux y que admite programas y bibliotecas de usuario. Un completo Linux El sistema es desarrollado por múltiples comunidades de desarrollo independientes que trabajan cooperativamente en componentes individuales. Una distribución proporciona un método fácil para instalar y administrar un sistema Linux en funcionamiento.
En 1991, el estudiante graduado Linus Torvalds desarrolló un kernel similar a UNIX al que llamó Linux, y lo licenció como software de código abierto bajo la GPL. El kernel es el núcleo del sistema operativo y administra el hardware, la memoria y la programación de programas en ejecución. El kernel de Linux se complementa con otro software de código abierto, incluidas utilidades y programas del Proyecto GNU, una interfaz gráfica del MIT Sistema de ventanas X. El kernel de Linux también incluye otros componentes de código abierto, como el servidor de correo Sendmail y el servidor web HTTP Apache, para convertirse en un sistema operativo completo de código abierto similar a UNIX.
Un desafío importante para los usuarios de Linux es ensamblar todas estas piezas de software de muchas fuentes. Los primeros desarrolladores de Linux proporcionaron una distribución de herramientas preconstruidas y probadas que los usuarios podían descargar e instalar para implementar rápidamente sistemas Linux.
Existen muchas distribuciones de Linux, cada una con diferentes objetivos y criterios de soporte. Generalmente, las distribuciones tienen algunas características comunes:
●	Las distribuciones consisten en un kernel de Linux y admiten programas de espacio de usuario.
●	Las distribuciones pueden ser pequeñas y de un solo propósito, o pueden incluir miles de programas de código abierto.
●	Las distribuciones proporcionan un medio para instalar y actualizar el software y sus componentes.
●	El proveedor de distribución admite el software e, idealmente, participa en la comunidad de desarrollo.
¿Quién es Red Hat?
Red Hat es el proveedor líder mundial de soluciones de software de código abierto, mediante el uso de un enfoque impulsado por la comunidad para tecnologías confiables y de alto rendimiento en la nube, Linux, middleware, almacenamiento y virtualización. La misión de Red Hat es ser el catalizador en las comunidades de clientes, colaboradores y socios para crear una mejor tecnología de código abierto.
El papel de Red Hat es ayudar a los clientes a conectarse con la comunidad de código abierto y sus socios para utilizar de manera efectiva las soluciones de software de código abierto. Red Hat participa activamente y apoya a la comunidad de código abierto. Muchos años de experiencia han convencido a la empresa de la importancia del código abierto para el futuro de la industria de TI.
Red Hat es mejor conocido por su participación en la comunidad Linux y la distribución Red Hat Enterprise Linux. Red Hat también participa activamente en otras comunidades de código abierto, incluidos proyectos de middleware que se centran en la comunidad de desarrolladores de JBoss. Red Hat también ofrece soluciones de virtualización, tecnologías en la nube como OpenStack y OpenShift, y los proyectos de almacenamiento basados en software Ceph y Gluster, entre otros.
Ecosistema Red Hat Enterprise Linux
Red Hat Enterprise Linux (RHEL) es la distribución comercial de Linux de grado de producción de Red Hat. Red Hat desarrolla e integra software de código abierto en RHEL a través de un proceso de varias etapas.
●	Red Hat Participa en el apoyo a proyectos individuales de código abierto. Contribuye con código, tiempo de desarrollo, recursos y soporte, y a menudo colabora con desarrolladores de otras distribuciones de Linux, para mejorar la calidad general del software para todos.
●	Los patrocinadores de Red Hat y Integra proyectos de código abierto en la distribución Fedora impulsada por la comunidad. Fedora proporciona un entorno de trabajo gratuito para servir como laboratorio de desarrollo y campo de pruebas para las características que se incorporarán a los productos CentOS Stream y RHEL.
●	Red Hat Estabiliza el software CentOS Stream para estar listo para el soporte y la estandarización a largo plazo, y lo integra en RHEL, la distribución lista para producción.
 
Figura 1.1: El ecosistema de Red Hat Enterprise Linux
Fedora
Fedora es un proyecto comunitario que produce y lanza un sistema operativo gratuito y completo basado en Linux. Red Hat patrocina y trabaja con la comunidad de Fedora para integrar el software upstream más reciente en una distribución segura y de rápido movimiento. El proyecto Fedora contribuye al mundo del código abierto, y cualquiera puede participar.
Fedora prioriza la innovación y la excelencia por encima de la estabilidad a largo plazo. Las actualizaciones importantes ocurren cada seis meses y traen cambios significativos. Fedora admite lanzamientos durante aproximadamente un año, lo que significa las dos últimas actualizaciones, lo que lo hace menos adecuado para el uso de producción compatible. Fedora sigue siendo la fuente de innovación para todo el ecosistema Enterprise Linux. En general, los paquetes comienzan en Fedora y se incluyen en CentOS Stream solo cuando se consideran maduros en estabilidad, seguridad, rendimiento y demanda del cliente.
Paquetes adicionales para Enterprise Linux
Un grupo de interés especial (SIG) del proyecto Fedora construye y mantiene un repositorio de paquetes respaldado por la comunidad llamado Paquetes adicionales para Enterprise Linux (EPEL). Las versiones de EPEL se alinean con las principales versiones de RHEL y permiten a los clientes de RHEL ejecutar cargas de trabajo con dependencias de software que no son compatibles con RHEL. Los paquetes EPEL no están incluidos en el soporte de Red Hat, pero son equivalentes al nivel de calidad de Fedora.
Normalmente, los paquetes EPEL se compilan con versiones RHEL. EPEL Next es un repositorio adicional para que los mantenedores de paquetes construyan contra CentOS Stream. Este repositorio es útil cuando CentOS Stream contiene una próxima reorganización de la biblioteca RHEL o si un paquete EPEL tiene un requisito de compilación de versión mínima que ya está en CentOS Stream pero aún no en RHEL.
Flujo de CentOS
CentOS Stream es el proyecto ascendente de RHEL. El desarrollo de la próxima versión de RHEL es transparente y abierto a las contribuciones de la comunidad que pueden influir directamente en la próxima versión. Los parches que se envían a CentOS Stream se integran más rápido en RHEL, para permitir cambios significativos durante el ciclo de vida de la versión actual de RHEL. CentOS Stream es una distribución de integración y entrega continua, con compilaciones nocturnas probadas y estables.
El proyecto CentOS da la bienvenida a colaboradores de todo el mundo, para dar a los derivados de RHEL la oportunidad de contribuir a CentOS Stream para su propio beneficio. El proyecto CentOS también tiene como objetivo promover un software de código abierto sostenible que responda más rápido a los exploits de seguridad, las tecnologías emergentes y los requisitos cambiantes de los clientes.
Nota
Antes de 2019, CentOS Linux era una distribución gratuita y sin soporte, creada por la comunidad a partir del código fuente de Red Hat después de cada lanzamiento importante de RHEL. Aunque la comunidad de CentOS disfrutó de tener un clon de RHEL disponible gratuitamente, este modelo tenía desventajas. Comúnmente, las contribuciones de los desarrolladores a CentOS Linux no se retroportaron a Fedora o RHEL sin un considerable esfuerzo duplicado. Además, se produjeron retrasos significativos entre una versión de RHEL y su compilación de distribución de CentOS correspondiente, con un retraso similar para las correcciones críticas de seguridad, controladores y ajustes de RHEL. Red Hat cambió al modelo CentOS Stream para abordar estos problemas.
Un beneficio de CentOS Stream es que, como fuente para el desarrollo de RHEL, está disponible en las mismas arquitecturas que RHEL, incluidas Intel/AMD x86_64, ARM64, IBM Power e IBM Z.
Muchas organizaciones tecnológicas innovadoras han demostrado que CentOS Stream es un reemplazo viable para el CentOS Linux original. CentOS Stream se puede descargar e instalar gratuitamente para muchos casos de uso, incluido el desarrollo y la producción ligera. Para los usuarios de la comunidad con casos de uso que no son adecuados para una distribución entregada continuamente con versiones de parches asíncronas, Red Hat proporciona suscripciones individuales gratuitas para desarrolladores de RHEL para uso a pequeña escala, como demostraciones, creación de prototipos, control de calidad y producción limitada.
Red Hat Enterprise Linux
Red Hat Enterprise Linux (RHEL) es la distribución de Linux de Red Hat lista para producción y con soporte comercial. En la industria informática, RHEL es reconocida como la plataforma líder para la computación de código abierto. RHEL se ha probado exhaustivamente y cuenta con un ecosistema mundial de socios de soporte para certificaciones de hardware y software, servicios de consultoría, capacitación y garantías de soporte y mantenimiento de varios años.
Red Hat crea versiones principales de RHEL directamente desde el proyecto de desarrollo continuo CentOS Stream, que proviene de Fedora. A diferencia del modelo de desarrollo anterior de RHEL, las versiones se construyeron internamente con menos transparencia y la fuente se proporcionó solo para compilar como CentOS Linux después de la versión de RHEL. Ahora el nuevo modelo de desarrollo de CentOS Stream está abierto y disponible para todos, para comentarios y contribuciones, y el código está preparado para ser la próxima versión importante de RHEL.
RHEL utiliza un modelo de soporte basado en suscripción y no cobra tarifas de licencia por software de código abierto. Las suscripciones de soporte de Red Hat proporcionan soporte de productos, mantenimiento, actualizaciones, parches de seguridad y acceso a la base de conocimientos del portal del cliente, utilidades y versiones descargables de los productos de Red Hat.
En la siguiente tabla se enumeran algunas diferencias clave entre Fedora, CentOS Stream y RHEL.
 	Fedora	Flujo de CentOS	RHEL
Ciclo de vida esperado	12-18 meses	5 años	10 años
Certificado por el proveedor de software	No	Por lo general, no	Sí
Documentación proporcionada por	Comunidad	Comunidad	Red Hat
Soporte experto disponible	No	No	Sí
Equipo de seguridad de productos	No	No	Sí
Certificaciones de seguridad	No	No	Sí
Opciones sin costo	Sí	Sí	Sí
Herramientas de gestión	No	No	Sí
RHEL para Edge
RHEL para Edge es una variante basada en imágenes de RHEL, con un mecanismo de implementación diferente. RHEL proporciona la capacidad de crear imágenes de sistema operativo especialmente diseñadas a través de una herramienta llamada Image Builder. Con este mecanismo, los equipos de TI pueden crear, implementar y mantener estas imágenes de RHEL en menos tiempo durante la vida útil del sistema. Las implementaciones basadas en imágenes están optimizadas para varias arquitecturas perimetrales, pero se pueden personalizar para implementaciones perimetrales específicas.
Las características de Edge en RHEL incluyen capacidades de escalado y administración seguras, incluido el aprovisionamiento sin intervención, la visibilidad del estado del sistema y las correcciones de seguridad rápidas desde una sola interfaz.
Red Hat CoreOS
RHEL CoreOS (RHCOS) no es un sistema operativo independiente, sino que se crea a partir de componentes de RHEL y, a continuación, se lanza, actualiza y gestiona como parte de Red Hat OpenShift Container Platform (RHOCP) para aplicaciones nativas de la nube. RHCOS es fundamentalmente un host de contenedor RHEL basado en imágenes, que utiliza el motor de contenedor compatible con Container Runtime Interface (CRI-O) que está integrado en RHOCP. Para obtener más información sobre Red Hat CoreOS, comience por familiarizarse con OpenShift y los contenedores.
Imagen de la base universal de Red Hat
Una imagen base universal de Red Hat (UBI) es esencialmente un derivado libremente redistribuible de RHEL. UBI está diseñado para ser una base para casos de uso de aplicaciones web y nativas de la nube que se desarrollan en contenedores. Todo el contenido de UBI es un subconjunto de RHEL, con paquetes procedentes de canales seguros de RHEL, y UBI se admite de manera similar a RHEL cuando se ejecuta en plataformas compatibles con Red Hat, como OpenShift y hosts RHEL.
Con UBI, los desarrolladores pueden centrar sus esfuerzos en su aplicación en la imagen del contenedor. UBI es un conjunto de imágenes base y un conjunto de imágenes de aplicación (como python, ruby, node.js, httpd o nginx). UBI también consta de un conjunto de repositorios RPM, desde los cuales puede actualizar cualquier imagen base de UBI para incluir las dependencias de paquetes que requiere su aplicación.
Desarrollo continuo de Red Hat Enterprise Linux
En la comunidad upstream de Fedora, Fedora Rawhide es el entorno de desarrollo continuo para una cadencia regular de lanzamientos públicos de Fedora. La comunidad prueba y prepara nuevas versiones del kernel de Linux, controladores de dispositivos, utilidades y aplicaciones para la próxima distribución de Fedora. El desarrollo de la versión principal de RHEL comienza con la selección de la última versión de Fedora como base para la distribución de desarrollo continuo actual de CentOS Stream.
Antes de que un paquete se introduzca formalmente en CentOS Stream, se somete a pruebas rigurosas para cumplir con los estándares de los paquetes que se incluirán en RHEL. Las actualizaciones que se publican en CentOS Stream son las mismas que las actualizaciones que se publican en la versión secundaria no publicada de RHEL en desarrollo.
 
Figura 1.2: Desarrollo continuo de Red Hat Enterprise Linux
Como se muestra en la figura, Fedora 34 es la base de código original para RHEL 9 y para CentOS Stream 9. A medida que se actualizan los paquetes, se insertan en CentOS Stream y en la compilación nocturna de RHEL. Las líneas continuas indican distribuciones o compilaciones que están disponibles para uso público.
Similar a la relación entre Fedora Rawhide y Fedora, CentOS Stream es el entorno de desarrollo continuo para preparar la próxima versión secundaria de RHEL. Red Hat realiza extensas pruebas de hardware, integración, dependencia y rendimiento antes de lanzar la próxima distribución pública de RHEL.
Obtención de Red Hat Enterprise Linux
Red Hat Enterprise Linux generalmente se obtiene con una suscripción de soporte paga, y Red Hat ofrece múltiples formas de obtener RHEL y otros productos del ecosistema RHEL, muchos sin costo.
●	Fedora Linux y los derivados están disponibles gratuitamente en el proyecto Fedora en https:// getfedora.org/, incluida una versión emergente de Fedora CoreOS.
●	EPEL y EPEL Siguiente los paquetes están disponibles gratuitamente en los repositorios del proyecto EPEL. Aprenda a usar EPEL en https://docs.fedoraproject.org/en-US/epel/.
●	Flujo de CentOS está disponible gratuitamente en https://www.centos.org/centos-stream/.
Descarga de evaluación de RHEL
Una copia de evaluación de RHEL está disponible en https://access.redhat.com/products/red-hat-enterprise-linux/evaluation. Debe tener una cuenta (gratuita) en el Portal del cliente para https:// access.redhat.com acceder y descargar productos de evaluación. Las evaluaciones de productos le dan derecho a recibir actualizaciones y soporte durante un período limitado. El soporte finaliza cuando finaliza el período de evaluación, pero el software de evaluación continúa funcionando. Encontrará información adicional sobre muchas evaluaciones de productos en las páginas de evaluación del Portal del cliente.
Suscripción de desarrollador de Red Hat
Red Hat ofrece una suscripción disponible gratuitamente para muchos productos a través del Red Hat Developer Program en https://developer.redhat.com. Con una suscripción para desarrolladores, los desarrolladores pueden crear, crear prototipos, probar y demostrar rápidamente sus aplicaciones en el mismo software de Red Hat que en los sistemas de producción. Cree una cuenta personal en https://access.redhat.com y, a continuación, regístrese en el programa para desarrolladores. Puede usar una cuenta personal existente, pero no use una cuenta que ya esté asociada con la suscripción de soporte técnico de ninguna organización. La suscripción de desarrollador es autosuficiente, pero proporciona actualizaciones continuas del producto. Red Hat recomienda que las personas que deseen adquirir experiencia con RHEL y los productos para desarrolladores se unan al Programa para desarrolladores.
Plataformas de nube pública
Los principales proveedores de nube pública de hiperescala, como Amazon Web Services, Google Cloud Platform y Microsoft Azure, ofrecen imágenes oficiales para implementar instancias de Red Hat Enterprise Linux, con administración de suscripciones desde el servicio Red Hat Cloud Access. Las suscripciones con derecho completo para los productos de RHEL y Red Hat están disponibles a través del proveedor de la nube y son portátiles en nubes híbridas y de múltiples proveedores.
Recipientes
Puede utilizar las imágenes base universales de Red Hat y el contenido asociado para el desarrollo y la implementación sin una suscripción a Red Hat. Para el soporte operativo y el acceso a herramientas que no son UBI, los contenedores que se basan en UBI deben implementarse en una plataforma compatible con Red Hat, como OpenShift o Red Hat Enterprise Linux. El acceso a contenido que no es UBI requiere una suscripción a Red Hat.
Referencias
Introducción a Red Hat Enterprise Linux
Suscripción gratuita para desarrolladores individuales de Red Hat Enterprise Linux: preguntas frecuentes
El camino de código abierto
Fedora
Imágenes de Red Hat Universal Base
Acceso a Red Hat Cloud
Resumen
●	El software de código abierto tiene un código fuente que cualquiera puede usar, estudiar, modificar y compartir libremente.
●	Una distribución de Linux es un sistema operativo instalable que se construye a partir de un kernel de Linux y que admite programas y bibliotecas de usuario.
●	Red Hat participa en el soporte y la contribución de código a proyectos de código abierto; patrocina e integra el software del proyecto en distribuciones impulsadas por la comunidad; y estabiliza el software para ofrecerlo como productos compatibles listos para la empresa.
●	Red Hat Enterprise Linux es la distribución de Linux de código abierto, lista para la empresa y con soporte comercial que proporciona Red Hat.
●	Una suscripción gratuita de Red Hat Developer es un método útil para obtener recursos e información de aprendizaje, incluidas las suscripciones de desarrollador a Red Hat Enterprise Linux y otros productos de Red Hat.
Capítulo 2. Acceder a la línea de comandos
Acceder a la línea de comandos
Cuestionario: Acceder a la línea de comandos
Acceder a la línea de comandos con el escritorio
Ejercicio guiado: Acceso a la línea de comandos con el escritorio
Ejecutar comandos con el shell de Bash
Cuestionario: Ejecutar comandos con el shell de Bash
Laboratorio: Acceso a la línea de comandos
Resumen
Abstracto
Gol	Inicie sesión en un sistema Linux y ejecute comandos simples desde el shell.
Objetivos	●	
Inicie sesión en un sistema Linux y ejecute comandos simples desde el shell.
●	Inicie sesión en el sistema Linux con el entorno de escritorio GNOME para ejecutar comandos desde un indicador de shell en un programa de terminal.
●	Ahorre tiempo al ejecutar comandos desde un símbolo del sistema de shell con atajos de Bash.
Secciones	●	
Acceder a la línea de comandos (y al cuestionario)
●	Acceder a la línea de comandos con el escritorio (y ejercicio guiado)
●	Ejecutar comandos con el shell de Bash (y el cuestionario)
Laboratorio	●	
Acceder a la línea de comandos
Acceder a la línea de comandos
Objetivos
●	Inicie sesión en un sistema Linux y ejecute comandos simples con el shell.
Introducción al Bash Shell
Un Línea de comandos es una interfaz basada en texto que se utiliza para ingresar instrucciones a un sistema informático. La línea de comandos de Linux es proporcionada por un programa llamado cáscara. A lo largo de los años se han desarrollado muchas variantes del programa de caparazones. Cada usuario puede usar un shell diferente, pero Red Hat recomienda usar el shell predeterminado para la administración del sistema.
El shell de usuario predeterminado en Red Hat Enterprise Linux (RHEL) es el (). El shell es una versión mejorada del original () en sistemas UNIX.GNU Bourne-Again ShellbashbashBourne Shellsh
El shell muestra una cadena cuando está esperando la entrada del usuario, llamada Indicador de shell. Cuando un usuario normal inicia un shell, el mensaje incluye un carácter de dólar () final:$
[user@host ~]$
Un carácter hash () reemplaza al carácter dólar () cuando el shell se ejecuta como superusuario, . Este carácter indica que se trata de un shell de superusuario, lo que ayuda a evitar errores que pueden afectar a todo el sistema.#$root
[root@host ~]#
Usar para ejecutar comandos puede ser poderoso. El shell proporciona un lenguaje de secuencias de comandos que puede admitir la automatización de tareas. El shell tiene capacidades que pueden habilitar o simplificar operaciones que son difíciles de lograr a escala con herramientas gráficas.bashbash
Nota
El shell es conceptualmente similar al intérprete de línea de comandos de Microsoft Windows. Sin embargo, tiene un lenguaje de scripting sofisticado y es más similar a Windows PowerShell.bashcmd.exebash
En macOS, el shell era el shell predeterminado antes de macOS 10.15 Catalina. A partir de macOS 10.15 Catalina, Apple cambió el shell predeterminado a shell, un shell alternativo que también está disponible en RHEL.bashzsh
Conceptos básicos de Shell
Los comandos que se introducen en el indicador de shell tienen tres partes básicas:
●	Mandar Correr.
●	Opciones para ajustar el comportamiento del comando.
●	Argumentos, que suelen ser objetivos del comando.
El comando es el nombre del programa que se va a ejecutar. Puede ir seguido de una o más opciones, que ajustan el comportamiento del comando o lo que hace. Las opciones normalmente comienzan con uno o dos guiones (o , por ejemplo) para distinguirlas de los argumentos. Los comandos también pueden ir seguidos de uno o más argumentos, que a menudo indican un destino en el que debe operar el comando.-a--all
Por ejemplo, en la cadena, está el comando, es la opción y es el argumento. Este comando bloquea la contraseña de la cuenta de usuario.usermod -L user01usermod-Luser01user01
Inicie sesión en un sistema local
Un terminal es una interfaz basada en texto para ingresar comandos e imprimir la salida desde un sistema informático. Para ejecutar el shell, debe iniciar sesión en la computadora en una terminal.
Un teclado de hardware y una pantalla para entrada y salida pueden estar conectados directamente a la computadora. Este es el consola física desde la máquina Linux. La consola física admite múltiples Consolas virtuales, que puede ejecutarse en terminales independientes. Cada consola virtual admite una sesión de inicio de sesión independiente. Puede cambiar entre las consolas virtuales presionando Ctrl+Alt y una tecla de función (F1 a F6) al mismo tiempo. La mayoría de estas consolas virtuales ejecutan un terminal que proporciona un mensaje de inicio de sesión de texto. Si ingresa su nombre de usuario y contraseña correctamente, inicia sesión y recibe un mensaje de shell.
El equipo puede proporcionar un mensaje gráfico de inicio de sesión en una de las consolas virtuales. Puede usar el indicador gráfico de inicio de sesión para iniciar sesión en un Entorno gráfico. El entorno gráfico también se ejecuta en una consola virtual. Para obtener un indicador de shell, debe iniciar un programa de terminal en el entorno gráfico. El indicador de shell se proporciona en una ventana de aplicación de su programa de terminal gráfico.
Nota
Muchos administradores de sistemas optan por no ejecutar un entorno gráfico en sus servidores, ya que los usuarios no inician sesión en los servidores como un área de trabajo de escritorio. La carga de trabajo de un servidor puede utilizar de forma más eficaz los recursos significativos que utiliza un entorno gráfico.
En Red Hat Enterprise Linux 9, si el entorno gráfico está disponible, la pantalla de inicio de sesión se ejecuta en la primera consola virtual, que se denomina . Hay cinco mensajes de inicio de sesión de texto adicionales disponibles en las consolas virtuales dos () a seis ().tty1tty2tty6
El entorno gráfico se inicia en la primera consola virtual que no está utilizando actualmente una sesión de inicio de sesión. Normalmente, su sesión gráfica reemplaza el mensaje de inicio de sesión en la segunda consola virtual (). Sin embargo, si una sesión de inicio de sesión de texto activa (no solo un mensaje de inicio de sesión) está usando esa consola, entonces se usa la siguiente consola virtual gratuita en su lugar.tty2
La pantalla gráfica de inicio de sesión continúa ejecutándose en la primera consola virtual (). Si ya ha iniciado sesión en una sesión gráfica y cambia a otro usuario en el entorno gráfico sin cerrar sesión, se inicia otro entorno gráfico para ese usuario en la siguiente consola virtual disponible.tty1
Cuando cierra sesión en un entorno gráfico, sale de la consola virtual y la consola física vuelve automáticamente a la pantalla de inicio de sesión gráfico en la primera consola virtual.
Nota
En Red Hat Enterprise Linux 6 y 7, la pantalla gráfica de inicio de sesión se ejecuta en la primera consola virtual, pero cuando inicia sesión, su entorno gráfico inicial Reemplaza la pantalla de inicio de sesión en la primera consola virtual en lugar de comenzar en una nueva consola virtual. En Red Hat Enterprise Linux 8, el comportamiento es el mismo que en Red Hat Enterprise Linux 9.
Un servidor sin cabeza no tiene un teclado y una pantalla que estén permanentemente conectados a él. Un centro de datos puede estar lleno de muchos racks de servidores sin periféricos, y no proporcionar a cada uno un teclado y una pantalla ahorra espacio y gastos. Para que los administradores inicien sesión, su solicitud de inicio de sesión para un servidor sin encabezado puede ser proporcionado por su Consola serie, que se ejecuta en un puerto serie que está conectado a un servidor de consola en red para acceso remoto.
La consola serie se usa normalmente para acceder al servidor si la tarjeta de red del servidor se configura incorrectamente y el registro en el servidor a través de la conexión de red convencional se vuelve imposible. La mayoría de las veces, sin embargo, se accede a los servidores sin periféricos por otros medios a través de la red, por ejemplo, mediante el uso de Virtual Network Computing (VNC) para ejecutar una interfaz gráfica en la máquina de destino.
Inicie sesión en un sistema remoto
Los usuarios y administradores de Linux a menudo necesitan obtener acceso de shell a un sistema remoto conectándose a él a través de la red. En un entorno informático moderno, muchos servidores sin periféricos son máquinas virtuales o se ejecutan como instancias de nube pública o privada. Estos sistemas no son físicos y no tienen consolas de hardware reales. Es posible que ni siquiera proporcionen acceso a su consola física (simulada) o consola serie.
En Linux, la forma más común de obtener un indicador de shell en un sistema remoto es usar Secure Shell (SSH). La mayoría de los sistemas Linux (incluido Red Hat Enterprise Linux) y macOS proporcionan el programa de línea de comandos para este propósito.OpenSSHssh
En este ejemplo, un usuario con un indicador de shell en la máquina utiliza para iniciar sesión en el sistema Linux remoto como usuario:hostsshremotehostremoteuser
[user@host ~]$ ssh remoteuser@remotehost
remoteuser@remotehost's password: password
[remoteuser@remotehost ~]$
El comando cifra la conexión para proteger la comunicación contra escuchas o secuestros de contraseñas y contenido.ssh
Algunos sistemas, como las nuevas instancias en la nube, para una mayor seguridad no permiten a los usuarios usar una contraseña para iniciar sesión con . Una forma alternativa de autenticarse en una máquina remota sin ingresar una contraseña es a través de sshautenticación de clave pública.
Con este método de autenticación, los usuarios tienen un archivo de identidad especial con un Clave privada, que equivale a una contraseña, y que mantienen en secreto. Su cuenta en el servidor está configurada con un clave pública, que no tiene por qué ser secreta. Al iniciar sesión, los usuarios pueden configurar para proporcionar la clave privada. Si su clave pública coincidente está instalada en esa cuenta en ese servidor remoto, inicia sesión en el usuario sin solicitar una contraseña.ssh
En el siguiente ejemplo, un usuario con un indicador de shell en la máquina inicia sesión en como con , mediante el método de autenticación de clave pública. La opción de comando se usa para especificar el archivo de clave privada del usuario, que es . La clave pública coincidente ya está configurada como clave autorizada en la cuenta.hostremotehostremoteusersshssh-imylab.pemremoteuser
[user@host ~]$ ssh -i mylab.pem remoteuser@remotehost
[remoteuser@remotehost ~]$
Para que la conexión funcione, solo el usuario propietario del archivo puede tener acceso para leer el archivo de clave privada. En el ejemplo anterior, donde la clave privada está en el archivo, puede usar el comando para asegurarse de que solo el propietario pueda leer el archivo. Cómo establecer permisos de archivo se analiza con más detalle en un capítulo posterior.mylab.pemchmod 600 mylab.pem
Es posible que los usuarios también hayan configurado claves privadas que se prueban automáticamente, pero esa explicación está fuera del alcance de esta sección. Las referencias al final de esta sección contienen vínculos a más información sobre este tema.
Nota
Cuando inicia sesión por primera vez en una nueva máquina, se le solicita una advertencia de que no puede establecer la autenticidad del host:ssh
[user@host ~]$ ssh -i mylab.pem remoteuser@remotehost
The authenticity of host 'remotehost (192.0.2.42)' can't be established.
ECDSA key fingerprint is 47:bf:82:cd:fa:68:06:ee:d8:83:03:1a:bb:29:14:a3.
Are you sure you want to continue connecting (yes/no)? yes
[remoteuser@remotehost ~]$
Cada vez que se conecta a un host remoto con , el host remoto envía su sshClave de host para autenticarse y ayudar a configurar la comunicación cifrada. El comando compara la clave de host con una lista de claves de host guardadas para asegurarse de que no se modifica. Si la clave de host cambió, podría indicar que alguien está tratando de fingir ser ese host para secuestrar la conexión, lo que también se conoce como ataque interceptor. En SSH, las claves de host protegen contra ataques de interceptores; Estas claves de host son únicas para cada servidor; y deben cambiarse periódicamente y cada vez que se sospeche un compromiso.ssh
Recibe esta advertencia cuando el equipo local no tiene una clave de host guardada para el host remoto. Si ingresa , la clave de host que envió el host remoto se acepta y se guarda para referencia futura. El proceso de inicio de sesión continúa y no debería volver a ver este mensaje al conectarse a este host. Si ingresa , la clave de host se rechaza y la conexión se cierra.yesno
Si la máquina local tiene una clave de host guardada y no coincide con la que envió el host remoto, la conexión se cierra automáticamente con una advertencia.
Cerrar sesión desde un sistema remoto
Cuando haya terminado con el shell y desee salir, puede elegir una de varias formas de finalizar la sesión. Puede introducir el comando para finalizar la sesión de shell actual. Alternativamente, finalice una sesión presionando Ctrl+D.exit
En el ejemplo siguiente se muestra un usuario que cierra sesión en una sesión SSH:
[remoteuser@remotehost ~]$ exit
logout
Connection to remotehost closed.
[user@host ~]$
Referencias
intro(1), (1), (4), (1) y (1) páginas de manualbashptssshssh-keygen
Para obtener más información sobre OpenSSH y la autenticación de clave pública, consulte la Uso de comunicaciones seguras entre dos sistemas con OpenSSH capítulo en el Red Hat Enterprise Linux 9 protege las redes Guía en https://access.redhat.com/documentation/en-us/red_hat_enterprise_linux/9/html-single/securing_networks/index
Las instrucciones sobre cómo leer páginas y otra documentación de ayuda en línea se incluyen en el próximo capítulo.man
Acceder a la línea de comandos con el escritorio
Objetivos
●	Inicie sesión en el sistema Linux con el entorno de escritorio GNOME para ejecutar comandos desde un indicador de shell en un programa de terminal.
Introducción al entorno de escritorio GNOME
El Entorno de escritorio es la interfaz gráfica de usuario en un sistema Linux. es el entorno de escritorio predeterminado en Red Hat Enterprise Linux 9. Proporciona un escritorio integrado para los usuarios y una plataforma de desarrollo unificada sobre un marco gráfico que proporciona (de forma predeterminada) o heredada.GNOME 40WaylandX Window System
GNOME Shell proporciona las funciones básicas de la interfaz de usuario para el entorno de escritorio GNOME. La aplicación GNOME Shell es altamente personalizable. Red Hat Enterprise Linux 9 establece por defecto la apariencia de GNOME Shell en el tema "Estándar", que se utiliza en esta sección. Puede usar por defecto un tema "Clásico" alternativo, que está más cerca de la apariencia de versiones anteriores de GNOME, y que se usa en versiones anteriores de RHEL. Puede seleccionar cualquiera de los temas de forma persistente al iniciar sesión haciendo clic en el icono de engranaje junto al botón Iniciar sesión. El ícono de ajustes está disponible después de seleccionar su cuenta, pero antes de ingresar su contraseña.
 
Figura 2.1: Pantalla de inicio de sesión de RHEL 9
La primera vez que inicie sesión como nuevo usuario, puede realizar un programa inicial opcional "Realizar recorrido" para obtener información sobre las nuevas características de RHEL 9. Después de completarlo u omitirlo, aparece la pantalla principal de GNOME.
Para revisar la documentación en , haga clic en el botón Actividades en el lado izquierdo de la barra superior. En el tablero en la parte inferior de la pantalla, haga clic en el ícono del anillo para iniciarlo o coloque el mouse sobre el ícono.GNOME HelpHelp
Partes del shell de GNOME
Los elementos de GNOME Shell incluyen las siguientes partes, como se muestra en esta captura de pantalla de GNOME Shell en el modo de vista general de Actividades:
 
 	Barra superior: La barra que se extiende a lo largo de la parte superior de la pantalla. Se muestra en la descripción general de Actividades y en los espacios de trabajo. La barra superior proporciona el botón Actividades y los controles para el volumen, las redes, el acceso al calendario y el cambio entre los métodos de entrada del teclado (si se configura más de un método).
 	Resumen de actividades: Este modo ayuda a organizar ventanas e iniciar aplicaciones. Ingrese a la descripción general de actividades haciendo clic en el botón Actividades en la esquina superior izquierda de la barra superior o presionando la tecla Super. Busque la tecla Super (a veces llamada tecla de Windows o tecla Comando) cerca de la esquina inferior izquierda de los teclados más comunes. Las tres áreas principales son el tablero en la parte inferior de la pantalla, la vista general de ventanas en el centro y el selector de espacio de trabajo en el lado derecho.
 	Menú del sistema: El menú de la esquina superior derecha de la barra superior proporciona control para ajustar el brillo de la pantalla y activar o desactivar las conexiones de red. En el submenú del nombre del usuario hay opciones para ajustar la configuración de la cuenta y cerrar sesión en el sistema. El menú del sistema también ofrece botones para abrir la ventana Configuración, bloquear la pantalla o apagar el sistema.
 	Pizca: Esta lista configurable de iconos muestra sus aplicaciones favoritas, las aplicaciones en ejecución y un botón Mostrar aplicaciones para seleccionar aplicaciones arbitrarias. Inicie aplicaciones haciendo clic en un icono o utilizando el botón Mostrar aplicaciones para buscar aplicaciones menos utilizadas. El tablero también se llama muelle.
 	Información general de Windows: El área en el centro de la vista general de actividades que muestra miniaturas de ventanas activas en el espacio de trabajo actual, para llevar las ventanas al primer plano en un espacio de trabajo desordenado o moverlas a otro espacio de trabajo.
 	Selector de espacio de trabajo: Un área a la derecha, que muestra miniaturas de los espacios de trabajo activos y permite seleccionar espacios de trabajo y mover ventanas de un espacio de trabajo a otro.
 	Bandeja de mensajes: Con la bandeja de mensajes, puede revisar las notificaciones de aplicaciones o componentes del sistema. Si se produce una notificación, la notificación suele aparecer brevemente como una sola línea en la parte superior de la pantalla y aparece un indicador persistente en la barra superior junto al reloj para informarle de las notificaciones recibidas recientemente. Abra la bandeja de mensajes para revisar estas notificaciones haciendo clic en el reloj de la barra superior o pulsando Super+M. Cierre la bandeja de mensajes haciendo clic en el reloj de la barra superior o pulsando Esc o Super+M de nuevo. La bandeja de mensajes también muestra el calendario e información sobre los eventos del calendario.

 
Figura 2.2: Primer plano de una bandeja de mensajes abierta
Vea y edite los atajos de teclado de GNOME que usa su cuenta. Abra el menú del sistema en el lado derecho de la barra superior. Haga clic en el botón Configuración en la parte inferior del menú de la izquierda. En la ventana de la aplicación que se abre, seleccione Teclado en el panel izquierdo. El panel derecho muestra la configuración actual de los métodos abreviados en la sección Métodos abreviados de teclado → Personalizar métodos abreviados.
Nota
Algunos métodos abreviados de teclado, como las teclas de función o la tecla Super, pueden ser difíciles de enviar a una máquina virtual. Las pulsaciones de teclas especiales que usan esos accesos directos pueden ser capturadas por el sistema operativo local o por la aplicación que está utilizando para acceder al escritorio gráfico de la máquina virtual.
Importante
En los entornos actuales de capacitación virtual y capacitación a su propio ritmo proporcionados por Red Hat, el uso de la tecla Super puede ser complicado, ya que es posible que su navegador web no la pase a la máquina virtual en el entorno del aula.
En la parte superior de la ventana del explorador que muestra la interfaz de la máquina virtual, haga clic en el icono del teclado en el lado derecho. Se abre un teclado en pantalla. Haga clic en el icono nuevamente para cerrar el teclado en pantalla.
El teclado en pantalla trata Super como una tecla modificadora que a menudo se mantiene presionada mientras se presiona otra tecla. Si hace clic en él una vez, se vuelve amarillo para indicar que se está manteniendo presionada la tecla. Entonces, por ejemplo, para ingresar Super+M en el teclado en pantalla, puede hacer clic en Super y luego hacer clic en M.
Para presionar y soltar Super en el teclado en pantalla, haz clic en él dos veces. El primer clic mantiene presionada la tecla Super y el segundo clic la libera.
Las otras teclas que el teclado en pantalla trata como teclas modificadoras (como Super) son Mayús, Ctrl, Alt y Mayúsculas. Las teclas Esc y Menú se tratan como teclas normales y no teclas modificadoras.
Acceder a espacios de trabajo
Espacios de trabajo son pantallas de escritorio independientes que tienen diferentes ventanas de aplicación. Puede usar espacios de trabajo para organizar el entorno de trabajo agrupando las ventanas de aplicaciones abiertas por tarea. Por ejemplo, puede agrupar ventanas para una actividad de mantenimiento del sistema determinada (como configurar un nuevo servidor remoto) en un espacio de trabajo, y puede agrupar el correo electrónico y otras aplicaciones de comunicación en otro espacio de trabajo.
Elija entre dos métodos para cambiar entre espacios de trabajo. El primer método consiste en pulsar Ctrl+Alt+Flecha izquierda o Ctrl+Alt+Flecha derecha para cambiar entre espacios de trabajo secuencialmente. La segunda es cambiar a la descripción general de Actividades y hacer clic en el espacio de trabajo elegido.
Una ventaja de usar la vista general de actividades es que puede hacer clic y arrastrar ventanas entre espacios de trabajo mediante el selector de espacio de trabajo en el lado derecho de la pantalla y la vista general de ventanas en el centro de la pantalla.
Importante
Al igual que Super, en los entornos actuales de capacitación virtual y capacitación a su propio ritmo proporcionados por Red Hat, su navegador web generalmente no pasa combinaciones de teclas Ctrl + Alt a la máquina virtual en el entorno del aula.
Puede introducir estas combinaciones de teclas para cambiar de espacio de trabajo mediante el teclado en pantalla. Al menos dos espacios de trabajo deben estar en uso. Abra el teclado en pantalla y haga clic en Ctrl, Alt y, a continuación, en Flecha izquierda o Flecha derecha.
Sin embargo, en esos entornos de entrenamiento, generalmente es más sencillo evitar los atajos de teclado y el teclado en pantalla. Cambie los espacios de trabajo haciendo clic en el botón Actividades y, a continuación, en el selector de espacio de trabajo a la derecha de la descripción general de Actividades, haga clic en el espacio de trabajo al que desea cambiar.
Iniciar un terminal
Para obtener un indicador de shell en GNOME, inicie una aplicación de terminal gráfica como . Utilice uno de los siguientes métodos para iniciar un terminal:GNOME Terminal
●	En la descripción general de Actividades, seleccione en el tablero, ya sea en Favoritos o con el botón Mostrar aplicaciones.Terminal
●	Busque en el campo de búsqueda en la parte superior de la vista general de Windows.terminal
●	Presione la combinación de teclas Alt+F2 para abrir Enter a Command e ingrese .gnome-terminal
Al abrir una ventana de terminal, se muestra un indicador de shell para el usuario que inició el programa gráfico de terminal. El indicador de shell y la barra de título de la ventana de terminal indican el nombre de usuario, el nombre de host y el directorio de trabajo actuales.
Bloquear la pantalla y cerrar sesión
Bloquee la pantalla o cierre sesión por completo desde el menú del sistema en el extremo derecho de la barra superior.
Para bloquear la pantalla, desde el menú del sistema en la esquina superior derecha, haga clic en el botón de bloqueo en la parte inferior del menú o presione Super+L (que puede ser más fácil de recordar como Windows+L). La pantalla también se bloquea si la sesión gráfica está inactiva durante unos minutos.
Aparece una cortina de pantalla de bloqueo que muestra la hora del sistema y el nombre del usuario que ha iniciado sesión. Para desbloquear la pantalla, puede presionar Enter, Espacio o hacer clic con el botón izquierdo del mouse. Luego, ingrese la contraseña de ese usuario en la pantalla de bloqueo.
Para cerrar sesión y finalizar la sesión de inicio de sesión gráfica actual, seleccione el menú del sistema en la esquina superior derecha de la barra superior y seleccione Apagar/Cerrar sesión → Cerrar sesión. Se muestra una ventana que ofrece la opción de cancelar o confirmar la acción Cerrar sesión.
Apague o reinicie el sistema
Para apagar el sistema, en el menú del sistema en la esquina superior derecha, seleccione Apagar/Cerrar sesión → Apagar o presione Ctrl+Alt+Supr. Se muestra una ventana que ofrece la opción de cancelar o confirmar la acción de apagado. Si no realiza una elección, el sistema se apaga automáticamente después de 60 segundos.
Para reiniciar el sistema, en el menú del sistema en la esquina superior derecha, seleccione Apagar/Cerrar sesión → Reiniciar. Se muestra una ventana que ofrece la opción de Cancelar o confirmar la acción Reiniciar. Si no realiza una elección, el sistema se reinicia automáticamente después de 60 segundos.
Referencias
Ayuda de GNOME
●	yelp
Ayuda de GNOME: Descripción visual de GNOME
●	yelp help:gnome-help/shell-introduction
Página web de GNOME 40
Ejercicio guiado: Acceso a la línea de comandos con el escritorio
Inicie sesión a través del administrador de pantalla gráfica como usuario habitual para familiarizarse con el entorno de escritorio estándar de GNOME que proporciona GNOME 40.
Resultados
●	Inicie sesión en un sistema Linux utilizando el entorno de escritorio GNOME 40.
●	Ejecute comandos desde un indicador de shell en un programa de terminal.
Como usuario de la máquina, use el comando para preparar el sistema para este ejercicio.studentworkstationlab
Este comando prepara el entorno y garantiza que todos los recursos necesarios estén disponibles.
[student@workstation ~]$ lab start cli-desktop
Instrucciones
1.	Inicie sesión con la contraseña.workstationstudentstudent
	En , en la pantalla de inicio de sesión de GNOME, haga clic en la cuenta de usuario. Ingrese cuando se le solicite la contraseña.workstationstudentstudent
	Presione Enter.
2.	Cambie la contraseña de from a .studentstudent55TurnK3y
Importante
El script restablece la contraseña del usuario a . Debe ejecutar el script al final del ejercicio.finishstudentstudent
	Abra una ventana y use el comando en el símbolo del sistema de shell.Terminalpasswd
En el entorno de aprendizaje virtual con un teclado visual, presione la tecla Super dos veces para ingresar a la descripción general de Actividades. Escriba terminal y luego presione Enter para iniciar Terminal.
En la ventana que se abre, escriba en el indicador de shell. Cambie la contraseña de a .Terminalpasswdstudentstudent55TurnK3y
[student@workstation ~]$ passwd
Changing password for user student.
Current password: student
New password: 55TurnK3y
Retype new password: 55TurnK3y
	passwd: all authentication tokens updated successfully.
3.	Cierre la sesión y vuelva a iniciarla como con la contraseña para verificar la contraseña modificada.student55TurnK3y
	Haga clic en el menú del sistema en la esquina superior derecha.
	Seleccione Apagar/Cerrar sesión → Cerrar sesión.
	Haga clic en Cerrar sesión en el cuadro de diálogo de confirmación que se muestra.
	En la pantalla de inicio de sesión de GNOME, haga clic en la cuenta de usuario. Ingrese cuando se le solicite la contraseña.student55TurnK3y
	Presione Enter.
4.	Bloquea la pantalla.
	En el menú del sistema en la esquina superior derecha, presione el botón Bloquear.
5.	Desbloquea la pantalla.
	Presione Enter para desbloquear la pantalla.
	En el campo Contraseña, introdúzcala como contraseña.55TurnK3y
	Presione Enter.
6.	Determine cómo apagar desde la interfaz gráfica, pero cancele la operación sin apagar el sistema.workstation
	En el menú del sistema en la esquina superior derecha, seleccione Apagar/Cerrar sesión → Apagar. Se muestra un cuadro de diálogo con las opciones para Cancelar o Apagar la máquina.
	Haga clic en Cancelar en el cuadro de diálogo que se muestra.
Terminar
En la máquina, cambie al directorio principal del usuario y utilice el comando para completar este ejercicio. Este paso es importante para garantizar que los recursos de ejercicios anteriores no afecten los próximos ejercicios.workstationstudentlab
[student@workstation ~]$ lab finish cli-desktop
Ejecutar comandos con el shell de Bash
Objetivos
●	Ahorre tiempo al ejecutar comandos desde un símbolo del sistema de shell con atajos de Bash.
Sintaxis básica de comandos
El () es un programa que interpreta los comandos que escribe el usuario. Cada cadena que se escribe en el shell puede tener hasta tres partes: el comando, las opciones (que generalmente comienzan con un guión o caracteres de guión doble) y los argumentos. Cada palabra que se escribe en el shell está separada de otras palabras con espacios. Los comandos son los nombres de los programas que están instalados en el sistema. Cada comando tiene sus opciones y argumentos.GNU Bourne-Again Shellbash---
Cuando esté listo para ejecutar un comando, presione la tecla Enter. Escriba cada comando en una línea independiente. El resultado del comando se muestra antes de que aparezca el siguiente símbolo del sistema de shell.
[user@host ~]$ whoami
user
[user@host ~]$
Para escribir más de un comando en una sola línea, use el punto y coma (;) como separador de comandos. Un punto y coma es miembro de una clase de caracteres llamados metacaracteres que tienen una interpretación especial para . En este caso, la salida de ambos comandos se muestra antes de que aparezca el siguiente indicador de shell.bash
En el ejemplo siguiente se muestra cómo combinar dos comandos ( y ) en la línea de comandos.command1command2
[user@host ~]$ command1 ; command2
command1 output
command2 output
[user@host ~]$
Escribir comandos simples
El comando muestra la fecha y hora actuales. El superusuario o un usuario privilegiado también puede usar el comando para configurar el reloj del sistema. Utilice el signo más () como argumento para especificar una cadena de formato para el comando date.datedate+
[user@host ~]$ date
Sun Feb 27 08:32:42 PM EST 2022
[user@host ~]$ date +%R
20:33
[user@host ~]$ date +%x
02/27/2022
El comando sin opciones cambia la contraseña del usuario actual. Para cambiar la contraseña, primero especifique la contraseña original de la cuenta. De forma predeterminada, el comando está configurado para requerir una contraseña segura, para que conste de letras minúsculas, letras mayúsculas, números y símbolos, y no para basarse en una palabra del diccionario. Un superusuario o usuario privilegiado puede usar el comando para cambiar la contraseña de otro usuario.passwdpasswdpasswd
[user@host ~]$ passwd
Changing password for user user.
Current password: old_password
New password: new_password
Retype new password: new_password
passwd: all authentication tokens updated successfully.
Linux no requiere extensiones de nombre de archivo para clasificar los archivos por tipo. El comando escanea el encabezado compilado de un archivo en busca de un dígito de 2 dígitos y muestra su tipo. Los archivos de texto se reconocen porque no se compilan.filemagic number
[user@host ~]$ file /etc/passwd
/etc/passwd: ASCII text
[user@host ~]$ file /bin/passwd
/bin/passwd: setuid ELF 64-bit LSB pie executable, x86-64, version 1 (SYSV), dynamically linked, interpreter /lib64/ld-linux-x86-64.so.2, BuildID[sha1]=a467cb9c8fa7306d41b96a820b0178f3a9c66055, for GNU/Linux 3.2.0, stripped
[user@host ~]$ file /home
/home: directory
Ver el contenido de los archivos
El comando se usa a menudo en Linux. Utilice este comando para crear uno o varios archivos, ver el contenido de los archivos, concatenar el contenido de varios archivos y redirigir el contenido del archivo a un terminal o a archivos.cat
En el ejemplo siguiente se muestra cómo ver el contenido del archivo:/etc/passwd
[user@host ~]$ cat /etc/passwd
root:x:0:0:root:/root:/bin/bash
bin:x:1:1:bin:/bin:/sbin/nologin
daemon:x:2:2:daemon:/sbin:/sbin/nologin
adm:x:3:4:adm:/var/adm:/sbin/nologin
...output omitted...
Para mostrar el contenido de varios archivos, agregue los nombres de archivo al comando como argumentos:cat
[user@host ~]$ cat file1 file2
Hello World!!
Introduction to Linux commands.
Algunos archivos son largos y pueden necesitar más espacio para mostrarse del que proporciona el terminal. El comando no muestra el contenido de un archivo como páginas. El comando muestra una página de un archivo a la vez y puede desplazarse cuando lo desee.catless
Utilice el comando para avanzar y retroceder a través de archivos más largos de los que caben en una ventana de terminal. Use la tecla Flecha arriba y la tecla Flecha abajo para desplazarse hacia arriba y hacia abajo. Presione q para salir del comando.less
Los comandos y muestran el principio y el final de un archivo, respectivamente. De forma predeterminada, estos comandos muestran 10 líneas del archivo, pero ambos tienen la opción de especificar un número diferente de líneas.headtail-n
[user@host ~]$ head /etc/passwd
root:x:0:0:root:/root:/bin/bash
bin:x:1:1:bin:/bin:/sbin/nologin
daemon:x:2:2:daemon:/sbin:/sbin/nologin
adm:x:3:4:adm:/var/adm:/sbin/nologin
lp:x:4:7:lp:/var/spool/lpd:/sbin/nologin
sync:x:5:0:sync:/sbin:/bin/sync
shutdown:x:6:0:shutdown:/sbin:/sbin/shutdown
halt:x:7:0:halt:/sbin:/sbin/halt
mail:x:8:12:mail:/var/spool/mail:/sbin/nologin
operator:x:11:0:operator:/root:/sbin/nologin
[user@host ~]$ tail -n 3 /etc/passwd
gdm:x:42:42::/var/lib/gdm:/sbin/nologin
gnome-initial-setup:x:980:978::/run/gnome-initial-setup/:/sbin/nologin
dnsmasq:x:979:977:Dnsmasq DHCP and DNS server:/var/lib/dnsmasq:/sbin/nologin
El comando cuenta líneas, palabras y caracteres en un archivo. Utilice las opciones , , o para mostrar solo el número dado de líneas, palabras o caracteres, respectivamente.wc-l-w-c
[user@host ~]$ wc /etc/passwd
41   98 2338 /etc/passwd
[user@host ~]$ wc -l /etc/passwd ; wc -l /etc/group
41 /etc/passwd
63 /etc/group
[user@host ~]$ wc -c /etc/group /etc/hosts
883 /etc/group
114 /etc/hosts
997 total
Descripción de la finalización de tabulaciones
Con la finalización de pestañas, los usuarios pueden completar rápidamente comandos o nombres de archivos después de escribir lo suficiente en el indicador para que sea único. Si los caracteres escritos no son únicos, al presionar la tecla Tab dos veces se muestran todos los comandos que comienzan con los caracteres escritos.
[user@host ~]$ pasTab+Tab 
passwd       paste        pasuspender
[user@host ~]$ passTab  
[user@host ~]$ passwd
Changing password for user user.
Current password:
 	Presione Tab dos veces.
 	Presione Tab una vez.
La finalización de tabulación ayuda a completar los nombres de archivo al escribirlos como argumentos para los comandos. Presione Tab para completar la mayor parte posible del nombre del archivo. Al presionar Tab por segunda vez, el shell enumera todos los archivos con los que coincide el patrón actual. Escriba caracteres adicionales hasta que el nombre sea único y, a continuación, use la finalización de tabulación para completar el comando.
[user@host ~]$ ls /etc/pasTab  
[user@host ~]$ ls /etc/passwdTab  
passwd   passwd-
 	Presione Tab una vez.
 	Presione Tab una vez.
Utilice el comando para crear usuarios en el sistema. El comando tiene muchas opciones que pueden ser difíciles de recordar. Al completar la pestaña, puede completar el nombre de la opción con un mínimo de escritura.useradduseradd
[root@host ~]# useradd --Tab+Tab  
--badnames              --gid                   --no-log-init           --shell
--base-dir              --groups                --non-unique            --skel
--btrfs-subvolume-home  --help                  --no-user-group         --system
--comment               --home-dir              --password              --uid
--create-home           --inactive              --prefix                --user-group
--defaults              --key                   --root
--expiredate            --no-create-home        --selinux-user
 	Presione Tab dos veces.
Escribir un comando largo en varias líneas
Los comandos con muchas opciones y argumentos pueden volverse largos rápidamente y la ventana de comandos los ajusta automáticamente cuando el cursor alcanza el margen derecho. En su lugar, escriba un comando largo usando más de una línea para facilitar la lectura.
Para escribir un comando en más de una línea, use un carácter de barra invertida (), que se conoce como el \Carácter de escape. El carácter de barra invertida ignora el significado del siguiente carácter.
Anteriormente, aprendió que para completar una entrada de comando, presiona la tecla Entrar, el carácter de nueva línea. Al escapar del carácter de nueva línea, el shell se mueve a una nueva línea de comandos sin ejecutar el comando. De esta manera, el shell reconoce la solicitud mostrando un mensaje de continuación en una nueva línea vacía, que se conoce como el indicador secundario, y usa el carácter mayor que () de forma predeterminada. Los comandos pueden continuar en muchas líneas.>
Un problema con el uso del símbolo del sistema secundario del carácter mayor que () es que los nuevos estudiantes pueden insertarlo por error como parte del comando escrito. A continuación, el shell interpreta un carácter mayor que tipado como >Redirección de salida, que el usuario no pretendía. La redirección de salida se analiza en un próximo capítulo. Este libro de texto no muestra indicaciones secundarias en las salidas de pantalla, para evitar confusiones. Un usuario sigue viendo el mensaje secundario en su ventana de shell, pero el material del curso muestra intencionadamente solo los caracteres que se van a escribir, como se muestra en el siguiente ejemplo.
[user@host ~]$ head -n 3 \
/usr/share/dict/words \
/usr/share/dict/linux.words
==> /usr/share/dict/words <==
1080
10-point
10th

==> /usr/share/dict/linux.words <==
1080
10-point
10th
Mostrar el historial de comandos
El comando muestra una lista de comandos ejecutados anteriormente que tienen el prefijo de un número de comando.history
El carácter de signo de exclamación (!) es un metacarácter para expandir comandos anteriores sin volver a escribirlos. El comando se expande al comando que coincide con el número especificado. El comando se expande al comando más reciente que comienza con la cadena especificada.!number!string
[user@host ~]$ history
...output omitted...
   23  clear
   24  who
   25  pwd
   26  ls /etc
   27  uptime
   28  ls -l
   29  date
   30  history
[user@host ~]$ !ls
ls -l
total 0
drwxr-xr-x. 2 student student 6 Feb 27 19:24 Desktop
...output omitted...
[user@host ~]$ !26
ls /etc
abrt                     hosts                     pulse
adjtime                  hosts.allow               purple
aliases                  hosts.deny                qemu-ga
...output omitted...
Las teclas de flecha ayudan a navegar a través de comandos anteriores en el historial del shell. La flecha hacia arriba edita el comando anterior en la lista de historial. La flecha hacia abajo edita el siguiente comando de la lista de historial. LeftArrow y RightArrow mueven el cursor hacia la izquierda y hacia la derecha en el comando actual desde la lista de historial para que pueda editar el comando antes de ejecutarlo.
Utilice la combinación de teclas Esc+. o Alt+. simultáneamente para insertar la última palabra del comando anterior en la ubicación actual del cursor. El uso repetido de la combinación de teclas reemplaza ese texto con la última palabra de comandos anteriores en la historia. La combinación de teclas Alt+. es particularmente conveniente, ya que puede mantener presionada la tecla Alt y presionar . repetidamente para alternar rápidamente los comandos anteriores.
Editar la línea de comandos
Cuando se usa de forma interactiva, tiene una función de edición de línea de comandos. Utilice los comandos del editor de texto para desplazarse y modificar el comando escrito actualmente. El uso de las teclas de dirección para moverse dentro del comando actual y recorrer el historial de comandos se introdujo anteriormente en esta sección. En la tabla siguiente se muestran otros comandos de edición potentes.bash
Tabla 2.1. Accesos directos útiles para la edición de la línea de comandos
Atajo	Descripción
Ctrl+A	Vaya al principio de la línea de comandos.
Ctrl+E	Salta al final de la línea de comandos.
Ctrl+U	Desactive desde el cursor hasta el principio de la línea de comandos.
Ctrl+K	Desactive desde el cursor hasta el final de la línea de comandos.
Ctrl+Flecha izquierda	Salta al principio de la palabra anterior en la línea de comandos.
Ctrl+Flecha derecha	Salta al final de la siguiente palabra en la línea de comandos.
Ctrl+R	Busque un patrón en la lista de comandos del historial.

Estos comandos de edición de línea de comandos son los más útiles para los nuevos usuarios. Para otros comandos, consulte la página del comando man (1).bash
Referencias
bash(1), (1), (1), (1), (5), (1), (1), (1), (1), (1), (1) y (1) páginas de manualdatefilemagiccatmorelessheadpasswdtailwc
Laboratorio: Acceso a la línea de comandos
Use el shell de Bash para ejecutar comandos.
Resultados
●	Ejecute con éxito programas simples desde la línea de comandos del shell de Bash.
●	Ejecute comandos para identificar tipos de archivos y mostrar partes de archivos de texto.
●	Practique el uso de algunos atajos del historial de comandos de Bash para repetir comandos o partes de comandos de manera más eficiente.
Como usuario de la máquina, use el comando para preparar el sistema para este ejercicio.studentworkstationlab
Este comando prepara el entorno y garantiza que todos los recursos necesarios estén disponibles.
[student@workstation ~]$ lab start cli-review
Instrucciones
1.	Utilice el comando para mostrar la fecha y hora actuales.date
[student@workstation ~]$ date
2.	Mon Feb 28 01:57:25 PM PDT 2022
3.	Muestra la hora actual en hora de reloj de 24 horas (por ejemplo, 13:57). Sugerencia: La cadena de formato que muestra esa salida es .%R
Utilice el argumento con el comando para mostrar la hora actual en tiempo de reloj de 24 horas.+%Rdate
[student@workstation ~]$ date +%R
	13:58
4.	¿Qué tipo de archivo es? ¿Es legible por humanos?/home/student/zcat
Utilice el comando para determinar su tipo de archivo.file
[student@workstation ~]$ file zcat
	zcat: a /usr/bin/sh script, ASCII text executable
5.	Utilice los accesos directos de comando y Bash para mostrar el tamaño del archivo.wczcat
Puede utilizar el comando para mostrar el número de líneas, palabras y bytes del script. En lugar de volver a escribir el nombre del archivo, use el atajo del historial de Bash Esc+. (las teclas Esc y . presionadas al mismo tiempo) para reutilizar el argumento del comando anterior.wczcat
[student@workstation ~]$ wc Esc+.
[student@workstation ~]$ wc zcat
	  51  299 1988 zcat
6.	Muestra las primeras 10 líneas del archivo.zcat
El comando muestra el comienzo del archivo. Pruebe el atajo Esc+. de nuevo.head
[student@workstation ~]$ head Esc+.
[student@workstation ~]$ head zcat
#!/bin/sh
# Uncompress files to standard output.

# Copyright (C) 2007, 2010-2018 Free Software Foundation, Inc.

# This program is free software; you can redistribute it and/or modify
# it under the terms of the GNU General Public License as published by
# the Free Software Foundation; either version 3 of the License, or
	# (at your option) any later version.
7.	Muestra las últimas 10 líneas del archivo.zcat
Utilice el comando para mostrar las últimas 10 líneas del archivo.tailzcat
[student@workstation ~]$ tail Esc+.
[student@workstation ~]$ tail zcat
With no FILE, or when FILE is -, read standard input.

Report bugs to "<bug-gzip@gnu.org>."

case $1 in
--help)    printf '%s\n' "$usage"   || exit 1;;
--version) printf '%s\n' "$version" || exit 1;;
esac

	exec gzip -cd "$@"
8.	Repita el comando anterior exactamente con cuatro o menos pulsaciones de teclas.
Repita el comando anterior exactamente con cuatro o menos pulsaciones de teclas. Presione la tecla Flecha arriba una vez para desplazarse hacia atrás un comando por el historial de comandos y, a continuación, presione Entrar (usa dos pulsaciones de teclas). Una alternativa sería escribir el comando de acceso directo y, a continuación, presionar Intro (usa cuatro pulsaciones de teclas) para ejecutar el comando más reciente en el historial de comandos. Prueba ambos métodos.!!
[student@workstation]$ !!
tail zcat
With no FILE, or when FILE is -, read standard input.

Report bugs to "<bug-gzip@gnu.org>."

case $1 in
--help)    printf '%s\n' "$usage"   || exit 1;;
--version) printf '%s\n' "$version" || exit 1;;
esac

	exec gzip -cd "$@"
9.	Utilice la opción de comando para mostrar las últimas 20 líneas del archivo. Utilice la edición de la línea de comandos para realizar esta tarea con un número mínimo de pulsaciones de teclas.tail-n 20
Utilice la tecla Flecha arriba para mostrar el comando anterior. A continuación, use la combinación de teclas Ctrl + A para mover el cursor al comienzo de la línea. A continuación, use la combinación de teclas Ctrl + Flecha derecha para saltar a la siguiente palabra. A continuación, agregue la opción y presione Enter para ejecutar el comando.-n 20
[student@workstation ~]$ tail -n 20 zcat
  -l, --list        list compressed file contents
  -q, --quiet       suppress all warnings
  -r, --recursive   operate recursively on directories
  -S, --suffix=SUF  use suffix SUF on compressed files
      --synchronous synchronous output (safer if system crashes, but slower)
  -t, --test        test compressed file integrity
  -v, --verbose     verbose mode
      --help        display this help and exit
      --version     display version information and exit

With no FILE, or when FILE is -, read standard input.

Report bugs to "<bug-gzip@gnu.org>."

case $1 in
--help)    printf '%s\n' "$usage"   || exit 1; exit;;
--version) printf '%s\n' "$version" || exit 1; exit;;
esac

	exec gzip -cd "$@"
10.	Use el historial de shell para volver a ejecutar el comando.date +%R
Utilice el comando para mostrar la lista de comandos anteriores e identificar el comando específico que se va a ejecutar. Se utiliza para ejecutar el comando, donde historydate!numbernúmero es el número de comando que se utilizará desde la salida del comando.history
El historial de shell puede diferir del siguiente ejemplo. Determine el número de comando que se va a usar en función de la salida de su propio comando.history
[student@workstation ~]$ history
1   date
2   date +%R
3   file zcat
4   wc zcat
5   head zcat
6   tail zcat
7   tail -n 20 zcat
8   history
[student@workstation ~]$ !2
date +%R
	14:02
Evaluación
Como usuario de la máquina, utilice el comando para calificar el trabajo. Corrija los errores notificados y vuelva a ejecutar el comando hasta que se realice correctamente.studentworkstationlab
[student@workstation ~]$ lab grade cli-review
Terminar
En la máquina, cambie al directorio principal del usuario y utilice el comando para completar este ejercicio. Este paso es importante para garantizar que los recursos de ejercicios anteriores no afecten los próximos ejercicios.workstationstudentlab
[student@workstation ~]$ lab finish cli-review
Resumen
●	El shell de Bash es un intérprete de comandos que solicita a los usuarios interactivos que especifiquen comandos de Linux.
●	Muchos comandos tienen una opción que muestra un mensaje de uso o una pantalla.--help
●	Puede usar espacios de trabajo para organizar varias ventanas de aplicaciones.
●	El botón Actividades en la esquina superior izquierda de la barra superior proporciona un modo de descripción general que ayuda a organizar ventanas e iniciar aplicaciones.
●	El comando escanea el comienzo de un archivo y muestra de qué tipo es.file
●	Los comandos y muestran el principio y el final de un archivo, respectivamente.headtail
●	Puede usar la finalización de tabulación para completar los nombres de archivo al escribirlos como argumentos para los comandos.
●	Puede utilizar la interfaz gráfica para muchas tareas administrativas. Puede deshabilitar la interfaz para conservar los recursos para las aplicaciones en ejecución.
●	Puede escribir muchos comandos en la misma línea mediante el carácter de punto y coma y puede ejecutar un solo comando en varias líneas mediante el carácter de barra diagonal inversa.;\
Capítulo 3. Administrar archivos desde la línea de comandos
Describir los conceptos de jerarquía del sistema de archivos de Linux
Cuestionario: Describir los conceptos de jerarquía del sistema de archivos de Linux
Especificar archivos por nombre
Cuestionario: Especificar archivos por nombre
Administrar archivos con herramientas de línea de comandos
Ejercicio guiado: administración de archivos con herramientas de línea de comandos
Hacer enlaces entre archivos
Ejercicio guiado: Establecer vínculos entre archivos
Hacer coincidir nombres de archivo con expansiones de shell
Prueba: Hacer coincidir los nombres de los archivos con las expansiones de shell
Laboratorio: Administrar archivos desde la línea de comandos
Resumen
Abstracto
Gol	Copie, mueva, cree, elimine y organice archivos desde el shell de Bash.
Objetivos	●	
Describir cómo Linux organiza los archivos y los propósitos de varios directorios en la jerarquía del sistema de archivos.
●	Especifique la ubicación absoluta y la ubicación relativa de los archivos en el directorio de trabajo actual, determine y cambie el directorio de trabajo y enumere el contenido de los directorios.
●	Crea, copia, mueve y elimina archivos y directorios.
●	Cree varias referencias de nombre de archivo al mismo archivo con vínculos duros y vínculos simbólicos (o "suaves").
●	Ejecute de manera eficiente comandos que afectan a muchos archivos mediante el uso de características de coincidencia de patrones del shell de Bash.
Secciones	●	
Describir los conceptos de jerarquía del sistema de archivos de Linux (y el cuestionario)
●	Especificar archivos por nombre (y cuestionario)
●	Administración de archivos con herramientas de línea de comandos (y ejercicio guiado)
●	Hacer enlaces entre archivos (y ejercicio guiado)
●	Hacer coincidir los nombres de los archivos con las expansiones de shell (y el cuestionario)
Laboratorio	●	
Administrar archivos desde la línea de comandos
Describir los conceptos de jerarquía del sistema de archivos de Linux
Objetivos
●	Describir cómo Linux organiza los archivos y los propósitos de varios directorios en la jerarquía del sistema de archivos.
La jerarquía del sistema de archivos
El sistema Linux almacena todos los archivos en sistemas de archivos, que se organizan en un único árbol invertido conocido como jerarquía de sistemas de archivos. Esta jerarquía es un árbol invertido porque la raíz del árbol está en la parte superior y las ramas de directorios y subdirectorios se extienden por debajo de la raíz.
 
Figura 3.1: Directorios importantes del sistema de archivos en Red Hat Enterprise Linux 9
El directorio es el directorio raíz en la parte superior de la jerarquía del sistema de archivos. El carácter también se utiliza como separador de directorios en los nombres de archivo. Por ejemplo, si es un subdirectorio del directorio, consulte ese directorio como . Del mismo modo, si el directorio contiene un archivo que se denomina , entonces refiérase a ese archivo como .//etc//etc/etcissue/etc/issue
Los subdirectorios de se utilizan con fines estandarizados para organizar los archivos por tipo y propósito para facilitar la búsqueda de archivos. Por ejemplo, en el directorio raíz, el subdirectorio se utiliza para almacenar archivos para arrancar el sistema.//boot
Nota
Los siguientes términos ayudan a describir el contenido del directorio del sistema de archivos:
●	Estático El contenido permanece sin cambios hasta que se edita o reconfigura explícitamente.
●	Dinámico o variable El contenido puede ser modificado o anexado por procesos activos.
●	Persistente El contenido permanece después de un reinicio, como los ajustes de configuración.
●	Ejecución El contenido de un proceso o del sistema se elimina al reiniciar.
En la tabla siguiente se enumeran algunos de los directorios importantes del sistema por nombre y propósito.
Tabla 3.1. Directorios importantes de Red Hat Enterprise Linux
Ubicación	Propósito
/boot	Archivos para iniciar el proceso de arranque.
/dev	Archivos de dispositivo especiales que el sistema utiliza para acceder al hardware.
/etc	Archivos de configuración específicos del sistema.
/home	Directorio de inicio, donde los usuarios regulares almacenan sus datos y archivos de configuración.
/root	Directorio principal para el superusuario administrativo, .root
/run	Datos de tiempo de ejecución para procesos que se iniciaron desde el último arranque. Estos datos incluyen archivos de ID de proceso y archivos de bloqueo. El contenido de este directorio se vuelve a crear al reiniciar. Este directorio consolida los directorios y de versiones anteriores de Red Hat Enterprise Linux./var/run/var/lock
/tmp	Un espacio de escritura mundial para archivos temporales. Los archivos a los que no se accede, cambian o modifican durante 10 días se eliminan automáticamente de este directorio. El directorio también es un directorio temporal, en el que los archivos a los que no se accede, cambian o modifican en más de 30 días se eliminan automáticamente./var/tmp
/usr	Software instalado, bibliotecas compartidas, incluidos archivos y datos de programas de solo lectura. Los subdirectorios importantes del directorio incluyen los siguientes comandos: /usr
●	/usr/bin: Comandos de usuario
●	/usr/sbin: Comandos de administración del sistema
●	/usr/local: Software personalizado localmente
/var	Los datos variables específicos del sistema deben persistir entre arranques. Los archivos que cambian dinámicamente, como bases de datos, directorios de caché, archivos de registro, documentos en cola de impresión y contenido de sitios web, se pueden encontrar en ./var

Importante
En Red Hat Enterprise Linux 7 y versiones posteriores, cuatro directorios más antiguos tienen contenidos idénticos a sus contrapartes en ://usr
●	/bin y /usr/bin
●	/sbin y /usr/sbin
●	/lib y /usr/lib
●	/lib64 y /usr/lib64
Las versiones anteriores de Red Hat Enterprise Linux tenían directorios distintos con diferentes conjuntos de archivos. En Red Hat Enterprise Linux 7 y versiones posteriores, los directorios son enlaces simbólicos a los directorios coincidentes en .//usr
Referencias
hier(7) página de manual
Especificar archivos por nombre
Objetivos
●	Especifique la ubicación absoluta y la ubicación relativa de los archivos en el directorio de trabajo actual, determine y cambie el directorio de trabajo y enumere el contenido de los directorios.
Rutas absolutas y rutas relativas
El camino de un archivo o directorio especifica su ubicación única en el sistema de archivos. A continuación de una ruta de acceso de archivo, se atraviesan uno o varios subdirectorios con nombre, que están delimitados por una barra diagonal (/), hasta llegar al destino. Directorios, también llamados Carpetas, puede contener otros archivos y otros subdirectorios. Se hace referencia a los directorios de la misma manera que a los archivos.
Importante
Un carácter de espacio es aceptable en un nombre de archivo de Linux. El shell también usa espacios para distinguir opciones y argumentos en la línea de comandos. Si un comando incluye un archivo con un espacio en su nombre, entonces el shell puede malinterpretar el comando y asumir que el nombre del archivo es varios argumentos. Para evitar este error, escriba dichos nombres de archivo entre comillas para que el shell interprete el nombre como un solo argumento. RedÂ Hat recomienda evitar los espacios en los nombres de los archivos.
Caminos absolutos
Un camino absoluto es un Nombre completo que especifica la ubicación exacta del archivo en la jerarquía del sistema de archivos. La ruta absoluta comienza en el directorio raíz () e incluye cada subdirectorio que se debe recorrer para llegar al archivo específico. Cada archivo en un sistema de archivos tiene un nombre de ruta de acceso absoluto único, que se reconoce con una regla simple: un nombre de ruta con una barra diagonal () como primer carácter es un nombre de ruta de acceso absoluto.//
Por ejemplo, el nombre de ruta de acceso absoluto para el archivo de registro de mensajes del sistema es . Los nombres de ruta absolutos pueden ser largos para escribir, por lo que los archivos también se pueden ubicar en relación con el directorio de trabajo actual de su indicador de shell./var/log/messages
El directorio de trabajo actual y las rutas relativas
Cuando un usuario inicia sesión y abre una ventana de comandos, la ubicación inicial suele ser el directorio principal del usuario. Los procesos del sistema también tienen un directorio inicial. Los usuarios y procesos cambian a otros directorios según sea necesario. El directorio de trabajo y Directorio de trabajo actual Los términos se refieren a su ubicación actual.
Similar a un camino absoluto, un pariente path identifica una ubicación única y especifica solo la ruta necesaria para llegar a la ubicación desde el directorio de trabajo. Los nombres de ruta relativos siguen esta regla: un nombre de ruta con cualquier otra cosa que no sea Una barra diagonal como primer carácter es un nombre de ruta relativo. Por ejemplo, en relación con el directorio, el archivo de registro de mensajes es ./varlog/messages
Los sistemas de archivos de Linux, incluidos , , y , distinguen entre mayúsculas y minúsculas. La creación de archivos y en el mismo directorio da como resultado dos archivos únicos.ext4XFSGFS2GlusterFSFileCase.txtfilecase.txt
Los sistemas de archivos que no son Linux pueden funcionar de manera diferente. Por ejemplo, VFAT, Microsoft NTFS y Apple HFS+ tienen Comportamiento de conservación de mayúsculas y minúsculas. Aunque estos sistemas de archivos son no distinguen entre mayúsculas y minúsculas, muestran nombres de archivo con las mayúsculas originales del archivo. Al crear los archivos del ejemplo anterior en un sistema de archivos VFAT, ambos nombres apuntarían al mismo archivo en lugar de a dos archivos diferentes.
Navegar por rutas en el sistema de archivos
El comando muestra el nombre completo de la ruta de acceso del directorio de trabajo actual para ese shell. Este comando le ayuda a determinar la sintaxis para llegar a los archivos mediante nombres de ruta relativos. El comando enumera el contenido del directorio para el directorio especificado o, si no se proporciona ningún directorio, para el directorio de trabajo actual.pwdls
[user@host ~]$ pwd
/home/user
[user@host ~]$ ls
Desktop  Documents  Downloads  Music  Pictures  Public  Templates  Videos
[user@host ~]$
Utilice el comando para cambiar el directorio de trabajo actual de su shell. Si no especifica ningún argumento para el comando, cambia a su directorio de inicio.cd
En el ejemplo siguiente, se usa una combinación de rutas absolutas y relativas con el comando para cambiar el directorio de trabajo actual del shell.cd
[user@host ~]$ pwd
/home/user
[user@host ~]$ cd Videos
[user@host Videos]$ pwd
/home/user/Videos
[user@host Videos]$ cd /home/user/Documents
[user@host Documents]$ pwd
/home/user/Documents
[user@host Documents]$ cd
[user@host ~]$ pwd
/home/user
[user@host ~]$
En el ejemplo anterior, el indicador de shell predeterminado también muestra el último componente de la ruta absoluta al directorio de trabajo actual. Por ejemplo, para el directorio, solo se muestra el directorio. El mensaje muestra el carácter de tilde () cuando su directorio de trabajo actual es su directorio de inicio./home/user/VideosVideos~
El comando actualiza la marca de tiempo de un archivo a la fecha y hora actuales sin modificarlo de otro modo. Este comando es útil para crear archivos vacíos y se puede usar para practicar, ya que cuando usa el comando con un nombre de archivo que no existe, se crea el archivo. En el ejemplo siguiente, el comando crea archivos de práctica en los subdirectorios and.touchtouchtouchDocumentsVideos
[user@host ~]$ touch Videos/blockbuster1.ogg
[user@host ~]$ touch Videos/blockbuster2.ogg
[user@host ~]$ touch Documents/thesis_chapter1.txt
[user@host ~]$ touch Documents/thesis_chapter2.txt
[user@host ~]$
El comando tiene varias opciones para mostrar atributos en archivos. Las opciones más comunes son (formato de lista larga), (todos los archivos, incluidos ls-l-aescondido files) y (recursivo, para incluir el contenido de todos los subdirectorios).-R
[user@host ~]$ ls -l
total 0
drwxr-xr-x. 2 user user 6 Mar  2 02:45 Desktop
drwxr-xr-x. 2 user user 6 Mar  2 02:45 Documents
drwxr-xr-x. 2 user user 6 Mar  2 02:45 Downloads
drwxr-xr-x. 2 user user 6 Mar  2 02:45 Music
drwxr-xr-x. 2 user user 6 Mar  2 02:45 Pictures
drwxr-xr-x. 2 user user 6 Mar  2 02:45 Public
drwxr-xr-x. 2 user user 6 Mar  2 02:45 Templates
drwxr-xr-x. 2 user user 6 Mar  2 02:45 Videos
[user@host ~]$ ls -la
total 40
drwx------. 17 user user 4096 Mar  2 03:07 .
drwxr-xr-x.  4 root root   35 Feb 10 10:48 ..
drwxr-xr-x.  4 user user   27 Mar  2 03:01 .ansible
-rw-------.  1 user user  444 Mar  2 04:32 .bash_history
-rw-r--r--.  1 user user   18 Aug  9  2021 .bash_logout
-rw-r--r--.  1 user user  141 Aug  9  2021 .bash_profile
-rw-r--r--.  1 user user  492 Aug  9  2021 .bashrc
drwxr-xr-x.  9 user user 4096 Mar  2 02:45 .cache
drwxr-xr-x.  9 user user 4096 Mar  2 04:32 .config
drwxr-xr-x.  2 user user    6 Mar  2 02:45 Desktop
drwxr-xr-x.  2 user user    6 Mar  2 02:45 Documents
...output omitted...
En la parte superior de la lista hay dos directorios especiales. Un punto () hace referencia al directorio actual y dos puntos () hacen referencia al directorio principal. Estos directorios especiales existen en todos los directorios del sistema y son útiles cuando se utilizan comandos de administración de archivos....
Importante
Los nombres de archivo que comienzan con un punto () indican .escondido Archivos; no puede verlos en la vista normal con y otros comandos. Este comportamiento es lsno una característica de seguridad. Los archivos ocultos evitan que los archivos de configuración de usuario necesarios abarroten los directorios de inicio. Muchos comandos procesan archivos ocultos solo con opciones específicas de línea de comandos y evitan que la configuración de un usuario se copie accidentalmente en otros directorios o usuarios.
Para proteger el archivo contenido de visualización incorrecta requiere el uso de Permisos de archivo.
También puede usar el carácter especial tilde () en combinación con otros comandos para una mejor interacción con el directorio de inicio.~
[user@host ~]$ cd /var/log/
[user@host log]$ ls -l ~
total 0
drwxr-xr-x. 2 user user 6 Mar  2 02:45 Desktop
drwxr-xr-x. 2 user user 6 Mar  2 02:45 Documents
drwxr-xr-x. 2 user user 6 Mar  2 02:45 Downloads
drwxr-xr-x. 2 user user 6 Mar  2 02:45 Music
drwxr-xr-x. 2 user user 6 Mar  2 02:45 Pictures
drwxr-xr-x. 2 user user 6 Mar  2 02:45 Public
drwxr-xr-x. 2 user user 6 Mar  2 02:45 Templates
drwxr-xr-x. 2 user user 6 Mar  2 02:45 Videos
[user@host ~]$
El comando tiene muchas opciones. Algunas opciones son útiles para practicar temprano y usar con frecuencia. El comando cambia al directorio anterior, donde estaba el usuario cdcd -previamente al directorio actual. En el ejemplo siguiente se muestra este comportamiento y se alterna entre dos directorios, lo que resulta útil al procesar una serie de tareas similares.
[user@host ~]$ cd Videos
[user@host Videos]$ pwd
/home/user/Videos
[user@host Videos]$ cd /home/user/Documents
[user@host Documents]$ pwd
/home/user/Documents
[user@host Documents]$ cd -
[user@host Videos]$ pwd
/home/user/Videos
[user@host Videos]$ cd -
[user@host Documents]$ pwd
/home/user/Documents
[user@host Documents]$ cd -
[user@host Videos]$ pwd
/home/user/Videos
[user@host Videos]$ cd
[user@host ~]$
El comando usa el directorio oculto () para subir un nivel al directorio principal, sin necesidad de saber el nombre principal exacto. El otro directorio oculto () especifica el cd .....Directorio actual en comandos donde la ubicación actual es el argumento de origen o destino, y evita la necesidad de escribir el nombre de ruta de acceso absoluto del directorio.
[user@host Videos]$ pwd
/home/user/Videos
[user@host Videos]$ cd .
[user@host Videos]$ pwd
/home/user/Videos
[user@host Videos]$ cd ..
[user@host ~]$ pwd
/home/user
[user@host ~]$ cd ..
[user@host home]$ pwd
/home
[user@host home]$ cd ..
[user@host /]$ pwd
/
[user@host /]$ cd
[user@host ~]$ pwd
/home/user
[user@host ~]$
Referencias
info libc 'file name resolution' (Manual de referencia de la biblioteca GNU C)
●	Sección 11.2.2 Resolución de nombres de archivo
https://www.gnu.org/software/libc/manual/html_node/File-Name-Resolution.html
bash(1), (1), (1), (1), (1), (7) y (7) páginas de manualcdlspwdunicodeutf-8
UTF-8 y Unicode
Administrar archivos con herramientas de línea de comandos
Objetivos
●	Crea, copia, mueve y elimina archivos y directorios.
Administración de archivos de línea de comandos
Crear, copiar, mover y eliminar archivos y directorios son operaciones comunes para un administrador de sistemas. Sin opciones, algunos comandos se utilizan para interactuar con archivos o pueden manipular directorios con el conjunto adecuado de opciones.
Tenga en cuenta las opciones que se utilizan al ejecutar un comando. El significado de algunas opciones puede diferir entre comandos.
Crear directorios
El comando crea uno o varios directorios o subdirectorios. Toma como argumento una lista de rutas a los directorios que desea crear.mkdir
En el siguiente ejemplo, los archivos y directorios se organizan debajo del directorio. Utilice el comando y una lista delimitada por espacios de los nombres de directorio para crear varios directorios./home/user/Documentsmkdir
[user@host ~]$ cd Documents
[user@host Documents]$ mkdir ProjectX ProjectY ProjectZ
[user@host Documents]$ ls
ProjectX  ProjectY ProjectZ
Si el directorio existe, o un directorio primario del directorio que está intentando crear no existe, entonces el comando falla y muestra un error.mkdir
El comando mkdir-p (padre) crea los directorios principales que faltan para el destino solicitado. En el ejemplo siguiente, el comando crea tres subdirectorios con un comando. La opción crea el directorio principal que falta.mkdirChapterN-pThesis
[user@host Documents]$ mkdir -p Thesis/Chapter1 Thesis/Chapter2 Thesis/Chapter3
[user@host Documents]$ ls -R Thesis/
Thesis/:
Chapter1  Chapter2  Chapter3

Thesis/Chapter1:

Thesis/Chapter2:

Thesis/Chapter3:
Use la opción de comando con precaución, ya que los errores ortográficos pueden crear directorios no deseados sin generar mensajes de error. En el siguiente ejemplo, imagine que está intentando crear un subdirectorio en el directorio, pero omitió accidentalmente la letra "s" en su comando.mkdir-pWatchedVideosVideosmkdir
[user@host ~]$ mkdir Video/Watched
mkdir: cannot create directory Video/Watched: No such file or directory
El comando falla porque el directorio no existe. Si hubiera utilizado el comando con la opción, el directorio se crearía involuntariamente. El subdirectorio se crearía en ese directorio incorrecto.mkdirVideomkdir-pVideoWatched
Copiar archivos y directorios
El comando copia un archivo y crea un archivo en el directorio actual o en un directorio especificado diferente.cp
[user@host ~]$ cd Videos
[user@host Videos]$ cp blockbuster1.ogg blockbuster3.ogg
[user@host Videos]$ ls -l
total 0
-rw-rw-r--. 1 user user    0 Feb  8 16:23 blockbuster1.ogg
-rw-rw-r--. 1 user user    0 Feb  8 16:24 blockbuster2.ogg
-rw-rw-r--. 1 user user    0 Feb  8 16:34 blockbuster3.ogg
También puede usar el comando para copiar varios archivos en un directorio. En este escenario, el último argumento debe ser un directorio. Los archivos copiados conservan sus nombres originales en el nuevo directorio. Si existe un archivo con el mismo nombre en el directorio de destino, se sobrescribe el archivo existente.cp
Nota
De forma predeterminada, el comando no copia directorios; los ignora.cp
En el ejemplo siguiente, se enumeran dos directorios como argumentos, los directorios y . El último argumento, el directorio, es el destino y es válido como destino. El argumento es ignorado por el comando, porque está destinado a ser copiado y es un directorio.ThesisProjectXProjectXThesiscp
[user@host Documents]$ cp thesis_chapter1.txt thesis_chapter2.txt Thesis ProjectX
cp: -r not specified; omitting directory 'Thesis'
[user@host Documents]$ ls Thesis ProjectX
ProjectX:
thesis_chapter1.txt  thesis_chapter2.txt

Thesis:
Chapter1  Chapter2  Chapter3
El directorio no se pudo copiar, pero la copia de los archivos y se realizó correctamente.Thesisthesis_chapter1.txtthesis_chapter2.txt
Puede copiar directorios y su contenido mediante la opción de comando. Tenga en cuenta que puede usar los directorios y especiales en combinaciones de comandos. En el ejemplo siguiente, el directorio y su contenido se copian en el directorio.cp-r...ThesisProjectY
[user@host Documents]$ cd ProjectY
[user@host ProjectY]$ cp -r ../Thesis/ .
[user@host ProjectY]$ ls -lR
.:
total 0
drwxr-xr-x. 5 user user 54 Mar  7 15:08 Thesis

./Thesis:
total 0
drwxr-xr-x. 2 user user 6 Mar  7 15:08 Chapter1
drwxr-xr-x. 2 user user 6 Mar  7 15:08 Chapter2
drwxr-xr-x. 2 user user 6 Mar  7 15:08 Chapter3

./Thesis/Chapter1:
total 0

./Thesis/Chapter2:
total 0

./Thesis/Chapter3:
total 0
Mover archivos y directorios
El comando mueve archivos de una ubicación a otra. Si piensa en la ruta absoluta a un archivo como su nombre completo, mover un archivo es efectivamente lo mismo que cambiar el nombre de un archivo. El contenido de los archivos que se mueven permanece sin cambios.mv
Utilice el comando para mvrebautizar un archivo. En el ejemplo siguiente, el comando cambia el nombre del archivo a en el mismo directorio.mv thesis_chapter2.txtthesis_chapter2.txtthesis_chapter2_reviewed.txt
[user@host Documents]$ ls -l
-rw-r--r--. 1 user user  7100 Mar  7 14:37 thesis_chapter1.txt
-rw-r--r--. 1 user user 11431 Mar  7 14:39 thesis_chapter2.txt
...output omitted...
[user@host Documents]$ mv thesis_chapter2.txt thesis_chapter2_reviewed.txt
[user@host Documents]$ ls -l
-rw-r--r--. 1 user user  7100 Mar  7 14:37 thesis_chapter1.txt
-rw-r--r--. 1 user user 11431 Mar  7 14:39 thesis_chapter2_reviewed.txt
...output omitted...
Utilice el comando para mvmover un archivo a un directorio diferente. En el siguiente ejemplo, el archivo se mueve del directorio al directorio. Puede utilizar la opción de comando para mostrar un resultado detallado de las operaciones de comando.thesis_chapter1.txt~/Documents~/Documents/Thesis/Chapter1mv-v
[user@host Documents]$ ls Thesis/Chapter1
[user@host Documents]$
[user@host Documents]$ mv -v thesis_chapter1.txt Thesis/Chapter1
renamed 'thesis_chapter1.txt' -> 'Thesis/Chapter1/thesis_chapter1.txt'
[user@host Documents]$ ls Thesis/Chapter1
thesis_chapter1.txt
[user@host Documents]$ ls -l
-rw-r--r--. 1 user user 11431 Mar  7 14:39 thesis_chapter2_reviewed.txt
...output omitted...
Eliminar archivos y directorios
El comando elimina archivos. De forma predeterminada, no elimina directorios. Puede usar el comando o la opción para habilitar el comando para eliminar directorios y su contenido. El comando recorre primero cada subdirectorio y elimina individualmente sus archivos antes de eliminar cada directorio.rmrmrm-r--recursivermrm -r
En el ejemplo siguiente, el comando quita el archivo sin opciones, pero para quitar el directorio, debe agregar la opción.rmthesis_chapter1.txtThesis/Chapter1-r
[user@host Documents]$ ls -l Thesis/Chapter1
-rw-r--r--. 1 user user 7100 Mar  7 14:37 thesis_chapter1.txt
[user@host Documents]$ rm Thesis/Chapter1/thesis_chapter1.txt
[user@host Documents]$ rm Thesis/Chapter1
rm: cannot remove 'Thesis/Chapter1': Is a directory
[user@host Documents]$ rm -r Thesis/Chapter1
[user@host Documents]$ ls -l Thesis
drwxr-xr-x. 2 user user 6 Mar  7 12:37 Chapter2
drwxr-xr-x. 2 user user 6 Mar  7 12:37 Chapter3
Importante
RedÂ Hat Enterprise Linux no proporciona una función de recuperación de línea de comandos, ni una "papelera" desde la cual puede restaurar los archivos retenidos para su eliminación. Una papelera es un componente de un entorno de escritorio como GNOME, pero no es utilizado por comandos que se ejecutan desde un shell.
Es una buena idea comprobar el directorio de trabajo actual antes de eliminar un archivo o directorio mediante rutas de acceso relativas.
[user@host Documents]$ pwd
/home/user/Documents
[user@host Documents]$ ls -l thesis*
-rw-r--r--. 1 user user 11431 Mar  7 14:39 thesis_chapter2_reviewed.txt
[user@host Documents]$ rm thesis_chapter2_reviewed.txt
[user@host Documents]$ ls -l thesis*
ls: cannot access 'thesis*': No such file or directory
Puede utilizar la opción de comando para solicitar confirmación de forma interactiva antes de eliminar. Esta opción es esencialmente lo opuesto a usar la opción de comando, que fuerza la eliminación sin solicitar confirmación al usuario.rm-irm-f
[user@host Documents]$ rm -ri Thesis
rm: descend into directory 'Thesis'? y
rm: descend into directory 'Thesis/Chapter2'? y
rm: remove regular empty file 'Thesis/Chapter2/thesis_chapter2.txt'? y
rm: remove directory 'Thesis/Chapter2'? y
rm: remove directory 'Thesis/Chapter3'? y
rm: remove directory 'Thesis'? y
Advertencia
Si especifica las opciones y, la opción tiene prioridad y no se le pedirá confirmación antes de quitar archivos.-i-f-frm
También puede usar el comando para eliminar directorios vacíos. Utilice la opción de comando para eliminar directorios no vacíos.rmdirrm-r
[user@host Documents]$ pwd
/home/user/Documents
[user@host Documents]$ rmdir ProjectZ
[user@host Documents]$ rmdir ProjectX
rmdir: failed to remove 'ProjectX': Directory not empty
[user@host Documents]$ rm -r ProjectX
[user@host Documents]$
Referencias
cp(1), (1), (1), (1) y (1) páginas de manualmkdirmvrmrmdir
Ejercicio guiado: administración de archivos con herramientas de línea de comandos
Crea, organiza, copia y elimina archivos y directorios.
Resultados
●	Crea, organiza, copia y elimina archivos y directorios.
Como usuario de la máquina, use el comando para preparar el sistema para este ejercicio.studentworkstationlab
Este comando prepara el entorno y garantiza que todos los recursos necesarios estén disponibles.
[student@workstation ~]$ lab start files-manage
Instrucciones
1.	Inicie sesión en la máquina como usuario. En el directorio principal del usuario, cree tres subdirectorios: , , y .serverastudentstudentMusicPicturesVideos
Utilice el comando para iniciar sesión en la máquina como usuario. Los sistemas están configurados para usar claves SSH para la autenticación; por lo tanto, no se requiere una contraseña.sshserverastudent
[student@workstation ~]$ ssh student@servera
...output omitted...
	[student@servera ~]$
	En el directorio principal del usuario, utilice el comando para crear tres subdirectorios: , , y .studentmkdirMusicPicturesVideos
[student@servera ~]$ mkdir Music Pictures Videos
2.	Use el comando para crear conjuntos de archivos de práctica vacíos para usar durante este laboratorio. En cada conjunto, reemplácelo con los números del 1 al 6.touchX
	Cree seis archivos con nombres del formulario.songX.mp3
	Cree seis archivos con nombres del formulario.snapX.jpg
	Cree seis archivos con nombres del formulario.filmX.avi
[student@servera ~]$ touch song1.mp3 song2.mp3 song3.mp3 \
song4.mp3 song5.mp3 song6.mp3
[student@servera ~]$ touch snap1.jpg snap2.jpg snap3.jpg \
snap4.jpg snap5.jpg snap6.jpg
[student@servera ~]$ touch film1.avi film2.avi film3.avi \
film4.avi film5.avi film6.avi
[student@servera ~]$ ls -l
total 0
-rw-r--r--. 1 student student 0 Mar  7 20:58 film1.avi
-rw-r--r--. 1 student student 0 Mar  7 20:58 film2.avi
-rw-r--r--. 1 student student 0 Mar  7 20:58 film3.avi
-rw-r--r--. 1 student student 0 Mar  7 20:58 film4.avi
-rw-r--r--. 1 student student 0 Mar  7 20:58 film5.avi
-rw-r--r--. 1 student student 0 Mar  7 20:58 film6.avi
drwxr-xr-x. 2 student student 6 Mar  7 20:58 Music
drwxr-xr-x. 2 student student 6 Mar  7 20:58 Pictures
-rw-r--r--. 1 student student 0 Mar  7 20:58 snap1.jpg
-rw-r--r--. 1 student student 0 Mar  7 20:58 snap2.jpg
-rw-r--r--. 1 student student 0 Mar  7 20:58 snap3.jpg
-rw-r--r--. 1 student student 0 Mar  7 20:58 snap4.jpg
-rw-r--r--. 1 student student 0 Mar  7 20:58 snap5.jpg
-rw-r--r--. 1 student student 0 Mar  7 20:58 snap6.jpg
-rw-r--r--. 1 student student 0 Mar  7 20:58 song1.mp3
-rw-r--r--. 1 student student 0 Mar  7 20:58 song2.mp3
-rw-r--r--. 1 student student 0 Mar  7 20:58 song3.mp3
-rw-r--r--. 1 student student 0 Mar  7 20:58 song4.mp3
-rw-r--r--. 1 student student 0 Mar  7 20:58 song5.mp3
-rw-r--r--. 1 student student 0 Mar  7 20:58 song6.mp3
3.	drwxr-xr-x. 2 student student 6 Mar  7 20:58 Videos
Mueva los archivos de canciones (extensión) al directorio, los archivos de instantáneas (extensión) al directorio y los archivos de película (extensión) al directorio..mp3Music.jpgPictures.aviVideos
[student@servera ~]$ mv song1.mp3 song2.mp3 song3.mp3 \
song4.mp3 song5.mp3 song6.mp3 Music
[student@servera ~]$ mv snap1.jpg snap2.jpg snap3.jpg \
snap4.jpg snap5.jpg snap6.jpg Pictures
[student@servera ~]$ mv film1.avi film2.avi film3.avi \
film4.avi film5.avi film6.avi Videos
[student@servera ~]$ ls -l Music Pictures Videos
Music:
total 0
-rw-r--r--. 1 student student 0 Mar  7 20:58 song1.mp3
-rw-r--r--. 1 student student 0 Mar  7 20:58 song2.mp3
-rw-r--r--. 1 student student 0 Mar  7 20:58 song3.mp3
-rw-r--r--. 1 student student 0 Mar  7 20:58 song4.mp3
-rw-r--r--. 1 student student 0 Mar  7 20:58 song5.mp3
-rw-r--r--. 1 student student 0 Mar  7 20:58 song6.mp3

Pictures:
total 0
-rw-r--r--. 1 student student 0 Mar  7 20:58 snap1.jpg
-rw-r--r--. 1 student student 0 Mar  7 20:58 snap2.jpg
-rw-r--r--. 1 student student 0 Mar  7 20:58 snap3.jpg
-rw-r--r--. 1 student student 0 Mar  7 20:58 snap4.jpg
-rw-r--r--. 1 student student 0 Mar  7 20:58 snap5.jpg
-rw-r--r--. 1 student student 0 Mar  7 20:58 snap6.jpg

Videos:
total 0
-rw-r--r--. 1 student student 0 Mar  7 20:58 film1.avi
-rw-r--r--. 1 student student 0 Mar  7 20:58 film2.avi
-rw-r--r--. 1 student student 0 Mar  7 20:58 film3.avi
-rw-r--r--. 1 student student 0 Mar  7 20:58 film4.avi
-rw-r--r--. 1 student student 0 Mar  7 20:58 film5.avi
4.	-rw-r--r--. 1 student student 0 Mar  7 20:58 film6.avi
Cree tres subdirectorios para organizar sus archivos y asigne a los subdirectorios el nombre , , y . Utilice un solo comando para crear los tres subdirectorios al mismo tiempo.friendsfamilywork
[student@servera ~]$ mkdir friends family work
[student@servera ~]$ ls -l
total 0
drwxr-xr-x. 2 student student   6 Mar  7 21:01 family
drwxr-xr-x. 2 student student   6 Mar  7 21:01 friends
drwxr-xr-x. 2 student student 108 Mar  7 21:00 Music
drwxr-xr-x. 2 student student 108 Mar  7 21:00 Pictures
drwxr-xr-x. 2 student student 108 Mar  7 21:00 Videos
5.	drwxr-xr-x. 2 student student   6 Mar  7 21:01 work
6.	Copie los archivos que contienen números y en el directorio, y los archivos que contienen números y en el directorio. Tenga en cuenta que está haciendo copias; por lo tanto, los archivos originales deben permanecer en sus ubicaciones originales después de completar el paso.12friends34family
Cuando copia archivos de varias ubicaciones en una sola ubicación, Red Hat recomienda cambiar al directorio de destino antes de copiar los archivos. Utilice la sintaxis de ruta de acceso más sencilla, ya sea absoluta o relativa, para llegar al origen de cada tarea de administración de archivos.
Copie los archivos que contienen números y en el directorio.12friends
[student@servera ~]$ cd friends
[student@servera friends]$ cp ~/Music/song1.mp3 ~/Music/song2.mp3 \
~/Pictures/snap1.jpg ~/Pictures/snap2.jpg ~/Videos/film1.avi \
~/Videos/film2.avi .
[student@servera friends]$ ls -l
total 0
-rw-r--r--. 1 student student 0 Mar  7 21:02 film1.avi
-rw-r--r--. 1 student student 0 Mar  7 21:02 film2.avi
-rw-r--r--. 1 student student 0 Mar  7 21:02 snap1.jpg
-rw-r--r--. 1 student student 0 Mar  7 21:02 snap2.jpg
-rw-r--r--. 1 student student 0 Mar  7 21:02 song1.mp3
	-rw-r--r--. 1 student student 0 Mar  7 21:02 song2.mp3
Copie los archivos que contienen números y en el directorio.34family
[student@servera friends]$ cd ../family
[student@servera family]$ cp ~/Music/song3.mp3 ~/Music/song4.mp3 \
~/Pictures/snap3.jpg ~/Pictures/snap4.jpg ~/Videos/film3.avi \
~/Videos/film4.avi .
[student@servera family]$ ls -l
total 0
total 0
-rw-r--r--. 1 student student 0 Mar  7 21:04 film3.avi
-rw-r--r--. 1 student student 0 Mar  7 21:04 film4.avi
-rw-r--r--. 1 student student 0 Mar  7 21:04 snap3.jpg
-rw-r--r--. 1 student student 0 Mar  7 21:04 snap4.jpg
-rw-r--r--. 1 student student 0 Mar  7 21:04 song3.mp3
	-rw-r--r--. 1 student student 0 Mar  7 21:04 song4.mp3
Copie los directorios and y su contenido en el directorio.familyfriendswork
[student@servera family]$ cd ../work
[student@servera work]$ cp -r ~/family ~/friends .
[student@servera work]$ ls -l
total 0
drwxr-xr-x. 2 student student 108 Mar  7 21:05 family
7.	drwxr-xr-x. 2 student student 108 Mar  7 21:05 friends
Las tareas de su proyecto ya están completas y es hora de limpiar los directorios. Utilice el comando para eliminar de forma recursiva los directorios , , y y su contenido.rm -rfamilyfriendswork
[student@servera work]$ cd ..
[student@servera ~]$ rm -r family friends work
[student@servera ~]$ ls -l
total 0
drwxr-xr-x. 2 student student 108 Mar  7 21:00 Music
drwxr-xr-x. 2 student student 108 Mar  7 21:00 Pictures
8.	drwxr-xr-x. 2 student student 108 Mar  7 21:00 Videos
Regrese al sistema como usuario.workstationstudent
[student@servera ~]$ exit
logout
Connection to servera closed.
9.	[student@workstation ~]$
Terminar
En la máquina, cambie al directorio principal del usuario y utilice el comando para completar este ejercicio. Este paso es importante para garantizar que los recursos de ejercicios anteriores no afecten los próximos ejercicios.workstationstudentlab
[student@workstation ~]$ lab finish files-manage
Hacer enlaces entre archivos
Objetivos
●	Haga que varios nombres de archivo hagan referencia al mismo archivo con enlaces duros y enlaces simbólicos (o "suaves").
Administrar vínculos entre archivos
Puede crear varios nombres de archivo que apunten al mismo archivo. Estos nombres de archivo se llaman Enlaces.
Puede crear dos tipos de enlaces: un enlace duro, o un enlace simbólico (a veces llamado a enlace suave). Cada forma tiene sus ventajas y desventajas.
Crear enlaces duros
Cada archivo comienza con un único enlace duro, desde su nombre inicial hasta los datos del sistema de archivos. Cuando se crea un vínculo físico a un archivo, se crea otro nombre que apunta a esos mismos datos. El nuevo enlace duro actúa exactamente igual que el nombre del archivo original. Una vez creado el vínculo, no puede distinguir entre el nuevo vínculo físico y el nombre original del archivo.
Puede determinar si un archivo tiene varios vínculos físicos mediante el comando. Un elemento que informa es el archivo ls -lrecuento de enlaces, el número de enlaces físicos que tiene el archivo. En el siguiente ejemplo, el recuento de vínculos del archivo es 1. Tiene exactamente un camino absoluto, que es la ubicación.newfile.txt/home/user/newfile.txt
[user@host ~]$ pwd
/home/user
[user@host ~]$ ls -l newfile.txt
-rw-r--r--. 1 user user 0 Mar 11 19:19 newfile.txt
Puede usar el comando para crear un vínculo físico (otro nombre de archivo) que apunte a un archivo existente. El comando necesita al menos dos argumentos: una ruta al archivo existente y la ruta al vínculo físico que desea crear.ln
En el ejemplo siguiente se crea un vínculo físico llamado para el archivo existente en el directorio.newfile-hlink2.txtnewfile.txt/tmp
[user@host ~]$ ln newfile.txt /tmp/newfile-hlink2.txt
[user@host ~]$ ls -l newfile.txt /tmp/newfile-hlink2.txt
-rw-rw-r--. 2 user user 12 Mar 11 19:19 newfile.txt
-rw-rw-r--. 2 user user 12 Mar 11 19:19 /tmp/newfile-hlink2.txt
Para determinar si dos archivos están vinculados, use la opción command para enumerar los archivos ls-inúmero de inodo. Si los archivos están en el mismo sistema de archivos y sus números de inodo son los mismos, entonces los archivos son enlaces duros que apuntan al mismo contenido del archivo de datos.
[user@host ~]$ ls -il newfile.txt /tmp/newfile-hlink2.txt
8924107 -rw-rw-r--. 2 user user 12 Mar 11 19:19 newfile.txt
8924107 -rw-rw-r--. 2 user user 12 Mar 11 19:19 /tmp/newfile-hlink2.txt
Importante
Los vínculos físicos que hacen referencia al mismo archivo comparten la estructura de inodos con el recuento de vínculos, los permisos de acceso, la propiedad de usuarios y grupos, las marcas de tiempo y el contenido del archivo. Cuando se cambia esa información para un vínculo físico, los otros vínculos físicos para el mismo archivo también muestran la nueva información. Este comportamiento se debe a que cada vínculo duro apunta a los mismos datos en el dispositivo de almacenamiento.
Incluso si se elimina el archivo original, aún puede acceder al contenido del archivo siempre que exista al menos otro vínculo físico. Los datos se eliminan del almacenamiento solo cuando se elimina el último vínculo físico, lo que hace que el contenido del archivo no esté referenciado por ningún vínculo físico.
[user@host ~]$ rm -f newfile.txt
[user@host ~]$ ls -l /tmp/newfile-hlink2.txt
-rw-rw-r--. 1 user user 12 Mar 11 19:19 /tmp/newfile-hlink2.txt
[user@host ~]$ cat /tmp/newfile-hlink2.txt
Hello World
Limitaciones de los enlaces duros
Los enlaces duros tienen algunas limitaciones. Primero, puede usar enlaces duros solo con archivos normales. No puede utilizar el comando para crear un vínculo físico a un directorio o archivo especial.ln
En segundo lugar, puede usar enlaces duros solo si ambos archivos están en el mismo Sistema de archivos. La jerarquía del sistema de archivos puede estar compuesta por varios dispositivos de almacenamiento. Dependiendo de la configuración de su sistema, cuando cambia a un nuevo directorio, ese directorio y su contenido pueden almacenarse en un sistema de archivos diferente.
Puede usar el comando para enumerar los directorios que se encuentran en diferentes sistemas de archivos. Por ejemplo, es posible que vea el siguiente resultado:df
[user@host ~]$ df
Filesystem                   1K-blocks    Used Available Use% Mounted on
devtmpfs                        886788       0    886788   0% /dev
tmpfs                           902108       0    902108   0% /dev/shm
tmpfs                           902108    8696    893412   1% /run
tmpfs                           902108       0    902108   0% /sys/fs/cgroup
/dev/mapper/rhel_rhel9--root  10258432 1630460   8627972  16% /
/dev/sda1                      1038336  167128    871208  17% /boot
tmpfs                           180420       0    180420   0% /run/user/1000
Los archivos en dos directorios "Montados en" diferentes y sus subdirectorios están en diferentes sistemas de archivos. Por lo tanto, en el sistema de este ejemplo, puede crear un enlace duro entre los archivos y, ya que ambos son subdirectorios del directorio pero no de ningún otro directorio de la lista. Sin embargo, no puede crear un vínculo físico entre los archivos y. El primer archivo está en un subdirectorio del directorio (en la lista "Montado en") y está en el sistema de archivos. El segundo archivo está en el sistema de archivos./var/tmp/link1/home/user/file//boot/test/badlink/home/user/file/boot/dev/sda1/dev/mapper/rhel_rhel9—root
Crear enlaces simbólicos
La opción de comando crea un enlace simbólico, que también se denomina "enlace suave". Un enlace simbólico no es un archivo normal, sino un tipo especial de archivo que apunta a un archivo o directorio existente.ln-s
Los enlaces simbólicos tienen algunas ventajas sobre los enlaces duros:
●	Los enlaces simbólicos pueden vincular dos archivos en diferentes sistemas de archivos.
●	Los enlaces simbólicos pueden apuntar a un directorio o archivo especial, no solo a un archivo normal.
En el ejemplo siguiente, el comando crea un vínculo simbólico para el archivo. El nombre del enlace simbólico es .ln -s/home/user/newfile-link2.txt/tmp/newfile-symlink.txt
[user@host ~]$ ln -s /home/user/newfile-link2.txt /tmp/newfile-symlink.txt
[user@host ~]$ ls -l newfile-link2.txt /tmp/newfile-symlink.txt
-rw-rw-r--. 1 user user 12 Mar 11 19:19 newfile-link2.txt
lrwxrwxrwx. 1 user user 11 Mar 11 20:59 /tmp/newfile-symlink.txt -> /home/user/newfile-link2.txt
[user@host ~]$ cat /tmp/newfile-symlink.txt
Symbolic Hello World
En el ejemplo anterior, el primer carácter de la lista larga del archivo es (letra l) en lugar de . Este carácter indica que el archivo es un enlace simbólico y no un archivo normal./tmp/newfile-symlink.txtl-
Cuando se elimina el archivo normal original, el enlace simbólico sigue apuntando al archivo, pero el destino ha desaparecido. Un enlace simbólico que apunta a un archivo faltante se denomina "enlace simbólico colgante".
[user@host ~]$ rm -f newfile-link2.txt
[user@host ~]$ ls -l /tmp/newfile-symlink.txt
lrwxrwxrwx. 1 user user 11 Mar 11 20:59 /tmp/newfile-symlink.txt -> /home/user/newfile-link2.txt
[user@host ~]$ cat /tmp/newfile-symlink.txt
cat: /tmp/newfile-symlink.txt: No such file or directory
Importante
Un efecto secundario del enlace simbólico colgante en el ejemplo anterior es que si crea un archivo con el mismo nombre que el archivo eliminado (), entonces el enlace simbólico ya no está "colgando" y apunta al nuevo archivo. Los enlaces duros no funcionan de esta manera. Si elimina un vínculo físico y luego usa herramientas normales (en lugar de ) para crear un archivo con el mismo nombre, entonces el nuevo archivo no está vinculado al archivo anterior. Considere la siguiente forma de comparar enlaces duros y enlaces simbólicos, para comprender cómo funcionan:/home/user/newfile-link2.txtln
●	Un vínculo físico apunta un nombre a los datos de un dispositivo de almacenamiento.
●	Un enlace simbólico apunta un nombre a otro nombre, que apunta a los datos de un dispositivo de almacenamiento.
Un enlace simbólico puede apuntar a un directorio. El enlace simbólico actúa como el directorio. Si se utiliza para cambiar al enlace simbólico, el directorio de trabajo actual se convierte en el directorio enlazado. Algunas herramientas pueden rastrear que siguió un enlace simbólico para llegar allí. Por ejemplo, de forma predeterminada, actualiza el directorio de trabajo actual mediante el nombre del vínculo simbólico en lugar del nombre del directorio real. Si desea actualizar el directorio de trabajo actual utilizando el nombre del directorio real, puede usar la opción.cdcd-P
En el ejemplo siguiente se crea un vínculo simbólico llamado que apunta al directorio./home/user/configfiles/etc
[user@host ~]$ ln -s /etc /home/user/configfiles
[user@host ~]$ cd /home/user/configfiles
[user@host configfiles]$ pwd
/home/user/configfiles
[user@host configfiles]$ cd -P /home/user/configfiles
[user@host etc]$ pwd
/etc
Referencias
ln(1) página de manual
info ln (Hacer enlaces entre archivos)
Ejercicio guiado: Establecer vínculos entre archivos
Cree enlaces duros y enlaces simbólicos y compare los resultados.
Resultados
●	Cree enlaces físicos y enlaces simbólicos entre archivos.
Como usuario de la máquina, use el comando para preparar el sistema para este ejercicio.studentworkstationlab
Este comando prepara el entorno y garantiza que todos los recursos necesarios estén disponibles.
[student@workstation ~]$ lab start files-make
Instrucciones
Utilice el comando para iniciar sesión en la máquina como usuario. La configuración del sistema admite el uso de claves SSH para la autenticación; por lo tanto, no necesita una contraseña.sshserverastudent
[student@workstation ~]$ ssh student@servera
...output omitted...
1.	[student@servera ~]$
2.	Cree el vínculo físico para el archivo. Compruebe el recuento de vínculos para el archivo original y el nuevo archivo vinculado./home/student/links/file.hardlink/home/student/files/target.file
Vea el recuento de enlaces del archivo./home/student/files/target.file
[student@servera ~]$ ls -l files/target.file
	25179485 -rw-r--r--. 1 student student 11 Sep 13 22:42 files/target.file
Crea el enlace duro. Vincúlalo al archivo./home/student/links/file.hardlink/home/student/files/target.file
[student@servera ~]$ ln /home/student/files/target.file \
	    /home/student/links/file.hardlink
Verifique el recuento de enlaces y el número de inodo para el archivo original y el archivo de enlace. El recuento de enlaces debe ser y el número de inodo debe ser el mismo para ambos archivos./home/student/files/target.file/home/student/files/file.hardlink2
[student@servera ~]$ ls -l files/target.file links/file.hardlink
25179485 -rw-r--r--. 2 student student 11 Sep 13 22:42 files/target.file
	25179485 -rw-r--r--. 2 student student 11 Sep 13 22:42 links/file.hardlink
3.	Cree el enlace simbólico que apunta al directorio de la máquina. Verifique el enlace simbólico recién creado./home/student/tempdir/tmpservera
	Cree el enlace simbólico al directorio./home/student/tempdir/tmp
[student@servera ~]$ ln -s /tmp /home/student/tempdir
Utilice el comando para verificar el vínculo simbólico recién creado.ls -l
[student@servera ~]$ ls -l /home/student/tempdir
	9224643 lrwxrwxrwx. 1 student student 5 Sep 13 22:50 /home/student/tempdir -> /tmp/
Regrese al sistema como usuario.workstationstudent
[student@servera ~]$ exit
logout
Connection to servera closed.
4.	[student@workstation ~]$
Terminar
En la máquina, cambie al directorio principal del usuario y utilice el comando para completar este ejercicio. Este paso es importante para garantizar que los recursos de ejercicios anteriores no afecten los próximos ejercicios.workstationstudentlab
[student@workstation ~]$ lab finish files-make
Hacer coincidir nombres de archivo con expansiones de shell
Objetivos
●	Ejecute de manera eficiente comandos que afectan a muchos archivos mediante el uso de características de coincidencia de patrones del shell de Bash.
Expansiones de línea de comandos
Cuando escribe un comando en el indicador del shell de Bash, el shell procesa esa línea de comandos a través de múltiples Expansiones antes de ejecutarlo. Puede usar estas expansiones de shell para realizar tareas complejas que de otro modo serían difíciles o imposibles.
Las siguientes son las principales expansiones que realiza el shell Bash:
●	Expansión de aparatos ortopédicos, que puede generar varias cadenas de caracteres
●	Expansión de tilde, que se expanden a una ruta de acceso a un directorio de inicio de usuario
●	Expansión variable, que reemplaza el texto por el valor almacenado en una variable de shell
●	Sustitución de comandos, que reemplaza el texto con la salida de un comando
●	Expansión del nombre de ruta, que ayuda a seleccionar uno o más archivos mediante la coincidencia de patrones
Expansión del nombre de ruta, históricamente llamada globbing, es una de las características más útiles de Bash. Con esta función, es más fácil administrar muchos archivos. Mediante el uso de metacaracteres que "expanden" para que coincidan con los nombres de archivo y ruta que está buscando, los comandos pueden actuar en un conjunto específico de archivos a la vez.
Expansión de nombres de ruta y coincidencia de patrones
La expansión de nombre de ruta expande un patrón de caracteres especiales que representan comodines o clases de caracteres en una lista de nombres de archivo que coinciden con el patrón. Antes de que el shell ejecute el comando, reemplaza el patrón con la lista de nombres de archivo que coincidían. Si el patrón no coincide con nada, el shell intenta usar el patrón como argumento literal para el comando que ejecuta. En la tabla siguiente se enumeran los metacaracteres comunes y las clases de patrones que se usan para la coincidencia de patrones.
Tabla 3.2. Tabla de metacaracteres y coincidencias
Patrón	Partidos
*	Cualquier cadena de cero o más caracteres
?	Cualquier carácter individual
[abecedario...]	Cualquier carácter de la clase encerrada (entre corchetes)
[!abecedario...]	Cualquier personaje no en la clase adjunta
[^abecedario...]	Cualquier personaje no en la clase adjunta
[[:alfa:]]	Cualquier carácter alfabético
[[:inferior:]]	Cualquier carácter en minúscula
[[:superior:]]	Cualquier carácter en mayúscula
[[:alnum:]]	Cualquier carácter alfabético o dígito
[[:p unct:]]	Cualquier carácter imprimible que no sea un espacio o alfanumérico
[[:d igit:]]	Cualquier dígito de 0 a 9
[[:espacio:]]	Cualquier carácter de espacio en blanco, que puede incluir tabulaciones, nuevas líneas, retornos de carro, feeds de formulario o espacios

Para el siguiente ejemplo, imagine que ejecutó los siguientes comandos para crear algunos archivos de ejemplo:
[user@host ~]$ mkdir glob; cd glob
[user@host glob]$ touch alfa bravo charlie delta echo able baker cast dog easy
[user@host glob]$ ls
able  alfa  baker  bravo  cast  charlie  delta  dog  easy  echo
[user@host glob]$
En el siguiente ejemplo, los dos primeros comandos usan coincidencias de patrones simples con el asterisco (*) para hacer coincidir todos los nombres de archivo que comienzan con "a" y todos los nombres de archivo que contienen una "a", respectivamente. El tercer comando usa el asterisco y los corchetes para hacer coincidir todos los nombres de archivo que comienzan con "a" o "c".
[user@host glob]$ ls a*
able  alfa
[user@host glob]$ ls *a*
able  alfa  baker  bravo  cast  charlie  delta  easy
[user@host glob]$ ls [ac]*
able  alfa  cast  charlie
En el ejemplo siguiente también se usan caracteres de signo de interrogación (?) para que coincidan con algunos de esos nombres de archivo. Los dos comandos solo coinciden con nombres de archivo con cuatro y cinco caracteres de longitud, respectivamente.
[user@host glob]$ ls ????
able  cast  easy  echo
[user@host glob]$ ls ?????
baker  bravo  delta
Expansión de aparatos ortopédicos
La expansión de llaves se utiliza para generar cadenas discrecionales de caracteres. Las llaves contienen una lista de cadenas separadas por comas o una expresión de secuencia. El resultado incluye el texto que precede o sigue a la definición de llave. Las expansiones de llaves pueden estar anidadas, una dentro de otra. También puede usar la sintaxis de doble punto (..), que se expande a una secuencia. Por ejemplo, la sintaxis de doble punto dentro de llaves se expande a .{m..p}m n o p
[user@host glob]$ echo {Sunday,Monday,Tuesday,Wednesday}.log
Sunday.log Monday.log Tuesday.log Wednesday.log
[user@host glob]$ echo file{1..3}.txt
file1.txt file2.txt file3.txt
[user@host glob]$ echo file{a..c}.txt
filea.txt fileb.txt filec.txt
[user@host glob]$ echo file{a,b}{1,2}.txt
filea1.txt filea2.txt fileb1.txt fileb2.txt
[user@host glob]$ echo file{a{1,2},b,c}.txt
filea1.txt filea2.txt fileb.txt filec.txt
Un uso práctico de la expansión de llaves es crear varios archivos o directorios.
[user@host glob]$ mkdir ../RHEL{7,8,9}
[user@host glob]$ ls ../RHEL*
RHEL7 RHEL8 RHEL9
Expansión de tilde
El carácter tilde (~) coincide con el directorio principal del usuario actual. Si comienza con una cadena de caracteres que no sea una barra diagonal (/), el shell interpreta la cadena hasta esa barra diagonal como un nombre de usuario, si coincide, y reemplaza la cadena con la ruta absoluta al directorio principal de ese usuario. Si no coincide ningún nombre de usuario, el shell usa una tilde real seguida de la cadena de caracteres.
En el siguiente ejemplo, el comando muestra el valor de la tilde ().echo~
[user@host glob]$ echo ~root
/root
[user@host glob]$ echo ~user
/home/user
[user@host glob]$ echo ~/glob
/home/user/glob
[user@host glob]$ echo ~nonexistinguser
~nonexistinguser
Expansión variable
Una variable actúa como un contenedor con nombre que almacena un valor en la memoria. Las variables simplifican el acceso y la modificación de los datos almacenados, ya sea desde la línea de comandos o dentro de un script de shell.
Puede asignar datos como valor a una variable con la siguiente sintaxis:
[user@host ~]$ VARIABLENAME=value
Puede utilizar la expansión de variables para convertir el nombre de la variable en su valor en la línea de comandos. Si una cadena comienza con un signo de dólar ($), el shell intenta usar el resto de esa cadena como nombre de variable y reemplazarlo con el valor de la variable.
[user@host ~]$ USERNAME=operator
[user@host ~]$ echo $USERNAME
operator
Para evitar errores debidos a otras expansiones de shell, puede poner el nombre de la variable entre llaves, por ejemplo.${VARIABLENAME}
[user@host ~]$ USERNAME=operator
[user@host ~]$ echo ${USERNAME}
operator
Los nombres de variables solo pueden contener letras (mayúsculas y minúsculas), números y guiones bajos. Los nombres de variables distinguen entre mayúsculas y minúsculas y no pueden comenzar con un número.
Sustitución de comandos
La sustitución de comandos permite que la salida de un comando reemplace al propio comando en la línea de comandos. La sustitución de comandos se produce cuando se incluye un comando entre paréntesis y lo precede con un signo de dólar (). El formulario puede anidar varias expansiones de comandos entre sí.$$(command)
[user@host glob]$ echo Today is $(date +%A).
Today is Wednesday.
[user@host glob]$ echo The time is $(date +%M) minutes past $(date +%l%p).
The time is 26 minutes past 11AM.
Nota
Una forma anterior de sustitución de comandos utiliza comillas invertidas: 'mandar`. Aunque el shell de Bash todavía acepta este formato, trate de evitarlo porque es fácil confundir visualmente las comillas invertidas con las comillas simples, y las comillas invertidas no se pueden anidar.
Proteger los argumentos de la expansión
Muchos caracteres tienen un significado especial en el shell de Bash. Para evitar expansiones de shell en partes de la línea de comandos, puede citar y escapar caracteres y cadenas.
La barra invertida () es un carácter de escape en el shell de Bash. Protege al siguiente personaje de la expansión.\
[user@host glob]$ echo The value of $HOME is your home directory.
The value of /home/user is your home directory.
[user@host glob]$ echo The value of \$HOME is your home directory.
The value of $HOME is your home directory.
En el ejemplo anterior, con el signo de dólar protegido de la expansión, Bash lo trata como un carácter regular, sin expansión variable en .$HOME
Para proteger las cadenas de caracteres más largas, puede utilizar comillas simples () o comillas dobles () para encerrar las cadenas. Tienen efectos ligeramente diferentes. Las comillas simples detienen toda expansión de shell. Parada de comillas dobles '"más expansión de la cáscara.
Las comillas dobles suprimen los caracteres especiales que no sean el signo de dólar (), la barra diagonal inversa (), el acento grave (') y el signo de exclamación () para que no operen dentro del texto entre comillas. Las comillas dobles bloquean la expansión del nombre de ruta, pero aún permiten que ocurra la sustitución de comandos y la expansión de variables.$\!
[user@host glob]$ myhost=$(hostname -s); echo $myhost
host
[user@host glob]$ echo "***** hostname is ${myhost} *****"
***** hostname is host *****
Usar comillas simples para interpretar todo texto entre las comillas literalmente.
[user@host glob]$ echo "Will variable $myhost evaluate to $(hostname -s)?"
Will variable host evaluate to host?
[user@host glob]$ echo 'Will variable $myhost evaluate to $(hostname -s)?'
Will variable $myhost evaluate to $(hostname -s)?
Importante
Es fácil confundir las comillas simples ( ' ) y el acento inverso de sustitución de comandos ( ' ), tanto en la pantalla como en el teclado. El uso de uno cuando se quiere usar el otro conduce a un comportamiento inesperado del shell.
Referencias
bash(1), (1), (7), (3), (1), (7) y (1) páginas de manualcdglobisalphalspath_resolutionpwd
Laboratorio: Administrar archivos desde la línea de comandos
Cree, mueva y elimine archivos y directorios de manera eficiente mediante el shell y varias técnicas de coincidencia de nombres de archivo.
Resultados
●	Utilice comodines para localizar y manipular archivos.
Como usuario de la máquina, use el comando para preparar el sistema para este ejercicio.studentworkstationlab
Este comando prepara el entorno y garantiza que todos los recursos necesarios estén disponibles.
[student@workstation ~]$ lab start files-review
Instrucciones
1.	Utilice el comando para iniciar sesión en la máquina como usuario. La configuración del sistema admite el uso de claves SSH para la autenticación.sshserverbstudent
[student@workstation ~]$ ssh student@serverb
2.	...output omitted...
3.	Cree un directorio llamado en el directorio. El directorio se coloca en el directorio principal del usuario. Cree dos archivos vacíos en el directorio llamado y .project_plansDocumentsDocumentsstudentproject_plansseason1_project_plan.odfseason2_project_plan.odf
Sugerencia: Si el directorio no existe, use la opción de comando para crearlo.~/Documentsmkdir-p
[student@serverb ~]$ mkdir -p ~/Documents/project_plans
[student@serverb ~]$ touch \
~/Documents/project_plans/{season1,season2}_project_plan.odf
[student@serverb ~]$ ls -lR Documents/
Documents/:
total 0
drwxr-xr-x. 2 student student 70 Mar  7 03:50 project_plans

Documents/project_plans:
total 0
-rw-r--r--. 1 student student 0 Mar  7 03:50 season1_project_plan.odf
4.	-rw-r--r--. 1 student student 0 Mar  7 03:50 season2_project_plan.odf
5.	Cree conjuntos de archivos de práctica vacíos para usar en este laboratorio. Si no reconoce inmediatamente el atajo de expansión de shell previsto, utilice la solución para aprender y practicar. Utilice la finalización de tabulación de shell para localizar nombres de ruta de archivo. Cree 12 archivos con nombres en el directorio. Reemplazar tv_seasonX_episodeY.ogg/home/studentX con el número de temporada y Y con el episodio de esa temporada, durante dos temporadas de seis episodios cada una.
[student@serverb ~]$ touch tv_season{1..2}_episode{1..6}.ogg
[student@serverb ~]$ ls tv*
tv_season1_episode1.ogg  tv_season1_episode5.ogg  tv_season2_episode3.ogg
tv_season1_episode2.ogg  tv_season1_episode6.ogg  tv_season2_episode4.ogg
tv_season1_episode3.ogg  tv_season2_episode1.ogg  tv_season2_episode5.ogg
6.	tv_season1_episode4.ogg  tv_season2_episode2.ogg  tv_season2_episode6.ogg
7.	Como autor de una exitosa serie de novelas de misterio, está editando los capítulos de su próximo bestseller para su publicación. Crea ocho archivos con nombres. Reemplazar mystery_chapterX.odfX con los números del 1 al 8.
[student@serverb ~]$ touch mystery_chapter{1..8}.odf
[student@serverb ~]$ ls mys*
mystery_chapter1.odf  mystery_chapter4.odf  mystery_chapter7.odf
mystery_chapter2.odf  mystery_chapter5.odf  mystery_chapter8.odf
8.	mystery_chapter3.odf  mystery_chapter6.odf
9.	Use un solo comando para crear dos subdirectorios llamados y debajo del directorio para organizar los episodios de TV. Mueva los episodios de TV apropiados a los subdirectorios de temporada. Utilice solo dos comandos y especifique destinos con sintaxis relativa.season1season2Videos
Cree dos subdirectorios llamados y debajo del directorio mediante un solo comando.season1season2Videos
[student@serverb ~]$ mkdir -p Videos/season{1..2}
[student@serverb ~]$ ls Videos
	season1  season2
Mueva los episodios de TV apropiados a los subdirectorios de temporada usando solo dos comandos.
[student@serverb ~]$ mv tv_season1* Videos/season1
[student@serverb ~]$ mv tv_season2* Videos/season2
[student@serverb ~]$ ls -R Videos
Videos:
season1  season2

Videos/season1:
tv_season1_episode1.ogg  tv_season1_episode3.ogg  tv_season1_episode5.ogg
tv_season1_episode2.ogg  tv_season1_episode4.ogg  tv_season1_episode6.ogg

Videos/season2:
tv_season2_episode1.ogg  tv_season2_episode3.ogg  tv_season2_episode5.ogg
	tv_season2_episode2.ogg  tv_season2_episode4.ogg  tv_season2_episode6.ogg
10.	Cree una jerarquía de directorios de dos niveles con un solo comando para organizar los capítulos de libros misteriosos. Cree el subdirectorio en el directorio y cree el subdirectorio en el nuevo directorio. Cree tres subdirectorios más directamente debajo del directorio con un solo comando. Asigne a estos subdirectorios el nombre , , y . No es necesario utilizar el comando para crear elementos primarios porque el directorio primario existe.my_bestsellerDocumentschaptersmy_bestsellermy_bestsellereditorchangesvacationmkdir -pmy_bestseller
Cree el directorio debajo del directorio. Cree el directorio debajo del directorio.my_bestsellerDocumentschaptersmy_bestseller
[student@serverb ~]$ mkdir -p Documents/my_bestseller/chapters
[student@serverb ~]$ ls -R Documents
Documents:
my_bestseller  project_plans

Documents/my_bestseller:
chapters

Documents/my_bestseller/chapters:

Documents/project_plans:
	season1_project_plan.odf  season2_project_plan.odf
Cree tres directorios denominados , , y , en el directorio mediante un solo comando.editorchangesvacationmy_bestseller
[student@serverb ~]$ mkdir Documents/my_bestseller/{editor,changes,vacation}
[student@serverb ~]$ ls -R Documents
Documents:
my_bestseller  project_plans

Documents/my_bestseller:
changes  chapters  editor  vacation

Documents/my_bestseller/changes:

Documents/my_bestseller/chapters:

Documents/my_bestseller/editor:

Documents/my_bestseller/vacation:

Documents/project_plans:
	season1_project_plan.odf  season2_project_plan.odf
11.	Cambie al directorio. Utilice el acceso directo del directorio de inicio tilde () para mover todos los capítulos del libro al directorio, que ahora es su directorio actual. Utilice la sintaxis más sencilla para especificar el directorio de destino.chapters~chapters
Desea enviar los dos primeros capítulos al editor para su revisión. Mueva solo esos dos capítulos al directorio para evitar modificarlos durante la revisión. A partir del subdirectorio, utilice la expansión de llaves con un rango para especificar los nombres de archivo de capítulo que se van a mover y una ruta relativa para el directorio de destino.editorchapters
Mientras está de vacaciones, tiene la intención de escribir los capítulos 7 y 8. Utilice un solo comando para mover los archivos del directorio al directorio. Especifique los nombres de archivo de capítulo mediante la expansión de llaves con una lista de cadenas y sin usar caracteres comodín.chaptersvacation
Cambie al directorio y use el acceso directo del directorio de inicio tilde () para mover todos los capítulos del libro al directorio.chapters~chapters
[student@serverb ~]$ cd Documents/my_bestseller/chapters
[student@serverb chapters]$ mv ~/mystery_chapter* .
[student@serverb chapters]$ ls
mystery_chapter1.odf  mystery_chapter4.odf  mystery_chapter7.odf
mystery_chapter2.odf  mystery_chapter5.odf  mystery_chapter8.odf
	mystery_chapter3.odf  mystery_chapter6.odf
Mueva los dos primeros capítulos al directorio. Utilice la expansión de llaves con un rango para especificar los nombres de archivo de capítulo que se van a mover y una ruta relativa para el directorio de destino.editor
[student@serverb chapters]$ mv mystery_chapter{1..2}.odf ../editor
[student@serverb chapters]$ ls
mystery_chapter3.odf  mystery_chapter5.odf  mystery_chapter7.odf
mystery_chapter4.odf  mystery_chapter6.odf  mystery_chapter8.odf
[student@serverb chapters]$ ls ../editor
	mystery_chapter1.odf  mystery_chapter2.odf
Utilice un solo comando para mover los capítulos 7 y 8 del directorio al directorio. Especifique los nombres de archivo de capítulo mediante la expansión de llaves con una lista de cadenas y sin usar caracteres comodín.chaptersvacation
[student@serverb chapters]$ mv mystery_chapter{7,8}.odf ../vacation
[student@serverb chapters]$ ls
mystery_chapter3.odf  mystery_chapter5.odf
mystery_chapter4.odf  mystery_chapter6.odf
[student@serverb chapters]$ ls ../vacation
	mystery_chapter7.odf  mystery_chapter8.odf
12.	Cambie su directorio de trabajo a , y luego copie el primer episodio de la temporada en el directorio. Utilice un solo comando para cambiar de su directorio de trabajo al directorio. Enumere sus archivos. Utilice el comando ~/Videos/season2vacationcd~/Documents/my_bestseller/vacationdirectorio de trabajo anterior para volver al directorio. (Este argumento se realiza correctamente si el último cambio de directorio con el comando usó solo un comando en lugar de varios comandos). En el directorio, copie el archivo del episodio 2 en el directorio. Utilice el acceso directo de nuevo para volver al directorio.season2cdcdseason2vacationvacation
Cambie su directorio de trabajo a , y luego copie el primer episodio de la temporada en el directorio.~/Videos/season2vacation
[student@serverb chapters]$ cd ~/Videos/season2
	[student@serverb season2]$ cp *episode1.ogg ~/Documents/my_bestseller/vacation
Use un solo comando para cambiar de su directorio de trabajo al directorio, enumere sus archivos y use el argumento para volver al directorio anterior. Copie el archivo del episodio 2 en el directorio. Use el comando con el argumento para volver al directorio.cd~/ï»¿Documents/my_bestseller/vacation-vacationcd-vacation
[student@serverb season2]$ cd ~/Documents/my_bestseller/vacation
[student@serverb vacation]$ ls
mystery_chapter7.odf  mystery_chapter8.odf  tv_season2_episode1.ogg
[student@serverb vacation]$ cd -
/home/student/Videos/season2
[student@serverb season2]$ cp *episode2.ogg ~/Documents/my_bestseller/vacation
[student@serverb season2]$ cd -
/home/student/Documents/my_bestseller/vacation
[student@serverb vacation]$ ls
mystery_chapter7.odf  tv_season2_episode1.ogg
	mystery_chapter8.odf  tv_season2_episode2.ogg
13.	Los autores de los capítulos 5 y 6 quieren experimentar con posibles cambios. Copie ambos archivos del directorio al directorio para evitar que estos cambios modifiquen los archivos originales. Vaya al directorio. Utilice la coincidencia de patrones entre corchetes para especificar los números de capítulo que se van a hacer coincidir en el argumento del comando.~/Documents/my_bestseller/chapters~/Documents/my_bestseller/changes~/Documents/my_bestsellerfilenamecp
[student@serverb vacation]$ cd ~/Documents/my_bestseller
[student@serverb my_bestseller]$ cp chapters/mystery_chapter[56].odf changes
[student@serverb my_bestseller]$ ls chapters
mystery_chapter3.odf  mystery_chapter5.odf
mystery_chapter4.odf  mystery_chapter6.odf
[student@serverb my_bestseller]$ ls changes
14.	mystery_chapter5.odf  mystery_chapter6.odf
15.	Cambie su directorio actual al directorio y use el comando con sustitución de comandos para copiar el archivo en un nuevo archivo que incluya la fecha completa. Utilice el formato de nombre.changesdate +%Fmystery_chapter5.odfmystery_chapter5_YYYY-MM-DD.odf
Mediante la sustitución de comandos con el comando, haga otra copia de , y agregue la marca de tiempo actual (como el número de segundos desde la época, 1970-01-01 00:00 UTC) para garantizar un nombre de archivo único.date +%smystery_chapter5.odf
[student@serverb my_bestseller]$ cd changes
[student@serverb changes]$ cp mystery_chapter5.odf \
mystery_chapter5_$(date +%F).odf
[student@serverb changes]$ cp mystery_chapter5.odf \
mystery_chapter5_$(date +%s).odf
[student@serverb changes]$ ls
mystery_chapter5_1646644424.odf  mystery_chapter5.odf
16.	mystery_chapter5_2022-03-07.odf  mystery_chapter6.odf
17.	Después de una revisión adicional, decide que no necesita los cambios en la trama. Elimine el directorio.changes
Si es necesario, navegue hasta el directorio y elimine todos los archivos dentro del directorio. No puede eliminar un directorio cuando es el directorio de trabajo actual.changes
Cambie al directorio principal del directorio. Intente eliminar el directorio vacío mediante el comando sin la opción recursiva. Este intento debería fallar. Finalmente, use el comando para eliminar el directorio vacío, que se realiza correctamente.changesrm-rrmdir
Cuando terminan las vacaciones, ya no necesita el directorio. Elimínelo usando el comando con el comando vacationrmrecursivo opción.
Cuando haya terminado, vuelva al directorio principal del usuario.student
Elimine el directorio. Cambie al directorio primario del directorio e intente eliminar el directorio vacío mediante el comando sin la opción recursiva, que debería fallar. Utilice el comando para eliminar el directorio vacío.changeschangesrm-rrmdir
[student@serverb changes]$ rm mystery*
[student@serverb changes]$ cd ..
[student@serverb my_bestseller]$ rm changes
rm: cannot remove 'changes': Is a directory
[student@serverb my_bestseller]$ rmdir changes
[student@serverb my_bestseller]$ ls
	chapters  editor  vacation
Elimine el directorio mediante el comando con la opción. Vuelva al directorio principal del usuario.vacationrm-rstudent
[student@serverb my_bestseller]$ rm -r vacation
[student@serverb my_bestseller]$ ls
chapters  editor
[student@serverb my_bestseller]$ cd
	[student@serverb ~]$
18.	Cree un vínculo duro al archivo llamado . Un vínculo físico protege contra la eliminación accidental del archivo original y mantiene el archivo de copia de seguridad actualizado a medida que cambia el archivo original.~/Documents/project_plans/season2_project_plan.odf~/Documents/backups/season2_project_plan.odf.back
Sugerencia: Si el directorio no existe, use el comando para crearlo.~/Documents/backupsmkdir
Cree un vínculo duro al archivo llamado .~/Documents/project_plans/season2_project_plan.odf~/Documents/backups/season2_project_plan.odf.back
[student@serverb ~]$ mkdir ~/Documents/backups
[student@serverb ~]$ ln ~/Documents/project_plans/season2_project_plan.odf \
~/Documents/backups/season2_project_plan.odf.back
[student@serverb ~]$ ls -lR ~/Documents/
/home/student/Documents/:
total 0
drwxr-xr-x. 2 student student 43 Mar  7 04:18 backups
drwxr-xr-x. 4 student student 36 Mar  7 04:16 my_bestseller
drwxr-xr-x. 2 student student 70 Mar  7 03:50 project_plans

/home/student/Documents/backups:
total 0
-rw-r--r--. 2 student student 0 Mar  7 03:50 season2_project_plan.odf.back

/home/student/Documents/my_bestseller:
total 0
drwxr-xr-x. 2 student student 118 Mar  7 04:07 chapters
drwxr-xr-x. 2 student student  62 Mar  7 04:06 editor

/home/student/Documents/my_bestseller/chapters:
total 0
-rw-r--r--. 1 student student 0 Mar  7 03:56 mystery_chapter3.odf
-rw-r--r--. 1 student student 0 Mar  7 03:56 mystery_chapter4.odf
-rw-r--r--. 1 student student 0 Mar  7 03:56 mystery_chapter5.odf
-rw-r--r--. 1 student student 0 Mar  7 03:56 mystery_chapter6.odf

/home/student/Documents/my_bestseller/editor:
total 0
-rw-r--r--. 1 student student 0 Mar  7 03:56 mystery_chapter1.odf
-rw-r--r--. 1 student student 0 Mar  7 03:56 mystery_chapter2.odf

/home/student/Documents/project_plans:
total 0
-rw-r--r--. 1 student student 0 Mar  7 03:50 season1_project_plan.odf
	-rw-r--r--. 2 student student 0 Mar  7 03:50 season2_project_plan.odf
Observe que el recuento de vínculos es para ambos y archivos.2season2_project_plan.odf.backseason2_project_plan.odf
Regrese al sistema como usuario.workstationstudent
[student@serverb ~]$ exit
logout
Connection to serverb closed.
	[student@workstation ~]$
Evaluación
Como usuario de la máquina, utilice el comando para calificar el trabajo. Corrija los errores notificados y vuelva a ejecutar el comando hasta que se realice correctamente.studentworkstationlab
[student@workstation ~]$ lab grade files-review
Terminar
En la máquina, cambie al directorio principal del usuario y utilice el comando para completar este ejercicio. Este paso es importante para garantizar que los recursos de ejercicios anteriores no afecten los próximos ejercicios.workstationstudentlab
[student@workstation ~]$ lab finish files-review
Resumen
●	Los archivos en un sistema Linux se organizan en un único árbol invertido de directorios, una jerarquía de sistema de archivos.
●	Las rutas absolutas comienzan con un carácter de barra diagonal () y especifican la ubicación de un archivo en la jerarquía del sistema de archivos./
●	Las rutas relativas no comienzan con un carácter de barra diagonal.
●	Las rutas de acceso relativas especifican una ubicación de archivo en relación con el directorio de trabajo actual.
●	Puede usar comandos en combinación con los caracteres especiales punto (), punto doble () y tilde () para hacer referencia a una ubicación de archivo en el sistema de archivos....~
●	Los comandos , , , y son comandos clave para administrar archivos en Linux.mkdirrmdircpmvrm
●	Los vínculos físicos y los vínculos blandos son formas diferentes para que varios nombres de archivo apunten a los mismos datos.
●	El shell de Bash proporciona características de coincidencia de patrones, expansión y sustitución para ayudarlo a ejecutar comandos de manera eficiente.
Capítulo 4. Obtenga ayuda en Red Hat Enterprise Linux
Leer páginas del manual
Ejercicio guiado: Leer páginas del manual
Laboratorio: Obtener ayuda en Red Hat Enterprise Linux
Resumen
Abstracto
Gol	Resolver problemas mediante sistemas de ayuda locales.
Objetivos	●	
Encuentre información en las páginas del manual del sistema Linux local.
Secciones	●	
Leer páginas del manual (y ejercicio guiado)
Laboratorio	●	
Obtenga ayuda en Red Hat Enterprise Linux
Leer páginas del manual
Objetivos
●	Encuentre información en las páginas del manual del sistema Linux local.
Introducción a las páginas del manual de Linux
Una fuente de documentación que generalmente está disponible en el sistema local son las páginas de manual del sistema o páginas de manual. Los paquetes de software incluyen estas páginas para proporcionar documentación y puede acceder a ellas desde la línea de comandos mediante el comando. Las páginas se almacenan en subdirectorios del directorio.man/usr/share/man
Las páginas de manual se originaron en el histórico Manual del programador de Linux, que debido a su tamaño se divide en varias secciones. Cada sección contiene información sobre un tema en particular.
Tabla 4.1. Secciones comunes del manual de Linux
Sección	Tipo de contenido	Descripción
1	Comandos de usuario	Programas ejecutables y de shell
2	Llamadas al sistema	Rutinas del kernel que se invocan desde el espacio de usuario
3	Funciones de la biblioteca	Proporcionado por bibliotecas de programas
4	Archivos especiales	Como archivos de dispositivo
5	Formatos de archivo	Para muchos archivos y estructuras de configuración
6	Juegos y salvapantallas	Sección histórica para programas divertidos
7	Convenios, normas y misceláneas	Protocolos y sistemas de archivos
8	Administración del sistema y comandos privilegiados	Tareas de mantenimiento
9	Linux kernel API	Llamadas internas al kernel

Para distinguir nombres de temas idénticos en diferentes secciones, las referencias de la página de manual incluyen el número de sección entre paréntesis después del tema. Por ejemplo, (1) describe el comando para cambiar contraseñas, mientras que (5) explica el formato de archivo para almacenar cuentas de usuario locales.passwdpasswd/etc/passwd
Para leer páginas de manual específicas, utilice el comando. Las páginas del manual muestran el contenido una pantalla a la vez. El comando busca secciones del manual en orden alfanumérico. Por ejemplo, muestra (1) de forma predeterminada. Para mostrar el tema de la página de manual de una sección específica, puede usar el comando. Por ejemplo, las pantallas (5).man topicmanman passwdpasswdman section topicman 5 passwdpasswd
Los temas populares de administración del sistema se encuentran en las secciones 1 (comandos de usuario), 5 (formatos de archivo) y 8 (comandos administrativos). Los administradores que usan ciertas herramientas de solución de problemas también usan la sección 2 (llamadas al sistema). Las secciones restantes son generalmente para referencia del programador o administración avanzada.
Navegar y buscar páginas de manual
Es una habilidad de administración crítica para buscar temas de manera eficiente y navegar por las páginas de manual. Aunque puede usar herramientas de GUI para configurar recursos comunes del sistema, el uso de la interfaz de línea de comandos es más eficiente. Para navegar por la línea de comandos de manera efectiva, debe poder encontrar la información que necesita en las páginas del manual.
En la tabla siguiente se enumeran algunos comandos de navegación al ver páginas manual:
Tabla 4.2. Navegar por las páginas del manual
Mandar	Resultado
Barra espaciadora	Desplácese hacia adelante (abajo) una pantalla.
Av Pág	Desplácese hacia adelante una pantalla.
PageUp	Desplácese hacia atrás (hacia arriba) una pantalla.
Flecha hacia abajo	Desplácese hacia adelante una línea.
Flecha hacia arriba	Desplácese hacia atrás una línea.
D	Desplácese hacia adelante una media pantalla.
U	Desplácese hacia atrás en media pantalla.
/string	Buscar cuerda en la página de manual.
N	Repita la búsqueda anterior hacia adelante en la página del manual.
Mayús+N	Repita la búsqueda anterior hacia atrás en la página del manual.
G	Vaya al inicio de la página de manual.
Mayús+G	Vaya al final de la página de manual.
Q	Salga de man y regrese al símbolo del shell de comandos.

Importante
Puede usar expresiones regulares para buscar en páginas. Aunque la búsqueda de texto simple (como ) funciona según lo esperado, las expresiones regulares usan metacaracteres (como , , , y ) para una coincidencia de patrones más sofisticada. Por lo tanto, la búsqueda con cadenas que incluyen metacaracteres de expresión de programa, como , puede producir resultados inesperados.manpasswd$*.^make $$$
Puede encontrar más información sobre expresiones regulares y sintaxis en el tema (7) man.regex
Leer páginas de manual
Las páginas de manual separan cada tema en varias partes. La mayoría de los temas usan los mismos encabezados y siguen el mismo orden. Normalmente, un tema no presenta todos los encabezados, porque no todos los encabezados se aplican a todos los temas.
Los encabezados comunes son los siguientes:
Tabla 4.3. Encabezados
Encabezado	Descripción
NOMBRE	Nombre del sujeto, generalmente un comando o nombre de archivo, una breve descripción
SINOPSIS	Resumen de la sintaxis del comando
DESCRIPCIÓN	Descripción para proporcionar una comprensión básica del tema
OPCIONES	Explicación de las opciones de ejecución de comandos
EJEMPLOS	Ejemplos de cómo usar el comando, la función o el archivo
ARCHIVOS	Una lista de archivos y directorios relacionados con la página de manual
VEA TAMBIÉN	Información relacionada, normalmente otros temas de páginas de manual
BUGS	Errores conocidos en el software
AUTOR	Información sobre quién contribuyó al desarrollo del tema

Buscar páginas de manual por palabra clave
Utilice la opción de comando (equivalente al comando) para buscar una palabra clave en los títulos y descripciones de las páginas. Como resultado, la búsqueda de palabras clave muestra una lista de temas de páginas de manual que coinciden con palabras clave con números de sección. Por ejemplo, el siguiente comando busca páginas de manual con la palabra :man-kaproposmanpasswd
[user@host ~]$ man -k passwd
chgpasswd (8)        - update group passwords in batch mode
chpasswd (8)         - update passwords in batch mode
fgetpwent_r (3)      - get passwd file entry reentrantly
getpwent_r (3)       - get passwd file entry reentrantly
...
passwd (1)           - update user's authentication tokens
passwd (1ossl)       - OpenSSL application commands
passwd (5)           - password file
passwd2des (3)       - RFS password encryption
...
La opción de comando (mayúsculas) busca la palabra clave en la página de texto completo, no solo en los títulos y descripciones. Una búsqueda de texto completo utiliza mayores recursos del sistema y lleva más tiempo.man-K
Con la búsqueda de páginas de texto completo, el comando muestra la primera página con una coincidencia. Presione Q para salir de esta primera página y el comando mostrará la página siguiente.manman
En este ejemplo, muestra cada coincidencia y puede ver u omitir cada una.man
[user@host ~]# man -K passwd
--Man-- next: cut(1p) [ view (return) | skip (Ctrl-D) | quit (Ctrl-C) ]
Ctrl-D
--Man-- next: logname(1p) [ view (return) | skip (Ctrl-D) | quit (Ctrl-C) ]
Ctrl-D
--Man-- next: sort(1p) [ view (return) | skip (Ctrl-D) | quit (Ctrl-C) ]
Ctrl-D
--Man-- next: xargs(1) [ view (return) | skip (Ctrl-D) | quit (Ctrl-C) ]
Ctrl-D
--Man-- next: chage(1) [ view (return) | skip (Ctrl-D) | quit (Ctrl-C) ]
Ctrl-C
Nota
Las búsquedas de palabras clave se basan en un índice generado por el comando (8), que debe ejecutarse como .mandbroot
El servicio ejecuta automáticamente el comando al instalar cualquier paquete con páginas de manual.man-db-cache-updatemandb
Referencias
man(1), (8), (7), (1), (1), (2), (5), (7) y (8) páginas de manualmandbman-pageslessintrointrointrointrointro
Ejercicio guiado: Leer páginas del manual
Practica la búsqueda de información relevante mediante el uso de opciones y argumentos.man
Resultados
●	Utilice el sistema manual de Linux y encuentre información útil buscando y navegando.man
Como usuario de la máquina, use el comando para preparar el sistema para este ejercicio.studentworkstationlab
Este comando prepara el entorno y garantiza que todos los recursos necesarios estén disponibles.
[student@workstation ~]$ lab start help-manual
Instrucciones
1.	En , ver la página del manual. Vea las opciones para editar un archivo específico desde la línea de comandos.workstationgeditgedit
Utilice una de las opciones de la página de manual para abrir el archivo con el cursor al final del archivo.gedit/home/student/manualgedit
Ver la página del manual.gedit
[student@workstation ~]$ man gedit
GEDIT(1)    General Commands Manual      GEDIT(1)
NAME
       gedit - text editor for the GNOME Desktop

SYNOPSIS
       gedit [OPTION...] [FILE...] [+LINE[:COLUMN]]
       gedit [OPTION...] -
	...output omitted...
En la página del manual, conozca las opciones para editar un archivo específico desde la línea de comandos.gedit
OPTIONS
...output omitted...
      FILE  Specifies the file to open when gedit starts.
...output omitted...
      `LINE`  For the first file, go to the line specified by LINE (do not insert a space between the "" sign and the number). If LINE is missing, go to the last line.
	...output omitted...
Presione q para salir de la página de manual.
Usar la opción abre un archivo que se pasa como argumento con el cursor al final de la última línea.gedit ` command to open the `manual` file. The missing line number next to the `
[student@workstation ~]$ gedit + manual
this is the first line
	the quick brown fox just came over to greet the lazy poodle!
Confirme que el archivo se abre con el cursor al final de la última línea del archivo. Presione Ctrl+q para cerrar la aplicación.
Lea la página del comando man (1).su
Si omite el usuario , entonces el comando asume que el usuario es . Si el comando va seguido de un solo guión (), inicia un shell de inicio de sesión secundario. Sin el guión, el comando crea un shell secundario sin inicio de sesión que coincide con el entorno actual del usuario.surootsu-su
[student@workstation ~]$ man 1 su
SU(1)              User Commands                      SU(1)
NAME
    su - run a command with substitute user and group ID

SYNOPSIS
    su [options] [-] [user [argument...]]

DESCRIPTION
    su allows to run commands with a substitute user and group ID.

    When called with no user specified, su defaults to running an interactive shell as root.
...output omitted...
OPTIONS
...output omitted...
       -, -l, --login
           Start the shell as a login shell with an environment similar to a real login.
2.	...output omitted...
Nota
Las opciones separadas por comas en una sola línea, como , y , dan como resultado el mismo comportamiento.--l--login
Presione q para salir de la página de manual.
El comando también tiene sus propias páginas de manual. Abra la página del manual de comandos (1).manman
[student@workstation ~]$ man man
MAN(1)             Manual pager utils                                 MAN(1)

NAME
  man - an interface to the on-line reference manuals
...output omitted...
DESCRIPTION
       man is the system's manual pager. Each page argument given to man is
       normally the name of a program, utility or function. The manual page
       associated with each of these arguments is then found and displayed.
       A section, if provided, will direct man to look only in that section
       of the manual.
3.	...output omitted...
Presione q para salir de la página de manual.
El directorio contiene todas las páginas del manual. Busque las páginas binarias, de origen y de manual de la utilidad mediante el comando. Verifique que el directorio contenga las páginas del manual de la utilidad./usr/share/manpasswdwhereis/ï»¿usr/share/manpasswd
[student@workstation ~]$ whereis passwd
4.	passwd: /usr/bin/passwd /etc/passwd /usr/share/man/man1/passwd.1ossl.gz /usr/share/man/man1/passwd.1.gz /usr/share/man/man5/passwd.5.gz
Utilice el comando para enumerar la página del manual con información detallada sobre un archivo ZIP.man -k zip
[student@workstation ~]$ man -k zip
...output omitted...
zipinfo (1) - list detailed information about a ZIP archive
zipnote (1)          - write the comments in zipfile to stdout, edit comments and rename files in zipfile
5.	zipsplit (1)         - split a zipfile into smaller zipfiles
Use el comando para enumerar la página del manual con una lista de parámetros que se pueden pasar al kernel en el momento del arranque.man -k boot
[student@workstation ~]$ man -k boot
binfmt.d (5)         - Configure additional binary formats for executables at boot
bootparam (7)        - introduction to boot time parameters of the Linux kernel
bootup (7)           - System bootup process
6.	...output omitted...
Utilice el comando para encontrar el comando para ajustar los parámetros del sistema de archivos ext4.man -k ext4
[student@workstation ~]$ man -k ext4
...output omitted...
resize2fs (8)        - ext2/ext3/ext4 file system resizer
7.	tune2fs (8)          - adjust tunable filesystem parameters on ext2/ext3/ext4 filesystems
Terminar
En la máquina, cambie al directorio principal del usuario y utilice el comando para completar este ejercicio. Este paso es importante para garantizar que los recursos de ejercicios anteriores no afecten los próximos ejercicios.workstationstudentlab
[student@workstation ~]$ lab finish help-manual
Laboratorio: Obtenga ayuda en RedÂ Hat Enterprise Linux
Busque documentación que le ayude a completar tareas.
Resultados
●	Busque información relevante para los comandos buscando en páginas de manual.
●	Conozca nuevas opciones para los comandos de documentación más comunes.
●	Utilice las herramientas adecuadas para ver e imprimir documentación y otros archivos sin formato de texto.
Como usuario de la máquina, use el comando para preparar el sistema para este ejercicio.studentworkstationlab
Este comando prepara el entorno y garantiza que todos los recursos necesarios estén disponibles.
[student@workstation ~]$ lab start help-review
Instrucciones
1.	En la máquina, determine cómo preparar una página de manual para imprimir. En concreto, busque cuál es el formato predeterminado o el idioma de representación para la impresión.workstation
Utilice el comando para determinar cómo preparar una página de manual para imprimir.man man
[student@worksation ~]$ man man
...output omitted...
  man -t bash | lpr -Pps
      Format the manual page for bash into the default troff or groff format
      and pipe it to the printer named ps. The default output for groff
      is usually PostScript. man --help should advise as to which processor
      is bound to the -t option.
	...output omitted...
Presione q para salir de la página de manual.
Nota
La opción de comando prepara una página de manual para imprimir, utilizando de forma predeterminada PostScript.man-t
2.	Cree un archivo de salida con formato PostScript de la página del manual. Llame al archivo y colóquelo en el directorio principal del usuario. Determine el formato de archivo. Inspeccione el contenido del archivo mediante el comando.passwdpasswd.psstudentpasswd.psless
Nota
Dado que necesita guardar la salida del comando en un archivo, puede usar el símbolo >, que redirige la salida estándar a un archivo.man
Como ejemplo, el siguiente comando enumera los nombres de archivo normales del directorio principal en un archivo.
[student@workstation ~]$ ls > /tmp/my-file-names
Este mandato se enseña con más detalle en un capítulo siguiente.
Utilice el comando para crear un archivo formateado de la página del manual.man -tpasswd
[student@workstation ~]$ man -t passwd > passwd.ps
[student@workstation ~]$ ls -al
...output omitted...
-rw-r--r--. 1 student student 20168 Mar  8 09:02 passwd.ps
	...output omitted...
Utilice el comando para determinar el formato de archivo.file
[student@workstation ~]$ file /home/student/passwd.ps
	/home/student/passwd.ps: PostScript document text conforming DSC level 3.0
Utilice el comando para ver el archivo.less/home/student/passwd.ps
[student@workstation ~]$ less /home/student/passwd.ps
%!PS-Adobe-3.0
%%Creator: groff version 1.22.3
%%CreationDate: Tue Feb 26 11:14:40 2019
%%DocumentNeededResources: font Times-Roman
%%+ font Times-Bold
%%+ font Times-Italic
%%+ font Symbol
%%DocumentSuppliedResources: procset grops 1.22 3
	...output omitted...
Nota
La salida de indica que el archivo está en formato PostScript y puede confirmarlo viendo el contenido del archivo. Observe las líneas de encabezado de la información PostScript. Use q para salir del comando.fileless
3.	Mediante las páginas del manual, busque los comandos que puede utilizar para ver e imprimir archivos PostScript.
Busque en las páginas del manual información sobre los archivos PostScript. Utilice la opción para este propósito.-k
[student@workstation ~]# man -k postscript viewer
enscript (1)         - convert text files to PostScript, HTML, RTF, ANSI, and overstrikes
eps2eps (1)          - Ghostscript PostScript "distiller"
evince (1)           - GNOME document viewer
evince-previewer (1) - show a printing preview of PostScript and PDF documents
evince-thumbnailer (1) - create png thumbnails from PostScript and PDF documents
gcm-viewer (1)       - GNOME Color Manager Profile Viewer Tool
	...output omitted...
Nota
El uso de varias palabras con la opción busca páginas de manual que coincidan con cualquier palabra; como "posdata" -ko "espectador" en sus descripciones. Observe los comandos (1) en la salida.evince
4.	Aprende a usar el visor (1) en el modo de vista previa. Además, determine cómo abrir un documento para comenzar en una página específica. Abra su archivo PostScript usando tres veces: primero usando el modo predeterminado, y luego con la opción de modo de vista previa, y finalmente para comenzar en la página 3. Cierre el archivo de documento cuando termine.evinceevince
Utilice el comando para obtener información sobre cómo utilizar el visor en el modo de vista previa.man evince
[student@workstation ~]$ man evince
...output omitted...
       -i, --page-index=NUMBER
              Open the document on the page with the specified page index (this is the  exact page number, not a page label).
...output omitted...
       -w, --preview
              Run evince as a previewer.
	...output omitted...
Presione q para salir de la página de manual.
Nota
La opción (o ) se abre en modo de vista previa. La opción se abre en la página de inicio especificada.-w--previewevince-ievince
	Utilice el comando para abrir el archivo.evince/home/student/passwd.ps
[student@workstation ~]$ evince /home/student/passwd.ps
	Utilice el comando para abrir el archivo en modo de vista previa.evince -w /home/student/passwd.ps
[student@workstation ~]$ evince -w /home/student/passwd.ps
	Utilice el comando para abrir el archivo en la página 3.evince -i 3 /home/student/passwd.ps
[student@workstation ~]$ evince -i 3 /home/student/passwd.ps
Nota
Mientras que el modo normal admite la visualización a pantalla completa y al estilo de presentación, el modo de vista previa es útil para navegar e imprimir rápidamente. Observe el icono de impresión en la parte superior.evinceevince
5.	Mediante el uso de las páginas de manual, investigue (1) para determinar cómo imprimir cualquier documento para comenzar en una página específica. Sin introducir ningún comando (en ausencia de impresoras), aprenda la sintaxis, en un solo comando, para imprimir solo las páginas 2 y 3 de su archivo PostScript.lp
Utilice el comando para determinar cómo imprimir páginas específicas de un documento.man lp
[student@workstation ~]$ man lp
...output omitted...
       -P page-list
            Specifies which pages to print in the document.  The list can contain a list of numbers and ranges (-) separated by commas, e.g., "1,3-5, 16". The page numbers refer to the output pages and not the document's original pages - options like "number-up" can affect the numbering of the pages.
	...output omitted...
Presione q para salir de la página de manual.
Nota
A partir de (1), aprenderá que la opción especifica la lista de páginas que se imprimirá en el documento. El comando se pone en cola en el archivo lp-Plppredeterminado impresora y envía solo el rango de páginas para comenzar en 2 y terminar en 3. Por lo tanto, una respuesta válida es .lp passwd.ps -P 2-3
6.	Utilice el navegador Firefox para abrir el directorio de la página de manual del sistema () y busque el subdirectorio del paquete. Vea los manuales proporcionados. Una vez que termine de revisar los manuales, busque y busque el subdirectorio del paquete. Vea el archivo, que describe las configuraciones importantes del sistema que se almacenan en el directorio./usr/share/docman-dbman-dbkexec-toolskexec-kdump-howto.txt/etc/sysconfig
	Úselo para ver la documentación del sistema. Examine el subdirectorio. Haga clic en los manuales para verlos.firefox /usr/share/docman-db
[student@workstation ~]$ firefox /usr/share/doc
El comando puede devolver un resultado que no esté relacionado con la consola de Satellite.firefox
Nota
Puede crear marcadores para cualquier directorio de uso frecuente. Después de examinar el directorio, haga clic para abrir y ver la versión de texto del manual y, a continuación, ciérrelo. Haga clic para abrir la versión PostScript. Como se observó anteriormente, es el visor predeterminado del sistema para documentos PostScript y PDF. Cuando termine, cierre el visor.man-dbevinceevince
 
	
En el navegador Firefox, busque el subdirectorio del paquete y vea el archivo. Este archivo describe configuraciones importantes del sistema que se almacenan en el directorio.kexec-toolskexec-kdump-howto.txt/etc/sysconfig
Cierre el documento y Firefox cuando haya terminado.
Evaluación
Como usuario de la máquina, utilice el comando para calificar el trabajo. Corrija los errores notificados y vuelva a ejecutar el comando hasta que se realice correctamente.studentworkstationlab
[student@workstation ~]$ lab grade help-review
Terminar
En la máquina, cambie al directorio principal del usuario y utilice el comando para completar este ejercicio. Este paso es importante para garantizar que los recursos de ejercicios anteriores no afecten los próximos ejercicios.workstationstudentlab
[student@workstation ~]$ lab finish help-review
Resumen
●	Utilice el comando para ver páginas de manual y mostrar información sobre los componentes de un sistema Linux, como archivos, comandos y funciones.man
●	Por convención, para referirse a una página de manual, el nombre de una página va seguido de su número de sección entre paréntesis.
●	Puede utilizar expresiones regulares para buscar contenido en páginas de manual.
Capítulo 5. Crear, ver y editar archivos de texto
Redirigir la salida a un archivo o programa
Cuestionario: Redirigir la salida a un archivo o programa
Editar archivos de texto desde el indicador de shell
Ejercicio guiado: edición de archivos de texto desde la solicitud de shell
Cambiar el entorno de shell
Ejercicio guiado: Cambiar el entorno de Shell
Lab: Crear, ver y editar archivos de texto
Resumen
Abstracto
Gol	Cree, vea y edite archivos de texto desde la salida del comando o en un editor de texto.
Objetivos	●	
Guarde la salida o los errores en un archivo con la redirección de shell y procese la salida del comando a través de varios programas de línea de comandos con tuberías.
●	Cree y edite archivos de texto desde la línea de comandos con el editor.vim
●	Establezca variables de shell para ejecutar comandos y edite scripts de inicio de Bash para establecer variables de shell y entorno para modificar el comportamiento del shell y los programas que se ejecutan desde el shell.
Secciones	●	
Redirigir la salida a un archivo o programa (y cuestionario)
●	Edición de archivos de texto desde la solicitud de Shell (y ejercicio guiado)
●	Cambiar el entorno de Shell (y ejercicio guiado)
Laboratorio	●	
Crear, ver y editar archivos de texto
Redirigir la salida a un archivo o programa
Objetivos
●	Guarde la salida o los errores en un archivo con la redirección de shell y procese la salida del comando a través de varios programas de línea de comandos con tuberías.
Entrada estándar, salida estándar y error estándar
Un programa en ejecución, o proceso, lee la entrada y escribe la salida. Cuando ejecuta un comando desde el símbolo del sistema de shell, normalmente lee su entrada desde el teclado y envía su salida a la ventana de terminal.
Un proceso utiliza canales numerados llamados Descriptores de archivos para obtener entrada y enviar salida. Todos los procesos comienzan con al menos tres descriptores de archivo. Entrada estándar (canal 0) lee la entrada del teclado. Salida estándar (canal 1) envía una salida normal al terminal. Error estándar (canal 2) envía mensajes de error al terminal.
Si un programa abre conexiones separadas a otros archivos, es posible que use descriptores de archivo con números más altos.
 
Figura 5.1: Canales de E/S de proceso (descriptores de archivo)
En la tabla siguiente se resume la información sobre los descriptores de archivo:
Tabla 5.1. Canales (descriptores de archivos)
Número	Nombre del canal	Descripción	Conexión predeterminada	Uso
0	stdin	Entrada estándar	Teclado	Solo lectura
1	stdout	Salida estándar	Terminal	Solo escritura
2	stderr	Error estándar	Terminal	Solo escritura
3+	filename	Otros archivos	Ninguno	Leer, escribir o ambos

Redirigir la salida a un archivo
La redirección de entrada/salida (E/S) cambia la forma en que el proceso obtiene su entrada o salida. En lugar de obtener entrada del teclado o enviar salida y errores a la terminal, el proceso puede leer o escribir en archivos. Con la redirección, puede guardar los mensajes en un archivo en lugar de mostrar la salida en el terminal. Alternativamente, puede usar la redirección para descartar la salida o los errores, de modo que no se muestren en el terminal ni se guarden.
Puede redirigir un proceso para evitar que la salida del proceso aparezca en el terminal. Si redirige a un archivo y el archivo no existe, se crea el archivo. Si el archivo existe y la redirección no se anexa al archivo, la redirección sobrescribe el contenido del archivo. Para descartar la salida de un proceso, puede redirigir al archivo especial vacío que descarta la salida del canal que se redirige a él.stdoutstdout/dev/null
Como se ve en la siguiente tabla, la redirección solamente stdout no suprime la visualización de mensajes de error en el terminal.stderr
Tabla 5.2. Operadores de redirección de salida
Uso	Explicación	Ayuda visual
> archivo	Redirigir para sobrescribir un archivo.stdout	
 

>> archivo	Redirigir para anexar a un archivo.stdout	
 

2> archivo	Redirigir para sobrescribir un archivo.stderr	
 

2> /dev/null	Descarte los mensajes de error redirigiéndolos a .stderr/dev/null	
 

> archivo 2> y 1	Redirigir y sobrescribir el mismo archivo.stdoutstderr	
 

&> archivo		
>> archivo 2> y 1	Redirigir y agregar al mismo archivo.stdoutstderr	
 

&>> archivo		

Importante
El orden de las operaciones de redirección es importante. La siguiente secuencia redirige la salida estándar al archivo y, a continuación, redirige los mensajes de error estándar al mismo lugar que la salida estándar ().output.logoutput.log
> output.log 2>&1
La siguiente secuencia redirige en el orden opuesto. Esta secuencia redirige los mensajes de error estándar al lugar predeterminado para la salida estándar (la ventana de terminal, por lo que no hay cambios) y entonces redirige solo la salida estándar al archivo.output.log
2>&1 > output.log
Por esta razón, algunas personas prefieren usar los operadores de redirección de fusión:
●	&> output.log En lugar de > output.log 2>&1
●	&>> output.log en lugar de (en Bash 4 o RHEL 6 y posteriores)>> output.log 2>&1
Sin embargo, los administradores de sistemas y los programadores prefieren evitar los operadores de redirección de fusión más nuevos cuando usan shells alternativos (conocidos como shells compatibles con Bourne) para comandos de scripting. Estos nuevos operadores de redirección no están estandarizados ni implementados en esos shells, y tienen otras limitaciones.bash
Ejemplos de redirección de salida
Simplifique muchas tareas de administración rutinarias mediante el uso de la redirección. Utilice la tabla anterior para ayudar y considere los siguientes ejemplos:
Guarde una marca de tiempo en el archivo para referencia posterior./tmp/saved-timestamp
[user@host ~]$ date > /tmp/saved-timestamp
Copie las últimas 100 líneas del archivo al archivo./var/log/secure/tmp/last-100-log-secure
[user@host ~]$ tail -n 100 /var/log/secure > /tmp/last-100-log-secure
Concatene los cuatro archivos en un solo archivo en el directorio.steptmp
[user@host ~]$ cat step1.sh step2.log step3 step4 > /tmp/all-four-steps-in-one
Enumere los nombres de archivo ocultos y regulares del directorio de inicio y guarde la salida en el archivo.my-file-names
[user@host ~]$ ls -a > my-file-names
Anexe una línea al archivo existente./tmp/many-lines-of-information
[user@host ~]$ echo "new line of information" >> /tmp/many-lines-of-information
Los siguientes comandos generan mensajes de error porque algunos directorios del sistema son inaccesibles para los usuarios normales. Observe la redirección del mensaje de error.
Redirigir los errores del comando al archivo al ver la salida normal del comando en el terminal.find/tmp/errors
[user@host ~]$ find /etc -name passwd 2> /tmp/errors
Guarde la salida del proceso en el archivo y los mensajes de error en el archivo./tmp/output/tmp/errors
[user@host ~]$ find /etc -name passwd > /tmp/output 2> /tmp/errors
Guarde la salida del proceso en el archivo y descarte los mensajes de error./tmp/output
[user@host ~]$ find /etc -name passwd > /tmp/output 2> /dev/null
Almacene la salida y los errores generados juntos en el archivo./tmp/all-message-output
[user@host ~]$ find /etc -name passwd &> /tmp/all-message-output
Anexe la salida y los errores generados al archivo./tmp/all-message-output
[user@host ~]$ find /etc -name passwd >> /tmp/all-message-output 2>&1
Construir canalizaciones
Un tubería es una secuencia de uno o más comandos separados por el carácter de barra vertical (). Una canalización conecta la salida estándar del primer comando a la entrada estándar del siguiente comando.|
 
Figura 5.8: Tubería de E/S de proceso
Utilice canalizaciones para manipular y dar formato a la salida de un proceso por parte de otros procesos antes de que se envíe al terminal. Imagine que los datos "fluyen" a través de la canalización de un proceso a otro, y son alterados por cada comando en la canalización por la que fluye.
Nota
Las canalizaciones y la redirección de E/S manipulan la salida estándar y la entrada estándar. Las canalizaciones envían la salida estándar de un proceso a la entrada estándar de otro proceso. La redirección envía una salida estándar a los archivos u obtiene una entrada estándar de los archivos.
Ejemplos de canalización
En la lista siguiente se muestran algunos ejemplos de canalización:
Redirigir la salida del comando al comando para mostrarlo en el terminal una pantalla a la vez.lsless
[user@host ~]$ ls -l /usr/bin | less
Redirigir la salida del comando al comando, que cuenta el número de líneas recibidas e imprime ese valor en el terminal.lswc -lls
[user@host ~]$ ls | wc -l
Redirigir la salida del comando al comando para mostrar las primeras 10 líneas, con el resultado final redirigido al archivo.ls -thead/tmp/first-ten-changed-files
[user@host ~]$ ls -t | head -n 10 > /tmp/first-ten-changed-files
Canalizaciones, redireccionamiento y anexión a un archivo
Cuando se combina el redireccionamiento con una canalización, el shell configura primero toda la canalización y, a continuación, redirige la entrada y la salida. Si utiliza la redirección de salida en el medio de una canalización, la salida va al archivo y no al siguiente comando de la canalización.
En el siguiente ejemplo, la salida del comando va al archivo y el comando no muestra nada en el terminal.ls/tmp/saved-outputless
[user@host ~]$ ls > /tmp/saved-output | less
El comando supera esta limitación. En una canalización, copia su entrada estándar a su salida estándar y también redirige su salida estándar a los archivos que se proporcionan como argumentos para el comando. Si imagina los datos como agua que fluye a través de una tubería, puede visualizarlos como una junta en "T" en la tubería que dirige la salida en dos direcciones.teeteetee
 
Figura 5.9: Tubería de E/S de proceso con T
Ejemplos de canalización con el comando tee
El siguiente ejemplo redirige la salida del comando al archivo y la pasa al comando, por lo que se muestra en el terminal una pantalla a la vez.ls/tmp/saved-outputless
[user@host ~]$ ls -l | tee /tmp/saved-output | less
Si usa el comando al final de una canalización, el terminal muestra la salida de los comandos en la canalización y la guarda en un archivo al mismo tiempo.tee
[user@host ~]$ ls -t | head -n 10 | tee /tmp/ten-last-changed-files
Utilice la opción de comando para anexar el contenido a un archivo en lugar de sobrescribirlo.tee-a
[user@host ~]$ ls -l | tee -a /tmp/append-files
Importante
Puede redirigir el error estándar a través de una canalización, pero no puede usar los operadores de redirección de combinación ( y ). El siguiente ejemplo es la manera correcta de redirigir tanto la salida estándar como el error estándar a través de una canalización:&>&>>
[user@host ~]$ find / -name passwd 2>&1 | less
Referencias
info bash (El manual de referencia de GNU Bash)
●	Sección 3.2.3: Tuberías
●	Sección 3.6: Redirecciones
info coreutils 'tee invocation' (El manual de GNU coreutils)
●	Sección 17.1: Redirigir la salida a varios archivos o procesos
bash(1), (1), (1), (1), (1), (1), (1), (1), (1) páginas de manualcatheadlessmailteettywc
Editar archivos de texto desde el indicador de shell
Objetivos
●	Cree y edite archivos de texto desde la línea de comandos con el editor.vim
Editar archivos con Vim
El principio fundamental de diseño de Linux es que admite el almacenamiento de la información y los ajustes de configuración en archivos basados en texto. Estos archivos siguen varias estructuras, como listas de configuraciones, formatos similares a INI, XML estructurado o YAML, y otros. La ventaja de almacenar archivos en una estructura basada en texto es que se editan con cualquier editor de texto.
Vim es una versión mejorada del editor, que se distribuye con sistemas Linux y UNIX. Vim es un editor altamente configurable y eficiente que proporciona edición de pantalla dividida, formato de color y resaltado para editar texto.vi
Beneficios del editor Vim
Cuando un sistema usa un indicador de shell de solo texto, debe saber cómo usar al menos un editor de texto para editar archivos. A continuación, puede editar archivos de configuración basados en texto desde una ventana de terminal o inicios de sesión remotos a través del comando o la consola web. Tampoco necesita acceso a un escritorio gráfico para editar archivos en un servidor, y es posible que ese servidor no necesite ejecutar un entorno de escritorio gráfico.ssh
La razón clave para aprender Vim es que casi siempre se instala de forma predeterminada en un servidor para editar archivos basados en texto. El Interfaz de sistema operativo portátil o POSIX standard especificaba el editor en Linux, y muchos otros sistemas operativos similares a UNIX hacen lo mismo.vi
Vim también se usa a menudo como implementación en otros sistemas operativos o distribuciones estándar. Por ejemplo, macOS actualmente incluye una instalación ligera de Vim de forma predeterminada. Por lo tanto, las habilidades de Vim que se aprenden para Linux también podrían resultar útiles en otros lugares.vi
Comience con Vim
Puede instalar el editor de Vim en Red Hat Enterprise Linux utilizando cualquiera de los dos paquetes. Estos dos paquetes proporcionan diferentes características y comandos Vim para editar archivos basados en texto.
Con el paquete, puede instalar el editor con las características principales. Esta instalación ligera incluye solo las funciones principales y el comando básico. Puede abrir un archivo para editarlo mediante el comando:vim-minimalvivivi
[user@host ~]$ vi filename
Alternativamente, puede usar el paquete para instalar el editor de Vim. Este paquete proporciona un conjunto más completo de funciones, un sistema de ayuda en línea y un programa tutorial. Utilice el comando para iniciar Vim en este modo mejorado:vim-enhancedvim
[user@host ~]$ vim filename
Las características principales del editor Vim están disponibles en ambos comandos.
Si está instalado, se establece un alias de shell para que si los usuarios normales ejecutan el comando, obtengan automáticamente el comando en su lugar. Este alias no se aplica al usuario ni a otros usuarios con UID inferiores a 200 (que utilizan los servicios del sistema).vim-enhancedvivimroot
Si está instalado y un usuario normal desea usar el comando, es posible que tenga que usar el comando para anular el alias temporalmente. Puede utilizar y comparar los conjuntos de características de los dos comandos.vim-enhancedvi\vi\vi --versionvim --version
Modos de funcionamiento de Vim
El editor Vim ofrece varios modos de operación, como Modo de comando, Modo de comando extendido, Modo de edicióny Modo visual. Como usuario de Vim, siempre verifique el modo actual, ya que el efecto de las pulsaciones de teclas varía entre los modos.
 
Figura 5.10: Moverse entre modos Vim
Cuando abre Vim por primera vez, comienza en Modo de comando, que se utiliza para la navegación, cortar y pegar y otras modificaciones de texto. Al presionar la tecla requerida se accede a funciones de edición específicas.
●	Una pulsación de tecla i entra Modo de inserción, donde todo el texto escrito se convierte en contenido de archivo. Al presionar Esc, se vuelve al modo de comando.
●	Una pulsación de tecla v entra Modo visual, donde se pueden seleccionar varios caracteres para la manipulación de texto. Utilice Mayús+V para multilínea y Ctrl+V para la selección de bloques. Para salir del modo visual, use las pulsaciones de teclas v, Mayús+V o Ctrl+V.
●	La pulsación de tecla : comienza Modo de comando extendido para tareas como escribir el archivo (para guardarlo) y salir del editor de Vim.
Nota
Si no está seguro de qué modo está usando Vim, presione Esc varias veces para volver al modo de comando. Es seguro presionar la tecla Esc en modo de comando repetidamente.
El flujo de trabajo mínimo y básico de Vim
Vim tiene pulsaciones de teclas eficientes y coordinadas para tareas de edición avanzadas. Aunque se considera beneficioso con la práctica, las capacidades de Vim pueden abrumar a los nuevos usuarios.
Red Hat recomienda que aprenda las siguientes teclas y comandos de Vim:
●	La tecla u deshace la edición más reciente.
●	La tecla x elimina un solo carácter.
●	El comando :w escribe (guarda) el archivo y permanece en modo de comando para más edición.
●	El comando :wq escribe (guarda) el archivo y sale de Vim.
●	El :q! sale de Vim y descarta todos los cambios de archivo desde la última escritura.
Aprender estos comandos ayuda a un usuario de Vim a realizar cualquier tarea de edición.
Reorganizar el texto existente
En Vim, puedes tirón y poner (copiar y pegar), utilizando los caracteres de comando y y p. Coloque el cursor en el primer carácter que desee seleccionar y, a continuación, entre en modo visual. Utilice las teclas de flecha para expandir la selección visual. Cuando esté listo, presione y para tirón la selección en la memoria. Coloque el cursor en la nueva ubicación y, a continuación, presione p para poner la selección en el cursor.
Modo visual en Vim
El modo visual es útil para resaltar y manipular texto en diferentes líneas y columnas. Puede ingresar a varios modos visuales en Vim utilizando las siguientes combinaciones de teclas.
●	Modo de carácter : v
●	Modo de línea: Shift + v
●	Modo de bloque: Ctrl+v
El modo de caracteres resalta las oraciones en un bloque de texto. La palabra aparece en la parte inferior de la pantalla. Presione v para ingresar al modo de caracteres visuales. Mayús+v entra en modo de línea. aparece en la parte inferior de la pantalla.VISUALVISUAL LINE
El modo de bloqueo visual es perfecto para manipular archivos de datos. Presione la tecla Ctrl+v para ingresar al bloque visual desde el cursor. aparece en la parte inferior de la pantalla. Utilice las teclas de flecha para resaltar la sección que desea cambiar.VISUAL BLOCK
Nota
Primero, tómese el tiempo para familiarizarse con las capacidades básicas de Vim. Luego, amplíe su vocabulario de Vim aprendiendo más pulsaciones de teclas de Vim.
El ejercicio de esta sección utiliza el comando. Este tutorial, del paquete, es una excelente manera de aprender las funciones básicas de Vim.vimtutorvim-enhanced
Archivos de configuración de Vim
Los archivos y de configuración alteran el comportamiento del editor para todo el sistema o para un usuario específico, respectivamente. Dentro de estos archivos de configuración, puede especificar comportamientos como el espaciado de tabulación predeterminado, el resaltado de sintaxis, los esquemas de color y más. Modificar el comportamiento del editor es especialmente útil cuando se trabaja con lenguajes como YAML, que tienen requisitos de sintaxis estrictos. Considere el siguiente archivo, que establece la tabulación predeterminada (indicada por los caracteres) en dos espacios mientras edita archivos YAML. El archivo también incluye el parámetro para mostrar los números de línea mientras se editan todos los archivos./etc/vimrc~/.vimrcvimvim~/.vimrctsset number
[user@host ~]$ cat ~/.vimrc
autocmd FileType yaml setlocal ts=2
set number
Una lista completa de opciones de configuración está disponible en las referencias.vimrc
Referencias
vim(1) página de manual
El comando in (si el paquete está instalado).:helpvimvim-enhanced
Manual de referencia de Vim: Opciones de Vim
Ejercicio guiado: edición de archivos de texto desde la solicitud de shell
Utilice el comando para practicar técnicas básicas de edición en el editor.vimtutorvim
Resultados
●	Edita archivos con Vim.
●	Obtenga competencia en Vim mediante el comando.vimtutor
Como usuario de la máquina, use el comando para preparar el sistema para este ejercicio.studentworkstationlab
Este comando prepara el entorno y garantiza que todos los recursos necesarios estén disponibles.
[student@workstation ~]$ lab start edit-editfile
Instrucciones
Utilice el comando para iniciar sesión en la máquina como usuario.sshserverastudent
[student@workstation ~]$ ssh student@servera
...output omitted...
1.	[student@servera ~]$
2.	Ejecute el comando. Lea la pantalla de bienvenida y realice vimtutorLección 1.1.
En la presentación, las teclas de flecha del teclado ayudan a navegar por la ventana. Inicialmente, cuando se desarrolló el editor, los usuarios no podían confiar en tener teclas de flecha o asignaciones de teclado de trabajo para que las teclas de flecha movieran el cursor. Por lo tanto, el editor se diseñó inicialmente para mover el cursor mediante comandos con teclas de caracteres estándar, como h, j, k y l.vivi
Aquí hay una forma de recordarlos:
hang Atrás, abajo, arriba, adelante.jumpkickleap
[student@servera ~]$ vimtutor
3.	En la ventana, realice vimtutorLección 1.2.
Esta lección enseña cómo dejar de fumar sin guardar cambios no deseados. Todos los cambios están perdidos. A veces es preferible perder cambios que dejar un archivo crítico en un estado incorrecto.
4.	En la ventana, realice vimtutorLección 1.3.
Vim tiene pulsaciones de teclas rápidas y eficientes para eliminar un número exacto de palabras, líneas, oraciones o párrafos. Cualquier edición es posible con la clave para la eliminación de un solo carácter.x
5.	En la ventana, realice vimtutorLección 1.4.
Para la mayoría de las tareas de edición, primero se presiona la tecla (insertar).i
6.	En la ventana, realice vimtutorLección 1.5.
La lección anterior solo enseñó el comando para entrar en modo de edición. En esta lección se muestran otras pulsaciones de teclas disponibles para cambiar la ubicación del cursor en el modo de inserción. En el modo de inserción, todo el texto escrito cambia el contenido del archivo.i
7.	En la ventana, realice vimtutorLección 1.6.
Escriba para guardar el archivo y salir del editor.:wq
8.	En la ventana, lea el vimtutorResumen de la lección 1.
El comando incluye seis lecciones más de varios pasos. Estas lecciones no se asignan como parte de este curso, pero siéntase libre de explorarlas para obtener más información.vimtutor
Regrese al sistema como usuario.workstationstudent
[student@servera ~]$ exit
logout
Connection to servera closed.
9.	[student@workstation ~]$
Terminar
En la máquina, cambie al directorio principal del usuario y utilice el comando para completar este ejercicio. Este paso es importante para garantizar que los recursos de ejercicios anteriores no afecten los próximos ejercicios.workstationstudentlab
[student@workstation ~]$ lab finish edit-editfile
Cambiar el entorno de shell
Objetivos
●	Establezca variables de shell para ejecutar comandos y edite scripts de inicio de Bash para establecer variables de shell y entorno para modificar el comportamiento del shell y los programas que se ejecutan desde el shell.
Uso de variables de shell
Con el shell Bash, puede establecer Variables de shell para ayudar a ejecutar comandos o modificar el comportamiento del shell. También puede exportar variables de shell como variables de entorno, que se copian automáticamente en los programas que se ejecutan desde ese shell. Puede usar variables para facilitar la ejecución de un comando con un argumento largo o para aplicar una configuración común a los comandos que se ejecutan desde ese shell.
Las variables de shell son únicas para una sesión de shell determinada. Si tiene dos ventanas de terminal abiertas o dos sesiones de inicio de sesión independientes en el mismo servidor remoto, entonces está ejecutando dos shells. Cada shell tiene su propio conjunto de valores para sus variables de shell.
Asignar valores a variables
Asigne un valor a una variable de shell con la siguiente sintaxis:
[user@host ~]$ VARIABLENAME=value
Los nombres de variables pueden contener letras mayúsculas o minúsculas, dígitos y el carácter de subrayado (). Por ejemplo, los siguientes comandos establecen variables de shell:_
[user@host ~]$ COUNT=40
[user@host ~]$ first_name=John
[user@host ~]$ file1=/tmp/abc
[user@host ~]$ _ID=RH123
Recuerde que este cambio afecta solo al shell en el que ejecuta el comando, no a ningún otro shell que pueda estar ejecutando en ese servidor.
Puede usar el comando para enumerar todas las variables de shell que están configuradas actualmente. (También enumera todas las funciones de shell, que puede ignorar). Para mejorar la legibilidad, puede canalizar la salida al comando para que pueda verla página a página.setless
[user@host ~]$ set | less
BASH=/bin/bash
BASHOPTS=checkwinsize:cmdhist:complete_fullquote:expand_aliases:extglob:extquote\
:force_fignore:globasciiranges:histappend:interactive_comments:login_shell:progc\
omp:promptvars:sourcepath
BASHRCSOURCED=Y
...output omitted...
Recuperación de valores con expansión de variables
Puedes usar Expansión variable para hacer referencia al valor de una variable que establezca. Para usar la expansión de variables, preceda el nombre de la variable con un signo de dólar (). En los ejemplos siguientes, la expansión de la variable se produce primero y, a continuación, el comando imprime el resto de la línea de comandos que se escribe.$echo
Por ejemplo, el siguiente comando establece la variable en .COUNT40
[user@host ~]$ COUNT=40
Si ingresa el comando, imprime la cadena.echo COUNTCOUNT
[user@host ~]$ echo COUNT
COUNT
Si ingresa el comando en su lugar, imprime el valor de la variable.echo $COUNTCOUNT
[user@host ~]$ echo $COUNT
40
También puede usar una variable para hacer referencia a un nombre de archivo largo para varios comandos.
[user@host ~]$ file1=/tmp/tmp.z9pXW0HqcC
[user@host ~]$ ls -l $file1
-rw-------. 1 student student 1452 Jan 22 14:39 /tmp/tmp.z9pXW0HqcC
[user@host ~]$ rm $file1
[user@host ~]$ ls -l $file1
total 0
Importante
Siempre puede usar llaves en expansión variable, aunque a menudo son innecesarias.
En el ejemplo siguiente, el comando intenta expandir la variable inexistente , pero no devuelve nada. El comando tampoco informa de ningún error.echoCOUNTx
[user@host ~]$ echo Repeat $COUNTx
Repeat
Si hay caracteres finales junto a un nombre de variable, delimite el nombre de la variable con llaves. En el ejemplo siguiente, el comando ahora expande la variable.echoCOUNT
[user@host ~]$ echo Repeat ${COUNT}x
Repeat 40x
Configurar Bash con variables de shell
Algunas variables de shell se establecen cuando se inicia Bash. Puede modificarlos para ajustar el comportamiento del shell.
Por ejemplo, las variables , y shell afectan al historial de shell y al comando. La variable especifica en qué archivo guardar el historial de shell y el valor predeterminado es el archivo. La variable especifica cuántos comandos guardar en ese archivo del historial. La variable define el formato de marca de tiempo para cada comando del historial. Esta variable no existe de forma predeterminada.HISTFILEHISTFILESIZEHISTTIMEFORMAThistoryHISTFILE~/.bash_historyHISTFILESIZEHISTTIMEFORMAT
[user@host ~]$ history
...output omitted...
    6  ls /etc
    7  uptime
    8  ls -l
    9  date
   10  history
[user@host ~]$ HISTTIMEFORMAT="%F %T "
[user@host ~]$ history
...output omitted...
    6  2022-05-03 04:58:11 ls /etc
    7  2022-05-03 04:58:13 uptime
    8  2022-05-03 04:58:15 ls -l
    9  2022-05-03 04:58:16 date
   10  2022-05-03 04:58:18 history
   11  2022-05-03 04:59:10 HISTTIMEFORMAT="%F %T "
   12  2022-05-03 04:59:12 history
Otro ejemplo es la variable, que controla la apariencia del indicador de shell. Si cambia este valor, cambia la apariencia de su solicitud de shell. Varias expansiones de caracteres especiales que admite el mensaje se enumeran en la sección "PROMPTING" de la página del comando man (1).PS1bash
[user@host ~]$ PS1="bash\$ "
bash$ PS1="[\u@\h \W]\$ "
[user@host ~]$
Debido a que el valor que establece la variable es una solicitud, RedÂ Hat recomienda finalizar la solicitud con un espacio final. Además, siempre que un valor de variable contenga algún tipo de espacio, incluido un espacio, una tabulación o un retorno, el valor debe estar entre comillas simples o dobles. Pueden producirse resultados inesperados si se omiten las comillas. La variable anterior se ajusta tanto a la recomendación de espacio final como a la regla de comillas.PS1PS1
Configurar programas con variables de entorno
El shell proporciona un medio ambiente para los programas que se ejecutan desde ese shell. Entre otros elementos, este entorno incluye información sobre el directorio de trabajo actual en el sistema de archivos, las opciones de línea de comandos que se pasan al programa y los valores de variables de entorno. Los programas pueden usar estas variables de entorno para cambiar su comportamiento o su configuración predeterminada.
Si una variable de shell no es una variable de entorno, solo el shell puede usarla. Sin embargo, si una variable de shell es una variable de entorno, entonces el shell y cualquier programa que se ejecute desde ese shell pueden usar la variable.
Nota
Las variables , , y de la sección anterior no necesitan exportarse como variables de entorno, porque solo el propio shell las usa, no los programas que se ejecutan desde el shell.HISTFILEHISTFILESIZEPS1
Puede asignar cualquier variable definida en el shell como una variable de entorno marcándola para su exportación con el comando.export
[user@host ~]$ EDITOR=vim
[user@host ~]$ export EDITOR
Puede establecer y exportar una variable en un solo paso:
[user@host ~]$ export EDITOR=vim
Las aplicaciones y las sesiones usan estas variables para determinar su comportamiento. Por ejemplo, el shell establece automáticamente la variable en el nombre de archivo del directorio de inicio del usuario cuando se inicia. Puede usar esta variable para ayudar a los programas a determinar dónde guardar los archivos.HOME
Otro ejemplo es la variable, que establece la codificación de la configuración regional. Esta variable ajusta el idioma preferido para la salida del programa; el conjunto de caracteres; el formato de fechas, números y moneda; y el orden de clasificación de los programas. Si se establece en , la configuración regional usa inglés de EE. UU. con codificación de caracteres Unicode UTF-8. Si se establece, por ejemplo, en , utiliza la codificación Unicode UTF-8 francesa.LANGen_US.UTF-8fr_FR.UTF-8
[user@host ~]$ date
Tue Jan 22 16:37:45 CST 2019
[user@host ~]$ export LANG=fr_FR.UTF-8
[user@host ~]$ date
mar. janv. 22 16:38:14 CST 2019
Otra variable de entorno importante es . La variable contiene una lista de directorios separados por dos puntos que contienen programas:PATHPATH
[user@host ~]$ echo $PATH
/home/user/.local/bin:/home/user/bin:/usr/share/Modules/bin:/usr/local/bin:/usr/bin:/usr/local/sbin:/usr/sbin
Cuando se ejecuta un comando como el comando, el shell busca el archivo ejecutable en cada uno de esos directorios en orden y ejecuta el primer archivo coincidente que encuentra. (En un sistema típico, este archivo es .)lsls/usr/bin/ls
Puede agregar directorios a su variable. Por ejemplo, tal vez desee ejecutar algunos programas ejecutables o scripts, como comandos regulares en el directorio. Puede anexar el directorio a su para la sesión actual de la siguiente manera:PATH/home/user/sbin/home/user/sbinPATH
[user@host ~]$ export PATH=${PATH}:/home/user/sbin
Para enumerar todas las variables de entorno de un shell, ejecute el comando:env
[user@host ~]$ env
...output omitted...
LANG=en_US.UTF-8
HISTCONTROL=ignoredups
HOSTNAME=host.example.com
XDG_SESSION_ID=4
...output omitted...
Establecer el editor de texto predeterminado
La variable de entorno especifica el editor de texto predeterminado para los programas de línea de comandos. Muchos programas usan el editor or si no se especifica, y puede anular esta preferencia:EDITORvivim
[user@host ~]$ export EDITOR=nano
Importante
Por convención, las variables de entorno y las variables de shell que el shell establece automáticamente tienen nombres con todos los caracteres en mayúsculas. Si está configurando sus propias variables, es posible que desee usar nombres con caracteres en minúsculas para evitar colisiones de nombres.
Establecer variables automáticamente
Cuando se inicia Bash, varios archivos de texto se ejecutan con comandos de shell que inicializan el entorno de shell. Para establecer variables de shell o de entorno automáticamente cuando se inicia el shell, puede editar estos scripts de inicio de Bash.
Los scripts exactos que se ejecutan dependen de si el shell es interactivo o no interactivo, y de un shell de inicio de sesión o no de inicio de sesión. Un usuario escribe comandos directamente en un shell interactivo, mientras que un shell no interactivo, como un script, se ejecuta en segundo plano sin la intervención del usuario. Se invoca un shell de inicio de sesión cuando un usuario inicia sesión localmente a través del terminal o de forma remota a través del protocolo SSH. Se invoca un shell sin inicio de sesión desde una sesión existente, como para abrir un terminal desde la GUI de GNOME.
Para los shells de inicio de sesión interactivos, los archivos and configuran el entorno Bash. Los archivos y también originan los y archivos respectivamente. Para los shells interactivos que no son de inicio de sesión, solo los archivos and configuran el entorno de Bash. Mientras que los archivos and se aplican a todo el sistema, los archivos and son específicos del usuario. Los shells no interactivos invocan cualquier archivo que defina la variable. Esta variable no está definida de forma predeterminada./etc/profile~/.bash_profile/etc/profile~/.bash_profile/etc/bashrc~/.bashrc/etc/bashrc~/.bashrc/etc/profile/etc/bashrc~/.bash_profile~/.bashrcBASH_ENV
Para crear una variable que esté disponible para todos los shells interactivos, edite el archivo. Para aplicar una variable solo una vez después de que el usuario inicie sesión, defínala en el archivo.~/.bashrc~/.bash_profile
Por ejemplo, para cambiar el editor predeterminado cuando inicia sesión a través de SSH, puede modificar la variable en su archivo:EDITOR~/.bash_profile
# .bash_profile

# Get the aliases and functions
if [ -f ~/.bashrc ]; then
        . ~/.bashrc
fi

# User specific environment and startup programs
export EDITOR=nano
Nota
La mejor manera de ajustar la configuración que afecta a todas las cuentas de usuario es agregar un archivo con una extensión que contenga los cambios en el directorio. Para crear los archivos en el directorio, inicie sesión como usuario..sh/etc/profile.d/etc/profile.droot
Alias de Bash
Los alias de Bash son accesos directos a otros comandos de Bash. Por ejemplo, si a menudo debe escribir un comando largo, puede crear un alias más corto para invocarlo. Utilice el comando para crear alias. Considere el ejemplo siguiente, que crea un alias para un comando.aliashelloecho
[user@host ~]$ alias hello='echo "Hello, this is a long string."'
A continuación, puede ejecutar el comando e invoca el comando.helloecho
[user@host ~]$ hello
Hello, this is a long string.
Agregue alias al archivo de un usuario para que estén disponibles en cualquier shell interactivo.~/.bashrc
Desactivación y anulación de la exportación de variables y alias
Para anular la definición y la exportación de una variable, utilice el comando:unset
[user@host ~]$ echo $file1
/tmp/tmp.z9pXW0HqcC
[user@host ~]$ unset file1
[user@host ~]$ echo $file1

[user@host ~]$
Para anular la exportación de una variable sin desactivarla, utilice el comando:export -n
[user@host ~]$ export -n PS1
Para anular la definición de un alias, utilice el comando:unalias
[user@host ~]$ unalias hello
Referencias
bash(1), (1) y (1) páginas de manualenvbuiltins
Ejercicio guiado: Cambiar el entorno de Shell
Utilice las variables de shell y la expansión de variables para ejecutar comandos y establezca una variable de entorno para ajustar el editor predeterminado para los nuevos shells.
Resultados
●	Editar un perfil de usuario.
●	Cree una variable de shell.
●	Cree una variable de entorno.
Como usuario de la máquina, use el comando para preparar el sistema para este ejercicio.studentworkstationlab
Este comando garantiza que todos los recursos necesarios estén disponibles.
[student@workstation ~]$ lab start edit-bashconfig
Instrucciones
1.	Cambie la variable shell del usuario a (recuerde poner el valor de entre comillas e incluir un espacio final después del signo de dólar). Este cambio agrega la hora a la solicitud.studentPS1[\u@\h \t \w]$PS1
Utilice el comando para iniciar sesión como usuario.sshserverastudent
[student@workstation ~]$ ssh student@servera
...output omitted...
	[student@servera ~]$
	Utilice Vim para editar el archivo de configuración.~/.bashrc
[student@servera ~]$ vim ~/.bashrc
Agregue la variable de shell y su valor al archivo. Establezca el valor de la variable de shell, incluido un espacio final al final, entre comillas.PS1~/.bashrc
...output omitted...
export PATH
	PS1='[\u@\h \t \w]$ '
Salga de e inicie sesión de nuevo mediante el comando para actualizar el símbolo del sistema, o ejecute el archivo mediante el comando.serverassh~/.bashrcsource ~/.bashrc
[student@servera ~]$ exit
logout
Connection to servera closed.
[student@workstation ~]$ ssh student@servera
...output omitted...
	[student@servera 14:45:05 ~]$
2.	Asigne un valor a una variable de shell local. Los nombres de variables pueden contener letras mayúsculas o minúsculas, dígitos y el carácter de subrayado. Recupere el valor de la variable.
	Cree una variable llamada con un valor de . El archivo existe en el directorio de inicio.filetmp.zdkei083tmp.zdkei083student
[student@servera 14:47:05 ~]$ file=tmp.zdkei083
Recupere el valor de la variable.file
[student@servera 14:48:35 ~]$ echo $file
	tmp.zdkei083
Utilice el nombre de la variable y el comando para enumerar el archivo. Utilice el comando y el nombre de la variable para eliminar el archivo. Compruebe que el archivo se ha eliminado.filels -ltmp.zdkei083rmfiletmp.zdkei083
[student@servera 14:59:07 ~]$ ls -l $file
-rw-r--r--. 1 student student 0 Jan 23 14:59 tmp.zdkei083
[student@servera 14:59:10 ~]$ rm $file
[student@servera 14:59:15 ~]$ ls -l $file
	ls: cannot access 'tmp.zdkei083': No such file or directory
Asigne un valor a la variable. Utilice un comando para asignar la variable como variable de entorno.EDITOR
[student@servera 14:46:40 ~]$ export EDITOR=vim
[student@servera 14:46:55 ~]$ echo $EDITOR
3.	vim
Regrese al sistema como usuario.workstationstudent
[student@servera 14:47:11 ~]$ exit
logout
Connection to servera closed.
4.	[student@workstation ~]$
Terminar
En la máquina, cambie al directorio principal del usuario y utilice el comando para completar este ejercicio. Este paso es importante para garantizar que los recursos de ejercicios anteriores no afecten los próximos ejercicios.workstationstudentlab
[student@workstation ~]$ lab finish edit-bashconfig
Lab: Crear, ver y editar archivos de texto
Edite un archivo de texto con el editor.vim
Resultados
●	Utilice Vim para editar archivos.
●	Utilice el modo visual Vim para simplificar la edición de archivos grandes.
Como usuario de la máquina, use el comando para preparar el sistema para este ejercicio.studentworkstationlab
Este comando prepara el entorno y garantiza que todos los recursos necesarios estén disponibles.
[student@workstation ~]$ lab start edit-review
Instrucciones
1.	En , cree la variable de shell y asígnela como valor. Enumere el contenido del directorio principal, incluidos los directorios y archivos ocultos, así como los permisos, los tamaños de archivo y los tiempos de modificación, y redirija la salida al archivo mediante la variable shell.workstationlab_fileediting_final_lab.txtstudentediting_final_lab.txt
2.	En la máquina, cree la variable de shell y asigne un valor de . Utilice el comando en el directorio de inicio y redirija la salida al archivo.workstationlab_fileediting_final_lab.txtls -alstudentediting_final_lab.txt
[student@workstation ~]$ lab_file=editing_final_lab.txt
3.	[student@workstation ~]$ ls -al > $lab_file
4.	Utilice Vim para editar el archivo. Utilice la variable shell.editing_final_lab.txtlab_file
5.	[student@workstation ~]$ vim $lab_file
6.	Ingrese al modo visual basado en líneas de Vim. La salida de la pantalla puede diferir de estos ejemplos. Elimine las tres primeras líneas del archivo.editing_final_lab.txt
 
7.	Utilice las teclas de flecha para colocar el cursor en el primer carácter de la primera línea. Ingrese al modo visual basado en líneas con Mayús+V. Desplácese hacia abajo usando la tecla de flecha hacia abajo dos veces para seleccionar las primeras tres líneas. Elimine las líneas escribiendo x.
8.	Ingrese al modo visual de Vim. Elimine los últimos siete caracteres de la primera columna de la primera línea. Conserve solo los primeros cuatro caracteres de la primera columna.
Utilice las teclas de flecha para colocar el cursor en el último carácter de la primera columna de la primera línea. Elimine la selección escribiendo x.
 
9.	Utilice las teclas de flecha para colocar el cursor en el quinto carácter de la primera columna de la primera línea. Ingrese al modo visual escribiendo v.
10.	Ingrese al modo de bloqueo visual de Vim. Repita la operación del paso anterior, pero esta vez seleccione de la segunda a la última línea. Conserve solo los primeros cuatro caracteres de la primera columna.
 
11.	Utilice las teclas de flecha para colocar el cursor en el quinto carácter de la segunda línea. Ingrese al modo visual mediante la secuencia de control Ctrl+V. Utilice las teclas de flecha para colocar el cursor en el último carácter de la primera columna de la última línea. Elimine la selección escribiendo x.
12.	Ingrese al modo de bloqueo visual de Vim y elimine la cuarta columna del archivo.
 
13.	Utilice las teclas de flecha para colocar el cursor en el primer carácter de la cuarta columna. Ingrese al modo de bloqueo visual usando Ctrl+V. Utilice las teclas de flecha para colocar el cursor en el último carácter y fila de la cuarta columna. Elimine la selección escribiendo x.
14.	Ingrese al modo de bloqueo visual de Vim para eliminar la columna de tiempo, para dejar las columnas de mes y día en todas las líneas.
 
15.	Utilice las teclas de flecha para colocar el cursor en el primer carácter de la séptima columna actual. Ingrese al modo de bloqueo visual escribiendo Ctrl+V. Utilice las teclas de flecha para colocar el cursor en el último carácter de la séptima columna de la última fila. Elimine la selección escribiendo x.
16.	Ingrese al modo de línea visual de Vim y elimine las filas que contienen las cadenas and.DesktopPublic
 
17.	Utilice las teclas de flecha para colocar el cursor en cualquier carácter de la fila. Ingrese al modo visual con mayúsculas . Se selecciona la línea completa. Elimine la selección escribiendo x. Repita la operación para la fila con la cuerda.DesktopVPublic
18.	Guarde los cambios y salga del archivo.
 
19.	Para guardar y salir del archivo, introduzca el comando de última línea.:wq
20.	Haga una copia de seguridad del archivo y añada la fecha (en segundos) al final del nombre del archivo precedida de un carácter de subrayado (). Utilice la variable shell.editing_final_lab.txt_lab_file
21.	Utilice el comando para hacer una copia de seguridad del archivo. Utilice el comando al final del nombre de la copia de seguridad precedido de un carácter de subrayado para que el nombre sea único.cpediting_final_lab.txt$(date +%s)
[student@workstation ~]$ cp $lab_file \
22.	editing_final_lab_$(date +%s).txt
23.	Añada una línea discontinua al archivo. La línea discontinua debe contener 12 caracteres de guiones () para que este laboratorio se califique correctamente. Utilice la variable shell.editing_final_lab.txt-lab_file
24.	Utilice el comando con 12 guiones y agregue la salida al archivo.echoediting_final_lab.txt
25.	[student@workstation ~]$ echo "------------" >> $lab_file
26.	Enumere el contenido del directorio, anexe la salida al archivo y muestre la salida en el terminal. Utilice el comando y la variable de shell.Documentsediting_final_lab.txtteelab_file
27.	Use el comando para enumerar el directorio y canalice la salida al comando para anexar la salida al archivo.lsDocumentstee -aediting_final_lab.txt
[student@workstation ~]$ ls Documents/ | tee -a $lab_file
28.	lab_review.txt
29.	Confirme que la lista de directorios se encuentra en la parte inferior del archivo de laboratorio. Utilice la variable shell.lab_file
[student@workstation ~]$ cat $lab_file
drwx  3 student    17 Mar  4  .ansible
-rw-  1 student    18 Nov  5  .bash_logout
-rw-  1 student   141 Nov  5  .bash_profile
-rw-  1 student   492 Nov  5  .bashrc
drwx  9 student  4096 Mar  8  .cache
drwx  8 student  4096 Mar  8  .config
drwx  2 student     6 Mar  8  Documents
drwx  2 student     6 Mar  8  Downloads
-rw-  1 student     0 Mar  8  editing_final_lab.txt
drwx  2 student    25 Mar  4  .grading
drwx  4 student    32 Mar  8  .local
drwx  2 student     6 Mar  8  Music
drwx  2 student     6 Mar  8  Pictures
drwx  2 student    77 Mar  4  .ssh
drwx  2 student     6 Mar  8  Templates
drwx  3 student    18 Mar  4  .venv
drwx  2 student     6 Mar  8  Videos
------------
30.	lab_review.txt
Evaluación
Como usuario de la máquina, utilice el comando para calificar el trabajo. Corrija los errores notificados y vuelva a ejecutar el comando hasta que se realice correctamente.studentworkstationlab
[student@workstation ~]$ lab grade edit-review
Terminar
En la máquina, cambie al directorio principal del usuario y utilice el comando para completar este ejercicio. Este paso es importante para garantizar que los recursos de ejercicios anteriores no afecten los próximos ejercicios.workstationstudentlab
[student@workstation ~]$ lab finish edit-review
Resumen
●	Los programas o procesos en ejecución tienen tres canales de comunicación estándar: entrada estándar, salida estándar y error estándar.
●	Puede utilizar la redirección de E/S para leer la entrada estándar de un archivo o para escribir la salida o los errores de un proceso en un archivo.
●	Las canalizaciones pueden conectar la salida estándar de un proceso a la entrada estándar de otro proceso, y pueden dar formato a la salida o crear comandos complejos.
●	Sepa cómo usar al menos un editor de texto de línea de comandos, y Vim es la opción recomendada porque comúnmente se instala de forma predeterminada en las distribuciones de Linux.
●	Las variables de shell pueden ayudarle a ejecutar comandos y son exclusivas de una sesión de shell.
●	Puede modificar el comportamiento del shell o de los procesos con variables de entorno.
Capítulo 6. Administrar usuarios y grupos locales
Describir conceptos de usuario y grupo
Cuestionario: Describir conceptos de usuario y grupo
Obtenga acceso de superusuario
Ejercicio guiado: Obtener acceso de superusuario
Administrar cuentas de usuario locales
Ejercicio guiado: Administrar cuentas de usuario locales
Administrar cuentas de grupos locales
Ejercicio guiado: Administrar cuentas de grupo local
Administrar contraseñas de usuario
Ejercicio guiado: Administrar contraseñas de usuario
Laboratorio: Administrar usuarios y grupos locales
Resumen
Abstracto
Gol	Cree, administre y elimine usuarios y grupos locales, y administre políticas de contraseñas locales.
Objetivos	●	
Describir el propósito de los usuarios y grupos en un sistema Linux.
●	Cambie a la cuenta de superusuario para administrar un sistema Linux y otorgue a otros usuarios acceso de superusuario a través del comando.sudo
●	Crear, administrar y eliminar cuentas de usuario locales.
●	Crear, modificar y eliminar cuentas de grupo local.
●	Establezca una política de administración de contraseñas para los usuarios y bloquee y desbloquee manualmente las cuentas de usuario.
Secciones	●	
Describir conceptos de usuario y grupo (y cuestionario)
●	Obtenga acceso de superusuario (y ejercicio guiado)
●	Administrar cuentas de usuario locales (y ejercicio guiado)
●	Administrar cuentas de grupo local (y ejercicio guiado)
●	Administrar contraseñas de usuario (y ejercicio guiado)
Laboratorio	●	
Administrar usuarios y grupos locales
Describir conceptos de usuario y grupo
Objetivos
●	Describir el propósito de los usuarios y grupos en un sistema Linux.
¿Qué es un usuario?
Un usuario Account proporciona límites de seguridad entre personas y programas que pueden ejecutar comandos.
Los usuarios tienen Nombres de usuario para identificarlos ante los usuarios humanos y para facilitar el trabajo. Internamente, el sistema distingue las cuentas de usuario por el número de identificación único, el ID de usuario o UID, que se les asigna. En la mayoría de los escenarios, si un humano usa una cuenta de usuario, el sistema asigna un secreto contraseña para que el usuario demuestre que es el usuario autorizado para iniciar sesión.
Las cuentas de usuario son fundamentales para la seguridad del sistema. Cada proceso (programa en ejecución) en el sistema se ejecuta como un usuario particular. Cada archivo tiene un usuario particular como propietario. Con la propiedad de los archivos, el sistema aplica el control de acceso para los usuarios de los archivos. El usuario asociado a un proceso en ejecución determina los archivos y directorios a los que puede acceder ese proceso.
Las cuentas de usuario son de los siguientes tipos principales: superusuario, Usuarios del sistemay usuarios habituales.
●	El superusuario cuenta administra el sistema. El nombre de superusuario es y la cuenta tiene un UID de 0. El superusuario tiene acceso completo al sistema.root
●	El Usuario del sistema Las cuentas son utilizadas por procesos que brindan servicios de respaldo. Estos procesos, o Demonios, normalmente no es necesario ejecutarse como superusuario. Se les asignan cuentas sin privilegios para proteger sus archivos y otros recursos entre sí y de los usuarios normales del sistema. Los usuarios no inician sesión de forma interactiva con una cuenta de usuario del sistema.
●	La mayoría de los usuarios tienen Usuario habitual cuentas de su trabajo diario. Al igual que los usuarios del sistema, los usuarios normales tienen acceso limitado al sistema.
Utilice el comando para mostrar información sobre el usuario que ha iniciado sesión actualmente:id
[user01@host ~]$ id
uid=1000(user01) gid=1000(user01) groups=1000(user01) context=unconfined_u:unconfined_r:unconfined_t:s0-s0:c0.c1023
Para ver información sobre otro usuario, pase el nombre de usuario al comando como argumento:id
[user01@host ~]$ id user02
uid=1002(user02) gid=1001(user02) groups=1001(user02) context=unconfined_u:unconfined_r:unconfined_t:s0-s0:c0.c1023
Utilice el comando para ver el propietario de un archivo. Utilice el comando para ver el propietario de un directorio, en lugar del contenido de ese directorio. En el siguiente resultado, la tercera columna muestra el nombre de usuario.ls -lls -ld
[user01@host ~]$ ls -l mytextfile.txt
-rw-rw-r--. 1 user01 user01 0 Feb  5 11:10 mytextfile.txt
[user01@host]$ ls -ld Documents
drwxrwxr-x. 2 user01 user01 6 Feb  5 11:10 Documents
Utilice el comando para ver la información del proceso. El valor predeterminado es mostrar solo los procesos en el shell actual. Utilice la opción de comando para ver todos los procesos con un terminal. Utilice la opción de comando para ver el usuario asociado a un proceso. En el siguiente resultado, la primera columna muestra el nombre de usuario.psps-aps-u
[user01@host ~]$ ps -au
USER     PID %CPU %MEM    VSZ   RSS TTY    STAT START  TIME COMMAND
root    1690  0.0  0.0 220984  1052 ttyS0  Ss+  22:43  0:00 /sbin/agetty -o -p -- \u --keep-baud 1
user01  1769  0.0  0.1 377700  6844 tty2   Ssl+ 22:45  0:00 /usr/libexec/gdm-x-session --register-
user01  1773  1.3  1.3 528948 78356 tty2   Sl+  22:45  0:03 /usr/libexec/Xorg vt2 -displayfd 3 -au
user01  1800  0.0  0.3 521412 19824 tty2   Sl+  22:45  0:00 /usr/libexec/gnome-session-binary
user01  3072  0.0  0.0 224152  5756 pts/1  Ss   22:48  0:00 -bash
user01  3122  0.0  0.0 225556  3652 pts/1  R+   22:49  0:00 ps -au
El resultado del comando anterior muestra a los usuarios por nombre, pero internamente el sistema operativo usa UID para realizar un seguimiento de los usuarios. La asignación de nombres de usuario a UID se define en bases de datos de información de cuentas. De forma predeterminada, los sistemas usan el archivo para almacenar información sobre los usuarios locales./etc/passwd
Cada línea del archivo contiene información sobre un usuario. El archivo se divide en siete campos separados por dos puntos. A continuación se muestra un ejemplo de una línea de:/etc/passwd/etc/passwd
[user01@host ~]$ cat /etc/passwd
...output omitted...
user01:x:1000:1000:User One:/home/user01:/bin/bash
Considere cada parte del bloque de código, separada por dos puntos:
●	user01 : El nombre de usuario de este usuario.
●	x : La contraseña cifrada del usuario se almacenó históricamente aquí; ahora es un marcador de posición.
●	1000 : El número UID de esta cuenta de usuario.
●	1000 : El número GID para el grupo principal de esta cuenta de usuario. Los grupos se analizan más adelante en esta sección.
●	Usuario uno : Un breve comentario, descripción o el nombre real de este usuario.
●	/home/user01 : El directorio de inicio del usuario y el directorio de trabajo inicial cuando se inicia el shell de inicio de sesión.
●	/bin/bash : El programa de shell predeterminado para este usuario que se ejecuta al iniciar sesión. Algunas cuentas usan el shell para no permitir inicios de sesión interactivos con esa cuenta./sbin/nologin
¿Qué es un grupo?
Un grupo es una colección de usuarios que necesitan compartir el acceso a archivos y otros recursos del sistema. Los grupos pueden conceder acceso a los archivos a un conjunto de usuarios en lugar de a un solo usuario.
Al igual que los usuarios, los grupos tienen Nombres de grupo para un reconocimiento más fácil. Internamente, el sistema distingue los grupos por el número de identificación unívoca, el ID de grupo o GID, que se les asigna. La asignación de nombres de grupo a GID se define en las bases de datos de administración de identidades de información de cuentas de grupo. De forma predeterminada, los sistemas utilizan el archivo para almacenar información sobre grupos locales./etc/group
Cada línea del archivo contiene información sobre un grupo. Cada entrada de grupo se divide en cuatro campos separados por dos puntos. A continuación se muestra un ejemplo de una línea de:/etc/group/etc/group
[user01@host ~]$ cat /etc/group
...output omitted...
group01:x:10000:user01,user02,user03
Considere cada parte del bloque de código, separada por dos puntos:
●	group01 : Nombre de este grupo.
●	x : Campo de contraseña de grupo obsoleto; ahora es un marcador de posición.
●	10000 : El número GID para este grupo ().10000
●	user01,user02,user03 : Una lista de usuarios que son miembros de este grupo como grupo complementario.
Grupos primarios y grupos complementarios
Cada usuario tiene exactamente un grupo principal. Para los usuarios locales, este grupo se enumera por GID en el archivo. El grupo principal posee los archivos que crea el usuario./etc/passwd
Cuando se crea un usuario normal, se crea un grupo con el mismo nombre que el usuario, para que sea el grupo principal del usuario. El usuario es el único miembro de este Grupo privado de usuario. Este diseño de pertenencia a grupos simplifica la administración de permisos de archivo, para tener grupos de usuarios separados de forma predeterminada.
Los usuarios también pueden tener Grupos complementarios. La pertenencia a grupos complementarios se almacena en el archivo. A los usuarios se les concede acceso a los archivos en función de si alguno de sus grupos tiene acceso, independientemente de si los grupos son principales o complementarios. Por ejemplo, si el usuario tiene un grupo principal y grupos complementarios, ese usuario puede leer archivos que cualquiera de esos tres grupos puede leer./etc/groupuser01user01wheelwebadmin
El comando puede mostrar la pertenencia a grupos de un usuario. En el siguiente ejemplo, el usuario tiene el grupo como grupo principal (). El elemento enumera todas las pertenencias a grupos de este usuario y el usuario también tiene los grupos y como grupos complementarios.iduser01user01gidgroupswheelgroup01
[user01@host ~]$ id
uid=1001(user01) gid=1003(user01) groups=1003(user01),10(wheel),10000(group01) context=unconfined_u:unconfined_r:unconfined_t:s0-s0:c0.c1023
Referencias
id(1), (5) y (5) páginas de manualpasswdgroup
info libc (Manual de referencia de la biblioteca GNU C)
●	Sección 30: Usuarios y grupos
(El paquete debe estar instalado para que este nodo esté disponible).glibc-develinfo
Obtenga acceso de superusuario
Objetivos
●	Cambie a la cuenta de superusuario para administrar un sistema Linux y otorgue a otros usuarios acceso de superusuario a través del comando.sudo
El superusuario
La mayoría de los sistemas operativos tienen un superusuario que tiene todo el poder sobre el sistema. En Red Hat Enterprise Linux, es el usuario. Este usuario tiene el poder de anular los privilegios normales en el sistema de archivos y puede usarlo para administrar y administrar el sistema. Para tareas como instalar o eliminar software, y para administrar archivos y directorios del sistema, los usuarios deben escalar sus privilegios al usuario.rootroot
Por lo general, solo el usuario puede controlar la mayoría de los dispositivos, pero se aplican algunas excepciones. Los usuarios normales pueden controlar dispositivos extraíbles, como dispositivos USB. Por lo tanto, los usuarios normales pueden agregar y eliminar archivos y administrar un dispositivo extraíble, pero solo pueden administrar discos duros de forma predeterminada.rootroot
Este privilegio ilimitado, sin embargo, viene con responsabilidad. El usuario tiene un poder ilimitado para dañar el sistema: eliminar archivos y directorios, eliminar cuentas de usuario, agregar puertas traseras, etc. Si la cuenta de usuario raíz se ve comprometida, el sistema está en peligro y podría perder el control administrativo. Red Hat alienta a los administradores de sistemas a iniciar sesión siempre como un usuario normal y a escalar los privilegios solo cuando sea necesario.rootroot
La cuenta en Linux es similar a la cuenta local en Microsoft Windows. En Linux, la mayoría de los administradores de sistemas inician sesión en el sistema como un usuario sin privilegios y utilizan varias herramientas para obtener privilegios temporalmente.rootAdministratorroot
Advertencia
Los usuarios de Microsoft Windows pueden estar familiarizados con la práctica de iniciar sesión como usuario local para realizar tareas de administrador del sistema. Hoy en día, esta práctica no se recomienda; Los usuarios obtienen privilegios para realizar la administración mediante pertenencias al grupo. De manera similar, en RHEL, Red Hat recomienda que los administradores del sistema nunca inicien sesión directamente como . En su lugar, los administradores del sistema inician sesión como un usuario normal y utilizan mecanismos (, , o , por ejemplo) para obtener temporalmente privilegios de superusuario.AdministratorAdministratorsrootsusudoPolicyKit
Cuando se inicia sesión como , todo el entorno de escritorio se ejecuta innecesariamente con privilegios administrativos. Una vulnerabilidad de seguridad que normalmente podría comprometer solo una cuenta de usuario normal puede comprometer todo el sistema.root
Cambiar cuentas de usuario
Con el comando, los usuarios pueden cambiar a una cuenta de usuario diferente. Si ejecuta el comando desde una cuenta de usuario normal con otra cuenta de usuario como parámetro, debe proporcionar la contraseña de la cuenta a la que cambiar. Cuando el usuario ejecuta el comando, no es necesario introducir la contraseña del usuario.susurootsu
En este ejemplo se usa el comando de la cuenta para cambiar a la cuenta:suuser01user02
[user01@host ~]$ su - user02
Password: user02_password
[user02@host ~]$
Si omite el nombre de usuario, el comando or intenta cambiar a de forma predeterminada.susu -root
[user01@host ~]$ su -
Password: root_password
[root@host ~]#
El comando inicia un comando suShell sin inicio de sesión, mientras que el comando (con la opción de guión) inicia un su -Shell de inicio de sesión. La principal distinción entre los dos comandos es que configura el entorno del shell como si fuera un nuevo inicio de sesión como ese usuario, mientras que inicia un shell como ese usuario, pero usa la configuración del entorno del usuario original.su -su
Por lo general, los administradores deben ejecutar para obtener un shell con la configuración del entorno normal del usuario de destino. Para obtener más información, consulte la página del comando man (1).su -bash
Nota
El uso más frecuente del comando es obtener una interfaz de línea de comandos (símbolo del sistema de shell) que se ejecuta como otro usuario, normalmente el usuario. Sin embargo, puede usar la opción de comando para ejecutar un programa arbitrario como otro usuario. Este comportamiento es similar al de la utilidad de Windows. Ejecute para ver más detalles.surootsu-crunasinfo su
Ejecutar comandos con sudo
Por razones de seguridad, en algunos casos los administradores del sistema configuran al usuario para que no tenga una contraseña válida. Por lo tanto, los usuarios no pueden iniciar sesión en el sistema tan directamente con una contraseña. Además, no puede usarlo para obtener un shell interactivo. En este caso, puede usar el comando para obtener acceso.rootrootsusudoroot
A diferencia del comando, normalmente requiere que los usuarios ingresen su propia contraseña para la autenticación, no la contraseña de la cuenta de usuario a la que intentan acceder. Es decir, los usuarios que usan el comando para ejecutar comandos no necesitan conocer la contraseña. En su lugar, usan sus propias contraseñas para autenticar el acceso.susudosudorootroot
En la tabla siguiente se resumen las diferencias entre los comandos , y :susu -sudo
 	su	su -	sudo
Conviértete en nuevo usuario	Sí	Sí	Por comando escalado
Medio ambiente	Usuario actual	Nuevos usuarios	Usuario actual
Contraseña requerida	Nuevos usuarios	Nuevos usuarios	Usuario actual
Privilegios	Igual que el nuevo usuario	Igual que el nuevo usuario	Definido por configuración
Actividad registrada	su solo comando	su solo comando	Por comando escalado
Además, puede configurar el comando para permitir que usuarios específicos ejecuten cualquier comando como otro usuario, o solo algunos comandos como ese usuario. Por ejemplo, si configura el comando para permitir que el usuario ejecute el comando como , puede ejecutar el siguiente comando para bloquear o desbloquear una cuenta de usuario:sudosudouser01usermodroot
[user01@host ~]$ sudo usermod -L user02
[sudo] password for user01: user01_password
[user01@host ~]$ su - user02
Password: user02_password
su: Authentication failure
[user01@host ~]$
Si un usuario intenta ejecutar un comando como otro usuario y la configuración no lo permite, bash bloquea el comando, registra el intento y envía por defecto un correo electrónico al usuario.sudoroot
[user02@host ~]$ sudo tail /var/log/secure
[sudo] password for user02: user02_password
user02 is not in the sudoers file.  This incident will be reported.
[user02@host ~]$
Otro beneficio de es registrar de forma predeterminada todos los comandos ejecutados en .sudo/var/log/secure
[user01@host ~]$ sudo tail /var/log/secure
...output omitted...
Mar  9 20:45:46 host sudo[2577]:  user01 : TTY=pts/0 ; PWD=/home/user01 ; USER=root ; COMMAND=/sbin/usermod -L user02
...output omitted...
En Red Hat Enterprise Linux 7 y versiones posteriores, todos los miembros del grupo pueden ejecutar comandos como cualquier usuario, incluido , utilizando su propia contraseña.wheelsudoroot
Advertencia
Históricamente, los sistemas UNIX utilizan la pertenencia al grupo para conceder o controlar el acceso de superusuario. RHEL 6 y versiones anteriores no otorgan al grupo ningún privilegio especial de forma predeterminada. Los administradores del sistema que anteriormente usaban este grupo para un propósito no estándar deben actualizar una configuración anterior para evitar que usuarios inesperados y no autorizados obtengan acceso administrativo en RHEL 7 y sistemas posteriores.wheelwheel
Obtenga un shell raíz interactivo con sudo
Para acceder a la cuenta con , use el comando. Este comando cambia a la cuenta y ejecuta el shell predeterminado de ese usuario (generalmente ) y los scripts de inicio de sesión interactivos asociados. Para ejecutar el shell sin los scripts interactivos, use el comando.rootsudosudo -irootbashsudo -s
Por ejemplo, un administrador puede obtener un shell interactivo como en una instancia de AWS Elastic Cloud Computing (EC2) mediante la autenticación de clave pública SSH para iniciar sesión como el usuario normal. A continuación, ejecute el comando para acceder al shell del usuario.rootec2-usersudo -iroot
[ec2-user@host ~]$ sudo -i
[sudo] password for ec2-user: ec2-user_password
[root@host ~]#
Configurar sudo
El archivo es el archivo de configuración principal para el comando. Para evitar problemas si varios administradores intentan editar el archivo al mismo tiempo, solo puede editarlo con el comando especial. El editor también valida el archivo para garantizar que no haya errores de sintaxis./etc/sudoerssudovisudovisudo
Por ejemplo, la siguiente línea del archivo habilita el acceso de los miembros del grupo:/etc/sudoerssudowheel
%wheel        ALL=(ALL:ALL)       ALL
●	La cadena es el usuario o grupo al que se aplica la regla. El símbolo antes de la palabra especifica un grupo.%wheel%wheel
●	El comando especifica que en cualquier host con este archivo (el primero), los usuarios del grupo pueden ejecutar comandos como cualquier otro usuario (el segundo) y como cualquier otro grupo (el tercero) en el sistema.ALL=(ALL:ALL)ALLwheelALLALL
●	El comando final especifica que los usuarios del grupo pueden ejecutar cualquier comando.ALLwheel
De forma predeterminada, el archivo también incluye el contenido de los archivos del directorio como parte del archivo de configuración. Con esta jerarquía, puede agregar acceso para un usuario colocando un archivo apropiado en ese directorio./etc/sudoers/etc/sudoers.dsudo
Nota
Puede habilitar o deshabilitar el acceso copiando un archivo en el directorio o quitándolo del directorio.sudo
En este curso, creará y eliminará archivos en el directorio para configurar el acceso de usuarios y grupos./etc/sudoers.dsudo
Para habilitar el acceso completo para el usuario, puede crear el archivo con el siguiente contenido:sudouser01/etc/sudoers.d/user01
user01        ALL=(ALL)       ALL
Para habilitar el acceso completo para el grupo, puede crear el archivo con el siguiente contenido:sudogroup01/etc/sudoers.d/group01
%group01        ALL=(ALL)       ALL
Para permitir que los usuarios del grupo ejecuten el comando como usuario, puede crear el archivo con el siguiente contenido:gamesidoperator/etc/sudoers.d/games
%games ALL=(operator) /bin/id
También puede configurar para permitir que un usuario ejecute comandos como otro usuario sin ingresar su contraseña, mediante el comando:sudoNOPASSWD: ALL
ansible        ALL=(ALL)       NOPASSWD: ALL
Aunque se aplican riesgos de seguridad obvios para otorgar este nivel de acceso a un usuario o grupo, los administradores de sistemas a menudo usan este enfoque con instancias en la nube, máquinas virtuales y sistemas de aprovisionamiento para configurar servidores. Debe proteger la cuenta con este acceso y requerir autenticación de clave pública SSH para que un usuario en un sistema remoto acceda a ella.
Por ejemplo, la imagen de máquina de Amazon (AMI) oficial para Red Hat Enterprise Linux en Amazon Web Services Marketplace se envía con las contraseñas bloqueadas. La cuenta está configurada para permitir el acceso interactivo remoto a través de la autenticación de clave pública SSH. El usuario también puede ejecutar cualquier comando sin contraseña, porque la última línea del archivo de la AMI está configurada de la siguiente manera:rootec2-userec2-userec2-userroot/etc/sudoers
ec2-user        ALL=(ALL)       NOPASSWD: ALL
Puede volver a habilitar el requisito de ingresar una contraseña para , o introducir otros cambios para reforzar la seguridad como parte de la configuración del sistema.sudo
Referencias
su(1), (8), (8) y (5) páginas de manualsudovisudosudoers
info libc persona (Manual de referencia de la biblioteca GNU C)
●	Sección 30.2: La persona de un proceso
(El paquete debe estar instalado para que este nodo esté disponible).glibc-docinfo
Ejercicio guiado: Obtener acceso de superusuario
Practique cambiar a la cuenta y ejecutar comandos como .rootroot
Resultados
●	Utilice el comando para cambiar al usuario y acceder al shell interactivo sin conocer la contraseña del superusuario.sudorootroot
●	Explique cómo los comandos and afectan el entorno de shell al ejecutar o no ejecutar los scripts de inicio de sesión.susu -
●	Use el comando para ejecutar otros comandos como usuario.sudoroot
Como usuario de la máquina, use el comando para preparar el sistema para este ejercicio.studentworkstationlab
Este comando prepara el entorno y garantiza que todos los recursos necesarios estén disponibles.
[student@workstation ~]$ lab start users-superuser
Instrucciones
Desde , abra una sesión SSH a como usuario.workstationserverastudent
[student@workstation ~]$ ssh student@servera
...output omitted...
1.	[student@servera ~]$
2.	Explore el entorno de shell del usuario. Vea la información actual del usuario y del grupo y muestre el directorio de trabajo actual. Vea también las variables de entorno que especifican el directorio principal del usuario y las ubicaciones de los archivos ejecutables del usuario.student
Ejecutar para ver la información actual del usuario y del grupo.id
[student@servera ~]$ id
	uid=1000(student) gid=1000(student) groups=1000(student),10(wheel) context=unconfined_u:unconfined_r:unconfined_t:s0-s0:c0.c1023
Ejecutar para mostrar el directorio de trabajo actual.pwd
[student@servera ~]$ pwd
	/home/student
Imprima los valores de las variables y para determinar el directorio de inicio y la ruta de los ejecutables del usuario, respectivamente.HOMEPATH
[student@servera ~]$ echo $HOME
/home/student
[student@servera ~]$ echo $PATH
	/home/student/.local/bin:/home/student/bin:/usr/local/bin:/usr/bin:/usr/local/sbin:/usr/sbin
3.	Cambie al usuario en un shell sin inicio de sesión y explore el nuevo entorno de shell.root
Ejecute el comando en el símbolo del sistema de shell para convertirse en el usuario.sudo suroot
[student@servera ~]$ sudo su
[sudo] password for student: student
	[root@servera student]#
Ejecutar para ver la información actual del usuario y del grupo.id
[root@servera student]# id
	uid=0(root) gid=0(root) groups=0(root) context=unconfined_u:unconfined_r:unconfined_t:s0-s0:c0.c1023
Ejecutar para mostrar el directorio de trabajo actual.pwd
[root@servera student]# pwd
	/home/student
Imprima los valores de las variables y para determinar el directorio de inicio y la ruta de los ejecutables del usuario, respectivamente.HOMEPATH
[root@servera student]# echo $HOME
/root
[root@servera student]# echo $PATH
	/root/.local/bin:/root/bin:/sbin:/bin:/usr/sbin:/usr/bin:/usr/local/sbin:/usr/local/bin
Cuando usa el comando para convertirse en el usuario, no mantiene la ruta actual del usuario. Como puede ver en el siguiente paso, la ruta tampoco es la ruta del usuario.surootstudentroot
¿¿Qué pasó? La diferencia es que no corres directamente. En su lugar, ejecute el comando como usuario mediante porque no tiene la contraseña del superusuario. El comando anula la variable del entorno por motivos de seguridad. Cualquier comando que se ejecute después de la anulación inicial aún puede actualizar la variable, como puede ver en los pasos siguientes.susurootsudosudoPATHPATH
Salga del shell del usuario para volver al shell del usuario.rootstudent
[root@servera student]# exit
exit
	[student@servera ~]$
4.	Cambie al usuario en un shell de inicio de sesión y explore el nuevo entorno de shell.root
Ejecute el comando en el símbolo del sistema de shell para convertirse en el usuario.sudo su -root
El comando puede o no solicitarle la contraseña, dependiendo del período de tiempo de espera de . El período de tiempo de espera predeterminado es de cinco minutos. Si se ha autenticado en los últimos cinco minutos, el comando no le pedirá la contraseña. Si han transcurrido más de cinco minutos desde que se autenticó en , debe introducir como contraseña para la autenticación en .sudostudentsudosudosudosudostudentsudo
[student@servera ~]$ sudo su -
	[root@servera ~]#
Observe la diferencia en el símbolo del shell en comparación con el del paso anterior.sudo su
Ejecutar para ver la información actual del usuario y del grupo.id
[root@servera ~]# id
	uid=0(root) gid=0(root) groups=0(root) context=unconfined_u:unconfined_r:unconfined_t:s0-s0:c0.c1023
Ejecutar para mostrar el directorio de trabajo actual.pwd
[root@servera ~]# pwd
	/root
Imprima los valores de las variables y para determinar el directorio de inicio y la ruta de los ejecutables del usuario, respectivamente.HOMEPATH
[root@servera ~]# echo $HOME
/root
[root@servera ~]# echo $PATH
	/root/.local/bin:/root/bin:/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin
Al igual que en el paso anterior, después de que el comando restablezca la variable desde la configuración en el entorno de shell del usuario, el comando ejecuta los scripts de inicio de sesión de shell y establece la variable en otro valor. El comando sin la opción de guión () no tiene el mismo comportamiento.sudoPATHstudentsu -rootPATHsu-
Salga del shell del usuario para volver al shell del usuario.rootstudent
[root@servera ~]# exit
logout
	[student@servera ~]$
Compruebe que el usuario puede ejecutar cualquier comando como cualquier usuario mediante el comando.operator1sudo
[student@servera ~]$ sudo cat /etc/sudoers.d/operator1
5.	operator1 ALL=(ALL) ALL
6.	Conviértase en el usuario y vea el contenido del archivo. Copie el archivo en . Elimina el archivo. Como estas operaciones requieren derechos administrativos, use el comando para ejecutar esos comandos como superusuario. No cambie a root usando o . Úselo como contraseña del usuario.operator1/var/log/messages/etc/motd/etc/motdOLD/etc/motdOLDsudosudo susudo su -redhatoperator1
Cambie al usuario.operator1
[student@servera ~]$ su - operator1
Password: redhat
	[operator1@servera ~]$
Intente ver las últimas cinco líneas de sin usar . Debería fallar./var/log/messagessudo
[operator1@servera ~]$ tail -5 /var/log/messages
	tail: cannot open '/var/log/messages' for reading: Permission denied
Intente ver las últimas cinco líneas de usando . Debería tener éxito./var/log/messagessudo
[operator1@servera ~]$ sudo tail -5 /var/log/messages
[sudo] password for operator1: redhat
Mar 9 15:53:36 servera su[2304]: FAILED SU (to operator1) student on pts/1
Mar 9 15:53:51 servera su[2307]: FAILED SU (to operator1) student on pts/1
Mar 9 15:53:58 servera su[2310]: FAILED SU (to operator1) student on pts/1
Mar 9 15:54:12 servera su[2322]: (to operator1) student on pts/1
	Mar 9 15:54:25 servera su[2353]: (to operator1) student on pts/1
Nota
El resultado anterior puede diferir en el sistema.
Intente copiar como sin usar . Debería fallar./etc/motd/etc/motdOLDsudo
[operator1@servera ~]$ cp /etc/motd /etc/motdOLD
	cp: cannot create regular file '/etc/motdOLD': Permission denied
Intente copiar como usando . Debería tener éxito./etc/motd/etc/motdOLDsudo
[operator1@servera ~]$ sudo cp /etc/motd /etc/motdOLD
	[operator1@servera ~]$
Intente eliminar sin usar . Debería fallar./etc/motdOLDsudo
[operator1@servera ~]$ rm /etc/motdOLD
rm: remove write-protected regular empty file '/etc/motdOLD'? y
rm: cannot remove '/etc/motdOLD': Permission denied
	[operator1@servera ~]$
Intente eliminar usando . Debería tener éxito./etc/motdOLDsudo
[operator1@servera ~]$ sudo rm /etc/motdOLD
	[operator1@servera ~]$
Regrese al sistema como usuario.workstationstudent
[operator1@servera ~]$ exit
logout
[student@servera ~]$ exit
logout
Connection to servera closed.
	[student@workstation ~]$
Terminar
En la máquina, cambie al directorio principal del usuario y utilice el comando para completar este ejercicio. Este paso es importante para garantizar que los recursos de ejercicios anteriores no afecten los próximos ejercicios.workstationstudentlab
[student@workstation ~]$ lab finish users-superuser
Administrar cuentas de usuario locales
Objetivos
●	Crear, modificar y eliminar cuentas de usuario locales.
Administrar usuarios locales
Puede usar herramientas de línea de comandos para administrar cuentas de usuario locales. En esta sección se revisan algunas herramientas importantes.
Crear usuarios desde la línea de comandos
El comando crea un usuario llamado . Configura el directorio de inicio del usuario y la información de la cuenta, y crea un grupo privado para el usuario llamado . En este punto, no se establece una contraseña válida para la cuenta y el usuario no puede iniciar sesión hasta que se establezca una contraseña.useradd usernameusernameusername
El comando muestra las opciones básicas para anular los valores predeterminados. Normalmente, puede usar las mismas opciones con el comando para modificar un usuario existente.useradd --helpusermod
El archivo establece algunas opciones predeterminadas para las cuentas de usuario, como el rango de números UID válidos y las reglas de caducidad de contraseñas predeterminadas. Los valores de este archivo solo afectan a las cuentas de usuario recién creadas. Un cambio en este archivo no afecta a los usuarios existentes./etc/login.defs
En Red Hat Enterprise Linux 9, el comando asigna a los nuevos usuarios el primer UID libre que sea mayor o igual a 1000, a menos que especifique explícitamente un UID mediante la opción.useradd-u
Modificar usuarios existentes desde la línea de comandos
El comando muestra las opciones para modificar una cuenta. Algunas opciones comunes son las siguientes:usermod --help
usermod Opciones:	Uso
-a, --append	Úselo con la opción para agregar los grupos complementarios al conjunto actual de pertenencias a grupos del usuario en lugar de reemplazar el conjunto de grupos complementarios por un nuevo conjunto.-G
-c, --comment COMMENT	Agregue el texto al campo de comentarios.COMMENT
-d, --home HOME_DIR	Especifique un directorio principal para la cuenta de usuario.
-g, --gid GROUP	Especifique el grupo principal para la cuenta de usuario.
-G, --groups GROUPS	Especifique una lista separada por comas de grupos complementarios para la cuenta de usuario.
-L, --lock	Bloquee la cuenta de usuario.
-m, --move-home	Mueva el directorio principal del usuario a una nueva ubicación. Debes usarlo con la opción.-d
-s, --shell SHELL	Especifique un shell de inicio de sesión determinado para la cuenta de usuario.
-U, --unlock	Desbloquee la cuenta de usuario.
Eliminar usuarios de la línea de comandos
El comando quita el usuario de , pero deja intacto el directorio principal del usuario. El comando elimina al usuario del directorio principal del usuario y lo elimina.userdel usernameusername/etc/passwduserdel -r username/etc/passwd
Advertencia
Cuando elimina un usuario sin especificar la opción, un UID sin asignar ahora es el propietario de los archivos del usuario. Si crea un usuario y a ese usuario se le asigna el UID del usuario eliminado, la nueva cuenta es propietaria de esos archivos, lo que supone un riesgo para la seguridad. Normalmente, las directivas de seguridad de la organización no permiten eliminar cuentas de usuario y, en su lugar, bloquean su uso para evitar este escenario.userdel -r
En el ejemplo siguiente se muestra cómo este escenario puede provocar una fuga de información:
[root@host ~]# useradd user01
[root@host ~]# ls -l /home
drwx------. 3 user01  user01    74 Mar  4 15:22 user01
[root@host ~]# userdel user01
[root@host ~]# ls -l /home
drwx------. 3    1000    1000   74 Mar  4 15:22 user01
[root@host ~]# useradd -u 1000 user02
[root@host ~]# ls -l /home
drwx------. 3 user02     user02       74 Mar  4 15:23 user02
drwx------. 3 user02     user02       74 Mar  4 15:22 user01
Observe que ahora es propietario de todos los archivos que poseía anteriormente. El usuario puede usar el comando para encontrar todos los archivos y directorios sin dueño.user02user01rootfind / -nouser -o -nogroup
Establecer contraseñas desde la línea de comandos
El comando establece la contraseña inicial o cambia la contraseña existente para el usuario. El usuario puede establecer una contraseña para cualquier valor. El terminal muestra un mensaje si la contraseña no cumple con los criterios mínimos recomendados, pero luego puede volver a escribir la nueva contraseña y el comando la actualiza correctamente.passwd usernameusernamerootpasswd
[root@host ~]# passwd user01
Changing password for user user01.
New password: redhat
BAD PASSWORD: The password is shorter than 8 characters
Retype new password: redhat
passwd: all authentication tokens updated successfully.
[root@host ~]#
Un usuario normal debe elegir una contraseña de al menos ocho caracteres. No utilice una palabra del diccionario, el nombre de usuario o la contraseña anterior.
Rangos de UID
Red Hat Enterprise Linux utiliza números UID específicos y rangos de números para fines específicos.
●	UID 0 : UID de la cuenta de superusuario ().root
●	UID 1-200 : UID de cuenta del sistema que se asignan estáticamente a los procesos del sistema.
●	UID 201-999 : UID asignados a procesos del sistema que no poseen archivos en este sistema. Al software que requiere un UID sin privilegios se le asigna dinámicamente un UID de este grupo disponible.
●	UID 1000+ : El rango de UID que se asignará a usuarios normales y sin privilegios.
Nota
RHEL 6 y versiones anteriores usan UID en el rango 1-499 para usuarios del sistema y UID superiores a 500 para usuarios regulares. Puede cambiar los rangos y predeterminados en el archivo.useraddgroupadd/etc/login.defs
Referencias
useradd(8), (8) y (8) páginas de manualusermoduserdel
Ejercicio guiado: Administrar cuentas de usuario locales
Cree varios usuarios en su sistema y establezca contraseñas para esos usuarios.
Resultados
●	Configure un sistema Linux con cuentas de usuario adicionales.
Como usuario de la máquina, use el comando para preparar el sistema para este ejercicio.studentworkstationlab
Este comando prepara el entorno y garantiza que todos los recursos necesarios estén disponibles.
[student@workstation ~]$ lab start users-user
Instrucciones
Desde , abra una sesión SSH como usuario y cambie al usuario.workstationserverastudentroot
[student@workstation ~]$ ssh student@servera
...output omitted...
[student@servera ~]$ sudo -i
[sudo] password for student: student
1.	[root@servera ~]#
Cree el usuario y confirme que existe en el sistema.operator1
[root@servera ~]# useradd operator1
[root@servera ~]# tail /etc/passwd
...output omitted...
2.	operator1:x:1002:1002::/home/operator1:/bin/bash
Establezca la contraseña para en .operator1redhat
[root@servera ~]# passwd operator1
Changing password for user operator1.
New password: redhat
BAD PASSWORD: The password is shorter than 8 characters
Retype new password: redhat
3.	passwd: all authentication tokens updated successfully.
4.	Cree el adicional y usuarios. Establezca sus contraseñas en .operator2operator3redhat
Agregue el usuario. Establezca la contraseña para en .operator2operator2redhat
[root@servera ~]# useradd operator2
[root@servera ~]# passwd operator2
Changing password for user operator2.
New password: redhat
BAD PASSWORD: The password is shorter than 8 characters
Retype new password: redhat
	passwd: all authentication tokens updated successfully.
Agregue el usuario. Establezca la contraseña para en .operator3operator3redhat
[root@servera ~]# useradd operator3
[root@servera ~]# passwd operator3
Changing password for user operator3.
New password: redhat
BAD PASSWORD: The password is shorter than 8 characters
Retype new password: redhat
	passwd: all authentication tokens updated successfully.
5.	Actualice las cuentas y de usuario para incluir los comentarios y , respectivamente. Compruebe que los comentarios existen para las cuentas de usuario.operator1operator2Operator OneOperator Two
	Ejecute el comando para actualizar los comentarios de la cuenta de usuario.usermod -coperator1
[root@servera ~]# usermod -c "Operator One" operator1
	Ejecute el comando para actualizar los comentarios de la cuenta de usuario.usermod -coperator2
[root@servera ~]# usermod -c "Operator Two" operator2
Vea el archivo para confirmar que existen los comentarios para cada uno de los usuarios./etc/passwdoperator1operator2
[root@servera ~]# tail /etc/passwd
...output omitted...
operator1:x:1002:1002:Operator One:/home/operator1:/bin/bash
operator2:x:1003:1003:Operator Two:/home/operator2:/bin/bash
	operator3:x:1004:1004::/home/operator3:/bin/bash
6.	Eliminar el usuario junto con cualquier dato personal del usuario. Confirme que no existe.operator3operator3
	Elimine el usuario del sistema.operator3
[root@servera ~]# userdel -r operator3
Confirme que el usuario no existe.operator3
[root@servera ~]# tail /etc/passwd
...output omitted...
operator1:x:1002:1002:Operator One:/home/operator1:/bin/bash
	operator2:x:1003:1003:Operator Two:/home/operator2:/bin/bash
Tenga en cuenta que el resultado anterior no muestra la información de la cuenta de usuario de .operator3
Confirme que el directorio principal del usuario no existe.operator3
[root@servera ~]# ls -l /home
total 0
drwx------. 4 devops    devops    90 Mar  3 09:59 devops
drwx------. 2 operator1 operator1 62 Mar  9 10:19 operator1
drwx------. 2 operator2 operator2 62 Mar  9 10:19 operator2
	drwx------. 3 student   student   95 Mar  3 09:49 student
Salga del shell del usuario para volver al shell del usuario.rootstudent
[root@servera ~]# exit
logout
	[student@servera ~]$
Cierre la sesión de la máquina.servera
[student@servera ~]$ exit
logout
Connection to servera closed.
	[student@workstation ~]$
Terminar
En la máquina, cambie al directorio principal del usuario y utilice el comando para completar este ejercicio. Este paso es importante para garantizar que los recursos de ejercicios anteriores no afecten los próximos ejercicios.workstationstudentlab
[student@workstation ~]$ lab finish users-user
Administrar cuentas de grupos locales
Objetivos
●	Crear, modificar y eliminar cuentas de grupo local.
Administrar grupos locales
Varias herramientas de línea de comandos permiten la administración de grupos. Aunque puede usar la utilidad GUI de usuarios para administrar grupos, RedÂ Hat recomienda que utilice herramientas de línea de comandos.
Crear grupos desde la línea de comandos
El comando crea grupos. Sin opciones, el comando utiliza el siguiente GID disponible del rango que las variables y especifican en el archivo. De forma predeterminada, el comando asigna un valor de GID que es mayor que cualquier otro GID existente, incluso si hay un valor más bajo disponible.groupaddgroupaddGID_MINGID_MAX/etc/login.defs
La opción de comando especifica un GID para que el grupo lo use.groupadd-g
[root@host ~]# groupadd -g 10000 group01
[root@host ~]# tail /etc/group
...output omitted...
group01:x:10000:
Nota
Debido a la creación automática de grupos privados de usuarios (GID 1000+), algunos administradores reservan un rango separado de GID para crear grupos complementarios para otros fines. Sin embargo, esta administración adicional es innecesaria, porque el UID y el GID primario de un usuario no necesitan ser el mismo número.
La opción de comando crea grupos de sistemas. Al igual que con los grupos normales, los grupos del sistema utilizan un GID del rango de GID del sistema válidos enumerados en el archivo. Los elementos y configuration del archivo definen el rango de GID del sistema.groupadd-r/etc/login.defsSYS_GID_MINSYS_GID_MAX/etc/login.defs
[root@host ~]# groupadd -r group02
[root@host ~]# tail /etc/group
...output omitted...
group01:x:10000:
group02:x:988:
Modificación de grupos existentes desde la línea de comandos
El comando cambia las propiedades de un grupo existente. La opción de comando especifica un nuevo nombre para el grupo.groupmodgroupmod-n
[root@host ~]# groupmod -n group0022 group02
[root@host ~]# tail /etc/group
...output omitted...
group0022:x:988:
Observe que el nombre del grupo se actualiza a from . La opción de comando especifica un nuevo GID.group0022group02groupmod-g
[root@host ~]# groupmod -g 20000 group0022
[root@host ~]# tail /etc/group
...output omitted...
group0022:x:20000:
Observe que el GID cambia a de .20000988
Eliminar grupos de la línea de comandos
El comando elimina grupos.groupdel
[root@host ~]# groupdel group0022
Nota
No puede eliminar un grupo si es el grupo principal de un usuario existente. De forma similar al uso del comando, asegúrese primero de localizar los archivos que posee el grupo.userdel
Cambiar la pertenencia a grupos desde la línea de comandos
La pertenencia a un grupo se controla con la gestión de usuarios. Utilice el comando para cambiar el grupo principal de un usuario.usermod -g
[root@host ~]# id user02
uid=1006(user02) gid=1008(user02) groups=1008(user02)
[root@host ~]# usermod -g group01 user02
[root@host ~]# id user02
uid=1006(user02) gid=10000(group01) groups=10000(group01)
Utilice el comando para agregar un usuario a un grupo complementario.usermod -aG
[root@host ~]# id user03
uid=1007(user03) gid=1009(user03) groups=1009(user03)
[root@host ~]# usermod -aG group01 user03
[root@host ~]# id user03
uid=1007(user03) gid=1009(user03) groups=1009(user03),10000(group01)
Importante
La opción de comando habilita el comando usermod-aañadir modo. Sin la opción, el comando elimina al usuario de cualquiera de sus grupos complementarios actuales que no estén incluidos en la lista de opciones.-a-G
Comparar la pertenencia a un grupo primario y suplementario
El grupo principal de un usuario es el grupo que se ve en la cuenta del usuario en el archivo. Un usuario solo puede pertenecer a un grupo principal a la vez./etc/passwd
Los grupos complementarios de un usuario son los grupos adicionales que se configuran para el usuario y se ven en la entrada del usuario en el archivo. Un usuario puede pertenecer a tantos grupos complementarios como sea necesario para implementar el acceso a los archivos y los permisos de manera efectiva./etc/group
Para configurar permisos de archivo basados en grupos, no existe ninguna diferencia entre los grupos principal y complementario de un usuario. Si el usuario pertenece a cualquier grupo al que se le asigna acceso a archivos específicos, ese usuario tiene acceso a esos archivos.
La única distinción entre las pertenencias principales y complementarias de un usuario es cuando un usuario crea un archivo. Los nuevos archivos deben tener un propietario de usuario y un propietario de grupo, que se asigna cuando se crea el archivo. El grupo principal del usuario se usa para la propiedad del grupo del nuevo archivo, a menos que las opciones de comando lo anulen.
Cambiar temporalmente el grupo principal
Solo se utiliza el grupo principal de un usuario para los nuevos atributos de creación de archivos. Sin embargo, puede cambiar temporalmente su grupo principal a un grupo complementario al que ya pertenezca. Puede cambiar si está a punto de crear archivos, manualmente o con scripts, y desea asignar un grupo diferente como propietario cuando se crean.
Utilice el comando para cambiar su grupo principal, en esta sesión de shell. Puede cambiar entre cualquier grupo principal o complementario al que pertenezca, pero solo un grupo a la vez puede ser principal. El grupo principal vuelve al valor predeterminado si cierra la sesión y vuelve a iniciarla. En este ejemplo, el grupo se convierte temporalmente en el grupo principal de este usuario.newgrpgroup01
[user03@host ~]# id
uid=1007(user03) gid=1009(user03) groups=1009(user03),10000(group01)
[user03@host ~]$ newgrp group01
[user03@host ~]# id
uid=1007(user03) gid=10000(group01) groups=1009(user03),10000(group01)
Referencias
group(5), (8), (8) y (8) páginas de manualgroupaddgroupdelusermod
Ejercicio guiado: Administrar cuentas de grupo local
Cree grupos, utilícelos como grupos complementarios para algunos usuarios sin cambiar los grupos principales de esos usuarios y configure uno de los grupos con acceso para ejecutar comandos como .sudoroot
Resultados
●	Cree grupos y utilícelos como grupos complementarios.
●	Configurar el acceso para un grupo.sudo
Como usuario de la máquina, use el comando para preparar el sistema para este ejercicio.studentworkstationlab
Este comando crea las cuentas de usuario necesarias para configurar el entorno correctamente.
[student@workstation ~]$ lab start users-group
Instrucciones
Desde , abra una sesión SSH como usuario y cambie al usuario.workstationserverastudentroot
[student@workstation ~]$ ssh student@servera
...output omitted...
[student@servera ~]$ sudo -i
[sudo] password for student: student
1.	[root@servera ~]#
2.	Cree el grupo suplementario con un GID de 30000.operators
[root@servera ~]# groupadd -g 30000 operators
3.	Cree el grupo complementario sin especificar un GID.admin
[root@servera ~]# groupadd admin
Compruebe que existen los grupos y los complementarios.operatorsadmin
[root@servera ~]# tail /etc/group
...output omitted...
operators:x:30000:
4.	admin:x:30001:
5.	Asegúrese de que los usuarios , y pertenezcan al grupo.operator1operator2operator3operators
Agregue los usuarios , y al grupo.operator1operator2operator3operators
[root@servera ~]# usermod -aG operators operator1
[root@servera ~]# usermod -aG operators operator2
	[root@servera ~]# usermod -aG operators operator3
Confirme que los usuarios están en el grupo.
[root@servera ~]# id operator1
uid=1002(operator1) gid=1002(operator1) groups=1002(operator1),30000(operators)
[root@servera ~]# id operator2
uid=1003(operator2) gid=1003(operator2) groups=1003(operator2),30000(operators)
[root@servera ~]# id operator3
	uid=1004(operator3) gid=1004(operator3) groups=1004(operator3),30000(operators)
6.	Asegúrese de que los usuarios , y pertenezcan al grupo. Habilite los derechos administrativos para todos los miembros del grupo. Compruebe que cualquier miembro del grupo puede ejecutar comandos administrativos.sysadmin1sysadmin2sysadmin3adminadminadmin
Agregue los usuarios , y al grupo.sysadmin1sysadmin2sysadmin3admin
[root@servera ~]# usermod -aG admin sysadmin1
[root@servera ~]# usermod -aG admin sysadmin2
	[root@servera ~]# usermod -aG admin sysadmin3
Confirme que los usuarios están en el grupo.
[root@servera ~]# id sysadmin1
uid=1005(sysadmin1) gid=1005(sysadmin1) groups=1005(sysadmin1),30001(admin)
[root@servera ~]# id sysadmin2
uid=1006(sysadmin2) gid=1006(sysadmin2) groups=1006(sysadmin2),30001(admin)
[root@servera ~]# id sysadmin3
	uid=1007(sysadmin3) gid=1007(sysadmin3) groups=1007(sysadmin3),30001(admin)
Examine el archivo para comprobar las pertenencias a grupos adicionales./etc/group
[root@servera ~]# tail /etc/group
...output omitted...
operators:x:30000:operator1,operator2,operator3
	admin:x:30001:sysadmin1,sysadmin2,sysadmin3
	Cree el archivo para que los miembros del grupo tengan privilegios administrativos completos./etc/sudoers.d/adminadmin
[root@servera ~]# echo "%admin ALL=(ALL) ALL" >> /etc/sudoers.d/admin
Cambie al usuario (un miembro del grupo) y compruebe que puede ejecutar un comando.sysadmin1adminsudo
[root@servera ~]# su - sysadmin1
[sysadmin1@servera ~]$ sudo cat /etc/sudoers.d/admin
[sudo] password for sysadmin1: redhat
	%admin ALL=(ALL) ALL
Regrese a la máquina como usuario.workstationstudent
[sysadmin1@servera ~]$ exit
logout
[root@servera ~]# exit
logout
[student@servera ~]$ exit
logout
Connection to servera closed.
	[student@workstation ~]$
Terminar
En la máquina, cambie al directorio principal del usuario y utilice el comando para completar este ejercicio. Este paso es importante para garantizar que los recursos de ejercicios anteriores no afecten los próximos ejercicios.workstationstudentlab
[student@workstation ~]$ lab finish users-group
Administrar contraseñas de usuario
Objetivos
●	Establezca una política de administración de contraseñas para los usuarios y bloquee y desbloquee manualmente las cuentas de usuario.
Contraseñas ocultas y política de contraseñas
Originalmente, las contraseñas cifradas se almacenaban en el archivo legible por todo el mundo. Estas contraseñas se consideraron adecuadas hasta que los ataques de diccionario a contraseñas cifradas se volvieron comunes. Las contraseñas cifradas criptográficamente se movieron al archivo, que solo el usuario puede leer./etc/passwd/etc/shadowroot
Al igual que el archivo, cada usuario tiene una entrada en el archivo. Una entrada de ejemplo del archivo tiene nueve campos separados por dos puntos:/etc/passwd/etc/shadow/etc/shadow
[root@host ~]# cat /etc/shadow
...output omitted...
user03:$6$CSsXsd3rwghsdfarf:17933:0:99999:7:2:18113:
Cada campo de este bloque de código está separado por dos puntos:
●	user03 : Nombre de la cuenta de usuario.
●	$6$CSsXsd3rwghsdfarf : La contraseña cifrada criptográficamente del usuario.
●	17933 : Los días desde la época en que se cambió la contraseña por última vez, donde la época está en la zona horaria UTC.1970-01-01
●	0 : Los días mínimos desde el último cambio de contraseña antes de que el usuario pueda volver a cambiarla.
●	99999 : El número máximo de días sin un cambio de contraseña antes de que caduque la contraseña. Un campo vacío significa que la contraseña nunca caduca.
●	7 : El número de días que se avecinan para advertir al usuario de que su contraseña caducará.
●	2 : El número de días sin actividad, comenzando con el día en que expiró la contraseña, antes de que la cuenta se bloquee automáticamente.
●	18113 : El día en que la cuenta expira en días desde la época. Un campo vacío significa que la cuenta nunca caduca.
●	El último campo suele estar vacío y está reservado para uso futuro.
Formato de una contraseña con hash criptográfico
El campo de contraseña con hash criptográfico almacena tres piezas de información: el algoritmo hash en uso, el algoritmo hash saly el hash criptográfico. Salt agrega datos aleatorios al hash criptográfico, para crear un hash único para fortalecer la contraseña con hash criptográfico. Cada pieza de información está delimitada por el carácter de dólar ().$
$6$CSsXcYG1L/4ZfHr/$2W6evvJahUfzfHpc9X.45Jc6H30E
●	6 : El algoritmo hash en uso para esta contraseña. A indica un hash SHA-512, el valor predeterminado de RHEL 9; a indica MD5; y a indica SHA-256.615
●	CSsXcYG1L/4ZfHr/ : La sal que se usa para cifrar criptográficamente la contraseña; originalmente se elige al azar.
●	2W6evvJahUfzfHpc9X.45Jc6H30E : El hash criptográfico de la contraseña del usuario; combinando la sal y la contraseña de texto sin formato y luego hash criptográficamente para generar el hash de contraseña.
La razón principal para combinar una sal con la contraseña es defenderse de los ataques que utilizan listas precalculadas de hashes de contraseñas. Agregar sales cambia los hashes resultantes, lo que hace que la lista precalculada sea inútil. Si un atacante obtiene una copia de un archivo que usa sales, entonces necesita adivinar las contraseñas con fuerza bruta, lo que requiere más tiempo y esfuerzo./etc/shadow
Verificación de contraseña
Cuando un usuario intenta iniciar sesión, el sistema busca la entrada del usuario en el archivo y combina la sal del usuario con la contraseña escrita en texto sin formato. A continuación, el sistema aplica un hash criptográfico a la combinación de la contraseña de sal y texto sin formato con el algoritmo hash especificado. Si el resultado coincide con el hash criptográfico, el usuario escribió la contraseña correcta. Si el resultado no coincide con el hash criptográfico, el usuario escribió la contraseña incorrecta y se produce un error en el intento de inicio de sesión. Este método permite al sistema determinar si el usuario escribió la contraseña correcta sin almacenar esa contraseña en un formato utilizable para iniciar sesión./etc/shadow
Configurar la caducidad de contraseñas
En el diagrama siguiente se muestran los parámetros de caducidad de contraseñas relevantes, que se pueden ajustar mediante el comando para implementar una directiva de caducidad de contraseñas. Observe que el nombre del comando es , que significa "cambiar edad". No confunda el comando con la palabra "cambiar".chagechage
 
Figura 6.1: Parámetros de caducidad de la contraseña
En el ejemplo siguiente se muestra el comando para cambiar la directiva de contraseñas del usuario. El comando define una edad mínima () de cero días, una edad máxima () de 90 días, un período de advertencia () de 7 días y un período de inactividad () de 14 días.chagesysadmin05-m-M-W-I
[root@host ~]# chage -m 0 -M 90 -W 7 -I 14 sysadmin05
Supongamos que administra las políticas de contraseñas de usuario en un servidor de Red Hat. El usuario es nuevo en el sistema y desea establecer una directiva de caducidad de contraseñas personalizada. Desea establecer el vencimiento de la cuenta a 30 días a partir de hoy, por lo que usa los siguientes comandos:cloudadmin10
[root@host ~]# date +%F  
2022-03-10
[root@host ~]# date -d "+30 days" +%F  
2022-04-09
[root@host ~]# chage -E $(date -d "+30 days" +%F) cloudadmin10  
[root@host ~]# chage -l cloudadmin10 | grep "Account expires"  
Account expires						: Apr 09, 2022
 	Utilice el comando para obtener la fecha actual.date
 	Utilice el comando para obtener la fecha dentro de 30 días.date
 	Utilice la opción de comando para cambiar la fecha de caducidad del usuario.chage-Ecloudadmin10
 	Utilice la opción de comando para mostrar la directiva de caducidad de contraseñas para el usuario.chage-lcloudadmin10
Después de unos días, observa en el archivo de registro que el usuario tiene un comportamiento extraño. El usuario intentó usar para interactuar con archivos que pertenecen a otros usuarios. Sospecha que el usuario podría haber dejado una sesión abierta cuando trabajaba en otra máquina. Desea que el usuario cambie la contraseña en el próximo inicio de sesión, por lo que utiliza el siguiente comando:/var/log/securecloudadmin10sudosshcloudadmin10
[root@host ~]# chage -d 0 cloudadmin10
La próxima vez que el usuario inicie sesión, se le pedirá que cambie la contraseña.cloudadmin10
Nota
El comando puede calcular una fecha futura. La opción informa la hora en UTC.date-u
[user01@host ~]$ date -d "+45 days" -u
Thu May 23 17:01:20 UTC 2019
Puede cambiar la configuración de caducidad de contraseña predeterminada en el archivo. Las opciones y establecen la antigüedad máxima y mínima predeterminada de la contraseña respectivamente. Establece el período de advertencia predeterminado de la contraseña. Cualquier cambio en las directivas de caducidad de contraseñas predeterminadas afecta a los usuarios que se crean después del cambio. Los usuarios existentes continúan utilizando la configuración de caducidad de contraseñas anterior en lugar de las posteriores. Para obtener más información sobre el archivo, consulte el /etc/login.defsPASS_MAX_DAYSPASS_MIN_DAYSPASS_WARN_AGE/etc/login.defsRed Hat Security: Linux en la nube física, virtual y en la nube (RH415) y la página de manual.login.defs(5)
Restringir acceso
Puede utilizar el comando para modificar la caducidad de la cuenta de un usuario. Por ejemplo, la opción de comando bloquea una cuenta de usuario y el usuario no puede iniciar sesión en el sistema.usermodusermod-L
[root@host ~]# usermod -L sysadmin03
[user01@host ~]$ su - sysadmin03
Password: redhat
su: Authentication failure
Si un usuario deja la empresa en una fecha determinada, puede bloquear y caducar la cuenta con un solo comando. La fecha debe ser el número de días desde , o de lo contrario use el usermod1970-01-01AAAA-MM-DD formato. En el ejemplo siguiente, el comando bloquea y expira el usuario en .usermodcloudadmin102022-08-14
[root@host ~]# usermod -L -e 2022-08-14 cloudadmin10
Cuando bloquea una cuenta, impide que el usuario se autentique con una contraseña en el sistema. Este método se recomienda para evitar el acceso a una cuenta por parte de un ex empleado de la empresa. Utilice la opción de comando para habilitar el acceso a la cuenta nuevamente.usermod-U
El shell nologin
El shell actúa como un shell de reemplazo para las cuentas de usuario que no están diseñadas para iniciar sesión de forma interactiva en el sistema. Es una buena práctica de seguridad deshabilitar el inicio de sesión de una cuenta en el sistema cuando la cuenta no lo requiere. Por ejemplo, un servidor de correo puede requerir una cuenta para almacenar el correo y una contraseña para que el usuario se autentique con un cliente de correo para recuperar el correo. Ese usuario no necesita iniciar sesión directamente en el sistema.nologin
Una solución común a esta situación es establecer el shell de inicio de sesión del usuario en . Si el usuario intenta iniciar sesión en el sistema directamente, el shell cierra la conexión./sbin/nologinnologin
[root@host ~]# usermod -s /sbin/nologin newapp
[root@host ~]# su - newapp
Last login: Wed Feb  6 17:03:06 IST 2019 on pts/0
This account is currently not available.
Importante
El shell impide el uso interactivo del sistema, pero no impide todo el acceso. Es posible que los usuarios puedan autenticarse y cargar o recuperar archivos a través de aplicaciones como aplicaciones web, programas de transferencia de archivos o lectores de correo si usan la contraseña del usuario para la autenticación.nologin
Referencias
chage(1), (8), (5), (3) y (5) páginas de manual.usermodshadowcryptlogin.defs
Administrar contraseñas de usuario
Objetivos
●	Establezca una política de administración de contraseñas para los usuarios y bloquee y desbloquee manualmente las cuentas de usuario.
Contraseñas ocultas y política de contraseñas
Originalmente, las contraseñas cifradas se almacenaban en el archivo legible por todo el mundo. Estas contraseñas se consideraron adecuadas hasta que los ataques de diccionario a contraseñas cifradas se volvieron comunes. Las contraseñas cifradas criptográficamente se movieron al archivo, que solo el usuario puede leer./etc/passwd/etc/shadowroot
Al igual que el archivo, cada usuario tiene una entrada en el archivo. Una entrada de ejemplo del archivo tiene nueve campos separados por dos puntos:/etc/passwd/etc/shadow/etc/shadow
[root@host ~]# cat /etc/shadow
...output omitted...
user03:$6$CSsXsd3rwghsdfarf:17933:0:99999:7:2:18113:
Cada campo de este bloque de código está separado por dos puntos:
●	user03 : Nombre de la cuenta de usuario.
●	$6$CSsXsd3rwghsdfarf : La contraseña cifrada criptográficamente del usuario.
●	17933 : Los días desde la época en que se cambió la contraseña por última vez, donde la época está en la zona horaria UTC.1970-01-01
●	0 : Los días mínimos desde el último cambio de contraseña antes de que el usuario pueda volver a cambiarla.
●	99999 : El número máximo de días sin un cambio de contraseña antes de que caduque la contraseña. Un campo vacío significa que la contraseña nunca caduca.
●	7 : El número de días que se avecinan para advertir al usuario de que su contraseña caducará.
●	2 : El número de días sin actividad, comenzando con el día en que expiró la contraseña, antes de que la cuenta se bloquee automáticamente.
●	18113 : El día en que la cuenta expira en días desde la época. Un campo vacío significa que la cuenta nunca caduca.
●	El último campo suele estar vacío y está reservado para uso futuro.
Formato de una contraseña con hash criptográfico
El campo de contraseña con hash criptográfico almacena tres piezas de información: el algoritmo hash en uso, el algoritmo hash saly el hash criptográfico. Salt agrega datos aleatorios al hash criptográfico, para crear un hash único para fortalecer la contraseña con hash criptográfico. Cada pieza de información está delimitada por el carácter de dólar ().$
$6$CSsXcYG1L/4ZfHr/$2W6evvJahUfzfHpc9X.45Jc6H30E
●	6 : El algoritmo hash en uso para esta contraseña. A indica un hash SHA-512, el valor predeterminado de RHEL 9; a indica MD5; y a indica SHA-256.615
●	CSsXcYG1L/4ZfHr/ : La sal que se usa para cifrar criptográficamente la contraseña; originalmente se elige al azar.
●	2W6evvJahUfzfHpc9X.45Jc6H30E : El hash criptográfico de la contraseña del usuario; combinando la sal y la contraseña de texto sin formato y luego hash criptográficamente para generar el hash de contraseña.
La razón principal para combinar una sal con la contraseña es defenderse de los ataques que utilizan listas precalculadas de hashes de contraseñas. Agregar sales cambia los hashes resultantes, lo que hace que la lista precalculada sea inútil. Si un atacante obtiene una copia de un archivo que usa sales, entonces necesita adivinar las contraseñas con fuerza bruta, lo que requiere más tiempo y esfuerzo./etc/shadow
Verificación de contraseña
Cuando un usuario intenta iniciar sesión, el sistema busca la entrada del usuario en el archivo y combina la sal del usuario con la contraseña escrita en texto sin formato. A continuación, el sistema aplica un hash criptográfico a la combinación de la contraseña de sal y texto sin formato con el algoritmo hash especificado. Si el resultado coincide con el hash criptográfico, el usuario escribió la contraseña correcta. Si el resultado no coincide con el hash criptográfico, el usuario escribió la contraseña incorrecta y se produce un error en el intento de inicio de sesión. Este método permite al sistema determinar si el usuario escribió la contraseña correcta sin almacenar esa contraseña en un formato utilizable para iniciar sesión./etc/shadow
Configurar la caducidad de contraseñas
En el diagrama siguiente se muestran los parámetros de caducidad de contraseñas relevantes, que se pueden ajustar mediante el comando para implementar una directiva de caducidad de contraseñas. Observe que el nombre del comando es , que significa "cambiar edad". No confunda el comando con la palabra "cambiar".chagechage
 
Figura 6.1: Parámetros de caducidad de la contraseña
En el ejemplo siguiente se muestra el comando para cambiar la directiva de contraseñas del usuario. El comando define una edad mínima () de cero días, una edad máxima () de 90 días, un período de advertencia () de 7 días y un período de inactividad () de 14 días.chagesysadmin05-m-M-W-I
[root@host ~]# chage -m 0 -M 90 -W 7 -I 14 sysadmin05
Supongamos que administra las políticas de contraseñas de usuario en un servidor de Red Hat. El usuario es nuevo en el sistema y desea establecer una directiva de caducidad de contraseñas personalizada. Desea establecer el vencimiento de la cuenta a 30 días a partir de hoy, por lo que usa los siguientes comandos:cloudadmin10
[root@host ~]# date +%F  
2022-03-10
[root@host ~]# date -d "+30 days" +%F  
2022-04-09
[root@host ~]# chage -E $(date -d "+30 days" +%F) cloudadmin10  
[root@host ~]# chage -l cloudadmin10 | grep "Account expires"  
Account expires						: Apr 09, 2022
 	Utilice el comando para obtener la fecha actual.date
 	Utilice el comando para obtener la fecha dentro de 30 días.date
 	Utilice la opción de comando para cambiar la fecha de caducidad del usuario.chage-Ecloudadmin10
 	Utilice la opción de comando para mostrar la directiva de caducidad de contraseñas para el usuario.chage-lcloudadmin10
Después de unos días, observa en el archivo de registro que el usuario tiene un comportamiento extraño. El usuario intentó usar para interactuar con archivos que pertenecen a otros usuarios. Sospecha que el usuario podría haber dejado una sesión abierta cuando trabajaba en otra máquina. Desea que el usuario cambie la contraseña en el próximo inicio de sesión, por lo que utiliza el siguiente comando:/var/log/securecloudadmin10sudosshcloudadmin10
[root@host ~]# chage -d 0 cloudadmin10
La próxima vez que el usuario inicie sesión, se le pedirá que cambie la contraseña.cloudadmin10
Nota
El comando puede calcular una fecha futura. La opción informa la hora en UTC.date-u
[user01@host ~]$ date -d "+45 days" -u
Thu May 23 17:01:20 UTC 2019
Puede cambiar la configuración de caducidad de contraseña predeterminada en el archivo. Las opciones y establecen la antigüedad máxima y mínima predeterminada de la contraseña respectivamente. Establece el período de advertencia predeterminado de la contraseña. Cualquier cambio en las directivas de caducidad de contraseñas predeterminadas afecta a los usuarios que se crean después del cambio. Los usuarios existentes continúan utilizando la configuración de caducidad de contraseñas anterior en lugar de las posteriores. Para obtener más información sobre el archivo, consulte el /etc/login.defsPASS_MAX_DAYSPASS_MIN_DAYSPASS_WARN_AGE/etc/login.defsRed Hat Security: Linux en la nube física, virtual y en la nube (RH415) y la página de manual.login.defs(5)
Restringir acceso
Puede utilizar el comando para modificar la caducidad de la cuenta de un usuario. Por ejemplo, la opción de comando bloquea una cuenta de usuario y el usuario no puede iniciar sesión en el sistema.usermodusermod-L
[root@host ~]# usermod -L sysadmin03
[user01@host ~]$ su - sysadmin03
Password: redhat
su: Authentication failure
Si un usuario deja la empresa en una fecha determinada, puede bloquear y caducar la cuenta con un solo comando. La fecha debe ser el número de días desde , o de lo contrario use el usermod1970-01-01AAAA-MM-DD formato. En el ejemplo siguiente, el comando bloquea y expira el usuario en .usermodcloudadmin102022-08-14
[root@host ~]# usermod -L -e 2022-08-14 cloudadmin10
Cuando bloquea una cuenta, impide que el usuario se autentique con una contraseña en el sistema. Este método se recomienda para evitar el acceso a una cuenta por parte de un ex empleado de la empresa. Utilice la opción de comando para habilitar el acceso a la cuenta nuevamente.usermod-U
El shell nologin
El shell actúa como un shell de reemplazo para las cuentas de usuario que no están diseñadas para iniciar sesión de forma interactiva en el sistema. Es una buena práctica de seguridad deshabilitar el inicio de sesión de una cuenta en el sistema cuando la cuenta no lo requiere. Por ejemplo, un servidor de correo puede requerir una cuenta para almacenar el correo y una contraseña para que el usuario se autentique con un cliente de correo para recuperar el correo. Ese usuario no necesita iniciar sesión directamente en el sistema.nologin
Una solución común a esta situación es establecer el shell de inicio de sesión del usuario en . Si el usuario intenta iniciar sesión en el sistema directamente, el shell cierra la conexión./sbin/nologinnologin
[root@host ~]# usermod -s /sbin/nologin newapp
[root@host ~]# su - newapp
Last login: Wed Feb  6 17:03:06 IST 2019 on pts/0
This account is currently not available.
Importante
El shell impide el uso interactivo del sistema, pero no impide todo el acceso. Es posible que los usuarios puedan autenticarse y cargar o recuperar archivos a través de aplicaciones como aplicaciones web, programas de transferencia de archivos o lectores de correo si usan la contraseña del usuario para la autenticación.nologin
Referencias
chage(1), (8), (5), (3) y (5) páginas de manual.usermodshadowcryptlogin.defs
Ejercicio guiado: Administrar contraseñas de usuario
Establezca políticas de contraseñas para varios usuarios.
Resultados
●	Forzar un cambio de contraseña cuando el usuario inicia sesión en el sistema por primera vez.
●	Forzar un cambio de contraseña cada 90 días.
●	Configure la cuenta para que caduque 180 días después del día actual.
Como usuario de la máquina, use el comando para preparar el sistema para este ejercicio.studentworkstationlab
Este comando prepara el entorno y garantiza que todos los recursos necesarios estén disponibles.
[student@workstation ~]$ lab start users-password
Instrucciones
Desde , abra una sesión SSH como usuario en la máquina.workstationstudentservera
[student@workstation ~]$ ssh student@servera
1.	[student@servera ~]$
2.	En , use el comando para bloquear y desbloquear al usuario.serverausermodoperator1
Como usuario, use los derechos administrativos para bloquear la cuenta.studentoperator1
[student@servera ~]$ sudo usermod -L operator1
	[sudo] password for student: student
Intente iniciar sesión como . Este comando debería fallar.operator1
[student@servera ~]$ su - operator1
Password: redhat
	su: Authentication failure
	Desbloquea la cuenta.operator1
[student@servera ~]$ sudo usermod -U operator1
Intente iniciar sesión como nuevamente. Esta vez, el comando debería tener éxito.operator1
[student@servera ~]$ su - operator1
Password: redhat
...output omitted...
	[operator1@servera ~]$
Cierre la sesión del shell de usuario para volver al shell de usuario.operator1student
[operator1@servera ~]$ exit
	logout
3.	Cambie la directiva de contraseñas para que el usuario solicite una nueva contraseña cada 90 días. Confirme que la antigüedad de la contraseña se ha establecido correctamente.operator1
Cambie al usuario.root
[student@servera ~]$ sudo -i
[sudo] password for student: student
	[root@servera ~]#
	Establezca la antigüedad máxima de la contraseña del usuario en 90 días.operator1
[root@servera ~]# chage -M 90 operator1
Compruebe que la contraseña del usuario caduca 90 días después de cambiarla.operator1
[root@servera ~]# chage -l operator1
Last password change      : Mar 10, 2022
Password expires          : Jun 10, 2022
Password inactive         : never
Account expires           : never
Minimum number of days between password change    : 0
Maximum number of days between password change    : 90
	Number of days of warning before password expires : 7
4.	Forzar un cambio de contraseña en el primer inicio de sesión de la cuenta.operator1
[root@servera ~]# chage -d 0 operator1
Salga como usuario de la máquina.rootservera
[root@servera ~]# exit
logout
5.	[student@servera ~]$
6.	Inicie sesión como y cambie la contraseña a . Después de establecer la contraseña, vuelva al shell del usuario.operator1forsooth123student
Inicie sesión y cambie la contraseña cuando se le solicite.operator1forsooth123
[student@servera ~]$ su - operator1
Password: redhat
You are required to change your password immediately (administrator enforced)
Current password: redhat
New password: forsooth123
Retype new password: forsooth123
...output omitted...
	[operator1@servera ~]$
Salga del shell del usuario para volver al usuario y, a continuación, cambie al usuario.operator1studentroot
[operator1@servera ~]$ exit
logout
[student@servera ~]$ sudo -i
[sudo] password for student: student
	[root@servera ~]#
7.	Configure la cuenta para que caduque 180 días después del día actual.operator1
Determine una fecha de 180 días en el futuro. Utilice el formato con el comando para obtener el valor exacto. Esta fecha devuelta es un ejemplo; Utilice el valor en su sistema para los pasos posteriores a este.%Fdate
[root@servera ~]# date -d "+180 days" +%F
	2022-09-06
	Establezca la cuenta para que caduque en la fecha que se muestra en el paso anterior. Por ejemplo:
[root@servera ~]# chage -E 2022-09-06 operator1
Verifique que la fecha de vencimiento de la cuenta se haya establecido correctamente.
[root@servera ~]# chage -l operator1
Last password change      : Mar 10, 2022
Password expires          : Jun 10, 2022
Password inactive         : never
Account expires           : Sep 06, 2022
Minimum number of days between password change    : 0
Maximum number of days between password change    : 90
	Number of days of warning before password expires : 7
8.	Establezca las contraseñas para que caduquen 180 días después de la fecha actual para todos los usuarios. Utilice los derechos administrativos para editar el archivo de configuración.
Establezca en . Utilice los derechos administrativos al abrir el archivo con el editor de texto. Puede utilizar el comando para realizar este paso.PASS_MAX_DAYS180/etc/login.defsvim /etc/login.defs
...output omitted...
# Password aging controls:
#
#       PASS_MAX_DAYS   Maximum number of days a password may be
#       used.
#       PASS_MIN_DAYS   Minimum number of days allowed between
#       password changes.
#       PASS_MIN_LEN    Minimum acceptable password length.
#       PASS_WARN_AGE   Number of days warning given before a
#       password expires.
#
PASS_MAX_DAYS 180
PASS_MIN_DAYS   0
PASS_WARN_AGE   7
	...output omitted...
Importante
La configuración predeterminada de contraseña y caducidad de la cuenta se aplica a los usuarios nuevos, pero no a los usuarios existentes.
Regrese al sistema como usuario.workstationstudent
[root@servera ~]# exit
logout
[student@servera ~]$ exit
logout
Connection to servera closed.
	[student@workstation ~]$
Terminar
En la máquina, cambie al directorio principal del usuario y utilice el comando para completar este ejercicio. Este paso es importante para garantizar que los recursos de ejercicios anteriores no afecten los próximos ejercicios.workstationstudentlab
[student@workstation ~]$ lab finish users-password
Laboratorio: Administrar usuarios y grupos locales
Establezca una directiva de contraseñas local predeterminada, cree un grupo complementario para tres usuarios, permita que ese grupo lo use para ejecutar comandos como y modifique la directiva de contraseñas para un usuario.sudoroot
Resultados
●	Establezca una directiva de caducidad de contraseña predeterminada de la contraseña del usuario local.
●	Cree y use un grupo complementario para nuevos usuarios.
●	Cree tres nuevos usuarios con el nuevo grupo complementario.
●	Establezca una contraseña inicial para los usuarios creados.
●	Configure los miembros del grupo complementarios para que utilicen el comando para ejecutar cualquier comando como cualquier usuario.sudo
●	Establezca una directiva de caducidad de contraseñas específica del usuario.
Como usuario de la máquina, use el comando para preparar el sistema para este ejercicio.studentworkstationlab
Este comando prepara el entorno y garantiza que todos los recursos necesarios estén disponibles.
[student@workstation ~]$ lab start users-review
Instrucciones
1.	Desde la máquina, abra una sesión SSH en la máquina como usuario y cambie al usuario.workstationserverbstudentroot
[student@workstation ~]$ ssh student@serverb
...output omitted...
[student@serverb ~]$ sudo -i
[sudo] password for student: student
2.	[root@serverb ~]#
3.	En el equipo, asegúrese de que los usuarios recién creados deben cambiar sus contraseñas cada 30 días.serverb
Establézcalo en en el archivo. Utilice los derechos administrativos al abrir el archivo con el editor de texto. Puede usar el comando para este paso.PASS_MAX_DAYS30/etc/login.defsvim /etc/login.defs
...output omitted...
# Password aging controls:
#
#       PASS_MAX_DAYS   Maximum number of days a password may be
#       used.
#       PASS_MIN_DAYS   Minimum number of days allowed between
#       password changes.
#       PASS_MIN_LEN    Minimum acceptable password length.
#       PASS_WARN_AGE   Number of days warning given before a
#       password expires.
#
PASS_MAX_DAYS 30
PASS_MIN_DAYS   0
PASS_WARN_AGE   7
	...output omitted...
4.	Cree el grupo con un GID de .consultants35000
5.	[root@serverb ~]# groupadd -g 35000 consultants
6.	Configure los derechos administrativos para permitir que todos los miembros del grupo ejecuten cualquier comando como cualquier usuario. Evite usarlo para editar el archivo. En su lugar, coloque el archivo de configuración en el directorio.consultantsvisudo/etc/sudoers/etc/sudoers.d
	Cree el archivo y agréguele el siguiente contenido. Puede usar el comando para este paso./etc/sudoers.d/consultantsvim /etc/sudoers.d/consultants
%consultants  ALL=(ALL) ALL
7.	Cree los usuarios , y con el grupo como grupo complementario.consultant1consultant2consultant3consultants
[root@serverb ~]# useradd -G consultants consultant1
[root@serverb ~]# useradd -G consultants consultant2
8.	[root@serverb ~]# useradd -G consultants consultant3
9.	Establezca , y contraseñas en .consultant1consultant2consultant3redhat
[root@serverb ~]# passwd consultant1
Changing password for user consultant1.
New password: redhat
BAD PASSWORD: The password is shorter than 8 characters
Retype new password: redhat
passwd: all authentication tokens updated successfully.
[root@serverb ~]# passwd consultant2
Changing password for user consultant2.
New password: redhat
BAD PASSWORD: The password is shorter than 8 characters
Retype new password: redhat
passwd: all authentication tokens updated successfully
[root@serverb ~]# passwd consultant3
Changing password for user consultant3.
New password: redhat
BAD PASSWORD: The password is shorter than 8 characters
Retype new password: redhat
10.	passwd: all authentication tokens updated successfully
11.	Configure las cuentas , y para que caduquen en 90 días a partir del día actual.consultant1consultant2consultant3
Determine la fecha 90 días en el futuro. Esta fecha devuelta es un ejemplo; El valor que ve, para usar en el paso siguiente, se basa en la fecha y hora actuales en su sistema.
[root@serverb ~]# date -d "+90 days" +%F
	2022-06-08
Establezca la fecha de caducidad de la cuenta , y las cuentas en el mismo valor que se determinó en el paso anterior. Por ejemplo:consultant1consultant2consultant3
[root@serverb ~]# chage -E 2022-06-08 consultant1
[root@serverb ~]# chage -E 2022-06-08 consultant2
	[root@serverb ~]# chage -E 2022-06-08 consultant3
12.	Cambie la política de contraseñas de la cuenta para que requiera una nueva contraseña cada 15 días.consultant2
13.	[root@serverb ~]# chage -M 15 consultant2
14.	Además, obligue a los usuarios a cambiar sus contraseñas en el primer inicio de sesión.consultant1consultant2consultant3
Establezca el último día del cambio de contraseña en para que los usuarios deban cambiar la contraseña cuando inicien sesión por primera vez en el sistema.0
[root@serverb ~]# chage -d 0 consultant1
[root@serverb ~]# chage -d 0 consultant2
	[root@serverb ~]# chage -d 0 consultant3
Regrese al sistema como usuario.workstationstudent
[root@serverb ~]# exit
logout
[student@serverb ~]$ exit
logout
Connection to serverb closed.
	[student@workstation ~]$
Evaluación
Como usuario de la máquina, utilice el comando para calificar el trabajo. Corrija los errores notificados y vuelva a ejecutar el comando hasta que se realice correctamente.studentworkstationlab
[student@workstation ~]$ lab grade users-review
Terminar
En la máquina, cambie al directorio principal del usuario y utilice el comando para completar este ejercicio. Este paso es importante para garantizar que los recursos de ejercicios anteriores no afecten los próximos ejercicios.workstationstudentlab
[student@workstation ~]$ lab finish users-review
Resumen
●	Los tipos de cuenta de usuario en Linux son el superusuario, los usuarios del sistema y los usuarios normales.
●	Un usuario tiene un grupo principal y puede ser miembro de grupos complementarios.
●	Los archivos , y critical contienen información de usuario y grupo./etc/passwd/etc/group/etc/shadow
●	Puede ejecutar comandos como superusuario con los comandos and.susudo
●	Los comandos , y y administran usuarios.useraddusermoduserdel
●	Los comandos , y y administran grupos.groupaddgroupmodgroupdel
●	El comando administra las contraseñas de los usuarios.passwd
●	El comando muestra y configura los ajustes de caducidad de la contraseña para los usuarios.chage
Capítulo 7. Controlar el acceso a los archivos
Interpretar los permisos del sistema de archivos de Linux
Cuestionario: Interpretación de los permisos del sistema de archivos de Linux
Administrar permisos del sistema de archivos desde la línea de comandos
Ejercicio guiado: Administrar permisos del sistema de archivos desde la línea de comandos
Administrar permisos predeterminados y acceso a archivos
Ejercicio guiado: Administrar permisos predeterminados y acceso a archivos
Laboratorio: Controlar el acceso a los archivos
Resumen
Abstracto
Gol	Establezca permisos del sistema de archivos de Linux en archivos e interprete los efectos de seguridad de diferentes configuraciones de permisos.
Objetivos	●	
Enumere los permisos del sistema de archivos en archivos y directorios, e interprete los efectos de esos permisos en el acceso de usuarios y grupos.
●	Cambie los permisos y la propiedad de los archivos con herramientas de línea de comandos.
●	Controle los permisos predeterminados de los archivos creados por el usuario, explique los efectos de los permisos especiales y use permisos especiales y predeterminados para establecer el propietario del grupo de los archivos que se crean en un directorio.
Secciones	●	
Interpretar los permisos del sistema de archivos de Linux (y el cuestionario)
●	Administrar permisos del sistema de archivos desde la línea de comandos (y ejercicio guiado)
●	Administrar permisos predeterminados y acceso a archivos (y ejercicio guiado)
Laboratorio	●	
Controlar el acceso a los archivos
Interpretar los permisos del sistema de archivos de Linux
Objetivos
●	Enumere los permisos del sistema de archivos en archivos y directorios, e interprete el efecto de esos permisos en el acceso de usuarios y grupos.
Permisos del sistema de archivos de Linux
Permisos de archivo Controlar el acceso a los archivos. Los permisos de archivo de Linux son flexibles y pueden manejar la mayoría de los casos de permisos normales.
Los archivos tienen tres categorías de usuario a las que se aplican los permisos. El archivo es propiedad de un usuario, normalmente el creador del archivo. El archivo también es propiedad de un solo grupo, que suele ser el grupo principal del usuario que creó el archivo, pero puede cambiarlo.
Puede establecer diferentes permisos para el usuario propietario (usuario permisos), el grupo propietario (grupo permisos) y para todos los demás usuarios del sistema que no sean usuarios o miembros del grupo propietario (Otro permisos).
Los permisos más específicos tienen prioridad. Los permisos de usuario anulan los permisos de grupo, que anulan otros permisos.
Como ejemplo de cómo la pertenencia a grupos permite la colaboración entre usuarios, imagine que su sistema tiene dos usuarios: y . es miembro de los grupos y y es miembro de los grupos , y . Cuando y trabajan juntos, los archivos deben asociarse con el grupo y los permisos de grupo deben permitir que ambos usuarios tengan acceso a los archivos.alicebobalicealicewebbobbobwheelwebalicebobweb
Se aplican tres categorías de permisos: lectura, escritura y ejecución. En la tabla siguiente se explica cómo afectan estos permisos al acceso a archivos y directorios.
Tabla 7.1. Efectos de los permisos en archivos y directorios
Permiso	Efecto en los archivos	Efecto en los directorios
r (leer)	Se puede leer el contenido del archivo.	Se puede enumerar el contenido del directorio (los nombres de archivo).
w (escribir)	El contenido del archivo se puede cambiar.	Se puede crear o eliminar cualquier archivo del directorio.
x (ejecutar)	Los archivos se pueden ejecutar como comandos.	El directorio puede convertirse en el directorio de trabajo actual. Puede ejecutar el comando en él, pero también requiere permiso de lectura para enumerar archivos allí.cd

Los usuarios normalmente tienen permisos de lectura y ejecución en directorios de solo lectura para que puedan enumerar el directorio y tener acceso de solo lectura a todo su contenido. Si un usuario solo tiene acceso de lectura en un directorio, puede enumerar los nombres de los archivos que contiene. Sin embargo, el usuario no puede acceder a otra información, como permisos o marcas de tiempo. Si un usuario solo tiene acceso de ejecución en un directorio, no puede enumerar los nombres de archivo en el directorio. Si conocen el nombre de un archivo que tienen permiso para leer, pueden acceder al contenido de ese archivo desde fuera del directorio especificando explícitamente el nombre de archivo relativo.
Cualquier persona que posea o tenga permisos de escritura y ejecución en un directorio puede eliminar archivos de él, independientemente de la propiedad o los permisos del propio archivo. Puede anular este comportamiento mediante el uso de la función Parte pegajosa permiso, que se discutirá más adelante en este capítulo.
Nota
Los permisos de archivo de Linux funcionan de forma diferente a los permisos del sistema de archivos NTFS de Microsoft. En Linux, los permisos se aplican solo al archivo o directorio en el que están establecidos. Los subdirectorios de un directorio no heredan automáticamente los permisos del directorio primario. Sin embargo, los permisos de directorio pueden bloquear el acceso al contenido del directorio, si se establecen de forma restrictiva.
El permiso en un directorio de Linux es similar al contenido de la carpeta List en Windows. El permiso en un directorio de Linux es similar a Modificar en Windows; implica la capacidad de eliminar archivos y subdirectorios. En Linux, con permisos y el bit pegajoso en un directorio, solo el usuario o propietario del grupo puede eliminar archivos, lo cual es similar al comportamiento de escritura de Windows.readwritewrite
El usuario de Linux tiene el equivalente al permiso de control total de Windows en todos los archivos. Sin embargo, la política de SELinux puede usar contextos de seguridad de procesos y archivos para restringir el acceso incluso al usuario. SELinux se discute en el rootrootAdministración del sistema Red Hat II (RH134).
Ver permisos y propiedad de archivos y directorios
La opción de comando muestra información detallada sobre los permisos y la propiedad:ls-l
[user@host ~]$ ls -l test
-rw-rw-r--. 1 student student 0 Mar  8 17:36 test
Utilice la opción de comando para mostrar información detallada sobre un directorio en sí, y no su contenido.ls-d
[user@host ~]$ ls -ld /home
drwxr-xr-x. 5 root root 4096 Feb 31 22:00 /home
El primer carácter de la lista larga es el tipo de archivo y se interpreta de la siguiente manera:
●	- es un archivo normal.
●	d es un directorio.
●	l es un vínculo simbólico.
●	c es un archivo de dispositivo de caracteres.
●	b es un archivo de dispositivo de bloque.
●	p es un archivo de canalización con nombre.
●	s es un archivo socket local.
Los siguientes nueve caracteres representan los permisos de archivo. Estos caracteres se interpretan como tres conjuntos de tres caracteres: El primer conjunto son permisos que se aplican al propietario del archivo. El segundo conjunto es para el propietario del grupo del archivo. El último conjunto se aplica a todos los demás usuarios (mundiales). Si un conjunto es una cadena, ese conjunto tiene los tres permisos: lectura, escritura y ejecución. Si una letra se reemplaza por un carácter de guión, ese conjunto no tiene ese permiso.rwx-
Después de la segunda columna (el recuento de vínculos), el primer nombre especifica el propietario del archivo y el segundo nombre es el propietario del grupo del archivo.
En el primer ejemplo, los permisos para el usuario son el primer conjunto de tres caracteres. El usuario tiene permisos de lectura y escritura en el archivo, pero no permisos de ejecución. El segundo conjunto de tres caracteres son los permisos para el grupo: permisos de lectura y escritura en , pero no permiso de ejecución. El tercer conjunto de tres caracteres son los permisos para todos los demás usuarios: solo permiso de lectura en .studentstudentteststudenttesttest
Se aplica el conjunto más específico de permisos. Por lo tanto, si el usuario tiene permisos diferentes a los del grupo y el usuario también es miembro de ese grupo, solo se aplican los permisos de propietario del usuario. Este permiso permite establecer un conjunto de permisos más restrictivo en un usuario que el que proporciona su pertenencia a un grupo, cuando podría no ser práctico eliminar al usuario del grupo.studentstudentstudent
Ejemplos de efectos de permisos
Los siguientes ejemplos ilustran cómo interactúan los permisos de archivo. Para estos ejemplos, el sistema tiene cuatro usuarios con las siguientes pertenencias a grupos:
Usuario	Membresías de grupo
operator1	operador1, consultor1
database1	base de datos1, consultor1
database2	base de datos2, operador2
contractor1	contratista1, operador2
Esos usuarios trabajan con archivos en el directorio. Una larga lista de los archivos en ese directorio es la siguiente:dir
[database1@host dir]$ ls -la
total 24
drwxrwxr-x.  2 database1 consultant1   4096 Mar  4 10:23 .
drwxr-xr-x. 10 root      root          4096 Mar  1 17:34 ..
-rw-rw-r--.  1 operator1 operator1     1024 Mar  4 11:02 app1.log
-rw-r--rw-.  1 operator1 consultant1   3144 Mar  4 11:02 app2.log
-rw-rw-r--.  1 database1 consultant1  10234 Mar  4 10:14 db1.conf
-rw-r-----.  1 database1 consultant1   2048 Mar  4 10:18 db2.conf
La opción de comando muestra los permisos de los archivos ocultos, incluidos los archivos especiales para representar el directorio y su padre. En este ejemplo, el directorio especial refleja los permisos de sí mismo y el directorio especial refleja los permisos de su directorio primario.ls-a.dir..
Para el archivo, el usuario propietario del archivo () tiene permisos de lectura y escritura, pero no permisos de ejecución. El grupo propietario del archivo () tiene permisos de lectura y escritura, pero no permisos de ejecución. Todos los demás usuarios tienen permiso de lectura, pero no de escritura ni de ejecución.db1.confdatabase1consultant1
En la tabla siguiente se exploran algunos efectos de este conjunto de permisos para estos usuarios:
Efecto	¿Por qué es cierto este efecto?
El usuario puede cambiar el contenido del archivo.operator1db1.conf	El usuario es miembro del grupo y ese grupo tiene permisos de lectura y escritura en el archivo.operator1consultant1db1.conf
El usuario puede ver y modificar el contenido del archivo.database1db2.conf	El usuario es propietario del archivo y tiene acceso de lectura y escritura.database1db2.conf
El usuario puede ver pero no modificar el contenido del archivo.operator1db2.conf	El usuario es miembro del grupo y ese grupo solo tiene acceso de lectura al archivo.operator1consultant1db2.conf
Los usuarios y no tienen acceso al contenido del archivo.database2contractor1db2.conf	Los permisos se aplican a los usuarios y esos permisos no incluyen el permiso de lectura o escritura.otherdatabase2contractor1
El usuario es el único usuario que puede cambiar el contenido del archivo.operator1app1.log	El usuario y los miembros del grupo tienen permiso de escritura en el archivo, mientras que otros usuarios no. Sin embargo, el único miembro del grupo es el usuario.operator1operator1operator1operator1
El usuario puede cambiar el contenido del archivo.database2app2.log	El usuario no es el propietario del archivo y no está en el grupo, por lo que se aplican los permisos. Los permisos otorgan permiso de escritura al archivo.database2app2.logconsultant1otherother
El usuario puede ver el contenido del archivo, pero no puede modificar el contenido del archivo.database1app2.logapp2.log	El usuario es miembro del grupo y ese grupo solo tiene permisos de lectura en el archivo. Aunque los permisos incluyen permiso de escritura, los permisos de grupo tienen prioridad.database1consultant1app2.logother
El usuario puede eliminar los archivos y.database1app1.logapp2.log	El usuario tiene permisos de escritura en el directorio, que muestra el directorio especial y, por lo tanto, puede eliminar cualquier archivo en ese directorio. Esta operación es posible incluso si el usuario no tiene permiso de escritura en los archivos directamente.database1dir.database1
Referencias
ls(1) página de manual
info coreutils (GNU Coreutils)
●	Sección 13: Cambio de atributos de archivo
Administrar permisos del sistema de archivos desde la línea de comandos
Objetivos
●	Cambie los permisos y la propiedad de los archivos con herramientas de línea de comandos.
Cambiar permisos de archivos y directorios
El comando tiene las siguientes características: Cambia los permisos de archivo y directorio desde la línea de comandos. Se puede interpretar como "cambiar de modo", porque el chmodmodo de un archivo es otro nombre para los permisos de archivo. Se necesita una instrucción de permiso seguida de una lista de archivos o directorios para cambiar. Puede establecer la instrucción de permiso simbólicamente o en notación octal (numérica).
Cambiar permisos con el método simbólico
Utilice el comando para modificar los permisos de archivos y directorios.chmod
chmod Who/What/Which file|directory
Quién es la clase de usuario, como en la tabla siguiente. Si no proporciona una clase de usuario, el comando utiliza el grupo como valor predeterminado.chmodall
Quién	Poner	Descripción
u	usuario	El propietario del archivo.
g	grupo	Miembro del grupo del archivo.
o	Otro	Usuarios que no son el propietario del archivo ni miembros del grupo del archivo.
a	todo	Los tres grupos anteriores.
Qué es el operador que modifica el Cuál, como en la siguiente tabla.
Qué	Operación	Descripción
+	agregar	Agrega los permisos al archivo.
-	eliminar	Quita los permisos del archivo.
=	establecer exactamente	Establece exactamente los permisos proporcionados para el archivo.
Cuál es el modo y especifica los permisos para los archivos o directorios, como en la tabla siguiente.
Cuál	Modo	Descripción
r	leer	Acceso de lectura al archivo. Listado de acceso al directorio.
w	escribir	Permisos de escritura en el archivo o directorio.
x	ejecutar	Permisos de ejecución para el archivo. Permite ingresar al directorio y acceder a archivos y subdirectorios dentro del directorio.
X	ejecución especial	Permisos de ejecución en un directorio o permisos de ejecución en un archivo si se establece al menos uno de los bits de ejecución.
El simbólico El método para cambiar los permisos de archivo utiliza letras para representar los grupos de permisos: Para el usuario, Para el grupo, Para los demás y Para todos.ugoa
Con el método simbólico, no es necesario establecer un grupo completamente nuevo de permisos. En su lugar, puede cambiar uno o varios de los permisos existentes. Utilice los caracteres más () o menos () para agregar o quitar permisos, respectivamente, o utilice el carácter igual () para reemplazar todo el conjunto de un grupo de permisos.+-=
Una sola letra representa los permisos en sí: para lectura, para escritura y para ejecución. Puede usar mayúsculas como marca de permiso para agregar permisos de ejecución solo si el archivo es un directorio o si execute ya está configurado para usuario, grupo u otro.rwxX
En la lista siguiente se muestran algunos ejemplos para cambiar permisos con el método simbólico:
Elimine el permiso de lectura y escritura para el grupo y otros en el archivo:document.pdf
[user@host ~]$ chmod go-rw document.pdf
Agregue permiso de ejecución para todos en el archivo:myscript.sh
[user@host ~]$ chmod a+x myscript.sh
Puede utilizar la opción de comando para establecer permisos de forma recursiva en los archivos de un árbol de directorios completo. Por ejemplo, el siguiente comando agrega de forma recursiva permisos de lectura, escritura y ejecución para los miembros del grupo que poseen el directorio y los archivos y directorios que contiene.chmod-Rmyfolder
[user@host ~]$ chmod -R g+rwx /home/user/myfolder
También puede usar la opción de comando con la opción de establecer permisos simbólicamente. Con la opción de comando, puede establecer el permiso de ejecución (búsqueda) en los directorios para que se pueda acceder a su contenido, sin cambiar los permisos en la mayoría de los archivos. Sin embargo, tenga cuidado con la opción, ya que si se establece algún permiso de ejecución en un archivo, la opción también establece el permiso de ejecución especificado en ese archivo.chmod-R-XchmodXXX
Por ejemplo, el siguiente comando establece de forma recursiva el acceso de lectura y escritura en el directorio y todos sus elementos secundarios para el propietario de su grupo, pero aplica permisos de ejecución de grupo solo a directorios y archivos en los que el permiso de ejecución ya está establecido para el usuario, el grupo u otro.demodir
[root@host opt]# chmod -R g+rwX demodir
Cambiar permisos con el método octal
Puede usar el comando para cambiar los permisos de archivo con el método octal en lugar del método simbólico. En el ejemplo siguiente, el carácter # representa un dígito.chmod
chmod ### file|directory
Con el método octal, puede representar los permisos como 3 dígitos (o 4 dígitos, al establecer permisos avanzados) octal número. Un solo dígito octal puede representar cualquier valor único de 0 a 7.
En la representación octal de 3 dígitos de los permisos, cada dígito representa un nivel de acceso, de izquierda a derecha: usuario, grupo y otro. Para determinar cada dígito:
●	Comience con 0.
●	Para agregar permisos de lectura para este nivel de acceso, agregue 4.
●	Para agregar permisos de escritura, agregue 2.
●	Para agregar permisos de ejecución, agregue 1.
En el diagrama siguiente se muestra cómo los sistemas interpretan el valor del permiso octal.644
 
Figura 7.1: Representación visual del método octal
Los administradores experimentados a menudo usan permisos octales para implementar en archivos únicos o coincidentes, y proporcionan un control total de los permisos.
En la lista siguiente se muestran algunos ejemplos para cambiar permisos con el método octal:
Establezca permisos de lectura y escritura para el usuario, y permisos de lectura para grupos y otros, en el archivo:sample.txt
[user@host ~]$ chmod 644 sample.txt
Establezca permisos de lectura, escritura y ejecución para el usuario, permisos de lectura y ejecución para el grupo y ningún permiso para otros en el directorio:sampledir
[user@host ~]$ chmod 750 sampledir
Cambiar la propiedad de un usuario o grupo de archivos y directorios
El usuario es propietario de un archivo que crea. De forma predeterminada, los archivos nuevos tienen una propiedad de grupo que es el grupo principal del usuario que crea el archivo. En Red Hat Enterprise Linux, el grupo principal de un usuario suele ser un grupo privado con solo ese usuario como miembro. Para conceder acceso a un archivo en función de la pertenencia a un grupo, es posible que tenga que cambiar el grupo propietario del archivo.
Solo el usuario puede cambiar el usuario propietario de un archivo. Sin embargo, el propietario del archivo y el usuario pueden establecer la propiedad del grupo. El usuario puede otorgar la propiedad del archivo a cualquier grupo, pero los usuarios normales SOLO pueden cambiar la propiedad del grupo del archivo si son miembros del grupo de destino.rootrootroot
Puede cambiar la propiedad del archivo mediante el comando (change owner). Por ejemplo, para conceder la propiedad del archivo al usuario, utilice el siguiente comando:chownapp.confstudent
[root@host ~]# chown student app.conf
La opción command cambia recursivamente la propiedad de todo un árbol de directorios. El siguiente comando otorga al usuario la propiedad del directorio y de todos los archivos y subdirectorios que contiene:chown-RPicturesstudent
[root@host ~]# chown -R student Pictures
También puede utilizar el comando para cambiar la propiedad del grupo de un archivo precediendo el nombre del grupo con dos puntos (). Por ejemplo, el siguiente comando cambia la propiedad del grupo del directorio a:chown:Picturesadmins
[root@host ~]# chown :admins Pictures
Puede usar el comando para cambiar el propietario y el grupo al mismo tiempo mediante el comando chowndueño:grupo sintaxis. Por ejemplo, para cambiar la propiedad del directorio al usuario y el grupo a , use el siguiente comando:Picturesvisitorguests
[root@host ~]# chown visitor:guests Pictures
En lugar de usar el comando, algunos usuarios cambian la propiedad del grupo mediante el comando. Este comando funciona de manera similar a , excepto que solo puede usarlo para cambiar la propiedad del grupo y no se requieren los dos puntos () antes del nombre del grupo.chownchgrpchown:
Importante
Es posible que encuentre una sintaxis alternativa que separe el propietario y el grupo con un carácter de punto en lugar de dos puntos:chown
[root@host ~]# chown owner.group filename
Red Hat recomienda no usar esta sintaxis y usar siempre dos puntos. Debido a que un punto es un carácter válido en un nombre de usuario, un comando podría malinterpretar tu intención. El comando puede interpretar el usuario y el grupo como un nombre de archivo. En su lugar, solo use un carácter de dos puntos al configurar el usuario y el grupo al mismo tiempo.chown
Referencias
ls(1), (1), (1) y (1) páginas de manualchmodchownchgrp
Ejercicio guiado: Administrar permisos del sistema de archivos desde la línea de comandos
Utilice los permisos del sistema de archivos para crear un directorio en el que todos los miembros de un grupo determinado puedan agregar y eliminar archivos.
Resultados
●	Cree un directorio colaborativo al que puedan acceder todos los miembros de un grupo.
Como usuario de la máquina, use el comando para preparar el sistema para este ejercicio.studentworkstationlab
Este comando prepara el entorno y garantiza que todos los recursos necesarios estén disponibles.
[student@workstation ~]$ lab start perms-cli
Instrucciones
Desde , inicie sesión como usuario y cambie al usuario.workstationserverastudentroot
[student@workstation ~]$ ssh student@servera
...output omitted...
[student@servera ~]$ sudo -i
[sudo] password for student: student
1.	[root@servera ~]#
2.	Cree el directorio./home/consultants
[root@servera ~]# mkdir /home/consultants
3.	Cambie la propiedad del grupo del directorio a .consultantsconsultants
[root@servera ~]# chown :consultants /home/consultants
4.	Modifique los permisos del grupo para permitir que sus miembros creen archivos en el directorio y los eliminen del mismo.consultants/home/consultants
Los permisos actuales prohíben a otros acceder a los archivos. Debe establecer los permisos adecuados.
Compruebe que los permisos del grupo permiten a los miembros del grupo crear archivos en el directorio y eliminarlos del mismo.consultants/home/consultants
Tenga en cuenta que el grupo actualmente no tiene permiso de escritura.consultants
[root@servera ~]# ls -ld /home/consultants
	drwxr-xr-x.  2 root    consultants       6 Mar  1 12:08 /home/consultants
Agregue permiso de escritura al grupo. Utilice el método simbólico para establecer los permisos adecuados.consultants
[root@servera ~]# chmod g+w /home/consultants
[root@servera ~]# ls -ld /home/consultants
	drwxrwxr-x. 2 root consultants 6 Mar  1 13:21 /home/consultants
Prohibir a otros acceder a los archivos del directorio. Utilice el método octal para establecer los permisos adecuados./home/consultants
[root@servera ~]# chmod 770 /home/consultants
[root@servera ~]# ls -ld /home/consultants
	drwxrwx---. 2 root consultants 6 Mar  1 12:08 /home/consultants/
Salga del shell y cambie al usuario. La contraseña es .rootconsultant1redhat
[root@servera ~]# exit
logout
[student@servera ~]$ su - consultant1
Password: redhat
5.	[consultant1@servera ~]$
6.	Vaya al directorio y cree un archivo llamado ./home/consultantsconsultant1.txt
	Cambie al directorio./home/consultants
[consultant1@servera ~]$ cd /home/consultants
	Cree un archivo vacío llamado .consultant1.txt
[consultant1@servera consultants]$ touch consultant1.txt
Enumere el contenido del directorio./home/consultants
[consultant1@servera consultants]$ ls
7.	consultant1.txt
Salga del shell y cambie al usuario. La contraseña es .consultant2redhat
[consultant1@servera consultants]$ exit
logout
[student@servera ~]$ su - consultant2
Password: redhat
8.	[consultant2@servera ~]$
9.	Vaya al directorio. Asegúrese de que el usuario puede agregar archivos al directorio./home/consultantsconsultant2/home/consultants/
Cambie al directorio. Cree un archivo vacío llamado ./home/consultantsconsultant2.txt
[consultant2@servera ~]$ cd /home/consultants/
	[consultant2@servera consultants]$ touch consultant2.txt
Enumere el contenido del directorio./home/consultants
[consultant2@servera consultants]$ ls
10.	consultant1.txt  consultant2.txt
Regrese al sistema como usuario.workstationstudent
[consultant2@servera consultants]$ exit
logout
[student@servera ~]$ exit
logout
Connection to servera closed.
11.	[student@workstation ~]$
Terminar
En la máquina, cambie al directorio principal del usuario y utilice el comando para completar este ejercicio. Este paso es importante para garantizar que los recursos de ejercicios anteriores no afecten los próximos ejercicios.workstationstudentlab
[student@workstation ~]$ lab finish perms-cli
Administrar permisos predeterminados y acceso a archivos
Objetivos
●	Controle los permisos predeterminados de los archivos creados por el usuario, explique el efecto de los permisos especiales y use permisos especiales y predeterminados para establecer el propietario del grupo de los archivos que se crean en un directorio.
Permisos especiales
Permisos especiales son un cuarto tipo de permiso además del usuario, el grupo y otros tipos. Como su nombre lo indica, los permisos especiales proporcionan funciones adicionales relacionadas con el acceso más allá de lo que permiten los tipos de permisos básicos. En esta sección se describe el impacto de los permisos especiales, que se resumen en la tabla siguiente.
Tabla 7.2. Efectos de los permisos especiales en archivos y directorios
Permiso	Efecto en los archivos	Efecto en los directorios
u+s (suid)	El archivo se ejecuta como el usuario propietario del archivo, no como el usuario que ejecutó el archivo.	Sin efecto.
g+s (SGID)	El archivo se ejecuta como el grupo propietario del archivo.	Los archivos que se crean en el directorio tienen un propietario de grupo que coincide con el propietario del grupo del directorio.
o+t (pegajoso)	Sin efecto.	Los usuarios con acceso de escritura al directorio solo pueden eliminar los archivos que poseen; No pueden eliminar ni forzar el guardado en archivos que poseen otros usuarios.

El Setuid permiso en un archivo ejecutable significa que los comandos se ejecutan como el usuario propietario de ese archivo, en lugar de como el usuario que ejecutó el comando. Un ejemplo es el comando:passwd
[user@host ~]$ ls -l /usr/bin/passwd
-rwsr-xr-x. 1 root root 35504 Jul 16  2010 /usr/bin/passwd
En una lista larga, puede identificar los permisos por un carácter minúsculo en el lugar donde normalmente esperaría el carácter (permisos de ejecución del propietario). Si el propietario no tiene permisos de ejecución, este carácter se reemplaza por un carácter en mayúscula.setuidsxS
El setgid Un permiso especial en un directorio significa que los archivos creados en el directorio heredan su propiedad de grupo del directorio, en lugar de heredar la propiedad de grupo del usuario creador. Esta función se usa comúnmente en directorios colaborativos de grupo para cambiar automáticamente un archivo del grupo privado predeterminado al grupo compartido, o si un grupo específico siempre debe poseer archivos en un directorio. Un ejemplo de este comportamiento es el directorio:/run/log/journal
[user@host ~]$ ls -ld /run/log/journal
drwxr-sr-x. 3 root systemd-journal 60 May 18 09:15 /run/log/journal
Si se establece en un archivo ejecutable, los comandos se ejecutan como el grupo propietario de ese archivo, en lugar de como el grupo principal del usuario que ejecutó el comando. Esta condición es similar a la forma en que funciona. Un ejemplo es el comando:setgidsetuidlocate
[user@host ~]$ ls -ld /usr/bin/locate
-rwx--s--x. 1 root slocate 47128 Aug 12 17:17 /usr/bin/locate
En una lista larga, puede identificar los permisos por un carácter minúsculo en el lugar donde normalmente esperaría el carácter (permisos de ejecución de grupo). Si el grupo no tiene permisos de ejecución, este carácter se reemplaza por un carácter en mayúscula.setgidsxS
Finalmente, el Parte pegajosa para un directorio establece una restricción especial en la eliminación de archivos. Solo el propietario del archivo (y el usuario) pueden eliminar archivos dentro del directorio. Un ejemplo es el directorio:root/tmp
[user@host ~]$ ls -ld /tmp
drwxrwxrwt. 39 root root 4096 Feb  8 20:52 /tmp
En una lista larga, puede identificar los permisos fijos por un carácter en minúscula en el lugar donde normalmente esperaría el carácter (otros permisos de ejecución). Si other no tiene permisos de ejecución, este carácter se reemplaza por un carácter en mayúscula.txT
Configuración de permisos especiales
●	Simbólico : = ; = ; pegajoso = setuidu+ssetgidg+so+t
●	Octal : En el cuarto dígito anterior agregado; = 4; = 2; pegajoso = 1setuidsetgid
Ejemplos de permisos especiales
Agregue el bit en el directorio usando el método simbólico:setgidexample
[user@host ~]# chmod g+s example
Quite el bit en el directorio usando el método simbólico:setuidexample
[user@host ~]# chmod u-s example
Establezca el bit y agregue permisos de lectura, escritura y ejecución para el usuario y el grupo, sin acceso para otros, en el directorio mediante el método octal:setgidexample
[user@host ~]# chmod 2770 example
Quite el bit y agregue permisos de lectura, escritura y ejecución para el usuario y el grupo, sin acceso para otros, en el directorio mediante el método octal. Tenga en cuenta que debe agregar un extra al principio del valor de permissions al eliminar permisos especiales mediante el método octal:setgidexample0
[user@host ~]# chmod 00770 example
Permisos de archivo predeterminados
En el momento de la creación, se asignan permisos iniciales a un archivo. Dos factores afectan a estos permisos iniciales. La primera es si está creando un archivo normal o un directorio. El segundo es el actual Máscara de usuario, que significa máscara de creación de archivos de usuario.
Si crea un directorio, sus permisos octales iniciales son 0777 (). Si crea un archivo normal, sus permisos octales iniciales son 0666 (). Siempre debe agregar explícitamente el permiso de ejecución a un archivo normal. Este paso hace que sea más difícil para un atacante comprometer un sistema, crear un archivo malicioso y ejecutarlo.drwxrwxrwx-rw-rw-rw-
Además, la sesión de shell establece una máscara para restringir aún más los permisos iniciales de un archivo. La máscara de bits es una máscara de bits octal que borra los permisos de los nuevos archivos y directorios que crea un proceso. Si se establece un bit en umask, se borra el permiso correspondiente en los archivos nuevos. Por ejemplo, umask 0002 borra el bit de escritura para otros usuarios. Los ceros a la izquierda indican que los permisos especiales, de usuario y de grupo no están borrados. Una máscara de 0077 borra todos los permisos de grupo y otros permisos de los archivos recién creados.
El comando sin argumentos muestra el valor actual de la máscara de shell :umask
[user@host ~]$ umask
0022
Utilice el comando con un solo argumento octal para cambiar la máscara de usuario del shell actual. El argumento debe ser un valor octal que corresponda al nuevo valor de umask. Puede omitir los ceros a la izquierda en la máscara de usuario. Por ejemplo, es lo mismo que .umaskumask 077umask 0077
Los valores de máscara de usuario predeterminados del sistema para los usuarios de shell de Bash se definen en el archivo y en el archivo. Los usuarios pueden anular los valores predeterminados del sistema en los archivos o en sus directorios de inicio./etc/login.defs/etc/bashrc.bash_profile.bashrc
Importante
En Red Hat Enterprise Linux 8 y versiones anteriores, si una cuenta de usuario tiene un UID de 200 o más y el nombre de usuario y el nombre del grupo principal de la cuenta son los mismos, su umask predeterminado es 0002. De lo contrario, su umask predeterminado es 0022.
Red Hat Enterprise Linux 9 está en proceso de cambiar el umask predeterminado para que todas las cuentas tengan un umask de 0022. En RHEL 9.0 y 9.1, cuando inicia un shell de inicio de sesión, su umask es 0022. Sin embargo, cuando inicia un shell interactivo sin inicio de sesión (como cuando inicia en la interfaz de usuario gráfica), su umask es 0002 si el UID de su cuenta es 200 o superior y su grupo principal tiene el mismo nombre que su cuenta de usuario. Se espera que esta máscara predeterminada cambie en futuras versiones de Red Hat Enterprise Linux 9 para que la máscara predeterminada sea 0022 en todas las circunstancias.gnome-terminal
El problema de Bugzilla https://bugzilla.redhat.com/show_bug.cgi?id=2062601 está rastreando este cambio en el comportamiento de RHEL 9.
Efecto de la utilidad umask en los permisos
En el ejemplo siguiente se explica cómo umask afecta a los permisos de archivos y directorios. Observe los permisos predeterminados de umask para archivos y directorios en el shell actual.
Importante
En los ejemplos siguientes se supone que la máscara de usuario del shell se establece en 0022.
Si crea un archivo normal, sus permisos octales iniciales son 0666 (000 110 110 110, en representación binaria). A continuación, la máscara 0022 (000 000 010 010) desactiva el bit de permiso de escritura para el grupo y otros. Por lo tanto, el propietario tiene permiso de lectura y escritura en los archivos, y tanto el grupo como el otro están configurados para leer (000 110 100 100).
 
Figura 7.2: Ejemplo de cálculo de umask en un archivo
[user@host ~]$ umask
0022
[user@host ~]$ touch default.txt
[user@host ~]$ ls -l default.txt
-rw-r--r--. 1 user user 0 May  9 01:54 default.txt
Si crea un directorio, sus permisos octales iniciales son 0777 (000 111 111 111). A continuación, la máscara 0022 (000 000 010 010) desactiva el bit de permiso de escritura para el grupo y otros. Por lo tanto, el propietario tiene permisos de lectura, escritura y ejecución en directorios, y tanto el grupo como otros están configurados para lectura y ejecución (000 111 101 101).
 
Figura 7.3: Ejemplo de cálculo de umask en un directorio
[user@host ~]$ umask
0022
[user@host ~]$ mkdir default
[user@host ~]$ ls -ld default
drwxr-xr-x. 2 user user 0 May  9 01:54 default
Al establecer el valor de umask en 0, los permisos de archivo para otros cambian de lectura a lectura y escritura. Los permisos de directorio para otros cambian de lectura y ejecución a lectura, escritura y ejecución.
[user@host ~]$ umask 0
[user@host ~]$ touch zero.txt
[user@host ~]$ ls -l zero.txt
-rw-rw-rw-. 1 user user 0 May  9 01:54 zero.txt
[user@host ~]$ mkdir zero
[user@host ~]$ ls -ld zero
drwxrwxrwx. 2 user user 0 May  9 01:54 zero
Para enmascarar todos los permisos de archivos y directorios para otros, establezca el valor de umask en 007.
[user@host ~]$ umask 007
[user@host ~]$ touch seven.txt
[user@host ~]$ ls -l seven.txt
-rw-rw----. 1 user user 0 May  9 01:55 seven.txt
[user@host ~]$ mkdir seven
[user@host ~]$ ls -ld seven
drwxrwx---. 2 user user 0 May  9 01:54 seven
Una máscara de 027 garantiza que los nuevos archivos tengan permisos de lectura y escritura para el usuario y permisos de lectura para el grupo. Los nuevos directorios tienen permisos de lectura y ejecución para el grupo y no permisos para otros.
[user@host ~]$ umask 027
[user@host ~]$ touch two-seven.txt
[user@host ~]$ ls -l two-seven.txt
-rw-r-----. 1 user user 0 May  9 01:55 two-seven.txt
[user@host ~]$ mkdir two-seven
[user@host ~]$ ls -ld two-seven
drwxr-x---. 2 user user 0 May  9 01:54 two-seven
Cambiar los permisos predeterminados
En Red Hat Enterprise Linux 9, el archivo establece la máscara de usuario predeterminada para los usuarios. De forma predeterminada, su línea especifica que la máscara de usuario predeterminada es 0022./etc/login.defsUMASK
En Red Hat Enterprise Linux 9.0 y 9.1, este archivo solo afecta a los shells de inicio de sesión. Si inicia una nueva ventana de terminal o inicia un shell interactivo sin inicio de sesión de alguna otra manera, la configuración aún se aplica. Para estos shells, si el UID de la cuenta es 200 o superior y el nombre de usuario y el nombre del grupo principal son los mismos, se asigna a la cuenta una máscara de 0002. De lo contrario, la máscara es 0022./etc/bashrc
El usuario puede cambiar la máscara de usuario predeterminada para shells interactivos que no son de inicio de sesión agregando un script de inicio de shell en el directorio. En el ejemplo siguiente se muestra un archivo:rootlocal-umask.sh/etc/profile.d/local-umask.sh
[root@host ~]# cat /etc/profile.d/local-umask.sh
# Overrides default umask configuration asda sda
if [ $UID -gt 199 ] && [ "`id -gn`" = "`id -un`" ]; then
    umask 007
else
    umask 022
fi
En el ejemplo anterior se establece umask en 0007 para los usuarios con un UID superior a 199 y con un nombre de usuario y un nombre de grupo principal que coincidan, y en 0022 para todos los demás. (Se pueden omitir los ceros a la izquierda). Para establecer umask en 0022 para todos, cree ese archivo con el siguiente contenido:
# Overrides default umask configuration
umask 022
La máscara actual de un shell se aplica hasta que cierra sesión en el shell y vuelve a iniciarla, o hasta que la cambia manualmente con el comando.umask
Referencias
bash(1), (1), (1) y (1) páginas de manuallschmodumask
Ejercicio guiado: Administrar permisos predeterminados y acceso a archivos
Controle los permisos de los archivos que se crean en un directorio mediante la configuración de umask y el permiso.setgid
Resultados
●	Cree un directorio compartido donde el grupo posea automáticamente nuevos archivos.operators
●	Experimenta con varios ajustes de umask.
●	Ajuste los permisos predeterminados para usuarios específicos.
●	Verifique su cambio.
Como usuario de la máquina, use el comando para preparar el sistema para este ejercicio.studentworkstationlab
Este comando prepara el entorno y garantiza que todos los recursos necesarios estén disponibles.
[student@workstation ~]$ lab start perms-default
Instrucciones
Inicie sesión en el sistema como usuario.serverastudent
[student@workstation ~]$ ssh student@servera
...output omitted...
1.	[student@servera ~]$
Cambie al usuario con como contraseña.operator1redhat
[student@servera ~]$ su - operator1
Password: redhat
2.	[operator1@servera ~]$
Enumere el valor de máscara de usuario predeterminado.operator1
[operator1@servera ~]$ umask
3.	0022
4.	Cree un directorio. En el directorio, cree un archivo. Mira los permisos predeterminados./tmp/shared/tmp/shareddefaults
Cree el directorio. Enumere los permisos del nuevo directorio./tmp/shared
[operator1@servera ~]$ mkdir /tmp/shared
[operator1@servera ~]$ ls -ld /tmp/shared
	drwxr-xr-x. 2 operator1 operator1 6 Feb  4 14:06 /tmp/shared
	Cree un archivo en el directorio.defaults/tmp/shared
[operator1@servera ~]$ touch /tmp/shared/defaults
Enumere los permisos del nuevo archivo.
[operator1@servera ~]$ ls -l /tmp/shared/defaults
	-rw-r--r--. 1 operator1 operator1 0 Feb  4 14:09 /tmp/shared/defaults
5.	Cambie la propiedad del grupo del directorio al grupo. Confirme la nueva propiedad y los permisos./tmp/sharedoperators
	Cambie la propiedad del grupo del directorio al grupo./tmp/sharedoperators
[operator1@servera ~]$ chown :operators /tmp/shared
Enumere los permisos del directorio./tmp/shared
[operator1@servera ~]$ ls -ld /tmp/shared
	drwxr-xr-x. 2 operator1 operators 22 Feb  4 14:09 /tmp/shared
Cree un archivo en el directorio. Enumere los permisos de archivo.group/tmp/shared
[operator1@servera ~]$ touch /tmp/shared/group
[operator1@servera ~]$ ls -l /tmp/shared/group
	-rw-r--r--. 1 operator1 operator1 0 Feb  4 17:00 /tmp/shared/group
Nota
El propietario del grupo del archivo no es pero ./tmp/shared/groupoperatorsoperator1
6.	Asegúrese de que el grupo posee los archivos que se crean en el directorio.operators/tmp/shared
	Establezca el ID de grupo en el grupo del directorio.operators/tmp/shared
[operator1@servera ~]$ chmod g+s /tmp/shared
	Cree un archivo en el directorio.ops_db.txt/tmp/shared
[operator1@servera ~]$ touch /tmp/shared/ops_db.txt
Compruebe que el grupo es el propietario del grupo para el nuevo archivo.operators
[operator1@servera ~]$ ls -l /tmp/shared/ops_db.txt
	-rw-r--r--. 1 operator1 operators 0 Feb  4 16:11 /tmp/shared/ops_db.txt
7.	Cree un archivo en el directorio. Registre la propiedad y los permisos. Cambie la máscara de usuario para el usuario. Crea un archivo. Registre la propiedad y los permisos del archivo.ops_net.txt/tmp/sharedoperator1ops_prod.txtops_prod.txt
	Cree un archivo en el directorio.ops_net.txt/tmp/shared
[operator1@servera ~]$ touch /tmp/shared/ops_net.txt
Enumere los permisos del archivo.ops_net.txt
[operator1@servera ~]$ ls -l /tmp/shared/ops_net.txt
	-rw-r--r--. 1 operator1 operators 5 Feb  0 15:43 /tmp/shared/ops_net.txt
Cambie la máscara de usuario a 027. Confirme el cambio.operator1
[operator1@servera ~]$ umask 027
[operator1@servera ~]$ umask
	0027
Cree un archivo en el directorio. Compruebe que los archivos recién creados tienen acceso de solo lectura para el grupo y no tienen acceso para otros usuarios.ops_prod.txt/tmp/shared/operators
[operator1@servera ~]$ touch /tmp/shared/ops_prod.txt
[operator1@servera ~]$ ls -l /tmp/shared/ops_prod.txt
	-rw-r-----. 1 operator1 operators 0 Feb  0 15:56 /tmp/shared/ops_prod.txt
Abra una nueva ventana de terminal e inicie sesión en .serveraoperator1
[student@workstation ~]$ ssh operator1@servera
...output omitted...
8.	[operator1@servera ~]$
Enumere el valor de umask para .operator1
[operator1@servera ~]$ umask
9.	0022
10.	Cambie la máscara de usuario predeterminada para el usuario. El nuevo umask prohíbe todo acceso a los usuarios que no están en su grupo. Confirme que se ha cambiado el umask.operator1
Cambie la máscara de usuario predeterminada para el usuario a 007.operator1
[operator1@servera ~]$ echo "umask 007" >> ~/.bashrc
[operator1@servera ~]$ cat ~/.bashrc
# .bashrc

# Source global definitions
if [ -f /etc/bashrc ]; then
	. /etc/bashrc
fi
...output omitted...
	umask 007
Cierre sesión y vuelva a iniciarla como usuario. Confirme que el cambio es permanente.operator1
[operator1@servera ~]$ exit
logout
Connection to servera closed.
[student@workstation ~]$ ssh operator1@servera
...output omitted...
[operator1@servera ~]$ umask
	0007
Cree un archivo en el directorio. Verifique que los archivos recién creados tengan acceso de lectura y escritura para el grupo y no tengan acceso para otros usuarios, debido a la nueva máscara de 007.ops_prod2.txt/tmp/shared/operators
[operator1@servera ~]$ touch /tmp/shared/ops_prod2.txt
[operator1@servera ~]$ ls -l /tmp/shared/ops_prod2.txt
11.	-rw-rw----. 1 operator1 operators 0 Feb  0 15:56 /tmp/shared/ops_prod2.txt
Activado, cierre todos y shell de usuario. Regrese al sistema como usuario.serveraoperator1studentworkstationstudent
Advertencia
Si no se sale de todos los shells, se produce un error en el script de finalización.operator1
[operator1@servera ~]$ exit
logout
Connection to servera closed.
12.	[student@workstation ~]$
Terminar
En la máquina, cambie al directorio principal del usuario y utilice el comando para completar este ejercicio. Este paso es importante para garantizar que los recursos de ejercicios anteriores no afecten los próximos ejercicios.workstationstudentlab
[student@workstation ~]$ lab finish perms-default
Laboratorio: Controlar el acceso a los archivos
Configure permisos en archivos y configure un directorio que los usuarios de un grupo determinado puedan usar para compartir archivos en el sistema de archivos local.
Resultados
●	Cree un directorio donde los usuarios puedan trabajar en colaboración en los archivos.
●	Cree archivos a los que se asigne automáticamente la propiedad del grupo.
●	Cree archivos a los que no se pueda acceder fuera del grupo.
Como usuario de la máquina, use el comando para preparar el sistema para este ejercicio.studentworkstationlab
Este comando prepara el entorno y garantiza que todos los recursos necesarios estén disponibles.
[student@workstation ~]$ lab start perms-review
Instrucciones
1.	Inicie sesión como usuario. Ejecute el comando en el símbolo del sistema de shell para convertirse en el usuario. Úselo como contraseña de usuario.serverbstudentsudo -irootstudentstudent
[student@workstation ~]$ ssh student@serverb
...output omitted...
[student@serverb ~]$ sudo -i
[sudo] password for student: student
2.	[root@serverb ~]#
3.	Cree un directorio./home/techdocs
	Utilice el comando para crear un directorio.mkdir/home/techdocs
[root@serverb ~]# mkdir /home/techdocs
4.	Cambie la propiedad del grupo del directorio al grupo./home/techdocstechdocs
	Utilice el comando para cambiar la propiedad del grupo del directorio al grupo.chown/home/techdocstechdocs
[root@serverb ~]# chown :techdocs /home/techdocs
5.	Compruebe que los usuarios del grupo no pueden crear archivos en el directorio.techdocs/home/techdocs
Utilice el comando para cambiar al usuario.sutech1
[root@serverb ~]# su - tech1
	[tech1@serverb ~]$
Cree un archivo en el directorio. Este paso debería fallar.techdoc1.txt/home/techdocs
Aunque el directorio es propiedad del grupo y forma parte del grupo, no puede crear un archivo en ese directorio. La razón es que el grupo no tiene permiso de escritura./home/techdocstechdocstech1techdocstechdocs
[tech1@serverb ~]$ touch /home/techdocs/techdoc1.txt
	touch: cannot touch '/home/techdocs/techdoc1.txt': Permission denied
Enumere los permisos del directorio.
[tech1@serverb ~]$ ls -ld /home/techdocs/
	  drwxr-xr-x. 2 root techdocs 6 Feb  5 16:05 /home/techdocs/
6.	Establezca permisos en el directorio. En el directorio, configure (2); permisos de lectura, escritura y ejecución (7) para el propietario/usuario y el grupo; y sin permisos (0) para otros usuarios./home/techdocs/home/techdocssetgid
Salga del shell de usuario.tech1
[tech1@serverb ~]$ exit
logout
	[root@serverb ~]#
	Establezca el permiso de grupo para el directorio. Configurar; permisos de lectura, escritura y ejecución para el propietario y el grupo; y sin permisos para otros./home/techdocssetgid
[root@serverb ~]# chmod 2770 /home/techdocs
7.	Compruebe que los permisos están configurados correctamente.
El grupo ahora tiene permiso de escritura.techdocs
[root@serverb ~]# ls -ld /home/techdocs
8.	drwxrws---. 2 root techdocs 6 Feb 4 18:12 /home/techdocs/
9.	Confirme que los usuarios del grupo ahora pueden crear y editar archivos en el directorio. Los usuarios que no están en el grupo no pueden editar ni crear archivos en el directorio. Los usuarios y están en el grupo. El usuario no está en ese grupo.techdocs/home/techdocstechdocs/home/techdocstech1tech2techdocsdatabase1
Cambie al usuario. Cree un archivo en el directorio. Agrega algo de texto al archivo. Salga del shell de usuario.tech1techdoc1.txt/home/techdocs/home/techdocs/techdoc1.txttech1
[root@serverb ~]# su - tech1
[tech1@serverb ~]$ touch /home/techdocs/techdoc1.txt
[tech1@serverb ~]$ ls -l /home/techdocs/techdoc1.txt
-rw-r--r--. 1 tech1 techdocs 0 Feb  5 16:42 /home/techdocs/techdoc1.txt
[tech1@serverb ~]$ echo "This is the first tech doc." > /home/techdocs/techdoc1.txt
[tech1@serverb ~]$ exit
logout
	[root@serverb ~]#
Cambie al usuario. Muestra el contenido del archivo. Cree un archivo en el directorio. Salga del shell de usuario.tech2/home/techdocs/techdoc1.txttechdoc2.txt/home/techdocstech2
[root@serverb ~]# su - tech2
[tech2@serverb ~]$ cd /home/techdocs
[tech2@serverb techdocs]$ cat techdoc1.txt
This is the first tech doc.
[tech2@serverb techdocs]$ touch /home/techdocs/techdoc2.txt
[tech2@serverb techdocs]$ ls -l
total 4
-rw-r--r--. 1 tech1 techdocs 28 Feb  5 17:43 techdoc1.txt
-rw-r--r--. 1 tech2 techdocs  0 Feb  5 17:45 techdoc2.txt
[tech2@serverb techdocs]$ exit
logout
	[root@serverb ~]#
Cambie al usuario. Muestra el contenido del archivo. Recibes un mensaje. Compruebe que el usuario no tiene acceso al archivo. Salga del shell de usuario.database1/home/techdocs/techdoc1.txtPermission Denieddatabase1database1
Introduzca el siguiente comando largo en una sola línea:echo
[root@serverb ~]# su - database1
[database1@serverb ~]$ cat /home/techdocs/techdoc1.txt
cat: /home/techdocs/techdoc1.txt: Permission denied
[database1@serverb ~]$ ls -l /home/techdocs/techdoc1.txt
ls: cannot access '/home/techdocs/techdoc1.txt': Permission denied
[database1@serverb ~]$ exit
logout
	[root@serverb ~]#
10.	Modifique el archivo para ajustar la máscara predeterminada para los shells de inicio de sesión. Los usuarios normales deben tener una configuración de umask que permita al usuario y al grupo crear, escribir y ejecutar archivos y directorios, e impedir que otros usuarios vean, modifiquen o ejecuten nuevos archivos y directorios./etc/login.defs
Determine la máscara del usuario. Cambie al shell de inicio de sesión. Cuando termine, salga de la cáscara.studentstudent
[root@serverb ~]# su - student
[student@serverb ~]$ umask
0022
[student@serverb ~]$ exit
logout
	[root@serverb ~]#
Edite el archivo y establezca una máscara de archivo . El archivo ya contiene una definición de umask. Busque el archivo y actualícelo con el valor adecuado./etc/login.defs007/etc/login.defs
[root@serverb ~]# cat /etc/login.defs
...output omitted...
UMASK           007
	...output omitted...
Como usuario, verifique que la máscara de usuario global cambie a .student007
[root@serverb ~]# exit
logout
[student@serverb ~]$ exit
logout
Connection to serverb closed.
[student@workstation ~]$ ssh student@serverb
...output omitted...
[student@serverb ~]$ umask
	0007
Regrese al sistema como usuario.workstationstudent
[student@serverb ~]$ exit
logout
Connection to serverb closed.
	[student@workstation ~]$
Evaluación
Como usuario de la máquina, utilice el comando para calificar el trabajo. Corrija los errores notificados y vuelva a ejecutar el comando hasta que se realice correctamente.studentworkstationlab
[student@workstation ~]$ lab grade perms-review
Terminar
En la máquina, cambie al directorio principal del usuario y utilice el comando para completar este ejercicio. Este paso es importante para garantizar que los recursos de ejercicios anteriores no afecten los próximos ejercicios.workstationstudentlab
[student@workstation ~]$ lab finish perms-review
Resumen
●	Los permisos de propiedad de archivos tienen tres categorías. Un archivo es propiedad de un usuario, un solo grupo y otros usuarios. Se aplica el permiso más específico. Los permisos de usuario anulan los permisos de grupo y los permisos de grupo anulan otros permisos.
●	La opción de comando expande la lista de archivos para incluir tanto los permisos como la propiedad del archivo.ls-l
●	El comando cambia los permisos de archivo desde la línea de comandos.chmod
●	El comando puede usar uno de dos métodos para representar permisos: simbólico u octal.chmod
●	El comando cambia la propiedad del archivo. La opción command cambia recursivamente la propiedad de un árbol de directorios.chownchown-R
●	El comando sin argumentos muestra el valor umask actual del shell. Cada proceso en el sistema tiene una máscara de usuario.umask
●	Los valores predeterminados de umask para Bash se definen en el archivo y pueden verse afectados por la configuración de los archivos and, los archivos de , o los archivos de inicialización del shell de su cuenta./etc/login.defs/etc/profile/etc/bashrc/etc/profile.d
●	Los permisos , y especiales proporcionan funciones adicionales relacionadas con el acceso a los archivos.suidsgidsticky
Capítulo 8. Supervise y administre procesos de Linux
Estados de proceso y ciclo de vida
Cuestionario: Estados de proceso y ciclo de vida
Trabajos de control
Ejercicio guiado: Trabajos de control
Eliminar procesos
Ejercicio guiado: Matar procesos
Supervisar la actividad del proceso
Ejercicio guiado: Supervisar la actividad del proceso
Laboratorio: Supervisión y gestión de procesos de Linux
Resumen
Abstracto
Gol	Evalúe y controle los procesos que se ejecutan en un sistema Red Hat Enterprise Linux.
Objetivos	●	
Determine el estado, el uso de recursos y la propiedad de los programas en ejecución en un sistema, para controlarlos.
●	Utilice el control de trabajos de Bash para administrar varios procesos que se iniciaron desde la misma sesión de terminal.
●	Utilice comandos para eliminar y comunicarse con procesos, definir las características de un proceso de demonio y detener sesiones y procesos de usuario.
●	Defina el promedio de carga y determine los procesos del servidor que consumen muchos recursos.
Secciones	●	
Estados del proceso y ciclo de vida (y cuestionario)
●	Trabajos de control (y ejercicio guiado)
●	Procesos de eliminación (y ejercicio guiado)
●	Supervisar la actividad del proceso (y el ejercicio guiado)
Laboratorio	●	
Supervise y administre procesos de Linux
Estados de proceso y ciclo de vida
Objetivos
●	Determine el estado, el uso de recursos y la propiedad de los programas en ejecución en un sistema, para controlarlos.
Definición de un proceso
Un proceso es una instancia en ejecución de un programa ejecutable iniciado. Desde el momento en que se crea un proceso, consta de los siguientes elementos:
●	Un espacio de direcciones de memoria asignada
●	Propiedades de seguridad, incluidas las credenciales de propiedad y los privilegios
●	Uno o varios subprocesos de ejecución de código de programa
●	Un estado de proceso
El medio ambiente de un proceso es una lista de información que incluye los siguientes elementos:
●	Variables locales y globales
●	Un contexto de programación actual
●	Recursos del sistema asignados, como descriptores de archivos y puertos de red
Un padre El proceso duplica su propio espacio de direcciones, que se conoce como proceso tenedor, para crear un niño estructura del proceso. A cada nuevo proceso se le asigna un ID de proceso (PID) con fines de seguimiento y seguridad. El PID y el ID de proceso del padre (PPID) son elementos del nuevo entorno de proceso. Cualquier proceso puede crear un niño proceso. Todos los procesos son descendientes del primer proceso del sistema, , en un sistema Red Hat.systemd
 
Figura 8.1: Ciclo de vida del proceso
A través de la tenedor rutina, un proceso secundario hereda identidades de seguridad, descriptores de archivos anteriores y actuales, privilegios de puertos y recursos, variables de entorno y código de programa. Un proceso secundario puede ejecutar su propio código de programa.
Normalmente, un proceso primario Duerme cuando se ejecuta el proceso secundario y establece un esperar solicitud para que se señale cuando el niño complete. Una vez que el proceso secundario se cierra, cierra o descarta sus recursos y entorno, y deja un zombi resource, que es una entrada en la tabla de procesos. El elemento primario, que se indica a despertar Cuando el elemento secundario sale, limpia la tabla de procesos de la entrada del elemento secundario y libera el último recurso del proceso secundario. El proceso principal continúa con su propia ejecución de código de programa.
Describir los estados del proceso
En un sistema operativo multitarea, cada CPU (o núcleo de CPU) puede estar trabajando en un proceso a la vez. A medida que se ejecuta un proceso, cambian sus requisitos inmediatos de tiempo de CPU y asignación de recursos. A los procesos se les asigna un estado, que cambia según lo dicten las circunstancias.
El siguiente diagrama y tabla describe los estados de proceso de Linux en detalle.
 
Figura 8.2: Estados de proceso de Linux
Tabla 8.1. Estados de proceso de Linux
Nombre	Bandera	Nombre y descripción del estado definido por el kernel
Corriente	R	TASK_RUNNING: El proceso se está ejecutando en una CPU o esperando a ejecutarse. El proceso puede estar ejecutando rutinas de usuario o rutinas de kernel (llamadas al sistema), o estar en cola y listo cuando está en el Corriente (o bien Ejecutable).
Durmiente	S	TASK_INTERRUPTIBLE: El proceso está esperando alguna condición: una solicitud de hardware, acceso a recursos del sistema o una señal. Cuando un evento o señal satisface la condición, el proceso vuelve a Corriente.
	D	TASK_UNINTERRUPTIBLE: Este proceso también está durmiendo, pero a diferencia del estado, no responde a las señales. Solo se usa cuando la interrupción del proceso puede provocar un estado de dispositivo impredecible.S
	K	TASK_KILLABLE: Igual que el estado ininterrumpible, pero modificado para permitir que una tarea en espera responda a la señal para matarla (salir por completo). Las utilidades a menudo muestran DMatable procesos como el estado.D
	I	TASK_REPORT_IDLE: Un subconjunto de estado . El kernel no cuenta estos procesos al calcular el promedio de carga. Se utiliza para subprocesos del kernel. Se establecen las banderas TASK_UNINTERRUPTIBLE y TASK_NOLOAD. Es similar a TASK_KILLABLE y también es un subconjunto de state . Acepta señales fatales.DD
Detenido	T	TASK_STOPPED: El proceso se detiene (suspende), generalmente al ser señalado por un usuario u otro proceso. El proceso puede continuar (reanudarse) con otra señal para volver a funcionar.
	T	TASK_TRACED: Un proceso que se está depurando también se detiene temporalmente y comparte la marca de estado.T
Zombi	Z	EXIT_ZOMBIE: Un proceso secundario envía señales a su padre cuando sale. Se liberan todos los recursos excepto la identidad del proceso (PID).
	X	EXIT_DEAD: Cuando el padre limpia (cosecha) la estructura del proceso secundario restante, el proceso ahora se libera por completo. Este estado no se puede observar en las utilidades de listado de procesos.

Importancia de los estados de proceso
Al solucionar problemas de un sistema, es importante comprender cómo se comunica el kernel con los procesos y cómo los procesos se comunican entre sí. El sistema asigna un estado a cada nuevo proceso. La columna del comando o la columna del comando muestra el estado de cada proceso. En un solo sistema de CPU, solo se puede ejecutar un proceso a la vez. Es posible ver varios procesos con un estado. Sin embargo, no todos los procesos se ejecutan consecutivamente; Algunos de ellos están en StopSTATpsRespera estado.
[user@host ~]$ top
PID USER  PR  NI    VIRT    RES    SHR S  %CPU  %MEM   TIME+    COMMAND
2259 root 20   0  270856  40316   8332 S   0.3   0.7   0:00.25  sssd_kcm
   1 root 20   0  171820  16140  10356 S   0.0   0.3   0:01.62  systemd
   2 root 20   0       0      0      0 S   0.0   0.0   0:00.00  kthreadd
...output omitted...
[user@host ~]$ ps aux
USER       PID %CPU %MEM    VSZ   RSS TTY      STAT START   TIME COMMAND
...output omitted...
root         2  0.0  0.0      0     0 ?        S    11:57   0:00 [kthreadd]
student   3448  0.0  0.2 266904  3836 pts/0    R+   18:07   0:00 ps aux
...output omitted...
Utilice señales para suspender, detener, reanudar, finalizar o interrumpir procesos. Los procesos pueden capturar señales del kernel, otros procesos y otros usuarios en el mismo sistema. Las señales se analizan más adelante en este capítulo.
Procesos de listado
El comando se utiliza para enumerar información detallada de los procesos actuales.ps
●	Identificación de usuario (UID), que determina los privilegios del proceso
●	Identificación única de procesos (PID)
●	Cantidad de CPU utilizada y tiempo real transcurrido
●	Cantidad de memoria asignada
●	La ubicación del proceso, que se conoce como terminal de controlstdout
●	El estado actual del proceso
Importante
The Linux version of the command supports the following option formats:ps
●	UNIX (POSIX) options, which can be grouped and must be preceded by a dash
●	BSD options, which can be grouped and must not be used with a dash
●	GNU long options, which are preceded by two dashes
For example, the command is not the same as the command.ps -auxps aux
The common command option displays all processes including processes without a controlling terminal. A long listing ( options) provides more detail, and gives faster results by avoiding username lookups. The similar UNIX syntax uses the options to display all processes. In the following examples, scheduled kernel threads are displayed in brackets at the top of the list.psauxlax-ef
[user@host ~]$ ps aux
USER         PID %CPU %MEM    VSZ   RSS TTY      STAT START   TIME COMMAND
root           1  0.1  0.2 171820 16140 ?        Ss   16:47   0:01 /usr/lib/systemd/systemd ...
root           2  0.0  0.0      0     0 ?        S    16:47   0:00 [kthreadd]
root           3  0.0  0.0      0     0 ?        I<   16:47   0:00 [rcu_gp]
root           4  0.0  0.0      0     0 ?        I<   16:47   0:00 [rcu_par_gp]
root           6  0.0  0.0      0     0 ?        I<   16:47   0:00 [kworker/0:0H-events_highpri]
...output omitted...
[user@host ~]$ ps lax
F   UID     PID    PPID PRI  NI    VSZ   RSS WCHAN  STAT TTY  TIME COMMAND
4     0       1       0  20   0 171820 16140 -      Ss   ?    0:01 /usr/lib/systemd/systemd ...
1     0       2       0  20   0      0     0 -      S    ?    0:00 [kthreadd]
1     0       3       2   0 -20      0     0 -      I<   ?    0:00 [rcu_gp]
1     0       4       2   0 -20      0     0 -      I<   ?    0:00 [rcu_par_gp]
1     0       6       2   0 -20      0     0 -      I<   ?    0:00 [kworker/0:0H-events_highpri]
...output omitted...
[user@host ~]$ ps -ef
UID        PID  PPID  C STIME TTY          TIME CMD
root           1       0  0 16:47 ?        00:00:01 /usr/lib/systemd/systemd ...
root           2       0  0 16:47 ?        00:00:00 [kthreadd]
root           3       2  0 16:47 ?        00:00:00 [rcu_gp]
root           4       2  0 16:47 ?        00:00:00 [rcu_par_gp]
root           6       2  0 16:47 ?        00:00:00 [kworker/0:0H-events_highpri]
...output omitted...
De forma predeterminada, el comando sin opciones selecciona todos los procesos con el psID de usuario efectivo (EUID) y selecciona los procesos asociados con el terminal que ejecuta el comando. Los procesos zombis se enumeran con la etiqueta or.exitingdefunct
Puede usar la opción de comando para mostrar los procesos en un formato de árbol para que pueda ver las relaciones entre los procesos primarios y secundarios.ps--forest
La salida predeterminada del comando se ordena por número de ID de proceso. A primera vista, la salida puede parecer que usa el orden cronológico, pero el kernel reutiliza los ID de proceso, por lo que el orden es menos estructurado de lo que parece. Utilice el comando o las opciones para ordenar la salida. El orden de visualización coincide con el de la tabla de procesos del sistema, que reutiliza las filas de la tabla cuando los procesos mueren y se generan.psps-O--sort
Referencias
info libc signal (Manual de referencia de la biblioteca GNU C)
●	Sección 24: Manejo de señales
info libc processes (Manual de referencia de la biblioteca GNU C)
●	Sección 26: Procesos
ps(1) y (7) páginas de manualsignal
Trabajos de control
Objetivos
●	Utilice el control de trabajos de Bash para administrar varios procesos que se iniciaron desde la misma sesión de terminal.
Describir trabajos y sesiones
Con el Control de trabajos shell, una sola instancia de shell puede ejecutar y administrar varios comandos.
Un trabajo está asociado con cada tubería que se ingresa en un indicador de shell. Todos los procesos de esa canalización forman parte del trabajo y son miembros del mismo Grupo de procesos. Puede considerar que una canalización mínima es solo un comando que se escribe en el símbolo del sistema de shell para crear un trabajo con un solo miembro.
Solo un trabajo a la vez puede leer las señales de entrada y generadas por el teclado desde una ventana de terminal en particular. Los procesos que forman parte de ese trabajo son primer plano procesos de que Terminal de control.
Un fondo proceso de ese terminal de control es cualquier otro trabajo que esté asociado con ese terminal. Los procesos en segundo plano de un terminal no pueden leer la entrada ni recibir interrupciones generadas por el teclado desde el terminal, pero pueden escribir en el terminal. Es posible que un trabajo en segundo plano se detenga (suspenda) o que se esté ejecutando. Si un trabajo en segundo plano en ejecución intenta leer desde el terminal, se suspende automáticamente.
Cada terminal funciona por su cuenta sesióny puede tener un proceso en primer plano y cualquier número de procesos en segundo plano. Un trabajo que se ejecuta en su propia sesión pertenece a su terminal de control.
El comando muestra el nombre del dispositivo del terminal de control en la columna. Algunos procesos, como psTTYDemonios del sistema, se inician desde el sistema y no desde un terminal de control. Estos procesos no son miembros de un trabajo y no se pueden poner en primer plano. El comando muestra un signo de interrogación () en la columna de estos procesos.ps?TTY
Ejecutar trabajos en segundo plano
Cualquier comando o canalización se puede iniciar en segundo plano agregando un carácter & () al comando. El shell muestra un &BashNúmero de trabajo (exclusivo de la sesión) y el PID del nuevo proceso secundario. El shell no espera a que finalice el proceso secundario, sino que muestra el indicador del shell.
[user@host ~]$ sleep 10000 &
[1] 5947
[user@host ~]$
Cuando se envía una línea de comandos con una canalización () al fondo, se muestra el PID del último comando de la canalización. Todos los procesos de canalización son miembros de ese trabajo.|
[user@host ~]$ example_command | sort | mail -s "Sort output" &
[1] 5998
Utilice el comando para mostrar la lista de trabajos para la sesión del shell.jobs
[user@host ~]$ jobs
[1]+ Running    sleep 10000 &
[user@host ~]$
Utilice el comando para poner en primer plano un trabajo en segundo plano. Utilice el formato () para especificar el proceso en primer plano.fg%jobNumber
[user@host ~]$ fg %1
sleep 10000
En el ejemplo anterior, el comando se ejecuta en primer plano en el terminal de control. El propio shell está dormido y esperando que salga este proceso secundario.sleep
Para enviar un proceso en primer plano a segundo plano, presione el botón generado por el teclado suspender (Ctrl+z) en el terminal. El trabajo se coloca en segundo plano y se suspende.
[user@host ~]$ sleep 10000
^Z
[1]+  Stopped                 sleep 10000
[user@host ~]$
El comando muestra información sobre los trabajos. Utilice el comando para buscar información de proceso y sesión.ps jps j
●	El PID es el identificador de proceso único del proceso.
●	El PPID es el PID del Proceso principal de este proceso, el proceso que lo inició (bifurcó).
●	El PGID es el PID del Líder de grupo de proceso, normalmente el primer proceso de la canalización del trabajo.
●	El SID es el PID del Líder de sesión, que (para un trabajo) es normalmente el shell interactivo que se ejecuta en su terminal de control.
En el siguiente ejemplo, el comando está actualmente suspendido y el estado del proceso es .sleepT
[user@host ~]$ ps j
 PPID   PID  PGID   SID TTY      TPGID STAT   UID   TIME COMMAND
 2764  2768  2768  2768 pts/0     6377 Ss    1000   0:00 /bin/bash
 2768  5947  5947  2768 pts/0     6377 T     1000   0:00 sleep 10000
 2768  6377  6377  2768 pts/0     6377 R+    1000   0:00 ps j
Utilice el comando con el ID de trabajo para comenzar a ejecutar el proceso suspendido.bg
[user@host ~]$ bg %1
[1]+ sleep 10000 &
El shell advierte a un usuario que intenta salir de una ventana de terminal (sesión) con trabajos suspendidos. Si el usuario vuelve a intentar salir inmediatamente, se eliminan los trabajos suspendidos.
Nota
En los ejemplos anteriores, el signo indica que este trabajo es el valor predeterminado actual. Si se utiliza un comando job-control sin el argumento, la acción se realiza en el trabajo predeterminado. El signo indica el trabajo anterior que se convertirá en el trabajo predeterminado cuando finalice el trabajo predeterminado actual.+%jobNumber-
Referencias
Bash info (El manual de referencia de GNU Bash) https://www.gnu.org/software/bash/manual
●	Sección 7: Control de trabajo
bash(1), (1), (1) y (1) páginas de manualbuiltinspssleep
Ejercicio guiado: Trabajos de control
Utilice el control de trabajo para iniciar, suspender y mover varios procesos al fondo y al primer plano.
Resultados
●	Utilice el control de trabajos para suspender y reiniciar los procesos de usuario.
Como usuario de la máquina, use el comando para preparar el sistema para este ejercicio.studentworkstationlab
Este comando prepara el entorno y garantiza que todos los recursos necesarios estén disponibles.
[student@workstation ~]$ lab start processes-control
Instrucciones
En la máquina, abra dos ventanas de terminales una al lado de la otra. En esta sección, estos dos terminales se denominan workstationIzquierda y Derecha. En cada terminal, inicie sesión en la máquina como usuario.serverastudent
[student@workstation ~]$ ssh student@servera
1.	[student@servera ~]$
2.	En el shell de terminal izquierdo, cree el directorio. Cree un script de shell llamado en el directorio. Cambie los permisos del script para que sea ejecutable./home/student/bincontrol/home/student/bin
	Cree el directorio./home/student/bin
[student@servera ~]$ mkdir /home/student/bin
Cree un script llamado en el directorio. Para ingresar al modo interactivo de Vim, presione la tecla i. Utilice el comando para guardar el archivo y salir.control/home/student/bin:wq
[student@servera ~]$ vim /home/student/bin/control
#!/bin/bash
while true; do
  echo -n "$@ " >> ~/control_outfile
  sleep 1
	done
Nota
El control se ejecuta hasta que finaliza el proceso. El script agrega argumentos de línea de comandos al archivo una vez por segundo.~/control_outfile
	Haga que el archivo sea ejecutable.control
[student@servera ~]$ chmod +x /home/student/bin/control
3.	Ejecute el script. El script agrega continuamente la palabra "técnico" y un espacio al archivo a intervalos de un segundo.control~/control_outfile
[student@servera ~]$ control technical
En el shell de terminal derecho, verifique que el nuevo proceso esté escribiendo en el archivo./home/student/control_outfile
[student@servera ~]$ tail -f ~/control_outfile
technical technical technical technical
4.	...output omitted...
En el shell del terminal izquierdo, presione Ctrl+z para suspender el proceso en ejecución. El shell devuelve el identificador de trabajo entre corchetes. En el shell del terminal derecho, confirme que la salida del proceso está detenida.
^Z
[1]+  Stopped                 control technical
[student@servera ~]$
technical technical technical technical
5.	...no further output...
6.	En el shell del terminal izquierdo, vea la salida del comando. Recuerde que el letrero indica el trabajo predeterminado. Reinicie el trabajo en segundo plano. En el shell del terminal derecho, verifique que la salida del proceso esté activa nuevamente.jobs+
Ver la lista de trabajos.
[student@servera ~]$ jobs
	[1]+  Stopped                 control technical
Reinicie el trabajo en segundo plano.control
[student@servera ~]$ bg
	[1]+ control technical &
Compruebe que el trabajo se está ejecutando de nuevo.control
[student@servera ~]$ jobs
	[1]+  Running                 control technical &
En el shell de terminal derecho, confirme que el comando está produciendo salida.tail
...output omitted...
	technical technical technical technical technical technical technical technical
En el shell de terminal izquierdo, inicie dos procesos más para anexarlos al archivo. Utilice el comando especial &() para iniciar los procesos en segundo plano. Reemplácelo con y luego con . Reemplazar los argumentos ayuda a diferenciar entre los tres procesos.control~/output&technicaldocumentsdatabase
[student@servera ~]$ control documents &
[2] 6579
[student@servera ~]$ control database &
7.	[3] 6654
En el shell de terminal izquierdo, use el comando para ver los tres procesos en ejecución. En el shell de terminal derecho, verifique que los tres procesos se anexen al archivo.jobs
[student@servera ~]$ jobs
[1]   Running                 control technical &
[2]-  Running                 control documents &
[3]+  Running                 control database &
...output omitted...
technical documents database technical documents database technical documents database technical documents database
8.	...output omitted...
9.	Suspenda el proceso. Confirme que está suspendido. Finalice el proceso y compruebe que ha finalizado.control technicalcontrol documents
En la carcasa del terminal izquierdo, ponga en primer plano el proceso. Presione Ctrl+z para suspender el proceso. Compruebe que el proceso está suspendido.control technical
[student@servera ~]$ fg %1
control technical
^Z
[1]+  Stopped                 control technical
[student@servera ~]$ jobs
[1]+  Stopped                 control technical
[2]   Running                 control documents &
	[3]-  Running                 control database &
En el shell de terminal derecho, verifique que el proceso ya no envíe salidas.control technical
database documents  database documents  database
	...no further output...
En el shell del terminal izquierdo, ejecute el proceso en primer plano. Presione Ctrl+c para finalizar el proceso. Verifique que el proceso haya finalizado.control documents
[student@servera ~]$ fg %2
control documents
^C
[student@servera ~]$ jobs
[1]+  Stopped                 control technical
	[3]-  Running                 control database &
En el shell de terminal derecho, verifique que el proceso ya no envíe salidas.control documents
...output omitted...
database database database database database database database database
	...no further output...
En el shell del terminal izquierdo, vea los trabajos restantes. Los trabajos suspendidos tienen un estado de . Los otros trabajos en segundo plano están durmiendo y tienen un estado de .TS
[student@servera ~]$ ps jT
 PPID   PID  PGID   SID TTY      TPGID STAT   UID   TIME COMMAND
 27277 27278 27278 27278 pts/1    28702 Ss    1000   0:00 -bash
 27278 28234 28234 27278 pts/1    28702 T     1000   0:00 /bin/bash /home/student/bin/control technical
 27278 28251 28251 27278 pts/1    28702 S     1000   0:00 /bin/bash /home/student/bin/control database
 28234 28316 28234 27278 pts/1    28702 T     1000   0:00 sleep 1
 28251 28701 28251 27278 pts/1    28702 S     1000   0:00 sleep 1
10.	 27278 28702 28702 27278 pts/1    28702 R+    1000   0:00 ps jT
En el shell del terminal izquierdo, vea los trabajos actuales. Finalice el proceso y compruebe que ha finalizado.control database
[student@servera ~]$ jobs
[1]+  Stopped                 control technical
[3]-  Running                 control database &
Utilice el comando con el ID de trabajo para ejecutar el proceso en primer plano. Presione Ctrl+c para finalizar el proceso. Verifique que el proceso haya finalizado.fgcontrol database
[student@servera ~]$ fg %3
control database
^C
[student@servera ~]$ jobs
11.	[1]+  Stopped                 control technical
En el shell de terminal derecho, use el comando Ctrl+c para detener el comando. Elimine el archivo.tail~/control_outfile
...output omitted...
^C
12.	[student@servera ~]$ rm ~/control_outfile
Cierre el terminal adicional. Regrese al sistema como usuario.workstationstudent
[student@servera ~]$ exit
logout
Connection to servera closed.
13.	[student@workstation ~]$
Terminar
En la máquina, cambie al directorio principal del usuario y utilice el comando para completar este ejercicio. Este paso es importante para garantizar que los recursos de ejercicios anteriores no afecten los próximos ejercicios.workstationstudentlab
[student@workstation ~]$ lab finish processes-control
Eliminar procesos
Objetivos
●	Utilice comandos para eliminar y comunicarse con procesos, definir las características de un proceso de demonio y detener sesiones y procesos de usuario.
Control de procesos con señales
Un señal es una interrupción de software que se entrega a un proceso. Las señales informan de eventos a un programa en ejecución. Los eventos que generan una señal pueden ser un error, un evento externo (una solicitud de E/S o un temporizador caducado) o por el uso explícito de un comando de envío de señales o una secuencia de teclado.
En la tabla siguiente se enumeran las señales fundamentales que los administradores del sistema utilizan para la gestión de procesos rutinarios. Refiérase a las señales por su nombre corto (HUP) o propio (SIGHUP).
Tabla 8.2. Señales fundamentales de gestión de procesos
Señal	Nombre	Definición
1	HUP	Hangup : Informa de la finalización del proceso de control de un terminal. También solicita la reinicialización del proceso (recarga de configuración) sin terminación.
2	INT	Keyboard interrupt : Provoca la finalización del programa. Se puede bloquear o manipular. Se envía presionando la secuencia de teclas INTR (Interrupt) (Ctrl+c).
3	RENUNCIAR	Keyboard quit : Similar a SIGINT; Agrega un volcado de proceso al finalizar. Se envía presionando la secuencia de teclas QUIT (Ctrl+\).
9	MATAR	Kill, unblockable : Provoca la terminación abrupta del programa. No se puede bloquear, ignorar ni manejar; consistentemente fatal.
15 predeterminado	TÉRMINO	Terminate : Provoca la finalización del programa. A diferencia de SIGKILL, se puede bloquear, ignorar o manejar. La forma "limpia" de pedirle a un programa que termine; Permite que el programa complete operaciones esenciales y se autolimpie antes de la terminación.
18	CONT	Continue : Se envía a un proceso para reanudar si se detiene. No se puede bloquear. Incluso si se maneja, siempre reanuda el proceso.
19	PARAR	Stop, unblockable : Suspende el proceso. No se puede bloquear ni manipular.
20	TSTP	Keyboard stop : A diferencia de SIGSTOP, se puede bloquear, ignorar o manejar. Se envía presionando la secuencia de teclas de suspensión (Ctrl+z).

Nota
Los números de señal varían entre las plataformas de hardware de Linux, pero los nombres y significados de las señales son estándar. Se recomienda utilizar nombres de señal en lugar de números al señalizar. Los números que se analizan en esta sección son para sistemas de arquitectura x86_64.
Cada señal tiene un Acción predeterminada, que suele ser una de las siguientes acciones:
●	Término : Terminar un programa (salir) inmediatamente.
●	Núcleo : Guarde la imagen de memoria de un programa (volcado de núcleo) y luego finalice.
●	Detener : Detenga un programa en ejecución (suspender) y espere a continuar (reanudar).
Los programas reaccionan a las señales de eventos esperadas mediante la implementación de rutinas de controlador para ignorar, reemplazar o extender la acción predeterminada de una señal.
Enviar señales por solicitud explícita
Puede señalar el proceso actual en primer plano presionando una secuencia de control de teclado para suspender (Ctrl+z), matar (Ctrl+c) o volcar el núcleo (Ctrl+\) el proceso. Sin embargo, puede usar comandos de envío de señales para enviar señales a procesos en segundo plano en una sesión diferente.
Puede especificar señales por nombre (por ejemplo, con las opciones or) o por número (con la opción relacionada). Los usuarios pueden eliminar sus procesos, pero se requiere privilegio de root para eliminar procesos que poseen otros usuarios.-HUP-SIGHUP-1
El comando utiliza un número PID para enviar una señal a un proceso. A pesar de su nombre, puede usar el comando para enviar cualquier señal, no solo aquellas señales para terminar programas. Puede usar la opción de comando para enumerar los nombres y números de todas las señales disponibles.killkillkill-l
[user@host ~]$ kill -l
 1) SIGHUP      2) SIGINT      3) SIGQUIT     4) SIGILL      5) SIGTRAP
 6) SIGABRT     7) SIGBUS      8) SIGFPE      9) SIGKILL    10) SIGUSR1
11) SIGSEGV    12) SIGUSR2    13) SIGPIPE    14) SIGALRM    15) SIGTERM
16) SIGSTKFLT  17) SIGCHLD    18) SIGCONT    19) SIGSTOP    20) SIGTSTP
...output omitted...
[user@host ~]$ ps aux | grep job
5194 0.0 0.1 222448 2980 pts/1 S  16:39 0:00 /bin/bash /home/user/bin/control job1
5199 0.0 0.1 222448 3132 pts/1 S  16:39 0:00 /bin/bash /home/user/bin/control job2
5205 0.0 0.1 222448 3124 pts/1 S  16:39 0:00 /bin/bash /home/user/bin/control job3
5430 0.0 0.0 221860 1096 pts/1 S+ 16:41 0:00 grep --color=auto job
[user@host ~]$ kill 5194
[user@host ~]$ ps aux | grep job
user   5199  0.0  0.1 222448  3132 pts/1    S    16:39   0:00 /bin/bash /home/user/bin/control job2
user   5205  0.0  0.1 222448  3124 pts/1    S    16:39   0:00 /bin/bash /home/user/bin/control job3
user   5783  0.0  0.0 221860   964 pts/1    S+   16:43   0:00 grep --color=auto job
[1]   Terminated              control job1
[user@host ~]$ kill -9 5199
[user@host ~]$ ps aux | grep job
user   5205  0.0  0.1 222448  3124 pts/1    S    16:39   0:00 /bin/bash /home/user/bin/control job3
user   5930  0.0  0.0 221860  1048 pts/1    S+   16:44   0:00 grep --color=auto job
[2]-  Killed                  control job2
[user@host ~]$ kill -SIGTERM 5205
user   5986  0.0  0.0 221860  1048 pts/1  S+  16:45  0:00 grep --color=auto job
[3]+  Terminated              control job3
Controle procesos específicos
Utilice el comando para señalar uno o varios procesos que coincidan con los criterios de selección. Los criterios de selección pueden ser un nombre de comando, un proceso que posee un usuario específico o todos los procesos de todo el sistema.pkill
Los procesos y las sesiones pueden señalarse individual o colectivamente. Para finalizar todos los procesos de un usuario, utilice el comando.pkill
Debido a que el proceso inicial en una sesión de inicio de sesión (Líder de sesión) está diseñado para manejar solicitudes de terminación de sesión e ignorar señales de teclado no deseadas, matar todos los procesos de un usuario y shells de inicio de sesión requiere la señal SIGKILL. De forma predeterminada, el comando envía la señal SIGTERM a cada proceso en lugar de enumerarlos en .pkillstdout
Primero, use el comando para identificar los números PID para matar. Este comando funciona de manera similar al comando, incluyendo la mayoría de las mismas opciones, excepto que el comando enumera los procesos en lugar de eliminarlos.pgreppkillpgrep
Utilice el comando con la opción para enumerar los nombres e identificadores de proceso. Utilice cualquiera de los comandos con la opción de especificar el ID del usuario propietario de los procesos.pgrep-l-u
[root@host ~]# pgrep -l -u bob
6964 bash
6998 sleep
6999 sleep
7000 sleep
[root@host ~]# pkill -SIGKILL -u bob
[root@host ~]# pgrep -l -u bob
Cuando los procesos que requieren atención están en la misma sesión de inicio de sesión, es posible que no sea necesario eliminar todos los procesos de un usuario. Utilice el comando para determinar el terminal de control para la sesión y, a continuación, elimine solo los procesos que hacen referencia al mismo ID de terminal.w
A menos que se especifique, el líder de la sesión (aquí, el shell de inicio de sesión) maneja correctamente y sobrevive a la solicitud de terminación, pero finaliza todos los demás procesos de sesión.SIGKILLBash
Utilice la opción para hacer coincidir los procesos con un ID de terminal específico.-t
[root@host ~]# pgrep -l -u bob
7391 bash
7426 sleep
7427 sleep
7428 sleep
[root@host ~]# w -u bob
USER     TTY      FROM             LOGIN@   IDLE   JCPU   PCPU WHAT
bob      tty3                      18:37    5:04   0.03s  0.03s -bash
[root@host ~]# pkill -t tty3
[root@host ~]# pgrep -l -u bob
7391 bash
[root@host ~]# pkill -SIGKILL -t tty3
[root@host ~]# pgrep -l -u bob
[root@host ~]#
Importante
Los administradores suelen usar SIGKILL.
Siempre es fatal, porque la señal SIGKILL no se puede manejar o ignorar. Sin embargo, fuerza la terminación sin permitir que el proceso eliminado ejecute rutinas de autolimpieza. Red Hat recomienda enviar primero SIGTERM y luego probar SIGINT; y solo si ambos fallan, intentándolo de nuevo con SIGKILL.
Puede aplicar la misma terminación selectiva del proceso con relaciones de proceso padre y secundario. Utilice el comando para ver un árbol de procesos para el sistema o un solo usuario. Use el PID del proceso primario para eliminar todos los elementos secundarios que creó. El shell de inicio de sesión principal sobrevive esta vez, porque la señal se dirige solo a sus procesos secundarios.pstreeBash
[root@host ~]# pstree -p bob
bash(8391)─┬─sleep(8425)
           ├─sleep(8426)
           └─sleep(8427)
[root@host ~]# pkill -P 8391
[root@host ~]# pgrep -l -u bob
bash(8391)
[root@host ~]# pkill -SIGKILL -P 8391
[root@host ~]# pgrep -l -u bob
bash(8391)
Procesos múltiples de señales
El comando puede señalar varios procesos, según su nombre de comando.killall
[user@host ~]$ ps aux | grep job
5194  0.0  0.1 222448  2980 pts/1    S    16:39   0:00 /bin/bash /home/user/bin/control job1
5199  0.0  0.1 222448  3132 pts/1    S    16:39   0:00 /bin/bash /home/user/bin/control job2
5205  0.0  0.1 222448  3124 pts/1    S    16:39   0:00 /bin/bash /home/user/bin/control job3
5430  0.0  0.0 221860  1096 pts/1    S+   16:41   0:00 grep --color=auto job
[user@host ~]$ killall control
[1]   Terminated              control job1
[2]-  Terminated              control job2
[3]+  Terminated              control job3
[user@host ~]$
Terminar trabajos en segundo plano
Para finalizar trabajos en segundo plano, utilice el comando y especifique el número de trabajo.kill
Utilice el comando para buscar el número de trabajo del proceso que se va a finalizar.jobs
[user@host ~]$ jobs
[1]-  Running                 sleep 500 &
[2]+  Running                 sleep 1000 &
[user@host ~]$
Finalice un trabajo específico mediante el comando. Prefije el número de trabajo con un signo de porcentaje (%).kill
[user@host ~]$ kill -SIGTERM %1
[user@host ~]$ jobs
[2]+  Running                 sleep 1000 &
Cerrar la sesión administrativa de los usuarios
Es posible que deba cerrar la sesión de otros usuarios por varias razones. Algunos escenarios posibles: el usuario cometió una violación de seguridad; el usuario podría haber usado recursos en exceso; el usuario tiene un sistema que no responde; o el usuario tiene acceso indebido a los materiales. En estos casos, debe finalizar su sesión mediante señales administrativamente.
Primero, para cerrar la sesión de un usuario, identifique la sesión de inicio de sesión que se va a finalizar. Utilice el comando para enumerar los inicios de sesión de los usuarios y los procesos que se están ejecutando actualmente. Tenga en cuenta las columnas y para determinar las sesiones de cierre.wTTYFROM
Todas las sesiones de inicio de sesión de usuario están asociadas a un dispositivo terminal (TTY). Si el nombre del dispositivo es , entonces es un pts/Npseudo-terminal que está asociado con una ventana gráfica de terminal o una sesión de inicio de sesión remota. Si es , entonces el usuario está en una consola del sistema, una consola alternativa u otro dispositivo terminal conectado directamente.ttyN
[user@host ~]$ w -f
 12:43:06 up 27 min,  5 users,  load average: 0.03, 0.17, 0.66
USER     TTY      FROM             LOGIN@   IDLE   JCPU   PCPU WHAT
root     tty2                      12:26   14:58   0.04s  0.04s -bash
bob      tty3                      12:28   14:42   0.02s  0.02s -bash
user     pts/1    desktop.example.com 12:41    2.00s  0.03s  0.03s w
[user@host ~]$
Descubra cuánto tiempo ha estado un usuario en el sistema viendo el tiempo de inicio de sesión de la sesión. Los recursos de CPU que consumen los trabajos actuales, incluidas las tareas en segundo plano y los procesos secundarios, se encuentran en la columna de cada sesión. El consumo actual de CPU del proceso en primer plano se encuentra en la columna.JCPUPCPU
Referencias
kill(1), (1), (1), (1), (1), (1), (7) y (1) páginas de manualkillallpgreppkillpstreesignalw
Para obtener más información, consulte Manejo de señales en https://www.gnu.org/software/libc/manual/pdf/libc.pdf#Signal%20Handling
Para obtener más información, consulte Procesos en https://www.gnu.org/software/libc/manual/pdf/libc.pdf#Processes
Ejercicio guiado: Matar procesos
Utilice señales para administrar y detener procesos.
Resultados
●	Inicie y detenga varios procesos de shell.
Como usuario de la máquina, use el comando para preparar el sistema para este ejercicio.studentworkstationlab
Este comando prepara el entorno y garantiza que todos los recursos necesarios estén disponibles.
[student@workstation ~]$ lab start processes-kill
Instrucciones
En la máquina, abra dos ventanas de terminales una al lado de la otra. En esta sección, estos terminales se denominan workstationIzquierda y Derecha. En cada terminal, utilice el comando para iniciar sesión en la máquina como usuario.sshserverastudent
[student@workstation ~]$ ssh student@servera
1.	[student@servera ~]$
2.	En el shell de terminal izquierdo, cree el directorio. Cree el script de shell en el nuevo directorio. Cambie los permisos del script para que sea ejecutable./home/student/bininstance
	Cree el directorio./home/student/bin
[student@servera ~]$ mkdir /home/student/bin
Cree el archivo de script en el directorio. Presione la tecla i para ingresar al modo interactivo de Vim. El archivo debe tener el siguiente contenido como se muestra. Utilice el comando para guardar el archivo.instance/home/student/bin:wq
[student@servera ~]$ cd /home/student/bin
[student@servera bin]$ vim /home/student/bin/instance
#!/bin/bash
while true; do
  echo -n "$@ " >> ~/instance_outfile
  sleep 5
	done
Nota
El script se ejecuta hasta que finaliza el proceso. Anexa argumentos de línea de comandos al archivo una vez cada 5 segundos.instance~/instance_outfile
	Haga que el archivo de script sea ejecutable.instance
[student@servera bin]$ chmod +x /home/student/bin/instance
En el shell de terminal izquierdo, cambie al directorio. Inicie tres procesos con el archivo de script, pasando los argumentos , y . Inicie los procesos en segundo plano./home/student/bin/instancenetworkinterfaceconnection
[student@servera bin]$ instance network &
[1] 3460
[student@servera bin]$ instance interface &
[2] 3482
[student@servera bin]$ instance connection &
3.	[3] 3516
En el shell de terminal derecho, compruebe que los tres procesos anexan contenido al archivo./ï»¿home/student/instance_outfile
[student@servera ~]$ tail -f ~/instance_outfile
network interface network connection interface network connection interface network
4.	...output omitted...
En el shell de terminal izquierdo, enumere los trabajos existentes.
[student@servera bin]$ jobs
[1]   Running                 instance network &
[2]-  Running                 instance interface &
5.	[3]+  Running                 instance connection &
6.	Utilice señales para suspender el proceso. Verifique que el proceso esté establecido en . Compruebe que el proceso ya no anexa contenido al archivo.instance networkinstance networkStoppednetwork~/instance_output
Detenga el proceso. Compruebe que el proceso está detenido.instance network
[student@servera bin]$ kill -SIGSTOP %1
[1]+  Stopped                 instance network
[student@servera bin]$ jobs
[1]+  Stopped                 instance network
[2]   Running                 instance interface &
	[3]-  Running                 instance connection &
Nota
Este ejercicio guiado utiliza números de trabajo (%1, %2, etc.) para enviar señales, lo cual es apropiado en este contexto porque los procesos se inician en la misma sesión de shell y las funciones de control de trabajo de Bash están disponibles. Si lo desea, también puede identificar el ID de proceso principal (PPID) y enviar señales directamente al shell principal o a los ID de proceso individuales (PID). Este enfoque es especialmente útil cuando se crean scripts o se trabaja en varias sesiones.ps aj
En el shell de terminal derecho, vea la salida del comando. Compruebe que la palabra ya no se anexa al archivo.tailnetwork~/instance_outfile
...output omitted...
	interface connection interface connection interface connection interface
7.	En el shell del terminal izquierdo, finalice el proceso. Verifique que el proceso haya desaparecido. Compruebe que la salida del proceso ya no se anexa al archivo.instance interfaceinstance interfaceinstance interface~/instance_outfile
Finalice el proceso. Verifique que el proceso haya finalizado.instance interface
[student@servera bin]$ kill -SIGTERM %2
[student@servera bin]$ jobs
[1]+  Stopped                 instance network
[2]   Terminated              instance interface
	[3]-  Running                 instance connection &
En el shell de terminal derecho, vea la salida del comando. Compruebe que la palabra ya no se anexa al archivo.tailinterface~/instance_outfile
...output omitted...
	connection connection connection connection connection connection connection connection
8.	En el shell del terminal izquierdo, reanude el proceso. Verifique que el proceso esté establecido en . Compruebe que la salida del proceso se anexa al archivo.instance networkinstance networkRunninginstance network~/instance_outfile
Reanude el proceso. Compruebe que el proceso está en el estado.instance networkRunning
[student@servera bin]$ kill -SIGCONT %1
[student@servera bin]$ jobs
[1]+  Running                 instance network &
	[3]-  Running                 instance connection &
En el shell de terminal derecho, vea la salida del comando. Compruebe que la palabra se anexa al archivo.tailnetwork~/instance_outfile
...output omitted...
	network connection network connection network connection network connection network connection
9.	En el shell del terminal izquierdo, finalice los dos trabajos restantes. Compruebe que no quedan trabajos y que la salida está detenida.
Finalice el proceso. A continuación, finalice el proceso.instance networkinstance connection
[student@servera bin]$ kill -SIGTERM %1
[student@servera bin]$ kill -SIGTERM %3
[1]+ Terminated              instance network
[student@servera bin]$ jobs
	[3]+ Terminated              instance connection
10.	En el shell del terminal izquierdo, enumere los procesos en ejecución actuales en todos los shells de terminal abiertos. Finalice los procesos. Verifique que los procesos ya no se estén ejecutando.tail
Enumere todos los procesos en ejecución actuales. Refine la búsqueda para ver solo líneas.tail
[student@servera bin]$ ps -ef | grep tail
student   4581 31358  0 10:02 pts/0    00:00:00 tail -f /home/student/instance_outfile
	student   4869  2252  0 10:33 pts/1    00:00:00 grep --color=auto tail
Finalice el proceso. Compruebe que el proceso ya no se está ejecutando.tail
[student@servera bin]$ pkill -SIGTERM tail
[student@servera bin]$ ps -ef | grep tail
	student   4874  2252  0 10:36 pts/1    00:00:00 grep --color=auto tail
En el shell de terminal derecho, verifique que el comando ya no se esté ejecutando.tail
...output omitted...
network connection network connection network connection Terminated
	[student@servera ~]$
Cierre el terminal adicional. Regrese al sistema como usuario.workstationstudent
[student@servera bin]$ exit
logout
Connection to servera closed.
11.	[student@workstation ~]$
Terminar
En la máquina, cambie al directorio principal del usuario y utilice el comando para completar este ejercicio. Este paso es importante para garantizar que los recursos de ejercicios anteriores no afecten los próximos ejercicios.workstationstudentlab
[student@workstation ~]$ lab finish processes-kill
Supervisar la actividad del proceso
Objetivos
●	Defina el promedio de carga y determine los procesos del servidor que consumen muchos recursos.
Describir el promedio de carga
Carga media es una medida que proporciona el kernel de Linux, para representar la carga percibida del sistema durante un período de tiempo. Se puede utilizar como un indicador aproximado de cuántas solicitudes de recursos del sistema están pendientes, para determinar si la carga del sistema aumenta o disminuye.
El kernel recopila el número de carga actual cada cinco segundos en función del número de procesos en estados ejecutables e ininterrumpibles. Este número se acumula y se informa como una media móvil exponencial durante los últimos 1, 5 y 15 minutos.
Cálculo del promedio de carga
El promedio de carga representa la carga percibida del sistema durante un período de tiempo. Linux determina el promedio de carga informando cuántos procesos están listos para ejecutarse en una CPU y cuántos procesos están esperando que se complete la E/S de disco o red.
●	El número de carga es un promedio móvil del número de procesos que están listos para ejecutarse (en estado de proceso) o que están esperando que se complete la E/S (en estado de proceso).RD
●	Algunos sistemas UNIX solo consideran el uso de la CPU o la longitud de la cola de ejecución para indicar la carga del sistema. Linux también incluye el uso de disco o red, ya que el alto uso de estos recursos puede afectar significativamente el rendimiento del sistema como carga de CPU. Para promedios de carga altos con una actividad mínima de la CPU, examine la actividad del disco y la red.
El promedio de carga es una medida aproximada de cuántos procesos están esperando actualmente que se complete una solicitud antes de hacer cualquier otra cosa. La solicitud puede ser de tiempo de CPU para ejecutar el proceso. Como alternativa, la solicitud puede ser para que se complete una operación de E/S de disco crítica y el proceso no se puede ejecutar en la CPU hasta que se complete la solicitud, aunque la CPU esté inactiva. De cualquier manera, la carga del sistema se ve afectada y el sistema parece funcionar más lentamente porque los procesos están esperando para ejecutarse.
Interpretar valores promedio de carga
El comando es una forma de mostrar el promedio de carga actual. Imprime la hora actual, cuánto tiempo ha estado activa la máquina, cuántas sesiones de usuario se están ejecutando y el promedio de carga actual.uptime
[user@host ~]$ uptime
 15:29:03 up 14 min,  2 users,  load average: 2.92, 4.48, 5.20
Los tres valores del promedio de carga representan la carga de los últimos 1, 5 y 15 minutos. Indica si la carga del sistema parece estar aumentando o disminuyendo.
Si la principal contribución al promedio de carga proviene de procesos que están esperando la CPU, puede calcular el valor de carga aproximado por CPU para determinar si el sistema está experimentando una espera significativa.
Utilice el comando para determinar el número de CPU en un sistema.lscpu
En el siguiente ejemplo, el sistema es un sistema de un solo socket de doble núcleo con dos hyper threads por núcleo. Linux trata esta configuración de CPU como un sistema de cuatro CPU para fines de programación.
[user@host ~]$ lscpu
Architecture:        x86_64
CPU op-mode(s):      32-bit, 64-bit
Byte Order:          Little Endian
CPU(s):              4
On-line CPU(s) list: 0-3
Thread(s) per core:  2
Core(s) per socket:  2
Socket(s):           1
NUMA node(s):        1
...output omitted...
Imagine que la única contribución al número de carga proviene de procesos que necesitan tiempo de CPU. A continuación, se pueden dividir los valores medios de carga mostrados por el número de CPUs lógicas del sistema. Un valor inferior a 1 indica un uso adecuado de los recursos y tiempos de espera mínimos. Un valor superior a 1 indica saturación de recursos y algún retraso en el procesamiento.
# From lscpu, the system has four logical CPUs, so divide by 4:
#                               load average: 2.92, 4.48, 5.20
#           divide by number of logical CPUs:    4     4     4
#                                             ----  ----  ----
#                       per-CPU load average: 0.73  1.12  1.30
#
# This system's load average appears to be decreasing.
# With a load average of 2.92 on four CPUs, all CPUs were in use ~73% of the time.
# During the last 5 minutes, the system was overloaded by ~12%.
# During the last 15 minutes, the system was overloaded by ~30%.
Una cola de CPU inactiva tiene un número de carga de 0. Cada proceso que espera una CPU agrega un recuento de 1 al número de carga. Si un proceso se ejecuta en una CPU, el número de carga es 1 y el recurso (la CPU) está en uso, pero no hay solicitudes en espera. Si ese proceso se ejecuta durante un minuto completo, entonces su contribución al promedio de carga de un minuto es 1.
Sin embargo, los procesos que están ininterrumpidamente suspendidos para E/S críticas debido a un disco o recurso de red ocupado también se incluyen en el recuento y aumentan el promedio de carga. Aunque no indican el uso de la CPU, estos procesos se agregan al recuento de colas, ya que esperan recursos y no pueden ejecutarse en una CPU hasta que obtienen los recursos. Esta métrica todavía se considera como carga del sistema debido a las limitaciones de recursos que hacen que los procesos no se ejecuten.
Hasta la saturación de recursos, un promedio de carga permanece por debajo de 1, porque las tareas rara vez se encuentran esperando en la cola. El promedio de carga aumenta solo cuando la saturación de recursos hace que las solicitudes permanezcan en cola y la rutina de cálculo de carga las cuenta. Cuando el uso de recursos se acerca al 100%, cada solicitud adicional comienza a experimentar un tiempo de espera de servicio.
Monitoreo de procesos en tiempo real
El comando muestra una vista dinámica de los procesos del sistema y un encabezado de resumen seguido de una lista de procesos o subprocesos. A diferencia de la salida del comando estático, el comando se actualiza continuamente a un intervalo configurable y proporciona reordenación, ordenación y resaltado de columnas. Puede realizar cambios persistentes en la configuración. Las columnas de salida predeterminadas son las siguientes:toppstoptoptop
●	El ID de proceso ().PID
●	El nombre de usuario del propietario del proceso ().USER
●	La memoria virtual () es toda la memoria que usa el proceso, incluido el conjunto residente, las bibliotecas compartidas y las páginas de memoria asignadas o intercambiadas (etiquetadas en el comando).VIRTVSZps
●	La memoria residente () es la memoria física que utiliza el proceso, incluidos los objetos compartidos residentes (etiquetados en el comando).RESRSSps
●	El estado de proceso () puede ser uno de los siguientes estados:S
○	D = Sueño ininterrumpido
○	R = Corriendo o ejecutable
○	S = Dormir
○	T = Detenido o rastreado
○	Z = Zombi
●	Tiempo de CPU () es el tiempo total de procesamiento desde que se inició el proceso. Se puede alternar para incluir un tiempo acumulado de todos los hijos anteriores.TIME
●	El nombre del comando de proceso ().COMMAND
Tabla 8.3. Pulsaciones de teclas fundamentales en el comando superior
Llave	Propósito
? o h	Ayuda para pulsaciones de teclas interactivas.
L, T, M	Alterna para carga, subprocesos y líneas de encabezado de memoria.
1	Alterna para CPU individuales o un resumen para todas las CPU en el encabezado.
s	Cambie la frecuencia de actualización (pantalla), en segundos decimales (como 0.5, 1, 5).
b	Alternar el resaltado inverso para procesos; El valor predeterminado es solo negrita.Running
Mayús+b	Permite el uso en negrita en la pantalla, en el encabezado y para Corriente Procesos.
Mayús+h	Alternar hilos; Mostrar resumen del proceso o subprocesos individuales.
u, Mayús+u	Filtra por cualquier nombre de usuario (efectivo, real).
Mayús+m	Ordene la lista de procesos por uso de memoria, en orden descendente.
Mayús+p	Ordene la lista de procesos por uso del procesador, en orden descendente.
k	Matar un proceso. Cuando se le solicite, escriba , y luego .PIDsignal
r	Renice un proceso. Cuando se le solicite, escriba , y luego .PIDnice_value
Mayús+w	Escriba (guarde) la configuración de pantalla actual para usarla en el próximo reinicio.top
q	Renunciar.
f	Administre las columnas habilitando o deshabilitando campos. También puede establecer el campo de ordenación para .top

Nota
Las pulsaciones de teclas s, k y r no están disponibles cuando el comando se inicia en modo seguro.top
Referencias
ps(1), (1), (1) y (1) páginas de manualtopuptimew
Ejercicio guiado: Supervisar la actividad del proceso
Utilice el comando para examinar los procesos en ejecución y controlarlos dinámicamente.top
Resultados
●	Gestiona los procesos en tiempo real.
Como usuario de la máquina, use el comando para preparar el sistema para este ejercicio.studentworkstationlab
Este comando prepara el entorno y garantiza que todos los recursos necesarios estén disponibles.
[student@workstation ~]$ lab start processes-monitor
Instrucciones
En la máquina, abra dos ventanas de terminales una al lado de la otra. En esta sección, estos terminales se denominan workstationIzquierda y Derecha. En cada terminal, inicie sesión en la máquina como usuario.serverastudent
[student@workstation ~]$ ssh student@servera
...output omitted...
1.	[student@servera ~]$
2.	En el shell de terminal izquierdo, cree el directorio. Cree un script de shell llamado en el nuevo directorio para generar una carga de CPU artificial. Haga que el archivo de script sea ejecutable./home/student/binmonitormonitor
	Cree el directorio./home/student/bin
[student@servera ~]$ mkdir /home/student/bin
Cree el archivo de script en el directorio con el contenido mostrado./home/student/bin
[student@servera ~]$ vim /home/student/bin/monitor
#!/bin/bash
while true; do
  var=1
  while [[ var -lt 60000 ]]; do
    var=$(($var+1))
  done
  sleep 1
	done
Nota
El script se ejecuta hasta que finaliza el proceso. Genera una carga de CPU artificial realizando sesenta mil cálculos de adición. Después de generar la carga de la CPU, duerme durante un segundo, restablece la variable y se repite.monitor
	Haga que el archivo sea ejecutable.monitor
[student@servera ~]$ chmod a+x /home/student/bin/monitor
En el shell de terminal derecho, ejecute el comando. Cambie el tamaño de la ventana para ver el contenido del comando.top
[student@servera ~]$ top
top - 12:13:03 up 11 days, 58 min,  3 users,  load average: 0.00, 0.00, 0.00
Tasks: 113 total,   2 running, 111 sleeping,   0 stopped,   0 zombie
%Cpu(s):  0.2 us,  0.0 sy,  0.0 ni, 99.8 id,  0.0 wa,  0.0 hi,  0.0 si,  0.0 st
MiB Mem :   1829.4 total,   1377.3 free,    193.9 used,    258.2 buff/cache
MiB Swap:   1024.0 total,   1024.0 free,      0.0 used.   1476.1 avail Mem

PID USER      PR  NI    VIRT    RES    SHR S  %CPU  %MEM     TIME+ COMMAND
5861 root      20   0       0      0      0 I   0.3   0.0   0:00.71 kworker/1:3-events
6068 student   20   0  273564   4300   3688 R   0.3   0.2   0:00.01 top
   1 root      20   0  178680  13424   8924 S   0.0   0.7   0:04.03 systemd
   2 root      20   0       0      0      0 S   0.0   0.0   0:00.03 kthreadd
   3 root       0 -20       0      0      0 I   0.0   0.0   0:00.00 rcu_gp
3.	...output omitted...
En el shell del terminal izquierdo, verifique el número de CPU lógicas en esta máquina virtual.
[student@servera ~]$ lscpu
Architecture:        x86_64
CPU op-mode(s):      32-bit, 64-bit
Byte Order:          Little Endian
CPU(s):              2
4.	...output omitted...
En el shell de terminal izquierdo, ejecute una sola instancia del archivo de script en segundo plano.monitor
[student@servera ~]$ monitor &
5.	[1] 6071
6.	En el shell de terminal derecho, supervise el comando. Use las pulsaciones de teclas simples l, t y m para alternar la carga, los subprocesos y las líneas de encabezado de memoria. Después de observar este comportamiento, asegúrese de que se muestren todos los encabezados.top
Anote el ID de proceso (PID) para el proceso. Vea el porcentaje de CPU para el proceso, que se espera que ronde entre el 15% y el 25%.monitor
[student@servera ~]$ top
PID USER      PR  NI    VIRT    RES    SHR S  %CPU  %MEM     TIME+ COMMAND
071 student   20   0  222448   2964   2716 S  18.7   0.2   0:27.35 monitor
7.	...output omitted...
Ver los promedios de carga. El valor medio de carga de un minuto es actualmente inferior a 1. El valor observado puede verse afectado por la contención de recursos de otra máquina virtual o del host virtual.
top - 12:23:45 up 11 days,  1:09,  3 users,  load average: 0.21, 0.14, 0.05
En el shell de terminal izquierdo, ejecute una segunda instancia del archivo de script en segundo plano.monitor
[student@servera ~]$ monitor &
8.	[2] 6498
En el shell del terminal derecho, anote el ID de proceso (PID) para el segundo proceso. Vea el porcentaje de CPU para el proceso, que también se espera que oscile entre el 15% y el 25%.monitor
[student@servera ~]$ top
 PID USER      PR  NI    VIRT    RES    SHR S  %CPU  %MEM     TIME+ COMMAND
6071 student   20   0  222448   2964   2716 S  19.0   0.2   1:36.53 monitor
6498 student   20   0  222448   2996   2748 R  15.7   0.2   0:16.34 monitor
9.	...output omitted...
Nuevamente, vea el promedio de carga de un minuto, que sigue siendo inferior a 1. Espere al menos un minuto para que el cálculo se ajuste a la nueva carga de trabajo.
top - 12:27:39 up 11 days,  1:13,  3 users,  load average: 0.36, 0.25, 0.11
En el shell de terminal izquierdo, ejecute una tercera instancia del archivo de script en segundo plano.monitor
[student@servera ~]$ monitor &
10.	[3] 6881
En el shell del terminal derecho, anote el ID de proceso (PID) para el tercer proceso. Vea el porcentaje de CPU para el proceso, que nuevamente se espera que oscile entre el 15% y el 25%.monitor
[student@servera ~]$ top
 PID USER      PR  NI    VIRT    RES    SHR S  %CPU  %MEM     TIME+ COMMAND
6881 student   20   0  222448   3032   2784 S  18.6   0.2   0:11.48 monitor
6498 student   20   0  222448   2996   2748 S  15.6   0.2   0:47.86 monitor
6071 student   20   0  222448   2964   2716 S  18.1   0.2   2:07.86 monitor
Para llevar el promedio de carga por encima de 1, debe iniciar más procesos. La configuración del aula tiene dos CPU, por lo que solo tres procesos no son suficientes para estresarla. Inicie tres procesos más en segundo plano. Vuelva a ver el promedio de carga de un minuto, que ahora se espera que esté por encima de 1. Espere al menos un minuto para que el cálculo se ajuste a la nueva carga de trabajo.monitormonitor
[student@servera ~]$ monitor &
[4] 10708
[student@servera ~]$ monitor &
[5] 11122
[student@servera ~]$ monitor &
11.	[6] 11338
top - 12:42:32 up 11 days,  1:28,  3 users,  load average: 1.23, 2.50, 1.54
12.	Cuando haya terminado de observar los valores promedio de carga, finalice cada uno de los procesos desde el comando.monitortop
En el shell del terminal derecho, presione k para observar el mensaje debajo de los encabezados y encima de las columnas.
...output omitted...
	PID to signal/kill [default pid = 11338]
El mensaje elige los procesos en la parte superior de la lista. Presione Enter para finalizar el proceso.monitor
...output omitted...
	Send pid 11338 signal [15/sigterm]
Pulse Intro de nuevo para confirmar la señal SIGTERM 15.
Compruebe que el proceso seleccionado ya no está presente en el comando. Si existe el PID, repita estos pasos para finalizar los procesos y sustituya la señal SIGKILL 9 cuando se le solicite.top
 6498 student   20   0  222448   2996   2748 R  22.9   0.2   5:31.47 monitor
 6881 student   20   0  222448   3032   2784 R  21.3   0.2   4:54.47 monitor
11122 student   20   0  222448   2984   2736 R  15.3   0.2   2:32.48 monitor
 6071 student   20   0  222448   2964   2716 S  15.0   0.2   6:50.90 monitor
	10708 student   20   0  222448   3032   2784 S  14.6   0.2   2:53.46 monitor
13.	Repita el paso anterior para cada proceso restante. Compruebe que no quede ningún proceso en el comando.monitormonitortop
14.	En el shell de terminal derecho, presione q para salir del comando. Cierre el terminal derecho.top
Regrese a la máquina como usuario.workstationstudent
[student@servera ~]$ exit
logout
Connection to servera closed.
15.	[student@workstation ~]$
Terminar
En la máquina, cambie al directorio principal del usuario y utilice el comando para completar este ejercicio. Este paso es importante para garantizar que los recursos de ejercicios anteriores no afecten los próximos ejercicios.workstationstudentlab
[student@workstation ~]$ lab finish processes-monitor
Laboratorio: Supervisión y gestión de procesos de Linux
Localice y administre los procesos que utilizan la mayor cantidad de recursos en un sistema.
Resultados
●	Gestione procesos como herramienta de gestión de procesos.top
Inicie sesión con la contraseña.workstationstudentstudent
En , ejecute el comando. El comando ejecuta un script de inicio para determinar si se puede acceder al host en la red.workstationlab start processes-reviewserverb
[student@workstation ~]$ lab start processes-review
Instrucciones
En , abra dos ventanas de terminal una al lado de la otra. En esta sección, estos terminales se denominan workstationIzquierda y Derecha. En cada ventana de terminal, inicie sesión como usuario.serverbstudent
Cree el script en el directorio. El script genera una carga de CPU artificial.process101/home/student/binprocess101
#!/bin/bash
while true; do
  var=1
  while [[ var -lt 50000 ]]; do
    var=$(($var+1))
  done
  sleep 1
1.	done
En , abra dos ventanas de terminal una al lado de la otra. En cada terminal, utilice el comando para iniciar sesión en la máquina como usuario.workstationsshserverbstudent
[student@workstation ~]$ ssh student@serverb
...output omitted...
	[student@serverb ~]$
	En el shell de terminal izquierdo, cree el directorio./home/student/bin
[student@serverb ~]$ mkdir /home/student/bin
En el shell del terminal izquierdo, cree el script. Presione la tecla i para ingresar al modo interactivo de Vim. Escriba para guardar el archivo.process101:wq
[student@serverb ~]$ vim /home/student/bin/process101
#!/bin/bash
while true; do
  var=1
  while [[ var -lt 50000 ]]; do
    var=$(($var+1))
  done
  sleep 1
	done
	Haga que el script sea ejecutable.process101
[student@serverb ~]$ chmod +x /home/student/bin/process101
2.	En el shell de terminal derecho, ejecute la utilidad.top
Dimensione la ventana para que sea lo más alta posible.
[student@serverb ~]$ top
top - 17:02:43 up 42 min,  2 users,  load average: 0.00, 0.00, 0.00
Tasks: 120 total,   1 running, 119 sleeping,   0 stopped,   0 zombie
%Cpu(s):  0.0 us,  0.0 sy,  0.0 ni,100.0 id,  0.0 wa,  0.0 hi,  0.0 si,  0.0 st
MiB Mem :   1774.8 total,   1420.7 free,    206.3 used,    147.8 buff/cache
MiB Swap:      0.0 total,      0.0 free,      0.0 used.   1417.3 avail Mem

 PID USER      PR  NI    VIRT    RES    SHR S  %CPU  %MEM     TIME+ COMMAND
   1 root      20   0  105972  17592  10292 S   0.0   1.0   0:01.30 systemd
   2 root      20   0       0      0      0 S   0.0   0.0   0:00.00 kthreadd
   3 root       0 -20       0      0      0 I   0.0   0.0   0:00.00 rcu_gp
   4 root       0 -20       0      0      0 I   0.0   0.0   0:00.00 rcu_par_gp
   6 root       0 -20       0      0      0 I   0.0   0.0   0:00.00 kworker/0:0H-event+
	...output omitted...
3.	En el shell del terminal izquierdo, verifique el número de CPU lógicas en la máquina virtual. Ejecute el script en segundo plano.process101
Verifique el número de CPU lógicas.
[student@serverb ~]$ grep "model name" /proc/cpuinfo | wc -l
	2
Cambie al directorio. Ejecute el script en segundo plano./home/student/binprocess101
[student@serverb ~]$ cd /home/student/bin
[student@serverb bin]$ process101 &
	[1] 1161
4.	En la carcasa del terminal derecho, observe la pantalla. Anote el ID de proceso (PID) y vea el porcentaje de CPU que usa el proceso. El porcentaje de CPU que usa el proceso debe rondar entre el 10% y el 15%. Alterne la visualización de la utilidad entre carga, subprocesos y memoria. Vuelva a la pantalla de uso de CPU de la utilidad.topprocess101toptop
Presione Mayús+m.
top - 17:11:24 up 51 min,  2 users,  load average: 0.16, 0.07, 0.02
Tasks: 118 total,   1 running, 117 sleeping,   0 stopped,   0 zombie
%Cpu(s):  7.8 us,  0.7 sy,  0.0 ni, 91.2 id,  0.0 wa,  0.2 hi,  0.2 si,  0.0 st
MiB Mem :   1774.8 total,   1419.5 free,    207.4 used,    147.9 buff/cache
MiB Swap:      0.0 total,      0.0 free,      0.0 used.   1416.2 avail Mem

 PID USER      PR  NI    VIRT    RES    SHR S  %CPU  %MEM     TIME+ COMMAND
 761 root      20   0  340412  41416  17888 S   0.0   2.3   0:00.44 firewalld
 780 root      20   0  474344  30704  13508 S   0.0   1.7   0:00.62 tuned
 736 polkitd   20   0 2577132  24592  18320 S   0.0   1.4   0:00.07 polkitd
 767 root      20   0  471864  18992  16416 S   0.0   1.0   0:00.15 NetworkManager
   1 root      20   0  105972  17592  10292 S   0.0   1.0   0:01.30 systemd
...output omitted...
1161 student   20   0  222652   3888   3432 S  12.3   0.2   0:54.81 process101
	...output omitted...
Nota
Cuando la utilidad cambia a topmemoria , el proceso ya no es el primer proceso. Puede presionar Mayús+p para volver al uso de la CPU.process101
Presione m para mostrar más detalles de memoria.
top - 17:16:14 up 56 min,  2 users,  load average: 0.20, 0.12, 0.04
Tasks: 118 total,   1 running, 117 sleeping,   0 stopped,   0 zombie
%Cpu(s):  7.5 us,  0.8 sy,  0.0 ni, 91.5 id,  0.0 wa,  0.2 hi,  0.0 si,  0.0 st
MiB Mem : 19.9/1774.8   [||||||||||                                           ]
MiB Swap:  0.0/0.0      [                                                     ]

 PID USER      PR  NI    VIRT    RES    SHR S  %CPU  %MEM     TIME+ COMMAND
 761 root      20   0  340412  41416  17888 S   0.0   2.3   0:00.44 firewalld
 780 root      20   0  474344  30704  13508 S   0.0   1.7   0:00.66 tuned
 736 polkitd   20   0 2577132  24592  18320 S   0.0   1.4   0:00.07 polkitd
 767 root      20   0  471864  18992  16416 S   0.0   1.0   0:00.15 NetworkManager
   1 root      20   0  105972  17592  10292 S   0.0   1.0   0:01.30 systemd
1068 student   20   0   21652  13144  10128 S   0.0   0.7   0:00.08 systemd
1114 root      20   0   19332  11928   9648 S   0.0   0.7   0:00.02 sshd
...output omitted...
1161 student   20   0  222652   3888   3432 S  11.0   0.2   1:35.17 process101
	...output omitted...
Presione t.
top - 17:21:43 up  1:01,  2 users,  load average: 0.23, 0.18, 0.09
Tasks: 121 total,   1 running, 120 sleeping,   0 stopped,   0 zombie
%Cpu(s):   7.5/1.0     8[|||||                                                ]
MiB Mem : 20.1/1774.8   [||||||||||||                                         ]
MiB Swap:  0.0/0.0      [                                                     ]

 PID USER      PR  NI    VIRT    RES    SHR S  %CPU  %MEM     TIME+ COMMAND
 761 root      20   0  340412  41416  17888 S   0.0   2.3   0:00.44 firewalld
 780 root      20   0  474344  30704  13508 S   0.0   1.7   0:00.70 tuned
 736 polkitd   20   0 2577132  24592  18320 S   0.0   1.4   0:00.07 polkitd
 767 root      20   0  471864  18992  16416 S   0.0   1.0   0:00.17 NetworkManager
   1 root      20   0  105972  17592  10292 S   0.0   1.0   0:01.31 systemd
1068 student   20   0   21652  13144  10128 S   0.0   0.7   0:00.08 systemd
1114 root      20   0   19332  11928   9648 S   0.0   0.7   0:00.02 sshd
 668 root      20   0   33656  11892   8728 S   0.0   0.7   0:00.10 systemd-udevd
1064 root      20   0   19328  11780   9504 S   0.0   0.6   0:00.03 sshd
...output omitted...
1155 student   20   0  225976   4400   3656 R   0.0   0.2   0:01.31 top
	...output omitted...
Presione Mayús+p para cambiar al uso de la CPU.
top - 17:23:33 up  1:03,  2 users,  load average: 0.17, 0.17, 0.09
Tasks: 121 total,   1 running, 120 sleeping,   0 stopped,   0 zombie
%Cpu(s):   7.3/0.8     8[||||||                                               ]
MiB Mem : 20.2/1774.8   [|||||||||||||                                        ]
MiB Swap:  0.0/0.0      [                                                     ]

 PID USER      PR  NI    VIRT    RES    SHR S  %CPU  %MEM     TIME+ COMMAND
1161 student   20   0  222652   3888   3432 S  15.6   0.2   2:09.61 process101
   1 root      20   0  105972  17592  10292 S   0.0   1.0   0:01.31 systemd
	...output omitted...
5.	Desactive el uso de negrita en la pantalla. Guarde esta configuración para reutilizarla cuando se reinicie. Confirme que los cambios se han guardado.top
Presione Shift + b para desactivar el uso de negrita.
top - 17:29:12 up  1:09,  2 users,  load average: 0.17, 0.15, 0.10
Tasks: 117 total,   2 running, 115 sleeping,   0 stopped,   0 zombie
%Cpu(s):   5.6/0.7     6[||||                                                 ]
MiB Mem : 20.4/1774.8   [||||||||||||||                                       ]
MiB Swap:  0.0/0.0      [                                                     ]

 PID USER      PR  NI    VIRT    RES    SHR S  %CPU  %MEM     TIME+ COMMAND
1161 student   20   0  222652   3888   3432 R  12.0   0.2   2:57.18 process101
   1 root      20   0  105972  17592  10292 S   0.0   1.0   0:01.31 systemd
	...output omitted...
Presione Mayús+w para guardar esta configuración. La configuración predeterminada se almacena en el archivo del directorio. En el shell de terminal izquierdo, confirme que el archivo existe.toprc/home/student/.config/procpstoprc
[student@serverb bin]$ ls -l /home/student/.config/procps/toprc
	-rw-rw-r--. 1 student student 966 Feb 18 19:45 /home/student/.config/procps/toprc
En el shell de terminal derecho, salga y luego reinícielo. Confirme que la nueva pantalla utiliza la configuración guardada.top
top - 17:51:48 up  1:31,  2 users,  load average: 0.09, 0.12, 0.09
Tasks: 119 total,   1 running, 118 sleeping,   0 stopped,   0 zombie
%Cpu(s):   5.0/0.5     5[|||                                                  ]
MiB Mem : 20.0/1774.8   [|||||||||||||                                        ]
MiB Swap:  0.0/0.0      [                                                     ]

    PID USER      PR  NI    VIRT    RES    SHR S  %CPU  %MEM     TIME+ COMMAND
   1161 student   20   0  222652   3888   3432 S  10.6   0.2   6:08.76 process101
      1 root      20   0  105972  17592  10292 S   0.0   1.0   0:01.33 systemd
	...output omitted...
6.	Copie el script en un nuevo archivo y aumente la carga artificial de la CPU a cien mil en el nuevo script. Inicie el proceso en segundo plano.process101process102process102
	En el shell del terminal izquierdo, copie en .process101process102
[student@serverb bin]$ cp process101 process102
Edite el script y aumente los cálculos de suma de cincuenta mil a cien mil. Ingrese al modo interactivo usando i. Escriba para guardar el archivo y salir.process102:wq
[student@serverb bin]$ vim process102
#!/bin/bash
while true; do
  var=1
    while [[ var -lt 100000 ]]; do
      var=$(($var+1))
  done
  sleep 1
	done
Inicie el proceso en segundo plano.process102
[student@serverb bin]$ process102 &
	[2] 4023
Verifique que ambos procesos se estén ejecutando en segundo plano.
[student@serverb bin]$ jobs
[1]-  Running                 process101 &
	[2]+  Running                 process102 &
7.	En el shell de terminal derecho, verifique que el proceso se esté ejecutando y use la mayor cantidad de recursos de CPU. La carga debe oscilar entre el 25% y el 35%.
En el shell de terminal derecho, verifique que el proceso se esté ejecutando. La carga debe oscilar entre el 25% y el 35%.
top - 18:04:54 up  1:44,  2 users,  load average: 0.37, 0.24, 0.13
Tasks: 120 total,   1 running, 119 sleeping,   0 stopped,   0 zombie
%Cpu(s): 18.1 us,  2.0 sy,  0.0 ni, 79.7 id,  0.0 wa,  0.2 hi,  0.0 si,  0.0 st
MiB Mem :   1774.8 total,   1374.3 free,    210.1 used,    190.4 buff/cache
MiB Swap:      0.0 total,      0.0 free,      0.0 used.   1410.7 avail Mem

 PID USER      PR  NI    VIRT    RES    SHR S  %CPU  %MEM     TIME+ COMMAND
4023 student   20   0  222652   3980   3524 S  22.3   0.2   0:32.94 process102
1161 student   20   0  222652   3888   3432 S  17.7   0.2   7:59.52 process101
   1 root      20   0  105972  17592  10292 S   0.0   1.0   0:01.33 systemd
	...output omitted...
Nota
Si no ve los procesos y en la parte superior de la lista de procesos, presione Mayús+p para asegurarse de que la utilidad ordene la salida por uso de CPU.process101process102top
8.	Observe que el promedio de carga está por debajo de 1. Copie el script en un nuevo script llamado . Aumente el recuento de adiciones a ochocientos mil. Comience en segundo plano. Confirme que el promedio de carga esté por encima de 1. El promedio de carga puede tardar unos minutos en cambiar.process101process103process103
En la carcasa del terminal derecho, verifique que el promedio de carga esté por debajo de 1.
top - 18:12:49 up  1:52,  2 users,  load average: 0.45, 0.38, 0.24
	...output omitted...
	En el shell del terminal izquierdo, copie en un nuevo script.process101process103
[student@serverb bin]$ cp process101 process103
En el shell de terminal izquierdo, edite el script. Aumente el recuento de adiciones a ochocientos mil. Ingrese al modo interactivo con la tecla i. Escriba para guardar el archivo y salir.process103:wq
[student@serverb bin]$ vim process103
#!/bin/bash
while true; do
  var=1
    while [[ var -lt 800000 ]]; do
      var=$(($var+1))
    done
    sleep 1
	done
Inicie el proceso en segundo plano. El uso de la CPU oscila entre el 60% y el 85%.process103
[student@serverb bin]$ process103 &
	[3] 5172
Compruebe que los tres trabajos se ejecutan en segundo plano.
[student@serverb bin]$ jobs
[1]   Running                 process101 &
[2]-  Running                 process102 &
	[3]+  Running                 process103 &
En la carcasa del terminal derecho, verifique que el promedio de carga sea superior a 1. La carga puede tardar unos minutos en aumentar.
top - 18:16:07 up  1:56,  2 users,  load average: 1.11, 0.77, 0.45
	...output omitted...
9.	En el shell del terminal izquierdo, cambie al usuario. Suspenda el proceso. Enumere los trabajos restantes. Observe que el estado del proceso para ahora está en el estado.rootprocess101process101T
Cambie al usuario.root
[student@serverb bin]$ su -
	Password: redhat
	Suspenda el proceso.process101
[root@serverb ~]# pkill -SIGSTOP process101
En el shell del terminal derecho, confirme que el proceso ya no se está ejecutando.process101
top - 18:19:17 up  1:59,  2 users,  load average: 0.92, 0.83, 0.50
Tasks: 123 total,   3 running, 118 sleeping,   1 stopped,   1 zombie
%Cpu(s): 42.9 us,  4.0 sy,  0.0 ni, 52.8 id,  0.0 wa,  0.3 hi,  0.0 si,  0.0 st
MiB Mem :   1774.8 total,   1368.4 free,    215.5 used,    190.8 buff/cache
MiB Swap:      0.0 total,      0.0 free,      0.0 used.   1405.2 avail Mem

 PID USER      PR  NI    VIRT    RES    SHR S  %CPU  %MEM     TIME+ COMMAND
5172 student   20   0  222652   3900   3448 R  66.4   0.2   3:25.81 process103
4023 student   20   0  222652   3980   3524 R  26.9   0.2   4:07.89 process102
   1 root      20   0  105972  17592  10292 S   0.0   1.0   0:01.34 systemd
   2 root      20   0       0      0      0 S   0.0   0.0   0:00.00 kthreadd
	...output omitted...
En el shell del terminal izquierdo, vea los trabajos restantes.
[root@serverb ~]# ps jT
...output omitted...
PPID PID  PGID  SID  TTY    TPGID STAT UID   TIME COMMAND
1117 1118 1118  1118 pts/1  5778  Ss   1000   0:00 -bash
1118 1161 1161  1118 pts/1  5778  T    1000  10:00 /bin/bash /home/student/bin/process101
1118 4023 4023  1118 pts/1  5778  S    1000   4:19 /bin/bash /home/student/bin/process102
1118 5172 5172  1118 pts/1  5778  S    1000   3:59 /bin/bash /home/student/bin/process103
	...output omitted...
Tenga en cuenta que tiene un estado de . Significa que el proceso está actualmente suspendido.process101T
10.	Reanude el proceso.process101
	En el shell del terminal izquierdo, reanude el proceso.process101
[root@serverb ~]# pkill -SIGCONT process101
En el shell de terminal derecho, verifique que el proceso se esté ejecutando nuevamente.
top - 18:24:18 up  2:04,  2 users,  load average: 1.06, 0.96, 0.65
Tasks: 125 total,   2 running, 123 sleeping,   0 stopped,   0 zombie
%Cpu(s): 48.3 us,  4.3 sy,  0.0 ni, 47.2 id,  0.0 wa,  0.2 hi,  0.0 si,  0.0 st
MiB Mem :   1774.8 total,   1368.6 free,    215.2 used,    191.0 buff/cache
MiB Swap:      0.0 total,      0.0 free,      0.0 used.   1405.5 avail Mem

    PID USER      PR  NI    VIRT    RES    SHR S  %CPU  %MEM     TIME+ COMMAND
   5172 student   20   0  222652   3900   3448 R  72.0   0.2   7:02.30 process103
   4023 student   20   0  222652   3980   3524 S  22.0   0.2   5:23.52 process102
   1161 student   20   0  222652   3888   3432 S  11.0   0.2  10:00.92 process101
	...output omitted...
11.	Termine , y desde la línea de comandos. Compruebe que los procesos ya no se muestran en .process101process102process103top
En el shell del terminal izquierdo, termine , y .process101process102process103
[root@serverb ~]# pkill process101
[root@serverb ~]# pkill process102
	[root@serverb ~]# pkill process103
En el shell de terminal derecho, verifique que los procesos ya no aparezcan en .top
top - 18:25:12 up  2:05,  2 users,  load average: 0.93, 0.95, 0.67
Tasks: 117 total,   1 running, 116 sleeping,   0 stopped,   0 zombie
%Cpu(s):  0.2 us,  0.0 sy,  0.0 ni, 99.8 id,  0.0 wa,  0.0 hi,  0.0 si,  0.0 st
MiB Mem :   1774.8 total,   1369.8 free,    214.0 used,    191.0 buff/cache
MiB Swap:      0.0 total,      0.0 free,      0.0 used.   1406.7 avail Mem

    PID USER      PR  NI    VIRT    RES    SHR S  %CPU  %MEM     TIME+ COMMAND
    767 root      20   0  471864  18992  16416 S   0.3   1.0   0:00.26 NetworkManager
      1 root      20   0  105972  17592  10292 S   0.0   1.0   0:01.34 systemd
      2 root      20   0       0      0      0 S   0.0   0.0   0:00.00 kthreadd
      3 root       0 -20       0      0      0 I   0.0   0.0   0:00.00 rcu_gp
	...output omitted...
12.	Detenga los procesos y regrese a la máquina.workstation
Cierre la sesión del usuario y cierre el terminal.root
[root@serverb ~]# exit
logout
[1]   Terminated              process101
[2]   Terminated              process102
	[3]-  Terminated              process103
En el shell del terminal derecho, presione q para salir . Regrese al sistema como usuario.topworkstationstudent
[student@serverb ~]$ exit
logout
Connection to serverb closed.
	[student@workstation ~]$
Evaluación
Como usuario de la máquina, utilice el comando para calificar el trabajo. Corrija los errores notificados y vuelva a ejecutar el comando hasta que se realice correctamente.studentworkstationlab
[student@workstation ~]$ lab grade processes-review
Terminar
En la máquina, cambie al directorio principal del usuario y utilice el comando para completar este ejercicio. Este paso es importante para garantizar que los recursos de ejercicios anteriores no afecten los próximos ejercicios.workstationstudentlab
[student@workstation ~]$ lab finish processes-review
Resumen
●	Un proceso es una instancia en ejecución de un programa ejecutable. A los procesos se les asigna un estado, que puede ser en ejecución, en suspensión, detenido o zombi. El comando enumera los procesos.ps
●	Cada terminal tiene su propia sesión y puede tener un proceso en primer plano y procesos en segundo plano independientes. El comando muestra los procesos dentro de una sesión de terminal.jobs
●	Una señal es una interrupción de software que informa eventos a un programa en ejecución. Los comandos , y usan señales para controlar procesos.killpkillkillall
●	El promedio de carga es una estimación de qué tan ocupado está el sistema. Para mostrar los valores promedio de carga, puede usar los comandos , o .topuptimew
Capítulo 9. Servicios de control y demonios
Identificar procesos del sistema iniciados automáticamente
Ejercicio guiado: Identificación de procesos del sistema iniciados automáticamente
Servicios del sistema de control
Ejercicio guiado: Servicios del sistema de control
Laboratorio: Servicios de control y demonios
Resumen
Abstracto
Gol	Controle y supervise los servicios de red y los demonios del sistema con el servicio.systemd
Objetivos	●	
Enumere los demonios del sistema y los servicios de red que iniciaron las unidades de servicio y socket.systemd
●	Controle los demonios del sistema y los servicios de red con el comando.systemctl
Secciones	●	
Identificar los procesos del sistema iniciados automáticamente (y el ejercicio guiado)
●	Servicios del sistema de control (y ejercicio guiado)
Laboratorio	●	
Servicios de control y demonios
Identificar procesos del sistema iniciados automáticamente
Objetivos
●	Enumere los demonios del sistema y los servicios de red iniciados por las unidades de servicio y socket.systemd
Introducción al demonio systemd
El demonio administra el proceso de inicio de Linux, incluido el inicio del servicio y la administración del servicio en general. El daemon activa los recursos del sistema, los daemons del servidor y otros procesos, tanto en el momento del arranque como en un sistema en ejecución.systemdsystemd
Demonios son procesos que esperan o se ejecutan en segundo plano para realizar diversas tareas. Generalmente, los demonios se inician automáticamente en el momento del arranque y continúan ejecutándose hasta que se apagan o hasta que los detiene manualmente. Por convención, los nombres de los demonios terminan con .d
Un servicio en el sentido a menudo se refiere a uno o más demonios. Sin embargo, iniciar o detener un servicio podría cambiar el estado del sistema una vez, sin dejar un proceso de demonio en ejecución después (llamado ).systemdoneshot
En Red Hat Enterprise Linux, el primer proceso que se inicia (PID 1) es el demonio, que proporciona estas características:systemd
●	Capacidades de paralelización (inicio de múltiples servicios simultáneamente), que aumentan la velocidad de arranque de un sistema.
●	Inicio bajo demanda de demonios sin necesidad de un servicio independiente.
●	Administración automática de dependencias de servicios, lo que puede evitar largos tiempos de espera. Por ejemplo, un servicio dependiente de la red no intenta iniciarse hasta que la red está disponible.
●	Un método para realizar un seguimiento conjunto de los procesos relacionados mediante grupos de control de Linux.
Descripción de las unidades de servicio
Un systemd unidad es un concepto abstracto para definir objetos que el sistema sabe gestionar.
Las unidades están representadas por archivos de configuración llamados Archivos de unidad, que encapsulan información sobre los servicios del sistema, los sockets de escucha y otros objetos relevantes para el sistema de inicio.systemd
Una unidad tiene un nombre y un tipo de unidad. El nombre proporciona una identidad única a la unidad. El tipo de unidad permite agrupar unidades junto con otros tipos de unidades similares.
El daemon usa unidades para administrar diferentes tipos de objetos:systemd
●	Unidades de servicio tienen una extensión y representan los servicios del sistema. Puede usar unidades de servicio para iniciar daemons a los que se accede con frecuencia, como un servidor web..service
●	Unidades de enchufe tienen una extensión y representan los sockets de comunicación entre procesos (IPC) que deben monitorear. Si un cliente se conecta al socket, el administrador inicia un demonio y le pasa la conexión. Puede usar unidades de socket para retrasar el inicio de un servicio en el momento del arranque y para iniciar servicios a petición que se usan con menos frecuencia..socketsystemdsystemd
●	Unidades de ruta tienen una extensión y retrasan la activación de un servicio hasta que se produzca un cambio específico en el sistema de archivos. Puede utilizar unidades de ruta para servicios que utilizan directorios de cola de impresión, como un sistema de impresión..path
Para administrar unidades, use el comando. Por ejemplo, muestre los tipos de unidades disponibles con el comando. El comando puede tomar nombres de unidad abreviados, entradas de árbol de procesos y descripciones de unidades.systemctlsystemctl -t helpsystemctl
Enumerar unidades de servicio
Utilice el comando para explorar el estado actual del sistema. Por ejemplo, el siguiente comando enumera y pagina todas las unidades de servicio cargadas actualmente.systemctl
[root@host ~]# systemctl list-units --type=service
UNIT                  LOAD    ACTIVE  SUB      DESCRIPTION
atd.service           loaded  active  running  Job spooling tools
auditd.service        loaded  active  running  Security Auditing Service
chronyd.service       loaded  active  running  NTP client/server
crond.service         loaded  active  running  Command Scheduler
dbus.service          loaded  active  running  D-Bus System Message Bus
...output omitted...
En este ejemplo, la opción limita el tipo de unidades a las unidades de servicio. La salida tiene las siguientes columnas:--type=servicesystemd
UNIT
El nombre de la unidad de servicio.
LOAD
Si el demonio analizó correctamente la configuración de la unidad y cargó la unidad en la memoria.systemd
ACTIVE
El estado de activación de alto nivel de la unidad. Esta información indica si la unidad se inició correctamente.
SUB
El estado de activación de bajo nivel de la unidad. Esta información indica información más detallada sobre la unidad. La información varía según el tipo de unidad, el estado y cómo se ejecuta la unidad.
DESCRIPTION
La breve descripción de la unidad.
De forma predeterminada, el comando enumera solo las unidades de servicio con estados de activación. La opción enumera todas las unidades de servicio independientemente de los estados de activación. Utilice la opción para filtrar por los valores de los campos , o .systemctl list-units --type=serviceactivesystemctl list-units --all--state=LOADACTIVESUB
[root@host ~]# systemctl list-units --type=service --all
UNIT                          LOAD      ACTIVE   SUB     DESCRIPTION
  atd.service                 loaded    active   running Job spooling tools
  auditd.service              loaded    active   running Security Auditing ...
  auth-rpcgss-module.service  loaded    inactive dead    Kernel Module ...
  chronyd.service             loaded    active   running NTP client/server
  cpupower.service            loaded    inactive dead    Configure CPU power ...
  crond.service               loaded    active   running Command Scheduler
  dbus.service                loaded    active   running D-Bus System Message Bus
● display-manager.service     not-found inactive dead    display-manager.service
...output omitted...
El comando sin ningún argumento enumera las unidades que están cargadas y activas.systemctl
[root@host ~]# systemctl
UNIT                                 LOAD   ACTIVE SUB       DESCRIPTION
proc-sys-fs-binfmt_misc.automount    loaded active waiting   Arbitrary...
sys-devices-....device               loaded active plugged   Virtio network...
sys-subsystem-net-devices-ens3.deviceloaded active plugged   Virtio network...
...output omitted...
-.mount                              loaded active mounted   Root Mount
boot.mount                           loaded active mounted   /boot
...output omitted...
systemd-ask-password-plymouth.path   loaded active waiting   Forward Password...
systemd-ask-password-wall.path       loaded active waiting   Forward Password...
init.scope                           loaded active running   System and Servi...
session-1.scope                      loaded active running   Session 1 of...
atd.service                          loaded active running   Job spooling tools
auditd.service                       loaded active running   Security Auditing...
chronyd.service                      loaded active running   NTP client/server
crond.service                        loaded active running   Command Scheduler
...output omitted...
La opción de comando muestra las unidades que el servicio intenta analizar y cargar en la memoria. Esta opción no muestra los servicios que están instalados pero no habilitados. Puede usar la opción de comando para ver el estado de todos los archivos de la unidad instalada:systemctllist-unitssystemdsystemctllist-unit-files
[root@host ~]# systemctl list-unit-files --type=service
UNIT FILE                         STATE       VENDOR PRESET
arp-ethers.service                disabled    disabled
atd.service                       enabled     enabled
auditd.service                    enabled     enabled
auth-rpcgss-module.service        static      -
autovt@.service                   alias       -
blk-availability.service          disabled    disabled
...output omitted...
En la salida del comando, algunas entradas comunes para el campo son , , , y . Todos los valores se enumeran en las páginas del manual de comandos.systemctl list-unit-filesSTATEenableddisabledstaticmaskedSTATEsystemctl
Ver estados de servicio
Ver el estado de una unidad con el comando. Si se omite el tipo de unidad, el comando espera una unidad de servicio con ese nombre.systemctl status name.type
[root@host ~]# systemctl status sshd.service
● sshd.service - OpenSSH server daemon
     Loaded: loaded (/usr/lib/systemd/system/sshd.service; enabled; vendor preset: enabled)
     Active: active (running) since Mon 2022-03-14 05:38:12 EDT; 25min ago
       Docs: man:sshd(8)
             man:sshd_config(5)
   Main PID: 1114 (sshd)
      Tasks: 1 (limit: 35578)
     Memory: 5.2M
        CPU: 64ms
     CGroup: /system.slice/sshd.service
             └─1114 "sshd: /usr/sbin/sshd -D [listener] 0 of 10-100 startups"

Mar 14 05:38:12 workstation systemd[1]: Starting OpenSSH server daemon...
Mar 14 05:38:12 workstation sshd[1114]: Server listening on 0.0.0.0 port 22.
Mar 14 05:38:12 workstation sshd[1114]: Server listening on :: port 22.
Mar 14 05:38:12 workstation systemd[1]: Started OpenSSH server daemon.
...output omitted...
Algunos campos de la salida de la opción de comando:systemctlstatus
Tabla 9.1. Información de la unidad de servicio
Campo	Descripción
Cargado	Si la unidad de servicio está cargada en la memoria
Activo	Si la unidad de servicio está funcionando y, de ser así, durante cuánto tiempo
Docs	Dónde encontrar más información sobre el servicio
PID principal	El identificador de proceso principal del servicio, incluido el nombre del comando
Estado	Más información sobre el servicio
Proceso	Más información sobre procesos relacionados
Grupo de CGroup	Más información sobre los grupos de control relacionados

No todos estos campos están siempre presentes en la salida del comando.
Las palabras clave en la salida de estado indican el estado del servicio:
Tabla 9.2. Estados de servicio en la salida de systemctl
Palabra clave	Descripción
cargado	Se procesa el archivo de configuración de la unidad.
activo (en ejecución)	El servicio se ejecuta con procesos continuos.
activo (salido)	El servicio completó correctamente una configuración única.
activo (en espera)	El servicio se está ejecutando pero está esperando un evento.
inactivo	El servicio no se está ejecutando.
Habilitado	El servicio se inicia en el momento del arranque.
Deshabilitado	El servicio no está configurado para iniciarse en el momento del arranque.
estático	El servicio no se puede habilitar, pero una unidad habilitada puede iniciarlo automáticamente.

Nota
El comando reemplaza el comando de Red Hat Enterprise Linux 6 y versiones anteriores.systemctl status NAMEservice NAME status
Verificar el estado de un servicio
El comando verifica los estados específicos de un servicio. Por ejemplo, utilice la opción de comando para verificar si una unidad de servicio está activa (en ejecución):systemctlsystemctlis-active
[root@host ~]# systemctl is-active sshd.service
active
El comando devuelve el estado de la unidad de servicio, que suele ser o .activeinactive
Ejecute la opción de comando para verificar si una unidad de servicio está habilitada para iniciarse automáticamente durante el arranque del sistema:systemctlis-enabled
[root@host ~]# systemctl is-enabled sshd.service
enabled
El comando devuelve si la unidad de servicio está habilitada para iniciarse en el momento del arranque y el estado suele ser o .enableddisabled
Para verificar si la unidad falló durante el inicio, ejecute la opción de comando:systemctlis-failed
[root@host ~]# systemctl is-failed sshd.service
active
El comando devuelve si el servicio se está ejecutando correctamente o si se produjo un error durante el inicio. Si la unidad se detuvo, entonces devuelve o .activefailedunknowninactive
Para enumerar todas las unidades fallidas, ejecute el comando.systemctl --failed --type=service
Referencias
systemd(1), (5), (5), (5) y (1) páginas de manualsystemd.unitsystemd.servicesystemd.socketsystemctl
Para obtener más información, consulte el Administrar servicios con systemd capítulo en el Guía de configuración de Red Hat Enterprise Linux 9 Configuración básica del sistema en https://access.redhat.com/documentation/en-us/red_hat_enterprise_linux/9/html-single/configuring_basic_system_settings/managing-services-with-systemd_configuring-basic-system-settings#managing-services-with-systemd_configuring-basic-system-settings
Ejercicio guiado: Identificación de procesos del sistema iniciados automáticamente
Enumere las unidades de servicio instaladas e identifique qué servicios están habilitados y activos actualmente en un servidor.
Resultados
●	Enumere las unidades de servicio instaladas.
●	Identifique los servicios activos y habilitados en el sistema.
Como usuario de la máquina, use el comando para preparar el sistema para este ejercicio.studentworkstationlab
Este comando prepara el entorno y garantiza que todos los recursos necesarios estén disponibles.
[student@workstation ~]$ lab start services-identify
Instrucciones
Utilice el comando para iniciar sesión en la máquina como usuario.sshserverastudent
[student@workstation ~]$ ssh student@servera
1.	[student@servera ~]$
Enumere todas las unidades de servicio instaladas en la máquina.servera
[student@servera ~]$ systemctl list-units --type=service
  UNIT                   LOAD    ACTIVE  SUB      DESCRIPTION
  atd.service            loaded  active  running  Deferred execution scheduler
  auditd.service         loaded  active  running  Security Auditing Service
  chronyd.service        loaded  active  running  NTP client/server
  crond.service          loaded  active  running  Command Scheduler
  dbus-broker.service    loaded  active  running  D-Bus System Message Bus
2.	...output omitted...
Presione q para salir del comando.
Enumere todas las unidades de enchufe, activas e inactivas, en la máquina.servera
[student@servera ~]$ systemctl list-units --type=socket --all
UNIT                   LOAD    ACTIVE  SUB        DESCRIPTION
dbus.socket            loaded  active  running    D-Bus System Message Bus Socket
dm-event.socket        loaded  active  listening  Device-mapper event daemon FIFOs
lvm2-lvmpolld.socket   loaded  active  listening  LVM2 poll daemon socket
...output omitted...

LOAD   = Reflects whether the unit definition was properly loaded.
ACTIVE = The high-level unit activation state, i.e. generalization of SUB.
SUB    = The low-level unit activation state, values depend on unit type.
13 loaded units listed.
3.	To show all installed unit files use 'systemctl list-unit-files'.
4.	Explora el estado del servicio. Puede utilizar este servicio para la sincronización del protocolo de tiempo de red (NTP).chronyd
Mostrar el estado del servicio. Tenga en cuenta el ID de proceso de cualquier demonio activo.chronyd
[student@servera ~]$ systemctl status chronyd
● chronyd.service - NTP client/server
     Loaded: loaded (/usr/lib/systemd/system/chronyd.service; enabled; vendor preset: enabled)
     Active: active (running) since Mon 2022-03-14 05:38:15 EDT; 1h 16min ago
       Docs: man:chronyd(8)
             man:chrony.conf(5)
    Process: 728 ExecStart=/usr/sbin/chronyd $OPTIONS (code=exited, status=0/SUCCESS)
   Main PID: 747 (chronyd)
      Tasks: 1 (limit: 10800)
     Memory: 3.7M
        CPU: 37ms
     CGroup: /system.slice/chronyd.service
             └─747 /usr/sbin/chronyd -F 2

Mar 14 05:38:15 servera.lab.example.com systemd[1]: Starting NTP client/server...
Mar 14 05:38:15 servera.lab.example.com chronyd[747]: chronyd version 4.1 starting (+CMDMON +NTP +REFCLOCK +RTC +PRIVDROP +SCFILTER +SIGND +ASYNCDNS +NTS +SECHASH +IPV6 +DEBUG)
Mar 14 05:38:15 servera.lab.example.com chronyd[747]: commandkey directive is no longer supported
Mar 14 05:38:15 servera.lab.example.com chronyd[747]: generatecommandkey directive is no longer supported
Mar 14 05:38:15 servera.lab.example.com chronyd[747]: Frequency -11.870 +/- 1.025 ppm read from /var/lib/chrony/drift
Mar 14 05:38:15 servera.lab.example.com chronyd[747]: Loaded seccomp filter (level 2)
Mar 14 05:38:15 servera.lab.example.com systemd[1]: Started NTP client/server.
	Mar 14 05:38:23 servera.lab.example.com chronyd[747]: Selected source 172.25.254.254
Presione q para salir del comando.
Confirme que el demonio se está ejecutando mediante su identificador de proceso. En el comando anterior, la salida del ID de proceso asociado al servicio es 747. El ID de proceso puede diferir en su sistema.chronydchronyd
[student@servera ~]$ ps -p 747
  PID TTY          TIME CMD
	  747 ?        00:00:00 chronyd
5.	Explora el estado del servicio. Puede utilizar este servicio para una comunicación cifrada segura entre sistemas.sshd
Determine si el servicio está habilitado para iniciarse en el arranque del sistema.sshd
[student@servera ~]$ systemctl is-enabled sshd
	enabled
Determine si el servicio está activo sin mostrar toda la información de estado.sshd
[student@servera ~]$ systemctl is-active sshd
	active
Mostrar el estado del servicio.sshd
[student@servera ~]$ systemctl status sshd
● sshd.service - OpenSSH server daemon
     Loaded: loaded (/usr/lib/systemd/system/sshd.service; enabled; vendor preset: enabled)
     Active: active (running) since Mon 2022-03-14 05:38:16 EDT; 1h 19min ago
       Docs: man:sshd(8)
             man:sshd_config(5)
   Main PID: 784 (sshd)
      Tasks: 1 (limit: 10800)
     Memory: 6.7M
        CPU: 82ms
     CGroup: /system.slice/sshd.service
             └─784 "sshd: /usr/sbin/sshd -D [listener] 0 of 10-100 startups"

Mar 14 05:38:16 servera.lab.example.com systemd[1]: Starting OpenSSH server daemon...
Mar 14 05:38:16 servera.lab.example.com sshd[784]: Server listening on 0.0.0.0 port 22.
Mar 14 05:38:16 servera.lab.example.com sshd[784]: Server listening on :: port 22.
Mar 14 05:38:16 servera.lab.example.com systemd[1]: Started OpenSSH server daemon.
Mar 14 06:51:36 servera.lab.example.com sshd[1090]: Accepted publickey for student from 172.25.250.9 port 53816 ssh2: RSA SHA256:M8ikhcEDm2tQ95Z0o7ZvufqEixCFCt+wowZLNzNlBT0
	Mar 14 06:51:36 servera.lab.example.com sshd[1090]: pam_unix(sshd:session): session opened for user student(uid=1000) by (uid=0)
Presione q para salir del comando.
Enumere los estados habilitados o deshabilitados de todas las unidades de servicio.
[student@servera ~]$ systemctl list-unit-files --type=service
UNIT FILE                        STATE           VENDOR PRESET
arp-ethers.service               disabled        disabled
atd.service                      enabled         enabled
auditd.service                   enabled         enabled
auth-rpcgss-module.service       static          -
autovt@.service                  alias           -
blk-availability.service         disabled        disabled
bluetooth.service                enabled         enabled
chrony-wait.service              disabled        disabled
chronyd.service                  enabled         enabled
6.	...output omitted...
Presione q para salir del comando.
Regrese al sistema como usuario.workstationstudent
[student@servera ~]$ exit
logout
Connection to servera closed.
7.	[student@workstation]$
Terminar
En la máquina, cambie al directorio principal del usuario y utilice el comando para completar este ejercicio. Este paso es importante para garantizar que los recursos de ejercicios anteriores no afecten los próximos ejercicios.workstationstudentlab
[student@workstation ~]$ lab finish services-identify
Servicios del sistema de control
Objetivos
●	Demonios del sistema de control y servicios de red con .systemctl
Servicios de inicio y parada
Puede iniciar, detener o volver a cargar servicios manualmente para actualizar el servicio, actualizar el archivo de configuración, desinstalar el servicio o administrar manualmente un servicio que se usa con poca frecuencia.
Utilice el comando para verificar el estado de un servicio, si el servicio se está ejecutando o detenido.systemctl status
[root@host ~]# systemctl status sshd.service
● sshd.service - OpenSSH server daemon
     Loaded: loaded (/usr/lib/systemd/system/sshd.service; enabled; vendor preset: enabled)
     Active: active (running) since Wed 2022-03-23 11:58:18 EDT; 2min 56s ago
...output omitted...
Utilice el comando como usuario (con el comando si es necesario). Si ejecuta el comando solo con el nombre del servicio (sin el tipo de servicio), el servicio busca archivos.systemctl startrootsudosystemctl startsystemd.service
[root@host ~]# systemctl start sshd
Para detener un servicio en ejecución, use la opción command. En el ejemplo siguiente se muestra cómo detener el servicio:systemctlstopsshd.service
[root@host ~]# systemctl stop sshd.service
Reiniciar y volver a cargar servicios
Al reiniciar un servicio en ejecución, el servicio primero se detiene y, a continuación, se inicia de nuevo. En el reinicio del servicio, el nuevo proceso obtiene un nuevo identificador durante el inicio y, por lo tanto, el identificador del proceso cambia. Para reiniciar un servicio en ejecución, use la opción de comando. En el ejemplo siguiente se muestra cómo reiniciar el servicio:systemctlrestartsshd
[root@host ~]# systemctl restart sshd.service
Algunos servicios pueden volver a cargar sus archivos de configuración sin necesidad de reiniciar, lo que se denomina Recarga de servicio. La recarga de un servicio no cambia el identificador de proceso asociado a varios procesos de servicio. Para volver a cargar un servicio en ejecución, use la opción command. En el ejemplo siguiente se muestra cómo volver a cargar el servicio después de los cambios de configuración:systemctlreloadsshd.service
[root@host ~]# systemctl reload sshd.service
Si no está seguro de si el servicio tiene la función para volver a cargar los cambios del archivo de configuración, use la opción command. El comando vuelve a cargar los cambios de configuración si la función de recarga está disponible. De lo contrario, el comando reinicia el servicio para implementar los nuevos cambios de configuración:systemctlreload-or-restart
[root@host ~]# systemctl reload-or-restart sshd.service
Enumerar dependencias de unidades
Algunos servicios requieren que otros servicios se ejecuten primero, lo que crea dependencias en los otros servicios. Otros servicios se inician solo bajo demanda, en lugar de en el momento del arranque. En ambos casos, los comandos and inician los servicios según sea necesario, ya sea para resolver la dependencia o para iniciar un servicio que se usa con poca frecuencia. Por ejemplo, si el servicio del sistema de impresión (CUPS) no se está ejecutando y coloca un archivo en el directorio de cola de impresión, el sistema inicia los daemons o comandos relacionados con CUPS para satisfacer la solicitud de impresión.systemdsystemctl
[root@host ~]# systemctl stop cups.service
Warning: Stopping cups, but it can still be activated by:
  cups.path
  cups.socket
Sin embargo, para detener todos los servicios de impresión en un sistema, debe detener las tres unidades. Al deshabilitar el servicio, se deshabilitan las dependencias.
El comando muestra una asignación jerárquica de dependencias para iniciar la unidad de servicio. Para enumerar las dependencias inversas (unidades que dependen de la unidad especificada), utilice la opción con el comando.systemctl list-dependencies UNIT--reverse
[root@host ~]# systemctl list-dependencies sshd.service
sshd.service
● ├─system.slice
● ├─sshd-keygen.target
● │ ├─sshd-keygen@ecdsa.service
● │ ├─sshd-keygen@ed25519.service
● │ └─sshd-keygen@rsa.service
● └─sysinit.target
...output omitted...
Servicios de máscara y desenmascaramiento
A veces, algunos servicios instalados en su sistema pueden entrar en conflicto entre sí. Por ejemplo, existen muchas formas de administrar los servidores de correo (los servicios y). El enmascaramiento de un servicio evita que un administrador inicie accidentalmente un servicio que entre en conflicto con otros servicios. El enmascaramiento crea un enlace en los directorios de configuración al archivo, lo que impide que se inicie el servicio. Para enmascarar un servicio, utilice la opción de comando.postfixsendmail/dev/nullsystemctlmask
[root@host ~]# systemctl mask sendmail.service
Created symlink /etc/systemd/system/sendmail.service → /dev/null.
A continuación, compruebe el estado del servicio mediante el comando:systemctl list-unit-files
[root@host ~]# systemctl list-unit-files --type=service
UNIT FILE                                   STATE
...output omitted...
sendmail.service                            masked
...output omitted...
Al intentar iniciar una unidad de servicio enmascarada, se produce un error con el siguiente resultado:
[root@host ~]# systemctl start sendmail.service
Failed to start sendmail.service: Unit sendmail.service is masked.
Utilice el comando para desenmascarar la unidad de servicio.systemctl unmask
[root@host ~]# systemctl unmask sendmail
Removed /etc/systemd/system/sendmail.service.
Importante
Usted, u otro archivo de unidad, puede iniciar manualmente un servicio deshabilitado, pero no se inicia automáticamente en el arranque. Un servicio enmascarado no se inicia de forma manual o automática.
Habilitar servicios para que se inicien o detengan en el arranque
Iniciar un servicio en un sistema en ejecución no garantiza que el servicio se inicie automáticamente cuando se reinicie el sistema. Del mismo modo, detener un servicio en un sistema en ejecución no impide que se inicie de nuevo cuando se reinicia el sistema. La creación de vínculos en los directorios de configuración permite que el servicio se inicie en el arranque. Puede crear o eliminar estos vínculos mediante el comando con la opción or.systemdsystemctlenabledisable
[root@root ~]# systemctl enable sshd.service
Created symlink /etc/systemd/system/multi-user.target.wants/sshd.service → /usr/lib/systemd/system/sshd.service.
Este comando crea un enlace simbólico desde el archivo de la unidad de servicio, generalmente en el directorio, a la ubicación del disco donde el comando busca archivos, en el directorio. La habilitación de un servicio no inicia el servicio en la sesión actual. Para iniciar el servicio y permitir que se inicie automáticamente durante el arranque, puede ejecutar los comandos and o usar el comando equivalente./usr/lib/systemd/systemsystemd/etc/systemd/system/TARGETNAME.target.wantssystemctl startsystemctl enablesystemctl enable --now
[root@root ~]# systemctl enable --now sshd.service
Created symlink /etc/systemd/system/multi-user.target.wants/sshd.service → /usr/lib/systemd/system/sshd.service.
Para deshabilitar el servicio para que no se inicie automáticamente, use el comando, que elimina el vínculo simbólico que se creó al habilitar un servicio. La deshabilitación de un servicio no detiene el servicio si se está ejecutando actualmente. Para deshabilitar y detener un servicio, puede ejecutar los comandos and o usar el comando equivalente.systemctl disablesystemctl stopsystemctl disablesystemctl disable --now
[root@host ~]# systemctl disable --now sshd.service
Removed /etc/systemd/system/multi-user.target.wants/sshd.service.
Para verificar si el servicio está habilitado o deshabilitado, use el comando.systemctl is-enabled
[root@host ~]# systemctl is-enabled sshd.service
enabled
Resumen de los comandos systemctl
Puede iniciar y detener servicios en un sistema en ejecución, y habilitarlos o deshabilitarlos para un inicio automático en el momento del arranque.
Tabla 9.3. Comandos útiles de administración de servicios
Mandar	Tarea
systemctl status UNIT	Ver información detallada sobre el estado de una unidad.
systemctl stop UNIT	Detenga un servicio en un sistema en ejecución.
systemctl start UNIT	Inicie un servicio en un sistema en ejecución.
systemctl restart UNIT	Reinicie un servicio en un sistema en ejecución.
systemctl reload UNIT	Vuelva a cargar el archivo de configuración de un servicio en ejecución.
systemctl mask UNIT	Deshabilite el inicio de un servicio, tanto manualmente como en el arranque.
systemctl unmask UNIT	Ponga a disposición un servicio enmascarado.
systemctl enable UNIT	Configure un servicio para que se inicie en el momento del arranque. Utilice la opción para iniciar también el servicio.--now
systemctl disable UNIT	Deshabilite un servicio para que no se inicie en el momento del arranque. Utilice la opción para detener también el servicio.--now

Referencias
systemd(1), (5), (5), (5) y (1) páginas de manualsystemd.unitsystemd.servicesystemd.socketsystemctl
Para obtener más información, consulte el Gestión de servicios del sistema con systemctl capítulo en el Guía de configuración de Red Hat Enterprise Linux 9 Configuración básica del sistema en https://access.redhat.com/documentation/en-us/red_hat_enterprise_linux/9/html-single/configuring_basic_system_settings/index#managing-system-services-with-systemctl_configuring-basic-system-settings
Ejercicio guiado: Servicios del sistema de control
Utilice el comando para detener, iniciar, reiniciar, volver a cargar, habilitar y deshabilitar los servicios.systemctlsystemd
Resultados
●	Utilice el comando para controlar los servicios.systemctlsystemd
Como usuario de la máquina, use el comando para preparar el sistema para este ejercicio.studentworkstationlab
Este comando prepara el entorno y garantiza que todos los recursos necesarios estén disponibles.
[student@workstation ~]$ lab start services-control
Instrucciones
Inicie sesión en la máquina como usuario y cambie al usuario.serverastudentroot
[student@workstation ~]$ ssh student@servera
...output omitted...
[student@servera ~]$ sudo -i
[sudo] password for student: student
1.	[root@servera ~]#
2.	Reinicie y vuelva a cargar el servicio, y observe los resultados.sshd
Mostrar el estado del servicio. Tenga en cuenta el ID de proceso del demonio. Presione q para salir del comando.sshdsshd
[root@servera ~]# systemctl status sshd
● sshd.service - OpenSSH server daemon
     Loaded: loaded (/usr/lib/systemd/system/sshd.service; enabled; vendor preset: enabled)
     Active: active (running) since Thu 2022-05-19 04:04:45 EDT; 16min ago
       Docs: man:sshd(8)
             man:sshd_config(5)
   Main PID: 784 (sshd)
      Tasks: 1 (limit: 10799)
     Memory: 6.6M
	...output omitted...
Reinicie el servicio y vea el estado. En este ejemplo, el identificador de proceso del demonio cambia de 784 a 1193. Presione q para salir del comando.sshd
[root@servera ~]# systemctl restart sshd
[root@servera ~]# systemctl status sshd
● sshd.service - OpenSSH server daemon
     Loaded: loaded (/usr/lib/systemd/system/sshd.service; enabled; vendor preset: enabled)
     Active: active (running) since Thu 2022-05-19 04:21:40 EDT; 5s ago
       Docs: man:sshd(8)
             man:sshd_config(5)
   Main PID: 1193 (sshd)
      Tasks: 1 (limit: 10799)
     Memory: 1.7M
	...output omitted...
Vuelva a cargar el servicio y vea el estado. El ID de proceso del daemon no cambia. Presione q para salir del comando.sshd
[root@servera ~]# systemctl reload sshd
[root@servera ~]# systemctl status sshd
● sshd.service - OpenSSH server daemon
     Loaded: loaded (/usr/lib/systemd/system/sshd.service; enabled; vendor preset: enabled)
     Active: active (running) since Thu 2022-05-19 04:21:40 EDT; 52s ago
       Docs: man:sshd(8)
             man:sshd_config(5)
    Process: 1201 ExecReload=/bin/kill -HUP $MAINPID (code=exited, status=0/SUCCESS)
   Main PID: 1193 (sshd)
      Tasks: 1 (limit: 10799)
     Memory: 1.7M
	...output omitted...
Compruebe que el servicio se está ejecutando. Presione q para salir del comando.chronyd
[root@servera ~]# systemctl status chronyd
● chronyd.service - NTP client/server
     Loaded: loaded (/usr/lib/systemd/system/chronyd.service; enabled; vendor preset: enabled)
     Active: active (running) since Thu 2022-05-19 04:04:44 EDT; 19min ago
3.	  ...output omitted...
Detenga el servicio y vea el estado. Presione q para salir del comando.chronyd
[root@servera ~]# systemctl stop chronyd
[root@servera ~]# systemctl status chronyd
○ chronyd.service - NTP client/server
     Loaded: loaded (/usr/lib/systemd/system/chronyd.service; enabled; vendor preset: enabled)
     Active: inactive (dead) since Thu 2022-05-19 04:24:59 EDT; 4s ago
...output omitted...
May 19 04:24:59 servera.lab.example.com systemd[1]: Stopping NTP client/server...
May 19 04:24:59 servera.lab.example.com systemd[1]: chronyd.service: Deactivated successfully.
4.	May 19 04:24:59 servera.lab.example.com systemd[1]: Stopped NTP client/server.
Determine si el servicio está habilitado para iniciarse en el arranque del sistema.chronyd
[root@servera ~]# systemctl is-enabled chronyd
5.	enabled
Reinicie la máquina y, a continuación, vea el estado del servicio.serverachronyd
[root@servera ~]# systemctl reboot
Connection to servera closed by remote host.
Connection to servera closed.
[student@workstation ~]$
Inicie sesión como usuario en la máquina y cambie al usuario. Ver el estado del servicio. Presione q para salir del comando.studentserverarootchronyd
[student@workstation ~]$ ssh student@servera
...output omitted...
[student@servera ~]$ sudo -i
[sudo] password for student: student
[root@servera ~]# systemctl status chronyd
● chronyd.service - NTP client/server
     Loaded: loaded (/usr/lib/systemd/system/chronyd.service; enabled; vendor preset: enabled)
     Active: active (running) since Thu 2022-05-19 04:27:12 EDT; 40s ago
6.	   ...output omitted...
Deshabilite el servicio para que no se inicie en el arranque y, a continuación, vea el estado del servicio. Presione q para salir del comando.chronyd
[root@servera ~]# systemctl disable chronyd
Removed /etc/systemd/system/multi-user.target.wants/chronyd.service.
[root@servera ~]# systemctl status chronyd
● chronyd.service - NTP client/server
     Loaded: loaded (/usr/lib/systemd/system/chronyd.service; disabled; vendor preset: enabled)
     Active: active (running) since Thu 2022-05-19 04:27:12 EDT; 2min 48s ago
7.	   ...output omitted...
Reinicie y, a continuación, vea el estado del servicio.serverachronyd
[root@servera ~]# systemctl reboot
Connection to servera closed by remote host.
Connection to servera closed.
[student@workstation ~]$
Inicie sesión como usuario en y vea el estado del servicio. Presione q para salir del comando.studentserverachronyd
[student@workstation ~]$ ssh student@servera
...output omitted...
[student@servera ~]$ systemctl status chronyd
○ chronyd.service - NTP client/server
     Loaded: loaded (/usr/lib/systemd/system/chronyd.service; disabled; vendor preset: enabled)
     Active: inactive (dead)
       Docs: man:chronyd(8)
8.	             man:chrony.conf(5)
Regrese al sistema como usuario.workstationstudent
[student@servera ~]$ exit
logout
Connection to servera closed.
9.	[student@workstation ~]$
Terminar
En la máquina, cambie al directorio principal del usuario y utilice el comando para completar este ejercicio. Este paso es importante para garantizar que los recursos de ejercicios anteriores no afecten los próximos ejercicios.workstationstudentlab
[student@workstation ~]$ lab finish services-control
Laboratorio: Servicios de control y demonios
Configure varios servicios para que se habiliten o deshabiliten, y se inicien o detengan, en función de una especificación que se le proporcione.
Resultados
●	Habilitar, deshabilitar, iniciar y detener servicios.
Como usuario de la máquina, use el comando para preparar el sistema para este ejercicio.studentworkstationlab
Este comando prepara el entorno y garantiza que todos los recursos necesarios estén disponibles.
[student@workstation ~]$ lab start services-review
Instrucciones
1.	Utilice el comando para iniciar sesión en la máquina como usuario. En la máquina, inicie el servicio.sshserverbstudentserverbpsacct
Inicie sesión en la máquina como usuario y cambie al usuario.serverbstudentroot
[student@workstation ~]$ ssh student@serverb
...output omitted...
[student@serverb ~]$ sudo -i
[sudo] password for student: student
	[root@serverb ~]#
Verifique el estado del servicio. El servicio está en estado inactivo y deshabilitado. El estado deshabilitado confirma que el servicio no se inicia en el momento del arranque.psacctpsacct
[root@serverb ~]# systemctl status psacct
○ psacct.service - Kernel process accounting
     Loaded: loaded (/usr/lib/systemd/system/psacct.service; disabled; vendor preset: disabled)
	     Active: inactive (dead)
	Inicie el servicio.psacct
[root@serverb ~]# systemctl start psacct
Compruebe que el servicio se está ejecutando.psacct
[root@serverb ~]# systemctl is-active psacct
	active
2.	Configure el servicio para que se inicie en el arranque del sistema.psacct
Habilite el servicio para que se inicie en el arranque del sistema.psacct
[root@serverb ~]# systemctl enable psacct
	Created symlink /etc/systemd/system/multi-user.target.wants/psacct.service → /usr/lib/systemd/system/psacct.service.
Compruebe que el servicio está habilitado para iniciarse en el arranque del sistema.psacct
[root@serverb ~]# systemctl is-enabled psacct
	enabled
3.	Detenga el servicio.rsyslog
Verifique el estado del servicio. Observe que el servicio se está ejecutando y habilitado para iniciarse en el momento del arranque. Presione q para salir del comando.rsyslogrsyslog
[root@serverb ~]# systemctl status rsyslog
● rsyslog.service - System Logging Service
     Loaded: loaded (/usr/lib/systemd/system/rsyslog.service; enabled; vendor preset: enabled)
     Active: active (running) since Thu 2022-05-19 04:04:43 EDT; 38min ago
	  ...output omitted...
	Detenga el servicio.rsyslog
[root@serverb ~]# systemctl stop rsyslog
Compruebe que el servicio está detenido.rsyslog
[root@serverb ~]# systemctl is-active rsyslog
	inactive
4.	Configure el servicio para que no se inicie en el arranque del sistema.rsyslog
Deshabilite el servicio para que no se inicie en el arranque del sistema.rsyslog
[root@serverb ~]# systemctl disable rsyslog
	Removed /etc/systemd/system/multi-user.target.wants/rsyslog.service.
Compruebe que el servicio no se inicia durante el proceso de arranque.rsyslog
[root@serverb ~]# systemctl is-enabled rsyslog
	disabled
5.	Reinicie la máquina antes de evaluar el laboratorio.serverb
[root@serverb ~]# systemctl reboot
Connection to serverb closed by remote host.
Connection to serverb closed.
6.	[student@workstation ~]$
Evaluación
Como usuario de la máquina, utilice el comando para calificar el trabajo. Corrija los errores notificados y vuelva a ejecutar el comando hasta que se realice correctamente.studentworkstationlab
[student@workstation ~]$ lab grade services-review
Terminar
En la máquina, cambie al directorio principal del usuario y utilice el comando para completar este ejercicio. Este paso es importante para garantizar que los recursos de ejercicios anteriores no afecten los próximos ejercicios.workstationstudentlab
[student@workstation ~]$ lab finish services-review
Resumen
●	La utilidad proporciona un método para activar recursos del sistema, demonios de servidor y otros procesos, tanto en el momento del arranque como en un sistema en ejecución.systemd
●	Utilice la utilidad para iniciar, detener, recargar, habilitar y deshabilitar servicios.systemctl
●	Utilice la utilidad para administrar unidades de servicio, unidades de socket y unidades de ruta.systemd
●	Utilice el comando para determinar el estado de los daemons del sistema y los servicios de red que inició la utilidad.systemctl statussystemd
●	El comando enumera todas las unidades de servicio de las que depende una unidad de servicio específica.systemctl list-dependencies
●	La utilidad puede enmascarar una unidad de servicio para que no se ejecute, incluso para satisfacer dependencias.systemd
Capítulo 10. Configurar y proteger SSH
Acceda a la línea de comandos remota con SSH
Ejercicio guiado: Acceso a la línea de comandos remota
Configuración de la autenticación basada en claves SSH
Ejercicio guiado: Configuración de la autenticación basada en claves SSH
Personalizar la configuración del servicio OpenSSH
Ejercicio guiado: Personalización de la configuración del servicio OpenSSH
Laboratorio: Configuración y protección de SSH
Resumen
Abstracto
Gol	Configure el servicio de línea de comandos seguro en sistemas remotos con OpenSSH.
Objetivos	●	
Inicie sesión en un sistema remoto y ejecute comandos con .ssh
●	Configure una cuenta de usuario para usar la autenticación basada en claves para iniciar sesión en sistemas remotos de forma segura sin contraseña.
●	Deshabilite los inicios de sesión directos como y la autenticación basada en contraseña para el servicio OpenSSH.root
Secciones	●	
Acceda a la línea de comandos remota con SSH (y ejercicio guiado)
●	Configuración de la autenticación basada en claves SSH (y ejercicio guiado)
●	Personalizar la configuración del servicio OpenSSH (y ejercicio guiado)
Laboratorio	●	
Configurar y proteger SSH
Acceda a la línea de comandos remota con SSH
Objetivos
●	Inicie sesión en un sistema remoto y ejecute comandos con .ssh
Descripción de Secure Shell
El paquete OpenSSH proporciona Secure Shell, o protocolo SSH, en Red Hat Enterprise Linux. Con el protocolo SSH, los sistemas pueden comunicarse en un canal cifrado y seguro a través de una red insegura.
Utilice el comando para crear una conexión segura a un sistema remoto, autenticarse como un usuario específico y obtener una sesión de shell interactiva en el sistema remoto. El comando puede ejecutar una sesión en un sistema remoto sin ejecutar un shell interactivo.sshssh
Ejemplos de Secure Shell
El siguiente comando inicia sesión en el servidor remoto con el mismo nombre de usuario que el usuario local actual. El sistema remoto le solicita que se autentique con la contraseña del usuario en este ejemplo.sshhostadeveloper1
[developer1@host ~]$ ssh hosta
developer1@hosta's password: redhat
...output omitted...
[developer1@hosta ~]$
Utilice el comando para cerrar sesión en el sistema remoto.exit
[developer1@hosta ~]$ exit
logout
Connection to hosta closed.
[developer1@host ~]$
El siguiente comando inicia sesión en el servidor remoto con el nombre de usuario. El sistema remoto le solicita que se autentique con la contraseña del usuario.sshhostadeveloper2developer2
[developer1@host ~]$ ssh developer2@hosta
developer2@hosta's password: shadowman
...output omitted...
[developer2@hosta ~]$
El siguiente comando ejecuta el comando en el sistema remoto como usuario sin acceder al shell interactivo remoto.sshhostnamehostadeveloper2
[developer1@host ~]$ ssh developer2@hosta hostname
developer2@hosta's password: shadowman
hosta.lab.example.com
[developer1@host ~]$
Este comando muestra la salida en el terminal del sistema local.
Identificación de usuarios remotos
El comando muestra una lista de usuarios que están conectados actualmente al sistema. También muestra la ubicación remota del sistema y los comandos que ejecutó el usuario.w
[developer1@host ~]$ ssh developer1@hosta
developer1@hosta's password: redhat
[developer1@hosta ~]$ w -f
 16:13:38 up 36 min,  1 user,  load average: 0.00, 0.00, 0.00
USER     TTY      FROM             LOGIN@   IDLE   JCPU   PCPU WHAT
developer2   pts/0    172.25.250.10    16:13    7:30   0.01s  0.01s -bash
developer1   pts/1    172.25.250.10    16:24    3.00s  0.01s  0.00s w
[developer2@hosta ~]$
El resultado muestra que el usuario inició sesión en el sistema en el pseudo-terminal hoy desde el host con la dirección IP, y ha estado inactivo en un indicador de shell durante siete minutos y treinta segundos. El resultado también muestra que el usuario inició sesión en el sistema en el pseudoterminal y ha estado inactivo durante tres segundos después de ejecutar el comando.developer2016:13172.25.250.10developer11w
Claves de host SSH
SSH protege la comunicación a través del cifrado de clave pública. Cuando un cliente SSH se conecta a un servidor SSH, el servidor envía una copia de su clave pública al cliente antes de iniciar sesión. Esta clave ayuda a configurar un cifrado seguro para el canal de comunicación y a autenticar el sistema del cliente.
Cuando un usuario ejecuta el comando para conectarse a un servidor SSH, el comando busca una copia de la clave pública del servidor en su archivo de hosts conocidos locales. La clave puede estar preconfigurada en el archivo o el usuario puede tener el archivo que contiene la clave en su directorio principal.ssh/etc/ssh/ssh_known_hosts~/.ssh/known_hosts
Si el cliente tiene una copia de la clave, el comando compara la clave de los archivos de servidor de hosts conocidos con la clave que recibió. Si las claves no coinciden, el cliente asume que el tráfico de red al servidor está en peligro y solicita al usuario que confirme si desea continuar con la conexión.ssh
Comprobación estricta de claves de host
El parámetro se establece en el archivo específico del usuario, o en el archivo de todo el sistema, o especificando la opción del comando.StrictHostKeyChecking~/.ssh/config/etc/ssh/ssh_config-o StrictHostKeyChecking=ssh
●	Si el parámetro se establece en , el comando siempre aborta la conexión SSH si las claves públicas no coinciden.StrictHostKeyCheckingyesssh
●	Si el parámetro se establece en , el comando habilita la conexión y agrega la clave del host de destino al archivo.StrictHostKeyCheckingnossh~/.ssh/known_hosts
Si la clave SSH del host de destino cambió desde la última vez que se conectó a ella, el comando solicita confirmación para iniciar sesión y aceptar la nueva clave.ssh
Si acepta la nueva clave, se guarda una copia de la clave pública en el archivo para confirmar automáticamente la identidad del servidor en las conexiones posteriores.~/.ssh/known_hosts
Nota
Red Hat recomienda establecer el parámetro en el archivo específico del usuario o en el archivo de todo el sistema, de modo que el comando siempre aborte la conexión SSH si las claves públicas no coinciden.StrictHostKeyCheckingyes~/.ssh/config/etc/ssh/ssh_configssh
[developer1@host ~]$ ssh hostb
The authenticity of host 'hostb (172.25.250.12)' can't be established.
ECDSA key fingerprint is SHA256:qaS0PToLrqlCO2XGklA0iY7CaP7aPKimerDoaUkv720.
Are you sure you want to continue connecting (yes/no)? no
[developer1@host ~]$
Compruebe la huella digital de la clave de host SSH del servidor de destino mediante el comando. En este ejemplo, el comando se ejecuta en el servidor de destino.ssh-keygenssh-keygenhostb
El comando muestra la huella digital de la clave para que pueda compararla con la salida del comando y verificar que la clave sea válida. Utilice las opciones para enumerar la huella digital de clave pública en el archivo de clave pública predeterminado del host.ssh-keygenssh-lf
Debido a que no puede conectarse a través de SSH, debe verificar la huella digital de la clave del host de destino iniciando sesión localmente. Use un método de comunicación fuera de banda para compartir claves públicas, como una llamada telefónica o una videoconferencia.
[developer1@hostb ~]$ ssh-keygen -lf /etc/ssh/ssh_host_ecdsa_key.pub
256 SHA256:qaS0PToLrqlCO2XGklA0iY7CaP7aPKimerDoaUkv720 root@server (ECDSA)
Después de verificar la clave en el host de destino, puede aceptar la clave y conectarse al host de destino.
[developer1@host ~]$ ssh hostb
The authenticity of host 'hostb (172.25.250.12)' can't be established.
ECDSA key fingerprint is SHA256:qaS0PToLrqlCO2XGklA0iY7CaP7aPKimerDoaUkv720.
Are you sure you want to continue connecting (yes/no)? yes
Warning: Permanently added 'hostb,172.25.250.12' (ECDSA) to the list of known hosts.
developer1@hostb's password: redhat
...output omitted...
[developer1@hostb ~]$
Gestión de claves de hosts conocidos SSH
La información sobre los sistemas remotos conocidos y sus claves se almacena en cualquiera de los siguientes lugares:
●	El archivo de todo el sistema./etc/ssh/ssh_known_hosts
●	El archivo en el directorio de inicio de cada usuario.~/.ssh/known_hosts
El archivo es un archivo de todo el sistema que almacena las claves públicas de los hosts que el sistema conoce. Debe crear y administrar este archivo, ya sea manualmente o mediante algún método automatizado, como el uso de Ansible o un script que use la utilidad./etc/ssh/ssh_known_hostsssh-keyscan
La clave pública de un servidor puede haber cambiado porque la clave se perdió debido a una falla en el disco duro o se reemplazó por alguna razón legítima. En ese caso, para iniciar sesión correctamente en ese sistema, el archivo debe modificarse para reemplazar la entrada de clave pública anterior con la nueva clave pública./etc/ssh/ssh_known_hosts
Si se conecta a un sistema remoto y la clave pública de ese sistema no está en el archivo, el cliente SSH busca la clave en el archivo./etc/ssh/ssh_known_hosts~/.ssh/known_hosts
Cada entrada de clave de host conocida consta de una línea que contiene tres campos:
●	El primer campo es la lista de nombres de host y direcciones IP que comparten la clave pública.
●	El segundo campo es el algoritmo de cifrado que se utiliza para la clave.
●	El último campo es la clave en sí.
[developer1@host ~]$ cat ~/.ssh/known_hosts
server1 ssh-ed25519 AAAAC3NzaC1lZDI1NTE5AAAAIOmiLKMExRnsS1g7OTxMsOmgHuUSGQBUxHhuUGcv19uT
server1 ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAABgQC8WDOooY+rh6NPa9yhLsNQXBqcQknTL/WSd3zPvHLLd7KaC4IiEUxnwbfLBit8tRcirbQFxO20Am
...output omitted...
Solución de problemas de clave de host
Si la dirección IP o la clave pública del sistema remoto cambian, e intenta conectarse a ese sistema nuevamente a través de SSH, entonces el cliente SSH detecta que la entrada de clave para ese sistema en el archivo ya no es válida. Un mensaje de advertencia indica que la identificación del host remoto ha cambiado y que debe modificar la entrada de clave.~/.ssh/known_hosts
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
@    WARNING: REMOTE HOST IDENTIFICATION HAS CHANGED!     @
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
IT IS POSSIBLE THAT SOMEONE IS DOING SOMETHING NASTY!
Someone could be eavesdropping on you right now (man-in-the-middle attack)!
It is also possible that a host key has just been changed.
The fingerprint for the ECDSA key sent by the remote host is
SHA256:hxttxb/qVi1/ycUU2wXF6mfGH++Ya7WYZv0r+tIkg4I.
Please contact your system administrator.
Add correct host key in /home/user/.ssh/known_hosts to get rid of this message.
Offending ECDSA key in /home/user/.ssh/known_hosts:12
ECDSA host key for server1.example.com has changed and you have requested strict checking.
Host key verification failed.
Si no sabe por qué cambió la clave, verifique la nueva huella digital de la clave, ya que esta clave podría ser un ataque real a su red. Utilice un método fuera de banda para la comprobación, como hablar con el administrador del sistema del sistema de destino.
Si sabe por qué cambió la clave, como un cambio de dirección IP, resuelva este problema quitando la entrada de clave relevante del archivo y luego vuelva a conectarse al sistema para recibir la nueva entrada de clave.~/.ssh/known_hosts
El número de línea de la entrada de clave relevante se especifica en el mensaje de advertencia. También puede buscar y eliminar la entrada de clave relevante ejecutando el siguiente comando:
[developer1@host ~]$ ssh-keygen -R remotesystemname -f ~/.ssh/known_hosts
# Host remotesystemname found: line 12
/home/user/.ssh/known_hosts updated.
Original contents retained as /home/user/.ssh/known_hosts.old
Referencias
ssh(1), (1) y (1) páginas de manualwhostname
Para obtener más información, consulte Uso de comunicaciones seguras entre dos sistemas con OpenSSH en https://access.redhat.com/documentation/en-us/red_hat_enterprise_linux/9/html-single/securing_networks/assembly_using-secure-communications-between-two-systems-with-openssh_securing-networks
Ejercicio guiado: Acceso a la línea de comandos remota
Inicie sesión en un sistema remoto como diferentes usuarios y ejecute comandos.
Resultados
●	Inicie sesión en un sistema remoto.
●	Ejecute comandos con el shell seguro OpenSSH.
Como usuario de la máquina, use el comando para preparar el sistema para este ejercicio.studentworkstationlab
Este comando prepara el entorno y garantiza que todos los recursos necesarios estén disponibles.
[student@workstation ~]$ lab start ssh-access
Instrucciones
Desde , abra una sesión SSH en la máquina como usuario.workstationserverastudent
[student@workstation ~]$ ssh student@servera
1.	[student@servera ~]$
Abra una sesión SSH en la máquina como usuario. Acepte la clave de host. Utilícela como contraseña cuando se le solicite la contraseña del usuario en la máquina.serverbstudentstudentstudentserverb
[student@servera ~]$ ssh student@serverb
The authenticity of host 'serverb (172.25.250.11)' can't be established.
ED25519 key fingerprint is SHA256:h/hEJa/anxp6AP7BmB5azIPVbPNqieh0oKi4KWOTK80.
This key is not known by any other names
Are you sure you want to continue connecting (yes/no/[fingerprint])? yes
Warning: Permanently added 'serverb' (ED25519) to the list of known hosts.
student@serverb's password: student
...output omitted...
2.	[student@serverb ~]$
El comando registra la clave de host en el archivo de la máquina para identificar la máquina. El usuario inició la conexión SSH desde la máquina. Si el archivo no existe, se crea junto con la nueva entrada en él. El comando no se ejecuta correctamente si el host remoto parece tener una clave diferente de la clave grabada.ssh/home/student/.ssh/known_hostsserveraserverbstudentservera/home/student/.ssh/known_hostsssh
Muestre los usuarios que han iniciado sesión actualmente en la máquina. El usuario inicia sesión en el sistema desde el host con una dirección IP de , que es la máquina en la red del aula.serverbstudent172.25.250.10servera
[student@serverb ~]$ w --from
03:39:04 up 16 min,  1 user,  load average: 0.00, 0.00, 0.00
USER     TTY      FROM             LOGIN@   IDLE   JCPU   PCPU WHAT
3.	student  pts/0    172.25.250.10    20:40    1.00s  0.01s  0.00s w --from
Salga del shell del usuario en la máquina.studentserverb
[student@serverb ~]$ exit
logout
Connection to serverb closed.
4.	[student@servera ~]$
Abra una sesión SSH en la máquina como usuario. Úselo como contraseña del usuario. El comando no le pidió que aceptara la clave de host, porque se encontró entre los hosts conocidos. Si la identidad de la máquina cambia, OpenSSH le pedirá que impugne la nueva clave de host.serverbrootredhatrootserverb
[student@servera ~]$ ssh root@serverb
root@serverb's password: redhat
...output omitted...
5.	[root@serverb ~]#
Ejecute el comando para mostrar los usuarios que han iniciado sesión actualmente en la máquina. El resultado indica que el usuario ha iniciado sesión en el sistema desde el host con una dirección IP de , que es la máquina de la red del aula.wserverbroot172.25.250.10servera
[root@serverb ~]# w --from
03:46:05 up 23 min,  1 user,  load average: 0.00, 0.00, 0.00
USER     TTY      FROM             LOGIN@   IDLE   JCPU   PCPU WHAT
6.	root     pts/0    172.25.250.10    20:44    1.00s  0.02s  0.00s w --from
Salga del shell del usuario en la máquina.rootserverb
[root@serverb ~]# exit
logout
Connection to serverb closed.
7.	[student@servera ~]$
8.	Retire el archivo de la máquina. Esta operación hace que se pierdan las identidades grabadas de los sistemas remotos./home/student/.ssh/known_hostsserverassh
[student@servera ~]$ rm /home/student/.ssh/known_hosts
Las claves de host pueden cambiar por razones legítimas: tal vez la máquina remota se reemplazó debido a una falla de hardware o se reinstaló la máquina remota. Por lo general, es aconsejable eliminar la entrada de clave solo para el host en particular en el archivo. Dado que este archivo en particular solo tiene una entrada, puede eliminar todo el archivo.known_hostsknown_hosts
Abra una sesión SSH en la máquina como usuario. Si se le solicita, acepte la clave de host. Utilícelo cuando se le solicite la contraseña del usuario en la máquina.serverbstudentstudentstudentserverb
[student@servera ~]$ ssh student@serverb
The authenticity of host 'serverb (172.25.250.11)' can't be established.
ED25519 key fingerprint is SHA256:h/hEJa/anxp6AP7BmB5azIPVbPNqieh0oKi4KWOTK80.
This key is not known by any other names
Are you sure you want to continue connecting (yes/no/[fingerprint])? yes
Warning: Permanently added 'serverb' (ED25519) to the list of known hosts.
student@serverb's password: student
...output omitted...
9.	[student@serverb ~]$
El comando solicitó su confirmación para aceptar o rechazar la clave de host, porque no pudo encontrar una para el host remoto.ssh
Salga del shell del usuario en la máquina y confirme que existe una nueva instancia del archivo en la máquina.studentserverbknown_hostsservera
[student@serverb ~]$ exit
logout
Connection to serverb closed.
[student@servera ~]$ ls -l /home/student/.ssh/known_hosts
10.	-rw-------. 1 student student 819 Mar 24 03:47 /home/student/.ssh/known_hosts
Confirme que la nueva instancia del archivo tiene la clave de host de la máquina. La siguiente salida de comando es un ejemplo; su salida puede diferir.known_hostsserverbworkstation
[student@servera ~]$ cat /home/student/.ssh/known_hosts
...output omitted...
serverb ecdsa-sha2-nistp256 AAAAB3NzaC1yc2EAAAADAQ...
11.	...output omitted...
Ejecute el comando de forma remota en la máquina sin acceder al shell interactivo.hostnameserverb
[student@servera ~]$ ssh student@serverb hostname
student@serverb's password: student
12.	serverb.lab.example.com
Regrese al sistema como usuario.workstationstudent
[student@servera ~]$ exit
logout
13.	Connection to servera closed.
Terminar
En la máquina, cambie al directorio principal del usuario y utilice el comando para completar este ejercicio. Este paso es importante para garantizar que los recursos de ejercicios anteriores no afecten los próximos ejercicios.workstationstudentlab
[student@workstation ~]$ lab finish ssh-access
Configuración de la autenticación basada en claves SSH
Objetivos
●	Configure una cuenta de usuario para usar la autenticación basada en claves para iniciar sesión en sistemas remotos de forma segura sin contraseña.
Autenticación basada en claves SSH
Puede configurar su cuenta para el acceso sin contraseña a servidores SSH que habilitaron la autenticación basada en claves, que se basa en el cifrado de clave pública (PKI).
Para preparar su cuenta, genere un par de archivos de claves relacionados criptográficamente. Una clave es privada y solo usted la tiene. La segunda clave es su clave pública relacionada, que no es secreta. La clave privada actúa como credencial de autenticación y debe almacenarse de forma segura. La clave pública se copia en su cuenta en servidores a los que accederá de forma remota y verifica el uso de su clave privada.
Cuando inicia sesión en su cuenta en un servidor remoto, el servidor remoto utiliza su clave pública para cifrar un mensaje de desafío y enviarlo a su cliente SSH. A continuación, el cliente SSH debe demostrar que puede descifrar este mensaje, lo que demuestra que tiene la clave privada asociada. Si esta verificación se realiza correctamente, su solicitud es de confianza y se le concede acceso sin dar una contraseña.
Las contraseñas se pueden aprender o robar fácilmente, pero las claves privadas almacenadas de forma segura son más difíciles de comprometer.
Generación de claves SSH
Utilice el comando para crear un par de claves. De forma predeterminada, el comando guarda las claves privadas y públicas en los archivos and, pero puede especificar un nombre diferente.ssh-keygenssh-keygen~/.ssh/id_rsa~/.ssh/id_rsa.pub
[user@host ~]$ ssh-keygen
Generating public/private rsa key pair.
Enter file in which to save the key (/home/user/.ssh/id_rsa): Enter
Created directory '/home/user/.ssh'.
Enter passphrase (empty for no passphrase): Enter
Enter same passphrase again: Enter
Your identification has been saved in /home/user/.ssh/id_rsa.
Your public key has been saved in /home/user/.ssh/id_rsa.pub.
The key fingerprint is:
SHA256:vxutUNPio3QDCyvkYm1 user@host.lab.example.com
The key's randomart image is:
+---[RSA 2048]----+
|                 |
|   .     .       |
|  o o     o      |
| . = o   o .     |
|  o + = S E .    |
| ..O o + * +     |
|.+% O . + B .    |
|=*oO . . + *     |
|++.     . +.     |
+----[SHA256]-----+
Puede optar por proporcionar una frase de contraseña a , que se utiliza para cifrar su clave privada. Se recomienda usar una frase de contraseña, para que alguien no pueda usar su clave privada para acceder a ella. Si establece una frase de contraseña, debe introducir la frase de contraseña cada vez que utilice la clave privada. La frase de contraseña se usa localmente para descifrar su clave privada antes de usarla, a diferencia de su contraseña, que debe enviarse en texto sin cifrar a través de la red para su uso.ssh-keygen
Puede usar el administrador de claves localmente, que almacena en caché su frase de contraseña en el primer uso en una sesión de inicio de sesión y luego proporciona la frase de contraseña para todos los usos posteriores de la clave privada en la misma sesión de inicio de sesión. El comando se describe más adelante en esta sección.ssh-agentssh-agent
En el ejemplo siguiente, se crea una clave privada protegida por frase de contraseña con la clave pública.
[user@host ~]$ ssh-keygen -f .ssh/key-with-pass
Generating public/private rsa key pair.
Enter passphrase (empty for no passphrase): your_passphrase
Enter same passphrase again: your_passphrase
Your identification has been saved in .ssh/key-with-pass.
Your public key has been saved in .ssh/key-with-pass.pub.
The key fingerprint is:
SHA256:w3GGB7EyHUry4aOcNPKmhNKS7dl1YsMVLvFZJ77VxAo user@host.lab.example.com
The key's randomart image is:
+---[RSA 2048]----+
|    . + =.o ...  |
|     = B XEo o.  |
|  . o O X =....  |
| = = = B = o.    |
|= + * * S .      |
|.+ = o + .       |
|  + .            |
|                 |
|                 |
+----[SHA256]-----+
La opción de comando especifica los archivos en los que se guardarán las claves. En el ejemplo anterior, el comando guardó el par de claves en los archivos and.ssh-keygen-fssh-keygen/home/user/.ssh/key-with-pass/home/user/.ssh/key-with-pass.pub
Advertencia
Durante el uso de nuevos comandos, si especifica el nombre de un par existente de archivos de claves, incluido el par predeterminado, sobrescribe ese par de claves existente, que solo se puede restaurar si tiene una copia de seguridad de esos archivos. Al sobrescribir un par de claves, se pierde la clave privada original que se requiere para acceder a las cuentas que configuró con la clave pública correspondiente en servidores remotos.ssh-keygenid_rsa
Si no puede restaurar su clave privada local, perderá el acceso a los servidores remotos hasta que distribuya su nueva clave pública para reemplazar la clave pública anterior en cada servidor. Cree siempre copias de seguridad de sus claves, si se sobrescriben o se pierden.
Las claves SSH generadas se almacenan de forma predeterminada en el subdirectorio de su directorio de inicio. Para funcionar correctamente, la clave privada debe ser legible y grabable solo por el usuario al que pertenece (permisos octales 600). La clave pública no es segura y cualquier persona en el sistema también podría leerla (permisos octales 644)..ssh
Compartir la clave pública
Para configurar la cuenta remota para el acceso, copie la clave pública en el sistema remoto. El comando copia la clave pública del par de claves SSH en el sistema remoto. Puede especificar una clave pública específica con el comando o utilizar el archivo predeterminado.ssh-copy-idssh-copy-id~/.ssh/id_rsa.pub
[user@host ~]$ ssh-copy-id -i .ssh/key-with-pass.pub user@remotehost
/usr/bin/ssh-copy-id: INFO: Source of key(s) to be installed: "/home/user/.ssh/id_rsa.pub"
/usr/bin/ssh-copy-id: INFO: attempting to log in with the new key(s), to filter out any that are already installed
/usr/bin/ssh-copy-id: INFO: 1 key(s) remain to be installed -- if you are prompted now it is to install the new keys
user@remotehost's password: redhat
Number of key(s) added: 1

Now try logging into the machine, with:   "ssh 'user@remotehost'"
and check to make sure that only the key(s) you wanted were added.
Después de colocar la clave pública, pruebe el acceso remoto, con la clave privada correspondiente. Si la configuración es correcta, accede a su cuenta en el sistema remoto sin que se le pida la contraseña de su cuenta. Si no especifica un archivo de clave privada, el comando utiliza el archivo predeterminado si existe.ssh~/.ssh/id_rsa
Importante
Si configuró una frase de contraseña para proteger su clave privada, SSH solicita la frase de contraseña en el primer uso. Sin embargo, si la autenticación de clave se realiza correctamente, no se le pedirá la contraseña de su cuenta.
[user@host ~]$ ssh -i .ssh/key-with-pass user@remotehost
Enter passphrase for key '.ssh/key-with-pass': your_passphrase
...output omitted...
[user@remotehost ~]$
Autenticación no interactiva con el Administrador de claves
Si cifra su clave privada con una frase de contraseña, debe ingresar la frase de contraseña cada vez que use la clave privada para la autenticación. Sin embargo, puede configurar el administrador de claves para almacenar en caché las frases de contraseña. Luego, cada vez que use SSH, el administrador de claves le proporcionará la frase de contraseña. El uso de un administrador de claves es conveniente y puede mejorar la seguridad al proporcionar menos oportunidades para que otras personas observen su frase de contraseña.ssh-agentssh-agent
El administrador de claves se puede configurar para que se inicie automáticamente cuando inicie sesión. El entorno de escritorio gráfico de GNOME puede iniciar y configurar automáticamente el administrador de claves. Si inicia sesión en un entorno de texto, debe iniciar el programa manualmente para cada sesión. Inicie el programa con el siguiente comando:ssh-agentssh-agentssh-agentssh-agent
[user@host ~]$ eval $(ssh-agent)
Agent pid 10155
Cuando se inicia manualmente el comando, se ejecutan comandos de shell adicionales para establecer las variables de entorno necesarias para su uso con el comando. Puede cargar manualmente la frase de contraseña de la clave privada en el administrador de claves mediante el comando.ssh-agentssh-addssh-add
Los siguientes comandos de ejemplo agregan las claves privadas del archivo predeterminado y, a continuación, de un archivo:ssh-add~/.ssh/id_rsa~/.ssh/key-with-pass
[user@host ~]$ ssh-add
Identity added: /home/user/.ssh/id_rsa (user@host.lab.example.com)
[user@host ~]$ ssh-add .ssh/key-with-pass
Enter passphrase for .ssh/key-with-pass: your_passphrase
Identity added: .ssh/key-with-pass (user@host.lab.example.com)
El siguiente comando utiliza el archivo de clave privada predeterminado para acceder a su cuenta en un servidor SSH remoto:ssh
[user@host ~]$ ssh user@remotehost
Last login: Mon Mar 14 06:51:36 2022 from host.example.com
[user@remotehost ~]$
El siguiente comando utiliza la clave privada para acceder a su cuenta en el servidor remoto. La clave privada de este ejemplo se descifró previamente y se agregó al administrador de claves; por lo tanto, el comando no le solicita la frase de contraseña para descifrar la clave privada.ssh~/.ssh/key-with-passssh-agentssh
[user@host ~]$ ssh -i .ssh/key-with-pass user@remotehost
Last login: Mon Mar 14 06:58:43 2022 from host.example.com
[user@remotehost ~]$
Cuando cierra la sesión de una sesión que utilizó un administrador de claves, todas las frases de contraseña almacenadas en caché se borran de la memoria.ssh-agent
Solución de problemas básicos de conexión SSH
SSH puede parecer complejo cuando el acceso remoto con autenticación de par de claves no se realiza correctamente. El comando proporciona tres niveles de detalle con las opciones , , y , que proporcionan respectivamente información de depuración creciente durante el uso del comando.ssh-v-vv-vvvssh
En el ejemplo siguiente se muestra la información que se proporciona cuando se usa la opción de nivel de detalle más bajo:
[user@host ~]$ ssh -v user@remotehost
OpenSSH_8.7p1, OpenSSL 3.0.1 14 Dec 2021  
debug1: Reading configuration data /etc/ssh/ssh_config  
debug1: Reading configuration data /etc/ssh/ssh_config.d/01-training.conf
debug1: /etc/ssh/ssh_config.d/01-training.conf line 1: Applying options for *
debug1: Reading configuration data /etc/ssh/ssh_config.d/50-redhat.conf
...output omitted...
debug1: Connecting to remotehost [192.168.1.10] port 22.  
debug1: Connection established.
...output omitted...
debug1: Authenticating to remotehost:22 as 'user'  
...output omitted...
debug1: Authentications that can continue: publickey,gssapi-keyex,gssapi-with-mic,password  
...output omitted...
debug1: Next authentication method: publickey  
debug1: Offering public key: /home/user/.ssh/id_rsa RSA SHA256:hDVJjD7xrUjXGZVRJQixxFV6NF/ssMjS6AuQ1+VqUc4  
debug1: Server accepts key: /home/user/.ssh/id_rsa RSA SHA256:hDVJjD7xrUjXGZVRJQixxFV6NF/ssMjS6AuQ1+VqUc4  
Authenticated to remotehost ([192.168.1.10]:22) using "publickey".
...output omitted...
[user@remotehost ~]$
 	Versiones OpenSSH y OpenSSL.
 	Archivos de configuración de OpenSSH.
 	Conexión al host remoto.
 	Intentar autenticar al usuario en el host remoto.
 	Métodos de autenticación que permite el host remoto.
 	Intentar autenticar al usuario mediante la clave SSH.
 	Usar el archivo de clave para autenticarse./home/user/.ssh/id_rsa
 	Los hosts remotos aceptan la clave SSH.
Si falla un método de autenticación intentado, un servidor SSH remoto recurre a otros métodos de autenticación permitidos, hasta que se prueben todos los métodos disponibles. En el siguiente ejemplo se muestra un acceso remoto con una clave SSH que falla, pero luego el servidor SSH ofrece autenticación de contraseña que se realiza correctamente.
[user@host ~]$ ssh -v user@remotehost
...output omitted...
debug1: Next authentication method: publickey
debug1: Offering public key: /home/user/.ssh/id_rsa RSA SHA256:bsB6l5R184zvxNlrcRMmYd32oBkU1LgQj09dUBZ+Z/k
debug1: Authentications that can continue: publickey,gssapi-keyex,gssapi-with-mic,password
...output omitted...
debug1: Next authentication method: password
user@remotehost's password: password
Authenticated to remotehost ([172.25.250.10]:22) using "password".
...output omitted...
[user@remotehost ~]$
Configuración del cliente SSH
Puede crear el archivo para preconfigurar las conexiones SSH. Dentro del archivo de configuración, puede especificar parámetros de conexión como usuarios, claves y puertos para hosts específicos. Este archivo elimina la necesidad de especificar manualmente los parámetros de comando cada vez que se conecta a un host. Considere el siguiente archivo, que preconfigura dos conexiones de host con diferentes usuarios y claves:~/.ssh/config~/.ssh/config
[user@host ~]$ cat ~/.ssh/config
host servera
     HostName                      servera.example.com
     User                          usera
     IdentityFile                  ~/.ssh/id_rsa_servera

host serverb
     HostName                      serverb.example.com
     User                          userb
     IdentityFile                  ~/.ssh/id_rsa_serverb
Referencias
ssh-keygen(1), (1), (1) y (1) páginas de manualssh-copy-idssh-agentssh-add
Ejercicio guiado: Configuración de la autenticación basada en claves SSH
Configure un usuario para que utilice la autenticación basada en claves para SSH.
Resultados
●	Genere un par de claves SSH sin protección de frase de contraseña.
●	Genere un par de claves SSH con protección de frase de contraseña.
●	Autentique con claves SSH protegidas con y sin frase de contraseña.
Como usuario de la máquina, use el comando para preparar el sistema para este ejercicio.studentworkstationlab
Este comando prepara el entorno y garantiza que todos los recursos necesarios estén disponibles.
[student@workstation ~]$ lab start ssh-configure
Instrucciones
Inicie sesión en la máquina como usuario.serverbstudent
[student@workstation ~]$ ssh student@serverb
...output omitted...
1.	[student@serverb ~]$
Cambie al usuario en la máquina. Úselo como contraseña.operator1serverbredhat
[student@serverb ~]$ su - operator1
Password: redhat
2.	[operator1@serverb ~]$
Genere un conjunto de claves SSH. No introduzca una frase de contraseña.
[operator1@serverb ~]$ ssh-keygen
Generating public/private rsa key pair.
Enter file in which to save the key (/home/operator1/.ssh/id_rsa): Enter
Created directory '/home/operator1/.ssh'.
Enter passphrase (empty for no passphrase): Enter
Enter same passphrase again: Enter
Your identification has been saved in /home/operator1/.ssh/id_rsa.
Your public key has been saved in /home/operator1/.ssh/id_rsa.pub.
The key fingerprint is:
SHA256:JainiQdnRosC+xXh operator1@serverb.lab.example.com
The key's randomart image is:
+---[RSA 3072]----+
|E+*+ooo .        |
|.= o.o o .       |
|o.. = . . o      |
|+. + * . o .     |
|+ = X . S +      |
| + @ +   = .     |
|. + =   o        |
|.o . . . .       |
|o     o..        |
3.	+----[SHA256]-----+
Envíe la clave pública del par de claves SSH al usuario en la máquina, con la contraseña.operator1serveraredhat
[operator1@serverb ~]$ ssh-copy-id operator1@servera
/usr/bin/ssh-copy-id: INFO: Source of key(s) to be installed: "/home/operator1/.ssh/id_rsa.pub"
The authenticity of host 'servera (172.25.250.10)' can't be established.
ED25519 key fingerprint is SHA256:h/hEJa/anxp6AP7BmB5azIPVbPNqieh0oKi4KWOTK80.
This key is not known by any other names
Are you sure you want to continue connecting (yes/no/[fingerprint])? yes
/usr/bin/ssh-copy-id: INFO: attempting to log in with the new key(s), to filter out any that are already installed
/usr/bin/ssh-copy-id: INFO: 1 key(s) remain to be installed -- if you are prompted now it is to install the new keys
operator1@servera's password: redhat

Number of key(s) added: 1

Now try logging in to the machine, with:   "ssh 'operator1@servera'"
4.	and check to make sure that only the key(s) you wanted were added.
Ejecute el comando en el equipo de forma remota mediante el comando sin tener acceso al shell interactivo remoto.hostnameserverassh
[operator1@serverb ~]$ ssh operator1@servera hostname
5.	servera.lab.example.com
El comando anterior no le solicita una contraseña, ya que utiliza la clave privada sin frase de contraseña en la clave pública exportada para autenticarse como usuario en la máquina.sshoperator1servera
Este enfoque no es seguro, ya que cualquier persona que tenga acceso al archivo de clave privada puede iniciar sesión en la máquina como usuario.serveraoperator1
En el siguiente paso de este ejercicio, hará que su clave privada sea más segura cifrándola y protegiendo el acceso a ella agregando una frase de contraseña.
6.	Genere otro conjunto de claves SSH con el nombre predeterminado y sin una frase de contraseña, y sobrescriba los archivos de claves SSH generados anteriormente. Intente conectarse a la máquina utilizando las nuevas claves SSH. El comando solicita una contraseña, porque no puede autenticarse con la clave SSH. Vuelva a ejecutar el comando con la opción (detallado) para verificarlo.serverasshssh-v
Envíe la nueva clave pública del par de claves SSH al usuario de la máquina para reemplazar la clave pública anterior. Utilícelo como contraseña para el usuario en la máquina. Ejecute el comando en el equipo de forma remota mediante el comando sin acceder al shell interactivo remoto para comprobar que funciona de nuevo.operator1serveraredhatoperator1serverahostnameserverassh
Nuevamente, genere otro conjunto de claves SSH con el nombre predeterminado y sin una frase de contraseña, y sobrescriba los archivos de claves SSH generados anteriormente.
[operator1@serverb ~]$ ssh-keygen
Generating public/private rsa key pair.
Enter file in which to save the key (/home/operator1/.ssh/id_rsa): Enter
/home/operator1/.ssh/id_rsa already exists.
Overwrite (y/n)? y
Enter passphrase (empty for no passphrase): Enter
Enter same passphrase again: Enter
Your identification has been saved in /home/operator1/.ssh/id_rsa
Your public key has been saved in /home/operator1/.ssh/id_rsa.pub
	...output omitted...
Intente conectarse a la máquina utilizando las nuevas claves SSH. El comando solicita una contraseña, porque no puede autenticarse con la clave SSH. Presione Ctrl+c para salir del comando cuando solicite una contraseña. Vuelva a ejecutar el comando con la opción (detallado) para verificarlo. Presione nuevamente Ctrl+c para salir del comando cuando solicite una contraseña.serverasshsshssh-vssh
[operator1@serverb ~]$ ssh operator1@servera hostname
operator1@servera's password: ^C
[operator1@serverb ~]$ ssh -v operator1@servera hostname
OpenSSH_8.7p1, OpenSSL 3.0.1 14 Dec 2021
debug1: Reading configuration data /etc/ssh/ssh_config
debug1: Reading configuration data /etc/ssh/ssh_config.d/01-training.conf
...output omitted...
debug1: Next authentication method: publickey
debug1: Offering public key: /home/operator1/.ssh/id_rsa RSA SHA256:ad597Zf64xckV26xht8bjQbzqSPuOXQPXksGEWVsP80
debug1: Authentications that can continue: publickey,gssapi-keyex,gssapi-with-mic,password
debug1: Trying private key: /home/operator1/.ssh/id_dsa
debug1: Trying private key: /home/operator1/.ssh/id_ecdsa
debug1: Trying private key: /home/operator1/.ssh/id_ecdsa_sk
debug1: Trying private key: /home/operator1/.ssh/id_ed25519
debug1: Trying private key: /home/operator1/.ssh/id_ed25519_sk
debug1: Trying private key: /home/operator1/.ssh/id_xmss
debug1: Next authentication method: password
	operator1@servera's password: ^C
Envíe la nueva clave pública del par de claves SSH al usuario de la máquina para reemplazar la clave pública anterior. Utilícelo como contraseña para el usuario en la máquina. Ejecute el comando en el equipo de forma remota mediante el comando sin acceder al shell interactivo remoto para comprobar que funciona de nuevo.operator1serveraredhatoperator1serverahostnameserverassh
[operator1@serverb ~]$ ssh-copy-id operator1@servera
...output omitted...
operator1@servera's password: redhat

Number of key(s) added: 1

Now try logging in to the machine, with:   "ssh 'operator1@servera'"
and check to make sure that only the key(s) you wanted were added.
[operator1@serverb ~]$ ssh operator1@servera hostname
	servera.lab.example.com
Genere otro conjunto de claves SSH con protección de frase de contraseña. Guarde la clave como . Úselo como frase de contraseña de la clave privada./home/operator1/.ssh/key2redhatpass
[operator1@serverb ~]$ ssh-keygen -f .ssh/key2
Generating public/private rsa key pair.
Enter passphrase (empty for no passphrase): redhatpass
Enter same passphrase again: redhatpass
Your identification has been saved in .ssh/key2.
Your public key has been saved in .ssh/key2.pub.
The key fingerprint is:
SHA256:OCtCjfPm5QrbPBgqb operator1@serverb.lab.example.com
The key's randomart image is:
+---[RSA 3072]----+
|O=X*             |
|OB=.             |
|E*o.             |
|Booo   .         |
|..= . o S        |
| +.o   o         |
|+.oo+ o          |
|+o.O.+           |
|+ . =o.          |
7.	+----[SHA256]-----+
Envíe la clave pública del par de claves protegidas por frase de contraseña al usuario en la máquina. El comando no le solicita una contraseña, ya que utiliza la clave pública de la clave privada sin frase de contraseña que exportó a la máquina en el paso anterior.operator1serveraservera
[operator1@serverb ~]$ ssh-copy-id -i .ssh/key2.pub operator1@servera
/usr/bin/ssh-copy-id: INFO: Source of key(s) to be installed: ".ssh/key2.pub"
/usr/bin/ssh-copy-id: INFO: attempting to log in with the new key(s), to filter out any that are already installed
/usr/bin/ssh-copy-id: INFO: 1 key(s) remain to be installed -- if you are prompted now it is to install the new keys

Number of key(s) added: 1

Now try logging in to the machine, with:   "ssh 'operator1@servera'"
8.	and check to make sure that only the key(s) you wanted were added.
Ejecute el comando en el equipo de forma remota mediante el comando. Utilice la clave como archivo de identidad. Especifique como frase de contraseña, que estableció para la clave privada en el paso anterior.hostnameserverassh/home/operator1/.ssh/key2redhatpass
El comando le solicita la frase de contraseña que usó para proteger la clave privada del par de claves SSH. Si un atacante obtiene acceso a la clave privada, entonces el atacante no puede usarla para acceder a otros sistemas, porque una frase de contraseña protege la clave privada en sí. El comando usa una frase de contraseña diferente a la del usuario en la máquina, por lo que los usuarios deben conocer ambas frases de contraseña.sshoperator1servera
[operator1@serverb ~]$ ssh -i .ssh/key2 operator1@servera hostname
Enter passphrase for key '.ssh/key2': redhatpass
9.	servera.lab.example.com
Utilice el programa, como en el siguiente paso, para evitar escribir interactivamente la frase de contraseña al iniciar sesión con SSH. El uso del programa es más conveniente y más seguro cuando los administradores inician sesión en sistemas remotos con regularidad.ssh-agentssh-agent
Ejecute el programa en su shell y agregue la clave privada protegida por frase de contraseña () del par de claves SSH a la sesión de shell.ssh-agentBash/home/operator1/.ssh/key2
El comando inicia el programa y configura la sesión de shell para usarlo. Luego, usa el comando para proporcionar la clave privada desbloqueada al programa.ssh-agentssh-addssh-agent
[operator1@serverb ~]$ eval $(ssh-agent)
Agent pid 1729
[operator1@serverb ~]$ ssh-add .ssh/key2
Enter passphrase for .ssh/key2: redhatpass
10.	Identity added: .ssh/key2 (operator1@serverb.lab.example.com)
Ejecute el comando en la máquina de forma remota sin acceder a un shell interactivo remoto. Utilice la clave como archivo de identidad.hostnameservera/home/operator1/.ssh/key2
El comando no le solicita que introduzca la frase de contraseña de forma interactiva.
[operator1@serverb ~]$ ssh -i .ssh/key2 operator1@servera hostname
11.	servera.lab.example.com
Abra otro terminal en la máquina e inicie sesión en la máquina como usuario.workstationserverbstudent
[student@workstation ~]$ ssh student@serverb
...output omitted...
12.	[student@serverb ~]$
13.	En la máquina, cambie al usuario e inicie sesión de forma remota en la máquina. Use la clave como archivo de identidad para autenticarse mediante las claves SSH.serverboperator1servera/home/operator1/.ssh/key2
Utilice el comando para cambiar al usuario. Úselo como contraseña para el usuario.suoperator1redhatoperator1
[student@serverb ~]$ su - operator1
Password: redhat
	[operator1@serverb ~]$
Inicie sesión en la máquina como usuario.serveraoperator1
El comando le solicita que ingrese la frase de contraseña de forma interactiva, ya que no invoca la conexión SSH desde el mismo shell donde inició el programa.ssh-agent
[operator1@serverb ~]$ ssh -i .ssh/key2 operator1@servera
Enter passphrase for key '.ssh/key2': redhatpass
...output omitted...
	[operator1@servera ~]$
14.	Salga y cierre todos los terminales adicionales y regrese a la máquina.workstation
Salga y cierre las ventanas adicionales de la terminal. Los comandos salen del shell del usuario; terminar la sesión de shell donde está activo; y regrese al shell del usuario en la máquina.exitoperator1ssh-agentstudentserverb
[operator1@servera ~]$ exit
logout
Connection to servera closed.
	[operator1@serverb ~]$
Regrese al sistema como usuario.workstationstudent
[operator1@serverb ~]$ exit
logout
[student@serverb ~]$ exit
logout
Connection to serverb closed.
	[student@workstation ~]$
Terminar
En la máquina, cambie al directorio principal del usuario y utilice el comando para completar este ejercicio. Este paso es importante para garantizar que los recursos de ejercicios anteriores no afecten los próximos ejercicios.workstationstudentlab
[student@workstation ~]$ lab finish ssh-configure
Personalizar la configuración del servicio OpenSSH
Objetivos
●	Deshabilite los inicios de sesión directos como y la autenticación basada en contraseña para el servicio OpenSSH.root
Configurar el servidor OpenSSH
El demonio proporciona el servicio OpenSSH. Puede configurar el servicio editando el archivo.sshd/etc/ssh/sshd_config
La configuración predeterminada del servidor OpenSSH funciona bien para muchos casos de uso. Sin embargo, es posible que desee realizar algunos cambios para fortalecer la seguridad de su sistema. Es posible que desee prohibir el inicio de sesión remoto directo en la cuenta y es posible que desee prohibir la autenticación basada en contraseña (a favor de la autenticación de clave privada SSH).root
Prohibir que el superusuario inicie sesión
Es una buena práctica prohibir el inicio de sesión directo en la cuenta de usuario desde sistemas remotos. Algunos riesgos de permitir el inicio de sesión directo como usuario incluyen los siguientes casos:rootroot
●	El nombre de usuario existe en todos los sistemas Linux de forma predeterminada, por lo que un atacante potencial solo necesita adivinar la contraseña, en lugar de una combinación válida de nombre de usuario y contraseña. Este escenario reduce la complejidad para un atacante.root
●	El usuario tiene privilegios ilimitados, por lo que su compromiso puede provocar el máximo daño al sistema.root
●	Desde una perspectiva de auditoría, puede ser difícil rastrear qué usuario autorizado inició sesión como usuario y realizó cambios. Si los usuarios deben iniciar sesión como usuarios normales y cambiar a la cuenta, puede ver un evento de registro para la responsabilidad.rootroot
Importante
A partir de Red Hat Enterprise Linux 9, el parámetro se establece en el valor de forma predeterminada. Este valor aplica el uso de autenticación basada en claves en lugar de contraseñas para iniciar sesión como usuario y reduce el riesgo de ataques de fuerza bruta.PermitRootLoginprohibit-passwordroot
El servidor OpenSSH utiliza la opción de configuración del archivo para permitir o prohibir a los usuarios iniciar sesión en el sistema como usuario, como en el siguiente ejemplo:PermitRootLogin/etc/ssh/sshd_configroot
PermitRootLogin yes
Si el parámetro se establece en el valor, cualquiera puede iniciar sesión como usuario de forma remota. Para evitar esta situación, establezca el valor en . Como alternativa, para evitar la autenticación basada en contraseña, pero para permitir la autenticación basada en clave privada para , establezca el parámetro en .PermitRootLoginyesrootnorootPermitRootLoginwithout-password
El servidor SSH () debe volver a cargarse para aplicar los cambios.sshd
[root@host ~]# systemctl reload sshd
Prohibir la autenticación basada en contraseña para SSH
Permitir solo inicios de sesión basados en claves privadas en la línea de comandos remota tiene ventajas:
●	Los atacantes no pueden usar ataques de adivinación de contraseñas para ingresar de forma remota a cuentas conocidas en el sistema.
●	Con las claves privadas protegidas por frase de contraseña, un atacante necesita tanto la frase de contraseña como una copia de la clave privada. Con las contraseñas, un atacante solo necesita la contraseña.
●	Al usar claves privadas protegidas por frase de contraseña con , la frase de contraseña se ingresa y expone con menos frecuencia, y el inicio de sesión es más conveniente para el usuario.ssh-agent
El servidor OpenSSH utiliza el parámetro en el archivo para controlar si los usuarios pueden usar la autenticación basada en contraseña para iniciar sesión en el sistema.PasswordAuthentication/etc/ssh/sshd_config
PasswordAuthentication yes
Con el valor predeterminado de para el parámetro en el archivo, el servidor SSH permite a los usuarios utilizar la autenticación basada en contraseña al iniciar sesión. El valor de for impide que los usuarios usen la autenticación basada en contraseña.yesPasswordAuthentication/etc/ssh/sshd_confignoPasswordAuthentication
Cada vez que cambie el archivo, debe volver a cargar el servicio para aplicar los cambios./etc/ssh/sshd_configsshd
Importante
Si desactiva la autenticación basada en contraseña para , debe asegurarse de que el archivo del usuario en el servidor remoto se rellene con su clave pública, para que pueda iniciar sesión.ssh~/.ssh/authorized_keys
Referencias
ssh(1), (5) páginas de manualsshd_config
Ejercicio guiado: Personalización de la configuración del servicio OpenSSH
Deshabilite los inicios de sesión directos y deshabilite la autenticación basada en contraseña para el servicio OpenSSH en uno de sus servidores.root
Resultados
●	Deshabilite los inicios de sesión directos como más .rootssh
●	Deshabilite la autenticación basada en contraseña para que los usuarios remotos se conecten a través de SSH.
Como usuario de la máquina, use el comando para preparar el sistema para este ejercicio.studentworkstationlab
Este comando garantiza que todos los recursos necesarios estén disponibles.
[student@workstation ~]$ lab start ssh-customize
Instrucciones
Desde , abra una sesión SSH en la máquina como usuario.workstationserverbstudent
[student@workstation ~]$ ssh student@serverb
1.	[student@serverb ~]$
Utilice el comando para cambiar al usuario en la máquina. Úselo como contraseña para el usuario.suoperator2serverbredhatoperator2
[student@serverb ~]$ su - operator2
Password: redhat
2.	[operator2@serverb ~]$
Utilice el comando para generar claves SSH. No introduzca ninguna frase de contraseña para las claves.ssh-keygen
[operator2@serverb ~]$ ssh-keygen
Generating public/private rsa key pair.
Enter file in which to save the key (/home/operator2/.ssh/id_rsa): Enter
Created directory '/home/operator2/.ssh'.
Enter passphrase (empty for no passphrase): Enter
Enter same passphrase again: Enter
Your identification has been saved in /home/operator2/.ssh/id_rsa.
Your public key has been saved in /home/operator2/.ssh/id_rsa.pub.
The key fingerprint is:
SHA256:LN5x1irX0OWxgyd/qhATNgZWOtLUj16EZkM1JHkCR+I operator2@serverb.lab.example.com
The key's randomart image is:
+---[RSA 3072]----+
|        *=+      |
|       = =O.o.   |
|      . Eo=B  o  |
|       o +.=o+ o |
|      . S..= =  |
|     . o +. + . |
|      . o + . . .|
|         o .   o |
|            ...  |
3.	+----[SHA256]-----+
Utilice el comando para enviar la clave pública del par de claves SSH al usuario de la máquina. Úselo como contraseña para el usuario en .ssh-copy-idoperator2serveraredhatoperator2servera
[operator2@serverb ~]$ ssh-copy-id operator2@servera
/usr/bin/ssh-copy-id: INFO: Source of key(s) to be installed: "/home/operator2/.ssh/id_rsa.pub"
The authenticity of host 'servera (172.25.250.10)' can't be established.
ED25519 key fingerprint is SHA256:h/hEJa/anxp6AP7BmB5azIPVbPNqieh0oKi4KWOTK80.
Are you sure you want to continue connecting (yes/no)? yes
/usr/bin/ssh-copy-id: INFO: attempting to log in with the new key(s), to filter out any that are already installed
/usr/bin/ssh-copy-id: INFO: 1 key(s) remain to be installed -- if you are prompted now it is to install the new keys
operator2@servera's password: redhat
Number of key(s) added: 1
Now try logging into the machine, with:   "ssh 'operator2@servera'"
4.	and check to make sure that only the key(s) you wanted were added.
5.	Confirme que puede iniciar sesión correctamente en la máquina como usuario con las claves SSH.serveraoperator2
Abra una sesión SSH en la máquina como usuario.serveraoperator2
[operator2@serverb ~]$ ssh operator2@servera
...output omitted...
	[operator2@servera ~]$
El comando anterior usó claves SSH para la autenticación.ssh
Cierre la sesión de la máquina.servera
[operator2@servera ~]$ exit
logout
	Connection to servera closed.
6.	Confirme que puede iniciar sesión correctamente en la máquina como usuario con la contraseña.serverarootredhat
Abra una sesión SSH en la máquina como usuario con la contraseña.serverarootredhat
[operator2@serverb ~]$ ssh root@servera
root@servera's password: redhat
...output omitted...
	[root@servera ~]#
El comando anterior usó la contraseña del superusuario para la autenticación, porque las claves SSH no existen para el superusuario.ssh
Cierre la sesión de la máquina.servera
[root@servera ~]# exit
logout
Connection to servera closed.
	[operator2@serverb ~]$
7.	Confirme que puede iniciar sesión correctamente en la máquina como usuario con la contraseña.serveraoperator3redhat
Abra una sesión SSH en la máquina como usuario con la contraseña.serveraoperator3redhat
[operator2@serverb ~]$ ssh operator3@servera
operator3@servera's password: redhat
...output omitted...
	[operator3@servera ~]$
El comando anterior usó la contraseña del usuario para la autenticación, porque las claves SSH no existen para el usuario.sshoperator3operator3
Cierre la sesión de la máquina.servera
[operator3@servera ~]$ exit
logout
Connection to servera closed.
	[operator2@serverb ~]$
8.	Configure el servicio en la máquina para evitar que los usuarios inicien sesión como usuario. Úselo como contraseña del superusuario cuando sea necesario.sshdserverarootredhat
Abra una sesión SSH en la máquina como usuario con las claves SSH.serveraoperator2
[operator2@serverb ~]$ ssh operator2@servera
...output omitted...
	[operator2@servera ~]$
En la máquina, cambie al usuario. Úselo como contraseña para el usuario.serverarootredhatroot
[operator2@servera ~]$ su -
Password: redhat
	[root@servera ~]#
Establézcalo en en el archivo y vuelva a cargar el servicio. Puede utilizar el comando para editar el archivo de configuración del servicio.PermitRootLoginno/etc/ssh/sshd_configsshdvim /etc/ssh/sshd_configsshd
...output omitted...
PermitRootLogin no
...output omitted...
	[root@servera ~]# systemctl reload sshd
Abra otro terminal en y abra una sesión SSH en la máquina como usuario. Desde la máquina, intente iniciar sesión en la máquina como usuario. Este comando debería fallar, ya que deshabilitó el inicio de sesión del usuario a través de SSH en el paso anterior.workstationserverboperator2serverbserverarootroot
Nota
Para su comodidad, el inicio de sesión sin contraseña ya está configurado entre y en el entorno del aula.workstationserverb
[student@workstation ~]$ ssh operator2@serverb
...output omitted...
[operator2@serverb ~]$ ssh root@servera
root@servera's password: redhat
Permission denied, please try again.
root@servera's password: redhat
Permission denied, please try again.
root@servera's password: redhat
	root@servera: Permission denied (publickey,gssapi-keyex,gssapi-with-mic,password).
De forma predeterminada, el comando intenta autenticarse primero con la autenticación basada en clave y, si ese método falla, con la autenticación basada en contraseña.ssh
9.	Configure el servicio en la máquina para permitir que los usuarios se autentiquen solo con claves SSH, en lugar de con sus contraseñas.sshdservera
Regrese al primer terminal con el shell activo del usuario en la máquina. Establezca el parámetro en en el archivo y vuelva a cargar el servicio. Puede utilizar el comando para editar el archivo de configuración del servicio.rootserveraPasswordAuthenticationno/etc/ssh/sshd_configsshdvim /etc/ssh/sshd_configsshd
...output omitted...
PasswordAuthentication no
...output omitted...
	[root@servera ~]# systemctl reload sshd
Vaya al segundo terminal con el shell activo del usuario en la máquina e intente iniciar sesión en la máquina como usuario. Este comando debería fallar, ya que las claves SSH no están configuradas para el usuario y el servicio en la máquina no permite el uso de contraseñas para la autenticación.operator2serverbserveraoperator3operator3sshdservera
[operator2@serverb ~]$ ssh operator3@servera
	operator3@servera: Permission denied (publickey,gssapi-keyex,gssapi-with-mic).
Nota
Para obtener más granularidad, puede usar las opciones explícitas y con el comando. A continuación, puede invalidar los valores predeterminados del comando y determinar con confianza que se produce un error en el comando anterior en función de la configuración que ajustó en el archivo en el paso anterior.-o PubkeyAuthentication=no-o PasswordAuthentication=yessshssh/etc/ssh/sshd_config
Regrese al primer terminal con el shell activo del usuario en la máquina. Compruebe que está habilitado en el archivo. Puede utilizar el comando para ver el archivo de configuración del servicio.rootserveraPubkeyAuthentication/etc/ssh/sshd_configvim /etc/ssh/sshd_configsshd
...output omitted...
#PubkeyAuthentication yes
	...output omitted...
La línea está comentada. Las líneas comentadas indican los valores predeterminados de un parámetro. La autenticación de clave pública de SSH está activa de forma predeterminada, como indica la línea comentada.PubkeyAuthentication
Regrese al segundo terminal con el shell activo del usuario en la máquina e intente iniciar sesión en la máquina como usuario. Este comando debería tener éxito, ya que las claves SSH están configuradas para que el usuario inicie sesión en la máquina desde la máquina.operator2serverbserveraoperator2operator2serveraserverb
[operator2@serverb ~]$ ssh operator2@servera
...output omitted...
	[operator2@servera ~]$
Desde el segundo terminal, salga del shell del usuario en las máquinas y .operator2serveraserverb
[operator2@servera ~]$ exit
logout
Connection to servera closed.
[operator2@serverb ~]$ exit
logout
Connection to serverb closed.
	[student@workstation ~]$
	Cierre el segundo terminal de la máquina.workstation
[student@workstation ~]$ exit
Desde el primer terminal, salga del shell del usuario en la máquina.rootservera
[root@servera ~]# exit
	logout
Desde el primer terminal, salga del shell del usuario en las máquinas y.operator2serveraserverb
[operator2@servera ~]$ exit
logout
Connection to servera closed.
[operator2@serverb ~]$ exit
logout
	[student@serverb ~]$
Cierre sesión en , y vuelva al shell del usuario en .serverbstudentworkstation
[student@serverb ~]$ exit
logout
Connection to serverb closed.
	[student@workstation ~]$
Terminar
En la máquina, cambie al directorio principal del usuario y utilice el comando para completar este ejercicio. Este paso es importante para garantizar que los recursos de ejercicios anteriores no afecten los próximos ejercicios.workstationstudentlab
[student@workstation ~]$ lab finish ssh-customize
Laboratorio: Configuración y protección de SSH
Configure la autenticación basada en claves para los usuarios y deshabilite la autenticación directa de inicio de sesión y contraseña para todos los usuarios del servicio OpenSSH en uno de sus servidores.root
Resultados
●	Autenticarse con claves SSH.
●	Evite que los usuarios inicien sesión directamente como usuario a través del servicio.rootssh
●	Evite que los usuarios inicien sesión en el sistema con la autenticación basada en contraseña SSH.
Como usuario de la máquina, use el comando para preparar el sistema para este ejercicio.studentworkstationlab
Este comando prepara el entorno y garantiza que todos los recursos necesarios estén disponibles.
[student@workstation ~]$ lab start ssh-review
Instrucciones
1.	Desde la máquina, inicie sesión en la máquina como usuario.workstationserverastudent
[student@workstation ~]$ ssh student@servera
2.	[student@servera ~]$
3.	Cambie al usuario en la máquina. Ingrese como contraseña.production1serveraredhat
[student@servera ~]$ su - production1
Password: redhat
4.	[production1@servera ~]$
5.	Genere claves SSH sin frase de contraseña para el usuario en la máquina.production1servera
[production1@servera ~]$ ssh-keygen
Generating public/private rsa key pair.
Enter file in which to save the key (/home/production1/.ssh/id_rsa): Enter
Created directory '/home/production1/.ssh'.
Enter passphrase (empty for no passphrase): Enter
Enter same passphrase again: Enter
Your identification has been saved in /home/production1/.ssh/id_rsa.
Your public key has been saved in /home/production1/.ssh/id_rsa.pub.
The key fingerprint is:
SHA256:MCQ8nXClDFSlJV0i5IouUzlzFrbsdz+jO8ZIMeSTOuQ production1@servera.lab.example.com
The key's randomart image is:
+---[RSA 3072]----+
|   o==B==..      |
|    oB+*..      |
|    o+B.         |
|   =.+*o         |
|  *o*. +S        |
| o *E .          |
|o . .o.o.        |
| o   ...+.o      |
|       .o+.o     |
6.	+----[SHA256]-----+
7.	Envíe la clave pública del par de claves SSH al usuario en la máquina.production1serverb
[production1@servera ~]$ ssh-copy-id production1@serverb
/usr/bin/ssh-copy-id: INFO: Source of key(s) to be installed: "/home/production1/.ssh/id_rsa.pub"
The authenticity of host 'serverb (172.25.250.11)' can't be established.
ED25519 key fingerprint is SHA256:h/hEJa/anxp6AP7BmB5azIPVbPNqieh0oKi4KWOTK80.
Are you sure you want to continue connecting (yes/no)? yes
/usr/bin/ssh-copy-id: INFO: attempting to log in with the new key(s), to filter out any that are already installed
/usr/bin/ssh-copy-id: INFO: 1 key(s) remain to be installed -- if you are prompted now it is to install the new keys
production1@serverb's password: redhat
Number of key(s) added: 1

Now try logging in to the machine, with:   "ssh 'production1@serverb'"
8.	and check to make sure that only the key(s) you wanted were added.
9.	Compruebe que el usuario puede iniciar sesión correctamente en la máquina con las claves SSH.production1serverb
[production1@servera ~]$ ssh production1@serverb
...output omitted...
10.	[production1@serverb ~]$
11.	Configure el servicio para evitar que los usuarios inicien sesión como usuario. Úselo como contraseña.sshdserverbrootredhatroot
Cambie al usuario en la máquina.rootserverb
[production1@serverb ~]$ su -
Password: redhat
	[root@serverb ~]#
Establezca el parámetro en en el archivo y vuelva a cargar el servicio. Edite el parámetro activo sin comentarios y no un ejemplo comentado.PermitRootLoginno/etc/ssh/sshd_configsshd
...output omitted...
PermitRootLogin no
...output omitted...
	[root@serverb ~]# systemctl reload sshd.service
Abra otro terminal en la máquina e inicie sesión en la máquina como usuario. Desde , intente iniciar sesión en la máquina como usuario. Este comando debería fallar, porque deshabilitó el inicio de sesión de usuario SSH.workstationserveraproduction1serveraserverbrootroot
El comando se cerró después de tres intentos fallidos de iniciar sesión en la máquina como usuario. De forma predeterminada, el comando prefiere usar claves SSH para la autenticación, y si no encuentra las claves necesarias del usuario, solicita la contraseña del usuario para la autenticación.serverarootssh
Nota
Para mayor comodidad del curso, el inicio de sesión sin contraseña ya está configurado entre y en el entorno del aula. Sin embargo, esta configuración es muy insegura y no se recomienda para ningún entorno de producción.rootworkstationservera
[student@workstation ~]$ ssh production1@servera
...output omitted...
[production1@servera ~]$ ssh root@serverb
root@serverb's password: redhat
Permission denied, please try again.
root@serverb's password: redhat
Permission denied, please try again.
root@serverb's password: redhat
root@serverb: Permission denied (publickey,gssapi-keyex,gssapi-with-mic,password).
	[production1@servera ~]$
12.	Configure el servicio en la máquina para permitir que los usuarios se autentiquen solo con claves SSH, en lugar de con sus contraseñas.sshdserverb
Regrese al primer terminal con el shell activo en la máquina. Establezca el parámetro en en el archivo y vuelva a cargar el servicio. Edite el parámetro activo sin comentarios y no un ejemplo comentado.rootserverbPasswordAuthenticationno/etc/ssh/sshd_configsshd
...output omitted...
PasswordAuthentication no
...output omitted...
	[root@serverb ~]# systemctl reload sshd
Vaya al segundo terminal con el shell activo en la máquina e intente iniciar sesión en la máquina como usuario. Este comando debería fallar, ya que las claves SSH no están configuradas para el usuario y el servicio en la máquina no permite el uso de contraseñas para la autenticación.production1serveraserverbproduction2production2sshdserverb
[production1@servera ~]$ ssh production2@serverb
	production2@serverb: Permission denied (publickey,gssapi-keyex,gssapi-with-mic).
Nota
Para obtener más granularidad, puede usar el comando explícito y las opciones. Con estas opciones, puede invalidar los valores predeterminados del comando y establecer con confianza si el comando anterior falló en función de la configuración que ajustó en el archivo en el paso anterior.ssh-o PubkeyAuthentication=no-o PasswordAuthentication=yesssh/etc/ssh/sshd_config
Regrese al primer terminal con el shell activo en la máquina. Compruebe que está habilitado en el archivo.rootserverbPubkeyAuthentication/etc/ssh/sshd_config
[root@serverb ~]$ cat /etc/ssh/sshd_config
...output omitted...
#PubkeyAuthentication yes
	...output omitted...
La línea está comentada. Las líneas comentadas indican los valores predeterminados de un parámetro. La autenticación de clave pública de SSH está activa de forma predeterminada, como indica la línea comentada.PubkeyAuthentication
Regrese al segundo terminal con el shell activo en la máquina e intente iniciar sesión en la máquina como usuario. Este comando debería tener éxito, ya que las claves SSH están configuradas para que el usuario inicie sesión en la máquina desde la máquina.production1serveraserverbproduction1production1serverbservera
[production1@servera ~]$ ssh production1@serverb
...output omitted...
	[production1@serverb ~]$
Salga y cierre la terminal adicional.
[production1@serverb ~]$ exit
logout
Connection to serverb closed.
[production1@servera ~]$ exit
logout
	[student@workstation ~]$ exit
Regrese al sistema como usuario.workstationstudent
[root@serverb ~]# exit
logout
[production1@serverb ~]$ exit
logout
Connection to serverb closed.
[production1@servera ~]$ exit
logout
[student@servera ~]$ exit
logout
Connection to servera closed.
	[student@workstation ~]$
Evaluación
Como usuario de la máquina, utilice el comando para calificar el trabajo. Corrija los errores notificados y vuelva a ejecutar el comando hasta que se realice correctamente.studentworkstationlab
[student@workstation ~]$ lab grade ssh-review
Terminar
En la máquina, cambie al directorio principal del usuario y utilice el comando para completar este ejercicio. Este paso es importante para garantizar que los recursos de ejercicios anteriores no afecten los próximos ejercicios.workstationstudentlab
[student@workstation ~]$ lab finish ssh-review
Resumen
●	Con el comando, los usuarios pueden acceder a sistemas remotos de forma segura con el protocolo SSH.ssh
●	Un sistema cliente almacena las identidades de los servidores remotos en los archivos and.~/.ssh/known_hosts/etc/ssh/ssh_known_hosts
●	SSH admite la autenticación basada en contraseñas y en claves.
●	El comando genera un par de claves SSH para la autenticación. El comando exporta la clave pública a sistemas remotos.ssh-keygenssh-copy-id
●	El servicio implementa el protocolo SSH en los sistemas Red Hat Enterprise Linux.sshd
●	Configure los ajustes avanzados de SSH en el archivo de configuración./etc/ssh/sshd_config
●	Se recomienda configurar para deshabilitar los inicios de sesión remotos y requerir autenticación de clave pública en lugar de autenticación basada en contraseña.sshdroot
Capítulo 11. Administrar redes
Describir conceptos de redes
Cuestionario: Describir conceptos de redes
Validar la configuración de red
Ejercicio guiado: Validar la configuración de red
Configurar redes desde la línea de comandos
Ejercicio guiado: configuración de redes desde la línea de comandos
Editar archivos de configuración de red
Ejercicio guiado: Edición de archivos de configuración de red
Configuración de nombres de host y resolución de nombres
Ejercicio guiado: Configurar nombres de host y resolución de nombres
Laboratorio: Administración de redes
Resumen
Abstracto
Gol	Configure las interfaces y los ajustes de red en los servidores de Red Hat Enterprise Linux.
Objetivos	●	
Describir los conceptos fundamentales de direccionamiento y enrutamiento de red para un servidor.
●	Pruebe e inspeccione la configuración de red actual con utilidades de línea de comandos.
●	Administre la configuración de red y los dispositivos con el comando.nmcli
●	Modifique la configuración de red editando los archivos de configuración.
●	Configure el nombre de host estático de un servidor y su resolución de nombres y pruebe los resultados.
Secciones	●	
Describir conceptos de redes (y cuestionario)
●	Validar la configuración de red (y ejercicio guiado)
●	Configurar redes desde la línea de comandos (y ejercicio guiado)
●	Edición de archivos de configuración de red (y ejercicio guiado)
●	Configuración de nombres de host y resolución de nombres (y ejercicio guiado)
Laboratorio	●	
Administrar redes
Describir conceptos de redes
Objetivos
●	Describir los conceptos fundamentales de direccionamiento y enrutamiento de red para un servidor.
Modelo de red TCP/IP
El modelo de red TCP/IP es un conjunto de cuatro capas de protocolos de comunicación que describe cómo se empaquetan, direccionan, transmiten, enrutan y reciben las comunicaciones de datos entre computadoras a través de una red.
El protocolo se especifica mediante RFC 1122, Requisitos para hosts de Internet: capas de comunicación.
A continuación se muestran las cuatro capas del modelo de red TCP/IP:
●	Aplicación
Cada aplicación tiene especificaciones de comunicación para que los clientes y los servidores puedan comunicarse entre plataformas. Los protocolos comunes incluyen SSH, HTTPS (web segura), FTP (intercambio de archivos) y SMTP (entrega de correo electrónico).
●	Transporte
TCP y UDP son protocolos de transporte. TCP es una comunicación confiable orientada a la conexión, mientras que UDP es un protocolo de datagramas sin conexión. Los protocolos de aplicación pueden usar puertos TCP o UDP. En el archivo se encuentra una lista de puertos conocidos y registrados./etc/services
Cuando se envía un paquete en la red, la combinación del puerto de servicio y la dirección IP forma un socket. Cada paquete tiene un socket de origen y un socket de destino. Esta información se puede utilizar al supervisar y filtrar el tráfico de red.
●	Internet
La capa de Internet, o capa de red, transporta datos desde el host de origen al host de destino. Los protocolos IPv4 e IPv6 son protocolos de capa de Internet. Cada host tiene una dirección IP y un prefijo para determinar las direcciones de red. Los enrutadores se utilizan para conectar redes.
●	Enlace
La capa de vínculo, o capa de acceso a medios, proporciona la conexión a medios físicos. Los tipos de redes más comunes son Ethernet por cable (802.3) y Wi-Fi inalámbrico (802.11). Cada dispositivo físico tiene un Control de acceso a medios (MAC) , que también se conoce como dirección de hardware, para identificar el destino de los paquetes en el segmento de red local.
 
Figura 11.1: Comparación de los modelos de red TCP/IP y OSI
Describir nombres de interfaz de red
Cada puerto de red de un sistema tiene un nombre, que se utiliza para configurarlo e identificarlo.
Las versiones anteriores de Red Hat Enterprise Linux usaban nombres como , y para cada interfaz de red. El nombre de la interfaz fue el primer puerto de red que detectó el sistema operativo; era la segunda interfaz, y así sucesivamente. Sin embargo, a medida que se agregaban y quitaban dispositivos, el mecanismo que detectaba y nombraba los dispositivos podía cambiar qué interfaz se asignaba a qué nombre. Además, el estándar PCIe no garantiza el orden en que se detectan los dispositivos PCIe en el arranque, lo que podría cambiar el nombre del dispositivo inesperadamente debido a variaciones durante el inicio del dispositivo o del sistema.eth0eth1eth2eth0eth1
En Red Hat Enterprise Linux 7 y versiones posteriores, el sistema de nomenclatura predeterminado genera nombres que son coherentes en todos los reinicios. En lugar de basarse en el orden de detección, la asignación de nombres de interfaz de red se basa en la información del firmware, la topología del bus PCI y el tipo de dispositivo de red. Sin una nomenclatura de dispositivos coherente, el kernel de Linux asigna nombres a las interfaces de red utilizadas en versiones anteriores de Red Hat Enterprise Linux combinando un prefijo fijo y un índice.
Los nombres de las interfaces de red comienzan con el tipo de interfaz:
●	Las interfaces Ethernet comienzan con en
●	Las interfaces WLAN comienzan con Wl
●	Las interfaces WWAN comienzan con Ww
El resto del nombre de la interfaz después del tipo se basa en la información del firmware del servidor o está determinado por la ubicación del dispositivo en la topología PCI.
●	oN indica un dispositivo integrado con índice único N desde el firmware del servidor. El nombre es dispositivo Ethernet integrado 1.eno1
●	sN indica un dispositivo en la ranura de conexión en caliente PCI N. Por ejemplo, es una tarjeta Ethernet en la ranura PCI hotplug 3.ens3
●	pMsN indica un dispositivo PCI en el bus M en ranura N. Una interfaz es una tarjeta WLAN en el bus PCI 4 en la ranura 0. Si la tarjeta es un dispositivo multifunción (como una tarjeta Ethernet con varios puertos o un dispositivo con Ethernet y otra función), es posible que vea en el nombre del dispositivo. Una interfaz es la función 0 de la tarjeta Ethernet en el bus 0 en la ranura 1. Se llamaría una segunda interfaz de tarjeta , que es la función 1 de ese mismo dispositivo.wlp4s0fNenp0s1f0enp0s1f1
La nomenclatura persistente significa que cuando se establece el nombre para una interfaz de red en el sistema, el nombre de la interfaz no cambia, incluso si agrega o quita hardware. Un comportamiento de nomenclatura persistente es que un sistema con una sola interfaz genera un nombre de dispositivo mediante un esquema de información de hardware y no se espera que use el comando eth0 esquema de nomenclatura del kernel.
Redes IPv4
Aunque IPv4 sigue siendo el esquema de direccionamiento más común en las redes empresariales en la actualidad, IPv6 ha superado el uso de IPv4 en las redes celulares. Necesita una comprensión básica de las redes IPv4 para administrar las redes en sus servidores.
Direcciones IPv4
Un Dirección IPv4 es un número de 32 bits, que se expresa como cuatro octetos de 8 bits en un formato decimal que varía en valor de 0 a 255, separados por puntos individuales. La dirección se divide en dos partes: el prefijo de red y el número de host. El prefijo de red identifica una subred física o virtual única. El número de host identifica un host específico en la subred. Todos los hosts de la misma subred tienen el mismo prefijo de red y pueden comunicarse entre sí directamente sin un enrutador. Un Puerta de enlace de red conecta diferentes redes y un enrutador de red suele funcionar como puerta de enlace para una subred.
Nota
A subred is a segment of a larger network, and the use of the term depends on the context. An IP network is partitioned into multiple, smaller network segments. Typically, segment refers to the physical or virtual link layer, whereas subnet refers to the logical, network-layer addressing for the corresponding segment.
Additionally, subnetting an assigned large network address subdivides it into multiple, smaller network segments. This IPv4 section introduces network addresses that are implemented as single subnets. The upcoming IPv6 section includes another context, where large networks are subnetted into multiple subnets.
In the original IPv4 specification, the allowed network prefixes were one of three fixed sizes for unicast packets that have a single source and destination. The network prefix might be 8 bits (class A), 16 bits (class B), or 24 bits (class C). Today, the number of bits in the network prefix is variable, which means that the prefix can be any number in the supported range, and this later specification is called Classless Inter-Domain Routing (CIDR). Although fixed-address classes are no longer in use, many network professionals still refer to networks with 8-bit, 16-bit, or 24-bit network prefixes by using the original class A, B, or C designation.
A network mask (netmask) is a binary mask whose length indicates how many bits belong to the network prefix that identifies the subnet. Because an IPv4 address is always 32 bits long, a subnet with a longer network mask has fewer available bits to identify hosts, which means fewer possible hosts. A subnet with a shorter network mask has more available bits to identify hosts, which means more possible hosts and a larger subnet.
Network masks are expressed in one of two forms, which are both used routinely. The first form, which is known as CIDR notation, appends a forward slash () and an integer up to 32 that indicates the number of bits in the binary mask. The second notation displays the number of bits in the binary mask as four 8-bit octets in decimal format./
IPv4 Subnets and Netmasks
The number of available host addresses in a subnet depends on the network prefix size. For example, a network prefix of leaves 8 bits, or 255 possible host addresses in the subnet. A network prefix of leaves 16 bits, or 65536 possible host addresses in the subnet./24/16
●	The network address for a subnet is the lowest possible address on a subnet, where the host number is all binary zeros.
●	The broadcast address for a subnet is the highest possible address on a subnet, where the host number is all binary ones, and is a special address for broadcasting packets to all subnet hosts.
●	The gateway address for a subnet can be any unique host number in the subnet, but is commonly set to the first available host number, which is a binary number of all zeroes except for a '1' in the last bit. This gateway numbering convention is not mandatory, and subnets that do not need external communication do not set a network gateway.
The following figures illustrate the use of an IP address and a netmask to calculate the network prefix and the host number for a subnet. Perform a binary AND calculation where each bit in the IP address and netmask is binary, and compare each bit to its corresponding bit in the IP address and netmask through the prefix length. In an AND calculation, both bits must be a '1' for the result to be a '1', and all other combinations result in '0'. Perform a binary OR calculation on the remaining bits in the host number, where either bit can be a '1' for the result to be a '1'. In a binary OR calculation, only two '0' bits result in a '0'.
 
Figura 11.2: Cálculo de máscara de red IPv4 para una red pequeña
 
Figura 11.3: Cálculo de la máscara de red IPv4 para una red más grande
Ejemplos de cálculos de red
En el ejemplo siguiente, identifique primero la máscara de red y, a continuación, realice los cálculos binarios. Una máscara de red de significa que los 24 bits iniciales de la dirección definen la dirección de red (). En este escenario, hay 8 bits, o 254 direcciones, disponibles para el direccionamiento de host./24192.168.1.0
Tabla 11.1. Dirección IPv4 de 192.168.1.107/24
Prefijo de red	/24 o 255.255.255.0	11111111.11111111.11111111.00000000
Dirección de host	192.168.1.107	11000000.10101000.00000001.01101011
Dirección de red	192.168.1.0	11000000.10101000.00000001.00000000
Intervalo de direcciones para hosts en subred	192.168.1.1 - 192.168.1.254	11000000.10101000.00000001.00000001 Para 11000000.10101000.00000001.11111110
Dirección de difusión	192.168.1.255	11000000.10101000.00000001.11111111

En el ejemplo siguiente, una máscara de red /19 es un prefijo de red válido que usa solo un octeto parcial. Las máscaras de red de longitud variable permiten subredes con una cantidad diferente de hosts que las máscaras de red de octeto completo. Los 13 bits restantes, o 8190 direcciones, están disponibles para el direccionamiento del host.
Tabla 11.2. Dirección IPv4 de 172.16.181.23/19
Prefijo de red	/19 o 255.255.224.0	11111111.11111111.11100000.00000000
Dirección de host	172.16.181.23	10101100.00010000.10110101.00010111
Dirección de red	172.16.160.0	10101100.00010000.10100000.00000000
Intervalo de direcciones para hosts en subred	172.16.160.1 - 172.16.191.254	10101100.00010000.10100000.00000001 Para 10101100.00010000.10111111.11111110
Dirección de difusión	172.16.191.255	10101100.00010000.10111111.11111111

En el siguiente ejemplo, indica una red grande. Solo se utiliza el primer octeto para el prefijo de red (). Los 24 bits restantes, o 16.777.214 direcciones, están disponibles para el direccionamiento del host. La dirección de difusión es la última dirección de la red./810.0.0.010.255.255.255
Tabla 11.3. Dirección IPv4 de 10.1.1.18/8
Prefijo de red	/8 o 255.0.0.0	11111111.00000000.00000000.00000000
Dirección de host	10.1.1.18	00001010.00000001.00000001.00010010
Dirección de red	10.0.0.0	00001010.00000000.00000000.00000000
Intervalo de direcciones para hosts en subred	10.0.0.1 - 10.255.255.254	00001010.00000000.00000000.00000001 Para 00001010.11111111.11111111.11111110
Dirección de difusión	10.255.255.255	00001010.11111111.11111111.11111111

Rutas IPv4
Los paquetes de red se mueven de un host a otro en una subred y a través de enrutadores de red a red. Cada host tiene una tabla de enrutamiento, que determina qué interfaz de red es correcta para enviar paquetes a redes particulares. Una entrada de tabla de enrutamiento enumera la red de destino, la interfaz de red que se va a utilizar y la dirección IP del router para reenviar el paquete al destino final. La entrada de la tabla de enrutamiento que coincide con el prefijo de red de la dirección de destino se utiliza para enrutar el paquete. Si varias entradas son válidas para la dirección de destino, se utiliza la entrada con el prefijo más largo.
Si la red de destino no coincide con una entrada más específica, el paquete se enruta mediante la entrada predeterminada. Esta ruta predeterminada apunta al enrutador de puerta de enlace en una subred local a la que puede acceder el host.0.0.0.0/0
Cuando un router recibe paquetes que no están dirigidos a sí mismo, el router reenvía el tráfico en función de su propia tabla de enrutamiento. El reenvío puede enviar el paquete directamente al host de destino si este enrutador está en la subred del destino, o puede reenviar el paquete nuevamente a otra red de enrutador. El reenvío de paquetes en enrutadores continúa hasta que el paquete llega a la red y al host de destino solicitados.
 
Figura 11.4: Ejemplo de topología de red
Tabla 11.4. Tabla de enrutamiento de ejemplo para la máquina hostb
Destino	Interfaz	Enrutador (si es necesario)
192.168.5.0/24	enp0s1f0	 
192.168.6.0/24	enp0s2f0	 
172.17.0.0/16	enp0s1f0	192.168.5.1
0.0.0.0/0 (predeterminado)	enp0s1f0	192.168.5.1

Considere el diagrama de red anterior y la tabla de enrutamiento de red.
●	El tráfico de red desde la máquina a cualquier host de la red se transmite directamente a través de la interfaz.hostb192.168.6.0/24enp0s2f0
○	Este tráfico se debe a que la máquina tiene una interfaz conectada a esa red y es la coincidencia más cercana a la entrada de ruta.hostb
●	El tráfico de red de la máquina a un host con la dirección IP utiliza la interfaz, ya que el tráfico coincide con la tercera entrada de la tabla de enrutamiento.hostb172.17.50.120enp0s1f0
○	La máquina no tiene una interfaz que esté conectada directamente a esta red, por lo que este tráfico se envía al enrutador de salto siguiente con la dirección de , al que se puede acceder a través de la interfaz. A continuación, el tráfico se reenvía a su destino.hostb192.168.5.1enp0s1f0
○	Dado que la máquina no tiene una interfaz que esté conectada directamente a la red, alguien con conocimiento de la topología de red debe agregar esta entrada de ruta a la tabla de enrutamiento.hostb172.17.0.0/16
●	El tráfico de red con un destino que no coincide con ninguna entrada de la tabla de enrutamiento se envía a la ruta predeterminada. La ruta predeterminada, que se designa con , se muestra en la cuarta entrada.0.0.0.0/0
○	Por ejemplo, todo el tráfico de la máquina a Internet se reenvía al enrutador de salto siguiente con la dirección de , al que se puede acceder a través de la interfaz. A continuación, el tráfico se reenvía a su destino.hostb192.168.5.1enp0s1f0
Configuración de direcciones y rutas IPv4
Un servidor puede configurar automáticamente sus ajustes de red IPv4 comunicándose con un servidor DHCP. Un cliente DHCP local consulta la subred mediante un protocolo de capa de vínculo para localizar un servidor DHCP o proxy, y negocia para usar una dirección única y otras configuraciones para un período de concesión específico. El cliente debe solicitar periódicamente la renovación del arrendamiento para mantener el uso de la configuración de red asignada.
Como alternativa, puede configurar un servidor para que utilice una configuración de red estática. La configuración de red estática se lee de los archivos de configuración locales. La configuración que use debe ser adecuada para la subred. Coordine con su administrador de red para evitar conflictos con otros servidores en las mismas subredes.
Redes IPv6
IPv6 está diseñado para ampliar en gran medida el número total de direcciones de dispositivos disponibles. IPv6 se utiliza tanto en redes empresariales como para comunicaciones móviles. La mayoría, si no todos, Proveedores de servicios de Internet (ISP) utilizar IPv6 ampliamente para asignar a equipos internos y para la asignación dinámica de dispositivos de clientes.
IPv6 también se puede usar en paralelo con IPv4 en un modo de doble pila. Una interfaz de red puede tener direcciones IPv6 e IPv4. Red Hat Enterprise Linux funciona en modo de doble pila de forma predeterminada.
Direcciones IPv6
Una dirección IPv6 es un número de 128 bits, que normalmente se expresa como ocho grupos separados por dos puntos de cuatro hexadecimales Mordiscos (medio bytes). Cada nibble representa cuatro bits de la dirección IPv6, por lo que cada grupo representa 16 bits de la dirección IPv6.
2001:0db8:0000:0010:0000:0000:0000:0001
Para simplificar la escritura de direcciones IPv6, no se necesitan ceros a la izquierda en un grupo separado por dos puntos. Sin embargo, se debe escribir al menos un dígito hexadecimal en cada grupo separado por dos puntos.
2001:db8:0:10:0:0:0:1
Debido a que las direcciones con cadenas largas de ceros son comunes, solo se pueden combinar uno o más grupos consecutivos de ceros con exactamente uno bloque de dos caracteres de dos puntos.::
2001:db8:0:10::1
La dirección IPv6, aunque es una representación válida, es una forma menos conveniente de escribir la dirección de ejemplo. Esta representación diferente puede confundir a los administradores que son nuevos en IPv6. En la lista siguiente se muestran sugerencias para escribir direcciones legibles de forma coherente:2001:db8::0010:0:0:0:1
●	Suprimir ceros a la izquierda en un grupo.
●	Use un bloque de dos puntos para acortar la dirección tanto como sea posible.::
●	Si una dirección contiene dos grupos consecutivos de ceros, que tienen la misma longitud, acorte los grupos de ceros más a la izquierda y los grupos más a la derecha a para cada grupo.:::0:
●	Aunque está permitido, no lo use para acortar un solo grupo de ceros. Úselo en su lugar y guárdelo para grupos consecutivos de ceros.:::0:::
●	Utilice siempre letras minúsculas para los caracteres hexadecimales.af
Importante
Cuando incluya un puerto de red TCP o UDP después de una dirección IPv6, siempre escriba la dirección IPv6 entre corchetes para que el puerto no parezca ser parte de la dirección.
[2001:db8:0:10::1]:80
Subredes IPv6
Una dirección de unidifusión IPv6 normal se divide en dos partes: Prefijo de red y ID de interfaz. El prefijo de red identifica la subred. Dos interfaces de red en la misma subred no pueden tener el mismo ID de interfaz; el ID de interfaz identifica una interfaz determinada en la subred.
A diferencia de IPv4, IPv6 tiene una máscara de subred estándar, , que se utiliza para casi todas las direcciones normales. En este caso, la mitad de la dirección de 128 bits es el prefijo de red y la otra mitad es el ID de interfaz. Con 64 bits para las direcciones de host, una sola subred podría contener teóricamente 2^64 hosts./64
Normalmente, el proveedor de red asigna un prefijo más corto a una organización, como un . Este prefijo deja el resto de la parte de la red para asignar subredes (hasta la longitud máxima) de ese prefijo asignado. Por ejemplo, cuando se asigna un prefijo de asignación, hay 16 bits disponibles para hasta 65536 subredes./48/64/48
 
Figura 11.5: Partes de direcciones IPv6 y subredes
Tabla 11.5. Direcciones y redes IPv6 comunes
Dirección IPv6 o red	Propósito	Descripción
::1/128	anfitrión local	IPv6 equivalente a la dirección, que se establece en la interfaz de bucle invertido.127.0.0.1/8
::	La dirección no especificada	El equivalente IPv6 a . Para un servicio de red, puede indicar que está escuchando en todas las direcciones IP configuradas.0.0.0.0
::/0	La ruta predeterminada (Internet IPv6)	El equivalente IPv6 a la dirección. La ruta predeterminada en la tabla de enrutamiento coincide con esta red; El enrutador de esta red es donde se envía todo el tráfico en ausencia de una ruta mejor.0.0.0.0/0
2000::/3	Direcciones de unidifusión globales	El Autoridad de Números Asignados de Internet (IANA) actualmente asigna direcciones IPv6 "normales" desde este espacio. Las direcciones incluyen todas las redes que van desde hasta .2000::/163fff::/16
fd00::/8	Direcciones locales únicas (RFC 4193)	IPv6 no tiene un equivalente directo del espacio de direcciones privadas RFC 1918, aunque este rango de red está cerca. Un sitio puede usar estas redes para autoasignar un espacio de direcciones IP enrutables privadas dentro de la organización. Sin embargo, estas redes no se pueden utilizar en Internet global. El sitio debe seleccionar aleatoriamente un de este espacio, pero normalmente puede subconectar la asignación a las redes./48/64
fe80::/10	Direcciones locales de enlace	Cada interfaz IPv6 configura automáticamente una dirección de unidifusión local de vínculo que solo funciona en el vínculo local de la red. Sin embargo, toda la gama está reservada para uso futuro por parte del enlace local. Este tema se analiza con más detalle más adelante.fe80::/64fe80::/10
ff00::/8	Multidifusión	El equivalente IPv6 a la dirección. La multidifusión se utiliza para transmitir a varios hosts al mismo tiempo y es particularmente importante en IPv6 porque no tiene direcciones de difusión.224.0.0.0/4

Importante
En la tabla anterior se muestra la dirección de red Asignaciones que están reservados para fines específicos. Estas asignaciones pueden constar de muchas redes. Las redes IPv6 se asignan desde los espacios de direcciones de unidifusión global y unidifusión local de vínculo que tienen una máscara de red estándar./64
Una dirección local de vínculo en IPv6 es una dirección no enrutable que el sistema usa solo para comunicarse con otros sistemas en el mismo vínculo de red. Para garantizar que la dirección IP sea única, el sistema utiliza un método específico para calcular el ID de interfaz de la dirección local de vínculo.
Nota
Originalmente, el ID de interfaz para la dirección local de enlace IPv6 se construía a partir de la dirección MAC del dispositivo de red. Exponer la dirección MAC como parte de la dirección IPv6 puede causar algunos problemas de seguridad y privacidad, ya que es posible identificar y seguir una computadora en la red.
De forma predeterminada en Red Hat Enterprise Linux 9, NetworkManager genera un ID de interfaz aleatorio pero estable para la interfaz, de acuerdo con el algoritmo en RFC 7217. Este algoritmo está controlado por la configuración de conexión, que por defecto es .ipv6.addr-gen-modestable-privacy
Las extensiones de privacidad IPv6 (RFC 4941) son una solución diferente para el mismo problema y están controladas por diferentes configuraciones, que están deshabilitadas de forma predeterminada.
Utilice el comando para recuperar la dirección IPv6 local del vínculo, como en el ejemplo siguiente. Agregue la opción para una breve lista de direcciones solamente.ip addr show-br
[user@host ~]$ ip addr show dev eth0
3: eth0: <BROADCAST,MULTICAST,UP,LOWER_UP> mtu 1500 qdisc fq_codel state UP group default qlen 1000
    link/ether 52:54:00:01:fa:0a brd ff:ff:ff:ff:ff:ff
    inet 10.42.0.1/16 brd 10.42.255.255 scope global noprefixroute eth0
       valid_lft forever preferred_lft forever
    inet6 fe80::7418:cf98:c742:3681/64 scope link noprefixroute
       valid_lft forever preferred_lft forever
Agregue la opción para una breve lista de direcciones IPv4 e IPv6 solamente.-br
[user@host ~]$ ip -br addr show dev eth0
eth0          UP          10.42.0.1/16 fe80::7418:cf98:c742:3681/64
Para funcionar correctamente, IPv6 se basa en la dirección local del vínculo. La interfaz siempre mantiene esa dirección, incluso cuando asigna una dirección IPv6 enrutable manualmente o con un método automatizado.
Con la multidifusión, un sistema puede enviar tráfico a una dirección IP especial que reciben varios sistemas. La multidifusión difiere de la difusión, porque los paquetes de difusión no son enrutables y solo llegan a hosts de subred locales. Por el contrario, los paquetes de multidifusión se enrutan a hosts específicos que anunciaron una solicitud para los paquetes de multidifusión con dirección única. Los paquetes de multidifusión se pueden enrutar a otras subredes, si todos los enrutadores intermediarios admiten el reenvío de solicitudes de multidifusión y el enrutamiento.
La multidifusión juega un papel más importante en IPv6 que en IPv4, porque IPv6 no tiene dirección de difusión. La dirección IPv6 es una dirección de multidifusión clave que se utiliza como dirección local de vínculo y se comporta como una dirección de difusión. Puede hacer ping a esta dirección para enviar tráfico a todos los nodos del vínculo. Las direcciones de multidifusión de ámbito de vínculo (que comienzan por ) deben especificarse con un identificador de ámbito, como para una dirección local de vínculo.ff02::1all-nodesff02::/8
[user@host ~]$ ping6 ff02::1%ens3
PING ff02::1%ens3(ff02::1) 56 data bytes
64 bytes from fe80::211:22ff:feaa:bbcc: icmp_seq=1 ttl=64 time=0.072 ms
64 bytes from fe80::200:aaff:fe33:2211: icmp_seq=1 ttl=64 time=102 ms (DUP!)
64 bytes from fe80::bcd:efff:fea1:b2c3: icmp_seq=1 ttl=64 time=103 ms (DUP!)
64 bytes from fe80::211:22ff:feaa:bbcc: icmp_seq=2 ttl=64 time=0.079 ms
...output omitted...
Configuración de direcciones IPv6
IPv4 tiene dos formas de configurar direcciones en interfaces de red. El administrador puede configurar manualmente las direcciones de red en las interfaces, o las direcciones se pueden configurar dinámicamente con DHCP. IPv6 admite la configuración manual y dos métodos de configuración dinámica, uno de los cuales es DHCPv6.
Puede seleccionar ID de interfaz para direcciones IPv6 estáticas, similares a IPv4. En IPv4, no se pueden usar dos direcciones en una red: la dirección más baja, que es la dirección de red; y la dirección más alta, que es la dirección de difusión. En IPv6, se reservan dos ID de interfaz y no se pueden utilizar como direcciones de interfaz de host normales:
●	El identificador de todos ceros ("enrutador de subred anycast") que utilizan todos los enrutadores del vínculo. Por ejemplo, en la red, la dirección anycast es .0000:0000:0000:00002001:db8::/642001:db8::
●	Los identificadores a través de .fdff:ffff:ffff:ff80fdff:ffff:ffff:ffff
Las negociaciones de concesión de DHCPv6 funcionan de manera diferente a IPv4 DHCP, ya que DHCPv6 no tiene dirección de difusión. Un host envía una solicitud DHCPv6 desde una dirección local de vínculo al puerto 547/UDP en el grupo de multidifusión local de vínculo dedicado. Un servidor DHCPv6 que escucha puede optar por responder con la información adecuada al puerto 546/UDP en la dirección local de vínculo proporcionada por el cliente.ff02::1:2all-dhcp-servers
El paquete de Red Hat Enterprise Linux 9 proporciona soporte para un servidor DHCPv6.dhcp
Además de DHCPv6, IPv6 también admite otro método de configuración dinámica, que se denomina Configuración automática de direcciones sin estado (SLAAC). Para usar SLAAC, un host configura su interfaz con una dirección local de vínculo y envía una "solicitud de enrutador" al grupo de multidifusión local de vínculo. Un enrutador IPv6 en el vínculo local responde a la dirección local del vínculo del host con el prefijo de red configurado previamente de la subred y otra información relevante. El host utiliza el prefijo de red proporcionado con un ID de interfaz que se construye igual que para las direcciones locales de vínculo. El router envía periódicamente actualizaciones de multidifusión (fe80::/64ff02::2all-routersAnuncios de enrutadores) para confirmar o actualizar la información de red proporcionada.
Con el paquete de Red Hat Enterprise Linux 9, un router IPv6 basado en Red Hat Enterprise Linux puede proporcionar SLAAC a través de anuncios de router.radvd
Importante
Un sistema Red Hat Enterprise Linux 9 típico que está configurado para direcciones IPv4 dinámicas con DHCP generalmente se configura para IPv6 dinámico mediante SLAAC. Los hosts con una configuración IPv6 dinámica pueden obtener inesperadamente direcciones IPv6 adicionales cuando se agrega un nuevo enrutador IPv6 a la red.
Algunas implementaciones de IPv6 combinan SLAAC y DHCPv6, y usan SLAAC para proporcionar la información de dirección de red, donde DHCPv6 proporciona más opciones de red, como servidores DNS y dominios de búsqueda.
Nombres de host y direcciones IP
Las direcciones IP no son amigables para los humanos en el uso diario. Los usuarios generalmente prefieren trabajar con nombres de host en lugar de con cadenas numéricas. Linux tiene resolución de nombres mecanismos para asignar un nombre de host a una dirección IP.
Un método es crear entradas estáticas para cada nombre de host en el archivo de cada sistema. Con este método, debe actualizar manualmente la copia del archivo de cada servidor./etc/hostshosts
Cuando se configura, puede buscar la dirección de un nombre de host (o un nombre de host de una dirección) mediante el comando Sistema de nombres de dominio (DNS) servicio de red. DNS es una red distribuida de servidores que proporciona asignaciones de resolución de nombres. Para que la resolución de nombres funcione, un host debe configurarse para saber dónde ponerse en contacto con un servidor de nombres. No es necesario que el servidor de nombres esté en la misma subred, pero el host debe poder acceder a ella. Una configuración de servidor de nombres generalmente se obtiene a través de DHCP o creando configuraciones de dirección estática en el archivo. En secciones posteriores de este capítulo se describe cómo configurar la resolución de nombres./etc/resolv.conf
Referencias
services(5), (8), (1) y (7) páginas de manualpingbiosdevnameudev
Para obtener más información, consulte el Guía de configuración y administración de redes en https://access.redhat.com/documentation/en-us/red_hat_enterprise_linux/9/html-single/configuring_and_managing_networking/index/
Descripción de los nombres predecibles de los dispositivos de red de systemd
Referencias RFC IETF seleccionadas:
RFC2460: Protocolo de Internet, Versión 6 (IPv6) Especificación
RFC4291 Arquitectura de direccionamiento IP versión 6
RFC5952: Una recomendación para la representación de texto de direcciones IPv6
RFC4862: Configuración automática de direcciones IPv6 sin estado
RFC3315: Protocolo de configuración dinámica de host para IPv6 (DHCPv6)
RFC3736: Servicio de protocolo de configuración dinámica de host (DHCP) sin estado para IPv6
RFC4193: Direcciones de unidifusión IPv6 locales únicas
RFC7217: Un método para generar identificadores de interfaz semánticamente opacos con configuración automática de direcciones sin estado IPv6 (SLAAC)
RFC8415: Protocolo de configuración dinámica de host para IPv6 (DHCPv6)
Validar la configuración de red
Objetivos
●	Pruebe e inspeccione la configuración de red actual con utilidades de línea de comandos.
Recopilar información de la interfaz de red
El comando enumera todas las interfaces de red disponibles en el sistema. En el siguiente ejemplo, el servidor tiene tres interfaces de red: , que es el dispositivo de bucle invertido que está conectado al propio servidor, y dos interfaces Ethernet, y .ip linkloens3ens4
[user@host ~]$ ip link show
1: lo: <LOOPBACK,UP,LOWER_UP> mtu 65536 qdisc noqueue state UNKNOWN mode DEFAULT group default qlen 1000
    link/loopback 00:00:00:00:00:00 brd 00:00:00:00:00:00
2: ens3: <BROADCAST,MULTICAST,UP,LOWER_UP> mtu 1500 qdisc mq state UP mode DEFAULT group default qlen 1000
    link/ether 52:54:00:00:00:0a brd ff:ff:ff:ff:ff:ff
3: ens4: <BROADCAST,MULTICAST,UP,LOWER_UP> mtu 1500 qdisc mq state UP mode DEFAULT group default qlen 1000
    link/ether 52:54:00:00:00:1e brd ff:ff:ff:ff:ff:ff
Para configurar correctamente una interfaz de red, debe saber qué interfaz está conectada a qué red. A menudo, se puede obtener la dirección MAC de la interfaz que está conectada a cada red, ya sea porque está impresa físicamente en la tarjeta o servidor, o porque es una máquina virtual y sabes cómo está configurada. La dirección MAC del dispositivo se muestra después de cada interfaz. Entonces sabes que la tarjeta de red con la dirección MAC es la interfaz de red .link/ether52:54:00:00:00:0aens3
Mostrar direcciones IP
Utilice el comando para ver la información del dispositivo y la dirección. Una sola interfaz de red puede tener varias direcciones IPv4 o IPv6.ip
[user@host ~]$ ip addr show ens3
2: ens3: <BROADCAST,MULTICAST,UP,LOWER_UP> mtu 1500 qdisc pfifo_fast state UP qlen 1000 
    link/ether 52:54:00:00:00:0b brd ff:ff:ff:ff:ff:ff 
    inet 192.0.2.2/24 brd 192.0.2.255 scope global ens3 
       valid_lft forever preferred_lft forever
    inet6 2001:db8:0:1:5054:ff:fe00:b/64 scope global 
       valid_lft forever preferred_lft forever
    inet6 fe80::5054:ff:fe00:b/64 scope link 
       valid_lft forever preferred_lft forever
 	Una interfaz activa es .UP
 	La cadena especifica la dirección de hardware (MAC) del dispositivo.link/ether
 	La cadena muestra una dirección IPv4, su longitud de prefijo de red y su ámbito.inet
 	La cadena muestra una dirección IPv6, su longitud de prefijo de red y su ámbito. Esta dirección es de inet6global alcance y se usa normalmente.
 	Esta cadena muestra que la interfaz tiene una dirección IPv6 de inet6enlace que solo se puede utilizar para la comunicación en el vínculo Ethernet local.
Mostrar estadísticas de rendimiento
El comando también puede mostrar estadísticas sobre el rendimiento de la red. Los contadores de cada interfaz de red pueden identificar la presencia de problemas de red. Los contadores registran estadísticas, como el número de paquetes recibidos (RX) y transmitidos (TX), los errores de paquetes y los paquetes descartados.ip
[user@host ~]$ ip -s link show ens3
2: ens3: <BROADCAST,MULTICAST,UP,LOWER_UP> mtu 1500 qdisc pfifo_fast state UP qlen 1000
link/ether 52:54:00:00:00:0a brd ff:ff:ff:ff:ff:ff
    RX: bytes  packets  errors  dropped overrun mcast
    269850     2931     0       0       0       0
    TX: bytes  packets  errors  dropped carrier collsns
    300556     3250     0       0       0       0
Verificar la conectividad entre hosts
El comando prueba la conectividad. El comando continúa ejecutándose hasta que se presiona Ctrl+c, a menos que se den opciones para limitar el número de paquetes enviados.ping
[user@host ~]$ ping -c3 192.0.2.254
PING 192.0.2.1 (192.0.2.254) 56(84) bytes of data.
64 bytes from 192.0.2.254: icmp_seq=1 ttl=64 time=4.33 ms
64 bytes from 192.0.2.254: icmp_seq=2 ttl=64 time=3.48 ms
64 bytes from 192.0.2.254: icmp_seq=3 ttl=64 time=6.83 ms

--- 192.0.2.254 ping statistics ---
3 packets transmitted, 3 received, 0% packet loss, time 2003ms
rtt min/avg/max/mdev = 3.485/4.885/6.837/1.424 ms
El comando es la versión IPv6 del comando en Red Hat Enterprise Linux. La diferencia entre estos comandos es que el comando se comunica a través de IPv6 y toma direcciones IPv6.ping6pingping6
[user@host ~]$ ping6 2001:db8:0:1::1
PING 2001:db8:0:1::1(2001:db8:0:1::1) 56 data bytes
64 bytes from 2001:db8:0:1::1: icmp_seq=1 ttl=64 time=18.4 ms
64 bytes from 2001:db8:0:1::1: icmp_seq=2 ttl=64 time=0.178 ms
64 bytes from 2001:db8:0:1::1: icmp_seq=3 ttl=64 time=0.180 ms
^C
--- 2001:db8:0:1::1 ping statistics ---
3 packets transmitted, 3 received, 0% packet loss, time 2001ms
rtt min/avg/max/mdev = 0.178/6.272/18.458/8.616 ms
[user@host ~]$
Al hacer ping a las direcciones locales de vínculo y al grupo de multidifusión de todos los nodos local de vínculo (), la interfaz de red que se va a utilizar debe especificarse explícitamente con un identificador de zona de ámbito (como ). Si se omite esta interfaz de red, entonces el ff02::1ff02::1%ens3connect: Argumento no válido error.
Puede utilizar el comando para buscar otros nodos IPv6 en la red local.ping6 ff02::1
[user@host ~]$ ping6 ff02::1%ens4
PING ff02::1%ens4(ff02::1) 56 data bytes
64 bytes from fe80::78cf:7fff:fed2:f97b: icmp_seq=1 ttl=64 time=22.7 ms
64 bytes from fe80::f482:dbff:fe25:6a9f: icmp_seq=1 ttl=64 time=30.1 ms (DUP!)
64 bytes from fe80::78cf:7fff:fed2:f97b: icmp_seq=2 ttl=64 time=0.183 ms
64 bytes from fe80::f482:dbff:fe25:6a9f: icmp_seq=2 ttl=64 time=0.231 ms (DUP!)
^C
--- ff02::1%ens4 ping statistics ---
2 packets transmitted, 2 received, +2 duplicates, 0% packet loss, time 1001ms
rtt min/avg/max/mdev = 0.183/13.320/30.158/13.374 ms
[user@host ~]$
[user@host ~]$ ping6 -c 1 fe80::f482:dbff:fe25:6a9f%ens4
PING fe80::f482:dbff:fe25:6a9f%ens4(fe80::f482:dbff:fe25:6a9f) 56 data bytes
64 bytes from fe80::f482:dbff:fe25:6a9f: icmp_seq=1 ttl=64 time=22.9 ms

--- fe80::f482:dbff:fe25:6a9f%ens4 ping statistics ---
1 packets transmitted, 1 received, 0% packet loss, time 0ms
rtt min/avg/max/mdev = 22.903/22.903/22.903/0.000 ms
Otros hosts en el mismo vínculo pueden usar direcciones locales de vínculo IPv6, como direcciones normales.
[user@host ~]$ ssh fe80::f482:dbff:fe25:6a9f%ens4
user@fe80::f482:dbff:fe25:6a9f%ens4's password:
Last login: Thu Jun  5 15:20:10 2014 from host.example.com
[user@server ~]$
Solucionar problemas del router
El enrutamiento de red es complejo y, a veces, el tráfico no se comporta como cabría esperar. Puede utilizar diferentes herramientas para diagnosticar problemas del enrutador.
Describir la tabla de enrutamiento
Utilice la opción de comando para mostrar la información de enrutamiento.iproute
[user@host ~]$ ip route
default via 192.0.2.254 dev ens3 proto static metric 1024
192.0.2.0/24 dev ens3 proto kernel scope link src 192.0.2.2
10.0.0.0/8 dev ens4 proto kernel scope link src 10.0.0.11
Todos los paquetes destinados a la red se envían directamente al destino a través del dispositivo. Todos los paquetes destinados a la red se envían directamente al destino a través del dispositivo. Todos los demás paquetes se envían al enrutador predeterminado en , y también a través del dispositivo .10.0.0.0/8ens4192.0.2.0/24ens3192.0.2.254ens3
Utilice la opción de comando para mostrar la tabla de enrutamiento IPv6.ip-6
[user@host ~]$ ip -6 route
unreachable ::/96 dev lo  metric 1024  error -101
unreachable ::ffff:0.0.0.0/96 dev lo  metric 1024  error -101
2001:db8:0:1::/64 dev ens3  proto kernel  metric 256
unreachable 2002:a00::/24 dev lo  metric 1024  error -101
unreachable 2002:7f00::/24 dev lo  metric 1024  error -101
unreachable 2002:a9fe::/32 dev lo  metric 1024  error -101
unreachable 2002:ac10::/28 dev lo  metric 1024  error -101
unreachable 2002:c0a8::/32 dev lo  metric 1024  error -101
unreachable 2002:e000::/19 dev lo  metric 1024  error -101
unreachable 3ffe:ffff::/32 dev lo  metric 1024  error -101
fe80::/64 dev ens3  proto kernel  metric 256
default via 2001:db8:0:1::ffff dev ens3  proto static  metric 1024
1.	La red utiliza la interfaz (que presumiblemente tiene una dirección en esa red).2001:db8:0:1::/64ens3
2.	La red utiliza la interfaz para la dirección local del vínculo. En un sistema con varias interfaces, existe una ruta a la red en cada interfaz para cada dirección local de vínculo.fe80::/64ens3fe80::/64
3.	La ruta predeterminada a todas las redes de Internet IPv6 (la red) utiliza el enrutador en la red y se puede acceder a él con el dispositivo.::/02001:db8:0:1::ffffens3
Trazar rutas de tráfico
Para rastrear la ruta de tráfico de red para llegar a un host remoto a través de varios enrutadores, use el comando or. Estos comandos pueden identificar problemas con uno de sus enrutadores o un enrutador intermedio. Ambos comandos usan paquetes UDP para rastrear una ruta de forma predeterminada; sin embargo, muchas redes bloquean el tráfico UDP e ICMP. El comando tiene opciones para rastrear la ruta con paquetes UDP (predeterminado), ICMP () o TCP (). Normalmente, el comando no se instala de forma predeterminada.traceroutetracepathtraceroute-I-Ttraceroute
[user@host ~]$ tracepath access.redhat.com
...output omitted...
 4:  71-32-28-145.rcmt.qwest.net                          48.853ms asymm  5
 5:  dcp-brdr-04.inet.qwest.net                          100.732ms asymm  7
 6:  206.111.0.153.ptr.us.xo.net                          96.245ms asymm  7
 7:  207.88.14.162.ptr.us.xo.net                          85.270ms asymm  8
 8:  ae1d0.cir1.atlanta6-ga.us.xo.net                     64.160ms asymm  7
 9:  216.156.108.98.ptr.us.xo.net                        108.652ms
10:  bu-ether13.atlngamq46w-bcr00.tbone.rr.com           107.286ms asymm 12
...output omitted...
Cada línea en el resultado del comando representa un enrutador o salto por el que pasa el paquete entre el origen y el destino final. El comando genera información para cada salto a medida que está disponible, incluido el comando tracepathcronometraje de ida y vuelta (RTT) y cualquier cambio en el unidad de transmisión máxima (MTU) tamaño. La indicación significa que el tráfico que llegó al router regresó de ese router por diferentes (asymmasimétrico). Estos enrutadores aquí son para el tráfico saliente, no para el tráfico de retorno.
Los comandos and son los comandos IPv6 equivalentes a los comandos and.tracepath6traceroute -6tracepathtraceroute
[user@host ~]$ tracepath6 2001:db8:0:2::451
 1?: [LOCALHOST]                        0.091ms pmtu 1500
 1:  2001:db8:0:1::ba                   0.214ms
 2:  2001:db8:0:1::1                    0.512ms
 3:  2001:db8:0:2::451                  0.559ms reached
     Resume: pmtu 1500 hops 3 back 3
Solucionar problemas de puerto y servicio
Los servicios TCP utilizan sockets como puntos finales para la comunicación y se componen de una dirección IP, un protocolo y un número de puerto. Los servicios suelen escuchar en puertos estándar, mientras que los clientes usan un puerto disponible aleatorio. Los nombres conocidos de los puertos estándar se enumeran en el archivo./etc/services
El comando se utiliza para mostrar estadísticas de socket. El comando reemplaza la herramienta anterior, del paquete, que puede ser más familiar para algunos administradores del sistema, pero no siempre está instalada.ssssnetstatnet-tools
[user@host ~]$ ss -ta
State      Recv-Q Send-Q      Local Address:Port          Peer Address:Port
LISTEN     0      128                     *:sunrpc                   *:*
LISTEN     0      128                     *:ssh                      *:* 
LISTEN     0      100             127.0.0.1:smtp                      : 
LISTEN     0      128                     *:36889                    *:*
ESTAB      0      0           172.25.250.10:ssh         172.25.254.254:59392 
LISTEN     0      128                    [::]:sunrpc                  [::]:*
LISTEN     0      128                    [::]:ssh                     [::]:* 
LISTEN     0      100                   [::1]:smtp                    [::]:* 
LISTEN     0      128                    [::]:34946                   [::]:*
 	*:ssh : El puerto que se utiliza para SSH escucha en todas las direcciones IPv4. El carácter de asterisco () representa *todo cuando se hace referencia a direcciones IPv4 o puertos.
 	127.0.0.1:smtp : El puerto que se utiliza para SMTP está escuchando en la interfaz de bucle invertido IPv4.127.0.0.1
 	172.25.250.10:ssh : La conexión SSH establecida se encuentra en la interfaz 172.25.250.10 y se origina en un sistema con una dirección de .172.25.254.254
 	:::ssh : El puerto que se utiliza para SSH escucha en todas las direcciones IPv6. La sintaxis de dos puntos dobles () representa todas las interfaces IPv6.::
 	::1:smtp : El puerto que se usa para SMTP está escuchando en la interfaz de bucle invertido IPv6 ::1.
Tabla 11.6. Opciones para ss y netstat
Opción	Descripción
-n	Muestra números en lugar de nombres para interfaces y puertos.
-t	Muestra sockets TCP.
-u	Muestra sockets UDP.
-l	Muestre solo enchufes de escucha.
-a	Mostrar todos los enchufes (de escucha y establecidos).
-p	Muestra el proceso que usa los sockets.
-A inet	Muestra las conexiones activas (pero no los sockets de escucha) para la familia de direcciones. Es decir, ignorar los sockets de dominio UNIX locales. Para el comando, se muestran las conexiones IPv4 e IPv6. Para el comando, solo se muestran las conexiones IPv4. (El comando muestra las conexiones IPv6 y el comando muestra IPv4 e IPv6 al mismo tiempo).inetssnetstatnetstat -A inet6netstat -46

Referencias
ip-link(8), (8), (8), (8), (8), (8), (8), (8), (8) y (8) páginas de manualip-addressip-routeippingtracepathtraceroutessnetstat
Para obtener más información, consulte el Guía de configuración y administración de redes en https://access.redhat.com/documentation/en-us/red_hat_enterprise_linux/9/html-single/configuring_and_managing_networking/index
Ejercicio guiado: Validar la configuración de red
Inspeccione la configuración de red de uno de sus servidores.
Resultados
●	Identifique las interfaces de red y las direcciones de red actuales.
Como usuario de la máquina, use el comando para preparar el sistema para este ejercicio.studentworkstationlab
Este comando prepara el entorno y garantiza que todos los recursos necesarios estén disponibles.
[student@workstation ~]$ lab start net-validate
Instrucciones
Utilice el comando para iniciar sesión como usuario. Los sistemas están configurados para usar claves SSH para la autenticación y el acceso sin contraseña a archivos .sshserverastudentservera
[student@workstation ~]$ ssh student@servera
...output omitted...
1.	[student@servera ~]$
Busque el nombre de la interfaz de red asociado a la dirección Ethernet. Registre o recuerde este nombre y utilícelo para reemplazar el marcador de posición en comandos posteriores.52:54:00:00:fa:0aenX
Importante
Los nombres de las interfaces de red están determinados por su tipo de bus y el orden de detección de los dispositivos durante el arranque. Los nombres de su interfaz de red varían según la plataforma del curso y el hardware en uso.
En el sistema, busque el nombre de la interfaz (como o ) asociado a la dirección Ethernet. Utilice este nombre de interfaz para reemplazar el marcador de posición que se utiliza a lo largo de este ejercicio.ens06en1p252:54:00:00:fa:0aenX
[student@servera ~]$ ip link
1: lo: <LOOPBACK,UP,LOWER_UP> mtu 65536 qdisc noqueue state UNKNOWN group default qlen 1000
    link/loopback 00:00:00:00:00:00 brd 00:00:00:00:00:00
2: enX: <BROADCAST,MULTICAST,UP,LOWER_UP> mtu 1500 qdisc fq_codel state UP group default qlen 1000
2.	    link/ether 52:54:00:00:fa:0a brd ff:ff:ff:ff:ff:ff
Muestra la dirección IP actual y la máscara de red para todas las interfaces.
[student@servera ~]$ ip -br addr
lo          UP          127.0.0.1/8 ::1/128
3.	enX:        UP          172.25.250.10/24 fe80::3059:5462:198:58b2/64
Muestra las estadísticas de la interfaz.enX
[student@servera ~]$ ip -s link show enX
2: enX: <BROADCAST,MULTICAST,UP,LOWER_UP> mtu 1500 qdisc fq_codel state UP mode DEFAULT group default qlen 1000
    link/ether 52:54:00:00:fa:0a brd ff:ff:ff:ff:ff:ff
    RX: bytes  packets  errors  dropped overrun mcast
    89014225   168251   0       154418  0       0
    TX: bytes  packets  errors  dropped carrier collsns
4.	    608808     6090     0       0       0       0
Mostrar la información de la ruta.
[student@servera ~]$ ip route
default via 172.25.250.254 dev enX proto static metric 100
5.	172.25.250.0/24 dev enX proto kernel scope link src 172.25.250.10 metric 100
Verifique que el enrutador sea accesible.
[student@servera ~]$ ping -c3 172.25.250.254
PING 172.25.250.254 (172.25.250.254) 56(84) bytes of data.
64 bytes from 172.25.250.254: icmp_seq=1 ttl=64 time=0.196 ms
64 bytes from 172.25.250.254: icmp_seq=2 ttl=64 time=0.436 ms
64 bytes from 172.25.250.254: icmp_seq=3 ttl=64 time=0.361 ms

--- 172.25.250.254 ping statistics ---
3 packets transmitted, 3 received, 0% packet loss, time 49ms
6.	rtt min/avg/max/mdev = 0.196/0.331/0.436/0.100 ms
Muestra todos los saltos entre el sistema local y el sistema.classroom.example.com
[student@servera ~]$ tracepath classroom.example.com
 1?: [LOCALHOST]                      pmtu 1500
 1:  bastion.lab.example.com                               0.337ms
 1:  bastion.lab.example.com                               0.122ms
 2:  172.25.254.254                                        0.602ms reached
7.	     Resume: pmtu 1500 hops 2 back 2
Muestre los sockets TCP de escucha en el sistema local.
[student@servera ~]$ ss -lt
State      Recv-Q Send-Q      Local Address:Port         Peer Address:Port
LISTEN     0      128               0.0.0.0:sunrpc            0.0.0.0:*
LISTEN     0      128               0.0.0.0:ssh               0.0.0.0:*
LISTEN     0      128                  [::]:sunrpc               [::]:*
8.	LISTEN     0      128                  [::]:ssh                  [::]:*
Regrese al sistema como usuario.workstationstudent
[student@servera ~]$ exit
logout
Connection to servera closed.
9.	[student@workstation ~]$
Terminar
En la máquina, cambie al directorio principal del usuario y utilice el comando para completar este ejercicio. Este paso es importante para garantizar que los recursos de ejercicios anteriores no afecten los próximos ejercicios.workstationstudentlab
[student@workstation ~]$ lab finish net-validate
Configurar redes desde la línea de comandos
Objetivos
●	Administre la configuración de red y los dispositivos con el comando.nmcli
Describir el servicio NetworkManager
El servicio supervisa y administra la configuración de red de un sistema. En el entorno gráfico de GNOME, un applet de área de notificación muestra la configuración de la red y la información de estado que se recibe del demonio. Puede interactuar con el servicio a través de la línea de comandos o con herramientas gráficas. Los archivos de configuración del servicio se almacenan en el directorio.NetworkManagerNetworkManagerNetworkManager/etc/NetworkManager/system-connections/
El servicio gestiona la red NetworkManagerDispositivos y Conexiones. Un dispositivo es una interfaz de red física o virtual que proporciona tráfico de red. Un conexión tiene opciones de configuración relacionadas para un solo dispositivo de red. Una conexión también se puede conocer como Perfil de red. Cada conexión debe tener un nombre o ID único, que puede coincidir con el nombre del dispositivo que configura.
Un solo dispositivo puede tener varias configuraciones de conexión y cambiar entre ellas, pero solo puede haber una conexión activa por dispositivo. Por ejemplo, un dispositivo inalámbrico portátil puede configurar una dirección IP fija para su uso en un lugar de trabajo seguro en una conexión, pero puede configurar una segunda conexión con una dirección automatizada y una red privada virtual (VPN) para acceder a la misma red de la empresa desde casa.
Importante
A partir de Red Hat Enterprise Linux 8, los archivos de configuración de formato y el directorio están obsoletos. NetworkManager ahora usa un formato de archivo de clave de estilo INI, que es una estructura de par clave-valor para organizar las propiedades. NetworkManager almacena los perfiles de red en el directorio. Para compatibilidad con versiones anteriores, las conexiones de formato en el directorio aún se reconocen y cargan.ifcfg/etc/sysconfig/network-scripts//etc/NetworkManager/system-connections/ifcfg/etc/sysconfig/network-scripts/
Ver información de red
Utilice la utilidad para crear y editar archivos de conexión desde la línea de comandos. El comando muestra el estado de todos los dispositivos de red:nmclinmcli device status
[user@host ~]$ nmcli dev status
DEVICE  TYPE      STATE         CONNECTION
eno1    ethernet  connected     eno1
ens3    ethernet  connected     static-ens3
eno2    ethernet  disconnected  --
lo      loopback  unmanaged     --
Nota
Puede abreviar objetos y acciones. Por ejemplo, puede abreviar como , y abreviar como . La abreviatura puede ser tan corta como una sola letra, siempre que use suficientes caracteres para identificar de forma única el objeto a administrar.nmclinmcli device disconnectnmcli dev disnmcli connection modifynmcli con mod
El comando muestra una lista de todas las conexiones. Utilice la opción para enumerar solo las conexiones activas.nmcli connection show--active
[user@host ~]$ nmcli con show
NAME         UUID                                  TYPE            DEVICE
eno2         ff9f7d69-db83-4fed-9f32-939f8b5f81cd  802-3-ethernet  --
static-ens3  72ca57a2-f780-40da-b146-99f71c431e2b  802-3-ethernet  ens3
eno1         87b53c56-1f5d-4a29-a869-8a7bdaf56dfa  802-3-ethernet  eno1
[user@host ~]$ nmcli con show --active
NAME         UUID                                  TYPE            DEVICE
static-ens3  72ca57a2-f780-40da-b146-99f71c431e2b  802-3-ethernet  ens3
eno1         87b53c56-1f5d-4a29-a869-8a7bdaf56dfa  802-3-ethernet  eno1
Agregar una conexión de red
Utilice el comando para agregar conexiones de red. Los datos para la conexión de red agregada se almacenan en el directorio como un archivo con un sufijo.nmcli connection add/etc/NetworkManager/system-connections/.nmconnection
En el ejemplo siguiente se agrega una conexión del tipo para la interfaz de red:eno2etherneteno2
[root@host ~]# nmcli con add con-name eno2 \
type ethernet ifname eno2
Connection 'eno2' (8159b66b-3c36-402f-aa4c-2ea933c7a5ce) successfully added
En el ejemplo siguiente se crea una conexión del tipo para la interfaz de red con una configuración de red IPv4 estática. Este comando configura la dirección IP con un prefijo de red y una puerta de enlace de red de . El comando falla si existe el nombre de conexión que intenta agregar.eno3etherneteno3192.168.0.5/24192.168.0.254nmcli connection add
[root@host ~]# nmcli con add con-name eno3 type ethernet ifname eno3 \
ipv4.method manual ipv4.addresses 192.168.0.5/24 ipv4.gateway 192.168.0.254
En el siguiente ejemplo se crea una conexión para el dispositivo con direcciones IPv6 e IPv4 estáticas. Este comando configura la dirección IPv6 con el prefijo de red y la dirección como puerta de enlace predeterminada. El comando también configura la dirección IPv4 con el prefijo de red y la dirección como puerta de enlace predeterminada.eno4eno42001:db8:0:1::c000:207/642001:db8:0:1::1192.0.2.7/24192.0.2.1
[root@host ~]# nmcli con add con-name eno4 type ethernet ifname eno4 \
ipv6.addresses 2001:db8:0:1::c000:207/64 ipv6.gateway 2001:db8:0:1::1 \
ipv6.method manual ipv4.addresses 192.0.2.7/24 ipv4.gateway 192.0.2.1 \
ipv4.method manual
Administrar conexiones de red
El comando activa una conexión de red en el dispositivo al que está vinculado. La activación de una conexión de red requiere el nombre de la conexión, no el nombre del dispositivo.nmcli connection up
[user@host ~]$ nmcli con show
NAME         UUID                                  TYPE            DEVICE
static-ens3  72ca57a2-f780-40da-b146-99f71c431e2b  802-3-ethernet  --
static-ens5  87b53c56-1f5d-4a29-a869-8a7bdaf56dfa  802-3-ethernet  --
[root@host ~]# nmcli con up static-ens3
Connection successfully activated (D-Bus active path: /org/freedesktop/NetworkManager/ActiveConnection/2)
El comando desconecta el dispositivo de red y desactiva la conexión.nmcli device disconnect
[root@host ~]# nmcli dev disconnect ens3
Importante
Utilícelo para detener el tráfico en una interfaz de red y desactivar la conexión.nmcli device disconnect
Dado que la mayoría de las conexiones habilitan el parámetro, el comando no es eficaz para detener el tráfico. Aunque la conexión se desactiva, la conexión automática reactiva inmediatamente la conexión si el dispositivo está activo y disponible. La conexión automática es un comportamiento deseado, ya que mantiene las conexiones a través de interrupciones temporales de la red.autoconnectnmcli connection down
Al desconectar el dispositivo debajo de la conexión, se fuerza que la conexión debe estar inactiva hasta que el dispositivo se vuelva a conectar.
Actualizar la configuración de conexión de red
Las conexiones de servicio de NetworkManager tienen dos tipos de configuración. El administrador configura las propiedades de conexión estática y las almacena en los archivos de configuración. Las propiedades de conexión dinámica se solicitan a un servidor DHCP y no se almacenan de forma persistente./etc/NetworkManager/system-connections/*.nmconnection
Para enumerar la configuración actual de una conexión, utilice el comando. La configuración en minúsculas son propiedades estáticas que el administrador puede cambiar. La configuración en mayúsculas es la configuración activa en uso temporal para esta instancia de conexión.nmcli connection show
[root@host ~]# nmcli con show static-ens3
connection.id:                          static-ens3
connection.uuid:                        87b53c56-1f5d-4a29-a869-8a7bdaf56dfa
connection.interface-name:              --
connection.type:                        802-3-ethernet
connection.autoconnect:                 yes
connection.timestamp:                   1401803453
connection.read-only:                   no
connection.permissions:
connection.zone:                        --
connection.master:                      --
connection.slave-type:                  --
connection.secondaries:
connection.gateway-ping-timeout:        0
802-3-ethernet.port:                    --
802-3-ethernet.speed:                   0
802-3-ethernet.duplex:                  --
802-3-ethernet.auto-negotiate:          yes
802-3-ethernet.mac-address:             CA:9D:E9:2A:CE:F0
802-3-ethernet.cloned-mac-address:      --
802-3-ethernet.mac-address-blacklist:
802-3-ethernet.mtu:                     auto
802-3-ethernet.s390-subchannels:
802-3-ethernet.s390-nettype:            --
802-3-ethernet.s390-options:
ipv4.method:                            manual
ipv4.dns:                               192.168.0.254
ipv4.dns-search:                        example.com
ipv4.addresses:                         { ip = 192.168.0.2/24,
                                          gw = 192.168.0.254 }
ipv4.routes:
ipv4.ignore-auto-routes:                no
ipv4.ignore-auto-dns:                   no
ipv4.dhcp-client-id:                    --
ipv4.dhcp-send-hostname:                yes
ipv4.dhcp-hostname:                     --
ipv4.never-default:                     no
ipv4.may-fail:                          yes
ipv6.method:                            manual
ipv6.dns:                               2001:4860:4860::8888
ipv6.dns-search:                        example.com
ipv6.addresses:                         { ip = 2001:db8:0:1::7/64,
                                          gw = 2001:db8:0:1::1 }
ipv6.routes:
ipv6.ignore-auto-routes:                no
ipv6.ignore-auto-dns:                   no
ipv6.never-default:                     no
ipv6.may-fail:                          yes
ipv6.ip6-privacy:                       -1 (unknown)
ipv6.dhcp-hostname:                     --
...output omitted...
Utilice el comando para actualizar la configuración de conexión. Estos cambios se guardan en el archivo. Consulte la página del comando man (5) para conocer las configuraciones disponibles.nmcli connection modify/etc/NetworkManager/system-connections/name.nmconnectionnm-settings
Utilice el siguiente comando para actualizar la conexión y establecer la dirección IPv4 y la puerta de enlace predeterminada. Utilice el parámetro de comando para habilitar o deshabilitar automáticamente la conexión en el arranque del sistema.static-ens3192.0.2.2/24192.0.2.254nmcliconnection.autoconnect
[root@host ~]# nmcli con mod static-ens3 ipv4.addresses 192.0.2.2/24 \
ipv4.gateway 192.0.2.254 connection.autoconnect yes
Utilice el siguiente comando para actualizar la conexión y establecer la dirección IPv6 y la puerta de enlace predeterminada.static-ens32001:db8:0:1::a00:1/642001:db8:0:1::1
[root@host ~]# nmcli con mod static-ens3 ipv6.addresses 2001:db8:0:1::a00:1/64 \
ipv6.gateway 2001:db8:0:1::1
Importante
Para cambiar la configuración de una conexión DHCP para que sea estática, actualice la configuración de o a . Para una conexión IPv6, actualice la configuración. Si el método no se establece correctamente, la conexión puede bloquearse o estar incompleta cuando se activa, o puede obtener una dirección de DHCP o SLAAC además de la dirección estática configurada.ipv4.methodautodhcpmanualipv6.method
Algunas configuraciones pueden tener varios valores. Se puede agregar un valor específico a la lista o eliminarlo de la configuración de conexión agregando un símbolo más () o menos () al inicio del nombre de la configuración. Si no se incluye un más o menos, el valor especificado reemplaza la lista actual de la configuración. En el ejemplo siguiente se agrega el servidor DNS a la conexión.+-2.2.2.2static-ens3
[root@host ~]# nmcli con mod static-ens3 +ipv4.dns 2.2.2.2
También puede modificar los perfiles de red editando el archivo de configuración de la conexión en . Mientras que los comandos se comunican directamente con NetworkManager para implementar modificaciones inmediatamente, las ediciones de archivos de conexión no se implementan hasta que se le pide a NetworkManager que vuelva a cargar el archivo de configuración. Con la edición manual, puede crear configuraciones complejas en pasos y, a continuación, cargar la configuración final cuando esté lista. En el ejemplo siguiente se cargan todos los perfiles de conexión./etc/NetworkManager/system-connections/nmcli
[root@host ~]# nmcli con reload
En el ejemplo siguiente solo se carga el perfil de conexión en .eno2/etc/NetworkManager/system-connections/eno2.nmconnection
[root@host ~]# nmcli con reload eno2
Eliminar una conexión de red
El comando elimina una conexión del sistema. Este comando desconecta el dispositivo y quita el archivo de configuración de conexión.nmcli connection delete
[root@host ~]# nmcli con del static-ens3
Permisos para modificar la configuración de NetworkManager
El usuario puede usar el comando para cambiar la configuración de red.rootnmcli
Los usuarios sin privilegios que han iniciado sesión en la consola física o virtual también pueden realizar la mayoría de los cambios de configuración de red. Si una persona está en la consola del sistema, es probable que el sistema se esté utilizando como una estación de trabajo o computadora portátil donde el usuario necesita configurar, activar y desactivar conexiones. Los usuarios sin privilegios con los que inician sesión deben cambiar al usuario para cambiar la configuración de red.sshroot
Utilice el comando para ver los permisos actuales. En el ejemplo siguiente se enumeran los permisos de NetworkManager del usuario.nmcli general permissionsroot
[root@host ~]# nmcli gen permissions
PERMISSION                                                        VALUE
org.freedesktop.NetworkManager.checkpoint-rollback                yes
org.freedesktop.NetworkManager.enable-disable-connectivity-check  yes
org.freedesktop.NetworkManager.enable-disable-network             yes
org.freedesktop.NetworkManager.enable-disable-statistics          yes
org.freedesktop.NetworkManager.enable-disable-wifi                yes
org.freedesktop.NetworkManager.enable-disable-wimax               yes
org.freedesktop.NetworkManager.enable-disable-wwan                yes
org.freedesktop.NetworkManager.network-control                    yes
org.freedesktop.NetworkManager.reload                             yes
org.freedesktop.NetworkManager.settings.modify.global-dns         yes
org.freedesktop.NetworkManager.settings.modify.hostname           yes
org.freedesktop.NetworkManager.settings.modify.own                yes
org.freedesktop.NetworkManager.settings.modify.system             yes
org.freedesktop.NetworkManager.sleep-wake                         yes
org.freedesktop.NetworkManager.wifi.scan                          yes
org.freedesktop.NetworkManager.wifi.share.open                    yes
org.freedesktop.NetworkManager.wifi.share.protected               yes
En el ejemplo siguiente se enumeran los permisos de NetworkManager del usuario.
[user@host ~]$ nmcli gen permissions
PERMISSION                                                        VALUE
org.freedesktop.NetworkManager.checkpoint-rollback                auth
org.freedesktop.NetworkManager.enable-disable-connectivity-check  no
org.freedesktop.NetworkManager.enable-disable-network             no
org.freedesktop.NetworkManager.enable-disable-statistics          no
org.freedesktop.NetworkManager.enable-disable-wifi                no
org.freedesktop.NetworkManager.enable-disable-wimax               no
org.freedesktop.NetworkManager.enable-disable-wwan                no
org.freedesktop.NetworkManager.network-control                    auth
org.freedesktop.NetworkManager.reload                             auth
org.freedesktop.NetworkManager.settings.modify.global-dns         auth
org.freedesktop.NetworkManager.settings.modify.hostname           auth
org.freedesktop.NetworkManager.settings.modify.own                auth
org.freedesktop.NetworkManager.settings.modify.system             auth
org.freedesktop.NetworkManager.sleep-wake                         no
org.freedesktop.NetworkManager.wifi.scan                          auth
org.freedesktop.NetworkManager.wifi.share.open                    no
org.freedesktop.NetworkManager.wifi.share.protected               no
Comandos útiles de NetworkManager
En la tabla siguiente se enumeran los comandos de teclado que se describen en esta sección:nmcli
Mandar	Propósito
nmcli dev status	Muestra el estado de NetworkManager de todas las interfaces de red.
nmcli con show	Enumere todas las conexiones.
nmcli con show name	Enumere la configuración actual para el nombre de la conexión.
nmcli con add con-name name	Agregue y asigne un nombre a un nuevo perfil de conexión.
nmcli con mod name	Modifique el nombre de la conexión.
nmcli con reload	Vuelva a cargar los archivos de configuración, después de la edición manual de archivos.
nmcli con up name	Active el nombre de la conexión.
nmcli dev dis dev	Desconecte la interfaz, que también desactiva la conexión actual.
nmcli con del name	Elimine la conexión especificada y su archivo de configuración.
Referencias
Para obtener más información, consulte el Primeros pasos con nmcli Capítulo en https://access.redhat.com/documentation/en-us/red_hat_enterprise_linux/9/html-single/configuring_and_managing_networking/index#getting-started-with-nmcli_configuring-and-managing-networking
NetworkManager(8), (1), (5), (5), (1), (5), (5), (8) y (8) páginas de manualnmclinmcli-examplesnm-settingshostnamectlresolv.confhostnameipip-address
Ejercicio guiado: configuración de redes desde la línea de comandos
Utilice el comando para configurar los ajustes de red.nmcli
Resultados
●	Actualice una configuración de conexión de red de DHCP a estática.
Como usuario de la máquina, use el comando para preparar el sistema para este ejercicio.studentworkstationlab
Este comando prepara el entorno y garantiza que todos los recursos necesarios estén disponibles.
[student@workstation ~]$ lab start net-configure
Instrucciones
Utilice el comando para iniciar sesión en la máquina como usuario.sshserverastudent
[student@workstation ~]$ ssh student@servera
...output omitted...
[student@servera ~]$ sudo -i
[sudo] password for student: student
1.	[root@servera ~]#
Muestra la información de la interfaz de red.
Importante
Los nombres de las interfaces de red están determinados por su tipo de bus y el orden de detección de los dispositivos durante el arranque. Los nombres de su interfaz de red pueden variar según la plataforma del curso y el hardware en uso.
En el sistema, busque el nombre de la interfaz (como , , o ) asociado a la dirección Ethernet . Use este nombre de interfaz para reemplazar el marcador de posición a lo largo de este ejercicio si es diferente.eth1ens06enp0p252:54:00:00:fa:0aeth0
Busque el nombre de la interfaz de red asociado a la dirección Ethernet. Registre o recuerde este nombre y utilícelo para reemplazar el marcador de posición en comandos posteriores.52:54:00:00:fa:0aeth0
[root@servera ~]# ip link
1: lo: <LOOPBACK,UP,LOWER_UP> mtu 65536 qdisc noqueue state UNKNOWN mode DEFAULT group default qlen 1000
    link/loopback 00:00:00:00:00:00 brd 00:00:00:00:00:00
2: eth0: <BROADCAST,MULTICAST,UP,LOWER_UP> mtu 1500 qdisc fq_codel state UP mode DEFAULT group default qlen 1000
    link/ether 52:54:00:00:fa:0a brd ff:ff:ff:ff:ff:ff
    altname enp0s3
    altname ens3
2.	...output omitted...
3.	Utilice el comando para ver la configuración de red.nmcli
Utilice el comando para mostrar solo las conexiones activas.nmcli con show --active
El nombre de la interfaz de red debe aparecer debajo de la columna de salida y el nombre de la conexión activa para ese dispositivo aparece debajo de la columna. En este ejercicio se supone que la conexión activa se denomina . Si el nombre de la conexión activa es diferente, use ese nombre en lugar de para el resto de este ejercicio.DEVICENAMESystem eth0System eth0
[root@servera ~]# nmcli con show --active
NAME         UUID                                  TYPE      DEVICE
System eth0  5fb06bd0-0bb0-7ffb-45f1-d6edd65f3e03  ethernet  eth0
	...output omitted...
Muestra todos los ajustes de configuración de la conexión activa.
[root@servera ~]# nmcli con show "System eth0"
connection.id:                          System eth0
connection.uuid:                        5fb06bd0-0bb0-7ffb-45f1-d6edd65f3e03
connection.stable-id:                   --
connection.type:                        802-3-ethernet
connection.interface-name:              eth0
connection.autoconnect:                 yes
...output omitted...
ipv4.method:                            manual
ipv4.dns:                               172.25.250.220
ipv4.dns-search:                        lab.example.com,example.com
ipv4.dns-options:                       --
ipv4.dns-priority:                      0
ipv4.addresses:                         172.25.250.10/24
ipv4.gateway:                           172.25.250.254
...output omitted...
GENERAL.NAME:                           System eth0
GENERAL.UUID:                           5fb06bd0-0bb0-7ffb-45f1-d6edd65f3e03
GENERAL.DEVICES:                        eth0
GENERAL.IP-IFACE:                       eth0
GENERAL.STATE:                          activated
GENERAL.DEFAULT:                        yes
	...output omitted...
Muestra el estado del dispositivo.
[root@servera ~]# nmcli dev status
DEVICE  TYPE      STATE                   CONNECTION
eth0    ethernet  connected               System eth0
eth1    ethernet  connected               System eth1
	lo      loopback  connected (externally)  lo
Muestra la configuración del dispositivo.eth0
[root@servera ~]# nmcli dev show eth0
GENERAL.DEVICE:                         eth0
GENERAL.TYPE:                           ethernet
GENERAL.HWADDR:                         52:54:00:00:FA:0A
GENERAL.MTU:                            1500
GENERAL.STATE:                          100 (connected)
GENERAL.CONNECTION:                     System eth0
GENERAL.CON-PATH:                       /org/freedesktop/NetworkManager/ActiveConnection/2
WIRED-PROPERTIES.CARRIER:               on
IP4.ADDRESS[1]:                         172.25.250.10/24
IP4.GATEWAY:                            172.25.250.254
IP4.ROUTE[1]:                           dst = 172.25.250.0/24, nh = 0.0.0.0, mt = 100
IP4.ROUTE[2]:                           dst = 0.0.0.0/0, nh = 172.25.250.254, mt = 100
IP4.DNS[1]:                             172.25.250.220
IP4.SEARCHES[1]:                        lab.example.com
IP4.SEARCHES[2]:                        example.com
IP6.ADDRESS[1]:                         fe80::5054:ff:fe00:fa0a/64
IP6.GATEWAY:                            --
	IP6.ROUTE[1]:                           dst = fe80::/64, nh = ::, mt = 256
Cree una conexión estática con la misma dirección IPv4, prefijo de red y puerta de enlace predeterminada que la conexión activa. Asigne a la nueva conexión el nombre .static-addr
Advertencia
Dado que el acceso a la máquina se proporciona a través de la conexión de red principal, establecer valores incorrectos durante la configuración de red puede hacer que la máquina sea inaccesible. Si no se puede acceder a su máquina, use el botón Restablecer sobre lo que solía ser la pantalla gráfica de su máquina y vuelva a intentarlo.
[root@servera ~]# nmcli con add con-name static-addr \
ifname eth0 type ethernet ipv4.method manual ipv4.dns 172.25.250.220 \
ipv4.addresses 172.25.250.10/24 ipv4.gateway 172.25.250.254
4.	Connection 'static-addr' (3ef7c2c6-8c72-4cb6-9b19-2878e50285b1) successfully added.
5.	Muestra y activa la nueva conexión.
Ver todas las conexiones.
[root@servera ~]# nmcli con show
NAME         UUID                                  TYPE      DEVICE
System eth0  5fb06bd0-0bb0-7ffb-45f1-d6edd65f3e03  ethernet  eth0
System eth1  9c92fad9-6ecb-3e6c-eb4d-8a47c6f50c04  ethernet  eth1
lo           d22fdd46-f935-4212-8908-7cdd37b9f723  loopback  lo
	static-addr  3ef7c2c6-8c72-4cb6-9b19-2878e50285b1  ethernet  --
Ver las conexiones activas.
[root@servera ~]# nmcli con show --active
NAME         UUID                                  TYPE      DEVICE
System eth0  5fb06bd0-0bb0-7ffb-45f1-d6edd65f3e03  ethernet  eth0
System eth1  9c92fad9-6ecb-3e6c-eb4d-8a47c6f50c04  ethernet  eth1
	lo           d22fdd46-f935-4212-8908-7cdd37b9f723  loopback  lo
Activa la nueva conexión.static-addr
[root@servera ~]# nmcli con up static-addr
	Connection successfully activated (D-Bus active path: /org/freedesktop/NetworkManager/ActiveConnection/4)
Verifique la nueva conexión activa.
[root@servera ~]# nmcli con show --active
NAME         UUID                                  TYPE      DEVICE
static-addr  3ef7c2c6-8c72-4cb6-9b19-2878e50285b1  ethernet  eth0
System eth1  9c92fad9-6ecb-3e6c-eb4d-8a47c6f50c04  ethernet  eth1
	lo           d22fdd46-f935-4212-8908-7cdd37b9f723  loopback  lo
6.	Actualice la conexión anterior para que no se inicie en el arranque. Compruebe que la conexión se utiliza cuando se reinicia el sistema.static-addr
Deshabilite la conexión original para que no se inicie automáticamente en el arranque.
[root@servera ~]# nmcli con mod "System eth0" \
	connection.autoconnect no
Reinicie el sistema.
[root@servera ~]# systemctl reboot
Connection to servera closed by remote host.
Connection to servera closed.
	[student@workstation ~]$
Inicie sesión en la máquina y verifique que la conexión sea la conexión activa.serverastatic-addr
[student@workstation ~]$ ssh student@servera
...output omitted...
[student@servera ~]$ nmcli con show --active
NAME         UUID                                  TYPE      DEVICE
static-addr  3ef7c2c6-8c72-4cb6-9b19-2878e50285b1  ethernet  eth0
System eth1  9c92fad9-6ecb-3e6c-eb4d-8a47c6f50c04  ethernet  eth1
	lo           6e328ad2-7ea6-411a-a0e8-b7658c71b4d7  loopback  lo
7.	Pruebe la conectividad mediante las nuevas direcciones de red.
Verifique la dirección IP.
[student@servera ~]$ ip -br addr show eth0
	eth0             UP             172.25.250.10/24 fe80::1be9:a14f:c8d9:8af8/64
Verifique la puerta de enlace predeterminada.
[student@servera ~]$ ip route
default via 172.25.250.254 dev eth0 proto static metric 100
10.80.0.0/16 dev eth1 proto kernel scope link src 10.80.3.1 metric 101
169.254.169.254 via 10.80.0.10 dev eth1 proto dhcp src 10.80.3.1 metric 101
	172.25.250.0/24 dev eth0 proto kernel scope link src 172.25.250.10 metric 100
Haga ping a la dirección DNS.
[student@servera ~]$ ping -c3 172.25.250.220
PING 172.25.250.220 (172.25.250.220) 56(84) bytes of data.
64 bytes from 172.25.250.220: icmp_seq=1 ttl=64 time=0.999 ms
64 bytes from 172.25.250.220: icmp_seq=2 ttl=64 time=0.250 ms
64 bytes from 172.25.250.220: icmp_seq=3 ttl=64 time=0.293 ms

--- 172.25.250.220 ping statistics ---
3 packets transmitted, 3 received, 0% packet loss, time 2004ms
	rtt min/avg/max/mdev = 0.250/0.514/0.999/0.343 ms
Regrese al sistema como usuario.workstationstudent
[student@servera ~]$ exit
logout
Connection to servera closed.
	[student@workstation ~]$
Terminar
En la máquina, cambie al directorio principal del usuario y utilice el comando para completar este ejercicio. Este paso es importante para garantizar que los recursos de ejercicios anteriores no afecten los próximos ejercicios.workstationstudentlab
[student@workstation ~]$ lab finish net-configure
Editar archivos de configuración de red
Objetivos
●	Modifique la configuración de red editando los archivos de configuración.
Archivos de configuración de conexión
A partir de Red Hat Enterprise Linux 8, las configuraciones de red se almacenan en el directorio. Esta ubicación de configuración utiliza el formato de archivo de clave en lugar del formato. Sin embargo, las configuraciones almacenadas anteriormente en continúan funcionando. El directorio almacena cualquier cambio con el comando./etc/NetworkManager/system-connections/ifcfg/etc/sysconfig/network-scripts//etc/NetworkManager/system-connections/nmcli con mod name
Formato de archivo clave
NetworkManager utiliza el formato de clave de estilo INI para almacenar perfiles de conexión de red. Los pares clave-valor almacenan configuraciones como secciones (grupos). Cada par clave/valor de configuración de la sección es una de las propiedades enumeradas en la especificación de configuración. Este archivo de configuración almacena la mayoría de las opciones en el mismo formato que el formato de estilo INI. Por ejemplo, escribir direcciones IP como es más fácil de leer que como matrices de enteros.192.168.0.1/24
Aunque la forma recomendada de administrar perfiles es con el comando, los usuarios aún pueden crear o modificar manualmente los archivos de configuración. Después de editar el archivo de configuración, ejecute el comando para informar a NetworkManager sobre estos cambios.nmclinmcli con reload
Tabla 11.7. Comparación de la configuración de NetworkManager y el archivo de formato de archivo clave
nmcli con mod	*.nmconnection archivo	Efecto
ipv4.method manual	[ipv4]
method=manual	Configure las direcciones IPv4 de forma estática.
ipv4.method auto	[ipv4]
method=auto	Busque opciones de configuración de un servidor DHCPv4. Muestra direcciones estáticas solo cuando tiene información de DHCPv4.
ipv4.addresses 192.0.2.1/24	[ipv4]
address1=192.0.2.1/24	Establezca una dirección IPv4 estática y un prefijo de red. Para más de una dirección de conexión, la clave define la segunda dirección y la clave define la tercera dirección.address2address3
ipv4.gateway 192.0.2.254	[ipv4]
gateway=192.0.2.254	Establezca la puerta de enlace predeterminada.
ipv4.dns 8.8.8.8	[ipv4]
dns=8.8.8.8	Modifique para usar este servidor de nombres./etc/resolv.conf
ipv4.dns-search example.com	[ipv4]
dns-search=example.com	Modifique para usar este dominio en la directiva./etc/resolv.confsearch
ipv4.ignore-auto-dns true	[ipv4]
ignore-auto-dns=true	Ignore la información del servidor DNS del servidor DHCP.
ipv6.method manual	[ipv6]
method=manual	Configure las direcciones IPv6 de forma estática.
ipv6.method auto	[ipv6]
method=auto	Configure los ajustes de red con SLAAC desde anuncios de enrutador.
ipv6.method dhcp	[ipv6]
method=dhcp	Configure las opciones de red mediante DHCPv6, pero no mediante SLAAC.
ipv6.addresses 2001:db8::a/64	[ipv6]
address1=2001:db8::a/64	Establezca una dirección IPv6 estática y un prefijo de red. Cuando se utiliza más de una dirección para una conexión, la clave define la segunda dirección y la clave define la tercera dirección.address2address3
ipv6.gateway 2001:db8::1	[ipv6]
gateway=2001:db8::1	Establezca la puerta de enlace predeterminada.
ipv6.dns fde2:6494:1e09:2::d	[ipv6]
dns=fde2:6494:1e09:2::d	Modifique para usar este servidor de nombres. Lo mismo que IPv4./etc/resolv.conf
ipv6.dns-search example.com	[ipv6]
dns-search=example.com	Modifique para usar este dominio en la directiva./etc/resolv.confsearch
ipv6.ignore-auto-dns true	[ipv6]
ignore-auto-dns=true	Ignore la información del servidor DNS del servidor DHCP.
connection.autoconnect yes	[connection]
autoconnect=true	Active automáticamente esta conexión en el arranque.
connection.id ens3	[connection]
id=Main eth0	El nombre de esta conexión.
connection.interface-name ens3	[connection]
interface-name=ens3	La conexión está enlazada a la interfaz de red con este nombre.
802-3-ethernet.mac-address …
[802-3-ethernet]
mac-address=	La conexión está enlazada a la interfaz de red con esta dirección MAC.

Modificar la configuración de red
También puede configurar la red editando directamente los archivos de configuración de conexión. Los archivos de configuración de conexión controlan las interfaces de software para dispositivos de red individuales. Estos archivos generalmente se llaman , donde /etc/NetworkManager/system-connections/name.nmconnectionnombre hace referencia al nombre del dispositivo o a la conexión que controla el archivo de configuración.
Dependiendo del propósito del perfil de conexión, NetworkManager utiliza los siguientes directorios para almacenar los archivos de configuración:
●	El directorio almacena perfiles persistentes que el usuario creó y editó. NetworkManager los copia automáticamente en el directorio./etc/NetworkManager/system-connections//etc/NetworkManager/system-connections/
●	El directorio almacena perfiles temporales, que se eliminan automáticamente al reiniciar el sistema./run/NetworkManager/system-connections/
●	El directorio almacena perfiles inmutables implementados previamente. Cuando edita un perfil de este tipo con la API de NetworkManager, NetworkManager copia este perfil en el almacenamiento persistente o temporal./usr/lib/NetworkManager/system-connections/
Contenido del archivo de configuración de ejemplo para la configuración IPv4 estática:
[connection]
id=Main eth0
uuid=27afa607-ee36-43f0-b8c3-9d245cdc4bb3
type=802-3-ethernet
autoconnect=true

[ipv4]
method=manual

[802-3-ethernet]
mac-address=00:23:5a:47:1f:71
Tabla 11.8. Opciones de configuración de IPv4 para el formato de archivo de clave
Estático	Dinámico	Cualquiera de los dos
[ipv4]
address1=172.25.0.10/24
gateway=172.25.0.254
dns=172.25.254.254	method=auto	[connection]
interface-name=ens3
id=Main eth0
autoconnect=true
uuid=f3e8(…)ad3e
type=ethernet

Después de modificar los archivos de configuración, ejecute el comando para que NetworkManager cargue los cambios de configuración. Si la variable está establecida en en el perfil de conexión, active la conexión manualmente.nmcli con reloadautoconnectfalse
[root@host ~]# nmcli con reload
[root@host ~]# nmcli con up "static-ens3"
Referencias
nmcli(1), (5) y (5) página de manualnm-settingsnm-settings-keyfile
Para obtener más información, consulte el Creación manual de perfiles de NetworkManager en formato de archivo clave en https://access.redhat.com/documentation/en-us/red_hat_enterprise_linux/9/html-single/configuring_and_managing_networking/assembly_manually-creating-networkmanager-profiles-in-key-file-format_configuring-and-managing-networking
Ejercicio guiado: Edición de archivos de configuración de red
Modifique manualmente los archivos de configuración de red y asegúrese de que la nueva configuración surta efecto.
Resultados
●	Configure direcciones de red adicionales en cada sistema.
Como usuario de la máquina, use el comando para preparar el sistema para este ejercicio.studentworkstationlab
Este comando prepara el entorno y garantiza que todos los recursos necesarios estén disponibles.
[student@workstation ~]$ lab start net-edit
Instrucciones
	En la máquina, utilice el comando para iniciar sesión en la máquina como usuario.workstationsshserverastudent
[student@workstation ~]$ ssh student@servera
	...output omitted...
1.	[student@servera ~]$
	Busque los nombres de las interfaces de red con el comando.ip link
Importante
Los nombres de las interfaces de red están determinados por su tipo de bus y el orden de detección de los dispositivos durante el arranque. Los nombres de su interfaz de red pueden variar según la plataforma del curso y el hardware en uso.
Busque el nombre de la interfaz de red asociada a la dirección Ethernet del sistema. Registre o recuerde este nombre y utilícelo para reemplazar el marcador de posición en comandos posteriores. Se llama a la conexión activa y la configuración está en el archivo.en_X_System eth0/etc/NetworkManager/system-connections/"System eth0.nmconnection"
[student@servera ~]$ ip link
	1: lo: <LOOPBACK,UP,LOWER_UP> mtu 65536 qdisc noqueue state UNKNOWN mode DEFAULT group default qlen 1000
	    link/loopback 00:00:00:00:00:00 brd 00:00:00:00:00:00
	2: eth0: <BROADCAST,MULTICAST,UP,LOWER_UP> mtu 1500 qdisc fq_codel state UP mode DEFAULT group default qlen 1000
	    link/ether 52:54:00:00:fa:0a brd ff:ff:ff:ff:ff:ff
	    altname enp0s3
	    altname ens3
	3: eth1: <BROADCAST,MULTICAST,UP,LOWER_UP> mtu 8942 qdisc fq_codel state UP mode DEFAULT group default qlen 1000
	    link/ether fa:16:3e:15:d4:0d brd ff:ff:ff:ff:ff:ff
	    altname enp0s4
	    altname ens4
	[student@servera ~]$ nmcli con show --active
	NAME         UUID                                  TYPE      DEVICE
	System eth0  5fb06bd0-0bb0-7ffb-45f1-d6edd65f3e03  ethernet  eth0
	System eth1  9c92fad9-6ecb-3e6c-eb4d-8a47c6f50c04  ethernet  eth1
	lo           0e77d074-dd20-465e-87f5-e3974e6f42ab  loopback  lo
	[student@servera ~]$ ls /etc/NetworkManager/system-connections/
2.	'System eth0.nmconnection'
3.	En la máquina, cambie al usuario y, a continuación, edite el archivo para agregar la dirección.serveraroot/etc/NetworkManager/system-connections/"System eth0.nmconnection"10.0.1.1/24
	Utilice el comando para cambiar al usuario.sudo -iroot
[student@servera ~]$ sudo -i
	[sudo] password for student: student
	[root@servera ~]#
	Edite el archivo de configuración. Agregue la dirección como la segunda dirección debajo de la primera dirección del archivo./etc/NetworkManager/system-connections/"System eth0.nmconnection"10.0.1.1/24
...output omitted...
	[ipv4]
	address1=172.25.250.10/24,172.25.250.254
	address2=10.0.1.1/24
	...output omitted...
4.	Active la nueva dirección de red con el comando.nmcli
	Vuelva a cargar los cambios de configuración para que NetworkManager los lea.
[root@servera ~]# nmcli con reload
	Active la conexión con los cambios.
[root@servera ~]# nmcli con up "System eth0"
	Connection successfully activated (D-Bus active path: /org/freedesktop/NetworkManager/ActiveConnection/4)
	Verifique que la nueva dirección IP se asigne correctamente.
[root@servera ~]# ip -br addr show eth0
5.	eth0             UP             172.25.250.10/24 10.0.1.1/24 fe80::5054:ff:fe00:fa0a/64
	Regrese a la máquina como usuario.workstationstudent
[root@servera ~]# exit
	logout
	[student@servera ~]$ exit
	logout
	Connection to servera closed.
6.	[student@workstation ~]$
7.	En la máquina, edite el archivo para agregar una dirección y cargar la nueva configuración.serverb/etc/NetworkManager/system-connections/"System eth0.nmconnection"10.0.1.2/24
	Inicie sesión en la máquina como usuario y cambie al usuario.serverbstudentroot
[student@workstation ~]$ ssh student@serverb
	...output omitted...
	[student@serverb ~]$ sudo -i
	[sudo] password for student: student
	[root@serverb ~]#
	Edite el archivo de configuración. Agregue la dirección como la segunda dirección debajo de la primera dirección del archivo./etc/NetworkManager/system-connections/"System eth0.nmconnection"10.0.1.2/24
...output omitted...
	[ipv4]
	address1=172.25.250.11/24,172.25.250.254
	address2=10.0.1.2/24
	...output omitted...
	Vuelva a cargar los cambios de configuración para que NetworkManager los lea.
[root@serverb ~]# nmcli con reload
	Active la conexión con los cambios.
[root@serverb ~]# nmcli con up "System eth0"
	Connection successfully activated (D-Bus active path: /org/freedesktop/NetworkManager/ActiveConnection/4)
	Verifique que la nueva dirección IP se asigne correctamente.
[root@serverb ~]# ip -br addr show eth0
	eth0             UP             172.25.250.11/24 10.0.1.2/24 fe80::5054:ff:fe00:fa0b/64
8.	Pruebe la conectividad entre las máquinas y mediante las nuevas direcciones de red.serveraserverb
	Desde la máquina, haga ping a la nueva dirección de la máquina.serverbservera
[root@serverb ~]# ping -c3 10.0.1.1
	PING 10.0.1.1 (10.0.1.1) 56(84) bytes of data.
	64 bytes from 10.0.1.1: icmp_seq=1 ttl=64 time=1.23 ms
	64 bytes from 10.0.1.1: icmp_seq=2 ttl=64 time=0.372 ms
	64 bytes from 10.0.1.1: icmp_seq=3 ttl=64 time=0.440 ms
	
	--- 10.0.1.1 ping statistics ---
	3 packets transmitted, 3 received, 0% packet loss, time 2040ms
	rtt min/avg/max/mdev = 0.372/0.679/1.225/0.387 ms
	Regrese a la máquina como usuario.workstationstudent
[root@serverb ~]# exit
	logout
	[student@serverb ~]$ exit
	logout
	Connection to serverb closed.
	[student@workstation ~]$
	Acceda a la máquina como usuario para hacer ping a la nueva dirección de la máquina.serverastudentserverb
[student@workstation ~]$ ssh student@servera ping -c3 10.0.1.2
	PING 10.0.1.2 (10.0.1.2) 56(84) bytes of data.
	64 bytes from 10.0.1.2: icmp_seq=1 ttl=64 time=0.726 ms
	64 bytes from 10.0.1.2: icmp_seq=2 ttl=64 time=0.349 ms
	64 bytes from 10.0.1.2: icmp_seq=3 ttl=64 time=0.342 ms
	
	--- 10.0.1.2 ping statistics ---
	3 packets transmitted, 3 received, 0% packet loss, time 2087ms
	rtt min/avg/max/mdev = 0.342/0.472/0.726/0.179 ms
Terminar
En la máquina, cambie al directorio principal del usuario y utilice el comando para completar este ejercicio. Este paso es importante para garantizar que los recursos de ejercicios anteriores no afecten los próximos ejercicios.workstationstudentlab
[student@workstation ~]$ lab finish net-edit
Configuración de nombres de host y resolución de nombres
Objetivos
●	Configure el nombre de host estático de un servidor y su resolución de nombres y pruebe los resultados.
Actualizar el nombre de host del sistema
El comando muestra o modifica temporalmente el nombre de host completo del sistema.hostname
	[root@host ~]# hostname
host.example.com
Especifique un nombre de host estático en el archivo. Utilice el comando para modificar este archivo y ver el nombre de host completo del sistema. Si este archivo no existe, el nombre de host se establece mediante una consulta DNS inversa cuando se asigna una dirección IP a la interfaz./etc/hostnamehostnamectl
	[root@host ~]# hostnamectl hostname host.example.com
	[root@host ~]# hostnamectl status
	   Static hostname: host.example.com
	         Icon name: computer-vm
	           Chassis: vm ðŸ–´
	        Machine ID: ace63d6701c2489ab9c0960c0f1afe1d
	           Boot ID: 0edf5ba1830c48adbd6babfa08f0b867
	    Virtualization: kvm
	  Operating System: Red Hat Enterprise Linux 9.0 (Plow)
	       CPE OS Name: cpe:/o:redhat:enterprise_linux:9::baseos
	            Kernel: Linux 5.14.0-70.13.1.el9_0.x86_64
	      Architecture: x86-64
	   Hardware Vendor: Red Hat
	    Hardware Model: OpenStack Compute
	[root@host ~]# cat /etc/hostname
host.example.com
Importante
En RedÂ Hat Enterprise LinuxÂ 7 y versiones posteriores, el nombre de host estático se almacena en el archivo. RedÂ Hat Enterprise LinuxÂ 6 y versiones anteriores almacenan el nombre de host como una variable en el archivo./etc/hostname/etc/sysconfig/network
Configurar la resolución de nombres
El solucionador de código auxiliar convierte los nombres de host en direcciones IP o al revés. Determina dónde buscar en función de la configuración del archivo. De forma predeterminada, intenta resolver la consulta utilizando primero el archivo./etc/nsswitch.conf/etc/hosts
	[root@host ~]# cat /etc/hosts
	127.0.0.1       localhost localhost.localdomain localhost4 localhost4.localdomain4
	::1             localhost localhost.localdomain localhost6 localhost6.localdomain6
	172.25.254.254 classroom.example.com
172.25.254.254 content.example.com
El comando prueba la resolución del nombre de host en función de la configuración del archivo. En la configuración predeterminada, el comando comienza comprobando el archivo. Si no se encuentra una entrada en el archivo, el solucionador de código auxiliar utiliza un servidor de nombres DNS para buscar el nombre de host. El archivo controla cómo se realiza esta consulta DNS:getent hosts hostname/etc/nsswitch.conf/etc/hosts/etc/hosts/etc/resolv.conf
●	search : Una lista de nombres de dominio para probar con un nombre de host corto. O debe establecerse en el mismo archivo; Si ambos están configurados, solo la última entrada tiene efecto. Consulte (5) para obtener más detalles.searchdomainresolv.conf
●	nameserver : La dirección IP de un servidor de nombres que se va a consultar. Se pueden dar hasta tres directivas de servidor de nombres para proporcionar copias de seguridad si un servidor de nombres está inactivo.
	[root@host ~]# cat /etc/resolv.conf
	# Generated by NetworkManager
	domain example.com
	search example.com
nameserver 172.25.254.254
NetworkManager utiliza la configuración de DNS en los archivos de configuración de conexión para actualizar el archivo. Utilice el comando para modificar las conexiones./etc/resolv.confnmcli
	[root@host ~]# nmcli con mod ID ipv4.dns IP
	[root@host ~]# nmcli con down ID
	[root@host ~]# nmcli con up ID
	[root@host ~]# cat /etc/NetworkManager/system-connections/ID
	...output omitted...
	[ipv4]
	...output omitted...
	dns=8.8.8.8;
...output omitted...
El comportamiento predeterminado del comando es reemplazar cualquier configuración de DNS anterior con la nueva lista de IP que se proporciona. Un carácter más () o menos () delante de la opción de comando agrega o quita una entrada individual, respectivamente.nmcli con mod ID ipv4.dns IP+-nmcliipv4.dns
[root@host ~]# nmcli con mod ID +ipv4.dns IP
En el ejemplo siguiente, agregue el servidor DNS con una dirección IP IPv6 de a la lista de servidores de nombres de la conexión.2001:4860:4860::8888static-ens3
[root@host ~]# nmcli con mod static-ens3 +ipv6.dns 2001:4860:4860::8888
Nota
La configuración de DNS IPv4 e IPv6 estática se convierte en directivas en . En un sistema de doble pila, mantenga en la lista al menos un servidor de nombres IPv4 accesible y uno IPv6 (suponiendo un sistema de doble pila), en caso de problemas de red con cualquiera de las pilas.nameserver/etc/resolv.conf
Prueba de resolución de nombres DNS
El comando puede probar la conectividad del servidor DNS.host HOSTNAME
	[root@host ~]# host servera.lab.example.com
	servera.lab.example.com has address 172.25.250.10
	[root@host ~]# host 172.25.250.10
10.250.25.172.in-addr.arpa domain name pointer servera.lab.example.com.
Importante
DHCP reescribe automáticamente el archivo cuando se inician las interfaces, a menos que especifique en el archivo de configuración de interfaz correspondiente en el directorio./etc/resolv.confignore-auto-dns = yes/etc/NetworkManager/system-connections/
Establezca esta entrada mediante el comando.nmcli
[root@host ~]# nmcli con mod "static-ens3" ipv4.ignore-auto-dns yes
Utilice el comando para probar la conectividad del servidor DNS.dig HOSTNAME
	[root@host ~]# dig servera.lab.example.com
	
	; <<>> DiG 9.16.23-RH <<>> servera.lab.example.com
	;; global options: +cmd
	;; Got answer:
	;; ->>HEADER<<- opcode: QUERY, status: NOERROR, id: 26621
	;; flags: qr aa rd ra; QUERY: 1, ANSWER: 1, AUTHORITY: 1, ADDITIONAL: 2
	
	;; OPT PSEUDOSECTION:
	; EDNS: version: 0, flags:; udp: 1232
	; COOKIE: 5df1b934c1dafb17384d979466685ea98912fd5cbfd21352 (good)
	;; QUESTION SECTION:
	;servera.lab.example.com.	IN	A
	
	;; ANSWER SECTION:
	servera.lab.example.com. 86400	IN	A	172.25.250.10
...output omitted...
Ni los comandos ni los comandos ven la configuración en el archivo. Para probar el archivo, use el comando.hostdig/etc/hosts/etc/hostsgetent hosts HOSTNAME
	[root@host ~]# getent hosts servera.lab.example.com
172.25.250.10  servera.lab.example.com
Referencias
nmcli(1), (1), (5), (1), (1), (1), (1), (1) y (5) páginas de manualhostnamectlhostsgetenthostdiggetentresolv.conf
Para obtener más información, consulte el Guía de configuración y administración de redes en https://access.redhat.com/documentation/en-us/red_hat_enterprise_linux/9/html-single/configuring_and_managing_networking/index
Ejercicio guiado: Configurar nombres de host y resolución de nombres
Configure manualmente el nombre de host estático del sistema, el archivo y el solucionador de nombres DNS./etc/hosts
Resultados
●	Establezca un nombre de host personalizado.
●	Configure las opciones de resolución de nombres.
Como usuario de la máquina, use el comando para preparar el sistema para este ejercicio.studentworkstationlab
Este comando garantiza que todos los recursos necesarios estén disponibles.
[student@workstation ~]$ lab start net-hostnames
Instrucciones
	Inicie sesión como usuario y cambie a usuario.serverastudentroot
[student@workstation ~]$ ssh student@servera
	...output omitted...
	[student@testa ~]$ sudo -i
	[sudo] password for student: student
1.	[root@testa ~]#
2.	Vea la configuración actual del nombre de host.
	Muestra el nombre de host actual.
[root@testa ~]# hostname
	testa
	Muestra el estado del nombre de host. El nombre de host persistente configurado localmente se muestra en el campo. El nombre de host del tiempo de ejecución actual, que se obtiene de los servicios de red DHCP o DNS, se muestra en el campo.Static hostnameTransient hostname
[root@testa ~]# hostnamectl status
	   Static hostname: servera.lab.example.com
	Transient hostname: testa
	         Icon name: computer-vm
	           Chassis: vm ðŸ–´
	        Machine ID: ace63d6701c2489ab9c0960c0f1afe1d
	           Boot ID: 03bf1d5518bd43b4a25cfe9a18d5a46a
	    Virtualization: kvm
	  Operating System: Red Hat Enterprise Linux 9.0 (Plow)
	       CPE OS Name: cpe:/o:redhat:enterprise_linux:9::baseos
	            Kernel: Linux 5.14.0-70.13.1.el9_0.x86_64
	      Architecture: x86-64
	   Hardware Vendor: Red Hat
	    Hardware Model: OpenStack Compute
3.	Establezca un nombre de host estático para que coincida con el nombre de host estático actual.
	Cambie el nombre de host y el archivo de configuración del nombre de host.
[root@testa ~]# hostnamectl hostname \
	servera.lab.example.com
	Vea el contenido del archivo, que proporciona el nombre de host al inicio de la red./etc/hostname
[root@testa ~]# cat /etc/hostname
	servera.lab.example.com
	Cierre sesión e inicie sesión como usuario. Cambie al usuario para cambiar el símbolo del sistema para mostrar el nombre de host actualizado.serverastudentroot
[root@testa ~]# exit
	logout
	[student@testa ~]$ exit
	logout
	Connection to servera closed.
	[student@workstation ~]$ ssh student@servera
	...output omitted...
	[student@servera ~]$ sudo -i
	[sudo] password for student: student
	[root@servera ~]#
	Muestra el estado del nombre de host. El nombre de host transitorio no se muestra, ahora que se ha configurado un nombre de host estático.
[root@servera ~]# hostnamectl status
	 Static hostname: servera.lab.example.com
	       Icon name: computer-vm
	         Chassis: vm
	      Machine ID: 63b272eae8d5443ca7aaa5593479b25f
	         Boot ID: ef299e0e957041ee81d0617fc98ce5ef
	  Virtualization: kvm
	Operating System: Red Hat Enterprise Linux 9.0 (Plow)
	     CPE OS Name: cpe:/o:redhat:enterprise_linux:9::baseos
	          Kernel: Linux 5.14.0-70.el9.x86_64
	    Architecture: x86-64
	 Hardware Vendor: Red Hat
	  Hardware Model: OpenStack Compute
4.	Cambie temporalmente el nombre de host a .testname
	Cambie el nombre de host.
[root@servera ~]# hostname testname
	Muestra el nombre de host actual.
[root@servera ~]# hostname
	testname
	Vea el contenido del archivo, que proporciona el nombre de host al inicio de la red./etc/hostname
[root@servera ~]# cat /etc/hostname
	servera.lab.example.com
	Reinicie el sistema.
[root@servera ~]# systemctl reboot
	Connection to servera closed by remote host.
	Connection to servera closed.
	[student@workstation ~]$
	Inicie sesión como usuario y cambie al usuario.serverastudentroot
[student@workstation ~]$ ssh student@servera
	...output omitted...
	[student@servera ~]$ sudo -i
	[sudo] password for student: student
	[root@servera ~]#
	Muestra el nombre de host actual.
[root@servera ~]# hostname
	servera.lab.example.com
5.	Agregue como apodo local para el servidor del aula y asegúrese de que puede hacer ping al servidor con ese apodo.class
	Busque la dirección IP del servidor.classroom.example.com
[root@servera ~]# host classroom.example.com
	classroom.example.com has address 172.25.254.254
	Actualice el archivo para agregar el servidor para acceder a la dirección IP. En el ejemplo siguiente se muestra el contenido esperado del archivo./etc/hostsclass172.25.254.254/etc/hosts
[root@servera ~]# vim /etc/hosts
	127.0.0.1   localhost localhost.localdomain localhost4 localhost4.localdomain4
	::1         localhost localhost.localdomain localhost6 localhost6.localdomain6
	172.25.254.254 classroom.example.com classroom class
	Busque la dirección IP del servidor.class
[root@servera ~]# host class
	Host class not found: 3(NXDOMAIN)
	[root@servera ~]# getent hosts class
	172.25.254.254  classroom.example.com classroom class
	Utilice el comando para enviar paquetes al servidor.pingclass
[root@servera ~]# ping -c3 class
	PING classroom.example.com (172.25.254.254) 56(84) bytes of data.
	64 bytes from classroom.example.com (172.25.254.254): icmp_seq=1 ttl=63 time=1.21 ms
	64 bytes from classroom.example.com (172.25.254.254): icmp_seq=2 ttl=63 time=0.688 ms
	64 bytes from classroom.example.com (172.25.254.254): icmp_seq=3 ttl=63 time=0.559 ms
	
	--- classroom.example.com ping statistics ---
	3 packets transmitted, 3 received, 0% packet loss, time 2046ms
	rtt min/avg/max/mdev = 0.559/0.820/1.214/0.283 ms
	Regrese al sistema como usuario.workstationstudent
[root@servera ~]# exit
	logout
	[student@servera ~]$ exit
	logout
	Connection to servera closed.
	[student@workstation ~]$
Terminar
En la máquina, cambie al directorio principal del usuario y utilice el comando para completar este ejercicio. Este paso es importante para garantizar que los recursos de ejercicios anteriores no afecten los próximos ejercicios.workstationstudentlab
[student@workstation ~]$ lab finish net-hostnames
Laboratorio: Administración de redes
Configure los ajustes de red en un servidor RedÂ Hat Enterprise Linux.
Resultados
●	Configure dos direcciones IPv4 estáticas para la interfaz de red principal.
Como usuario de la máquina, use el comando para preparar el sistema para este ejercicio.studentworkstationlab
Este comando prepara el entorno y garantiza que todos los recursos necesarios estén disponibles.
[student@workstation ~]$ lab start net-review
Instrucciones
1.	Inicie sesión en la máquina como usuario. Cambie al usuario.serverbstudentroot
	Inicie sesión en la máquina como usuario y cambie al usuario.serverbstudentroot
[student@workstation ~]$ ssh student@serverb
	...output omitted...
	[student@serverb ~]$ sudo -i
	[sudo] password for student: student
	[root@serverb ~]#
2.	Cree una conexión con una configuración de red estática mediante la configuración de la tabla.
Parámetro	Ajuste
Nombre de la conexión	laboratorio
Nombre de la interfaz	ethX (puede variar; use la interfaz con la dirección MAC)52:54:00:00:fa:0b
Dirección IP	172.25.250.11/24
Dirección de puerta de enlace	172.25.250.254
Dirección DNS	172.25.250.254
	
Determine el nombre de la interfaz y el nombre de la conexión activa actual.
Importante
El nombre de su conexión puede variar según la plataforma del curso y el hardware en uso. La solución supone que el nombre de la interfaz es y que el nombre de la conexión es . Busque el nombre de conexión actual (como o ) que está asociado a la interfaz en la tabla. Use el nombre de la conexión localizada para reemplazarlo a lo largo de este ejercicio si es diferente.eth0System eth0System eth0Wired connection 1System eth0
[root@serverb ~]# ip link
	1: lo: <LOOPBACK,UP,LOWER_UP> mtu 65536 qdisc noqueue state UNKNOWN mode DEFAULT group default qlen 1000
	    link/loopback 00:00:00:00:00:00 brd 00:00:00:00:00:00
	2: eth0: <BROADCAST,MULTICAST,UP,LOWER_UP> mtu 1500 qdisc fq_codel state UP mode DEFAULT group default qlen 1000
	    link/ether 52:54:00:00:fa:0b brd ff:ff:ff:ff:ff:ff
	    altname enp0s3
	    altname ens3
	3: eth1: <BROADCAST,MULTICAST,UP,LOWER_UP> mtu 8942 qdisc fq_codel state UP mode DEFAULT group default qlen 1000
	    link/ether fa:16:3e:a1:e8:d9 brd ff:ff:ff:ff:ff:ff
	    altname enp0s4
	    altname ens4
	[root@serverb ~]# nmcli con show --active
	NAME         UUID                                  TYPE      DEVICE
	System eth0  5fb06bd0-0bb0-7ffb-45f1-d6edd65f3e03  ethernet  eth0
	System eth1  9c92fad9-6ecb-3e6c-eb4d-8a47c6f50c04  ethernet  eth1
	lo           f3266717-b049-4b7a-a37b-0b34671a1d77  loopback  lo
	Cree el perfil de conexión en función de la información de la tabla de las instrucciones. Asocie el perfil con la interfaz de red, como se indica en el resultado del comando anterior.labip link
[root@serverb ~]# nmcli con add con-name lab ifname eth0 type ethernet \
	ipv4.method manual ipv4.dns '172.25.250.254' \
	ipv4.addresses '172.25.250.11/24' ipv4.gateway '172.25.250.254'
	Connection 'lab' (8321cc19-5bdf-46fb-8046-10cc4203732c) successfully added.
3.	Configure la nueva conexión para que se inicie automáticamente. Otras conexiones no deben iniciarse automáticamente.
	[root@serverb ~]# nmcli con mod "lab" connection.autoconnect yes
4.	[root@serverb ~]# nmcli con mod "System eth0" connection.autoconnect no
5.	Modifique la nueva conexión para usar también la dirección IP.10.0.1.1/24
	[root@serverb ~]# nmcli con mod "lab" +ipv4.addresses '10.0.1.1/24'
6.	[root@serverb ~]# nmcli con reload
7.	Configure el archivo para que pueda hacer referencia a la dirección IP con el nombre.hosts10.0.1.1private
8.	[root@serverb ~]# echo "10.0.1.1 private" >> /etc/hosts
9.	Reinicie el sistema.
	[root@serverb ~]# systemctl reboot
	Connection to serverb closed by remote host.
	Connection to serverb closed.
10.	[student@workstation ~]$
11.	Compruebe que la máquina esté inicializada.serverb
	[student@workstation ~]$ ping -c3 serverb
	PING serverb.lab.example.com (172.25.250.11) 56(84) bytes of data.
	64 bytes from serverb.lab.example.com (172.25.250.11): icmp_seq=1 ttl=64 time=0.635 ms
	64 bytes from serverb.lab.example.com (172.25.250.11): icmp_seq=2 ttl=64 time=0.432 ms
	64 bytes from serverb.lab.example.com (172.25.250.11): icmp_seq=3 ttl=64 time=0.428 ms
	
	--- serverb.lab.example.com ping statistics ---
	3 packets transmitted, 3 received, 0% packet loss, time 2048ms
12.	rtt min/avg/max/mdev = 0.428/0.498/0.635/0.096 ms
Evaluación
Como usuario de la máquina, utilice el comando para calificar el trabajo. Corrija los errores notificados y vuelva a ejecutar el comando hasta que se realice correctamente.studentworkstationlab
[student@workstation ~]$ lab grade net-review
Terminar
En la máquina, cambie al directorio principal del usuario y utilice el comando para completar este ejercicio. Este paso es importante para garantizar que los recursos de ejercicios anteriores no afecten los próximos ejercicios.workstationstudentlab
[student@workstation ~]$ lab finish net-review
Resumen
●	El modelo de red TCP/IP es un conjunto simplificado de abstracciones de cuatro capas que describe cómo interoperan los diferentes protocolos para que las computadoras envíen tráfico de una máquina a otra a través de Internet.
●	IPv4 es el protocolo de red principal en Internet hoy en día.
●	IPv6 está pensado como un eventual reemplazo del protocolo de red IPv4.
●	De forma predeterminada, Red Hat Enterprise Linux funciona en modo de doble pila y utiliza ambos protocolos de red en paralelo.
●	Las rutas de red determinan la interfaz de red correcta para enviar paquetes a una red en particular.
●	El daemon supervisa y gestiona la configuración de red.NetworkManager
●	La herramienta de línea de comandos configura la configuración de red con el demonio.nmcliNetworkManager
●	A partir de Red Hat Enterprise Linux 9, la ubicación predeterminada para las configuraciones de red es el directorio./etc/NetworkManager/system-connections
●	El nombre de host estático del sistema se almacena en el archivo./etc/hostname
●	El comando modifica o ve el estado del nombre de host del sistema y la configuración relacionada.hostnamectl
Capítulo 12. Instalación y actualización de paquetes de software
Sistemas de registro para el soporte de Red Hat
Cuestionario: Registrar sistemas para el soporte de Red Hat
Explicar e investigar los paquetes de software RPM
Ejercicio guiado: Explicar e investigar paquetes de software RPM
Instalar y actualizar paquetes de software con DNF
Ejercicio guiado: Instalación y actualización de paquetes de software con DNF
Habilitar repositorios de software DNF
Ejercicio guiado: Habilitar repositorios de software DNF
Laboratorio: Instalación y actualización de paquetes de software
Resumen
Abstracto
Gol	Descargue, instale, actualice y administre paquetes de software desde repositorios de paquetes de Red Hat y DNF.
Objetivos	●	
Registre un sistema utilizando su cuenta de Red Hat y asígnele derechos para actualizaciones de software y servicios de soporte proporcionados por Red Hat.
●	Explique cómo se proporciona el software como paquetes RPM e investigue los paquetes de sistema instalados DNF y RPM.
●	Busque, instale y actualice paquetes de software con el comando.dnf
●	Habilite y deshabilite el uso del servidor de repositorios DNF de Red Hat o de terceros.
Secciones	●	
Sistemas de registro para Red Hat Support (y cuestionario)
●	Explicar e investigar los paquetes de software RPM (y ejercicio guiado)
●	Instalación y actualización de paquetes de software con DNF (y ejercicio guiado)
●	Habilitar repositorios de software DNF (y ejercicio guiado)
Laboratorio	●	
Instalación y actualización de paquetes de software
Sistemas de registro para el soporte de Red Hat
Objetivos
●	Registre un sistema utilizando su cuenta de Red Hat y asígnele derechos para actualizaciones de software y servicios de soporte proporcionados por Red Hat.
Gestión de suscripciones de Red Hat
Red Hat Subscription Management proporciona herramientas para autorizar a las máquinas a suscribirse a productos, para que los administradores obtengan actualizaciones de los paquetes de software y para realizar un seguimiento de la información sobre los contratos de soporte y las suscripciones que utilizan los sistemas. Las herramientas estándar, como el comando, obtienen paquetes de software y actualizaciones a través de una red de distribución de contenido que proporciona Red Hat Content Delivery Network.dnf
Puede realizar las siguientes tareas principales con las herramientas de administración de suscripciones de Red Hat:
●	Registro un sistema para asociarlo a la cuenta de Red Hat con una suscripción activa. Con el Administrador de suscripciones, el sistema puede registrarse de forma única en el inventario del servicio de suscripción. Puede anular el registro del sistema cuando no esté en uso.
●	Subscribir un sistema para autorizar actualizaciones para los productos Red Hat seleccionados. Las suscripciones tienen niveles específicos de soporte técnico, fechas de expiración y repositorios predeterminados. Las herramientas ayudan a adjuntar automáticamente o seleccionar un derecho específico.
●	Habilitación de repositorios para proporcionar paquetes de software. De forma predeterminada, cada suscripción habilita varios repositorios; Otros repositorios, como actualizaciones o código fuente, están habilitados o deshabilitados. Un repositorio es una ubicación central para almacenar y mantener paquetes de software.
●	Revisión y seguimiento derechos disponibles o consumidos. En el Portal del cliente de Red Hat, puede ver la información de suscripción localmente en un sistema específico o para una cuenta de Red Hat.
Acceso simple al contenido
Simple Content Access (SCA) es una capacidad de administración de suscripciones de Red Hat. Cuando habilita SCA para su organización, el proceso de asignación de derechos se simplifica. SCA elimina el requisito de adjuntar suscripciones a nivel de sistema. Registra sus sistemas, habilita los repositorios que necesita cada sistema y comienza a instalar paquetes de software.
Simple Content Access es una función opcional de Red Hat Satellite Server y Red Hat Subscription Management. Este curso también incluye los comandos de suscripción, según sea necesario, si aún no ha habilitado SCA.
Claves de activación
Un clave de activación es un archivo de administración de suscripciones preconfigurado que está disponible para su uso tanto con Red Hat Satellite Server como con la administración de suscripciones a través del Portal del cliente de Red Hat. Use las herramientas de línea de comandos con claves de activación para simplificar el registro y la asignación de suscripciones predefinidas. Este método de registro es beneficioso para automatizar instalaciones e implementaciones. Para las organizaciones que habilitan Simple Content Access, las claves de activación pueden registrar sistemas y habilitar repositorios sin necesidad de adjuntar suscripciones.
Suscribir un sistema a Red Hat
Red Hat migrará de access.redhat.com a Hybrid Cloud Console console.redhat.com a finales de 2024. A finales de 2024, los usuarios de Red Hat Subscription Management que no hayan cambiado al uso de Simple Content Access se convertirán para usar esta experiencia. Esta migración unifica las experiencias de administración de suscripciones y sistemas, independientemente del método de implementación o registro. El console.redhat.com proporciona características como permisos más enriquecidos, simplificación del registro de clientes y una mejor alineación con la administración nativa de la nube.
Además, Red Hat está pasando de la gestión de suscripciones basada en derechos (a nivel del sistema) a la gestión de suscripciones a nivel de cuenta (Simple Content Access).
Existen diferentes opciones para registrar un sistema en el Portal del cliente de Red Hat. Por ejemplo, puede acceder a una interfaz gráfica mediante una aplicación de GNOME o a través de la consola web de RHEL, o puede registrar su sistema mediante una herramienta de línea de comandos.
Suscribir un sistema con la aplicación GNOME
Para registrar un sistema mediante una aplicación de GNOME, inicie la aplicación Red Hat Subscription Manager desde el menú Actividades. Tipo suscripción en el campo Escriba para buscar y haga clic en la aplicación Red Hat Subscription Manager. Cuando se le solicite, introduzca la contraseña adecuada para autenticarse. En la ventana Suscripciones, haga clic en Registrar para abrir el cuadro de diálogo Sistema de registro.
 
Figura 12.1: Cuadro de diálogo Sistema de registro
De forma predeterminada, los sistemas se registran en el Portal del cliente de Red Hat. Proporcione el nombre de usuario y la contraseña de su cuenta del Portal del cliente de Red Hat y haga clic en Registrarse para registrar el sistema. Cuando se registra, el sistema adjunta automáticamente una suscripción disponible.
Cierre la ventana Suscripciones después de registrar y asignar el sistema a una suscripción. El sistema ahora está suscrito y listo para recibir actualizaciones o instalar nuevo software de acuerdo con la suscripción que está adjunta a Red Hat Content Delivery Network.
Suscribir un sistema con la consola web de RHEL
Para registrar un sistema con la consola web, debe iniciar sesión como usuario privilegiado. Haga clic en Suscripciones y, a continuación, haga clic en Registrar:
 
Figura 12.2: Suscripciones a la consola web
El cuadro de diálogo Registrar sistema en la consola web es similar a la aplicación GNOME. Proporcione el nombre de usuario y la contraseña de su cuenta del Portal del cliente de Red Hat y haga clic en Registrarse para registrar el sistema. A continuación, puede instalar un nuevo software o actualizar su sistema, de acuerdo con su suscripción adjunta.
Suscribir un sistema con la herramienta de línea de comandos
Hay dos herramientas de línea de comandos disponibles para registrar su sistema.
Utilice el comando para registrar sistemas RHEL 8.7 o anteriores, o si está registrando sistemas con un servidor satélite de Red Hat.subscription-manager
El comando registra RHEL 8.8 y sistemas posteriores en Red Hat Customer Portal y también puede habilitar el servicio Red Hat Insights con un solo comando.rhc
Suscribir un sistema mediante el comando rhc
El comando reemplaza a la herramienta anterior y se puede utilizar en sistemas RHEL recientes para registrarlos en Red Hat Customer Portal y habilitar el servicio Red Hat Insights con un solo comando.rhcsubscription-manager
Utilice el comando junto con una clave de activación y el identificador numérico de la organización (ID de organización) para registrar un sistema y habilitar el servicio Red Hat Insights. Puede utilizar una clave de activación preconfigurada para aplicar las características seleccionadas a nivel del sistema, como los atributos que especifican el propósito del sistema, durante el proceso de registro.rhc connect
	[root@host ~]# rhc connect -a host_key -o 117018
	Connecting host.lab.example.com to Red Hat.
	This might take a few seconds.
	
	● Connected to Red Hat Subscription Management
	● Connected to Red Hat Insights
	● Activated the Red Hat connector daemon
	
Manage your Red Hat connector systems: https://red.ht/connector
También puede usar el nombre de usuario y la contraseña para registrar su sistema:
[root@host ~]# rhc connect -u <_username_> -p <_password_>
En el ejemplo siguiente se muestra cómo anular el registro de un sistema:
[root@host ~]# rhc disconnect
Suscribir un sistema mediante el comando subscription-manager
El comando adjunta automáticamente un sistema a las suscripciones compatibles mejor adaptadas para el sistema.subscription-manager
Registre un sistema utilizando las credenciales del Portal del cliente de Red Hat como usuario:root
	[root@host ~]# subscription-manager register --username <yourusername>
	Registering to: subscription.rhsm.redhat.com:443/subscription
	Password: yourpassword
	The system has been registered with ID: 1457f7e9-f37e-4e93-960a-c94fe08e1b4f
The registered system name is: host.example.com
Vea las suscripciones disponibles para su cuenta de Red Hat:
	[root@host ~]# subscription-manager list --available
	-------------------------------------------
	    Available Subscriptions
	-------------------------------------------
...output omitted...
Adjuntar automáticamente una suscripción:
	[root@host ~]# subscription-manager attach --auto
...output omitted...
Como alternativa, adjunte una suscripción de un grupo específico de la lista de suscripciones disponibles:
	[root@host ~]# subscription-manager attach --pool=poolID
...output omitted...
Ver suscripciones consumidas:
	[root@host ~]# subscription-manager list --consumed
...output omitted...
Anular el registro de un sistema:
	[root@host ~]# subscription-manager unregister
	Unregistering from: subscription.rhsm.redhat.com:443/subscription
System has been unregistered.
Certificados de derechos
Los certificados digitales almacenan la información de derechos actual en el sistema local. El sistema registrado almacena los certificados de titularidad en el directorio./etc/pki
●	/etc/pki/product indican los productos de Red Hat instalados.
●	/etc/pki/consumer identifican la cuenta de Red Hat para su registro.
●	/etc/pki/entitlement indican qué suscripciones están adjuntas.
El comando inspecciona los certificados y examina las suscripciones adjuntas en el sistema.rctsubscription-manager
Referencias
rhc(8), (8) y (8) páginas de manualsubscription-managerrct
Para obtener más información, consulte Registro del sistema y administración de suscripciones en https://access.redhat.com/documentation/en-us/red_hat_enterprise_linux/9/html-single/configuring_basic_system_settings/assembly_registering-the-system-and-managing-subscriptions_configuring-basic-system-settings
Explicar e investigar los paquetes de software RPM
Objetivos
●	Explique cómo se proporciona el software como paquetes RPM e investigue los paquetes de sistema instalados DNF y RPM.
Paquetes de software y RPM
El RPM Package Manager, que Red Hat desarrolló originalmente, proporciona una forma estándar de empaquetar software para su distribución. Administrar software en forma de paquetes RPM es más simple que trabajar con software que se extrae a un sistema de archivos desde un archivo. Con los paquetes RPM, los administradores pueden realizar un seguimiento de los archivos que instala el paquete de software, los archivos que elimina el paquete de software si lo desinstala y verifica que los paquetes de soporte estén presentes cuando lo instala. La base de datos RPM local de su sistema almacena la información sobre los paquetes instalados. Red Hat proporciona todo el software para Red Hat Enterprise Linux como un paquete RPM.
Los nombres de archivo de paquetes RPM constan de cuatro elementos (más el sufijo):.rpmname-version-release.architecture
 
Figura 12.3: Elementos de nombre de archivo RPM
●	NAME es una o más palabras para describir el contenido ().coreutils
●	VERSION es el número de versión del software original ().8.32
●	RELEASE es el número de versión del paquete basado en esa versión, y lo establece el empaquetador, que podría no ser el desarrollador de software original ().31.el9
●	ARCH es la arquitectura del procesador en la que se compila el paquete para ejecutarse. El valor indica que este paquete está compilado para la versión de 64 bits del conjunto de instrucciones x86 (a diferencia de para ARM de 64 bits, etc.).x86_64aarch64
Los paquetes RPM a menudo se descargan de repositorios. Un repositorio es una ubicación central para almacenar y mantener paquetes de software RPM.
Solo necesita el nombre del paquete para instalar paquetes RPM desde repositorios.
●	Si existen varias versiones, el Administrador de paquetes RPM instala el paquete con el número de versión posterior.
●	Si existen varias versiones de una sola versión, el Administrador de paquetes RPM instala el paquete con el número de versión posterior.
Cada paquete RPM es un archivo con los siguientes componentes:
●	Los archivos que el paquete instala en el sistema.
●	Información sobre el paquete (metadatos), como el nombre, la versión, la versión y la arquitectura; un resumen y una descripción del viaje combinado; si requiere la instalación de otros paquetes; licenciamiento; un registro de cambios de paquetes; y otros detalles.
●	Scripts que pueden ejecutarse al instalar, actualizar o quitar el paquete. Estos scripts también pueden ejecutarse al instalar, actualizar o quitar otros paquetes.
Por lo general, los proveedores de software firman digitalmente los paquetes RPM con claves GPG (GNU Privacy Guard). (Red Hat firma digitalmente todos los paquetes que lanza). El sistema RPM verifica la integridad del paquete confirmando que el paquete está firmado con la clave GPG adecuada. El sistema RPM no puede instalar un paquete si la firma GPG no coincide.
Actualizar software con paquetes RPM
Red Hat genera un paquete RPM completo para actualizar el software. Un administrador que instala ese paquete solo obtiene la versión más reciente del paquete. No es necesario instalar una versión anterior de un paquete para parchearlo. Para actualizar el software, RPM elimina la versión anterior del paquete e instala la versión más reciente. Las actualizaciones generalmente conservan los archivos de configuración, pero el empaquetador de la nueva versión define el comportamiento exacto.
Normalmente, solo se instala una versión de un paquete a la vez. Si un paquete se compila con nombres de archivo no conflictivos, puede instalar varias versiones. El paquete es un ejemplo de instalación de múltiples versiones de paquetes. Debido a que prueba un nuevo kernel solo arrancando en ese kernel, el paquete está diseñado para admitir la instalación de varias versiones. Si el nuevo kernel no arranca, puede volver al kernel anterior.kernel
Examinar paquetes RPM
La utilidad es una herramienta de bajo nivel que puede recuperar información sobre el contenido de los archivos de paquetes y los paquetes instalados. De forma predeterminada, la herramienta obtiene información de una base de datos local de paquetes instalados. Utilice la opción de comando para obtener información sobre un archivo de paquete descargado pero desinstalado. Utilice esta opción para inspeccionar el contenido del paquete antes de instalarlo.rpmrpm-p
Recupere información general sobre los paquetes instalados:
●	rpm -qa : Enumera todos los paquetes instalados.
●	rpm -qf FILENAME : Determinar qué paquete proporciona NOMBRE.
	[user@host ~]$ rpm -qf /etc/yum.repos.d
redhat-release-9.1-1.0.el9.x86_64
Obtenga información sobre paquetes específicos:
●	rpm -q : Enumera la versión del paquete instalada actualmente.
	[user@host ~]$ rpm -q dnf
dnf-4.10.0-4.el9.noarch
●	rpm -qi : Obtenga información detallada del paquete.
●	rpm -ql : Enumera los archivos que instala el paquete.
	[user@host ~]$ rpm -ql dnf
	/usr/bin/dnf
	/usr/lib/systemd/system/dnf-makecache.service
	/usr/lib/systemd/system/dnf-makecache.timer
	/usr/share/bash-completion
	/usr/share/bash-completion/completions
	/usr/share/bash-completion/completions/dnf
...output omitted...
●	rpm -qc : Enumera solo los archivos de configuración que instala el paquete.
	[user@host ~]$ rpm -qc openssh-clients
	/etc/ssh/ssh_config
/etc/ssh/ssh_config.d/50-redhat.conf
●	rpm -qd : Enumera solo los archivos de documentación que instala el paquete.
	[user@host ~]$ rpm -qd openssh-clients
	/usr/share/man/man1/scp.1.gz
	/usr/share/man/man1/sftp.1.gz
	/usr/share/man/man1/ssh-add.1.gz
	/usr/share/man/man1/ssh-agent.1.gz
...output omitted...
●	rpm -q --scripts : Enumera los scripts de shell que se ejecutan antes o después de instalar o eliminar el paquete.
	[user@host ~]$ rpm -q --scripts openssh-server
	preinstall scriptlet (using /bin/sh):
	getent group sshd >/dev/null || groupadd -g 74 -r sshd || :
	getent passwd sshd >/dev/null || \
	  useradd -c "Privilege-separated SSH" -u 74 -g sshd \
	  -s /sbin/nologin -r -d /usr/share/empty.sshd sshd 2> /dev/null || :
	postinstall scriptlet (using /bin/sh):
	
	if [ $1 -eq 1 ] && [ -x "/usr/lib/systemd/systemd-update-helper" ]; then
	    # Initial installation
	    /usr/lib/systemd/systemd-update-helper install-system-units sshd.service sshd.socket || :
	fi
...output omitted...
●	rpm -q --changelog : Enumera la información del registro de cambios para el paquete.
	[user@host ~]$ rpm -q --changelog audit
	* Tue Feb 22 2022 Sergio Correia <scorreia@redhat.com> - 3.0.7-101
	- Adjust sample-rules dir permissions
	  Resolves: rhbz#2054432 - /usr/share/audit/sample-rules is no longer readable by non-root users
	
	* Tue Jan 25 2022 Sergio Correia <scorreia@redhat.com> - 3.0.7-100
	- New upstream release, 3.0.7
	  Resolves: rhbz#2019929 - capability=unknown-capability(39) in audit messages
...output omitted...
Consulte los archivos de paquetes locales:
●	rpm -qlp : Enumera los archivos que instala el paquete local.
	[user@host ~]$ ls -l podman-4.0.0-6.el9.x86_64.rpm
-rw-r--r--. 1 student student 13755101 Mar 22 11:35 podman-4.0.0-6.el9.x86_64.rpm2637-15.el9.x86_64.rpm
	[user@host ~]$ rpm -qlp podman-4.0.0-6.el9.x86_64.rpm
	/etc/cni/net.d
	/etc/cni/net.d/87-podman-bridge.conflist
	/usr/bin/podman
...output omitted...
Instalar paquetes RPM
Utilice el comando para instalar un paquete RPM que descargó en el directorio local.rpm
	[root@host ~]# rpm -ivh podman-4.0.0-6.el9.x86_64.rpm
	Verifying...                          ################################# [100%]
	Preparing...                          ################################# [100%]
	Updating / installing...
        podman-2:4.0.0-6              ################################# [100%]
Advertencia
Tenga cuidado al instalar paquetes de terceros, no solo por el software que los paquetes pueden instalar, sino porque el paquete RPM puede incluir scripts arbitrarios que se ejecutan como el usuario como parte del proceso de instalación.root
Extracción de paquetes RPM
Utilice el comando para extraer archivos de un archivo de paquete RPM sin instalar el paquete.rpm2cpio
El comando convierte un paquete RPM en un archivo. Después de convertir el paquete RPM en un archivo, el comando puede extraer una lista de archivos.rpm2cpiocpiocpiocpio
Utilice el comando con la opción de extraer archivos de la entrada estándar. Utilice la opción para crear subdirectorios según sea necesario, comenzando en el directorio de trabajo actual. Utilice la opción para una salida detallada.cpio-i-d-v
	[user@host tmp-extract]$ rpm2cpio httpd-2.4.51-7.el9_0.x86_64.rpm | cpio -idv
	./etc/httpd/conf
	./etc/httpd/conf.d/autoindex.conf
	./etc/httpd/conf.d/userdir.conf
	./etc/httpd/conf.d/welcome.conf
	./etc/httpd/conf.modules.d
	./etc/httpd/conf.modules.d/00-base.conf
	./etc/httpd/conf.modules.d/00-dav.conf
	./etc/httpd/conf.modules.d/00-mpm.conf
	./etc/httpd/conf.modules.d/00-optional.conf
	./etc/httpd/conf.modules.d/00-proxy.conf
	./etc/httpd/conf.modules.d/00-systemd.conf
	./etc/httpd/conf.modules.d/01-cgi.conf
	./etc/httpd/conf.modules.d/README
	./etc/httpd/conf/httpd.conf
	...output omitted...
	9774 blocks
	[user@host tmp-extract]$ ls -l
	total 1552
	drwxr-xr-x. 5 user user       55 Feb  3 15:06 etc
	-rw-r--r--. 1 user user  1588633 Feb  3 15:06 httpd-2.4.51-7.el9_0.x86_64.rpm
	drwxr-xr-x. 3 user user       19 Feb  3 15:06 run
	drwxr-xr-x. 7 user user       70 Feb  3 15:06 usr
drwxr-xr-x. 5 user user       41 Feb  3 15:06 var
Extraiga archivos individuales especificando la ruta del archivo:
	[user@host ~]$ rpm2cpio httpd-2.4.51-7.el9_0.x86_64.rpm | cpio -id "*/etc/httpd/conf/httpd.conf"
	9774 blocks
	[user@host ~]$ ls etc/httpd/conf/
httpd.conf
Utilice los comandos and para enumerar los archivos de un paquete RPM. Utilice la opción del comando para obtener una salida detallada.rpm2cpiocpio -t-vcpio
	[student@servera ~]$ rpm2cpio httpd-2.4.51-7.el9_0.x86_64.rpm | cpio -tv
	drwxr-xr-x   1 root     root            0 Mar 21  2022 ./etc/httpd/conf
	-rw-r--r--   1 root     root         2893 Mar 21  2022 ./etc/httpd/conf.d/autoindex.conf
	-rw-r--r--   1 root     root         1252 Mar 21  2022 ./etc/httpd/conf.d/userdir.conf
	-rw-r--r--   1 root     root          653 Mar 21  2022 ./etc/httpd/conf.d/welcome.conf
	drwxr-xr-x   1 root     root            0 Mar 21  2022 ./etc/httpd/conf.modules.d
	-rw-r--r--   1 root     root         3372 Mar 21  2022 ./etc/httpd/conf.modules.d/00-base.conf
	-rw-r--r--   1 root     root          139 Mar 21  2022 ./etc/httpd/conf.modules.d/00-dav.conf
	-rw-r--r--   1 root     root          948 Mar 21  2022 ./etc/httpd/conf.modules.d/00-mpm.conf
	-rw-r--r--   1 root     root          787 Mar 21  2022 ./etc/httpd/conf.modules.d/00-optional.conf
	-rw-r--r--   1 root     root         1073 Mar 21  2022 ./etc/httpd/conf.modules.d/00-proxy.conf
	-rw-r--r--   1 root     root           88 Mar 21  2022 ./etc/httpd/conf.modules.d/00-systemd.conf
	-rw-r--r--   1 root     root          367 Mar 21  2022 ./etc/httpd/conf.modules.d/01-cgi.conf
	-rw-r--r--   1 root     root          496 Mar 21  2022 ./etc/httpd/conf.modules.d/README
	-rw-r--r--   1 root     root        12005 Mar 21  2022 ./etc/httpd/conf/httpd.conf
	...output omitted...
9774 blocks
Referencias
rpm(8), (8), (1) y (8) páginas del manualrpm2cpiocpiorpmkeys
Ejercicio guiado: Explicar e investigar paquetes de software RPM
Recopile información sobre un paquete de un tercero, extraiga archivos de él para su inspección y, a continuación, instálelo en un servidor.
Resultados
●	Instale en un servidor un paquete que no sea de los repositorios de software.
Como usuario de la máquina, use el comando para preparar el sistema para este ejercicio.studentworkstationlab
Este comando prepara el entorno y garantiza que todos los recursos necesarios estén disponibles.
[student@workstation ~]$ lab start software-rpm
Instrucciones
	Utilice el comando para iniciar sesión en la máquina como usuario.sshserverastudent
[student@workstation ~]$ ssh student@servera
	...output omitted...
1.	[student@servera ~]$
2.	Ver información del paquete y enumerar los archivos del paquete. Vea también el script que se ejecuta al instalar o desinstalar el paquete.rhcsa-script-1.0.0-1.noarch.rpm
	Ver información del paquete.rhcsa-script-1.0.0-1.noarch.rpm
[student@servera ~]$ rpm -q -p rhcsa-script-1.0.0-1.noarch.rpm -i
	Name        : rhcsa-script
	Version     : 1.0.0
	Release     : 1
	Architecture: noarch
	Install Date: (not installed)
	Group       : System
	Size        : 593
	License     : GPL
	Signature   : (none)
	Source RPM  : rhcsa-script-1.0.0-1.src.rpm
	Build Date  : Wed 23 Mar 2022 08:24:21 AM EDT
	Build Host  : localhost
	Packager    : Bernardo Gargallo
	URL         : http://example.com
	Summary     : RHCSA Practice Script
	Description :
	A RHCSA practice script.
	The package changes the motd.
Nota
El paquete anterior modifica el MOTD, o "Mensaje del día". Un sistema muestra el MOTD a los usuarios cuando inician sesión en los sistemas.
	Enumerar los archivos del paquete.rhcsa-script-1.0.0-1.noarch.rpm
[student@servera ~]$ rpm -q -p rhcsa-script-1.0.0-1.noarch.rpm -l
	/opt/rhcsa-script/mymotd
	Vea el script que se ejecuta al instalar o desinstalar el paquete.rhcsa-script-1.0.0-1.noarch.rpm
[student@servera ~]$ rpm -q -p rhcsa-script-1.0.0-1.noarch.rpm --scripts
	preinstall scriptlet (using /bin/sh):
	if [ "$1" == "2" ]; then
	   if [ -e /etc/motd.orig ]; then
	     mv -f /etc/motd.orig /etc/motd
	   fi
	fi
	postinstall scriptlet (using /bin/sh):
	...output omitted...
3.	Extraiga el contenido del paquete en el directorio.rhcsa-script-1.0.0-1.noarch.rpm/home/student
	Utilice los comandos and para enumerar los archivos del paquete.rpm2cpiocpio -tvrhcsa-script-1.0.0-1.noarch.rpm
[student@servera ~]$ rpm2cpio rhcsa-script-1.0.0-1.noarch.rpm | cpio -tv
	-rw-r--r--   1 root     root          593 Mar 23 08:24 ./opt/rhcsa-script/mymotd
	2 blocks
	Extraiga todos los archivos del paquete al directorio. Utilice los comandos and para extraer los archivos y crear los directorios principales donde sea necesario en modo detallado.rhcsa-script-1.0.0-1.noarch.rpm/ï»¿home/studentrpm2cpiocpio -idv
[student@servera ~]$ rpm2cpio rhcsa-script-1.0.0-1.noarch.rpm | cpio -idv
	./opt/rhcsa-script/mymotd
	2 blocks
	Enumere los archivos del directorio para comprobar que los archivos extraídos son los mismos que los archivos del paquete./home/student/opt
[student@servera ~]$ ls -lR opt
	opt:
	total 0
	drwxr-xr-x. 2 student student 20 Mar 23 09:22 rhcsa-script
	
	opt/rhcsa-script:
	total 4
	-rw-r--r--. 1 student student 593 Mar 23 09:22 mymotd
4.	Instale el paquete. Utilice el comando para obtener privilegios de superusuario para instalar el paquete.rhcsa-script-1.0.0-1.noarch.rpmsudo
	Utilice el comando para instalar el paquete RPM.sudo rpm -ivhrhcsa-script-1.0.0-1.noarch.rpm
[student@servera ~]$ sudo rpm -ivh rhcsa-script-1.0.0-1.noarch.rpm
	[sudo] password for student: student
	Verifying...                          ################################# [100%]
	Preparing...                          ################################# [100%]
	Updating / installing...
	   1:rhcsa-script-1.0.0-1             ################################# [100%]
	[student@servera ~]$
	Utilice el comando para comprobar que ha instalado correctamente el paquete.rpm
[student@servera ~]$ rpm -q rhcsa-script
	rhcsa-script-1.0.0-1.noarch
	Salga de la máquina y vuelva a conectarse para probar el nuevo mensaje del día.servera
[student@servera ~]$ exit
	logout
	Connection to servera closed.
	[student@workstation ~]$ ssh student@servera
	______         _   _   _       _     _____         _       _
	| ___ \       | | | | | |     | |   |_   _|       (_)     (_)
	| |_/ /___  __| | | |_| | __ _| |_    | |_ __ __ _ _ _ __  _ _ __   __ _
	|    // _ \/ _` | |  _  |/ _` | __|   | | '__/ _` | | '_ \| | '_ \ / _` |
	| |\ \  __/ (_| | | | | | (_| | |_    | | | | (_| | | | | | | | | | (_| |
	\_| \_\___|\__,_| \_| |_/\__,_|\__|   \_/_|  \__,_|_|_| |_|_|_| |_|\__, |
	                                                                    __/ |
	                                                                   |___/
	
	
	Activate the web console with: systemctl enable --now cockpit.socket
	
	Register this system with Red Hat Insights: insights-client --register
	Create an account or view all your systems at https://red.ht/insights-dashboard
	Last login: Wed Mar 23 09:21:26 2022 from 172.25.250.9
5.	[student@servera ~]$
	Regrese al sistema como usuario.workstationstudent
[student@servera ~]$ exit
	logout
	Connection to servera closed.
6.	[student@workstation ~]$
Terminar
En la máquina, cambie al directorio principal del usuario y utilice el comando para completar este ejercicio. Este paso es importante para garantizar que los recursos de ejercicios anteriores no afecten los próximos ejercicios.workstationstudentlab
[student@workstation ~]$ lab finish software-rpm
Instalar y actualizar paquetes de software con DNF
Objetivos
●	Busque, instale y actualice paquetes de software con el comando.dnf
Administre paquetes de software con DNF
DNF (Dandified YUM) reemplazó a YUM como administrador de paquetes en Red Hat Enterprise Linux 9. Los comandos DNF son funcionalmente los mismos que los comandos YUM. Por compatibilidad, los comandos YUM todavía existen como enlaces simbólicos a DNF:
	[user@host ~]$ ls -l /bin/ | grep yum | awk '{print $9 " " $10 " " $11}'
	yum -> dnf-3
	yum-builddep -> /usr/libexec/dnf-utils
	yum-config-manager -> /usr/libexec/dnf-utils
	yum-debug-dump -> /usr/libexec/dnf-utils
	yum-debug-restore -> /usr/libexec/dnf-utils
	yumdownloader -> /usr/libexec/dnf-utils
yum-groups-manager -> /usr/libexec/dnf-utils
En este curso, trabajará con el comando. Es posible que parte de la documentación aún se refiera al comando, pero los archivos son el mismo comando vinculado.dnfyum
El comando de bajo nivel se puede usar para instalar paquetes, pero no está diseñado para funcionar con repositorios de paquetes o para resolver dependencias de múltiples fuentes automáticamente.rpm
DNF mejora la instalación y las actualizaciones de software basadas en RPM. Con el comando, puede instalar, actualizar, eliminar y obtener información sobre los paquetes de software y sus dependencias. Puede obtener un historial de transacciones y trabajar con múltiples repositorios de software de Red Hat y de terceros.dnf
Buscar software con DNF
El comando muestra información de uso. El comando muestra los paquetes instalados y disponibles.dnf helpdnf list
	[user@host ~]$ dnf list 'http*'
	Available Packages
	http-parser.i686               2.9.4-6.el9    rhel-9.0-for-x86_64-appstream-rpms
	http-parser.x86_64             2.9.4-6.el9    rhel-9.0-for-x86_64-appstream-rpms
	httpcomponents-client.noarch   4.5.13-2.el9   rhel-9.0-for-x86_64-appstream-rpms
	httpcomponents-core.noarch     4.4.13-6.el9   rhel-9.0-for-x86_64-appstream-rpms
	httpd.x86_64                   2.4.51-5.el9   rhel-9.0-for-x86_64-appstream-rpms
	httpd-devel.x86_64             2.4.51-5.el9   rhel-9.0-for-x86_64-appstream-rpms
	httpd-filesystem.noarch        2.4.51-5.el9   rhel-9.0-for-x86_64-appstream-rpms
	httpd-manual.noarch            2.4.51-5.el9   rhel-9.0-for-x86_64-appstream-rpms
httpd-tools.x86_64             2.4.51-5.el9   rhel-9.0-for-x86_64-appstream-rpms
El comando enumera los paquetes por palabras clave que solo se encuentran en los campos de nombre y resumen. Para buscar paquetes con "servidor web" en sus campos de nombre, resumen y descripción, use :dnf search KEYWORDsearch all
	[user@host ~]$ dnf search all 'web server'
	================== Summary & Description Matched: web server ===================
	nginx.x86_64 : A high performance web server and reverse proxy server
	pcp-pmda-weblog.x86_64 : Performance Co-Pilot (PCP) metrics from web server logs
	========================= Summary Matched: web server ==========================
	libcurl.x86_64 : A library for getting files from web servers
	libcurl.i686 : A library for getting files from web servers
	======================= Description Matched: web server ========================
	freeradius.x86_64 : High-performance and highly configurable free RADIUS server
	git-instaweb.noarch : Repository browser in gitweb
	http-parser.i686 : HTTP request/response parser for C
	http-parser.x86_64 : HTTP request/response parser for C
	httpd.x86_64 : Apache HTTP Server
	mod_auth_openidc.x86_64 : OpenID Connect auth module for Apache HTTP Server
	mod_jk.x86_64 : Tomcat mod_jk connector for Apache
	mod_security.x86_64 : Security module for the Apache HTTP Server
	varnish.i686 : High-performance HTTP accelerator
	varnish.x86_64 : High-performance HTTP accelerator
...output omitted...
El comando devuelve información detallada sobre un paquete, incluido el espacio en disco necesario para la instalación. Por ejemplo, el siguiente comando recupera información sobre el paquete:dnf info PACKAGENAMEhttpd
	[user@host ~]$ dnf info httpd
	Available Packages
	Name         : httpd
	Version      : 2.4.51
	Release      : 5.el9
	Architecture : x86_64
	Size         : 1.5 M
	Source       : httpd-2.4.51-5.el9.src.rpm
	Repository   : rhel-9.0-for-x86_64-appstream-rpms
	Summary      : Apache HTTP Server
	URL          : https://httpd.apache.org/
	License      : ASL 2.0
	Description  : The Apache HTTP Server is a powerful, efficient, and extensible
             : web server.
El comando muestra paquetes que coinciden con el nombre de ruta especificado (los nombres de ruta a menudo incluyen caracteres comodín). Por ejemplo, el siguiente comando busca paquetes que proporcionan el directorio:dnf provides PATHNAME/var/www/html
	[user@host ~]$ dnf provides /var/www/html
	httpd-filesystem-2.4.51-5.el9.noarch : The basic directory layout for the Apache HTTP Server
	Repo        : rhel-9.0-for-x86_64-appstream-rpms
	Matched from:
Filename    : /var/www/html
Instalar y eliminar software con DNF
El comando obtiene e instala un paquete de software, incluidas las dependencias.dnf install PACKAGENAME
	[root@host ~]# dnf install httpd
	Dependencies resolved.
	================================================================================
	 Package          Arch   Version       Repository                          Size
	================================================================================
	Installing:
	 httpd            x86_64 2.4.51-5.el9  rhel-9.0-for-x86_64-appstream-rpms 1.5 M
	Installing dependencies:
	 apr              x86_64 1.7.0-11.el9  rhel-9.0-for-x86_64-appstream-rpms 127 k
	 apr-util         x86_64 1.6.1-20.el9  rhel-9.0-for-x86_64-appstream-rpms  98 k
	 apr-util-bdb     x86_64 1.6.1-20.el9  rhel-9.0-for-x86_64-appstream-rpms  15 k
	 httpd-filesystem noarch 2.4.51-5.el9  rhel-9.0-for-x86_64-appstream-rpms  17 k
	 httpd-tools      x86_64 2.4.51-5.el9  rhel-9.0-for-x86_64-appstream-rpms  88 k
	 redhat-logos-httpd
	                  noarch 90.4-1.el9    rhel-9.0-for-x86_64-appstream-rpms  18 k
	Installing weak dependencies:
	 apr-util-openssl x86_64 1.6.1-20.el9  rhel-9.0-for-x86_64-appstream-rpms  17 k
	 mod_http2        x86_64 1.15.19-2.el9 rhel-9.0-for-x86_64-appstream-rpms 153 k
	 mod_lua          x86_64 2.4.51-5.el9  rhel-9.0-for-x86_64-appstream-rpms  63 k
	
	Transaction Summary
	================================================================================
	Install  10 Packages
	
	Total download size: 2.1 M
	Installed size: 5.9 M
	Is this ok [y/N]: y
	Downloading Packages:
	(1/10): apr-1.7.0-11.el9.x86_64.rpm             6.4 MB/s | 127 kB     00:00
	(2/10): apr-util-bdb-1.6.1-20.el9.x86_64.rpm    625 kB/s |  15 kB     00:00
	(3/10): apr-util-openssl-1.6.1-20.el9.x86_64.rp 1.9 MB/s |  17 kB     00:00
	...output omitted...
	Total                                            24 MB/s | 2.1 MB     00:00
	Running transaction check
	Transaction check succeeded.
	Running transaction test
	Transaction test succeeded.
	Running transaction
	  Preparing        :                                                        1/1
	  Installing       : apr-1.7.0-11.el9.x86_64                               1/10
	  Installing       : apr-util-bdb-1.6.1-20.el9.x86_64                      2/10
	  Installing       : apr-util-openssl-1.6.1-20.el9.x86_64                  3/10
	...output omitted...
	Installed:
	  apr-1.7.0-11.el9.x86_64              apr-util-1.6.1-20.el9.x86_64
	  apr-util-bdb-1.6.1-20.el9.x86_64     apr-util-openssl-1.6.1-20.el9.x86_64
	...output omitted...
Complete!
El comando obtiene e instala una versión posterior del paquete especificado, incluidas las dependencias. Por lo general, el proceso intenta conservar los archivos de configuración en su lugar, pero en algunos casos, es posible que se cambie el nombre de esos archivos si el empaquetador considera que el nombre anterior no funcionará después de la actualización. Si no se especifica PACKAGENAME, instala todas las actualizaciones relevantes.dnf update PACKAGENAME
[root@host ~]# dnf update
Debido a que un nuevo kernel solo se puede probar arrancando en ese kernel, el paquete admite específicamente la instalación de varias versiones a la vez. Si el nuevo kernel no arranca, entonces el kernel anterior todavía está disponible. Al ejecutar el comando, se instala el nuevo kernel. Los archivos de configuración contienen una lista de paquetes para instalar siempre, incluso si el administrador solicita una actualización.dnf update kernel
Utilice el comando para enumerar todos los kernels instalados y disponibles. Para ver el kernel que se está ejecutando actualmente, use el comando. La opción de comando muestra solo la versión y la versión del kernel, y la opción de comando muestra la versión del kernel e información adicional.dnf list kernelunameuname-runame-a
	[user@host ~]$ dnf list kernel
	Installed Packages
	kernel.x86_64                       5.14.0-70.el9                        @System
	[user@host ~]$ uname -r
	5.14.0-70.el9.x86_64
	[user@host ~]$ uname -a
Linux workstation.lab.example.com 5.14.0-70.el9.x86_64 #1 SMP PREEMPT Thu Feb 24 19:11:22 EST 2022 x86_64 x86_64 x86_64 GNU/Linux
El comando quita un paquete de software instalado, incluidos los paquetes compatibles.dnf remove PACKAGENAME
[root@host ~]# dnf remove httpd
Advertencia
El comando elimina los paquetes enumerados dnf removey cualquier paquete que requiera que se eliminen los paquetes (y paquetes que requieren esos paquetes, y así sucesivamente). Este comando puede provocar la eliminación inesperada de paquetes, por lo que debe revisar la lista de paquetes que se van a eliminar.
Instalar y eliminar grupos de software con DNF
El comando también tiene el concepto de dnfgrupos, que son colecciones de software relacionado que se instalan juntas.
En Red Hat Enterprise Linux 9, el comando puede instalar dos tipos de grupos de paquetes. Los grupos regulares son colecciones de paquetes. Los grupos de entorno son colecciones de grupos regulares. Los paquetes o grupos que proporcionan estas colecciones pueden aparecer como (deben instalarse si el grupo está instalado), (normalmente se instalan si el grupo está instalado) o (no se instalan cuando se instala el grupo, a menos que se solicite específicamente).dnfmandatorydefaultoptional
De forma similar al comando, el comando muestra los nombres de los grupos instalados y disponibles.dnf listdnf group list
	[user@host ~]$ dnf group list
	Available Environment Groups:
	   Server with GUI
	   Server
	   Minimal Install
	...output omitted...
	Available Groups:
	   Legacy UNIX Compatibility
	   Console Internet Tools
	   Container Management
...output omitted...
Algunos grupos normalmente se instalan a través de grupos de entorno y están ocultos de forma predeterminada. Enumere estos grupos ocultos con el comando.dnf group list hidden
El comando muestra información sobre un grupo. Incluye una lista de nombres de paquetes obligatorios, predeterminados y opcionales.dnf group info
	[user@host ~]$ dnf group info "RPM Development Tools"
	Group: RPM Development Tools
	 Description: Tools used for building RPMs, such as rpmbuild.
	 Mandatory Packages:
	   redhat-rpm-config
	   rpm-build
	 Default Packages:
	   rpmdevtools
	 Optional Packages:
   rpmlint
El comando instala un grupo que instala sus paquetes obligatorios y predeterminados y sus paquetes dependientes.dnf group install
	[root@host ~]# dnf group install "RPM Development Tools"
	...output omitted...
	Installing Groups:
	 RPM Development Tools
	
	Transaction Summary
	================================================================================
	Install  19 Packages
	
	Total download size: 4.7 M
	Installed size: 15 M
	Is this ok [y/N]: y
...output omitted...
Importante
A partir de Red Hat Enterprise Linux 7, el comportamiento de los grupos Yum cambió, para ser tratados como objetos y rastreados por el sistema. Si se actualiza un grupo instalado y si el repositorio de Yum agregó nuevos paquetes obligatorios o predeterminados al grupo, esos nuevos paquetes se instalan en la actualización.
RHEL 6 y versiones anteriores consideran que un grupo se instala si se instalan todos sus paquetes obligatorios, o si no tenía paquetes obligatorios, o si se instalan paquetes predeterminados u opcionales en el grupo. A partir de RHEL 7, se considera que un grupo está instalado solamente si se usó para instalarlo. Puede usar el comando para marcar un grupo como instalado y los paquetes que faltan y sus dependencias se instalan en la próxima actualización.yum group installyum group mark install GROUPNAME
RHEL 6 y versiones anteriores no tenían la forma de dos palabras de los comandos. En otras palabras, en RHEL 6 el comando existía, pero el comando equivalente de RHEL 7 y RHEL 8 no.yum groupyum grouplistyum group list
Ver historial de transacciones
Todas las transacciones de instalación y eliminación se registran en el archivo./var/log/dnf.rpm.log
	[user@host ~]$ tail -5 /var/log/dnf.rpm.log
	2022-03-23T16:46:43-0400 SUBDEBUG Installed: python-srpm-macros-3.9-52.el9.noarch
	2022-03-23T16:46:43-0400 SUBDEBUG Installed: redhat-rpm-config-194-1.el9.noarch
	2022-03-23T16:46:44-0400 SUBDEBUG Installed: elfutils-0.186-1.el9.x86_64
	2022-03-23T16:46:44-0400 SUBDEBUG Installed: rpm-build-4.16.1.3-11.el9.x86_64
2022-03-23T16:46:44-0400 SUBDEBUG Installed: rpmdevtools-9.5-1.el9.noarch
El comando muestra un resumen de las transacciones de instalación y eliminación.dnf history
	[root@host ~]# dnf history
	ID     | Command line              | Date and time    | Action(s)      | Altered
	--------------------------------------------------------------------------------
	     7 | group install RPM Develop | 2022-03-23 16:46 | Install        |   20
	     6 | install httpd             | 2022-03-23 16:21 | Install        |   10 EE
	     5 | history undo 4            | 2022-03-23 15:04 | Removed        |   20
	     4 | group install RPM Develop | 2022-03-23 15:03 | Install        |   20
	     3 |                           | 2022-03-04 03:36 | Install        |    5
	     2 |                           | 2022-03-04 03:33 | Install        |  767 EE
     1 | -y install patch ansible- | 2022-03-04 03:31 | Install        |   80
El comando invierte una transacción.dnf history undo
	[root@host ~]# dnf history undo 6
	...output omitted...
	Removing:
	 apr-util-openssl x86_64 1.6.1-20.el9 @rhel-9.0-for-x86_64-appstream-rpms  24 k
	 httpd            x86_64 2.4.51-5.el9 @rhel-9.0-for-x86_64-appstream-rpms 4.7 M
...output omitted...
Resumen de los comandos DNF
Los paquetes se pueden localizar, instalar, actualizar y quitar por nombre o por grupos de paquetes.
Tarea:	Mandar:
Enumere los paquetes instalados y disponibles por nombre.	dnf list [NAME-PATTERN]
Enumerar los grupos instalados y disponibles.	dnf group list
Busque un paquete por palabra clave.	dnf search KEYWORD
Mostrar detalles de un paquete.	dnf info PACKAGENAME
Instale un paquete.	dnf install PACKAGENAME
Instale un grupo de paquetes.	dnf group install GROUPNAME
Actualice todos los paquetes.	dnf update
Eliminar un paquete.	dnf remove PACKAGENAME
Mostrar historial de transacciones.	dnf history
Administrar flujos de módulos de paquetes con DNF
Tradicionalmente, administrar versiones alternativas del paquete de software de una aplicación y sus paquetes relacionados significaba mantener diferentes repositorios para cada versión. Para los desarrolladores que querían la última versión de una aplicación y los administradores que querían la versión más estable de la aplicación, la situación resultante era tediosa de administrar. Red Hat simplifica este proceso mediante el uso de una tecnología llamada modularidad. Con la modularidad, un único repositorio puede alojar varias versiones del paquete de una aplicación y sus dependencias.
Introducción a BaseOS y Application Stream
Red Hat Enterprise Linux 9 distribuye el contenido a través de dos repositorios de software principales: Sistema operativo base y Flujo de aplicaciones (AppStream).
El repositorio BaseOS proporciona el contenido principal del sistema operativo para Red Hat Enterprise Linux como paquetes RPM. Los componentes de BaseOS tienen el mismo ciclo de vida que el contenido de versiones anteriores de Red Hat Enterprise Linux. El repositorio de Application Stream proporciona contenido con diferentes ciclos de vida como módulos y paquetes tradicionales.
Application Stream contiene las partes necesarias del sistema, así como una amplia gama de aplicaciones que anteriormente estaban disponibles como parte de Red Hat Software Collections y otros productos y programas. Cada flujo de aplicaciones tiene un ciclo de vida que es el mismo que el de Red Hat Enterprise Linux 9 o más corto.
Tanto BaseOS como AppStream son partes necesarias de un sistema Red Hat Enterprise Linux 9.
El repositorio de Application Stream contiene dos tipos de contenido: módulos y paquetes RPM tradicionales. Un módulo describe un conjunto de paquetes RPM que van juntos. Los módulos pueden contener varias secuencias para que varias versiones de aplicaciones estén disponibles para su instalación. La habilitación de un flujo de módulos le da al sistema acceso a los paquetes RPM dentro de ese flujo de módulo. Por lo general, los módulos organizan los paquetes RPM en torno a una versión específica de una aplicación de software o lenguaje de programación. Un módulo típico contiene paquetes con una aplicación, paquetes con las bibliotecas de dependencias específicas de la aplicación, paquetes con documentación para la aplicación y paquetes con utilidades auxiliares.
Importante
Red Hat Enterprise Linux 9.0 se envía sin módulos. Las versiones futuras de RHEL 9 podrían introducir contenido adicional y versiones de software posteriores como módulos. Además, a partir de RHEL 9, debe especificar manualmente los flujos de módulos predeterminados, ya que ya no están definidos de forma predeterminada. Puede definir flujos de módulos predeterminados con archivos de configuración en el directorio./etc/dnf/modules.defaults.d/
Flujos de módulos
Cada módulo tiene uno o más Flujos de módulos, que contienen diferentes versiones del contenido. Cada una de las transmisiones recibe actualizaciones de forma independiente. Piense en el flujo de módulos como un repositorio virtual en el repositorio físico de Application Stream.
Para cada módulo, solo puede habilitar una de sus secuencias, y esta secuencia proporciona sus paquetes.
Perfiles de módulos
Cada módulo puede tener uno o más perfiles. Un perfil es una lista de paquetes que puede instalar juntos para un caso de uso particular, como para un servidor, cliente, desarrollo, instalación mínima u otro.
La instalación de un perfil de módulo instala un conjunto determinado de paquetes de la secuencia de módulos. Posteriormente, puede instalar o desinstalar paquetes normalmente. Si no especifica un perfil, el módulo instala su perfil predeterminado.
Administrar módulos con DNF
Red Hat Enterprise Linux 9 admite funciones modulares de Application Stream. Para manejar el contenido modular, puede usar el comando. De lo contrario, el comando funciona con módulos similares a los paquetes normales.dnf modulednf
Consulte la siguiente lista para ver algunos comandos importantes para administrar módulos:
●	Lista de módulos dnf : Enumera los módulos disponibles con el nombre del módulo, la secuencia, los perfiles y un resumen.
●	dnf module list module-name : Enumera los flujos de módulos para un módulo específico y recupera su estado.
●	dnf module info module-name : Muestra los detalles de un módulo, incluidos los perfiles disponibles y una lista de los paquetes que instala el módulo. Al ejecutar el comando sin especificar una secuencia de módulos, se enumeran los paquetes que se instalan desde el perfil y la secuencia predeterminados. Utilice el comando dnf module infonombre-módulo:stream para ver un flujo de módulo específico. Agregue la opción para mostrar información sobre los paquetes que instaló cada uno de los perfiles del módulo.--profile
●	dnf module provides package : Muestra qué módulo proporciona un paquete específico.
Referencias
dnf(1) y (5) páginas del manualdnf.conf
Para obtener más información, consulte el Gestión de paquetes de software capítulo en el Red Hat Enterprise Linux 9 Guía de configuración básica del sistema en https://access.redhat.com/documentation/en-us/red_hat_enterprise_linux/9/html-single/configuring_basic_system_settings/index#managing-software-packages_configuring-basic-system-settings
Para obtener más información, consulte el Distribución de contenido en RHEL 9 capítulo en el Guía de administración de software de Red Hat Enterprise Linux 9 con DNF Tool en https://access.redhat.com/documentation/en-us/red_hat_enterprise_linux/9/html-single/managing_software_with_the_dnf_tool/index#assembly_distribution-of-content-in-rhel-9_managing-software-with-the-dnf-tool
Modularidad
Ejercicio guiado: Instalación y actualización de paquetes de software con DNF
Instale y elimine paquetes y grupos de paquetes.
Resultados
●	Instale y elimine paquetes con dependencias.
Como usuario de la máquina, use el comando para preparar el sistema para este ejercicio.studentworkstationlab
Este comando garantiza que todos los recursos necesarios estén disponibles.
[student@workstation ~]$ lab start software-dnf
Instrucciones
	Desde , abra una sesión SSH en la máquina como usuario. Utilice el comando para cambiar al usuario.workstationserverastudentsudo -iroot
[student@workstation ~]$ ssh student@servera
	...output omitted...
	[student@servera ~]$ sudo -i
	[sudo] password for student: student
1.	[root@servera ~]#
2.	Busca un paquete específico.
	Intente ejecutar el comando. Debería encontrar que no está instalado.nmap
[root@servera ~]# nmap
	-bash: nmap: command not found
	Utilice el comando para buscar paquetes como parte de su nombre o resumen.dnf searchnmap
[root@servera ~]# dnf search nmap
	...output omitted...
	========================= Name Exactly Matched: nmap ==========================
	nmap.x86_64 : Network exploration tool and security scanner
	======================== Name & Summary Matched: nmap =========================
	nmap-ncat.x86_64 : Nmap's Netcat replacement
	Utilice el comando para obtener más información sobre el paquete.dnf infonmap
[root@servera ~]# dnf info nmap
	...output omitted...
	Available Packages
	Name         : nmap
	Epoch        : 3
	Version      : 7.91
	Release      : 10.el9
	...output omitted...
	Utilice el comando para instalar el paquete.dnf installnmap
[root@servera ~]# dnf install nmap
	...output omitted...
	Dependencies resolved.
	===============================================================================
	 Package
	        Arch     Version            Repository                            Size
	===============================================================================
	Installing:
	 nmap   x86_64   3:7.91-10.el9      rhel-9.0-for-x86_64-appstream-rpms   5.6 M
	
	Transaction Summary
	===============================================================================
	Install  1 Package
	
	Total download size: 5.6 M
	Installed size: 24 M
	Is this ok [y/N]: y
	...output omitted...
3.	Complete!
4.	Retire paquetes.
	Use el comando para eliminar el paquete, pero responda con cuando se le solicite. ¿Cuántos paquetes se eliminan?dnf removenmapno
[root@servera ~]# dnf remove nmap
	Dependencies resolved.
	===============================================================================
	 Package
	        Arch     Version           Repository                             Size
	===============================================================================
	Removing:
	 nmap   x86_64   3:7.91-10.el9     @rhel-9.0-for-x86_64-appstream-rpms    24 M
	
	Transaction Summary
	===============================================================================
	Remove  1 Package
	
	Freed space: 24 M
	Is this ok [y/N]: n
	Operation aborted.
	Use el comando para eliminar el paquete, pero responda con cuando se le solicite. ¿Cuántos paquetes se eliminan?dnf removetarno
[root@servera ~]# dnf remove tar
	...output omitted...
	Dependencies resolved.
	===============================================================================
	 Package        Arch   Version       Repository                           Size
	===============================================================================
	Removing:
	 tar            x86_64 2:1.34-3.el9  @System                             3.0 M
	Removing dependent packages:
	 cockpit        x86_64 264-1.el9     @rhel-9.1-for-x86_64-baseos-rpms     57 k
	 cockpit-system noarch 264-1.el9     @System                             3.3 M
	...output omitted...
	
	Transaction Summary
	===============================================================================
	Remove  12 Packages
	
	Freed space: 48 M
	Is this ok [y/N]: n
	Operation aborted.
5.	Reúna información sobre el grupo de componentes "Herramientas de seguridad" e instálelo en .servera
	Utilice el comando para enumerar todos los grupos de componentes disponibles.dnf group list
[root@servera ~]# dnf group list
	Utilice el comando para obtener más información sobre el grupo de componentes, incluida una lista de paquetes incluidos.dnf group infoSecurity Tools
[root@servera ~]# dnf group info "Security Tools"
	...output omitted...
	Group: Security Tools
	 Description: Security tools for integrity and trust verification.
	 Default Packages:
	   scap-security-guide
	 Optional Packages:
	   aide
	   hmaccalc
	   openscap
	   openscap-engine-sce
	   openscap-utils
	   scap-security-guide-doc
	   scap-workbench
	   tpm2-tools
	   tss2
	   udica
	Utilice el comando para instalar el grupo de componentes.dnf group installSecurity Tools
[root@servera ~]# dnf group install "Security Tools"
	...output omitted...
	Dependencies resolved.
	===============================================================================
	 Package         Arch   Version       Repository                          Size
	===============================================================================
	Installing group/module packages:
	 scap-security-guide
	                 noarch 0.1.60-5.el9  rhel-9.0-for-x86_64-appstream-rpms 683 k
	Installing dependencies:
	 openscap        x86_64 1:1.3.6-3.el9 rhel-9.0-for-x86_64-appstream-rpms 2.0 M
	...output omitted...
	
	Transaction Summary
	===============================================================================
	Install  5 Packages
	
	Total download size: 3.0 M
	Installed size: 94 M
	Is this ok [y/N]: y
	...output omitted...
	Installed:
	  openscap-1:1.3.6-3.el9.x86_64
	  openscap-scanner-1:1.3.6-3.el9.x86_64
	  scap-security-guide-0.1.60-5.el9.noarch
	  xmlsec1-1.2.29-9.el9.x86_64
	  xmlsec1-openssl-1.2.29-9.el9.x86_64
	
	Complete!
6.	Explore el historial y las opciones de deshacer del comando.dnf
	Utilice el comando para mostrar el historial reciente.dnf historydnf
[root@servera ~]# dnf history
	ID     | Command line             | Date and time    | Action(s)      | Altered
	-------------------------------------------------------------------------------
	     3 | group install Security T | 2022-03-24 15:23 | Install        |    6
	     2 | install nmap             | 2022-03-24 15:12 | Install        |    1
	     1 | -y install @base firewal | 2022-03-03 04:47 | Install        |  156 EE
En su sistema, el historial probablemente sea diferente.
	Utilice el comando para confirmar que la última transacción es la instalación de grupo. En el siguiente comando, reemplace el identificador de transacción por el del paso anterior.dnf history info
[root@servera ~]# dnf history info 3
	Transaction ID : 3
	Begin time     : Thu 24 Mar 2022 03:23:56 PM EDT
	Begin rpmdb    : 7743aed72ac79f632442c9028aafd2499a1591f92a660b3f09219b422ca95f02
	End time       : Thu 24 Mar 2022 03:23:58 PM EDT (2 seconds)
	End rpmdb      : 20c4f0215388b7dca9a874260784b1e5cf9bc142da869967269e3d84dd0f789d
	User           : Student User <student>
	Return-Code    : Success
	Releasever     : 9
	Command Line   : group install Security Tools
	Comment        :
	Packages Altered:
	    Install openscap-1:1.3.6-3.el9.x86_64           @rhel-9.0-for-x86_64-appstream-rpms
	    Install openscap-scanner-1:1.3.6-3.el9.x86_64   @rhel-9.0-for-x86_64-appstream-rpms
	...output omitted...
	Utilice el comando para quitar el conjunto de paquetes que se instalaron cuando se instaló el paquete. En el sistema, busque el identificador de transacción correcto en la salida del comando y, a continuación, use ese identificador en el siguiente comando.dnf history undonmapdnf history
[root@servera ~]# dnf history undo 2
	Regrese al sistema como usuario.workstationstudent
[root@servera ~]# exit
	logout
	[student@servera ~]$ exit
	Connection to servera closed.
7.	[student@workstation ~]$
Terminar
En la máquina, cambie al directorio principal del usuario y utilice el comando para completar este ejercicio. Este paso es importante para garantizar que los recursos de ejercicios anteriores no afecten los próximos ejercicios.workstationstudentlab
[student@workstation ~]$ lab finish software-dnf
Habilitar repositorios de software DNF
Objetivos
●	Habilite y deshabilite el uso del servidor de repositorios DNF de Red Hat o de terceros.
Habilitación de repositorios de software de Red Hat
Los sistemas a menudo tienen acceso a muchos repositorios de Red Hat. El comando enumera todos los repositorios disponibles y sus estados:dnf repolist all
	[user@host ~]$ dnf repolist all
	repo id                                repo name                status
	rhel-9.0-for-x86_64-appstream-rpms     RHEL 9.0 AppStream       enabled
rhel-9.0-for-x86_64-baseos-rpms        RHEL 9.0 BaseOS          enabled
Nota
Las suscripciones de Red Hat otorgan acceso a repositorios específicos. En el pasado, los administradores necesitaban adjuntar suscripciones por sistema. Simple Content Access (SCA) simplifica la forma en que los sistemas acceden a los repositorios. Con SCA, los sistemas pueden acceder a cualquier repositorio desde cualquier suscripción que compre, sin adjuntar una suscripción. Puede habilitar SCA en el Portal del cliente de Red Hat dentro de Mis suscripciones → Asignaciones de suscripciones, o en su servidor de Red Hat Satellite.
El comando puede habilitar y deshabilitar repositorios. Por ejemplo, el siguiente comando habilita el repositorio:dnf config-managerrhel-9-server-debug-rpms
[user@host ~]$ dnf config-manager --enable rhel-9-server-debug-rpms
Las fuentes que no son de Red Hat proporcionan software a través de repositorios de terceros. Por ejemplo, Adobe proporciona parte de su software para Linux a través de repositorios DNF. En un aula de Red Hat, el servidor content.example.com aloja repositorios DNF. El comando puede acceder a repositorios desde un sitio web, un servidor FTP o el sistema de archivos local.dnf
Puede agregar un repositorio de terceros de dos maneras. Puede crear un archivo en el directorio o puede agregar una sección al archivo. Red Hat recomienda usar archivos y reservar el archivo para configuraciones de repositorio adicionales. El comando busca en ambas ubicaciones de forma predeterminada; sin embargo, los archivos tienen prioridad. Un archivo contiene la URL del repositorio, un nombre, si se debe usar GPG para verificar las firmas del paquete y, de ser así, para este último, la URL que apunta a la clave GPG de confianza..repo/etc/yum.repos.d/[repository]/etc/dnf/dnf.conf.repodnf.confdnf.repo.repo
Agregar repositorios DNF
El comando también puede agregar repositorios a la máquina. El siguiente comando crea un archivo mediante la dirección URL de un repositorio existente.dnf config-manager.repo
	[user@host ~]$ dnf config-manager \
	--add-repo="https://dl.fedoraproject.org/pub/epel/9/Everything/x86_64/"
Adding repo from: https://dl.fedoraproject.org/pub/epel/9/Everything/x86_64/
El archivo correspondiente está visible en el directorio:.repo/etc/yum.repos.d/
	[user@host ~]$ cd /etc/yum.repos.d
	[user@host yum.repos.d]$ cat \
	dl.fedoraproject.org_pub_epel_9_Everything_x86_64_.repo
	[dl.fedoraproject.org_pub_epel_9_Everything_x86_64_]
	name=created by dnf config-manager from https://dl.fedoraproject.org/pub/epel/9/Everything/x86_64/
	baseurl=https://dl.fedoraproject.org/pub/epel/9/Everything/x86_64/
enabled=1
El comando utiliza claves GPG para firmar paquetes e importa claves públicas para verificar la integridad y autenticidad de los paquetes. El comando utiliza archivos de configuración del repositorio para proporcionar las ubicaciones de claves públicas de GPG e importa las claves para verificar los paquetes. Las claves se almacenan en varias ubicaciones en el sitio del repositorio remoto, como http://dl.fedoraproject.org/pub/epel/RPM-GPG-KEY-EPEL-9. Los administradores deben descargar la clave en un archivo local en lugar de que el comando recupere la clave de una fuente externa. Por ejemplo, el siguiente archivo usa el parámetro para hacer referencia a una clave local:rpmdnfdnf.repogpgkey
	[EPEL]
	name=EPEL 9
	baseurl=https://dl.fedoraproject.org/pub/epel/9/Everything/x86_64/
	enabled=1
	gpgcheck=1
gpgkey=file:///etc/pki/rpm-gpg/RPM-GPG-KEY-EPEL-9
Paquetes de configuración RPM para repositorios locales
Algunos repositorios proporcionan un archivo de configuración y una clave pública GPG como parte de un paquete RPM para simplificar su instalación. Puede importar la clave pública GPG mediante el comando. El comando puede descargar e instalar estos paquetes RPM.rpm --importdnf install
Por ejemplo, el siguiente comando importa la clave pública GPG (EPEL) e instala el RPM del repositorio RHEL9 Extra Packages for Enterprise Linux (EPEL):RPM-GPG-KEY-EPEL-9
	[user@host ~]$ rpm --import \
	https://dl.fedoraproject.org/pub/epel/RPM-GPG-KEY-EPEL-9
	[user@host ~]$ dnf install \
https://dl.fedoraproject.org/pub/epel/epel-release-latest-9.noarch.rpm
Advertencia
Importe la clave RPM GPG antes de instalar paquetes firmados, para asegurarse de que los paquetes provienen de una fuente confiable. Si no se importa la clave GPG RPM, el comando no puede instalar paquetes firmados.dnf
La opción de comando ignora las claves GPG que faltan, pero puede resultar en la instalación de paquetes comprometidos o falsificados.dnf--nogpgcheck
Los archivos a menudo enumeran varias referencias de repositorio en un solo archivo. Cada referencia de repositorio comienza con un nombre de una sola palabra entre corchetes..repo
	[user@host ~]$ cat /etc/yum.repos.d/epel.repo
	[epel]
	name=Extra Packages for Enterprise Linux $releasever - $basearch
	#baseurl=https://download.example/pub/epel/$releasever/Everything/$basearch/
	metalink=https://mirrors.fedoraproject.org/metalink?repo=epel-$releasever&arch=$basearch&infra=$infra&content=$contentdir
	enabled=1
	gpgcheck=1
	countme=1
	gpgkey=file:///etc/pki/rpm-gpg/RPM-GPG-KEY-EPEL-$releasever
	...output omitted...
	[epel-source]
	name=Extra Packages for Enterprise Linux $releasever - $basearch - Source
	#baseurl=https://download.example/pub/epel/$releasever/Everything/source/tree/
	metalink=https://mirrors.fedoraproject.org/metalink?repo=epel-source-$releasever&arch=$basearch&infra=$infra&content=$contentdir
	enabled=0
	gpgkey=file:///etc/pki/rpm-gpg/RPM-GPG-KEY-EPEL-$releasever
gpgcheck=1
Para definir un repositorio, pero no para buscarlo de forma predeterminada, inserte el parámetro. Aunque el comando habilita y deshabilita los repositorios de forma persistente, el comando y las opciones habilitan y deshabilitan los repositorios temporalmente mientras se ejecuta el comando.enabled=0dnf config-managerdnf--enablerepo=PATTERN--disablerepo=PATTERN
Referencias
dnf(8), (5) y (8) páginas del manualdnf.confdnf-config-manager
Para obtener más información, consulte el Gestión de software con la herramienta DNF en la documentación del producto Red Hat Enterprise Linux 9 en https://access.redhat.com/documentation/en-us/red_hat_enterprise_linux/9/html-single/managing_software_with_the_dnf_tool
Ejercicio guiado: Habilitar repositorios de software DNF
Configure el servidor para obtener paquetes de un repositorio DNF remoto y, a continuación, actualice o instale un paquete desde ese repositorio.
Resultados
●	Configure un sistema para obtener actualizaciones de software de un servidor de aula y actualice el sistema para usar los paquetes más recientes.
Como usuario de la máquina, use el comando para preparar el sistema para este ejercicio.studentworkstationlab
Este comando prepara el entorno y garantiza que todos los recursos necesarios estén disponibles.
[student@workstation ~]$ lab start software-repo
Instrucciones
	Utilice el comando para iniciar sesión en el sistema como usuario. Utilice el comando para cambiar al usuario.sshserverastudentsudo -iroot
[student@workstation ~]$ ssh student@servera
	...output omitted...
	[student@servera ~]$ sudo -i
	[sudo] password for student: student
1.	[root@servera ~]#
2.	Configure los repositorios de software para obtener paquetes personalizados y actualizaciones de la siguiente URL:servera
	Paquetes personalizados en http://content.example.com/rhel9.3/x86_64/rhcsa-practice/rht
	Actualizaciones de los paquetes personalizados en http://content.example.com/rhel9.3/x86_64/rhcsa-practice/errata
	Utilice el comando para agregar el repositorio de paquetes personalizados.dnf config-manager
[root@servera ~]# dnf config-manager \
	--add-repo "http://content.example.com/rhel9.3/x86_64/rhcsa-practice/rht"
	Adding repo from: http://content.example.com/rhel9.3/x86_64/rhcsa-practice/rht
	Examine el archivo de repositorio de software que el comando anterior creó en el directorio. Edite el archivo y agregue el parámetro para deshabilitar la comprobación de claves GPG para el repositorio./etc/yum.repos.d/etc/yum.repos.d/content.example.com_rhel9.3_x86_64_rhcsa-practice_rht.repogpgcheck=0
[content.example.com_rhel9.3_x86_64_rhcsa-practice_rht]
	name=created by dnf config-manager from http://content.example.com/rhel9.3/x86_64/rhcsa-practice/rht
	baseurl=http://content.example.com/rhel9.3/x86_64/rhcsa-practice/rht
	enabled=1
	gpgcheck=0
	Cree el archivo para habilitar el repositorio de actualizaciones con el siguiente contenido:/etc/yum.repos.d/errata.repo
[rht-updates]
	name=rht updates
	baseurl=http://content.example.com/rhel9.3/x86_64/rhcsa-practice/errata
	enabled=1
	gpgcheck=0
	Utilice el comando para enumerar todos los repositorios del sistema.dnf repolist all
[root@servera ~]# dnf repolist all
	repo id                                                repo name       status
	content.example.com_rhel9.3_x86_64_rhcsa-practice_rht  created by .... enabled
	...output omitted...
	rht-updates                                            rht updates     enabled
3.	Deshabilite el repositorio de software e instale el paquete.rht-updatesrht-system
	Utilice el comando para deshabilitar el repositorio.dnf config-manager --disablerht-updates
[root@servera ~]# dnf config-manager --disable rht-updates
	Enumere y luego instale el paquete.rht-system
[root@servera ~]# dnf list rht-system
	Available Packages
	rht-system.noarch  1.0.0-1 content.example.com_rhel9.3_x86_64_rhcsa-practice_rht
	[root@servera ~]# dnf install rht-system
	Dependencies resolved.
	================================================================================
	 Package            Arch           Version                Repository       Size
	================================================================================
	Installing:
	 rht-system         noarch         1.0.0-1               content..._rht   3.7 k
	...output omitted...
	Is this ok [y/N]: y
	...output omitted...
	Installed:
	  rht-system-1.0.0-1.noarch
	Complete!
	Compruebe que el paquete está instalado y anote el número de versión del paquete.rht-system
[root@servera ~]# dnf list rht-system
	Installed Packages
	rht-system.noarch  1.0.0-1 @content.example.com_rhel9.3_x86_64_rhcsa-practice_rht
4.	Habilite el repositorio de software y actualice todos los paquetes de software relevantes.rht-updates
	Úselo para habilitar el repositorio.dnf config-manager --enablerht-updates
[root@servera ~]# dnf config-manager --enable rht-updates
	Utilice el comando para actualizar todos los paquetes de software en .dnf updateservera
[root@servera ~]# dnf update
	Dependencies resolved.
	================================================================================
	 Package            Arch           Version                Repository       Size
	================================================================================
	Upgrading:
	 rht-system         noarch         1.0.0-2                rht-updates      7.5 k
	...output omitted...
	Is this ok [y/N]: y
	...output omitted...
	Complete!
	Compruebe que el paquete se ha actualizado y anote el número de versión del paquete.rht-system
[root@servera ~]# dnf list rht-system
	Installed Packages
	rht-system.noarch                      1.0.0-2              @rht-updates
	Salir de .servera
[root@servera ~]# exit
	logout
	[student@servera ~]$ exit
	logout
	Connection to servera closed.
5.	[student@workstation ~]$
Terminar
En la máquina, cambie al directorio principal del usuario y utilice el comando para completar este ejercicio. Este paso es importante para garantizar que los recursos de ejercicios anteriores no afecten los próximos ejercicios.workstationstudentlab
[student@workstation ~]$ lab finish software-repo
Laboratorio: Instalación y actualización de paquetes de software
Administre repositorios de software e instale y actualice paquetes desde esos repositorios.
Resultados
●	Administrar repositorios de software.
●	Instalar y actualizar paquetes desde repositorios.
●	Instale un paquete RPM.
Como usuario de la máquina, use el comando para preparar el sistema para este ejercicio.studentworkstationlab
Este comando prepara el entorno y garantiza que todos los recursos necesarios estén disponibles.
[student@workstation ~]$ lab start software-review
Instrucciones
1.	En la máquina, configure un repositorio de software para obtener actualizaciones. Asigne un nombre al repositorio y configúrelo en el archivo. Configure el archivo para usar el repositorio. No verifique las firmas GPG.serverberrata/etc/yum.repos.d/errata.repoerrata.repohttp://content.example.com/rhel9.3/x86_64/rhcsa-practice/errata
	Inicie sesión en la máquina como usuario y cambie al usuario.serverbstudentroot
[student@workstation ~]$ ssh student@serverb
	...output omitted...
	[student@serverb ~]$ sudo -i
	[sudo] password for student: student
	[root@serverb ~]#
	Cree el archivo con el siguiente contenido:/etc/yum.repos.d/errata.repo
[errata]
	name=Red Hat Updates
	baseurl=http://content.example.com/rhel9.3/x86_64/rhcsa-practice/errata
	enabled=1
	gpgcheck=0
2.	El , instale el paquete.serverbrht-system
	Enumere los paquetes disponibles para el paquete.rht-system
[root@serverb ~]# dnf list rht-system
	Last metadata expiration check: 0:05:27 ago on Wed 27 Apr 2022 05:01:59 AM EDT.
	Available Packages
	rht-system.noarch     1.0.0-2             errata
	Instale la versión más reciente del paquete.rht-system
[root@serverb ~]# dnf install rht-system
	...output omitted...
	Total download size: 7.5 k
	Installed size: 300
	Is this ok [y/N]: y
	...output omitted...
	Complete!
	[root@serverb ~]#
3.	Por razones de seguridad, la máquina no debe poder conectarse a una impresora de papel. Puede lograr este efecto quitando el paquete. Cuando termine, salga de la cáscara.serverbcupsroot
	Enumere el paquete instalado.cups
[root@serverb ~]# dnf list cups
	Last metadata expiration check: 0:08:02 ago on Wed 27 Apr 2022 05:01:59 AM EDT.
	Installed Packages
	cups.x86_64        1:2.3.3op2-13.el9      @rhel-9.0-for-x86_64-appstream-rpms
	[root@serverb ~]#
	Retire el paquete.cups
[root@serverb ~]# dnf remove cups.x86_64
	...output omitted...
	Remove  46 Packages
	
	Freed space: 94 M
	Is this ok [y/N]: y
	...output omitted...
	Complete!
	Sal del caparazón.root
[root@serverb ~]# exit
	[student@serverb ~]$
4.	El script de inicio descarga el paquete en el directorio de la máquina.rhcsa-script-1.0.0-1.noarch.rpm/ï»¿home/studentserverb
Confirme que el paquete está disponible en y configúrelo con privilegios. Compruebe que el paquete está instalado. Salga de la máquina.rhcsa-script-1.0.0-1.noarch.rpmserverbrootserverb
	Compruebe que el paquete está disponible en .rhcsa-script-1.0.0-1.noarch.rpmserverb
[student@serverb ~]$ rpm -q -p rhcsa-script-1.0.0-1.noarch.rpm -i
	Name        : rhcsa-script
	Version     : 1.0.0
	Release     : 1
	Architecture: noarch
	Install Date: (not installed)
	Group       : System
	Size        : 593
	License     : GPL
	Signature   : (none)
	Source RPM  : rhcsa-script-1.0.0-1.src.rpm
	Build Date  : Wed 23 Mar 2022 08:24:21 AM EDT
	Build Host  : localhost
	Packager    : Bernardo Gargallo
	URL         : http://example.com
	Summary     : RHCSA Practice Script
	Description :
	A RHCSA practice script.
	The package changes the motd.
	Instale el paquete.rhcsa-script-1.0.0-1.noarch.rpm
[student@serverb ~]$ sudo dnf install \
	rhcsa-script-1.0.0-1.noarch.rpm
	[sudo] password for student: student
	Last metadata expiration check: 0:11:06 ago on Wed 27 Apr 2022 05:01:59 AM EDT.
	Dependencies resolved.
	==========================================================================
	 Package          Architecture      Version        Repository        Size
	==========================================================================
	Installing:
	 rhcsa-script     noarch            1.0.0-1        @commandline      7.5 k
	
	Transaction Summary
	==========================================================================
	Install  1 Package
	
	Total size: 7.5 k
	Installed size: 593
	Is this ok [y/N]: y
	Downloading Packages:
	Running transaction check
	Transaction check succeeded.
	Running transaction test
	Transaction test succeeded.
	Running transaction
	  Preparing        :                                                 1/1
	  Running scriptlet: rhcsa-script-1.0.0-1.noarch                     1/1
	  Installing       : rhcsa-script-1.0.0-1.noarch                     1/1
	  Running scriptlet: rhcsa-script-1.0.0-1.noarch                     1/1
	  Verifying        : rhcsa-script-1.0.0-1.noarch                     1/1
	
	Installed:
	  rhcsa-script-1.0.0-1.noarch
	
	Complete!
	Compruebe que el paquete está instalado.
[student@serverb ~]$ rpm -q rhcsa-script
	rhcsa-script-1.0.0-1.noarch
	[student@serverb ~]$
	Regrese al sistema como usuario.workstationstudent
[student@serverb ~]$ exit
	logout
	Connection to serverb closed.
	[student@workstation ~]$
Evaluación
Como usuario de la máquina, utilice el comando para calificar el trabajo. Corrija los errores notificados y vuelva a ejecutar el comando hasta que se realice correctamente.studentworkstationlab
[student@workstation ~]$ lab grade software-review
Terminar
En la máquina, cambie al directorio principal del usuario y utilice el comando para completar este ejercicio. Este paso es importante para garantizar que los recursos de ejercicios anteriores no afecten los próximos ejercicios.workstationstudentlab
[student@workstation ~]$ lab finish software-review
Resumen
●	RHEL proporciona herramientas para autorizar a las máquinas a suscripciones de productos, obtener actualizaciones de paquetes de software y realizar un seguimiento de la información sobre los contratos de soporte y las suscripciones que usan los sistemas.
●	El software se proporciona como paquetes RPM, para instalar, actualizar y desinstalar software en el sistema.
●	El comando puede consultar una base de datos local para proporcionar información sobre el contenido de los paquetes instalados e instalar los archivos de paquetes descargados.rpm
●	La utilidad es una poderosa herramienta de línea de comandos para instalar, actualizar, eliminar y consultar paquetes de software.dnf
●	RedÂ Hat Enterprise Linux utiliza Application Streams para proporcionar un único repositorio para alojar múltiples versiones de los paquetes de una aplicación y sus dependencias.
Capítulo 13. Acceda a los sistemas de archivos de Linux
Identificar sistemas de archivos y dispositivos
Cuestionario: Identificación de sistemas de archivos y dispositivos
Montar y desmontar sistemas de archivos
Ejercicio guiado: Montar y desmontar sistemas de archivos
Localizar archivos en el sistema
Ejercicio guiado: Localización de archivos en el sistema
Laboratorio: Acceso a sistemas de archivos Linux
Resumen
Abstracto
Gol	Acceda, inspeccione y utilice los sistemas de archivos existentes en el almacenamiento conectado a un servidor Linux.
Objetivos	●	
Identifique un directorio en la jerarquía del sistema de archivos y el dispositivo donde está almacenado.
●	Acceda al contenido de los sistemas de archivos agregando y eliminando sistemas de archivos en la jerarquía del sistema de archivos.
●	Busque archivos en sistemas de archivos montados con los comandos and.findlocate
Secciones	●	
Identificar sistemas de archivos y dispositivos (y cuestionario)
●	Montar y desmontar sistemas de archivos (y ejercicio guiado)
●	Localizar archivos en el sistema (y ejercicio guiado)
Laboratorio	●	
Acceda a los sistemas de archivos de Linux
Identificar sistemas de archivos y dispositivos
Objetivos
●	Identifique un directorio en la jerarquía del sistema de archivos y el dispositivo donde está almacenado.
Conceptos de gestión del almacenamiento
Red Hat Enterprise Linux (RHEL) utiliza el comando Sistema de archivos de extensiones (XFS) como el sistema de archivos local predeterminado. RHEL admite el Sistema de archivos extendido (ext4) sistema de archivos para administrar archivos locales. A partir de RHEL 9, el sistema de archivos de la tabla extensible de asignación de archivos (exFAT) es compatible con el uso de medios extraíbles. En un clúster de servidores empresariales, los discos compartidos utilizan el comando Sistema de archivos global 2 (GFS2) sistema de archivos para administrar el acceso simultáneo de varios nodos.
Sistemas de archivos y puntos de montaje
Acceda al contenido de un sistema de archivos montándolo en un directorio vacío. Este directorio se denomina punto de montaje. Cuando el directorio esté montado, use el comando para enumerar su contenido. Muchos sistemas de archivos se montan automáticamente cuando se inicia el sistema.ls
Un punto de montaje difiere ligeramente de una letra de unidad de Microsoft Windows, donde cada sistema de archivos es una entidad independiente. Los puntos de montaje permiten que varios dispositivos del sistema de archivos estén disponibles en una sola estructura de árbol. Este punto de montaje es similar a las carpetas montadas en NTFS en Microsoft Windows.
Sistemas de archivos, almacenamiento y dispositivos de bloque
Un dispositivo de bloque es un archivo que proporciona acceso de bajo nivel a los dispositivos de almacenamiento. Opcionalmente, se debe particionar un dispositivo de bloque y se debe crear un sistema de archivos antes de que se pueda montar el dispositivo.
El directorio almacena archivos de dispositivos de bloque, que RHEL crea automáticamente para todos los dispositivos. En RHEL 9, el primer disco duro SATA, SAS, SCSI o USB detectado se denomina dispositivo; el segundo es el dispositivo; y así sucesivamente. Estos nombres representan todo el disco duro./dev/dev/sda/dev/sdb
Tabla 13.1. Bloquear nombres de dispositivos
Tipo de dispositivo	Patrón de nomenclatura de dispositivos
Almacenamiento conectado SATA/SAS/USB (controlador SCSI)	/dev/sda, , , …/dev/sdb/dev/sdc
virtio-blk almacenamiento paravirtualizado (VM)	/dev/vda, , ,…/dev/vdb/dev/vdc
virtio-scsi almacenamiento paravirtualizado (VM)	/dev/sda, , , …/dev/sdb/dev/sdc
Almacenamiento conectado a NVMe (SSD)	/dev/nvme0, , …/dev/nvme1

Almacenamiento SD/MMC/eMMC (tarjetas SD)	/dev/mmcblk0, , …/dev/mmcblk1

Particiones de disco
Por lo general, todo el dispositivo de almacenamiento no se crea en un sistema de archivos. Para crear una partición, divida los dispositivos de almacenamiento en partes más pequeñas.
Con las particiones, puede compartimentar un disco: las distintas particiones pueden formatearse con diferentes sistemas de archivos o usarse para otros fines. Por ejemplo, una partición puede contener directorios de inicio de usuario, mientras que otra partición puede contener datos y registros del sistema. Incluso cuando la partición del directorio de inicio está cargada con datos, es posible que la partición del sistema aún tenga espacio disponible.
Las particiones son dispositivos de bloque por derecho propio. Por ejemplo, en el primer almacenamiento conectado a SATA, la primera partición es el disco. La segunda partición del mismo almacenamiento es el disco. La tercera partición en el tercer dispositivo de almacenamiento conectado a SATA es el disco, y así sucesivamente. Los dispositivos de almacenamiento paravirtualizados tienen un sistema de nomenclatura similar. Por ejemplo, la primera partición del primer dispositivo de almacenamiento es el disco. La segunda partición del segundo dispositivo de almacenamiento es el disco, y así sucesivamente./dev/sda1/dev/sda2/dev/sdc3/dev/vda1/dev/vdb2
Un dispositivo SSD conectado a NVMe nombra sus particiones de manera diferente a un dispositivo conectado a SATA. Para los dispositivos de almacenamiento NVMe, la parte del nombre hace referencia al dispositivo; la parte hace referencia al espacio de nombres; y la parte se refiere a la partición. Por ejemplo, la primera partición para el primer espacio de nombres en el primer disco es la partición. La tercera partición para el primer espacio de nombres en el segundo disco es la partición, y así sucesivamente.nvmeXnYpZ/dev/nvme0n1p1/dev/nvme1n1p3
Las tarjetas SD o MMC a veces pueden tener un sistema de nomenclatura similar al de los dispositivos SATA (). En algunos casos, las tarjetas SD o MMC pueden tener nombres como , donde la parte del nombre hace referencia al dispositivo de almacenamiento y la parte del nombre hace referencia al número de partición de ese dispositivo./dev/sdN/dev/mmcblk0p1mmcblkXpY
Una lista ampliada del archivo del dispositivo en la máquina revela el tipo de archivo, que significa un dispositivo de bloque:/dev/sda1hostb
	[user@host ~]$ ls -l /dev/sda1
brw-rw----. 1 root disk 8, 1 Feb 22 08:00 /dev/sda1
Volúmenes lógicos
Otra forma de organizar discos y particiones es con Gestión de volúmenes lógicos (LVM). Con LVM, es posible agregar dispositivos de bloque en un grupo de volúmenes. El espacio en disco del grupo de volúmenes se separa en volúmenes lógicos, que son el equivalente funcional de una partición en un disco físico.
El sistema LVM asigna nombres a los grupos de volúmenes y volúmenes lógicos en su creación. LVM crea un directorio en el directorio que coincide con el nombre del grupo y crea un enlace simbólico dentro de ese nuevo directorio con el mismo nombre que el volumen lógico. Ese archivo de volumen lógico está disponible para ser montado. Por ejemplo, cuando un grupo de volúmenes y el volumen lógico están presentes, la ruta completa al volumen lógico es el archivo./devmyvgmylv/dev/myvg/mylv
Nota
El nombre del dispositivo de volumen lógico mencionado anteriormente establece un vínculo simbólico al archivo del dispositivo que accede a él, que puede variar entre arranques. Otra forma de nombre de dispositivo de volumen lógico, que se vincula desde archivos en el directorio, se usa a menudo para enlaces simbólicos al archivo de dispositivo./dev/mapper
Examinar sistemas de archivos
Utilice el comando para mostrar una descripción general de los dispositivos del sistema de archivos locales y remotos, que incluye el espacio total en disco, el espacio en disco utilizado, el espacio libre en disco y el porcentaje de todo el espacio en disco.df
En el ejemplo siguiente se muestran los sistemas de archivos y los puntos de montaje de la máquina:host
	[user@host ~]$ df
	Filesystem     1K-blocks    Used Available Use% Mounted on
	devtmpfs          912584       0    912584   0% /dev
	tmpfs             936516       0    936516   0% /dev/shm
	tmpfs             936516   16812    919704   2% /run
	tmpfs             936516       0    936516   0% /sys/fs/cgroup
	/dev/vda3        8377344 1411332   6966012  17% /
	/dev/vda1        1038336  169896    868440  17% /boot
tmpfs             187300       0    187300   0% /run/user/1000
La partición muestra que dos sistemas de archivos físicos están montados en los directorios y que existen comúnmente en las máquinas virtuales. Los dispositivos y son sistemas de archivos en la memoria del sistema. Todos los archivos que se escriben en el sistema de archivos o desaparecen después de reiniciar el sistema.//boottmpfsdevtmpfstmpfsdevtmpfs
El comando o las opciones son opciones legibles para mejorar la legibilidad de los tamaños de salida. La opción informa en KiB (2df-h-H-h10), MiB (220) o GiB (230), mientras que la opción informa en unidades SI: KB (10-H3), MB (106) o GB (109). Los fabricantes de discos duros suelen utilizar unidades SI cuando anuncian sus productos.
Vea los sistemas de archivos en la máquina con todas las unidades convertidas a formato legible por humanos:host
	[user@host ~]$ df -h
	Filesystem      Size  Used Avail Use% Mounted on
	devtmpfs        892M     0  892M   0% /dev
	tmpfs           915M     0  915M   0% /dev/shm
	tmpfs           915M   17M  899M   2% /run
	tmpfs           915M     0  915M   0% /sys/fs/cgroup
	/dev/vda3       8.0G  1.4G  6.7G  17% /
	/dev/vda1      1014M  166M  849M  17% /boot
tmpfs           183M     0  183M   0% /run/user/1000
Utilice el comando para obtener información más detallada sobre un espacio de árbol de directorios específico. El comando y las opciones convierten la salida a un formato legible por humanos. El comando muestra el tamaño de todos los archivos en el árbol de directorios actual de forma recursiva.dudu-h-Hdu
Vea el informe de uso de disco para el directorio en la máquina:/usr/sharehost
	[root@host ~]# du /usr/share
	...output omitted...
	176 /usr/share/smartmontools
	184 /usr/share/nano
	8 /usr/share/cmake/bash-completion
	8 /usr/share/cmake
356676  /usr/share
Vea el informe de uso del disco en formato legible para el directorio:/usr/share
	[root@host ~]# du -h /usr/share
	...output omitted...
	176K  /usr/share/smartmontools
	184K  /usr/share/nano
	8.0K  /usr/share/cmake/bash-completion
	8.0K  /usr/share/cmake
369M  /usr/share
Referencias
df(1) y (1) páginas de manualdu
Montar y desmontar sistemas de archivos
Objetivos
●	Acceda al contenido de los sistemas de archivos agregando y eliminando sistemas de archivos en la jerarquía del sistema de archivos.
Montar sistemas de archivos manualmente
Para acceder al sistema de archivos en un dispositivo de almacenamiento extraíble, debe montar el dispositivo de almacenamiento. Con el comando, el usuario puede montar un sistema de archivos manualmente. El primer argumento del comando especifica el sistema de archivos que se va a montar. El segundo argumento especifica el directorio como punto de montaje en la jerarquía del sistema de archivos.mountrootmount
Puede montar el sistema de archivos de una de las siguientes maneras con el comando:mount
●	Con el nombre del archivo del dispositivo en el directorio./dev
●	Con el UUID, un identificador único universal del dispositivo.
A continuación, identifique el dispositivo que se va a montar, asegúrese de que el punto de montaje existe y monte el dispositivo en el punto de montaje.
Nota
Si monta un sistema de archivos con el comando y, a continuación, reinicia el sistema, el sistema de archivos no se vuelve a montar automáticamente. El mountAdministración del sistema Red Hat II (RH134) explica cómo montar sistemas de archivos de forma persistente con el archivo./etc/fstab
Identificar un dispositivo de bloque
Un dispositivo de almacenamiento conectable en caliente, ya sea una unidad de disco duro (HDD) o un dispositivo de estado sólido (SSD) en un servidor, o alternativamente un dispositivo de almacenamiento USB, puede conectarse cada vez a un puerto diferente en un sistema. Utilice el comando para enumerar los detalles de un dispositivo de bloque especificado o de todos los dispositivos disponibles.lsblk
	[root@host ~]# lsblk
	NAME   MAJ:MIN RM  SIZE RO TYPE MOUNTPOINTS
	vda    252:0    0   10G  0 disk
	├─vda1 252:1    0    1M  0 part
	├─vda2 252:2    0  200M  0 part /boot/efi
	├─vda3 252:3    0  500M  0 part /boot
	└─vda4 252:4    0  9.3G  0 part /
	vdb    252:16   0    5G  0 disk
	vdc    252:32   0    5G  0 disk
vdd    252:48   0    5G  0 disk
El tamaño de la partición ayuda a identificar el dispositivo cuando se desconoce el nombre de la partición. Por ejemplo, teniendo en cuenta el resultado anterior, si el tamaño de la partición identificada es de 9,3 GB, monte la partición./dev/vda4
Montar el sistema de archivos con el nombre de la partición
En el ejemplo siguiente se monta la partición en el punto de montaje./dev/vda4/mnt/data
[root@host ~]# mount /dev/vda4 /mnt/data
El directorio de punto de montaje debe existir antes de montar el sistema de archivos. El directorio existe para su uso como punto de montaje temporal./mnt
Importante
Si un directorio para usar como punto de montaje no está vacío, los archivos existentes están ocultos y no se puede acceder a ellos cuando se monta un sistema de archivos allí. Se puede volver a acceder a los archivos originales después de desmontar el sistema de archivos montado.
El orden de detección de dispositivos y la nomenclatura de los dispositivos de almacenamiento pueden cambiar cuando se agregan o eliminan dispositivos en un sistema. Se recomienda utilizar un identificador de dispositivo invariable para montar sistemas de archivos de forma coherente.
Montar sistema de archivos con UUID de partición
Un identificador estable que está asociado con un sistema de archivos es su identificador único universal (UUID). Este UUID se almacena en el superbloque del sistema de archivos y permanece igual hasta que se vuelve a crear el sistema de archivos.
El comando enumera la ruta completa del dispositivo, los UUID y los puntos de montaje, y el tipo de sistema de archivos de la partición. El punto de montaje está en blanco cuando el sistema de archivos no está montado.lsblk -fp
	[root@host ~]# lsblk -fp
	NAME        FSTYPE FSVER LABEL UUID                   FSAVAIL FSUSE% MOUNTPOINTS
	/dev/vda
	├─/dev/vda1
	├─/dev/vda2 vfat   FAT16       7B77-95E7              192.3M     4% /boot/efi
	├─/dev/vda3 xfs          boot  2d67e6d0-...-1f091bf1  334.9M    32% /boot
	└─/dev/vda4 xfs          root  efd314d0-...-ae98f652    7.7G    18% /
	/dev/vdb
	/dev/vdc
/dev/vdd
Monte el sistema de archivos mediante el UUID del sistema de archivos.
[root@host ~]# mount UUID="efd314d0-b56e-45db-bbb3-3f32ae98f652" /mnt/data
Montar automáticamente dispositivos de almacenamiento extraíbles
Con el entorno de escritorio gráfico, el sistema monta automáticamente medios de almacenamiento extraíbles cuando se detecta la presencia de medios.
El dispositivo de almacenamiento extraíble se monta en la ubicación. /run/media/USERNAME/LABELNOMBRE DE USUARIO es el nombre del usuario que ha iniciado sesión en el entorno gráfico. ETIQUETA es un identificador, que suele ser la etiqueta del medio de almacenamiento.
Para desconectar de forma segura un dispositivo extraíble, primero desmonte manualmente todos los sistemas de archivos del dispositivo.
Desmontar sistemas de archivos
Los procedimientos de apagado y reinicio del sistema desmontan todos los sistemas de archivos automáticamente. Todos los datos del sistema de archivos se vacían en el dispositivo de almacenamiento para garantizar la integridad de los datos del sistema de archivos.
Advertencia
Los datos del sistema de archivos utilizan la memoria caché durante el funcionamiento normal. Debe desmontar los sistemas de archivos de una unidad extraíble antes de desconectar la unidad. El procedimiento de desmontaje vacía los datos en el disco antes de liberar la unidad.
El comando utiliza el punto de montaje como argumento para desmontar un sistema de archivos.umount
[root@host ~]# umount /mnt/data
El desmontaje no es posible cuando el sistema de archivos montado está en uso. Para que el comando se realice correctamente, todos los procesos deben dejar de tener acceso a los datos en el punto de montaje.umount
En el ejemplo siguiente, se produce un error en el comando porque el shell usa el directorio como directorio de trabajo actual y, por lo tanto, genera un mensaje de error.umount/mnt/data
	[root@host ~]# cd /mnt/data
	[root@host data]# umount /mnt/data
umount: /mnt/data: target is busy.
El comando enumera todos los archivos abiertos y los procesos que acceden al sistema de archivos. La lista ayuda a identificar qué procesos impiden que el sistema de archivos se desmonte correctamente.lsof
	[root@host data]# lsof /mnt/data
	COMMAND  PID USER   FD   TYPE DEVICE SIZE/OFF NODE NAME
	bash    1593 root  cwd    DIR 253,17        6  128 /mnt/data
	lsof    2532 root  cwd    DIR 253,17       19  128 /mnt/data
lsof    2533 root  cwd    DIR 253,17       19  128 /mnt/data
Identifique y espere a que se completen los procesos, o envíe la señal o para finalizarlos. En este caso, basta con cambiar a un directorio de trabajo actual que esté fuera del punto de montaje.SIGTERMSIGKILL
	[root@host data]# cd
[root@host ~]# umount /mnt/data
Referencias
lsblk(8), (8), (8) y (8) páginas de manualmountumountlsof
Ejercicio guiado: Montar y desmontar sistemas de archivos
Practique el montaje y desmontaje de sistemas de archivos.
Resultados
●	Identifique y monte un nuevo sistema de archivos en un punto de montaje especificado y, a continuación, desmonte el sistema de archivos.
Como usuario de la máquina, use el comando para preparar el sistema para este ejercicio.studentworkstationlab
Este comando prepara el entorno y garantiza que todos los recursos necesarios estén disponibles.
[student@workstation ~]$ lab start fs-mount
Instrucciones
	Inicie sesión en la máquina como usuario y cambie al usuario.serverastudentroot
[student@workstation ~]$ ssh student@servera
	...output omitted...
	[student@servera ~]$ sudo -i
	[sudo] password for student: student
1.	[root@servera ~]#
2.	Se agrega una nueva partición con un sistema de archivos al disco de la máquina. Monte la partición recién disponible mediante el UUID en el punto de montaje./dev/vdbservera/mnt/part1
	Cree el directorio./mnt/part1
[root@servera ~]# mkdir /mnt/part1
	Consulte el UUID del dispositivo./dev/vdb1
[root@servera ~]# lsblk -fp /dev/vdb
	NAME        FSTYPE LABEL UUID                                 MOUNTPOINT
	/dev/vdb
	└─/dev/vdb1 xfs          a04c511a-b805-4ec2-981f-42d190fc9a65
	Monte el sistema de archivos mediante el UUID en el directorio. Utilice el UUID de la salida del comando anterior./mnt/part1/dev/vdb1
[root@servera ~]# mount \
	UUID="a04c511a-b805-4ec2-981f-42d190fc9a65" /mnt/part1
	Compruebe que el dispositivo está montado en el directorio./dev/vdb1/mnt/part1
[root@servera ~]# lsblk -fp /dev/vdb
	NAME        FSTYPE LABEL UUID                                 MOUNTPOINT
	/dev/vdb
	└─/dev/vdb1 xfs          a04c511a-b805-4ec2-981f-42d190fc9a65 /mnt/part1
3.	Cambie al directorio y cree el subdirectorio. Cree el archivo./mnt/part1testdir/mnt/part1/testdir/newmount
	Cambie al directorio./mnt/part1
[root@servera ~]# cd /mnt/part1
	Cree el directorio./mnt/part1/testdir
[root@servera part1]# mkdir testdir
	Cree el archivo./mnt/part1/testdir/newmount
[root@servera part1]# touch testdir/newmount
4.	Desmonte el sistema de archivos que está montado en el directorio./mnt/part1
	Desmonte el directorio cuando el shell esté en el directorio. El comando no puede desmontar el dispositivo./mnt/part1/mnt/part1umount
[root@servera part1]# umount /mnt/part1
	umount: /mnt/part1: target is busy.
	Cambie el directorio actual en el shell al directorio./root
[root@servera part1]# cd
	[root@servera ~]#
	Desmonte el directorio./mnt/part1
[root@servera ~]# umount /mnt/part1
	Regrese a la máquina como usuario.workstationstudent
[root@servera ~]# exit
	logout
	[student@servera ~]$ exit
	logout
	Connection to servera closed.
5.	[student@workstation]$
Terminar
En la máquina, cambie al directorio principal del usuario y utilice el comando para completar este ejercicio. Este paso es importante para garantizar que los recursos de ejercicios anteriores no afecten los próximos ejercicios.workstationstudentlab
[student@workstation ~]$ lab finish fs-mount
Localizar archivos en el sistema
Objetivos
●	Busque archivos en sistemas de archivos montados con los comandos and.findlocate
Buscar archivos
Un administrador del sistema necesita herramientas para buscar archivos que coincidan con criterios específicos en el sistema de archivos. En esta sección se describen dos comandos para buscar archivos en la jerarquía del sistema de archivos:
●	El comando busca en un índice generado previamente nombres de archivo o rutas de acceso de archivo y devuelve los resultados al instante.locate
●	El comando busca archivos en tiempo real analizando la jerarquía del sistema de archivos.find
Localizar archivos por nombre
El comando busca archivos en función del nombre o la ruta del archivo. El comando es rápido, ya que busca esta información en la base de datos. Sin embargo, esta base de datos no se actualiza en tiempo real y requiere actualizaciones frecuentes para obtener resultados precisos. Esta característica también significa que el comando no busca archivos creados desde la última actualización de la base de datos.locatemlocatelocate
La base de datos se actualiza automáticamente todos los días. Sin embargo, el usuario puede emitir el comando para forzar una actualización inmediata.locaterootupdatedb
[root@host ~]# updatedb
El comando restringe los resultados para los usuarios sin privilegios. Para ver el nombre de archivo resultante, el usuario debe tener permiso de búsqueda en el directorio donde reside el archivo. Por ejemplo, busque los archivos que el usuario puede leer y que coinciden con la palabra clave en el nombre o la ruta de acceso:locatedeveloperpasswd
	[developer@host ~]$ locate passwd
	/etc/passwd
	/etc/passwd-
	/etc/pam.d/passwd
...output omitted...
En el ejemplo siguiente se muestra el nombre de archivo o la ruta de acceso para una coincidencia parcial con la consulta de búsqueda:
	[root@host ~]# locate image
	/etc/selinux/targeted/contexts/virtual+_+image_context
	/usr/bin/grub2-mkimage
	/usr/lib/sysimage
...output omitted...
La opción de comando realiza una búsqueda que no distingue entre mayúsculas y minúsculas. Esta opción devuelve todas las combinaciones posibles de letras mayúsculas y minúsculas coincidentes:locate-i
	[developer@host ~]$ locate -i messages
	...output omitted...
	/usr/share/locale/zza/LC_MESSAGES
	/usr/share/makedumpfile/eppic_scripts/ap_messages_3_10_to_4_8.c
	/usr/share/vim/vim82/ftplugin/msmessages.vim
...output omitted...
La opción de comando limita el número de resultados de búsqueda devueltos. En el ejemplo siguiente se limitan los resultados de búsqueda del comando a las cinco primeras coincidencias:locate-nlocate
	[developer@host ~]$ locate -n 5 passwd
	/etc/passwd
	/etc/passwd-
	/etc/pam.d/passwd
...output omitted...
Búsqueda de archivos en tiempo real
El comando localiza archivos buscando en tiempo real en la jerarquía del sistema de archivos. Este comando es más lento pero más preciso que el comando. El comando también busca archivos en función de criterios distintos del nombre del archivo, como los permisos del archivo, el tipo de archivo, el tamaño o el tiempo de modificación.findlocatefind
El comando examina los archivos del sistema de archivos con la cuenta de usuario que ejecutó la búsqueda. El usuario que ejecuta el comando debe tener permiso de lectura y ejecución en un directorio para examinar su contenido.findfind
El primer argumento del comando es el directorio a buscar. Si el comando omite el argumento de directorio, inicia la búsqueda en el directorio actual y busca coincidencias en cualquier subdirectorio.findfind
Para buscar archivos por nombre de archivo, utilice la opción de comando para devolver la ruta de acceso de los archivos que coincidan find-name FILENAMENOMBRE exactamente. Por ejemplo, para buscar los archivos en el directorio raíz, ejecute el siguiente comando:sshd_config/
	[root@host ~]# find / -name sshd_config
/etc/ssh/sshd_config
Nota
En el comando, las opciones de palabras completas usan un solo guión para las opciones, a diferencia de un guión doble para la mayoría de los otros comandos de Linux.find
Los caracteres comodín están disponibles para buscar un nombre de archivo y devolver todos los resultados de una coincidencia parcial. Con los comodines, es esencial citar el nombre del archivo, para evitar que el terminal malinterprete el comodín.
En el ejemplo siguiente, comenzando en el directorio, busque archivos que terminen con la extensión:/.txt
	[root@host ~]# find / -name '*.txt'
	...output omitted...
	/usr/share/libgpg-error/errorref.txt
	/usr/share/licenses/audit-libs/lgpl-2.1.txt
	/usr/share/licenses/pam/gpl-2.0.txt
...output omitted...
Para buscar archivos en el directorio que contienen la cadena, ejecute el siguiente comando:/etc/pass
	[root@host ~]# find /etc -name '*pass*'
	/etc/passwd-
	/etc/passwd
	/etc/security/opasswd
...output omitted...
Para realizar una búsqueda de un nombre de archivo que no distinga entre mayúsculas y minúsculas, use la opción de comando, seguida del nombre de archivo que desea buscar. Para buscar archivos con texto que no distinga entre mayúsculas y minúsculas y que coincida con la cadena de sus nombres en el directorio raíz, ejecute el siguiente comando:find-inamemessages/
	[root@host ~]# find / -iname '*messages*'
	/sys/power/pm_debug_messages
	/usr/lib/locale/C.utf8/LC_MESSAGES
	/usr/lib/locale/C.utf8/LC_MESSAGES/SYS_LC_MESSAGES
...output omitted...
Buscar archivos según la propiedad o el permiso
El comando busca archivos en función de su propiedad o permisos. El comando y las opciones buscan por nombre de usuario y grupo, o por ID de usuario e ID de grupo.findfind-user-group
Para buscar archivos en el directorio que posee el usuario:/home/developerdeveloper
	[developer@host ~]$ find -user developer
	.
	./.bash_logout
	./.bash_profile
...output omitted...
Para buscar archivos en el directorio que posee el grupo:/home/developerdeveloper
	[developer@host ~]$ find -group developer
	.
	./.bash_logout
	./.bash_profile
...output omitted...
Para buscar archivos en el directorio que posee el ID de usuario:/home/developer1000
	[developer@host ~]$ find -uid 1000
	.
	./.bash_logout
	./.bash_profile
...output omitted...
Para buscar archivos en el directorio que posee el ID de grupo:/home/developer1000
	[developer@host ~]$ find -gid 1000
	.
	./.bash_logout
	./.bash_profile
...output omitted...
El comando y las opciones buscan archivos en los que el propietario del archivo y el propietario del grupo son diferentes. En el ejemplo siguiente se enumeran los archivos que posee el usuario y con el grupo:find-user-grouprootmail
	[root@host ~]# find / -user root -group mail
	/var/spool/mail
...output omitted...
La opción de comando busca archivos con un conjunto de permisos determinado. Los valores octales definen los permisos con , y para lectura, escritura y ejecución. Los permisos van precedidos de un signo o para controlar los resultados de la búsqueda.find-perm421/-
El permiso octal precedido por el signo coincide con los archivos en los que se establece al menos un permiso para el usuario, el grupo u otro para ese conjunto de permisos. Un archivo con los permisos no coincide con el permiso, pero coincide con el permiso. Un signo antes del permiso significa que las tres partes de los permisos deben coincidir. En el ejemplo anterior, los archivos con los permisos coinciden. También puede usar la opción de comando con el método simbólico para los permisos./r--r--r--/222rw-r--r---rw-rw-rw-find-perm
Por ejemplo, los siguientes comandos coinciden con cualquier archivo del directorio para el que el usuario propietario tenga permisos de lectura, escritura y ejecución, y los miembros del grupo propietario tengan permisos de lectura y escritura, y otros tengan acceso de solo lectura. Ambos comandos son equivalentes; el primero usa el método octal para los permisos, mientras que el segundo usa los métodos simbólicos./home
	[root@host ~]# find /home -perm 764
	...output omitted...
	[root@host ~]# find /home -perm u=rwx,g=rw,o=r
...output omitted...
La opción de comando es conveniente cuando se buscan archivos por permisos, ya que proporciona información para los archivos que incluye sus permisos.find-ls
	[root@host ~]# find /home -perm 764 -ls
 26207447   0 -rwxrw-r--   1 user  user   0 May 10 04:29 /home/user/file1
Para buscar archivos para los que el usuario tiene al menos permisos de escritura y ejecución, y el grupo tiene al menos permiso de escritura, y otros tienen al menos permiso de lectura, ejecute el siguiente comando:
	[root@host ~]# find /home -perm -324
	...output omitted...
	[root@host ~]# find /home -perm -u=wx,g=w,o=r
...output omitted...
Para buscar archivos para los que el usuario tiene permisos de lectura, o el grupo tiene al menos permisos de lectura, u otros tienen al menos permiso de escritura, ejecute el siguiente comando:
	[root@host ~]# find /home -perm /442
	...output omitted...
	[root@host ~]# find /home -perm /u=r,g=r,o=w
...output omitted...
Cuando se usa con signos o, el valor funciona como un carácter comodín, ya que significa cualquier permiso./-0
Para buscar cualquier archivo en el directorio para el que otros tengan al menos acceso de lectura en la máquina, ejecute el siguiente comando:/home/developerhost
	[developer@host ~]$ find -perm -004
	...output omitted...
	[developer@host ~]$ find -perm -o=r
...output omitted...
Para buscar todos los archivos en el directorio donde otros tienen permiso de escritura, ejecute el siguiente comando:/home/developer
	[developer@host ~]$ find -perm -002
	...output omitted...
	[developer@host ~]$ find -perm -o=w
...output omitted...
Buscar archivos según el tamaño
La opción de comando va seguida de un valor numérico y la unidad busca archivos que coincidan con un tamaño especificado. Utilice la siguiente lista para las unidades con la opción de comando:find-sizefind-size
●	Para kilobytes, use la unidad con always en minúsculas.kk
●	Para megabytes, use la unidad con always en mayúsculas.MM
●	Para gigabytes, use la unidad con always in uppermin.GG
Puede usar los caracteres más y menos para incluir archivos que sean más grandes y más pequeños que el tamaño dado, respectivamente. En el ejemplo siguiente se muestra una búsqueda de archivos con un tamaño exacto de 10 megabytes:+-
	[developer@host ~]$ find -size 10M
...output omitted...
Para buscar archivos con un tamaño de más de 10 gigabytes:
	[developer@host ~]$ find -size +10G
...output omitted...
Para buscar archivos con un tamaño inferior a 10 kilobytes:
	[developer@host ~]$ find -size -10k
...output omitted...
Importante
La opción de comando redondea todo a unidades individuales. Por ejemplo, el comando muestra archivos que tienen menos de 1 MB, ya que redondea todos los archivos a 1 MB.find-sizefind -size 1M
Búsqueda de archivos en función del tiempo de modificación
La opción de comando, seguida del tiempo en minutos, busca todos los archivos con contenido que cambió hace minutos. La marca de tiempo del archivo se redondea hacia abajo y admite valores fraccionarios con el rango and.find-mminn+n-n
Para buscar todos los archivos con contenido que cambió hace 120 minutos:
	[root@host ~]# find / -mmin 120
...output omitted...
El modificador delante de los minutos busca todos los archivos en el directorio que cambiaron hace más de minutos. Para buscar todos los archivos con contenido que cambió hace más de 200 minutos:+/n
	[root@host ~]# find / -mmin +200
...output omitted...
El modificador busca todos los archivos del directorio que cambiaron hace menos de minutos. En el ejemplo siguiente se enumeran los archivos que cambiaron hace menos de 150 minutos:-/n
	[root@host ~]# find / -mmin -150
...output omitted...
Buscar archivos según el tipo de archivo
La opción de comando limita el ámbito de búsqueda a un tipo de archivo determinado. Use las siguientes marcas para limitar el ámbito de búsqueda:find-type
●	Para archivos normales, use la bandera.f
●	Para directorios, use la bandera.d
●	Para enlaces suaves, use la bandera.l
●	Para dispositivos de bloque, use la marca.b
Busque todos los directorios en el directorio:/etc
	[root@host ~]# find /etc -type d
	/etc
	/etc/tmpfiles.d
	/etc/systemd
	/etc/systemd/system
	/etc/systemd/system/getty.target.wants
...output omitted...
Busque todos los enlaces suaves en el directorio:/
	[root@host ~]# find / -type l
...output omitted...
Busque todos los dispositivos de bloque en el directorio:/dev
	[root@host ~]# find /dev -type b
	/dev/vda1
/dev/vda
La opción de comando seguida de un número busca todos los archivos con un recuento específico de enlaces físicos. El número precedido por un modificador busca archivos con un recuento mayor que el recuento de enlaces físicos especificado. Si el número precede a un modificador, la búsqueda se limita a los archivos con un número de enlaces físicos inferior al número dado.find-links+-
Busque todos los archivos normales con más de un enlace duro:
	[root@host ~]# find / -type f -links +1
...output omitted...
Referencias
locate(1), (8) y (1) páginas de manualupdatedbfind
Ejercicio guiado: Localización de archivos en el sistema
Busque archivos específicos en sistemas de archivos montados mediante los comandos and.findlocate
Resultados
●	Busque archivos con los comandos and.findlocate
Como usuario de la máquina, use el comando para preparar el sistema para este ejercicio.studentworkstationlab
Este comando prepara el entorno y garantiza que todos los recursos necesarios estén disponibles.
[student@workstation ~]$ lab start fs-locate
Instrucciones
	En la máquina, utilice el comando para iniciar sesión en la máquina como usuario.workstationsshserverastudent
[student@workstation ~]$ ssh student@servera
	...output omitted...
1.	[student@servera ~]$
2.	Utilice el comando para buscar archivos en el equipo.locateservera
	Actualice la base de datos manualmente en la máquina. Utilice el comando para actualizar la base de datos.locatedbserversudo updatedb
[student@servera ~]$ sudo updatedb
	[sudo] password for student: student
	[student@servera ~]$
	Localice el archivo de configuración.logrotate.conf
[student@servera ~]$ locate logrotate.conf
	/etc/logrotate.conf
	/usr/share/man/man5/logrotate.conf.5.gz
	Busque el archivo de configuración, ignorando la distinción entre mayúsculas y minúsculas.networkmanager.conf
[student@servera ~]$ locate -i networkmanager.conf
	/etc/NetworkManager/NetworkManager.conf
	/etc/dbus-1/system.d/org.freedesktop.NetworkManager.conf
	/usr/share/man/man5/NetworkManager.conf.5.gz
3.	Utilice el comando para buscar en tiempo real en la máquina de acuerdo con los siguientes requisitos:findservera
	Enumere todos los archivos del directorio que posee el usuario./var/libchrony
	Enumere todos los archivos del directorio que poseen el usuario y el grupo./varrootmail
	Enumere todos los archivos del directorio con un tamaño de archivo superior a 50 KB./usr/bin
	Enumere todos los archivos del directorio que han cambiado en los últimos 120 minutos./home/student
	Enumere todos los archivos de dispositivo de bloque en el directorio./dev
	Busque todos los archivos en el directorio que posee el usuario, con privilegios de root./var/libchrony
[student@servera ~]$ sudo find /var/lib -user chrony
	[sudo] password for student: student
	/var/lib/chrony
	/var/lib/chrony/drift
	Enumere todos los archivos del directorio que posee el usuario y que pertenecen al grupo./varrootmail
[student@servera ~]$ sudo find /var -user root -group mail
	/var/spool/mail
	Enumere todos los archivos del directorio con un tamaño de archivo superior a 50 KB./usr/bin
[student@servera ~]$ find /usr/bin -size +50k
	/usr/bin/iconv
	/usr/bin/locale
	/usr/bin/localedef
	/usr/bin/cmp
	...output omitted...
	Enumere todos los archivos del directorio que han cambiado en los últimos 120 minutos./home/student
[student@servera ~]$ find /home/student -mmin -120
	/home/student/.bash_logout
	/home/student/.bash_profile
	/home/student/.bashrc
	...output omitted...
	Enumere todos los archivos de dispositivos de bloque en el directorio./dev
[student@servera ~]$ find /dev -type b
	/dev/vdd
	/dev/vdc
	/dev/vdb
	/dev/vda3
	/dev/vda2
	/dev/vda1
	/dev/vda
	Regrese a la máquina como usuario.workstationstudent
[student@servera ~]$ exit
	logout
	Connection to servera closed.
4.	[student@workstation]$
Terminar
En la máquina, cambie al directorio principal del usuario y utilice el comando para completar este ejercicio. Este paso es importante para garantizar que los recursos de ejercicios anteriores no afecten los próximos ejercicios.workstationstudentlab
[student@workstation ~]$ lab finish fs-locate
Laboratorio: Acceso a sistemas de archivos Linux
Monte un sistema de archivos local y busque archivos específicos en ese sistema de archivos.
Resultados
●	Montar un sistema de archivos.
●	Genere un informe de uso del disco.
●	Buscar archivos en el sistema de archivos local.
Como usuario de la máquina, use el comando para preparar el sistema para este ejercicio.studentworkstationlab
Este comando prepara el entorno y garantiza que todos los recursos necesarios estén disponibles.
[student@workstation ~]$ lab start fs-review
Instrucciones
1.	En la máquina como usuario, identifique el UUID del dispositivo y móntelo mediante su UUID en el directorio.serverbroot/dev/vdb1/mnt/freespace
	Inicie sesión en la máquina como usuario y cambie al usuario.serverbstudentroot
[student@workstation ~]$ ssh student@serverb
	...output omitted...
	[student@serverb ~]$ sudo -i
	[sudo] password for student: student
	[root@serverb ~]#
	Consulte el UUID del dispositivo./dev/vdb1
[root@serverb ~]# lsblk -fp /dev/vdb
	NAME        FSTYPE FSVER LABEL UUID                                 FSAVAIL FSUSE% MOUNTPOINTS
	/dev/vdb
	└─/dev/vdb1 xfs                44bfb7c8-970c-4d0b-b53d-90ae31cb27ca
	Cree el directorio./mnt/freespace
[root@serverb ~]# mkdir /mnt/freespace
	Monte el dispositivo mediante el UUID en el directorio./dev/vdb1/mnt/freespace
[root@serverb ~]# mount UUID="44bfb7c8-970c-4d0b-b53d-90ae31cb27ca" /mnt/freespace
	Compruebe que el dispositivo está montado en el directorio./dev/vdb1/mnt/freespace
[root@serverb ~]# lsblk -fp /dev/vdb1
	NAME     FSTYPE FSVER LABEL UUID                                 FSAVAIL FSUSE% MOUNTPOINTS
	/dev/vdb1
	         xfs                44bfb7c8-970c-4d0b-b53d-90ae31cb27ca    4.9G     1% /mnt/freespace
2.	Genere un informe de uso de disco para el directorio. Guarde el resultado en el archivo./usr/share/mnt/freespace/results.txt
3.	[root@serverb ~]# du /usr/share > /mnt/freespace/results.txt
4.	Localice todos los archivos que coincidan con la palabra clave y almacene el resultado en el archivo.rsyslog.conf/mnt/freespace/search1.txt
	Actualice la base de datos.locate
[root@serverb ~]# updatedb
	Utilice el comando para buscar todos los archivos que coincidan con la palabra clave y guarde el resultado en el archivo.locatersyslog.conf/mnt/freespace/search1.txt
[root@serverb ~]# locate rsyslog.conf > /mnt/freespace/search1.txt
5.	Almacene en el archivo el resultado de la búsqueda de todos los archivos del directorio que sean mayores de 50 MB y menores de 100 MB./mnt/freespace/search2.txt/usr/share
	[root@serverb ~]# find /usr/share -size +50M -size -100M > \
6.	/mnt/freespace/search2.txt
7.	Regrese al sistema como usuario.workstationstudent
	[root@serverb ~]$ exit
	logout
	[student@serverb ~]$ exit
	logout
	Connection to serverb closed.
8.	[student@workstation ~]$
Evaluación
Como usuario de la máquina, utilice el comando para calificar el trabajo. Corrija los errores notificados y vuelva a ejecutar el comando hasta que se realice correctamente.studentworkstationlab
[student@workstation ~]$ lab grade fs-review
Terminar
En la máquina, cambie al directorio principal del usuario y utilice el comando para completar este ejercicio. Este paso es importante para garantizar que los recursos de ejercicios anteriores no afecten los próximos ejercicios.workstationstudentlab
[student@workstation ~]$ lab finish fs-review
Resumen
●	Los dispositivos de almacenamiento están representados por el Bloquear dispositivo tipo de archivo.
●	El comando informa del espacio total en disco, el espacio en disco utilizado y el espacio libre en disco en todos los sistemas de archivos normales montados.df
●	El usuario puede usar el comando para montar manualmente un sistema de archivos.rootmount
●	Para desmontar correctamente un dispositivo, todos los procesos deben dejar de acceder al punto de montaje.
●	Los dispositivos de almacenamiento extraíbles se montan en el directorio cuando se utiliza el entorno gráfico./run/media
●	El comando enumera los detalles de los dispositivos de bloque, como el tamaño y el UUID.lsblk
●	El comando busca en tiempo real en los sistemas de archivos locales archivos de acuerdo con los criterios de búsqueda.find
Capítulo 14. Analice servidores y obtenga soporte
Analizar y administrar servidores remotos
Ejercicio guiado: Análisis y administración de servidores remotos
Crear un informe de diagnóstico
Ejercicio guiado: Crear un informe de diagnóstico
Detecte y resuelva problemas con Red Hat Insights
Cuestionario: Detecte y resuelva problemas con Red Hat Insights
Resumen
Abstracto
Gol	Investigue y resuelva problemas en la interfaz de administración basada en web, obteniendo soporte de Red Hat para ayudar a resolver problemas.
Objetivos	●	
Active la interfaz de administración de la consola web para administrar y monitorear de forma remota el rendimiento de un servidor Red Hat Enterprise Linux.
●	Describa y utilice los recursos clave del Portal del cliente de Red Hat para encontrar información en la documentación de Red Hat y en la base de conocimientos.
●	Utilice Red Hat Insights para analizar los servidores en busca de problemas, corregirlos o resolverlos, y confirmar que la solución funcionó.
Secciones	●	
Análisis y administración de servidores remotos (y ejercicio guiado)
●	Crear un informe de diagnóstico (y un ejercicio guiado)
●	Detecte y resuelva problemas con Red Hat Insights (y Quiz)
Analizar y administrar servidores remotos
Objetivos
●	Active la interfaz de administración de la consola web para administrar y monitorear de forma remota el rendimiento de un servidor Red Hat Enterprise Linux.
Descripción de la consola web
El Consola web es una interfaz de administración basada en web para Red Hat Enterprise Linux. La interfaz está diseñada para administrar y monitorear sus servidores, y se basa en el servicio Cockpit de código abierto.
Puede utilizar la consola web para supervisar los registros del sistema y ver gráficos del rendimiento del sistema. Además, puede usar su navegador web para cambiar la configuración mediante el uso de herramientas gráficas en la interfaz de la consola web, incluida una sesión de terminal interactiva completamente funcional.
Habilitar la consola web
A partir de Red Hat Enterprise Linux 7, la consola web se instala de forma predeterminada en todas las variantes de instalación, excepto en una instalación mínima. Puede utilizar el siguiente comando para instalar la consola web:
[root@host ~]# dnf install cockpit
A continuación, habilite e inicie el servicio, que ejecuta un servidor web. Este paso es necesario si necesita conectarse al sistema a través de la interfaz web.cockpit.socket
	[root@host ~]# systemctl enable --now cockpit.socket
Created symlink /etc/systemd/system/sockets.target.wants/cockpit.socket -> /usr/lib/systemd/system/cockpit.socket.
Si está utilizando un perfil de firewall personalizado, debe agregar el servicio al puerto abierto en el firewall:cockpitfirewalld9090
	[root@host ~]# firewall-cmd --add-service=cockpit --permanent
	success
	[root@host ~]# firewall-cmd --reload
success
Inicie sesión en la consola web
La consola web proporciona su propio servidor web. Inicie su navegador web para iniciar sesión en la consola web.
Abrir https://nombre del servidor:9090 en su navegador web, donde nombre del servidor es el nombre de host o la dirección IP de su servidor. La consola web protege la conexión mediante un Seguridad de la capa de transporte (TLS) sesión. De forma predeterminada, el servicio instala la consola web con un certificado TLS autofirmado. Cuando se conecta a la consola web por primera vez, es probable que el navegador web muestre una advertencia de seguridad. La página del comando man (8) proporciona instrucciones sobre cómo reemplazar el certificado TLS por uno firmado correctamente.cockpitcockpit-ws
Para iniciar sesión en la consola web, ingrese su nombre de usuario y contraseña en la pantalla de inicio de sesión. Puede iniciar sesión con el nombre de usuario y la contraseña de cualquier cuenta local en el sistema, incluido el usuario.root
 
Figura 14.1: Pantalla de inicio de sesión de la consola web
Haga clic en Iniciar sesión.
Después de iniciar sesión, la consola web muestra el nombre de usuario en el lado izquierdo de la barra de título. El acceso predeterminado a la consola web es con derechos limitados, como puede ver en el siguiente botón de acceso limitado y en el mensaje "La consola web se ejecuta en modo de acceso limitado".
 
Figura 14.2: Barra de título del usuario sin privilegios
Si su cuenta está configurada con los privilegios adecuados, puede escalar los privilegios cambiando al acceso administrativo, haciendo clic en los botones Acceso limitado o Activar acceso administrativo. Durante el proceso de privilegios de escalamiento, debe ingresar su contraseña. Cuando tenga privilegios escalados, el botón Acceso limitado cambia a Acceso administrativo.
Puede volver al modo de acceso limitado haciendo clic en el botón Acceso administrativo y, a continuación, haciendo clic en el botón Limitar acceso en la ventana emergente que muestra.
 
Figura 14.3: Barra de título del usuario privilegiado
Cambiar contraseñas en la consola web
Puede cambiar su propia contraseña cuando inicie sesión en la consola web. Haga clic en el botón Cuentas de la barra de navegación. Haz clic en la etiqueta de tu cuenta para abrir la página de detalles de la cuenta.
 
Figura 14.4: Cuentas de usuario
Como usuario sin privilegios, está restringido a establecer o restablecer su contraseña y administrar claves SSH públicas. Para establecer o restablecer su contraseña, haga clic en el botón Establecer contraseña.
 
Figura 14.5: Detalles de la cuenta de usuario
Ingrese su información en los campos Contraseña anterior, Nueva contraseña y Confirmar nueva contraseña. Haga clic en el botón Establecer contraseña para activar la nueva contraseña.
 
Figura 14.6: Configuración y restablecimiento de contraseñas
Solución de problemas con la consola web
La consola web es una poderosa herramienta de solución de problemas. Puede supervisar las estadísticas del sistema en tiempo real, inspeccionar los registros del sistema y cambiar a una sesión de terminal dentro de la consola web para recopilar información adicional de la interfaz de línea de comandos.
Supervise las estadísticas del sistema en tiempo real
Haga clic en el botón Información general de la barra de navegación para ver información sobre el sistema, como su tipo de hardware, sistema operativo, nombre de host y mucho más. Si inicia sesión como usuario sin privilegios, puede ver toda la información pero no modificar ningún valor. La siguiente imagen muestra la página Información general.
 
Figura 14.7: Página de descripción general del usuario sin privilegios
Haga clic en Ver detalles e historial en la página Información general para ver detalles del rendimiento actual del sistema para la actividad de la CPU, el uso de memoria, la E/S de disco y el uso de la red.
 
Figura 14.8: Métricas de rendimiento del sistema del usuario sin privilegios
Inspeccionar y filtrar eventos de Syslog
La sección Registros de la barra de navegación proporciona acceso a las herramientas de análisis para los registros del sistema. Puede usar los menús de desplazamiento de la página para filtrar los mensajes de registro por un intervalo de fechas de registro, o por prioridad, o por ambos. La consola web utiliza la fecha actual como predeterminada; Puede hacer clic en el menú Fecha y especificar cualquier intervalo de fechas. Del mismo modo, el menú Prioridad proporciona opciones que van desde Depurar y superior (en el nivel más bajo) hasta condiciones de gravedad más específicas, como Alerta y superior o Error y superior.
 
Figura 14.9: Selecciones de gravedad de registro
Haga clic en una fila para ver los detalles del informe de registro. En el ejemplo siguiente, observe la primera fila que informa sobre un mensaje de registro.sudo
 
Figura 14.10: Selección de entrada de registro
En el ejemplo siguiente se muestran los detalles que muestra la consola web al hacer clic en la fila. Los detalles del informe incluyen la entrada de registro seleccionada (), la fecha, la hora, la prioridad y la función syslog de la entrada de registro, y el nombre de host del sistema que informó el mensaje de registro.sudosudo
 
Figura 14.11: Detalles de la entrada de registro
Ejecutar comandos desde una sesión de terminal
El botón Terminal de la barra de navegación proporciona acceso a una sesión de terminal completamente funcional dentro de la interfaz de la consola web. En este terminal de consola web, puede ejecutar comandos arbitrarios para administrar y trabajar con el sistema, y para tareas que las otras herramientas de consola web no admiten.
En la imagen siguiente se muestran ejemplos de comandos para recopilar información adicional. Por ejemplo, enumerar el contenido del directorio proporciona recordatorios de archivos de registro que pueden tener información valiosa. El comando proporciona información como la pertenencia a grupos que puede ayudar a solucionar problemas de restricciones de acceso a archivos. El comando proporciona una vista de los procesos que se ejecutan en el terminal y del usuario asociado con el proceso./var/logidps au
 
Figura 14.12: Solución de problemas de sesión de terminal sin privilegios
Crear informes de diagnóstico
Un informe de diagnóstico es una colección de detalles de configuración, información del sistema e información de diagnóstico de un sistema Red Hat Enterprise Linux. Los datos recopilados en el informe incluyen registros del sistema e información de depuración que puede usar para solucionar problemas.
Para generar un informe de diagnóstico, inicie sesión en la consola web como usuario privilegiado. Haga clic en el botón Informes de diagnóstico de la barra de navegación para abrir la página que crea estos informes. Haga clic en el botón Crear informe para generar un nuevo informe de diagnóstico.
 
Figura 14.13: Crear un informe de diagnóstico
Después de unos minutos, la interfaz muestra ¡Listo! cuando se completa el informe. Haga clic en el botón Descargar informe para guardar el informe en su sistema local.
 
Figura 14.14: Descargar un informe completo
Haga clic en Guardar archivo y complete el proceso.
Administrar servicios del sistema con la consola web
Como usuario privilegiado de la consola web, puede detener, iniciar, habilitar y reiniciar los servicios del sistema. Además, puede configurar interfaces de red, configurar servicios de firewall, administrar cuentas de usuario y más.
Opciones de energía del sistema
En la consola web, puede reiniciar o apagar el sistema. Para acceder a las opciones de energía del sistema, inicie sesión en la consola web como usuario privilegiado. Haga clic en el botón Información general de la barra de navegación para acceder a las opciones de energía del sistema.
En el menú de la parte superior derecha, seleccione la opción adecuada para reiniciar o apagar un sistema.
 
Figura 14.15: Opciones de alimentación del sistema
Controlar los servicios del sistema en ejecución
Puede iniciar, habilitar, deshabilitar y detener servicios con herramientas gráficas en la consola web. Para ello, haga clic en el botón Servicios de la barra de navegación para acceder a la página inicial de servicios de la consola web. La página Servicios muestra la pestaña de servicios del sistema de forma predeterminada. Puede cambiar a Objetivos o Sockets haciendo clic en la pestaña correspondiente. Utilice la barra de búsqueda o desplácese por la página para seleccionar el servicio que desea administrar.
En el ejemplo siguiente, seleccione la fila para abrir la página de administración de servicios.atd.service
 
Figura 14.16: Servicios: Vista inicial
Haga clic en los botones Detener, Reiniciar o No permitir la ejecución (máscara) según corresponda para administrar el servicio. En esta vista, el servicio ya se está ejecutando. Para ver información adicional sobre el servicio, haga clic en cualquiera de los vínculos resaltados o desplácese por los registros de servicio que se muestran debajo de la sección de administración de servicios.
 
Figura 14.17: Servicios: Detalles del servicio e interfaz de gestión
Configurar interfaces de red y el firewall
Para administrar las reglas de firewall y las interfaces de red, haga clic en el botón Redes de la barra de navegación. En el ejemplo siguiente se muestra cómo recopilar información sobre las interfaces de red y cómo administrarlas.
 
Figura 14.18: Redes: Vista inicial
Haga clic en el nombre de interfaz adecuado en la sección Interfaces para acceder a la página de administración. En este ejemplo, se selecciona la interfaz. La parte superior de la página de administración muestra la actividad del tráfico de red para el dispositivo seleccionado. Desplácese hacia abajo para ver los ajustes de configuración y las opciones de administración.eth0
 
Figura 14.19: Redes: Detalles de la interfaz
Para modificar o agregar opciones de configuración en una interfaz, haga clic en los enlaces resaltados para la configuración deseada. En este ejemplo, el vínculo IPv4 muestra una única dirección IP y máscara de red para la interfaz de red. Para agregar una dirección IP a la interfaz de red, haga clic en el enlace de edición.172.25.250.9/24eth0eth0
Haga clic en el símbolo + en el lado derecho de la selección de la lista Manual para agregar una dirección IP. Introduzca una dirección IP y una máscara de red en los campos correspondientes. Haga clic en Aplicar para activar la nueva configuración.
 
Figura 14.20: Agregar una dirección IP a una interfaz existente
La pantalla vuelve automáticamente a la página de administración de la interfaz, donde puede confirmar la nueva dirección IP.
 
Figura 14.21: Confirmar la nueva dirección IP
Administrar cuentas de usuario
Como usuario privilegiado, puede crear cuentas de usuario en la consola web. Haga clic en Cuentas en la barra de navegación para ver las cuentas existentes. Haga clic en Crear nueva cuenta para abrir la página de administración de cuentas.
 
Figura 14.22: Cuentas de usuario existentes
Escriba la información de la nueva cuenta y, a continuación, haga clic en Crear.
 
Figura 14.23: Crear una cuenta
La pantalla vuelve automáticamente a la página de administración de cuentas, donde puede confirmar la nueva cuenta de usuario.
 
Figura 14.24: Página de administración de cuentas
Referencias
cockpit(1), (8) y (5) páginas del manualcockpit-wscockpit.conf
Para obtener más información, consulte Administración de sistemas mediante la consola web de RHEL 9 en https://access.redhat.com/documentation/en-us/red_hat_enterprise_linux/9/html-single/managing_systems_using_the_rhel_9_web_console/index#getting-started-with-the-rhel-9-web-console_managing-systems-using-the-web-console
Ejercicio guiado: Análisis y administración de servidores remotos
Habilite y acceda a la consola web en un servidor para administrarla y diagnosticar y resolver problemas.
Resultados
●	Utilice la consola web para supervisar las funciones del sistema, inspeccionar los archivos de registro, crear cuentas de usuario y acceder al terminal.
Como usuario de la máquina, use el comando para preparar el sistema para este ejercicio.studentworkstationlab
Este comando prepara el entorno y garantiza que todos los recursos necesarios estén disponibles.
[student@workstation ~]$ lab start support-cockpit
Instrucciones
	Inicie sesión en la máquina como usuario.serverastudent
[student@workstation ~]$ ssh student@servera
1.	[student@servera ~]$
2.	La consola web ya está instalada en el sistema, pero no está activa. Habilite e inicie el servicio.cockpit
	Habilite el servicio de consola web.
[student@servera ~]$ sudo systemctl enable --now cockpit.socket
	[sudo] password for student: student
	Created symlink /etc/systemd/system/sockets.target.wants/cockpit.socket -> /usr/lib/systemd/system/cockpit.socket.
3.	En la máquina, abra el navegador web Firefox e inicie sesión en la interfaz de la consola web en . Inicie sesión como usuario.workstationservera.lab.example.comstudent
	Abra el navegador y navegue hasta https://servera.lab.example.com:9090.
	Acepte el certificado autofirmado agregándolo como una excepción.
	Inicie sesión como usuario, con la contraseña.studentstudent
Ahora ha iniciado sesión en la consola web como un usuario normal, con privilegios mínimos.
4.	Verifique su autorización actual dentro de la interfaz de la consola web.
	Haga clic en el botón Terminal en la barra de navegación izquierda para acceder al terminal.
Se abre una sesión de terminal donde el usuario ya ha iniciado sesión. Verifique que la ejecución del comando funcione en el terminal integrado.student
[student@servera ~]$ id
	uid=1000(student) gid=1000(student) groups=1000(student),10(wheel) context=unconfined_u:unconfined_r:unconfined_t:s0-s0:c0.c1023
	Haga clic en el botón Cuentas en la barra de navegación izquierda para administrar usuarios.
El botón Crear nueva cuenta no aparece porque ha iniciado sesión con acceso limitado.
	Haga clic en el enlace Usuario estudiante.
En la página de detalles de la cuenta del usuario, solo puede establecer una nueva contraseña o agregar una clave pública SSH autorizada.student
5.	Escalar privilegios en la consola web.
	Haga clic en el botón Acceso limitado para cambiar al acceso administrativo. Utilícela como contraseña de usuario y haga clic en el botón Autenticar. La consola web reemplaza el botón Acceso limitado por el botón Acceso administrativo.studentstudent
6.	Para investigar las estadísticas del sistema, haga clic en Información general en la barra de navegación izquierda y en el botón Ver métricas e historial en la sección Uso.
Esta página muestra varias estadísticas del sistema operativo, como la carga actual, el uso del disco, la E/S del disco y el tráfico de red.
7.	Para inspeccionar los registros del sistema, haga clic en el botón Registros en la barra de navegación izquierda.
Esta página muestra los registros del sistema. Utilice los botones de la esquina superior izquierda para modificar la forma en que la consola web muestra las entradas de registro en función de la fecha y la prioridad de los registros.systemd
	Haga clic en la lista Prioridad y elija Depurar y superior.
	Según el día actual del mes, haga clic en cualquier entrada de registro de la lista. Se abre una página de detalles de entrada de registro con información adicional sobre el evento, como el nombre de host, el contexto de SELinux o el número PID del proceso al que corresponde la entrada.
8.	Agregue una segunda dirección IP a un dispositivo de interfaz de red existente.
	Haga clic en el botón Redes en la barra de navegación izquierda.
Esta página muestra detalles de la configuración de red actual para , así como estadísticas de red en tiempo real, configuración de firewall y entradas de registro sobre redes.servera
	Desplácese hacia abajo hasta la sección Interfaces y haga clic en la fila de la interfaz de red.eth0
Una página de detalles muestra estadísticas de red en tiempo real, así como la configuración actual de esa interfaz de red.
	Haga clic en el enlace de edición en la sección IPv4.
Se abre una ventana de configuración de IPv4, donde puede cambiar la configuración de la interfaz de red.
	En la ventana de configuración de IPv4, haga clic en el botón + junto a la lista Manual.
	En el cuadro de texto Dirección, escriba como la segunda dirección IP.172.25.250.99
	En el cuadro de texto Longitud del prefijo o Máscara de red, escriba como valor de máscara de red.24
	Haga clic en Guardar para aplicar una nueva configuración de red.
La nueva configuración se aplica inmediatamente en la consola web. La nueva dirección IP es visible en la línea IPv4.
9.	Cree una cuenta de usuario.
	Haga clic en el botón Cuentas en la barra de navegación izquierda. La consola web ahora muestra el botón Crear nueva cuenta, ya que tiene derechos administrativos.
	Haga clic en el botón Crear nueva cuenta.
	En la ventana Crear nueva cuenta, agregue los siguientes detalles:
	
	
Campo	Valor
Nombre completo	manager1
Nombre de usuario	manager1
Contraseña	redh@t!23
Confirmar	redh@t!23
	
Haga clic en Crear.
10.	Acceda a una sesión de terminal dentro de la consola web para agregar el usuario al grupo.manager1wheel
	Haga clic en el botón Terminal en la barra de navegación izquierda.
	Utilice el comando para ver la pertenencia al grupo del usuario.id manager1manager1
[student@servera ~]$ id manager1
	uid=1002(manager1) gid=1002(manager1) groups=1002(manager1)
	Utilice el comando para agregar el usuario al grupo.sudo usermod -aG wheel manager1manager1wheel
[student@servera ~]$ sudo usermod -aG wheel manager1
	[sudo] password for student: student
	Vuelva a utilizar el comando para comprobar que el usuario es miembro del grupo.id manager1manager1wheel
[student@servera ~]$ id manager1
	uid=1002(manager1) gid=1002(manager1) groups=1002(manager1),10(wheel)
11.	Habilite e inicie el servicio de contabilidad de procesos del kernel ().psacct
	Haga clic en el botón Servicios en la barra de navegación izquierda.
	Busque el servicio. Haga clic en el enlace del servicio. Una página de detalles muestra el estado del servicio como deshabilitado.psacct
	Haga clic en el botón Iniciar y habilitar junto al nombre del servicio.
	El servicio ahora está habilitado e iniciado.
12.	Cierre la sesión de la interfaz de la consola web.
	Regrese al sistema como usuario.workstationstudent
[student@servera ~]$ exit
13.	[student@workstation ~]$
Terminar
En la máquina, cambie al directorio principal del usuario y utilice el comando para completar este ejercicio. Este paso es importante para garantizar que los recursos de ejercicios anteriores no afecten los próximos ejercicios.workstationstudentlab
[student@workstation ~]$ lab finish support-cockpit
	
Crear un informe de diagnóstico
Objetivos
●	Describa y utilice los recursos clave del Portal del cliente de Red Hat para encontrar información en la documentación de Red Hat y en la base de conocimientos.
Recursos en el Portal del cliente de Red Hat
El Portal del cliente de Red Hat en https://access.redhat.com brinda a los clientes acceso a documentación, descargas, herramientas y experiencia técnica. La base de conocimientos permite a los clientes buscar soluciones, preguntas frecuentes y artículos. La siguiente lista muestra algunas funciones del Portal del cliente de Red Hat:
●	Acceda a la documentación oficial del producto, las soluciones y las preguntas frecuentes.
●	Envíe y administre casos de soporte.
●	Administrar suscripciones y derechos de software.
●	Obtenga descargas, actualizaciones y evaluaciones de software.
●	Acceda a un catálogo de avisos de seguridad para los productos de Red Hat.
●	Acceda a un motor de búsqueda integrado para los recursos de Red Hat.
●	Acceda a documentos técnicos, hojas informativas y presentaciones multimedia.
●	Participar en discusiones comunitarias.
Partes del sitio son de acceso público, mientras que otras áreas requieren una suscripción activa. Visite https://access.redhat.com/help/ para obtener ayuda para acceder al Portal del cliente de Red Hat.
Recorrido por el portal del cliente de Red Hat
Acceda al Portal del cliente de Red Hat visitando https://access.redhat.com/. En esta sección se presenta el recorrido por el Portal del cliente de Red Hat en https://access.redhat.com/start.
Con el recorrido, puede descubrir las funciones del portal y maximizar los beneficios de su suscripción a Red Hat. Después de iniciar sesión en Red Hat Customer Portal, haga clic en el botón Recorrer el portal de clientes.
Aparece la ventana BIENVENIDO AL PORTAL DEL CLIENTE DE RED HAT. Haga clic en el botón Vamos para iniciar el recorrido.
La barra de navegación superior
Los primeros menús del recorrido, en la barra de navegación superior, son Suscripciones, Descargas, Contenedores y Casos de soporte.
El menú Suscripciones abre una nueva página para administrar los sistemas, las suscripciones y los derechos registrados. Esta página enumera la información de erratas aplicable. Puede crear claves de activación para registrar sistemas y garantizar que las autorizaciones sean correctas. El administrador de la organización de su cuenta puede restringir su acceso a esta página.
El menú Descargas abre una nueva página para acceder a las descargas de sus productos y solicitar una evaluación de los productos sin derechos.
El menú Casos de soporte abre una nueva página para crear, rastrear y administrar sus casos de soporte a través del sistema de administración de casos, si su organización lo autoriza.
Con el menú del Menú de Usuario, administre su cuenta, cualquier cuenta de la que sea Administrador de la Organización, su perfil y las opciones de notificación por correo electrónico.
El icono del globo terráqueo abre el menú Idioma para especificar sus preferencias de idioma para el Portal del cliente de Red Hat.
Navegue por los menús del Portal del cliente de Red Hat
Debajo de la barra de navegación superior de la página principal hay menús para navegar a las principales categorías de recursos en el sitio.
 
Figura 14.25: Menús del Portal del Cliente de Red Hat
El menú Productos y servicios brinda acceso a los Centros de productos, para evaluaciones específicas del producto, guías de introducción y otra información de soporte técnico del producto. También puede acceder a la documentación de los productos de Red Hat, a una base de conocimientos de artículos de soporte y a las políticas de soporte, y puede ponerse en contacto con el soporte de Red Hat. Puede acceder a los servicios que ofrece Red Hat, como consultoría, gestión técnica de cuentas y formación y certificaciones.
El menú Herramientas proporciona herramientas para ayudarlo a tener éxito con los productos de Red Hat. Las herramientas ayudan a solucionar un problema del producto y proporcionan paquetes e información sobre erratas. La sección Customer Portal Labs tiene una colección de aplicaciones y herramientas basadas en web para ayudarle a mejorar el rendimiento, diagnosticar problemas, identificar problemas de seguridad y optimizar sus configuraciones. La sección Red Hat Insights ayuda a analizar plataformas y aplicaciones para predecir el riesgo, tomar medidas recomendadas y realizar un seguimiento de los costos para administrar entornos de nube híbrida. Insights alerta a los administradores antes de una interrupción o sobre un evento de seguridad o un gasto excesivo.
El menú Seguridad proporciona acceso al Centro de seguridad de productos de Red Hat para obtener actualizaciones de seguridad y evita que los entornos se expongan a vulnerabilidades de seguridad. Esta sección proporciona información sobre problemas de seguridad de alto perfil, con acceso a los avisos de seguridad, el Red Hat Vulnerabilidades y exposiciones comunes (CVE) base de datos, los laboratorios de seguridad, el blog de seguridad de Red Hat, la medición de seguridad, las clasificaciones de gravedad, las políticas de backport y la firma de productos Guardia de privacidad de GNU (GPG) Llaves.
El menú Comunidad da acceso a la sección de discusiones y grupos privados. Esta sección es un lugar donde los expertos, clientes y socios de Red Hat se comunican y colaboran. Esta sección contiene foros de discusión, blogs e información sobre los próximos eventos.Customer Portal Community
Nota
Red Hat recomienda ver el recorrido completo en Introducción a Red Hat, incluidas las secciones del menú Cómo personalizar la experiencia de su portal del cliente, el menú Explore los beneficios de su suscripción a Red Hat y el menú Cómo interactuar con el soporte de Red Hat. Se requiere una suscripción activa para acceder a estos recursos de suscripción.
Póngase en contacto con el servicio de atención al cliente de Red Hat
El Portal del cliente de Red Hat proporciona acceso a soporte técnico para clientes con una suscripción activa. Puede ponerse en contacto con el soporte abriendo un caso de soporte o una sesión de chat, o por teléfono. Para obtener información detallada, visite la dirección https://access.redhat.com/support/policy/support_process.
Preparar un caso de soporte
Antes de ponerse en contacto con el soporte de Red Hat, es importante recopilar información relevante para el informe.
Define el problema. Indique el problema y sus síntomas específicamente. Proporcione pasos detallados para reproducir el problema.
Reúna información de antecedentes. ¿Qué producto y versión se ven afectados? Esté preparado para proporcionar información de diagnóstico relevante. Esta información puede incluir la salida del comando. Para problemas de kernel, la información puede consistir en el volcado de memoria del sistema o una foto digital del seguimiento inverso del kernel que se muestra en el monitor de un sistema bloqueado.sos reportkdump
Determine el nivel de gravedad. Red Hat utiliza cuatro niveles de gravedad para clasificar los problemas. Urgente y Alto Los informes de problemas de gravedad deben ir seguidos de una llamada telefónica al centro de soporte local correspondiente (consulte https://access.redhat.com/support/contact/technicalSupport).
Severidad	Descripción
Urgente (gravedad 1)	Un problema que afecta gravemente al uso del software en un entorno de producción. Esta gravedad incluye la pérdida de datos de producción o el mal funcionamiento de los sistemas de producción. La situación detiene sus operaciones comerciales y no existe una solución de procedimiento.
Alto (Gravedad 2)	Un problema en el que el software funciona pero su uso en un entorno de producción se reduce drásticamente. La situación está causando un alto impacto en sus operaciones comerciales y no existe una solución de procedimiento.
Medio (Gravedad 3)	Un problema que implica una pérdida parcial y no crítica del uso del software en un entorno de producción o desarrollo. El problema implica un impacto medio a bajo en su negocio para entornos de producción. El negocio continúa funcionando mediante el uso de una solución de procedimiento. En el caso de los entornos de desarrollo, la situación está causando problemas con la migración del proyecto a producción.
Bajo (gravedad 4)	Una pregunta de uso general, informe de un error de documentación o recomendación para una futura mejora o modificación del producto. El problema implica un impacto bajo o nulo en su negocio o en el rendimiento o funcionamiento de su sistema. El problema implica un impacto medio a bajo en su negocio para entornos de desarrollo, pero su negocio continúa funcionando mediante una solución alternativa de procedimiento.
La utilidad de informe sos
El informe es generalmente el punto de partida para que el soporte técnico de Red Hat investigue el problema informado. Esta utilidad proporciona una forma estandarizada de recopilar la información de diagnóstico que el soporte técnico de Red Hat necesita para investigar los problemas notificados. El comando recopila información de depuración diversa de uno o más sistemas y proporciona una opción para eliminar datos confidenciales. Este informe se adjunta al caso de soporte de Red Hat. El comando se ejecuta y recopila informes individuales de un conjunto especificado de nodos. El comando ofusca información potencialmente confidencial, como nombres de usuario, nombres de host, direcciones IP o MAC u otros datos especificados por el usuario.sossos reportsos collectsossos clean
La siguiente lista contiene información que se puede recopilar en un informe:
●	La versión del kernel en ejecución
●	Módulos del kernel cargados
●	Archivos de configuración del sistema y del servicio
●	Salida del comando de diagnóstico
●	Una lista de paquetes instalados
Puede generar un informe de diagnóstico para enviarlo al soporte técnico de Red Hat mediante la consola web o la línea de comandos.
Generar un informe sos con la consola web
Siga estos pasos para generar un informe de diagnóstico desde la consola web:
1.	Para generar un informe desde la consola web, debe iniciar sesión como usuario privilegiado.sos
2.	Haga clic en Informes de diagnóstico y, a continuación, haga clic en Ejecutar informe y proporcione una etiqueta para el informe en el campo.Report label
3.	Haga clic en Ejecutar informe de nuevo para empezar a generar el informe. El informe de diagnóstico tarda unos minutos en crearse.
4.	Haga clic en Descargar para descargar el informe de diagnóstico.
Generar un informe sos desde la línea de comandos
Red Hat Enterprise Linux instala la utilidad de informe con el paquete:sossos
[root@host ~]# dnf install sos
...output omitted...
Complete!
La generación del informe requiere privilegios de root. Ejecute el comando para generar el informe.sossos report
[root@host ~]# sos report
...output omitted...
Press ENTER to continue, or CTRL-C to quit.

Optionally, please enter the case id that you are generating this report for []:
...output omitted...
Your sosreport has been generated and saved in:
  /var/tmp/sosreport-host-2022-03-29-wixbhpz.tar.xz
..output omitted...
Please send this file to your support representative.
Cuando proporciona cualquier ID de caso de soporte en el comando anterior, el informe se adjunta directamente al caso de soporte creado anteriormente. También puede utilizar la opción de comando para enviar el informe al soporte técnico.sos report--upload
Compruebe que el comando creó el archivo de almacenamiento en la ubicación anterior.sos report
[root@host ~]# ls -l /var/tmp/
total 9388
-rw-------. 1 root root 9605952 Mar 29 02:09 sosreport-host-2022-03-29-wixbhpz.tar.xz
-rw-r--r--. 1 root root      65 Mar 29 02:09 sosreport-host-2022-03-29-wixbhpz.tar.xz.sha256
...output omitted...
El comando ofusca la información personal del informe.sos clean
[root@host ~]# sos clean /var/tmp/sosreport-host-2022-03-29-wixbhpz.tar.xz
...output omitted...
Press ENTER to continue, or CTRL-C to quit.
...output omitted...
The obfuscated archive is available at
  /var/tmp/sosreport-host0-2022-03-29-wixbhpz-obfuscated.tar.xz
...output omitted...
Please send the obfuscated archive to your support representative and keep the mapping file private
Envíe un informe de SOS al soporte técnico de Red Hat
Seleccione uno de estos métodos para enviar un informe al soporte técnico de Red Hat.sos
●	Envíe un informe mediante la opción de comando.sossos report--upload
●	Envíe un informe al Portal del cliente de Red Hat adjuntándolo con el caso de soporte.sos
Únase al Red Hat Developer Program
El Red Hat Developer Program en https://developers.redhat.com proporciona derechos de suscripción al software de Red Hat con fines de desarrollo, documentación y libros premium de expertos en microservicios, computación sin servidor, Kubernetes y Linux. También hay disponibles enlaces de blog a información sobre próximos eventos y capacitación y otros recursos útiles.
Para obtener más información, visite https://developers.redhat.com/.
Referencias
sosreport(1) página de manual
Ponerse en contacto con el soporte técnico de Red Hat
Ayuda - Portal del cliente de Red Hat
Para obtener más información, consulte Generación de un informe SOS para soporte técnico en https://access.redhat.com/documentation/en-us/red_hat_enterprise_linux/9/html-single/getting_the_most_from_your_support_experience/generating-an-sos-report-for-technical-support_getting-the-most-from-your-support-experience
Ejercicio guiado: Crear un informe de diagnóstico
Genere un informe de diagnóstico que pueda enviar al Portal del cliente de Red Hat como parte de un caso de soporte, mediante la consola web.
Resultados
●	Genere un informe de diagnóstico que pueda enviar como parte de un caso de soporte al Portal del cliente de Red Hat.
Como usuario de la máquina, use el comando para preparar el sistema para este ejercicio.studentworkstationlab
Este comando prepara el entorno y garantiza que todos los recursos necesarios estén disponibles.
[student@workstation ~]$ lab start support-portal
Instrucciones
Inicie sesión en la máquina como usuario.serverastudent
[student@workstation ~]$ ssh student@servera
Warning: Permanently added 'servera' (ED25519) to the list of known hosts.
Activate the web console with: systemctl enable --now cockpit.socket
...output omitted...
1.	[student@servera ~]$
Inicie el servicio.cockpit
[student@servera ~]$ systemctl start cockpit.socket
==== AUTHENTICATING FOR org.freedesktop.systemd1.manage-units ====
Authentication is required to start 'cockpit.socket'.
Authenticating as: Student User (student)
Password: student
2.	==== AUTHENTICATION COMPLETE ====
Verifique el estado del servicio.cockpit
[student@servera ~]$ systemctl status cockpit.socket
● cockpit.socket - Cockpit Web Service Socket
     Loaded: loaded (/usr/lib/systemd/system/cockpit.socket; disabled; vendor preset: disabled)
     Active: active (listening) since Mon 2022-03-28 01:41:13 EDT; 1min 27s ago
      Until: Mon 2022-03-28 01:41:13 EDT; 1min 27s ago
   Triggers: ● cockpit.service
       Docs: man:cockpit-ws(8)
     Listen: [::]:9090 (Stream)
...output omitted...
Mar 28 01:41:13 servera.lab.example.com systemd[1]: Starting Cockpit Web Service Socket...
3.	Mar 28 01:41:13 servera.lab.example.com systemd[1]: Listening on Cockpit Web Service Socket.
Regrese a la máquina como usuario.workstationstudent
[student@servera ~]$ exit
logout
Connection to servera closed.
4.	[student@workstation ~]$
5.	En la máquina, abra el navegador web Firefox e inicie sesión en la interfaz de la consola web que se está ejecutando en la dirección. Inicie sesión como usuario con la contraseña.workstationservera.lab.example.comstudentstudent
	Abra el navegador web Firefox y vaya a la dirección.https://servera.lab.example.com:9090
	Cuando se le solicite, acepte el certificado autofirmado agregándolo como una excepción.
	Inicie sesión como usuario con la contraseña.studentstudent
	Haga clic en el botón Acceso limitado para cambiar al acceso administrativo. Úsela como contraseña del usuario y haga clic en el botón Autenticar. La consola web reemplaza el botón Acceso limitado por el botón Acceso administrativo.studentstudent
	Haga clic en el menú Informes de diagnóstico en la barra de navegación izquierda. Haga clic en el botón Ejecutar informe.
	Ingrese en el campo.studentReport label
	Haga clic en Ejecutar informe. El informe tarda unos minutos en construirse.
6.	Cuando el informe esté listo, descargue el archivo.
	Haga clic en el botón Descargar. Se descarga el informe de diagnóstico.
	Cierre la sesión de la consola web y cierre el navegador web Firefox.
Terminar
En la máquina, cambie al directorio principal del usuario y utilice el comando para completar este ejercicio. Este paso es importante para garantizar que los recursos de ejercicios anteriores no afecten los próximos ejercicios.workstationstudentlab
[student@workstation ~]$ lab finish support-portal
Detecte y resuelva problemas con Red Hat Insights
Objetivos
●	Utilice Red Hat Insights para analizar los servidores en busca de problemas, corregirlos o resolverlos, y confirmar que la solución funcionó.
Introducción a Red Hat Insights
Red Hat Insights es una herramienta de análisis predictivo que le ayuda a identificar y corregir las amenazas a la seguridad, el rendimiento, la disponibilidad y la estabilidad de los sistemas de su infraestructura que ejecutan productos Red Hat. Red Hat ofrece Red Hat Insights como un producto de software como servicio (SaaS), para que pueda implementarlo y escalarlo sin requisitos de infraestructura adicionales. Además, puede aprovechar las últimas recomendaciones y actualizaciones de Red Hat que se aplican a sus sistemas implementados.
Red Hat actualiza regularmente la base de conocimientos, en función de los riesgos comunes de soporte, las vulnerabilidades de seguridad, las configuraciones incorrectas conocidas y otros problemas que Red Hat identifica. Red Hat valida y verifica las acciones para mitigar o remediar estos problemas. Con este soporte, puede identificar, priorizar y resolver problemas de manera proactiva antes de que se conviertan en un problema mayor.
Para cada problema detectado, Red Hat Insights proporciona estimaciones de riesgo y recomendaciones sobre cómo mitigar o remediar el problema. Estas recomendaciones pueden sugerir materiales como Ansible Playbooks o proporcionar instrucciones paso a paso para ayudarlo a resolver el problema.
Red Hat Insights adapta las recomendaciones a cada sistema que registra en el servicio. Para comenzar a usar Red Hat Insights, instale el agente en cada sistema cliente para recopilar metadatos sobre la configuración del tiempo de ejecución del sistema. Estos datos son un subconjunto de lo que puede proporcionar al soporte de Red Hat mediante el comando para resolver un ticket de soporte.sosreport
Puede limitar u ofuscar los datos que envían los sistemas cliente. Al limitar los datos, puede bloquear el funcionamiento de algunas reglas analíticas, dependiendo de lo que limite.
Después de registrar un servidor y completar la sincronización inicial de metadatos del sistema, debería poder ver su servidor y las recomendaciones para él en la consola de Insights en Red Hat Cloud Portal.
Red Hat Insights actualmente proporciona análisis predictivos y recomendaciones para estos productos de Red Hat:
●	Red Hat Enterprise Linux 6.4 y versiones posteriores
●	Virtualización de Red Hat
●	Red Hat Satellite 6 y versiones posteriores
●	Plataforma de contenedores Red Hat OpenShift
●	Red Hat OpenStack Platform 7 y versiones posteriores
●	Plataforma de automatización de Red Hat Ansible
Descripción de la arquitectura de Red Hat Insights
Cuando registra un sistema con Red Hat Insights, envía inmediatamente metadatos sobre su configuración actual a la plataforma Red Hat Insights. Después del registro, el sistema actualiza periódicamente los metadatos que proporciona a Red Hat Insights. El sistema envía los metadatos con cifrado TLS para protegerlos en tránsito.
La plataforma Red Hat Insights analiza los datos recibidos y muestra el resultado en el sitio.https://console.redhat.com/insights
 
Figura 14.26: Arquitectura de alto nivel de Insights
Registro de un sistema RHEL con Red Hat Insights
Utilice el comando para registrar su sistema en Red Hat y habilitar Red Hat Insights con un solo comando.rhc connect
[root@host ~]# rhc connect -a host_key -o 117018
Connecting host.lab.example.com to Red Hat.
This might take a few seconds.

● Connected to Red Hat Subscription Management
● Connected to Red Hat Insights
● Activated the Red Hat connector daemon

Manage your Red Hat connector systems: https://red.ht/connector
Instalar clientes de Red Hat Insights
Insights se incluye con Red Hat Enterprise Linux 9 como parte de la suscripción. Las versiones anteriores de los servidores Red Hat Enterprise Linux requerían la instalación del paquete en el sistema. El paquete reemplazó al paquete a partir de Red Hat Enterprise Linux 7.5.insights-clientinsights-clientredhat-access-insights
El cliente de Insights actualiza periódicamente los metadatos que se proporcionan a Insights.
Utilice el comando para registrar el sistema en el servicio Insights y cargar los metadatos iniciales del sistema.insights-client --register
[root@host ~]# insights-client --register
This host has already been registered.
Automatic scheduling for Insights has been enabled.
Starting to collect Insights data for host.lab.example.com
...output omitted...

Writing RHSM facts to /etc/rhsm/facts/insights-client.facts ...
Uploading Insights data.
Successfully uploaded report from host.lab.example.com to account 60766.
View the Red Hat Insights console at https://console.redhat.com/insights/
View details about this system on console.redhat.com:
https://console.redhat.com/insights/inventory/a47b1970-750b-4ff2-b79e-825efea65
Utilice el comando para actualizar los metadatos del cliente.insights-client
[root@host ~]# insights-client
Starting to collect Insights data for host.lab.example.com
...output omitted...
Writing RHSM facts to /etc/rhsm/facts/insights-client.facts ...
Uploading Insights data.
Successfully uploaded report from host.lab.example.com to account 60766.
View details about this system on console.redhat.com:
https://console.redhat.com/insights/inventory/a47b1970-750b-4ff2-b79e-825efea65e
En Red Hat Insights (), asegúrese de haber iniciado sesión y de que el sistema esté visible en la sección Inventario de la interfaz de usuario web.https://console.redhat.com/insights
 
Figura 14.27: Inventario de información en el Cloud Portal
Navegación de la consola de Red Hat Insights
Red Hat Insights proporciona una familia de servicios a los que puede acceder con un navegador web en el sitio web.https://console.redhat.com/insights
Detección de problemas de configuración con el servicio Advisor
El servicio Advisor informa de problemas de configuración que afectan a los sistemas. Puede acceder al servicio desde el menú Advisor → Recommendations.
 
Figura 14.28: Recomendaciones del Servicio de Asesores
Para cada problema, Red Hat Insights proporciona información para ayudarlo a comprender el problema, priorizar el trabajo para abordarlo, determinar qué mitigación o corrección está disponible y automatizar la resolución con un libro de jugadas de Ansible. Red Hat Insights también proporciona enlaces a artículos de la base de conocimientos en el Portal del cliente.
 
Figura 14.29: Detalles de un problema
El servicio Advisor evalúa en dos categorías el riesgo que presenta un problema para su sistema:
Riesgo total
Indica el impacto del problema en el sistema.
Riesgo de cambio
Indica el impacto de la acción de corrección en el sistema. Por ejemplo, es posible que deba reiniciar el sistema.
Evaluar la seguridad con el servicio de vulnerabilidades
El servicio de vulnerabilidades informa de vulnerabilidades y exposiciones comunes (CVE) que afectan a los sistemas. Acceda al servicio desde el menú Vulnerabilidad → CVE.
 
Figura 14.30: Informe del servicio de vulnerabilidades
Para cada CVE, Insights proporciona información adicional y enumera los sistemas expuestos. Puede hacer clic en el botón Corregir para crear un cuaderno de estrategias de Ansible para la corrección.
 
Figura 14.31: Detalles de un CVE
Analizar el cumplimiento mediante el servicio de cumplimiento
El servicio de cumplimiento analiza los sistemas e informa de su nivel de cumplimiento a una directiva de OpenSCAP. El proyecto OpenSCAP implementa herramientas para verificar el cumplimiento de un sistema con un conjunto de reglas. Red Hat Insights proporciona las reglas para evaluar sus sistemas con respecto a diferentes políticas, como el Estándar de seguridad de datos de la industria de tarjetas de pago (PCI DSS).
Actualización de paquetes con el servicio de parches
El servicio Patch enumera los avisos de productos de Red Hat que se aplican a sus sistemas. También puede generar un libro de jugadas de Ansible, que puede ejecutar para actualizar los paquetes RPM relevantes para los avisos aplicables. Para acceder a la lista de avisos de un sistema específico, utilice el menú Patch → Systems. Haga clic en el botón Aplicar todos los avisos aplicables para generar el libro de jugadas de Ansible para un sistema.
 
Figura 14.32: Parchear un sistema
Comparación de sistemas con el servicio de deriva
Con el servicio Drift, puede comparar sistemas u obtener un historial del sistema. Puede utilizar este servicio para solucionar problemas, comparando un sistema con un sistema similar o con un estado anterior del sistema. Puede acceder al servicio desde el menú Comparación de → derivas.
La siguiente figura muestra que puede utilizar Red Hat Insights para comparar el mismo sistema en dos momentos diferentes:
 
Figura 14.33: Comparación del historial del sistema
Desencadenar alertas con el servicio de directivas
Mediante el servicio Directivas, puede crear reglas para supervisar los sistemas y enviar alertas cuando un sistema no cumpla con las reglas. Red Hat Insights evalúa las reglas cada vez que un sistema sincroniza sus metadatos. Puede acceder al servicio Políticas desde el menú Políticas.
 
Figura 14.34: Detalles de una regla personalizada
Supervisión de inventario, cuadernos de estrategias de corrección y suscripciones
La página Inventario proporciona una lista de los sistemas que registró en Red Hat Insights. La columna Última vista muestra la hora de la actualización de metadatos más reciente para cada sistema. Al hacer clic en el nombre de un sistema, puede revisar sus detalles y acceder directamente a los servicios Advisor, Vulnerability, Compliance y Patch para ese sistema.
La página Correcciones enumera todos los cuadernos de estrategias de Ansible que creó para la corrección. Puede descargar los libros de jugadas desde esa página.
Al utilizar la página Suscripción, puede supervisar el uso de su suscripción a Red Hat.
Referencias
insights-client(8) y (5) páginas de manualinsights-client.conf
Para obtener más información sobre Red Hat Insights, consulte la Documentación del producto para Red Hat Insights en https://access.redhat.com/documentation/en-us/red_hat_insights
Para obtener más información sobre cómo excluir los datos que recopila Insights, consulte la Ofuscación de datos de clientes de Red Hat Insights y Redacción de datos de clientes de Red Hat Insights capítulos en el Guía de configuración del cliente para Red Hat Insights en https://access.redhat.com/documentation/en-us/red_hat_insights/2021/html-single/client_configuration_guide_for_red_hat_insights/assembly-main-client-cg
La información sobre los datos que recopila Red Hat Insights está disponible en Información del sistema recopilada por Red Hat Insights
Resumen
●	La consola web es una interfaz de administración basada en web para su servidor y se basa en el servicio de código abierto.cockpit
●	La consola web proporciona gráficos del rendimiento del sistema, herramientas gráficas para administrar la configuración del sistema e inspeccionar registros, e interfaces de terminal interactivas.
●	El Portal del cliente de Red Hat proporciona acceso a documentación, descargas, herramientas de optimización, gestión de casos de soporte y gestión de suscripciones y derechos para sus productos Red Hat.
●	La herramienta de línea de comandos consulta Knowledgebase y trabaja con casos de soporte.redhat-support-tool
●	Red Hat Insights es una herramienta de análisis predictivo basada en SaaS que le ayuda a identificar y corregir las amenazas a la seguridad, el rendimiento, la disponibilidad y la estabilidad de sus sistemas.
Capítulo 15. Revisión exhaustiva
Revisión exhaustiva
Laboratorio: Administrar archivos desde la línea de comandos
Laboratorio: Administrar usuarios y grupos, permisos y procesos
Laboratorio: Configurar y administrar un servidor
Laboratorio: Administración de redes
Laboratorio: Montaje de sistemas de archivos y búsqueda de archivos
Abstracto
Gol	Revisar las tareas de Red Hat System Administration I.
Secciones	●	
Revisión exhaustiva
Laboratorio	●	
Administrar archivos desde la línea de comandos
●	Administrar usuarios y grupos, permisos y procesos
●	Configurar y administrar un servidor
●	Administrar redes
●	Montar sistemas de archivos y buscar archivos
Revisión exhaustiva
Objetivos
Después de completar esta sección, debería haber revisado y actualizado los conocimientos y habilidades que aprendió en Administración del sistema Red Hat I.
Revisar Administración del sistema Red Hat I
Antes de comenzar la revisión exhaustiva de este curso, debe sentirse cómodo con los temas tratados en cada capítulo. No dude en pedirle al instructor orientación o aclaración adicional sobre estos temas.
Capítulo 1, Introducción a Red Hat Enterprise Linux
Defina el código abierto, Linux, las distribuciones de Linux y Red Hat Enterprise Linux.
●	Explicar el propósito del código abierto, Linux, las distribuciones de Linux y Red Hat Enterprise Linux.
Capítulo 2, Acceder a la línea de comandos
Inicie sesión en un sistema Linux y ejecute comandos simples desde el shell.
●	Inicie sesión en un sistema Linux y ejecute comandos simples desde el shell.
●	Inicie sesión en el sistema Linux con el entorno de escritorio GNOME para ejecutar comandos desde un indicador de shell en un programa de terminal.
●	Ahorre tiempo al ejecutar comandos desde un símbolo del sistema de shell con atajos de Bash.
Capítulo 3, Administrar archivos desde la línea de comandos
Copie, mueva, cree, elimine y organice archivos desde el shell de Bash.
●	Describir cómo Linux organiza los archivos y los propósitos de varios directorios en la jerarquía del sistema de archivos.
●	Especifique la ubicación absoluta y la ubicación relativa de los archivos en el directorio de trabajo actual, determine y cambie el directorio de trabajo y enumere el contenido de los directorios.
●	Crea, copia, mueve y elimina archivos y directorios.
●	Cree varias referencias de nombre de archivo al mismo archivo con vínculos duros y vínculos simbólicos (o "suaves").
●	Ejecute de manera eficiente comandos que afectan a muchos archivos mediante el uso de características de coincidencia de patrones del shell de Bash.
Capítulo 4, Obtenga ayuda en Red Hat Enterprise Linux
Resolver problemas mediante sistemas de ayuda locales.
●	Encuentre información en las páginas del manual del sistema Linux local.
Capítulo 5, Crear, ver y editar archivos de texto
Cree, vea y edite archivos de texto desde la salida del comando o en un editor de texto.
●	Guarde la salida o los errores en un archivo con la redirección de shell y procese la salida del comando a través de varios programas de línea de comandos con tuberías.
●	Cree y edite archivos de texto desde la línea de comandos con el editor.vim
●	Establezca variables de shell para ejecutar comandos y edite scripts de inicio de Bash para establecer variables de shell y entorno para modificar el comportamiento del shell y los programas que se ejecutan desde el shell.
Capítulo 6, Administrar usuarios y grupos locales
Cree, administre y elimine usuarios y grupos locales, y administre políticas de contraseñas locales.
●	Describir el propósito de los usuarios y grupos en un sistema Linux.
●	Cambie a la cuenta de superusuario para administrar un sistema Linux y otorgue a otros usuarios acceso de superusuario a través del comando.sudo
●	Crear, administrar y eliminar cuentas de usuario locales.
●	Crear, modificar y eliminar cuentas de grupo local.
●	Establezca una política de administración de contraseñas para los usuarios y bloquee y desbloquee manualmente las cuentas de usuario.
Capítulo 7, Controlar el acceso a los archivos
Establezca permisos del sistema de archivos de Linux en archivos e interprete los efectos de seguridad de diferentes configuraciones de permisos.
●	Enumere los permisos del sistema de archivos en archivos y directorios, e interprete los efectos de esos permisos en el acceso de usuarios y grupos.
●	Cambie los permisos y la propiedad de los archivos con herramientas de línea de comandos.
●	Controle los permisos predeterminados de los archivos creados por el usuario, explique los efectos de los permisos especiales y use permisos especiales y predeterminados para establecer el propietario del grupo de los archivos que se crean en un directorio.
Capítulo 8, Supervise y administre procesos de Linux
Evalúe y controle los procesos que se ejecutan en un sistema Red Hat Enterprise Linux.
●	Determine el estado, el uso de recursos y la propiedad de los programas en ejecución en un sistema, para controlarlos.
●	Utilice el control de trabajos de Bash para administrar varios procesos que se iniciaron desde la misma sesión de terminal.
●	Utilice comandos para eliminar y comunicarse con procesos, definir las características de un proceso de demonio y detener sesiones y procesos de usuario.
●	Defina el promedio de carga y determine los procesos del servidor que consumen muchos recursos.
Capítulo 9, Servicios de control y demonios
Controle y supervise los servicios de red y los demonios del sistema con el servicio.systemd
●	Enumere los demonios del sistema y los servicios de red que iniciaron las unidades de servicio y socket.systemd
●	Controle los demonios del sistema y los servicios de red con el comando.systemctl
Capítulo 10, Configurar y proteger SSH
Configure el servicio de línea de comandos seguro en sistemas remotos con OpenSSH.
●	Inicie sesión en un sistema remoto y ejecute comandos con .ssh
●	Configure una cuenta de usuario para usar la autenticación basada en claves para iniciar sesión en sistemas remotos de forma segura sin contraseña.
●	Deshabilite los inicios de sesión directos como y la autenticación basada en contraseña para el servicio OpenSSH.root
Capítulo 11, Administrar redes
Configure las interfaces y los ajustes de red en los servidores de Red Hat Enterprise Linux.
●	Describir los conceptos fundamentales de direccionamiento y enrutamiento de red para un servidor.
●	Pruebe e inspeccione la configuración de red actual con utilidades de línea de comandos.
●	Administre la configuración de red y los dispositivos con el comando.nmcli
●	Modifique la configuración de red editando los archivos de configuración.
●	Configure el nombre de host estático de un servidor y su resolución de nombres y pruebe los resultados.
Capítulo 12, Instalación y actualización de paquetes de software
Descargue, instale, actualice y administre paquetes de software desde repositorios de paquetes de Red Hat y DNF.
●	Registre un sistema utilizando su cuenta de Red Hat y asígnele derechos para actualizaciones de software y servicios de soporte proporcionados por Red Hat.
●	Explique cómo se proporciona el software como paquetes RPM e investigue los paquetes de sistema instalados DNF y RPM.
●	Busque, instale y actualice paquetes de software con el comando.dnf
●	Habilite y deshabilite el uso del servidor de repositorios DNF de Red Hat o de terceros.
Capítulo 13, Acceda a los sistemas de archivos de Linux
Acceda, inspeccione y utilice los sistemas de archivos existentes en el almacenamiento conectado a un servidor Linux.
●	Identifique un directorio en la jerarquía del sistema de archivos y el dispositivo donde está almacenado.
●	Acceda al contenido de los sistemas de archivos agregando y eliminando sistemas de archivos en la jerarquía del sistema de archivos.
●	Busque archivos en sistemas de archivos montados con los comandos and.findlocate
Capítulo 14, Analice servidores y obtenga soporte
Investigue y resuelva problemas en la interfaz de administración basada en web, obteniendo soporte de Red Hat para ayudar a resolver problemas.
●	Active la interfaz de administración de la consola web para administrar y monitorear de forma remota el rendimiento de un servidor Red Hat Enterprise Linux.
●	Describa y utilice los recursos clave del Portal del cliente de Red Hat para encontrar información en la documentación de Red Hat y en la base de conocimientos.
●	Utilice Red Hat Insights para analizar los servidores en busca de problemas, corregirlos o resolverlos, y confirmar que la solución funcionó.
Laboratorio: Administrar archivos desde la línea de comandos
Nota
Si planea realizar el examen RHCSA, utilice el siguiente enfoque para maximizar el beneficio de esta revisión integral: intente cada laboratorio sin ver los botones de solución ni consultar el contenido del curso. Usa los guiones de calificación para medir tu progreso a medida que completas cada laboratorio.
Administrar archivos, redirigir un conjunto específico de líneas de un archivo de texto a otro archivo y editar los archivos de texto.
Resultados
●	Administre archivos desde la línea de comandos.
●	Muestra un número específico de líneas de archivos de texto y redirige la salida a otro archivo.
●	Editar archivos de texto.
Si no reiniciaste tus máquinas al final del último capítulo, guarda cualquier trabajo que quieras conservar de ejercicios anteriores en esas máquinas y reinícialas ahora.workstationserver
Como usuario de la máquina, use el comando para preparar el sistema para este ejercicio.studentworkstationlab
Este comando prepara el entorno y garantiza que todos los recursos necesarios estén disponibles.
[student@workstation ~]$ lab start rhcsa-rh124-review1
Características técnicas
●	Inicie sesión como usuario.serverbstudent
●	Cree el directorio./home/student/grading
●	Cree tres archivos vacíos llamados , y , en el directorio.grade1grade2grade3/home/student/grading
●	Capture las primeras cinco líneas del archivo en el archivo./home/student/bin/manage/home/student/grading/review.txt
●	Anexe las últimas tres líneas del archivo al archivo. No sobrescriba ningún texto existente en el archivo./home/student/bin/manage/home/student/grading/review.txt/home/student/grading/review.txt
●	Copie el archivo en el archivo./home/student/grading/review.txt/home/student/grading/review-copy.txt
●	Edite el archivo para que la línea aparezca dos veces./home/student/grading/review-copy.txtTest JJ
●	Edite el archivo para eliminar la línea./home/student/grading/review-copy.txtTest HH
●	Edite el archivo para que exista una línea entre la línea y la línea./home/student/grading/review-copy.txtA new lineTest BBTest CC
●	Cree el vínculo físico al archivo. Debe crear el vínculo físico después de completar el paso anterior para crear el archivo./home/student/hardcopy/home/student/grading/grade1/home/student/grading/grade1
●	Cree el vínculo simbólico al archivo./home/student/softcopy/home/student/grading/grade2
●	Guarde la salida de un comando que enumera el contenido del directorio en el archivo. El resultado debe ser una "lista larga" que incluya permisos de archivo, propietario y propietario del grupo, tamaño y fecha de modificación de cada archivo. La salida debe omitir los archivos ocultos./boot/home/student/grading/longlisting.txt
Inicie sesión como usuario.serverbstudent
[student@workstation ~]$ ssh student@serverb
...output omitted...
1.	[student@serverb ~]$
2.	Cree el directorio. Si el directorio es su directorio actual, no es necesario especificar la ruta absoluta al directorio al crearlo./home/student/grading/home/studentgrading
[student@serverb ~]$ mkdir grading
3.	En el directorio, cree tres archivos vacíos llamados , , y ./home/student/gradinggrade1grade2grade3
	Cree los archivos vacíos llamados , , y en el directorio. Aplique la función de shell de expansión de llaves para crear los tres archivos con un solo comando.grade1grade2grade3/home/student/gradingtouch
[student@serverb ~]$ touch grading/grade{1,2,3}
Compruebe que los archivos , y y existen en el directorio.grade1grade2grade3/home/student/grading
[student@serverb ~]$ ls grading/
	grade1  grade2  grade3
4.	Copie las primeras cinco líneas del archivo en el archivo./home/student/bin/manage/home/student/grading/review.txt
	Vea las primeras cinco líneas del archivo y redirija la salida al archivo. Utilice el símbolo de redirección único (>) para sobrescribir cualquier contenido existente en el archivo./home/student/bin/manage/home/student/grading/review.txt
[student@serverb ~]$ head -5 bin/manage > grading/review.txt
Compruebe que el archivo contiene el siguiente texto:/home/student/grading/review.txt
Test AA
Test BB
Test CC
Test DD
	Test EE
5.	Anexe las últimas tres líneas del archivo al archivo. Utilice el símbolo de redirección doble (>>) para anexar la salida y conservar el contenido del archivo./home/student/bin/manage/home/student/grading/review.txt
	Vea las últimas tres líneas del archivo y anexe la salida al archivo./home/student/bin/manage/home/student/grading/review.txt
[student@serverb ~]$ tail -3 bin/manage >> grading/review.txt
Compruebe que el archivo contiene el siguiente texto:/home/student/grading/review.txt
Test AA
Test BB
Test CC
Test DD
Test EE
Test HH
Test II
	Test JJ
6.	Copie el archivo en el archivo./home/student/grading/review.txt/home/student/grading/review-copy.txt
Vaya al directorio./home/student/grading
[student@serverb ~]$ cd grading/
	[student@serverb grading]$
	Copie el archivo en el archivo./home/student/grading/review.txt/home/student/grading/review-copy.txt
[student@serverb grading]$ cp review.txt review-copy.txt
Vuelva al directorio principal del usuario.student
[student@serverb grading]$ cd
	[student@serverb ~]$
7.	Edite el archivo para que tenga dos líneas secuenciales./home/student/grading/review-copy.txtTest JJ
	Utilice el editor de texto para abrir el archivo.vim/home/student/grading/review-copy.txt
[student@serverb ~]$ vim grading/review-copy.txt
Desde el modo de comando en , desplácese hacia abajo hasta la línea. Presiona la tecla y dos veces para copiar la línea de texto y presiona la tecla p para pegarla debajo del cursor. Escriba wq para guardar los cambios y salir . Compruebe que el archivo contiene el siguiente texto:vimTest JJvim/home/student/grading/review-copy.txt
Test AA
Test BB
Test CC
Test DD
Test EE
Test HH
Test II
Test JJ
	Test JJ
8.	Edite el archivo para eliminar la línea./home/student/grading/review-copy.txtTest HH
	Utilice el editor de texto Vim para abrir el archivo./home/student/grading/review-copy.txt
[student@serverb ~]$ vim grading/review-copy.txt
Desde el modo de comando en Vim, desplácese hacia abajo hasta la línea. Presione la tecla d dos veces en su teclado para eliminar la línea de texto. Escriba wq para guardar los cambios y salir . Compruebe que el archivo contiene el siguiente texto:Test HHvim/home/student/grading/review-copy.txt
Test AA
Test BB
Test CC
Test DD
Test EE
Test II
Test JJ
	Test JJ
9.	Edite el archivo para que la línea con exista entre la línea y la línea./home/student/grading/review-copy.txtA new lineTest BBTest CC
	Utilice el editor de texto Vim para abrir el archivo./home/student/grading/review-copy.txt
[student@serverb ~]$ vim grading/review-copy.txt
Desde el modo de comando en Vim, desplácese hacia abajo hasta la línea. Presione la tecla i para cambiar al modo de inserción mientras mantiene el cursor al comienzo de la línea. En el modo de inserción, pulse Intro para crear una línea en blanco sobre el cursor. Utilice la flecha hacia arriba para navegar hasta la línea en blanco y crear la línea de texto. Presione la tecla Esc para volver al modo de comando. Escriba wq para guardar los cambios y salir de Vim. Compruebe que el archivo contiene el siguiente texto.Test CCTest CCA new line/ï»¿home/student/grading/review-copy.txt
Test AA
Test BB
A new line
Test CC
Test DD
Test EE
Test II
Test JJ
	Test JJ
10.	Cree el vínculo físico al archivo./home/student/hardcopy/home/student/grading/grade1
	Cree el vínculo físico al archivo./home/student/hardcopy/home/student/grading/grade1
[student@serverb ~]$ ln grading/grade1 hardcopy
Vea el recuento de enlaces del archivo./home/student/grading/grade1
[student@serverb ~]$ ls -l grading/grade1
	-rw-r--r--. 2 student student 0 Mar  6 16:45 grading/grade1
11.	Cree el vínculo simbólico al archivo./home/student/softcopy/home/student/grading/grade2
	Cree el vínculo simbólico al archivo./home/student/softcopy/home/student/grading/grade2
[student@serverb ~]$ ln -s grading/grade2 softcopy
Vea las propiedades del vínculo simbólico./home/student/softcopy
[student@serverb ~]$ ls -l softcopy
	lrwxrwxrwx. 1 student student 14 Mar  6 17:58 softcopy -> grading/grade2
12.	Enumere el contenido del directorio y redirija la salida al archivo. El resultado debe ser una lista larga que incluya los permisos de archivo, el propietario y el propietario del grupo, el tamaño y la fecha de modificación de cada archivo. La salida debe omitir los archivos ocultos./boot/home/student/grading/longlisting.txt
	Vea el contenido del directorio en el formato de lista larga y omita los archivos ocultos. Redirigir la salida al archivo./boot/home/student/grading/longlisting.txt
[student@serverb ~]$ ls -l /boot > grading/longlisting.txt
Regrese al sistema como usuario.workstationstudent
[student@serverb ~]$ exit
logout
	Connection to serverb closed.
Evaluación
Como usuario de la máquina, utilice el comando para calificar el trabajo. Corrija los errores notificados y vuelva a ejecutar el comando hasta que se realice correctamente.studentworkstationlab
[student@workstation ~]$ lab grade rhcsa-rh124-review1
Terminar
En la máquina, cambie al directorio principal del usuario y utilice el comando para completar este ejercicio. Este paso es importante para garantizar que los recursos de ejercicios anteriores no afecten los próximos ejercicios.workstationstudentlab
[student@workstation ~]$ lab finish rhcsa-rh124-review1
Laboratorio: Administrar usuarios y grupos, permisos y procesos
Nota
Si planea realizar el examen RHCSA, utilice el siguiente enfoque para maximizar el beneficio de esta revisión integral: intente cada laboratorio sin ver los botones de solución ni consultar el contenido del curso. Usa los guiones de calificación para medir tu progreso a medida que completas cada laboratorio.
Administre cuentas de usuario y grupo, establezca permisos en archivos y directorios y administre procesos.
Resultados
●	Administrar cuentas de usuario y grupos.
●	Establezca permisos en archivos y directorios.
●	Identifique y gestione procesos que consumen mucha CPU.
Si no reiniciaste tus máquinas al final del último capítulo, guarda cualquier trabajo que quieras conservar de ejercicios anteriores en esas máquinas y reinícialas ahora.workstationserver
Como usuario de la máquina, use el comando para preparar el sistema para este ejercicio.studentworkstationlab
Este comando prepara el entorno y garantiza que todos los recursos necesarios estén disponibles.
[student@workstation ~]$ lab start rhcsa-rh124-review2
Características técnicas
●	Inicie sesión como usuario.serverbstudent
●	Identifique y finalice el proceso que actualmente usa la mayor parte del tiempo de CPU.
●	Cree el grupo con un GID de 50000.database
●	Cree el usuario y configúrelo con los siguientes requisitos:dbadmin1
○	Agregue el grupo como un grupo complementario.database
○	Establezca la contraseña y fuerce un cambio de contraseña en el primer inicio de sesión.redhat
○	Permita que la contraseña cambie después de 10 días desde el día del último cambio de contraseña.
○	Establezca la caducidad de la contraseña en 30 días desde el día del último cambio de contraseña.
○	Permita que el usuario use el comando para ejecutar cualquier comando como superusuario.sudo
○	Configure la máscara de usuario predeterminada como 007 para el usuario.dbadmin1
●	Cree el directorio como usuario propietario y el grupo como grupo propietario./home/dbadmin1/grading/review2dbadmin1database
●	Configure el directorio para que el grupo posea cualquier archivo o subdirectorio que se cree en este directorio, independientemente del usuario que haya creado el archivo. Configure los permisos en el directorio para permitir que los miembros del grupo accedan al directorio y creen contenido en él. Todos los demás usuarios deben tener permisos de lectura y ejecución en el directorio./home/dbadmin1/grading/review2databasedatabase
●	Asegúrese de que los usuarios solo puedan eliminar los archivos de su propiedad del directorio./home/dbadmin1/grading/review2
Inicie sesión como usuario.serverbstudent
[student@workstation ~]$ ssh student@serverb
...output omitted...
1.	[student@serverb ~]$
2.	Identifique y finalice el proceso que actualmente usa la mayor parte del tiempo de CPU.
	Utilice el comando para ver el consumo de CPU del sistema en tiempo real.top
[student@serverb ~]$ top
Desde la interfaz interactiva del comando, observe la columna y confirme que un proceso está consumiendo la mayor cantidad de recursos de CPU.top%CPUdd
...output omitted...
PID USER      PR  NI    VIRT    RES    SHR S  %CPU  %MEM     TIME+ COMMAND
2303 student   20   0  217048    944    876 R  99.7   0.1 100:11.64 dd
	...output omitted...
El proceso de la salida anterior tiene el atributo dd2303 PID. Este proceso consume el 99,7% de los recursos de la CPU. El PID y el porcentaje de consumo de recursos de la CPU variarían en su sistema.
Desde la interfaz interactiva del comando, escriba k para finalizar el proceso con el comando topdd2303 PID, como determinó en el paso anterior. Después de escribir k en el comando, si el PID predeterminado que se muestra en el símbolo del sistema coincide con el PID del proceso que se va a finalizar, presione la tecla Intro. Si el PID sugerido no coincide, especifique el PID de forma interactiva.top
...output omitted...
PID to signal/kill [default pid = 2303] Enter
	...output omitted...
Utilice la señal predeterminada para finalizar el proceso.SIGTERM
...output omitted...
Send pid 2833 signal [15/sigterm] Enter
	...output omitted...
	Presione la tecla q para salir de la interfaz interactiva del comando.top
3.	Cree el grupo con un GID de 50000.database
Cambie al usuario.root
[student@serverb ~]$ sudo -i
[sudo] password for student: student
	[root@serverb ~]#
	Cree el grupo con un GID de 50000.database
[root@serverb ~]# groupadd -g 50000 database
4.	Cree el usuario. Agregue el grupo como un grupo complementario. Establezca la contraseña y fuerce un cambio de contraseña en el primer inicio de sesión del usuario. Permita que la contraseña cambie después de 10 días desde el día del último cambio de contraseña. Establezca la caducidad de la contraseña en 30 días desde el día del último cambio de contraseña. Permita que el usuario use el comando para ejecutar cualquier comando como superusuario. Configure la máscara de usuario predeterminada como .dbadmin1databaseredhatsudo007
	Cree el usuario. Agregue el grupo como un grupo complementario.dbadmin1database
[root@serverb ~]# useradd -G database dbadmin1
Establezca la contraseña del usuario en .dbadmin1redhat
[root@serverb ~]# passwd dbadmin1
Changing password for user dbadmin1.
New password: redhat
BAD PASSWORD: The password is shorter than 8 characters
Retype new password: redhat
	passwd: all authentication tokens updated successfully.
	Forzar al usuario a cambiar su contraseña en el próximo inicio de sesión.dbadmin1
[root@serverb ~]# chage -d 0 dbadmin1
	Establezca la edad mínima del usuario de la contraseña en días.dbadmin110
[root@serverb ~]# chage -m 10 dbadmin1
	Establezca la antigüedad máxima del usuario en días.dbadmin130
[root@serverb ~]# chage -M 30 dbadmin1
Permita que el usuario use el comando para ejecutar cualquier comando como superusuario. Utilice el comando para crear el archivo y agregar el siguiente contenido:dbadmin1sudovim /etc/sudoers.d/dbadmin1
[root@serverb ~]# vim /etc/sudoers.d/dbadmin1
	dbadmin1 ALL=(ALL) ALL
Cambie al usuario. Añada la línea al archivo.dbadmin1umask 007/home/dbadmin1/.bashrc
[root@serverb ~]# su - dbadmin1
	[dbadmin1@serverb ~]$ echo "umask 007" >> .bashrc
	Origine el archivo para actualizar la máscara de usuario.~/.bashrc
[dbadmin1@serverb ~]$ source ~/.bashrc
5.	Cree el directorio como usuario propietario y el grupo como grupo propietario./home/dbadmin1/grading/review2dbadmin1database
	Utilice la opción de comando para crear el directorio.mkdir-p/home/dbadmin1/grading/review2
[dbadmin1@serverb ~]$ mkdir -p /home/dbadmin1/grading/review2
	Establecido recursivamente y como el respectivo usuario propietario y grupo del directorio y subdirectorios.dbadmin1database/home/dbadmin1/
[dbadmin1@serverb ~]$ chown -R dbadmin1:database /home/dbadmin1/
	Establezca de forma recursiva los permisos de grupo en el directorio y los subdirectorios. Este permiso permite a los miembros del grupo recorrer la estructura de directorios.execute/home/dbadmin1database/home/dbadmin1
[dbadmin1@serverb ~]$ chmod -R g+x /home/dbadmin1
6.	Configure el directorio para permitir que los miembros del grupo creen contenido en él. Todos los demás usuarios deben tener permisos de lectura y ejecución en el directorio./home/dbadmin1/grading/review2database
	Aplique el permiso especial SetGID en el directorio para que el grupo posea los archivos que se crean en el directorio./home/dbadmin1/grading/review2database
[dbadmin1@serverb ~]$ chmod g+s /home/dbadmin1/grading/review2
	Aplique el modo de permiso en el directorio.775/home/dbadmin1/grading/review2
[dbadmin1@serverb ~]$ chmod 775 /home/dbadmin1/grading/review2
7.	Asegúrese de que los usuarios solo puedan eliminar los archivos de su propiedad del directorio./home/dbadmin1/grading/review2
	Aplique el permiso especial sticky bit en el directorio./home/dbadmin1/grading/review2
[dbadmin1@serverb ~]$ chmod o+t /home/dbadmin1/grading/review2
Regrese al sistema como usuario.workstationstudent
[dbadmin1@serverb ~]$ exit
logout
[root@serverb ~]# exit
logout
[student@serverb ~]$ exit
logout
	Connection to serverb closed.
Evaluación
Como usuario de la máquina, utilice el comando para calificar el trabajo. Corrija los errores notificados y vuelva a ejecutar el comando hasta que se realice correctamente.studentworkstationlab
[student@workstation ~]$ lab grade rhcsa-rh124-review2
Terminar
En la máquina, cambie al directorio principal del usuario y utilice el comando para completar este ejercicio. Este paso es importante para garantizar que los recursos de ejercicios anteriores no afecten los próximos ejercicios.workstationstudentlab
[student@workstation ~]$ lab finish rhcsa-rh124-review2
Laboratorio: Configurar y administrar un servidor
Nota
Si planea realizar el examen RHCSA, utilice el siguiente enfoque para maximizar el beneficio de esta revisión integral: intente cada laboratorio sin ver los botones de solución ni consultar el contenido del curso. Usa los guiones de calificación para medir tu progreso a medida que completas cada laboratorio.
Configure, proteja y use el servicio SSH para acceder a una máquina remota y administrar paquetes con la utilidad.dnf
Resultados
●	Cree un nuevo par de claves SSH.
●	Deshabilite los inicios de sesión SSH como usuario.root
●	Deshabilite los inicios de sesión SSH basados en contraseña.
●	Instale paquetes y módulos de paquetes mediante el comando.dnf
Si no reiniciaste tus máquinas al final del último capítulo, guarda cualquier trabajo que quieras conservar de ejercicios anteriores en esas máquinas y reinícialas ahora.workstationserver
Como usuario de la máquina, use el comando para preparar el sistema para este ejercicio.studentworkstationlab
Este comando prepara el entorno y garantiza que todos los recursos necesarios estén disponibles.
[student@workstation ~]$ lab start rhcsa-rh124-review3
Características técnicas
●	Inicie sesión como usuario.serverbstudent
●	Generar claves SSH para el usuario. No proteja la clave privada con una frase de contraseña. Guarde las claves privadas y públicas como archivos y respectivamente.student/home/student/.ssh/review3_key/home/student/.ssh/review3_key.pub
●	Configure el usuario para que acepte inicios de sesión autenticados por el par de claves SSH. El usuario activado debería poder iniciar sesión mediante SSH sin introducir una contraseña.studentserverareview3_keystudentserverbservera
●	Activado, configure el servicio para evitar que el usuario inicie sesión.serverbsshdroot
●	En , configure el servicio para evitar que los usuarios usen sus contraseñas para iniciar sesión. Los usuarios aún deben poder autenticar los inicios de sesión mediante un par de claves SSH.serverbsshd
●	Instale el paquete en la máquina.zshserverb
Inicie sesión como usuario.serverbstudent
[student@workstation ~]$ ssh student@serverb
...output omitted...
1.	[student@serverb ~]$
Generar claves SSH para el usuario. No proteja la clave privada con una frase de contraseña. Asigne un nombre a los archivos de clave privada y pública y respectivamente.student/home/student/.ssh/review3_key/home/student/.ssh/review3_key.pub
[student@serverb ~]$ ssh-keygen
Generating public/private rsa key pair.
Enter file in which to save the key (/home/student/.ssh/id_rsa): /home/student/.ssh/review3_key
Enter passphrase (empty for no passphrase): Enter
Enter same passphrase again: Enter
Your identification has been saved in /home/student/.ssh/review3_key.
Your public key has been saved in /home/student/.ssh/review3_key.pub.
The key fingerprint is:
SHA256:Uqefehw+vRfm94fQZDoz/6IfNYSLK/OpiQ4n6lrKIbY student@serverb.lab.example.com
The key's randomart image is:
+---[RSA 3072]----+
| .+=oBo+         |
| ...O * =        |
|.. + % =         |
|. +.B =.         |
|...*..o S        |
|E.=. o + .       |
|  .= oo o .      |
|    *... .       |
|     .oo.        |
2.	+----[SHA256]-----+
3.	Configure el usuario para que acepte inicios de sesión autenticados por el par de claves SSH. El usuario activado debería poder iniciar sesión mediante SSH sin introducir una contraseña.studentserverareview3_keystudentserverbservera
Exporte la clave pública a desde .review3_keyserveraserverb
[student@serverb ~]$ ssh-copy-id -i .ssh/review3_key.pub student@servera
/usr/bin/ssh-copy-id: INFO: Source of key(s) to be installed: ".ssh/review3.pub"
/usr/bin/ssh-copy-id: INFO: attempting to log in with the new key(s), to filter out any that are already installed
/usr/bin/ssh-copy-id: INFO: 1 key(s) remain to be installed -- if you are prompted now it is to install the new keys
student@servera's password: student

Number of key(s) added: 1

Now try logging into the machine, with:   "ssh 'student@servera'"
	and check to make sure that only the key(s) you wanted were added.
Compruebe que puede iniciar sesión desde como usuario mediante la clave privada sin que se le pida la contraseña.serveraserverbstudentreview3_key
[student@serverb ~]$ ssh -i .ssh/review3_key student@servera
...output omitted...
	[student@servera ~]$
Salir de .servera
[student@servera ~]$ exit
logout
Connection to servera closed.
	[student@serverb ~]$
4.	Activado, configure el servicio para evitar que el usuario inicie sesión.serverbsshdroot
	Establezca el parámetro en en el archivo. Utilice el comando para editar el archivo de configuración.PermitRootLoginno/etc/ssh/sshd_configsudo vim /etc/ssh/sshd_config
	Vuelva a cargar el servicio.sshd
[student@serverb ~]$ sudo systemctl reload sshd.service
5.	En , configure el servicio para evitar que los usuarios usen sus contraseñas para iniciar sesión. Los usuarios aún deberían poder autenticar los inicios de sesión mediante claves SSH.serverbsshd
	Establezca el parámetro en en el archivo. Utilice el comando para editar el archivo de configuración.PasswordAuthenticationno/etc/ssh/sshd_configsudo vim /etc/ssh/sshd_config
	Vuelva a cargar el servicio.sshd
[student@serverb ~]$ sudo systemctl reload sshd.service
Instale el paquete.zsh
[student@serverb ~]$ sudo dnf install zsh
...output omitted...
Is this ok [y/N]: y
...output omitted...
Installed:
  zsh-5.8-9.el9.x86_64
6.	Complete!
Regrese al sistema como usuario.workstationstudent
[student@serverb ~]$ exit
logout
Connection to serverb closed.
	[student@workstation ~]$
Evaluación
Como usuario de la máquina, utilice el comando para calificar el trabajo. Corrija los errores notificados y vuelva a ejecutar el comando hasta que se realice correctamente.studentworkstationlab
[student@workstation ~]$ lab grade rhcsa-rh124-review3
Terminar
En la máquina, cambie al directorio principal del usuario y utilice el comando para completar este ejercicio. Este paso es importante para garantizar que los recursos de ejercicios anteriores no afecten los próximos ejercicios.workstationstudentlab
[student@workstation ~]$ lab finish rhcsa-rh124-review3
Laboratorio: Administración de redes
Nota
Si planea realizar el examen RHCSA, utilice el siguiente enfoque para maximizar el beneficio de esta revisión integral: intente cada laboratorio sin ver los botones de solución ni consultar el contenido del curso. Usa los guiones de calificación para medir tu progreso a medida que completas cada laboratorio.
Configure y pruebe la conectividad de red.
Resultados
●	Configure los ajustes de red.
●	Pruebe la conectividad de red.
●	Establezca un nombre de host estático.
●	Utilice nombres de host canónicos que se puedan resolver localmente para conectarse a los sistemas.
Si no reiniciaste tus máquinas al final del último capítulo, guarda cualquier trabajo que quieras conservar de ejercicios anteriores en esas máquinas y reinícialas ahora.workstationserver
Como usuario de la máquina, use el comando para preparar el sistema para este ejercicio.studentworkstationlab
Este comando prepara el entorno y garantiza que todos los recursos necesarios estén disponibles.
[student@workstation ~]$ lab start rhcsa-rh124-review4
Importante
Cuando usa el comando para ajustar la configuración de red, un comando incorrecto puede bloquear o bloquear la sesión. Luego se desconecta del servidor y, por lo tanto, el servidor se vuelve inaccesible. Debe ajustar la configuración de red a través de la consola del servidor, localmente o a través de una consola remota.ssh
En esta revisión, abra la consola de la máquina para ajustar la configuración de red.serverb
Características técnicas
●	En , determine el nombre de la interfaz Ethernet y su perfil de conexión activo.serverb
●	En , cree y active un perfil de conexión para la interfaz Ethernet disponible. El perfil establece estáticamente la configuración de red y no utiliza DHCP. Configure el perfil para usar la configuración de red en la tabla siguiente:serverbstaticstaticstatic
Parámetro	Ajuste
Dirección IPv4	172.25.250.111
Máscara de red	255.255.255.0
Entrada	172.25.250.254
Servidor DNS	172.25.250.254
●	
Establezca el nombre de host en .serverbserver-review4.lab4.example.com
●	On , se establece como el nombre de host canónico para la dirección IPv4.serverbclient-review4servera172.25.250.10
●	Configure el perfil de conexión con una dirección IPv4 adicional de con una máscara de red de . No elimine la dirección IPv4 existente. Asegúrese de que responde a todas las direcciones cuando la conexión está activa.static172.25.250.211255.255.255.0serverbstatic
●	Activado, restaure la configuración de red original activando el perfil de conexión de red original.serverb
Utilice la consola para iniciar sesión como usuario en la máquina y cambiar al usuario.serverbstudentserverbroot
serverb login: student
Password: student
[student@serverb ~]$ sudo -i
[sudo] password for student: student
1.	[root@serverb ~]#
2.	En , determine el nombre de la interfaz Ethernet y el nombre del perfil de conexión que utiliza.serverb
Muestra la información de conexión de red.
[root@serverb ~]# nmcli device status
DEVICE  TYPE      STATE                   CONNECTION
eth0    ethernet  connected               System eth0
eth1    ethernet  connected               System eth1
	lo      loopback  connected (externally)  lo
En este ejemplo, es el nombre de la interfaz Ethernet. El nombre del perfil de conexión es . Cree el perfil de conexión para esta interfaz.eth0System eth0static
Nota
La interfaz de red y los nombres de perfil de conexión pueden diferir de la salida anterior. Use el nombre que muestra el sistema para reemplazar el nombre del marcador de posición en los pasos posteriores.ethX
3.	En , cree el perfil de conexión para la interfaz. Establezca la configuración de red estáticamente para que no use DHCP. Cuando haya terminado, active ese perfil de conexión. Base la configuración en la tabla siguiente:serverbstaticethX
Dirección IPv4	172.25.250.111
Máscara de red	255.255.255.0
Entrada	172.25.250.254
Servidor DNS	172.25.250.254

Cree el perfil de conexión con la configuración de red proporcionada.static
[root@serverb ~]# nmcli connection add con-name static type ethernet \
ifname ethX ipv4.addresses '172.25.250.111/24' ipv4.gateway '172.25.250.254' \
ipv4.dns '172.25.250.254' ipv4.method manual
	Connection 'static' (ac8620e6-b77e-499f-9931-118b8b015807) successfully added.
	Active el nuevo perfil de conexión.
[root@serverb ~]# nmcli connection up static
4.	Establezca el nombre de host en . Verifique el nuevo nombre de host.serverbserver-review4.lab4.example.com
Configure como el nuevo nombre de host.server-review4.lab4.example.com
[root@serverb ~]# hostnamectl hostname server-review4.lab4.example.com
[root@serverb ~]# hostname
	server-review4.lab4.example.com
5.	On , se establece como el nombre de host canónico para la dirección IPv4.serverbclient-review4servera172.25.250.10
	Edite el archivo y agréguelo como nombre para la dirección IPv4./etc/hostsclient-review4172.25.250.10
172.25.250.10 client-review4
Compruebe que puede acceder a la dirección IPv4 mediante el nombre de host canónico.servera172.25.250.10client-review4
[root@serverb ~]# ping -c2 client-review4
PING client-review4 (172.25.250.10) 56(84) bytes of data.
64 bytes from client-review4 (172.25.250.10): icmp_seq=1 ttl=64 time=0.259 ms
64 bytes from client-review4 (172.25.250.10): icmp_seq=2 ttl=64 time=0.391 ms

--- client-review4 ping statistics ---
2 packets transmitted, 2 received, 0% packet loss, time 33ms
	rtt min/avg/max/mdev = 0.259/0.325/0.391/0.066 ms
6.	Modifique el perfil de conexión para configurar la dirección IPv4 adicional con la máscara de red. No elimine la dirección IPv4 existente. Compruebe que responde a todas las direcciones cuando el perfil de conexión está activo.static172.25.250.211255.255.255.0serverbstatic
Agregue la dirección IP a la conexión.172.25.250.211static
[root@serverb ~]# nmcli connection modify static \
	+ipv4.addresses '172.25.250.211/24'
Active la nueva dirección IP.
[root@serverb ~]# nmcli connection up static
	...output omitted...
Desde , utilice el comando para comprobar que se puede acceder a la dirección IPv4.workstationping172.25.250.211
[student@workstation ~]$ ping -c2 172.25.250.211
PING 172.25.250.211 (172.25.250.211) 56(84) bytes of data.
64 bytes from 172.25.250.211: icmp_seq=1 ttl=64 time=0.246 ms
64 bytes from 172.25.250.211: icmp_seq=2 ttl=64 time=0.296 ms

--- 172.25.250.211 ping statistics ---
2 packets transmitted, 2 received, 0% packet loss, time 50ms
	rtt min/avg/max/mdev = 0.246/0.271/0.296/0.025 ms
7.	Activado , restaure la configuración original activando el perfil de red original.serverb
Vuelva a la consola y utilice el comando para activar el perfil de red original.nmcli
[root@serverb ~]# nmcli connection up "System eth0"
	...output omitted...
El nombre del perfil de conexión original puede diferir en . Reemplace el nombre de esta solución por el nombre del sistema. Busque el nombre del perfil con el comando.serverbnmcli connection show
Desde , inicie sesión como usuario para verificar que la configuración de red original esté activa.workstationserverbstudent
[student@workstation ~]$ ssh student@serverb
...output omitted...
	[student@server-review4 ~]$
Salga de las terminales adicionales. Regrese al sistema como usuario.workstationstudent
[student@server-review4 ~]$ exit
logout
Connection to serverb closed.
	[student@workstation ~]$
Evaluación
Como usuario de la máquina, utilice el comando para calificar el trabajo. Corrija los errores notificados y vuelva a ejecutar el comando hasta que se realice correctamente.studentworkstationlab
[student@workstation ~]$ lab grade rhcsa-rh124-review4
Terminar
En la máquina, cambie al directorio principal del usuario y utilice el comando para completar este ejercicio. Este paso es importante para garantizar que los recursos de ejercicios anteriores no afecten los próximos ejercicios.workstationstudentlab
[student@workstation ~]$ lab finish rhcsa-rh124-review4
Laboratorio: Montaje de sistemas de archivos y búsqueda de archivos
Nota
Si planea realizar el examen RHCSA, utilice el siguiente enfoque para maximizar el beneficio de esta revisión integral: intente cada laboratorio sin ver los botones de solución ni consultar el contenido del curso. Usa los guiones de calificación para medir tu progreso a medida que completas cada laboratorio.
Monte un sistema de archivos y localice archivos según diferentes criterios.
Resultados
●	Monte un sistema de archivos existente.
●	Busque archivos en función de su nombre de archivo, permisos y tamaño.
Si no reiniciaste tus máquinas al final del último capítulo, guarda cualquier trabajo que quieras conservar de ejercicios anteriores en esas máquinas y reinícialas ahora.workstationserver
Como usuario de la máquina, use el comando para preparar el sistema para este ejercicio.studentworkstationlab
Este comando prepara el entorno y garantiza que todos los recursos necesarios estén disponibles.
[student@workstation ~]$ lab start rhcsa-rh124-review5
Características técnicas
●	Inicie sesión en la máquina como usuario y cambie al usuario.serverbstudentroot
●	Identifique el dispositivo de bloques desmontado que contiene un sistema de archivos XFS en la máquina. Monte el dispositivo de bloque en el directorio.serverb/review5-disk
●	Busque el archivo. Cree el archivo que contiene una sola línea con la ruta absoluta al archivo.review5-path/review5-disk/review5-path.txtreview5-path
●	Busque todos los archivos que poseen el usuario y el grupo. Los archivos también deben tener los permisos octales. Guarde la lista de estos archivos en el archivo.contractor1contractor640/review5-disk/review5-perms.txt
●	Busque todos los archivos con un tamaño de 100 bytes. Guarde las rutas absolutas de estos archivos en el archivo./review5-disk/review5-size.txt
Inicie sesión en la máquina como usuario y cambie al usuario.serverbstudentroot
[student@workstation ~]$ ssh student@serverb
...output omitted...
[student@serverb ~]$ sudo -i
[sudo] password for student: student
1.	[root@serverb ~]#
2.	Identifique el dispositivo de bloques desmontado que contiene un sistema de archivos XFS en la máquina. Monte el dispositivo de bloque en el directorio.serverb/review5-disk
Identifique el dispositivo de bloques desmontado que contiene el sistema de archivos.XFS
[root@serverb ~]# lsblk -fs
NAME  FSTYPE LABEL UUID                                 MOUNTPOINT
...output omitted...
vdb1  xfs          7694653c-45f6-4749-bd87-f2f69c37daa7
└─vdb
	...output omitted...
A partir de la salida anterior, el dispositivo de bloque contiene el sistema de archivos, que no está montado en el sistema.vdb1XFS
	Cree el directorio./review5-disk
[root@serverb ~]# mkdir /review5-disk
	Monte el dispositivo de bloque en el directorio.vdb1/review5-disk
[root@serverb ~]# mount /dev/vdb1 /review5-disk
Verifique que el dispositivo de bloque esté montado en el directorio.vdb1/review5-disk
[root@serverb ~]# df -Th
Filesystem     Type      Size  Used Avail Use% Mounted on
...output omitted...
/dev/vdb1      xfs       2.0G   47M  2.0G   3% /review5-disk
	...output omitted...
3.	Busque el archivo. Guarde su ruta absoluta en el archivo.review5-path/review5-disk/review5-path.txt
Busque el archivo. Redirigir todos los mensajes de error al archivo especial.review5-path/dev/null
[root@serverb ~]# find / -iname review5-path 2>/dev/null
	/var/tmp/review5-path
Tenga en cuenta la ruta absoluta al archivo desde la salida anterior.review5-path
	Utilice el comando con la salida anterior del comando para agregar la ruta absoluta del archivo al archivo.echofindreview5-path/review5-disk/review5-path.txt
[root@serverb ~]# echo "/var/tmp/review5-path" >> /review5-disk/review5-path.txt
4.	Busque todos los archivos que poseen el usuario y el grupo. Los archivos deben tener permisos octales. Guarde las rutas absolutas de estos archivos en el archivo.contractor1contractor640/review5-disk/review5-perms.txt
Busque todos los archivos que poseen el usuario y el grupo y que tienen permisos octales. Redirigir todos los errores al archivo especial.contractor1contractor640/dev/null
[root@serverb ~]# find / -user contractor1 \
-group contractor -perm 640 2>/dev/null
	/usr/share/review5-perms
Solo el archivo cumple los criterios del comando anterior. Tenga en cuenta la ruta absoluta al archivo./usr/share/review5-permsfindreview5-perms
	Utilice el comando con la salida anterior del comando para agregar la ruta absoluta del archivo al archivo.echofindreview5-perms/review5-disk/review5-perms.txt
[root@serverb ~]# echo "/usr/share/review5-perms" >> /review5-disk/review5-perms.txt
5.	Encuentra todos los archivos con un tamaño de 100 bytes. Guarde las rutas absolutas de estos archivos en el archivo./review5-disk/review5-size.txt
Encuentra todos los archivos con un tamaño de exactamente 100 bytes. Redirigir todos los errores al archivo especial./dev/null
[root@serverb ~]# find / -type f -size 100c 2>/dev/null
/usr/share/licenses/ethtool/LICENSE
/usr/share/doc/libuser
/usr/share/doc/plymouth/AUTHORS
...output omitted...
/opt/review5-size
	...output omitted...
El resultado anterior puede variar en función del número de archivos que coincidan con los criterios de tamaño del sistema. Tenga en cuenta las rutas absolutas a todos los archivos de la salida anterior.
	Utilice el comando con la salida anterior del comando para agregar la ruta absoluta del archivo al archivo.echofindreview5-size/review5-disk/review5-size.txt
[root@serverb ~]# echo "/opt/review5-size" >> /review5-disk/review5-size.txt
Regrese al sistema como usuario.workstationstudent
[root@serverb ~]# exit
logout
[student@serverb ~]$ exit
logout
Connection to serverb closed.
	[student@workstation ~]$
Evaluación
Como usuario de la máquina, utilice el comando para calificar el trabajo. Corrija los errores notificados y vuelva a ejecutar el comando hasta que se realice correctamente.studentworkstationlab
[student@workstation ~]$ lab grade rhcsa-rh124-review5
Terminar
En la máquina, cambie al directorio principal del usuario y utilice el comando para completar este ejercicio. Este paso es importante para garantizar que los recursos de ejercicios anteriores no afecten los próximos ejercicios.workstationstudentlab
[student@workstation ~]$ lab finish rhcsa-rh124-review5

