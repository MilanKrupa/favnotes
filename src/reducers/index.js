import { REMOVE_ITEM, ADD_ITEM, AUTHENTICATE_SUCCESS, FETCH_SUCCESS } from 'actions';
// import {AUTHENTICATE_REQUEST} from 'actions';
// import {AUTHENTICATE_FAILURE} from 'actions';

const initialState = {};

// eslint-disable-next-line no-unused-vars
const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case AUTHENTICATE_SUCCESS:
      return {
        ...state,
        // eslint-disable-next-line no-underscore-dangle
        userID: action.payload.data._id,
      };
    case FETCH_SUCCESS:
      return {
        ...state,
        [action.payload.itemType]: [...action.payload.data],
      };
    case REMOVE_ITEM:
      return {
        ...state,
        [action.payload.itemType]: [
          ...state[action.payload.itemType].filter((item) => item.id !== action.payload.id),
        ],
      };
    case ADD_ITEM:
      return {
        ...state,
        [action.payload.itemType]: [...state[action.payload.itemType], action.payload.item],
      };
    default:
      return state;
  }
};

export default rootReducer;
