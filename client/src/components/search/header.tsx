import styled from "styled-components";

const Header = styled.div`
  display: flex;
  margin-bottom: 25px;

  .title {
    font-size: 18px;
    font-weight: bold;
    line-height: 24px;
    margin-bottom: 0;
    margin-top: 0;
  }

  .tagline {
    color: #666666;
    font-size: 14px;
    line-height: 18px;
    font-weight: 400;
    margin-bottom: 0;
    margin-top: 0;
  }

  .icon {
    height: 42px;
    margin-right: 10px;
  }
`;

export default Header;
