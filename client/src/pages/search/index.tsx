import React, { useState, useEffect } from "react";
import { get, isEmpty, debounce } from "lodash";
import { fetchSearchResponse } from "../../store/actions/search";
import { useSelector, useDispatch, TypedUseSelectorHook } from "react-redux";
import { Filter, Response } from "../../interfaces/search";
import { Main } from "../../components/search";
import Header from "./header";
import Result from "./result";
import {
  Container,
  Error,
  Input,
  Loader,
  Select,
  Flex,
} from "../../shared/styles/components";

const typedUseSelector: TypedUseSelectorHook<Response> = useSelector;

export const debouncedSearchRequest = debounce((filter, dispatch) => {
  dispatch(fetchSearchResponse(filter));
}, 200);

const SearchComponent: React.FC = (): React.ReactElement => {
  const data = typedUseSelector((state: any): Response => state.list);
  const [searchResult, setSearchResult] = useState([]);
  const [filter, setFilter] = useState<Filter>(data?.filter);
  const dispatch = useDispatch();

  const response = get(data, "responseData", []);
  const isLoading = get(data, "loading", false);
  const error = get(data, "error");

  useEffect(() => {
    setSearchResult(response);
  }, [response]);

  const handleInputChange = (event: any, type: string) => {
    const value = event.target.value;

    const updatedFilter = {
      ...filter,
      [type]: value,
    };

    setFilter(updatedFilter);

    if (updatedFilter.searchText.length > 2) {
      debouncedSearchRequest(updatedFilter, dispatch);
    } else {
      setSearchResult([]);
      return;
    }
  };

  return (
    <Container>
      {isLoading && <Loader />}
      <Main isEmpty={isEmpty(searchResult) && isEmpty(error)}>
        <Flex justifyContent="center" height="120px" flexDirection="column">
          <Header />
          <Flex>
            <Input
              value={filter.searchText}
              placeholder="Start typing to search ..."
              onChange={(e: any) => handleInputChange(e, "searchText")}
            />
            <Select
              value={filter.entityType}
              onChange={(e: any) => handleInputChange(e, "entityType")}
            >
              <option value="users">Users</option>
              <option value="repositories">Repositories</option>
            </Select>
          </Flex>
        </Flex>
        {!isEmpty(error) && (
          <>
            <Error>
              {error.status}: {error.statusText}
            </Error>
            <Error>{error.message}</Error>
          </>
        )}
        {!isEmpty(searchResult) && (
          <Result filter={filter} searchResult={searchResult} />
        )}
      </Main>
    </Container>
  );
};

export default SearchComponent;
