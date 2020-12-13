import styled, { css } from 'styled-components';

const Button = styled.button`
  background-color: ${({ activecolor, theme }) => theme[activecolor]};
  width: ${({ width }) => width || '220px'};
  height: 47px;
  border: none;
  border-radius: 50px;
  font-size: 16px;
  font-weight: ${({ theme, bold }) => (bold ? theme.fontWeight.bold : 'semibold')};
  font-family: 'Montserrat', sans-serif;
  text-transform: uppercase;
  color: black;
  outline: none;
  :hover {
    cursor: pointer;
    filter: brightness(103%);
  }
  transition: filter 0.2s;

  ${({ secondary }) =>
    secondary &&
    css`
      background-color: ${({ theme }) => theme.grey200};
      width: 105px;
      height: 30px;
      font-size: 10px;
    `}
`;

export default Button;
