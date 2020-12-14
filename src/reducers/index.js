import {
  ADD_ITEM_SUCCESS,
  REMOVE_ITEM_SUCCESS,
  AUTH_SUCCESS,
  FETCH_REQUEST,
  FETCH_SUCCESS,
  SEARCH,
  LOG_OUT,
  REMOVE_ALERT,
} from 'actions';

const initialState = {
  userID: '5f917a176a5c5a3ab854969a',
  isLoading: false,
  searchValue: '',
  alerts: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case FETCH_SUCCESS:
      return {
        ...state,
        isLoading: false,
        [action.payload.itemType]: [...action.payload.data],
      };
    case AUTH_SUCCESS:
      return {
        ...state,
        userID: action.payload.data._id,
      };
    case ADD_ITEM_SUCCESS:
      return {
        ...state,
        [action.payload.itemType]: [...state[action.payload.itemType], action.payload.data],
        alerts: [
          ...state.alerts,
          {
            alertType: action.payload.itemType,
            actionType: action.type,
            _id: action.payload.data._id,
          },
        ],
      };
    case REMOVE_ITEM_SUCCESS:
      return {
        ...state,
        [action.payload.itemType]: [
          ...state[action.payload.itemType].filter((item) => item._id !== action.payload.id),
        ],
        alerts: [
          ...state.alerts,
          {
            alertType: action.payload.itemType,
            actionType: action.type,
            _id: action.payload.id,
          },
        ],
      };
    case SEARCH: {
      return { ...state, searchValue: action.payload.searchValue };
    }
    case LOG_OUT: {
      return { ...state, userID: '' };
    }
    case REMOVE_ALERT: {
      return {
        ...state,
        alerts: state.alerts.filter((item) => {
          return item._id !== action.payload.id;
        }),
      };
    }
    default:
      return state;
  }
};

export default rootReducer;
