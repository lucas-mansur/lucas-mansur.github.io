const botao = document.querySelector(".executa")
const resp = document.getElementById("resp")

var conteudo = ""

function Fibonacci(){
        
    var a,b,c;

    a = 1
    b = 2

    conteudo = document.createTextNode(`1, 2,  `)
            resp.appendChild(conteudo)

    for(var i = 3; i <= 100; i++){
        c = a + b

        a = b
        b = c

        conteudo = document.createTextNode(`${c}, `)
            resp.appendChild(conteudo)
        
    }
}    
  
botao.addEventListener("click", Fibonacci)
