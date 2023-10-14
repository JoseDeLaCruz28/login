import { createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.5.0/firebase-auth.js"
import { auth } from './firebase.js'
import { showMessage } from './showMessage.js'

const signupForm = document.querySelector('#signup-form')

signupForm.addEventListener('submit', async (e) =>{
    e.preventDefault()

    const email = signupForm['signup-email'].value
    const password = signupForm['signup-password'].value

    console.log(email, password)

    try {
        const UserCredentials = await createUserWithEmailAndPassword(auth, email, password)
        console.log(UserCredentials)

        showMessage("Bienvenido " + UserCredentials.user.email)

        e.target.reset()

    } catch (error) {

        if(error.code === 'auth/email-already-in-use'){
            showMessage("¡Ups, correo electrónico ya registrado!", "error")
        }else if(error.code === 'auth/invalid-email'){
            showMessage("Correo Electrónico invalido, vuelve a intentarlo", "error")
        }else if(error.code === 'auth/weak-password'){
            showMessage("Contraseña muy corta, intenta con una más segura", "error")
        }else if(error.code){
            showMessage('ups algo sucedió', "error")
            alert('ups algo sucedió')
        }
    }
})