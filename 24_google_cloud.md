# Resumen del Curso: Ingeniero de Seguridad en Google Cloud

Este resumen detalla los conocimientos y habilidades clave adquiridos en el curso de Ingeniero de Seguridad en Google Cloud, organizados por áreas fundamentales de la seguridad en la nube.

## Sección 1: Configuración y Gestión Segura del Acceso

*   **Objetivo Principal:** Establecer y administrar de forma segura las identidades de los usuarios y los permisos de acceso a los recursos de Google Cloud, asegurando que solo las entidades autorizadas puedan interactuar con los servicios y datos según el principio del mínimo privilegio.

*   **Temas Clave y Habilidades Desarrolladas:**
    *   **Cloud Identity:** Integración y migración de identidades de usuario existentes (ej. desde Active Directory local) a la plataforma de Google Cloud.
    *   **Gestión de Identidades y Accesos (IAM):** Aplicación de la jerarquía de recursos de Google Cloud para la asignación granular de permisos. Uso de Grupos de Google para simplificar la gestión de accesos.
    *   **Cuentas de Servicio (Service Accounts):** Creación y gestión segura de credenciales para aplicaciones y servicios (ej. para acceso a Cloud Storage o Cloud SQL). Implementación de políticas para restringir la creación y uso de claves de cuentas de servicio.
    *   **Inicio de Sesión Único (SSO):** Configuración de SSO para federar identidades y simplificar el acceso a APIs y servicios, junto con el monitoreo de actividades de alto riesgo asociadas.
    *   **Controles de Sesión:** Implementación de políticas para controlar la duración de las sesiones de usuario en la consola de Google Cloud y configuración de la frecuencia de reautenticación.
    *   **Jerarquía Organizativa y Permisos:** Diseño y aplicación de una estructura organizativa (Organización, Carpetas, Proyectos) que permita la segregación de deberes y la aplicación del principio del mínimo privilegio.

## Sección 2: Protección de las Comunicaciones y Establecimiento de Perímetros de Seguridad

*   **Objetivo Principal:** Asegurar la confidencialidad e integridad del tráfico de red hacia, desde y dentro de Google Cloud, y definir perímetros de seguridad robustos para proteger los recursos contra accesos no autorizados y ataques externos.

*   **Temas Clave y Habilidades Desarrolladas:**
    *   **Limitación de Velocidad (Rate Limiting):** Configuración de políticas para limitar el uso y abuso de APIs mediante el uso de Balanceadores de Carga de Google Cloud.
    *   **Certificados SSL/TLS:** Implementación y gestión de certificados SSL/TLS para asegurar la comunicación con aplicaciones web alojadas en Google Cloud.
    *   **Acceso SSH Seguro:** Provisión de métodos seguros para el acceso mediante SSH a instancias de Compute Engine, especialmente aquellas con direcciones IP privadas, utilizando herramientas como IAP (Identity-Aware Proxy).
    *   **Reglas de Firewall (VPC Firewall Rules):** Creación, gestión y diagnóstico de reglas de firewall para controlar el tráfico de red a nivel de VPC, subred e instancia.
    *   **Aislamiento de Subred:** Diseño de arquitecturas de red que aíslen aplicaciones y datos sensibles en subredes dedicadas con controles de acceso estrictos.
    *   **Conectividad Híbrida Segura:** Implementación de soluciones de conectividad de baja latencia y alta seguridad (ej. Cloud Interconnect, VPN) para consumir APIs y servicios de Google Cloud desde entornos on-premise sin exponerlos públicamente.

## Sección 3: Garantizar la Protección y Privacidad de los Datos

*   **Objetivo Principal:** Implementar estrategias y utilizar herramientas de Google Cloud para proteger la confidencialidad, integridad y disponibilidad de los datos sensibles, tanto en tránsito como en reposo, cumpliendo con las regulaciones de privacidad y protección de datos aplicables.

*   **Temas Clave y Habilidades Desarrolladas:**
    *   **Prevención de Pérdida de Datos (DLP):** Uso de la API de DLP para inspeccionar, clasificar y ocultar (redactar/tokenizar) Información de Identificación Personal (PII) en grandes volúmenes de datos (ej. documentos escaneados), minimizando la latencia.
    *   **Técnicas de Anonimización de Datos:** Aplicación de métodos de anonimización y seudonimización para permitir el análisis de datos y el desarrollo sin exponer información identificable.
    *   **Control de Acceso a BigQuery:** Configuración de permisos detallados a nivel de conjunto de datos, tabla y vista en BigQuery para asegurar el acceso departamental o basado en roles a los datos analíticos.

## Sección 4: Gestión de Operaciones de Seguridad

*   **Objetivo Principal:** Establecer procesos y herramientas para la automatización de la seguridad, el monitoreo continuo de la infraestructura y las aplicaciones, y la respuesta efectiva a incidentes de seguridad.

*   **Temas Clave y Habilidades Desarrolladas:**
    *   **Análisis de Contenedores (Container Analysis):** Implementación de escaneo de vulnerabilidades en imágenes de Docker almacenadas en Artifact Registry para identificar y mitigar riesgos antes del despliegue.
    *   **Detección de Actividades Anómalas (ej. Minería de Bitcoin):** Configuración de alertas y monitoreo para detectar el uso no autorizado o malicioso de recursos de cómputo (VMs) para actividades como la minería de criptomonedas.
    *   **Automatización de Creación de Imágenes Seguras:** Desarrollo de pipelines para automatizar la creación y el endurecimiento (hardening) de imágenes de máquinas virtuales (VMs) y contenedores.
    *   **Automatización de Pipeline de Despliegue Seguro de Contenedores:** Integración de controles de seguridad en el ciclo de vida de desarrollo y despliegue de aplicaciones en contenedores (ej. en Google Kubernetes Engine - GKE).

## Sección 5: Apoyo a los Requisitos de Cumplimiento Normativo

*   **Objetivo Principal:** Utilizar las capacidades y certificaciones de Google Cloud para diseñar e implementar soluciones que cumplan con los estándares de la industria, regulaciones específicas y políticas de cumplimiento internas.

*   **Temas Clave y Habilidades Desarrolladas:**
    *   **Cifrado de Datos en Reposo y Cumplimiento de ISO 27018:** Implementación de estrategias de cifrado para proteger datos sensibles almacenados en servicios como Cloud Storage, utilizando claves gestionadas por el cliente (CMEK) o gestionadas por Google, y alineándose con estándares como ISO 27018 para la protección de PII en la nube.
    *   **Cumplimiento de PCI-DSS:** Diseño y construcción de arquitecturas para el procesamiento de pagos que cumplan con los requisitos del Estándar de Seguridad de Datos para la Industria de Tarjetas de Pago (PCI-DSS).

