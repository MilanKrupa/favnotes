import { REMOVE_ITEM, ADD_ITEM, AUTHENTICATE_SUCCESS } from 'actions';
// import {AUTHENTICATE_REQUEST} from 'actions';
// import {AUTHENTICATE_FAILURE} from 'actions';

const initialState = {
  notes: [
    {
      id: 0,
      title: 'My best note',
      content:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque assumenda beatae asperiores non dolorum repellat unde facere, sit aperiam, qui quasi deserunt provident veritatis. Laborum, quas repellendus! Reprehenderit, aut maiores?',
      created: '4 hours ago',
    },
  ],
  twitts: [
    {
      id: 0,
      title: 'My best twitt',
      twittName: 'milan_krupa',
      content:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque assumenda beatae asperiores non dolorum repellat unde facere, sit aperiam, qui quasi deserunt provident veritatis. Laborum, quas repellendus! Reprehenderit, aut maiores?',
      created: '6 hours ago',
    },
  ],
  articles: [
    {
      id: 0,
      title: 'My best article',
      content:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque assumenda beatae asperiores non dolorum repellat unde facere, sit aperiam, qui quasi deserunt provident veritatis. Laborum, quas repellendus! Reprehenderit, aut maiores?',
      created: '2 hours ago',
    },
  ],
};

// eslint-disable-next-line no-unused-vars
const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case AUTHENTICATE_SUCCESS:
      return {
        ...state,
        // eslint-disable-next-line no-underscore-dangle
        userID: action.payload.data._id,
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
