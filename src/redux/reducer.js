// reducers.js
const initialState = {
  posts: [],
  users: []
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_POSTS":
      return { ...state, posts: action.posts };
    case "SET_USERS":
      return { ...state, users: action.users };
    default:
      return state;
  }
};

export default rootReducer;
