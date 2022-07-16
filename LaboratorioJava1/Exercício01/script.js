const input1 = document.getElementById('input1');

const botao = document.querySelector(".executa")
const resp = document.getElementById("resp")


function Calfatorial () {
    const num1 = parseInt(input1.value)

    var resultado = num1;

        for (var i = 1; i < num1; i++) {
            resultado *= i;
            const conteudo = document.createTextNode(`O resultado do fatorial é: ${resultado}`)
            resp.textContent = ""
            resp.appendChild(conteudo)
        }
}

  
botao.addEventListener("click", Calfatorial)
