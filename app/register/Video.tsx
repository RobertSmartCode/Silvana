import React from 'react';

const Video = () => {
  const videoUrl = 'https://firebasestorage.googleapis.com/v0/b/silvana-28ba0.appspot.com/o/silvana%20(2).mp4?alt=media&token=2bdc7368-4c6b-4655-8f0a-c5dd6fb74f09&_gl=1*1lvucwz*_ga*MzY0MDg2NDYwLjE2OTY4NjIwOTU.*_ga_CW55HF8NVT*MTY5ODY4NDkxMi40MS4xLjE2OTg2ODUwNjQuMzUuMC4w';

  return (
    <div className="m-5 p-2 flex justify-center items-center">
      <video className="w-full h-auto lg:w-3/4 sm:w-full sm:w-1/4" controls preload="auto" loop >
        <source src={videoUrl} type="video/mp4" />
        Tu navegador no soporta la reproducción de videos.
      </video>
    </div>

  );
};

export default Video;
