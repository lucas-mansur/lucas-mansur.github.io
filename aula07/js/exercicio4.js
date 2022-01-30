function fibonacci(numero) {
    let fibMinus2 = 0;
    let fibMinus1 = 1;
    let fibN = numero;
    for (let i = 1; i <= numero; i++) {
        fibN = fibMinus1 + fibMinus2;
        fibMinus2 = fibMinus1;
        fibMinus1 = fibN;
        console.log("A" + (i) +
            "=" +
            fibN);

    }
    return fibN;
}

fibonacci(100)