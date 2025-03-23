# **Taller de Cableado y Data Center (DC)**

# **1. Introducción a Data Centers y Estándares**

*   ¿Qué es un Data Center? Definición y Componentes.
*   Importancia de los Data Centers en la Infraestructura Tecnológica Actual.
*   **Estándares ANSI/TIA-942:** Clasificación, Criterios, Normas, **versión 2017 (instalaciones)**

# **2. Fundamentos de los Estándares ANSI/TIA-942**

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

*   **Tipos de Organismos de Estándares:**
*   **Organismos Oficiales:**
    *   Organizaciones Oficiales: Integrados por consultores independientes y representantes gubernamentales. Ejemplos: ITU, NEC, ANSI, EIA, TIA.
        
    *   Consorcios.
    *   Fabricantes.
        
*   **Organizaciones Oficiales clave**
    *   **ITU (Unión Internacional de Telecomunicaciones):** Desarrolla estándares para telefonía, telegrafía, interfaces, redes. La ITU-T migra desde la más conocida CCITT.
    *   **ANSI (American National Standards Institute):** Coordina la estandarización voluntaria en el sector privado de EE.UU.
    *   **EIA (Electronics Industry Association):** Desarrolla normas para componentes electrónicos, electrónica del consumidor, información electrónica y telecomunicaciones.
    *   **TIA (Telecommunications Industry Association):** Desarrolla normas de cableado industrial voluntario.
    *   **NEC (National Electric Code):** Estándar de seguridad para infraestructura, define prácticas de instalación eléctrica. Se conoce como ANSI/NFPA-70.
    *   **ISO (International Organization for Standardization):** Desarrolla estándares internacionales en una amplia gama de campos, incluyendo la gestión de la calidad, la seguridad y la sostenibilidad.
    *   **IEEE (Institute of Electrical and Electronics Engineers):** Desarrolla estándares en áreas como la ingeniería eléctrica, la electrónica, la informática y las telecomunicaciones.
    
    
    
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

# **3. Componentes Clave de la Infraestructura de un Data Center**  

La infraestructura de un Data Center se organiza en cuatro áreas principales:  

## **3.1. Espacios Físicos y Climatización**  
Define la estructura del edificio y la distribución térmica del equipo:  

- **Piso Técnico (Raised Floor):** También llamado *piso de acceso*, es una superficie elevada que oculta cableado y distribuye aire frío desde el sistema de climatización. Funciona como un **shaft horizontal** cuando se usa para enfriamiento.  
- **Shafts:** Conductos verticales u horizontales que albergan cableado, sistemas de ventilación u otros servicios.  
- **Zonificación térmica:** Distribución de racks en **pasillos fríos y calientes** para optimizar la disipación del calor.  
- **Accesos y transporte:** Elevadores y montacargas diseñados para mover equipos pesados.  

📌 *Nota:* El **piso técnico** y los **shafts** pueden formar parte del sistema de climatización dependiendo del diseño del Data Center.  

## **3.2. Cableado y Distribución de Energía**  
Estructuras que organizan y suministran conectividad eléctrica y de red:  

- **Bandejas portacables (Cable Tray):** Estructuras abiertas que soportan y organizan cables de datos y energía. No son racks móviles, pero permiten reconfigurar el cableado fácilmente.  
- **Cableado Aéreo (Overhead Cabling):** Alternativa al piso técnico donde los cables se montan sobre los racks.  
- **Unidades de distribución eléctrica (PDU):** Regletas que suministran energía a los equipos dentro de los racks.  

📌 *Nota:* Mientras que las **bandejas** y el **cableado aéreo** organizan cables, los **shafts** los transportan en espacios cerrados dentro del edificio.  

## **3.3. Equipos Tecnológicos**  
Infraestructura donde se instalan y operan los sistemas informáticos:  

- **Racks:** Estructuras metálicas donde se montan servidores, switches y otros dispositivos.  
- **Cabinas de almacenamiento:** Equipos dedicados al resguardo de grandes volúmenes de datos, no una habitación de racks.  
- **Switches y Routers:** Dispositivos encargados de gestionar el tráfico de red.  

📌 *Nota:* Los racks alojan los equipos, mientras que el cableado y la energía llegan a ellos desde las bandejas o el cableado aéreo.  

---

## **Respuestas a tus preguntas:**  
1. **¿Piso técnico es lo mismo que piso de acceso?** Sí, ambos términos se refieren a la superficie elevada que permite ocultar cableado y distribuir aire frío.  
2. **¿El piso técnico es un shaft horizontal?** Sí, si se usa para la distribución de aire o cableado.  
3. **¿Las bandejas son como racks móviles?** No, las bandejas portacables solo organizan el cableado y permiten cambios rápidos, pero no almacenan equipos como un rack.  
4. **¿Las cabinas de almacenamiento son habitaciones de racks?** No, son equipos diseñados específicamente para almacenar grandes volúmenes de datos, generalmente dentro de racks, no una sala completa.  

# **4. Electricidad en el Data Center**  

La infraestructura eléctrica en un Data Center garantiza la continuidad operativa, la seguridad y la eficiencia energética.  

## **4.1. Fuentes de Energía**  

- **UPS (Uninterruptible Power Supply):** Fuente de alimentación ininterrumpida que protege contra fluctuaciones de voltaje y cortes de energía.  
  - **Tipo de batería:** VRLA (batería de ácido-plomo regulada por válvula).  
  - **Tiempo típico de recarga:** 3 horas.  
  - **Batería de reemplazo:** RBC55 (cantidad: 2).  
  - **Tiempo de respaldo:**  
    - Carga media (2000 W): 26.7 minutos.  
    - Carga máxima (4000 W): 9.4 minutos.  
  - **Ejemplo:** Smart-UPS RT de APC, 20 kVA y 230 V para rack.  

  📌 *Fuente:* [Micro Data Center 43 U](https://www.youtube.com/watch?v=uRjDRua94sM), Data Sheet de marca APC (capacidad de 5KVA).  

- **Generadores de Respaldo:**  
  - **Motor diésel Cat®:**  
    - Optimizado para bajo consumo de combustible.  
    - Probado en diversas aplicaciones a nivel mundial.  
  - **Grupos generadores:**  
    - Acepta el 100% de carga en bloque en un solo paso (cumple NFPA 110).  
    - Cumple con la norma ISO 8528-5 G3.  
    - Verificación de confiabilidad mediante pruebas de vibración torsional, consumo de combustible, rendimiento transitorio y resistencia.  

  📌 *Fuente:* [CGC Web - Generadores Eléctricos](https://cgcweb.cl/pages/generadores-electricos).  

- **Aterramiento:** Conexión a tierra para mejorar seguridad y rendimiento.  

## **4.2. Protección y Normativas**  

- **Emisiones de Equipos:** Control del ruido electromagnético.  
  📌 *Fuente:* [Recorrido Virtual Datacenter - Control Ambiental](https://www.youtube.com/watch?v=2qneyAAIoEo).  

- **Protección contra Incendios:**  
  - Cumplir con **NFPA-75** para sistemas de protección y extintores.  
  - Uso de sistemas de acción previa en rociadores para evitar daños en los equipos.  

- **Conexión y Puesta a Tierra:**  
  - Cumplimiento de **ANSI/TIA-607-B** para conexión y tierra en salas, gabinetes y racks.  

- **Distribución de Energía:**  
  - Circuitos eléctricos independientes con paneles exclusivos.  
  - Uso de tomacorrientes dúplex (120 V, 20 A) separados en PDU/paneles distintos para aislar la alimentación de los equipos.  

📌 *Fuentes adicionales:*  
[Kolff-e](https://www.kolff-e.com/) | [Vídeo explicativo](https://www.youtube.com/watch?v=EqEyDEMp0mM&t=2s). 

# **5. Control de Temperatura y Humedad**  

El control de temperatura y humedad en un Data Center es esencial para garantizar el rendimiento y la vida útil de los equipos.  

## **5.1. Parámetros de Operación**  

- **Rango recomendado:**  
  - **Temperatura:** 18°C - 27°C.  
  - **Humedad relativa:** 40% - 60%.  
- **Condiciones óptimas para equipos:**  
  - **Temperatura de bulbo seco:** 20°C - 25°C.  
  - **Humedad relativa:** 40% - 55%.  
  - **Máxima temperatura de rocío:** 21°C.  
  - **Velocidad de cambio de temperatura:** 5°C/Hr.  

📌 *Fuente:* ANSI/TIA-569-C (pp.14).  

## **5.2. Flujo de Aire y Cableado**  

- **Distribución del cableado:**  
  - No debe obstruir el flujo de aire dentro de los gabinetes y racks.  
  - Evitar el enrutamiento del cableado frente a los respiraderos.  
  - Mantener un flujo de aire suficiente según lo requiera el fabricante del equipo.  

📌 *Fuente:* ANSI/TIA-942-A (pp.20).  

## **5.3. Infraestructura de Enfriamiento**  

- **Piso de Acceso = Shaft Horizontal:**  
  - Permite la circulación eficiente del aire y el enrutamiento del cableado sin afectar la refrigeración.  
  
# **6. Arquitectura Lógica de un Data Center**

## **6.1. Capas de la Red y Jerarquía de Colores para Cables**

- **Switch Núcleo (Core):**  
  - **Cable Blanco:** Datos. Alta velocidad y capacidad.
- **Switch Distribución:**  
  - **Cable Gris:** Datos. (entre 8 a 16 bocas y puerta de entrada) Agregación del tráfico.
- **Switch Acceso:**  
  - **Cable Azul:** Datos. (entre 1 a 24 bocas y 2 puerta de entrada) Conexión a los servidores (racks).
- **Voz:**  
  - **Cable Rojo.**
- **Misceláneo:**  
  - **Cable Amarillo (alarmas, cámaras de seguridad CCTV).**
- **COC - Centro de Operación Control.**
- **NOC - Centro de Operación Red.**

## **6.2. Switches**

- Definición y función de switches en cada capa.
- Los switches tienen "bocas" (puertos) y una "puerta de entrada" (interfaz de administración).

## **6.3. Diseño de Aterramiento**

- **Aterramiento**: Conexión de todos los equipos y componentes eléctricos a tierra para garantizar la seguridad y el buen funcionamiento de los sistemas eléctricos del Data Center. El aterramiento protege los equipos contra sobrecargas eléctricas y descargas de energía. Además, asegura la estabilidad de las señales eléctricas y minimiza los riesgos de choques eléctricos para los operarios y el personal que esté en el centro de datos. El sistema de aterrizaje debe cumplir con normativas específicas como la **JSTD-607-A**.
- Preparación de cancha, aterramientos pilar, aterramientos base de piso falso, aterramientos PDU, TGD (Tablero General de Distribución).
- Alcance de la norma: **JSTD-607-A**.

## **6.4. Cableado Horizontal**

- **Top-of-Rack (ToR)** vs **End-of-Row (EoR).**

## **6.5. Organización del Cableado**

- Utilizar organizadores verticales y horizontales para mantener el cableado ordenado.
- **RACK con velcro ✓ NO amarras plásticas ✗.**

## **6.6. Ancho de Banda y Espacio**

- Andén ancho de **80 cm** (estándar) para facilitar el movimiento y mantenimiento.

## **6.7. Latencia**

- **Sobre 10ms:**
  - **Satelital:** Sobres 10ms.
  - **Fibra óptica:** Entre 1ms y 65ms.

- **Fibra óptica vs Satélite:**
  - Ventajas de la fibra óptica en términos de latencia: menor latencia, mayor velocidad y ancho de banda, retransmisiones terrestres directas (sin el viaje al espacio).

## **6.8. Tecnología de la Fibra Óptica**

- Transmisión de datos mediante pulsos de luz a través de hilos delgados de vidrio o plástico.
- La luz se refleja internamente (reflexión interna total), manteniendo la señal y transmitiéndola a grandes distancias con poca pérdida.

## **6.9. Conceptos Adicionales**

- **DNS** = Agenda de IP y Nombre de Dominio.
- **ICANN** = Institución que administra las IP.
- **COC** = Centro de Operación Control.
- **NOC** = Centro de Operación Red.

# **7. Infraestructura como Servicio (IaaS)**

- **CaaS (Communication as a Service):** Ofrecer al cliente la capacidad de interacción y colaboración en tiempo real.
- **BDaaS (Database as a Service):** Servicios de big data a través de la computación en la nube.
- **NaaS (Network as a Service):** Configurar, mantener y liberar la conectividad de la red como un servicio en la nube.
- **IaaS (Infrastructure as a Service):** Capacidades de computación, almacenamiento y red para ejecutar aplicaciones.
- **PaaS (Platform as a Service):** Ofrecer capacidades de tipo plataforma.
- **SaaS (Software as a Service):** Ofrecer capacidades de tipo aplicación.

# **8. Diseño e Implementación de Data Centers Virtuales**

## **¿Qué es la Virtualización?**
- Crear servicios de TI útiles mediante recursos que normalmente se ejecutan en el hardware.

## **Herramientas de Virtualización:**
- Cisco Workload Optimization Manager.
- Schneider Electric EcoStruxure IT Expert.
- VMware vSphere 6.5.
- ManageEngine OpManager 12.3.

## **Problemas de Interconexión de Redes en la Computación en la Nube:**
- Coordinación de la virtualización, control de tecnologías de red heterogéneas, reconfiguración a la demanda.

## **Conceptos de Diseño e Implementación de un Data Center Virtual:**
- **Definir metas y objetivos.**
- **Alcance del proyecto.**
- **Roles y responsabilidad.**
- **Matriz de responsabilidad.**

## **Control y Ejecución del Proyecto:**
- **Enfoque de Planificación:** Se exploran aspectos de alcance, tiempo, costo, calidad, comunicaciones, recursos humanos, riesgos, adquisiciones y participación.

- **Elementos de Control del Proyecto:**
  - Comunicaciones.
  - Calidad.
  - Alcance.
  - Planificación.
  - Finanzas.
  - Riesgo.
  - Contrato.
  - Recursos.

## **Conceptos de Implementación:**
- Visibilidad y control sobre aplicaciones personalizadas del centro de datos.
- Manejar flujos de tráfico asimétricos y transacciones de aplicaciones entre dispositivos y centros de datos.
- Adaptarse a medida que los centros de datos evolucionan:
  - Abordar toda la secuencia del ataque: antes, durante y después de este.
- Proteger la totalidad de la red.

## **Aspectos Importantes:**
- Lo que las organizaciones requieren es un equipo estrella, no un equipo de estrellas.
- Debes saber qué controlas y a quién.
- Los riesgos son parte del control.
- Los indicadores te hablan, escúchalos.
- Debes actuar rápido; si tienes duda, consultar al equipo.

## **8.1 Certificación y Cierre**

- **Certificación**
  - **¿Qué es certificar?**
  - **¿Qué certifico?**
  - **¿Cómo certifico?**
  - **¿Cuándo certifico?**
  - **¿Por qué certifico?**

- **Plan de Cierre “Propósito”**
  - **Formalizar la aceptación del proyecto.**
  - Realizar el cierre administrativo (internos y externos).
  - Completando los requerimientos y entregables (todos).
  - **Lecciones aprendidas:**
    - ¿Qué fue bien hecho? ¿Qué no se hizo?
    - Registra para futuros proyectos.
    - Realizar una encuesta sobre el desempeño del equipo.
    - Realizar métricas con datos objetivos (alcance, costos, plazo, calidad).

**Diagrama de Flujo de Datos de Cerrar el Proyecto o Fase.**
Fuente: **Fundamentos para la dirección de proyectos PMBOK 6ta Edición.**

---

# **9. Software de Monitoreo para Infraestructura de Data Centers**

- **Herramientas:**
  - IO.AR.
  - ManageEngine OpManager.
  - Quest Big Brother (DELL).
  - Schneider Electric StruxureWare Operations.

- **Opciones de Monitoreo:**
  - Respaldo de energía.
  - Aire en rack.
  - Pantallazo de reporte de energía.

# **10. Clasificación niveles TIER en el Diseño del Data Center según Uptime Institute**

## **1. Definición de TIER**
La **clasificación TIER** es una forma de medir la **disponibilidad** y **redundancia** de un centro de datos, determinada por el **Uptime Institute**. Los TIER indican la capacidad del centro de datos para mantener operaciones durante fallos o interrupciones de sus sistemas. Existen **4 niveles TIER**, de menor a mayor capacidad.

## **TIER 1 (Básico)**
- **Características:**
  - El centro de datos tiene un solo camino de energía y refrigeración, lo que lo hace susceptible a caídas en caso de fallos.
  - No tiene redundancia en sus sistemas de soporte (como energía y refrigeración).
  - Apropiado para pequeños centros de datos o para operaciones no críticas.
- **Disponibilidad anual:** 99.671% (28.8 horas de inactividad al año).

## **TIER 2 (Redundante)**
- **Características:**
  - Redundancia en los componentes críticos, como fuentes de alimentación y sistemas de refrigeración.
  - Un solo camino para la energía y la refrigeración, pero con componentes de respaldo.
  - Apto para aplicaciones de negocio que no pueden tolerar tiempos de inactividad prolongados.
- **Disponibilidad anual:** 99.741% (22 horas de inactividad al año).

## **TIER 3 (Activo)**
- **Características:**
  - Múltiples caminos de energía y refrigeración, aunque solo uno está en uso en un momento dado.
  - Redundancia activa en todos los sistemas, con separación de los caminos de energía y refrigeración.
  - Permite realizar mantenimiento o reparaciones sin afectar las operaciones.
- **Disponibilidad anual:** 99.982% (1.6 horas de inactividad al año).

## **TIER 4 (Fault-Tolerant)**
- **Características:**
  - Totalmente redundante y tolerante a fallos, con duplicación de todos los componentes críticos.
  - Los caminos son completamente separados para asegurar la disponibilidad continua.
  - Ideal para empresas con los requisitos más estrictos de disponibilidad y operaciones 24/7.
- **Disponibilidad anual:** 99.995% (0.4 horas de inactividad al año).

## **Resumen de Disponibilidad Anual**
- **TIER 1:** 99.671% de disponibilidad (28.8 horas de inactividad al año).
- **TIER 2:** 99.741% de disponibilidad (22 horas de inactividad al año).
- **TIER 3:** 99.982% de disponibilidad (1.6 horas de inactividad al año).
- **TIER 4:** 99.995% de disponibilidad (0.4 horas de inactividad al año).

A medida que aumenta el nivel TIER, se incrementa la redundancia y la capacidad del centro de datos para mantener la continuidad operativa frente a fallos.

# **11. Lista de referencias de la norma y videos**


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

# **12. Cuadrante Mágico de Gartner** (segunda Guia)

El **Cuadrante Mágico de Gartner** es una herramienta que proporciona una representación visual de las posiciones de los proveedores en un mercado determinado, evaluándolos según dos dimensiones clave:

- **Ejecución Completa**: Capacidad de un proveedor para entregar productos y servicios de manera efectiva.
- **Visión Completa**: Capacidad para anticipar tendencias del mercado y planificar el futuro.

Los proveedores se clasifican en cuatro categorías:

1. **Líderes**: Fuertes en ejecución y con visión clara para el futuro.
2. **Desafiantes**: Buena ejecución, pero con visión limitada.
3. **Visionarios**: Buenas ideas, pero ejecución inconsistente.
4. **Niche Players (Jugadores de nicho)**: Especialización en nichos específicos, con capacidades limitadas.

---

# **13. Clasificación de Proveedores por Producto y Calidad-Precio componentes Data Center según Cuadrante Mágico de Gartner**

## 1. **Servicios en la Nube (Cloud Services)**

| **Categoría**                | **Alta Calidad-Precio**  | **Media Calidad-Precio** | **Baja Calidad-Precio**   |
|------------------------------|--------------------------|--------------------------|--------------------------|
| **Proveedor**                | Amazon Web Services (AWS), Microsoft Azure, Google Cloud | IBM Cloud, Oracle Cloud | DigitalOcean, Linode |

## 2. **Soluciones LAN (Redes de Área Local)**

| **Categoría**                | **Alta Calidad-Precio**  | **Media Calidad-Precio** | **Baja Calidad-Precio**   |
|------------------------------|--------------------------|--------------------------|--------------------------|
| **Proveedor**                | Cisco, Arista Networks   | Juniper Networks, Huawei | Ubiquiti Networks         |

## 3. **Almacenamiento (Storage)**

| **Categoría**                | **Alta Calidad-Precio**  | **Media Calidad-Precio** | **Baja Calidad-Precio**   |
|------------------------------|--------------------------|--------------------------|--------------------------|
| **Proveedor**                | Dell EMC, NetApp         | HPE, Hitachi Vantara     | Western Digital, Seagate |

## 4. **Cableado (Cabling)**

| **Categoría**                | **Alta Calidad-Precio**  | **Media Calidad-Precio** | **Baja Calidad-Precio**   |
|------------------------------|--------------------------|--------------------------|--------------------------|
| **Proveedor**                | Belden, Legrand          | Siemon, Panduit          | Cable Matters, Mediabridge|

## 5. **Networking (Redes)**

| **Categoría**                | **Alta Calidad-Precio**  | **Media Calidad-Precio** | **Baja Calidad-Precio**   |
|------------------------------|--------------------------|--------------------------|--------------------------|
| **Proveedor**                | Cisco, Arista Networks   | Juniper Networks, Huawei | TP-Link, NETGEAR          |

## 6. **UPS (Sistemas de Alimentación Ininterrumpida)**

| **Categoría**                | **Alta Calidad-Precio**  | **Media Calidad-Precio** | **Baja Calidad-Precio**   |
|------------------------------|--------------------------|--------------------------|--------------------------|
| **Proveedor**                | APC, Eaton               | Vertiv, CyberPower       | Tripp Lite, Kstar        |

## 7. **Proveedores de Servidores**

| **Categoría**                | **Alta Calidad-Precio**  | **Media Calidad-Precio** | **Baja Calidad-Precio**   |
|------------------------------|--------------------------|--------------------------|--------------------------|
| **Proveedor**                | IBM, Dell, Hewlett Packard | Lenovo, Cisco            | Supermicro, Fujitsu      |

# **14. Clasificación de Data Center según el Estándar ANSI/TIA-942**

El **estándar ANSI/TIA-942** establece requisitos para el diseño e instalación de centros de datos, dividiéndolos en **criterios obligatorios** (deberá) y **criterios sugeridos** (debería). Estos criterios son utilizados para evaluar y clasificar los centros de datos de acuerdo con su capacidad, seguridad, redundancia y eficiencia.

## Clasificación según el Cumplimiento de los Criterios del Estándar

| **Criterio**                        | **Obligatorio (Deberá)**                                    | **Sugerido (Debería)**                              |
|-------------------------------------|------------------------------------------------------------|-----------------------------------------------------|
| **Infraestructura de Telecomunicaciones** | Cableado estructurado y organizado.                          | Uso de sistemas avanzados de gestión de cableado.     |
| **Seguridad Física**                 | Controles de acceso físico adecuados.                       | Monitoreo adicional y barreras físicas.              |
| **Protección contra Incendios**      | Sistemas de detección y supresión de incendios.             | Tecnologías avanzadas de supresión (gases inertes).  |
| **Redundancia en Energía**           | Fuentes de energía redundantes (UPS, generadores).          | Redundancia adicional en distribución de energía.    |
| **Sistemas de Refrigeración**        | Refrigeración adecuada para mantener la temperatura segura. | Sistemas redundantes o enfriamiento avanzado.       |
| **Accesibilidad y Gestión de Espacios**| Acceso adecuado sin interrumpir las operaciones.            | Espacios que faciliten la expansión y mantenimiento.  |
| **Conformidad con Normativas**       | Cumple con normativas locales e internacionales.           | Certificaciones adicionales (ISO, etc.).             |
| **Recuperación ante Desastres**      | Plan básico de recuperación ante desastres.                 | Planes detallados y simulacros regulares.            |

# **15. Áreas Funcionales y Espacios Operacionales**

## Definición de Términos:
**Centro de Datos (DC):**  
Es un edificio o una parte de un edificio cuya función principal es albergar una sala de computadoras y sus áreas de apoyo.

## Sitio del Edificio
El **casco del edificio** abarca varias áreas funcionales dentro y fuera del centro de datos, entre ellas:

1. **Espacio de oficina en general.**
2. **Telecomunicaciones y equipamiento de los espacios fuera del centro de datos.**

## Áreas del Centro de Datos
El **Centro de Datos** incluye varias zonas clave:

1. **Oficinas personales de apoyo.**  
   Espacios destinados al personal que da soporte a las operaciones del centro de datos.

2. **Entrada de la sala (s).**  
   Áreas de acceso principales y controladas al centro de datos para la seguridad.

3. **Centro de datos tanto mecánico como eléctrico:**
   - **Habitaciones para equipos:** Áreas donde se ubican los sistemas eléctricos, de refrigeración y otros equipos críticos del centro de datos.

    3.1 **Centro de operaciones.**  
       Espacio dedicado al control y monitoreo de las operaciones dentro del centro de datos.

    3.2 **Sala (s) de telecomunicaciones destinados a los espacios del centro de datos.**  
       Espacios para el equipo de telecomunicaciones necesario para el funcionamiento del centro de datos.

    3.3 **Trasteros y muelles de carga.**  
       Áreas para el almacenamiento y la carga de equipos, así como la gestión de inventarios.

    3.3 **Sala de ordenadores.**  
       Espacios donde se encuentran los servidores y racks para el almacenamiento de datos.  
       - **Servicio inalámbrico camino de entrada:** Espacios destinados a asegurar la conectividad inalámbrica desde el punto de entrada (puede formar parte de esta área).

    3.4 **Caminos comunes edificios:**  
       Pasillos y accesos comunes entre las distintas secciones del edificio, incluidos los espacios de carga y las áreas de servicio.

    3.5 **Acceso al espacio del proveedor, espacio de proveedor de servicios.**  
       Área destinada a los proveedores externos, con acceso controlado para la gestión de equipos y servicios (por ejemplo, electricidad, telecomunicaciones).

    3.6 **Vía de entrada de servicio:**  
        Rutas específicas para servicios y mantenimiento dentro del edificio, relacionadas con las operaciones del centro de datos.

    3.7 **Diversidad de rutas de entrada:**  
        Varias rutas de acceso al centro de datos y sus diferentes servicios para garantizar redundancia y seguridad operativa.

    3.8 **Cuarto común distribuidor:**  
        Espacios comunes para la distribución de servicios y sistemas dentro del centro de datos.

    3.9 **Shaft:**  
        Espacios verticales que permiten la distribución de cables, conducciones y otros servicios críticos dentro del centro de datos.

---

Este conjunto de **áreas funcionales y operacionales** dentro del centro de datos está diseñado para garantizar la eficiencia operativa, la conectividad, la seguridad y la redundancia necesarias para su correcto funcionamiento. Cada área cumple una función específica para mantener la integridad y la continuidad de los servicios del centro de datos.


# **16. Distribución de Equipamiento y Hardware para Montaje de un Rack en un Centro de Datos**

## **1. Introducción:**
En un centro de datos, la correcta organización del equipamiento y hardware en racks es crucial para asegurar la eficiencia, la seguridad y la accesibilidad. Esto incluye el montaje de racks para servidores, switches, unidades de almacenamiento, entre otros componentes. Para facilitar la organización y la gestión de estos equipos, se utilizan identificadores basados en un sistema de coordenadas tipo "rejilla" (como en un tablero de ajedrez) que permiten localizar y hacer seguimiento a cada componente dentro del espacio del centro de datos.

## **2. Identificación de Espacios de Telecomunicaciones (TS):**
Los espacios de telecomunicaciones dentro de un centro de datos se identifican con coordenadas específicas. Estas coordenadas están basadas en un sistema de "rejilla" que organiza el centro de datos en **filas** y **columnas**.

### **Ejemplo de Coordenadas de Espacio de Telecomunicaciones:**
- **FS:**
  - **F** = Caracteres numéricos que indican el **piso** del edificio donde se encuentra el espacio.
  - **S** = Caracteres alfanuméricos que identifican de forma única el **espacio de telecomunicaciones** (TS) o la **sala de computadoras** en ese piso.
  - **X**: Identificador de la fila en el espacio (por ejemplo, "AB").
  - **Y**: Identificador de la columna en la fila (por ejemplo, "02").

**Ejemplo:** `TS: 11,AB02`  
Esto indica que el espacio de telecomunicaciones está en el **piso 11**, en la fila **AB**, columna **02**.

## **3. Coordinación y Etiquetado de Espacios:**
Las **coordenadas de la cuadrícula** se colocan en las **paredes** del centro de datos, con **etiquetas grandes y legibles** que permitan identificar fácilmente cada área desde la distancia. Las marcas de los **pisos** o **techos** deben estar protegidas para evitar daños.

### **Etiquetas de Coordenadas y Ubicación del Gabinete:**
- Las **esquinas de los gabinetes** se utilizan para identificar la ubicación de la red en el centro de datos. Normalmente, la **ubicación frontal** de cada gabinete se refiere al **Cold Aisle**, mientras que la **parte trasera** se refiere al **Hot Aisle**.

**Ejemplo:**
- **Cold Aisle:** Frente de los gabinetes (donde se ubican los servidores).
- **Hot Aisle:** Parte trasera de los gabinetes (donde se concentran las salidas de aire caliente).

## **4. Distribución de los Gabinetes y Racks:**
Cada fila de gabinetes dentro de la sala de telecomunicaciones debe estar etiquetada con un **identificador de fila** único. Estos identificadores son secuenciales, lo que asegura una organización lógica para el acceso y la administración de los racks.

### **Ejemplo de Etiquetas de Fila de Gabinetes:**
Cada fila debe ser etiquetada en ambos extremos de la fila con el **número de fila**. Estos números son secuenciales y únicos para cada fila dentro de la sala.

**Ejemplo de Gabinete de Sala de Telecomunicaciones:**
- Gabinete **1** en la fila **A** y gabinete **2** en la fila **B**, con sus identificadores respectivos (por ejemplo: **A01**, **B02**).

## **5. Tipos de Racks y Montaje:**

### **Rack Mural:**
El **rack mural** se monta en las paredes del centro de datos y es ideal para almacenar equipos de telecomunicaciones más pequeños o componentes auxiliares. Es comúnmente utilizado para almacenamiento de **servidores compactos** y **equipo de red**.

### **Rack Pedestal:**
El **rack pedestal** se monta sobre el suelo y permite el almacenamiento de equipos más grandes, como **servidores dedicados** y **switches de red**. Este tipo de rack es ideal cuando se requiere mayor capacidad y se necesita un acceso más fácil a los equipos.

### **Rack de Tablero de Distribución:**
El **rack de tablero de distribución** se utiliza para organizar y distribuir cables y conexiones dentro de la sala de telecomunicaciones. Estos racks pueden ser montados en **paredes o aéreo**, dependiendo de la distribución del centro de datos.

## **6. Componentes de un Rack de Servidor Dedicado:**
Un **rack de servidor dedicado** en un centro de datos es esencial para alojar los servidores, unidades de almacenamiento, **discos duros**, **switches de red** y otros componentes críticos. A continuación, se describen los principales elementos:

1. **Servidores Dedicados:**  
   Son equipos especializados para procesar y almacenar grandes cantidades de datos. Pueden ser **servidores blade** (servidores compactos), **servidores rackmount** (montados en racks) o servidores de **torre**.

2. **Discos Duros (HDD/SSD):**  
   Los **discos duros** o **unidades SSD** son fundamentales para el almacenamiento de datos dentro del servidor. Se alojan en **bays de discos** dentro del rack.

3. **Switches Core:**  
   Los **switches core** son equipos esenciales para la distribución y gestión de tráfico de datos dentro de la infraestructura del centro de datos. Su función principal es dirigir el tráfico entre los diferentes servidores y componentes de la red.

4. **Componentes de Distribución y Acceso:**  
   Estos incluyen **paneles de parcheo**, **cables de fibra óptica** o **cables de cobre** para la distribución de señales entre los servidores y otros equipos dentro del rack. Los **puntos de acceso** también son importantes para garantizar la conectividad inalámbrica en ciertas áreas.

## **7. Esquema General de Distribución en Sala de Telecomunicaciones:**

### **Mural o Aéreo:**
- **Rack Mural:** Ideal para equipos pequeños.
- **Rack Aéreo:** Montado en el techo para aprovechar el espacio y reducir la obstrucción de cables en el suelo.

## **Conclusión:**
La distribución de racks en un centro de datos es esencial para la eficiencia operativa. Cada componente, desde el servidor hasta el switch de red, debe estar correctamente ubicado y etiquetado con un sistema de coordenadas claro para facilitar el mantenimiento y las futuras expansiones. Además, el uso de diferentes tipos de racks, ya sea mural, pedestal o de distribución, asegura una organización efectiva del espacio.

# **17. Electricidad en Centros de Datos: Aterramiento, Generadores, UPS y Emisiones de Equipos**

## **1. Aterramiento y Conexión a Tierra**

### **Aterramento Base de Piso Falso**
El **aterramiento** adecuado es esencial para proteger los equipos electrónicos de un centro de datos. La base del piso falso debe contar con un sistema de aterramento que proporcione una conexión segura a tierra, minimizando el riesgo de fallos eléctricos o daños a los equipos debido a descargas eléctricas.

### **Aterramento PDU**
Las **Unidades de Distribución de Energía** (PDU) deben contar con un sistema de aterramento confiable para asegurar la seguridad eléctrica y el buen funcionamiento de los equipos que alimentan.

### **Normativa de Conexión a Tierra**
Se debe seguir la normativa **ANSI/TIA-607-B** para los requisitos de conexión a tierra en salas de computadoras, gabinetes de equipos y racks. Esta norma define los lineamientos para la instalación de un sistema de aterramento físico adecuado en un centro de datos.

## **2. Generadores Diesel y UPS (Uninterruptible Power Supply)**

### **Generador Diesel Cat® 3512**
El **Generador Diesel Cat® 3512** está diseñado para optimizar el consumo de combustible, ofreciendo un rendimiento confiable con miles de aplicaciones en todo el mundo.

- **Motor Diesel Cat®:** 
  - Diseñado para bajo consumo de combustible.
  - Comprobado en diversas aplicaciones globales.
- **Grupo Generador:**
  - Acepta el 100% de carga en bloque en un solo paso.
  - Cumple con la normativa ISO 8528-5 G3 y los requisitos de carga NFPA 110.
  - Verificación de confiabilidad mediante pruebas de vibración torsional, consumo de combustible, y resistencia.

### **Unidad UPS (Smart-UPS RT de APC)**
- **UPS en Rack (20 kVA y 230 V):** 
  - Proporciona una fuente de alimentación ininterrumpida a equipos críticos.
  - **Smart-UPS RT** ofrece un rendimiento confiable y protección ante cortes de energía.

**Características de UPS:**
- **Frontal:**
  - Muestra la interfaz de monitoreo y control del sistema.
- **Posterior:**
  - Incluye conexiones para alimentación y comunicación con otros equipos.

### **UPS Monofásico**
- Un **UPS monofásico** puede ser utilizado para equipos menos exigentes en términos de potencia. Este tipo de UPS ofrece protección contra cortes de energía, protegiendo los equipos críticos del centro de datos.

## **3. Protección Contra Incendios**

Los sistemas de protección contra incendios en centros de datos deben cumplir con la normativa **NFPA-75**. Además, los sistemas de rociadores en las salas de computación deben ser **de acción previa**.

- **Sistemas de Detección y Supresión de Incendios Kidde:**
  - [Video en YouTube](https://www.youtube.com/watch?v=SjZKsKXL-hI)
  
- **Protección Contra Incendios en Centros de Datos:**
  - [Video en YouTube](https://www.youtube.com/watch?v=z_xNIjr_T98)

## **4. Requerimientos Eléctricos**

### **Distribución de Energía**
Los circuitos de suministro de energía para los equipos informáticos deben estar distribuidos y terminar en paneles eléctricos específicos para los equipos de telecomunicaciones y computadoras. La instalación de **tomacorrientes** separados es fundamental para evitar interferencias.

- **Tomacorrientes Dúplex (120V, 20A):** Usados para equipos no conectados a las regletas de alimentación.
- Los **tomacorrientes** deben estar separados a una distancia de **3,65 m** (12 pies) a lo largo de las paredes de la sala de computadoras.

## **5. Condiciones de Emisión: Temperatura y Humedad**

### **Parámetros Operacionales**
La **temperatura y humedad** deben controlarse para asegurar la operación continua y eficiente de los equipos.

- **Temperatura de Bulbo Seco:** 20°C (68°F) a 25°C (77°F).
- **Humedad Relativa:** 40% a 55%.
- **Máxima Temperatura de Rocío:** 21°C (69.8°F).
- **Máxima Velocidad de Cambio de Temperatura:** 5°C (9°F) por hora.

**Medición de Temperatura y Humedad:**
Se debe medir a **1,5 m (5 pies)** sobre el nivel del suelo, cada **3 a 6 m (10 a 30 pies)** a lo largo de la línea central de los pasillos fríos y en la toma de aire de los equipos.

## **6. Requerimientos de Temperatura y Humedad en Espacios de Telecomunicaciones**

Los espacios de telecomunicaciones deben cumplir con los **requerimientos de temperatura y humedad** establecidos por normas específicas, clasificadas como **Clase A, B y C**.

### **Mapa de Calor en Centros de Datos**
El uso de **programas de monitoreo** permite generar un **mapa de calor** para evaluar la eficiencia del sistema de refrigeración en tiempo real.

- **Sensor de Temperatura en Cada Rack:** 
  - Utilizado para monitorear la temperatura en tiempo real y detectar posibles problemas de refrigeración.

## **7. Enrutamiento de Cables y Flujo de Aire**

### **Enrutamiento del Cableado de Telecomunicaciones**
El **cableado** no debe bloquear el flujo de aire necesario para enfriar los equipos dentro de los gabinetes. Se deben evitar los cables que obstruyan **los respiraderos**.

### **Flujo de Aire en el Centro de Datos**
El flujo de aire adecuado es esencial para el enfriamiento efectivo del equipo dentro del centro de datos. Se debe mantener el **flujo de aire suficiente**, tal como lo indique el fabricante del equipo.

## **8. Sistema de Refrigeración en Centros de Datos**

### **Unidad de Aire Acondicionado para Data Center**
Las **unidades de aire acondicionado** especializadas en **centros de datos** garantizan que las condiciones de temperatura y humedad sean las adecuadas para el funcionamiento de los equipos. El monitoreo constante de la temperatura y humedad es esencial para mantener la estabilidad de la operación.

# **18. Arquitectura Lógica de un Data Center**

## Áreas Críticas de un Data Center

1. **Capacidad de Potencia**  
   La energía es esencial para mantener todos los sistemas funcionando sin interrupciones.

2. **Capacidad de Enfriamiento**  
   El enfriamiento adecuado es crucial para evitar el sobrecalentamiento de los equipos.

3. **Cableado**  
   El cableado debe ser adecuado para soportar el alto volumen de datos y la conectividad de los equipos.

4. **Controles de Temperatura y Humedad**  
   La temperatura y humedad deben ser controladas para garantizar la estabilidad de los sistemas electrónicos.

5. **Sistema de Fuego y Humo**  
   Los sistemas deben cumplir con normas de protección contra incendios, como la NFPA-75.

6. **Seguridad Física**  
   Acceso restringido y sistemas de vigilancia para proteger el equipo físico.

7. **Espacio de Rack y Piso Elevado**  
   El espacio debe estar diseñado para alojar múltiples racks y permitir el flujo adecuado de aire.

---

## Tipos de Redes en un Data Center

- **LAN (Red de Área Local)**: Utilizada para la conectividad dentro del centro de datos.
- **MAN (Red de Área Metropolitana)**: Usada para conectar varios data centers en una ciudad o área metropolitana.
- **WAN (Red de Área Amplia)**: Conecta data centers de diferentes ubicaciones geográficas a gran escala.
- **SAN (Red de Área de Almacenamiento)**: Red dedicada al acceso y gestión de almacenamiento de datos.

---

## Topologías Lógicas de Red en Centros de Datos

### 1. Topología de Top-of-Rack (ToR)

- Los conmutadores de acceso (switches) se colocan en la parte superior de los racks de servidores.
- Este modelo ahorra en cableado horizontal, ya que los cables son más cortos, y permite facilitar la migración entre tecnologías como Ethernet 1G a 10G.
- **Ventajas**:
  - Menor longitud de cableado.
  - Ideal para centros de datos densamente poblados.
  
- **Desventajas**:
  - **Gestión compleja**: En centros de datos grandes, la administración de múltiples conmutadores puede ser difícil, ya que cada conmutador requiere actualizaciones y mantenimiento individual.
  
### 2. Topología de End-of-Row (EoR)

- Los conmutadores se colocan al final de una fila de racks.
- El modelo EoR es más adecuado para racks de baja densidad, ya que se pueden aprovechar al máximo los puertos de los conmutadores de chasis modulares.
- **Ventajas**:
  - Mayor flexibilidad y adaptabilidad para racks de baja densidad.
  - Reducción en la longitud del cableado, lo que puede resultar en ahorros de costos.
  
- **Desventajas**:
  - Puede ser menos eficiente en instalaciones con alta densidad de servidores.

---

## Conmutadores y Diseño de Conexiones

- **Conmutador Top-of-Rack (ToR)**:
  - Es un conmutador de 1 a 2 unidades de rack que se instala dentro del mismo rack que los servidores, proporcionando una conectividad directa y eficiente.
  
- **Conmutador End-of-Row (EoR)**:
  - Es un chasis modular que se instala al final de una fila de racks y soporta múltiples conexiones a otros dispositivos de capa superior de la red.

---

## Modelos de Acceso a Servidores

- **Top-of-Many-Racks (ToMR)**:  
  Cada conmutador se conecta a varios racks, lo que permite una administración más sencilla y una distribución eficiente de la carga de trabajo.

- **Medio de la Fila (Mid-Row)**:  
  Variante del modelo EoR, donde se pueden conectar varios racks en el centro de la fila, ofreciendo una configuración más balanceada.

---

## Consideraciones Importantes

- La **distribución de energía** y **capacidad de enfriamiento** son factores críticos para determinar cuántos servidores se pueden instalar por gabinete o rack. Ambos son fundamentales para asegurar que los equipos operen a su máxima eficiencia sin riesgos de sobrecalentamiento o apagones por falta de energía.

# **k**