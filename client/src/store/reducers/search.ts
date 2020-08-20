import { UserInterface, RepositoryInterface } from "../../interfaces/search";

interface InitialState {
  error: Error | null;
  loading: boolean;
  responseData: [UserInterface | RepositoryInterface] | [];
  filter: {
    searchText: string;
    entityType: string;
  };
}

const initialState: InitialState = {
  error: null,
  responseData: [],
  loading: false,
  filter: {
    searchText: "",
    entityType: "users",
  },
};

const searchReducer = (state = initialState, action: any): InitialState => {
  switch (action.type) {
    case "FETCH_DATA_SUCCESS":
      return {
        ...state,
        responseData: action.responseData,
        loading: action.loading,
        error: null,
      };
    case "FETCH_DATA_ERROR":
      return { ...state, responseData: [], error: action.error };
    case "HANDLE_DATA_LOADING":
      return {
        ...state,
        loading: action.loading,
        error: null,
      };
    case "HANDLE_FILTER_CHANGE":
      return {
        ...state,
        filter: action.filter,
      };
    default:
      return state;
  }
};
export default searchReducer;
