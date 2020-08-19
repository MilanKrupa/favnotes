import styled, { css } from 'styled-components';

const Button = styled.button`
  background-color: #ffd82b;
  width: ${({ width }) => width || '220px'};
  height: 47px;
  border: none;
  border-radius: 50px;
  font-size: 16px;
  font-weight: semibold;
  font-family: 'Montserrat', sans-serif;
  text-transform: uppercase;
  color: black;

  ${({ secondary }) =>
    secondary &&
    css`
      background-color: #e6e6e6;
      width: 105px;
      height: 30px;
      font-size: 10px;
    `}
`;

export default Button;