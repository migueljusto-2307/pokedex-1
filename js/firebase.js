// Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/12.19.0/firebase-app.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  import { getAuth }    from "https://www.gstatic.com/firebasejs/12.19.0/firebase-auth.js";
  // importa a funcao de autenticacao do firebase
  
  import { getFirestore }    from "https://www.gstatic.com/firebasejs/12.19.0/firebase-firestore.js";
  // importa a funcao de banco de dados do firebase
    
  //your apps firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyBVLbwkYVS485G02imM1q-MX4H6UAxFfBw",
    authDomain: "pokedex-7e2a7.firebaseapp.com",
    projectId: "pokedex-7e2a7",
    storageBucket: "pokedex-7e2a7.firebasestorage.app",
    messagingSenderId: "555693296496",
    appId: "1:555693296496:web:7343f2902d36a99d70ddb5"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

  //exportar a autenticação
  export const auth = getAuth(app);

  //exportar o nosso db
  export const db = getFirestore(app);