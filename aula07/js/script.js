console.log("Alô mundo!");

var a =1;

console.log(a);
console.log("Valor da variável a = " + a);
console.log("Tipo da variável a = " typeof a);

var a = "Marina";
/* a varivel passa de 1 para marina de number para string"*/
console.log("Valor da variável a = " + a);
console.log("Tipo da variável a = " typeof a);

function teste(){
    //Escopo léxico - váriaveis que só existem dentro de funções
    var b = 1;
    return b;
}

console.log("Valor da chamanda da função teste = " + teste());

console.log("Valor da chamanda da função teste = " + b);
//Escopo léxico - váriaveis que só existem dentro de funções. vide acima
// Porém se for necessário ter um várivel que exista apenas denrto do bloco exemplo if else usar a palavra reservada let

function testeLet(){
    var c = 1;
    if(c==1){
        var d=5;
    }else{
        b +3;
    }
    console.log(d);
    return c;
}

// Segue abaixo exemplo com LET

function testeLet(){
    let c = 1;
    if(c==1){
        let d=5;
    }else{
        b +3;
    }
    console.log(d);
    return c;
}

let num1 = 1, num2 = "2";

console.log(num1 + num2);
//vai concatenar
console.log(num1 - num2);
// Vai transformar a string em número para poder fazer a operação pois, o + pode ser usando como concatenador

console.log(num1 + num2.toString);// mesmo 

let num3 = 1, num4= "1";
console.log(num3 == num4);// valida se o valor é o mesmo
console.log(num3 === num4);// valida se o valor e o tipo é msm. tbm é valido para !==
// atribuição e operação igual a C++









