import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {createProvider as Provider} from "react-redux";
import AuthenticationContainer from "./containers/AuthenticationContainer";
import configureStore from "./redux/configureStore";

const store = configureStore();

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <AuthenticationContainer/>
            </Provider>
        )
    }
}

ReactDOM.render(<App/>, document.getElementById('app'));