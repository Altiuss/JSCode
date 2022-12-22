const ADD_POST = "ADD_POST";
const DELETE_POST = "DELETE_POST";
const defaultState = [];

export const addPosts = (payload) => ({ type: ADD_POST, payload });
export const deletePosts = (payload) => ({ type: DELETE_POST, payload });

export const postsReducer = (state = defaultState, action) => {
  if (action.type === ADD_POST) {
    return [
      ...state,
      {
        id: Date.now(),
        ...action.payload,
      },
    ];
  } else if (action.type === DELETE_POST) {
    return state.filter((el) => el.id !== action.payload);
  } else {
    return state;
  }
};
