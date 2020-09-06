const initialState = {
  notes: [
    {
      id: 1,
      title: 'My best note',
      content:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque assumenda beatae asperiores non dolorum repellat unde facere, sit aperiam, qui quasi deserunt provident veritatis. Laborum, quas repellendus! Reprehenderit, aut maiores?',
      created: '4 hours ago',
    },
  ],
  twitts: [
    {
      id: 1,
      title: 'My best twitt',
      twitterName: 'erveoll',
      content:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque assumenda beatae asperiores non dolorum repellat unde facere, sit aperiam, qui quasi deserunt provident veritatis. Laborum, quas repellendus! Reprehenderit, aut maiores?',
      created: '6 hours ago',
    },
  ],
  articles: [
    {
      id: 1,
      title: 'My best article',
      content:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque assumenda beatae asperiores non dolorum repellat unde facere, sit aperiam, qui quasi deserunt provident veritatis. Laborum, quas repellendus! Reprehenderit, aut maiores?',
      created: '2 hours ago',
    },
  ],
};

const rootReducer = (state = initialState, action) => {
  // ! change it later

  if (action) return null;

  return state;
};

export default rootReducer;
