//pega tag do html
var sair  = document.querySelector("#sair");
var pedidos = document.querySelector("#pedidos");
var estoque = document.querySelector("#estoque");
var tbl_pedidos = document.querySelector("#tbl_pedidos");
var tbl_estoque = document.querySelector("#tbl_estoque");
var body = document.getElementsByTagName("body");

//volta para pagina de login
sair.addEventListener("click", function(e){
    e.preventDefault();
    window.location.href = "login.html";
});

//Função botão pedidos: exibe pedidos e oculta estoque
pedidos.addEventListener("click", function(e){
    e.preventDefault("");
    if(tbl_estoque.style.display === "block"){
        tbl_estoque.style.display = "none";
    }
    tbl_pedidos.style.display = "block";
});

//Função botão estoque: exibe estoque e oculta pedidos
estoque.addEventListener("click", function(e){
    e.preventDefault();
    if(tbl_pedidos.style.display === "block"){
        tbl_pedidos.style.display = "none";
    }    
    tbl_estoque.style.display = "block";
});