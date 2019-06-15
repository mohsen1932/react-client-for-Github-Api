import React, { Component } from 'react';
import { connect } from "react-redux";
import SearchRepo from "./pages/searchRepo";
import GlobalStyle from "./theme/injectGlobal";

class App extends Component {
    render() {
        return (
            <>
                <GlobalStyle />
                <SearchRepo />
            </>
        );
    }
}
export default connect(
    null,
    null
)(App);
