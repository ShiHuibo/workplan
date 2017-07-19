import React, {Component} from 'react';
import Login from "./Login";

class MainPage extends Component {
    loginUser(creds) {
        this.props.loginUser(creds);
    };

    logoutUser() {
        this.props.logoutUser();
    };

    render() {
        console.log(this.props);
        const {isAuthenticated, errorMessage} = this.props;
        return (
            <div>
                {!isAuthenticated &&
                <Login
                    errorMessage={errorMessage}
                    onLoginClick={this.loginUser(creds)}
                />
                }

                {isAuthenticated &&
                <Logout onLogoutClick={this.logoutUser()}/>
                }
            </div>
        )
    }
}

export default MainPage;