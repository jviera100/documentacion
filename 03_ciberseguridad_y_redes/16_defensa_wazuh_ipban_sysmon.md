

# 🛡️ Guía de Defensa Activa para Windows: Integrando Sysmon, Wazuh e IPBan

### **Introducción para Entenderlo en Simple**

Imagina que tu PC es un castillo que debemos proteger en tiempo real:

*   **Sysmon:** Es el **espía silencioso** que anota en un cuaderno todo lo que pasa dentro del castillo. No detiene a nadie, solo observa y escribe.
*   **IPBan:** Es el **guardia de la puerta principal**. Si alguien intenta forzar la cerradura muchas veces, ¡PUM!, le cierra la reja y no lo deja volver a intentarlo.
*   **Wazuh:** Es el **capitán de la guardia**. Se sienta en la sala de control, lee las notas del espía (Sysmon) y da la alarma si ve algo sospechoso.

Esta guía te enseña a contratar y coordinar a este equipo de seguridad para tu castillo digital.

### **Defensa en Tiempo Real vs. Arqueología Digital (Forense)**

Es crucial entender la diferencia entre esta guía y una guía forense como la de "Artefactos de Ejecución":

*   **Esta Guía (Defensa Activa):** Te enseña a instalar las **cámaras de seguridad y las alarmas** en un sistema vivo para detectar y responder a las amenazas *mientras ocurren*. Es la protección proactiva.
*   **La Guía Forense (Arqueología Digital):** Es el manual que usas cuando llegas a la **escena de un crimen** en un sistema que *no tenía* cámaras ni alarmas. Te enseña a buscar **huellas, pistas y rastros** para reconstruir lo que pasó.

Ambas son esenciales. Esta guía te ayuda a prevenir y detectar; la otra te ayuda a investigar cuando la prevención falló.

---

## **Capa 1: El Informante - Instalación y Configuración de Sysmon**

El primer paso es generar inteligencia de alta calidad. Sysmon es la herramienta perfecta para esto.

*   **Propósito:** Registrar la actividad del sistema con un nivel de detalle que los logs de Windows por defecto no ofrecen.

#### **Pasos de Implementación (Resumen):**
1.  **Descargar Sysmon** desde la [página oficial de Sysinternals](https://learn.microsoft.com/en-us/sysinternals/downloads/sysmon).
2.  **Obtener una Configuración Robusta:** No uses Sysmon sin un archivo de configuración. La configuración de [SwiftOnSecurity](https://github.com/SwiftOnSecurity/sysmon-config) es el estándar de la industria para empezar. Descarga el archivo `sysmonconfig.xml`.
3.  **Instalar desde PowerShell (como Administrador):**
    ```powershell
    # Navega a la carpeta donde descargaste Sysmon y el XML
    .\Sysmon64.exe -accepteula -i sysmonconfig.xml
    ```
**Resultado:** Sysmon está ahora instalado y registrando silenciosamente eventos clave (creación de procesos, conexiones de red, etc.) en el Visor de Eventos, en la ruta `Microsoft-Windows-Sysmon/Operational`.

---

## **Capa 2: El Guardia - Instalación y Configuración de IPBan**

Esta es nuestra primera línea de defensa automatizada contra ataques de fuerza bruta.

*   **Propósito:** Bloquear automáticamente las direcciones IP que intentan adivinar contraseñas en servicios críticos como RDP, FTP, SQL Server, etc.
*   **Descarga:** [IPBan en GitHub](https://github.com/DigitalRuby/IPBan) (versión gratuita).

#### **Pasos de Implementación:**
1.  **Descargar:** Ve a la sección "Releases" y descarga la última versión `IPBan-Windows-x64.zip`.
2.  **Instalar como Servicio:**
    *   Descomprime el archivo en una carpeta permanente (ej. `C:\Program Files\IPBan`).
    *   Ejecuta `install-service.bat` como **Administrador**.
3.  **Configuración (Opcional pero Recomendado):**
    *   Edita el archivo `DigitalRuby.IPBan.dll.config`.
    *   Puedes ajustar el número de intentos fallidos (`failedLoginAttemptsBeforeBan`) y el tiempo de bloqueo (`banTime`). Por defecto, son valores razonables.

**Resultado:** IPBan está ahora monitoreando los logs de seguridad de Windows. Si detecta múltiples intentos de inicio de sesión fallidos desde una misma IP, creará una regla en el Firewall de Windows para bloquearla.

---

## **Capa 3: El Detective - Instalación y Configuración de Wazuh**

Este es nuestro centro de análisis y alertas. Wazuh centralizará y correlacionará todos los datos.

*   **Propósito:** Actuar como un SIEM (Security Information and Event Management) y XDR (Extended Detection and Response) de código abierto. Analiza logs, busca indicadores de compromiso y genera alertas.

#### **Pasos de Implementación:**
1.  **Instalar el Servidor Wazuh:**
    *   Esto se hace en un servidor separado (puede ser una VM Linux).
    *   La guía oficial es la mejor fuente: [Instalación de Wazuh con el asistente](https://documentation.wazuh.com/current/quickstart.html). Sigue los pasos para instalar el Wazuh Server, Indexer y Dashboard.

2.  **Instalar el Agente Wazuh en el Endpoint de Windows:**
    *   Descarga el agente desde la [página de Wazuh](https://documentation.wazuh.com/current/installation-guide/wazuh-agent/wazuh-agent-package-windows.html).
    *   Durante la instalación, se te pedirá la **dirección IP de tu servidor Wazuh**. El agente se registrará automáticamente.

**Resultado:** El agente de Wazuh está ahora enviando los logs de seguridad y sistema de tu PC con Windows al servidor Wazuh para su análisis.

---

## **Capa 4: La Integración - Haciendo que el Equipo Trabaje en Conjunto**

Aquí es donde conectamos las piezas para maximizar nuestra visibilidad.

#### **Integrando Sysmon con Wazuh**

Por defecto, el agente de Wazuh no recoge los logs de Sysmon. Debemos indicarle que lo haga.

1.  **Editar la configuración del Agente Wazuh:**
    *   Abre el archivo `ossec.conf` ubicado en `C:\Program Files (x86)\ossec-agent\ossec.conf`.
2.  **Añadir el canal de eventos de Sysmon:**
    *   Dentro de la sección `<ossec_config>`, añade el siguiente bloque. Esto le dice al agente que lea los logs que Sysmon está generando.
    ```xml
    <localfile>
      <location>Microsoft-Windows-Sysmon/Operational</location>
      <log_format>eventchannel</log_format>
    </localfile>
    ```
3.  **Reiniciar el Agente:** Reinicia el servicio "Wazuh Agent" desde `services.msc`.

**Resultado:** ¡Ahora Wazuh está recibiendo los logs súper detallados de Sysmon! Esto desbloquea reglas de detección mucho más avanzadas, como "se ejecutó un comando de PowerShell con un script codificado en Base64 que estableció una conexión de red a una IP maliciosa".

---

### **Anexo: ¿Es Wazuh un SIEM?**

**Sí, Wazuh funciona como un SIEM, pero es más que eso.**

*   **Como un SIEM:** Un SIEM (Security Information and Event Management) es una herramienta que **agrega, correlaciona y alerta** sobre datos de logs de múltiples fuentes. El servidor de Wazuh hace exactamente esto: recibe logs de sus agentes, los analiza con su motor de reglas y genera alertas en un dashboard centralizado.

*   **Más que un SIEM (XDR):** Wazuh también tiene capacidades de **XDR** (Extended Detection and Response). Esto significa que no solo detecta, sino que también puede **responder**. Por ejemplo, puede ejecutar un script para aislar una máquina de la red o bloquear una IP si detecta una amenaza. Además, sus agentes actúan como **HIDS** (Host-based Intrusion Detection System), monitoreando activamente la integridad de los archivos y la configuración del sistema.

En resumen, puedes pensar en Wazuh como un **SIEM de código abierto con esteroides**, que incluye capacidades de HIDS y XDR de forma nativa.