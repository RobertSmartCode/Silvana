"use client"

import { useRouter } from "next/navigation";

import { app } from '../../firebaseConfig';
import { sendWelcomeMessage } from '../../lib/api';
import React from 'react';
import { useFormik } from 'formik';
import { getAuth, GoogleAuthProvider, signInWithPopup, updateProfile } from 'firebase/auth';
import Video from './Video';

import * as Yup from 'yup';

const validationSchema = Yup.object({
  name: Yup.string().required('El nombre es requerido'),
});

const Register = () => {
  const auth = getAuth(app);
  const provider = new GoogleAuthProvider();
  const router = useRouter(); // Inicializa el router

  const formik = useFormik({
    initialValues: {
      name: '',
    },
    validationSchema,
    onSubmit: async (values) => {
      try {
        const userCredential = await signInWithPopup(auth, provider);
        const user = userCredential.user;

        await updateProfile(user, {
          displayName: values.name || user.displayName,
        });

        const firstName = user.displayName;
        const photoURL = user.photoURL;

        if (user.email) {
          sendWelcomeMessage(user.email, values.name);
        }

        console.log('Usuario registrado con Google:', user);
        console.log('Primer nombre:', firstName);
        console.log('URL de la imagen de perfil:', photoURL);
        router.push('/thankyou');
      } catch (error) {
        console.error('Error al registrar usuario con Google:', error);
      }
    },
  });

  return (
    <div className="w-full min-h-screen flex justify-center items-center flex-col bg-indigo-100">
      <Video />

      <form
        className="w-1/2 mb-4 flex flex-col items-center"
        onSubmit={formik.handleSubmit}
      >
        <input
          type="text"
          placeholder="Ingrese Nombre"
          name="name"
          value={formik.values.name}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          className="w-full lg:w-3/4 sm:w-1/4 p-4 mb-4 bg-rose-400 text-white border-none outline-none rounded-full text-center placeholder-gray-500"
        /> 
        {formik.touched.name && formik.errors.name ? (
          <div className="text-red-600">{formik.errors.name}</div>
        ) : null}
        <button
          type="submit"
          className="w-full lg:w-3/4 sm:w-1/4 bg-rose-400 text-white p-4 border-none cursor-pointer rounded-full"
        >
          Registrarme
        </button>
      </form>
      
    </div>
  );
};

export default Register;
