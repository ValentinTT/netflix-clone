import { useState, useEffect, useRef } from "react";
import {
  BannerInfo,
  BannerOverlay,
  BannerRightInfo,
  CircleButton,
  ImageBanner,
  MoreInfoButton,
  PlayButton,
  Video,
  VideoContainer,
} from "./Styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInfoCircle,
  faPlay,
  faRedo,
  faVolumeMute,
  faVolumeUp,
} from "@fortawesome/free-solid-svg-icons";

const Banner = () => {
  const [isFirstDisplay, setIsFirstDisplay] = useState(true);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const videoElem = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    setTimeout(() => {
      setIsFirstDisplay(false);
      setIsPlaying(true);
    }, 2000);
  }, []);

  return (
    <VideoContainer>
      <Video
        autoPlay
        muted // don't remove because in some browsers video doesn't autoplay if it is not muted
        ref={videoElem}
        crossOrigin="anonymous"
        onEnded={() => setIsPlaying(false)}
        isPlaying={isPlaying}
      >
        <source src={"/assets/video.mp4"} type="video/mp4" />
      </Video>

      <ImageBanner
        fadingIn={!isPlaying}
        duration={isFirstDisplay ? "0s" : "1s"}
        src="https://res.cloudinary.com/dzlmilfku/image/upload/v1641685406/netflix-clone/bannerWallpaper.jpeg"
      />
      <BannerOverlay>
        <BannerInfo isPlaying={isPlaying}>
          <img
            src="https://res.cloudinary.com/dzlmilfku/image/upload/v1632766841/netflix-clone/banner.webp"
            alt=""
          />
          <p>
            Insecure Otis has all the answers when it comes to sex advice,
            thanks to his therapist mom. So rebel Maeve proposes a school
            sex-therapy clinic.
          </p>
          <div>
            <PlayButton>
              <FontAwesomeIcon icon={faPlay} />
              <span>Play</span>
            </PlayButton>
            <MoreInfoButton>
              <FontAwesomeIcon icon={faInfoCircle} />
              <span>More Info</span>
            </MoreInfoButton>
          </div>
        </BannerInfo>
        <BannerRightInfo>
          {isFirstDisplay ||
            (isPlaying ? (
              <CircleButton
                onClick={() => {
                  setIsMuted((prevState) => {
                    if (videoElem.current !== null)
                      videoElem.current.muted = !prevState;
                    return !prevState;
                  });
                }}
              >
                <FontAwesomeIcon icon={isMuted ? faVolumeMute : faVolumeUp} />
              </CircleButton>
            ) : (
              <CircleButton
                onClick={() => {
                  setIsPlaying((prevState) => {
                    setIsMuted(true);
                    return true;
                  });
                }}
              >
                <FontAwesomeIcon icon={faRedo} />
              </CircleButton>
            ))}
          <span>16+</span>
        </BannerRightInfo>
      </BannerOverlay>
    </VideoContainer>
  );
};

export default Banner;
