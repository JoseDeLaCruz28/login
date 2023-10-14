import { GithubAuthProvider, signInWithPopup } from "https://www.gstatic.com/firebasejs/10.5.0/firebase-auth.js"
import { auth } from "./firebase.js"
import { showMessage } from "./showMessage.js"

const githubButton = document.querySelector('#GithubLogin')

githubButton.addEventListener('click', async () =>{
    
    const provider = new GithubAuthProvider()

    try {
        const credentials =  await signInWithPopup(auth, provider)
        console.log(credentials)

        showMessage("Bienvenido, sigue disfrutando de tu día " + credentials.user.displayname, "success")

        e.target.reset()

    } catch (error) {
        console.log(error)
    }

})