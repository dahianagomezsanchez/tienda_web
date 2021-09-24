

function sesion() {
    let form = document.formulario;
    let user = form.emailIngreso.value;
    let pass = form.password.value;
    if (user == "jcarlogiraldo@gmail.com" && pass == "1234")
    {
        alert("Bienvenido al sistema");
    } else {
        alert("Datos incorrectos");
    }
}
