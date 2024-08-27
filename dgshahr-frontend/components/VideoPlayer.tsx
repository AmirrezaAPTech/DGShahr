import React from 'react';

const VideoPlayer: React.FC = () => {
  return (
    <div className="relative w-full pb-[57%]">
      <iframe
        className="absolute top-0 left-0 w-full h-full"
        src="https://www.aparat.com/video/video/embed/videohash/g31k5w2/vt/frame?autoplay=true"
        allowFullScreen
        webkitAllowFullScreen
        mozAllowFullScreen
      ></iframe>
    </div>
  );
};

export default VideoPlayer;
