https://www.theodinproject.com/paths/full-stack-javascript/courses/javascript/lessons/es6-modules

# Explain what npm is and where it was commonly used before being adopted on the frontend.

NPM (NODE PACKAGE MANAGER) es un CLI (Command Line Interface) que nos da acceso a un gran repositorio de plugins, librerias y herramientas.

# Describe what npm init does and what package.json is.

npm init inicializa el proyecto y genera el archivo package.json

Package.json contiene un lista de todos los paquetes del proyecto y sus versiones

# Know how to install packages using npm.

Para instalar paquetes se usa "npm install [nombredelpaquete]"

# Describe what a JavaScript module bundler like webpack is.

Un module bundler es una herramienta que ejecuta un paso de compilacion para crear un output que el navegador pueda reconocer (considerando que este no tiene acceso al sistema de archivos directamente). El proceso de compilacion se encarga de buscar las declaraciones "requiere" (que no puede ser reconocido como codigo valido en JS) dentro de los archivos y reemplazarlo con el contenido de esas referencias de otros modulos. El resultado final es un unico archivo que contiene todo lo necesario para ser ejecutado.

# Explain what the concepts “entry” and “output” mean as relates to webpack.

Entry (usualmente llamado SRC) es donde se guarda todo el codigo que queremos que Webpack compile. Cuando lo ejecutamos, Webpack busca las referencias import en los archivos y los agrupa en un solo output.
El archivo Entry es el que contiene todas las referencias a los modulos requeridos por el proyecto

Output (usualmente llamado DIST) es el archivo compilado que genera al ejecutar webpack.

# Briefly explain what a development dependency is.

Cada vez que Webpack encuentra un archivo que depende de otro lo trata como una DEPENDENCY. Esto le permite tomar todos los recursos (inclusive si no son codigo) y proveerlos como dependecias para la aplicacion.

# Explain what “transpiling code” means and how it relates to frontend development.

Transpile code significa tomar codigo de un lenguaje y convertirlo (traducirlo) a otro lenguaje similar.

Esto es util porque muchas veces los navegadores tardan en implementar nuevas funciones, entonces surgen nuevos lenguajes con funciones experimentales que que transpilan el codigo a otro compatible por los navegadores.

Por EJ, para CSS existe SASS, LESS y Stylus. Para JS existe CoffeScript, Babel o TypeScript. Ninguno de los anteriores son lenguajes nuevos, sino transpiladores de codigo.

# Briefly describe what a task runner is and how it’s used in frontend development.

Task runner es una herramienta que automatiza diferentes partes del build process (compilacion). En el caso del Front End esto puede ser minificar codigo, optimizar imagenes o ejecutar tests.

# Describe how to write an npm automation script.

Se debe modificar el package.json y agregarlo en "scripts". Por ej:

"build": "webpack --progress --mode=production"

y se puede ejecutar con:

webpack run build

# Explain one of the main benefits of writing code in modules.

La principal ventaja es la reusabilidad de codigo.

# Explain “named exports” and “default exports”.

Existen dos formas de exportar modulos, named y default:

- Named:

export {name, name2, name3}

Exporta un vinculo al funcion y se importa bajo el mismo nombre. Pueden existir tantos valores como necesitemos.

- Default:

export default Name;

Exporta un vinculo al objeto(funcion,etc) y se puede importar bajo cualquier nombre. El import busca el export default y le asigna el nombre que se le indique. Solo puede existir uno por modulo.

Como regla general si solo se quiere exportar un valor del modulo se puede usar DEFAULT.
Si se necesita exportar varios valores se les asigna un nombre.
