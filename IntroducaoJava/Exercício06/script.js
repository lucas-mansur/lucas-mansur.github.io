const custo = document.getElementById('custo');

const botao = document.querySelector(".executa")
const resp = document.getElementById("resp")


function calculaCusto () {
    const num1 = parseInt(custo.value)
     impostos = num1 * (28/100);
     distribuidor = num1 * (45/100);

     v = num1 + impostos + distribuidor
     const conteudo = document.createTextNode(`O valor do carro com o percentual do distribuidor + os imposto é de: ${v} reais.`)
     resp.textContent = ""
     resp.appendChild(conteudo) 
}

botao.addEventListener("click", calculaCusto)
