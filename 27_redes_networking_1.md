# 🌐 Guía de Estudio de Networking Cisco: Del Modelo OSI a la Ciberseguridad <a name="guia-networking-main-title"></a>

<p align="center">
  Una guía completa para entender los fundamentos de las redes de computadoras, desde los modelos teóricos hasta los protocolos y herramientas prácticas.
</p>  

---
## 📌 Índice de Contenidos

<details>
  <summary>Ver/Ocultar Índice</summary>

- [🌐 Guía de Estudio de Networking Cisco: Del Modelo OSI a la Ciberseguridad](#guia-networking-main-title) <!-- Ancla para el título principal -->
  - [1. Introducción a las Redes](#introduccion-redes)
    - [1.1. ¿Qué es Internet y Cómo se Organiza la Comunicación?](#que-es-internet)
    - [1.2. Modelos de Referencia: TCP/IP y OSI](#modelos-referencia)
  - [2. Principios Fundamentales del Diseño de Redes](#principios-diseno)
    - [2.1. Pilares de una Red Confiable](#pilares-red)
  - [3. Capa 1 OSI: Física – La Transmisión de Bits](#capa1-fisica)
    - [3.1. Función Principal y PDU (Capa 1)](#capa1-funcion-pdu)
    - [3.2. Medios de Red](#capa1-medios)
    - [3.3. Multiplexación](#capa1-multiplexacion)
    - [3.4. Características Fundamentales de la Capa Física (Estándares, Codificación, Señalización y Ancho de Banda)](#capa1-caracteristicas-fundamentales)
    - [3.5. Otros Conceptos y Dispositivos de Capa 1](#capa1-otros)
  - [4. Capa 2 OSI: Enlace de Datos – Comunicación en la Red Local](#capa2-enlace)
    - [4.1. Función Principal y PDU (Capa 2)](#capa2-funcion-pdu)
    - [4.2. Organizaciones y Estándares Clave (Capa 2)](#capa2-estandares)
    - [4.3. Tarjeta de Interfaz de Red (NIC)](#capa2-nic)
    - [4.4. Ethernet: La Tecnología LAN Predominante](#capa2-ethernet)
      - [4.4.1. Historia y Evolución de Ethernet](#capa2-ethernet-historia)
      - [4.4.2. Subcapas de Enlace de Datos en Ethernet (LLC y MAC)](#capa2-ethernet-subcapas)
    - [4.5. Direcciones MAC: Identidad Física en la Red Local](#capa2-mac)
      - [4.5.1. ¿Qué es una Dirección MAC?](#capa2-mac-que-es)
      - [4.5.2. Estructura de una Dirección MAC (OUI e Identificador)](#capa2-mac-estructura)
      - [4.5.3. Un Dispositivo, Múltiples Direcciones MAC](#capa2-mac-multiples)
      - [4.5.4. Uso Práctico del OUI](#capa2-mac-oui-uso)
      - [4.5.5. Tipos de Direcciones MAC y su Uso en Ethernet](#capa2-mac-tipos)
    - [4.6. La Trama Ethernet: Estructura y Encapsulación](#capa2-trama)
      - [4.6.1. Proceso de Comunicación y Encapsulación en Capa 2](#capa2-trama-proceso)
      - [4.6.2. Anatomía de una Trama Ethernet II](#capa2-trama-anatomia)
    - [4.7. Funcionamiento de los Switches Ethernet](#capa2-switches)
      - [4.7.0. Componentes Físicos y Preparación Inicial de un Switch Cisco](#capa2-switch-hardware-setup)
      - [4.7.1. Fundamentos del Switch de Capa 2](#capa2-switches-fundamentos)
      - [4.7.2. Proceso de Aprendizaje y Reenvío del Switch](#capa2-switches-aprendizaje-reenvio)
      - [4.7.3. Métodos de Reenvío de Tramas y Almacenamiento en Búfer](#capa2-switches-reenvio-bufer)
      - [4.7.4. Configuración de Dúplex, Velocidad y Auto-MDIX en Puertos de Switch ](#capa2-switches-duplex-velocidad-mdix)
      - [4.7.5. Consideraciones Adicionales sobre Switches](#capa2-switches-consideraciones)
    - [4.8. Topologías de Red y Control de Acceso al Medio](#capa2-topologias-control-acceso)
      - [4.8.1. Topologías Físicas y Lógicas](#capa2-topologias-fisicas-logicas)
      - [4.8.2. Métodos de Control de Acceso al Medio (MAC)](#capa2-metodos-control-acceso)
      - [4.8.3. Dispositivos Primarios de Capa 2](#capa2-dispositivos)
      - [4.8.4. Tipos de Redes por Alcance](#capa2-tipos-redes)
      - [4.8.5. Segmentación en Capa 2: VLANs y Dominios de Difusión](#capa2-segmentacion)
      - [4.8.6. VLAN vs SSID Adicional](#capa2-vlan-vs-ssid) <!-- Ancla específica para esta comparación -->
  - [5. Capa 3 OSI: Red – Direccionamiento Lógico y Enrutamiento Global](#capa3-red)
    - [5.1. Función Principal y PDU (Capa 3)](#capa3-funcion-pdu)
    - [5.2. Direccionamiento IP](#capa3-direccionamiento-ip)
        - [5.2.1. Dirección IPv4 (32 bits)](#capa3-ipv4)
        - [5.2.2. Desglosando una Dirección IP con su Máscara de Subred](#capa3-desglose-ip-mascara)
        - [5.2.3. Conversión CIDR a Máscara de Subred (IPv4)](#capa3-cidr-mascara)
        - [5.2.4. Máscara de Subred vs. Dirección MAC](#capa3-mascara-vs-mac)
        - [5.2.5. Direcciones IPv4 Públicas vs. Privadas](#capa3-ipv4-publica-privada)
        - [5.2.6. Rangos Comunes de IP Privada (RFC 1918)](#capa3-ip-privada-rangos)
    - [5.3. Conexión al Mundo Exterior: Router y NAT](#capa3-router-nat)
    - [5.4. Direcciones IPv4 Especiales](#capa3-ipv4-especiales)
    - [5.5. Clases de Direcciones IPv4 (Histórico)](#capa3-ipv4-clases)
    - [5.6. Asignación de Direcciones IP (IANA, RIRs, ISPs)](#capa3-asignacion-ip)
    - [5.7. Dirección IPv6 (128 bits)](#capa3-ipv6)
        - [5.7.1. Categorías de Direcciones IPv6](#capa3-ipv6-categorias)
        - [5.7.2. Longitud de Prefijo IPv6](#capa3-ipv6-prefijo)
        - [5.7.3. Tipos de Direcciones Unicast](#capa3-ipv6-unicast-tipos)
        - [5.7.4. Asignación de Direcciones GUA y LLA](#capa3-ipv6-asignacion)
        - [5.7.5. Direcciones Multicast IPv6](#capa3-ipv6-multicast)
        - [5.7.6. Verificación de la Configuración IPv6 en Cisco IOS](#capa3-ipv6-verificacion-ios)
    - [5.8. Dispositivos de Capa 3: Routers](#capa3-routers-dispositivos)
        - [5.8.2. Instalación Física y Encendido Inicial del Router](#capa3-router-power-on)
    - [5.9. Tabla de Enrutamiento y Decisiones de Reenvío](#capa3-tabla-enrutamiento)
        - [5.9.0. Decisiones de Reenvío del Host y Puerta de Enlace Predeterminada](#capa3-decision-host-gateway)
        - [5.9.1. Tabla de Enrutamiento del Host](#capa3-tabla-host)
        - [5.9.2. Tabla de Enrutamiento del Router](#capa3-tabla-router)
        - [5.9.3. Interpretación de la Tabla de Enrutamiento de un Router Cisco (`show ip route`) ](#capa3-show-ip-route)
        - [5.9.4. Ejemplo de Tabla de Enrutamiento](#capa3-tabla-ejemplo)
    - [5.10. Diseño de Red Jerárquico](#capa3-diseno-jerarquico)
    - [5.11. Resolución de Direcciones IP a MAC: ARP (IPv4) y NDP (IPv6)](#capa3-arp-ndp)
        - [5.11.1. Protocolo de Resolución de Direcciones (ARP) para IPv4](#capa3-arp)
        - [5.11.2. Protocolo de Descubrimiento de Vecinos (NDP) para IPv6](#capa3-ndp)
    - [5.12. ARP Spoofing/Poisoning Seguridad](#capa3-arp-spoofing-poisoning-security)
  - [6. Capa 4 OSI: Transporte – Comunicación Extremo a Extremo](#capa4-transporte)
    - [6.1. Función Principal y PDU (Capa 4)](#capa4-funcion-pdu)
    - [6.2. TCP vs. UDP](#capa4-tcp-udp-detallado)
    - [6.3. Sockets y Pares de Sockets](#capa4-sockets-pares)
      - [6.3.1. ¿Qué es un Socket?](#capa4-socket-que-es)
      - [6.3.2. El Par de Sockets: La Conexión Única](#capa4-par-sockets)
  - [7. Capas 5, 6 y 7 OSI: Sesión, Presentación y Aplicación](#capas567-aplicacion)
    - [7.1. Funciones Generales (Capas 5, 6, 7 OSI y Aplicación TCP/IP)](#capas567-funciones)
        - [7.1.1. Capa 5 (Sesión OSI)](#capas567-sesion)
        - [7.1.2. Capa 6 (Presentación OSI)](#capas567-presentacion)
        - [7.1.3. Capa 7 (Aplicación OSI) / Capa de Aplicación (TCP/IP)](#capas567-aplicacion-tcpip)
    - [7.2. Capa de Aplicación: Protocolos, Puertos y Servicios Esenciales](#capas567-protocolos-puertos)
    - [7.3. Tecnologías Relacionadas con Servicios de Aplicación](#capas567-tecnologias-relacionadas)
    - [7.4. Herramientas para Pruebas y Análisis de Protocolos (Aplicación)](#capas567-herramientas-analisis)
    - [7.5. Configuración de Direcciones IP: Estática vs. Dinámica (DHCP)](#capas567-dhcp)
    - [7.6. Tipos de Conexión a Internet (Servicios)](#capas567-conexion-internet)
    - [7.7. Identificadores de Red Comunes (Configuración de Usuario)](#capas567-identificadores-usuario)
    - [7.8. Caso de Uso: Servicios en la Nube](#capas567-cloud)
  - [8. Fundamentos de Sistemas Numéricos](#sistemas-numericos)
    - [8.1. Tipos de Sistemas Numéricos (Decimal, Binario, Hexadecimal)](#sistemas-numericos-tipos)
    - [8.2. Métodos de Conversión entre Sistemas Numéricos](#sistemas-numericos-conversion)
      - [8.2.1. Conversión de Decimal a Binario](#sistemas-numericos-dec-bin)
      - [8.2.2. Decimal a Hexadecimal y Hexadecimal a Decimal](#sistemas-numericos-dec-hex-y-hex-dex)
      - [8.2.3. Conversión de Decimal > Binario > Hexadecimal](#sistemas-numericos-dec-bin-hex)
      - [8.2.4. Conversión de Hexadecimal > Binario > Decimal](#sistemas-numericos-hex-bin-dec)  
  - [9. Herramientas de Solución de Problemas de Red (CLI)](#herramientas-cli)
    - [9.1. Comandos de Configuración IP (`ipconfig`, `ifconfig`, `ip`)](#cli-ipconfig)
    - [9.2. `ping` (Diagnóstico de Conectividad)](#cli-ping)
      - [9.2.1. Opciones Comunes de `ping`](#cli-ping-opciones)
      - [9.2.2. Ejemplos de Uso (`ping`)](#cli-ping-ejemplos)
    - [9.3. `tracert` / `traceroute` (Trazado de Ruta)](#cli-traceroute)
      - [9.3.1. Opciones Comunes de `tracert`/`traceroute`](#cli-traceroute-opciones)
      - [9.3.2. Ejemplos de Uso (`tracert`/`traceroute`)](#cli-traceroute-ejemplos)
    - [9.4. `netstat` / `ss` (Monitoreo de Conexiones Activas)](#cli-netstat-ss)
    - [9.5. `nslookup` (Consulta a DNS)](#cli-nslookup)
  - [10. Interfaz de Línea de Comandos (CLI) del IOS de Cisco: Configuración de Routers y Switches](#cisco-ios-cli-configuracion)
    - [10.1. Contexto y Fundamentos de la CLI del IOS de Cisco](#ios-cli-contexto)
    - [10.2. Modos de Comando del IOS](#ios-cli-modos)
    - [10.3. Navegación entre los Modos del IOS](#ios-cli-navegacion)
    - [10.4. Estructura de los Comandos del IOS](#ios-cli-estructura-comandos)
    - [10.5. Funciones de Ayuda y Atajos en la CLI](#ios-cli-ayuda-atajos)
    - [10.6. Visualización de Información del Dispositivo con Comandos `show`](#ios-cli-comandos-show)
    - [10.7. Nota sobre Herramientas de Simulación (Packet Tracer, etc.)](#ios-cli-simulacion)
  - [11. Configuración Básica de Dispositivos de Red Cisco (Switches y Routers)](#cisco-dispositivos-config-basica)
    - [11.1. Configuración Inicial de un Switch Cisco](#cisco-switch-config-inicial)
      - [11.1.1. Configuración de la Interfaz Virtual del Switch (SVI) para Gestión Remota](#switch-svi-config)
    - [11.2. Configuración de los Ajustes Iniciales del Router Cisco](#cisco-router-config-inicial)
      - [11.2.1. Pasos Esenciales de Configuración Básica del Router](#router-pasos-basicos)
  - [12. ICMP y Herramientas de Diagnóstico de Red (Ping y Traceroute)](#icmp-ping-traceroute-diagnostico)
    - [12.1. Protocolo de Mensajes de Control de Internet (ICMP)](#icmp-protocolo)
      - [12.1.1. Fundamentos y Propósito de ICMP](#icmp-fundamentos)
      - [12.1.2. Tipos Comunes de Mensajes ICMP (v4 y v6)](#icmp-tipos-comunes-v4v6)
      - [12.1.3. Mensajes Específicos de ICMPv6 para el Descubrimiento de Vecinos (NDP)](#icmpv6-ndp-mensajes-seccion12)
    - [12.2. `ping`: Prueba de Conectividad](#ping-herramienta)
      - [12.2.1. Funcionamiento y Casos de Uso de `ping`](#ping-funcionamiento-usos)
    - [12.3. `traceroute` / `tracert`: Trazado de Ruta](#traceroute-herramienta)
      - [12.3.1. Funcionamiento Detallado de `traceroute`](#traceroute-funcionamiento)
  - [13. Solución de Problemas de Red: Metodologías, Herramientas y Soporte](#troubleshooting-main)
    - [13.1. Principios Fundamentales de la Solución de Problemas](#troubleshooting-principles)
      - [13.1.1. ¿Qué es la Solución de Problemas?](#troubleshooting-what-is)
      - [13.1.2. La Importancia de la Documentación en la Solución de Problemas](#troubleshooting-documentation-importance)
      - [13.1.3. Proceso General de Siete Pasos para la Solución de Problemas](#troubleshooting-seven-steps)
    - [13.2. Recopilación Detallada de Información y Establecimiento de Líneas Base](#troubleshooting-info-baselines)
      - [13.2.1. Recopilación Eficaz de Información (Síntomas, Usuarios, Equipos)](#troubleshooting-gather-info-detailed)
      - [13.2.2. Documentación de Red Detallada para el Diagnóstico](#troubleshooting-network-documentation)
      - [13.2.3. Establecimiento y Uso de una Línea Base de Red](#troubleshooting-baselining)
      - [13.2.4. Descubrimiento de Dispositivos con Cisco Discovery Protocol (CDP)](#troubleshooting-cdp)
    - [13.3. Métodos Estructurados de Solución de Problemas](#troubleshooting-structured-methods)
      - [13.3.1. Enfoque Ascendente (Bottom-Up)](#troubleshooting-bottom-up)
      - [13.3.2. Enfoque Descendente (Top-Down)](#troubleshooting-top-down)
      - [13.3.3. Enfoque Divide y Vencerás](#troubleshooting-divide-conquer)
      - [13.3.4. Otros Enfoques Metodológicos](#troubleshooting-other-approaches)
      - [13.3.5. Pautas para Seleccionar un Método de Solución de Problemas](#troubleshooting-select-method-guidelines)
      - [13.3.6. Aplicación de Modelos en Capas (OSI/TCP/IP) al Troubleshooting](#troubleshooting-layered-models)
    - [13.4. Diagnóstico de Problemas Comunes por Área](#troubleshooting-common-issues-area)
      - [13.4.1. Problemas de Capa Física y Cableado](#troubleshooting-physical-cabling)
      - [13.4.2. Problemas de Conexión Inalámbrica](#troubleshooting-wireless-issues)
      - [13.4.3. Problemas Comunes de Conectividad a Internet](#troubleshooting-internet-issues)
    - [13.5. Herramientas de Diagnóstico y Verificación de Red](#troubleshooting-tools)
      - [13.5.1. Comandos de Verificación de Configuración de Red en Sistemas Operativos](#troubleshooting-os-commands)
      - [13.5.2. Comandos `show` de Cisco IOS para Diagnóstico](#troubleshooting-cisco-show-commands)
      - [13.5.3. Captura de Paquetes y Análisis de Protocolo (Wireshark)](#troubleshooting-wireshark)
      - [13.5.4. Medición del Rendimiento de la Red](#troubleshooting-performance-measurement)
    - [13.6. Soporte de Red y Gestión Avanzada en el Contexto del Troubleshooting](#troubleshooting-support-advanced)
      - [13.6.1. El Rol de las Mesas de Ayuda (Help Desk) y Sistemas de Tickets](#troubleshooting-helpdesk-ticketing)
      - [13.6.2. Técnicas de Interacción con Usuarios Finales (Preguntas, Escucha Activa)](#troubleshooting-user-interaction)
      - [13.6.3. Recopilación de Información para Tickets (Host y Dispositivos Cisco)](#troubleshooting-ticket-info-gathering)
      - [13.6.4. Políticas de Seguridad y Procedimientos Operativos Estándar (SOP)](#troubleshooting-security-sops)
      - [13.6.5. Solución de Problemas de Conectividad de Forma Remota](#troubleshooting-remote-access)
      - [13.6.6. Redes Privadas Virtuales (VPN) y su Relevancia en el Soporte Remoto](#troubleshooting-vpns)
      - [13.6.7. Introducción a los Sistemas de Gestión de Red (NMS)](#troubleshooting-nms)
      - [13.6.8. Introducción a Scripts, Automatización y Programabilidad en Redes](#troubleshooting-automation)
  - [14. Fundamentos de Ciberseguridad: Amenazas, Vulnerabilidades y Ataques](#cybersecurity-fundamentals)
    - [14.1. Comprensión de los Dominios y Tipos de Amenazas Cibernéticas](#threat-domains-types)
      - [14.1.1. Dominios de Amenazas](#threat-domains)
      - [14.1.2. Categorías de Amenazas Cibernéticas](#cyber-threat-categories)
    - [14.2. Origen de las Amenazas: Internas y Externas](#threat-origins)
      - [14.2.1. Amenazas Internas](#internal-threats)
      - [14.2.2. Amenazas Externas](#external-threats)
    - [14.3. Vulnerabilidades del Usuario y Amenazas a Dispositivos](#user-device-vulnerabilities)
      - [14.3.1. El Dominio de Usuario como Eslabón Débil](#user-domain-weakness)
      - [14.3.2. Amenazas Específicas a los Dispositivos](#device-threats)
    - [14.4. Amenazas a la Infraestructura de Red](#network-infrastructure-threats)
      - [14.4.1. Amenazas a la Red de Área Local (LAN)](#lan-threats)
      - [14.4.2. Amenazas a la Nube Privada](#private-cloud-threats)
      - [14.4.3. Amenazas a la Nube Pública](#public-cloud-threats)
      - [14.4.4. Amenazas a las Aplicaciones](#application-threats)
    - [14.5. Tipos Comunes de Malware](#common-malware-types)
    - [14.6. Ingeniería Social y Tácticas de Engaño](#social-engineering-deception)
      - [14.6.1. Tipos de Ataques de Ingeniería Social](#social-engineering-attack-types)
      - [14.6.2. Tácticas Psicológicas Utilizadas en Ingeniería Social](#social-engineering-tactics)
      - [14.6.3. Otros Métodos de Engaño](#other-deception-methods)
      - [14.6.4. Defensa Contra el Engaño y la Ingeniería Social](#deception-defense)
    - [14.7. Ataques Comunes a Nivel de Red y Sistema](#network-system-attacks)
      - [14.7.1. Ataques de Denegación de Servicio (DoS y DDoS)](#dos-ddos-attacks)
      - [14.7.2. Ataques al Sistema de Nombres de Dominio (DNS)](#dns-attacks)
      - [14.7.3. Ataques de Capa 2 (Enlace de Datos)](#layer2-attacks)
      - [14.7.4. Ataques Hombre en el Medio (MitM) y Hombre en el Móvil (MitMo)](#mitm-mitmo-attacks)
      - [14.7.5. Ataques de Día Cero (Zero-Day)](#zero-day-attacks)
      - [14.7.6. Ataques a la Cadena de Suministro](#supply-chain-attacks)
      - [14.7.7. Ataques de Inteligencia Artificial Adversarios](#adversarial-ai-attacks)
      - [14.7.8. Ataques Físicos](#physical-attacks)
    - [14.8. Amenazas Específicas a Dispositivos Inalámbricos y Móviles](#wireless-mobile-threats)
      - [14.8.1. Grayware y SMiShing](#grayware-smishing)
      - [14.8.2. Puntos de Acceso No Autorizados (Rogue APs) y Gemelos Malvados (Evil Twins)](#rogue-aps-evil-twins)
      - [14.8.3. Interferencia de Radiofrecuencia (RF Jamming)](#rf-jamming)
      - [14.8.4. Ataques Bluetooth](#bluetooth-attacks)
      - [14.8.5. Ataques contra Protocolos de Seguridad Wi-Fi](#wifi-protocol-attacks)
      - [14.8.6. Defensa contra Ataques a Dispositivos Inalámbricos y Móviles](#wireless-mobile-defense)
    - [14.9. Ataques Comunes a Aplicaciones](#common-application-attacks)
      - [14.9.1. Secuencias de Comandos entre Sitios (XSS - Cross-Site Scripting)](#xss-attacks)
      - [14.9.2. Ataques de Inyección](#injection-attacks)
      - [14.9.3. Desbordamiento de Búfer (Buffer Overflow)](#buffer-overflow-attacks)
      - [14.9.4. Ejecuciones Remotas de Código (RCE - Remote Code Execution)](#rce-attacks)
      - [14.9.5. Otros Ataques a Aplicaciones](#other-application-attacks)
      - [14.9.6. Defensa Contra Ataques de Aplicaciones](#application-attack-defense)
    - [14.10. Inteligencia de Amenazas y Defensa General](#threat-intelligence-defense)
      - [14.10.1. Fuentes de Inteligencia de Amenazas](#threat-intelligence-sources)
      - [14.10.2. Estrategias de Defensa General](#general-defense-strategies)
  - [15. Principios de Seguridad, Controles de Acceso y Defensa de Endpoints](#security-principles-access-defense)
    - [15.1. Fundamentos de Seguridad de la Información](#infosec-fundamentals)
      - [15.1.1. El Cubo de Ciberseguridad](#cybersecurity-cube)
      - [15.1.2. La Tríada CIA: Confidencialidad, Integridad y Disponibilidad](#cia-triad)
    - [15.2. Control de Acceso](#access-control)
      - [15.2.1. Controles de Acceso Físico](#physical-access-controls)
      - [15.2.2. Controles de Acceso Lógico](#logical-access-controls)
      - [15.2.3. Controles de Acceso Administrativo](#administrative-access-controls)
    - [15.3. Autenticación, Autorización y Contabilidad (AAA)](#aaa-framework)
      - [15.3.1. Autenticación](#aaa-authentication)
        - [15.3.1.1. Contraseñas y Frases de Contraseña](#passwords-passphrases)
      - [15.3.2. Autorización](#aaa-authorization)
      - [15.3.3. Contabilidad (Auditoría - Accounting)](#aaa-accounting)
      - [15.3.4. Identificación y Gestión de Identidad Federada (FIM)](#identification-fim)
    - [15.4. Defensa y Endurecimiento de Sistemas y Dispositivos (Endpoints)](#system-device-defense)
      - [15.4.1. Seguridad del Sistema Operativo (OS Hardening)](#os-hardening)
      - [15.4.2. Software Antimalware](#antimalware-software)
      - [15.4.3. Administración de Parches](#patch-management)
      - [15.4.4. Soluciones de Seguridad Basadas en Host (Endpoint Security)](#host-based-security)
      - [15.4.5. Cifrado de Datos en el Host](#host-encryption)
      - [15.4.6. Integridad del Proceso de Arranque](#boot-integrity)
      - [15.4.7. Protección Física de Dispositivos](#physical-device-protection)
    - [15.5. Firewalls: Tipos y Funcionamiento (Revisión y Profundización)](#firewalls-types-operation)
      - [15.5.1. Propiedades, Ventajas y Limitaciones Comunes de los Firewalls](#firewall-common-properties)
      - [15.5.2. Tipos de Firewalls](#firewall-types-detailed)
    - [15.6. Aseguramiento del Acceso Inalámbrico (WLAN Security)](#wlan-security)
      - [15.6.1. Amenazas Específicas a WLANs (Revisión)](#wlan-threats-review)
      - [15.6.2. Técnicas de Seguridad Inalámbrica (Históricas y Actuales)](#wireless-security-techniques)
      - [15.6.3. Configuración de Seguridad Inalámbrica (Ejemplo Práctico)](#wireless-security-config) 
</details>

---

## 1. Introducción a las Redes <a name="introduccion-redes"></a>
<details>
  <summary>Ver/Ocultar capa 1</summary>

### 1.1. ¿Qué es Internet y Cómo se Organiza la Comunicación? <a name="que-es-internet"></a>

**Internet** es una "red de redes" (internetwork) global que interconecta millones de dispositivos (computadoras, servidores, móviles) mediante tecnologías cableadas e inalámbricas, permitiendo el intercambio de información a escala mundial.

**Analogía del Viaje de Datos:**
Cuando los datos viajan por la red, es como una persona en un viaje internacional:
*   **Identificación:** Necesita identificadores (direcciones MAC y IP).
*   **Origen y Destino:** Requiere una dirección de partida y una de llegada.
*   **Permanencia:** Las conexiones tienen una duración.
   
### 1.2. Modelos de Referencia: TCP/IP y OSI <a name="modelos-referencia"></a>

Para entender este complejo proceso, se utilizan modelos de referencia:

1.  **Modelo TCP/IP (Transmission Control Protocol/Internet Protocol):**
    *   Un modelo práctico y el estándar de facto en Internet. Se organiza en capas:
        *   **Acceso a la Red (Network Access):** Cómo los datos se mueven por el medio físico y la red local.
        *   **Internet:** Direccionamiento lógico y enrutamiento global (principal protocolo: **IP - Internet Protocol**).
        *   **Transporte (Transport):** Comunicación extremo a extremo, confiable o rápida (principales protocolos: **TCP - Transmission Control Protocol**, **UDP - User Datagram Protocol**).
        *   **Aplicación (Application):** Interfaz para aplicaciones de usuario y servicios de red (Ej: HTTP).

2.  **Modelo OSI (Open Systems Interconnection):**
    *   Un modelo conceptual de 7 capas, más detallado, que ayuda a entender cada paso de la comunicación.

* **Tabla Comparativa de Capas TCP/IP vs. OSI:**

| **Nº** | **Capa TCP/IP** | **Capa OSI** | **Función Principal** | **Detalles Clave y Ejemplos Prácticos** | **¿Cómo Recordarlo Fácil?** |
|---|---|---|---|---|---|
| 7 | Aplicación | Aplicación | **(Usuario y Servicios)**: Proporciona la interfaz para que las aplicaciones de red interactúen con el usuario y ofrezcan servicios. | * Define la forma en que las aplicaciones acceden a la red. Incluye protocolos para correo electrónico (SMTP, POP3, IMAP), web (HTTP, HTTPS), transferencia de archivos (FTP), acceso remoto (SSH), nombres de dominio (DNS), etc. * **Ejemplo:** Usar Outlook para enviar un correo (la aplicación interactúa con los protocolos SMTP para enviar y POP3/IMAP para recibir). | **El programa que usas:** ¡El navegador, el correo, el juego en línea! |
| 6 | Aplicación | Presentación | **(Formato y Cifrado)**: Garantiza que los datos sean presentados de manera comprensible para la aplicación receptora, manejando formatos, cifrado y compresión. | * Convierte los datos a un formato común, cifra datos sensibles para seguridad (SSL/TLS), y comprime para eficiencia. * **Ejemplo:** Un navegador web entendiendo una imagen JPEG (formato) o una página web segura con HTTPS (cifrado). | **Traduce y Protege:** ¡Como un intérprete y guardaespaldas de la información! |
| 5 | Aplicación | Sesión | **(Conexiones y Diálogos)**: Establece, gestiona y finaliza las conexiones (sesiones) entre aplicaciones. | * Define cómo comenzar, controlar y terminar "conversaciones" entre aplicaciones. Sincroniza la comunicación y maneja interrupciones. * **Ejemplo:** Mantener una sesión activa en un juego en línea o una videoconferencia sin que se interrumpa constantemente. | **La Conversación Continua:** ¡Asegura que no te corten la llamada a mitad de la frase! |
| 4 | Transporte | Transporte | **(Comunicación Confiable o Rápida)**: Proporciona una comunicación confiable (TCP) o rápida (UDP) entre aplicaciones, segmentando datos y controlando el flujo. | * **TCP:** Orientado a conexión, entrega confiable, control de flujo, reordenamiento de paquetes, corrección de errores. Confirma la recepción de datos mediante **ACK (acuse de recibo)** para verificar la entrega o, en caso de error, puede enviar un **NACK (acuse de no recibo o recibo mal)** para solicitar la retransmisión. * **UDP:** Sin conexión, más rápido, sin garantías de entrega. * **Ejemplo:** Descargar un archivo grande (TCP) para asegurar que no se corrompa vs. ver una transmisión en vivo (UDP) donde perder algunos paquetes es aceptable. | **Elige el Mensajero:** ¡Confianza (TCP) o Velocidad (UDP)! |
| 3 | Internet | Red | **(Enrutamiento Global)**: Enruta los paquetes de datos entre diferentes redes, definiendo el direccionamiento IP y encontrando la mejor ruta. | * Define el direccionamiento lógico (IP) para identificar dispositivos en la red. Enruta paquetes a través de múltiples redes hasta su destino final. * **Ejemplo:** Un paquete de datos viajando desde tu casa a un servidor en otro país, pasando por múltiples routers. | **El Mapa de la Red:** ¡Encuentra el camino a casa! |
| 2 | Acceso a la Red | Enlace de Datos | **(Enlace Local y Direccionamiento Físico)**: Transfiere datos entre dos nodos directamente conectados, definiendo el formato de las **tramas** y las direcciones MAC. | * **Creación de Tramas:** Los datos de la capa de Red se encapsulan en tramas en esta capa. Si faltan datos para completar la trama, se puede usar padding. * Controla el acceso al medio (MAC), maneja notificación de errores, la topología de red, control de flujo y direccionamiento físico (MAC). *Tu computadora, Tablet, PS5 comunicándose directamente con tu router a través de Ethernet o Wi-Fi gracias a su NIC inalámbrica con dirección MAC*. * **Ejemplo:** Switches y bridges conectando dispositivos en una red local. * **Subcapas (clave):** MAC (Media Access Control) y LLC (Logical Link Control). * **Ejemplo:** Tu computadora comunicándose directamente con tu router a través de Ethernet o Wi-Fi. * **Protocolos/Tecnologías:** CSMA/CD (en redes Ethernet antiguas, detección de colisión). | **La Calle Local:** ¡Entre tu casa y la avenida principal! |
| 1 | Acceso a la Red | Física | **(Transmisión Física de Bits)**: Transmite los datos brutos (bits) a través del medio físico, definiendo voltajes, tasas de datos y conectores. | * Implementación en hardware, codificación de canal, representación de bits, voltaje, frecuencia, sincronización, conectores físicos, distancias y cableado. Medios de transmisión: Cables (Ethernet, UTP, FTP, SFTP), Radiofrecuencias (Wi-Fi, Bluetooth, ZigBee) *Ejemplo: Redes Wi-Fi unificadas que operan en 2.4 GHz y 5 GHz*, F.O. (Fibra Óptica), AP (Puntos de Acceso), Hubs. La capa física define las características de la transmisión, incluyendo el tipo de antena (direccional, omnidireccional, sectorial) Transmisión Simplex, Half-Duplex, Full-Duplex. * **Tecnologías:** SONET (con WDM "espacio" y TDMA "tiempo"), Ethernet, Wi-Fi, Bluetooth, ZigBee, USB. * **Componentes:** Activos (amplificadores, repetidores), Pasivos (cables, conectores). **Verifica la cantidad de bits, no la calidad.** * **Ejemplo:** Un cable Ethernet conectando tu computadora al router o las ondas de radio transmitiendo datos Wi-Fi. | **El Cable y las Ondas:** ¡La autopista de los bits! |

*Antes de explorar cada capa del modelo OSI en detalle, es importante entender algunos principios fundamentales que guían el diseño de redes robustas, escalables y eficientes.*

## 2. Principios Fundamentales del Diseño de Redes <a name="principios-diseno"></a>

Antes de explorar cada capa del modelo OSI en detalle, es importante entender algunos principios fundamentales que guían el diseño de redes robustas, escalables y eficientes.

### 2.1. Pilares de una Red Confiable <a name="pilares-red"></a>
Una arquitectura de red bien diseñada se esfuerza por cumplir con cuatro pilares esenciales:

1.  **Tolerancia a Fallas (Fault Tolerance):**
    *   **Objetivo:** Asegurar la continuidad del servicio y la conectividad incluso si ocurren fallos en componentes de la red.
    *   **Cómo se logra:** Mediante la redundancia (múltiples rutas, fuentes de alimentación redundantes, etc.).

2.  **Escalabilidad (Scalability):**
    *   **Objetivo:** Diseñar la red para que pueda crecer y adaptarse fácilmente a futuras demandas sin rediseños completos ni degradación del rendimiento.
    *   **Cómo se logra:** Diseño modular, jerárquico, equipos con capacidad de crecimiento.

3.  **Calidad de Servicio (QoS - Quality of Service):**
    *   **Objetivo:** Priorizar diferentes tipos de tráfico para asegurar que las aplicaciones críticas o sensibles al tiempo (voz, video) funcionen óptimamente.
    *   **Cómo se logra:** Mecanismos de clasificación, marcado, colas y gestión de ancho de banda.

4.  **Seguridad (Security):**
    *   **Objetivo:** Proteger la infraestructura y la información contra accesos no autorizados, modificaciones o denegación de servicio.
    *   **Componentes Clave:** Confidencialidad, Integridad, Disponibilidad.
    *   **Cómo se logra:** Firewalls, IDS/IPS, ACLs, VPNs, autenticación.

*A continuación, exploraremos los conceptos de red siguiendo la estructura del Modelo OSI.*

## 3. Capa 1 OSI: Física – La Transmisión de Bits <a name="capa1-fisica"></a>

### 3.1. Función Principal y PDU (Capa 1) <a name="capa1-funcion-pdu"></a>

*   **Función Principal (OSI):** Transmitir el flujo de bits (0s y 1s) a través del medio físico. Esta capa **acepta una trama completa desde la capa de enlace de datos y la codifica como una secuencia de señales que se transmiten en los medios locales, una a la vez.** Define características eléctricas, mecánicas y funcionales (voltajes, tasas de bits, conectores, tipos de cable, radiofrecuencias). **La capa física del nodo de destino recupera estas señales individuales de los medios, las restaura a sus representaciones en bits y pasa los bits a la capa de enlace de datos en forma de trama completa.**
*   **Equivalente TCP/IP:** Parte de la capa de Acceso a la Red.
*   **PDU (Protocol Data Unit):** Bits.

### 3.2. Medios de Red <a name="capa1-medios"></a>

El "camino" físico por el que viajan los datos.

**Consideraciones Generales para Cableado de Cobre:**
Las redes utilizan medios de cobre por ser económicos, fáciles de instalar y tener baja resistencia eléctrica. Sin embargo, están limitados por la distancia y la interferencia de señal. Los datos se transmiten como impulsos eléctricos.
*   **Atenuación:** Es el deterioro o pérdida de fuerza de la señal a medida que viaja más lejos por el medio.
*   **Interferencia:**
    *   **EMI (Interferencia Electromagnética) / RFI (Interferencia de Radiofrecuencia):** Pueden distorsionar las señales de datos. Provienen de fuentes como ondas de radio, luces fluorescentes o motores eléctricos. El blindaje en cables como STP o coaxial ayuda a contrarrestarlas, pero requiere una correcta conexión a tierra (de lo contrario, el blindaje puede actuar como antena).
    *   **Diafonía (Crosstalk):** Perturbación causada por campos eléctricos o magnéticos de una señal en un cable que afectan la señal en un cable adyacente. En cables UTP, se contrarresta mediante:
        *   **Anulación:** Los pares de hilos trenzados crean campos magnéticos opuestos que se cancelan entre sí.
        *   **Variación del número de vueltas:** Cada par de hilos en un cable UTP tiene un número diferente de trenzas por metro para optimizar la cancelación.

| Medio                               | Tipo de Datos         | Distancia Máxima                          | Ancho de Banda/Velocidad | Funcionalidad y Detalles Adicionales                                                                                                                                                                                                                                                                                                                                                                                                                      | Ejemplo de Uso                                                                     |
|-------------------------------------|-----------------------|-------------------------------------------|--------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------|
| **Par Trenzado (UTP - Cat5/5e/6/6a)**     | Impulsos Eléctricos   | Hasta 100 metros (Ethernet)               | Moderado a Alto          | El cableado UTP (Par Trenzado No Blindado) es el más común en LAN. Consta de cuatro pares de hilos de cobre trenzados, codificados por colores, dentro de una funda plástica. Se termina con conectores RJ-45. **Estándares UTP:** La ANSI/TIA-568 define estándares comerciales para cableado LAN (tipos, longitudes, conectores, terminación). El IEEE califica el cableado UTP por rendimiento en categorías (ej: Cat 5e para Gigabit Ethernet, Cat 6 recomendada para nuevas instalaciones, Cat 6a, Cat 7, Cat 8 para velocidades superiores). **Tipos de Cable UTP por terminación (T568A/T568B):** Cable Directo (Straight-through), Cable Cruzado (Crossover - legado debido a Auto-MDIX), Cable de Consola (Rollover - Cisco). Una terminación incorrecta puede degradar el rendimiento. | Conectar una PC a un router en casa o en la oficina.                                 |
| **Par Trenzado Blindado (STP)**     | Impulsos Eléctricos   | Similar a UTP                             | Moderado a Alto          | Ofrece mejor protección contra ruido (EMI/RFI) que UTP, pero es más costoso y difícil de instalar. Utiliza conectores RJ-45 (especiales blindados). Combina blindaje (lámina individual por par y/o una malla/lámina general) y trenzado de hilos. Requiere una correcta conexión a tierra del blindaje.                                                                                                                                                 | Entornos con alta interferencia electromagnética.                                  |
| **Coaxial**                         | Impulsos Eléctricos   | Media (depende de la frecuencia)          | Moderado                 | Consta de un conductor de cobre central, aislamiento plástico, una malla de cobre tejida (segundo conductor y blindaje contra EMI/RFI) y cubierta exterior. Dos conductores comparten el mismo eje. **Conectores comunes:** BNC, Tipo N, Tipo F. **Usos actuales:** Instalaciones inalámbricas (conexión de antenas), instalaciones de Internet por cable (cableado dentro de la casa del cliente).                                                                       | Conexión de un televisor a un servicio de cable, conexión satelital, antenas Wi-Fi. |
| **Fibra Óptica**                    | Pulsos de Luz         | Varios kilómetros o más                   | Muy Alto                 | Transmite datos como impulsos de luz, ideal para largas distancias y altos anchos de banda. Inmune a EMI/RFI y con baja atenuación. Hilo delgado de vidrio puro. **Tipos:** **Monomodo (SMF):** Núcleo pequeño (~9 micras), láser, un rayo de luz, largas distancias, menor dispersión. **Multimodo (MMF):** Núcleo más grande (~50/62.5 micras), LEDs, múltiples rayos, distancias más cortas, mayor dispersión. **Conectores:** ST, SC, LC (común en SFP). **Colores de patch cords:** Amarillo (SMF), Naranja/Aguamarina (MMF). Proteger conectores con capuchones. | Redes troncales, conexión de ciudades, centros de datos, FTTH.                      |
| **Inalámbrico**                     | Ondas Electromagnéticas | Variable (depende del estándar y entorno) | Bajo a Moderado          | Conexión de dispositivos sin cables mediante modulación de frecuencias.                                                                                                                                                                                                                                                                                                                                                                                                  | Conexión de laptops, smartphones, tablets a redes Wi-Fi; Bluetooth; redes celulares. |

*(EMI: Interferencia Electromagnética, RFI: Interferencia de Radiofrecuencia)*

### 3.3. Multiplexación <a name="capa1-multiplexacion"></a>

Técnica para combinar múltiples flujos de datos en un único canal de comunicación compartido.

| Tipo          | Explicación Simple                                                    | Ejemplo Práctico                                     |
| :------------ | :-------------------------------------------------------------------- | :--------------------------------------------------- |
| **FDM** (Frecuencia) | Cada señal viaja por una "banda" de frecuencia diferente dentro del canal. | Radio FM/AM, TV analógica por cable                |
| **TDM** (Tiempo)    | Cada señal usa todo el ancho de banda del canal, pero en pequeños turnos de tiempo asignados. | Telefonía digital (líneas T1/E1), algunas redes SONET/SDH |
| **WDM** (Long. de onda) | Específico para fibra óptica; múltiples señales viajan como diferentes "colores" (longitudes de onda) de luz. | Internet por fibra óptica de alta capacidad (DWDM, CWDM) |
| **CDM** (Código)    | Cada señal se mezcla con un código único que permite separarlas en el receptor aunque usen la misma frecuencia/tiempo. | Redes celulares (CDMA, WCDMA), GPS                |
| **SDM** (Espacial)  | Utiliza diferentes rutas físicas o antenas para transmitir señales separadas simultáneamente. | Antenas MIMO en Wi-Fi y 4G/5G, sistemas de fibra óptica paralela |

### 3.4. Características Fundamentales de la Capa Física (Estándares, Codificación, Señalización y Ancho de Banda) <a name="capa1-caracteristicas-fundamentales"></a>

*   **Estándares de la Capa Física:**
    *   La capa física consta de **circuitos electrónicos, medios y conectores** desarrollados por ingenieros.
    *   Sus estándares (hardware, medios, codificación, señalización) son definidos por organizaciones como **ISO, ANSI/TIA, ITU, IEEE**, y autoridades reguladoras nacionales/regionales (ej: FCC en EE.UU., ETSI en Europa).
    *   Esto contrasta con los protocolos de capas superiores (ej: TCP/IP regidos por la IETF) que se implementan principalmente en software.

*   **Componentes Físicos:**
    *   Incluyen el **hardware electrónico (como las NIC), los medios (cables, aire), y los conectores** especificados en los estándares. Definen cómo se transmiten físicamente las señales que representan los bits.

*   **Codificación de Línea, Señalización y Sincronización:**
    *   Una vez que la Capa de Enlace de Datos (específicamente la subcapa MAC) ha ensamblado completamente la trama (ej: trama Ethernet con su preámbulo, SFD, direcciones MAC, EtherType, datos y FCS), esta secuencia de bits lógicos debe ser convertida en señales físicas para su transmisión a través del medio de red. Esta es una función principal de la Capa 1.
    *   **Codificación de Línea (Line Coding):** Es el método para convertir el flujo de bits de datos en un "código" predefinido, un patrón de señales reconocible tanto por el emisor como por el receptor. Se utiliza para que el dispositivo receptor pueda:
        1.  Distinguir correctamente entre un bit '0' y un bit '1' representado por la señal física.
        2.  Mantener la sincronización del reloj entre el transmisor y el receptor (saber cuándo comienza y termina cada bit).
        *   **Propósito:** Convertir los bits lógicos en señales físicas (eléctricas, ópticas) que sean robustas, interpretables por el receptor y que faciliten la sincronización.
        *   **Ejemplos de Esquemas de Codificación (especificados por estándares como IEEE 802.3 para Ethernet):**
            *   **En Cobre (Par Trenzado):**
                *   **Manchester Coding (utilizado en 10BASE-T Ethernet):** Cada bit tiene una transición de voltaje en el medio de su período (ej: '0' = alto a bajo, '1' = bajo a alto). La transición constante ayuda a la recuperación del reloj.
                *   **MLT-3 (Multi-Level Transmit, 3 niveles - usado en 100BASE-TX "Fast Ethernet"):** Utiliza tres niveles de voltaje, reduciendo la frecuencia de señal necesaria.
                *   **PAM (Pulse Amplitude Modulation - ej: PAM-5 para Gigabit Ethernet 1000BASE-T, PAM-16 para 10GBASE-T y superiores):** Utiliza múltiples niveles de amplitud de pulso para codificar varios bits por símbolo, permitiendo mayores velocidades.
            *   **En Fibra Óptica:** Implican modular la luz. Se usan esquemas como **NRZ (Non-Return to Zero)** (presencia/ausencia de luz) o más complejos como **8B/10B** (8 bits de datos se codifican en un símbolo de 10 bits para asegurar transiciones y balance DC) o **64B/66B** para velocidades más altas.
    *   **Señalización:** Es la generación de las señales físicas (eléctricas, ópticas o de ondas de radio) que representan los '1' y los '0' en el medio de transmisión. Los estándares definen qué tipo de señal (ej: un nivel de voltaje específico, un pulso de luz) representa un '1' y cuál un '0'.
    *   **Sincronización del Reloj:**
        *   El **Preámbulo** (7 bytes de `10101010...` en tramas Ethernet) al inicio de la trama es crucial. Esta secuencia predecible de bits alternantes permite al circuito receptor "enganchar" su reloj (PLL - Phase-Locked Loop) al ritmo de la señal entrante.
        *   El **SFD (Start Frame Delimiter)** (`10101011` en tramas Ethernet), con su patrón final `11`, indica al receptor que la sincronización ha terminado y que los siguientes bits corresponden al inicio de la carga útil de la trama (la dirección MAC de destino en Ethernet).

*   **Ancho de Banda y Terminología Relacionada:**
    *   **Ancho de Banda:** Es la capacidad teórica de un medio para transportar datos. Se mide en bits por segundo (bps), kbps, Mbps, Gbps. Indica la **cantidad de bits que se pueden transmitir por segundo**, no la velocidad a la que viaja un bit individual. (Permite enviar más bits, no es velocidad, es cantidad).
    *   **Latencia:** Es la cantidad de tiempo, incluidas las demoras, que tardan los datos en transferirse de un punto a otro.
    *   **Rendimiento (Throughput):** Es la medida real de la transferencia de bits a través del medio durante un período determinado. Generalmente es menor que el ancho de banda especificado debido a factores como la cantidad y tipo de tráfico, y la latencia introducida por los dispositivos de red.
    *   **Capacidad de Transferencia Útil (Goodput):** Es la medida de los datos *utilizables* transferidos, excluyendo la sobrecarga de los protocolos (encabezados, acuses de recibo, bits retransmitidos). Siempre es menor que el rendimiento.

</details>

### 3.5. Otros Conceptos y Dispositivos de Capa 1 <a name="capa1-otros"></a>

*   **Codificación y Sincronización de Bits.**
*   **Dispositivos de Capa 1:**
    *   **Hubs (Concentradores):** Obsoletos. Repiten la señal a todos los puertos.
    *   **Repetidores:** Regeneran la señal para extender la distancia.
    *   **Transceptores (Transceivers):** Convierten señales entre tipos de medios.
    *   **Cables y Conectores:** (RJ45, Fibra LC/SC, etc.).
    *   **Componente Físico de la NIC:** La parte de la tarjeta de red que se conecta al medio.
*   **Dispositivos Finales:** (PCs, servidores, impresoras, teléfonos IP, etc.) se conectan físicamente en esta capa, aunque su operación completa abarca capas superiores.
</details>

## 4. Capa 2 OSI: Enlace de Datos – Comunicación en la Red Local <a name="capa2-enlace"></a>

<details>
  <summary>Ver/Ocultar Detalles de Capa 2: Enlace de Datos</summary>

### 4.1. Función Principal y PDU <a name="capa2-funcion-pdu"></a>  

*   **Función Principal (OSI):** La Capa de Enlace de Datos es responsable de la **transferencia fiable de datos (en forma de tramas)** entre dos nodos (dispositivos) directamente conectados en la *misma red local física (segmento de red)*. Se encarga del direccionamiento físico (usando direcciones MAC), de **controlar el acceso al medio de transmisión compartido**, y de la detección básica de errores ocurridos durante la transmisión física.
*   **Equivalente TCP/IP:** Las funciones de la Capa de Enlace de Datos (y también de la Capa Física) se agrupan en la capa de **Acceso a la Red** del modelo TCP/IP.
*   **PDU (Protocol Data Unit):** En esta capa, la unidad de datos se denomina **Trama (Frame)**.

### 4.2. Organizaciones y Estándares Clave <a name="capa2-estandares"></a>
Varias organizaciones juegan un papel crucial en la definición de los estándares que permiten la interoperabilidad en la Capa de Enlace de Datos y otras capas:
*   **IEEE (Institute of Electrical and Electronics Engineers):** Una organización profesional clave que desarrolla y mantiene muchos estándares de red, especialmente conocidos son los estándares del grupo **IEEE 802**, que incluyen:
    *   **IEEE 802.3:** Define el estándar para **Ethernet**, la tecnología predominante para redes LAN cableadas.
    *   **IEEE 802.11:** Define los estándares para **Redes de Área Local Inalámbricas (WLAN)**, comúnmente conocidas como Wi-Fi.
    *   **IEEE 802.2:** Definía la subcapa LLC (Logical Link Control), que proporcionaba una interfaz a las capas superiores.
*   **IANA (Internet Assigned Numbers Authority):** Responsable de la coordinación global de la raíz DNS, el direccionamiento IP y otros recursos numéricos de protocolos de Internet. Aunque su rol principal es en capas superiores (IP, puertos), su gestión de identificadores es fundamental.
*   **IETF (Internet Engineering Task Force):** Desarrolla y promueve estándares de Internet voluntarios, especialmente los estándares que componen la suite de protocolos TCP/IP, a través de documentos **RFC (Request for Comments)**.
*   **ISO (International Organization for Standardization):** Desarrolló el modelo de referencia OSI.

### 4.3. Tarjeta de Interfaz de Red (NIC) <a name="capa2-nic"></a>
La **Tarjeta de Interfaz de Red (NIC)**, también conocida como adaptador de red o tarjeta de red, es el componente de hardware que permite a un dispositivo (como una computadora, servidor o impresora) conectarse físicamente a una red.
*   **Función en Capa 2 (y Capa 1):**
    *   Implementa los protocolos de la Capa de Enlace de Datos y la Capa Física.
    *   **Contiene la dirección MAC única** asignada por el fabricante, que se utiliza para el direccionamiento en la Capa 2.
    *   Participa activamente en la **creación de tramas** (encapsulación) antes de la transmisión y en el **procesamiento de tramas** recibidas (desencapsulación).
    *   Maneja la interfaz con el medio físico de la red.
*   **Tipos Comunes:**
    *   **NIC Ethernet:** Para conexiones cableadas usando cables de par trenzado (con conectores RJ45) o fibra óptica.
    *   **NIC Wi-Fi (Inalámbrica):** Para conexiones a redes inalámbricas.
    *   **NIC Virtual (vNIC):** Creadas por software para máquinas virtuales (VMs) o contenedores, permitiéndoles tener su propia identidad de red (incluyendo una MAC virtual).
*   **Analogía:** La NIC es como el **carnet de identificación físico** del dispositivo para la red local, conteniendo su "número de serie" (la dirección MAC).

### 4.4. Ethernet: La Tecnología LAN Predominante <a name="capa2-ethernet"></a>
Ethernet es, con diferencia, la tecnología más extendida para las redes de área local (LAN) cableadas.

#### 4.4.1. Historia y Evolución de Ethernet <a name="capa2-ethernet-historia"></a>
*   **El Problema Original (Años 70):** En los inicios de las redes, la comunicación entre equipos de diferentes fabricantes era un gran desafío debido a la multitud de protocolos propietarios incompatibles (desarrollados por IBM, Xerox, HP, etc.). Esta falta de interoperabilidad limitaba enormemente la expansión y la flexibilidad de las redes.
*   **La Solución: Estándares y el Triunfo de Ethernet:** Surgió una clara necesidad de estándares abiertos. Ethernet, inventado originalmente por Xerox en el Palo Alto Research Center (PARC) en 1973, fue posteriormente desarrollado y estandarizado, principalmente bajo la especificación **IEEE 802.3**. Su éxito masivo se debe a una combinación de factores:
    *   **Robustez y Fiabilidad.**
    *   **Costo relativamente bajo** de implementación.
    *   **Simplicidad** en comparación con otras tecnologías LAN de la época.
    *   Crucialmente, su **capacidad de evolucionar** para soportar velocidades cada vez mayores.

    **Escala de Tiempo Simplificada de la Evolución de Ethernet:**

    | Año/Periodo      | Estándar/Hito Clave                               | Descripción Breve / Velocidad / Medio Principal          |
    | :--------------- | :------------------------------------------------ | :------------------------------------------------------- |
    | Años 70          | Protocolos Propietarios                           | Incompatibilidad entre fabricantes.                      |
    | 1973             | Invención de Ethernet (Xerox)                     | Concepto inicial, red experimental a ~3 Mbps.            |
    | 1980             | DIX Standard (Ethernet II - DEC, Intel, Xerox)    | 10 Mbps sobre cable coaxial grueso. Precursor del estándar IEEE. |
    | 1983             | **IEEE 802.3 (10BASE5 "Thick Ethernet")**         | Estandarización formal. 10 Mbps sobre cable coaxial grueso. |
    | 1985             | IEEE 802.3a (10BASE2 "Thin Ethernet" o "Cheapernet")| 10 Mbps sobre cable coaxial delgado, más económico y flexible. |
    | 1990             | **IEEE 802.3i (10BASE-T)**                        | **10 Mbps sobre par trenzado no blindado (UTP)**. ¡Este fue un punto de inflexión para la adopción masiva de Ethernet en oficinas debido a su costo y facilidad de cableado estructurado! |
    | 1995             | IEEE 802.3u (Fast Ethernet: 100BASE-TX, 100BASE-FX) | **100 Mbps** sobre par trenzado (Cat5) y fibra óptica.   |
    | 1998-1999        | IEEE 802.3z/ab (Gigabit Ethernet: 1000BASE-X/T)   | **1 Gbps (1000 Mbps)** sobre fibra óptica y par trenzado (Cat5e/Cat6). |
    | 2002 en adelante | IEEE 802.3ae/an/etc.                              | **10 Gbps (10GBASE-T/SR/LR...), 40 Gbps, 100 Gbps y más** sobre fibra y par trenzado mejorado (Cat6a/Cat7). También se introdujo **PoE (Power over Ethernet)** en estándares como IEEE 802.3af y 802.3at. |
    | 2016 - Presente  | IEEE 802.3bz (NBASE-T: 2.5GBASE-T, 5GBASE-T)      | Velocidades intermedias de 2.5 Gbps y 5 Gbps diseñadas para operar sobre cableado de par trenzado Cat5e/Cat6 existente, facilitando actualizaciones. |

#### 4.4.2. Subcapas de Enlace de Datos en Ethernet (LLC y MAC) <a name="capa2-ethernet-subcapas"></a>
Como se mencionó, la Capa de Enlace de Datos, según el modelo IEEE 802, se divide en dos subcapas para organizar sus funciones:

*   **Subcapa LLC (Logical Link Control - Control de Enlace Lógico - IEEE 802.2):**
    *   **Función Principal:** Actúa como una interfaz entre los protocolos de la capa de red (Capa 3, ej: IP, IPX) y la subcapa MAC. Es responsable de identificar el protocolo de capa de red que se está utilizando para una trama y puede proporcionar servicios de control de flujo y errores opcionales (aunque en Ethernet moderno, la fiabilidad se delega principalmente a TCP en Capa 4).
    *   **Identificación del Protocolo de Capa Superior:** La LLC utiliza un campo en la trama (en las tramas Ethernet II, este es el campo **EtherType**) para indicar qué protocolo de Capa 3 está encapsulado dentro de la trama. Esto es crucial porque permite que múltiples protocolos de Capa 3 (como IPv4, ARP, IPv6) compartan la misma interfaz de red y el mismo medio físico.
    *   **Implementación:** Generalmente se implementa en **software**, a menudo como parte del controlador (driver) de la tarjeta de red.

*   **Subcapa MAC (Media Access Control - Control de Acceso al Medio - IEEE 802.3 para Ethernet):**
    *   **Funciones Principales:**
        1.  **Encapsulación de Datos:** Es responsable de construir la **trama Ethernet**. Esto incluye añadir el encabezado MAC (que contiene las **direcciones MAC de destino y origen**) y el tráiler (que incluye la **Secuencia de Verificación de Trama - FCS** para la detección de errores).
        2.  **Control de Acceso al Medio:** Define el método por el cual múltiples dispositivos comparten el acceso al medio físico de transmisión.
            *   **Ethernet Heredado (Half-Duplex, usando hubs o topología de bus):** Utilizaba **CSMA/CD (Carrier Sense Multiple Access with Collision Detection)**. Los dispositivos "escuchaban" el medio antes de transmitir; si dos transmitían a la vez, ocurría una colisión, y ambos esperaban un tiempo aleatorio antes de reintentar.
            *   **Ethernet Moderno (Full-Duplex, usando switches):** En conexiones punto a punto entre un dispositivo y un puerto de switch, o entre switches, se opera en modo full-duplex, donde la transmisión y recepción pueden ocurrir simultáneamente. En este modo, CSMA/CD no es necesario y se deshabilita.
    *   **Direccionamiento Físico:** Gestiona el uso de las direcciones MAC de 48 bits.
    *   **Implementación:** Se implementa principalmente en **hardware**, directamente en la circuitería de la Tarjeta de Interfaz de Red (NIC).
    *   *Nota: Aunque aquí nos centramos en IEEE 802.3 (Ethernet), existen otros estándares MAC para diferentes tecnologías, como IEEE 802.11 (WLAN/Wi-Fi) y IEEE 802.15 (WPAN/Bluetooth, Zigbee), cada uno con sus propios mecanismos de acceso al medio y formatos de trama.*

### 4.5. Direcciones MAC: Identidad Física en la Red Local <a name="capa2-mac"></a>
Para comprender las direcciones MAC, es fundamental recordar los sistemas numéricos:
*   **Binario (Base 2):** El lenguaje fundamental de las computadoras, usando solo 0 y 1. Las direcciones MAC son, en su núcleo, secuencias binarias.
*   **Hexadecimal (Base 16):** Usa dígitos 0-9 y letras A-F. Proporciona una representación compacta y legible por humanos de largas cadenas binarias. Un dígito hexadecimal representa 4 bits binarios.

#### 4.5.1. ¿Qué es una Dirección MAC? <a name="capa2-mac-que-es"></a>
*   **Identificador Único:** Una dirección MAC (Media Access Control) es un identificador único asignado a la mayoría de las interfaces de red (NIC - Network Interface Card) para comunicaciones dentro de un segmento de red local.
*   **Formato Fundamental:** Es un valor **binario de 48 bits**.
*   **Representación Común (Hexadecimal):** Para facilitar su lectura y manejo, estos 48 bits se expresan comúnmente como **12 dígitos hexadecimales**.
    *   **Ejemplos de formato:** `00:07:E9:63:CE:53`, `00-07-E9-63-CE:53`, o `0007.E963.CE53`.
    *   Cada par de dígitos hexadecimales representa 8 bits (1 byte). Por ejemplo, `E9` (Hex) corresponde a `11101001` (Binario).
*   **Otros Nombres:** También se conoce como dirección física, dirección Ethernet, o BIA (Burned-In Address).
*   **Analogía:** Como el número de serie de un dispositivo o el *RUT/DNI* impreso en un carnet, utilizado para la entrega "local".

#### 4.5.2. Estructura de una Dirección MAC (OUI e Identificador) <a name="capa2-mac-estructura"></a>
Una dirección MAC de 48 bits se divide lógicamente en dos partes principales, como se ilustra en la siguiente tabla. Los primeros 24 bits (3 bytes) constituyen el **OUI (Organizationally Unique Identifier - Identificador Único Organizacional)**, un código que el IEEE (Institute of Electrical and Electronics Engineers) asigna de forma única a cada fabricante de hardware de red. Este OUI funciona como un prefijo que identifica a la compañía que manufacturó la tarjeta de red (NIC). Los últimos 24 bits (3 bytes) son el **Identificador Único de Interfaz**, asignado por el propio fabricante a esa tarjeta específica dentro de su OUI.

**Descomposición de una Dirección MAC (Ej: `D4-BE-D9-13-63-00`):**

| Parte de la MAC                                       | Bytes Hexadecimales | Longitud | Descripción                                                                     | Responsable de Asignación |
| :---------------------------------------------------- | :------------------ | :------- | :------------------------------------------------------------------------------ | :------------------------ |
| **OUI** (Identificador Único Organizacional)          | `D4-BE-D9`          | 24 bits (3 bytes) | Identifican al **fabricante** de la tarjeta de red (NIC).                     | IEEE                      |
| **Identificador Único de Interfaz** (ID de Dispositivo) | `13-63-00`          | 24 bits (3 bytes) | Asignados por el **fabricante** a esa tarjeta específica, asegurando unicidad bajo su OUI. | Fabricante                |

La combinación del OUI (asignado centralmente por el IEEE al fabricante) y el identificador único de interfaz (asignado por el fabricante a cada una de sus tarjetas bajo ese OUI) asegura que cada dirección MAC sea, en teoría, globalmente única en el mundo.

#### 4.5.3. Un Dispositivo, Múltiples Direcciones MAC <a name="capa2-mac-multiples"></a>
Un dispositivo (como una PC, laptop, smartphone) no tiene "una" dirección MAC. **Cada interfaz de red física o virtual** en ese dispositivo tiene su propia dirección MAC.
*   **Ejemplos comunes:**
    *   Tu **tarjeta Ethernet cableada** (para el conector RJ45) tiene una MAC.
    *   Tu **tarjeta Wi-Fi** (inalámbrica) tiene *otra* MAC diferente.
    *   Si usas un **adaptador Bluetooth**, este también tiene su propia MAC.
    *   Interfaces de red virtual creadas por software de virtualización (como VMware o VirtualBox) o por VPNs también tendrán sus propias MACs.
*   Por esto, al ejecutar `ipconfig /all` (en Windows) o `ifconfig` / `ip a` (en Linux/macOS), puedes ver varias "Direcciones físicas" listadas, cada una correspondiente a una interfaz de red distinta.

#### 4.5.4. Uso Práctico del OUI <a name="capa2-mac-oui-uso"></a>
Conociendo los primeros 3 bytes (el OUI) de una dirección MAC, puedes identificar al fabricante del dispositivo de red.
*   Herramientas online como la de Wireshark (`https://www.wireshark.org/tools/oui-lookup.html`) permiten ingresar el OUI y obtener el nombre del fabricante registrado.
*   Esto es útil para: Identificar el hardware, diagnósticos de red e inventario.

#### 4.5.5. Tipos de Direcciones MAC y su Uso en Ethernet <a name="capa2-mac-tipos"></a>
En las redes Ethernet, las direcciones MAC de destino en una trama pueden ser de tres tipos principales, cada uno con un propósito específico para la comunicación en la Capa 2. La dirección MAC de origen, sin embargo, siempre será una dirección de unidifusión.

| Tipo de Dirección MAC | MAC Destino Ejemplo                  | Dirigido a...                                     | Propósito Principal y Características                                                                                                                                                                                             | Comportamiento del Switch (Por Defecto)                                                                | Límite del Router (Por Defecto)     |
| :-------------------- | :----------------------------------- | :------------------------------------------------ | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :----------------------------------------------------------------------------------------------------- | :---------------------------------- |
| **Unidifusión (Unicast)** | `00:1A:2B:3C:4D:5E` (única)        | Una única NIC específica en la LAN.               | Enviar una trama desde un origen a un único destino específico. Es la dirección "grabada" en la NIC. Para comunicaciones IP, se usa ARP (IPv4) o ND (IPv6) para resolver la IP destino a su MAC correspondiente en la red local. | Reenvía la trama solo al puerto asociado con la MAC destino (si está en la tabla MAC), o la inunda si es desconocida. | No aplica directamente (opera con IPs). |
| **Difusión (Broadcast)**| `FF:FF:FF:FF:FF:FF` (todos unos)   | **Todas** las NICs en el mismo dominio de difusión. | Enviar una trama a todos los dispositivos en el segmento de red local. Usado por protocolos como DHCP (Discover) y ARP (Request).                                                                                             | **Inunda** la trama por todos los puertos, excepto el puerto de origen.                                  | **No reenvía** broadcasts.          |
| **Multidifusión (Multicast)**| `01:00:5E:xx:xx:xx` (para IPv4)<br>`33:33:xx:xx:xx:xx` (para IPv6) | Un **grupo específico** de NICs en la LAN que se han unido a un grupo de multidifusión. | Enviar una trama a múltiples destinos interesados simultáneamente, sin inundar a todos. Usado para streaming de video, juegos en red, protocolos de enrutamiento. Las MACs de multidifusión IP se derivan de la dirección IP de multidifusión. Existen otras MACs de multidifusión para protocolos no IP (STP, LLDP). | **Inunda** la trama por todos los puertos (excepto el origen), a menos que tenga "snooping de multidifusión" configurado para ser más selectivo. | **No reenvía** multicast, a menos que esté configurado para enrutamiento multicast. |

*   **Puntos Importantes sobre los Tipos de Direcciones MAC:**
    *   La **dirección MAC de origen** en cualquier trama Ethernet siempre es una dirección de **unidifusión**, identificando al remitente individual.
    *   Los **routers no reenvían tramas de difusión (broadcast)** por defecto, lo que ayuda a contener el tráfico de difusión dentro de una LAN y define los límites de un dominio de difusión.
    *   El manejo eficiente del tráfico de **multidifusión** a menudo requiere switches con capacidades avanzadas como IGMP Snooping.

### 4.6. La Trama Ethernet: Estructura y Encapsulación <a name="capa2-trama"></a>

#### 4.6.1. Proceso de Comunicación y Encapsulación en Capa 2 <a name="capa2-trama-proceso"></a>

Para que los dispositivos se comuniquen en una red, siguen reglas estrictas llamadas **protocolos de red**. Un concepto fundamental en estos protocolos es la **encapsulación**:

1.  **Protocolos de Red (Fundamentos para Capa 2):**
    *   **Definición:** Un conjunto de reglas y convenciones que los dispositivos deben seguir para intercambiar información de manera correcta y comprensible. Definen el formato, tamaño, temporización (sincronización), codificación (conversión a bits), encapsulación y secuencia de los mensajes.
    *   **Objetivo:** Facilitar la comunicación estructurada y ordenada.

2.  **Encapsulación en Capa 2:**
    *   **Proceso:** Cuando los datos de una capa superior (Capa 3 - Red, típicamente un paquete IP) deben transmitirse a través de la red local, la Capa 2 (Enlace de Datos) "envuelve" estos datos. Esto implica añadir información de control específica de la Capa 2, formando una unidad de datos llamada **trama**.
    *   **Analogía:** Poner una carta (el paquete IP) dentro de un sobre (la trama Ethernet). El sobre tiene sus propias direcciones (MAC de origen y destino) y un sello (FCS).

3.  **La Trama Ethernet: El "Sobre" de la Capa 2**
    *   Cuando un paquete IP necesita ser enviado a través de una red local Ethernet, la subcapa MAC de la Capa 2 lo encapsula dentro de una **Trama Ethernet**.
    *   Esta trama es la PDU que realmente viaja por el cable o el aire en la red local.
    *   **Función Clave:** La trama Ethernet asegura que el paquete IP llegue al dispositivo correcto *dentro de la misma red local*, utilizando las direcciones MAC.

#### 4.6.2. Anatomía de una Trama Ethernet II <a name="capa2-trama-anatomia"></a>
La estructura de una trama Ethernet II (el formato más común hoy en día) es la siguiente:

*   **Tamaño Estándar:**
    *   **Mínimo:** 64 bytes (desde Dirección MAC de Destino hasta FCS).
    *   **Máximo:** 1518 bytes (desde Dirección MAC de Destino hasta FCS).
    *   *Tramas con menos de 64 bytes ("runt frames") suelen ser descartadas.*
    *   *Tramas con más de 1500 bytes de datos (excluyendo encabezados/tráiler) se denominan "Jumbo frames" y requieren soporte en todos los dispositivos de la ruta.*

*   **Componentes de una Trama Ethernet II:**

    | Campo                     | Longitud (Bytes) | Descripción y Función Clave                                                                                                                             |
    | :------------------------ | :--------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------ |
    | **Preámbulo**             | 7                | Patrón alternante de 1s y 0s (`10101010...`) usado por la NIC receptora para **sincronizar su reloj** con la señal entrante. No se incluye en el cálculo del FCS. |
    | **SFD (Start Frame Delimiter - Delimitador de Inicio de Trama)** | 1                | Patrón `10101011`. Los dos últimos bits `11` indican al receptor que la sincronización ha terminado y que el siguiente campo es la Dirección MAC de Destino. No se incluye en el cálculo del FCS. |
    | **Dirección MAC de Destino** | 6                | Dirección MAC de 48 bits de la NIC del dispositivo receptor en la LAN.                                                                                   |
    | **Dirección MAC de Origen**  | 6                | Dirección MAC de 48 bits de la NIC del dispositivo emisor en la LAN.                                                                                     |
    | **Tipo/Longitud (EtherType)** | 2                | Para tramas Ethernet II (DIX Ethernet), este campo es el **EtherType**. Si su valor es ≥ 1536 (0x0600), indica el protocolo de Capa 3 encapsulado (ej: `0x0800`=IPv4, `0x0806`=ARP, `0x86DD`=IPv6). Este campo es utilizado por la subcapa LLC (o su funcionalidad) para pasar los datos al protocolo correcto de capa superior. En el estándar IEEE 802.3 original, si el valor era ≤ 1500, indicaba la longitud del campo de datos. |
    | **Datos (y Relleno/Pad)**   | 46 - 1500        | Contiene la PDU de la capa superior (ej., un paquete IP). Si el paquete de Capa 3 es menor de 46 bytes, se añade **relleno (padding)** con ceros para asegurar que la trama (desde MAC Destino hasta FCS) alcance el tamaño mínimo de 64 bytes. Este tamaño mínimo fue históricamente importante para el correcto funcionamiento de CSMA/CD. |
    | **FCS (Frame Check Sequence - Secuencia de Verificación de Trama)** | 4                | Es el **tráiler** de la trama. Contiene un valor de **CRC (Cyclic Redundancy Check)** de 32 bits calculado por el emisor sobre los campos desde la MAC de Destino hasta el final del campo de Datos (sin incluir el relleno si este no forma parte de los datos originales que el FCS debe cubrir). El receptor realiza el mismo cálculo sobre la trama recibida; si los valores del FCS no coinciden, la trama se considera corrupta y se descarta. **El FCS solo detecta errores, no los corrige.** |

    *   **Rol del Paquete IP dentro de la Trama:** Mientras la Trama Ethernet (con sus direcciones MAC) se encarga de la entrega local en el segmento de red, el paquete IP (contenido en el campo "Datos" de la trama) lleva las direcciones IP de origen y destino finales. Estas direcciones IP son utilizadas por los routers para el enrutamiento del paquete a través de múltiples redes (internetworking) hasta su destino final.

### 4.7. Funcionamiento de los Switches Ethernet <a name="capa2-switches"></a>
Los switches Ethernet de Capa 2 son dispositivos centrales en las LAN modernas, reemplazando en gran medida a los antiguos hubs. Utilizan las direcciones MAC para reenviar tramas de manera inteligente y eficiente. **Cuando una red LAN se expande, agregar un switch permite que la red crezca conectando más dispositivos. Al elegir un switch, se deben considerar factores como los tipos de puertos (cobre, fibra), la velocidad requerida, la capacidad de expansión y la facilidad de administración.**

#### 4.7.0. Componentes Físicos y Preparación Inicial de un Switch Cisco <a name="capa2-switch-hardware-setup"></a>
Antes de profundizar en cómo un switch procesa las tramas, es útil conocer sus componentes físicos típicos y los pasos para su puesta en marcha inicial.
*   **Componentes Físicos Típicos de un Switch LAN Cisco (ej: Catalyst):**
    *   **Puertos de Acceso LAN:** Múltiples puertos (ej: RJ-45 para cobre, a menudo con capacidad PoE - Power over Ethernet) para conectar dispositivos finales como PCs, impresoras, puntos de acceso.
    *   **Puertos de Enlace Ascendente (Uplink):** Puertos de mayor velocidad (ej: SFP/SFP+ para fibra óptica o cobre de alta velocidad) para conectar a otros switches (formando una estructura de estrella extendida o jerárquica) o a routers.
    *   **LEDs de Estado:** Indicadores visuales para el estado del sistema (SYST), de cada puerto (actividad, velocidad, dúplex, PoE).
    *   **Puerto de Consola:** Para acceso de administración fuera de banda, crucial para la configuración inicial.
    *   **Puerto de Almacenamiento (opcional):** Para almacenamiento externo (ej: USB para actualización de IOS o respaldo de configuraciones).
    *   *Nota:* Al elegir un switch, se consideran factores como el número y tipo de puertos, velocidad, capacidad de expansión y opciones de gestión (administrable vs. no administrable).
*   **Preparación y Encendido Inicial del Switch:**
    1.  **Verificar Componentes:** Asegúrate de tener todos los accesorios (cable de alimentación, cable de consola si es para configuración inicial).
    2.  **Conectar Cables (Opcional en este punto):** Puedes conectar los cables de red a los puertos del switch o hacerlo después del arranque inicial.
    3.  **Conectar Cable de Alimentación.**
    4.  **Encender el Switch.**
    5.  **Observar la POST (Prueba Automática de Encendido):** Durante el arranque, el switch ejecuta una POST. Los LEDs parpadearán. Un LED SYST verde (fijo o parpadeante según el modelo) indica una POST exitosa. Un LED SYST ámbar usualmente indica un problema.
    *El switch ahora está listo para comenzar a operar con su configuración por defecto (si es nuevo o reseteado) o cargará su configuración guardada. Para configuraciones personalizadas, se accederá mediante el puerto de consola o métodos de gestión remota si ya están configurados.*

#### 4.7.1. Fundamentos del Switch de Capa 2 <a name="capa2-switches-fundamentos"></a>
*   **Toma de Decisiones en Capa 2:** Un switch opera en la Capa de Enlace de Datos. Sus decisiones de reenvío se basan **exclusivamente en las direcciones MAC Ethernet** de las tramas.
*   **Indiferencia al Protocolo de Capa Superior:** El switch es "agnóstico" a los datos (protocolo) que se transportan en la porción de datos de la trama, como un paquete IPv4, un mensaje ARP o un paquete IPv6 ND.
*   **La Tabla de Direcciones MAC (Tabla MAC o Tabla CAM):**
    *   Es la base de la inteligencia del switch. También se conoce como tabla CAM (Content Addressable Memory).
    *   Se construye y mantiene **dinámicamente**.
    *   Almacena asociaciones entre:
        *   Direcciones MAC de los dispositivos.
        *   Los puertos del switch a través de los cuales se puede alcanzar cada dirección MAC.
        *   (Opcionalmente) El VLAN ID al que pertenece la entrada.
    *   Cuando un switch se enciende por primera vez, su tabla de direcciones MAC está vacía.
*   **Componentes Físicos Típicos de un Switch LAN Cisco (ej: Catalyst):**
    *   **Puertos de Acceso LAN:** Múltiples puertos (ej: RJ-45 para cobre, a menudo con capacidad PoE - Power over Ethernet) para conectar dispositivos finales.
    *   **Puertos de Enlace Ascendente (Uplink):** Puertos de mayor velocidad (ej: SFP/SFP+ para fibra óptica) para conectar a otros switches o routers.
    *   **LEDs de Estado:** Indicadores visuales para el estado del sistema y de cada puerto.
    *   **Puerto de Consola:** Para acceso de administración fuera de banda.
    *   **Puerto de Almacenamiento (opcional):** Para almacenamiento externo (ej: USB).

#### 4.7.2. Proceso de Aprendizaje y Reenvío del Switch <a name="capa2-switches-aprendizaje-reenvio"></a>
Un switch realiza dos operaciones principales con cada trama que recibe:

*   **A. Aprendizaje (Construcción de la Tabla de Direcciones MAC):**
    *   **Examinar la Dirección MAC de Origen:** Cuando una trama ingresa a un puerto del switch, este examina la **dirección MAC de origen** de la trama y el **número de puerto** por el que ingresó.
    *   **Poblar/Actualizar la Tabla:**
        1.  Si la dirección MAC de origen **no existe** en la tabla MAC, el switch la **agrega**, asociándola con el número del puerto de entrada.
        2.  Si la dirección MAC de origen **ya existe** en la tabla y está asociada al mismo puerto, el switch **actualiza el temporizador de envejecimiento** de esa entrada (por defecto, la mayoría de los switches Ethernet guardan una entrada en la tabla durante 5 minutos de inactividad antes de eliminarla, para asegurar que la tabla refleje la topología actual de la red).
        3.  Si la dirección MAC de origen ya existe en la tabla, pero está registrada en un **puerto diferente**, el switch actualiza la entrada, reemplazando el puerto antiguo con el nuevo puerto de entrada. Esto maneja el caso en que un dispositivo se mueve de un puerto a otro del switch.

*   **B. Reenvío/Filtrado (Toma de Decisiones Basada en la Dirección MAC de Destino):**
    Después de procesar la MAC de origen, el switch examina la **dirección MAC de destino** de la trama para decidir cómo reenviarla:

    1.  **Destino Unicast Conocido (Filtrado de Tramas):**
        *   Si la dirección MAC de destino es una dirección de **unidifusión** y el switch **encuentra una entrada coincidente** para esa MAC en su tabla, **reenvía la trama únicamente por el puerto especificado** en la tabla MAC. Esto se conoce como **filtrado de tramas**, ya que la trama no se envía a puertos innecesarios, reduciendo la congestión y mejorando la eficiencia.

    2.  **Destino Unicast Desconocido (Inundación o "Flooding"):**
        *   Si la dirección MAC de destino es una dirección de **unidifusión** pero **NO existe una entrada** para esa MAC en la tabla (se denomina "unidifusión desconocida"), el switch no sabe por qué puerto específico enviar la trama.
        *   En este caso, el switch **inunda ("floods") la trama, reenviándola por todos los puertos activos, excepto por el puerto por el cual ingresó la trama original.** Se espera que el dispositivo destino reciba la trama y, cuando responda, el switch aprenderá su ubicación (MAC y puerto) a través de la MAC de origen de esa trama de respuesta.

    3.  **Destino Broadcast o Multicast:**
        *   Si la dirección MAC de destino es una dirección de **difusión (Broadcast)** (`FF:FF:FF:FF:FF:FF`) o una dirección de **multidifusión (Multicast)** (ej: `01:00:5E:...` o `33:33:...`), el switch, por defecto, **inunda la trama por todos los puertos activos, excepto por el puerto de entrada.**
            *   *Nota sobre Multicast:* Switches más avanzados pueden utilizar técnicas como "IGMP Snooping" para aprender qué puertos tienen dispositivos interesados en recibir tráfico de un grupo multicast particular. En tales casos, el switch solo reenviará el tráfico multicast a esos puertos específicos, en lugar de inundarlo innecesariamente.

    4.  **Destino en el Mismo Puerto de Origen (Descarte Silencioso):**
        *   Si el switch, basándose en su tabla MAC, determina que la dirección MAC de destino está accesible a través del **mismo puerto por el cual ingresó la trama**, el switch **descarta la trama silenciosamente**. Esto evita que la trama se reenvíe innecesariamente de vuelta al segmento de red del que provino. Esto es común si hay un hub conectado a un puerto del switch y dos dispositivos en ese hub se comunican; el hub ya habrá propagado la trama.

#### 4.7.3. Métodos de Reenvío de Tramas y Almacenamiento en Búfer <a name="capa2-switches-reenvio-bufer"></a>

Los switches utilizan diferentes métodos para procesar y reenviar tramas, afectando la latencia y la verificación de errores:
*   **Métodos de Reenvío de Tramas:**
    *   **Almacenamiento y Reenvío (Store-and-Forward):**
        *   El switch recibe la trama **completa** antes de tomar una decisión de reenvío.
        *   **Calcula el CRC (Cyclic Redundancy Check)** de la trama. Si el CRC es inválido (indica error), la trama se descarta.
        *   Si el CRC es válido, el switch busca la dirección MAC de destino en su tabla MAC y reenvía la trama por el puerto correspondiente.
        *   **Ventaja:** Alta integridad, ya que las tramas con errores no se propagan.
        *   **Desventaja:** Mayor latencia, ya que debe esperar toda la trama.
        *   **Necesario para QoS (Calidad de Servicio)**, donde se requiere clasificar la trama.
    *   **Corte (Cut-Through):**
        *   El switch comienza a reenviar la trama **tan pronto como lee la dirección MAC de destino** (primeros 6 bytes después del preámbulo), sin esperar a recibir la trama completa.
        *   **No realiza verificación de errores (CRC)** antes de reenviar.
        *   **Ventaja:** Menor latencia.
        *   **Desventaja:** Puede propagar tramas con errores, que luego serán descartadas por la NIC de destino.
        *   **Variantes de Corte:**
            *   **Avance Rápido (Fast-Forward):** Ofrece la latencia más baja. Reenvía inmediatamente después de leer la MAC de destino. Es el método de corte típico.
            *   **Libre de Fragmentos (Fragment-Free):** El switch almacena los primeros 64 bytes de la trama antes de reenviar. La mayoría de las colisiones y errores ocurren en estos primeros 64 bytes, por lo que este método ofrece una pequeña verificación de errores para evitar propagar fragmentos de colisión. Es un compromiso entre la latencia de "avance rápido" y la integridad de "almacenamiento y reenvío".
    *   *Nota:* Algunos switches pueden cambiar dinámicamente entre métodos de reenvío basados en un umbral de errores.
*   **Almacenamiento en Búfer de Memoria:**
    *   Los switches utilizan búferes de memoria para almacenar tramas temporalmente, especialmente cuando un puerto de destino está ocupado o en conmutación asimétrica (puertos con diferentes velocidades).
    *   **Memoria Basada en Puerto:** Cada puerto tiene su propia cola de memoria. Una trama puede retrasarse si su puerto de salida está congestionado.
    *   **Memoria Compartida:** Todas las tramas se almacenan en un búfer de memoria común accesible por todos los puertos. Esto permite una asignación dinámica de memoria y puede manejar mejor ráfagas de tráfico y tramas más grandes, reduciendo el descarte.

#### 4.7.4. Configuración de Dúplex, Velocidad y Auto-MDIX en Puertos de Switch <a name="capa2-switches-duplex-velocidad-mdix"></a>

*   **Dúplex y Velocidad (Ancho de Banda):**
    *   Son configuraciones fundamentales por puerto. Es crucial que coincidan entre el puerto del switch y el dispositivo conectado (ej: PC, otro switch).
    *   **Semidúplex (Half-duplex):** Solo un extremo de la conexión puede enviar datos a la vez.
    *   **Dúplex Completo (Full-duplex):** Ambos extremos pueden enviar y recibir datos simultáneamente.
    *   **Autonegociación:** Es una función (habilitada por defecto en la mayoría de los switches y NICs modernos) que permite a los dos dispositivos en un enlace negociar automáticamente las mejores capacidades de velocidad y dúplex. Si ambos dispositivos lo soportan, se suele seleccionar dúplex completo y el ancho de banda común más alto.
    *   **Falta de Coincidencia de Dúplex:** Ocurre si un extremo está en full-dúplex y el otro en half-dúplex. Es una causa común de problemas de rendimiento (especialmente colisiones tardías en el lado half-duplex) en enlaces 10/100 Mbps. La práctica recomendada es configurar ambos puertos como full-dúplex o asegurar que la autonegociación funcione correctamente en ambos extremos. *Nota: Los puertos Gigabit Ethernet y superiores solo operan en full-dúplex.*
*   **Auto-MDIX (Interfaz Cruzada Automática Dependiente del Medio):**
    *   Permite al switch detectar automáticamente el tipo de cable Ethernet (directo o cruzado) conectado a un puerto y configurar la interfaz internamente para la conexión correcta.
    *   Esto elimina la necesidad de usar un tipo de cable específico (directo o cruzado) según los dispositivos que se interconectan.
    *   Está habilitado por defecto en la mayoría de los switches Cisco modernos (ej: IOS 12.2(18)SE o posterior). Se puede gestionar con el comando de interfaz `mdix auto`.
   
#### 4.7.5. Consideraciones Adicionales sobre Switches <a name="capa2-switches-consideraciones"></a>
*   **Switches Conectados:** Un solo puerto de un switch puede tener muchas direcciones MAC asociadas si ese puerto está conectado a otro switch (o a un hub con múltiples dispositivos). El primer switch aprenderá las MACs de los dispositivos conectados al segundo switch (o hub) a través de las tramas que pasen por el enlace entre ellos. Cada switch mantiene su propia tabla MAC de forma independiente.

*   **Envío a la Puerta de Enlace Predeterminada (Gateway):**
    *   Cuando un dispositivo necesita enviar datos a una dirección IP ubicada en una **red remota** (es decir, una red diferente a la suya, fuera de su subred local), la trama Ethernet no se puede enviar directamente al dispositivo de destino final usando su MAC.
    *   En su lugar, el dispositivo de origen encapsulará el paquete IP (que tiene la IP de origen del dispositivo y la IP de destino del host remoto) dentro de una trama Ethernet.
    *   La **dirección MAC de destino de esta trama Ethernet será la dirección MAC de su puerta de enlace predeterminada** (generalmente la interfaz del router en su red local).
    *   El switch local, al recibir esta trama, buscará la MAC del router en su tabla MAC y reenviará la trama al puerto donde está conectado el router. El router luego se encargará de desencapsular el paquete IP, consultar su propia tabla de enrutamiento y reenrutar el paquete IP hacia la red de destino, creando una nueva trama de Capa 2 para el siguiente salto si es necesario.


### 4.8. Topologías de Red y Control de Acceso al Medio <a name="capa2-topologias-control-acceso"></a>

**(Esta sección reemplaza y expande el antiguo "4.8. Conceptos Adicionales de Capa 2" e integra la mayor parte del Módulo 31)**

#### 4.8.1. Topologías Físicas y Lógicas <a name="capa2-topologias-fisicas-logicas"></a>
*   **Topología Física:** Identifica las conexiones físicas y cómo se interconectan los dispositivos finales e intermedios (ej: routers, switches, APs). También puede incluir la ubicación específica del dispositivo.
    *   **Ejemplos comunes (LAN):**
        *   **Estrella:** Dispositivos finales conectados a un dispositivo intermediario central (ej: switch). Fácil de instalar, escalar y solucionar problemas.
        *   **Estrella Extendida:** Interconexión de múltiples switches (dispositivos centrales en estrella).
        *   **Bus (Heredada):** Todos los sistemas finales encadenados y terminados en cada extremo. No requiere dispositivos intermediarios como switches. Común en Ethernet heredado con cable coaxial.
        *   **Anillo (Heredada):** Sistemas finales conectados a su vecino formando un anillo. No necesita terminación. Usado en FDDI y Token Ring heredados.
    *   **Ejemplos comunes (WAN):**
        *   **Punto a Punto:** La topología WAN más simple. Un enlace permanente entre dos puntos finales (nodos). Los dos nodos no comparten el medio con otros y los protocolos de enlace de datos lógicos pueden ser simples.
        *   **Hub-and-Spoke (Estrella WAN):** Un sitio central (hub) se conecta a múltiples sitios remotos (spokes).
        *   **Malla:** Interconecta múltiples sitios. Puede ser malla completa (todos los sitios conectados entre sí) o malla parcial.
*   **Topología Lógica:** Se refiere a la forma en que una red transfiere tramas de un nodo al siguiente, independientemente de la conexión física. Esta topología influye en el tipo de trama de red y el control de acceso a los medios que se utilizan. La capa de enlace de datos "ve" la topología lógica al controlar el acceso a los medios.
    *   *Nota:* Agregar dispositivos físicos intermedios no necesariamente cambia la topología lógica punto a punto subyacente.

#### 4.8.2. Métodos de Control de Acceso al Medio (MAC) <a name="capa2-metodos-control-acceso"></a>
En redes de **acceso múltiple** (donde dos o más dispositivos finales pueden intentar acceder a la red simultáneamente, como Ethernet LANs y WLANs), se requieren reglas para compartir el medio físico.

*   **Comunicación Dúplex:** Se refiere a la dirección de la transmisión de datos.
    *   **Semidúplex (Half-duplex):** Los dispositivos pueden transmitir y recibir en los medios, pero **no simultáneamente**. Solo un dispositivo puede enviar o recibir a la vez. Usado en WLANs y topologías de bus Ethernet heredadas con hubs.
    *   **Dúplex Completo (Full-duplex):** Ambos dispositivos pueden transmitir y recibir **simultáneamente** en los medios compartidos. La capa de enlace de datos asume que los medios están disponibles para ambos nodos en cualquier momento. Los switches Ethernet operan en modo dúplex completo por defecto.
    *   *Importante:* Dos interfaces interconectadas (ej: NIC de host y puerto de switch) deben operar en el mismo modo dúplex para evitar incompatibilidad, ineficiencia y latencia.

*   **Tipos de Control de Acceso al Medio:**
    *   **Acceso Basado en Contención:**
        *   Todos los nodos operan en semidúplex, compitiendo por el uso del medio. Solo un dispositivo puede enviar a la vez.
        *   **CSMA/CD (Carrier Sense Multiple Access with Collision Detection):**
            *   Utilizado en LAN Ethernet de topología de bus heredada y LAN Ethernet heredada con un concentrador (hub).
            *   Proceso:
                1.  Los dispositivos "escuchan" el medio (Carrier Sense) para ver si está libre.
                2.  Si está libre, transmiten. Múltiples dispositivos pueden acceder simultáneamente (Multiple Access).
                3.  Si dos dispositivos transmiten al mismo tiempo, ocurre una **colisión**.
                4.  Ambos dispositivos detectan la colisión (Collision Detection) comparando datos transmitidos con recibidos o por una amplitud de señal anómala.
                5.  Los datos se dañan y deben reenviarse después de que cada dispositivo espere un tiempo aleatorio (algoritmo de backoff).
        *   **CSMA/CA (Carrier Sense Multiple Access with Collision Avoidance):**
            *   Utilizado en LAN inalámbricas (WLANs IEEE 802.11).
            *   Similar a CSMA/CD en escuchar el medio, pero intenta **evitar colisiones** en lugar de solo detectarlas (ya que la detección es difícil en entornos inalámbricos).
            *   Mecanismos:
                *   Espera un tiempo aleatorio antes de transmitir si el canal está ocupado.
                *   Cada dispositivo que transmite incluye la duración que necesita para la transmisión; otros dispositivos reciben esta información y saben cuánto tiempo el medio no estará disponible.
                *   Uso de acuses de recibo (ACKs) para confirmar la recepción de tramas.
        *   *Nota:* Los sistemas basados en contención no escalan bien bajo uso intensivo de medios.
    *   **Acceso Controlado (Determinista):**
        *   Cada nodo tiene su propio tiempo asignado para usar el medio; no hay competencia.
        *   Menos eficiente si un dispositivo debe esperar su turno incluso si el medio está libre.
        *   Ejemplos heredados: Token Ring, ARCNET.
    *   *Nota:* Las LAN Ethernet modernas que utilizan **switches** operan en **dúplex completo** y **no requieren métodos de acceso por contención como CSMA/CD** en las conexiones entre el switch y el host, ya que cada puerto del switch es un dominio de colisión separado.

#### 4.8.3. Dispositivos Primarios de Capa 2 <a name="capa2-dispositivos"></a>
*   ***Switches (Conmutadores)***: Como se describió anteriormente, son el pilar de las LAN modernas. Toman decisiones de reenvío inteligentes basadas en direcciones MAC, crean una tabla MAC, y cada puerto es un dominio de colisión separado. Por defecto, un switch forma un único dominio de difusión.
*   **Puntos de Acceso Inalámbricos (WAP o AP - Wireless Access Point):** Permiten a los dispositivos Wi-Fi (IEEE 802.11) conectarse a una red cableada Ethernet. Actúan funcionalmente como un "bridge" (puente) entre el medio inalámbrico y el medio cableado, traduciendo entre los formatos de trama 802.11 y 802.3.
*   **Bridges (Puentes):** Dispositivos más antiguos, predecesores de los switches. Conectaban dos o más segmentos de red LAN y tomaban decisiones de reenvío basadas en direcciones MAC. Tenían menos puertos y eran menos eficientes que los switches modernos.
*   **Tarjetas de Red (NIC):** Esenciales para cada dispositivo que se conecta a la red, implementando la Capa 2 y Capa 1.
*   *Nota sobre Routers:* Aunque los routers son dispositivos de Capa 3, sus interfaces (puertos) tienen componentes de Capa 2 (como una dirección MAC si es una interfaz Ethernet) para conectarse a los segmentos LAN. Los routers son cruciales para conectar diferentes dominios de difusión de Capa 2.

#### 4.8.4. Tipos de Redes por Alcance (Predominantemente Capa 1 y 2 para el acceso) <a name="capa2-tipos-redes"></a>

Las redes de computadoras se clasifican comúnmente según su alcance geográfico y, a veces, por su propósito o la tecnología que utilizan predominantemente para el acceso.

*   **PAN (Personal Area Network - Red de Área Personal):**
    *   Conecta dispositivos personales muy cercanos, generalmente dentro del alcance de una persona (pocos metros).
    *   Se utiliza para la interconexión de periféricos como ratones, teclados, impresoras, smartphones y tabletas con una computadora, o entre ellos.
    *   **Tecnologías Comunes:** Bluetooth, Zigbee. A menudo se refiere como **WPAN (Wireless Personal Area Network)**.

*   **LAN (Local Area Network - Red de Área Local):**
    *   Cubre un área geográfica limitada, como una casa, una oficina, un solo edificio o un campus pequeño.
    *   Permite a los usuarios compartir recursos como archivos, impresoras y una conexión a Internet.
    *   **Tecnologías Comunes:** Ethernet (cableada), Wi-Fi (inalámbrica, en cuyo caso se denomina **WLAN - Wireless Local Area Network**).

*   **WLAN (Wireless Local Area Network - Red de Área Local Inalámbrica):**
    *   Es un tipo de LAN que utiliza tecnología de radiofrecuencia (RF), como Wi-Fi (estándares IEEE 802.11), para conectar dispositivos sin necesidad de cables.
    *   Los dispositivos se conectan a un **Punto de Acceso (AP - Access Point)** que a su vez suele estar conectado a la red cableada.

*   **WMN (Wireless Mesh Network - Red de Malla Inalámbrica):**
    *   Utiliza múltiples puntos de acceso (o nodos de malla) que se comunican entre sí para extender la cobertura de una WLAN o crear una red inalámbrica autónoma.
    *   Los datos pueden "saltar" de un nodo a otro hasta llegar a su destino o a un punto de conexión con una red cableada.
    *   Útil para cubrir áreas grandes o complejas donde el cableado es difícil, tanto en entornos domésticos grandes como en implementaciones empresariales o municipales para ampliar la cobertura.

*   **VLAN (Virtual LAN - LAN Virtual):**
    *   Aunque no es un tipo de red por alcance geográfico, es un concepto crucial en las LANs modernas.
    *   Permite a un administrador **segmentar lógicamente una red física (un switch o grupo de switches) en múltiples dominios de difusión independientes.**
    *   Los puertos de un switch pueden asignarse a diferentes VLANs, haciendo que parezca que hay múltiples switches virtuales.
    *   Esto mejora la seguridad (aislando tráfico), la organización (agrupando dispositivos por función o departamento, independientemente de su ubicación física) y la eficiencia de la red (reduciendo el tamaño de los dominios de broadcast).
    *   El tráfico entre diferentes VLANs requiere un dispositivo de Capa 3 (router o switch multicapa) para el enrutamiento.

*   **CAN (Campus Area Network - Red de Área de Campus):**
    *   Es un grupo de LANs interconectadas que pertenecen a la misma organización (ej: una universidad, un gran complejo corporativo) y operan dentro de un área geográfica limitada pero más extensa que una LAN típica (varios edificios).
    *   Generalmente, los edificios dentro de una CAN están interconectados por enlaces de alta velocidad, a menudo utilizando cableado de fibra óptica.

*   **MAN (Metropolitan Area Network - Red de Área Metropolitana):**
    *   Interconecta LANs o CANs dentro de una ciudad o un área metropolitana más grande que un campus pero más pequeña que una WAN.
    *   Puede ser propiedad y operada por una sola organización, un proveedor de servicios, o una entidad municipal.
    *   **Tecnologías Comunes:** Fibra óptica (Metro Ethernet), WiMAX (para acceso inalámbrico metropolitano).

*   **WAN (Wide Area Network - Red de Área Amplia):**
    *   Cubre áreas geográficas extensas, como países, continentes o incluso todo el mundo. Internet es el ejemplo más grande de una WAN.
    *   Se utilizan para interconectar LANs, MANs y otros sitios remotos de una organización o para proporcionar acceso a recursos globales.
    *   **Tecnologías Comunes:** Líneas dedicadas (T1/E1, enlaces ópticos), MPLS, Frame Relay (legado), X.25 (legado), tecnologías satelitales, redes celulares (3G/4G/5G como **WWAN - Wireless Wide Area Network**).
    *   Las MAN y WAN, aunque utilizan tecnologías de Capa 1 y 2 para los enlaces físicos entre sitios, dependen fundamentalmente del enrutamiento de Capa 3 para interconectar las diferentes redes que las componen.

*   **VPN (Virtual Private Network - Red Privada Virtual):**
    *   Se utiliza para crear una conexión segura y cifrada ("túnel") a otra red a través de una red pública o no segura, como Internet.
    *   Permite a los usuarios o sitios remotos acceder a los recursos de una red privada como si estuvieran conectados directamente a ella.
    *   Tipos comunes:
        *   **VPN de Acceso Remoto:** Utilizada por teletrabajadores o usuarios móviles para conectarse a la red de su organización.
        *   **VPN de Sitio a Sitio:** Conecta redes enteras en diferentes ubicaciones geográficas (ej: oficina central con sucursales).
    *   Aunque usa tecnologías de capas superiores para el cifrado y la tunelización, su propósito es extender la conectividad de una red privada.

**Tabla Resumen de Tipos de Red por Alcance:**

| Tipo de Red (General)        | Descripción                                                                    | Cobertura Típica      | Ejemplo                                               | Tecnologías Comunes de Acceso (L1/L2) Principales |
| :--------------------------- | :----------------------------------------------------------------------------- | :-------------------- | :---------------------------------------------------- | :------------------------------------------------ |
| **PAN (Personal Area Network)** | Conexión de dispositivos personales muy cercanos.                              | Pocos metros          | Auriculares Bluetooth con teléfono (WPAN)             | Bluetooth, Zigbee (WPAN)                          |
| **LAN (Local Area Network)**   | Red en un área geográfica limitada (casa, oficina, edificio, campus pequeño).    | Edificio/Campus       | Red de oficina con Ethernet (LAN) o Wi-Fi (WLAN)    | Ethernet, Wi-Fi (WLAN)                            |
| **WMN (Wireless Mesh Network)**| Múltiples APs interconectados para extender cobertura WLAN.                  | Hogar grande/Empresa  | Red Wi-Fi extendida en un edificio grande.          | Estándares Wi-Fi (802.11s para mesh)              |
| **CAN (Campus Area Network)**  | LANs interconectadas en un campus (universitario, corporativo).              | Varios Kms            | Red universitaria conectando facultades.            | Fibra Óptica, Ethernet de alta velocidad          |
| **MAN (Metropolitan Area Network)** | Interconecta LANs/CANs dentro de una ciudad.                                 | Ciudad                | Red municipal conectando edificios.                 | Fibra óptica, Metro Ethernet, WiMAX (WMAN)        |
| **WAN (Wide Area Network)**    | Cubre áreas geográficas extensas (países, continentes).                        | País, Mundo           | Red corporativa global, Internet                      | MPLS, Líneas Dedicadas, Satélite, 4G/5G (WWAN)    |

*   *Nota sobre VLAN y VPN:* Aunque cruciales, VLAN es una técnica de segmentación lógica *dentro* de una LAN, y VPN es una técnica para extender o asegurar el acceso a una red, más que tipos de red definidos estrictamente por su alcance geográfico como los otros. Se incluyen por su relevancia conceptual en la organización y acceso a redes.
*   La letra **W** delante de PAN, LAN, MAN, WAN (ej: **WLAN**) generalmente indica que la tecnología de acceso principal es inalámbrica (Wireless).

#### 4.8.5. Segmentación en Capa 2: VLANs y Dominios de Difusión <a name="capa2-segmentacion"></a>
*   **Dominio de Difusión (Broadcast Domain):** Es el área lógica de una red donde cualquier trama de difusión (broadcast) enviada por un dispositivo es recibida por todos los demás dispositivos en ese mismo dominio.
    *   Por defecto, un **switch (conmutador)** forma un único dominio de difusión grande; es decir, si un dispositivo conectado a un puerto envía una trama de broadcast, el switch la reenviará a todos los demás puertos.
    *   Los **routers**, en cambio, no reenvían tramas de broadcast de un interfaz a otro por defecto, por lo que cada interfaz de un router típicamente define el límite de un dominio de difusión.
*   **Problemas con Dominios de Difusión Grandes:** En redes grandes, un volumen excesivo de tráfico de broadcast (generado por ARP, DHCP, y otros protocolos) puede consumir un ancho de banda significativo y la capacidad de procesamiento de todos los dispositivos, degradando el rendimiento general de la red.
*   **VLANs (Virtual LANs - LANs Virtuales):**
    *   Son un método para **segmentar lógicamente una red física (como un único switch o un grupo de switches interconectados) en múltiples dominios de difusión independientes**.
    *   Los dispositivos en una VLAN solo pueden comunicarse directamente (a nivel de Capa 2) con otros dispositivos en la misma VLAN.
    *   **Para que el tráfico pase entre VLANs diferentes, se requiere un dispositivo de Capa 3 (un router o un switch multicapa configurado para enrutamiento inter-VLAN).**
    *   **Beneficios:**
        *   **Seguridad Mejorada:** Aísla grupos de usuarios o tipos de tráfico.
        *   **Organización:** Agrupa dispositivos por función o departamento, independientemente de su ubicación física.
        *   **Gestión del Tráfico:** Reduce el tamaño de los dominios de difusión, mejorando el rendimiento.
        *   **Flexibilidad:** Facilita movimientos, adiciones y cambios de dispositivos.
    *   **Etiquetado de Tramas (IEEE 802.1Q):** Para que los switches puedan identificar a qué VLAN pertenece una trama cuando esta atraviesa enlaces troncales (trunks) entre switches, se utiliza el estándar IEEE 802.1Q. Este estándar añade una "etiqueta" de 4 bytes a la trama Ethernet original, que contiene el VLAN ID.

#### 4.8.6. VLAN vs SSID Adicional (en un Punto de Acceso Wi-Fi):** <a name="capa2-vlan-vs-ssid"></a> 
    Es común confundir la creación de múltiples SSIDs (nombres de red Wi-Fi) en un punto de acceso con la creación de VLANs. Si bien ambos pueden dar la apariencia de redes separadas, son fundamentalmente diferentes:

    | Característica             | SSID Adicional (sin VLAN asociada)                      | VLAN (Virtual LAN)                                                              |
    |---------------------------|-----------------------------------------------------------|---------------------------------------------------------------------------------|
    | **Nivel Técnico**         | Simplemente un nombre diferente para la red Wi-Fi visible. Los dispositivos se conectan al mismo segmento de red subyacente. | Crea una red lógica separada a nivel de Capa 2, con su propio dominio de difusión. |
    | **Aislamiento Real**      | Mínimo o nulo por defecto. Todos los dispositivos (independientemente del SSID) suelen estar en la misma subred IP y pueden verse entre sí. (Algunos routers/APs domésticos pueden ofrecer "aislamiento de cliente" básico). | Aislamiento fuerte a nivel de Capa 2. Los dispositivos en diferentes VLANs no pueden comunicarse directamente sin enrutamiento de Capa 3. |
    | **Tráfico Separado**      | Comparten la misma red IP, la misma puerta de enlace y, crucialmente, el mismo **dominio de difusión y ancho de banda del switch/router**. | Pueden (y suelen) tener **subredes IP diferentes, puertas de enlace distintas, políticas de seguridad y QoS separadas, y dominios de difusión aislados**. |
    | **Visibilidad de Equipos**| Generalmente, los dispositivos conectados a diferentes SSIDs (pero en la misma LAN/VLAN subyacente) pueden verse entre sí. | Los dispositivos en diferentes VLANs no se ven entre sí a nivel de Capa 2. La comunicación requiere un router. |
    | **Control de Tráfico (QoS)**| Limitado o nulo a nivel de SSID individual.                | Permite aplicar políticas de QoS por VLAN (ej: priorizar tráfico de voz en una VLAN específica). |
    | **Propósito Típico**      | Ofrecer redes Wi-Fi con diferentes nombres (ej: "Hogar", "Invitados") por conveniencia o con diferentes configuraciones de seguridad Wi-Fi (WPA2/3). | Separar tráfico por razones de seguridad (ej: invitados vs. corporativo), departamentales (ej: ventas vs. ingeniería), por tipo de dispositivo (ej: PCs vs. teléfonos VoIP vs. cámaras IoT), o para controlar el tráfico de difusión. |
    | **Hardware Especial**     | No (cualquier AP moderno soporta múltiples SSIDs).         | Sí, se requieren **switches y routers (o APs empresariales) que soporten el estándar IEEE 802.1Q (etiquetado VLAN)**. |

    ✅ **Conclusión:** Un SSID adicional sin una VLAN subyacente es principalmente una conveniencia de nombres. Una **VLAN** proporciona una segmentación de red lógica real y robusta con aislamiento y control de tráfico significativamente mayores. Muchos APs empresariales permiten mapear diferentes SSIDs a diferentes VLANs.

## 5. Capa 3 OSI: Red – Direccionamiento Lógico y Enrutamiento Global <a name="capa3-red"></a>
<details>
  <summary>Ver/Ocultar Detalles de Capa 3: Red</summary>

### 5.1. Función Principal y PDU (Capa 3) <a name="capa3-funcion-pdu"></a>
*   **Función Principal (OSI):** Proporcionar direccionamiento lógico único (principalmente *IP - Internet Protocol*) a los dispositivos en la internetwork y determinar la mejor ruta (**enrutamiento**) para los **paquetes** de datos a través de múltiples redes interconectadas. La capa de red logra esto mediante cuatro operaciones básicas: direccionamiento de dispositivos finales, encapsulación de datos de la capa de transporte en paquetes IP, enrutamiento de estos paquetes a través de las redes, y desencapsulación en el host destino.
*   **Equivalente TCP/IP:** Capa de Internet.
*   **PDU (Protocol Data Unit):** Paquetes.

**El Protocolo de Internet (IP)** es el pilar de esta capa y opera con las siguientes características fundamentales:
    *   **Sin Conexión:** No establece una sesión previa; cada paquete es independiente.
    *   **Mejor Esfuerzo:** No garantiza la entrega, el orden, ni la ausencia de errores en los paquetes IP. La fiabilidad es tarea de capas superiores (ej. TCP).
    *   **Independiente de los Medios:** Funciona sobre diversas tecnologías de Capa 2/1. Debe considerar la Unidad Máxima de Transmisión (MTU) del enlace, lo que puede llevar a la fragmentación de paquetes IPv4 por routers intermedios (los routers no fragmentan IPv6; el origen o los encabezados de extensión lo manejan).

### 5.2. Direccionamiento IP <a name="capa3-direccionamiento-ip"></a>
*(Introducción)*
#### 5.2.1. Dirección IPv4 (32 bits) <a name="capa3-ipv4"></a>
*(Contenido)*
Una **Dirección IP (Internet Protocol)** es una etiqueta numérica única asignada a cada *dispositivo (host)*. En su versión 4 (IPv4):
*   Es una dirección lógica de 32 bits, agrupada en cuatro octetos (bloques de 8 bits).
*   Cada paquete IP contiene una dirección IP de origen y una de destino. ***Dentro del encabezado IPv4, el campo "Protocolo" (ej: 6 para TCP, 17 para UDP) es crucial para indicar a qué servicio de capa superior entregar los datos en el destino, y el campo "Tiempo de Vida" (TTL) previene bucles de enrutamiento.***

*   Usualmente se representa en notación decimal separada por puntos.
*   **Ejemplo:** 
*   - Binario: `11010001101001011100100000000001`
*   - Octetos: `11010001.10100101.11001000.00000001`
*   - Decimal con puntos: `209.165.200.1`

#### 5.2.2. Desglosando una Dirección IP con su Máscara de Subred <a name="capa3-desglose-ip-mascara"></a>

Para entender cómo una dirección *IP (Internet Protocol)* individual se relaciona con su red local (LAN) y cómo se identifican los *dispositivos (hosts)* dentro de ella, utilizamos la **máscara de subred**.

Una **Máscara de Subred** es un número de 32 bits, expresado comúnmente en notación decimal con puntos (igual que una IPv4) o en notación CIDR (ej: `/24`). Su función es dividir una dirección IP en dos partes fundamentales: la **porción de RED** (que identifica la subred) y la **porción de HOST** (que identifica a un *dispositivo (host)* específico dentro de esa subred).

***Técnicamente, para que un dispositivo determine su propia dirección de red, realiza una operación lógica booleana llamada AND bit a bit entre su dirección IP y su máscara de subred. El resultado de esta operación AND es la dirección de red. (Recordatorio: 1 AND 1 = 1; 1 AND 0 = 0; 0 AND 1 = 0; 0 AND 0 = 0).***

**Principios Clave de la Máscara de Subred:**

*   La **máscara de subred** (`255.255.255.0` o `/24`) es crucial:
    *   `255` indica que el octeto correspondiente de la IP es parte de la **porción de RED**.
    *   `0` indica que el octeto correspondiente de la IP es parte de la **porción de HOST**.
*   Los dispositivos con la misma **Porción de Red** (y por lo tanto, la misma **Dirección de Red**) pertenecen a la misma subred y pueden comunicarse directamente.
*   En cualquier subred, la **Dirección de Red** y la **Dirección de Broadcast** son reservadas y no se pueden asignar a dispositivos individuales.

#### 5.2.3. Conversión CIDR a Máscara de Subred (IPv4) <a name="capa3-cidr-mascara"></a>

La notación CIDR indica **cuántos bits están en "1"** desde la izquierda. Eso define la máscara.

| CIDR | Máscara Decimal       | Bits para Hosts | Nº de Hosts (usables) |
|------|-----------------------|------------------|------------------------|
| /8   | 255.0.0.0             | 24               | 16.777.214             |
| /16  | 255.255.0.0           | 16               | 65.534                 |
| /24  | 255.255.255.0         | 8                | 254                    |
| /25  | 255.255.255.128       | 7                | 126                    |
| /26  | 255.255.255.192       | 6                | 62                     |
| /27  | 255.255.255.224       | 5                | 30                     |
| /28  | 255.255.255.240       | 4                | 14                     |
| /29  | 255.255.255.248       | 3                | 6                      |
| /30  | 255.255.255.252       | 2                | 2                      |

#### 5.2.4. Máscara de Subred vs. Dirección MAC <a name="capa3-mascara-vs-mac"></a>
Ambas son identificadores, pero operan en capas diferentes y tienen propósitos distintos:

| Elemento               | Dirección MAC (Media Access Control)        | Máscara de Subred                  |
|------------------------|---------------------------------------------|------------------------------------|
| **Qué es**             | Identificador físico único de la *tarjeta de red (NIC)*. | Patrón de bits que diferencia la porción de Red de la porción de Host en una dirección IP. |
| **Longitud**           | 48 bits (6 octetos, usualmente en hexadecimal). | 32 bits (4 octetos, usualmente en decimal para IPv4). |
| **Ejemplo**            | `A4:5E:60:7B:9D:FA`                         | `255.255.255.0`                    |
| **Nivel Modelo OSI**   | Capa 2 (Enlace de Datos).                   | Capa 3 (Red), intrínsecamente ligada a la IP. |
| **Asignación**         | Quemada en fábrica por el manufacturador (basado en OUI asignado por IEEE). | Configurada manual o automáticamente (ej. por DHCP) como parte de la configuración IP de un host. |
| **Cambia**             | Generalmente no (considerada permanente), aunque puede ser falseada (spoofing). | Sí, cambia según el diseño de la subred a la que pertenece el host. |
| **Visibilidad**        | Local, solo relevante dentro de la misma subred física (segmento LAN). | Relevante para el enrutamiento IP entre diferentes subredes. |
| **Propósito Principal**| Identificar un dispositivo de forma única en una red local para la entrega de tramas. | Ayudar a los dispositivos y routers a determinar si una IP de destino está en la misma red local o en una red remota. |

🔎 **En resumen:**
*   **NIC (Network Interface Card)** Hardware **Analogía:** Como un *carnet de identificación*.
*   **Dirección MAC (Media Access Control)** **Analogía:** Como el número de *RUT/DNI* impreso en tu *Tarjeta de Interfaz de Red (NIC - Network Interface Card)* asignado por el fabricante.   
*   **Máscara de Subred** es una "regla lógica" que se aplica a una Dirección IP para entender su estructura de red y host, crucial para el enrutamiento.
*   **No tienen relación directa funcional:** La máscara de subred no interactúa con la MAC, ni viceversa. Ambas son necesarias, pero para funciones diferentes en capas distintas.

**Ejemplo Práctico:**

*   **IP del Dispositivo:** `192.168.1.50`
*   **Máscara de Subred:** `255.255.255.0` (Notación CIDR: `/24`)

| Concepto Derivado de la IP y Máscara | Cómo se Determina / Identifica                                   | Ejemplo con `192.168.1.50/24` | Descripción y Propósito                                                                                                                              |
| :------------------------------------ | :----------------------------------------------------------------- | :----------------------------- | :--------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Porción de Red de la IP**           | Parte de la IP que corresponde a los `255` en la máscara.           | `192.168.1`                    | Identifica la "calle" o subred específica a la que pertenece el dispositivo. (Para /24, son los primeros 24 bits de la IP).                               |
| **Porción de Host de la IP**          | Parte de la IP que corresponde a los `0` en la máscara.              | `.50`                          | Identifica el "número de casa" o dispositivo único dentro de esa subred. (Para /24, son los últimos 8 bits de la IP).                                 |
| **Dirección de Red (o Subred)**     | Tomar la "Porción de Red" de la IP y poner a cero la "Porción de Host". | `192.168.1.0/24`               | Es la identidad de toda la subred. No se asigna a dispositivos. Todos los dispositivos en esta subred comparten esta Dirección de Red.                 |
| **Puerta de Enlace (Gateway)**        | Convencionalmente, la primera dirección IP *usable* de la subred.    | `192.168.1.1`                  | La IP del router (en su interfaz LAN) que permite a los dispositivos de la subred comunicarse con otras redes (ej. Internet). Utiliza una IP de host. |
| **Rango de IPs de Host Usables**    | Desde la IP siguiente a la Dirección de Red, hasta la IP anterior a la de Broadcast. | `192.168.1.1` a `192.168.1.254` | Direcciones IP que pueden ser asignadas a dispositivos finales (PCs, móviles, servidores, etc.) dentro de la subred.                                 |
| **Dirección de Broadcast**          | La última dirección IP posible en la subred.                        | `192.168.1.255`                | Se utiliza para enviar un mensaje a *todos* los dispositivos dentro de la misma subred simultáneamente. No se asigna a dispositivos.                    |
| **Número de Hosts Usables**         | Fórmula: 2<sup>(bits de host)</sup> - 2. <br/> Para /24 (con 8 bits de host): 2<sup>8</sup> - 2. | 256 - 2 = **254**              | La cantidad de dispositivos que pueden tener una IP única en esta subred. Se restan 2 IPs (Dirección de Red y Dirección de Broadcast). (Una IPv4 tiene 32 bits; si 24 son de red, quedan 8 para hosts). |

#### 5.2.5. Direcciones IPv4 Públicas vs. Privadas <a name="capa3-ipv4-publica-privada"></a>

*   **Públicas:** Únicas globalmente, enrutables en Internet. Asignadas por ISPs, LIRs o RIRs.
*   **Privadas:** Para uso en redes internas, son unicas solo en tu red (LANs). No son enrutables directamente en Internet y pueden repetirse en diferentes LANs. Se requiere NAT para que los dispositivos con IP privada accedan a Internet.
  
#### 5.2.6. Rangos Comunes de IP Privada (RFC 1918) <a name="capa3-ip-privada-rangos"></a>
Una vez que entendemos que existen IPs "Privadas" para uso interno, es útil conocer cuáles son estos rangos de direcciones privadas estándar:

| Rango de IP Privada             | Máscara de Subred (Bloque Completo) | Uso Típico / Implementación Común                                                                                                |
|---------------------------------|-------------------------------------|----------------------------------------------------------------------------------------------------------------------------------|
| `10.0.0.0` – `10.255.255.255`   | `255.0.0.0` (`/8`)                  | Empresas grandes (el bloque `/8` se subdivide en múltiples subredes más pequeñas).                                                  |
| `172.16.0.0` – `172.31.255.255` | `255.240.0.0` (`/12`)                 | Empresas medianas (el bloque `/12` se subdivide en subredes).                                                                    |
| `192.168.0.0` – `192.168.255.255`| `255.255.0.0` (`/16`)                 | **Hogares / Pequeñas Empresas:** Comúnmente se utiliza una subred `/24` de este bloque (ej: `192.168.1.0/24`, con 254 hosts usables). |

*Nota: En cada subred creada, 2 IPs no son usables por dispositivos (hosts): la Dirección de Red y la Dirección de Broadcast.*

### 5.3. Conexión al Mundo Exterior: Router y NAT. Principalmente Capa 3 y poco en Capa 4 <a name="capa3-router-nat"></a> 

Para que tus *dispositivos (hosts)* con IPs privadas (en tu LAN) accedan a Internet, el router actúa como intermediario esencial. Utiliza **NAT (Network Address Translation)** para traducir la IP privada de tu dispositivo a su propia IP pública (de la *Tarjeta de Interfaz de Red (NIC - Network Interface Card)* WAN) al enviar datos, y revierte esta traducción para las respuestas entrantes. En tu red local, todos los dispositivos comparten la misma *Puerta de Enlace (Gateway)* e IP pública asignada por el router al comunicarse con el exterior, mientras NAT gestiona las conexiones y el tráfico de manera eficiente.

Cada red privada tiene su propia IP pública asignada por su proveedor de servicios de internet (ISP), sin compartirla con redes vecinas, incluso si se comunican entre sí. Su asignación puede ser:

*   Manual (IP fija): Permanece constante en el tiempo, asignada por el ISP.
*   Automática (IP dinámica): Asignada por el ISP vía DHCP (Dynamic Host Configuration Protocol es capa 7), pudiendo cambiar periódicamente. Esto es común en hogares y pequeñas empresas.

Independientemente de su método de asignación, NAT dirige todo el tráfico de la red interna a través de la IP pública disponible, asegurando el enrutamiento y la seguridad de la comunicación.

| Concepto                  | Tu PC (Host)                                  | Router (Interfaz LAN)                          | Router (Interfaz WAN)                             | Internet (Servidor Externo)        |
|---------------------------|-----------------------------------------------|------------------------------------------------|---------------------------------------------------|------------------------------------|
| **Tipo de IP (y Visibilidad)** | Privada <br>*(Solo visible en tu LAN)*      | Privada <br>*(Solo visible en tu LAN)*          | Pública <br>*(Visible para todo Internet)*        | Pública <br>*(Visible para todo Internet)* |
| **Ejemplo IP / Interfaz** | `192.168.1.45/24`                             | `192.168.1.1/24` (Interfaz LAN)                | `181.160.25.12` (Interfaz WAN)                    | `142.250.184.174` (Google)         |
| **Función / Rol Principal** | Usar servicios de red; identificado por su IP privada. | *Puerta de Enlace (Gateway)* para la LAN; puede actuar como Servidor DHCP; **Realiza NAT**. | Conexión a Internet; posee la IP pública que representa a la LAN en Internet. | Proveer servicios/contenido.       |

### 5.4. Direcciones IPv4 Especiales <a name="capa3-ipv4-especiales"></a>
*   **Loopback:** `127.0.0.0/8` (comúnmente `127.0.0.1`). Se usa para probar la pila TCP/IP del propio host.
*   **Link-Local (APIPA - Automatic Private IP Addressing):** `169.254.0.0/16`. Autoasignada por sistemas operativos (como Windows) si no se puede obtener una dirección IP de un servidor DHCP(capa 7). Permite comunicación limitada en la red local.
*   **Experimental (TEST-NET):** `192.0.2.0/24`, `198.51.100.0/24`, `203.0.113.0/24` (reservadas para documentación y ejemplos).
*   **Direcciones Reservadas (IANA):** Incluye rangos para multidifusión (`224.0.0.0/4`), futuro uso (`240.0.0.0/4`).

### 5.5. Clases de Direcciones IPv4 (Histórico) <a name="capa3-ipv4-clases"></a>
Sistema original de asignación, obsoleto y reemplazado por **CIDR (Classless Inter-Domain Routing)** que permite máscaras de subred de longitud variable (VLSM) para un uso más eficiente del espacio de direcciones.

| Clase | Rango de IP                         | Prefijo CIDR | Nº *dispositivos (hosts)* aprox. | Uso Principal                             |
|-------|-------------------------------------|--------------|------------------|-------------------------------------------|
| A     | 0.0.0.0 – 127.255.255.255           | /8           | +16 millones     | Redes muy grandes (Gobiernos, ISP, etc.)  |
| B     | 128.0.0.0 – 191.255.255.255         | /16          | ~65 mil          | Redes medianas y grandes                  |
| C     | 192.0.0.0 – 223.255.255.255         | /24          | 254              | Redes pequeñas (LANs, oficinas, etc.)     |
| D     | 224.0.0.0 – 239.255.255.255         | —            | —                | 🟢 Multidifusión (Multicast)              |
| E     | 240.0.0.0 – 255.255.255.255         | —            | —                | Reservado para pruebas/experimentos       |

### 5.6. Asignación de Direcciones IP (IANA, RIRs, LIRs, ISPs) <a name="capa3-asignacion-ip"></a>
Jerarquía global:
*   **IANA (Internet Assigned Numbers Authority)** -> da bloques de IPs a los **RIRs (Regional Internet Registries)** (LACNIC, ARIN, etc.) -> quienes las asignan a los **ISPs (Internet Service Providers)** y grandes organizaciones → Usuarios finales.
    
    **Los cinco RIRs son:**
    *   **AfriNIC:** Para África.
    *   **APNIC:** Para Asia-Pacífico.
    *   **ARIN:** Para Norteamérica.
    *   **LACNIC:** Para Latinoamérica y el Caribe.
    *   **RIPE NCC:** Para Europa, Oriente Medio y partes de Asia Central.
  
*   **ISPs (Internet Service Providers) y LIRs (Local Internet Registries):** Obtienen bloques de IPs de los RIRs y los asignan a organizaciones y usuarios finales.
  
### 5.7. Dirección IPv6 (128 bits) <a name="capa3-ipv6"></a>
Diseñada para suceder a IPv4 debido al agotamiento de direcciones públicas IPv4.
*   **Formato:** 8 grupos (hextetos) de 4 dígitos hexadecimales, separados por dos puntos (`:`).
    *   Ej: `2001:0db8:85a3:0000:0000:8a2e:0370:7334`
*   **Reglas de Abreviación:**
    1.  **Omitir Ceros Iniciales:** En cualquier hexteto, los ceros a la izquierda se pueden omitir (ej: `0db8` → `db8`; `000a` → `a`). Un hexteto de `0000` se puede escribir como `0`.
    2.  **Comprimir Secuencia de Ceros:** Una *única* secuencia contigua de hextetos que sean todos cero puede reemplazarse por dos puntos dobles (`::`). *Esta regla solo puede aplicarse una vez por dirección*.
        *   Ej: `2001:0db8:0000:0000:0000:ff00:0042:8329` → `2001:db8::ff00:42:8329`
*   ***El encabezado IPv6, de 40 bytes fijos, incluye campos como "Siguiente Encabezado" (análogo al campo "Protocolo" de IPv4, para identificar la carga útil) y "Límite de Saltos" (similar al TTL). Una característica importante de IPv6 es el uso de "Encabezados de Extensión" opcionales para funcionalidades como fragmentación o seguridad, manteniendo el encabezado principal simple.***

#### 5.7.1. Categorías de Direcciones IPv6 <a name="capa3-ipv6-categorias"></a>
Existen tres categorías amplias de direcciones IPv6:
*   **Unicast (Unidifusión):** Identifica de forma exclusiva una interfaz en un dispositivo habilitado para IPv6. Un paquete enviado a una dirección unicast se entrega a la interfaz específica identificada por esa dirección. Al igual que una dirección MAC unicast permite la comunicación uno a uno en la LAN (Capa 2), una dirección IP unicast permite la comunicación uno a uno a nivel global o de red (Capa 3).
*   **Multicast (Multidifusión):** Se utiliza para enviar un único paquete IPv6 a múltiples destinos (un grupo de multidifusión). Similar al concepto de MAC multicast en Capa 2, una dirección IP multicast permite enviar un paquete desde un origen a múltiples destinos interesados. Sin embargo, a diferencia de la MAC multicast que opera solo en la LAN, la IP multicast puede ser enrutada entre redes si los routers están configurados para ello. IPv6 usa extensivamente la multidifusión para funciones que en IPv4 requerían difusión (broadcast).
*   **Anycast:** Una dirección IPv6 anycast es una dirección unicast que se puede asignar a varios dispositivos (generalmente servidores que ofrecen el mismo servicio). Un paquete enviado a una dirección anycast se enruta al dispositivo *más cercano* (en términos de métrica de enrutamiento) que tenga esa dirección.
 A diferencia de IPv4, **IPv6 no tiene dirección de Broadcast (Difusión)**. Sus funciones se realizan principalmente mediante direcciones de multidifusión de alcance de enlace.

#### 5.7.2. Longitud de Prefijo IPv6 <a name="capa3-ipv6-prefijo"></a>
 IPv6 utiliza la **Longitud del Prefijo** para indicar la porción de red de la dirección, representada en notación de barra (ej: `/64`). No utiliza máscara de subred en notación decimal punteada.
 *   La longitud de prefijo puede ir de 0 a 128.
 *   La longitud de prefijo recomendada para la mayoría de las LAN es **/64**.
 *   Esto divide la dirección de 128 bits en un **Prefijo de 64 bits (Parte de Red)** y un **ID de Interfaz de 64 bits (Parte de Host)**.
 *   Usar un /64 facilita la Autoconfiguración de Dirección Sin Estado (SLAAC) y la gestión de subredes.

#### 5.7.3. Tipos de Direcciones Unicast <a name="capa3-ipv6-unicast-tipos"></a>
Un dispositivo habilitado para IPv6 típicamente tiene, como mínimo, una dirección Link-Local, y a menudo también una Global Unicast.
*   **GUA (Global Unicast Address - Dirección de Unidifusión Global):**
    *   Equivalente a una dirección IPv4 pública. Son globalmente únicas y enrutables en Internet.
    *   Actualmente asignadas por IANA/RIRs desde el rango `2000::/3` (direcciones que empiezan por '2' o '3' en el primer hexteto).
    *   La dirección `2001:DB8::/32` está reservada para documentación y ejemplos.
    *   **Estructura GUA:** Típicamente tiene 3 partes:
        1.  **Prefijo de Enrutamiento Global:** Parte asignada por el ISP al sitio (ej: un `/48`). Identifica la red del cliente en Internet.
        2.  **ID de Subred:** Parte utilizada por una organización para identificar sus subredes internas. Si se recibe un `/48` y se usan prefijos `/64` para las LAN, quedan 16 bits para el ID de subred (2^16 = 65,536 subredes).
        3.  **ID de Interfaz:** Los 64 bits más bajos, identifican de forma única la interfaz dentro de la subred.
*   **LLA (Link-Local Address - Dirección Local de Enlace):**
     *   **Requerida para cada interfaz habilitada para IPv6.**
     *   Se utiliza para comunicarse con otros dispositivos en el **mismo enlace local (subred)**.
     *   Se crean automáticamente por el dispositivo, incluso si no se asigna una GUA.
     *   Se encuentran en el rango `FE80::/10`.
     *   **Los routers NO reenvían paquetes** con una dirección LLA de origen o destino.
     *   Usos comunes: Mensajes de protocolo de enrutamiento entre routers vecinos; usada frecuentemente por los hosts como su dirección de Puerta de Enlace Predeterminada.
*   **ULA (Unique Local Address - Dirección Local Única):**
    *   Rango `FC00::/7` a `FDFF::/7`.
    *   Conceptualmente similares a las direcciones privadas RFC 1918 de IPv4, pero no destinadas a ser traducidas mediante NAT.
    *   Se utilizan para direccionamiento local dentro de un sitio o entre un número limitado de sitios, para dispositivos que no deben ser accesibles directamente desde Internet. No se enrutan globalmente.
*   **Loopback:** La dirección `::1/128` se usa para que un host se envíe paquetes a sí mismo para pruebas.
*   **Dirección Sin Especificar (Unspecified):** La dirección `::/128` (todos ceros) no se puede asignar a una interfaz. Se usa como dirección de origen por un dispositivo que aún no tiene una dirección IPv6, por ejemplo, durante el proceso DAD o al solicitar una dirección a un servidor DHCPv6.
*   *Nota:* En IPv6, las direcciones de interfaz (host) con todos los bits a cero o todos a uno son, por lo general, direcciones válidas y utilizables (a diferencia de IPv4 donde la dirección de red y broadcast no se asignan a hosts).

#### 5.7.4. Asignación de Direcciones GUA y LLA <a name="capa3-ipv6-asignacion"></a>
Las direcciones pueden asignarse estática o dinámicamente.

*   **Asignación Estática:**
     *   Se configura manualmente la dirección completa en el host o en la interfaz del router.
     *   Comando IOS para GUA: `ipv6 address <ipv6-address>/<prefix-length>`
     *   Comando IOS para LLA: `ipv6 address <fe80::-address> link-local` (la palabra clave `link-local` es necesaria).
     *   Configurar LLAs estáticas en routers (ej: `FE80::1`) es una buena práctica para tener direcciones de gateway fáciles de reconocer.
*   **Asignación Dinámica (GUA):**
     Los dispositivos usan mensajes **ICMPv6** para la asignación dinámica:
     *   **Mensaje RS (Router Solicitation):** Enviado por un host para localizar routers y solicitar un Mensaje RA.
     *   **Mensaje RA (Router Advertisement):** Enviado periódicamente por los routers (o en respuesta a un RS) para anunciar información de direccionamiento. Para que un router Cisco envíe RAs, debe tener activado el enrutamiento IPv6 (`ipv6 unicast-routing` en configuración global).
     *   El mensaje RA indica uno de los siguientes **tres métodos** de asignación que el cliente puede usar:
         1.  **Método 1: SLAAC (Stateless Address Autoconfiguration):** El RA proporciona el Prefijo de Red y la Longitud del Prefijo. El dispositivo cliente genera entonces su propio ID de Interfaz de 64 bits para formar su GUA. El RA también proporciona la dirección de la Puerta de Enlace Predeterminada (la LLA del router).
         2.  **Método 2: SLAAC y DHCPv6 Sin Estado (Stateless):** El dispositivo usa SLAAC para generar su GUA y obtiene la Puerta de Enlace del RA, pero consulta a un servidor DHCPv6 Sin Estado para obtener información adicional, como direcciones de servidor DNS y nombre de dominio.
         3.  **Método 3: DHCPv6 Con Estado (Stateful):** El RA indica al dispositivo que contacte a un servidor DHCPv6 Con Estado para obtener su GUA y toda la información de configuración (DNS, nombre de dominio). El RA sigue proporcionando la dirección de la Puerta de Enlace Predeterminada (LLA del router). El servidor DHCPv6 con estado mantiene un registro de qué direcciones ha asignado.
*   **Creación Dinámica del ID de Interfaz (para SLAAC):**
     Si se usa SLAAC (Método 1 o 2), el cliente crea su ID de Interfaz de 64 bits mediante uno de estos procesos:
     *   **EUI-64:** Modifica la dirección MAC de 48 bits de la interfaz: inserta el valor hexadecimal `FFFE` en el medio y voltea el 7º bit (bit U/L) de la dirección MAC. Permite correlacionar la MAC con la IP.
     *   **Generado Aleatoriamente:** Muchos sistemas operativos modernos (incluido Windows a partir de Vista) generan un ID de interfaz aleatorio de 64 bits temporal o estable para mejorar la privacidad, evitando que la dirección IP pueda ser rastreada hasta la dirección MAC del hardware.
*   **Asignación Dinámica (LLA):**
     Las LLA se generan dinámicamente de forma automática en todas las interfaces habilitadas para IPv6, usando EUI-64 o un valor aleatorio, según el SO. Los routers Cisco IOS utilizan EUI-64 por defecto para generar LLAs dinámicas (a menos que se configure una estáticamente).
*   **DAD (Duplicate Address Detection):** Antes de usar una dirección unicast (estática o dinámica), un host utiliza DAD (parte de NDP) para verificar que la dirección es única en el enlace, enviando un mensaje para ver si algún otro dispositivo responde con esa misma dirección.

#### 5.7.5. Direcciones Multicast IPv6 <a name="capa3-ipv6-multicast"></a>
 *   Usadas para enviar un paquete desde un único origen a un grupo de interfaces de destino.
 *   Utilizan el prefijo `FF00::/8`. Sólo pueden ser direcciones de destino, no de origen.
 *   **Dos tipos principales de direcciones de multidifusión IPv6:**
     *   **Multidifusión Asignada (Well-Known Multicast):** Son direcciones reservadas para grupos predefinidos de dispositivos que ejecutan un protocolo o servicio común.
         *   `FF02::1`: Grupo **Todos los Nodos** del Enlace-Local. Todos los dispositivos habilitados para IPv6 en un enlace (subred) se unen automáticamente a este grupo. Cuando un paquete se envía a esta dirección, es recibido y procesado por todas las interfaces IPv6 en ese enlace. Funcionalmente, reemplaza a la difusión (broadcast) de IPv4 para muchas operaciones locales. Los mensajes RA de los routers se envían a esta dirección. Para su transmisión en Ethernet, se mapea a la dirección MAC de multidifusión `33:33:00:00:00:01`.
         *   `FF02::2`: Grupo **Todos los Routers** del Enlace-Local. Todos los routers IPv6 en un enlace se unen automáticamente a este grupo (si `ipv6 unicast-routing` está habilitado). Los mensajes RS de los hosts se envían a esta dirección. Para su transmisión en Ethernet, se mapea a la dirección MAC de multidifusión `33:33:00:00:00:02`.
     *   **Multidifusión de Nodo Solicitado (Solicited-Node Multicast):**
         *   Una dirección de multidifusión generada automáticamente para cada dirección unicast y anycast configurada en una interfaz. Se forma tomando los últimos 24 bits de la dirección unicast/anycast y añadiéndolos al prefijo `FF02::1:FF00:0/104`.
         *   Se utiliza en el proceso de Descubrimiento de Vecinos (NDP), específicamente para la resolución de direcciones (similar a ARP en IPv4) y para DAD.
         *   La ventaja es que esta dirección IP multicast se mapea a una dirección MAC Ethernet de multidifusión única (formada por `33:33:FF` seguido de los últimos 24 bits de la IP unicast/anycast). Esto permite que las NICs de los dispositivos que no son el objetivo previsto filtren la trama a nivel de hardware, reduciendo significativamente el procesamiento en la CPU en comparación con una difusión de Capa 2.

#### 5.7.6. Verificación de la Configuración IPv6 en Cisco IOS <a name="capa3-ipv6-verificacion-ios"></a>
*   `show ipv6 interface brief`: Muestra un resumen de las direcciones IPv6 (GUA y LLA) y el estado (Capa 1 / Capa 2: [up/up], [down/down], etc.) de cada interfaz.
*   `show ipv6 route`: Muestra la tabla de enrutamiento IPv6.
     *   Las rutas conectadas (`C`) y las rutas de interfaz local (`L` con prefijo `/128` para la GUA específica de la interfaz) se añaden automáticamente cuando una interfaz con una GUA configurada está activa.
     *   **Las LLAs NO aparecen en la tabla de enrutamiento principal del router**, ya que no son direcciones destinadas a ser enrutadas entre diferentes enlaces.
*   `ping <ipv6-address>`: Verifica la conectividad de Capa 3 con otra dirección IPv6. Si se hace ping a una LLA desde un router Cisco, a menudo se debe especificar la interfaz de salida, ya que la misma LLA podría ser válida en múltiples enlaces.
  
### 5.8. Dispositivos de Capa 3: Routers <a name="capa3-routers-dispositivos"></a>
*   Función principal: Conectar diferentes redes (subredes) y tomar decisiones de **enrutamiento** para reenviar paquetes entre ellas basándose en la dirección IP de destino. **Un router se usa para conectar varias redes entre sí, mientras que un switch se usa para conectar dispositivos dentro de la misma red.**
*   Cada *Tarjeta de Interfaz de Red (NIC - Network Interface Card)* de un router pertenece a una red IP diferente y, por lo tanto, a un dominio de difusión diferente. **Los routers no propagan broadcasts por defecto.**
*   **Componentes Internos Clave (análogos a una computadora):**
    *   **CPU (Unidad Central de Procesamiento):** Ejecuta las instrucciones del sistema operativo (IOS), como la inicialización del sistema y las funciones de enrutamiento y conmutación.
    *   **RAM (Memoria de Acceso Aleatorio):** Almacena la tabla de enrutamiento activa, la **configuración en ejecución (running-config)**, colas de paquetes, y el IOS descomprimido mientras el router está operativo. Es volátil (pierde su contenido al apagar el dispositivo).
    *   **Memoria Flash:** Almacena el **archivo de imagen del Sistema Operativo Interredes (IOS de Cisco)**. Es memoria no volátil (conserva su contenido al apagar).
    *   **NVRAM (Memoria de Acceso Aleatorio No Volátil):** Almacena el **archivo de configuración de inicio (startup-config)**. Es memoria no volátil.
    *   **ROM (Memoria de Solo Lectura):** Almacena el gestor de arranque (bootstrap), instrucciones de diagnóstico básico (POST) y una versión limitada del IOS (ROMMON).
    *   **Interfaces:** Puertos físicos (Ethernet, Serial, etc.) y lógicos para conectar a diferentes redes.
    *   **Fuente de Alimentación.**
*   **Puertos e Interfaces Típicos de un Router Cisco ISR (ej: 4321):**
    *   **Interfaces LAN:** Puertos Gigabit Ethernet (ej: GE0/0/0) para conexión a switches o hosts locales. Algunos pueden tener opción SFP para fibra.
    *   **Interfaces WAN (a menudo modulares):** Ranuras para Módulos de Interfaz de Red (NIMs) o Módulos de Interfaz WAN de Alta Velocidad (EHWIC en modelos más antiguos) que permiten flexibilidad para diferentes tipos de conexiones WAN (Serial, DSL, etc.).
    *   **Puertos de Consola:** Para acceso de administración fuera de banda (ej: RJ-45 y/o USB tipo mini-B).
    *   **Puerto Auxiliar (AUX):** Históricamente usado para conexión de módem dial-up para administración remota (raramente usado hoy).
    *   **Puerto USB:** Para almacenamiento externo o carga de imágenes/configuraciones.
    *   **Interfaz de Gestión (Management):** Un puerto Ethernet dedicado para acceso de administración, separado de los puertos de datos.
*   **ISR (Integrated Services Router - Router de Servicios Integrados):** Router que combina funciones de enrutamiento con otros servicios como firewall, VPN, telefonía IP, etc.

#### 5.8.1. Instalación Física y Encendido Inicial del Router <a name="capa3-router-power-on"></a>
Antes de proceder con la configuración lógica, es esencial realizar la instalación física y el primer encendido del router de forma adecuada:
1.  **Montaje (si aplica):** Si es un router diseñado para rack, móntalo de forma segura en el rack.
2.  **Conexión a Tierra:** Asegura una correcta conexión a tierra del chasis del router según las recomendaciones del fabricante para seguridad y estabilidad.
3.  **Conectar Cable de Alimentación.**
4.  **Conectar Cable de Consola:** Utiliza un cable de consola (y el adaptador apropiado, ej: DB9-a-RJ45 o USB-a-Serial) para conectar el puerto de consola del router a un puerto serie o USB de tu PC. Ejecuta un software de emulación de terminal en la PC (ej: PuTTY, Tera Term, SecureCRT) con los parámetros correctos (generalmente 9600 baudios, 8 bits de datos, sin paridad, 1 bit de parada, sin control de flujo). Este es el método principal para la configuración inicial.
5.  **Encender el Router.**
6.  **Observar Mensajes de Arranque:** En la ventana del software de emulación de terminal, observarás los mensajes del proceso de arranque del router. Esto incluye la descompresión de la imagen del IOS y la búsqueda/carga de un archivo de configuración.
    *El router ahora está listo para la configuración inicial a través de la CLI accedida por el puerto de consola.*

### 5.9. Tabla de Enrutamiento y Decisiones de Reenvío (memoria) <a name="capa3-tabla-enrutamiento"></a>

#### 5.9.0. Decisiones de Reenvío del Host y Puerta de Enlace Predeterminada <a name="capa3-decision-host-gateway"></a>

Antes de que un paquete llegue a un router, el host de origen debe tomar una decisión inicial de reenvío. El host determina si el destino es:
*   **A sí mismo:** Para pruebas internas (ej: `ping 127.0.0.1` en IPv4 o `::1` en IPv6 - interfaz de loopback). La comunicación no sale de la pila TCP/IP del host.
*   **Un host local:** Si la dirección IP de destino se encuentra en la misma red local que el host emisor. Esta determinación se realiza:
    *   En IPv4, comparando la dirección de red del destino (obtenida aplicando la máscara de subred a la IP de destino) con la propia dirección de red del host.
    *   En IPv6, verificando si el prefijo de la dirección de destino coincide con el prefijo de red local anunciado por el router.
    Si el destino es local, el paquete se encapsula en una trama de Capa 2 y se envía directamente al host de destino a través de la infraestructura de la LAN (ej: un switch).
*   **Un host remoto:** Si la dirección IP de destino está en una red diferente. En este caso, el paquete debe ser enviado a la **puerta de enlace predeterminada (default gateway)**.

La **puerta de enlace predeterminada** es la dirección IP de la interfaz del router local que sirve como "salida" de la red local hacia otras redes. Esta dirección se configura en el host (ya sea manualmente o dinámicamente a través de DHCP para IPv4, o mediante Anuncios de Router - RA para IPv6) y es crucial para la comunicación con redes externas. En la tabla de enrutamiento del host, la puerta de enlace predeterminada se representa como una **ruta predeterminada**.

#### 5.9.1. Tabla de Enrutamiento del Host <a name="capa3-tabla-host"></a>

Al igual que los routers, los dispositivos finales (hosts) mantienen una tabla de enrutamiento para tomar decisiones de reenvío. Aunque más simple que la de un router, es esencial.
*   En un host Windows, esta tabla se puede visualizar con los comandos `route print` o `netstat -r` en el Símbolo del sistema.
*   La salida típicamente muestra:
    *   **Lista de Interfaces:** Información sobre las interfaces de red del host (Ethernet, Wi-Fi), incluyendo sus direcciones MAC y números de interfaz asignados.
    *   **Tabla de Rutas (IPv4 e IPv6):** Lista las rutas conocidas por el host. Esto incluye:
        *   Rutas a la red de loopback (ej: `127.0.0.0` con máscara `255.0.0.0` para `127.0.0.1`).
        *   Rutas a la red local a la que está conectado el host (a menudo etiquetadas como 'On-link' o con la dirección de red local).
        *   La dirección IP específica del host en la red local.
        *   Direcciones de broadcast y multicast locales.
        *   La **ruta predeterminada** (ej: destino `0.0.0.0` con máscara `0.0.0.0` en IPv4) que apunta a la dirección IP de la puerta de enlace predeterminada configurada en el host. Esta ruta se utiliza para todo el tráfico destinado a redes no listadas explícitamente en la tabla.

#### 5.9.2. Tabla de Enrutamiento del Router <a name="capa3-tabla-router"></a>

Es una base de datos que un router utiliza para decidir cómo reenviar un paquete IP hacia su destino. El router examina la dirección IP de destino del paquete y busca la mejor coincidencia (la entrada con el prefijo de red más largo que coincida con la IP de destino) en su tabla de enrutamiento.
*   🧩 Cada entrada en la tabla de enrutamiento de un router contiene típicamente:
    *   Red de destino y máscara de subred (o prefijo de red).
    *   Dirección IP del siguiente salto (Next Hop): El router al que se debe enviar el paquete a continuación, o la interfaz de salida del router si la red de destino está directamente conectada.
    *   Métrica: Un valor que indica la "preferencia" o "costo" de la ruta. Se elige la ruta con la métrica más baja si hay múltiples rutas al mismo destino aprendidas por el mismo protocolo de enrutamiento.
*   🔄 ¿Cómo se llena la tabla?
    *   **Redes Conectadas Directamente:** Agregadas automáticamente cuando una interfaz del router es configurada con una dirección IP y está activa ('up/up'). El router sabe que puede alcanzar cualquier host en estas redes sin necesidad de otro router. Estas suelen ser las rutas más preferidas.
    *   **Rutas Estáticas:** Configuradas manualmente por un administrador, especificando la red de destino y el siguiente salto o la interfaz de salida. Son apropiadas para redes pequeñas, para rutas específicas que no cambian, o para definir una ruta a una red stub. **No se adaptan automáticamente a cambios en la topología de la red; si la ruta estática se vuelve inválida debido a un cambio, debe ser reconfigurada manualmente.**
    *   **Rutas Dinámicas:** Aprendidas a través de protocolos de enrutamiento (ej: **OSPF, EIGRP**, RIP, BGP). Los routers que ejecutan estos protocolos **intercambian información de enrutamiento automáticamente con otros routers, se adaptan a cambios en la topología, pueden elegir la mejor ruta entre varias opciones (basándose en métricas específicas del protocolo) y buscar rutas alternativas si una ruta principal falla.** La configuración básica implica que el administrador habilite el protocolo en las interfaces relevantes y defina qué redes anunciar.
    *   Es común que los routers utilicen una **combinación de rutas estáticas (incluyendo la ruta predeterminada) y protocolos de enrutamiento dinámico.**
*   🚪 **Ruta Predeterminada (Gateway of Last Resort):** Una ruta especial (a menudo `0.0.0.0/0` para IPv4 o `::/0` para IPv6) que se usa si no existe una coincidencia más específica en la tabla para la red de destino. Dirige el tráfico hacia un router que tiene más conocimiento de la red (ej: el router del ISP). Una ruta predeterminada puede ser configurada estáticamente o aprendida dinámicamente.

#### 5.9.3. Interpretación de la Tabla de Enrutamiento de un Router Cisco (`show ip route`) <a name="capa3-show-ip-route"></a>

En routers Cisco IOS, el comando `show ip route` (ejecutado en modo EXEC privilegiado) es fundamental para visualizar la tabla de enrutamiento IPv4. Comprender su salida es crucial para el diagnóstico y la verificación de la red.
*   **Códigos de Origen de Ruta:** Al inicio de la salida, y precediendo a cada entrada de ruta, un código indica cómo el router aprendió sobre esa ruta en particular:
    *   `L` - Interfaz Local (Local): La dirección IP específica asignada a la interfaz del router en esa red. Solo visible en IOS versiones más recientes.
    *   `C` - Red Conectada Directamente (Connected): La red a la que una de las interfaces del router está directamente conectada y activa.
    *   `S` - Ruta Estática (Static): Una ruta configurada manualmente por un administrador.
    *   `O` - OSPF: Una ruta aprendida a través del protocolo de enrutamiento dinámico OSPF.
    *   `D` - EIGRP: Una ruta aprendida a través del protocolo de enrutamiento dinámico EIGRP (propiedad de Cisco).
    *   (Existen otros códigos para RIP, BGP, IS-IS, etc.)
    *   `S*` - Ruta Estática Predeterminada Candidata (Static candidate default): Indica una ruta estática que podría ser la puerta de enlace de último recurso.
*   **Información Detallada de la Ruta:** Cada línea en la tabla de enrutamiento proporciona detalles sobre una ruta específica:
    *   **Red de Destino y Prefijo/Máscara:** La red a la que esta ruta conduce.
    *   **`[Distancia Administrativa/Métrica]`:**
        *   **Distancia Administrativa (AD):** Un valor (0-255) que indica la confiabilidad de la fuente de la ruta. Valores más bajos son más preferibles. (Ej: Conectada=0, Estática=1, EIGRP=90, OSPF=110).
        *   **Métrica:** Un valor calculado por el protocolo de enrutamiento para determinar el "costo" o "preferencia" para llegar a la red de destino. El significado de la métrica varía entre protocolos (ej: conteo de saltos para RIP, costo basado en ancho de banda para OSPF, métrica compuesta para EIGRP).
    *   **`via [Dirección_IP_Siguiente_Salto]`:** La dirección IP del próximo router al que se debe enviar el paquete para alcanzar la red de destino.
    *   **`[Tiempo]`:** El tiempo transcurrido desde que la ruta fue aprendida o actualizada por última vez.
    *   **`[Interfaz_Salida]`:** La interfaz física o lógica del router que se usará para enviar paquetes por esta ruta.
*   **Puerta de Enlace de Último Recurso (Gateway of Last Resort):** La salida del comando `show ip route` indicará si una ruta predeterminada está configurada y activa. Por ejemplo: `Gateway of last resort is 209.165.200.226 to network 0.0.0.0`.
*   **Proceso de Búsqueda:** Cuando un router recibe un paquete, busca en su tabla de enrutamiento la **coincidencia de prefijo más larga** con la dirección IP de destino del paquete. Si existen múltiples rutas con la misma longitud de prefijo aprendidas de diferentes fuentes, el router elegirá la ruta con la **menor Distancia Administrativa**. Si hay múltiples rutas con la misma longitud de prefijo y la misma AD (aprendidas por el mismo protocolo), se usará la **métrica más baja** para seleccionar la mejor ruta.

#### 5.9.4. Ejemplo de Tabla de Enrutamiento <a name="capa3-tabla-ejemplo"></a>

| Red de destino | Máscara de subred | Puerta de enlace (Gateway) | Interfaz de salida | Métrica |
|----------------|-------------------|-----------------------------|--------------------|---------|
| 192.168.1.0     | 255.255.255.0     | 0.0.0.0                     | eth0               | 1       |
| 10.0.0.0        | 255.0.0.0         | 192.168.1.1                 | eth0               | 10      |
| 0.0.0.0         | 0.0.0.0           | 192.168.1.254               | eth0               | 20      |
| 127.0.0.0       | 255.0.0.0         | 0.0.0.0                     | lo                 | 0       |

> 📝 Nota:
> - Las rutas con **gateway 0.0.0.0** indican redes directamente conectadas.
> - La ruta `0.0.0.0/0` es la **ruta por defecto** que se usa cuando ninguna otra coincide.
> - La **métrica** más baja tiene prioridad si hay rutas múltiples hacia el mismo destino.

### 5.10. Diseño de Red Jerárquico <a name="capa3-diseno-jerarquico"></a>

Para lograr eficiencia, escalabilidad y una gestión simplificada, especialmente en redes de medianas a grandes, se adopta un **diseño jerárquico**. Este enfoque estructura la red en niveles o capas distintas, cada una con funciones específicas.

**Conceptos y Beneficios Clave de la Jerarquía:**
*   **Escalabilidad Mejorada:** La red puede crecer de forma modular. Añadir nuevos segmentos o servicios en una capa tiene un impacto mínimo en las otras.
*   **Rendimiento Optimizado:** El tráfico se localiza y se maneja de manera eficiente, con rutas de alta velocidad donde se necesitan (especialmente en el núcleo).
*   **Facilidad de Gestión y Mantenimiento:** La segmentación lógica y física simplifica la administración y la resolución de problemas, permitiendo aislar fallos.
*   **Control del Tráfico de Difusión:** Aunque los routers son los principales delimitadores de dominios de broadcast, un diseño jerárquico ayuda a contener y gestionar este tráfico de manera más efectiva.
*   *(Recordatorio: La distinción entre **Direcciones Físicas (MAC)** para la comunicación local en Capa 2 y **Direcciones Lógicas (IP)** para el enrutamiento global en Capa 3, donde la IP se divide en porción de red y host, es fundamental para que funcione este diseño).*

**Modelo Común de Tres Capas:**
Un modelo de diseño jerárquico ampliamente utilizado (ej: por Cisco) divide la red en tres capas funcionales:

1.  **Capa de Acceso (Access Layer):**
    *   **Función:** Proporciona el punto de conexión inicial para los dispositivos finales (PCs, impresoras, teléfonos IP, puntos de acceso inalámbricos) a la red.
    *   **Dispositivos Típicos:** Principalmente *switches (conmutadores)* de Capa 2.
    *   **Consideraciones:** Conectividad para hosts, seguridad a nivel de puerto, segmentación con VLANs, PoE (Power over Ethernet).

2.  **Capa de Distribución (Distribution Layer):**
    *   **Función:** Agrega el tráfico de múltiples switches de la capa de acceso. Sirve como límite entre la capa de acceso y la capa núcleo. Implementa políticas de red (como ACLs), realiza enrutamiento entre VLANs, y puede ser un punto de redundancia.
    *   **Dispositivos Típicos:** Switches multicapa (Layer 3 Switches) o *routers (enrutadores)*.
    *   **Consideraciones:** Agregación de enlaces, políticas de enrutamiento, QoS, redundancia.

3.  **Capa de Núcleo (Core Layer):**
    *   **Función:** Es la "columna vertebral" (backbone) de alta velocidad de la red. Su principal objetivo es conmutar y enrutar grandes volúmenes de tráfico de manera rápida y eficiente entre diferentes bloques de la capa de distribución o entre diferentes sitios de la red.
    *   **Dispositivos Típicos:** Switches de alta capacidad y velocidad (generalmente switches multicapa) o routers de gama alta.
    *   **Consideraciones:** Máxima velocidad, alta disponibilidad, redundancia. Se evita la implementación de políticas complejas que puedan introducir latencia.

### 5.11. Resolución de Direcciones IP a MAC: ARP (IPv4) y NDP (IPv6) <a name="capa3-arp-ndp"></a>

Cuando un dispositivo necesita enviar un paquete IP a otro dispositivo en la **misma red local**, conoce la dirección IP de destino (Capa 3). Sin embargo, para construir la trama de Capa 2 (ej: Ethernet) que transportará ese paquete, necesita la dirección física (dirección MAC) del destino. Este proceso de mapear una dirección de Capa 3 a una dirección de Capa 2 se conoce como resolución de direcciones. Los mecanismos difieren entre IPv4 e IPv6.

#### 5.11.1. Protocolo de Resolución de Direcciones (ARP) para IPv4 <a name="capa3-arp"></a>
**(Contenido existente de ARP se mantiene aquí, con la siguiente introducción o ajuste)**
Para redes IPv4, el **Protocolo de Resolución de Direcciones (ARP)** se utiliza para resolver direcciones IPv4 a direcciones MAC.
*   ARP tiene dos funciones principales: resolver direcciones IPv4 a direcciones MAC y mantener una **tabla ARP (o caché ARP)** temporal de estos mapeos (almacenada en la memoria RAM del dispositivo).
*   **Proceso ARP Detallado:**
    1.  **Destino en la misma red local:**
        *   El dispositivo emisor primero revisa su caché ARP buscando una entrada para la IP de destino.
        *   Si no hay entrada (o ha expirado), inicia una **Solicitud ARP (ARP Request)**:
            *   Se construye un mensaje ARP Request.
            *   Este mensaje se encapsula ***directamente en una trama Ethernet (utilizando el EtherType `0x806` para identificarlo como ARP), sin un encabezado IP.***
            *   La trama tiene:
                *   MAC Destino: `FF:FF:FF:FF:FF:FF` (Broadcast de Capa 2).
                *   MAC Origen: La del emisor.
            *   El mensaje ARP Request pregunta: "¿Quién tiene la dirección IP `[IP_Destino]`? Por favor, envíame tu dirección MAC."
        *   Todos los dispositivos en la LAN reciben y procesan la trama broadcast.
        *   El dispositivo con la `[IP_Destino]` correspondiente responde con una **Respuesta ARP (ARP Reply)**:
            *   Este mensaje también se encapsula en una trama Ethernet ***(con EtherType `0x806`)***.
            *   La trama tiene:
                *   MAC Destino: La MAC del solicitante original (Unicast).
                *   MAC Origen: La MAC del dispositivo que responde (la que se buscaba).
            *   El mensaje ARP Reply dice: "Yo tengo `[IP_Destino]`, mi dirección MAC es `[MAC_Destino]`."
        *   El emisor original recibe la ARP Reply y almacena la correspondencia IP-MAC en su caché ARP. ***Estas entradas en caché suelen tener un tiempo de vida limitado (timeout) antes de ser eliminadas.***
    2.  **Destino en una red remota:**
        *   El dispositivo emisor determina que la IP de destino no está en su red local.
        *   En este caso, necesita enviar el paquete a su **Puerta de Enlace Predeterminada**.
        *   El dispositivo realizará el proceso ARP para obtener la dirección MAC de la IP de su Puerta de Enlace Predeterminada, si aún no la tiene en su caché.
        *   La trama Ethernet se enviará con la MAC de destino del router.
[...] *(Tu contenido existente sobre ARP Spoofing, etc., podría seguir aquí o moverse a una sección de seguridad específica si prefieres)*

#### 5.11.2. Protocolo de Descubrimiento de Vecinos (NDP) para IPv6 <a name="capa3-ndp"></a>
**(Nueva Subsección para el contenido del Módulo 34)**
IPv6 no utiliza ARP. En su lugar, utiliza el **Protocolo de Descubrimiento de Vecinos (ND o NDP)**, que es parte de ICMPv6 (definido en RFC 4861). NDP proporciona varios servicios, incluyendo:
*   Resolución de direcciones IPv6 a direcciones MAC.
*   Descubrimiento de routers.
*   Autoconfiguración de direcciones (SLAAC).
*   Detección de inaccesibilidad de vecinos.
*   Detección de direcciones duplicadas (DAD).
*   Redirección de paquetes.

NDP utiliza cinco mensajes ICMPv6 específicos para estos servicios:
1.  **Solicitud de Vecino (Neighbor Solicitation - NS):**
    *   Usado por un nodo para determinar la dirección de capa de enlace (MAC) de un vecino en el mismo enlace cuando conoce su dirección IPv6.
    *   También se usa para verificar si un vecino sigue siendo accesible (NUD - Neighbor Unreachability Detection) y para la Detección de Direcciones Duplicadas (DAD).
    *   Cuando se usa para resolución de direcciones, el mensaje NS se envía a la dirección de multidifusión de **Nodo Solicitado** del destino IPv6, lo que lo hace más eficiente que una difusión ARP.
2.  **Anuncio de Vecino (Neighbor Advertisement - NA):**
    *   Respuesta a un mensaje NS. El nodo que posee la dirección IPv6 solicitada envía un NA con su dirección de capa de enlace.
    *   También puede ser enviado sin una NS previa para anunciar un cambio en la dirección de capa de enlace.
3.  **Solicitud de Router (Router Solicitation - RS):**
    *   Enviado por hosts al inicio o cuando necesitan información de configuración para localizar routers IPv6 en el enlace y solicitarles que envíen Anuncios de Router (RA) inmediatamente.
    *   Se envía a la dirección de multidifusión **Todos los Routers** (`FF02::2`).
4.  **Anuncio de Router (Router Advertisement - RA):**
    *   Enviado periódicamente por los routers IPv6, o en respuesta a un RS.
    *   Proporcionan información a los hosts como el prefijo de red del enlace (para SLAAC), la longitud del prefijo, la dirección de la puerta de enlace predeterminada (la LLA del router), el MTU del enlace, y cómo los hosts deben obtener sus direcciones (SLAAC, DHCPv6 sin estado, DHCPv6 con estado).
    *   Se envía a la dirección de multidifusión **Todos los Nodos** (`FF02::1`).
5.  **Mensaje de Redirección (Redirect Message):**
    *   Usado por un router para informar a un host sobre una mejor ruta de primer salto (otro router en el mismo enlace) para alcanzar un destino específico.

**Funcionamiento de la Resolución de Direcciones con NDP:**
1.  PC1 quiere enviar un paquete a la dirección IPv6 de PC2 (ej: `2001:db8:acad:1::11`), pero no conoce la dirección MAC de PC2.
2.  PC1 envía un mensaje **ICMPv6 NS**.
    *   Dirección IPv6 de Origen: Dirección IPv6 de PC1.
    *   Dirección IPv6 de Destino: Dirección de multidifusión de **Nodo Solicitado** correspondiente a `2001:db8:acad:1::11`.
    *   Contenido: Pregunta por la dirección MAC de `2001:db8:acad:1::11`.
    *   La trama Ethernet tendrá como MAC de destino la dirección MAC de multidifusión correspondiente a la dirección IP de Nodo Solicitado.
3.  PC2, cuya interfaz está configurada con `2001:db8:acad:1::11`, recibe y procesa el NS.
4.  PC2 responde con un mensaje **ICMPv6 NA** enviado de forma unicast a PC1.
    *   Dirección IPv6 de Origen: `2001:db8:acad:1::11`.
    *   Dirección IPv6 de Destino: Dirección IPv6 de PC1.
    *   Contenido: La dirección MAC de PC2.
5.  PC1 recibe el NA, extrae la dirección MAC de PC2, la almacena en su caché de vecinos (similar a la caché ARP) y puede enviar el paquete original.

**Clasificación de Mensajes NDP:**
*   **Mensajería Dispositivo a Dispositivo (en el mismo enlace):** Principalmente NS y NA para resolución de direcciones y DAD.
*   **Mensajería Dispositivo a Router (y Router a Dispositivo):** Principalmente RS y RA para descubrimiento de routers, configuración automática (SLAAC) y obtención de la puerta de enlace.

*(El contenido existente de tu guía sobre "Importante: Diferenciar ARP/NDP de otros protocolos" y la tabla comparativa seguirían siendo relevantes aquí, ajustando para reflejar la información de NDP).*
  
### 5.12. ARP Spoofing/Poisoning Seguridad <a name="capa3-arp-spoofing-poisoning-security"></a>

***Consideraciones de Rendimiento y Seguridad con ARP:***

*   ***Impacto de las Difusiones ARP en el Rendimiento:***
    *   Dado que las solicitudes ARP son tramas de difusión, todos los dispositivos en la red local las reciben y procesan. En una red comercial típica con tráfico normal, estas difusiones suelen tener un impacto mínimo en el rendimiento.
    *   Sin embargo, en escenarios donde una gran cantidad de dispositivos se encienden simultáneamente y comienzan a acceder a servicios de red al mismo tiempo (generando múltiples solicitudes ARP), el volumen de tráfico de difusión podría causar una disminución temporal del rendimiento de la red. Una vez que los dispositivos pueblan sus cachés ARP, este efecto se minimiza.

*   ***Vulnerabilidades de Seguridad de ARP: Suplantación (Spoofing) y Envenenamiento (Poisoning):***
    *   El protocolo ARP, en su diseño original, es inherentemente inseguro ya que no incluye mecanismos de autenticación para validar las respuestas. Esto lo hace susceptible a varios ataques en la red local.
    *   **ARP Spoofing (Suplantación de Identidad ARP):** Es una técnica maliciosa donde un atacante envía mensajes ARP falsificados a la red local. El atacante puede enviar una respuesta ARP no solicitada (o responder a una solicitud legítima) asociando su propia dirección MAC con la dirección IP de otro dispositivo en la red (por ejemplo, la dirección IP de la puerta de enlace predeterminada o la de otro host).
    *   **ARP Cache Poisoning (Envenenamiento de la Caché ARP):** Cuando los dispositivos legítimos reciben estas respuestas ARP fraudulentas, actualizan sus cachés ARP con la información incorrecta (IP legítima -> MAC del atacante).
    *   **Consecuencias:** Una vez que las cachés ARP están envenenadas, los dispositivos víctimas comenzarán a enviar tramas destinadas a la IP suplantada hacia la dirección MAC del atacante. Esto puede llevar a:
        *   **Ataques Man-in-the-Middle (MitM):** El atacante se posiciona entre dos comunicantes, pudiendo interceptar, leer, modificar o redirigir todo su tráfico.
        *   **Denegación de Servicio (DoS):** El atacante podría simplemente descartar el tráfico recibido, impidiendo la comunicación.
        *   **Secuestro de Sesión (Session Hijacking).**

*   ***Mitigación de Ataques ARP:***
    *   Para contrarrestar estas vulnerabilidades, los switches de nivel empresarial suelen implementar técnicas de mitigación.
    *   **Inspección Dinámica de ARP (DAI - Dynamic ARP Inspection):** Es una característica de seguridad que valida los paquetes ARP en la red. El switch mantiene una base de datos de enlaces IP-MAC confiables (a menudo aprendidos a través de DHCP Snooping). DAI intercepta todos los paquetes ARP y verifica si la combinación IP-MAC del remitente coincide con una entrada confiable. Si no hay coincidencia, o si la MAC del remitente en una respuesta ARP no coincide con la MAC de origen de la trama Ethernet, el paquete ARP se considera inválido y se descarta.
        *   *(DAI y otras técnicas avanzadas de seguridad de Capa 2 suelen estar más allá del alcance de una introducción, pero es importante conocer su existencia).*

**Importante: Diferenciar ARP/NDP de otros protocolos:**
*(Tu contenido existente)*

| Protocolo/Mensaje        | Capa 3 Destino (IP) | Capa 2 Destino (MAC) | Propósito Principal                                                                 |
|-------------------------|---------------------|----------------------|-------------------------------------------------------------------------------------|
| **ARP Request** | IP de destino a resolver | `FF:FF:FF:FF:FF:FF`   | Preguntar a todos en la LAN por la MAC asociada a una IP específica.               |
| **DHCP Discover (Inicial)** | `255.255.255.255`   | `FF:FF:FF:FF:FF:FF`   | Buscar servidores DHCP disponibles en la LAN para obtener una configuración IP. |

**Importante: Diferenciar ARP/NDP de otros protocolos:**
*   **ARP/NDP:** Descubren la dirección MAC asociada a una IP *dentro de la misma red local*. (Interacción Capa 3 - Capa 2 Enlace de datos (Data Link))
*   **NAT (Network Address Translation):** Traduce IPs privadas a públicas (y viceversa) en el router frontera, para comunicarse con redes externas (WAN). Opera principalmente en Capa 3, con implicaciones para Capa 4.
*   **DHCP (Dynamic Host Configuration Protocol):** Asigna dinámicamente direcciones IP (privadas o públicas, según la configuración del servidor DHCP) y otra información de configuración de red (máscara de subred, gateway, DNS) a los *dispositivos (hosts)*. Es un protocolo de Capa 7 (Aplicación).
*   **PDU (Protocol Data Units):** Nombre genérico para la unidad de datos en cada capa del modelo OSI; cada capa añade su propia cabecera al pasar la información hacia abajo: (Bits en L1, Tramas(frames) en L2, Paquetes en L3, Segmentos/Datagramas en L4, Datos en L5-L7).

## 6. Capa 4 OSI: Transporte – Comunicación Extremo a Extremo <a name="capa4-transporte"></a>
<details>
  <summary>Ver/Ocultar Detalles de Capa 4: Transporte</summary>

### 6.1. Función Principal y PDU (Capa 4) <a name="capa4-funcion-pdu"></a>  
  *   **Función Principal (OSI):** Proporcionar comunicación lógica directa y segmentación de datos entre *procesos de aplicación* en *dispositivos (hosts)* diferentes. ***Realiza el seguimiento de conversaciones individuales entre aplicaciones, segmenta los datos de la aplicación en unidades más pequeñas para la transmisión y los reensambla en el destino.*** Ofrece servicios de transporte fiables y orientados a conexión (TCP) o servicios rápidos y no fiables sin conexión (UDP). Maneja el control de flujo y la multiplexación de conversaciones usando números de puerto.
 *   **Equivalente TCP/IP:** Capa de Transporte.
 *   **PDU (Protocol Data Unit):** Segmentos (TCP), Datagramas (UDP).
 
 ### 6.2. TCP (Transmission Control Protocol) vs. UDP (User Datagram Protocol) capa 4. <a name="capa4-tcp-udp-detallado"></a>
 
La capa de transporte ofrece principalmente dos protocolos, TCP y UDP, cada uno con características y mecanismos distintos, diseñados para diferentes tipos de aplicaciones.

#### Protocolo de Control de Transmisión (TCP)

TCP es un protocolo **orientado a conexión** y **con estado**, lo que significa que establece una sesión antes de transmitir datos y mantiene información sobre el estado de esa sesión. Está diseñado para proporcionar un transporte **fiable** de datos.

*   ***Encabezado TCP: Añade 20 bytes (o más con opciones) de información de control a los datos de la aplicación. Campos clave incluyen Puertos de Origen/Destino, Números de Secuencia, Números de Acuse de Recibo, Flags (bits de control), Tamaño de Ventana y Suma de Comprobación.***
*   **Características y Mecanismos Clave de TCP:**
    *   **Establecimiento de Sesión (Handshake de Tres Vías):**
        1.  El cliente envía un segmento con el flag **SYN** (Sincronizar) activado y un Número de Secuencia Inicial (ISN).
        2.  El servidor responde con un segmento con los flags **SYN y ACK** (Acuse de Recibo) activados, su propio ISN, y acusa recibo del ISN del cliente.
        3.  El cliente responde con un segmento con el flag **ACK** activado, confirmando la recepción y estableciendo la conexión.
    *   **Entrega Confiable y Ordenada:**
        *   ***Numeración y Seguimiento:*** TCP numera los bytes de datos con **Números de Secuencia (ISN y subsecuentes)** para rastrear los segmentos y permitir el reensamblaje en el orden correcto en el destino, incluso si llegan desordenados.
        *   ***Acuses de Recibo (ACKs):*** El receptor envía ACKs para confirmar los bytes recibidos. TCP utiliza **acuses de recibo de expectativa** (indicando el siguiente byte esperado).
        *   ***Retransmisión de Datos Perdidos:*** Si un ACK no se recibe en un tiempo determinado, el emisor retransmite los datos no confirmados. Mecanismos como el **Reconocimiento Selectivo (SACK)** permiten al receptor informar qué segmentos específicos ha recibido (incluso si hay huecos), para que el emisor solo retransmita los segmentos realmente perdidos.
    *   **Control de Flujo:**
        *   ***Tamaño de la Ventana (Window Size):*** El receptor especifica en el encabezado TCP la cantidad de datos (en bytes) que está dispuesto a recibir antes de que el emisor deba esperar un ACK. Esto evita que el emisor desborde los búferes del receptor.
        *   ***Ventanas Deslizantes:*** Permiten al emisor enviar múltiples segmentos antes de requerir un ACK, ajustando dinámicamente la cantidad de datos en tránsito según los ACKs y el tamaño de ventana anunciado por el receptor.
        *   ***Tamaño Máximo de Segmento (MSS):*** Durante el establecimiento de la conexión, los hosts negocian el MSS, que es la cantidad más grande de datos que un dispositivo puede recibir en un solo segmento TCP. El MSS se calcula típicamente restando los tamaños de los encabezados IP y TCP de la MTU del enlace subyacente (ej: 1500 bytes MTU - 20 bytes IP - 20 bytes TCP = 1460 bytes MSS).
    *   **Prevención de Congestión:** TCP puede detectar la congestión de la red (ej: por pérdida de paquetes o aumento de retardos en los ACKs) y reduce proactivamente su tasa de transmisión para evitar sobrecargar la red.
    *   **Terminación de Sesión (Handshake de Cuatro Vías):**
        1.  Un host envía un segmento con el flag **FIN** (Finalizar) activado.
        2.  El otro host responde con un **ACK**.
        3.  Ese otro host, cuando también está listo para cerrar, envía su propio **FIN**.
        4.  El primer host responde con un **ACK**, cerrando la conexión.

#### Protocolo de Datagramas de Usuario (UDP)

UDP es un protocolo **sin conexión** y **sin estado**. Proporciona una funcionalidad básica de transporte con una sobrecarga mínima, lo que lo hace rápido pero no fiable.

*   ***Encabezado UDP: Es muy simple, solo 8 bytes. Contiene Puertos de Origen/Destino, Longitud del datagrama y una Suma de Comprobación opcional (para integridad de datos y encabezado).***
*   **Características Clave de UDP:**
    *   **Entrega de "Mejor Esfuerzo":** No hay confirmaciones, ni retransmisiones de segmentos perdidos, ni garantía de entrega ordenada.
    *   ***Reconstrucción en Orden de Llegada: Los datagramas UDP se entregan a la aplicación en el orden en que llegan, sin intentar reordenarlos si llegan fuera de secuencia.***
    *   **Baja Sobrecarga:** El encabezado simple y la ausencia de mecanismos de control lo hacen más rápido que TCP.
    *   **Sin Establecimiento de Sesión:** Los datos se envían sin negociación previa.

#### ¿Cuándo Usar TCP o UDP?

| Característica   | TCP                                     | UDP                                     |
| :--------------- | :-------------------------------------- | :-------------------------------------- |
| **Confiabilidad**| **Alta** (ACKs, SACK, retransmisiones, secuenciación) | **Baja** ("mejor esfuerzo", sin confirmación) |
| **Conexión**     | Orientado a conexión (Handshakes)       | Sin conexión                            |
| **Estado**       | **Con estado** (rastrea la sesión)      | **Sin estado**                          |
| **Velocidad**    | Más lento (por sobrecarga de control)   | Más rápido (menor sobrecarga)           |
| **Control Flujo/Congestión**| **Sí** (Ventanas, MSS, algoritmos de congestión) | No                                      |
| **Uso Típico**   | Web (HTTP/S), Email (SMTP), FTP, SSH (donde cada bit cuenta) | Streaming (video/voz en tiempo real), DNS (consultas rápidas), DHCP, TFTP, Juegos en línea (donde la velocidad es crítica y alguna pérdida puede ser tolerable) |

***En resumen, las aplicaciones que requieren que todos los datos lleguen intactos y en orden (navegadores web, correo, transferencia de archivos) utilizan TCP. Aquellas que pueden tolerar alguna pérdida de datos pero necesitan baja latencia y rapidez (VoIP, video en vivo, DNS) a menudo prefieren UDP. Los desarrolladores eligen el protocolo de transporte según los requisitos de la aplicación.***
 
 ### 6.3. Sockets y Pares de Sockets <a name="capa4-sockets-pares"></a>
 
 **La Idea Esencial:** Para que tu computadora maneje múltiples conexiones de red simultáneamente (navegar, chatear) y dirija los datos de la Capa de Transporte al proceso de aplicación correcto, utiliza "sockets".
 
 #### 6.3.1. ¿Qué es un Socket? <a name="capa4-socket-que-es"></a>
 
 Un **Socket** es la combinación de:
 *   **`Dirección_IP`** (del dispositivo)
 *   **`:`** (separador)
 *   **`Número_de_Puerto`** (de la aplicación en ese dispositivo)
 
 #### 6.3.2. El Par de Sockets: La Conexión Única <a name="capa4-par-sockets"></a>
 
 Esto permite identificar de forma única cada conversación entre dos aplicaciones.
 
 **Tu PC (Solicitante) pidiendo una Página Web al Servidor (Proveedor)**
 
 | Rol en la Conexión     | Socket (`IP:Puerto`)        |
 | :--------------------- | :-------------------------- |
 | **Socket Solicitante** (Tu PC, navegador) | `192.168.1.5:1099`          |
 | **Socket Proveedor**   (Servidor Web, HTTP) | `203.0.113.7:80`            |
 | **Par de Sockets (Conexión Única)** | **(`192.168.1.5:1099` , `203.0.113.7:80`)** |


</details>

## 7. Capas 5, 6 y 7 OSI: Sesión, Presentación y Aplicación – La interfaz *(API - Application Programming Interface)* con el Usuario y los Servicios de Red <a name="capas567-aplicacion"></a>

<details>
  <summary>Ver/Ocultar Detalles de Capas 5, 6 y 7: Aplicación</summary>

### 7.1. Funciones Generales (Capas 5, 6, 7 OSI y Aplicación TCP/IP) <a name="capas567-funciones"></a>

En el modelo TCP/IP, las funciones de las capas de Sesión, Presentación y Aplicación del modelo OSI se consolidan en una única **Capa de Aplicación**.

#### 7.1.1. Capa 5 (Sesión OSI) <a name="capas567-sesion"></a>

    *   **Función:** Establece, gestiona y finaliza las "conversaciones" (sesiones) entre aplicaciones en diferentes *dispositivos (hosts)*. Mantiene el diálogo y sincroniza la comunicación.
       
#### 7.1.2. Capa 6 (Presentación OSI) <a name="capas567-presentacion"></a>

    *   **Función:** Asegura que los datos intercambiados sean comprensibles para las aplicaciones. Se encarga de la sintaxis y semántica de la información, incluyendo:
        *   **Formato de Datos y Codificación de Caracteres:** (ej: ASCII, EBCDIC, Unicode).
        *   **Cifrado y Descifrado:** Para la seguridad (ej: SSL/TLS opera conceptualmente aquí, aunque su implementación a menudo se extiende a otras capas).
        *   **Compresión y Descompresión:** Para reducir el tamaño de los datos.
  
#### 7.1.3. Capa 7 (Aplicación OSI) / Capa de Aplicación (TCP/IP) <a name="capas567-aplicacion-tcpip"></a>

*   **Función:** Proporciona la interfaz **(API - Application Programming Interface)** directa entre las aplicaciones que usan los usuarios (o procesos de sistema) y los servicios de red subyacentes. Define los protocolos que las aplicaciones usan para intercambiar datos.
*   **PDU (Protocol Data Unit) en estas capas:** Generalmente se refiere como "Datos" o "Mensaje".

### 7.2. Capa de Aplicación: Protocolos, Puertos y Servicios Esenciales <a name="capas567-protocolos-puertos"></a>

Un **protocolo** es un conjunto de reglas y convenciones que definen cómo se formatea, transmite y recibe la información entre dispositivos en una red. Actúa como una "regla de traducción del mensaje" para que diferentes sistemas puedan entenderse. Cada servicio de aplicación utiliza uno o más protocolos y, típicamente, escucha o envía mensajes a través de un **puerto** específico, que es como una "dirección" dentro de un dispositivo donde llega un mensaje destinado a una aplicación particular.
Un **Números de Puerto** Son identificadores de 16 bits (0-65535) usados por TCP y UDP para diferenciar entre múltiples aplicaciones o procesos que se ejecutan en un host.
    *   **Puerto de Origen:** Elegido dinámicamente por el host cliente (generalmente un número alto, >1023) para identificar de forma única su lado de la conversación.
    *   **Puerto de Destino:** Usado por el cliente para indicar el servicio específico solicitado en el servidor (ej: puerto 80 para HTTP).
    *   **Rangos de Puertos (administrados por IANA):**
        *   **Puertos Bien Conocidos (Well-Known Ports: 0-1023):** Reservados para servicios y aplicaciones estándar (HTTP: 80, HTTPS: 443, FTP: 21, SMTP: 25, DNS: 53).
        *   **Puertos Registrados (Registered Ports: 1024-49151):** Pueden ser registrados por desarrolladores de software para aplicaciones específicas.
        *   **Puertos Dinámicos/Privados/Efímeros (Dynamic/Private/Ephemeral Ports: 49152-65535):** Usados típicamente como puertos de origen temporales por los clientes.

| Nombre Protocolo                                | Puerto(s) Típicos (Destino) | Transporte Usado | Descripción del Protocolo                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
|------------------------------------------|---------------------------|-------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **DNS (Domain Name System)**             | 53                        | UDP (consultas), TCP (transferencias de zona) | **Traduce nombres de dominio** legibles por humanos (ej: www.google.com) a direcciones IP numéricas (ej: 172.217.160.142) y viceversa, facilitando la navegación y el acceso a servicios. ***El sistema DNS opera con una estructura jerárquica global (desde dominios raíz, pasando por dominios de primer nivel como `.com` o `.org`, hasta dominios específicos), distribuyendo la carga de resolución en múltiples servidores organizados en zonas. Cada servidor DNS gestiona los registros de recursos (que mapean nombres a IPs y otros datos, como registros A, MX, CNAME) para su zona. Todas las comunicaciones DNS, incluyendo consultas, respuestas y transferencias de zona entre servidores, utilizan un formato de mensaje estandarizado.*** Las consultas suelen usar UDP por su rapidez; las transferencias de zona importantes entre servidores DNS usan TCP por su fiabilidad para grandes volúmenes de datos. |
| **HTTP (Hypertext Transfer Protocol)**     | 80                        | TCP               | Protocolo fundamental para la **World Wide Web**. Permite la solicitud y transferencia de recursos como documentos **HTML (Hypertext Markup Language)**, imágenes, y otros archivos entre un cliente (navegador) y un servidor web. Es un protocolo sin estado. |
| **HTTPS (HTTP Secure)**                  | 443                       | TCP               | Versión segura de HTTP. **Cifra la comunicación** entre el cliente y el servidor utilizando TLS (Transport Layer Security) o su predecesor SSL (Secure Sockets Layer), protegiendo la confidencialidad e integridad de los datos transferidos (ej: datos bancarios, contraseñas). Transfiere contenido web, incluyendo HTML. |
| **FTP (File Transfer Protocol)**         | 21 (control), 20 (datos)  | TCP            | Diseñado para la **transferencia de archivos** entre un cliente y un servidor. Utiliza dos conexiones TCP: una para comandos y control de tráfico (puerto 21) y otra para la transferencia de datos (puerto 20 en modo activo, o un puerto dinámico en modo pasivo para carga y descarga de archivos). |
| **TFTP (Trivial File Transfer Protocol)**| 69                        | UDP               | Versión muy **simplificada de FTP**. No ofrece autenticación ni muchas de las funciones avanzadas de FTP. Usa UDP, lo que lo hace rápido pero menos fiable. Comúnmente usado para arrancar dispositivos de red o transferir archivos de configuración/firmware en redes locales. |
| **SMTP (Simple Mail Transfer Protocol)**   | 25 (tradicional), 587 (con STARTTLS), 465 (SMTPS obsoleto) | TCP            | Protocolo estándar para el **envío de correo electrónico**. Se utiliza para transferir mensajes desde un cliente de correo a un servidor de correo, y también entre servidores de correo. Es un protocolo de "empuje" (push). |
| **POP3 (Post Office Protocol v3)**       | 110 (tradicional), 995 (POP3S) | TCP               | Utilizado para **recuperar correo electrónico** de un servidor. Generalmente, los mensajes se descargan al dispositivo del cliente y se eliminan del servidor (aunque puede configurarse para mantenerlos). Menos flexible para acceso desde múltiples dispositivos. |
| **IMAP4 (Internet Message Access Protocol v4)**| 143 (tradicional), 993 (IMAPS) | TCP               | Permite **recuperar y gestionar correo electrónico** directamente en el servidor. Los mensajes se mantienen en el servidor, permitiendo la sincronización y el acceso desde múltiples clientes/dispositivos. Ofrece más funcionalidades que POP3 (ej: gestión de carpetas en el servidor). |
| **Telnet**                               | 23                        | TCP               | Protocolo de **emulación de terminal remoto**. Permite acceder a la línea de comandos de un dispositivo remoto. Es **inseguro** porque toda la comunicación, incluidas las credenciales de acceso, se transmite en texto plano. Ha sido mayormente reemplazado por SSH. |
| **SSH (Secure Shell)**                   | 22                        | TCP               | Protocolo **seguro para acceso remoto, emulación de terminales**, transferencia de archivos (SFTP, SCP) y tunelización de otros protocolos. Cifra toda la sesión, protegiendo contra escuchas y manipulación. Es el reemplazo estándar de Telnet. |
| **DHCP (Dynamic Host Configuration Protocol)**| 67 (servidor), 68 (cliente) | UDP    | **Asigna automáticamente direcciones IP** y otra información de configuración de red (máscara de subred, puerta de enlace, servidores DNS) a los dispositivos cliente en una red. Simplifica la administración de direcciones IP. |
| **SNMP (Simple Network Management Protocol)**| 161 (agente), 162 (trap) | UDP               | Utilizado para la **monitorización y gestión de dispositivos de red** (routers, switches, servidores, impresoras). Permite a los administradores consultar el estado de los dispositivos, recibir alertas (traps) y, en algunos casos, modificar configuraciones. |
| **RADIUS (Remote Authentication Dial-In User Service)** | 1812 (Autenticación), 1813 (Accounting) <br/> (o legados 1645, 1646) | UDP               | Protocolo cliente-servidor que proporciona servicios centralizados de **Autenticación, Autorización y Contabilidad (AAA)** para usuarios que se conectan y utilizan un servicio de red. Comúnmente usado para autenticar usuarios en accesos Wi-Fi (ej: WPA2/3-Enterprise), VPNs, y accesos de red por marcado. |

### 7.3. Tecnologías Relacionadas con Servicios de Aplicación <a name="capas567-tecnologias-relacionadas"></a>
*   **VoIP (Voice over IP):** Es una familia de tecnologías y protocolos que permiten la transmisión de **voz sobre redes IP**. Protocolos clave incluyen:
    *   **SIP (Session Initiation Protocol):** Para establecer, modificar y terminar sesiones de comunicación (ej: llamadas de voz o video). Puerto 5060/5061 (TCP/UDP).
    *   **RTP (Real-time Transport Protocol):** Para transportar los datos de audio y video en tiempo real. Usa puertos UDP dinámicos.
*   **SMS (Short Message Service):** Aunque fundamentalmente es un servicio de telefonía móvil, su infraestructura puede interactuar con redes IP a través de pasarelas SMS (SMS gateways) para enviar/recibir mensajes desde aplicaciones basadas en internet.
*   **PSTN (Public Switched Telephone Network):** Es la red telefónica conmutada pública tradicional. Las *Puertas de Enlace (Gateways)* VoIP-PSTN son dispositivos que permiten la interconexión y las llamadas entre redes VoIP y la PSTN.

### 7.4. Herramientas para Pruebas y Análisis de Protocolos (Aplicación) <a name="capas567-herramientas-analisis"></a>

Existen aplicaciones que implementan estos protocolos, permitiendo interactuar con servicios de red y analizar su comportamiento.
*   **FileZilla:** Popular cliente gráfico (GUI) que implementa los protocolos FTP y SFTP (SSH File Transfer Protocol). Permite a los usuarios conectarse a servidores FTP/SFTP para subir, descargar y gestionar archivos y directorios de forma visual e interactiva, facilitando la transferencia de archivos.
*   **Tera Term:** Aplicación de emulación de terminal que soporta Telnet y SSH, entre otros. Facilita el acceso remoto seguro (vía SSH) o inseguro (vía Telnet) a la línea de comandos de servidores y dispositivos de red para configuración, gestión y monitorización.

Al utilizar estas herramientas, se puede observar el comportamiento del protocolo en acción. Por ejemplo, analizando el tráfico de red con herramientas como **Wireshark** mientras se usa FileZilla, se pueden ver los comandos FTP (puerto 21) y la transferencia de datos. En entornos de aprendizaje como **Packet Tracer**, se pueden simular estas interacciones, ayudando a comprender cómo se establece la comunicación, cómo se traducen los mensajes según las reglas del protocolo y cómo se transportan a través de los puertos específicos. Estas aplicaciones y simuladores son cruciales para validar la correcta implementación y funcionamiento de los servicios de red, diagnosticar problemas y profundizar en la comprensión del transporte de datos.

### 7.5. Configuración de Direcciones IP: Estática vs. Dinámica (DHCP) capa 7 <a name="capas567-dhcp"></a>

Aunque DHCP utiliza UDP (Capa 4) para el transporte de sus mensajes y asigna direcciones IP (Capa 3), su función principal es un servicio de la Capa de Aplicación destinado a la configuración automática de los *dispositivos (hosts)*.

*   **Estática:** La dirección IP, máscara de subred, puerta de enlace predeterminada y servidores DNS se configuran manualmente en cada host.
    *   **Ventajas:** Control predecible (ideal para servidores, impresoras y otros dispositivos de red críticos).
    *   **Desventajas:** Consume tiempo, propenso a errores de configuración (duplicados de IP, máscaras incorrectas), y difícil de gestionar en redes grandes o con muchos cambios.

*   **Dinámica (usando DHCP - Dynamic Host Configuration Protocol):** Un servidor DHCP asigna automáticamente la configuración de red a los clientes.
    *   **Ventajas:** Simplifica enormemente la administración de direcciones IP, reduce la posibilidad de errores de configuración, permite la reutilización eficiente de direcciones IP y facilita la movilidad de los dispositivos.
    *   ***Funcionamiento:*** DHCP asigna direcciones IP por un período de tiempo configurable, conocido como **período de concesión (lease period)**. Cuando este período expira, o si el cliente envía un mensaje `DHCPRELEASE`, la dirección IP se devuelve al *pool* (rango de direcciones disponibles) del servidor DHCP para que pueda ser asignada a otro dispositivo.
    *   **Proceso DORA Detallado (para IPv4):**
        1.  **DHCPDISCOVER (Cliente → Servidor, Broadcast):** El cliente, al conectarse a la red, envía un mensaje de difusión para localizar servidores DHCP disponibles.
        2.  **DHCPOFFER (Servidor → Cliente, Unicast o Broadcast):** Uno o más servidores DHCP pueden responder con una oferta, proponiendo una dirección IP y otros parámetros de configuración (máscara, gateway, DNS, duración de la concesión).
        3.  **DHCPREQUEST (Cliente → Servidor, Broadcast):** El cliente selecciona una de las ofertas (generalmente la primera que recibe) y envía un mensaje de difusión solicitando formalmente la dirección IP ofrecida al servidor específico.
        4.  **DHCPACK (Servidor → Cliente, Unicast o Broadcast):** El servidor DHCP confirma la asignación de la dirección IP y los demás parámetros, finalizando la concesión con un mensaje de acuse de recibo.
        *   ***Si la dirección IP ofrecida ya no está disponible, el servidor puede responder con un DHCPNAK (Negative Acknowledgment), y el cliente debe reiniciar el proceso Discover.***
    *   **DHCPv6 (para IPv6):**
        *   ***Proporciona servicios similares de asignación de direcciones para clientes IPv6.***
        *   ***Una diferencia clave es que DHCPv6 típicamente no asigna la dirección de la puerta de enlace predeterminada; esta información la obtienen los clientes IPv6 a través de los mensajes de Anuncio de Router (Router Advertisement - RA) enviados por el router local (parte del protocolo NDP).***
        *   ***Los mensajes en DHCPv6 tienen nombres diferentes pero cumplen funciones análogas: SOLICIT (similar a Discover), ADVERTISE (similar a Offer), REQUEST o RENEW (similar a Request), y REPLY (similar a Acknowledge). También existe el mensaje INFORMATION-REQUEST para obtener otra información de configuración sin necesidad de una dirección IP.***

### 7.6. Tipos de Conexión a Internet (Servicios) <a name="capas567-conexion-internet"></a>
Generalmente provistos por un **ISP (Proveedor de Servicios de Internet)**.
*   **DSL (Digital Subscriber Line):** Usa líneas telefónicas de cobre.
*   Otros: Cable Modem, Fibra Óptica (FTTH), Satélite, Celular (3G/4G/5G).

### 7.7. Identificadores de Red Comunes (Configuración de Usuario) <a name="capas567-identificadores-usuario"></a>

*   **SSID (Service Set Identifier):** El nombre público de una red Wi-Fi, configurado en el Punto de Acceso.
*   **Servidor DNS:** La dirección IP del servidor que el host usará para resolver nombres de dominio. A menudo se obtiene vía DHCP (capa 7).
* "Guía telefónica" de Internet: Nombre de dominio (google.com) -> Dirección IP (142.250.184.142).

### 7.8. Caso de Uso: Servicios en la Nube <a name="capas567-cloud"></a>
Actualmente, muchas aplicaciones usan protocolos de esta capa para acceder a servicios de **Computación en la Nube** (recursos como servidores y software vía Internet). Los modelos comunes incluyen nubes **Públicas** (ej: AWS, Azure), **Privadas** (dedicadas a una organización) **comunitarias** servicios como consultas medicas e **Híbridas** (combinación de ambas). La conectividad de red y los protocolos de aplicación son vitales para este acceso.

</details>

## 8. Fundamentos de Sistemas Numéricos <a name="sistemas-numericos"></a>

<details>
  <summary>Ver/Ocultar Sistemas Numéricos</summary>

### 8.1. Tipos de Sistemas Numéricos (Decimal, Binario, Hexadecimal) <a name="sistemas-numericos-tipos"></a>

*   **Números Decimales (Base 10):** Utilizan los dígitos del 0 al 9. Cada posición representa una potencia de 10. Es el sistema que usamos comúnmente.
*   **Números Binarios (Base 2):** Utilizan solo los dígitos 0 y 1 (bits). Cada posición representa una potencia de 2. Fundamental para la computación.
*   **Números Hexadecimales (Base 16):** Utilizan los dígitos del 0 al 9 y las letras de la A a la F (donde A=10, B=11, C=12, D=13, E=14, F=15). Cada posición representa una potencia de 16. Se usa a menudo como una representación más compacta del binario.

### 8.2. Métodos de Conversión entre Sistemas Numéricos <a name="sistemas-numericos-conversion"></a>

#### 8.2.1. Conversión de Decimal a Binario (Usando Tabla Posicional) <a name="sistemas-numericos-dec-bin"></a> 

Este método se basa en encontrar qué potencias de 2 suman el número decimal.

**Ejemplo: Convertir 192 (Decimal) a Binario**

*   **Valor decimal:** El número a convertir (en este caso, 192).
*   **Base:** La base del sistema numérico binario (2).
*   **Exponente:** El exponente de la base 2 para cada posición del bit.
*   **Posición:** El valor posicional de cada bit (128, 64, 32, 16, 8, 4, 2, 1).
*   **Bit:** El valor binario (0 o 1) que indica si la posición correspondiente contribuye al valor decimal.

**Tabla de Conversión (Horizontal):**

| **Valor Decimal** | 192 |   |   |   |   |   |   |   |
|---|---|---|---|---|---|---|---|---|
| **Base** | 2 | 2 | 2 | 2 | 2 | 2 | 2 | 2 |
| **Exponente** | 7 | 6 | 5 | 4 | 3 | 2 | 1 | 0 |
| **Posición** | 128 | 64 | 32 | 16 | 8 | 4 | 2 | 1 |
| **Bit** | 1 | 1 | 0 | 0 | 0 | 0 | 0 | 0 |

**Resultado Binario:** 11000000

**Explicación:**

Para obtener 192 en decimal, necesitamos los siguientes valores posicionales:

*   128 (2^7)
*   64 (2^6)

128 + 64 = 192. Por lo tanto, los bits correspondientes a esas posiciones son 1, y los demás son 0. El resultado binario se lee de izquierda a derecha dentro de la tabla, correspondiente al orden de los exponentes y posiciones.

#### 8.2.2. Decimal a Hexadecimal y Hexadecimal a Decimal (Usando División Sucesiva y Tabla de Posición) <a name="sistemas-numericos-dec-hex-y-hex-dex"></a> 

**1. Tabla de Posición: Decimal ⇔ Hexadecimal ⇔ Binario**

| Decimal:     | 0    | 1    | 2    | 3    | 4    | 5    | 6    | 7    | 8    | 9    | 10   | 11   | 12   | 13   | 14   | 15   |
|---------------|------|------|------|------|------|------|------|------|------|------|------|------|------|------|------|------|
| Hexadecimal:  | 0    | 1    | 2    | 3    | 4    | 5    | 6    | 7    | 8    | 9    | A    | B    | C    | D    | E    | F    |
| Binario:      | 0000 | 0001 | 0010 | 0011 | 0100 | 0101 | 0110 | 0111 | 1000 | 1001 | 1010 | 1011 | 1100 | 1101 | 1110 | 1111 |

**2. Resumen del Cálculo:**

*   **Decimal -> Hexadecimal (División):**
    *   Divide sucesivamente por 16.
    *   El cociente y el residuo de cada división se convierten a hexadecimal usando la tabla de conversión (arriba).  **Ejemplo:** 202 / 16 = 12 (C) residuo 10 (A) => CA
*   **Hexadecimal -> Decimal (Multiplicación):**
    *   Cada dígito hexadecimal se convierte a decimal usando la tabla de conversión (arriba).
    *   Cada dígito decimal se multiplica por 16 elevado a la potencia de su posición (de derecha a izquierda, comenzando con 0).
    *   Los resultados se suman. **Ejemplo:** 7D = (7 * 16^1) + (13 * 16^0) = 112 + 13 = 125

#### 8.2.3. Conversión de Decimal > Binario > Hexadecimal (usa tabla de posicion y tabla conversion) <a name="sistemas-numericos-dec-bin-hex"></a> 

**Tabla de Conversión (decimal a Binario):**

| **Valor decimal** | 197 |   |   |   |   |   |   |   |
|---|---|---|---|---|---|---|---|---|
| **Base** | 2 | 2 | 2 | 2 | 2 | 2 | 2 | 2 |
| **Exponente** | 7 | 6 | 5 | 4 | 3 | 2 | 1 | 0 |
| **Posición** | 128 | 64 | 32 | 16 | 8 | 4 | 2 | 1 |
| **Bit** | 1 | 1 | 0 | 0 | 0 | 1 | 0 | 1 |

128 + 64 + 4 + 1 = 197

**Tabla de Conversión (Binario a hexadecimal):**

| **Valor Binario** | 11000101 |   |   |   |   |   |   |   |
|---|---|---|---|---|---|---|---|---|
| **Exponente** | 3 | 2 | 1 | 0 | 3 | 2 | 1 | 0 |
| **Posición** | 8 | 4 | 2 | 1 | 8 | 4 | 2 | 1 |
| **Bit** | 1 | 1 | 0 | 0 | 0 | 1 | 0 | 1 |

el primero suma 8 + 4 = 12 = c (tabla conversion) y la otra mitad suma 4 + 1 = 5

#### 8.2.4. Conversión de Hexadecimal > Binario > Decimal (usa tabla de posicion y tabla conversion) <a name="sistemas-numericos-hex-bin-dec"></a> 

**Tabla de Conversión (hexadecimal a Binario):**

| **Valor Hexadecimal** | 9F |   |   |   |   |   |   |   |
|---|---|---|---|---|---|---|---|---|
| **Exponente** | 3 | 2 | 1 | 0 | 3 | 2 | 1 | 0 |
| **Posición** | 8 | 4 | 2 | 1 | 8 | 4 | 2 | 1 |
| **Bit** | 1 | 0 | 0 | 1 | 1 | 1 | 1 | 1 |

el primero suma 8 + 1 = 9 y la otra mitad suma 8 + 4+ 2 + 1 = 15 (porque F=15)

**Tabla de Conversión (Binario a decimal):**

| **Valor Binario** | 10011111 |   |   |   |   |   |   |   |
|---|---|---|---|---|---|---|---|---|
| **Base** | 2 | 2 | 2 | 2 | 2 | 2 | 2 | 2 |
| **Exponente** | 7 | 6 | 5 | 4 | 3 | 2 | 1 | 0 |
| **Posición** | 128 | 64 | 32 | 16 | 8 | 4 | 2 | 1 |
| **Bit** | 1 | 0 | 0 | 1 | 1 | 1 | 1 | 1 |

128 + 16 + 8 +4 +2 +1 = 159
</details>

## 9. Herramientas de Solución de Problemas de Red *(CLI - interfaz de Línea de Comandos)* <a name="herramientas-cli"></a> 

<details>
  <summary>Ver/Ocultar Herramientas CLI</summary>

Estos comandos son esenciales para diagnosticar problemas de conectividad y configuración en diversas capas del modelo de red.

### 9.1. Comandos de Configuración IP (`ipconfig`, `ifconfig`, `ip`) <a name="cli-ipconfig"></a>

| Propósito / Opción Común                     | Windows (`ipconfig`)   | Linux/macOS (Tradicional: `ifconfig`) | Linux/macOS (Moderno: `ip`)     |
|----------------------------------------------|------------------------|---------------------------------------|---------------------------------|
| Muestra la configuración basica IP del host (IP, máscara, *Puerta de Enlace (Gateway)*). | `ipconfig`             | `ifconfig -a`                         | `ip addr show` o `ip a`         |
| Información detallada (muestra dirección MAC, servidores DNS, estado de DHCP, tiempo de lease). | `ipconfig /all`        | `ifconfig -a` (menos detalle que Win) | `ip addr show` (detalle similar)|
| Libera la concesión de dirección IP actual obtenida vía DHCP | `ipconfig /release`    | `sudo dhclient -r [interfaz]`         | `sudo dhclient -r [interfaz]`   |
| Solicita una nueva configuración al servidor DHCP, es decir asigna automaticamente Dirección IP, Máscara de subred, Puerta de enlace predeterminada (gateway) y Servidor DNS | `ipconfig /renew`      | `sudo dhclient [interfaz]`            | `sudo dhclient [interfaz]`      |
| Asignar IP estática (ejemplo)                | (Vía GUI o `netsh`)    | `sudo ifconfig [if] [ip] netmask [mask]` | `sudo ip addr add [ip]/[cidr] dev [if]` |
| Habilitar/Deshabilitar interfaz              | `netsh interface set interface "Nombre" admin=enable/disable` | `sudo ifconfig [if] up/down` | `sudo ip link set [if] up/down` |

*   **Nota Windows:** Si se detecta una IP incorrecta asignada por DHCP, es común usar `ipconfig /release` para liberar, seguido de `ipconfig /renew` para renovar configuracion DHCP.
*   **Nota Linux/macOS:** `ifconfig` está siendo reemplazado por el conjunto de herramientas `ip` (parte de `iproute2`) en muchas distribuciones modernas de Linux. `dhclient` es un cliente DHCP común en Linux.

### 9.2. `ping` (Diagnóstico de Conectividad) <a name="cli-ping"></a>

El comando `ping` (Packet Internet Groper) se utiliza para probar la conectividad de red en la **Capa 3 (Red)** con un host destino. Funciona enviando mensajes **ICMP (Internet Control Message Protocol) Echo Request** y esperando recibir mensajes **ICMP Echo Reply**. Mide la latencia total de ida y vuelta (RTT) y verifica la alcanzabilidad.

*   **Salida Típica:** Indica si el destino respondió, tiempo de ida y vuelta (latencia), y TTL.
    ```cmd
    C:\> ping www.google.com
    Haciendo ping a www.google.com [142.250.190.36] con 32 bytes de datos:
    Respuesta desde 142.250.190.36: bytes=32 tiempo=10ms TTL=118
    ```

#### 9.2.1. Opciones Comunes de `ping` <a name="cli-ping-opciones"></a>

| Función                                    | Opción Windows | Opción Linux/macOS (Conceptual/Común) |
|--------------------------------------------|----------------|---------------------------------------|
| Resolver nombre de host desde IP (en salida) | `-a`           | (Por defecto; `-n` para no resolver)  |
| Enviar pings indefinidamente               | `-t`           | (Comportamiento por defecto)          |
| Especificar número de solicitudes echo     | `-n count`     | `-c count`                            |
| Especificar tamaño del payload de datos    | `-l size`      | `-s size` (payload, no incl. cabecera ICMP) |
| Forzar uso de IPv4                         | `-4`           | `-4`                                  |
| Forzar uso de IPv6                         | `-6`           | `-6`                                  |
| Establecer intervalo entre pings (segundos)| (N/A directo)  | `-i interval`                         |

#### 9.2.2. Ejemplos de Uso (`ping`) <a name="cli-ping-ejemplos"></a>

```bash
# Windows & Linux/macOS (conceptual)
ping www.google.com       # Prueba básica
ping 8.8.8.8              # Prueba a IP
ping -t 192.168.1.1       # (Win) Ping continuo
ping 192.168.1.1          # (Linux) Ping continuo (Ctrl+C para parar)
ping -n 10 www.ejemplo.com # (Win) 10 pings
ping -c 10 www.ejemplo.com # (Linux) 10 pings
```

### 9.3. `tracert` / `traceroute` (Trazado de Ruta) <a name="cli-traceroute"></a>

Descubre la ruta (secuencia de routers o "saltos") que los paquetes toman para llegar a un host destino. Mide la latencia a cada salto, ayudando a identificar dónde pueden estar ocurriendo retrasos o pérdidas.

*   **Funcionamiento:** Envía paquetes con TTL (Time To Live) incremental. Cada router en la ruta devuelve un mensaje ICMP "Time Exceeded", identificándose y permitiendo medir la latencia hasta él.   
*   **Salida Típica:** Lista los saltos con sus IPs y tiempos de respuesta.
    ```cmd
    C:\> tracert www.google.com

    Traza a la dirección www.google.com [142.250.190.36] sobre un máximo de 30 saltos:
      1     1 ms     1 ms     1 ms  mi.router.local [192.168.1.1]
      2     8 ms     7 ms     8 ms  router.isp.com [10.0.0.1]
      3     *        *        *     Tiempo de espera agotado para esta solicitud.
    ... (saltos intermedios pueden mostrar latencias variables o más tiempos de espera) ...
      9    20 ms    20 ms    20 ms  mad41s19-in-f4.1e100.net [142.250.190.36]
    Traza completa.
    ```

#### 9.3.1. Opciones Comunes de `tracert`/`traceroute` <a name="cli-traceroute-opciones"></a>

| Función                                    | Windows (`tracert`) | Linux/macOS (`traceroute`)    |
|--------------------------------------------|---------------------|-------------------------------|
| No resolver IPs a nombres de host          | `-d`                | `-n`                          |
| Número máximo de saltos (TTL máximo)       | `-h max_saltos`     | `-m max_ttl`                  |
| Tiempo de espera por respuesta             | `-w timeout (ms)`   | `-w waittime (s, flotante)`   |
| Forzar uso de IPv4                         | `-4`                | `-4`                          |
| Forzar uso de IPv6                         | `-6`                | `-6`                          |
| Usar paquetes ICMP Echo (en lugar de UDP)  | (Por defecto)       | `-I` (puede requerir `sudo`)  |
| Especificar puerto destino (si usa UDP)    | (N/A, usa ICMP)     | `-p puerto`                   |
| Número de paquetes de sondeo por salto     | (N/A directo, 3 por defecto) | `-q nqueries`              |

#### 9.3.2. Ejemplos de Uso (`tracert`/`traceroute`) <a name="cli-traceroute-ejemplos"></a>

```bash
# Windows & Linux/macOS (conceptual)
tracert -d www.google.com # Windows: Trazar ruta a google.com sin resolver nombres de host
sudo traceroute -I www.google.com # Linux/macOS: Trazar ruta a google.com usando ICMP
traceroute -6 ipv6.google.com # Linux/macOS: Trazar ruta a google.com usando IPv6
```

### 9.4. `netstat` / `ss` (Monitoreo de Conexiones Activas) <a name="cli-netstat-ss"></a>
Muestra información sobre conexiones de red activas, puertos en escucha, estadísticas de Ethernet, la tabla de enrutamiento IP, estadísticas de IPv4/IPv6, etc.

| Función                                                      | Opción Windows | Opción Linux/macOS (o `ss`)   |
|--------------------------------------------------------------|----------------|-------------------------------|
| Muestra todas las conexiones activas y puertos en escucha    | `-a`           | `-a`                          |
| Muestra direcciones/puertos en formato numérico (no resolver)| `-n`           | `-n`                          |
| Muestra el ID del proceso (PID) asociado a la conexión     | `-o`           | `-p` (puede requerir `sudo`)  |
| Muestra la tabla de enrutamiento IP                          | `-r`           | `-r`                          |
| Muestra estadísticas de interfaz Ethernet/red                | `-e`           | `-i`                          |
| Muestra estadísticas por protocolo (TCP, UDP, ICMP, IP)      | `-s`           | `-s`                          |
| Muestra solo sockets TCP                                     | (Filtrar salida) | `-t` (o `ss -t`)              |
| Muestra solo sockets UDP                                     | (Filtrar salida) | `-u` (o `ss -u`)              |
| Muestra solo sockets en estado de escucha                    | (Filtrar salida con `findstr LISTEN`) | `-l` (o `ss -l`)              |

*   **Ejemplos de Combinaciones Populares:**
    *   **Windows:** `netstat -ano`(muestra todo, numérico, con PIDs).
    *   **Linux:** `netstat -tulnp` o, preferiblemente, `ss -tulnp` (muestra puertos TCP/UDP (tu) en escucha (l), numéricos (n), con programa/PID (p)).
    *   Nota: En muchas distribuciones Linux modernas, `ss (socket statistics)` es el sucesor de `netstat` y ofrece un rendimiento superior y más opciones.

### 9.5. `nslookup` (Consulta a DNS) <a name="cli-nslookup"></a>
Herramienta para consultar servidores DNS (Domain Name System).
*   **Uso Básico:** Resuelve un nombre de dominio a una dirección IP, o viceversa (búsqueda inversa si se proporciona una IP).
    ```cmd
    C:\> nslookup www.google.com
    Servidor:  mi.dns.local
    Address:  192.168.1.1

    Respuesta no autoritativa:
    Nombre:  www.google.com
    Addresses:  2607:f8b0:4004:c06::64
                142.250.190.36
    ```
*   **Modo Interactivo:** Escribiendo nslookup sin argumentos se entra en modo interactivo. Para especificar servidores DNS a consultar, tipos de registros a buscar (A, MX, NS, CNAME, etc.) Dentro de este modo, se pueden usar comandos como:
*   server [IP_servidor_DNS]: Para cambiar el servidor DNS a consultar.
*   set type=[TIPO_REGISTRO] (ej: set type=MX, set type=NS, set type=AAAA, set type=CNAME, set type=SOA): Para especificar el tipo de registro DNS a buscar.
*   Luego, escribir el nombre de dominio para consultar ese tipo de registro.
*   exit: Para salir del modo interactivo.
  
</details>


## 10. Interfaz de Línea de Comandos (CLI) del IOS de Cisco <a name="cisco-ios-cli-configuracion"></a>

<details>
  <summary>Ver/Ocultar Detalles de la CLI del IOS de Cisco</summary>

### 10.1. Contexto y Fundamentos de la CLI del IOS de Cisco <a name="ios-cli-contexto"></a>

El **IOS (Internetwork Operating System) de Cisco** es el sistema operativo propietario que se ejecuta en la gran mayoría de los routers y switches fabricados por Cisco Systems. Al igual que una computadora personal tiene un sistema operativo (como Windows, macOS o Linux) para gestionar sus recursos y permitir la interacción del usuario, los dispositivos de red Cisco utilizan IOS para sus funciones de red.

La **Interfaz de Línea de Comandos (CLI)** del IOS de Cisco es el principal método basado en texto para interactuar con este sistema operativo. Permite a los administradores de red:

*   **Configurar** los dispositivos (establecer direcciones IP, protocolos de enrutamiento, políticas de seguridad, etc.).
*   **Monitorear** el estado y el rendimiento de la red y del dispositivo.
*   **Mantener y Solucionar Problemas (Troubleshooting)** en la red.

**¿Cómo se Accede a la CLI?**
Aunque la CLI se ejecuta *en el router o switch Cisco*, se accede a ella *desde* una computadora (PC o estación de trabajo) mediante diferentes métodos:

*   **Conexión de Consola (Fuera de Banda - Out-of-Band):** Conexión física directa al puerto de consola del dispositivo Cisco usando un cable de consola (generalmente un cable rollover con un adaptador USB a serial o un puerto serial DB-9 en PCs más antiguas) y un programa de emulación de terminal (como PuTTY, Tera Term, SecureCRT, o la terminal integrada en macOS/Linux). Este método se usa para la configuración inicial o cuando el acceso por red no está disponible.
*   **Conexión Remota (Dentro de Banda - In-Band):**
    *   **Telnet (Puerto 23 TCP):** Permite el acceso remoto a la CLI a través de la red. **Es inseguro** ya que la comunicación (incluidas las credenciales) viaja en texto plano.
    *   **SSH (Secure Shell - Puerto 22 TCP):** Proporciona un acceso remoto **seguro y cifrado** a la CLI a través de la red. Es el método preferido para la administración remota.
    *   **HTTP/HTTPS (GUI):** Algunos dispositivos IOS también ofrecen una Interfaz Gráfica de Usuario (GUI) accesible vía web, pero la CLI sigue siendo fundamental para la mayoría de las tareas avanzadas y la automatización.

**Importancia de la CLI:**
A pesar de la existencia de GUIs, la CLI del IOS de Cisco sigue siendo la herramienta preferida por muchos profesionales de redes debido a su potencia, precisión, eficiencia para tareas repetitivas (mediante scripts) y la consistencia de los comandos a través de diferentes dispositivos Cisco. Dominar la CLI es una habilidad esencial para cualquier persona que trabaje con infraestructura de red Cisco.

### 10.2. Modos de Comando del IOS <a name="ios-cli-modos"></a>

El IOS de Cisco utiliza una estructura jerárquica de modos de comando para proporcionar diferentes niveles de acceso y funcionalidad, principalmente por razones de seguridad y para organizar los comandos. Cada modo se identifica por un `prompt` (indicador) diferente en la línea de comandos.

| Modo de Comando         | Prompt Típico | Descripción y Propósito Principal                                                                                                                                                           |
| :---------------------- | :------------ | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **EXEC del Usuario**    | `Router>` o `Switch>` | **Nivel de acceso inicial y limitado.** Permite ejecutar comandos básicos de monitoreo y visualización (ej: `ping`, `show version` limitado, `show interfaces` limitado). No permite realizar cambios en la configuración del dispositivo. |
| **EXEC Privilegiado**   | `Router#` o `Switch#` | **Nivel de acceso completo (superusuario o "enable mode").** Permite ejecutar todos los comandos `show` para ver cualquier aspecto de la configuración y el estado, comandos de depuración (`debug`), gestión de archivos del sistema operativo, y, crucialmente, es el punto de entrada para acceder a los modos de configuración. |
| **Configuración Global**| `Router(config)#` o `Switch(config)#` | **Permite realizar cambios que afectan al dispositivo en su totalidad.** Desde aquí se configuran parámetros globales como el nombre del host, contraseñas, banners, y se accede a submodos de configuración más específicos. |
| **Configuración de Interfaz** | `Router(config-if)#` o `Switch(config-if)#` | **Permite configurar parámetros específicos de una interfaz de red** (ej: dirección IP, descripción, velocidad, dúplex, encapsulación). Se accede desde el modo de configuración global. |
| **Configuración de Línea** | `Router(config-line)#` o `Switch(config-line)#` | **Permite configurar los parámetros de las líneas de acceso** (consola, vty para Telnet/SSH, aux). Se accede desde el modo de configuración global. |
| **Configuración de Router** | `Router(config-router)#` o `Switch(config-router)#` | **Permite configurar protocolos de enrutamiento** (ej: OSPF, EIGRP, RIP). Se accede desde el modo de configuración global. |
| *(Otros modos específicos)* | *(Varía)*      | Existen muchos otros submodos de configuración para características específicas (VLANs, ACLs, etc.), generalmente accesibles desde el modo de configuración global. |

### 10.3. Navegación entre los Modos del IOS <a name="ios-cli-navegacion"></a>

Moverse entre los diferentes modos de comando es una tarea fundamental al trabajar con la CLI del IOS.

| Comando        | Modo Actual Típico        | Modo Destino Típico      | Propósito                                                                                                                               |
| :------------- | :------------------------ | :----------------------- | :-------------------------------------------------------------------------------------------------------------------------------------- |
| `enable`       | EXEC del Usuario (`>`)    | EXEC Privilegiado (`#`)  | Ingresar al modo EXEC privilegiado (generalmente requiere una contraseña si está configurada).                                          |
| `disable`      | EXEC Privilegiado (`#`)   | EXEC del Usuario (`>`)   | Regresar al modo EXEC del usuario.                                                                                                      |
| `configure terminal` (o `conf t`) | EXEC Privilegiado (`#`)   | Configuración Global (`(config)#`) | Ingresar al modo de configuración global para realizar cambios en la configuración del dispositivo.                                      |
| `interface [tipo] [número]` (ej: `interface gigabitethernet 0/0/0`, `interface vlan 1`) | Configuración Global (`(config)#`) | Configuración de Interfaz (`(config-if)#`) | Ingresar al modo de configuración específico para la interfaz indicada.                                                                   |
| `line [tipo] [número]` (ej: `line console 0`, `line vty 0 4`) | Configuración Global (`(config)#`) | Configuración de Línea (`(config-line)#`) | Ingresar al modo de configuración específico para la línea de acceso indicada.                                                              |
| `router [protocolo] [id_proceso_opcional]` (ej: `router ospf 10`) | Configuración Global (`(config)#`) | Configuración de Router (`(config-router)#`) | Ingresar al modo de configuración para el protocolo de enrutamiento especificado.                                                       |
| `exit`         | Cualquier modo de sub-configuración (ej: `(config-if)#`, `(config-line)#`, `(config-router)#`) | Modo de Configuración inmediatamente superior (ej: `(config)#`) | Salir del modo de configuración actual y regresar al modo anterior en la jerarquía. Si se usa en Configuración Global, regresa a EXEC Privilegiado. |
| `end`          | Cualquier modo de configuración o sub-configuración | EXEC Privilegiado (`#`)  | Salir de cualquier modo de configuración y regresar directamente al modo EXEC privilegiado.                                               |
| `Ctrl+Z`       | Cualquier modo de configuración o sub-configuración | EXEC Privilegiado (`#`)  | Equivalente a `end`. Sale de cualquier modo de configuración y regresa directamente al modo EXEC privilegiado.                         |

### 10.4. Estructura de los Comandos del IOS <a name="ios-cli-estructura-comandos"></a>

Los comandos del IOS siguen una estructura general que es importante entender para usarlos correctamente.

| Componente del Comando | Descripción                                                                                                                                                              | Ejemplo en `ping 192.168.1.1` | Ejemplo en `show ip interface brief` |
| :--------------------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :---------------------------- | :----------------------------------- |
| **Comando**            | La palabra de acción inicial que le dice al IOS qué hacer.                                                                                                               | `ping`                        | `show`                               |
| **Espacio**            | Un separador requerido entre el comando y sus parámetros.                                                                                                              | (espacio después de `ping`)   | (espacio después de `show`)          |
| **Palabra Clave (Keyword)** | Un parámetro específico y predefinido que modifica o especifica la acción del comando. No todos los comandos requieren palabras clave.                                 | (No aplica directamente)      | `ip`, `interface`                    |
| **Argumento**          | Un valor o variable proporcionado por el usuario que el comando necesita para ejecutarse. No todos los comandos requieren argumentos.                                        | `192.168.1.1`                 | `brief` (en este caso, actúa como una palabra clave que especifica el formato de salida) |

**Sintaxis General:** `prompt comando [palabra_clave1 [argumento1]] [palabra_clave2 [argumento2]] ...`

*   **Texto en negrita** en la documentación de Cisco usualmente indica comandos y palabras clave que se ingresan tal cual.
*   **Texto en cursiva** usualmente indica argumentos para los cuales el usuario debe proporcionar un valor.
*   **Ejemplo de Sintaxis:** El comando para poner una descripción en una interfaz es `description <string>`.
    *   `description` es el comando.
    *   `<string>` es el argumento (la cadena de texto que el usuario escribe).
    *   Ejemplo de uso: `R1(config-if)# description Enlace_WAN_a_Oficina_Central`

### 10.5. Funciones de Ayuda y Atajos en la CLI (shortcuts) <a name="ios-cli-ayuda-shortcuts"></a>

La CLI del IOS ofrece varias características para facilitar su uso y hacer más eficiente la configuración y el monitoreo.

| Característica                      | Cómo se Usa / Tecla(s)                                        | Descripción y Propósito                                                                                                                                                                                               |
| :---------------------------------- | :------------------------------------------------------------ | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Ayuda Sensible al Contexto**      | `?` (signo de interrogación)                                  | Escribir `?` en cualquier punto de un comando (o solo) muestra los comandos disponibles en ese modo o las siguientes palabras clave/argumentos posibles para el comando que se está escribiendo. Es extremadamente útil. |
| **Completado de Comandos/Palabras Clave** | `Tab` (tecla Tabulador)                                       | Después de escribir parte de un comando o palabra clave, presionar `Tab` intentará completarlo automáticamente. Si hay múltiples opciones, no completará o mostrará las opciones si se presiona `Tab` dos veces (o `?`). |
| **Abreviación de Comandos/Palabras Clave** | Escribir solo los caracteres iniciales únicos.              | Se pueden abreviar comandos y palabras clave a la cantidad mínima de caracteres que los identifiquen unívocamente. Ej: `conf t` en lugar de `configure terminal`; `sh run` en lugar de `show running-config`. |
| **Recuperación de Comandos Anteriores** | Flecha Arriba (`↑`), Flecha Abajo (`↓`)                        | Permite navegar por el historial de comandos ingresados previamente en la sesión actual.                                                                                                                            |
| **Mover el Cursor en la Línea**     | Flecha Izquierda (`←`), Flecha Derecha (`→`)                   | Mueve el cursor carácter por carácter.                                                                                                                                                                                  |
|                                     | `Ctrl+A`                                                      | Mueve el cursor al inicio de la línea.                                                                                                                                                                                |
|                                     | `Ctrl+E`                                                      | Mueve el cursor al final de la línea.                                                                                                                                                                                 |
| **Borrar Caracteres/Línea**         | `Backspace`                                                   | Borra el carácter a la izquierda del cursor.                                                                                                                                                                           |
|                                     | `Ctrl+U`                                                      | Borra toda la línea actual.                                                                                                                                                                                           |
|                                     | `Ctrl+W`                                                      | Borra la palabra a la izquierda del cursor.                                                                                                                                                                            |
| **Interrumpir un Proceso**          | `Ctrl+C`                                                      | Termina un comando en ejecución (como un `ping` continuo o un `debug`).                                                                                                                                                   |
| **Salir de Modos de Configuración** | `Ctrl+Z`                                                      | Regresa directamente al modo EXEC Privilegiado desde cualquier submodo de configuración (equivalente a `end`).                                                                                                        |
| **Mostrar Más Salida**              | `Barra Espaciadora`                                           | Cuando la salida de un comando (ej: `show running-config`) es más larga que la pantalla, muestra la siguiente pantalla completa.                                                                                     |
|                                     | `Enter`                                                       | Muestra la siguiente línea de la salida.                                                                                                                                                                              |
|                                     | `q` (o cualquier otra tecla)                                  | Detiene la visualización de la salida paginada y regresa al prompt.                                                                                                                                                     |

### 10.6. Visualización de Información del Dispositivo con Comandos `show` <a name="ios-cli-comandos-show"></a>

Los comandos `show` son herramientas de diagnóstico y verificación fundamentales en el IOS de Cisco. Se utilizan principalmente en el modo EXEC del Usuario y, con más detalle, en el modo EXEC Privilegiado para mostrar el estado actual del dispositivo, su configuración, tablas de protocolos, estadísticas de interfaces, etc. **No modifican la configuración.**

| Comando `show` Común        | Propósito Principal y Qué Muestra                                                                                                                                                                                                   | Modo Típico de Uso |
| :-------------------------- | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :----------------- |
| `show running-config`       | Muestra la **configuración actualmente activa** que está en la RAM. Refleja todos los cambios realizados desde que el dispositivo se encendió o desde que se cargó la última configuración guardada.                                 | EXEC Privilegiado  |
| `show startup-config`       | Muestra la **configuración guardada** que está almacenada en la NVRAM. Esta es la configuración que el dispositivo cargará la próxima vez que se reinicie.                                                                            | EXEC Privilegiado  |
| `show interfaces [tipo número]` | Muestra estadísticas detalladas y el estado de todas las interfaces o de una interfaz específica. Incluye estado de Capa 1 (up/down) y Capa 2 (line protocol up/down), dirección MAC, MTU, contadores de errores, velocidad, dúplex. | EXEC Usuario/Priv. |
| `show ip interface [tipo número]` | Muestra la información de configuración IP (Capa 3) para todas las interfaces o una específica. Incluye dirección IP, máscara de subred, estado de helper-address, ACLs aplicadas, etc.                                              | EXEC Usuario/Priv. |
| `show ip interface brief`   | Proporciona un resumen conciso del estado de las interfaces (IP, estado de Capa 1 y Capa 2). Muy útil para una verificación rápida.                                                                                              | EXEC Usuario/Priv. |
| `show arp`                  | Muestra la tabla ARP del dispositivo, que contiene los mapeos entre direcciones IP y direcciones MAC de los dispositivos en las redes directamente conectadas.                                                                      | EXEC Usuario/Priv. |
| `show ip route`             | Muestra la tabla de enrutamiento IP del dispositivo. Detalla las redes conocidas, cómo llegar a ellas (siguiente salto o interfaz de salida), la métrica de la ruta y cómo se aprendió la ruta (conectada, estática, dinámica).        | EXEC Usuario/Priv. |
| `show protocols`            | Muestra el estado de los protocolos de Capa 3 configurados en cada interfaz (ej: si IP está habilitado) y las direcciones IP de las interfaces.                                                                                    | EXEC Usuario/Priv. |
| `show version`              | Muestra información crítica del sistema, incluyendo la versión del software IOS, tiempo de actividad del sistema, información de hardware (CPU, memoria RAM/Flash/NVRAM), interfaces físicas, y el valor del registro de configuración. | EXEC Usuario/Priv. |
| `show mac address-table` (en Switches) | Muestra la tabla de direcciones MAC del switch, con las MACs aprendidas, el puerto asociado y la VLAN. (Comando específico de switches).                                                                                | EXEC Usuario/Priv. |
| `show vlan brief` (en Switches) | Muestra un resumen de las VLANs configuradas en el switch y los puertos asignados a cada una. (Comando específico de switches).                                                                                             | EXEC Usuario/Priv. |

### 10.7. Nota sobre Herramientas de Simulación <a name="ios-cli-simulacion"></a>
Cuando se aprende a configurar dispositivos Cisco, es común utilizar herramientas de simulación o emulación antes de trabajar en equipos de producción reales.
*   **Verificadores de Sintaxis (Syntax Checkers):** Herramientas simples que a menudo requieren que los comandos se ingresen de forma exacta y completa. Son útiles para familiarizarse con la sintaxis precisa.
*   **Simuladores más Avanzados (ej: Cisco Packet Tracer):** Permiten una experiencia más realista, aceptando comandos abreviados, el uso de la tecla `Tab` para completar, y simulando el comportamiento de una red. Aunque son muy completos, pueden no tener todas las funcionalidades de un equipo real.
*   **Emuladores (ej: GNS3, EVE-NG):** Permiten ejecutar imágenes reales del IOS de Cisco en un entorno virtualizado, ofreciendo la experiencia más cercana al hardware real.

Es recomendable practicar en estos entornos para desarrollar habilidades de configuración y resolución de problemas de forma segura.

</details>

## 11. Configuración Básica de Dispositivos de Red Cisco (Switches y Routers) <a name="cisco-dispositivos-config-basica"></a>

<details>
  <summary>Ver/Ocultar Detalles de Configuración Básica de Dispositivos Cisco</summary>

Una vez comprendidos los fundamentos de la CLI del IOS de Cisco, el siguiente paso es aplicar ese conocimiento para realizar la configuración inicial esencial en switches y routers. Esta configuración básica es crucial para la operatividad, la gestión remota y la seguridad de los dispositivos de red.

### 11.1. Configuración Inicial de un Switch Cisco <a name="cisco-switch-config-inicial"></a>

Los switches Cisco, aunque son dispositivos de Capa 2, requieren una configuración IP mínima para permitir la gestión remota (por ejemplo, vía Telnet o SSH). Esto se logra configurando una **Interfaz Virtual de Switch (SVI - Switch Virtual Interface)**, comúnmente en la VLAN 1 por defecto, o en una VLAN de gestión dedicada.

#### 11.1.1. Configuración de la Interfaz Virtual del Switch (SVI) para Gestión Remota <a name="switch-svi-config"></a>
Para acceder al switch de manera remota, se debe asignar una dirección IP y una máscara de subred a una SVI. La SVI es una interfaz lógica en el switch asociada a una VLAN.

| Paso                                    | Comando de Ejemplo (desde Configuración Global o modo indicado) | Propósito                                                                                                                               |
| :-------------------------------------- | :---------------------------------------------------------- | :-------------------------------------------------------------------------------------------------------------------------------------- |
| 1. Ingresar al modo de config. de interfaz VLAN | `Switch(config)# interface vlan 1`                          | Accede al modo de configuración para la SVI de la VLAN 1 (o la VLAN de gestión que se desee usar).                                      |
| 2. Asignar dirección IP y máscara       | `Switch(config-if)# ip address 192.168.1.20 255.255.255.0`  | Asigna una dirección IPv4 y máscara de subred a la SVI, permitiendo que el switch sea direccionable en esa red/VLAN.                 |
| 3. Habilitar la interfaz virtual        | `Switch(config-if)# no shutdown`                            | Activa la SVI. Por defecto, las SVIs suelen estar administrativamente desactivadas.                                                     |
| 4. (Opcional) Salir del modo de interfaz | `Switch(config-if)# exit`                                   | Regresa al modo de configuración global.                                                                                                |
| 5. Configurar Puerta de Enlace Predeterminada | `Switch(config)# ip default-gateway 192.168.1.1`            | **Esencial si se necesita gestionar el switch desde una red diferente a la de la SVI.** Especifica el router al que el switch enviará el tráfico destinado a redes remotas. |

*Nota: La VLAN 1 es la VLAN por defecto en los switches Cisco. Para una mejor seguridad y organización, a menudo se crea una VLAN de gestión separada (ej: VLAN 99) y se le asigna la IP de gestión.*

### 11.2. Configuración de los Ajustes Iniciales del Router Cisco <a name="cisco-router-config-inicial"></a>

La configuración inicial de un router establece su identidad en la red y asegura un nivel básico de seguridad para el acceso administrativo.

#### 11.2.1. Pasos Esenciales de Configuración Básica del Router <a name="router-pasos-basicos"></a>

| Paso                                      | Comando(s) de Ejemplo (desde Configuración Global o modo indicado) | Propósito                                                                                                                                                              |
| :---------------------------------------- | :----------------------------------------------------------------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1. **Configurar el Nombre del Dispositivo (Hostname)** | `Router(config)# hostname R1`                                      | Asigna un nombre único y descriptivo al router (ej: R1). El prompt cambiará para reflejar el nuevo nombre.                                                              |
| 2. **Proteger el Modo EXEC Privilegiado**   | `R1(config)# enable secret [contraseña_fuerte]`                      | Establece una contraseña cifrada para acceder al modo EXEC privilegiado (`#`). Esta es la protección más importante.                                                          |
| 3. **Proteger el Acceso por Consola (EXEC Usuario)** | `R1(config)# line console 0` <br> `R1(config-line)# password [contraseña_consola]` <br> `R1(config-line)# login` | Asegura el acceso físico a través del puerto de consola. `login` habilita la solicitud de contraseña.                                                                 |
| 4. **Proteger el Acceso Remoto por VTY (Telnet/SSH)** | `R1(config)# line vty 0 4` (o `0 15`) <br> `R1(config-line)# password [contraseña_vty]` <br> `R1(config-line)# login` <br> `R1(config-line)# transport input [ssh | telnet | all | none]` | Asegura las líneas de terminal virtual para acceso remoto. `transport input` especifica qué protocolos se permiten (SSH es el preferido por seguridad). `0 4` es común para routers, `0 15` para switches. |
| 5. **Cifrar Todas las Contraseñas de Texto Plano** | `R1(config)# service password-encryption`                          | Cifra las contraseñas que de otro modo se almacenarían en texto plano en la configuración (como la contraseña de consola y vty, *no* la `enable secret` que ya es cifrada). |
| 6. **Proporcionar un Banner de Notificación Legal (MOTD)** | `R1(config)# banner motd # [Mensaje de advertencia] #`             | Muestra un mensaje de advertencia (Message Of The Day) a cualquiera que intente acceder al dispositivo, disuadiendo el acceso no autorizado. El `#` es un carácter delimitador. |
| 7. **Guardar la Configuración**             | `R1# copy running-config startup-config` (o `wr`)                | **Crucial.** Guarda la configuración activa (en RAM, `running-config`) a la configuración de inicio (en NVRAM, `startup-config`) para que persista después de un reinicio.   |

*Ejemplo de Secuencia Completa (adaptado de 28.2.2):*
```cisco
Router> enable
Router# configure terminal
Router(config)# hostname R1
R1(config)# enable secret class
R1(config)# line console 0
R1(config-line)# password cisco
R1(config-line)# login
R1(config-line)# exit
R1(config)# line vty 0 4
R1(config-line)# password cisco
R1(config-line)# login
R1(config-line)# transport input ssh telnet
R1(config-line)# exit
R1(config)# service password-encryption
R1(config)# banner motd # WARNING: Unauthorized access is prohibited! #
R1(config)# end
R1# copy running-config startup-config
Destination filename [startup-config]? [Presionar Enter]
Building configuration...
[OK]
```
</details>


## 12. ICMP y Herramientas de Diagnóstico de Red (Ping y Traceroute) <a name="icmp-ping-traceroute-diagnostico"></a>

<details>
  <summary>Ver/Ocultar Detalles de ICMP, Ping y Traceroute</summary>

Este módulo explora el Protocolo de Mensajes de Control de Internet (ICMP) y dos herramientas de diagnóstico fundamentales, `ping` y `traceroute` (o `tracert`), que dependen de ICMP para su funcionamiento. Estos elementos son cruciales para verificar la conectividad, solucionar problemas de red y comprender cómo viajan los datos.

### 12.1. Protocolo de Mensajes de Control de Internet (ICMP) <a name="icmp-protocolo"></a>

#### 12.1.1. Fundamentos y Propósito de ICMP <a name="icmp-fundamentos"></a>
Aunque el Protocolo de Internet (IP) es un protocolo de "mejor esfuerzo" (no garantiza la entrega), el conjunto TCP/IP necesita una forma de comunicar errores y enviar mensajes informativos relacionados con el procesamiento de paquetes IP. Esta función la cumple el **Protocolo de Mensajes de Control de Internet (ICMP)**.

*   **Propósito Principal:** Proporcionar retroalimentación sobre problemas encontrados durante la transmisión de paquetes IP (ej: destino inalcanzable, tiempo de vida del paquete expirado) y permitir pruebas de diagnóstico (ej: verificar la accesibilidad de un host).
*   **Fiabilidad de IP:** Es crucial entender que ICMP **no hace que IP sea un protocolo fiable**. Simplemente reporta errores o estados; la corrección o manejo de estos errores suele ser responsabilidad de protocolos de capas superiores (como TCP) o de la aplicación.
*   **Obligatoriedad y Seguridad:** Los mensajes ICMP no son estrictamente obligatorios para la funcionalidad básica de IP y, a menudo, su tráfico es filtrado o bloqueado por firewalls en redes por razones de seguridad, ya que ciertos mensajes ICMP pueden ser explotados para reconocimiento de red o ataques.
*   **Versiones:**
    *   **ICMPv4:** Funciona junto con IPv4.
    *   **ICMPv6:** Funciona con IPv6. Proporciona servicios análogos a ICMPv4 pero incluye funcionalidades adicionales importantes, especialmente para el Protocolo de Descubrimiento de Vecinos (NDP).

#### 12.1.2. Tipos Comunes de Mensajes ICMP (v4 y v6) <a name="icmp-tipos-comunes-v4v6"></a>

| Tipo de Mensaje ICMP                | Descripción y Propósito                                                                                                                                                                                              |
| :---------------------------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Solicitud de Eco (Echo Request)** <br> **Respuesta de Eco (Echo Reply)** | Se utiliza para probar la **accesibilidad del host**. Un dispositivo envía una Solicitud de Eco; si el host destino está disponible y no bloquea ICMP, responde con una Respuesta de Eco. Este es el mecanismo fundamental de la utilidad `ping`. |
| **Destino Inalcanzable**            | Enviado por un host o un router cuando no puede entregar un paquete. El mensaje incluye un código que especifica la razón de la inaccesibilidad.                                                                      |
| **Tiempo Excedido (Time Exceeded)**   | Principalmente enviado por un router cuando descarta un paquete porque su campo **TTL (Time To Live en IPv4)** o **Límite de Salto (Hop Limit en IPv6)** ha llegado a cero. Este mecanismo es fundamental para la utilidad `traceroute`/`tracert`. |

**Códigos Comunes de "Destino Inalcanzable" - ICMPv4:**

| Código | Significado           |
| :----- | :-------------------- |
| 0      | Red inalcanzable      |
| 1      | Host inalcanzable     |
| 2      | Protocolo inalcanzable|
| 3      | Puerto inalcanzable   |

**Códigos Comunes de "Destino Inalcanzable" - ICMPv6:**

| Código | Significado                                               |
| :----- | :-------------------------------------------------------- |
| 0      | No hay ruta para el destino                                 |
| 1      | Comunicación con el destino prohibida administrativamente |
| 2      | Más allá del alcance de la dirección de origen              |
| 3      | No se puede alcanzar la dirección                           |
| 4      | Puerto inalcanzable                                       |

#### 12.1.3. Mensajes Específicos de ICMPv6 para el Descubrimiento de Vecinos (NDP) <a name="icmpv6-ndp-mensajes-seccion12"></a>
ICMPv6 es una parte integral del **Protocolo de Descubrimiento de Vecinos (NDP)**, que en IPv6 maneja funciones como la resolución de direcciones (similar a ARP en IPv4) y la autoconfiguración de direcciones.

| Mensaje ICMPv6 (NDP)                   | Propósito Principal                                                                                                                                                                                                                                                          |
| :------------------------------------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Solicitud de Router (RS - Router Solicitation)** | Enviada por hosts para localizar routers en el enlace local y solicitarles que envíen Anuncios de Router (RA) inmediatamente.                                                                                                                                  |
| **Anuncio de Router (RA - Router Advertisement)** | Enviados periódicamente por los routers (o en respuesta a un RS) para anunciar su presencia, prefijos de red, y otros parámetros de configuración del enlace (como MTU, Límite de Salto). Crucial para SLAAC (Autoconfiguración de Dirección Sin Estado). Un host que usa SLAAC establece su gateway predeterminado a la dirección de enlace local del router que envió el RA. |
| **Solicitud de Vecino (NS - Neighbor Solicitation)** | Usada para resolver la dirección MAC de una IPv6, verificar alcanzabilidad de vecinos, y detectar direcciones duplicadas.                                                                                                                                     |
| **Anuncio de Vecino (NA - Neighbor Advertisement)** | Enviado en respuesta a una NS o para anunciar cambios en la dirección de capa de enlace.                                                                                                                                                                       |
| **Redirección (Redirect Message)**       | Usado por un router para informar a un host sobre un mejor router de primer salto para un destino específico.                                                                                                                                                           |

### 12.2. `ping`: Prueba de Conectividad <a name="ping-herramienta"></a>

#### 12.2.1. Funcionamiento y Casos de Uso de `ping` <a name="ping-funcionamiento-usos"></a>
El comando `ping` (Packet Internet Groper) es una utilidad fundamental para probar la conectividad de Capa 3 entre un host local y un destino especificado.
*   **Mecanismo:** Utiliza mensajes **ICMP Echo Request** (Solicitud de Eco) e **ICMP Echo Reply** (Respuesta de Eco).
    1.  El origen envía un ICMP Echo Request.
    2.  Si el destino es accesible, responde con un ICMP Echo Reply.
    3.  `ping` muestra el tiempo de ida y vuelta (RTT) y si la respuesta fue recibida.
*   **Timeout:** Si no se recibe respuesta, `ping` indica un timeout.
*   **Resolución Previa:** El primer `ping` a un destino local puede tardar más si se requiere ARP/NDP.
*   **Casos de Uso:**
    *   **Ping al Loopback Local** (`127.0.0.1` o `::1`): Verifica la pila TCP/IP interna del host.
    *   **Ping a la Puerta de Enlace Predeterminada:** Prueba la conectividad con el router local.
    *   **Ping a un Host Remoto:** Prueba la conectividad de extremo a extremo a través de la(s) red(es).
*   **Información Obtenida:** Tasa de éxito, RTT promedio, mínimo y máximo.

*(Aquí puedes insertar tus tablas existentes de "Opciones Comunes de `ping`" y "Ejemplos de Uso (`ping`)" de tu sección CLI).*

### 12.3. `traceroute` / `tracert`: Trazado de Ruta <a name="traceroute-herramienta"></a>

#### 12.3.1. Funcionamiento Detallado de `traceroute` <a name="traceroute-funcionamiento"></a>
La utilidad `traceroute` (o `tracert` en Windows) descubre la ruta (secuencia de routers o "saltos") que los paquetes toman para llegar a un destino y mide la latencia a cada salto.
*   **Mecanismo con TTL/Límite de Salto e ICMP:**
    1.  Envía una serie de paquetes. El primer conjunto tiene un **TTL (IPv4) o Límite de Salto (IPv6) de 1**.
    2.  El primer router decrementa el TTL/Límite de Salto a 0, descarta el paquete, y envía un **ICMP "Time Exceeded"** al origen. `traceroute` identifica así al primer salto.
    3.  Incrementa el TTL/Límite de Salto en 1 para cada conjunto subsecuente de paquetes, revelando cada router en la ruta.
    4.  Al alcanzar el destino final, este responde (comúnmente con **ICMP "Port Unreachable"** si los sondeos son UDP, o **ICMP Echo Reply** si los sondeos son ICMP).
*   **Interpretación de la Salida:** Lista los saltos (IPs/nombres) y los RTT. Un asterisco (`*`) indica un salto sin respuesta.

*(Aquí puedes insertar tus tablas existentes de "Opciones Comunes tracer" y "Ejemplos de Uso" de tu sección CLI).*

</details>

## 13. Solución de Problemas de Red: Metodologías, Herramientas y Soporte <a name="troubleshooting-main"></a>

<details>
  <summary>Ver/Ocultar Solución de Problemas de Red</summary>

La solución de problemas de red es una habilidad esencial para cualquier profesional de TI. Implica un proceso sistemático para identificar, localizar y corregir problemas que impiden el funcionamiento óptimo de la red. Esta sección cubre los principios fundamentales, metodologías estructuradas, herramientas comunes y la importancia del soporte y la documentación en el proceso de troubleshooting.

### 13.1. Principios Fundamentales de la Solución de Problemas <a name="troubleshooting-principles"></a>

#### 13.1.1. ¿Qué es la Solución de Problemas? <a name="troubleshooting-what-is"></a>
La solución de problemas es el proceso de identificar, ubicar y corregir los problemas que ocurren. Aunque los individuos con experiencia suelen seguir su instinto para resolver los problemas, existen técnicas estructuradas que se pueden usar para determinar la causa más probable y la solución correspondiente.

#### 13.1.2. La Importancia de la Documentación en la Solución de Problemas <a name="troubleshooting-documentation-importance"></a>
Una documentación precisa y completa es crucial durante todo el proceso de solución de problemas. No solo ayuda a resolver el problema actual, sino que también sirve como referencia valiosa para el futuro.

**Qué Documentar:**
*   **El problema encontrado:** Descripción inicial, informes de usuarios, síntomas observados.
*   **Información recopilada:** Detalles de los dispositivos afectados, configuraciones, registros (logs), resultados de pruebas.
*   **Pasos tomados para determinar la causa:** Incluyendo hipótesis probadas y resultados, incluso los intentos fallidos.
*   **La solución implementada:** Pasos exactos para corregir el problema.
*   **Medidas para prevenir la recurrencia:** Cualquier cambio de configuración o procedimiento para evitar que el problema vuelva a ocurrir.
*   **Comandos y herramientas utilizados:** Para diagnóstico y resolución.

Mantener esta documentación actualizada, incluso en redes domésticas pequeñas, ahorra tiempo y esfuerzo al enfrentar problemas similares en el futuro. Después de solucionar el problema, es vital verificar la solución con el cliente o usuario afectado y actualizar toda la documentación con la información final.

#### 13.1.3. Proceso General de Siete Pasos para la Solución de Problemas <a name="troubleshooting-seven-steps"></a>
Un enfoque estructurado y detallado para la solución de problemas a menudo sigue un proceso de siete pasos. Algunos técnicos experimentados pueden moverse entre estos pasos de forma no lineal.

1.  **Definir el Problema:**
    *   Verificar que existe un problema real.
    *   Identificar claramente cuál es el problema basándose en síntomas (ej: red lenta, sin acceso, mensajes de error, alertas del sistema de gestión).
    *   Determinar el alcance: ¿Afecta a un solo dispositivo, un grupo, una subred completa o múltiples redes?
    *   En entornos organizacionales, los problemas suelen gestionarse mediante **tiquetes de problemas** generados por software especializado.

2.  **Recopilar Información:**
    *   Identificar los hosts y dispositivos que se investigarán.
    *   Obtener acceso a los dispositivos objetivo.
    *   Recopilar y documentar síntomas adicionales y características identificadas.

3.  **Analizar la Información:**
    *   Identificar las posibles causas del problema.
    *   Interpretar la información recopilada utilizando:
        *   Documentación de red existente (topologías, configuraciones).
        *   Líneas base de rendimiento de la red.
        *   Bases de conocimiento organizacionales.
        *   Búsquedas en Internet y foros técnicos.
        *   Consultas con otros técnicos o colegas.

4.  **Eliminar Posibles Causas:**
    *   Si se identifican múltiples causas potenciales, reducir la lista progresivamente.
    *   Eliminar las causas menos probables hasta identificar la causa raíz más probable. La experiencia es muy valiosa en este paso.

5.  **Proponer una Hipótesis:**
    *   Una vez identificada la causa más probable, formular una solución o un plan de acción.
    *   La experiencia ayuda a proponer planes efectivos.

6.  **Probar la Hipótesis (Implementar la Solución):**
    *   **Antes de implementar**, evaluar el impacto potencial y la urgencia:
        *   ¿Podría la solución afectar negativamente a otros sistemas o procesos?
        *   Contrastar la gravedad del problema con el impacto de la solución (ej: si un servidor crítico debe estar offline, considerar implementar la solución fuera del horario laboral).
    *   A veces, se puede implementar una solución temporal (workaround) hasta que se resuelva la causa raíz.
    *   Implementar la solución propuesta.

7.  **Resolver el Problema y Documentar la Solución:**
    *   Verificar que la solución ha corregido el problema (idealmente con el usuario afectado).
    *   Comunicar la resolución a los usuarios y al equipo de TI.
    *   **Documentar exhaustivamente:** la causa raíz identificada, los pasos de la solución implementada y cualquier otra información relevante. Esto es vital para futuras referencias y para la base de conocimientos.

---

### 13.2. Recopilación Detallada de Información y Establecimiento de Líneas Base <a name="troubleshooting-info-baselines"></a>

#### 13.2.1. Recopilación Eficaz de Información (Síntomas, Usuarios, Equipos) <a name="troubleshooting-gather-info-detailed"></a>
Cuando se detecta un problema, es crucial recopilar información sistemáticamente:
*   **Informes del Usuario Final:**
    *   ¿Qué experimentan exactamente? (lentitud, no acceso, errores específicos)
    *   ¿Cuándo comenzó el problema? ¿Es intermitente o constante?
    *   ¿Hubo cambios recientes en su sistema o aplicaciones?
*   **Verificación del Problema:** Confirmar el problema por uno mismo si es posible.
*   **Información de Equipos Afectados:**
    *   Fabricante, marca y modelo.
    *   Versión de firmware y sistema operativo.
    *   Información de propiedad y garantía (si aplica).
*   **Configuración y Topología de Red:**
    *   Diagramas de topología física y lógica.
    *   Archivos de configuración de los dispositivos de red involucrados.
    *   Archivos de registro (logs) de los dispositivos (switches, routers, firewalls, servidores).
*   **Historial de Problemas Similares:**
    *   ¿Ha ocurrido este problema antes? ¿Cómo se solucionó?
*   **Herramientas de Supervisión de Red:** Si están disponibles, pueden proporcionar datos históricos y en tiempo real sobre el estado de la red.

#### 13.2.2. Documentación de Red Detallada para el Diagnóstico <a name="troubleshooting-network-documentation"></a>
Una documentación de red precisa y actualizada es indispensable para un troubleshooting eficaz. Debe incluir:
*   **Diagramas de Topología:**
    *   **Física:** Ubicación de dispositivos (sala, rack), cableado físico, interconexiones.
    *   **Lógica:** Direccionamiento IP (subredes, IPs de dispositivos clave), identificadores de VLAN, interfaces de conexión.
*   **Documentación de Dispositivos de Red:** Tablas u hojas de cálculo que registren información pertinente para cada dispositivo (routers, switches, firewalls, servidores, puntos de acceso):
    *   Nombre del dispositivo (hostname).
    *   Modelo y fabricante.
    *   Versión del IOS/firmware.
    *   Dirección IP de gestión.
    *   Ubicación física.
    *   Configuraciones de interfaz (IPs, máscaras, velocidad, dúplex).
    *   Protocolos de enrutamiento configurados.
    *   Políticas de seguridad aplicadas (ACLs).
    *   Información de licencias.
*   **Documentación Específica para Redes Empresariales Complejas:**
    *   Políticas de seguridad y VPN.
    *   Gestión y servicios en la nube (SaaS, PaaS, IaaS).
    *   Políticas de enrutamiento detalladas.
    *   Políticas de acceso remoto.
*   Toda la documentación debe estar centralizada, ser accesible y mantenerse actualizada. Se deben realizar copias de seguridad.

#### 13.2.3. Establecimiento y Uso de una Línea Base de Red <a name="troubleshooting-baselining"></a>
Una **línea base de red** es un conjunto de mediciones del rendimiento normal de la red y sus componentes, tomadas durante períodos de operación típicos. Sirve como un estándar de referencia.
*   **Propósito:**
    *   Establecer cómo funciona la red en condiciones normales o promedio.
    *   Determinar la "personalidad" de la red.
    *   Identificar dónde ocurren la mayoría de los errores.
    *   Conocer qué partes de la red se usan con más/menos frecuencia.
    *   Definir umbrales de alerta para el monitoreo.
    *   Verificar si la red cumple con las políticas de rendimiento identificadas.
*   **Beneficios:**
    *   Permite a los administradores diferenciar entre un comportamiento anormal y el rendimiento aceptable a medida que la red crece o cambian los patrones de tráfico.
    *   Ayuda a evaluar si el diseño actual de la red puede satisfacer los requisitos del negocio.
    *   Puede revelar problemas ocultos (congestión, subutilización).
    *   Sirve para medir el impacto de los cambios en la red.
*   **Creación:** Implica recopilar datos sobre el rendimiento de puertos y dispositivos críticos (CPU, memoria, utilización de ancho de banda, tasas de error, latencia).

#### 13.2.4. Descubrimiento de Dispositivos con Cisco Discovery Protocol (CDP) <a name="troubleshooting-cdp"></a>
**Cisco Discovery Protocol (CDP)** es un protocolo propietario de Cisco de Capa 2 que se utiliza para recopilar información sobre dispositivos Cisco directamente conectados que comparten el mismo enlace de datos.
*   **Funcionamiento:** Los dispositivos habilitados con CDP envían mensajes periódicos (anuncios CDP) a los dispositivos vecinos. Estos mensajes comparten información como:
    *   Identificador del dispositivo (nombre de host).
    *   Interfaz local en la que se recibió el anuncio CDP.
    *   Tiempo de espera (Holdtime).
    *   Capacidades del dispositivo (ej: Router, Switch).
    *   Plataforma de hardware (modelo del dispositivo).
    *   Identificador del puerto remoto.
    *   Dirección IP de gestión del vecino (si está configurada).
    *   Versión del IOS.
*   **Comandos IOS:**
    *   `show cdp neighbors`: Muestra un resumen de los vecinos CDP directamente conectados.
    *   `show cdp neighbors detail`: Proporciona información más detallada sobre cada vecino, incluyendo su dirección IP y versión de IOS.
*   **Utilidad:** CDP es invaluable para:
    *   Mapear una red o descubrir la topología cuando la documentación es escasa o inexistente.
    *   Verificar la conectividad de Capa 2 entre dispositivos Cisco.
    *   Tomar decisiones de diseño y solucionar problemas de conectividad.
*   CDP está habilitado por defecto en la mayoría de los dispositivos Cisco. Es independiente del medio y del protocolo de red.

---
### 13.3. Métodos Estructurados de Solución de Problemas <a name="troubleshooting-structured-methods"></a>
Para abordar los problemas de red de manera eficiente, se emplean varios métodos estructurados:

#### 13.3.1. Enfoque Ascendente (Bottom-Up) <a name="troubleshooting-bottom-up"></a>
*   **Proceso:** Se comienza en la Capa 1 (Física) del modelo OSI, verificando la conectividad física, cables, alimentación de dispositivos, y se avanza secuencialmente hacia las capas superiores (Enlace de Datos, Red, Transporte, Sesión, Presentación y Aplicación) hasta que se identifica la causa del problema.
*   **Cuándo Usarlo:** Especialmente útil cuando se sospecha un problema físico (hardware, cableado). La mayoría de los problemas de red residen en las capas inferiores, por lo que este método suele ser eficaz.
*   **Desventajas:** Puede ser un proceso largo y exhaustivo si el problema se encuentra en una capa superior, ya que requiere revisar cada dispositivo e interfaz en la ruta.

#### 13.3.2. Enfoque Descendente (Top-Down) <a name="troubleshooting-top-down"></a>
*   **Proceso:** Se comienza en la Capa 7 (Aplicación) del modelo OSI, verificando la aplicación del usuario final, y se desciende a través de las capas hasta encontrar la capa donde reside la falla.
*   **Cuándo Usarlo:** Útil si se sospecha un problema de software, de una aplicación específica, o si el alcance del problema parece limitado a una funcionalidad particular.
*   **Desventajas:** Si el problema es físico o de bajo nivel, se recorrerán muchas capas innecesariamente antes de llegar a la causa.

#### 13.3.3. Enfoque Divide y Vencerás <a name="troubleshooting-divide-conquer"></a>
*   **Proceso:** Se comienza la investigación en una capa intermedia del modelo OSI (comúnmente la Capa 3 - Red, por ejemplo, usando la utilidad `ping` para probar la conectividad IP).
*   Si la prueba en la capa media es exitosa, se asume que las capas inferiores están funcionando y el problema reside en las capas superiores. La investigación continúa hacia arriba.
*   Si la prueba falla, el problema probablemente esté en esa capa media o en las capas inferiores. La investigación continúa hacia abajo.
*   El proceso se repite, dividiendo el problema hasta aislar la capa (y luego el componente o configuración) defectuosa.
*   **Cuándo Usarlo:** A menudo utilizado por técnicos con experiencia que pueden hacer una suposición informada sobre dónde comenzar. Puede ser muy eficiente.

#### 13.3.4. Otros Enfoques Metodológicos <a name="troubleshooting-other-approaches"></a>
*   **Seguir la Ruta (Path Tracing):** Se traza la ruta que toman los paquetes desde el origen hasta el destino (ej: usando `traceroute` o `tracert`). Esto ayuda a identificar en qué salto (router) de la red se está produciendo un problema de conectividad o alta latencia. Generalmente complementa uno de los otros enfoques.
*   **Sustitución:** Se reemplaza un componente de hardware o software sospechoso (cable, NIC, switch, router, archivo de configuración) por uno que se sabe que funciona correctamente. Si el problema se resuelve, se ha identificado el componente defectuoso. Si el problema persiste, la causa está en otro lugar.
*   **Comparación:** Se comparan las configuraciones, versiones de software, estado del hardware u otras propiedades de un sistema o enlace que funciona correctamente con uno que no funciona. Las diferencias significativas pueden señalar la causa del problema.
*   **Suposición Educada (Conjetura Informada):** Un método menos estructurado que se basa en la experiencia y el conocimiento del técnico para hacer una suposición sobre la causa más probable del problema. Luego, se prueba esa hipótesis directamente.

#### 13.3.5. Pautas para Seleccionar un Método de Solución de Problemas <a name="troubleshooting-select-method-guidelines"></a>
La elección del método más eficaz depende del tipo de problema y la experiencia del técnico:
*   **Problemas orientados a software o aplicaciones:** A menudo se abordan mejor con un enfoque **Descendente**.
*   **Problemas orientados a hardware/cableado o problemas complejos/desconocidos:** El enfoque **Ascendente** suele ser una buena elección inicial.
*   **Nuevos problemas (para técnicos con experiencia) o problemas con síntomas claros en una capa intermedia:** El método de **Divide y Vencerás** puede ser eficiente.
*   **Problemas experimentados anteriormente:** Se puede aplicar directamente una solución conocida o un método que funcionó en el pasado, a menudo similar a "Divide y Vencerás" si se conoce el punto de partida probable.
La habilidad para solucionar problemas se desarrolla con la práctica y la experiencia.

#### 13.3.6. Aplicación de Modelos en Capas (OSI/TCP/IP) al Troubleshooting <a name="troubleshooting-layered-models"></a>
Los modelos de referencia OSI y TCP/IP son herramientas conceptuales valiosas para la solución de problemas, ya que ayudan a aislar el problema en una capa específica.
*   **Dispositivos y Capas Relevantes:**
    *   **Capa 1 (Física):** Cables, puertos, hubs, repetidores, NICs (aspecto físico).
    *   **Capa 2 (Enlace de Datos):** Switches estándar, NICs (direccionamiento MAC, tramas), puntos de acceso inalámbrico.
    *   **Capa 3 (Red):** Routers, switches multicapa (direccionamiento IP, enrutamiento).
    *   **Capa 4 (Transporte):** Routers y switches multicapa (para ACLs basadas en puertos TCP/UDP), firewalls, hosts finales (gestión de sesiones TCP/UDP).
    *   **Capas 5-7 (Sesión, Presentación, Aplicación):** Hosts finales (aplicaciones, formato de datos, gestión de diálogo).
*   Al identificar síntomas, se puede inferir en qué capa podría residir el problema y enfocar los esfuerzos de diagnóstico allí.

---
### 13.4. Diagnóstico de Problemas Comunes por Área <a name="troubleshooting-common-issues-area"></a>

#### 13.4.1. Problemas de Capa Física y Cableado <a name="troubleshooting-physical-cabling"></a>
Una gran proporción de los problemas de red está relacionada con la Capa Física.
*   **Síntomas Comunes:** Sin conectividad, conectividad intermitente, rendimiento muy bajo, errores de interfaz.
*   **Causas Comunes:**
    *   Dispositivo apagado o desenchufado.
    *   Cable de red suelto o desconectado.
    *   Tipo de cable incorrecto (ej: UTP de categoría inferior para Gigabit Ethernet, o directo donde se necesita cruzado si no hay Auto-MDIX).
    *   Cable de red defectuoso o dañado (cortes, conectores rotos, pines doblados).
    *   Punto de acceso inalámbrico (AP) defectuoso.
    *   Problemas de terminación de cables UTP (no seguir estándares T568A/B, pares destrenzados excesivamente, mal engarce del conector RJ-45).
    *   Exceder la longitud máxima del cable (ej: >100m para Ethernet UTP).
    *   Interferencia electromagnética (EMI) o de radiofrecuencia (RFI) severa.
*   **Pasos de Diagnóstico:**
    1.  **Verificar Alimentación:** Todos los dispositivos involucrados.
    2.  **Inspeccionar Indicadores LED:** En NICs, switches, routers. Una luz de enlace apagada o de color ámbar suele indicar un problema físico. Consultar la documentación del dispositivo.
    3.  **Inspección Visual:** Buscar cables desconectados, dañados, o conectados al puerto incorrecto.
    4.  **Reasentar Conexiones:** Desconectar y reconectar firmemente los cables.
    5.  **Probar con un Cable Conocido Bueno:** Sustituir el cable sospechoso.
    6.  **Probar con un Puerto Conocido Bueno:** Cambiar el cable a un puerto diferente en el switch o router.
    7.  **Usar un Probador de Cables (Cable Tester):** Para verificar la continuidad, cortocircuitos, pares cruzados o divididos.

#### 13.4.2. Problemas de Conexión Inalámbrica <a name="troubleshooting-wireless-issues"></a>
La naturaleza de las señales de RF hace que las WLANs sean susceptibles a problemas particulares.
*   **Síntomas Comunes:** Imposibilidad de conectar, desconexiones frecuentes, baja velocidad, señal débil.
*   **Causas Comunes:**
    *   **Incompatibilidad de Estándares 802.11:** Cliente y AP deben soportar un estándar común (ej: 802.11n, 802.11ac, 802.11ax). Un AP configurado solo para 802.11ac (5GHz) no será visible para un cliente solo 802.11g (2.4GHz).
    *   **Configuración del Canal:** Superposición de canales con otras WLANs cercanas o interferencia en el canal seleccionado. Es mejor usar canales no superpuestos (1, 6, 11 en la banda de 2.4 GHz en muchas regiones).
    *   **Intensidad de la Señal:** Demasiada distancia del AP, obstáculos físicos (paredes gruesas, metal) que atenúan la señal.
    *   **Interferencia de RF:** De dispositivos no Wi-Fi que operan en la misma banda (microondas, teléfonos inalámbricos, Bluetooth, monitores de bebé).
    *   **Sobrecarga del AP:** Demasiados clientes conectados al mismo AP compitiendo por el ancho de banda.
    *   **Errores de Autenticación/Asociación:**
        *   **SSID Incorrecto:** El nombre de la red (sensible a mayúsculas/minúsculas) debe coincidir exactamente. Si el SSID está oculto, debe ingresarse manualmente sin errores.
        *   **Clave de Seguridad Incorrecta:** La contraseña (WPA2/WPA3-Personal Pre-Shared Key) debe ser idéntica en el cliente y el AP.
        *   **Método de Seguridad/Encriptación Incompatible:** Cliente y AP deben usar métodos compatibles (ej: WPA2-AES).
*   **Pasos de Diagnóstico:**
    1.  Verificar que la Wi-Fi esté habilitada en el dispositivo cliente.
    2.  Verificar que el cliente esté intentando conectarse al SSID correcto.
    3.  Reingresar la clave de seguridad cuidadosamente.
    4.  Comprobar la intensidad de la señal. Acercarse al AP.
    5.  Reiniciar el cliente, el AP y el módem/router.
    6.  Verificar la configuración del AP (canal, modo de seguridad, lista de clientes MAC si se usa filtrado MAC).
    7.  Probar con otro dispositivo para ver si el problema es específico del cliente o del AP/red.
    8.  Buscar fuentes de interferencia.

#### 13.4.3. Problemas Comunes de Conectividad a Internet <a name="troubleshooting-internet-issues"></a>
Si la conectividad dentro de la LAN funciona, pero no hay acceso a Internet.
*   **Síntomas Comunes:** No se pueden cargar páginas web, las aplicaciones de Internet no funcionan, ping a sitios externos falla.
*   **Causas y Diagnóstico:**
    *   **Errores de Configuración IP del Cliente (DHCP):**
        *   Verificar la configuración IP del cliente (`ipconfig /all`, `ifconfig`, etc.).
        *   Asegurar que tiene una dirección IP válida para la subred, una máscara de subred correcta, la **dirección IP de la puerta de enlace predeterminada** (la IP de la interfaz LAN del router local) y **direcciones de servidor DNS**.
        *   Si los obtiene por DHCP, intentar `ipconfig /release` y `ipconfig /renew` (Windows) o reiniciar el servicio de cliente DHCP.
    *   **Problemas con la Puerta de Enlace Predeterminada (Router Local):**
        *   ¿Puede el cliente hacer ping a su puerta de enlace predeterminada? Si no, hay un problema de conectividad local entre el cliente y el router.
    *   **Problemas de Conexión del Router al ISP:**
        *   Acceder a la interfaz de administración del router. Verificar la página de estado WAN/Internet. ¿Tiene el router una dirección IP pública del ISP? ¿Está el enlace WAN activo?
        *   Verificar las conexiones físicas entre el router y el módem (DSL/Cable/Fibra), y los LEDs del módem. Reiniciar módem y router.
        *   Si la conexión ISP requiere credenciales (ej: PPPoE para DSL), verificar que estén correctas en la configuración del router.
        *   Intentar renovar la concesión de IP WAN del router si es una opción.
        *   Si todo parece correcto, contactar al ISP; el problema podría estar en su red.
    *   **Problemas de DNS:**
        *   Si se puede hacer ping a una IP pública externa (ej: `8.8.8.8`) pero no se pueden resolver nombres de dominio (ej: `ping www.google.com` falla por nombre), el problema es de DNS.
        *   Verificar las direcciones del servidor DNS configuradas en el cliente y en el router. Probar con servidores DNS públicos conocidos (ej: 8.8.8.8 de Google, 1.1.1.1 de Cloudflare).
    *   **Problemas de Firewall:**
        *   Si hay conectividad IP (ping a IPs externas funciona) pero ciertas aplicaciones o puertos no, un firewall (en el router, en el host, o un dispositivo de red dedicado) podría estar bloqueando el tráfico.
        *   Revisar las reglas del firewall y los registros para ver si se está denegando el tráfico.

---
### 13.5. Herramientas de Diagnóstico y Verificación de Red <a name="troubleshooting-tools"></a>
Varias herramientas son esenciales para el diagnóstico de problemas de red.

#### 13.5.1. Comandos de Verificación de Configuración de Red en Sistemas Operativos <a name="troubleshooting-os-commands"></a>
*   **Windows:**
    *   `ipconfig`: Muestra la configuración IP básica (IP, máscara, gateway).
    *   `ipconfig /all`: Muestra configuración IP detallada, incluyendo MAC, servidores DHCP, servidores DNS, tiempo de concesión.
    *   `ping <destino>`: Prueba conectividad ICMP a un host.
    *   `tracert <destino>`: Traza la ruta de saltos a un host.
    *   `netstat -r` o `route print`: Muestra la tabla de enrutamiento del host.
    *   `nslookup <nombre_dominio>`: Consulta a servidores DNS.
    *   GUI: Centro de redes y recursos compartidos, Detalles de conexión de red.
*   **Linux:**
    *   `ifconfig` (tradicional, puede estar obsoleto): Muestra/configura interfaces de red.
    *   `ip address show` (o `ip a`): Muestra información de direccionamiento de interfaces (moderno).
    *   `ip route show`: Muestra la tabla de enrutamiento.
    *   `ping <destino>`: Prueba conectividad ICMP.
    *   `traceroute <destino>`: Traza la ruta.
    *   `nslookup <nombre_dominio>` o `dig <nombre_dominio>`: Consulta DNS.
    *   `netstat -tulnp` o `ss -tulnp`: Muestra sockets en escucha y conexiones establecidas.
    *   `ncat` (o `nc`): Utilidad de red versátil para probar conectividad a puertos específicos.
    *   `speedtest-cli` (requiere instalación): Prueba de velocidad de Internet desde la línea de comandos.
*   **macOS:**
    *   Similar a Linux, ya que está basado en UNIX.
    *   `ifconfig`: Muestra/configura interfaces.
    *   `networksetup -listallnetworkservices`, `networksetup -getinfo <nombre_servicio_red>`: Comandos para ver configuración de red.
    *   `ping`, `traceroute`, `nslookup`, `dig`, `nc`.
    *   GUI: Preferencias de Red, Utilidad de Red (incluye Ping, Traceroute, etc.), Diagnósticos Inalámbricos.
*   **iOS/Android (Limitado sin apps de terceros):**
    *   **iOS:** Ajustes > Wi-Fi > (i) junto a la red conectada para ver IP, máscara, router, DNS.
    *   **Android:** Ajustes > Acerca del teléfono > Estado o similar para ver IP. Ajustes > Redes e Internet > Wi-Fi > red conectada para detalles.
    *   Existen numerosas aplicaciones de terceros para Android e iOS que proporcionan herramientas de diagnóstico de red más avanzadas (ping, traceroute, escáner de puertos, analizador Wi-Fi).

#### 13.5.2. Comandos `show` de Cisco IOS para Diagnóstico <a name="troubleshooting-cisco-show-commands"></a>
En dispositivos Cisco (routers, switches), los comandos `show` son fundamentales para el troubleshooting. Se ejecutan principalmente en modo EXEC de usuario o EXEC privilegiado.
*   El acceso a EXEC privilegiado (usando `enable`) a menudo es necesario para comandos `show` más detallados.
*   Cisco IOS ofrece ayuda sensible al contexto (escribiendo `?`) y completado de comandos (tecla `Tab`).
*   **Comandos `show` Comunes (ver secciones anteriores para detalles):**
    *   `show running-config`, `show startup-config`
    *   `show interfaces [tipo número]`, `show ip interface [tipo número]`, `show ip interface brief`
    *   `show arp` (en routers), `show mac address-table` (en switches)
    *   `show ip route`, `show ipv6 route`
    *   `show cdp neighbors [detail]`
    *   `show protocols`
    *   `show version`
    *   `show vlan brief` (en switches)

#### 13.5.3. Captura de Paquetes y Análisis de Protocolo (Wireshark) <a name="troubleshooting-wireshark"></a>
Los **analizadores de protocolo** (o "packet sniffers") capturan el tráfico que atraviesa una interfaz de red y permiten examinar el contenido de los paquetes/tramas.
*   **Wireshark:** Es la herramienta de análisis de protocolos de código abierto más popular y potente.
*   **Funcionamiento:**
    *   Captura tramas de la red en tiempo real (o abre archivos de captura).
    *   Decodifica las diversas capas de protocolo de cada trama (Ethernet, IP, TCP/UDP, protocolos de aplicación como HTTP, DNS).
    *   Presenta la información en un formato legible, mostrando los campos de cada encabezado.
*   **Utilidad en Troubleshooting:**
    *   Verificar si el tráfico esperado está llegando o saliendo de un dispositivo.
    *   Analizar errores de protocolo (ej: retransmisiones TCP, errores ICMP).
    *   Identificar problemas de rendimiento (ej: latencia, ventanas TCP pequeñas).
    *   Filtrar tráfico para enfocarse en conversaciones o protocolos específicos.
*   Requiere un buen entendimiento de los protocolos TCP/IP para interpretar la información correctamente.

#### 13.5.4. Medición del Rendimiento de la Red <a name="troubleshooting-performance-measurement"></a>
*   **Ancho de Banda vs. Rendimiento (Throughput):**
    *   **Ancho de Banda:** Capacidad teórica de un medio para transmitir datos (bits/segundo).
    *   **Rendimiento:** Medida real de bits por segundo transmitidos, usualmente menor que el ancho de banda debido a latencia, sobrecarga de protocolos, congestión.
*   **Herramientas para Medir Rendimiento:**
    *   **Pruebas de Velocidad de Internet en Línea:** Sitios web que miden la velocidad de carga/descarga entre tu dispositivo e Internet (servidores preseleccionados).
    *   **iPerf (iPerf3):** Herramienta de línea de comandos que mide el rendimiento TCP y UDP entre dos puntos (requiere un cliente iPerf y un servidor iPerf). Muestra la tasa de bits, transferencia e intervalo.

---
### 13.6. Soporte de Red y Gestión Avanzada en el Contexto del Troubleshooting <a name="troubleshooting-support-advanced"></a>

#### 13.6.1. El Rol de las Mesas de Ayuda (Help Desk) y Sistemas de Tickets <a name="troubleshooting-helpdesk-ticketing"></a>
En entornos organizacionales, la **mesa de ayuda (Help Desk)** es a menudo el primer punto de contacto para los usuarios que experimentan problemas de red o TI.
*   **Función:** Proporcionar asistencia técnica, diagnosticar problemas y, si es posible, resolverlos o escalarlos al personal adecuado.
*   **Sistemas de Emisión de Tickets:** Software especializado utilizado para:
    *   Registrar y rastrear las solicitudes de soporte (tiquetes de problemas).
    *   Asignar tiquetes a técnicos.
    *   Documentar todos los pasos tomados y la comunicación con el usuario.
    *   Gestionar el ciclo de vida de un problema, desde su informe hasta su resolución.
    *   Construir una base de conocimientos de problemas y soluciones pasadas.
    *   Asegurar que todas las solicitudes sean atendidas y gestionadas de manera oportuna.
*   **Proceso Típico de un Ticket:**
    1.  Usuario inicia la solicitud (portal online, email, teléfono, chat).
    2.  Técnico de la mesa de ayuda captura detalles y valida el problema.
    3.  Si es válido, se crea/actualiza un tiquete.
    4.  Técnico recopila información adicional.
    5.  Técnico analiza los datos.
    6.  Si puede resolverlo: resuelve, actualiza y cierra el tiquete.
    7.  Si no puede resolverlo: escala el tiquete a un técnico más experimentado o a un equipo especializado, asegurando que toda la documentación capturada sea clara y precisa.

#### 13.6.2. Técnicas de Interacción con Usuarios Finales (Preguntas, Escucha Activa) <a name="troubleshooting-user-interaction"></a>
La comunicación efectiva con los usuarios es clave para un buen soporte.
*   **Empatía y Profesionalismo:**
    *   Ser considerado y empático; los usuarios pueden estar frustrados.
    *   Nunca hablar mal, menospreciar o culpar al usuario.
    *   Usar lenguaje claro, evitando jerga técnica excesiva.
*   **Escucha Activa:**
    *   Permitir que el usuario explique completamente el problema sin interrupciones innecesarias.
    *   Usar pequeñas confirmaciones verbales ("Entiendo", "Sí") para mostrar que se está escuchando.
    *   Evitar pensar en la siguiente pregunta mientras el usuario habla.
    *   **Resumir:** Después de que el usuario termine, parafrasear el problema ("Déjeme ver si entendí correctamente...") para asegurar la comprensión mutua y demostrar que se ha escuchado.
*   **Técnicas de Cuestionamiento:**
    *   **Preguntas Abiertas:** Permiten al usuario explicar con sus propias palabras y obtener información general (ej: "¿Qué problemas está teniendo?", "¿Qué estaba haciendo cuando ocurrió?").
    *   **Preguntas Cerradas:** Requieren respuestas simples (sí/no, o un dato específico) y se usan para obtener hechos concretos (ej: "¿Puede reproducir el problema?", "¿Qué mensaje de error aparece?", "¿Está conectado a la red Wi-Fi X?").
    *   Hacer preguntas pertinentes basadas en la información ya proporcionada.
*   **Documentación:** Registrar cuidadosamente la información proporcionada por el usuario en el tiquete.

#### 13.6.3. Recopilación de Información para Tickets (Host y Dispositivos Cisco) <a name="troubleshooting-ticket-info-gathering"></a>
Para resolver eficazmente, el técnico de la mesa de ayuda necesita recopilar información específica sobre el entorno del usuario y los dispositivos involucrados.
*   **Información Relacionada con el Host del Usuario:**
    *   Fabricante del host, modelo, número de serie.
    *   Versión del sistema operativo y parches recientes.
    *   Entorno de red (cableado, inalámbrico, VPN).
    *   Configuración IP (`ipconfig`, `ifconfig`).
    *   Resultados de pruebas de conectividad básicas realizadas por el usuario o el técnico (`ping`, `tracert`).
    *   **Otras fuentes de información del host:**
        *   **Códigos de Sonido (Beep Codes):** Al arrancar, secuencias de sonidos pueden indicar fallos de hardware específicos (consultar documentación del fabricante del BIOS/placa base).
        *   **Visor de Eventos (Windows) / Registros del Sistema (Linux/macOS):** Pueden contener mensajes de error o advertencias relevantes.
        *   **Administrador de Dispositivos (Windows):** Verificar si hay dispositivos con errores o conflictos de controladores.
        *   **Administrador de Tareas (Windows) / Monitor de Actividad (macOS) / `top`/`htop` (Linux):** Para verificar el uso de CPU, memoria, disco y red que podrían indicar problemas de rendimiento o procesos problemáticos.
        *   **Herramientas de Diagnóstico del Sistema Operativo:** Muchos SOs incluyen utilidades para diagnosticar problemas de hardware o red.
*   **Información Relacionada con Dispositivos de Red Cisco:**
    *   Utilizar comandos `show` de la CLI de IOS (ver sección 13.5.2).
    *   Analizar archivos de registro (syslog) del dispositivo.
    *   Realizar capturas de paquetes (si es necesario y posible) en interfaces relevantes.

#### 13.6.4. Políticas de Seguridad y Procedimientos Operativos Estándar (SOP) <a name="troubleshooting-security-sops"></a>
Las organizaciones operan bajo políticas definidas que guían las acciones del personal de TI.
*   **Política de Seguridad:**
    *   Documento que establece los requisitos para proteger la tecnología y los activos de información.
    *   Cubre: identificación y autenticación de usuarios, políticas de contraseñas (longitud, complejidad, frecuencia de cambio), uso aceptable de la red, requisitos de acceso remoto, manejo de incidentes, mantenimiento de red.
    *   Es un documento dinámico que se adapta a nuevas amenazas y requisitos.
*   **Procedimientos Operativos Estándar (SOP):**
    *   Definen acciones paso a paso para tareas específicas, asegurando el cumplimiento de las políticas (ej: SOP para reemplazar un switch, instalar una aplicación, dar de alta/baja a un empleado).
*   **Directrices:**
    *   Proporcionan orientación en áreas donde no hay un SOP específico definido.
*   La mesa de ayuda y los técnicos de TI deben seguir estas políticas, SOPs y directrices al realizar troubleshooting y otras tareas.

#### 13.6.5. Solución de Problemas de Conectividad de Forma Remota <a name="troubleshooting-remote-access"></a>
Ayudar a usuarios remotos o acceder a dispositivos de red distantes a menudo requiere herramientas de acceso remoto. Estas permiten a los técnicos ver y controlar sistemas como si estuvieran físicamente presentes.
*   **Software de Escritorio Remoto (Acceso Gráfico):**
    *   Permite a los técnicos tomar control total o parcial del escritorio de un usuario para ver su pantalla, operar el mouse y el teclado, transferir archivos, ejecutar diagnósticos y aplicar configuraciones.
    *   **Acceso a Windows:**
        *   **Microsoft Remote Desktop (Conexión a Escritorio Remoto):**
            *   Integrado en versiones Pro y Enterprise de Windows (el sistema *anfitrión* o servidor debe tenerlo habilitado).
            *   El cliente puede conectarse desde otras PCs con Windows, macOS, iOS, Android.
            *   **Para habilitar en el PC anfitrión (Windows):** Generalmente en `Configuración > Sistema > Escritorio remoto`, o en `Propiedades del sistema > Acceso remoto`. Se deben seleccionar los usuarios autorizados.
            *   **Para conectar (desde el cliente):** Usar la aplicación "Conexión a Escritorio Remoto", ingresar la IP o nombre del host anfitrión y las credenciales.
        *   **Asistencia Remota de Windows (Windows Remote Assistance):**
            *   Una función de Windows que permite a un usuario solicitar ayuda y a un técnico (o amigo) conectarse para ver o controlar el escritorio.
            *   El usuario *inicia* la sesión y puede enviar una "invitación" (archivo o por correo electrónico) que puede incluir una contraseña. El técnico usa esta invitación para conectarse. El usuario debe aprobar la conexión y el control.
    *   **Acceso a macOS:**
        *   **Compartir Pantalla (Screen Sharing):** Es la función integrada en macOS para acceso remoto gráfico.
            *   **Para habilitar en el Mac anfitrión:** `Preferencias del Sistema > Compartir` y marcar la casilla "Compartir pantalla". Se pueden configurar permisos para usuarios específicos.
            *   Utiliza el protocolo **VNC (Virtual Network Computing)**.
            *   **Para conectar (desde otro Mac):** Se puede encontrar el Mac anfitrión en la barra lateral del Finder (si está en la misma red y la detección está habilitada) o usando "Ir > Conectarse al servidor..." e ingresando `vnc://<dirección_IP_o_nombre_del_host>`.
            *   **Para conectar (desde otros SOs, incluido Windows o Linux):** Se necesita un cliente VNC compatible (ej: RealVNC Viewer, TightVNC, TigerVNC).
    *   **Acceso a Linux (Entornos de Escritorio Gráfico):**
        *   El acceso remoto gráfico a escritorios Linux puede variar según la distribución y el entorno de escritorio (GNOME, KDE, XFCE, etc.).
        *   **VNC (Virtual Network Computing)** es un método común. Se necesita instalar un servidor VNC en la máquina Linux (ej: `TightVNC Server`, `TigerVNC Server`, `x11vnc`) y configurarlo. Luego, se puede acceder desde cualquier cliente VNC.
        *   Algunas distribuciones y entornos de escritorio pueden tener herramientas de compartición de escritorio integradas (ej: GNOME tiene "Compartición de escritorio" que también suele usar VNC).
        *   **Xrdp:** Es una implementación de código abierto del servidor RDP de Microsoft para Linux. Permite a los clientes RDP (como el de Windows) conectarse a un escritorio Linux.
    *   **Aplicaciones de Terceros (Multiplataforma):**
        *   Estas herramientas simplifican el acceso remoto entre diferentes sistemas operativos y a menudo manejan mejor las configuraciones de red como NAT y firewalls.
        *   **TeamViewer:** Muy popular, permite acceso desatendido (con configuración previa) o sesiones bajo demanda con ID y contraseña. Funciona en Windows, macOS, Linux, iOS, Android.
        *   **Zoho Assist:** Orientado a soporte remoto y acceso desatendido, con funciones de chat, transferencia de archivos, etc. Multiplataforma.
        *   **AnyDesk:** Similar a TeamViewer, enfocado en velocidad y baja latencia. Multiplataforma.
        *   **Google Remote Desktop:** Extensión de Chrome que permite acceso remoto, funciona donde Chrome se ejecute.
    *   **Consideraciones de Seguridad para Acceso Gráfico Remoto:**
        *   Usar contraseñas fuertes y únicas para las cuentas de usuario y para las herramientas de acceso remoto.
        *   Habilitar la autenticación de dos factores (2FA/MFA) siempre que la aplicación o el servicio lo soporten.
        *   Mantener el software del sistema operativo y de acceso remoto actualizado.
        *   Deshabilitar el acceso remoto cuando no se necesite activamente.
        *   Educar a los usuarios para que solo permitan el acceso a técnicos de soporte autorizados y conocidos, y desconfiar de solicitudes no solicitadas (para evitar ingeniería social).
        *   Configurar firewalls para permitir conexiones remotas solo desde IPs o redes de confianza si es posible.

    *   **Acceso Remoto a la CLI (Interfaz de Línea de Comandos de dispositivos de red o servidores):**
        *   **SSH (Secure Shell - Puerto 22 TCP):** Es el método **estándar, seguro y recomendado** para acceso remoto a la línea de comandos en la mayoría de los sistemas (dispositivos de red Cisco, servidores Linux, macOS, e incluso Windows con OpenSSH Server).
            *   Proporciona autenticación robusta (contraseñas o claves públicas/privadas) y cifrado de toda la sesión.
            *   **Servidor SSH:** Debe estar habilitado y configurado en el dispositivo/servidor destino.
                *   En Linux/macOS, el servidor OpenSSH es común.
                *   En Windows, se puede instalar OpenSSH Server como una característica opcional.
                *   En dispositivos Cisco, se configura específicamente el acceso SSH.
            *   **Clientes SSH:**
                *   Windows: PuTTY, Tera Term, cliente OpenSSH integrado en PowerShell/Símbolo del sistema (versiones recientes de Windows 10/11).
                *   Linux/macOS: Comando `ssh` integrado en la terminal.
        *   **Telnet (Puerto 23 TCP):** Protocolo antiguo para emulación de terminal basada en texto. **Inseguro**, ya que toda la comunicación (incluidas credenciales) se envía en texto plano. Debe evitarse si SSH está disponible.

#### 13.6.6. Redes Privadas Virtuales (VPN) y su Relevancia en el Soporte Remoto <a name="troubleshooting-vpns"></a>
Una VPN crea una conexión segura ("túnel") a través de una red no segura (como Internet) para acceder a una red privada.
*   **Usos Comunes:**
    *   **Acceso Remoto de Usuarios:** Empleados conectándose a la red corporativa desde casa o mientras viajan. Requiere software cliente VPN en el dispositivo del usuario.
    *   **Sitio a Sitio:** Conecta redes de diferentes ubicaciones de una organización (ej: oficina central con sucursales) de forma segura a través de Internet. Las puertas de enlace VPN (routers/firewalls) en cada sitio establecen el túnel.
*   **Relevancia para el Soporte:**
    *   Los técnicos pueden usar VPNs para acceder de forma segura a los recursos de la red interna de un cliente o de su propia organización para realizar troubleshooting.
    *   Si un usuario remoto tiene problemas para conectarse a la VPN, esto se convierte en un problema de troubleshooting en sí mismo.
*   Ejemplos de clientes VPN: Cisco AnyConnect. Windows y macOS tienen soporte VPN integrado.

#### 13.6.7. Introducción a los Sistemas de Gestión de Red (NMS) <a name="troubleshooting-nms"></a>
Los NMS son plataformas de software utilizadas para configurar, monitorear y administrar el rendimiento de una red.
*   **Funciones:**
    *   Recopilar datos de dispositivos de red (switches, routers, APs, servidores, clientes) mediante protocolos como **SNMP (Simple Network Management Protocol)** y **RMON (Remote Network Monitoring)**.
    *   Proporcionar una vista centralizada del estado de la red.
    *   Identificar proactivamente problemas de rendimiento.
    *   Monitorear la seguridad y la segmentación.
    *   Generar alertas y notificaciones.
    *   Facilitar la configuración y gestión de dispositivos.
    *   Utilizar análisis avanzados y aprendizaje automático para optimizar el rendimiento.
*   **Modelos de Implementación:**
    *   **Basado en Dispositivo:** Software NMS instalado en un servidor dentro de la red local.
    *   **Basado en la Nube (SaaS):** Plataforma NMS alojada por un proveedor y accesible a través de Internet (ej: Cisco Meraki Dashboard).

#### 13.6.8. Introducción a Scripts, Automatización y Programabilidad en Redes <a name="troubleshooting-automation"></a>
Para redes grandes y complejas, la gestión manual es ineficiente y propensa a errores.
*   **Automatización de Red:** Proceso de automatizar la configuración, administración, pruebas, implementación y operación de dispositivos de red físicos y virtuales.
*   **Beneficios:** Mejora la disponibilidad del servicio, aumenta la eficiencia operativa, reduce errores humanos, disminuye gastos operativos.
*   **Cómo Funciona:**
    *   El software (controladores de red, plataformas de orquestación) puede interactuar con los dispositivos de red para monitorear y controlar su funcionamiento.
    *   Se utilizan **scripts de automatización** (ej: escritos en Python, Ansible) para programar la red para que se comporte de maneras específicas según las condiciones o para realizar tareas repetitivas en múltiples dispositivos simultáneamente.
*   La programabilidad de la red permite una gestión más ágil y adaptativa.

</details>

## 14. Fundamentos de Ciberseguridad: Amenazas, Vulnerabilidades y Ataques <a name="cybersecurity-fundamentals"></a>

<details>
  <summary>Ver/Ocultar Fundamentos de Ciberseguridad</summary>

A medida que las redes y los sistemas de información se vuelven más integrales para las operaciones diarias, también aumenta la exposición a diversas amenazas cibernéticas. Comprender estas amenazas, las vulnerabilidades que explotan y los tipos de ataques que se pueden lanzar es fundamental para proteger los activos de información.

### 14.1. Comprensión de los Dominios y Tipos de Amenazas Cibernéticas <a name="threat-domains-types"></a>

#### 14.1.1. Dominios de Amenazas <a name="threat-domains"></a>
Un **dominio de amenazas** es un área de control, autoridad o protección que los atacantes pueden aprovechar para obtener acceso no autorizado o causar daño a un sistema. Identificar estos dominios es el primer paso para asegurar una organización.
Ejemplos de cómo los atacantes pueden explotar dominios de amenazas incluyen:
*   Acceso físico directo a sistemas y redes.
*   Explotación de redes inalámbricas que se extienden más allá de los límites físicos de una organización.
*   Ataques a través de Bluetooth o dispositivos de Comunicación de Campo Cercano (NFC).
*   Distribución de malware mediante tipos de adjuntos maliciosos en correos electrónicos o descargas.
*   Compromiso de elementos menos seguros dentro de la cadena de suministro de una organización.
*   Explotación de las cuentas de redes sociales de una organización o sus empleados.
*   Uso de medios extraíbles infectados, como unidades flash USB.
*   Ataques a aplicaciones y datos alojados en la nube.

#### 14.1.2. Categorías de Amenazas Cibernéticas <a name="cyber-threat-categories"></a>
Las ciberamenazas se pueden clasificar para ayudar a las organizaciones a evaluar su probabilidad e impacto potencial, permitiendo priorizar los esfuerzos de seguridad:
*   **Ataques de Software:** Involucran software malicioso o la explotación de vulnerabilidades de software.
    *   Ejemplos: Denegación de Servicio (DoS), virus informáticos, ransomware.
*   **Errores de Software:** Fallos o debilidades no intencionales en el código.
    *   Ejemplos: Un bug que causa una caída de la aplicación, vulnerabilidades de Cross-Site Scripting (XSS), fallos en servidores de archivos compartidos.
*   **Sabotaje:** Acciones deliberadas para dañar o interrumpir sistemas.
    *   Ejemplos: Un intruso que compromete una base de datos, la desfiguración (defacement) del sitio web de una organización.
*   **Error Humano:** Acciones no intencionales que comprometen la seguridad.
    *   Ejemplos: Errores de entrada de datos, mala configuración de un firewall.
*   **Robo:** Sustracción física de activos.
    *   Ejemplos: Robo de computadoras portátiles o equipos de una sala desbloqueada.
*   **Fallas de Hardware:** Mal funcionamiento de componentes físicos.
    *   Ejemplos: Falla de un disco duro.
*   **Interrupción de Servicios:** Pérdida de servicios esenciales.
    *   Ejemplos: Cortes de energía eléctrica, daños por agua.
*   **Desastres Naturales:** Eventos ambientales que afectan la infraestructura.
    *   Ejemplos: Huracanes, tornados, terremotos, inundaciones, incendios.

### 14.2. Origen de las Amenazas: Internas y Externas <a name="threat-origins"></a>
Las amenazas pueden originarse tanto desde dentro como desde fuera de una organización, buscando acceder a información confidencial valiosa.

#### 14.2.1. Amenazas Internas <a name="internal-threats"></a>
Generalmente son llevadas a cabo por:
*   **Empleados actuales o anteriores:** Pueden manipular datos accidental o intencionalmente, o comprometer sistemas.
*   **Personal contratado y socios de confianza:** Individuos con acceso legítimo que abusan de sus privilegios o son comprometidos.
Las acciones pueden incluir conectar medios infectados, acceder a correos electrónicos o sitios web maliciosos, o exfiltrar datos.

#### 14.2.2. Amenazas Externas <a name="external-threats"></a>
Provienen de individuos o grupos fuera de la organización:
*   **Aficionados (Script Kiddies):** Atacantes con habilidades limitadas que utilizan herramientas creadas por otros.
*   **Hackers:**
    *   **Sombreros Negros (Black Hats):** Actúan con intenciones maliciosas (robo, destrucción).
    *   **Sombreros Grises (Grey Hats):** Pueden violar leyes o estándares éticos, pero no necesariamente con la malicia de un sombrero negro. A veces exponen vulnerabilidades.
    *   **Sombreros Blancos (White Hats):** Hackers éticos que trabajan para proteger sistemas, a menudo realizando pruebas de penetración con permiso.
*   **Ciberdelincuentes y Atacantes Organizados:**
    *   **Hacktivistas:** Atacan por razones políticas o sociales.
    *   **Terroristas:** Usan el ciberespacio para promover sus agendas o causar disrupción.
    *   **Patrocinados por Estados-Nación:** Grupos altamente sofisticados y bien financiados que actúan en nombre de gobiernos para espionaje, sabotaje o guerra cibernética.
Estos actores pueden explotar vulnerabilidades técnicas o usar técnicas de ingeniería social.

### 14.3. Vulnerabilidades del Usuario y Amenazas a Dispositivos <a name="user-device-vulnerabilities"></a>

#### 14.3.1. El Dominio de Usuario como Eslabón Débil <a name="user-domain-weakness"></a>
El dominio de usuario incluye a cualquier persona con acceso al sistema de información de una organización (empleados, clientes, socios). Los usuarios son a menudo el eslabón más débil en la seguridad debido a:
*   **Falta de Conocimiento sobre Seguridad:** Desconocimiento de datos confidenciales, políticas, procedimientos y contramedidas de seguridad.
*   **Políticas de Seguridad Mal Aplicadas o Ignoradas:** Incumplimiento de las políticas establecidas por la organización.
*   **Robo de Datos:** Exfiltración intencional o no intencional de información sensible.
*   **Descargas No Autorizadas:** Descargar correos, fotos, música, juegos, aplicaciones o videos de fuentes no confiables puede introducir malware. El uso de medios extraíbles no autorizados (USB, discos duros externos) también es un riesgo.
*   **Uso de Redes Privadas Virtuales (VPN) No Autorizadas:** Aunque las VPNs legítimas son para seguridad, una VPN no autorizada podría usarse para ocultar la exfiltración de datos, ya que el cifrado puede impedir el monitoreo por parte de los administradores.
*   **Acceso a Sitios Web No Autorizados o Maliciosos:** Estos sitios pueden solicitar la descarga de scripts o complementos que contienen código malicioso, adware, o intentar robar credenciales.
*   **Destrucción de Sistemas, Aplicaciones o Datos:** Accidental o deliberada (sabotaje por empleados descontentos, competidores, activistas).

*Ninguna solución técnica hace los sistemas más seguros que los comportamientos y procesos de las personas que los usan.*

#### 14.3.2. Amenazas Específicas a los Dispositivos <a name="device-threats"></a>
*   **Acceso Físico No Autorizado:** Dispositivos desatendidos y encendidos son vulnerables.
*   **Descarga de Contenido Malicioso:** Archivos de fuentes no confiables.
*   **Explotación de Vulnerabilidades de Software:** Los ciberdelincuentes buscan y explotan fallos en el SO y aplicaciones instaladas.
*   **Malware Nuevo y Emergente:** Virus, gusanos, troyanos, etc., se descubren diariamente.
*   **Uso de Medios Extraíbles Comprometidos:** Unidades USB, CD/DVD pueden introducir malware.
*   **Violación de Políticas de Dispositivos:** Las políticas existen para proteger la infraestructura.
*   **Hardware o Software Desactualizado:** Los sistemas sin parches son más vulnerables.

### 14.4. Amenazas a la Infraestructura de Red <a name="network-infrastructure-threats"></a>

#### 14.4.1. Amenazas a la Red de Área Local (LAN) <a name="lan-threats"></a>
Dado que la LAN proporciona acceso a recursos críticos, su seguridad es fundamental.
*   Acceso físico no autorizado a centros de datos, salas de servidores y armarios de cableado.
*   Acceso lógico no autorizado a sistemas, aplicaciones y datos dentro de la LAN.
*   Vulnerabilidades y falta de parches en el sistema operativo de red o software de los dispositivos de red.
*   Puntos de acceso inalámbricos no autorizados (Rogue APs) que permiten el acceso a la red.
*   Ataques a los datos en tránsito dentro de la LAN (ej: sniffing si no hay cifrado).
*   Complejidad en la gestión y aplicación de parches debido a la heterogeneidad de hardware o sistemas operativos en los servidores LAN.
*   Escaneo de puertos y sondeo de redes no autorizados para descubrir servicios y vulnerabilidades.
*   Firewalls internos o perimetrales mal configurados.

#### 14.4.2. Amenazas a la Nube Privada <a name="private-cloud-threats"></a>
Una nube privada ofrece recursos de TI a una sola organización, pero aún presenta riesgos:
*   Escaneo de puertos y sondeo de redes no autorizados contra los recursos en la nube.
*   Acceso no autorizado a los recursos de la nube.
*   Vulnerabilidades en el software del sistema operativo de los dispositivos de red virtualizados, firewalls virtuales o routers virtuales.
*   Errores de configuración de routers virtuales, firewalls virtuales o dispositivos de red en la nube.
*   Usuarios remotos (legítimos o comprometidos) accediendo a la infraestructura de la organización a través de la nube y descargando datos confidenciales.

#### 14.4.3. Amenazas a la Nube Pública <a name="public-cloud-threats"></a>
La nube pública implica servicios de computación alojados por un proveedor y compartidos entre múltiples organizaciones (multitenancy). Los modelos comunes son:
*   **Software como Servicio (SaaS):** Aplicaciones accedidas a través de la red (ej: Office 365, Google Workspace, Salesforce). Las amenazas pueden incluir compromiso de cuentas, exfiltración de datos, indisponibilidad del servicio.
*   **Plataforma como Servicio (PaaS):** Plataforma para desarrollar, ejecutar y gestionar aplicaciones sin gestionar la infraestructura subyacente (ej: AWS Elastic Beanstalk, Heroku). Amenazas: configuraciones inseguras de la plataforma, vulnerabilidades en el código del cliente.
*   **Infraestructura como Servicio (IaaS):** Recursos de computación virtualizados (servidores, almacenamiento, redes) que el cliente gestiona (ej: AWS EC2, Azure VMs). Amenazas: máquinas virtuales comprometidas, configuraciones de red inseguras, gestión de parches deficiente por parte del cliente.
Las amenazas generales a los datos y aplicaciones se aplican también a los entornos de nube pública, con la complejidad adicional de la responsabilidad compartida entre el proveedor y el cliente.

#### 14.4.4. Amenazas a las Aplicaciones <a name="application-threats"></a>
El dominio de aplicaciones incluye todos los sistemas, aplicaciones y datos críticos.
*   Acceso no autorizado a centros de datos, salas de servidores o sistemas donde residen las aplicaciones.
*   Tiempo de inactividad del servidor debido a mantenimiento, fallos de hardware o ataques.
*   Vulnerabilidades en el sistema operativo de red o en el software base sobre el que corren las aplicaciones.
*   Pérdida de datos debido a fallos, errores o ataques.
*   Vulnerabilidades en el desarrollo de aplicaciones web o cliente/servidor (ej: las discutidas en la sección de ataques a aplicaciones).

---
### 14.5. Tipos Comunes de Malware <a name="common-malware-types"></a>
El **malware** (software malicioso) es cualquier código diseñado para robar datos, eludir controles de acceso, o causar daño/comprometer un sistema.

*   **Virus:** Código malicioso que se adjunta a programas ejecutables. Requiere la ejecución del programa anfitrión para activarse y replicarse, a menudo infectando otros archivos.
*   **Gusanos (Worms):** Malware auto-replicante que explota vulnerabilidades para propagarse a través de redes de forma independiente, sin necesidad de intervención humana o un archivo anfitrión. Pueden consumir ancho de banda o instalar otro malware.
*   **Caballos de Troya (Trojans):** Malware disfrazado de software legítimo o útil. Engaña al usuario para que lo instale. Una vez ejecutado, puede realizar acciones maliciosas (robar datos, instalar backdoors) sin el conocimiento del usuario. No se auto-replica.
*   **Puertas Traseras (Backdoors):**
    *   Programas o modificaciones en el sistema que permiten el acceso no autorizado, eludiendo los procedimientos de autenticación normales.
    *   A menudo instaladas por otro malware (como troyanos) o explotando vulnerabilidades.
    *   Pueden ser instaladas mediante Herramientas de Administración Remota (RAT) maliciosas.
    *   Permiten a los atacantes mantener el acceso futuro al sistema, incluso si la vulnerabilidad original utilizada para el acceso inicial es parcheada.
    *   Ejemplos históricos: Netbus, Back Orifice.
*   **Rootkits:**
    *   Malware diseñado para modificar el sistema operativo a un nivel profundo (a menudo a nivel de kernel) para crear una puerta trasera y ocultar su presencia y la de otro malware.
    *   Aprovechan vulnerabilidades para obtener acceso con privilegios elevados (escalada de privilegios).
    *   Pueden modificar archivos del sistema y herramientas de monitoreo y análisis forense, lo que los hace muy difíciles de detectar y eliminar.
    *   A menudo, un sistema infectado con un rootkit necesita ser completamente borrado y reinstalado.
*   **Bombas Lógicas:**
    *   Código malicioso que permanece inactivo hasta que se cumple una condición específica o "disparador" (trigger), como una fecha/hora específica, la ejecución de un programa, o una entrada en una base de datos.
    *   Una vez activada, ejecuta su carga útil maliciosa (ej: borrar archivos, corromper datos, dañar hardware sobrecalentando componentes como ventiladores, CPU, discos).
*   **Ransomware:**
    *   Malware que cifra los archivos del sistema de la víctima o bloquea el acceso al sistema, y luego exige un pago (rescate), generalmente en criptomonedas, para restaurar el acceso.
    *   A menudo se propaga a través de correos electrónicos de phishing con adjuntos maliciosos, sitios web comprometidos o explotando vulnerabilidades de software.
    *   Pagar el rescate no garantiza la recuperación de los datos.
*   **Spyware:** Recopila información sobre el usuario y sus actividades sin su consentimiento (historial de navegación, pulsaciones de teclas, credenciales).
*   **Adware:** Muestra publicidad no deseada, a menudo en pop-ups o redirigiendo el navegador.
*   **Keyloggers (Registradores de Teclado):**
    *   Software o hardware que registra cada pulsación de tecla realizada en el teclado de una computadora.
    *   El archivo de registro puede revelar nombres de usuario, contraseñas, números de tarjeta de crédito, mensajes, etc.
    *   Los keyloggers de software envían los registros al atacante.
    *   Muchas aplicaciones antispyware pueden detectarlos.

---
### 14.6. Ingeniería Social y Tácticas de Engaño <a name="social-engineering-deception"></a>
La **ingeniería social** es una estrategia no técnica que manipula la psicología humana para engañar a las personas para que realicen acciones riesgosas o divulguen información confidencial.

#### 14.6.1. Tipos de Ataques de Ingeniería Social <a name="social-engineering-attack-types"></a>
*   **Pretexto (Pretexting):** El atacante inventa un escenario (un pretexto) para obtener información privilegiada. Mienten sobre quiénes son o por qué necesitan la información (ej: "Soy de soporte técnico y necesito su contraseña para verificar su cuenta").
*   **Suplantación de Identidad (Phishing):**
    *   Envío masivo de correos electrónicos o mensajes fraudulentos que parecen provenir de fuentes legítimas (bancos, empresas conocidas, servicios gubernamentales).
    *   El objetivo es engañar al destinatario para que haga clic en un enlace malicioso, descargue un adjunto infectado, o revele información personal (credenciales, números de tarjeta de crédito).
*   **Spear Phishing (Suplantación de Identidad Focalizada):** Un ataque de phishing altamente dirigido y personalizado contra un individuo u organización específica. El atacante investiga al objetivo para que el mensaje sea más creíble.
*   **Whaling:** Un tipo de spear phishing dirigido específicamente a ejecutivos de alto nivel o personalidades importantes dentro de una organización.
*   **Vishing (Voice Phishing):** Phishing realizado a través de llamadas telefónicas. Los atacantes pueden usar VoIP para falsificar el identificador de llamadas o usar mensajes grabados.
*   **SMiShing (SMS Phishing):** Phishing realizado a través de mensajes de texto (SMS). Los mensajes suelen contener enlaces a sitios web maliciosos o solicitar una llamada a un número fraudulento.
*   **Fraude de Identidad (Impersonation):** El acto general de pretender ser otra persona para engañar. Puede ser en persona, por teléfono o en línea.
*   **Algo por Algo (Quid Pro Quo):** El atacante ofrece algo (un supuesto servicio, un regalo) a cambio de información o una acción (ej: "Te ayudo a arreglar tu PC si me das acceso remoto").
*   **Espiar por Encima del Hombro (Shoulder Surfing):** Observar discretamente a alguien mientras introduce información confidencial (PINs, contraseñas, números de tarjeta) en un teclado, pantalla o cajero automático. Puede hacerse de cerca o a distancia con binoculares o cámaras.
*   **Hurgar en la Basura (Dumpster Diving):** Revisar la basura de un objetivo (papelera física o digital) en busca de documentos, notas, discos duros desechados, etc., que contengan información sensible.
*   **Piggybacking / Tailgating:** Un atacante sigue de cerca a una persona autorizada para ingresar a un área física segura o restringida sin presentar sus propias credenciales.
*   **Engaños (Hoaxes):** Difundir información falsa o alarmante (ej: alertas de virus inexistentes) con la intención de engañar a las personas para que realicen acciones perjudiciales o simplemente para causar confusión y miedo.

#### 14.6.2. Tácticas Psicológicas Utilizadas en Ingeniería Social <a name="social-engineering-tactics"></a>
Los atacantes explotan tendencias del comportamiento humano:
*   **Autoridad:** La gente tiende a obedecer a figuras que perciben como de autoridad (ej: un correo que parece ser del CEO).
*   **Intimidación:** Usar amenazas o presión para forzar a la víctima a actuar (ej: "Pague esta factura falsa o su servicio será cortado").
*   **Consenso / Prueba Social:** Hacer que la víctima crea que otros ya están haciendo lo que se les pide o que es una acción común/aceptada.
*   **Escasez:** Crear la impresión de que una oferta o producto es limitado para incitar a una acción impulsiva.
*   **Urgencia:** Similar a la escasez, imponer un límite de tiempo para presionar a la víctima a actuar rápidamente sin pensar.
*   **Familiaridad / Simpatía:** Establecer una relación o afinidad con la víctima para que baje la guardia. Pueden hacerse pasar por un amigo o colega.
*   **Confianza:** Construir confianza gradualmente, a menudo ofreciendo ayuda o información "valiosa", para luego explotar esa confianza.

#### 14.6.3. Otros Métodos de Engaño <a name="other-deception-methods"></a>
*   **Estafa de Facturas (Invoice Scams):** Enviar facturas falsas con la esperanza de que se paguen o para robar credenciales a través de un portal de pago falso.
*   **Ataque de Pozo de Agua (Watering Hole Attack):** Observar los sitios web que un grupo objetivo frecuenta, comprometer uno o más de esos sitios e infectarlos con malware. Cuando los miembros del grupo visitan el sitio, se infectan.
*   **Error Tipográfico (Typosquatting) / Secuestro de URL:** Registrar nombres de dominio que son errores tipográficos comunes de sitios web populares (ej: "gogle.com" en lugar de "google.com"). Estos sitios falsos pueden parecer legítimos y usarse para distribuir malware o robar credenciales.
*   **Anteponer (Prepending):** Modificar encabezados de correo electrónico para eliminar o alterar indicadores de que un correo proviene de una fuente externa, haciéndolo parecer interno y más confiable.
*   **Campañas de Influencia:** Esfuerzos coordinados (a menudo en ciberguerras o desinformación) que combinan múltiples métodos como noticias falsas, propaganda y manipulación de redes sociales para influir en la opinión o el comportamiento.

#### 14.6.4. Defensa Contra el Engaño y la Ingeniería Social <a name="deception-defense"></a>
*   **Concienciación y Formación:** Educar a los empleados y usuarios sobre las tácticas de ingeniería social y cómo reconocerlas.
*   **Políticas Claras:** Establecer políticas de seguridad sobre el manejo de información confidencial, verificación de identidades y reporte de incidentes.
*   **Verificación:** Nunca revelar información sensible o credenciales por teléfono, correo electrónico o chat sin verificar independientemente la identidad del solicitante a través de un canal conocido y confiable.
*   **Escepticismo:** Desconfiar de correos electrónicos, mensajes o llamadas no solicitadas, especialmente si piden información personal, crean urgencia o parecen demasiado buenos para ser verdad.
*   **Cuidado con Enlaces y Adjuntos:** No hacer clic en enlaces ni abrir adjuntos de fuentes desconocidas o no verificadas. Pasar el cursor sobre los enlaces para ver la URL real.
*   **Descargas Seguras:** Evitar descargas de sitios no confiables o no iniciadas por el usuario.
*   **Resistir la Presión:** No ceder ante tácticas de intimidación o urgencia.
*   **Destrucción Segura de Documentos:** Triturar documentos físicos sensibles. Borrar de forma segura los datos de medios digitales antes de desecharlos.

---
### 14.7. Ataques Comunes a Nivel de Red y Sistema <a name="network-system-attacks"></a>

#### 14.7.1. Ataques de Denegación de Servicio (DoS y DDoS) <a name="dos-ddos-attacks"></a>
El objetivo es hacer que un servicio de red, host o aplicación no esté disponible para sus usuarios legítimos.
*   **Denegación de Servicio (DoS):**
    *   **Cantidad Abrumadora de Tráfico:** Enviar una gran cantidad de datos o solicitudes a un objetivo a una velocidad que no puede procesar, agotando sus recursos (ancho de banda, CPU, memoria) y provocando lentitud o caídas.
    *   **Paquetes Mal Formateados:** Enviar paquetes con errores o formateados de manera que el receptor no pueda manejarlos, causando que el dispositivo receptor funcione lentamente o se bloquee.
*   **Denegación de Servicio Distribuido (DDoS):** Un ataque DoS lanzado desde múltiples computadoras comprometidas (una botnet) simultáneamente, lo que lo hace más potente y difícil de mitigar.
*   **Defensa:** Configurar firewalls para descartar tráfico malicioso, usar sistemas de prevención de intrusiones (IPS), distribuir cargas de trabajo, y a veces, bloquear paquetes ICMP externos en el perímetro (aunque ICMP es necesario para algunas funciones de red).

#### 14.7.2. Ataques al Sistema de Nombres de Dominio (DNS) <a name="dns-attacks"></a>
El DNS traduce nombres de dominio legibles por humanos a direcciones IP. Su compromiso puede tener graves consecuencias.
*   **Daño a la Reputación del Dominio:** Los atacantes pueden crear dominios falsos similares a los legítimos o difundir información falsa para dañar la reputación de una organización. La reputación del dominio también se usa para clasificar correos como spam.
*   **Falsificación de DNS (Envenenamiento de Caché DNS - DNS Spoofing / Cache Poisoning):**
    *   Se introducen datos de resolución DNS falsos en la caché de un servidor DNS recursivo o en la caché local de un host.
    *   Cuando un usuario intenta acceder a un sitio legítimo, es redirigido a la dirección IP de un servidor malicioso controlado por el atacante (ej: un sitio de phishing).
    *   Explota debilidades en el software de caché de DNS o intercepta consultas DNS.
*   **Secuestro de Dominio (Domain Hijacking):**
    *   El atacante obtiene el control de la información de registro de un nombre de dominio legítimo (ej: cambiando los servidores de nombres autorizados o la información de contacto del administrador del dominio).
    *   Esto se puede lograr mediante ingeniería social, pirateando la cuenta de correo electrónico del administrador del dominio, o comprometiendo al registrador de dominios.
    *   Permite al atacante redirigir todo el tráfico del dominio.
*   **Redirección de URL Maliciosa:** Aunque la redirección de URL es una función web legítima, los atacantes pueden explotarla para redirigir a los usuarios desde un sitio legítimo (o un enlace en un correo) a un sitio malicioso sin que se den cuenta fácilmente.

#### 14.7.3. Ataques de Capa 2 (Enlace de Datos) <a name="layer2-attacks"></a>
Estos ataques explotan vulnerabilidades en los protocolos y mecanismos de la capa de enlace de datos, típicamente dentro de una LAN.
*   **Falsificación de Identidad (Spoofing) en Capa 2:**
    *   **MAC Spoofing:** Un atacante cambia la dirección MAC de su NIC para que coincida con la de un dispositivo autorizado en la red. Esto puede permitirle eludir filtros MAC o hacerse pasar por otro dispositivo.
    *   **ARP Spoofing / ARP Cache Poisoning:**
        *   El atacante envía mensajes ARP falsificados a través de la LAN.
        *   Estos mensajes asocian la dirección MAC del atacante con la dirección IP de un dispositivo legítimo (como la puerta de enlace predeterminada u otro host).
        *   Los dispositivos víctimas actualizan sus cachés ARP con esta información incorrecta.
        *   Como resultado, el tráfico destinado al dispositivo suplantado se envía al atacante, permitiendo ataques Man-in-the-Middle (MitM), robo de datos o DoS.
*   **Saturación de Direcciones MAC (MAC Flooding):**
    *   Un atacante inunda un switch de red con una gran cantidad de tramas Ethernet, cada una con una dirección MAC de origen diferente y falsa.
    *   El objetivo es llenar la tabla de direcciones MAC (tabla CAM) del switch.
    *   Cuando la tabla CAM está llena, el switch puede comenzar a operar en modo "fail-open", comportándose como un hub y reenviando todas las tramas por todos los puertos (excepto el de origen).
    *   Esto permite al atacante capturar todo el tráfico que pasa por el switch.

#### 14.7.4. Ataques Hombre en el Medio (MitM) y Hombre en el Móvil (MitMo) <a name="mitm-mitmo-attacks"></a>
Los atacantes se interponen en la comunicación entre dos dispositivos para interceptar o modificar los datos.
*   **Hombre en el Medio (MitM) / Ataque en Ruta:**
    *   El atacante se posiciona (física o lógicamente) entre dos comunicantes sin su conocimiento.
    *   Puede interceptar, leer, modificar y retransmitir la comunicación.
    *   Técnicas comunes para lograr MitM incluyen ARP spoofing, DNS spoofing, o comprometiendo un router o punto de acceso.
*   **Hombre en el Móvil (MitMo):**
    *   Una variación del MitM que se enfoca en tomar el control de un dispositivo móvil.
    *   Una vez infectado, el dispositivo móvil puede ser instruido para filtrar información confidencial del usuario (SMS, contactos, credenciales bancarias) y enviarla a los atacantes.
    *   Ejemplo: Malware como ZeUS puede capturar mensajes SMS de verificación en dos pasos.

#### 14.7.5. Ataques de Día Cero (Zero-Day) <a name="zero-day-attacks"></a>
*   Un ataque de día cero explota una **vulnerabilidad de software que es desconocida para el proveedor del software o para el público en general.**
*   El término "día cero" se refiere al hecho de que el proveedor tiene cero días para crear un parche o solución antes de que la vulnerabilidad sea explotada activamente.
*   Estos ataques son particularmente peligrosos porque no existen firmas de antivirus o parches disponibles en el momento del ataque inicial.
*   La defensa requiere un enfoque de seguridad holístico y proactivo, incluyendo sistemas de detección de intrusiones basados en comportamiento, segmentación de red y respuesta rápida a incidentes.

#### 14.7.6. Ataques a la Cadena de Suministro <a name="supply-chain-attacks"></a>
*   Los atacantes comprometen a un proveedor o socio de confianza de la organización objetivo.
*   Pueden insertar malware o puertas traseras en hardware o software legítimo antes de que llegue al cliente final.
*   Esto permite al atacante obtener acceso a la red del objetivo cuando el producto comprometido es instalado o utilizado.
*   Ejemplo: Modificar la fecha de fin de vida útil (EOL) de un software para que una organización pierda el soporte y sea más vulnerable.

#### 14.7.7. Ataques de Inteligencia Artificial Adversarios <a name="adversarial-ai-attacks"></a>
*   El aprendizaje automático (Machine Learning - ML) se usa en muchas aplicaciones, incluyendo seguridad.
*   Estos ataques intentan engañar o manipular los modelos de ML.
*   Ejemplo: Contaminar los datos de entrenamiento de un modelo de ML para que tome decisiones incorrectas (ej: un vehículo autónomo que malinterpreta señales de tráfico, o un sistema de detección de spam que clasifica mal los correos).

#### 14.7.8. Ataques Físicos <a name="physical-attacks"></a>
*   Acciones intencionales para destruir, exponer, alterar, deshabilitar, robar u obtener acceso no autorizado a la infraestructura física o hardware de una organización.
*   Ejemplos:
    *   Cargar malware en una unidad flash USB e insertarla en un dispositivo.
    *   Usar cables o adaptadores de carga comprometidos (ej: con chips inalámbricos ocultos) para controlar o extraer datos de un dispositivo.
    *   Skimming: Copiar datos de tarjetas de crédito/débito usando un terminal especializado para crear tarjetas clonadas.
    *   Robo de equipos, sabotaje.

---
### 14.8. Amenazas Específicas a Dispositivos Inalámbricos y Móviles <a name="wireless-mobile-threats"></a>

#### 14.8.1. Grayware y SMiShing <a name="grayware-smishing"></a>
*   **Grayware:** Aplicaciones no deseadas que, aunque no sean malware destructivo, se comportan de forma molesta o indeseable. Pueden rastrear la ubicación, mostrar publicidad excesiva o recopilar datos sin un consentimiento claro. A menudo, sus capacidades están ocultas en la letra pequeña de los acuerdos de licencia.
*   **SMiShing (SMS Phishing):** Ataques de phishing realizados a través de mensajes de texto (SMS). Se engaña al usuario para que visite un sitio web malicioso, llame a un número fraudulento, o descargue malware.

#### 14.8.2. Puntos de Acceso No Autorizados (Rogue APs) y Gemelos Malvados (Evil Twins) <a name="rogue-aps-evil-twins"></a>
*   **Punto de Acceso No Autorizado (Rogue AP):** Un punto de acceso inalámbrico instalado en una red segura sin la autorización explícita del administrador de red.
    *   Puede ser instalado por un empleado bien intencionado (buscando mejor cobertura) o por un atacante.
    *   Crea una puerta trasera a la red, eludiendo los controles de seguridad perimetrales.
*   **Gemelo Malvado (Evil Twin):** Un rogue AP configurado con el mismo SSID (nombre de red) que un AP legítimo y cercano.
    *   El objetivo es engañar a los usuarios para que se conecten al AP malicioso en lugar del legítimo.
    *   Una vez conectado, el atacante puede lanzar ataques Man-in-the-Middle, robar credenciales, o inyectar malware.
*   **Ataques de Desautenticación:** Un atacante envía tramas de desautenticación falsificadas a los clientes conectados a un AP legítimo, forzándolos a desconectarse. El atacante puede entonces intentar que los clientes se conecten a su propio AP malicioso (evil twin) o simplemente causar una denegación de servicio.

#### 14.8.3. Interferencia de Radiofrecuencia (RF Jamming) <a name="rf-jamming"></a>
*   Las señales inalámbricas (Wi-Fi, Bluetooth) son susceptibles a la interferencia electromagnética (EMI) y de radiofrecuencia (RFI).
*   El **Jamming** es el acto deliberado de bloquear o interferir con las transmisiones inalámbricas.
*   Un atacante utiliza un dispositivo (jammer) que emite señales de RF en la misma frecuencia que la red objetivo, con suficiente potencia para ahogar las señales legítimas e impedir la comunicación.

#### 14.8.4. Ataques Bluetooth <a name="bluetooth-attacks"></a>
Bluetooth es un protocolo de corto alcance para Redes de Área Personal (PAN). Requiere que el atacante esté cerca del objetivo.
*   **Bluejacking:** Envío de mensajes no solicitados (a menudo spam o molestos) a dispositivos Bluetooth cercanos y detectables. No suele ser dañino por sí mismo, pero puede ser un vector para ingeniería social.
*   **Bluesnarfing:** Un atacante explota una vulnerabilidad en un dispositivo Bluetooth para obtener acceso no autorizado y copiar información del dispositivo víctima (ej: contactos, mensajes, calendarios) sin su conocimiento.

#### 14.8.5. Ataques contra Protocolos de Seguridad Wi-Fi <a name="wifi-protocol-attacks"></a>
*   **WEP (Wired Equivalent Privacy):** Protocolo de seguridad Wi-Fi antiguo y **completamente inseguro**. Sus debilidades criptográficas (IV pequeño y estático, gestión de claves deficiente) permiten que la clave de cifrado sea recuperada fácilmente observando el tráfico de red. **No debe usarse.**
*   **WPA (Wi-Fi Protected Access):** Creado como un reemplazo intermedio para WEP. Usaba TKIP. También se considera vulnerable.
*   **WPA2 (Wi-Fi Protected Access II):** Utiliza AES para un cifrado mucho más robusto. Es el estándar mínimo de seguridad recomendado actualmente. Sin embargo, WPA2-Personal (usando una Clave Precompartida - PSK) es vulnerable a ataques de diccionario offline si la contraseña es débil.
*   **WPA3:** El estándar más reciente, ofrece mejoras de seguridad sobre WPA2, incluyendo protección contra ataques de diccionario y cifrado individualizado para redes abiertas.

#### 14.8.6. Defensa contra Ataques a Dispositivos Inalámbricos y Móviles <a name="wireless-mobile-defense"></a>
*   Utilizar **autenticación y encriptación robustas** (WPA2 o WPA3 con AES y contraseñas fuertes). Cambiar las credenciales predeterminadas del AP.
*   **Colocación Segura de APs:** Ubicarlos estratégicamente, y si es posible, fuera del firewall principal de la red o en una Zona Desmilitarizada (DMZ) para el acceso de invitados.
*   **Detección de Rogue APs:** Usar herramientas de análisis de WLAN (ej: NetStumbler, o funciones en NMS y APs empresariales) para descubrir y localizar puntos de acceso no autorizados.
*   **Política de Acceso de Invitados Segura:** Implementar una red Wi-Fi separada (idealmente en una VLAN diferente) para invitados, con aislamiento de la red interna.
*   **Uso de VPN:** Los empleados deben usar una VPN de acceso remoto cuando se conecten a recursos de la organización desde redes Wi-Fi públicas o no confiables.
*   Mantener actualizado el firmware de los APs y el software de los dispositivos móviles.
*   Deshabilitar Bluetooth y Wi-Fi en dispositivos móviles cuando no se usen.
*   Ser cauteloso con las aplicaciones móviles instaladas y los permisos que solicitan.

---
### 14.9. Ataques Comunes a Aplicaciones <a name="common-application-attacks"></a>
Las aplicaciones web y otras son objetivos frecuentes.

#### 14.9.1. Secuencias de Comandos entre Sitios (XSS - Cross-Site Scripting) <a name="xss-attacks"></a>
*   Vulnerabilidad en aplicaciones web donde un atacante inyecta scripts maliciosos (generalmente JavaScript) en páginas web vistas por otros usuarios.
*   El script malicioso se ejecuta en el navegador de la víctima cuando accede a la página comprometida.
*   Puede robar cookies de sesión, tokens de autenticación, redirigir a sitios maliciosos, o modificar el contenido de la página.
*   Tipos: XSS Reflejado, XSS Almacenado, XSS Basado en DOM.

#### 14.9.2. Ataques de Inyección <a name="injection-attacks"></a>
Explotan la forma en que una aplicación maneja los datos de entrada del usuario, inyectando comandos o código malicioso que la aplicación interpreta y ejecuta.
*   **Inyección SQL (SQLi):**
    *   Atacantes insertan consultas SQL maliciosas en campos de entrada de una aplicación web que interactúa con una base de datos SQL.
    *   Si la aplicación no valida o sanitiza adecuadamente la entrada, la consulta maliciosa puede ejecutarse en la base de datos.
    *   Permite a los atacantes leer, modificar o borrar datos, o incluso obtener control administrativo del servidor de base de datos.
*   **Inyección XML (XMLi):**
    *   Similar a SQLi, pero dirigido a aplicaciones que procesan datos XML.
    *   Un atacante manipula la entrada XML para interferir con el procesamiento de la aplicación o para acceder/modificar datos en la base de datos XML subyacente.
*   **Inyección DLL (Dynamic-Link Library):**
    *   Específico de Windows. Un atacante engaña a una aplicación para que cargue y ejecute una DLL maliciosa en lugar de una legítima, o inyecta código en el espacio de memoria de un proceso en ejecución para que cargue una DLL maliciosa.
    *   El código malicioso se ejecuta con los privilegios del proceso objetivo.
*   **Inyección LDAP (Lightweight Directory Access Protocol):**
    *   LDAP se usa para acceder y mantener servicios de información de directorio distribuidos.
    *   Un ataque de inyección LDAP aprovecha la validación de entrada deficiente para construir consultas LDAP maliciosas, permitiendo a los atacantes extraer información sensible del directorio o modificarlo.

#### 14.9.3. Desbordamiento de Búfer (Buffer Overflow) <a name="buffer-overflow-attacks"></a>
*   Ocurre cuando un programa intenta escribir más datos en un área de memoria de tamaño fijo (un búfer) de los que puede contener.
*   Los datos excedentes sobrescriben ubicaciones de memoria adyacentes.
*   Esto puede corromper datos, causar que el programa falle (crash), o, lo que es más peligroso, permitir a un atacante ejecutar código arbitrario.
*   El atacante puede diseñar cuidadosamente la entrada para sobrescribir la dirección de retorno de una función en la pila, redirigiendo la ejecución a un código malicioso (shellcode) inyectado en la memoria.

#### 14.9.4. Ejecuciones Remotas de Código (RCE - Remote Code Execution) <a name="rce-attacks"></a>
*   Una vulnerabilidad que permite a un atacante ejecutar comandos arbitrarios en una máquina remota a través de una red, a menudo con los privilegios del usuario o servicio que ejecuta la aplicación vulnerable.
*   Puede ser el resultado de desbordamientos de búfer, vulnerabilidades de inyección, deserialización insegura, u otros fallos de software.
*   **Escalada de Privilegios:** A menudo, un atacante usa una RCE para obtener un pie inicial en el sistema y luego busca otras vulnerabilidades para escalar sus privilegios a administrador o root.
*   **Metasploit Project:** Un framework que proporciona herramientas e información sobre vulnerabilidades, incluyendo exploits para RCE. **Meterpreter** es una carga útil (payload) avanzada de Metasploit que permite control post-explotación sobre el sistema objetivo (ej: controlar webcam, robar archivos) a menudo ejecutándose desde la memoria para evadir antivirus.

#### 14.9.5. Otros Ataques a Aplicaciones <a name="other-application-attacks"></a>
*   **Falsificación de Solicitudes entre Sitios (CSRF - Cross-Site Request Forgery):**
    *   Un ataque que engaña al navegador de una víctima autenticada para que envíe una solicitud no deseada a una aplicación web en la que la víctima tiene una sesión activa.
    *   El sitio web malicioso del atacante (o un correo electrónico) contiene código (ej: en una etiqueta de imagen o un formulario oculto) que hace que el navegador de la víctima envíe la solicitud maliciosa a la aplicación objetivo.
    *   La aplicación objetivo cree que la solicitud es legítima porque proviene del navegador de un usuario autenticado.
*   **Condición de Carrera (Race Condition) / TOC/TOU (Time-of-Check to Time-of-Use):**
    *   Ocurre cuando el resultado de un sistema depende de la secuencia o temporización de eventos incontrolables.
    *   En seguridad, un atacante puede intentar influir en el resultado explotando el lapso de tiempo entre que un sistema verifica un permiso o estado (Time-of-Check) y el momento en que usa el resultado de esa verificación (Time-of-Use).
    *   Ejemplo: Un sistema verifica si un archivo existe y luego lo abre; un atacante podría reemplazar el archivo legítimo por uno malicioso entre la verificación y el uso.
*   **Ataque de Manejo de Entrada Incorrecto:**
    *   Si una aplicación no valida, sanitiza o maneja correctamente los datos ingresados por el usuario, puede llevar a vulnerabilidades como desbordamientos de búfer, inyecciones SQL, XSS, etc.
*   **Gestión de Errores Insegura:**
    *   Mensajes de error demasiado detallados pueden revelar información sensible a un atacante (nombres de host internos, rutas de directorios, nombres de tablas de bases de datos, versiones de software) que puede ser usada para planificar otros ataques.
*   **Ataques a la Interfaz de Programación de Aplicaciones (API):**
    *   Las APIs son usadas por aplicaciones para comunicarse entre sí. Un ataque a una API abusa de un punto final (endpoint) de la API, explotando vulnerabilidades en su diseño o implementación (autenticación/autorización débil, exposición de datos sensibles, inyecciones).
*   **Ataques de Repetición (Replay Attacks):**
    *   Un atacante intercepta una transmisión de datos válida (ej: una solicitud de autenticación) y luego la retransmite de manera maliciosa o fraudulenta para hacerse pasar por el usuario original o repetir una transacción.
*   **Ataque Transversal al Directorio (Directory Traversal / Path Traversal):**
    *   Permite a un atacante acceder a archivos y directorios que están almacenados fuera del directorio raíz del servidor web o de la aplicación.
    *   Se logra manipulando variables que referencian archivos con secuencias como `../` para navegar por la estructura de directorios del servidor.
    *   Puede exponer archivos de configuración sensibles, código fuente, o permitir la ejecución de comandos.
*   **Agotamiento de Recursos (Resource Exhaustion):**
    *   Distinto de un DoS de red que satura el ancho de banda. Este tipo de ataque se enfoca en agotar los recursos de hardware del servidor objetivo (CPU, memoria, espacio en disco, descriptores de archivo).
    *   Puede hacer que el servidor o la aplicación se vuelvan lentos o dejen de responder.

#### 14.9.6. Defensa Contra Ataques de Aplicaciones <a name="application-attack-defense"></a>
*   **Desarrollo Seguro de Software (Secure SDLC):**
    *   **Escribir código sólido y seguro:** Seguir prácticas de codificación segura.
    *   **Validación de Entradas:** Tratar todas las entradas del usuario y de fuentes externas como potencialmente hostiles. Validar, sanitizar y codificar adecuadamente las entradas para prevenir inyecciones y XSS.
    *   **Principio de Menor Privilegio:** Las aplicaciones deben ejecutarse con los mínimos privilegios necesarios.
*   **Pruebas de Seguridad Continuas:**
    *   Utilizar herramientas de prueba de seguridad de aplicaciones (SAST, DAST, IAST) para evaluar el código fuente y el software binario durante todo el ciclo de vida del desarrollo.
    *   Realizar pruebas de penetración y revisiones de código.
*   **Gestión de Parches y Actualizaciones:**
    *   Mantener actualizado todo el software (sistemas operativos, bibliotecas, frameworks, aplicaciones) con los últimos parches de seguridad para proteger contra vulnerabilidades conocidas.
*   **Configuración Segura:** Endurecer la configuración de servidores web, servidores de aplicaciones y bases de datos.
*   **Manejo de Errores Adecuado:** Configurar mensajes de error genéricos que no revelen información interna sensible.
*   **Web Application Firewalls (WAF):** Pueden ayudar a filtrar tráfico malicioso dirigido a aplicaciones web.

---
### 14.10. Inteligencia de Amenazas y Defensa General <a name="threat-intelligence-defense"></a>

#### 14.10.1. Fuentes de Inteligencia de Amenazas <a name="threat-intelligence-sources"></a>
Para defenderse eficazmente, las organizaciones necesitan estar al tanto de las amenazas y vulnerabilidades actuales.
*   **CVE (Common Vulnerabilities and Exposures):**
    *   Una base de datos pública de vulnerabilidades de seguridad conocidas. Cada entrada de CVE tiene un número de identificación estándar (ej: CVE-2023-xxxx), una breve descripción y referencias a informes relacionados.
    *   Patrocinada por el US-CERT (Equipo de Preparación para Emergencias Informáticas de EE.UU.) y el Departamento de Seguridad Nacional de EE.UU. Mantenida por The Mitre Corporation.
*   **Dark Web:**
    *   Contenido web encriptado que no está indexado por motores de búsqueda convencionales y requiere software específico, autorización o configuraciones para acceder.
    *   Los investigadores de seguridad monitorean la Dark Web en busca de nueva inteligencia de amenazas, discusión de exploits, venta de datos robados, etc.
*   **Indicadores de Compromiso (IOCs):**
    *   Evidencia forense o artefactos observados en una red o sistema que indican (con alta probabilidad) una intrusión o compromiso de seguridad. Ejemplos: hashes de archivos maliciosos, direcciones IP o dominios de C&C, patrones de tráfico de red inusuales.
*   **Intercambio de Información sobre Amenazas:**
    *   Plataformas y estándares para compartir información sobre amenazas entre organizaciones.
    *   **AIS (Automated Indicator Sharing):** Iniciativa para el intercambio automatizado de IOCs.
    *   **STIX (Structured Threat Information eXpression):** Un lenguaje estandarizado para describir la inteligencia de amenazas cibernéticas de forma estructurada.
    *   **TAXII (Trusted Automated eXchange of Intelligence Information):** Un protocolo para el intercambio automatizado de información de ciberamenazas (a menudo usando STIX).

#### 14.10.2. Estrategias de Defensa General <a name="general-defense-strategies"></a>
Además de las defensas específicas mencionadas anteriormente, una postura de seguridad robusta incluye:
*   **Defensa en Profundidad:** Implementar múltiples capas de controles de seguridad. Si una capa falla, otras pueden detener el ataque.
*   **Gestión de Parches:** Mantener todos los sistemas y software actualizados con los últimos parches de seguridad.
*   **Configuración Segura (Hardening):** Deshabilitar servicios y puertos innecesarios, cambiar credenciales predeterminadas, aplicar configuraciones seguras a sistemas operativos y aplicaciones.
*   **Segmentación de Red:** Dividir la red en zonas más pequeñas y aisladas (ej: usando VLANs y firewalls) para limitar el impacto de una brecha.
*   **Principio de Menor Privilegio:** Otorgar a los usuarios y procesos solo los permisos mínimos necesarios para realizar sus funciones.
*   **Autenticación Fuerte:** Usar contraseñas complejas, autenticación multifactor (MFA).
*   **Monitoreo y Detección:** Implementar Sistemas de Detección/Prevención de Intrusiones (IDS/IPS), monitoreo de registros (SIEM), y análisis de comportamiento de red para detectar actividades sospechosas.
*   **Respuesta a Incidentes:** Tener un plan definido para responder a incidentes de seguridad.
*   **Copias de Seguridad Regulares:** Realizar copias de seguridad de datos críticos y probar periódicamente el proceso de restauración.
*   **Formación y Concienciación de Usuarios:** Educar a los empleados sobre las amenazas y las mejores prácticas de seguridad.

</details>

## 15. Principios de Seguridad, Controles de Acceso y Defensa de Endpoints <a name="security-principles-access-defense"></a>

<details>
  <summary>Ver/Ocultar Principios de Seguridad y Defensa</summary>

Una vez comprendidas las amenazas y vulnerabilidades comunes, es crucial establecer un marco de seguridad robusto. Esta sección explora los principios fundamentales de la seguridad de la información, los diferentes tipos de controles de acceso y las estrategias para defender sistemas y dispositivos finales.

### 15.1. Fundamentos de Seguridad de la Información <a name="infosec-fundamentals"></a>

#### 15.1.1. El Cubo de Ciberseguridad <a name="cybersecurity-cube"></a>
El Cubo de Ciberseguridad es un modelo conceptual que ayuda a visualizar la complejidad de proteger el ciberespacio. Se compone de tres dimensiones:

1.  **Principios de Seguridad (Objetivos):**
    *   Define los objetivos fundamentales al proteger cualquier sistema en red.
    *   Se basa en la Tríada CIA: Confidencialidad, Integridad y Disponibilidad.

2.  **Estados de los Datos:**
    *   Representa los diferentes estados en los que pueden encontrarse los datos y que necesitan protección:
        *   **Datos en Tránsito:** Datos que se mueven a través de una red.
        *   **Datos en Reposo (o en Almacenamiento):** Datos guardados en discos duros, bases de datos, copias de seguridad, etc.
        *   **Datos en Proceso:** Datos que están siendo activamente utilizados o modificados por una aplicación o sistema.
    *   Una ciberseguridad eficaz requiere proteger los datos en los tres estados.

3.  **Medidas de Seguridad (Pilares de Defensa):**
    *   Define las áreas en las que se deben basar las defensas de ciberseguridad:
        *   **Tecnología:** Herramientas y sistemas de seguridad (firewalls, antivirus, cifrado, IDS/IPS).
        *   **Políticas y Prácticas:** Directrices, procedimientos y reglas establecidas por la organización.
        *   **Personas:** Educación, capacitación y concienciación de los usuarios y el personal de TI.

#### 15.1.2. La Tríada CIA: Confidencialidad, Integridad y Disponibilidad <a name="cia-triad"></a>
La Tríada CIA es la base de la práctica de la ciberseguridad.

*   **Confidencialidad:**
    *   **Definición:** Asegurar que la información solo sea accesible para individuos, entidades o procesos autorizados. Previene la divulgación no autorizada de información sensible.
    *   **Técnicas:**
        *   **Cifrado:** Usar algoritmos criptográficos (ej: AES - Advanced Encryption Standard) para convertir datos legibles (texto plano) en un formato ilegible (texto cifrado), que solo puede ser descifrado con la clave correcta.
        *   **Tokenización:** Técnica de sustitución que reemplaza datos sensibles originales con un valor equivalente no sensible (un "token") que no tiene valor o significado extrínseco. El token puede conservar el formato de los datos originales, útil para bases de datos y procesamiento de pagos.
        *   **Gestión de Derechos:**
            *   **DRM (Digital Rights Management - Gestión de Derechos Digitales):** Protege material con derechos de autor (música, películas, libros electrónicos) cifrándolo para que solo las partes con licencia (con la clave de descifrado) puedan accederlo.
            *   **IRM (Information Rights Management - Gestión de Derechos de Información):** Se usa con correos electrónicos y documentos corporativos. Permite al propietario controlar y administrar quién puede acceder, copiar, imprimir o reenviar un documento, incluso después de haber sido compartido.
    *   **Clasificación de Datos:** Categorizar los datos según su sensibilidad (ej: Público, Interno, Confidencial, Secreto/Clasificado) ayuda a aplicar los niveles adecuados de protección de confidencialidad.

*   **Integridad:**
    *   **Definición:** Asegurar la exactitud, consistencia y confiabilidad de los datos durante todo su ciclo de vida. Proteger los datos contra modificaciones no autorizadas, ya sea accidentales o intencionales.
    *   Los datos experimentan operaciones como captura, almacenamiento, recuperación, actualización y transferencia, y su integridad debe mantenerse.
    *   **Técnicas:**
        *   **Funciones de Hash Criptográficas (ej: SHA - Secure Hash Algorithm):** Generan un valor de hash (una cadena de caracteres de longitud fija) único para un conjunto de datos. Cualquier cambio en los datos resultará en un hash diferente, permitiendo verificar la integridad.
        *   **Comprobaciones de Validación de Datos:** Reglas para asegurar que los datos ingresados sean correctos y consistentes (ej: un campo de fecha debe contener una fecha válida).
        *   **Comprobaciones de Consistencia de Datos:** Asegurar que los datos sean lógicamente coherentes entre diferentes sistemas o partes de una base de datos.
        *   **Controles de Acceso:** Limitar quién puede modificar los datos.
        *   **Firmas Digitales:** Usan criptografía para verificar la autenticidad del remitente y la integridad del mensaje.
    *   La pérdida de integridad puede hacer que los datos sean dudosos o inutilizables. La importancia varía (ej: alta para un banco, menor para un blog personal).

*   **Disponibilidad:**
    *   **Definición:** Asegurar que los usuarios autorizados tengan acceso ininterrumpido a los datos y recursos importantes cuando los necesiten.
    *   Los ataques cibernéticos (DoS/DDoS), fallas de sistema, errores humanos o desastres pueden afectar la disponibilidad.
    *   **Técnicas para Garantizar la Disponibilidad:**
        *   **Mantenimiento Regular del Equipo:** Reemplazo, limpieza y alineación de componentes para prevenir fallos.
        *   **Actualizaciones y Parches de SO y Software:** Corregir errores y eliminar vulnerabilidades.
        *   **Copias de Respaldo (Backups) y Pruebas de Restauración:** Realizar copias de seguridad de datos y configuraciones, y probar periódicamente que se puedan restaurar correctamente.
        *   **Planificación de Recuperación ante Desastres (DRP) y Continuidad del Negocio (BCP):** Procedimientos para responder a desastres y restaurar sistemas críticos.
        *   **Redundancia:** Implementar sistemas, componentes y enlaces redundantes (ej: múltiples servidores, fuentes de alimentación redundantes, rutas de red alternativas) para que si uno falla, otro pueda tomar su lugar.
        *   **Implementación de Nuevas Tecnologías de Seguridad:** Para responder a nuevas amenazas.
        *   **Monitoreo Activo del Sistema:** Supervisar registros de eventos, alertas del sistema y registros de acceso en tiempo real para identificar y responder rápidamente a ataques o fallos.
        *   **Pruebas de Disponibilidad y Vulnerabilidad:** Realizar análisis de puertos, escaneos de vulnerabilidades y pruebas de penetración para encontrar y corregir debilidades.

---
### 15.2. Control de Acceso <a name="access-control"></a>
El control de acceso es el proceso de conceder o denegar solicitudes específicas para obtener y usar información y servicios relacionados.

#### 15.2.1. Controles de Acceso Físico <a name="physical-access-controls"></a>
Son barreras reales desplegadas para prevenir el contacto físico directo no autorizado con sistemas, instalaciones y otros activos. Determinan quién, dónde y cuándo puede entrar o salir.
*   Ejemplos:
    *   Guardias de seguridad.
    *   Vallas perimetrales, puertas con cerradura.
    *   Detectores de movimiento, alarmas de intrusión.
    *   Candados para portátiles y otros equipos.
    *   Tarjetas de acceso magnéticas o de proximidad, lectores biométricos para puertas.
    *   Perros guardianes (en algunos entornos).
    *   Cámaras de videovigilancia (CCTV).
    *   Sistemas de entrada tipo trampa (Mantraps): dos conjuntos de puertas que requieren que la primera se cierre antes de que la segunda se abra, para controlar el flujo y atrapar intrusos.

#### 15.2.2. Controles de Acceso Lógico <a name="logical-access-controls"></a>
Son soluciones de hardware y software utilizadas para gestionar el acceso a recursos y sistemas digitales. Incluyen herramientas y protocolos para identificación, autenticación, autorización y contabilidad.
*   Ejemplos:
    *   **Cifrado:** Proteger datos en reposo y en tránsito.
    *   **Tarjetas Inteligentes (Smart Cards):** Tarjetas con un microchip integrado para autenticación o almacenamiento seguro de credenciales.
    *   **Contraseñas, PINs.**
    *   **Biometría:** Uso de características físicas o de comportamiento únicas.
    *   **Listas de Control de Acceso (ACLs):** En firewalls, routers y sistemas operativos para definir qué tráfico o qué usuarios/grupos tienen permiso para acceder a recursos específicos.
    *   **Protocolos de Autenticación Seguros:** (ej: Kerberos, RADIUS, TACACS+).
    *   **Firewalls:** Para filtrar tráfico de red no deseado.
    *   **Routers:** Implementan ACLs y separan dominios de difusión.
    *   **Sistemas de Detección/Prevención de Intrusiones (IDS/IPS):** Monitorean y/o bloquean actividad sospechosa.
    *   **Niveles de Recorte (Clipping Levels):** Umbrales de error permitidos antes de que se active una alerta o se bloquee una cuenta (ej: número de intentos fallidos de inicio de sesión).

#### 15.2.3. Controles de Acceso Administrativo <a name="administrative-access-controls"></a>
Son las políticas, procedimientos y directrices definidas por una organización para implementar y hacer cumplir todos los aspectos del control de acceso.
*   Se centran en prácticas comerciales y de personal:
    *   **Políticas de Seguridad:** Documentos que guían el comportamiento y establecen requisitos (ej: política de contraseñas, política de uso aceptable).
    *   **Procedimientos:** Pasos detallados para realizar tareas específicas de forma segura y consistente (ej: procedimiento para dar de alta a un nuevo empleado).
    *   **Prácticas de Contratación:** Procesos para seleccionar y contratar personal cualificado y confiable.
    *   **Comprobación de Antecedentes (Background Checks):** Verificación de historial laboral, crediticio, penal de los candidatos.
    *   **Clasificación de Datos:** Definir niveles de sensibilidad de la información para aplicar controles apropiados.
    *   **Capacitación y Concienciación en Seguridad:** Educar a los empleados sobre políticas, amenazas y sus responsabilidades.
    *   **Revisiones de Acceso y Auditorías:** Evaluar periódicamente los permisos de los usuarios y el cumplimiento de las políticas.
    *   **Separación de Deberes:** Dividir tareas críticas entre múltiples personas para prevenir fraudes o errores.

---
### 15.3. Autenticación, Autorización y Contabilidad (AAA) <a name="aaa-framework"></a>
AAA es un marco fundamental para controlar el acceso a los recursos de red.

#### 15.3.1. Autenticación <a name="aaa-authentication"></a>
**¿Quién eres?** Es el proceso de verificar la identidad de un usuario, dispositivo o proceso que intenta acceder a un sistema.
*   Los usuarios prueban su identidad con un nombre de usuario o ID.
*   Luego, deben verificarla proporcionando uno o más **factores de autenticación**:
    1.  **Algo que sabes:** Contraseñas, frases de contraseña, PINs, respuestas a preguntas secretas.
    2.  **Algo que tienes:** Objetos físicos como tarjetas inteligentes, tokens de seguridad (hard tokens que generan OTPs), llaveros de seguridad (security fobs), un teléfono móvil que recibe un código OTP.
    3.  **Algo que eres (Biometría):** Características físicas o de comportamiento únicas.
        *   **Características Físicas:** Huellas dactilares, reconocimiento facial, escaneo de iris o retina, geometría de la mano, ADN.
        *   **Características de Comportamiento:** Reconocimiento de voz, patrones de tecleo (dinámica de pulsación), forma de andar.
        *   La seguridad biométrica compara las características presentadas con perfiles almacenados.
*   **Autenticación Multifactor (MFA):** Requiere la verificación de **dos o más** factores de autenticación diferentes.
    *   **Autenticación de Dos Factores (2FA):** Un tipo específico de MFA que usa exactamente dos factores.
    *   MFA aumenta significativamente la seguridad, ya que comprometer un solo factor (como una contraseña) no es suficiente para obtener acceso.
    *   Ejemplo: Ingresar contraseña (algo que sabes) + un código OTP de una app en tu teléfono (algo que tienes). Sacar dinero de un cajero automático (tarjeta + PIN).

##### 15.3.1.1. Contraseñas y Frases de Contraseña <a name="passwords-passphrases"></a>
*   Son el método de autenticación más común.
*   **Políticas de Contraseña Robustas:**
    *   **Longitud:** Mínimo recomendado suele ser de 8-12 caracteres, pero más largas son mejores.
    *   **Complejidad:** Deben incluir una combinación de letras mayúsculas, minúsculas, números y caracteres especiales.
    *   **Historial de Contraseñas:** Impedir la reutilización de contraseñas recientes.
    *   **Vencimiento de Contraseñas:** Forzar cambios periódicos (aunque esta práctica está siendo debatida y reemplazada por MFA y detección de brechas).
    *   Evitar palabras de diccionario, información personal (nombres, fechas de nacimiento), secuencias comunes.
*   **Frases de Contraseña (Passphrases):**
    *   Una secuencia de múltiples palabras o una frase, a menudo más largas que las contraseñas tradicionales.
    *   Pueden ser más fáciles de recordar para el usuario y, debido a su longitud, más difíciles de descifrar mediante ataques de fuerza bruta.
    *   Ejemplo: "MiPerroCafeSaltaAlto!"
*   **Administradores de Contraseñas:**
    *   Software que ayuda a generar, almacenar y rellenar contraseñas complejas y únicas para diferentes cuentas.
    *   El usuario solo necesita recordar una contraseña maestra segura para acceder al administrador.

#### 15.3.2. Autorización <a name="aaa-authorization"></a>
**¿Qué tienes permitido hacer?** Una vez que un usuario ha sido autenticado, los servicios de autorización determinan a qué recursos específicos puede acceder (archivos, aplicaciones, dispositivos de red) y qué operaciones puede realizar sobre ellos (leer, escribir, ejecutar, eliminar, configurar).
*   Se implementa mediante:
    *   **Listas de Control de Acceso (ACLs):** Conjuntos de reglas que especifican qué sujetos (usuarios, grupos, direcciones IP) tienen qué permisos sobre qué objetos (archivos, puertos de red).
    *   **Control de Acceso Basado en Roles (RBAC):** Los permisos se asignan a roles, y los usuarios se asignan a roles. Simplifica la gestión de permisos en organizaciones grandes.
    *   **Atributos de Usuario:** Los permisos pueden basarse en atributos como departamento, ubicación o nivel de seguridad.
*   La autorización también puede controlar **cuándo** un usuario tiene acceso a un recurso (ej: solo durante el horario laboral).

#### 15.3.3. Contabilidad (Auditoría - Accounting) <a name="aaa-accounting"></a>
**¿Qué hiciste?** Es el proceso de rastrear las acciones de los usuarios y el uso de los recursos.
*   Registra información como:
    *   Identidad del usuario.
    *   Recursos accedidos.
    *   Hora de inicio y fin de la sesión o acceso.
    *   Cantidad de datos transferidos.
    *   Comandos ejecutados o cambios realizados.
*   Los datos recopilados (registros de auditoría o logs) se utilizan para:
    *   **Auditorías de Seguridad:** Verificar el cumplimiento de políticas y detectar actividades no autorizadas.
    *   **Análisis Forense:** Investigar incidentes de seguridad.
    *   **Facturación:** Para servicios basados en el uso.
    *   **Detección de Anomalías:** Identificar patrones de uso inusuales.
*   Los administradores de sistema configuran políticas para habilitar la auditoría en los sistemas relevantes.

#### 15.3.4. Identificación y Gestión de Identidad Federada (FIM) <a name="identification-fim"></a>
*   **Identificación:** Proceso de asociar un sujeto (usuario, proceso) con un identificador único (nombre de usuario, ID de empleado, PIN, etc.). Este identificador se usa luego en los procesos de autenticación, autorización y contabilidad.
*   **Gestión de Identidad Federada (FIM):**
    *   Permite a los usuarios utilizar un único conjunto de credenciales de identificación para acceder a los sistemas de múltiples organizaciones o servicios diferentes que han establecido una relación de confianza (una "federación").
    *   Ejemplo: Usar tus credenciales de Google para iniciar sesión en un servicio de terceros (Single Sign-On - SSO).
    *   **Ventajas:** Conveniencia para el usuario (menos contraseñas que recordar), gestión de identidades simplificada para las organizaciones.
    *   **Riesgos:** Si la identidad federada se ve comprometida, el atacante podría obtener acceso a múltiples sistemas.
    *   **Mitigación:** Es crucial analizar qué información de identificación se comparte y asegurar que los socios tengan estándares de seguridad robustos. Vincular la identidad del usuario a dispositivos autorizados puede añadir una capa de seguridad.

---
### 15.4. Defensa y Endurecimiento de Sistemas y Dispositivos (Endpoints) <a name="system-device-defense"></a>
Proteger los dispositivos finales (computadoras, servidores, móviles) y los sistemas operativos es crucial.

#### 15.4.1. Seguridad del Sistema Operativo (OS Hardening) <a name="os-hardening"></a>
Fortalecer un sistema operativo implica configurarlo para protegerlo contra amenazas:
*   **Eliminar Software y Servicios Innecesarios:** Reducir la superficie de ataque desinstalando aplicaciones y deshabilitando servicios que no son esenciales.
*   **Gestión de Parches y Actualizaciones:** Aplicar parches de seguridad y actualizaciones del SO y aplicaciones de manera oportuna para corregir vulnerabilidades conocidas.
*   **Configuración Segura:** Aplicar configuraciones de seguridad recomendadas (ej: deshabilitar cuentas de invitado, configurar políticas de auditoría, restringir permisos).
*   **Establecer Líneas Base:** Monitorizar el rendimiento del sistema con respecto a una línea base para detectar comportamientos anómalos que podrían indicar un compromiso.
*   **Anticiparse a Malware sin Archivos:** Estos ataques (que se ejecutan en memoria usando herramientas legítimas como PowerShell) son difíciles de detectar por antivirus tradicionales. Se requiere monitoreo de comportamiento y herramientas EDR.
*   **Control de Scripts:** Ser cauteloso con scripts (Python, Bash, VBA en macros de Office) ya que pueden ser maliciosos. Configurar políticas para restringir su ejecución.
*   **Gestión de Software Aprobado:** Definir y hacer cumplir qué software está permitido. El software no aprobado, incluso si no es malicioso, puede violar políticas o introducir vulnerabilidades.

#### 15.4.2. Software Antimalware <a name="antimalware-software"></a>
Software diseñado para detectar, prevenir y eliminar malware.
*   **Tipos de Protección Ofrecidos (a menudo en suites):**
    *   **Protección Antivirus (Tradicional y de Próxima Generación - NGAV):**
        *   **Basada en Firmas:** Compara archivos con una base de datos de firmas de malware conocido.
        *   **Basada en Heurística:** Reconoce características generales o comportamientos comunes a varios tipos de malware.
        *   **Basada en Comportamiento (NGAV):** Analiza el comportamiento de los procesos en tiempo real para detectar actividad sospechosa o maliciosa, incluso de malware desconocido (zero-day) o sin archivos.
        *   Cuando se detecta un virus, advierte al usuario e intenta ponerlo en cuarentena o eliminarlo.
    *   **Protección contra Spyware:** Escanea en busca de keyloggers, troyanos que roban información, y otro software espía.
    *   **Protección contra Adware:** Busca y ayuda a eliminar programas que muestran publicidad no deseada.
    *   **Protección contra Phishing:** Puede bloquear el acceso a sitios web de phishing conocidos y advertir sobre correos electrónicos sospechosos.
    *   **Verificación de Fuentes Confiables/No Confiables:** Advierte al usuario antes de instalar programas de fuentes no verificadas o visitar sitios web potencialmente peligrosos.
*   **Consideraciones:**
    *   Mantener el software antimalware y sus definiciones de virus actualizados.
    *   Cuidado con productos antivirus falsos o maliciosos que pueden aparecer como pop-ups en la web.
    *   La protección basada en host (agente en cada máquina) es común, pero en entornos virtualizados, las soluciones sin agente (que escanean desde un appliance virtual centralizado) pueden ser más eficientes.

#### 15.4.3. Administración de Parches <a name="patch-management"></a>
Proceso de identificar, adquirir, probar y aplicar actualizaciones de software (parches) para corregir vulnerabilidades de seguridad y errores.
*   Los proveedores de software lanzan parches y actualizaciones (a veces agrupados en "Service Packs") para abordar vulnerabilidades descubiertas.
*   Muchos ataques de malware se podrían evitar si los sistemas estuvieran al día con los parches.
*   **Proceso:**
    1.  **Inventario:** Conocer qué software y versiones se ejecutan en la organización.
    2.  **Monitoreo:** Estar al tanto de los parches lanzados por los proveedores.
    3.  **Evaluación:** Determinar la criticidad del parche y su aplicabilidad al entorno.
    4.  **Prueba:** Probar los parches en un entorno de no producción para asegurar que no causan problemas de compatibilidad.
    5.  **Despliegue:** Aplicar los parches a los sistemas de producción.
    6.  **Verificación:** Confirmar que los parches se instalaron correctamente.
*   Los SOs como Windows pueden configurarse para descargar e instalar actualizaciones automáticamente o notificar al usuario. En entornos empresariales, se utilizan **sistemas de administración de parches centralizados** para controlar el despliegue y obtener informes.

#### 15.4.4. Soluciones de Seguridad Basadas en Host (Endpoint Security) <a name="host-based-security"></a>
Software o configuraciones aplicadas directamente en los dispositivos finales para protegerlos.
*   **Firewall Basado en Host:**
    *   Software que se ejecuta en un dispositivo para controlar el tráfico de red entrante y saliente para ese dispositivo específico.
    *   Puede permitir o denegar tráfico basado en aplicaciones, puertos, protocolos o direcciones IP.
    *   Ejemplos: Windows Defender Firewall (con perfiles Público, Privado, Dominio), `iptables` y `nftables` (Linux), TCP Wrappers (Linux).
*   **HIDS (Host-based Intrusion Detection System - Sistema de Detección de Intrusiones Basado en Host):**
    *   Software que monitorea y analiza las actividades dentro de un host en busca de signos de intrusión o actividad maliciosa.
    *   Supervisa llamadas al sistema, acceso a archivos, registros del sistema, cambios en la configuración.
    *   Almacena registros localmente; puede consumir recursos del host. No ve el tráfico de red que no llega al host.
*   **HIPS (Host-based Intrusion Prevention System - Sistema de Prevención de Intrusiones Basado en Host):**
    *   Similar a HIDS, pero además de detectar, puede tomar acciones para bloquear o prevenir la actividad maliciosa detectada (ej: terminar un proceso, bloquear una conexión, descartar paquetes).
*   **EDR (Endpoint Detection and Response - Detección y Respuesta en el Endpoint):**
    *   Solución de seguridad integrada que monitorea y recopila continuamente datos de actividad de los endpoints.
    *   Analiza estos datos (a menudo usando análisis de comportamiento e IA) para detectar amenazas avanzadas que podrían eludir las defensas tradicionales.
    *   Proporciona herramientas para investigar incidentes y responder a las amenazas (aislar el endpoint, remediar).
*   **DLP (Data Loss Prevention - Prevención de Pérdida de Datos):**
    *   Herramientas y políticas para asegurar que los datos confidenciales no se pierdan, usen indebidamente o accedan sin autorización.
    *   Puede monitorear datos en uso (en el endpoint), en movimiento (a través de la red) y en reposo (en almacenamiento).
    *   Puede bloquear acciones como copiar datos sensibles a USB, enviarlos por correo electrónico no cifrado, o subirlos a servicios en la nube no autorizados.

#### 15.4.5. Cifrado de Datos en el Host <a name="host-encryption"></a>
Proteger la confidencialidad de los datos almacenados en los dispositivos.
*   **EFS (Encrypting File System - Sistema de Archivos de Cifrado de Windows):**
    *   Característica de Windows NTFS que permite a los usuarios cifrar archivos y carpetas individuales. El cifrado está vinculado a la cuenta de usuario.
*   **FDE (Full Disk Encryption - Cifrado de Disco Completo):**
    *   Cifra todo el contenido de una unidad de disco duro o SSD, incluyendo el sistema operativo, aplicaciones, archivos de usuario, archivos temporales y espacio de intercambio.
    *   **Microsoft BitLocker (Windows):** Solución FDE integrada en versiones Pro/Enterprise de Windows. A menudo utiliza el **TPM (Trusted Platform Module)**, un chip especializado en la placa base que almacena claves de cifrado y ayuda a garantizar la integridad del proceso de arranque.
    *   **Apple FileVault (macOS):** Solución FDE integrada en macOS.
    *   **LUKS (Linux Unified Key Setup):** Estándar común para cifrado de disco en Linux.
*   **BitLocker To Go (Windows):** Herramienta para cifrar unidades extraíbles (USB, discos duros externos). No requiere un TPM, pero usa una contraseña o tarjeta inteligente para el descifrado.
*   **SEDs (Self-Encrypting Drives - Unidades de Autocifrado):** Unidades de disco duro o SSD que tienen hardware de cifrado integrado. Cifran automáticamente todos los datos escritos en la unidad. La gestión de claves se realiza mediante el firmware de la unidad.

#### 15.4.6. Integridad del Proceso de Arranque <a name="boot-integrity"></a>
Asegurar que el sistema arranque con software confiable y no haya sido manipulado.
*   **BIOS (Basic Input/Output System) y UEFI (Unified Extensible Firmware Interface):**
    *   Firmware almacenado en un chip en la placa base. BIOS es el sistema más antiguo.
    *   **UEFI** es su sucesor moderno, define una interfaz estándar entre el SO y el firmware, ofrece más características (ej: arranque más rápido, soporte para discos más grandes, modo de 64 bits) y mejor seguridad.
*   **Arranque Seguro (Secure Boot):**
    *   Una característica de UEFI.
    *   Diseñada para garantizar que un dispositivo arranque utilizando solo software que es de confianza para el Fabricante de Equipos Originales (OEM).
    *   Verifica las firmas digitales del gestor de arranque, el kernel del SO y los controladores antes de cargarlos. Si una firma no es válida o falta, el componente no se carga, previniendo la ejecución de bootkits o rootkits de bajo nivel.
*   **Integridad de Arranque de Hardware (ej: Apple Secure Enclave):** Algunos dispositivos (como los de Apple) tienen procesadores de seguridad dedicados (como el Secure Enclave) que manejan el arranque seguro, el almacenamiento de claves criptográficas y el procesamiento de datos biométricos de forma aislada del SO principal, proporcionando una raíz de confianza basada en hardware.

#### 15.4.7. Protección Física de Dispositivos <a name="physical-device-protection"></a>
Medidas para prevenir el acceso físico no autorizado, robo o daño a los dispositivos.
*   Control de acceso a instalaciones (ver sección 15.2.1).
*   **Bloqueos de Cable:** Para asegurar portátiles, proyectores y otros equipos a objetos fijos.
*   **Salas de Servidores y Telecomunicaciones Seguras:** Acceso restringido, control ambiental, videovigilancia.
*   **Jaulas de Faraday (Blindaje Electromagnético):** Recintos que bloquean campos electromagnéticos para prevenir espionaje de emisiones (TEMPEST) o proteger equipos sensibles de EMI.
*   **Etiquetas de Activos y RFID:** Para inventario y seguimiento de dispositivos.

---
### 15.5. Firewalls: Tipos y Funcionamiento (Revisión y Profundización) <a name="firewalls-types-operation"></a>
Un firewall es un sistema o grupo de sistemas que impone una política de control de acceso entre redes (o entre un host y la red).

#### 15.5.1. Propiedades, Ventajas y Limitaciones Comunes de los Firewalls <a name="firewall-common-properties"></a>
*   **Propiedades Comunes:**
    *   Resisten ataques de red (deben ser robustos).
    *   Actúan como un punto de tránsito controlado (choke point) entre la red interna y redes externas.
    *   Aplican una política de control de acceso (permitir/denegar tráfico).
*   **Ventajas Generales:**
    *   Protegen a los hosts internos de la exposición directa a Internet.
    *   Pueden bloquear el acceso a/desde servicios o sitios no deseados.
    *   Pueden registrar el tráfico para auditoría.
*   **Limitaciones Generales:**
    *   No protegen contra amenazas que no pasan a través de él (ej: malware introducido por USB, amenazas internas).
    *   Pueden ser ineficaces si están mal configurados o si sus políticas no se actualizan.
    *   Pueden introducir latencia o convertirse en un cuello de botella si están sobrecargados.
    *   Algunos tipos de tráfico cifrado (como HTTPS o VPNs) pueden ser difíciles de inspeccionar profundamente sin técnicas adicionales (como la intercepción SSL/TLS, que tiene sus propias implicaciones).

#### 15.5.2. Tipos de Firewalls <a name="firewall-types-detailed"></a>
*   **Firewall de Filtrado de Paquetes (Sin Estado - Stateless Packet Filtering):**
    *   Opera en Capa 3 (Red) y Capa 4 (Transporte) del modelo OSI.
    *   Toma decisiones de permitir/denegar basadas en información de los encabezados de los paquetes: direcciones IP de origen/destino, puertos TCP/UDP de origen/destino, tipo de protocolo (TCP, UDP, ICMP), flags TCP (SYN, ACK).
    *   Utiliza Listas de Control de Acceso (ACLs) para definir las reglas.
    *   **Sin Estado:** Examina cada paquete individualmente, sin considerar el contexto de conexiones previas o el estado de la sesión.
    *   **Ventajas:** Simple, rápido (bajo impacto en rendimiento), a menudo integrado en routers.
    *   **Desventajas:** Susceptible a IP spoofing, dificultad para manejar protocolos con negociación de puertos dinámica, problemas con paquetes IP fragmentados (solo el primer fragmento tiene info de Capa 4), ACLs pueden volverse complejas.
*   **Firewall de Inspección con Estado (Stateful Inspection Firewall):**
    *   El tipo de firewall más común y versátil hoy en día.
    *   También opera en Capas 3 y 4, pero **mantiene una tabla de estado** de todas las conexiones activas que pasan a través de él.
    *   Toma decisiones de filtrado no solo basadas en reglas, sino también en el contexto de la conexión (si es una conexión establecida, si es una respuesta a una solicitud interna, etc.).
    *   Permite automáticamente el tráfico de respuesta que pertenece a una conexión saliente iniciada desde la red interna, sin necesidad de reglas explícitas para cada puerto de respuesta.
    *   **Ventajas:** Más seguro que el sin estado, mejor manejo de protocolos complejos, más granularidad en el control.
    *   **Desventajas:** Mayor consumo de recursos que el sin estado, no previene ataques a nivel de aplicación si el contenido malicioso está dentro de una conexión permitida.
*   **Firewall de Gateway de Aplicación (Proxy Firewall / Application-Level Gateway - ALG):**
    *   Opera en la Capa 7 (Aplicación) del modelo OSI (y también puede inspeccionar capas inferiores).
    *   Actúa como un intermediario (proxy) para tipos específicos de tráfico de aplicación (HTTP, FTP, SMTP). Los clientes se conectan al proxy, y el proxy se conecta al servidor destino en nombre del cliente.
    *   Puede realizar inspección profunda del contenido de la aplicación, comprender los protocolos a nivel de aplicación y tomar decisiones de filtrado basadas en el contenido.
    *   **Ventajas:** Alto nivel de seguridad para los protocolos que soporta, puede ocultar la estructura de la red interna, puede realizar autenticación a nivel de aplicación.
    *   **Desventajas:** Puede introducir mayor latencia, requiere un proxy específico para cada protocolo de aplicación que se quiera filtrar, puede ser más complejo de configurar.
*   **Firewall de Próxima Generación (NGFW - Next-Generation Firewall):**
    *   Combina la funcionalidad de un firewall con estado con otras capacidades de seguridad de red, tales como:
        *   **Inspección Profunda de Paquetes (DPI - Deep Packet Inspection):** Examina el contenido (payload) de los paquetes, no solo los encabezados.
        *   **Sistema de Prevención de Intrusiones (IPS - Intrusion Prevention System) integrado.**
        *   **Conocimiento y Control de Aplicaciones:** Identifica y controla el uso de aplicaciones específicas (ej: Facebook, YouTube, BitTorrent), independientemente del puerto que utilicen.
        *   **Inteligencia de Amenazas:** Puede integrar feeds de inteligencia de amenazas para bloquear tráfico de fuentes maliciosas conocidas.
        *   Integración con otras soluciones de seguridad (sandboxing, antimalware).
*   **Otros Tipos/Implementaciones:**
    *   **Firewall Basado en Host:** Software que se ejecuta en un dispositivo individual (ver sección 15.4.4).
    *   **Firewall Transparente (o Firewall en Modo Bridge):** Se inserta en un segmento de red como un "cable con inteligencia", filtrando el tráfico entre dos interfaces de Capa 2 sin necesidad de reconfigurar el direccionamiento IP de la red.
    *   **Firewall Híbrido:** Combina características de diferentes tipos de firewall (ej: un firewall con estado que también incluye funcionalidades de proxy para ciertas aplicaciones).

---
### 15.6. Aseguramiento del Acceso Inalámbrico (WLAN Security) <a name="wlan-security"></a>
Las redes inalámbricas presentan desafíos de seguridad únicos debido a la naturaleza abierta del medio de transmisión (ondas de radio).

#### 15.6.1. Amenazas Específicas a WLANs (Revisión) <a name="wlan-threats-review"></a>
*   **Intercepción de Datos:** Si el tráfico no está cifrado, puede ser capturado y leído por cualquiera dentro del alcance.
*   **Intrusos Inalámbricos:** Acceso no autorizado a la red.
*   **Ataques de Denegación de Servicio (DoS):** Interferencia (jamming), desautenticación.
*   **Puntos de Acceso No Autorizados (Rogue APs) y Gemelos Malvados (Evil Twins).**

#### 15.6.2. Técnicas de Seguridad Inalámbrica (Históricas y Actuales) <a name="wireless-security-techniques"></a>
*   **Mecanismos de Seguridad Tempranos (Considerados Débiles o Ineficaces por sí solos):**
    *   **Encubrimiento de SSID (Ocultar el Nombre de la Red):** Deshabilitar la difusión del SSID en las tramas de baliza del AP.
        *   **Realidad:** El SSID se puede descubrir fácilmente con herramientas de análisis de Wi-Fi, ya que todavía se transmite en otras tramas (ej: solicitudes de sondeo de los clientes). Ofrece una seguridad mínima por oscuridad.
    *   **Filtrado de Direcciones MAC:** Configurar el AP para permitir o denegar el acceso solo a dispositivos con direcciones MAC específicas.
        *   **Realidad:** Las direcciones MAC pueden ser fácilmente falsificadas (MAC spoofing). Es una medida administrativa, no una barrera de seguridad robusta.
*   **Métodos de Autenticación 802.11:**
    *   **Autenticación de Sistema Abierto:** Sin autenticación. Cualquier cliente puede asociarse. Usado en Wi-Fi público. La seguridad recae en el cliente (ej: usar VPN).
    *   **Autenticación de Clave Compartida (Basada en Contraseña/Clave):**
        *   **WEP (Wired Equivalent Privacy - Obsoleto e Inseguro):**
            *   Primer intento de seguridad Wi-Fi. Utilizaba el algoritmo RC4.
            *   **Vulnerabilidades Críticas:** Clave estática compartida, IV (Vector de Inicialización) pequeño y reutilizado, sin gestión de claves robusta. La clave WEP puede ser descifrada en minutos. **No debe usarse.**
        *   **WPA (Wi-Fi Protected Access):**
            *   Creado como un reemplazo intermedio y más seguro para WEP, diseñado para funcionar en hardware WEP existente.
            *   Utiliza **TKIP (Temporal Key Integrity Protocol)** para el cifrado, que genera dinámicamente claves por paquete y mejora la gestión de claves respecto a WEP. También incluye un **MIC (Message Integrity Check)** llamado Michael para proteger la integridad.
            *   Aunque mejor que WEP, TKIP también ha demostrado tener vulnerabilidades.
        *   **WPA2 (Wi-Fi Protected Access II):**
            *   Estándar actual y **mínimo recomendado** para la seguridad Wi-Fi.
            *   Requiere el uso de **AES (Advanced Encryption Standard)** para el cifrado, que es mucho más robusto que TKIP.
            *   Utiliza **CCMP (Counter Mode Cipher Block Chaining Message Authentication Code Protocol)**, que se basa en AES para proporcionar confidencialidad, integridad y autenticación del origen de los datos.
            *   **Modos WPA2:**
                *   **WPA2-Personal (o WPA2-PSK - Pre-Shared Key):** Diseñado para redes domésticas y pequeñas oficinas. Todos los usuarios y el AP comparten la misma contraseña (frase de contraseña). Vulnerable a ataques de diccionario offline si la contraseña es débil.
                *   **WPA2-Enterprise (o WPA2-802.1X):** Diseñado para entornos empresariales. Requiere un servidor de autenticación externo, típicamente **RADIUS (Remote Authentication Dial-In User Service)**. Los clientes se autentican individualmente usando credenciales (ej: nombre de usuario/contraseña, certificados digitales) a través del estándar **IEEE 802.1X** y el **EAP (Extensible Authentication Protocol)**. Proporciona autenticación por usuario y gestión centralizada de claves.
        *   **WPA3:**
            *   El estándar de seguridad Wi-Fi más reciente, que ofrece mejoras significativas sobre WPA2.
            *   **WPA3-Personal:**
                *   Reemplaza PSK con **SAE (Simultaneous Authentication of Equals)**, también conocido como Dragonfly Key Exchange.
                *   SAE es resistente a ataques de diccionario offline, ya que la clave precompartida no se transmite directamente durante el handshake.
            *   **WPA3-Enterprise:**
                *   También usa autenticación 802.1X/EAP, pero exige una suite criptográfica más fuerte (modo de 192 bits opcional) y mejora la consistencia de la seguridad. Se alinea con CNSA (Commercial National Security Algorithm Suite) para redes de alta seguridad.
            *   **Seguridad para Redes Abiertas (Wi-Fi Enhanced Open™):**
                *   En redes Wi-Fi públicas (cafeterías, aeropuertos) que no requieren autenticación, WPA3 introduce **OWE (Opportunistic Wireless Encryption)**.
                *   OWE cifra el tráfico individualmente entre cada cliente y el AP, incluso sin una contraseña, protegiendo contra la escucha pasiva. No proporciona autenticación.
            *   **Protocolo de Aprovisionamiento de Dispositivos (DPP - Wi-Fi Easy Connect™):**
                *   Diseñado para simplificar la incorporación segura de dispositivos IoT (que a menudo no tienen interfaz de usuario para ingresar contraseñas), reemplazando el vulnerable WPS (Wi-Fi Protected Setup).
                *   Puede usar métodos como escanear un código QR que contiene la clave pública del dispositivo para incorporarlo a la red.

#### 15.6.3. Configuración de Seguridad Inalámbrica (Ejemplo Práctico) <a name="wireless-security-config"></a>
*   **Enrutador Doméstico:**
    *   Acceder a la interfaz de configuración web del router/AP.
    *   Seleccionar el método de seguridad (ej: WPA2-Personal o WPA3-Personal si está disponible).
    *   Elegir el método de cifrado (ej: AES para WPA2, o el predeterminado para WPA3).
    *   Establecer una contraseña (frase de contraseña) fuerte y única.
    *   Considerar deshabilitar WPS.
*   **Configuración Empresarial (WPA2/WPA3-Enterprise):**
    *   Configurar el AP para que se comunique con un servidor RADIUS.
    *   Se necesita la dirección IP del servidor RADIUS, los puertos UDP (1812/1813 o 1645/1646) y una clave compartida secreta entre el AP y el servidor RADIUS.
    *   Los clientes se configuran para usar 802.1X y el método EAP apropiado (EAP-TLS, PEAP, etc.).

</details>