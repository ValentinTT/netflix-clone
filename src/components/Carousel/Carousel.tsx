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

import useWindowsSize from "utils/useWindowsSize";

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
  const { width } = useWindowsSize();
  const [isFirstDisplay, setIsFirstDisplay] = useState(true);
  const [disableButtons, setDisableButtons] = useState(false);
  const [numElementsToShow, setNumElementsToShow] = useState(
    elementsToShow(width)
  );

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
    if (isFirstDisplay) {
      setIsFirstDisplay((_) => false);
      setTransitionEnabled(false);
      setCurrentIndex((prevIndex) => prevIndex + sideRepeated);
      return;
    }
    if (isRepeating) {
      if (currentIndex < sideRepeated) {
        //Move to the end (sideRepeated + children.length not length)
        setTransitionEnabled(false);
        setCurrentIndex((prevIndex) => prevIndex + children.length);
      } else if (currentIndex === sideRepeated + children.length) {
        //Move to the beginning (sideRepeated not 0)
        setTransitionEnabled(false);
        setCurrentIndex(sideRepeated);
      }
    }
  };

  const next = () => {
    if (disableButtons) return;
    setDisableButtons(true);

    if (isFirstDisplay) {
      setNumElementsToShow((_) => elementsToShow(window.innerWidth));
      setCurrentIndex((prevIndex) => {
        let newNumElementsToShow = elementsToShow(window.innerWidth);
        let newIndex = prevIndex + newNumElementsToShow;
        if (
          newIndex < children.length - newNumElementsToShow ||
          newIndex === children.length
        ) {
          return newIndex;
        }
        return children.length - newNumElementsToShow;
      });
      return;
    }

    setCurrentIndex((prevIndex) => {
      let newIndex = prevIndex + numElementsToShow;
      if (
        newIndex < sideRepeated + children.length - numElementsToShow ||
        newIndex === sideRepeated + children.length
      ) {
        return prevIndex + numElementsToShow;
      }
      return sideRepeated + children.length - numElementsToShow;
    });
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
