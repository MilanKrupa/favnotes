import {
  // REMOVE_ITEM_REQUEST,
  REMOVE_ITEM_SUCCESS,
  ADD_ITEM,
  AUTHENTICATE_SUCCESS,
  FETCH_SUCCESS,
} from 'actions';
// import {AUTHENTICATE_REQUEST} from 'actions';
// import {AUTHENTICATE_FAILURE} from 'actions';

const initialState = {};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case AUTHENTICATE_SUCCESS:
      return {
        ...state,
        userID: action.payload.data._id,
      };
    case FETCH_SUCCESS:
      return {
        ...state,
        [action.payload.itemType]: [...action.payload.data],
      };
    case REMOVE_ITEM_SUCCESS:
      return {
        ...state,
        [action.payload.itemType]: [
          ...state[action.payload.itemType].filter((item) => item._id !== action.payload.id),
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
