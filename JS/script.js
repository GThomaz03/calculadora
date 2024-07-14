const botoes = document.querySelectorAll(".botao");
const operacao = document.querySelector("#operacao");
const conta = document.querySelector("#conta");


botoes.forEach(function(botao){
    botao.addEventListener("click", () =>{
        let num = botao.innerHTML;
        if(botao.id == "AC"){
            operacao.innerHTML = "";
            conta.innerHTML = "";
            num = "";
        }
        operacao.innerHTML += num;
        if (botao.id == "DEL"){
            let last = operacao.innerHTML.length - 1;
            operacao.innerHTML = operacao.innerHTML.substring(0,last-3);
        }


        if(botao.id == "+"){
            let last = operacao.innerHTML.length -1;
            let first = 0;
            let soma = 0;
            soma += parseInt(operacao.innerHTML.substring(first,last));
            conta.innerHTML = soma.toString();
            first = last;
            console.log(soma);
            
        }
    })
})