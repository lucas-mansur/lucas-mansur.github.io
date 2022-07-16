const input1 = document.getElementById('input1');
const input2 = document.getElementById('input2');
const input3 = document.getElementById('input3');
const input4 = document.getElementById('input4');

const botao = document.querySelector(".executa")
const resp = document.getElementById("resp")


function calculaSalario () {
    const num1 = parseFloat(input1.value)
    const num2 = parseFloat(input2.value)
    const num3 = parseFloat(input3.value)
    const num4 = parseFloat(input4.value)
     
    totalComissao = num3 * num2;
    totalComissao = totalComissao + ( num4 * 5/100 );

    totalSalario = totalComissao + num1;

     const conteudo = document.createTextNode(`O salário final é: ${totalSalario} reais.`)
     resp.textContent = ""
     resp.appendChild(conteudo) 
}

botao.addEventListener("click", calculaSalario)
