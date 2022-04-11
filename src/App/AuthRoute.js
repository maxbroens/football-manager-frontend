// import {Redirect, Route} from "react-router";
// import {connect} from "react-redux";
//
// const AuthRoute = props => {
//     const { isAuthUser, type } = props;
//     if (type === "guest" && isAuthUser) return <Redirect to="/home" />;
//     else if (type === "private" && !isAuthUser) return <Redirect to="/" />;
//
//     return <Route {...props} />;
// };
//
// const mapStateToProps = ({ isAuthUser }) => ({
//     isAuthUser
// });
//
// export default connect(mapStateToProps)(AuthRoute);