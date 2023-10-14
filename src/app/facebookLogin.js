import { FacebookAuthProvider, signInWithPopup } from "https://www.gstatic.com/firebasejs/10.5.0/firebase-auth.js"
import { auth } from "./firebase.js"
import { showMessage } from "./showMessage.js"

const facebookButton = document.querySelector('#FacebookLogin')

facebookButton.addEventListener('click', async () =>{
    
    const provider = new FacebookAuthProvider()

    try {
        const credentials =  await signInWithPopup(auth, provider)
        console.log(credentials)

        showMessage("Bienvenido, sigue disfrutando de tu día " + credentials.user.displayname, "success")

        e.target.reset()

    } catch (error) {
        console.log(error)
    }

})