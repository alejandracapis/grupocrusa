import React from 'react'

const MainVideo = () => {
  return (
    <div className="one-video">
      <video
        autoPlay
        muted="true"
        loop
        playsInline="true"
        preload="none"
        className="one-video">
        <source src={require('../assets/videos/bgvideo-cropped.mp4')} type="video/mp4" />
      </video>
    </div>
  )
}

export default MainVideo;