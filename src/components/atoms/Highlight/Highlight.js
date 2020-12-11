import React from 'react';
import styled from 'styled-components';

const HighlightedSpan = styled.span`
  background-color: ${({ highlighted }) => (highlighted ? 'white' : 'transparent')};
  :first-child {
    text-transform: capitalize;
  }
`;

let uniqueID = 0;
const getID = () => {
  uniqueID += 1;
  return uniqueID;
};

const Highligt = ({ text, highlight }) => {
  const parts = text.split(new RegExp(`(${highlight})`, 'gi'));

  return (
    <span>
      {parts.map((part) => {
        if (part)
          return (
            <HighlightedSpan
              key={getID()}
              highlighted={part.toLowerCase() === highlight.toLowerCase()}
            >
              {part}
            </HighlightedSpan>
          );
      })}
    </span>
  );
};

export default Highligt;
