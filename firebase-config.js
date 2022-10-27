import firebase from 'firebase'

const firebaseConfig = {
  apiKey: "AIzaSyAe6W7CWm0PMYW1CdN_MTs44qAm75Yg77s",
  authDomain: "tasker-55cc6.firebaseapp.com",
  projectId: "tasker-55cc6",
  storageBucket: "tasker-55cc6.appspot.com",
  messagingSenderId: "137378843685",
  appId: "1:137378843685:web:543e8752ce71f0ef5f03cc",
  measurementId: "G-9E50Q3S7WK"
}

firebase.initializeApp(firebaseConfig)
export default firebase