https://www.theodinproject.com/paths/full-stack-javascript/courses/javascript/lessons/objects-and-object-constructors

# Write an object constructor and instantiate the object.

// Constructor

function game (title, year, genre) {
this.title = title;
this.year = year;
this.genre = genre;
}

// Instance

let codBlackOps = new game("Call of Duty: Black Ops", 2010, "FPS")

# Describe what a prototype is and how it can be used.

El prototype es un objeto compartido heredable que contiene propiedades y metodos.

Se puede acceder a el como cualquier otra propiedad de un objeto (objeto.prototype).

Se usa para heredarle metodos o propiedades a varias instancias de un objeto que compartan la necesidad de usar las mismas.

# Explain prototypal inheritance.

Todos los objetos tienen un constructor, ya sean creados por un Object Literal o un Constructor. Estos objetos heredan la propiedad Prototype. 

# Understand the basic do’s and don’t’s of prototypical inheritance.

La principal ventaja de heredar metodos a travez de el Prototype es que los objetos que lo hereden tienen acceso a esos metodos sin necesidad de incluirlo como propiedad y solo guardar la referencia a los mismos para evitar generar una instancia de ellos por cada nuevo objeto creado. Esto es util en desarrollo de gran escala donde la cantidad de instancias de los mismos metodos ocupa memoria y disminuye el rendimiento.

# Explain what Object.create does

Object.create es un metodo que crea un nuevo objeto y le asigna (hereda) el prototype de otro objeto.

Object.create(protoObject)

ej:

const person = {
isHuman: false,
printIntroduction: function() {
console.log(`My name is ${this.name}. Am I human? ${this.isHuman}`);
}
};

const me = Object.create(person); // creates a new object using the "person" object as his prototype

me.name = 'Matthew'; // "name" is a property set on "me", but not on "person"
me.isHuman = true; // inherited properties can be overwritten

me.printIntroduction();
// expected output: "My name is Matthew. Am I human? true"
