const input1 = document.getElementById('input1');
const input2 = document.getElementById('input2');
const input3 = document.getElementById('input3');

const botao = document.querySelector(".executa")
const resp = document.getElementById("resp")


function calculaMedia () {
    const num1 = parseInt(input1.value)
    const num2 = parseInt(input2.value)
    const num3 = parseInt(input3.value)

    media = (num1 * 2 + num2 * 3 + num3 * 5) / 10
     
     const conteudo = document.createTextNode(`A média das notas é: ${media}`)
     resp.textContent = ""
     resp.appendChild(conteudo) 
}

botao.addEventListener("click", calculaMedia)
