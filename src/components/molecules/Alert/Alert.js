import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { ADD_ITEM_SUCCESS, removeAlert as removeAlertAction } from 'actions';
import styled from 'styled-components';
import Heading from 'components/atoms/Heading/Heading';
import TickIcon from 'assets/icons/tick.svg';

const StyledWrapper = styled.div`
  position: fixed;
  z-index: 9999;
  top: 30px;
  left: 50%;
  transform: translateX(-50%);
  background-color: white;
  border: 3px solid ${({ activeColor, theme }) => (activeColor ? theme[activeColor] : theme.black)};
  border-radius: 10px;
  padding: 0 35px 0 80px;
  ::first-letter {
    text-transform: uppercase;
  }
`;
const StyledIcon = styled.div`
  width: 42px;
  height: 42px;
  border-radius: 50px;
  background: ${({ activeColor, theme }) => (activeColor ? theme[activeColor] : 'white')}
    url(${TickIcon}) no-repeat;
  background-size: 50%;
  background-position: 50% 55%;
  position: absolute;
  left: 15px;
  top: 50%;
  transform: translateY(-50%);
`;

const Alert = (props) => {
  const [visible, setVisible] = useState(true);
  const { alertType, actionType, _id, removeAlert, delay } = props;

  useEffect(() => {
    setTimeout(() => {
      setVisible(false);
      removeAlert(_id);
    }, delay);
  }, [delay]);

  return visible ? (
    <StyledWrapper activeColor={alertType}>
      <StyledIcon activeColor={alertType} />
      <Heading>{`${alertType.slice(0, -1)} ${
        actionType === ADD_ITEM_SUCCESS ? 'added' : 'removed'
      }  successfully!`}</Heading>
    </StyledWrapper>
  ) : null;
};

const mapDispatchToProps = (dispatch) => ({
  removeAlert: (_id) => dispatch(removeAlertAction(_id)),
});

export default connect(null, mapDispatchToProps)(Alert);
