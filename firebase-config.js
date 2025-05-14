// firebase-config.js

const firebaseConfig = {
  apiKey: "AIzaSyAePYLwhRqhn_VB1RVn3MuCoxA4Ow13h8Y",
  authDomain: "sejasociobet.firebaseapp.com",
  projectId: "sejasociobet",
  storageBucket: "sejasociobet.appspot.com",
  messagingSenderId: "680919934169",
  appId: "1:680919934169:web:29474a7df652f372694ac8"
};

// Inicializar Firebase
const app = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

// Disponibiliza o db globalmente
window.db = db;
