# Git LFS: Guía Rápida (KISS)

## ¿Qué es Git LFS?
Git Large File Storage (LFS) es una extensión de Git para manejar archivos muy grandes.

## ¿Por qué usarlo?
Git no es bueno con archivos grandes (videos, PDFs, ZIPs). Hace tu repositorio lento y pesado. Git LFS los guarda "fuera" del repositorio principal, dejando solo un pequeño "apuntador" en Git.

## ¿Cómo se instala y configura?

1.  **Instalar Git LFS:**
    ```bash
    git lfs install
    ```
    (Esto solo se hace una vez por máquina.)

2.  **Configurar en tu repositorio:**
    Navega a la raíz de tu repositorio Git.

## ¿Cómo se usa?

1.  **Dile a Git LFS qué tipo de archivos son "grandes":**
    Usa `git lfs track` para decirle a Git LFS qué extensiones de archivo debe manejar. Por ejemplo:
    ```bash
    git lfs track "*.psd"
    git lfs track "*.zip"
    git lfs track "*.pdf"
    ```
    Esto crea/actualiza un archivo `.gitattributes` en tu repositorio. **Asegúrate de añadir y commitear este archivo:**
    ```bash
    git add .gitattributes
    git commit -m "Configurar Git LFS para archivos grandes"
    ```

2.  **Añade tus archivos grandes como siempre:**
    Una vez que has "trackeado" el tipo de archivo, simplemente añade y commitea tus archivos grandes como lo harías normalmente. Git LFS se encargará del resto.
    ```bash
    git add mi_archivo_gigante.pdf
    git commit -m "Añadir mi PDF gigante con LFS"
    ```

3.  **Sube tus cambios a GitHub:**
    ```bash
    git push
    ```
    Git LFS subirá los archivos grandes a un almacenamiento especial de GitHub.

## ¿Cómo funciona (muy simple)?
En lugar de guardar el archivo grande directamente en Git, Git LFS guarda un pequeño "apuntador" (un texto corto) en tu repositorio. El archivo real se sube a un servidor de almacenamiento de LFS. Cuando alguien descarga tu repositorio, Git LFS descarga automáticamente los archivos grandes por separado.

## Notas Importantes:
*   **Clonar/Pull:** Cuando clonas o haces `git pull`, Git LFS descargará automáticamente los archivos grandes.
*   **Costos:** Git LFS tiene límites de almacenamiento y ancho de banda gratuitos en GitHub. Revisa sus planes si manejas muchos archivos muy grandes.
