import styled from "styled-components";

import Colors from "styles/Colors";
import { size, device, sizeInNumber } from "styles/Breakpoints";

/**
 * elementsPerSlideBreakpoint
 * An utility that provides the number of elements to be displayed acording to
 * screen breakpoint.
 * @param widthBreakpoint String of the current width breakpoint
 * @returns Number of visible elements in the carousel
 */
export const elementsPerSlideBreakpoint = (
  widthBreakpoint?: string
): number => {
  switch (widthBreakpoint) {
    case size.sm:
      return 3;
    case size.md:
      return 4;
    case size.lg:
    case size.xl:
      return 5;
    default:
      return 2;
  }
};

/**
 * Utility function to get the number of elements to be displayed acording to
 * screen width.
 * @param width Screen width;
 * @returns Number of visible elements in the carousel;
 */

export const elementsToShow = (width: number): number => {
  if (width >= sizeInNumber.sm && sizeInNumber.md >= width)
    return elementsPerSlideBreakpoint(size.sm);
  if (width >= sizeInNumber.md && sizeInNumber.lg >= width)
    return elementsPerSlideBreakpoint(size.md);
  if (width >= sizeInNumber.lg && sizeInNumber.xl >= width)
    return elementsPerSlideBreakpoint(size.lg);
  if (width >= sizeInNumber.xl) return elementsPerSlideBreakpoint(size.xl);
  return elementsPerSlideBreakpoint();
};

export const StyledRightPlaceholder = styled.span`
  background: ${Colors.gray};
  height: 100%;
  width: 6%;
  ${device.sm`width: 4%;`}
  position: absolute;
  left: 0;
  z-index: 10;
`;

export const StyledCarouselArrow = styled.span<{ left?: boolean }>`
  background: ${Colors.gray};
  height: 100%;
  width: 6vw;
  ${device.sm`width: 4vw;`} // Arrow width
  /* ${device.md`width: 4vw;`}
  ${device.lg`width: 4vw;`}
  ${device.xl`width: 4vw;`} */

  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10;

  opacity: 70%;
  transition: opacity 0.5s;
  cursor: pointer;

  position: absolute;

  ${(props) => {
    return props.left ? "left: 0;" : "right: 0;";
  }};

  & > * {
    opacity: 0;
    transition: opacity 0.1s ease-in-out;
    transition: transform 0.1s ease-in;
  }

  &:hover {
    opacity: 80%;
    & > * {
      opacity: 100%;
      transform: scale(1.75);
    }
  }
`;

export const StyledCarouselContent = styled.div<{ times: number }>`
  width: 100%;
  display: flex;

  -ms-overflow-style: none; /* hide scrollbar in IE and Edge */
  scrollbar-width: none; /* hide scrollbar in Firefox */

  &::-webkit-scrollbar,
  &::-webkit-scrollbar {
    display: none;
  }

  & > * {
    width: calc((100vw - 12vw) / 2); //12vw because of the 6vw of each arrow
    flex-shrink: 0;
    flex-grow: 1;
  }
  transition: transform 0.4s ease-in-out;

  ${(props) => `transform: translateX(calc(${props.times}*(-100vw + 12vw)));`}

  @media screen and (min-width:${size.sm}) {
    & > * {
      width: calc((100vw - 8vw) / 3);
    }
    ${(props) => `transform: translateX(calc(${props.times}*(-100vw + 8vw)));`}
  }

  @media screen and (min-width: ${size.md}) {
    & > * {
      width: calc((100vw - 8vw) / 4);
    }
  }

  @media screen and (min-width: ${size.lg}) {
    & > * {
      width: calc((100vw - 8vw) / 5);
    }
  }

  @media screen and (min-width: ${size.xl}) {
    & > * {
      width: calc((100vw - 8vw) / 5);
    }
  }
`;

export const StyledCarouselWrapper = styled.div`
  display: flex;
  position: relative;
  padding-left: 4vw;

  &:hover > ${StyledCarouselArrow} {
    & > * {
      opacity: 100%;
    }
  }
`;

export const StyledTitle = styled.h2`
  color: ${Colors.text};
  font: 1.125rem "NetflixSans Medium";
  line-height: 1rem;
  padding-left: 4vw;
  padding-bottom: 0.5rem;
`;

export const StyledCarousel = styled.div`
  width: 100vw;
  padding: 1rem 0rem;
  display: flex;
  flex-direction: column;
`;
