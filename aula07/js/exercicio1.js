/*
fatorial(5); // 5 * 4 * 3 * 2 * 1
fatorial(0); // retornar 1
fatorial(-5); // parâmetro inválido
*/

function fatorial(numero) {

    if ((numero == 0) || (numero == 1)) {
        return 1;
    } else if (numero < 0) {
        return "parâmetro inválido"
    } else {
        var result = 1;
        for (var count = numero; count > 1; count--) {
            result *= count;
        }
        return result;
    }


}
console.log(fatorial(5));