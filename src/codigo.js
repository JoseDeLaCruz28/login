function validar(){
    console.log('Se envio')
    signup-form.reset();
    return false;
}

const btnsesion = document.getElementById("sign-in");
      btnregistrar = document.getElementById("sign-up");
      formRegistro = document.querySelector(".registro");
      formSesion = document.querySelector(".Sesion");

btnsesion.addEventListener("click", e =>{
    formRegistro.classList.add("hide");
    formSesion.classList.remove("hide")
})

btnregistrar.addEventListener("click", e =>{
    formSesion.classList.add("hide");
    formRegistro.classList.remove("hide")
})