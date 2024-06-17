_cmd_
● \l     => listar base de datos = muestra directorio o carpetas
● \c     => conectar base de datos = entra a carpeta
● \dt    => listar todas las tablas = muestra tablas
● \d     => describir una tabla = muestra tabla por dentro sus tipos y restricciones

*terminal o consola*
● \i ejecuta codigo en terminal o consola

*powershell*
Server [localhost]:
Database [postgres]:
Port [5432]:
Username [postgres]:
Contraseña para usuario postgres:

psql (14.11)
ADVERTENCIA: El código de página de la consola (850) difiere del código
            de página de Windows (1252).
            Los caracteres de 8 bits pueden funcionar incorrectamente.
            Vea la página de referencia de psql «Notes for Windows users»
            para obtener más detalles.
Digite «help» para obtener ayuda.

*Dashboard pgAdmin postgre*
● servers => PostgreSQL => database => Schemas => table boton derecho > PROPERTIES > modifica campos
● QueryTool (boton forma cilindro): dice en que base de datos y usuario estas. Aqui ingresas los codigos
● play (boton flecha derecha o F5): ejecuta el codigo y muestra tabla

*tipo de datos*
● varchar => string
● integer => numero
● float   => numero y decimal
● serial  => ciclo autocompleta

*tipo de columna*
● VARCHAR tipo de columna
● SMALLINT tipo de columna
● INTEGER tipo de columna
● BIGINT tipo de columna
● DECIMAL tipo de columna
● TIMESTAMP tipo de columna
● DATE tipo de columna
● TIME tipo de columna
● BOOLEAN tipo de columna
● TEXT tipo de columna
● SERIAL tipo de columna
● UUID tipo de columna
● JSON tipo de columna
● JSONB tipo de columna

**Clausulas o comandos**
# CREATE DATABASE = crea carpeta principal o padre
# CREATE TABLE = crea tabla, ejemplo: CREATE TABLE soyNombreTable (id int, nombre varchar(30), apellido varchar);
# INSERT INTO soynombretabla values (1, 'soystring');
# INSERT INTO soynombretabla (id, nombre) values (2, 'soystring');
# SELECT * FROM = muestra la tabla
● SELECT    => consulta
● *         => Comodín todas las columnas
● FROM      => de
● demo      => Nombre de la tabla.
● ;         => termina con un punto y coma para separar varias instrucciones.
# = : igual
# OR: o
# AND: y
# LIMIT: limita cantidad de filas a mostrar en resultado, ejemplo LIMIT 1;
# GROUP BY => por grupo
# ORDER BY: ordenar por
# DESC: orden descendente
# ASC: orden ascendente
# AS       => alias o apodo columna
# set => fijar
# like: busca un campo con otro valor, ejemplo: like juan% resultado: registro juan rulfo
# ILIKE: busca nombre en mayuscula o minuscula
# SET DEFAULT: fijado por defecto
# DROP   => elimina tabla, ejemplo: DROP TABLE IF EXISTS soyNombreTable;
# DROP TABLE IF EXISTS reparto;
# DROP CASCADE => elimina registros dependientes de otros, en tablas relacionadas 
# TRUNCATE TABLE => vacia tabla (campos de valores)
# ADD    => agregar
# DELETE => elimina registros (filas, columnas o campos de valores)
# ON DELETE cascade: se pone en registro tabla hija y borra registro tabla hija y registro tabla padre
# ALTER  => establecer o eliminar el valor predeterminado de una columna.
# CHANGE => renombrar una columna, cambiar su tipo de datos o moverla dentro del esquema.
# MODIFY => hacer todo lo que CHANGE COLUMN puede hacer, pero sin cambiar el nombre de la columna.
# UPDATE nombre_table SET nombre_columna = 'nuevo_valor' WHERE condicion;
SELECT id FROM peliculas WHERE pelicula = 'Titanic';4
SELECT actor FROM reparto WHERE id_pelicula = (SELECT id FROM peliculas WHERE pelicula = 'Titanic');5
SELECT COUNT(*) FROM reparto WHERE actor = 'Harrison Ford';
SELECT * FROM peliculas WHERE ano_estreno BETWEEN 1990 AND 1999 ORDER BY pelicula ASC;7
SELECT pelicula, LENGTH(pelicula) AS longitud_titulo FROM peliculas;8
SELECT MAX(LENGTH(pelicula)) AS longitud_maxima FROM peliculas;
ALTER TABLE phones alter column mac_address type varchar(50);
ALTER TABLE phones alter column mac_address set not null;
ALTER TABLE nombre_table ADD COLUMN nombre_col TIPO_DATO;
ALTER TABLE nombre_tabla DROP COLUMN nombre_col;
ALTER TABLE nombre_tabla ADD CONSTRAINT fk_nombre_columna FOREIGN KEY(nombre_columna) REFERENCES nombre_tabla (nombre_columna);
ALTER TABLE respuestas DROP CONSTRAINT respuestas_pkey; <!-- Eliminar restricción de unicidad en la columna id_respuesta. -->
ALTER TABLE usuarios ADD CHECK (edad >= 18); <!-- impide insertar usuarios menores de 18 años. -->
ALTER TABLE usuarios ADD COLUMN email VARCHAR(100) UNIQUE;
<!-- Requerimiento 8: Implementa borrado en cascada de las respuestas al borrar un usuario y borrar el primer usuario para probar la implementación. -->
ALTER TABLE respuestas ADD CONSTRAINT fk_usuario_respuesta FOREIGN KEY (id_usuario) REFERENCES usuarios(id_usuario) ON DELETE CASCADE;

# ALTER SEQUENCE > RESTART WITH
despues de delete registro se reinicia desde el id 1 con dato tipo serial
ejemplo:
ALTER SEQUENCE cocina_chilena_id_seq > RESTART WITH 1;
# returning => muestra resultado de comando

*operaciones matematicas*
# SUM      => suma
# AVG      => promedio
# COUNT    => cantidad
# MAX      => maximo
# MIN      => minimo

*formato*
# LEFT: Extrae un subconjunto de caracteres desde el inicio de una cadena. ejemplo: LEFT('PostgreSQL', 4) resultado:'Post' 
# COALESCE: Devuelve el primer valor no nulo de la lista de argumentos. Puedes traer los nulos y asignarles un valor
# LOWER: Convierte todos los caracteres de una cadena a minúsculas.
# UPPER: Convierte todos los caracteres de una cadena a mayúsculas.
# LENGTH: Retorna la longitud de una cadena de texto.

*unión entre tablas*
# ● Inner Join: Se usa para unificar filas de dos o más tablas siempre que exista una columna que las relacione.
# ● Left outer Join: Entrega todos los registros de la tabla de la izquierda y las coincidencias de la tabla derecha.
# ● Right outer Join: Muestra todos los registros de la tabla de la derecha y las coincidencias de la tabla izquierda.
# ● Full Outer Join: Retorna todos los registros que coincidan en la tabla derecha e izquierda.

# ● Cross Join: Combina cada fila de una tabla con cada fila de otra tabla.
# ● Self Join: Se utiliza para unir una tabla consigo misma.
# ● Equi Join: Es un tipo de Inner Join que se utiliza para unir dos tablas que tienen una columna en común.
# ● Natural Join: Es un tipo de Inner Join que se utiliza para unir dos tablas que tienen columnas con el mismo nombre y tipo de datos.

<!-- TABLAS RELACIONADAS clave foranea -->
# FORMA A
 FOREIGN KEY (autor_id) REFERENCES autores (id) <!-- columna tabla hija references columna tabla padre, con palabra foreign key -->
# FORMA B
id_pelicula INTEGER REFERENCES peliculas(id), <!-- columna tabla hija references columna tabla padre, sin palabra foreign key -->

*comandos de transacciones SQL*
# begin: inicio
# commit: guarda
# rollback: retrocede cambios
# savepoint: guarda un punto de partida
# set transaction: le asigna nombre a la transaccion
# release savepoint: borra el punto de partida

**importar datos de excel csv**
-- delimitier indicar cual signo sera el separador de datos para copiar en cada columna
-- header copia nombre de columnas
COPY nombre_tabla FROM 'ruta_archivo' DELIMITER ',' csv header;
ejemplo:
\copy peliculas FROM 'C:\Users\jonat\Desktop\javascript\desafio-evaluado-19-definicion-de-tablas\peliculas.csv' DELIMITER ',' CSV HEADER;
\copy reparto FROM 'C:\Users\jonat\Desktop\javascript\desafio-evaluado-19-definicion-de-tablas\reparto.csv' DELIMITER ',' CSV HEADER;

**tabla sustituta o temporal**
# importa tabla: insert into > select from
<!-- tablas intermedias -->
# crea tabla intermedia => primera forma
insert into tabla_nueva select columnas from tabla_antigua create tabla y columnas
# crea tabla intermedia => segunda forma
select columnas_nuevas into tabla_nueva from tabla_antigua
# crea tabla intermedia => segunda forma => datos no duplicados
select distinct columnas_nuevas into tabla_nueva from tabla_antigua