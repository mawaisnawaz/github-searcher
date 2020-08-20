import axios from "axios";

const apiUrl = "http://localhost:5000/search";

interface ResponseData {
  items: [];
}

export const fetchSearchResponse = (filter: any) => {
  return async (dispatch: any) => {
    dispatch(handleDataLoading(true));
    dispatch(handleFilterChange(filter));

    const params = {
      entityType: filter.entityType,
      searchText: filter.searchText,
    };

    try {
      const response = await axios.post(apiUrl, params);

      dispatch(fetchDataSuccess(response.data));
    } catch (error) {
      console.error(error as Error);
      dispatch(handleDataLoading(false));
      dispatch(fetchDataError(error));
    }
  };
};

const fetchDataSuccess = (responseData: ResponseData): object => ({
  type: "FETCH_DATA_SUCCESS",
  responseData: responseData.items,
  loading: false,
});

const fetchDataError = (error: any) => ({
  type: "FETCH_DATA_ERROR",
  responseData: [],
  error,
});

const handleDataLoading = (loading: boolean) => ({
  type: "HANDLE_DATA_LOADING",
  loading,
});

const handleFilterChange = (filter: {
  searchText: string;
  entityType: string;
}) => ({
  type: "HANDLE_FILTER_CHANGE",
  filter,
});
