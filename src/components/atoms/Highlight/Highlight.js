import React from 'react';
import styled from 'styled-components';

const HighlightedSpan = styled.span`
  background-color: ${({ highlighted }) => (highlighted ? 'white' : 'transparent')};
`;
const StyledSpan = styled.span``;
let uniqueID = 0;
const getID = () => {
  uniqueID += 1;
  return uniqueID;
};

const Highligt = ({ text, highlight }) => {
  const parts = text.split(new RegExp(`(${highlight})`, 'gi'));

  return (
    <StyledSpan>
      {parts.map((part) => (
        <HighlightedSpan key={getID()} highlighted={part === highlight}>
          {part}
        </HighlightedSpan>
      ))}
    </StyledSpan>
  );
};

export default Highligt;
