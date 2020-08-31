import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import ButtonIcon from 'components/atoms/ButtonIcon/Buttonicon';
import Pen from 'assets/icons/pen.svg';
import Twitter from 'assets/icons/twitter.svg';
import Bulb from 'assets/icons/bulb.svg';
import Logout from 'assets/icons/logout.svg';
import Logo from 'assets/icons/logo.svg';

const StyledWrapper = styled.aside`
  background-color: ${({ activeColor, theme }) => (activeColor ? theme[activeColor] : theme.note)};
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

// eslint-disable-next-line react/prop-types
const Sidebar = ({ pageType }) => (
  <StyledWrapper activeColor={pageType}>
    <StyledLogo to="/" />
    <LinksList>
      <li>
        <ButtonIcon as={NavLink} activeclass="active" to="/notes" icon={Pen} exact />
      </li>
      <li>
        <ButtonIcon as={NavLink} to="/twitts" icon={Twitter} />
      </li>
      <li>
        <ButtonIcon as={NavLink} to="/articles" icon={Bulb} />
      </li>
    </LinksList>
    <StyledButtonIcon as={NavLink} to="/login" icon={Logout} />
  </StyledWrapper>
);

export default Sidebar;
