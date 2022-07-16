const input1 = document.getElementById('input1');

const botao = document.querySelector(".executa")
const resp = document.getElementById("resp")


function calculaTemp () {
    const num1 = parseInt(input1.value)

    c = (5 * num1 - 160) / 9
     
     const conteudo = document.createTextNode(`A temperatura em graus Celsius é: ${c}°C `)
     resp.textContent = ""
     resp.appendChild(conteudo) 
}

botao.addEventListener("click", calculaTemp)
