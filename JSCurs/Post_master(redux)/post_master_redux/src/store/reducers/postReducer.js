import { posts_data } from "../../components/data/post";

const defaultState = posts_data;
const ADD_POST = "ADD_POST";
const CHANGE_LIKE = 'CHANGE_LIKE'
const ADD_COMMENT = 'ADD_COMMENT'

export const addPost = (payload) => ({ type: ADD_POST, payload });
export const changeLike = (payload) => ({ type: CHANGE_LIKE, payload });
export const addComment = (payload) => ({ type: ADD_COMMENT, payload });

export const postReducer = (state = defaultState, action) => {
  if (action.type === ADD_POST) {
    return [
      ...state,
      {
        id: Date.now(),
        ...action.payload,
      },
    ];
  } else if (action.type === CHANGE_LIKE){
    const target = state.find(el => el.id === action.payload )
             target.like = !target.like;
             return [...state]
  } else if(action.type === ADD_COMMENT) {
    [
      ...state,
      {
        id: Date.now(),
        ...action.payload,
      },
    ]
  
    const target_post = state.find((el) => el.id === action.payload.posi_id);
    target_post.comments.push(comment);
    
return [...state]

  }  else {
    return state;
  }

}