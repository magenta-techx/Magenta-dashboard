import { Types } from "./type";
export const INITIAL_STATE = {
  branchDetails: [],
  accountDetails: [],
  ForEachDetail: {},
  ForEachAcctDetail: {},
  AccountDeleteDetail: {},
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
    case "Account Delete Detail":
      return {
        ...state,
        AccountDeleteDetail: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
