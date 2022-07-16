const input1 = document.getElementById('input1');

const botao = document.querySelector(".executa02")
const resp = document.getElementById("resp")


function q () {
    const num1 = parseInt(input1.value)
    var divisores = 0;

  for(var count=1 ; count<=num1 ; count++)
   if(num1 % count == 0)
   	divisores++;
  
    if(divisores==2) {
        const conteudo = document.createTextNode(`O numero ${num1} é primo`)
        resp.textContent = ""
        resp.appendChild(conteudo)
    } else {
        const conteudo = document.createTextNode(`O numero ${num1} não é primo`)
        resp.textContent = ""
        resp.appendChild(conteudo)
    }
  }
  
  
botao.addEventListener("click", q)