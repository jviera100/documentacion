### Resumen del Curso de Ingeniero de Seguridad en Google Cloud


**Sección 1: Configurar el Acceso**

*   **Objetivo:** Gestionar identidades y permisos en Google Cloud para asegurar el acceso a los recursos.

*   **Temas Clave:**
    *   **Cloud Identity:** Migrar usuarios desde Active Directory local.
    *   **IAM:** Aplicar jerarquías de permisos y asignar usuarios a Grupos de Google.
    *   **Cuentas de Servicio:** Gestionar credenciales para acceso seguro a Cloud Storage/SQL. Restringir la creación de claves.
    *   **SSO:** Configurar Single Sign-On para APIs, monitoreando actividades de alto riesgo.
    *   **Controles de Sesión:** Controlar el tiempo de acceso a la consola de Google Cloud, ajustando la reautenticación.
    *   **Jerarquía Organizativa:** Dividir la organización, asignando permisos según el principio del mínimo privilegio.

---

**Sección 2: Protección de las Comunicaciones y Establecimiento de Protección de Límites**

*   **Objetivo:** Proteger el tráfico de red y establecer perímetros de seguridad.

*   **Temas Clave:**
    *   **Limitación de Velocidad:** Limitar el uso de APIs a través de balanceadores.
    *   **Certificados SSL:** Configurar certificados para aplicaciones web.
    *   **Acceso SSH:** Proporcionar acceso SSH seguro a recursos con IPs privadas.
    *   **Reglas de Firewall:** Diagnosticar problemas de conectividad relacionados a firewalls.
    *   **Aislamiento de Subred:** Aislar aplicaciones que procesan información confidencial.
    *   **Conectividad Híbrida:** Métodos de baja latencia para consumir APIs sin exponerlas públicamente.

---

**Sección 3: Garantizar la Protección de Datos**

*   **Objetivo:** Proteger datos sensibles cumpliendo con las regulaciones.

*   **Temas Clave:**
    *   **DLP:** Ocultar PII en documentos escaneados, minimizando la latencia.
    *   **Anonimización de Datos:** Anonimizar datos para análisis sin exponer información identificable.
    *   **Control de Acceso a BigQuery:** Configurar acceso departamental a BigQuery.

---

**Sección 4: Gestión de Operaciones**

*   **Objetivo:** Automatizar la seguridad, monitorear la infraestructura y responder a incidentes.

*   **Temas Clave:**
    *   **Container Analysis:** Escanear imágenes de Docker en Artifact Registry.
    *   **Detección de Bitcoin Mining:** Detectar actividades de minería en VMs.
    *   **Automatización de Imágenes Seguras:** Automatizar la creación de imágenes seguras.
    *   **Automatización de Pipeline de Contenedores:**  Automatizar el despliegue de contenedores en Kubernetes.

---

**Sección 5: Apoyando los Requisitos de Cumplimiento**

*   **Objetivo:** Cumplir con normativas y estándares utilizando herramientas de Google Cloud.

*   **Temas Clave:**
    *   **Cifrado de Datos en Reposo:** Proteger datos sensibles en Cloud Storage, cumpliendo con ISO 27018.
    *   **PCI-DSS:** Construir una solución de procesamiento de pagos que cumpla con PCI-DSS.

---