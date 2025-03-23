## Taller de Cableado y Data Center

### 1. Introducción a Data Centers y Estándares

*   ¿Qué es un Data Center? Definición y Componentes.
*   Importancia de los Data Centers en la Infraestructura Tecnológica Actual.
*   **Estándares ANSI/TIA-942:** Clasificación, Criterios, Normas.

### 2. Fundamentos de los Estándares ANSI/TIA-942

*   **¿Qué es un Estándar?**
    *   Definición según ISO: acuerdos documentados con especificaciones técnicas.
    *   Regulan la transmisión en sistemas de comunicación.
*   **Tipos de Estándares:**
    *   **De Facto:** Alta aceptación pero no oficiales.
    *   **De Jure:** Definidos por organizaciones oficiales (ITU, OSI, ANSI).
    *   **Propietarios:** Propiedad de una corporación.
*   **Organismos de Estándares:**
    *   Organizaciones Oficiales: ITU, NEC, ANSI, EIA, TIA.
    *   Consorcios.
    *   Fabricantes.
*   **Versiones del Estándar ANSI/TIA-942:**
    *   Original (2005), Mejoras (2012), Vigente (2017).
*   **Propósito y Alcance del Estándar:**
    *   Requisitos y directrices para el diseño e instalación de Data Centers.
    *   Infraestructura de telecomunicaciones para Data Centers de cualquier tamaño.
*   **Especificación de Criterios:**
    *   **Deberá (Obligación):** Requisitos mínimos aceptables.
    *   **Debería (Sugerido):** Mejoran el rendimiento general.

### 3. Componentes Clave de la Infraestructura de un Data Center

Un Data Center se puede dividir en 4 grandes categorías de infraestructura:

#### 3.1. Infraestructura de Soporte y Espacios Físicos (Estructura del edificio)

*   **Piso Técnico (Raised Floor):**
    *   Superficie elevada para ocultar cables y distribuir aire.
*   **Pasillos Fríos y Calientes:**
    *   Separación térmica en la disposición de racks.
*   **Shafts:**
    *   Conductos verticales u horizontales para cables, aire acondicionado o tuberías.
*   **Elevadores y Montacargas:**
    *   Para mover equipos pesados dentro del Data Center.

    Ejemplo: El piso técnico puede actuar como un shaft horizontal si se usa para enfriamiento.

#### 3.2. Infraestructura de Cableado y Distribución de Energía (Soportes para cables)

*   **Cable Tray (Bandejas Portacables):**
    *   Estructuras abiertas para organizar cables de red o energía.
*   **Overhead Cabling (Cableado Aéreo):**
    *   Cables suspendidos en racks sobre los servidores.
*   **Power Distribution Units (PDU):**
    *   Regletas que distribuyen energía a los racks.

    Diferencia clave:

    *   Cable Tray y Overhead son solo formas de organizar los cables.
    *   Shafts son conductos cerrados que protegen y transportan cables dentro del edificio.

#### 3.3. Infraestructura de Equipos Tecnológicos (Dónde van los servidores)

*   **Racks:**
    *   Estructuras metálicas donde se instalan servidores y switches.
*   **Cabinas de almacenamiento:**
    *   Equipos dedicados a almacenar datos a gran escala.
*   **Switches y Routers:**
    *   Equipos de red que gestionan el tráfico de datos.

    Diferencia clave:

    *   Los racks son el lugar físico donde se montan los servidores.
    *   Los cables de datos y energía llegan a los racks desde los cable trays o overhead cabling.

#### 3.4. Infraestructura de Climatización y Seguridad (Enfriamiento y protección)

*   **CRAC / CRAH (Unidades de Enfriamiento):**
    *   Equipos que generan aire frío.
*   **Raised Floor (Piso Técnico):**
    *   Se usa para distribuir aire frío debajo de los racks.
*   **Sistemas de Supresión de Incendios:**
    *   Rociadores especiales o gas inerte.

    Diferencia clave:

    *   El enfriamiento puede ser por piso elevado (raised floor) o ductos overhead.
    *   El shaft puede usarse para distribuir aire, pero no siempre lo hace.

### 4. Buenas Prácticas y Diseño de Cableado en Racks

*   **Organización del Cableado:**
    *   Utilizar organizadores verticales y horizontales para mantener el cableado ordenado.
    *   Evitar el uso de amarras plásticas; preferir velcro para no dañar los cables.
*   **Ancho de Banda y Espacio:**
    *   Andén ancho de 80 cm para facilitar el movimiento y mantenimiento.
*   **Jerarquía de Colores para Cables:**
    *   Núcleo (Core): Azul
    *   Distribución: Rojo
    *   Acceso: Amarillo, Blanco y Gris
*   **Ejemplos Visuales:** (Imágenes de malas y buenas prácticas se incluirían aquí - descripción del contenido)
    *   Mala práctica: cables desorganizados, amarras plásticas ajustadas.
    *   Buena práctica: cables ordenados con velcro, rutas claras y accesibles.
*   **Diseño de Aterramiento:**
    *   Preparación de cancha
    *   Aterramientos
    *   Aterramientos pilar
    *   Aterramientos base de piso falso
    *   Aterramientos PDU
    *   TGD: Talero general de distribución
    *   Alcance de la norma para grandes edificios. Estándar JSTD-607-A , pp. 6-7

### 5. Electricidad en el Data Center

*   **Fuentes de Energía:**
    *   Aterramiento: conexión a tierra para seguridad y rendimiento.
    *   Generadores: respaldo en caso de fallas de energía.
    *   UPS (Uninterruptible Power Supply): alimentación continua para evitar interrupciones.
*   **Aterramiento:**
    *   Aterramientos pilar
    *   Aterramientos base de piso falso
    *   Aterramientos PDU

#### Características UPS

*   Battery Type : VRLA (batería de ácido-plomo regulada por válvula)
*   Typical recharge time : 3 hour(s)
*   Replacement Battery : RBC55
*   RBC Quantity : 2
*   Typical Backup Timeat Half Load : 26.7 minutes (2000 Watts)
*   Typical Backup Timeat Full Load: 9.4 minutes (4000 Watts)
*   Runtime Chart : Smart-UPS

*   **Emisiones de Equipos:** Control del ruido electromagnético.

####  Protección contra incendios:

*   Los sistemas de protección contra incendios y los extintores portátiles deben cumplir con la NFPA-75. Los sistemas de rociadores en las salas de computación deben ser sistemas de acción previa.

####  Conexión y puesta a tierra (conexión a tierra):

*   Consulte ANSI / TIA-607-B para conocer los requisitos de conexión y conexión a tierra para salas de computadoras, gabinetes de equipos y racks.

####  Poder Eléctrico:

*   Los circuitos de suministro separados que sirven a la computadora se proporcionarán y terminarán en su propio panel o paneles eléctricos. La sala de computadoras debe tener tomacorrientes dúplex (120 V 20 A) para herramientas eléctricas, equipos de limpieza y equipos que no sean adecuados para enchufarlos en las regletas de alimentación del gabinete del equipo. Los tomacorrientes no deben estar en las mismas unidades de distribución de energía (PDU) o paneles eléctricos que los circuitos eléctricos utilizados para los equipos de telecomunicaciones y computadoras en la habitación. Los tomacorrientes deben estar separados a una distancia de 3,65 m (12 pies) a lo largo de las paredes de la sala de computadoras, o más cerca si así lo especifican las ordenanzas locales, y se puede alcanzar mediante un cable de 4,5 m (15 pies) (según los Artículos 210 y 645 de NEC).

### 6. Control de Temperatura y Humedad

*   Importancia de mantener condiciones óptimas.
*   Parámetros Operacionales:
    *   Temperatura de bulbo seco: 20 °C a 25 °C.
    *   Humedad relativa: 40% a 55%.
    *   Máxima Rocío: 21 °C.
    *   Máx. velocidad de cambio: 5 °C/Hr.
*   Monitoreo y control del sistema de refrigeración.
El enrutamiento del cableado de

telecomunicaciones dentro de los

gabinetes, racks y otros sistemas

de gabinetes no debe obstaculizar

el enfriamiento adecuado del

equipo dentro de los gabinetes

(por ejemplo, evitar el

enrutamiento del cableado frente a

los respiraderos). Se debe

mantener un flujo de aire

suficiente según lo requiera el

fabricante del equipo.

### 7. Arquitectura Lógica de un Data Center

*   **Capas de la Red:**
    *   Núcleo (Core): Alta velocidad y capacidad.
    *   Distribución: Agregación del tráfico.
    *   Acceso: Conexión a los servidores.
*   **Switches:**
    *   Definición y función de switches en cada capa.
    *   Switches tienen bocas y una puerta de entrada
*   **Cableado Horizontal:** Top-of-Rack (ToR) vs End-of-Row (EoR).
*   **Latencia:**
    *   Fibra óptica vs Satélite: ventajas de la fibra óptica en términos de latencia.

        * La latencia en fibra optica es mucho menor que la del Satelite

        *La luz viaja por la fibra optica con una velocidad considerablemente superior a la que puede viajar la señal de un satelite.
        *Fibra utiliza retransmisiones terrestres directas, mientras que el satélite implica un viaje ida y vuelta al espacio, lo que añade un retraso considerable.
        *La fibra optica ofrece mayor ancho de banda y por lo tanto una menor latencia que la comunicacion satelital.
*   **Tecnología de la Fibra Óptica:**
    *   Cómo funciona la transmisión de datos por luz.

        * La fibra optica funciona mediante la transmisión de pulsos de luz a traves de hilos delgados de vidrio o plastico. Cuando la luz entra en la fibra, se refleja internamente (reflexión interna total) manteniendo la señal luminica confinada dentro del hilo y permitiendo que se transmita a grandes distancias con muy poca perdida de señal.

### 8. Infraestructura como Servicio (IaaS)

*   **CaaS (Communication as a Service):**
    *   Ofrecer al cliente la capacidad de interacción y colaboración en tiempo real.
*   **BDaaS (Database as a Service):**
    *   Servicios de big data a través de la computación en nube.
*   **NaaS (Network as a Service):**
    *   Configurar, mantener y liberar la conectividad de la red como un servicio en la nube.
*   **IaaS (Infraestructure as a Service):**
    *   Capacidades de computación, almacenamiento y red para ejecutar aplicaciones.
*   **PaaS (Platform as a Service):**
    *   Ofrecer capacidades de tipo plataforma.
*   **SaaS (Software as a Service):**
    *   Ofrecer capacidades de tipo aplicación.

### 9. Diseño e Implementación de Data Centers Virtuales

*   **¿Qué es la Virtualización?**
    *   Crear servicios de TI útiles mediante recursos que normalmente se ejecutan en el hardware.
*   **Herramientas de Virtualización:**
    *   Cisco Workload Optimization Manager, Schneider Electric EcoStruxure IT Expert, VMware vSphere 6.5, ManageEngine OpManager 12.3.
*   **Problemas de Interconexión de Redes en la Computación en la Nube:**
    *   Coordinación de la virtualización.
    *   Control de tecnologías de red heterogéneas.
    *   Reconfiguración a la demanda.
*    **Diseño y Planificación Data Center Virtual**
    *Definir metas y objetivos.
    *Alcance del proyecto.
    *Roles y responsabilidad
    *Matriz de responsabilidad
*     **Control y Ejecución del Proyecto**
      * Entender, profundizar y aplicar los conceptos del proceso de Planificación

          * “Elementos de Control del proyecto”:
               * Comunicaciones
               * Calidad Alcance
               * Planificación
               * Finanzas Riesgo
               * Contrato
               * Recursos

*  **Conceptos de Implementación**

            • 1.-Brindar visibilidad y control sobre aplicaciones personalizadas del centro de datos.
               * No solo sobre aplicaciones web como Facebook y Twitter y micro aplicaciones relacionadas que los
                        dispositivos de seguridad del perímetro de Internet inspeccionan.
             • 2.-Manejar flujos de tráfico asimétricos y transacciones de aplicaciones entre dispositivos y centros de datos.
               *  La seguridad debe estar integrada en la estructura del centro de datos y no quedarse en el perímetro. Las
                  soluciones perimetrales no pueden inspeccionar ni el tráfico de entrada y salida, ni los flujos de tráfico entre
                  aplicaciones. Este último representa la mayor parte del tráfico del centro de datos de la actualidad. Si el
                  tráfico de aplicaciones se debe enviar del perímetro del centro de datos al firewall de última generación para
                  su inspección y, luego, se le debe redirigir a la capa de cómputo (en un bucle cerrado), la solución perjudica
                  el flujo de tráfico dinámico que los centros de datos modernos requieren.

            • 3.-Adaptarse a medida que los centros de datos evolucionan :
               * Los modelos SDN, tanto físicos como virtuales, y de última generación.
              • 4.-Abordar toda la secuencia del ataque: antes, durante y después de este.
              • 5.-Proteger la totalidad de la red:

*  **Aspectos importantes**
            *  Lo que las organizaciones requieren es un equipo estrella, no un equipo de estrellas.
            *  Debes saber que controlas y a quien.
            *  Los riegos son parte del Control.
            * Los indicadores te hablan , escúchalos.
            *  Debes actuar rápido, si tienes duda consultar al equipo.

* * **Certificación**
              * ¿Qué es certificar?
              * ¿Qué certifico?
              * ¿Como Certifico?
              * ¿Cuándo Certifico?
              * ¿Poque Certifico?

* **Cierre del Proyecto**

             *"Formalizar la aceptación del Proyecto”
               * Realizar el Cierre Administrativo (Internos y Externos)
               * Completando los requerimientos y entregables (Todos).
             *"LECCIONES APRENDÍAS”
             * ¿Qué fue bien hecho? y ¿Qué no se hizo?.
              * Registra par futuros proyectos.
              * Realizar una encuesta sobre el desempeño del equipo.
              * Realizar métricas con datos objetivos.
                         * Alcance
                         * Costos
                         * Plazo
                         * Calidad
             * Análisis de los resultados con altura de mira.

### 10. Software de Monitoreo para Infraestructura de Data Centers

*   **Herramientas:**
    *   IO.AR
    *   ManageEngine OpManager
    *    Quest Big Brother (DELL)
    *   Schneider Electric StruxureWare Operations
*    **Opciones de Monitoreo**
                 * Respaldo de energía
                       * Recopilación de datos para
                          simulación en tiempo real
                  *  Aire en rack
                  *  Pantallazo de reporte de energia

### 11. Consideraciones de Tiering en el Diseño del Data Center

*   **Criterios para niveles TIER 1, TIER 2, TIER 3 y TIER 4**.
*   Secciones del ANSI-TIA 942 que aplican por Nivel.
       * telecomunicaciones
               * arquitectural
              *  eléctrica
              *   mecánica
####  **Consideraciones sobre Criterios obligatorios se aplican generalmente a la protección, el rendimiento, la administración y compatibilidad; que especifican los requisitos mínimos aceptables absolutos. criterios de asesoramiento o deseables se presentan cuando su consecución mejorará el rendimiento general del sistema de cableado en todas sus aplicaciones contempladas.

### 12. Lista de referencias de la norma y videos

####   * **Bibliografía de apoyo**
     LOS 5 CENTROS DE DATOS MÁS GRANDES DEL MUNDO #BarraLibre
           <https://www.youtube.com/watch?v=E5hDY9W42lk>
     Elementos de un Datacenter
           <https://www.youtube.com/watch?v=-HX2c_zGRX4>
      How to build a data center in 2 minutes
         <https://www.youtube.com/watch?v=cXVteLWfzQg>
      MINI DATACENTERS || Todo el poder de un Data Center en UN SOLO RACK! ||
        <https://www.youtube.com/watch?v=hV6JKdKcdvk>
      Data Centre Visualisation
          <https://www.youtube.com/watch?v=knRPoZtJGaY>
         Vertiv 2023 Data Center Trends (Configuracion cambiar a Español Subtitulos)
            <https://www.youtube.com/watch?v=ZrDuKqibSX8>
        Micro Data Center 43 U
             <https://www.youtube.com/watch?v=uRjDRua94sM>
        Inside a Google data center
               <https://www.youtube.com/watch?v=XZmGGAbHqa0>
        Data Center Cooling - how are data centre cooled cold aisle containment hvacr
            <https://www.youtube.com/watch?v=vZkA0z9JRgw>
         Diseño e implementación de Datacenter - 2020
              <https://www.youtube.com/watch?v=Fkcp3q3kw1k>
       Cap.2 - Estándares y Normas: Conceptos, Diferencias y Tipos
         <https://www.youtube.com/watch?v=H6mBK5PU2pQ>
         Cap.1 - El Data Center: Definición, Componentes y Modelos de Negocio
             <https://www.youtube.com/watch?v=wS1ug_IzVZc>
           Data Center Tier lll SketchUp
              <https://www.youtube.com/watch?v=FbPx1jX11Yc>
         Tour 360º - #Datacenter Movistar
              <https://www.youtube.com/watch?v=LnxqE0XSaKU>
           Conoce un centro de datos de Facebook por dentro
             <https://www.youtube.com/watch?v=Ft9ce8vwwx0>
         Data Center Rebuild
          <https://www.youtube.com/watch?v=653PUAI0G8s>
       ¿Por qué Microsoft tiene Centros de Datos Submarinos?
              <https://www.youtube.com/watch?v=ZwPZXizvpqw>
         Data center submarinos: la información de Internet, guardada bajo el mar
              <https://www.youtube.com/watch?v=c8pcM3kaQOg>
         Cableado Estructurado en Vivo
             <https://www.youtube.com/watch?v=XL1WfksfHC4>
          Construcción de Canalizaciones ( REDES DE DATOS)
            <https://www.youtube.com/watch?v=NZmQ6IvCfgw>
            ¿Qué son los Racks en un Datacenter? | HostDime
            <https://www.youtube.com/watch?v=KqYuZMLp5cI>
         EcoStruxure IT: Coolin Optimize
          <https://www.youtube.com/watch?v=c1NXW4tU6to>
        Piso técnico del data center Nebula de HostDime
            <https://www.youtube.com/watch?v=XZYCgAmYscs>
         Kidde Fire Systems: sistemas de detección y extinción de incendios
             <https://www.youtube.com/watch?v=SjZKsKXL-hI>
          Tecnología Faragauss
              <https://www.youtube.com/watch?v=0i1vXolla0o>
              Los cables submarinos
               <https://www.youtube.com/watch?v=nMmKo6p38Io>

### 13. Cierre
*Consultas*