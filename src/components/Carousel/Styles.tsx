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
  width: 6%;
  ${device.sm`width: 4%;`}

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
    font-size: 0.75rem;
    opacity: 0;
    transition: opacity 0.1s ease-in-out;
    transition: transform 0.1s ease-in;
    @media screen and (min-width: ${size.sm}) {
      font-size: 1.25rem;
    }
    @media screen and (min-width: ${size.md}) {
      font-size: 1.75rem;
    }
  }

  &:hover {
    opacity: 80%;
    & > * {
      opacity: 100%;
      transform: scaleY(1.1);
    }
  }
`;

export const StyledCarouselContent = styled.div<{
  times: number;
  transitionEnabled?: boolean;
}>`
  width: 100%;
  display: flex;

  -ms-overflow-style: none; /* hide scrollbar in IE and Edge */
  scrollbar-width: none; /* hide scrollbar in Firefox */

  &::-webkit-scrollbar,
  &::-webkit-scrollbar {
    display: none;
  }

  & > * {
    width: calc(
      (100% - 12%) / ${elementsPerSlideBreakpoint()}
    ); //12% because of the 6% of each arrow
    flex-shrink: 0;
    flex-grow: 1;
  }
  transition: ${(props) =>
    props.transitionEnabled ? "transform 0.75s ease-in-out" : "none"};

  ${(props) =>
    `transform: translateX(calc(${
      props.times
    }*((-100% + 6%)/ ${elementsPerSlideBreakpoint()})));`}

  @media screen and (min-width:${size.sm}) {
    & > * {
      width: calc((100% - 4%) / ${elementsPerSlideBreakpoint(size.sm)});
    }
    ${(props) =>
      `transform: translateX(calc(${
        props.times
      }*((-100% + 4%)/ ${elementsPerSlideBreakpoint(size.sm)})));`}
  }

  @media screen and (min-width: ${size.md}) {
    & > * {
      width: calc((100% - 4%) / ${elementsPerSlideBreakpoint(size.md)});
    }
    ${(props) =>
      `transform: translateX(calc(${
        props.times
      }*((-100% + 4%)/ ${elementsPerSlideBreakpoint(size.md)})));`}
  }

  @media screen and (min-width: ${size.lg}) {
    & > * {
      width: calc((100% - 4%) / ${elementsPerSlideBreakpoint(size.lg)});
    }
    ${(props) =>
      `transform: translateX(calc(${
        props.times
      }*((-100% + 4%)/ ${elementsPerSlideBreakpoint(size.lg)})));`}
  }

  @media screen and (min-width: ${size.xl}) {
    & > * {
      width: calc((100% - 4%) / ${elementsPerSlideBreakpoint(size.xl)});
    }
  }
`;

export const StyledCarouselWrapper = styled.div`
  display: flex;
  position: relative;
  padding-left: 4%;
  z-index: 10;

  &:hover > ${StyledCarouselArrow} {
    & > * {
      opacity: 100%;
    }
  }
`;

export const StyledTitle = styled.h2`
  color: ${Colors.text};
  padding-left: 4%;
  padding-bottom: 0.5rem;
`;

export const StyledCarousel = styled.div`
  width: 100%;
  padding: 1rem 0rem;
  display: flex;
  flex-direction: column;
`;
