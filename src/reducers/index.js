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
      twitterName: 'milan_krupa',
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
    case 'REMOVE_ITEM':
      return {
        ...state,
        [action.payload.itemType]: [
          ...state[action.payload.itemType].filter((item) => item.id !== action.payload.id),
        ],
      };
    default:
      return state;
  }
};

export default rootReducer;
