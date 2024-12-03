import React from 'react';

const MainVideo = () => {
  function scrollDown() {
    document.getElementById("item-two").scrollIntoView({ behavior: 'smooth' });
}

  return (
    <section className="item-one">
      <video
        controls
        autoPlay
        loop
        muted='true'
        playsInline='true'
        preload='none'
        className="one-video">
        <source src={require('./bgvideo-cropped.mp4')} />
        <source src={require('./bgvideo-cropped.mp4')} 
        onError={(video) => {
          var img = video.querySelector("img");
          if (img)
            video.parentNode.replaceChild(img, video);
          }} 
          />
        <img src={require('./bgvideo-cropped.gif')} alt='main gif' />
      </video>
      <span className="one-head">
        líderes en calidad de construcción e infraestructura
      </span>
      <button id="scroll-down" className="scrollDown" type="button" onClick={scrollDown}>&raquo;</button>
    </section>
  )
}

export default MainVideo;