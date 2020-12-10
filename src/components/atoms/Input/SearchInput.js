import React from 'react';
import searchIcon from 'assets/icons/search.svg';
import Input from 'components/atoms/Input/Input';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { setSearchValue as setSearchAction } from 'actions';

const StyledInput = styled(Input)`
  padding: 10px 40px;
  font-size: ${({ theme }) => theme.fontSize.xs};
  background-image: url(${searchIcon});
  background-size: 15px;
  background-position: 15px 50%;
  background-repeat: no-repeat;
`;

const SearchInput = ({ setSearchValue, searchValue }) => {
  const handleChange = (e) => {
    setSearchValue(e.target.value);
  };
  return <StyledInput onChange={handleChange} value={searchValue} />;
};

const mapStateToProps = (state) => {
  const { searchValue } = state;
  return { searchValue };
};

const mapDispatchToProps = (dispatch) => ({
  setSearchValue: (searchValue) => dispatch(setSearchAction(searchValue)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchInput);
