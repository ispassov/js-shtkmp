import 'bootstrap/dist/css/bootstrap.min.css'
import { initializeApp } from 'firebase/app'
import { getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth'
import { firebaseConfig } from './firebase-config.js'
import { btnTest, inputUsername, inputPassword, btnLogin, btnLogout } from './buttons.js'
/* import * as bootstrap from 'bootstrap'
import Alert from 'bootstrap/js/dist/alert'
import { Tooltip, Toast, Popover } from 'bootstrap' */

const app = initializeApp(firebaseConfig)
const auth = getAuth()

onAuthStateChanged(auth, (user) => {
  if (user) {
    document.querySelectorAll('h1')[0].innerHTML = `Hello, ${user.email}!`
  } else {
    document.querySelectorAll('h1')[0].innerHTML = `Hello, Bootstrap and Webpack!`
  }
})

btnTest.addEventListener('click', () => {
  if(btnTest.innerHTML == 'Test') {
    btnTest.innerHTML = '123'
  }else {
    btnTest.innerHTML = 'Test'
  }
})

btnLogin.addEventListener('click', () => {
  signInWithEmailAndPassword(auth, inputUsername.value, inputPassword.value)
  .then((userCredential) => {
  })
  .catch((error) => {
    if (error.message == 'Firebase: Error (auth/invalid-email).') {
      document.querySelector('h1').innerHTML = 'Wrong email or password'
    }
  })
})

btnLogout.addEventListener('click', () => {
  signOut(auth).then(() => {
  }).catch((error) => {
  })
})

inputUsername.addEventListener('click', () => {
  document.querySelector('h1').innerHTML = 'Hello, Bootstrap and Webpack!'
})