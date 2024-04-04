<!-- pgAdmin tables -->
servers => PostgreSQL => Schemas => tables
# pgAdmin QueryTool (boton forma cilindro)
dice en que base de datos y usuario estas. Aqui ingresas los codigos
# pgAdmin play (boton flecha derecha o F5)
ejecuta el codigo y muestra tabla
# pgAdmin > TABLE SEQUENCE => elige TABLA > boton derecho > PROPERTIES > modifica campos

# SELECT * FROM = muestra la tabla
● SELECT    => Indica que la consulta a realizar será de selección
● *         => Comodín para indicar que se deben seleccionar todos los campos,
                o sea todas las columnas de la tabla
● FROM      => Indica de qué tabla específica se va a seleccionar
● demo      => Nombre de la tabla. En este caso esta viene precargada en
                sqliteonline.
● ;         => Una consulta termina con un punto y coma, de esta forma podemos
                separar varias instrucciones.

<!--  tipo de datos -->
● varchar => string
● integer => numero
● float   => numero y decimal
● serial  => ciclo autocompleta


<!--  Clausulas: -->
# from
● select * from demo; // de la tabla llamada "demo"
# =
● select * from tabla where c4 = true; // de la tabla llamada "where" columna c4 tenga valor true
# OR
● select * from tabla where c1 < 50 OR c2 > 30;
# AND
● select * from tabla where c1 < 50 AND c2 > 30;
# LIMIT
● SELECT * FROM tabla where c1 = 98 OR c3 = 'b' LIMIT 1;
# ORDER BY
SELECT * FROM tabla ORDER BY c1
# DESC
SELECT * FROM tabla ORDER BY c1 Desc LIMIT 1
# CREATE DATABASE = carpeta
# CREATE TABLE = tabla
nombre tabla y columnas con limite de caracteres
ejemplo:
CREATE TABLE soyNombreTable (id int, nombre varchar(30), apellido varchar);
# \l     => listar base de datos = muestra directorio o carpetas
# \c     => conectar base de datos = entra a carpeta
# \dt    => listar todas las tablas = muestra tablas
# \d     => describir una tabla = muestra tabla por dentro sus tipos y restricciones
# INSERT INTO soynombretabla values (1, 'soystring');
# INSERT INTO soynombretabla (id, nombre) values (2, 'soystring');
# SELECT => consulta
# ADD    => agregar
# DROP   => elimina tabla
ejemplo:
DROP TABLE IF EXISTS soyNombreTable;
# DROP CASCADE => elimina registros dependientes de otros
# TRUNCATE TABLE => vacia tabla (campos de valores valores)
# DELETE => elimina registros (filas, columnas o campos de valores)
# ALTER  => Se utiliza para establecer o eliminar el valor predeterminado de una columna.
# CHANGE => Se utiliza para renombrar una columna, cambiar su tipo de datos o moverla dentro del esquema.
# MODIFY => Se utiliza para hacer todo lo que CHANGE COLUMN puede hacer, pero sin cambiar el nombre de la columna.
# UPDATE => actualiza contenido
ejemplo:
UPDATE soyNombreTable set nombre columna = 'nuevonombrecampo' where nombre = 'viejonombrecampo'
# SUM      => suma
# AVG      => promedio
# COUNT    => cantidad
# MAX      => maximo
# MIN      => minimo
# GROUP BY => por grupo
# AS       => alias o apodo columna

<!--  funciones: -->
# LEFT
● Extrae un subconjunto de caracteres desde el inicio de una cadena.
ejemplo:
LEFT('PostgreSQL', 4) 
resultado:
'Post' 
# COALESCE
● Devuelve el primer valor no nulo de la lista de argumentos. Puedes traer los nulos y asignarles un valor
ejemplo:
COALESCE(NULL, NULL, 'Hola', 'Mundo')
resultado:
'Hola'
# LOWER
● Convierte todos los caracteres de una cadena a minúsculas.
ejemplo:
LOWER('PostgreSQL') 
resultado:
'postgresql'
# UPPER
● Convierte todos los caracteres de una cadena a mayúsculas.
ejemplo:
UPPER('postgresql') 
resultado:
'POSTGRESQL'
# LENGTH
● Retorna la longitud de una cadena de texto.
ejemplo:
LENGTH('Hola Mundo') 
resultado:
10


<!-- Operaciones de unión entre tablas -->
# ● Inner Join: Se usa para unificar filas de dos o más tablas siempre
que exista una columna que las relacione.
# ● Left outer Join: Entrega todos los registros de la tabla de la izquierda
y las coincidencias de la tabla derecha.
# ● Right outer Join: Muestra todos los registros de la tabla de la
derecha y las coincidencias de la tabla izquierda.
# ● Full Outer Join: Retorna todos los registros que coincidan en la tabla
derecha e izquierda.
# VARCHAR tipo de columna
# SMALLINT tipo de columna
# ALTER SEQUENCE > RESTART WITH
despues de delete registro se reinicia desde el id 1 con dato tipo serial
ejemplo:
ALTER SEQUENCE cocina_chilena_id_seq > RESTART WITH 1;
# returning muestra resultado de comando

<!-- comandos de transacciones SQL -->
# begin inicio
# commit guarda
# rollback retrocede cambios
# savepoint guarda un punto de partida
# set transaction le asigna nombre a la transaccion

<!-- TABLAS RELACIONADAS -->
# FORMA A
<!-- TABLA PADRE -->
● CREATE TABLE autores (
 id INT NOT NULL, <!-- registro id sin llave todavia-->
 nombre VARCHAR(255) NOT NULL,
 PRIMARY KEY (id) <!-- agrego llave al registro id -->
);
<!-- TABLA HIJA (si eliminas datos primero en tabla hija por su dependencia o referencia o dara error--> 
● CREATE TABLE libros (
 id INT NOT NULL, <!-- registro id sin llave todavia-->
 titulo VARCHAR(255) NOT NULL,
 autor_id INT NOT NULL, <!-- registro id sin llave ni references todavia-->
 PRIMARY KEY (id), <!-- agrego llave al registro id -->
 FOREIGN KEY (autor_id) REFERENCES autores (id) <!-- agrego llave FK al registro tabla hija references de registro tabla padre -->
);
# FORMA B
<!-- TABLA PADRE -->
● CREATE TABLE peliculas (
    id INTEGER PRIMARY KEY, <!-- registro id con llave -->
    pelicula VARCHAR(255),
    ano_estreno INTEGER,
    director VARCHAR(255)
);
<!-- TABLA HIJA -->
● CREATE TABLE reparto (
    id_pelicula INTEGER REFERENCES peliculas(id), <!-- registro tabla hija references registro tabla padre sin llave -->
    actor VARCHAR(255)
);

# cambiar registros, alter en tabla > alter en columna > registro > el cambio de tipo o restriccion
alter table phones alter column mac_address type varchar(50);
alter table phones alter column mac_address set not null;
# ON DELETE cascade 
se pone en registro tabla hija y borra registro tabla hija y registro tabla padre
# set
# like 
busca un campo con otro valor
ejemplo:
like juan%
resultado
registro juan rulfo
# ILIKE
busca nombre en mayuscula o minuscula
select id from peliculas where titulo ilike 'titanic';
# SET DEFAULT 
fijado por defecto
# BETWEEN
SELECT * FROM productos WHERE stock BETWEEN 10 AND 50;
# \i ejecuta codigo en terminal o consola
# importa tabla
insert into > select from
<!-- tablas intermedias -->
# crea tabla intermedia => primera forma
insert into = tabla nueva
select = columnas
from = nombre antigua tabla
create table = nombre y columnas
# crea tabla intermedia => segunda forma
select = columnas nuevas
into = nombre nueva tabla
from = nombre antigua tabla
# crea tabla intermedia => segunda forma => datos no duplicados
select distinct = columnas nuevas
into = nombre nueva tabla
from = nombre antigua tabla
# agregar una columna
ALTER TABLE nombre_table ADD COLUMN nombre_col TIPO_DATO;
ALTER TABLE nombre_table ADD nombre_col;
ejemplo:
ALTER TABLE tabla_persona ADD COLUMN edad INT;
# agregar contenido columna
UPDATE nombre_table SET nombre_columna = 'nuevo_valor' WHERE condicion;
ejemplo:
-- Actualizar la columna 'edad' asignando el valor 30 donde el nombre sea 'Juan'
UPDATE tabla_persona SET edad = 30 WHERE nombre = 'Juan';
# eliminar una columna
ALTER TABLE nombre_tabla DROP COLUMN nombre_col;
ALTER TABLE nombre_tabla DROP nombre_col;
ejemplo:
ALTER TABLE tabla_persona DROP COLUMN edad;
# agregar foreign key
ALTER TABLE nombre_tabla ADD CONSTRAINT fk_nombre_columna FOREIGN KEY(nombre_columna) REFERENCES nombre_tabla (nombre_columna);
# importar datos de excel csv
-- delimitier indicar cual signo sera el separador de datos para copiar en cada columna
-- header copia nombre de columnas
COPY nombre_tabla FROM 'ruta_archivo' DELIMITER ',' csv header;
# desafio 017
CREATE DATABASE desafio-jonathan-viera-017;
\c desafio-jonathan-viera-017;
CREATE TABLE clientes (email VARCHAR(50), nombre VARCHAR, telefono VARCHAR(16), empresa VARCHAR(50), prioridad SMALLINT);
INSERT INTO clientes (email, nombre, telefono, empresa, prioridad) VALUES ('clientejuan@gmail.com', 'clientejuan', '+56910010010', 'empresa1', 5), ('clientejhon@gmail.com', 'clientejhon', '+56910010020', 'empresa2', 7), ('clientejose@gmail.com', 'clientejose', '+56910010030', 'empresa3', 10), ('clientejoel@gmail.com', 'clientejoel', '+56910010040', 'empresa4', 2), ('clientejaime@gmail.com', 'clientejaime', '+56910010050', 'empresa5', 8);
SELECT * FROM clientes ORDER BY prioridad DESC LIMIT 3;
SELECT * FROM clientes WHERE prioridad <= 5 LIMIT 2;
# desafio 019
1
CREATE DATABASE peliculas_jonathan_viera_019;
\c peliculas_jonathan_viera_019;
CREATE TABLE peliculas (
    id INTEGER,
    pelicula VARCHAR(255),
    ano_estreno INTEGER,
    director VARCHAR(255)
);
CREATE TABLE reparto (
    id_pelicula INTEGER,
    actor VARCHAR(255)
);
TRUNCATE TABLE peliculas;
TRUNCATE TABLE reparto;
DROP TABLE IF EXISTS reparto;
DROP TABLE IF EXISTS peliculas;
2
● CREATE TABLE peliculas (
    id INTEGER PRIMARY KEY, <!-- registro id con llave -->
    pelicula VARCHAR(255),
    ano_estreno INTEGER,
    director VARCHAR(255)
);
● CREATE TABLE reparto (
    id_pelicula INTEGER REFERENCES peliculas(id), <!-- registro tabla hija references registro tabla padre sin llave -->
    actor VARCHAR(255)
);
\copy peliculas FROM 'C:\Users\jonat\Desktop\javascript\desafio-evaluado-19-definicion-de-tablas\peliculas.csv' DELIMITER ',' CSV HEADER;
\copy reparto FROM 'C:\Users\jonat\Desktop\javascript\desafio-evaluado-19-definicion-de-tablas\reparto.csv' DELIMITER ',' CSV HEADER;
3
SELECT id FROM peliculas WHERE pelicula = 'Titanic';
4
SELECT actor FROM reparto WHERE id_pelicula = (SELECT id FROM peliculas WHERE pelicula = 'Titanic');
5
SELECT COUNT(*) FROM reparto WHERE actor = 'Harrison Ford';
6 
# // asc = ascendente
SELECT * FROM peliculas WHERE ano_estreno BETWEEN 1990 AND 1999 ORDER BY pelicula ASC;
7
SELECT pelicula, LENGTH(pelicula) AS longitud_titulo FROM peliculas;
8
SELECT MAX(LENGTH(pelicula)) AS longitud_maxima FROM peliculas;
# desafio prueba 021

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

<!-- -- Requerimiento 1: Crea el modelo (revisa bien cuál es el tipo de relación antes de crearlo), respeta las claves primarias, foráneas y tipos de datos. -->

<!-- DROP DATABASE IF EXISTS prueba_sql_jonathan_viera_021; -->
 CREATE DATABASE prueba_sql_jonathan_viera_021;
 
 <!-- DROP TABLE IF EXISTS peliculas; -->
 -- Tabla peliculas
CREATE TABLE peliculas (
   id_pelicula Int PRIMARY KEY,
   nombre VARCHAR(255) NOT NULL,
   anno INTEGER NOT NULL
);

 -- Tabla tags
 CREATE TABLE tags (
   id_tag Int PRIMARY KEY,
   tag VARCHAR(32) NOT NULL
 );

<!-- práctica común crear una tabla separada (en este caso, "peliculas_tags") para representar la relación entre dos entidades. Esta tabla permite flexibilidad y evita la duplicación de datos. Al utilizar una tabla separada, puedes agregar o eliminar fácilmente las asociaciones entre películas y etiquetas sin modificar la estructura de las tablas "peliculas" o "tags". -->

 -- Tabla peliculas_tags (relación muchos a muchos)
 CREATE TABLE peliculas_tags (
   id_pelicula INTEGER NOT NULL,
   id_tag INTEGER NOT NULL,
   PRIMARY KEY (id_pelicula, id_tag),
   FOREIGN KEY (id_pelicula) REFERENCES peliculas(id_pelicula),
   FOREIGN KEY (id_tag) REFERENCES tags(id_tag)
 );

<!-- -- Requerimiento 2: Inserta 5 películas y 5 tags, la primera película tiene que tener 3 tags asociados, la segunda película debe tener dos tags asociados. -->
-- Insertar películas
INSERT INTO peliculas (id_pelicula, nombre, anno) VALUES
   (1, 'El Padrino', 1972),
   (2, 'El Señor de los Anillos: La Comunidad del Anillo', 2001),
   (3, 'Avengers: Endgame', 2019),
   (4, 'Parasite', 2019),
   (5, 'El Hoyo', 2019);

 -- Insertar tags
INSERT INTO tags (id_tag, tag) VALUES
   (1, 'Drama'),
   (2, 'Fantasía'),
   (3, 'Acción'),
   (4, 'Ciencia ficción'),
   (5, 'Thriller');

   -- Insertar asociaciones entre películas y etiquetas
INSERT INTO peliculas_tags (id_pelicula, id_tag) VALUES
   (1, 1), (1, 3), (1, 5), -- Asociaciones de la primera película con 3 etiquetas
   (2, 2), (2, 4); -- Asociaciones de la segunda película con 2 etiquetas

<!-- -- Requerimiento 3: Cuenta la cantidad de tags que tiene cada película. Si una película no tiene tags debe mostrar 0.. -->
 -- Contar tags por película
SELECT p.nombre, COUNT(pt.id_tag) AS cantidad_tags
FROM peliculas p
LEFT JOIN peliculas_tags pt ON p.id_pelicula = pt.id_pelicula
GROUP BY p.id_pelicula, p.nombre
ORDER BY p.id_pelicula;


<!-- -- Requerimiento 4: Crea las tablas respetando los nombres, tipos, claves primarias y foráneas y tipos de datos. -->
 -- Tabla usuarios
 CREATE TABLE usuarios (
   id_usuario Int PRIMARY KEY,
   nombre VARCHAR(255) NOT NULL,
   edad INTEGER NOT NULL   
 );

 -- Tabla preguntas
 CREATE TABLE preguntas (
   id_pregunta Int PRIMARY KEY,
   pregunta VARCHAR(255) NOT NULL,
   respuesta_correcta VARCHAR
 );

 -- Tabla respuestas
 CREATE TABLE respuestas (
   id_respuesta iNT PRIMARY KEY,
   id_usuario INTEGER NOT NULL,
   id_pregunta INTEGER NOT NULL,
   respuesta VARCHAR(255) NOT NULL,
   correcta BOOLEAN NOT NULL,
   FOREIGN KEY (id_usuario) REFERENCES usuarios(id_usuario),
   FOREIGN KEY (id_pregunta) REFERENCES preguntas(id_pregunta)
 ); 

<!-- Requerimiento 5: Agrega datos, 5 usuarios y 5 preguntas, la primera pregunta debe estar contestada dos veces correctamente por distintos usuarios, la pregunta 2 debe estar contestada correctamente sólo por un usuario, y las otras 2 respuestas deben estar incorrectas. a. Contestada correctamente significa que la respuesta indicada en la tabla respuestas es exactamente igual al texto indicado en la tabla de preguntas. -->
-- Insertar usuarios
INSERT INTO usuarios (id_usuario, nombre, edad) VALUES
   (1, 'Juan Pérez', 25),
   (2, 'María González', 30),
   (3, 'Pedro López', 40),
   (4, 'Ana Rodríguez', 20),
   (5, 'Diego García', 35);

-- Insertar preguntas
INSERT INTO preguntas (id_pregunta, pregunta, respuesta_correcta) VALUES
   (1, '¿Cuál es la capital de Francia?', 'París'),
   (2, '¿Cuál es la raíz cuadrada de 16?', '4'),
   (3, '¿Cuál es el color del cielo?', 'Azul'),
   (4, '¿Cuál es el nombre del presidente de Chile?', 'Gabriel Boric'),
   (5, '¿Cuál es el significado de la vida?', 'felicidad');

   -- Eliminar restricción de unicidad en la columna id_respuesta
ALTER TABLE respuestas DROP CONSTRAINT respuestas_pkey;

-- Insertar respuestas
INSERT INTO respuestas (id_usuario, id_pregunta, id_respuesta, respuesta, correcta) VALUES
   (1, 1, 1, 'París', TRUE),
   (1, 2, 1, 'París', FALSE), 
   (2, 1, 1, 'París', TRUE),
   (2, 2, 2, '4', TRUE),
   (3, 2, 3, 'Azul', FALSE),   
   (3, 3, 3, 'Azul', TRUE), 
   (4, 4, 4, 'Gabriel Boric', TRUE),
   (5, 5, 5, 'felicidad', TRUE);  

<!-- Requerimiento 6: Cuenta la cantidad de respuestas correctas totales por usuario (independiente de la pregunta). -->
 SELECT u.nombre, COUNT(r.correcta) AS cantidad_respuestas_correctas
 FROM usuarios u
 LEFT JOIN respuestas r ON u.id_usuario = r.id_usuario
 WHERE r.correcta = TRUE
 GROUP BY u.id_usuario, u.nombre
 ORDER BY u.id_usuario;
   


<!-- Requerimiento 7: Por cada pregunta, en la tabla reguntas, cuenta cuántos usuarios tuvieron la respuesta correcta. -->

 SELECT p.pregunta, COUNT(r.correcta) AS cantidad_respuestas_correctas
 FROM preguntas p
 LEFT JOIN respuestas r ON p.id_pregunta = r.id_pregunta
 WHERE r.correcta = TRUE
 GROUP BY p.id_pregunta, p.pregunta
 ORDER BY p.id_pregunta;

<!-- Requerimiento 8: Implementa borrado en cascada de las respuestas al borrar un usuario y borrar el primer usuario para probar la implementación. -->
ALTER TABLE respuestas
ADD CONSTRAINT fk_usuario_respuesta
FOREIGN KEY (id_usuario)
REFERENCES usuarios(id_usuario)
ON DELETE CASCADE;

<!-- Requerimiento 9: Crea una restricción que impida insertar usuarios menores de 18 años en la base de datos. -->
 ALTER TABLE usuarios
 ADD CHECK (edad >= 18);

<!-- Requerimiento 10: Altera la tabla existente de usuarios agregando el campo email con la restricción de único. -->

ALTER TABLE usuarios
ADD COLUMN email VARCHAR(100) UNIQUE;












