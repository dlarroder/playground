import classNames from 'classnames';
import React, { useState } from 'react';

interface FancyTextProps {
  text: string;
}

export function HoverableText({ text }: FancyTextProps) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [prevIndex, setPrevIndex] = useState<number | null>(null);
  const [nextIndex, setNextIndex] = useState<number | null>(null);

  const textArray = text.split('');

  const handleMouseOver = (index: number) => {
    setHoveredIndex(index);

    if (index === 0) {
      setPrevIndex(null);
    } else {
      setPrevIndex(index - 1);
    }

    if (index === textArray.length - 1) {
      setNextIndex(null);
    } else {
      setNextIndex(index + 1);
    }
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
    setPrevIndex(null);
    setNextIndex(null);
  };

  return (
    <div>
      {textArray.map((text, index) => (
        <span
          key={index}
          onMouseOver={() => handleMouseOver(index)}
          onMouseLeave={handleMouseLeave}
          className={classNames(
            'transition duration-300 text-5xl cursor-pointer',
            {
              // Not hovered
              'font-semibold':
                hoveredIndex !== index ||
                prevIndex !== index ||
                nextIndex !== index,

              // prev / next index
              'font-extrabold': prevIndex === index || nextIndex === index,

              // hovered index
              'font-black': hoveredIndex === index,
            }
          )}
        >
          {text}
        </span>
      ))}
    </div>
  );
}
