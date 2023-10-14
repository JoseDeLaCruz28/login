import { onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.5.0/firebase-auth.js"
import { auth } from './app/firebase.js'
import { loginCheck } from './app/loginchek.js'

import './app/signupForm.js'
import './app/signinForm.js'
import './app/googleLogin.js'
import './app/facebookLogin.js'
import './app/githubLogin.js'
import './app/logout.js'


onAuthStateChanged(auth, async (user) =>{
    loginCheck(user)
})
