import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import UserPageTemplate from 'templates/UserPageTemplate';
import SearchInput from 'components/atoms/Input/SearchInput';
import Heading from 'components/atoms/Heading/Heading';
import Paragraph from 'components/atoms/Paragraph/Paragraph';
import ButtonIcon from 'components/atoms/ButtonIcon/ButtonIcon';
import NewItemBar from 'components/organisms/NewItemBar/NewItemBar';
import plusIcon from 'assets/icons/plus.svg';
import withContext from 'hoc/withContext';
import { connect } from 'react-redux';

const StyledWrapper = styled.div`
  padding: 25px 150px 25px 70px;
  position: relative;
  min-height: 100vh;
  overflow: hidden;
`;

const StyledGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 85px;
`;

const StyledPageHeader = styled.div`
  margin: 25px 0 50px 0;
`;

const StyledHeading = styled(Heading)`
  margin: 25px 0 0;
  text-transform: capitalize;
`;

const StyledButtonIcon = styled(ButtonIcon)`
  position: fixed;
  bottom: 40px;
  right: 40px;
  background-color: ${({ activecolor, theme }) => theme[activecolor]};
  background-size: 50%;
  border-radius: 50px;
  z-index: 9999;
  transition: transform 0.3s, filter 0.2s;
  transform: rotate(${({ active }) => (active ? '-90deg' : '0deg')});
  :hover {
    cursor: pointer;
    filter: brightness(103%);
  }
`;

class GridTemplate extends Component {
  state = {
    isNewItemBarVisible: false,
    isButtonIconActive: false,
  };

  handleNewItemBarToggle = () => {
    this.setState((prevState) => ({
      isNewItemBarVisible: !prevState.isNewItemBarVisible,
      isButtonIconActive: !prevState.isButtonIconActive,
    }));
  };

  render() {
    const { pageContext, children, state } = this.props;
    const { isNewItemBarVisible, isButtonIconActive } = this.state;

    return (
      <>
        <UserPageTemplate>
          <StyledWrapper>
            <StyledPageHeader>
              <SearchInput placeholder="search" />
              <StyledHeading big as="h1">
                {pageContext}
              </StyledHeading>
              <Paragraph>
                {state[pageContext] ? `${state[pageContext].length} ${pageContext}` : null}
              </Paragraph>
            </StyledPageHeader>
            <StyledGrid>{children}</StyledGrid>
            <StyledButtonIcon
              onClick={this.handleNewItemBarToggle}
              icon={plusIcon}
              activecolor={pageContext}
              active={isButtonIconActive}
            />
            <NewItemBar
              handleClose={this.handleNewItemBarToggle}
              pageContext={pageContext}
              isVisible={isNewItemBarVisible}
            />
          </StyledWrapper>
        </UserPageTemplate>
      </>
    );
  }
}

GridTemplate.propTypes = {
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.array]).isRequired,
  pageContext: PropTypes.oneOf(['notes', 'twitters', 'articles']),
};

GridTemplate.defaultProps = {
  pageContext: 'notes',
};

const mapStateToProps = (state) => ({
  state,
});

export default withContext(connect(mapStateToProps)(GridTemplate));
