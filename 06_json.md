
### 1. JSON Export e Import

#### 1.1 Exportar JSON

1. **`stringify` = EXPORTA**
    - Convierte un objeto a una cadena de caracteres en formato JSON.
      ```js
      let objeto = { nombre: "Juan", edad: 30, ciudad: "Santiago" };
      let jsonString = JSON.stringify(objeto);
      console.log(jsonString); // {"nombre":"Juan","edad":30,"ciudad":"Santiago"}
      ```

#### 1.2 Importar JSON

1. **`parse` = IMPORTA**
    - Convierte una cadena de caracteres en formato JSON a un objeto.
      ```js
      let jsonString = '{"nombre":"Juan","edad":30,"ciudad":"Santiago"}';
      let objeto = JSON.parse(jsonString);
      console.log(objeto); // { nombre: "Juan", edad: 30, ciudad: "Santiago" }
      ```

### 2. Ejemplos Prácticos

#### 2.1 Exportar e Importar un Objeto Complejo

1. **Exportar un Objeto Complejo**:
    - ```js
      let objetoComplejo = {
          nombre: "Empresa XYZ",
          empleados: [
              { nombre: "Juan", puesto: "Desarrollador" },
              { nombre: "Ana", puesto: "Diseñadora" }
          ],
          ubicacion: "Chile"
      };
      let jsonStringComplejo = JSON.stringify(objetoComplejo);
      console.log(jsonStringComplejo);
      // {"nombre":"Empresa XYZ","empleados":[{"nombre":"Juan","puesto":"Desarrollador"},{"nombre":"Ana","puesto":"Diseñadora"}],"ubicacion":"Chile"}
      ```

2. **Importar un Objeto Complejo**:
    - ```js
      let jsonStringComplejo = '{"nombre":"Empresa XYZ","empleados":[{"nombre":"Juan","puesto":"Desarrollador"},{"nombre":"Ana","puesto":"Diseñadora"}],"ubicacion":"Chile"}';
      let objetoComplejo = JSON.parse(jsonStringComplejo);
      console.log(objetoComplejo);
      // { nombre: "Empresa XYZ", empleados: [ { nombre: "Juan", puesto: "Desarrollador" }, { nombre: "Ana", puesto: "Diseñadora" } ], ubicacion: "Chile" }
      ```

### 3. Uso Avanzado de JSON

#### 3.1 Espaciado y Formato

1. **Formatear la Cadena JSON con Espaciado**:
    - El método `JSON.stringify` puede aceptar un tercer parámetro para añadir espaciado, lo que mejora la legibilidad.
      ```js
      let objeto = { nombre: "Juan", edad: 30, ciudad: "Santiago" };
      let jsonStringPretty = JSON.stringify(objeto, null, 2);
      console.log(jsonStringPretty);
      /*
      {
        "nombre": "Juan",
        "edad": 30,
        "ciudad": "Santiago"
      }
      */
      ```

#### 3.2 Filtrar Propiedades

1. **Filtrar Propiedades durante la Exportación**:
    - Puedes usar el segundo parámetro de `JSON.stringify` para filtrar propiedades del objeto que deseas convertir.
      ```js
      let objeto = { nombre: "Juan", edad: 30, ciudad: "Santiago" };
      let jsonStringFiltered = JSON.stringify(objeto, ["nombre", "ciudad"]);
      console.log(jsonStringFiltered); // {"nombre":"Juan","ciudad":"Santiago"}
      ```

