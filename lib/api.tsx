// Modifica la función para enviar un mensaje de bienvenida
export const sendWelcomeMessage = async (toEmail: string, firstName: string) => {
    const messageData = {
      toEmail,
      firstName,
    };
  
    return fetch("/api/register", {
      method: "POST",
      body: JSON.stringify(messageData),
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
    .then(async (res) => {
      if (!res.ok) {
        const responseBody = await res.text(); // Lee el cuerpo de la respuesta para obtener más detalles
        throw new Error(`Failed to send welcome message. Status: ${res.status}, Response: ${responseBody}`);
      }
      return res.json();
    });
    
  };
  