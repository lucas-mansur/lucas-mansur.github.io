const botao = document.querySelector(".executa")
const resp = document.getElementById("resp")


function CalculaSoma () {
    var somatorio = 0;
    for(var i = 0; i <= 1000; i++){
        if(i % 2 == 0){
            somatorio += i;
        }else{}
    }
            const conteudo = document.createTextNode(`A soma de todos os números pares positivos até 1000 é: ${somatorio}`)
            resp.textContent = ""
            resp.appendChild(conteudo)
        }

botao.addEventListener("click", CalculaSoma)