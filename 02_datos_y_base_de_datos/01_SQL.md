### 1. Comandos Básicos en PostgreSQL (`cmd`)

1. **\l**: Listar base de datos = muestra directorio o carpetas.
2. **\c**: Conectar base de datos = entra a carpeta.
3. **\dt**: Listar todas las tablas = muestra tablas.
4. **\d**: Describir una tabla = muestra tabla por dentro sus tipos y restricciones.

### 2. Terminal o Consola

1. **\i**: Ejecuta código en terminal o consola.

### 3. PowerShell

- **Server [localhost]**:
- **Database [postgres]**:
- **Port [5432]**:
- **Username [postgres]**:
- **Contraseña para usuario postgres**:

```sh
psql (14.11)
ADVERTENCIA: El código de página de la consola (850) difiere del código
            de página de Windows (1252).
            Los caracteres de 8 bits pueden funcionar incorrectamente.
            Vea la página de referencia de psql «Notes for Windows users»
            para obtener más detalles.
Digite «help» para obtener ayuda.
```

### 4. Dashboard pgAdmin PostgreSQL

1. **Modificar campos**:
    - Servers => PostgreSQL => Database => Schemas => Table => Right-click > Properties > Modifica campos.
2. **QueryTool (botón forma cilindro)**: Dice en qué base de datos y usuario estás. Aquí ingresas los códigos.
3. **Play (botón flecha derecha o F5)**: Ejecuta el código y muestra la tabla.

### 5. Tipos de Datos y Columnas

**Tipos de Datos**:
1. **varchar**: String.
2. **integer**: Número.
3. **float**: Número y decimal.
4. **serial**: Ciclo autocompleta.

**Tipos de Columna**:
1. **VARCHAR**
2. **SMALLINT**
3. **INTEGER**
4. **BIGINT**
5. **DECIMAL**
6. **TIMESTAMP**
7. **DATE**
8. **TIME**
9. **BOOLEAN**
10. **TEXT**
11. **SERIAL**
12. **UUID**
13. **JSON**
14. **JSONB**

### 6. Cláusulas o Comandos

1. **CREATE DATABASE**: Crea carpeta principal o padre.
2. **CREATE TABLE**: Crea tabla, ejemplo: `CREATE TABLE soyNombreTable (id int, nombre varchar(30), apellido varchar);`
3. **INSERT INTO**: Inserta valores en la tabla.
    - **Ejemplo**: `INSERT INTO soynombretabla values (1, 'soystring');`
    - **Ejemplo**: `INSERT INTO soynombretabla (id, nombre) values (2, 'soystring');`
4. **SELECT * FROM**: Muestra la tabla.
5. **SELECT**: Consulta.
6. **FROM**: De.
7. **demo**: Nombre de la tabla.
8. **;**: Termina con un punto y coma para separar varias instrucciones.
9. **=**: Igual.
10. **OR**: O.
11. **AND**: Y.
12. **LIMIT**: Limita cantidad de filas a mostrar en resultado, ejemplo `LIMIT 1;`.
13. **GROUP BY**: Agrupa por.
14. **ORDER BY**: Ordenar por.
15. **DESC**: Orden descendente.
16. **ASC**: Orden ascendente.
17. **AS**: Alias o apodo columna.
18. **SET**: Fijar.
19. **LIKE**: Busca un campo con otro valor, ejemplo: `LIKE 'juan%'` resultado: registro "juan rulfo".
20. **ILIKE**: Busca nombre en mayúscula o minúscula.
21. **SET DEFAULT**: Fijado por defecto.
22. **DROP**: Elimina tabla, ejemplo: `DROP TABLE IF EXISTS soyNombreTable;`.
23. **DROP CASCADE**: Elimina registros dependientes de otros, en tablas relacionadas.
24. **TRUNCATE TABLE**: Vacía tabla (campos de valores).
25. **ADD**: Agregar.
26. **DELETE**: Elimina registros (filas, columnas o campos de valores).
27. **ON DELETE CASCADE**: Borra registro tabla hija y registro tabla padre.
28. **ALTER**: Establecer o eliminar el valor predeterminado de una columna.
29. **CHANGE**: Renombrar una columna, cambiar su tipo de datos o moverla dentro del esquema.
30. **MODIFY**: Hacer todo lo que `CHANGE COLUMN` puede hacer, pero sin cambiar el nombre de la columna.
31. **UPDATE**: Actualiza registros.
    - **Ejemplo**: `UPDATE nombre_table SET nombre_columna = 'nuevo_valor' WHERE condicion;`
32. **SELECT ejemplos**:
    - `SELECT id FROM peliculas WHERE pelicula = 'Titanic';`
    - `SELECT actor FROM reparto WHERE id_pelicula = (SELECT id FROM peliculas WHERE pelicula = 'Titanic');`
    - `SELECT COUNT(*) FROM reparto WHERE actor = 'Harrison Ford';`
    - `SELECT * FROM peliculas WHERE ano_estreno BETWEEN 1990 AND 1999 ORDER BY pelicula ASC;`
    - `SELECT pelicula, LENGTH(pelicula) AS longitud_titulo FROM peliculas;`
    - `SELECT MAX(LENGTH(pelicula)) AS longitud_maxima FROM peliculas;`
33. **ALTER TABLE**: Modificar estructura de la tabla.
    - **Ejemplos**:
        - `ALTER TABLE phones alter column mac_address type varchar(50);`
        - `ALTER TABLE phones alter column mac_address set not null;`
        - `ALTER TABLE nombre_table ADD COLUMN nombre_col TIPO_DATO;`
        - `ALTER TABLE nombre_tabla DROP COLUMN nombre_col;`
        - `ALTER TABLE nombre_tabla ADD CONSTRAINT fk_nombre_columna FOREIGN KEY(nombre_columna) REFERENCES nombre_tabla (nombre_columna);`
        - `ALTER TABLE respuestas DROP CONSTRAINT respuestas_pkey;`
        - `ALTER TABLE usuarios ADD CHECK (edad >= 18);`
        - `ALTER TABLE usuarios ADD COLUMN email VARCHAR(100) UNIQUE;`
        - `ALTER TABLE respuestas ADD CONSTRAINT fk_usuario_respuesta FOREIGN KEY (id_usuario) REFERENCES usuarios(id_usuario) ON DELETE CASCADE;`
34. **ALTER SEQUENCE > RESTART WITH**: Reiniciar secuencia.
    - **Ejemplo**: `ALTER SEQUENCE cocina_chilena_id_seq > RESTART WITH 1;`
35. **returning**: Muestra resultado de comando.

### 7. Operaciones Matemáticas

1. **SUM**: Suma.
2. **AVG**: Promedio.
3. **COUNT**: Cantidad.
4. **MAX**: Máximo.
5. **MIN**: Mínimo.

### 8. Formato

1. **LEFT**: Extrae un subconjunto de caracteres desde el inicio de una cadena.
    - **Ejemplo**: `LEFT('PostgreSQL', 4)` resultado: `'Post'`.
2. **COALESCE**: Devuelve el primer valor no nulo de la lista de argumentos.
3. **LOWER**: Convierte todos los caracteres de una cadena a minúsculas.
4. **UPPER**: Convierte todos los caracteres de una cadena a mayúsculas.
5. **LENGTH**: Retorna la longitud de una cadena de texto.

### 9. Unión Entre Tablas

1. **Inner Join**: Unifica filas de dos o más tablas siempre que exista una columna que las relacione.
2. **Left Outer Join**: Entrega todos los registros de la tabla de la izquierda y las coincidencias de la tabla derecha.
3. **Right Outer Join**: Muestra todos los registros de la tabla de la derecha y las coincidencias de la tabla izquierda.
4. **Full Outer Join**: Retorna todos los registros que coincidan en la tabla derecha e izquierda.
5. **Cross Join**: Combina cada fila de una tabla con cada fila de otra tabla.
6. **Self Join**: Se utiliza para unir una tabla consigo misma.
7. **Equi Join**: Un tipo de Inner Join que se utiliza para unir dos tablas que tienen una columna en común.
8. **Natural Join**: Un tipo de Inner Join que se utiliza para unir dos tablas que tienen columnas con el mismo nombre y tipo de datos.

### 10. Tablas Relacionadas Clave Foránea

1. **FORMA A**: `FOREIGN KEY (autor_id) REFERENCES autores (id)`
2. **FORMA B**: `id_pelicula INTEGER REFERENCES peliculas(id)`

### 11. Comandos de Transacciones SQL

1. **BEGIN**: Inicio.
2. **COMMIT**: Guarda.
3. **ROLLBACK**: Retrocede cambios.
4. **SAVEPOINT**: Guarda un punto de partida.
5. **SET TRANSACTION**: Le asigna nombre a la transacción.
6. **RELEASE SAVEPOINT**: Borra el punto de partida.

### 12. Importar Datos de Excel CSV

1. **Importar Datos**:
    - Delimitier: Indicar cuál signo será el separador de datos para copiar en cada columna.
    - Header: Copia nombre de columnas.
    - **Ejemplo**:
        ```sh
        COPY nombre_tabla FROM 'ruta_archivo' DELIMITER ',' csv header;
        \copy peliculas FROM 'C:\Users\jonat\Desktop\javascript\desafio-evaluado-19-definicion-de-tablas\peliculas.csv' DELIMITER ',' CSV HEADER;
        \copy reparto FROM 'C:\Users\jonat\Desktop\javascript\desafio-evaluado-19-definicion-de-tablas\reparto.csv' DELIMITER ',' CSV HEADER;
        ```

### 13. Tabla Sustituta o Temporal

1. **Importar Tabla**: `insert into > select from`.

**Tablas Intermedias**:

1. **Crea Tabla Intermedia - Primera Forma**:
    - ```sql
      INSERT INTO tabla_nueva SELECT columnas FROM tabla_antigua CREATE TABLE y columnas;
      ```

2. **Crea Tabla Intermedia - Segunda Forma**:
    - ```sql
      SELECT columnas_nuevas INTO tabla_nueva FROM tabla_antigua;
      ```

3. **Crea Tabla Intermedia - Segunda Forma - Datos No Duplicados**:
    - ```sql
      SELECT DISTINCT columnas_nuevas INTO tabla_nueva FROM tabla_antigua;
      ```

