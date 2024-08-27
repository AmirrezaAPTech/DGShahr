import React from 'react';

const VideoPlayer: React.FC = () => {
  return (
    <div className="relative w-full pb-5">
      <iframe
        className="lg:absolute lg:top-0 lg:left-0 w-full h-full"
        src="https://www.aparat.com/video/video/embed/videohash/g31k5w2/vt/frame?autoplay=true"
        allowFullScreen
        webkitAllowFullScreen
        mozAllowFullScreen
      ></iframe>
    </div>
  );
};

export default VideoPlayer;
