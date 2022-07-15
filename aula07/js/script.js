console.log("Alô mundo!");

var a = 1;

console.log(a);
console.log("Valor da variável a = " + a);
console.log("Tipo da variável a = " + typeof a);

var a = "Marina";
/* a varivel passa de 1 para marina de number para string"*/
console.log("Valor da variável a = " + a);
console.log("Tipo da variável a = " + typeof a);

function teste() {
    //Escopo léxico - váriaveis que só existem dentro de funções
    var b = 1;
    return b;
}

console.log("Valor da chamada da função teste = " + teste());

/console.log("Valor da chamada da função teste = " + b);/
//Escopo léxico - váriaveis que só existem dentro de funções. vide acima
// Porém se for necessário ter um várivel que exista apenas denrto do bloco exemplo if else usar a palavra reservada let

function testeLet() {
    var c = 1;
    if (c == 1) {
        var d = 5;
    } else {
        b + 3;
    }
    console.log(d);
    return c;
}

// Segue abaixo exemplo com LET

function testeLet() {
    let c = 1;
    if (c == 1) {
        let d = 5;
    } else {
        b + 3;
    }
    console.log(d);
    return c;
}

let num1 = 1,
    num2 = "2";

console.log(num1 + num2);
//vai concatenar
console.log(num1 - num2);
// Vai transformar a string em número para poder fazer a operação pois, o + pode ser usando como concatenador

console.log(num1 + num2.toString); // mesmo 

let num3 = 1,
    num4 = "1";
console.log(num3 == num4); // valida se o valor é o mesmo
console.log(num3 === num4); // valida se o valor e o tipo é msm. tbm é valido para !==
// atribuição e operação igual a C++

let nome = 'Paulo';
let carro = "Fusca";

console.log("Nome do proprietário: " + nome + "\nVeículo: " + carro);
console.log(`Nome do proprietário: ${nome} \nVeículo: ${carro}`)



// part2
console.log("alo mundo");

/*
fatorial(5); // 5 * 4 * 3 * 2 * 1
fatorial(0); // retornar 1
fatorial(-5); // parâmetro inválido 

*/
function fatorial(numero) {
    if (numero) return 1;
    if (numero < 0) return "Parâmetro inválido";


}

function limpaPalavra(palavra) {
    let palavraLimpa = "";
    if (':,."&=!?[/{(]})'.indexOf(palavra.charAt(0)) == 0) {
        palavraLimpa = palavra.substring(1, palavra.length - 1);
    } else {
        palavraLimpa = palavra;
    }


    if (':,."&=!([/{?]}'.indexOf() != palavraLimpa) {
        console.log(`ultimo caracter ${palavraLimpa.charAt(palavra.length-1)}`);
        palavraLimpa = palavraLimpa.substring(0, palavraLimpa.length - 2);
    } else {
        palavraLimpa = palavra;
    }

    return palavraLimpa;
}

function buscaPalavraEmOcorrencia(palavra, lista) {
    for (let i = 0; i < lista.length; i++) {
        let ocorrencia = lista[i];
        if (palavra.toLowerCase() == ocorrencia.palavra.toLowerCase()) {
            return i;
        }
    }
    return -1;
}

function contaPalavras(texto) {
    let ocorrenciaArray = []; // {palavra: "palavra", ocorrencia:1}
    // 1 quebrar meu texto em um array de palavras
    let palavrasArray = texto.split(" ");
    let palavrasLimpasArray = [];

    // limpar o array de palavras - remover caracteres especiais - : , . "" ' & 
    palavrasArray.forEach(function(palavra) {
        palavra = limpaPalavra(palavra);
        palavrasLimpasArray.push(palavra);
    });

    palavrasLimpasArray.forEach(function(palavra) {
        let indice = buscaPalavraEmOcorrencia(palavra, ocorrenciaArray); // -1 se não encontrar
        if (indice != -1) {
            ocorrenciaArray[indice].ocorrencia++;
        } else {
            ocorrenciaArray.push({ palavra: palavra, ocorrencia: 1 });
        }
    });


    console.log(ocorrenciaArray);

    for (termo in ocorrenciaArray) {
        console.log(`Termo: ${termo.palavra} - ${termo.ocorrencia}`);
    }
}
/*
    // 2. percorrer o array de palavras contando as ocorrencia
        // se a palavra não existir no array de ocorrencias
            // criar novo objeto com {ocorrencia:1, palavra: palavra}
        // se a palavra já existir no array ocorrencia:
            // incrementar palavra.ocorrencia++
        // 2.a 
    let termo = {};
    termo.palavra = "Lorem";
    termo.ocorrencia = 3;
    console.log(termo.ocorrencia);
    delete termo.ocorrencia;  
    console.log(termo);
    
    //for (listaTermo) // termo - {palavra, ocorrencia}
}
*/
let texto = "Lorem ipsum lorem dolor sit amet consectetur adipisicing elit. Corporis provident dolores assumenda natus. Molestiae incidunt minus magnam illo consequuntur aspernatur cumque. Consequuntur, accusantium ipsa nobis quas sed perferendis. Id, labore.";
contaPalavras(texto);

//
/*

Lorem - 3
ipsum - 2
dolor - 5

let nome = 'Paulo';
let carro = "Fusca";
//let declaracao = "Nome do proprietário: " + nome + "\nVeículo: "+ carro;
let declaracao = `Nome do proprietário: ${nome} 
Veículo: ${carro}`;

console.log(declaracao);
*/