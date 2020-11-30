import React from 'react';
import PropTypes from 'prop-types';
import UserPageTemplate from 'templates/UserPageTemplate';
import withContext from 'hoc/withContext';
import styled from 'styled-components';
import Heading from 'components/atoms/Heading/Heading';
import Paragraph from 'components/atoms/Paragraph/Paragraph';
import Button from 'components/atoms/Button/Button';
import { Link } from 'react-router-dom';

const StyledWrapper = styled.div`
  padding-left: 100px;
  display: flex;
  flex-direction: column;
  max-width: 600px;
`;

const StyledAvatar = styled.img`
  height: 112px;
  width: 112px;
  border-radius: 50%;
  position: absolute;
  right: 0;
  top: -20px;
`;
const StyledHeading = styled(Heading)`
  position: relative;
  margin: 100px 0 0 0;
`;

const StyledButton = styled(Button)`
  margin: 50px 0 20px 0;
`;

const StyledLink = styled.a`
  text-decoration: underline;
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  color: ${({ theme }) => theme.black};
`;

const DetailsTemplate = ({ pageContext, title, content, articleUrl, twitterName }) => (
  <UserPageTemplate>
    <StyledWrapper>
      <StyledHeading big as="h1">
        {title}
      </StyledHeading>
      <Paragraph>{content}</Paragraph>
      {pageContext === 'articles' && <StyledLink href={articleUrl}>Open article</StyledLink>}
      {pageContext === 'twitters' && (
        <StyledAvatar alt={title} src={`https://twitter-avatar.now.sh/${twitterName}`} />
      )}
      <StyledButton as={Link} to={`/${pageContext}`} activecolor={pageContext}>
        close
      </StyledButton>
    </StyledWrapper>
  </UserPageTemplate>
);

DetailsTemplate.propTypes = {
  pageContext: PropTypes.oneOf(['notes', 'twitters', 'articles']),
};

DetailsTemplate.defaultProps = {
  pageContext: 'notes',
};

export default withContext(DetailsTemplate);
