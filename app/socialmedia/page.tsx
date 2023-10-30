"use client"
import React from 'react';
import { FaFacebook, FaTiktok, FaInstagram } from 'react-icons/fa';
import WhatsAppLink from '../register/WhatsAppLink';
const SocialMediaPage: React.FC = () => {
  const avatarImageUrl = 'https://firebasestorage.googleapis.com/v0/b/silvana-28ba0.appspot.com/o/avatar.jpeg?alt=media&token=39a04aa8-9589-460e-9b54-1c46d5b54192&_gl=1*b46rd1*_ga*MzY0MDg2NDYwLjE2OTY4NjIwOTU.*_ga_CW55HF8NVT*MTY5ODcwMDMxNS40My4xLjE2OTg3MDEzODYuNjAuMC4w';
  const logoImageUrl = 'https://firebasestorage.googleapis.com/v0/b/silvana-28ba0.appspot.com/o/logo.jpeg?alt=media&token=c557c67b-01ee-4ae2-b8c9-f580805913ed&_gl=1*1eb284m*_ga*MzY0MDg2NDYwLjE2OTY4NjIwOTU.*_ga_CW55HF8NVT*MTY5ODcwMDMxNS40My4xLjE2OTg3MDE0MTIuMzQuMC4w';

  return (
    <div className="min-h-screen flex flex-col bg-rose-400">

<h1 className="text-indigo-100 text-4xl text-center mt-4 mb-4">Silvana Campana</h1>



       
<div className=" flex justify-center items-center">
  <div className="w-32 h-32 rounded-full overflow-hidden ml-4 border border-rose-400">
    <img src={logoImageUrl} alt="Logo de la marca" className="w-full h-full" />
  </div>

  <div className="w-48 h-48 rounded-full overflow-hidden ml-4 mt-8">
    <img src={avatarImageUrl} alt="Avatar de la chica" className="w-full h-full" />
  </div>
</div>


<div className="flex flex-col items-center mt-8">
  <a href="https://www.tiktok.com/@silvanacampanaa" target="_blank" rel="noopener noreferrer" >
    <FaTiktok size={48} color="#000" />
  </a>
  <a href="https://www.instagram.com/silvanacampanaa/" target="_blank" rel="noopener noreferrer" className="mt-2 ">
    <FaInstagram size={48} color="#e4405f" />
  </a>
  <a href="https://www.facebook.com/poesiaenvidas" target="_blank" rel="noopener noreferrer" className="mt-2 ">
    <FaFacebook size={48} color= "#1877f2" />
  </a>
</div>

         <WhatsAppLink />
    </div>
    
  );
};

export default SocialMediaPage;
