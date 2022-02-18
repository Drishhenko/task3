import { Link } from "react-router-dom"
import { Login } from "components/login"
import "../App.css";

const LoginPage = () => {
    return (
        <div className="wrapper-form" >
            <h1>login</h1>
            <Login />
            <p>Or <Link to="/register" >register</Link></p>
        </div>
    )
}

export {LoginPage}