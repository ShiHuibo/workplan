import React, {Component} from 'react';
import 'style.css';

class Login extends Component {
    render() {
        return (
            <div className="col-md-4">
                <form action="#" className="fh5co-form animate-box fadeInLeft animated-fast"
                      data-animate-effect="fadeInLeft">
                    <h2>Sign In</h2>
                    <div className="form-group">
                        <span className="sr-only">LDAP Number</span>
                        <input type="text" className="form-control" id="username" placeholder="Username"/>
                    </div>
                    <div className="form-group">
                        <span className="sr-only">Password</span>
                        <input type="password" className="form-control" id="password" placeholder="Password"/>
                    </div>
                    <div className="form-group">
                        <span><input type="checkbox" id="remember"/> Remember Me</span>
                    </div>
                    <div className="form-group">
                        <input type="submit" value="Sign In" className="btn btn-primary"/>
                    </div>
                </form>
            </div>
        )
    }
}

export default Login;