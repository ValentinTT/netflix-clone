import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import {
  StyledCarouselContent,
  StyledCarousel,
  StyledCarouselArrow,
  StyledCarouselWrapper,
  StyledTitle,
} from "./Styles";

type CarouselProps = {
  children: React.ReactChild[];
  title: string;
};

const Carousel = ({ children, title }: CarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [length, setLength] = useState(children.length);

  useEffect(() => {
    setLength(children.length);
  }, [children]);

  const next = () => {
    if (currentIndex < length - 1) {
      setCurrentIndex((prevState) => prevState + 1);
    }
  };

  const prev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prevState) => prevState - 1);
    }
  };

  return (
    <StyledCarousel>
      <StyledTitle>{title}</StyledTitle>
      <StyledCarouselWrapper>
        <StyledCarouselArrow left onClick={prev}>
          <FontAwesomeIcon icon={faChevronLeft} size="lg" />
        </StyledCarouselArrow>

        <StyledCarouselContent times={currentIndex}>
          {children}
          {children}
        </StyledCarouselContent>
        <StyledCarouselArrow onClick={next}>
          <FontAwesomeIcon icon={faChevronRight} size="lg" />
        </StyledCarouselArrow>
      </StyledCarouselWrapper>
    </StyledCarousel>
  );
};

export default Carousel;
