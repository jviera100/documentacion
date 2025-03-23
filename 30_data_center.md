# Taller de Cableado y Data Center (DC)

# 1. Introducción a Data Centers y Estándares

*   ¿Qué es un Data Center? Definición y Componentes.
*   Importancia de los Data Centers en la Infraestructura Tecnológica Actual.
*   **Estándares ANSI/TIA-942:** Clasificación, Criterios, Normas, **versión 2017 (instalaciones)**

# 2. Fundamentos de los Estándares ANSI/TIA-942

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

# **10. Niveles TIER en el Diseño del Data Center**

Los **niveles TIER** son una clasificación utilizada para medir la capacidad, resiliencia y redundancia de un **data center**. Esta clasificación permite evaluar la confiabilidad y la continuidad operativa de un centro de datos frente a fallos. Los niveles TIER son definidos por el **ANSI/TIA-942**, una norma para centros de datos, y se dividen en **cuatro niveles**.

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

# **12. Cuadrante Mágico de Gartner**

El **Cuadrante Mágico de Gartner** es una herramienta que proporciona una representación visual de las posiciones de los proveedores en un mercado determinado, evaluándolos según dos dimensiones clave:

- **Ejecución Completa**: Capacidad de un proveedor para entregar productos y servicios de manera efectiva.
- **Visión Completa**: Capacidad para anticipar tendencias del mercado y planificar el futuro.

Los proveedores se clasifican en cuatro categorías:

1. **Líderes**: Fuertes en ejecución y con visión clara para el futuro.
2. **Desafiantes**: Buena ejecución, pero con visión limitada.
3. **Visionarios**: Buenas ideas, pero ejecución inconsistente.
4. **Niche Players (Jugadores de nicho)**: Especialización en nichos específicos, con capacidades limitadas.

---

# **13. Clasificación de Proveedores por Producto y Calidad-Precio**

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
