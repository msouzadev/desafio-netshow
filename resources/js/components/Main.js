import React, { Component } from "react";
import ReactDOM from "react-dom";
import ContactForm from "./ContactForm";
import { Provider } from "react-redux";
import store from "../store";
export default class Main extends Component {
    render() {
        return (
            <Provider store={store}>
                <div className="container">
                    <ContactForm />
                </div>
            </Provider>
        );
    }
}

if (document.getElementById("example")) {
    ReactDOM.render(<Main />, document.getElementById("example"));
}
