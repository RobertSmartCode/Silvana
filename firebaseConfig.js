import { initializeApp } from "firebase/app";

import {
  signInWithEmailAndPassword,
  getAuth,
  signOut,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  sendPasswordResetEmail
} from "firebase/auth";

import {getFirestore} from "firebase/firestore"

import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage"
import { v4 } from "uuid";


// Resto de tu configuración
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_APIKEY,
  authDomain: process.env.NEXT_PUBLIC_AUTH,
  projectId: process.env.NEXT_PUBLIC_PROJECTID,
  storageBucket: process.env.NEXT_PUBLIC_STORAGE,
  messagingSenderId: process.env.NEXT_PUBLIC_MESSAGIN,
  appId: process.env.NEXT_PUBLIC_APPID,
};


export const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
export const db = getFirestore(app)
const storage = getStorage(app)

// LOS SERVICIOS

// auth

// Login

export const onSigIn = async ({ email, password }) => {
  try {
    const res = await signInWithEmailAndPassword(auth, email, password);
    return res;
  } catch (error) {
    console.log(error);
  }
};
// logout

export const logout = () => {
  signOut(auth);
};
// login con google

let googleProvider = new GoogleAuthProvider();

export const loginGoogle = async () => {
  const res = await signInWithPopup(auth, googleProvider);
  return res;
};

// registro

export const signUp = async ({email, password}) => {
    let res = await createUserWithEmailAndPassword(auth, email, password)
    return res
};

// olvide la contraseña

export const forgotPassword = async (email)=>{
    let res = await sendPasswordResetEmail(auth, email)
    return res    
}

// storage

export const uploadFile = async (file)=>{
  const storageRef = ref( storage, v4() )
  await uploadBytes(storageRef, file)
  let url = await getDownloadURL(storageRef)
  return url
}

