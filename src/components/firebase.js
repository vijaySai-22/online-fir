// import { initializeApp } from "firebase/app";
// import { getAuth } from "firebase/auth";
// import { getFirestore } from "firebase/firestore";

// const firebaseConfig = {
//   apiKey: "AIzaSyAAFXBn7CtcnO9yW7K1Q6M1lF4TpTfEtM0",
//   authDomain: "online-fir-1c63d.firebaseapp.com",
//   projectId: "online-fir-1c63d",
//   storageBucket: "online-fir-1c63d.appspot.com",
//   messagingSenderId: "1045023231173",
//   appId: "1:1045023231173:web:d0c537cc928dd1063434ac"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// export const auth = getAuth(app);
// export const db = getFirestore();

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyDYsEOj9qPYsLSaEQrPupYqIoIaFFfSO-4",
  authDomain: "online-fir-1d214.firebaseapp.com",
  projectId: "online-fir-1d214",
  storageBucket: "online-fir-1d214.appspot.com",
  messagingSenderId: "786498335881",
  appId: "1:786498335881:web:632b751f51e8e727664258"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore();