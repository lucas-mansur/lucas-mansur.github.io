const input1 = document.getElementById('input1');
const input2 = document.getElementById('input2');

const botao = document.querySelector(".executa")
const resp = document.getElementById("resp")


function calculaSalario () {
    const num1 = parseFloat(input1.value)
    const num2 = parseFloat(input2.value)
     
    s = num1 + (num1 * (num2/100))

     const conteudo = document.createTextNode(`O novo salário é: ${s}`)
     resp.textContent = ""
     resp.appendChild(conteudo) 
}

botao.addEventListener("click", calculaSalario)
