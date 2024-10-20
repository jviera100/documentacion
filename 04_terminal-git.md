# Terminal visualStudioCode

# Terminal GIT - configuracion inicial 
● git --version: muestra version git
● git config --global user.name "Tu Nombre" : agregas tu nombre
● git config --global user.email tucorreo@mail.com : agregas tu correo
● git config --list : confirmar la configuracion de nombre y correo
  
# Terminal GIT - iniciar y guardar proyecto
● git init : iniciar proyecto nuevo (letar U)
● git add . : toma en cuenta todos los cambios (latra A)
● git commit -m "Nombre o descripción del commit" : guarda todos los cambios
● git commit -am "Nombre o descripción del commit" : guarda todos los cambios, al poner -am se junta comando add y el commit

# Terminal GIT - agregar icono a repositorio
--> Agregar un Icono a un Commit:
- Accede a GitHub Gist https://gist.github.com/parmentf/035de27d6ed1dce0b36a.
- y Copia el título del icono elegido 
- y utilízalo en tu commit, por ejemplo: git commit -m ":sparkles: Nombre o descripción del commit"

# Terminal GIT - Subir a GitHub
--> Subir por Primera Vez:
● git remote add origin git@github.com:usuario/nombre-archivo.git: Vincula el repositorio local con el remoto.
● git branch -M main: Cambia el nombre de la rama de master a main.
● git push -u origin main: Sube archivos y pide contraseña.

--> Subir Cambios:
● git push origin main: Sube cambios al repositorio remoto.

# Terminal GIT - manejo de remotos
Ver URL del Repositorio:
● git remote -v: Muestra los nombres de los repositorios remotos y sus URLs.
Agregar un Repositorio Remoto:
● git remote rename origin old-origin: Renombra el remoto existente.
● git remote add origin https://github.com/jviera100/desafio-ricomida.git: Agrega un nuevo remoto.
Asociar la Rama Main:
● git push --set-upstream origin main: Asocia la rama main con el remoto.
Forzar un Push (no recomendado):
● git push --force origin main o git push -f origin main: Puede causar pérdida de datos.
--> Renombrar Carpeta:
mv nombre_antiguo nombre_nuevo: Cambia el nombre de la carpeta en terminal.
--> Actualizar URL en Terminal:
git remote set-url jviera100 https://github.com/jviera100/jviera100.git: Actualiza el remoto en terminal.

# Terminal GIT - Estado y Sincronización
--> Ver Estado:
● git status : muestra si haz hecho cambios y si haz guardado
    - archivo (letra U): es cuando le das git init
    - archivo (letra A): es cuando le das git add .
    - archivo (letra M) : cuando se modifica, debes poner git add . y luego git commit -m "nombre"
    - archivo (sin letra) : es cuando no hiciste git init o si lo iniciaste esta guardado, las letras significa que falta guardar
--> Bajar Trabajo
● git pull -u origin main : bajas archivos
--> Recuperar Cambios:
● git fetch se utiliza para recuperar los cambios del repositorio remoto y actualizar el repositorio local sin -- fusionar los cambios.(GIT PULL = GIT FETCH + GIT MERGE)
● git merge nombre-rama: Fusiona cambios de otra rama a la actual.

# Terminal GIT - Información del Repositorio
--> Mostrar Información del Repositorio:
● git remote show [nombre]: Muestra información detallada del remoto.
--> Cambiar URL del Repositorio:
● git remote set-url origin https://github.com/jviera100/desafio_evaluado_24_citas_medicas.git: Cambia la URL de un remoto.
--> Renombrar y Eliminar Remotos:
● git remote rename nombreActual NuevoNombre: Cambia el nombre de un remoto.
● git remote rm NombreRepositorio: Elimina un remoto.

# Terminal GIT - gestión de ramas
--> Ver y Crear Ramas:
● git log : muestra todas las versiones👨🏽‍💻
● git branch : muestra en la rama que estas y las demas ramas
● git branch -M main : cambio nombre de rama de master a main
● git branch nombre-nueva-rama : crea nueva rama
● git checkout nombre-otra-rama : te cambia a otra rama
● git checkout -b otra_branch : crea nueva rama y te ubica en esa rama nueva👨🏽‍💻
--> Gestionar Cambios
● git stash : aparta modificaciones de rama actual para no perder cambios
● git stash list : lista de cambios apartados en paralelo a historial de commits (historial modificaciones github)
● git stash apply : unir directorio actual con cambios apartados
● git rebase otra_branch : historial con menos ramas y commits
● git branch -d nombre-rama : elimina rama

# Terminal GIT - comparar ramas
--> Comparar Versiones en Ramas:
● git checkout -b old: Crea y cambia a la rama 'old'.
● git checkout main: Cambia a la rama 'main'.
● git log: Muestra los commits en 'main'.
● git checkout old: Vuelve a la rama 'old'.
● git cherry-pick <hash_del_commit_antiguo>: Trae un commit antiguo a la rama 'old'.
● git cherry-pick --continue: Continúa si hay conflictos.
● git diff main..old: Compara versiones entre ramas.

# GITHUB - Creación y Eliminación de Repositorios
--> Crear Repositorios:
Accede a "Your repositories" > "New" y completa el nombre y descripción.
--> Eliminar Repositorios:
Dentro del repositorio en GitHub, ve a "Settings" > "Danger Zone" > "Delete this repository".

# GITHUB - Pages y Clonación
--> Crear GitHub Pages:
Ve a "Settings" > "Pages", selecciona main y guarda.
--> Clonar Repositorio:
git clone https://github.com/TuUsuario/nombre-del-repositorio.git: Clona un repositorio en tu máquina.

# GITHUB - Pull Request
--> Realizar un Pull Request:
Forkea, clona y haz un pull request desde la web.
Ve a "Pull requests" > "New pull request", agrega título y descripción, y crea el pull request.