export type SearchResult = [UserInterface | RepositoryInterface] | [] | never[];

export interface Filter {
  searchText: string;
  entityType: string;
}
export interface Response {
  error: any;
  filter: Filter;
  loading: boolean;
  responseData: [];
}

export interface RepositoryInterface {
  full_name: string;
  owner: {
    avatar_url: string;
    login: string;
  };
  stargazers_count: number;
  language: string;
  updated_at: string;
}

export interface UserInterface {
  avatar_url: string;
  login: string;
  score: number;
  html_url: string;
}
