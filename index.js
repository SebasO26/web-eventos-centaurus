function redirection() {
    window.location.href = "pages/login.html";
}

var auth = {
    user: "admin",
    password: "admin123.",
};

function authentication(e) {
    let formUser = document.getElementById("user").value;
    let formPassword = document.getElementById("password").value;
    const text = document.getElementById('text');
    const form = document.getElementById("formulario");

    if (auth.user == formUser && auth.password == formPassword) {
        sessionStorage.setItem('auth', '1');
        window.location.href = "eventos.html";
    } else {

        text.classList.add('errorText');
        text.innerText = "";
        text.innerText = 'Error al iniciar sesión, usuario o contraseña incorrecto.';

        form.appendChild(text);
    }
};

function sessionOut(e) {
    sessionStorage.removeItem('auth');
    window.location.href = 'login.html';
}

document.addEventListener('keydown', (event) => {
    if (event.key == 'Enter') {
        authentication()
    }
});