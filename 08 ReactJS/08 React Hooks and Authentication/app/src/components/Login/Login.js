import { useContext } from "react";
import { Link } from "react-router-dom";
import { authContext } from "../../contexts/authContext";
import { useForm } from "../../hooks/useForm";

const LoginFormKeys = {
    Email: 'email',
    Password: 'password',
}


export const Login = () => {
    const { onLoginSubmit } = useContext(authContext);
    const { values, changeHandler, onSubmit } = useForm({
        [LoginFormKeys.Email]: '',
        [LoginFormKeys.Password]: ''
    }, onLoginSubmit)

    return (
        <section id="login-page" className="auth">
            <form id="login" onSubmit={onSubmit}>
                <div className="container">
                    <div className="brand-logo" />
                    <h1>Login</h1>
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        name={LoginFormKeys.Email}
                        value={values[LoginFormKeys.Email]}
                        placeholder="Sokka@gmail.com"
                        autoComplete="email"
                        onChange={changeHandler}
                    />
                    <label htmlFor="login-pass">Password:</label>
                    <input type="password"
                        id={LoginFormKeys.Password}
                        name="password"
                        autoComplete="current-password"
                        value={values[LoginFormKeys.Password]}
                        onChange={changeHandler}
                    />
                    <input type="submit" className="btn submit" defaultValue="Login" />
                    <p className="field">
                        <span>
                            If you don't have profile click <Link to={'/register'}>here</Link>
                        </span>
                    </p>
                </div>
            </form>
        </section>

    )
}