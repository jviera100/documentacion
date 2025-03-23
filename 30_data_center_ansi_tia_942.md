# Taller de Cableado y Data Center (DC) - Manual Consolidado Basado en ANSI/TIA-942-A

**Introducción**

Este manual proporciona una guía completa para el diseño, la instalación y la gestión de la infraestructura de telecomunicaciones de Data Centers, basada en el estándar ANSI/TIA-942-A. Está dirigido a diseñadores, instaladores, administradores de Data Centers y estudiantes que buscan una comprensión profunda de las mejores prácticas y los requisitos técnicos para crear Data Centers eficientes, confiables y seguros. Este manual combina información teórica y práctica, incluyendo definiciones clave, requisitos de diseño, recomendaciones de implementación y ejemplos de la industria.

**1. ALCANCE (SCOPE)**

Este Estándar especifica los requisitos mínimos para la infraestructura de telecomunicaciones de los centros de datos y las salas de ordenadores, incluidos los centros de datos empresariales de un solo inquilino y los centros de datos de alojamiento en Internet de varios inquilinos. La topología especificada en este documento pretende ser aplicable a centros de datos de cualquier tamaño.

*Nota:* Este manual proporciona requisitos y directrices para el diseño e instalación de Data Centers. Es aplicable a la infraestructura de telecomunicaciones para Data Centers de cualquier tamaño y considera el diseño desde las primeras etapas de la construcción.

**2. REFERENCIAS NORMATIVAS (NORMATIVE REFERENCES)**

Las siguientes normas contienen disposiciones que, mediante referencias en este texto, constituyen disposiciones de este Estándar. En el momento de la publicación, las ediciones indicadas eran válidas. Todas las normas están sujetas a revisión, y se alienta a las partes de los acuerdos basados en este Estándar a que investiguen la posibilidad de aplicar las ediciones más recientes de las normas publicadas por ellas.

*   ANSI/TIA-568-C.0, Cableado Genérico de Telecomunicaciones para Locales del Cliente
*   ANSI/TIA-568-C.1, Norma de Cableado de Telecomunicaciones para Edificios Comerciales
*   ANSI/TIA-568-C.2, Cableado de Par Trenzado Balanceado y Componentes de Telecomunicaciones
*   ANSI/TIA-568-C.3, Norma de Componentes de Cableado de Fibra Óptica
*   ANSI/TIA-569-C, Trayectorias y Espacios de Telecomunicaciones
*   ANSI/TIA-604.5-D, FOCIS 5 – Norma de Interconexión de Conectores de Fibra Óptica, Tipo MPO
*   ANSI/TIA/EIA-604-10-A, FOCIS 10 – Norma de Interconexión de Conectores de Fibra Óptica, Tipo LC
*   ANSI/TIA-606-B, Norma de Administración para la Infraestructura de Telecomunicaciones
*   ANSI/TIA-607-B, Enlace y Puesta a Tierra de Telecomunicaciones (Conexión a Tierra) para Locales del Cliente
*   ANSI/TIA-758-B, Norma de Infraestructura de Telecomunicaciones de Planta Externa Propiedad del Cliente
*   ANSI/NFPA 70-2011, Código Eléctrico Nacional®
*   ANSI/NFPA 75-2009, Norma para la Protección de Equipos de Tecnología de la Información®
*   ANSI/ATIS-0600404.2002(R2006), Interfaces de Instalación de Red y Cliente – Especificación de Interfaz DS3 y Metálica
*   ASHRAE, Directrices para Entornos de Procesamiento de Datos, Segunda Edición, 2009
*   ASHRAE 2011 Directrices Térmicas para Entornos de Procesamiento de Datos – Clases de Centros de Datos Ampliados y Guía de Uso, 2011
*   OSHA CFR 1926.441, Salas de Baterías y Carga de Baterías
*   Telcordia GR-63-CORE, Requisitos NEBS(TM): Protección Física
*   Telcordia GR-139-CORE, Requisitos Genéricos para Cable Coaxial de Central

*Nota:* El NEC es publicado por la NFPA. [www.nfpa.org](www.nfpa.org)
*Nota:* ANSI/TIA-569-C (pp.14).
*Nota:* ANSI/TIA-942-A (pp.20).

**3. DEFINICIÓN DE TÉRMINOS, ACRÓNIMOS Y ABREVIATURAS, Y UNIDADES DE MEDIDA**

**3.1 General**

Las definiciones genéricas de esta cláusula se han formulado para su uso por toda la familia de normas de infraestructura de telecomunicaciones. Los requisitos específicos se encuentran en las cláusulas normativas de esta Norma.

**3.2 Definición de términos**

A los efectos de esta Norma, se aplican las siguientes definiciones.

*   **piso de acceso:** Un sistema que consta de paneles de piso completamente removibles e intercambiables que están soportados sobre pedestales ajustables o largueros (o ambos) para permitir el acceso al área debajo.
*   **proveedor de acceso:** El operador de cualquier instalación que se utiliza para transmitir señales de telecomunicaciones hacia y desde las instalaciones de un cliente.
*   **administración:** El método para etiquetar, identificar, documentar y utilizar, necesario para implementar movimientos, adiciones y cambios de la infraestructura de telecomunicaciones.
*   **backbone:** Una instalación (por ejemplo, trayectoria, cable o conductor de enlace) para el Subsistema de Cableado 2 y el Subsistema de Cableado 3.
*   **cable de backbone:** Ver backbone.
*   **enlace:** La unión de partes metálicas para formar una trayectoria eléctricamente conductora.
*   **gabinete:** Un contenedor que puede encerrar dispositivos de conexión, terminaciones, aparatos, cableado y equipo.
*   **cable:** Un conjunto de uno o más conductores aislados o fibras ópticas, dentro de una cubierta envolvente.
*   **cableado:** Una combinación de todos los cables, puentes, cordones y hardware de conexión.
*   **Subsistema de Cableado 1:** Cableado desde la salida del equipo al Distribuidor A, Distribuidor B o Distribuidor C.
*   **Subsistema de Cableado 2:** Cableado entre el Distribuidor A y el Distribuidor B o el Distribuidor C (si el Distribuidor B no está implementado).
*   **Subsistema de Cableado 3:** Cableado entre el Distribuidor B y el Distribuidor C.
*   **cableado centralizado:** Una configuración de cableado desde una salida de equipo a una interconexión centralizada mediante un cable continuo, una interconexión o un empalme.
*   **canal:** La trayectoria de transmisión de extremo a extremo entre dos puntos en los que se conecta el equipo específico de la aplicación.
*   **sala de equipos común (telecomunicaciones):** Un espacio cerrado utilizado para equipos e interconexiones de backbone para más de un inquilino en un edificio o campus.
*   **sala de ordenadores:** Un espacio arquitectónico cuya función principal es albergar equipos de procesamiento de datos.
*   **conducto:** (1) Un conducto de sección transversal circular. (2) Una estructura que contiene uno o más conductos.
    *   *NOTA:* Para los propósitos de esta Norma, el término conducto incluye tubería metálica eléctrica (EMT) o tubería no metálica eléctrica (ENT).
*   **tamaños de conducto:** Para los propósitos de esta Norma, los tamaños de conducto se designan de acuerdo con el designador métrico y el tamaño comercial como se muestra a continuación:

    | Designador Métrico | Tamaño Comercial |
    | :---------------- | :--------------- |
    | 16                | 1/2              |
    | 21                | 3/4              |
    | 27                | 1                |
    | 35                | 1 1/4            |
    | 41                | 1 1/2            |
    | 53                | 2                |
    | 63                | 2 1/2            |
    | 78                | 3                |
    | 91                | 3 1/2            |
    | 103               | 4                |
    | 129               | 5                |
    | 155               | 6                |

*   **hardware de conexión:** Un dispositivo que proporciona terminaciones de cable mecánicas.
*   **punto de consolidación:** Una instalación de conexión dentro del subsistema de cableado 1 para la interconexión de cables que se extienden desde las trayectorias del edificio hasta la salida del equipo.
*   **cordón (telecomunicaciones):** Un conjunto de cable de cordón con un enchufe en uno o ambos extremos.
*   **interconexión:** Una instalación que permite la terminación de elementos de cable y su interconexión o interconexión cruzada.
*   **interconexión cruzada:** Un esquema de conexión entre tramos de cable, subsistemas y equipos que utilizan cables de conexión o puentes que se unen al hardware de conexión en cada extremo.
*   **centro de datos:** Un edificio o parte de un edificio cuya función principal es albergar una sala de ordenadores y sus áreas de apoyo.
    *   *Nota:* Los Data Centers son esenciales en la Infraestructura Tecnológica Actual.
*   **punto de demarcación:** Un punto donde cambia el control operativo o la propiedad.
*   **punto de rocío:** La temperatura a la que el aire debe enfriarse (asumiendo una presión de aire y un contenido de humedad constantes) para alcanzar una humedad relativa del 100% (es decir, saturación).
*   **Distribuidor A:** Instalación de conexión opcional en una topología de estrella jerárquica que se cablea entre la salida del equipo y el Distribuidor B o el Distribuidor C.
*   **Distribuidor B:** Instalación de conexión intermedia opcional en una topología de estrella jerárquica que se cablea al Distribuidor C.
*   **Distribuidor C:** Instalación de conexión central en una topología de estrella jerárquica.
*   **temperatura de bulbo seco:** La temperatura del aire medida por un termómetro expuesto libremente al aire pero protegido de la radiación (por ejemplo, la luz solar, el calor radiante) y la humedad.
*   **puesta a tierra:** Ver conexión a tierra.
*   **interferencia electromagnética:** Energía electromagnética radiada o conducida que tiene un efecto indeseable en el equipo electrónico o las transmisiones de señales.
*   **punto de entrada (telecomunicaciones):** El punto de salida para el cableado de telecomunicaciones a través de una pared exterior, un piso o desde un conducto.
*   **sala o espacio de entrada (telecomunicaciones):** Un espacio en el que tiene lugar la unión del cableado de telecomunicaciones entre o dentro del edificio.
*   **cable de equipo:** Ver cordón.
*   **área de distribución del equipo:** El espacio de la sala de ordenadores ocupado por racks o gabinetes de equipo.
*   "**Interfaz de Red Externa (ENI):** *Interfaz entre el cableado de la sala de computadoras y el cableado externo.*"
*   **fibra óptica:** Ver fibra óptica.
*   **tierra:** Una conexión conductora, ya sea intencional o accidental, entre un circuito eléctrico (por ejemplo, telecomunicaciones) o equipo y la tierra, o a algún cuerpo conductor que sirva en lugar de la tierra.
*   **puesta a tierra:** El acto de crear una conexión a tierra.
*   **conductor de puesta a tierra:** Un conductor utilizado para conectar el electrodo de puesta a tierra a la barra colectora de puesta a tierra principal del edificio.
*   **cableado horizontal:** Subsistema de Cableado 1.
*   **interconexión cruzada horizontal:** Distribuidor A.
*   **área de distribución horizontal:** Un espacio en un centro de datos donde se encuentra una interconexión cruzada horizontal.
*   **identificador:** Un elemento de información que vincula un elemento específico de la infraestructura de telecomunicaciones con su registro correspondiente.
*   **infraestructura (telecomunicaciones):** Una colección de aquellos componentes de telecomunicaciones, excluyendo el equipo, que juntos proporcionan el soporte básico para la distribución de información dentro de un edificio o campus.
*   **interconexión:** Un esquema de conexión que emplea hardware de conexión para la conexión directa de un cable a otro cable sin un cable de conexión o puente.
*   **interconexión cruzada intermedia:** Distribuidor B.
*   **área de distribución intermedia:** Un espacio en un centro de datos donde se encuentra una interconexión cruzada intermedia.
*   **puente:** 1) Un conjunto de pares trenzados sin conectores, utilizado para unir circuitos/enlaces de telecomunicaciones en la interconexión cruzada. 2) Una longitud de cable de fibra óptica con un enchufe conector en cada extremo.
*   **enlace:** Una trayectoria de transmisión entre dos puntos, sin incluir el equipo y los cordones.
*   **estanco a líquidos:** Impermeable a la entrada de humedad.
*   **interconexión cruzada principal:** Distribuidor C.
*   **área de distribución principal:** El espacio en un centro de datos donde se encuentra la interconexión cruzada principal.
*   **sala mecánica:** Un espacio cerrado que satisface las necesidades de los sistemas mecánicos del edificio.
*   **medios (telecomunicaciones):** Alambre, cable o conductores utilizados para las telecomunicaciones.
*   **jack modular:** Un conector hembra de telecomunicaciones que puede ser con o sin llave y puede tener 6 u 8 posiciones de contacto, pero no todas las posiciones necesitan estar equipadas con contactos de jack.
*   **fibra óptica multimodo:** Una fibra óptica que transporta muchas trayectorias de luz.
*   **fibra óptica:** Cualquier filamento hecho de materiales dieléctricos que guía la luz.
*   **cable de fibra óptica:** Un conjunto que consta de una o más fibras ópticas.
*   **cable de conexión:** 1) Una longitud de cable con un enchufe en uno o ambos extremos. 2) Una longitud de cable de fibra óptica con un conector en cada extremo.
*   **panel de conexiones:** Un sistema de hardware de conexión que facilita la terminación de cables y la administración de cableado utilizando cables de conexión.
*   **trayectoria:** Una instalación para la colocación de cable de telecomunicaciones.
*   **plenum:** Un compartimento o cámara a la que están conectados uno o más conductos de aire y que forma parte del sistema de distribución de aire.
*   **puerto:** Un punto de conexión para uno o más conductores o fibras.
*   **hormigón postensado:** Un tipo de construcción de hormigón armado en el que los miembros de acero incrustados se someten primero a tensión, el hormigón se vierte y se deja endurecer, y la tensión de los miembros de acero se libera provocando la compresión del hormigón.
*   **piso postensado:** Un piso que está construido de hormigón postensado.
*   **central telefónica privada:** Un sistema privado de conmutación de telecomunicaciones.
*   **caja de tracción:** Una carcasa ubicada en un tramo de trayectoria utilizada para facilitar la colocación de alambres o cables.
*   **rack:** Marco de soporte equipado con rieles de montaje laterales a los que se montan equipos y hardware.
*   **interferencia de radiofrecuencia:** Interferencia electromagnética dentro de la banda de frecuencia para la transmisión de radio.
*   **pérdida de retorno:** Una relación expresada en dB de la potencia de la señal saliente a la potencia de la señal reflejada.
*   **pantalla:** Un elemento de un cable formado por un blindaje.
*   **proveedor de servicios:** El operador de cualquier servicio que proporciona contenido de telecomunicaciones (transmisiones) entregado a través de las instalaciones del proveedor de acceso.
*   **vaina:** Ver vaina del cable.
*   **blindaje:** 1) Una capa metálica colocada alrededor de un conductor o grupo de conductores. 2) El conductor exterior cilíndrico con el mismo eje que el conductor central que juntos forman una línea de transmisión coaxial.
*   **fibra óptica monomodo:** Una fibra óptica que transporta solo una trayectoria de luz.
*   **espacio (telecomunicaciones):** Un área utilizada para albergar la instalación y terminación de equipos y cables de telecomunicaciones.
*   **empalme:** Una unión de conductores, destinada a ser permanente.
*   **topología de estrella:** Una topología en la que los cables de telecomunicaciones se distribuyen desde un punto central.
*   **telecomunicaciones:** Cualquier transmisión, emisión y recepción de signos, señales, escritos, imágenes y sonidos, es decir, información de cualquier naturaleza por cable, radio, óptica u otros sistemas electromagnéticos.
*   **punto de entrada de telecomunicaciones:** Ver punto de entrada (telecomunicaciones).
*   **sala o espacio de entrada de telecomunicaciones:** Ver sala o espacio de entrada (telecomunicaciones).
*   **sala de equipos de telecomunicaciones:** Ver sala de equipos (telecomunicaciones).
*   **infraestructura de telecomunicaciones:** Ver infraestructura (telecomunicaciones).
*   **medios de telecomunicaciones:** Ver medios (telecomunicaciones).
*   **sala de telecomunicaciones:** Un espacio arquitectónico cerrado para albergar equipos de telecomunicaciones, terminaciones de cables o cableado de interconexión cruzada.
*   **espacio de telecomunicaciones:** Ver espacio (telecomunicaciones).
*   **bloque de terminación:** Un sistema de hardware de conexión que facilita la terminación de cables y la administración de cableado utilizando puentes.
*   **topología:** La disposición física o lógica de un sistema de telecomunicaciones.
*   **fuente de alimentación ininterrumpible:** Un búfer entre la energía de la red eléctrica u otra fuente de energía y una carga que requiere energía continua y precisa.
*   **alambre:** Un conductor metálico sólido o trenzado individualmente aislado.
*   **inalámbrico:** El uso de energía electromagnética radiada (por ejemplo, señales de radiofrecuencia y microondas, luz) que viaja a través del espacio libre para transportar información.
*   **área de distribución de zona:** Un espacio en un centro de datos donde se encuentra una salida de equipo o un punto de consolidación.

*Adiciones de la Guia 1 y 2:*

*   **Piso Técnico (Raised Floor) / Piso de Acceso:** Superficie elevada que oculta cableado y distribuye aire frío.
*   **Shafts:** Conductos verticales u horizontales que albergan cableado, sistemas de ventilación u otros servicios.
*   **Bandejas portacables (Cable Tray):** Estructuras abiertas que soportan y organizan cables de datos y energía.
*   **Cableado Aéreo (Overhead Cabling):** Cables montados sobre los racks.
*   **Unidades de distribución eléctrica (PDU):** Regletas que suministran energía a los equipos.
*   **Racks:** Estructuras metálicas donde se montan equipos.
*   **Cabinas de almacenamiento:** Equipos dedicados al resguardo de datos.
*   **Switches y Routers:** Dispositivos de gestión del tráfico de red.

**3.3 Acrónimos y abreviaturas**

AHJ autoridad competente
ANSI Instituto Nacional Estadounidense de Estándares
ASHRAE Sociedad Estadounidense de Ingenieros de Calefacción, Refrigeración y Aire Acondicionado
BNC bayoneta Neill-Concelman
CCTV televisión de circuito cerrado
CER sala de equipos común
CP punto de consolidación
CPU unidad central de procesamiento
CSA Asociación Canadiense de Normas Internacionales
DSX interconexión de señal digital
ECA Asociación de Componentes Electrónicos
EDA área de distribución de equipos
EIA Alianza de Industrias Electrónicas (Nota: cesó sus operaciones el 31 de diciembre de 2010. Las normas de la EIA son gestionadas por la ECA)
EMI interferencia electromagnética
EMS sistema de gestión de energía
ENI interfaz de red externa
EO salida de equipo
HC interconexión cruzada horizontal
HDA área de distribución horizontal
HVAC calefacción, ventilación y aire acondicionado
IC interconexión cruzada intermedia
IDA área de distribución intermedia
IDC contacto de desplazamiento de aislamiento
KVM teclado, vídeo, ratón
LAN red de área local
LFMC conducto metálico flexible estanco a líquidos
LFNC conducto no metálico flexible estanco a líquidos
MC interconexión cruzada principal
MDA área de distribución principal
NEC® Código Eléctrico Nacional®
NEMA Asociación Nacional de Fabricantes Eléctricos
NFPA Asociación Nacional de Protección contra Incendios
OSHA Administración de Seguridad y Salud Ocupacional
PBX central telefónica privada
PDU unidad de distribución de energía
RFI interferencia de radiofrecuencia
SAN red de área de almacenamiento
SDH jerarquía digital síncrona
SONET red óptica síncrona
STM modelo de transporte síncrono
TIA Asociación de Industrias de Telecomunicaciones
TNC Neill-Concelman roscado
TR sala de telecomunicaciones
UL Underwriters Laboratories Inc
UPS fuente de alimentación ininterrumpida
WAN red de área amplia
ZDA área de distribución de zona

**3.4 Unidades de medida**

A amperio
dB decibelio
°C grados Celsius
°F grados Fahrenheit
ft pies
in pulgada
kb/s kilobit por segundo
km kilómetro
kPa kilopascal
kVA kilovoltampio
kW kilovatio
lbf libra-fuerza
m metro
MHz megahercio
mm milímetro
nm nanómetro
μm micrómetro (micrón)

**4. DESCRIPCIÓN GENERAL DEL DISEÑO DEL CENTRO DE DATOS (DATA CENTER DESIGN OVERVIEW)**

4.1 General
(Pega aquí el contenido correspondiente de las guias 1 y 2)

4.2 Relación de los espacios del centro de datos con otros espacios del edificio (Relationship of data center spaces to other building spaces)
(Pega aquí el contenido correspondiente de las guias 1 y 2)

4.3 Niveles (Tiering)
(Pega aquí el contenido correspondiente de las guias 1 y 2)

4.4 Consideración para la participación de profesionales (Consideration for involvement of professionals)
(Pega aquí el contenido correspondiente de las guias 1 y 2)

**5. INFRAESTRUCTURA DEL SISTEMA DE CABLEADO DEL CENTRO DE DATOS (DATA CENTER CABLING SYSTEM INFRASTRUCTURE)**
(Pega aquí el contenido correspondiente de las guias 1 y 2)

**6. ESPACIOS DE TELECOMUNICACIONES DEL CENTRO DE DATOS Y TOPOLOGÍAS RELACIONADAS (DATA CENTER TELECOMMUNICATIONS SPACES AND RELATED TOPOLOGIES)**

6.1 General
(Pega aquí el contenido correspondiente de las guias 1 y 2)

6.2 Estructura del centro de datos (Data center structure)
(Pega aquí el contenido correspondiente de las guias 1 y 2)

6.3 Diseño de eficiencia energética (Energy efficient design)
(Pega aquí el contenido correspondiente de las guias 1 y 2)

6.4 Requisitos de la sala de ordenadores (Computer room requirements)
(Pega aquí el contenido correspondiente de las guias 1 y 2)

6.5 Requisitos de la sala de entrada (Entrance room requirements)
(Pega aquí el contenido correspondiente de las guias 1 y 2)

6.6 Área de distribución principal (Main distribution area)
(Pega aquí el contenido correspondiente de las guias 1 y 2)

6.7 Área de distribución intermedia (Intermediate distribution area)
(Pega aquí el contenido correspondiente de las guias 1 y 2)

6.8 Área de distribución horizontal (Horizontal distribution area)
(Pega aquí el contenido correspondiente de las guias 1 y 2)

6.9 Área de distribución de zona (Zone distribution area)
(Pega aquí el contenido correspondiente de las guias 1 y 2)

6.10 Áreas de distribución de equipos (Equipment distribution areas)
(Pega aquí el contenido correspondiente de las guias 1 y 2)

6.11 Sala de telecomunicaciones (Telecommunications room)
(Pega aquí el contenido correspondiente de las guias 1 y 2)

6.12 Áreas de soporte del centro de datos (Data center support areas)
(Pega aquí el contenido correspondiente de las guias 1 y 2)

6.13 Gabinetes y racks (Cabinets and racks)
(Pega aquí el contenido correspondiente de las guias 1 y 2)

**7. SISTEMAS DE CABLEADO DEL CENTRO DE DATOS (DATA CENTER CABLING SYSTEMS)**

7.1 General
(Pega aquí el contenido correspondiente de las guias 1 y 2)

7.2 Elección de medios (Choosing media)
(Pega aquí el contenido correspondiente de las guias 1 y 2)

7.3 Cableado horizontal (Horizontal Cabling)
(Pega aquí el contenido correspondiente de las guias 1 y 2)

7.4 Cableado de backbone (Backbone cabling)
(Pega aquí el contenido correspondiente de las guias 1 y 2)

7.5 Cableado de fibra óptica centralizado (Centralized optical fiber cabling)
(Pega aquí el contenido correspondiente de las guias 1 y 2)

7.6 Rendimiento de transmisión de cableado y requisitos de prueba (Cabling transmission performance and test requirements)
(Pega aquí el contenido correspondiente de las guias 1 y 2)

**8. TRAYECTORIAS DE CABLEADO DEL CENTRO DE DATOS (DATA CENTER CABLING PATHWAYS)**

8.1 General
(Pega aquí el contenido correspondiente de las guias 1 y 2)

8.2 Seguridad para el cableado del centro de datos (Security for data center cabling)
(Pega aquí el contenido correspondiente de las guias 1 y 2)

8.3 Separación de cables de alimentación y telecomunicaciones (Separation of power and telecommunications cables)
(Pega aquí el contenido correspondiente de las guias 1 y 2)

8.4 Trayectorias de entrada de telecomunicaciones (Telecommunications entrance pathways)
(Pega aquí el contenido correspondiente de las guias 1 y 2)

8.5 Sistemas de piso de acceso (Access floor systems)
(Pega aquí el contenido correspondiente de las guias 1 y 2)

8.6 Bandejas de cables elevadas (Overhead cable trays)
(Pega aquí el contenido correspondiente de las guias 1 y 2)

**9. REDUNDANCIA DEL CENTRO DE DATOS (DATA CENTER REDUNDANCY)**

9.1 Introducción
(Pega aquí el contenido correspondiente de las guias 1 y 2)

9.2 Orificios de mantenimiento y trayectorias de entrada redundantes (Redundant maintenance holes and entrance pathways)
(Pega aquí el contenido correspondiente de las guias 1 y 2)

9.3 Servicios redundantes del proveedor de acceso (Redundant access provider services)
(Pega aquí el contenido correspondiente de las guias 1 y 2)

9.4 Sala de entrada redundante (Redundant entrance room)
(Pega aquí el contenido correspondiente de las guias 1 y 2)

9.5 Área de distribución principal redundante (Redundant main distribution area)
(Pega aquí el contenido correspondiente de las guias 1 y 2)

9.6 Cableado de backbone redundante (Redundant backbone cabling)
(Pega aquí el contenido correspondiente de las guias 1 y 2)

9.7 Cableado horizontal redundante (Redundant horizontal cabling)
(Pega aquí el contenido correspondiente de las guias 1 y 2)

**10. XaaS (Infraestructura como Servicio) y Data Centers Virtuales (Secciones Nuevas)**

10.1. El Cuadrante Mágico de Gartner
(Pega aquí el contenido correspondiente de las guias 1 y 2)

10.2. Infraestructura como Servicio (XaaS)
(Pega aquí el contenido correspondiente de las guias 1 y 2)

10.3. Diseño e Implementación de Data Centers Virtuales
(Pega aquí el contenido correspondiente de las guias 1 y 2)

10.4. Software de Monitoreo para Infraestructura de Data Centers
(Pega aquí el contenido correspondiente de las guias 1 y 2)

**ANNEX A (INFORMATIVE) CABLING DESIGN CONSIDERATIONS**
(Pega aquí el contenido correspondiente de las guias 1 y 2)

**ANNEX B (INFORMATIVE) ACCESS PROVIDER INFORMATION**
(Pega aquí el contenido correspondiente de las guias 1 y 2)

**ANNEX C (INFORMATIVE) COORDINATION OF EQUIPMENT PLANS WITH OTHER ENGINEERS**
(Pega aquí el contenido correspondiente de las guias 1 y 2)

**ANNEX D (INFORMATIVE) DATA CENTER SPACE CONSIDERATIONS**
(Pega aquí el contenido correspondiente de las guias 1 y 2)

**ANNEX E (INFORMATIVE) DATA CENTER SITE SELECTION AND BUILDING DESIGN CONSIDERATIONS**
(Pega aquí el contenido correspondiente de las guias 1 y 2)

**ANNEX G (INFORMATIVE) DATA CENTER DESIGN EXAMPLES**
(Pega aquí el contenido correspondiente de las guias 1 y 2)

**ANNEX H (INFORMATIVE) BIBLIOGRAPHY**
(Pega aquí el contenido correspondiente de las guias 1 y 2)