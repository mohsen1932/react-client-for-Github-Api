import React from "react";
import Footer from "./footer";
import Header from "./header";
import { Container } from "./styles";
import PropTypes from "prop-types";

const DefaultLayout = props => {
  const { title, children } = props;
  return (
    <>
      <Header title={title} />
      <Container>
        <div className="container">{children}</div>
      </Container>
      <Footer />
    </>
  );
};
DefaultLayout.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.any
};
export default DefaultLayout;
