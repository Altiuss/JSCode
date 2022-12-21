const ADD_POST = "ADD_POST";

const defaultState = [];

export const addPosts = (payload) => ({ type: ADD_POST, payload });

export const postsReducer = (state = defaultState, action) => {
  if (action.type === ADD_POST) {
    return [
      ...state,
      {
        id: Date.now(),
        ...action.payload,
      },
    ];
  } else {
    return state;
  }
};
