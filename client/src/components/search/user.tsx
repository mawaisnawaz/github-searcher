import styled from "styled-components";

const UserContainer = styled.div`
  padding: 16px;
  background: white;
  border: 1px solid #dddddd;
  box-sizing: border-box;
  box-shadow: 0px 4px 4px rgba(221, 221, 221, 0.05);
  border-radius: 2px;

  -webkit-transition: all 1s ease;
  -moz-transition: all 1s ease;
  -ms-transition: all 1s ease;
  -o-transition: all 1s ease;
  transition: all 1s ease;

  .username {
    color: #0366d6;
    font-weight: 500;
    margin-bottom: 0px;
    margin-top: 0;
    max-width: 200px;
    overflow: hidden !important;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .score {
    padding: 10px 0;
    font-weight: 400;
  }

  .icon {
    margin-right: 10px;
    height: 40px;
    border-radius: 50%;
    overflow: hidden;
  }

  .link {
    color: #0366d6;
    background-color: #f1f8ff;
    border: 1px solid transparent;
    display: inline-block;
    font-size: 12px;
    font-weight: 500;
    line-height: 18px;
    padding: 5px 10px;
    text-align: center;
    text-decoration: none;
    width: 100%;
  }
`;

export default UserContainer;
