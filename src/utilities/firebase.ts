// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD21z_JcaDHYi9muHQTYv-f76jPqnzIW-4",
  authDomain: "studyconnect-fc086.firebaseapp.com",
  projectId: "studyconnect-fc086",
  storageBucket: "studyconnect-fc086.firebasestorage.app",
  messagingSenderId: "128284785166",
  appId: "1:128284785166:web:814ea5d042e73e5c415a5f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth()

export function userLoginIn(email: string, password: string) {
    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        // ...
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(error)
    });
}

export async function userSignOut() {
    try{
        const resp = await signOut(auth)
        return {
            resp,
            error: null
        }
    }catch(error) {
        return {
            error,
            resp: null
        }
    } 
}
