import React from "react";
import moment from "moment";
import { map } from "lodash";
import { Flex } from "../../shared/styles/components";

import { Repository, User, Result, ResultGrids } from "../../components/search";
import {
  Filter,
  SearchResult,
  RepositoryInterface,
  UserInterface,
} from "../../interfaces/search";

interface ResultProps {
  filter: Filter;
  searchResult: SearchResult;
}

const ResultComponent: React.FunctionComponent<ResultProps> = ({
  filter,
  searchResult,
}: ResultProps): React.ReactElement => {
  return (
    <Result>
      <ResultGrids>
        {filter.entityType === "repositories" &&
          map(searchResult, (value: RepositoryInterface, index) => (
            <Repository key={index}>
              <h3 className="repoName">{value.full_name}</h3>

              <div className="user">
                <img
                  className="icon"
                  alt="repo"
                  src={value?.owner?.avatar_url}
                />
                <h4 className="username">{value?.owner?.login}</h4>
              </div>
              <Flex justifyContent="space-between">
                <div>
                  <span>☆</span>: {value?.stargazers_count}
                </div>
                <div>{value?.language}</div>
                <div>
                  Updated on {moment(value?.updated_at).format("DD-MM-YYYY")}
                </div>
              </Flex>
            </Repository>
          ))}
        {filter.entityType === "users" &&
          map(searchResult, (value: UserInterface, index) => (
            <User key={index}>
              <Flex alignItems="center">
                <img className="icon" alt="user" src={value?.avatar_url} />
                <h2 className="username">{value.login}</h2>
              </Flex>
              <h4 className="score">Score: {value.score}</h4>
              <a
                className="link"
                href={value.html_url}
                target="_blank"
                rel="noopener noreferrer"
              >
                Details
              </a>
            </User>
          ))}
      </ResultGrids>
    </Result>
  );
};

export default ResultComponent;
