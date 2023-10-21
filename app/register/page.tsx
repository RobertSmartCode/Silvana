"use client"

import {app} from '../../firebaseConfig';

import { sendWelcomeMessage } from "../../lib/api";

import React, { useState } from "react";
import { getAuth, GoogleAuthProvider, signInWithPopup, updateProfile } from "firebase/auth";
import Video from "./Video";
import WhatsAppLink from './WhatsAppLink';

const Register = () => {
  const [name, setName] = useState("");

  const handleGoogleSignIn = async () => {
    const auth = getAuth(app);
    const provider = new GoogleAuthProvider();

    try {
      const userCredential = await signInWithPopup(auth, provider);
      const user = userCredential.user;

      await updateProfile(user, {
        displayName: name || user.displayName,
      });

      const firstName = user.displayName;
      const photoURL = user.photoURL;

        
      if (user.email) {
        // Envía el correo de bienvenida solo si `user.email` no es nulo
        sendWelcomeMessage(user.email, name);
      }
      


      console.log("Usuario registrado con Google:", user);
      console.log("Primer nombre:", firstName);
      console.log("URL de la imagen de perfil:", photoURL);
    } catch (error) {
      console.error("Error al registrar usuario con Google:", error);
    }
  };

  return (
    <div className="w-full min-h-screen flex justify-center items-center flex-col bg-indigo-100">
    <Video />

    <div className="w-1/2 mb-4 flex flex-col items-center">
      <input
        type="text"
        placeholder="Ingrese Nombre"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="w-full p-4 mb-4 bg-rose-400 text-white border-none outline-none rounded-full text-center placeholder-gray-500"
      />
      <button
        onClick={handleGoogleSignIn}
        className="w-full bg-rose-400 text-white p-4 border-none cursor-pointer rounded-full"
      >
        Registrarme
      </button>
    </div>
    <WhatsAppLink/>
  </div>
  
  
  );
};

export default Register;

