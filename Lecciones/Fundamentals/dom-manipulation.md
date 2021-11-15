https://www.theodinproject.com/paths/foundations/courses/foundations/lessons/dom-manipulation

# What is the DOM?

Document Object Model es una representacion en forma de arbol de los objetos de la pagina. Cada elemento de la pagina es representado como un nodo (objeto) con propiedades y metodos incorporados.

# How do you target the nodes you want to work with?

Se puede apuntar a un nodo con selectores de CSS:

element.querySelector(selector) //ej de selector: h1, .className, #elementID
element.querySelectorAll(selectors)

O selectores relacionales que contienen los nodos como propiedades:

(firstElementChild, lastElementChild)

# How do you create an element in the DOM?

document.createElement(tagName, [options])

Esto solo crea el elemento y lo almacena en memoria, pero no añade al DOM

# How do you add an element to the DOM?

parentNode.appendChild(childNode)

Inserta el elemento childNode como ultimo descendiente de parentNode

parentNode.insertBefore(newNode, referenceNode)

Insert el elemento newNode como descendiente de parentNode ANTES de referenceNode

# How do you remove an element from the DOM?

parentNode.removeChild(child)

Elimina el nodo child de parentNode

||

document.body.addEventListener("click", (e) => {
    e.target.remove()})

# How can you alter an element in the DOM?

Se genera una referancia al elemento asignandolo a una variable.

    const div = document.createElement('div')

Y se lo modifica usando:

Estilo en linea:

    div.style.color = 'blue'                                        //solo un estilo
    ||
    div.setAttribute('style', 'color: blue; background: white');    //multiples estilos a la vez

Asignandole una clase:

    div.classList.add('new');           agrega la clase 'new'
    div.classList.remove('new');        remueve la clase 'new'
    div.classList.toggle('active');     agrega/remueve la clase segun el caso

# When adding text to a DOM element, should you use textContent or innerHTML? Why?

Se usa textContent para modificar el texto

InnerHTML se usa para agregar HTML dentro del elemento y puede implicar un riesgo de seguridad si no se usa correctamente

# Where should you include your Javascript tag in your HTML file when working with DOM nodes?

El archivo JS debe incluirse antes del cierre del elemento BODY para que primero de analise (parse) el HTML y despues el script en caso de que este ultimo haga manipulaciones en el DOM antes de que se procese.

Otra alternativa es incluirlo en el HEAD, agregando despues del origen(src) la palabra clave defer

<head>
    <script src="js-file.js" defer></script>
</head>

# How do “events” and “listeners” work?

Los eventos son acciones que se realizan en una pagina en una pagina como un click a la pulsacion de una tecla.

Los listeners esperan a que esos eventos sucedan y realizan una accion predeterminada

# What are three ways to use events in your code?

- Agregando la propiedad "on*event*" al elemento en el HTML:

<button onclick="alert('Hello World')">Click Me</button>

No es la mejor solucion porque desordena el HTML

- Agregando una funcion a la propiedad del nodo en el DOM:

btn.onclick = () => alert("Hello World");

Es mejor pero sigue teniendo la limitacion de que el nodo solo puede tener un valor o funcion para cada evento

- Agregando un event listener al nodo en el DOM:

btn.addEventListener('click', () => {
    alert("Hello World");
});

# Why are event listeners the preferred way to handle events?

Porque permiten mantener por separado el codigo de el HTML.
Tambien permite que el elemento tenga varios eventos 

# What are the benefits of using named functions in your listeners?

Porque permite mantener el codigo limpio y es mejor tener las funciones definidas por separado si necesitamos invocarla desde diferentes lugares sin tener que definirla anonimanente en cada lugar

# How do you attach listeners to groups of nodes?

Se puede usar un selector menos especifico que devuelva un nodelist e iterar sobre el con un forEach() para agregarle un event listener a cada uno de los nodos del objeto (nodelist)

const buttons = document.querySelectorAll('button');

buttons.forEach((button) => {                           // we use the .forEach method to iterate through each button
    button.addEventListener('click', () => {            // and for each one we add a 'click' listener
    alert(button.id);
});
});

# What is the difference between the return values of querySelector and querySelectorAll?

querySelector devuelve el primer elemento que cumpla las condiciones del selector y devuelve el nodo que lo representa en el DOM

querySelectorAll devuelve un objeto similar a un array llamado "nodelist"

# What does a “nodelist” contain?

nodelist es un objeto que contiene una coleccion de nodos

# Explain the difference between “capture” and “bubbling”.

Cuando ocurre un evento, este no se detiene en el elemento que lo dispara, sino que por defecto asciende hasta llegar hasta el ancestro mas lejano (document). A esto se lo conoce como bubbling. 

Contrario a esto si se especifica que se quiere acceder a la fase de captura, la propagacion se realiza de la manera contraria, desde el ultimo ancestro al elemento que desencadena el evento.

Para evitar la propagacion se usa el metodo stopPropagation sobre el objecto evento (e) que esta implicito en los event listener.

Fases de eventos

1- capture
2- target
3- bubbling

 
