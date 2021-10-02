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
  elementsToShow,
} from "./Styles";

type CarouselProps = {
  children: React.ReactChild[];
  title: string;
  infiniteLoop?: boolean;
};

type CarouselWrapperPropps = {
  children: React.ReactChild[];
  infiniteLoop?: boolean;
};

const CarouselWrapper = ({ children, infiniteLoop }: CarouselWrapperPropps) => {
  const [isFirstDisplay, setIsFirstDisplay] = useState(true);
  const [disableButtons, setDisableButtons] = useState(false);
  const [numElementsToShow, setNumElementsToShow] = useState(elementsToShow(0));

  const sideRepeated = 10;
  const [currentIndex, setCurrentIndex] = useState(0); // slide index
  const length = children.length + sideRepeated * 2; // number of cards

  const [isRepeating, setIsRepeating] = useState(
    infiniteLoop &&
      (currentIndex <= sideRepeated || currentIndex >= length - sideRepeated)
  );
  const [transitionEnabled, setTransitionEnabled] = useState(true);

  useEffect(() => {
    if (
      infiniteLoop &&
      (currentIndex <= sideRepeated || currentIndex >= length - sideRepeated)
    ) {
      setIsRepeating(true);
      return;
    }
    setIsRepeating(false);
  }, [currentIndex, infiniteLoop, sideRepeated, length]);

  useEffect(() => {
    setTransitionEnabled(true);
  }, [currentIndex]);

  /**
   * Executed after every animation
   */
  const handleTransitionEnd = () => {
    setDisableButtons(false);
    if (isRepeating) {
      if (currentIndex <= 0) {
        //llevar al final
        setTransitionEnabled(false);
        setCurrentIndex(children.length - currentIndex);
      } else if (currentIndex >= length) {
        //llevar al principio
        setTransitionEnabled(false);
        setCurrentIndex(currentIndex - children.length);
      }
    }
  };

  const next = () => {
    if (disableButtons) return;
    setDisableButtons(true);

    if (isFirstDisplay) {
      setIsFirstDisplay((_) => false);
      setNumElementsToShow((_) => elementsToShow(window.innerWidth));
      setCurrentIndex(
        (prevIndex) => prevIndex + elementsToShow(window.innerWidth)
      );
      return;
    }

    setCurrentIndex((prevIndex) => prevIndex + numElementsToShow);
  };

  const prev = () => {
    if (disableButtons) return;
    setCurrentIndex((prevIndex) => prevIndex - numElementsToShow);
    setDisableButtons(true);
  };

  const renderExtraPrev = () => {
    let output = [];
    for (let index = 0; index < sideRepeated; index++) {
      output.unshift(children[children.length - (index % children.length) - 1]);
    }
    return output;
  };

  const renderExtraNext = () => {
    let output = [];
    for (let index = 0; index < sideRepeated + 5; index++) {
      output.push(children[index % children.length]);
    }
    return output;
  };

  return (
    <StyledCarouselWrapper>
      {isFirstDisplay || (
        <StyledCarouselArrow left onClick={prev}>
          <FontAwesomeIcon icon={faChevronLeft} />
        </StyledCarouselArrow>
      )}
      <StyledCarouselContent
        times={currentIndex}
        onTransitionEnd={() => handleTransitionEnd()}
        transitionEnabled={transitionEnabled}
      >
        {isFirstDisplay || renderExtraPrev()}
        {children}
        {renderExtraNext()}
      </StyledCarouselContent>
      <StyledCarouselArrow onClick={next}>
        <FontAwesomeIcon icon={faChevronRight} />
      </StyledCarouselArrow>
    </StyledCarouselWrapper>
  );
};

const Carousel = ({ children, title, infiniteLoop }: CarouselProps) => {
  return (
    <StyledCarousel>
      <StyledTitle>{title}</StyledTitle>
      <CarouselWrapper infiniteLoop={infiniteLoop}>{children}</CarouselWrapper>
    </StyledCarousel>
  );
};

export default Carousel;
