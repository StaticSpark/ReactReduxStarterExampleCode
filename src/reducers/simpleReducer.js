import { FIRST_ACTION } from "../actions";

export default (state = [], action) => {
  console.log(action);
  switch (action.type) {
    case FIRST_ACTION:
      return action.data;
    default:
      return state;
  }
};
