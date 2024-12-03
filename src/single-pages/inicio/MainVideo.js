import React from 'react';

const MainVideo = () => {
  const fallback = (video) => {
    var img = video.querySelector("img");
    if (img)
      video.parentNode.replaceChild(img, video);
  }

  function scrollDown() {
    document.getElementById("item-two").scrollIntoView({ behavior: 'smooth' });
}

  return (
    <section className="item-one">
      <video
        autoPlay
        loop
        muted
        playsInline
        preload='auto'
        className="one-video">
        <source src={require('./bgvideo-cropped.mp4')} />
        <source src={require('./bgvideo-cropped.mp4')} onError={fallback} />
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