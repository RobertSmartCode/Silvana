"use client"
import { useRouter } from 'next/navigation';

const Thankyou = () => {
  const router = useRouter();

  // Configura un temporizador para redirigir después de 1 segundo
  setTimeout(() => {
    router.push('/socialmedia');
  }, 1000); // 1000 ms = 1 segundo

  return (
    <div className="min-h-screen bg-indigo-100 flex flex-col justify-center items-center">
      <h1 className="text-3xl text-center text-rose-400 mb-4">Gracias por Registrarte</h1>
      <p className="text-lg text-center text-gray-700">Revisa tu correo</p>
    </div>
  );
};

export default Thankyou;
