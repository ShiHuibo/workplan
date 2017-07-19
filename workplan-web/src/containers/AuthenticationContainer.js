import { connect } from 'react-redux';
import MainPage from "../components/MainPage";
import {loginUser, logoutUser} from "../redux/modules/authentication";

function mapStateToProps(state) {
    return {
        isAuthenticated: state.isAuthenticated,
        message: state.message
    }
}

function mapDispatchToProps(dispatch) {
    return {
        loginUser: (creds) => dispatch(loginUser(creds)),
        logoutUser: () => dispatch(logoutUser())
    }; // here we'll soon be mapping actions to props
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(MainPage);