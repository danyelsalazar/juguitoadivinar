// console La consola del navegador es una herramienta que nos ayuda a depurar nuestras páginas, facilitando nuestro trabajo diario.

// console.log("esta es la consola 😎")






//Tipo de datos  String: se utiliza para representar datos textuales.
// Number: valores numéricos.
// Boolean: representa una entidad lógica y puede tener dos valores: true y false.

// let nombreUsuario = "Ignacio";
// let edadUsuario = " 33 años";
// console.log("mi nombre es: " + nombreUsuario + "y tengo" + edadUsuario)







//variables var/let/const
// let numeroUno = 23;
// let numeroDos = 34;
// console.log(numeroUno + numeroDos)

// let x = 10
// let y = false
// let z = x
// let n = 'Juanito'

// let x = 10;
// let y = 20;
// let resultado = x * y;

// console.log(resultado);









//concatenacionConcatenar es una elegante palabra de la programación que significa: "unir". Para unir cadenas en JavaScript el símbolo de más +, el mismo operador que usamos para sumar números, pero en este contexto hace algo diferente. Vamos a probar un ejemplo en nuestra consola.

// let one = "Hello, ";
// let two = "how are you?";
// let joined = one + two;
// console.log(joined);











//prompt

// -typeof (opens new window): El operador typeof devuelve una cadena que indica el tipo del operando sin evaluarlo:
    //  let numeroUno = prompt("Ingresa el primero número");
    //  let numeroDos = prompt("Ingresa el segundo número");

    //  console.log(typeof numeroUno);

    //  let resultado = parseInt(numeroUno) + parseInt(numeroDos);
    //  console.log(resultado);

// -parseInt (opens new window): Convierte (parsea) un argumento de tipo cadena y devuelve un entero de la base especificada.

// let numeroUno = parseInt(prompt("ingrese el primer numero"));
// let numeroDos = parseInt(prompt("ingrese el segundo numero"));
// console.log(typeof numeroUno);
// let resultado =  numeroUno + numeroDos;
// console.log(resultado)










//if / else   Un if en programación se utiliza para evaluar una expresión condicional: si se cumple la condición (es verdadera), ejecutará un bloque de código.:

        //   if( condicion ) {
        //      bloque verdadero
        //   }else {
        //      bloque falso
        //   }

// ejemplo:

// let stringUsuario = prompt(`Escriba "JavaScript"`);

// if(stringUsuario === "JavaScript"){
//     console.log("correcto")
// }
// else {
//     console.log("incorrecto")
// }

//ejemplo2:

// let ingresarNumero = parseInt(prompt("Ingresa un numero del 1 al 10"));

// if(ingresarNumero <= 10){
//     console.log("genial es correcto")
// }
// else{
//     console.log("mal ahi era un numero del 1 al 10")
// }


//ejercicio de practica if / else :

/*let opcionUsuario = parseInt(prompt(`
Elija una opcion:
1: Libros
2: Peliculas
3: Juegos
`))
if(opcionUsuario === 1){
    console.log(`Los libros disponibles son:
    1: El prinsipito
    2: Todas mis heridas
    `);
}
else if(opcionUsuario === 2){
    console.log(`Las peliculas disponibles son:
    1: Matrix
    2: Atravez de mi ventana
    3: Pandora
    `);
}
else if(opcionUsuario === 3){
    console.log(`Los juegos disponibles son:
    1: Tetrix
    2: Mario Broos
    `);
}else{
    console.log("Opcion no valida")
}
*/









//switch  La declaración switch evalúa una expresión, comparando el valor de esa expresión con una instancia case, y ejecuta declaraciones asociadas a ese case, así como las declaraciones en los case que siguen.

//el mismo ejercicio de arriba pero ahora con SWITCH:

/*let opcionUsuario = parseInt(prompt(`
Elija una opcion:
1: Libros
2: Peliculas
3: Juegos
`))

switch (opcionUsuario){
    case 1:
        console.log(`Los libros disponibles son:
        1: El prinsipito
        2: Todas mis heridas
        `);
        break;
    case 2:
        console.log(`Las peliculas disponibles son:
        1: Matrix
        2: Atraves de mi ventana
        3: Pandora
        `);
        break;
    case 3:
        console.log(`Los juegos disponibles son:
        1: Tetrix
        2: Mario Broos
        `);
        break;
}
*/












//while() Crea un bucle que ejecuta una sentencia especificada mientras cierta condición se evalúe como verdadera. Dicha condición es evaluada antes de ejecutar la sentencia.

/*let numero = 0

while( numero <= 10){
    console.log(numero);
    numero++
}
console.log("FIN: " + numero)
*/









//Math.random() La función Math.random() retorna un punto flotante, un número pseudo-aleatorio dentro del rango [0, 1).

// Retorna un entero aleatorio entre min (incluido) y max (excluido)
// ¡Usando Math.round() te dará una distribución no-uniforme!
// function getRandomInt(min, max) {
//     return Math.floor(Math.random() * (max - min)) + min;
//   }

// otro ejemplo:
// let numeroMaquina = Math.floor(Math.random() * (10 - 1)) + 1;
// console.log(numeroMaquina)

//PASO 1:

let numeroMaquina = Math.floor(Math.random() * (10 -1)) + 1;
console.log(numeroMaquina);
let numeroUser = parseInt(prompt(`Adivine numero del 1 al 10 `));

let vidas = 3;

while (numeroMaquina !== numeroUser && vidas > 1){
    
    // podemos usar el if :
    // if(numeroMaquina < numeroUser){
    //     console.log("Pista: El numero es mas bajo")
    // }else{
    //     console.log("Pista: El numero es mas alto");
    // }

    //O si no en vez de usar el if podemos usar el operador ternario , lo hacemos de la siguinte manera:
    let mensaje = numeroMaquina < numeroUser ?"Pista: El numero es mas bajo" :"Pista: El numero es mas alto";
    console.log(`Te equivocaste!` + mensaje);

    vidas--;
    numeroUser = parseInt(prompt(`Vuelve a intentarlo, tus vidas` + vidas));
}

if (numeroMaquina === numeroUser){
    console.log("GANASTE😎");
}
else{
    console.log(`PERDISTE😫, el numero era:` + numeroMaquina)
}
