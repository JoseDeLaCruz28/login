import { signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.5.0/firebase-auth.js"
import { auth } from "./firebase.js"
import { showMessage } from "./showMessage.js"

const signInForm = document.querySelector('#login-form');

signInForm.addEventListener('submit', async e =>{
    e.preventDefault()

    const email = signInForm['login-email'].value;
    const password = signInForm['login-password'].value;
    
    try {
        const credentials = await signInWithEmailAndPassword(auth, email, password)
        console.log(credentials)

        showMessage("Bienvenido, sigue disfrutando de tu día " + credentials.user.email)

        e.target.reset()

    } catch (error) {
        if(error.code === 'auth/wrong-password'){
            showMessage('Contraseña incorrecta, Vuelve a intentarlo', 'error')
        }else if(error.code === 'auth/user-not-found'){
            showMessage('Usuario no encontrado', 'error')
        }else{
            showMessage('ups algo sucedió', "error")
            alert('ups algo sucedió')
        }
        
    }
})