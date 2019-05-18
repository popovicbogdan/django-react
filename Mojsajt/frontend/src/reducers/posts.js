import { GET_POSTS, GET_COMMENTS, ADD_COMMENT } from "../actions/types";

const initialState = {
  posts: [],
  comments: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_POSTS:
      return {
        ...state,
        posts: action.payload
      };
    case GET_COMMENTS:
      return {
        ...state,
        comments: action.payload
      };
    case ADD_COMMENT:
      return {
        ...state,
        comments: [...state.comments, action.payload]
      };
    default:
      return state;
  }
}
