var usuario = document.querySelector("#usuario");
var senha = document.querySelector("#senha");
var btn = document.querySelector("#btn");
var user = "Edgar"
var pass = "123"

//evento do botão
btn.addEventListener("click", function(e){
    
    //tira envio de formulário
    e.preventDefault();
    //verificação de usuário e senha
    if(usuario.value === user && senha.value === pass){
        alert("Usuário e senha correto")
        window.location.href = "pagina_principal.html"
    }else{
        alert("Usuário ou senha incorreto")
    }
});
