const btnsesion = document.getElementById("sign-in");
      btnregistrar = document.getElementById("sign-up");
      formRegistro = document.querySelector(".registro");
      formSesion = document.querySelector(".Sesion");

btnsesion.addEventListener("click", e =>{
    formRegistro.classList.add("hide");
    formSesion.classList.remove("hide")
})