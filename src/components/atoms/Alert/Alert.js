import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
// ADD_ITEM_SUCCESS, REMOVE_ITEM_SUCCESS,
import { removeAlert as removeAlertAction } from 'actions';
import styled from 'styled-components';

const StyledWrapper = styled.div`
  position: fixed;
  top: 30px;
  left: 50%;
  transform: translateX(-50%);
`;

const Alert = (props) => {
  const [visible, setVisible] = useState(true);
  const { alertType, _id, removeAlert } = props;

  useEffect(() => {
    setTimeout(() => {
      setVisible(false);
      removeAlert(_id);
    }, props.delay);
  }, [props.delay]);

  return visible ? (
    <StyledWrapper>
      <div>{alertType.slice(0, -1)}</div>
    </StyledWrapper>
  ) : null;
};

const mapDispatchToProps = (dispatch) => ({
  removeAlert: (_id) => dispatch(removeAlertAction(_id)),
});

export default connect(null, mapDispatchToProps)(Alert);
