import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import styled, { css } from 'styled-components';
import Paragraph from 'components/atoms/Paragraph/Paragraph';
import Heading from 'components/atoms/Heading/Heading';
import Button from 'components/atoms/Button/Button';
import LinkIcon from 'assets/icons/link.svg';
import Highlight from 'components/atoms/Highlight/Highlight';
import { connect } from 'react-redux';
import { removeItem as removeItemAction } from 'actions';
import withContext from 'hoc/withContext';

const StyledWrapper = styled.div`
  min-height: 380px;
  box-shadow: 0 10px 30px -10px hsla(0, 0%, 0%, 0.1);
  border-radius: 10px;
  overflow: hidden;
  position: relative;
  display: grid;
  grid-template-rows: 0.25fr 1fr;
`;

const StyledHeading = styled(Heading)`
  margin: 5px 0 0;
  position: relative;
  width: fit-content;
  ::after {
    content: '';
    position: absolute;
    height: 2px;
    background-color: black;
    left: 0;
    bottom: 0;
    ${({ animate }) =>
      animate &&
      css`
        animation: item-hover-off 0.3s;
      `}
  }
  :hover {
    ::after {
    }
  }
  @keyframes item-hover {
    from {
      left: 0;
      right: 100%;
    }
    to {
      left: 0;
      right: 0;
    }
  }
  @keyframes item-hover-off {
    from {
      right: 0;
      left: 0;
    }
    to {
      right: 0;
      left: 100%;
    }
  }
`;

const InnerWrapper = styled.div`
  position: relative;
  padding: 17px 30px;
  background-color: ${({ activeColor, theme }) => (activeColor ? theme[activeColor] : 'white')};
  &:hover ${StyledHeading}::after {
    animation: item-hover 0.3s forwards;
  }

  :first-of-type {
    z-index: 9997;
  }
  ${({ redirect }) =>
    redirect &&
    css`
      :hover {
        cursor: pointer;
      }
    `}
  ${({ flex }) =>
    flex &&
    css`
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    `}
`;

const StyledAvatar = styled.img`
  width: 86px;
  height: 86px;
  border: 5px solid ${({ theme }) => theme.twitters};
  border-radius: 50px;
  position: absolute;
  right: 25px;
  top: 25px;
`;

const StyledLinkButton = styled.a`
  display: block;
  width: 47px;
  height: 47px;
  border-radius: 50px;
  background: white url(${LinkIcon}) no-repeat;
  background-size: 60%;
  background-position: 50%;
  position: absolute;
  right: 25px;
  top: 50%;
  transform: translateY(-50%);
`;

class Card extends Component {
  state = {
    redirect: false,
    animateCardHover: false,
  };

  handleCardClick = () => this.setState({ redirect: true });

  handleCardHover = () => this.setState({ animateCardHover: true });

  render() {
    const { id, pageContext, title, articleUrl, content, removeItem, searchValue } = this.props;
    const { redirect, animateCardHover } = this.state;

    if (redirect) {
      return <Redirect to={`${pageContext}/details/${id}`} />;
    }

    return (
      <StyledWrapper>
        <InnerWrapper
          redirect
          onMouseOut={this.handleCardHover}
          onClick={this.handleCardClick}
          activeColor={pageContext}
        >
          <StyledHeading animate={animateCardHover}>
            <Highlight text={title} highlight={searchValue} />
          </StyledHeading>
          {pageContext === 'twitters' && (
            // <StyledAvatar src={`https://twitter-avatar.now.sh/${twitterName}`} />
            <StyledAvatar src="https://cdn.pixabay.com/photo/2018/11/13/21/43/instagram-3814049_960_720.png" />
          )}
          {pageContext === 'articles' && <StyledLinkButton href={articleUrl} />}
        </InnerWrapper>
        <InnerWrapper flex>
          <Paragraph>{content}</Paragraph>
          <Button onClick={() => removeItem(pageContext, id)} secondary>
            REMOVE
          </Button>
        </InnerWrapper>
      </StyledWrapper>
    );
  }
}

Card.propTypes = {
  id: PropTypes.string.isRequired,
  pageContext: PropTypes.oneOf(['notes', 'twitters', 'articles']),
  title: PropTypes.string.isRequired,
  // twitterName: PropTypes.string,
  articleUrl: PropTypes.string,
  content: PropTypes.string.isRequired,
  removeItem: PropTypes.func.isRequired,
};

Card.defaultProps = {
  pageContext: 'notes',
  // twitterName: null,
  articleUrl: null,
};

const mapDispatchToProps = (dispatch) => ({
  removeItem: (itemType, id) => dispatch(removeItemAction(itemType, id)),
});

export default connect(null, mapDispatchToProps)(withContext(Card));
