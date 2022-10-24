import 'bootstrap/dist/css/bootstrap.min.css'
import { initializeApp } from 'firebase/app'
import { getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth'
import { btnTest, inputUsername, inputPassword, btnLogin, btnLogout } from './buttons.js'
/* import * as bootstrap from 'bootstrap'
import Alert from 'bootstrap/js/dist/alert'
import { Tooltip, Toast, Popover } from 'bootstrap' */

const firebaseConfig = {
  apiKey: "AIzaSyAe6W7CWm0PMYW1CdN_MTs44qAm75Yg77s",
  authDomain: "tasker-55cc6.firebaseapp.com",
  projectId: "tasker-55cc6",
  storageBucket: "tasker-55cc6.appspot.com",
  messagingSenderId: "137378843685",
  appId: "1:137378843685:web:543e8752ce71f0ef5f03cc",
  measurementId: "G-9E50Q3S7WK"
}

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