import styled from 'styled-components';

const ButtonIcon = styled.button`
  display: block;
  height: 67px;
  width: 67px;
  border-radius: 20px;
  background-image: url(${({ icon }) => icon});
  background-repeat: no-repeat;
  background-position: 50% 50%;
  background-size: 65%;
  border: none;
  outline: none;
  background-color: transparent;
  transition: transform 0.3s, width 0.3s, height 0.3s;
  transform: rotate(${({ active }) => (active ? '-90deg' : '0deg')});

  &.active {
    background-color: white;
  }
`;

export default ButtonIcon;
