import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';

const WhatsAppLink: React.FC = () => {
  const phoneNumber = '+5491122663231';
  const message = 'Hola, quiero saber más sobre tu empresa.';
  const encodedMessage = encodeURIComponent(message);
  const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

  return (
    <a
    href={whatsappURL}
    target="_blank"
    rel="noopener noreferrer"
    style={{
      backgroundColor: '#25d366',
      color: 'white',
      padding: '10px 15px',
      borderRadius: '50px',
      textDecoration: 'none',
      position: 'fixed',
      bottom: '20px', // Ajusta la distancia desde la parte inferior
      right: '20px', // Ajusta la distancia desde la derecha
      display: 'flex',
      alignItems: 'center',
    }}
  >
      <FaWhatsapp size={30} /> {/* Estilos del ícono */}
      {/* Texto del enlace */}
    </a>
  );
};

export default WhatsAppLink;
