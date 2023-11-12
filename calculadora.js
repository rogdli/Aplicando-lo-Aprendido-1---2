const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Ingrese la operación a realizar (+, -, *, /): ', (operador) => {
  rl.question('Ingrese el primer número: ', (numero1Input) => {
    rl.question('Ingrese el segundo número: ', (numero2Input) => {
      const numero1 = parseFloat(numero1Input);
      const numero2 = parseFloat(numero2Input);

      // Verificar si los números ingresados son válidos (is not a Number)
      if (isNaN(numero1) || isNaN(numero2)) {
        console.log("Por favor, ingrese números válidos.");
      } else {
        // Realizar la operación según el operador ingresado
        let resultado;

        switch (operador) {
          case "+":
            resultado = numero1 + numero2;
            break;
          case "-":
            resultado = numero1 - numero2;
            break;
          case "*":
            resultado = numero1 * numero2;
            break;
          case "/":
            if (numero2 !== 0) {
              resultado = numero1 / numero2;
            } else {
              console.log("No se puede dividir por cero.");
            }
            break;
          default:
            console.log("Operador no válido.");
        }

        console.log("El resultado es: " + resultado);
      }

      rl.close();
    });
  });
});