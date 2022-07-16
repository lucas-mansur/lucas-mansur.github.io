const botao = document.querySelector(".executa")
const resp = document.getElementById("resp")

var conteudo = ""

function CalPotencia () {


        for (var i = 1; i < 30; i++) {
            var r = Math.pow(4, i);
            conteudo = document.createTextNode(`${r}, `)
            resp.appendChild(conteudo)
        }
    }

  
botao.addEventListener("click", CalPotencia)
