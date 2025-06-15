### 1. Terminal Visual Studio Code

### 2. Terminal GIT - Configuración Inicial 

1. **git --version**: Muestra la versión de git.
2. **git config --global user.name "Tu Nombre"**: Agregas tu nombre.
3. **git config --global user.email tucorreo@mail.com**: Agregas tu correo.
4. **git config --list**: Confirma la configuración de nombre y correo.

### 3. Terminal GIT - Iniciar y Guardar Proyecto

1. **git init**: Iniciar proyecto nuevo (letra U).
2. **git add .**: Toma en cuenta todos los cambios (letra A).
3. **git commit -m "Nombre o descripción del commit"**: Guarda todos los cambios.
4. **git commit -am "Nombre o descripción del commit"**: Guarda todos los cambios, al poner `-am` se junta comando add y el commit.

### 4. Terminal GIT - Agregar Icono a Repositorio

1. **Agregar un Icono a un Commit**:
   - Accede a [GitHub Gist](https://gist.github.com/parmentf/035de27d6ed1dce0b36a).
   - Copia el título del icono elegido.
   - Utilízalo en tu commit, por ejemplo: `git commit -m ":sparkles: Nombre o descripción del commit"`.

### 5. Terminal GIT - Subir a GitHub

1. **Subir por Primera Vez**:
   - `git remote add origin git@github.com:usuario/nombre-archivo.git`: Vincula el repositorio local con el remoto.
   - `git branch -M main`: Cambia el nombre de la rama de master a main.
   - `git push -u origin main`: Sube archivos y pide contraseña.

2. **Subir Cambios**:
   - `git push origin main`: Sube cambios al repositorio remoto.

### 6. Terminal GIT - Manejo de Remotos

1. **Ver URL del Repositorio**:
   - `git remote -v`: Muestra los nombres de los repositorios remotos y sus URLs.
2. **Agregar un Repositorio Remoto**:
   - `git remote rename origin old-origin`: Renombra el remoto existente.
   - `git remote add origin https://github.com/jviera100/desafio-ricomida.git`: Agrega un nuevo remoto.
3. **Asociar la Rama Main**:
   - `git push --set-upstream origin main`: Asocia la rama main con el remoto.
4. **Forzar un Push (no recomendado)**:
   - `git push --force origin main` o `git push -f origin main`: Puede causar pérdida de datos.
5. **Renombrar Carpeta**:
   - `mv nombre_antiguo nombre_nuevo`: Cambia el nombre de la carpeta en terminal.
6. **Actualizar URL en Terminal**:
   - `git remote set-url jviera100 https://github.com/jviera100/jviera100.git`: Actualiza el remoto en terminal.

### 7. Terminal GIT - Estado y Sincronización

1. **Ver Estado**:
   - `git status`: Muestra si has hecho cambios y si has guardado.
     - **archivo (letra U)**: Es cuando le das `git init`.
     - **archivo (letra A)**: Es cuando le das `git add .`.
     - **archivo (letra M)**: Cuando se modifica, debes poner `git add .` y luego `git commit -m "nombre"`.
     - **archivo (sin letra)**: Es cuando no hiciste `git init` o si lo iniciaste está guardado. Las letras significan que falta guardar.

2. **Bajar Trabajo**:
   - `git pull -u origin main`: Bajas archivos.

3. **Recuperar Cambios**:
   - `git fetch`: Se utiliza para recuperar los cambios del repositorio remoto y actualizar el repositorio local sin fusionar los cambios. (GIT PULL = GIT FETCH + GIT MERGE).
   - `git merge nombre-rama`: Fusiona cambios de otra rama a la actual.

### 8. Terminal GIT - Información del Repositorio

1. **Mostrar Información del Repositorio**:
   - `git remote show [nombre]`: Muestra información detallada del remoto.
2. **Cambiar URL del Repositorio**:
   - `git remote set-url origin https://github.com/jviera100/desafio_evaluado_24_citas_medicas.git`: Cambia la URL de un remoto.
3. **Renombrar y Eliminar Remotos**:
   - `git remote rename nombreActual NuevoNombre`: Cambia el nombre de un remoto.
   - `git remote rm NombreRepositorio`: Elimina un remoto.

### 9. Terminal GIT - Gestión de Ramas

1. **Ver y Crear Ramas**:
   - `git log`: Muestra todas las versiones.
   - `git branch`: Muestra en la rama que estás y las demás ramas.
   - `git branch -M main`: Cambia nombre de rama de master a main.
   - `git branch nombre-nueva-rama`: Crea nueva rama.
   - `git checkout nombre-otra-rama`: Te cambia a otra rama.
   - `git checkout -b otra_branch`: Crea nueva rama y te ubica en esa rama nueva.
2. **Gestionar Cambios**:
   - `git stash`: Aparta modificaciones de rama actual para no perder cambios.
   - `git stash list`: Lista de cambios apartados en paralelo a historial de commits.
   - `git stash apply`: Unir directorio actual con cambios apartados.
   - `git rebase otra_branch`: Historial con menos ramas y commits.
   - `git branch -d nombre-rama`: Elimina rama.

### 10. Terminal GIT - Comparar Ramas

1. **Comparar Versiones en Ramas**:
   - `git checkout -b old`: Crea y cambia a la rama 'old'.
   - `git checkout main`: Cambia a la rama 'main'.
   - `git log`: Muestra los commits en 'main'.
   - `git checkout old`: Vuelve a la rama 'old'.
   - `git cherry-pick <hash_del_commit_antiguo>`: Trae un commit antiguo a la rama 'old'.
   - `git cherry-pick --continue`: Continúa si hay conflictos.
   - `git diff main..old`: Compara versiones entre ramas.

### 11. GitHub - Creación y Eliminación de Repositorios

1. **Crear Repositorios**:
   - Accede a "Your repositories" > "New" y completa el nombre y descripción.
2. **Eliminar Repositorios**:
   - Dentro del repositorio en GitHub, ve a "Settings" > "Danger Zone" > "Delete this repository".

### 12. GitHub - Pages y Clonación

1. **Crear GitHub Pages**:
   - Ve a "Settings" > "Pages", selecciona main y guarda.
2. **Clonar Repositorio**:
   - `git clone https://github.com/TuUsuario/nombre-del-repositorio.git`: Clona un repositorio en tu máquina.

### 13. GitHub - Pull Request

1. **Realizar un Pull Request**:
   - Forkea, clona y haz un pull request desde la web.
   - Ve a "Pull requests" > "New pull request", agrega título y descripción, y crea el pull request.

