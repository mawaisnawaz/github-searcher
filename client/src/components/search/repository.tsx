import styled from "styled-components";

const RepoContainer = styled.div`
  padding: 16px;
  background: white;
  border: 1px solid #dddddd;
  box-sizing: border-box;
  box-shadow: 0px 4px 4px rgba(221, 221, 221, 0.05);
  border-radius: 2px;

  .repoName {
    color: #0366d6;
    margin-top: 0px;
    font-weight: 600;
    max-width: 350px;
    white-space: nowrap;
    overflow: hidden !important;
    text-overflow: ellipsis;
  }

  .user {
    display: flex;
    align-items: center;
    margin-bottom: 10px;
  }

  .username {
    font-weight: 500;
    margin-bottom: 0px;
    color: #666;
    margin-top: 0;
  }

  .icon {
    margin-right: 10px;
    height: 24px;
    border-radius: 50%;
    overflow: hidden;
  }
`;

export default RepoContainer;
