import { FIRST_ACTION } from "./index";

const simpleAction = string => {
  let action = {
    type: FIRST_ACTION,
    data: string
  };
  return action;
};

export default simpleAction;
