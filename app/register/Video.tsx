import React from 'react';

const Video = () => {
  const videoUrl = 'https://firebasestorage.googleapis.com/v0/b/silvana-28ba0.appspot.com/o/SilvanaRegister%20(1).mp4?alt=media&token=70b67854-04cc-407f-8b9d-235c6af1bec0&_gl=1*112amfr*_ga*MzY0MDg2NDYwLjE2OTY4NjIwOTU.*_ga_CW55HF8NVT*MTY5NzQ4ODcxMC4yMC4xLjE2OTc0OTA5MjUuMzYuMC4w';

  return (
    <div className="m-5 p-2 flex justify-center items-center">
      <video className="w-full h-auto lg:w-1/2" controls>
        <source src={videoUrl} type="video/mp4" />
        Tu navegador no soporta la reproducción de videos.
      </video>
    </div>
  );
};

export default Video;