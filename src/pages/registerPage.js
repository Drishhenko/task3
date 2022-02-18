import { SignUp } from "components/signUp"
import { Link } from "react-router-dom"
import "../App.css";

const RegisterPage = () => {
    return (
        <div className="wrapper-form">
            <h1>Register</h1>
            <SignUp />
            <p>Alredy have an account? <Link to="/login">Sign in</Link></p>
        </div>
    )
}

export {RegisterPage}