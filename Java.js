//Estevão Jose Jesus de Oliveira | 3°C | Data: 19/08/2025
document.addEventListener("DOMContentLoaded", function(){
    const botaoDeAcessibilidade = document.getElementById("botao-acessibilidade")
    const opcoesDeAcessibilidade = document.getElementById("opcoes-acessibilidade")
 
    botaoDeAcessibilidade.addEventListener("click", function (){
     botaoDeAcessibilidade.classList.toggle("rotacao-botao")
     opcoesDeAcessibilidade.classList.toggle("apresenta-lista")
 
     const botaoSelecionado = botaoDeAcessibilidade.getAttribute("aria-expanded") === "true";
     botaoDeAcessibilidade.setAttribute("aria-expanded", !botaoSelecionado)
   
    })
 
     const aumentaFonteBotao = document.getElementById("aumentar-fonte");
     const diminuiFonteBotao = document.getElementById("diminuir-fonte");
     
     const alternaContraste = document.getElementById("alterna-contraste");
 
     let tamanhoAtualFonte = 1;
 
     aumentaFonteBotao.addEventListener("click", function(){
         tamanhoAtualFonte += 0.1;
         document.body.style.fontSize = `${tamanhoAtualFonte}rem`
 
     })
 
     diminuiFonteBotao.addEventListener("click", function(){
         tamanhoAtualFonte -= 0.1;
         document.body.style.fontSize = `${tamanhoAtualFonte}rem`
 
     })
 
     alternaContraste.addEventListener("click", function(){
         document.body.classList.toggle("alto-contraste")
     })

    const btnTopo = document.getElementById("btn-topo");
    window.addEventListener("scroll", function () {
        if (window.scrollY > 300) {
            btnTopo.style.display = "block"
        } else {
            btnTopo.style.display = "none"
        }
    });
 
    btnTopo.addEventListener("click", function () {
        window.scrollTo({ top: 0, behavior: "smooth"});
    });
 });
 
 ScrollReveal().reveal("#inicio", { delay: 500 });
 ScrollReveal().reveal("#tropicalia", { delay: 500 });
 ScrollReveal().reveal("#galeria", { delay: 500 });
 ScrollReveal().reveal("#contato", { delay: 500 });