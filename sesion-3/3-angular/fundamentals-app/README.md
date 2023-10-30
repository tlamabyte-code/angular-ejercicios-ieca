# Angular (Estructura del Proyecto)

1. Abrir carpeta del proyecto (identificar package.json y node_modules)

📂 `src/`   ->  Directorio principal donde se trabaja/desarrolla una aplicación Angular
    * 📂 `src/`.

📄 `.editorconfig`  ->  Archivo para definir reglas/formato para estandarizar nuestro
                         código (Ayuda para la colaboración)
    
        * Indentación, la longitud máxima de línea, el estilo de salto de línea, el uso de espacios en blanco y otras preferencias de estilo de codificación.
        * Se requiere extensión `EditorConfig for VS Code`

3. 📄 `tsconfig.json`   ->  Archivo de configuración para TypeScript 
                            (El lenguaje de programación utilizado en Angular)

        * Define las opciones de compilación de Typescript
        * `target`. Define la versión de ECMAScript
        * `rootDir`. Define carpeta raíz donde Typescript buscará los archivos .ts para compilar
        * `strict`. Activa o desactiva la configuración estricta de Typescript

4.  📄 `angular.json`   ->  Define y gestiona la configuración global del proyecto

        * Puedes establecer opciones específicas de construcción y desarrollo del proyecto
        * build.assets
