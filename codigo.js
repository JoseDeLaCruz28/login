const btnsesion = document.getElementById("sign-in");
      btnregistrar = document.getElementById("sign-up");
      formRegistro = document.querySelector(".registro");
      formSesion = document.querySelector(".Sesion");

btnsesion.addEventListener("click", e =>{
    formRegistro.classList.add("hide");
    formSesion.classList.remove("hide")
})

/*btnregistrar.addEventListener("click", e =>{
    formSesion.classList.add("hide");
    formRegistro.classList.remove("hide");
})


const btnRecuperaC = document.getElementById("recuperar");
    btnRegresar = document.getElementById("Regresa");
    formrecuperando = document.querySelector(".recuperando");
    formRegistro = document.querySelector(".registro");

btnRecuperaC.addEventListener("click", e=>{
    formrecuperando.classList.add("hide2");
    formRegistro.classList.remove("hide2");
})
btnRegresar.addEventListener("click", e=>{
    formRegistro.classList.add("hide2");
    formrecuperando.classList.remove("hide2");
})
*/