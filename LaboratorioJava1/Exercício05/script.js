const botao = document.querySelector(".executa")
const resp = document.getElementById("resp")


function Primos(){
    var primo;

    for(var i = 2; i <= 100; i++){

        // primeiros assumimos que o número i é primo, então testamos a contradição para verificar que ele não é.
        primo = true

        for(var k = 2; k < i; k++){
            // se houver um número k entre 2 e o próprio i que divide o número i por inteiro, significa que ele não é primo.
            if(i % k == 0){
                console.log(i + " não é primo ")
                primo = false; // então atribuimos o rótulo de não-primo para este número em teste no momento.
                break // podemos encerrar o loop pois é apenas necessário 1 valor que divida para comprovar.
            }
            
        }
        // no final do loop de divisões, verificamos se não houve nenhum número entre 2 e i que dividisse i.
        // se não houve, é porque ele é primo.
        if(primo){
            //console.log(i + "é primo")
            const conteudo = document.createTextNode(`${i} é primo. `)
            resp.appendChild(conteudo)
        } 
    }

}

  
botao.addEventListener("click", Primos)
