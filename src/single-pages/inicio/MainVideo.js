import React from 'react';

const MainVideo = () => {
  const fallback = (video) =>
{
  var img = video.querySelector("img");
  if (img)
    video.parentNode.replaceChild(img, video);
}

  return (
    <div className="one-video">
      <video
      controls
      autoPlay
      loop
      muted
      playsInline
      preload='auto'
      className="one-video">
        <source src={require('./bgvideo-cropped.mp4')} />
          <source src={require('./bgvideo-cropped.mp4')} onerror={fallback} />
            <img src={require('./bgvideo-cropped.gif')} alt='main gif'/>
      </video>

            {/* <video
        autoPlay
        muted={true}
        loop
        playsInline={true}
        preload="none"
        allowsInlineMediaPlayback={true}
        mediaPlaybackRequiresUserActions={false}
        className="one-video">
        <source src={require('./bgvideo-cropped.mp4')} type="video/mp4" />
      </video> */}
    </div>
  )
}

export default MainVideo;