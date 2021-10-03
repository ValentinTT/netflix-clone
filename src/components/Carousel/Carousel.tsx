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
  //U pdate the width on resize. which is necessary to determine the number of elements per slide.
  const { width } = useWindowsSize();
  const [numElementsToShow, setNumElementsToShow] = useState(
    elementsToShow(width)
  );
  const [isFirstDisplay, setIsFirstDisplay] = useState(true); // Flag used to avoid displaying last element to the left of first one, when the site is loaded. To simulate Netflix's behaviour.
  const [disableButtons, setDisableButtons] = useState(false); // Flag to avoid pressing multiple times the navigation buttons before the transition is finished.

  const sideRepeated = 5; // Number of slides to the left and rigth of the actual elements
  /* slide index. Starts at zero and not sideRepeated (remember the slide copy at the beginig)
   * because at start there is no left slides (isFirstDisplay flag behaviour) but it's important to remember that
   * after the first time the next button is pressed there will be:
   * sideRepeated + children.length + sideRepeated elements.
   */
  const [currentIndex, setCurrentIndex] = useState(0);

  const length = children.length + sideRepeated * 2; // Number of cards (at the begining it is 0 + children.length + sideRepeated) (isFirstDisplay flag behaviour).

  // Flag to indicate that we are at [0, sideRepeated] or [sideRepeated + children.length, length(number of cards)].
  // isRepeating=false means that we are displaying the actual elements and no the copy alonside them
  const [isRepeating, setIsRepeating] = useState(
    currentIndex <= sideRepeated || currentIndex >= length - sideRepeated
  );
  const [transitionEnabled, setTransitionEnabled] = useState(true); // Flag to disable transitions. (necessary to move to an index back to a number in between [sideRepeat, sideRepeat + children.length] (ergo where isRepeating = false)).

  // Update isRepeating on currentIndex update
  useEffect(() => {
    if (currentIndex <= sideRepeated || currentIndex >= length - sideRepeated) {
      setIsRepeating(true);
      return;
    }
    setIsRepeating(false);
  }, [currentIndex, infiniteLoop, length]);

  // Enable transitions after moving index to a isRepeating=false place. (done in handleTransitionEnd()).
  useEffect(() => {
    setTransitionEnabled(true);
  }, [currentIndex]);

  // Update number of elements to show per slide on window resize.
  useEffect(() => setNumElementsToShow(elementsToShow(width)), [width]);

  /**
   * Executed after every animation to:
   * 1. Enable buttons for further clicks.
   * 2. Move index to a place in between [sideRepeat, sideRepeat + children.length] if it's in a isRepeating place.
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
        // Move to the end (sideRepeated + children.length not length).
        setTransitionEnabled(false);
        setCurrentIndex((prevIndex) => prevIndex + children.length);
      } else if (currentIndex === sideRepeated + children.length) {
        // Move to the beginning (sideRepeated not 0).
        setTransitionEnabled(false);
        setCurrentIndex(sideRepeated);
      }
    }
  };

  const next = () => {
    if (disableButtons) return; // To avoid more clicks while animation is not finished
    setDisableButtons(true);

    if (isFirstDisplay) {
      /** If it is the first time the button is pressed it will update the value numElementsToShow
       * because when it is initialized the window object is not created therefor width=0
       */
      setNumElementsToShow((_) => elementsToShow(window.innerWidth));
      setCurrentIndex((prevIndex) => {
        let newNumElementsToShow = elementsToShow(window.innerWidth);
        let newIndex = prevIndex + newNumElementsToShow;
        // If index is in a isRepeating=false place or with isRepeating=true and showing the first item at the left most position. (which will trigger the handleTransitionEnd() to disable the animation and move the index to a isRepeating=false place)
        if (
          newIndex < children.length - newNumElementsToShow ||
          newIndex === children.length
        ) {
          return newIndex;
        }
        /** if by moving rigth the carousel will show the sequence: ... last item , first item, ...
         * we make it match the sequence: ..., item, item, last item. (end)
         */
        return children.length - newNumElementsToShow;
      });
      return;
    }

    setCurrentIndex((prevIndex) => {
      let newIndex = prevIndex + numElementsToShow;
      // If index is in a isRepeating=false place or with isRepeating=true and showing the first item at the left most position. (which will trigger the handleTransitionEnd() to disable the animation and move the index to a isRepeating=false place)
      if (
        newIndex < sideRepeated + children.length - numElementsToShow ||
        newIndex === sideRepeated + children.length
      ) {
        return prevIndex + numElementsToShow;
      }
      /** if by moving rigth the carousel will show the sequence: ... last item , first item, ...
       * we make it match the sequence: ..., item, item, last item. (end)
       */
      return sideRepeated + children.length - numElementsToShow;
    });
  };

  /** Moves index to the left numElementsToShow times. */
  const prev = () => {
    if (disableButtons) return;
    setCurrentIndex((prevIndex) => {
      let newIndex = prevIndex - numElementsToShow;
      if (
        newIndex > sideRepeated ||
        newIndex === sideRepeated - numElementsToShow
      ) {
        return newIndex;
      }
      return sideRepeated;
    });
    setDisableButtons(true);
  };

  /** Creates the elements that goes to the left of the first element [0, sideREpeated] elements */
  const renderExtraPrev = () => {
    let output = [];
    for (let index = 0; index < sideRepeated; index++) {
      output.unshift(children[children.length - (index % children.length) - 1]); //Unshift because the last item should be first to the left of the first element.
    }
    return output;
  };

  /** Creates the elements that goes to the right of the last element [sideRepeated + children.length, sideRepeated] elements */
  const renderExtraNext = () => {
    let output = [];
    for (let index = 0; index < sideRepeated + 5; index++) {
      output.push(children[index % children.length]);
    }
    return output;
  };

  return (
    <StyledCarouselWrapper>
      {isFirstDisplay || ( // Don't show arrow left on first load
        <StyledCarouselArrow left onClick={prev}>
          <FontAwesomeIcon icon={faChevronLeft} />
        </StyledCarouselArrow>
      )}
      <StyledCarouselContent
        times={currentIndex}
        onTransitionEnd={() => handleTransitionEnd()}
        transitionEnabled={transitionEnabled}
      >
        {isFirstDisplay || renderExtraPrev()}{" "}
        {/* Don't show left elements on first load */}
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
