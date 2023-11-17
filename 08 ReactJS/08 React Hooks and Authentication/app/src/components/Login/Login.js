import { useContext } from "react";
import { Link } from "react-router-dom";
import { authContext } from "../../contexts/authContext";

export const Login = () => {
    const { onLoginsubmit } = useContext(authContext);

    return (
        <section id="login-page" className="auth">
            <form id="login" onSubmit={onLoginsubmit}>
                <div className="container">
                    <div className="brand-logo" />
                    <h1>Login</h1>
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="Sokka@gmail.com"
                        autoComplete="email"
                    />
                    <label htmlFor="login-pass">Password:</label>
                    <input type="password" id="login-password" name="password" autoComplete="current-password" />
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