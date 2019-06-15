import React from "react";
import { HeaderBox, TopBar, HeaderContainer } from "./styles";
import PropTypes from "prop-types";
import { Helmet } from "react-helmet";

const Header = props => {
  const { title } = props;
  return (
    <HeaderBox>
      <Helmet>
        <title>{title}</title>
        <link
          rel="stylesheet"
          href="https://use.fontawesome.com/releases/v5.8.1/css/all.css"
          integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf"
          crossOrigin="anonymous"
        />
      </Helmet>
      <TopBar>
        <i className="fab fa-github" /> <h2> Work with Github Api</h2>
      </TopBar>
      <HeaderContainer>
        <h1>{title}</h1>
      </HeaderContainer>
    </HeaderBox>
  );
};
Header.propTypes = {
  title: PropTypes.string.isRequired
};
export default Header;
