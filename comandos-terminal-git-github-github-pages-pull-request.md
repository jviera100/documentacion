# TERMINAL visualStudioCode
# TERMINAL codigos consola en cmd o command prompt - 
- cmd: abre terminal
- dir: muestra carpetas al interior
- cd nombre carpeta: entra a la carpeta
# TERMINAL codigos consola en PowerShell o bash - 
- ls: muestra carpetas al interior
- pwd: muestra la ruta en la que estoy
- cd .. : sale a la carpeta pabre anterior
- cd ~ : sale a la carpeta padre principal, codigo ASCII para hacer el simbolo (alt+fn+126)clear
- ls -a : muestra carpetas ocultas del sistema, las que empiezan con un punto son las ocultas
- clear: limpia todo
- flecha hacia arriba: muestra codigos ingresados anteriormente en los ultimos dias
- ls -LS : muestra carpetas ordenadas del tamaño mas grande al pequeño
- ls -LSH : muestra carpetas ordenadas del tamaño mas grande al pequeño en mega bytes
- ls -lr : muestra carpetas ordenadas al reves
- tree: arbol o estructura  de carpetas
- ni: crea carpeta
- mkdir: crea carpeta y si haces un espacio puedes crear varias carpetas
- touch: crea carpeta
- code . : abre carpeta en nuevo visual
- cp: copia archivo
- mv: mover archivos
- rm: eliminar archivo
q + enter: cuando ves END y no te deja escribir, ahora te dejara escribir
# TERMINAL GIT configuracion inicial 
- git --version: muestra version git
- git config --global user.name "Tu Nombre" : agregas tu nombre
- git config --global user.email tucorreo@mail.com : agregas tu correo
- git config --list : confirmar la configuracion de nombre y correo
# TERMINAL GIT iniciar y guardar proyecto
- git init : iniciar proyecto nuevo (letar U)
- git add . : toma en cuenta todos los cambios (latra A)
- git commit -m "Nombre o descripción del commit" : guarda todos los cambios
- git commit -am "Nombre o descripción del commit" : guarda todos los cambios, al poner -am se junta comando add y el commit
# TERMINAL GIT agregar icono a repositorio
- icono repositorio : entras a pagina https://gist.github.com/parmentf/035de27d6ed1dce0b36a
- copias el titulo del icono que elijas
- lo pones en el nombre de tu repositorio que pones en el terminal asi, ejemplo:
- git commit -m ":sparkles: Nombre o descripción del commit"
# TERMINAL GIT sube a GITHUB por primera vez trabajo
- git remote add origin git@github.com:usuario/nombre-archivo.git : vincular repositorio local con repositorio remoto
- git branch -M main : cambio nombre de rama de master a main
- git push -u origin main : subes archivos y pone contraseña
- Ejemplo:
remote git add origin https://github.com/jviera100/desafio-ricomida.git
git branch -M main
git push -u main origin
# TERMINAL GIT sube a GITHUB cambios de trabajo
- git push origin main
# TERMINAL GIT ver url repositorio
- git remote -v : se utiliza para mostrar los nombres de los repositorios remotos y sus URLs correspondientes
# TERMINAL GIT si no ver el remoto, agregalo al terminal
- git remote rename origin old-origin
- git remote add origin https://github.com/jviera100/desafio-ricomida.git
# TERMINAL GIT si la rama main no esta asociada de forma remota, la asocias
- git push --set-upstream origin main
# TERMINAL GIT forzar subir y reemplazar cambios locales por los remotos
- git push --force origin main
# TERMINAL GIT branch, rama o version del mismo proyecto o carpeta(no duplica la carpeta, es la misma con otra version)
- git log : muestra todas las versiones
- git branch : muestra en la rama que estas y las demas ramas
- git branch -M main : cambio nombre de rama de master a main
- git branch nombre-nueva-rama : crea nueva rama
- git checkout nombre-otra-rama : te cambia a otra rama
- git checkout -b otra_branch : crea nueva rama y te ubica en esa rama nueva
- git stash : aparta modificaciones de rama actual para no perder cambios
- git stash list : lista de cambios apartados en paralelo a historial de commits (historial modificaciones github)
- git stash apply : unir directorio actual con cambios apartados
- git rebase otra_branch : historial con menos ramas y commits
- git branch -d nombre-rama : elimina rama
# TERMINAL GIT status
- git status : muestra si haz hecho cambios y si haz guardado
- archivo (letra U): es cuando le das git init
- archivo (letra A): es cuando le das git add .
- archivo (letra M) : cuando se modifica, debes poner git add . y luego git commit -m "nombre"
- archivo (sin letra) : es cuando no hiciste git init o si lo iniciaste esta guardado, las letras significa que falta guardar
# TERMINAL crea github pages
git branch gh-pages
# TERMINAL bajar trabajo
- git pull -u origin main : bajas archivos
# TERMINA git merge fusionar cambios
- git merge : le pones el nombre de la otra rama ejemplo development y la fusiona a la otra rama ejemplo main dejandole los mismos cambios
# TERMINAL GIT fetch recupera github y actualiza terminal
- git fetch se utiliza para recuperar los cambios del repositorio remoto y actualizar el repositorio local sin fusionar los cambios.
# TERMINAL GIT no usar
- git push -f origin main : No se recomienda utilizar este comando, ya que puede causar la pérdida de datos y la corrupción del historial de versiones, hay formas arreglar eso sin forzarlo pero hay que utilizar algo que se llama rebase
# TERMINAL GIT muestra informacion repositorio
- git remote show [nombre]
# github cambiar de repositorio al señalado
git remote set-url origin https://github.com/jviera100/desafio_evaluado_24_citas_medicas.git
# TERMINAL GIT cambia nombre repositorio
- git remote rename nombreActual NuevoNombre
# TERMINAL GIT elimina repositorio
- git remote rm NombreRepositorio
# crear repositorios en GITHUB
- your repositories
- new 
- poner nombre y descripcion
# eliminar repositorio - dentro del repositorio GITHUB
- setting
- danger zone
- delete this repository
- pones el nombre del repositorio
- pones tu clave
# crear GITHUB page - dentro del repositorio
- setting
- page
- main
- save
- deployments: ver pagina web subida
# clonar o copiar repositorio en GITHUB - dentro del repositorio remoto de ambos
- abrir ruta del  compañero en el navegador
- fork: copia repositorio desde git hub de compañero
- creo el repositorio en mi git hub
# descargar repositorio remoto de GITHUB en mi terminal
- desde GITHUB code: copiar ruta para clonar en terminal
- desde terminal git clone con ruta de mi repositorio
ejemplo:
git clone https://github.com/TuUsuario/nombre-del-repositorio.git
# descargar repositorio en mi PC - dentro del repositorio GITHUB
- code
- download zip
# GITHUB PULL REQUEST - dentro del repositorio
en resumen guardo cambios en mi repo local independiente de aprobacion dueño repo y despues envio pull request desde pagina web y le queda al dueño de la repo aprobar o rechazar cambio en su repo
- pull request
- new pull request
- create pull request
- agrega titulo y descripcion
- create pull request





