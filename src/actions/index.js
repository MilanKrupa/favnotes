import axios from 'axios';

export const REMOVE_ITEM = 'REMOVE_ITEM';
export const ADD_ITEM = 'ADD_ITEM';
export const AUTHENTICATE_REQUEST = 'AUTHENTICATE_REQUEST';
export const AUTHENTICATE_SUCCESS = 'AUTHENTICATE_SUCCESS';
export const AUTHENTICATE_FAILURE = 'AUTHENTICATE_FAILURE';
export const FETCH_REQUEST = 'FETCH_REQUEST';
export const FETCH_SUCCESS = 'FETCH_SUCCESS';
export const FETCH_FAILURE = 'FETCH_FAILURE';

export const fetchItems = (itemType) => (dispatch, getState) => {
  dispatch({
    type: FETCH_REQUEST,
  });
  return axios
    .get('http://localhost:9000/api/notes/type', {
      params: {
        type: itemType,
        userID: getState().userID,
      },
    })
    .then(({ data }) => {
      // console.log(data);
      dispatch({
        type: FETCH_SUCCESS,
        payload: {
          data,
          itemType,
        },
      });
    })
    .catch((err) => {
      // console.log(err);
      dispatch({ type: FETCH_FAILURE, err });
    });
};

export const removeItem = (itemType, id) => {
  return {
    type: REMOVE_ITEM,
    payload: {
      itemType,
      id,
    },
  };
};
export const addItem = (itemType, itemContent) => {
  const getId = () => `_${Math.random().toString(36).substr(2, 9)}`;
  return {
    type: ADD_ITEM,
    payload: {
      itemType,
      item: {
        id: getId(),
        ...itemContent,
      },
    },
  };
};

export const authenticate = (username, password) => (dispatch) => {
  dispatch({
    type: AUTHENTICATE_REQUEST,
  });
  return axios
    .post('http://localhost:9000/api/user/login', {
      username,
      password,
    })
    .then((payload) => dispatch({ type: AUTHENTICATE_SUCCESS, payload }))
    .catch((err) => {
      // console.log(err);
      dispatch({ type: AUTHENTICATE_FAILURE, err });
    });
};
