import React from "react";
import GithubIcon from "../../shared/images/icon.png";
import { Flex } from "../../shared/styles/components";
import { Header } from "../../components/search";

const HeaderComponent: React.FunctionComponent = (): React.ReactElement => {
  return (
    <Header>
      <img className="icon" src={GithubIcon} alt="github icon" />
      <Flex flexDirection="column">
        <h2 className="title">Github Searcher</h2>
        <h4 className="tagline">Search users or repositories below</h4>
      </Flex>
    </Header>
  );
};

export default HeaderComponent;
