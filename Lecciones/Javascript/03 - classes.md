https://www.theodinproject.com/paths/full-stack-javascript/courses/javascript/lessons/classes

# Describe the pros and cons of using classes in JavaScript.

Las clases son otra forma en JS de crear objetos. Una de las principales ventajas de usar clases es que la sintaxis es mas clara y permite heredar metodos y propiedades al prototype sin hacerlo expresamente. Lo que se declara en el CONSTRUCTOR de la clase va a ser una propiedad de su instancia y lo que esté en el cuerpo de la clase va a incluirse en el prototipo.

Otra ventaja con respecto a los constructores es que las clases no pueden ser instanciadas sin la keyword NEW (hacerlo arroja un error)

# Briefly discuss how JavaScript’s object creation differs from a language like Java or Ruby.

En JS no hay necesidad de usar ningun constructor para crear objetos

# Explain the differences between using a class to define a constructor and other prototype methods.

<!-- ! NI IDEA ! -->

# Explain what “getters” & “setters” are.

Los getters y setters son metodos para recuperar o actualizar valores de una variable de una instancia de una clase.

Una ventaja de usar estos metodos es que permiten modificar el return o agregar validaciones para actualizar una variable

# Understand what computed names and class fields are.

Computed names son valores que se calculan en el momento. Aplican para nombres de metodos o propiedades dentro de una clase.

Class Fields son propiedades de la instancia de una clase. Los fields pueden ser publicos o privados.

# Describe function binding.

Function binding es un metodo para mantener el vinculo de This con la instancia del objeto.

Si se intentamos pasar un metodo y llamarlo desde otro contexto se va pierde el vinculo de This (pasa a ser el objeto que lo invocó)

Una forma que ofrecen las clases para solucionarlo es crear un class field (propiedad) que contenga una funcion, y dentro de ella hacer referencia a una propiedad del objeto. De esta forma se puede hacer referencia a este class field desde cualquier ambito y este ejecutar la funcion que esta vinculada al objeto (function binder).

# Be able to use inheritance with classes.

Se pueden heredar metodos o propiedades de una clase a otra con la keyword EXTENDS. Esto sirve para crear una subclase a partir de otra (extendiendola).

Las clases solo pueden tener UNA superclase (clase padre) de la cual heredar propiedades.

Para heredar funcionalidades de varias clases a otra se usan MIX-INS (Subclases abstractas)

<!-- !!!!!!!!!!!! QUE SON???????? !!!!!!!!!!!!! -->

# Briefly talk about the conflict in JS with functional programming and classes.

Conceptualmente no existen las clases en JS (al menos no el sentido que funcionan en otros lenguajes orientados a objetos)

<!--! Y NO SE QUE MAS -->

In JS functions are first-class citizens. Functional programming is all about using functions to their fullest extent. There is a notion called: “Favor Composition over Inheritance” and here we are going in the opposite direction because “Class” notation favors “Inheritance over Composition”.
