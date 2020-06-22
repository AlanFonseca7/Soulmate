

function login(){
    var username = document.getElementById("username").value
    var password = document.getElementById("password").value

     if(username == 'alan123' && password == 'alan123'){
        window.open('mainpage.html')
        }else{
            alert('USUÁRIO OU SENHA INCORRETOS')
        }
}
function createacc(){
    var username = document.getElementById("username").value
    var password = document.getElementById("password2").value
    var email = document.getElementById("email").value

     if(username == 'alan123' && password == 'alan123' && email == 'alan123@hotmail.com'){
        window.open('lacc.html')
        }else{
            alert('USUÁRIO,SENHA OU EMAIL INCORRETO')
        }
}
function message(){
    alert('mensagem enviada com sucesso!')
}
function chatstart(){
    let div = document.getElementById('chat');
    div.removeAttribute("hidden");
}


