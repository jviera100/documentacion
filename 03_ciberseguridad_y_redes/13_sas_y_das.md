# Comparativa de métodos de análisis de seguridad

| Sigla    | Significado                                                                                       | Tipo de análisis                                                                  | Cuándo se usa                                           | Visibilidad típica        | Ejemplos de herramientas                    |
| -------- | ------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | ------------------------------------------------------- | ------------------------- | ------------------------------------------- |
| **SAST** | Static Application Security Testing                                                               | **Estático**: analiza el **código fuente** o binario sin ejecutarlo               | Detectar vulnerabilidades antes de compilar o desplegar | **Caja blanca**           | SonarQube, Checkmarx, Veracode, Fortify     |
| **SASH** | Static Application Security **Hardening** *(no estándar, usado en formaciones)*                   | Similar a SAST pero con enfoque en endurecer y aplicar buenas prácticas al código | Revisiones de seguridad durante el desarrollo           | **Caja blanca**           | Veracode (hardening mode), Codacy           |
| **DAST** | Dynamic Application Security Testing                                                              | **Dinámico**: analiza la app en ejecución como un usuario externo                 | Encontrar fallos explotables en producción o staging    | **Caja negra** / **gris** | OWASP ZAP, Burp Suite, IBM AppScan          |
| **DASH** | Dynamic Application Security **Hardening** *(no estándar, usado en formaciones)*                  | Similar a DAST pero enfocado en reforzar configuración y seguridad en tiempo real | Ajustar seguridad tras encontrar fallos en producción   | **Caja negra** / **gris** | Acunetix, IBM AppScan (config hardening)    |
| **IAST** | Interactive Application Security Testing                                                          | **Híbrido**: combina SAST y DAST, analiza código y ejecución al mismo tiempo      | Detectar fallos en tiempo real con más contexto         | **Caja gris**             | Contrast Security, Seeker, HCL AppScan IAST |


| Grupo | Letra final | Significado | Enfoque |
|-------|-------------|-------------|---------|
| **T** | Testing     | Encontrar fallos | Detección (puede ser ofensivo o defensivo) |
| **H** | Hardening   | Corregir y reforzar | Defensa (proactivo) |

**Ejemplos:**
- **SAST** → Revisar código estáticamente para encontrar vulnerabilidades (detección).  
- **SASH** → Revisar y además corregir/fortalecer el código antes de ejecutarlo (defensa).  
- **DAST** → Simular ataques contra la aplicación ya en ejecución (detección ofensiva).  
- **DASH** → Ajustar y reforzar seguridad en producción después de pruebas (defensa reactiva).  
- **IAST** → Combina análisis estático y dinámico de forma interactiva (detección y validación en tiempo real).


# 🧠 Clasificación de Técnicas: ¿Pentesting o Defensa?

| Técnica / Acrónimo | Nombre Completo                            | ¿Pentesting o Defensa? | Tipo de Análisis        | Acceso al Código | Ejecución | Propósito Principal                          |
|--------------------|--------------------------------------------|-------------------------|--------------------------|------------------|-----------|------------------------------------------------|
| **SAST**           | Static Application Security Testing        | Defensa                 | Estático (White Box)     | Sí               | No        | Detectar vulnerabilidades en el código fuente |
| **DAST**           | Dynamic Application Security Testing       | Defensa / Pentesting    | Dinámico (Black Box)     | No               | Sí        | Detectar fallos en ejecución y configuración  |
| **IAST**           | Interactive Application Security Testing   | Defensa                 | Híbrido (White + Black)  | Parcial          | Sí        | Detectar vulnerabilidades en tiempo real      |
| **RASP**           | Runtime Application Self-Protection        | Defensa                 | Activo en producción     | No               | Sí        | Bloquear ataques en tiempo real               |
| **Pentesting**     | Penetration Testing                        | Pentesting              | Manual + Automatizado    | No               | Sí        | Simular ataques reales para evaluar riesgos   |

---

## 🧪 ¿Qué los diferencia?

- **SAST**: Analiza el código sin ejecutarlo. Ideal en etapas tempranas del desarrollo.
- **DAST**: Ataca la aplicación en ejecución como lo haría un atacante externo.
- **IAST**: Se integra dentro de la app y analiza comportamiento + código en tiempo real.
- **RASP**: Defensa activa que detecta y bloquea ataques mientras ocurren.
- **Pentesting**: Simulación manual o semiautomática de ataques reales. Puede usar DAST y otras técnicas como parte del proceso.

---

## 🧰 Herramientas Comunes

| Técnica | Herramientas Populares                          |
|--------|--------------------------------------------------|
| SAST   | SonarQube, Checkmarx, Fortify, Semgrep          |
| DAST   | OWASP ZAP, Burp Suite, Netsparker, Arachni      |
| IAST   | Contrast Security, Seeker, Hdiv, Veracode IAST  |
| RASP   | Sqreen, Contrast Protect, Imperva RASP          |
| Pentest| Metasploit, Cobalt Strike, Nmap, manual scripts |

---

## 🧠 ¿Cómo se integran?

```text
[Desarrollo]
   ↳ SAST → Corrige código antes de compilar
   ↳ IAST → Detecta vulnerabilidades durante pruebas
   ↳ DAST → Escanea app en ejecución
   ↳ RASP → Protege en producción
   ↳ Pentesting → Evalúa todo el entorno como atacante
```
## 🧠 Recomendación Pedagógica
`-🧱 SAST + IAST para desarrolladores que quieren prevenir desde el código.

-🧪 DAST + Pentesting para equipos de seguridad que buscan vulnerabilidades explotables.

-🛡️ RASP para entornos críticos que necesitan defensa activa en producción.