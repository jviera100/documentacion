## Taller de Cableado y Data Center

### 1. Introducción a Data Centers y Estándares

*   ¿Qué es un Data Center? Definición y Componentes.
*   Importancia de los Data Centers en la Infraestructura Tecnológica Actual.
*   **Estándares ANSI/TIA-942:** Clasificación, Criterios, Normas, **versión 2017 (instalaciones)**

### 2. Fundamentos de los Estándares ANSI/TIA-942

*   **¿Qué es un Estándar?**
    *   Definición (ISO): Acuerdos documentados con especificaciones técnicas, reglas, guías, definiciones para asegurar el cumplimiento de materiales, productos, procesos y servicios.
    *   En Telecomunicaciones: Normas y recomendaciones técnicas que regulan la transmisión en los sistemas de comunicaciones. Deben estar documentados.
*   **¿Qué es Criterio?**
         Regla o norma conforme a la cual se establece un juicio o se toma una determinación:
              1.Regla o norma conforme a la cual se establece un juicio o se toma una determinación: Ej.
                    “El ascenso se otorgará de acuerdo con el criterio de antigüedad en la
                             empresa”.
              2. Opinión, juicio o decisión que se adopta sobre una cosa: Ej.
                  “Según el criterio del árbitro, no hubo falta en la jugada”.
              3. Capacidad para adoptar esta opinión, juicio o decisión: Ej.
                   “No entiendo de leyes y carezco de criterio para juzgar el caso”.

*   **¿Criterio Estándar?:** Deberá (obligación) o Debería (sugerido).

*   **Tipos de Estándares:**
    *   **De Facto:** Alta aceptación pero no oficiales (penetración en el mercado).
    *   **De Jure:** Definidos por organizaciones oficiales (ITU, OSI, ANSI); desarrollados con contribuciones de múltiples áreas del conocimiento.
        *   *Diferencias con "De Facto":* son promulgados por grupos de gente de diferentes aéreas del conocimiento que contribuye con ideas, recursos, y otros elementos para ayudar al desarrollo y definición de un estándar especifico.
    *   **Propietarios:** Propiedad absoluta de una corporación, uso limitado. Se usa este esquema para "atar" al cliente a sus productos.

*   **¿Criterios de Especificación?:**

            Dos categorías de criterios se especifican; obligatoria y de asesoramiento. Los
        requisitos obligatorios son designados por la palabra “deberá”; requisitos de
       asesoramiento son designados por las palabras “debería”, “puede” o “deseable” que se
        utilizan indistintamente en la presente Norma.

                * Criterios obligatorios se aplican generalmente a la protección, el rendimiento, la administración y compatibilidad; que especifican los requisitos mínimos aceptables absolutos. 
                * Criterios de asesoramiento o deseables se presentan cuando su consecución mejorará el rendimiento general del sistema de cableado en todas sus aplicaciones contempladas.

*   **Organismos de Estándares:**
    *   Organizaciones Oficiales: Integrados por consultores independientes y representantes gubernamentales. Ejemplos: ITU, NEC, ANSI, EIA, TIA.
        
    *   Consorcios.
    *   Fabricantes.
        
*   **Organizaciones Oficiales clave**
    *   **ITU (Unión Internacional de Telecomunicaciones):** Desarrolla estándares para telefonía, telegrafía, interfaces, redes. La ITU-T migra desde la más conocida CCITT.
    *   **NEC (National Electric Code):** Estándar de seguridad para infraestructura, define prácticas de instalación eléctrica. Se conoce como ANSI/NFPA-70.
    *   **ANSI (American National Standards Institute):** Coordina la estandarización voluntaria en el sector privado de EE.UU.
    *   **EIA (Electronics Industry Association):** Desarrolla normas para componentes electrónicos, electrónica del consumidor, información electrónica y telecomunicaciones.
    *   **TIA (Telecommunications Industry Association):** Desarrolla normas de cableado industrial voluntario.
*   **Versiones del Estándar ANSI/TIA-942:**
    *   Original (2005), Mejoras (2012), Vigente (2017).
    *   ANSI/TIA-942-A (Agosto 2012): Telecommunications Infrastructure Standard for Data Centers (ANSI/TIA-942-A-2012 APROBADO: AGOSTO 2, 2012)
    *   El estándar ANSI/TIA-942-A reemplaza a ANSI/TIA-942 (Abril 2005) y sus adendas, incorporando su contenido técnico.
        
        
*   **Aprobación de la Norma ANSI/TIA-942-A:**
    *   Aprobada por el Subcomité TR 42.2 de la TIA, el Comité TR 42.2 de Ingeniería Técnica de TIA y el ANSI. Se revisa cada 5 años.
*    **Relación con Otros Estándares TIA:**
        * ANSI/TIA-568-C.0, Generic Telecommunications Cabling for Customer Premises
        * ANSI/TIA-568-C.1, Commercial Building Telecommunications Cabling Standard
        * ANSI/TIA-568-C.2, Balanced Twisted-Pair Cabling and Components
        * ANSI/TIA-568-C.3, Optical Fiber Cabling Components Standard
        * ANSI/TIA-569-C, Telecommunications Pathways and Spaces
        * ANSI/TIA-606-B, Administration Standard for Telecommunications Infrastructure
        * ANSI/TIA-607-B, Telecommunications Bonding and Grounding (Earthing) for Customer Premises
        * ANSI/TIA-758-B, Customer-Owned Outside Plant Telecommunications Infrastructure Standard

*   **Propósito y Alcance del Estándar:**
    *   Requisitos y directrices para el diseño e instalación de Data Centers.
    *   Infraestructura de telecomunicaciones para Data Centers de cualquier tamaño.
    *   Considera el diseño desde las primeras etapas de la construcción.
*   **Definición de Términos Clave:** Incluir definición del estándar (2.2 Definición de términos).

### 3. Componentes Clave de la Infraestructura de un Data Center

Un Data Center se puede dividir en 4 grandes categorías de infraestructura:

#### 3.1. Infraestructura de Soporte y Espacios Físicos (Estructura del edificio)

*   **Piso Técnico (Raised Floor):** Superficie elevada para ocultar cables y distribuir aire.
*   **Pasillos Fríos y Calientes:** Separación térmica en la disposición de racks.
*   **Shafts (Conductos cerrados):**
        *Conducto vertical (ducto vertical o pasillo técnico)*
            Sistemas entrenamiento (piso acceso)
             elavadornes o monta Cargas
        * Pueden ser para cables, sistemas de enfriamiento, u otros servicios.
*   **Elevadores y Montacargas:** Para mover equipos pesados dentro del Data Center.

    *Ejemplo:* El piso técnico puede actuar como un shaft horizontal si se usa para enfriamiento.

#### 3.2. Infraestructura de Cableado y Distribución de Energía (Soportes para cables)

*   **Cable Tray (Bandejas Portacables):** Estructuras abiertas para organizar cables de red o energía.
*   **Overhead Cabling (Cableado Aéreo):** Cables suspendidos en racks sobre los servidores.
*   **Power Distribution Units (PDU):** Regletas que distribuyen energía a los racks.
*   * Soportes cableados
   * Sistema distribucion de Aine

    *Diferencia Clave:*

    *   Cable Tray y Overhead son solo formas de organizar los cables.
    *   Shafts son conductos cerrados que protegen y transportan cables dentro del edificio.

#### 3.3. Infraestructura de Equipos Tecnológicos (Dónde van los servidores)

*   **Racks:** Estructuras metálicas donde se instalan servidores y switches.
            *  Sala de en dehadones = sala de RACK
            *  distancia entre RACK 60CM -80CM (anden = distancia entre rack y muro)
*   **Cabinas de almacenamiento:** Equipos dedicados a almacenar datos a gran escala.
*   **Switches y Routers:** Equipos de red que gestionan el tráfico de datos.

    *Diferencia Clave:*

    *   Los racks son el lugar físico donde se montan los servidores.
    *   Los cables de datos y energía llegan a los racks desde los cable trays o overhead cabling.

#### 3.4. Infraestructura de Climatización y Seguridad (Enfriamiento y protección)

*   **CRAC / CRAH (Unidades de Enfriamiento):** Equipos que generan aire frío.
*   **Raised Floor (Piso Técnico):** Se usa para distribuir aire frío debajo de los racks.
*   **Sistemas de Supresión de Incendios:** Rociadores especiales o gas inerte.

    *Diferencia Clave:*

    *   El enfriamiento puede ser por piso técnico o ductos overhead.
    *   El shaft puede usarse para distribuir aire, pero no siempre lo hace.
 

### 4. Electricidad en el Data Center


*   **Fuentes de Energía:**
    * UPS = Fuente de Alimentacion interrupida (bateria externa) y Proteccion Fluctuaciones de Voltaje
    *   Aterramiento: Conexión a tierra para seguridad y rendimiento.
    *   Generadores: Respaldo en caso de fallas de energía.
        * Motor diésel Cat®
              • Diseñado y optimizado para un bajo consumo de combustible.
              • Rendimiento confiable probado en miles de aplicaciones en todo el mundo
           * Conjunto de Grupos generadores
              • Acepta el 100% de carga en bloque en un solo paso y cumple con otros requisitos
                   de carga NFPA 110.
             • Cumple requisitos con la norma ISO 8528-5 G3.
            • Confiabilidad verificada mediante vibración torsional, consumo de combustible,
                 consumo de aceite, rendimiento transitorio y pruebas de resistencia.
     
Fuente : <https://cgcweb.cl/pages/generadores-electricos>*
    *   UPS (Uninterruptible Power Supply): Alimentación continua para evitar interrupciones.

        
           *  Battery Type: VRLA (batería de ácido-plomo regulada por válvula).
            * Typical Recharge Time: 3 hour(s).
            * Replacement Battery: RBC55.
            * RBC Quantity: 2.
            * Typical Backup Time at Half Load: 26.7 minutes (2000 Watts).
            * Typical Backup Time at Full Load: 9.4 minutes (4000 Watts).
           * Runtime Chart: Smart-UPS.
        
      Smart-UPS RT de APC, 20 kVA y 230 V, para rack
             Fuente:*
         
              Micro Data Center 43 U
            <https://www.youtube.com/watch?v=uRjDRua94sM>
        
           Fuente : Data Sheet de marca APC capacidad de 5KVA
           
            Fuente : Data Sheet de marca APC capacidad de 5KVA*
         
              Fuente : <https://www.kolff-e.com/>
<https://www.youtube.com/watch?v=EqEyDEMp0mM&t=2s>*
*   **Emisiones de Equipos:** Control del ruido electromagnético.
        
               Recorrido Virtual Datacenter Control Ambiental
                <https://www.youtube.com/watch?v=2qneyAAIoEo>
    *Protección contra incendios:* Cumplir con NFPA-75 para sistemas de protección y extintores. Usar sistemas de acción previa para rociadores.
    *Conexión y puesta a tierra:* Cumplir con ANSI / TIA-607-B para conexión y tierra de salas, gabinetes y racks.
    *Poder Eléctrico:* Circuitos separados a paneles eléctricos propios, tomacorrientes dúplex (120 V 20 A) separados en PDU/paneles diferentes a los de equipos.

### 5. Control de Temperatura y Humedad

*    Rango Temperatura: 18°-27°C Humedad: 40%-60%

*   Importancia de mantener condiciones óptimas.
*   Parámetros Operacionales:
    *   Temperatura de bulbo seco: 20 °C a 25 °C.
    *   Humedad relativa: 40% a 55%.
    *   Máxima Rocío: 21 °C.
    *   Velocidad de cambio: 5 °C/Hr.
  Requerimientos de temperatura y humedad para
              espacios de telecomunicaciones.
             Fuente : ANSI/TIA-569-C pp.14*

*   El enrutamiento del cableado de
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
Ejemplos de cables de enrutamiento y contención del flujo de aire
Fuentes :Estándar ANSI/TIA-942-A , pp. 20*
Piso de Acceso = Shaft Horizontal

### 6. Arquitectura Lógica de un Data Center

*   **Capas de la Red y Jerarquía de Colores para Cables:**
        * Switch Núcleo (Core): cable Blanco = datos. Alta velocidad y capacidad.
        * Switch Distribución: cable Gris = datos. (entre 8 a 16 bocas y puerta de entrada) Agregación del tráfico.
        * Switch Acceso: cable Azul = datos. (entre 1 a 24 bocas y 2 puerta de entrada) Conexión a los servidores.(racks)
        * Voz : cable ROJO
        * Miscelaneo: cable Amarillo (alarmas / CCTVCamaras seguridad)
        * COC - Centro Operación Control
        * NOC - Centro Operacion red
*   **Switches:**
    *   Definición y función de switches en cada capa.
    *   Los switches tienen "bocas" (puertos) y una "puerta de entrada" (interfaz de administración).
*   **Diseño de Aterramiento:**
      * Preparación de cancha, Aterramientos pilar, Aterramientos base de piso falso, Aterramientos PDU, TGD (Talero general de distribución), Alcance de la norma (JSTD-607-A).
          
*   **Cableado Horizontal:** Top-of-Rack (ToR) vs End-of-Row (EoR).
*   *   **Organización del Cableado:**
    *   Utilizar organizadores verticales y horizontales para mantener el cableado ordenado.
    *   **RACK con velcro ✓ NO Amarras Plásticas ✗**
*   **Ancho de Banda y Espacio:** Andén ancho de 80 cm (estándar) para facilitar el movimiento y mantenimiento.
*   **Latencia:**
          * Sobre 10ms
               * Sobne 10MS satelital.
               *Fibra optica entre 1as y 65ms
    *   Fibra óptica vs Satélite: Ventajas de la fibra óptica en términos de latencia: menor, mayor velocidad y ancho de banda, retransmisiones terrestres directas (sin el viaje al espacio).
*   **Tecnología de la Fibra Óptica:** Transmisión de datos mediante pulsos de luz a través de hilos delgados de vidrio o plástico, la luz se refleja internamente (reflexión interna total) manteniendo la señal y transmitiendo a grandes distancias con poca pérdida.
* *DNS = Agenda de IP y Nombre de Dominio*

*  *ICANN = Institución administra IP*
*  *Coc = Centro Operación Conhtno*
*  *NOC = Centro Operacion red*

### 7. Infraestructura como Servicio (IaaS)

*   **CaaS (Communication as a Service):** Ofrecer al cliente la capacidad de interacción y colaboración en tiempo real.
*   **BDaaS (Database as a Service):** Servicios de big data a través de la computación en nube.
*   **NaaS (Network as a Service):** Configurar, mantener y liberar la conectividad de la red como un servicio en la nube.
*   **IaaS (Infraestructure as a Service):** Capacidades de computación, almacenamiento y red para ejecutar aplicaciones.
*   **PaaS (Platform as a Service):** Ofrecer capacidades de tipo plataforma.
*   **SaaS (Software as a Service):** Ofrecer capacidades de tipo aplicación.

### 8. Diseño e Implementación de Data Centers Virtuales

*   **¿Qué es la Virtualización?** Crear servicios de TI útiles mediante recursos que normalmente se ejecutan en el hardware.
*   **Herramientas de Virtualización:** Cisco Workload Optimization Manager, Schneider Electric EcoStruxure IT Expert, VMware vSphere 6.5, ManageEngine OpManager 12.3.
*   **Problemas de Interconexión de Redes en la Computación en la Nube:** Coordinación de la virtualización, control de tecnologías de red heterogéneas, reconfiguración a la demanda.
*   **Conceptos de Diseño e Implementación de un Data Center Virtual:**
          *Definir metas y objetivos.
           *Alcance del proyecto.
           *Roles y responsabilidad
         *Matriz de responsabilidad


*   **Control y Ejecución del Proyecto:**
            *  Enfoque de Planificación: Se exploran aspectos de alcance, tiempo, costo, calidad, comunicaciones, recursos humanos, riesgos, adquisiciones y participación.

            “Elementos de Control del proyecto”:
               * Comunicaciones
                *Calidad Alcance
                *Planificación
                 *Finanzas Riesgo
               * Contrato
                *Recursos
        

    * **Conceptos de Implementación:**
           *Visibilidad y control sobre aplicaciones personalizadas del centro de datos.
               * Manejar flujos de tráfico asimétricos y transacciones de aplicaciones entre dispositivos y centros de datos.
                  *Adaptarse a medida que los centros de datos evolucionan :
                  *Abordar toda la secuencia del ataque: antes, durante y después de este.
            * Proteger la totalidad de la red:

*  **Aspectos importantes**

           *  Lo que las organizaciones requieren es un equipo estrella, no un equipo de estrellas.
            *  Debes saber que controlas y a quien.
            * Los riegos son parte del Control.
            * Los indicadores te hablan , escúchalos.
            *  Debes actuar rápido, si tienes duda consultar al equipo.

#### 8.1 Cerficacion y Cierre

* **Certificación**
               * ¿Qué es certificar?
                * ¿Qué certifico?
                  * ¿Como Certifico?
                    * ¿Cuándo Certifico?
                    * ¿Poque Certifico?
 *Plan de Cierre “Propósito”*
   *      “Formalizar la aceptación del Proyecto”
                   * Realizar el Cierre Administrativo (Internos y Externos)
                  * Completando los requerimientos y entregables (Todos).
 *”LECCIONES APRENDÍDAS”*
                    * ¿Qué fue bien hecho? y ¿Qué no se hizo?.
                     * Registra par futuros proyectos.
                  * Realizar una encuesta sobre el desempeño del equipo.
                   * Realizar métricas con datos objetivos.
                                  Alcance
                                   *Costos
                                 *Plazo
                                 * Calidad
Diagrama de Flujo de Datos de Cerrar el Proyecto o Fase
Fuente: Fundamentos para la dirección de proyectos PMBOK6ta Edición*

### 9. Software de Monitoreo para Infraestructura de Data Centers

*   **Herramientas:** IO.AR, ManageEngine OpManager, Quest Big Brother (DELL), Schneider Electric StruxureWare Operations
   **Opciones de Monitoreo:** Respaldo de energía, Aire en rack, Pantallazo de reporte de energia


### 10. Consideraciones de Tiering en el Diseño del Data Center


*  *  Alcance la norma para grandes edificios. Estándar JSTD-607-A , pp. 6-7*
*   **Criterios para niveles TIER 1, TIER 2, TIER 3 y TIER 4:** Secciones del ANSI-TIA 942 que aplican por Nivel (telecomunicaciones, arquitectural, eléctrica, mecánica).
    * **Criterios:** DEBERÁ (obligación) o DEBERÍA (sugerido)
        *   *Consideraciones sobre Criterios:* los criterios obligatorios se aplican generalmente a la protección, el rendimiento, la administración y compatibilidad; que especifican los requisitos mínimos aceptables absolutos. criterios de asesoramiento o deseables se presentan cuando su consecución mejorará el rendimiento general del sistema de cableado en todas sus aplicaciones contempladas.
              

### 11. Lista de referencias de la norma y videos


* *Bibliografia de apoyo*
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
             <https://www.youtube.com/watch