import React, { Component } from 'react';
import { connect } from "react-redux";
import SearchRepo from "./pages/searchRepo/searchRepo";

class App extends Component {
    render() {
        return (
            <>
                <SearchRepo />
            </>
        );
    }
}
export default connect(
    null,
    null
)(App);
