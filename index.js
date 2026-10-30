function redirection(){
    window.location.href = "pages/login.html";
}

var auth = {
    user : "admin",
    password : "admin123.",
};

function authentication(e){
    let formUser = document.getElementById("user").value;
    let formPassword = document.getElementById("password").value;

    if (auth.user == formUser && auth.password == formPassword) {
        sessionStorage.setItem('auth', '1');
        window.location.href = "eventos.html";
    } else {
        const form = document.getElementById("formulario");
        
        const text = document.createElement("p");
        text.className = 'errorText';
        text.textContent = 'Error al iniciar sesión, usuario o contraseña incorrecto.';

        form.appendChild(text);
    }
};

function sessionOut(e) {
    sessionStorage.removeItem('auth');
    window.location.href = 'login.html';
}

document.addEventListener('keydown', (event)=>{
    if(event.key == 'Enter'){
        authentication()
    }
});