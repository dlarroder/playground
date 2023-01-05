import React, { ReactNode, useEffect, useRef } from 'react';
import useWindowSize from './hooks/useWindowSize';

interface SkewScrollProps {
  children: ReactNode;
  sensitivity?: number;
}

export function SkewScroll({ children, sensitivity = 7.5 }: SkewScrollProps) {
  //Hook to grab window size
  const size = useWindowSize();

  // Ref for parent div and scrolling div
  const scrollContainer = useRef<HTMLDivElement>(null);

  // Configs
  const data = {
    ease: 0.1,
    current: 0,
    previous: 0,
    rounded: 0,
  };

  //set the height of the body.
  useEffect(() => {
    setBodyHeight();
  }, [size.height]);

  //Set the height of the body to the height of the scrolling div
  const setBodyHeight = () => {
    if (scrollContainer.current && scrollContainer.current) {
      document.body.style.height = `${
        scrollContainer.current.getBoundingClientRect().height
      }px`;
    }
  };

  // Run scrollrender once page is loaded.
  useEffect(() => {
    // Scrolling
    const skewScrolling = () => {
      if (!size.width) {
        return;
      }
      //Set Current to the scroll position amount
      data.current = window.scrollY;
      // Set Previous to the scroll previous position
      data.previous += (data.current - data.previous) * data.ease;
      // Set rounded to
      data.rounded = Math.round(data.previous * 100) / 100;

      // Difference between
      const difference = data.current - data.rounded;
      const acceleration = difference / size.width;
      const velocity = +acceleration;
      const skew = velocity * sensitivity;

      //Assign skew and smooth scrolling to the scroll container
      if (scrollContainer.current) {
        scrollContainer.current.style.transform = `translate3d(0, -${data.rounded}px, 0) skewY(${skew}deg)`;
      }

      //loop vai raf
      requestAnimationFrame(() => skewScrolling());
    };

    requestAnimationFrame(() => skewScrolling());
  }, [data, size.width, sensitivity]);

  return (
    <div className="fixed top-0 left-0 h-full w-full overflow-hidden">
      <div ref={scrollContainer}>{children}</div>
    </div>
  );
}
