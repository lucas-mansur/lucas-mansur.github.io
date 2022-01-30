function somarPares(numero) {
    let soma = 0;
    for (let cont = 1; cont <= numero; cont++) {
        if (cont % 2 == 0) {
            soma += cont;
        }
    }
    console.log(soma);
}

somarPares(1000);