import React from 'react';
import searchIcon from 'assets/icons/search.svg';
import Input from 'components/atoms/Input/Input';
import styled from 'styled-components';

const StyledInput = styled(Input)`
  padding: 10px 40px;
  font-size: ${({ theme }) => theme.fontSize.xs};
  background-image: url(${searchIcon});
  background-size: 15px;
  background-position: 15px 50%;
  background-repeat: no-repeat;
`;

const SearchInput = () => {
  return <StyledInput />;
};
export default SearchInput;
