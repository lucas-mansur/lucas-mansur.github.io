const input1 = document.getElementById('input1');

const botao = document.querySelector(".executa")
const resp = document.getElementById("resp")


function calculaMedia () {
    const num1 = parseInt(input1.value)

    if (num1 >= 12){
        compra= num1 * 1.00;
     }
     else {
        compra= num1 * 1.30;
     }
     const conteudo = document.createTextNode(`O custo total da compra é: ${compra} reias.`)
     resp.textContent = ""
     resp.appendChild(conteudo) 
}

botao.addEventListener("click", calculaMedia)
