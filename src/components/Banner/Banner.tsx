import { useEffect, useRef, useState } from "react";
import { ImageBanner, Video, VideoContainer } from "./Styles";

const Banner = () => {
  const videoElem = useRef<HTMLVideoElement>(null);
  const [isFadingIn, setIsFadingIn] = useState(true);
  const [isFirstDisplay, setIsFirstDisplay] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      if (videoElem.current === null) return;
      videoElem.current.play();
      setIsFadingIn(false);
      setIsFirstDisplay(false);
    }, 2000);
  }, []);

  return (
    <VideoContainer>
      <Video
        ref={videoElem}
        muted
        crossOrigin="anonymous"
        onEnded={() => setIsFadingIn(true)}
      >
        <source src={"/assets/video.mp4"} type="video/mp4" />
      </Video>
      <ImageBanner
        fadingIn={isFadingIn}
        duration={isFirstDisplay ? "0s" : "1s"}
        src="https://res.cloudinary.com/dzlmilfku/image/upload/v1641685406/netflix-clone/bannerWallpaper.jpg"
      />
    </VideoContainer>
  );
};

export default Banner;
