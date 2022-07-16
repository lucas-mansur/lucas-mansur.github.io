const botao1 = document.querySelector(".executa01")


botao1.addEventListener("click", () =>{
   const val1 = document.querySelector("#questao01-val01")
   const val2 = document.querySelector("#questao01-val02")
   const soma = parseFloat(val1.value) + parseFloat(val2.value)
  //Inserção de conteudos na pag
   document.querySelector("#resp01").innerHTML = "<h3>" + soma + "</h3>"

})