import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { PropTypes } from 'prop-types';
import ButtonIcon from 'components/atoms/ButtonIcon/ButtonIcon';
import Pen from 'assets/icons/pen.svg';
import Twitter from 'assets/icons/twitter.svg';
import Bulb from 'assets/icons/bulb.svg';
import Logout from 'assets/icons/logout.svg';
import Logo from 'assets/icons/logo.svg';
import { routes } from 'routes/routes';
import withContext from 'hoc/withContext';

const StyledWrapper = styled.aside`
  background-color: ${({ activeColor, theme }) => (activeColor ? theme[activeColor] : theme.notes)};
  height: 100vh;
  width: 120px;
  position: fixed;
  left: 0;
  top: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

const StyledLogo = styled(NavLink)`
  margin-top: 30px;
  width: 67px;
  height: 67px;
  display: block;
  background-image: url(${Logo});
  background-repeat: no-repeat;
  background-position: 50% 50%;
  background-size: 80%;
  margin-bottom: 100%;
`;

const StyledButtonIcon = styled(ButtonIcon)`
  margin-top: auto;
`;

const LinksList = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
`;

const Sidebar = ({ pageContext }) => (
  <StyledWrapper activeColor={pageContext}>
    <StyledLogo to="/" />
    <LinksList>
      <li>
        <ButtonIcon as={NavLink} activeclass="active" to={routes.notes} icon={Pen} />
      </li>
      <li>
        <ButtonIcon as={NavLink} to={routes.twitters} icon={Twitter} />
      </li>
      <li>
        <ButtonIcon as={NavLink} to={routes.articles} icon={Bulb} />
      </li>
    </LinksList>
    <StyledButtonIcon as={NavLink} to={routes.login} icon={Logout} />
  </StyledWrapper>
);

Sidebar.propTypes = {
  pageContext: PropTypes.oneOf(['notes', 'twitters', 'articles']),
};
Sidebar.defaultProps = {
  pageContext: 'notes',
};

export default withContext(Sidebar);
