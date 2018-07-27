const userReducer = (state = {
  name : "Max",
  age : 27,
}, action) => {
  switch (action.type) {
    case "SET_NAME":
      state = {
        ...state,
        age : action.payload
      };
      break;
  }
  return state;
};
export default userReducer;
