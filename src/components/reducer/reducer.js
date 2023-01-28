import { Types } from "./type";
export const INITIAL_STATE = {
  branchDetails: [],
  accountDetails: [],
  ForEachDetail: {},
  ForEachAcctDetail: {},
  showProfile: false,
  settingStates: {
    newTransaction: false,
    mode: false,
    withdrawMade: false,
    createdBranch: false,
    addDocument: false,
    documentValue: "",
  },
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
    case "show-profile":
      return {
        ...state,
        showProfile: true,
      };
    case "hide-profile":
      return {
        ...state,
        showProfile: false,
      };
    case "New transaction":
      return {
        ...state,
        settingStates: {
          ...state.settingStates,
          newTransaction: !state.settingStates.newTransaction,
        },
      };
    case "Created branch":
      return {
        ...state,
        settingStates: {
          ...state.settingStates,
          createdBranch: !state.settingStates.createdBranch,
        },
      };
    case "Withdrawal made":
      return {
        ...state,
        settingStates: {
          ...state.settingStates,
          withdrawMade: !state.settingStates.withdrawMade,
        },
      };
    case "Change mode":
      return {
        ...state,
        settingStates: { ...state.settingStates, mode: false },
      };

    default:
      return state;
  }
};

export default reducer;
