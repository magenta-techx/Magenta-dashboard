import { Types } from "./type";
export const INITIAL_STATE = {
  branchDetails: [],
  accountDetails: [],
  ForEachDetail: {},
  ForEachAcctDetail: {},
  time: 1,
};
const reducer = (state, action) => {
  switch (action.type) {
    case "Branch Details":
      return {
        ...state,
        branchDetails: action.payload,
      };
    case "Account Details":
      return {
        ...state,
        accountDetails: action.payload,
      };
    case "Individual Details":
      return {
        ...state,
        ForEachDetail: action.payload,
      };
    case "Individual AcctDetails":
      return {
        ...state,
        ForEachAcctDetail: action.payload,
      };
    case "Increment time":
      return {
        ...state,
        time: state.time + 1,
      };
    case "Decrement time":
      return {
        ...state,
        time: state.time - 1,
      };

    default:
      return state;
  }
};

export default reducer;
