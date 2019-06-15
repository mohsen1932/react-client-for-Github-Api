import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from "react-redux";
import { store } from "./store";
import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

configure({ adapter: new Adapter() });
describe("AppBundle", () => {
    test("renders without crashing", () => {
        const AppBundle = (
            <Provider store={store}>
                <App />
            </Provider>
        );
        const div = document.createElement("div");
        ReactDOM.render(AppBundle, div);
    });
});
