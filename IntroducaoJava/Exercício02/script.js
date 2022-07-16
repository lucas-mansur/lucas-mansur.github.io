

const botao = document.querySelector(".executa02")
const resp = document.getElementById("resp")

function q () {
    
    const input1 = document.getElementById("input1")
    const input2 = document.getElementById("input2")

    let num1 = parseFloat(input1.value)
    let num2 = parseFloat(input2.value)

    console.log(num1)

    if(num1>num2) {
    const conteudo = document.createTextNode(`O numero ${num1} é maior`)
    resp.textContent = ""
    resp.appendChild(conteudo)
}else if(num2>num1){
    const conteudo = document.createTextNode(`O numero ${num2} é maior`)
    resp.textContent = ""
    resp.appendChild(conteudo)
}else
   resp = `Os dois números são iguais.`
 alert(resp)
}

botao.addEventListener("click", q)