import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyCfoDMpBHdGxiEfpqc0uBxXoK4Mrufvrd8",
  authDomain: "authentication-azalia.firebaseapp.com",
  projectId: "authentication-azalia",
  storageBucket: "authentication-azalia.appspot.com",
  messagingSenderId: "623028424250",
  appId: "1:623028424250:web:493632dde1b9186cfc6f03",
  measurementId: "G-WY73S7948C"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);