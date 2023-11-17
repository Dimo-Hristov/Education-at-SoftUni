import { Link } from 'react-router-dom';
import { useContext } from 'react';

import { authContext } from '../../contexts/authContext';

export const Header = () => {
    const { isAuthenticated } = useContext(authContext)
    return (
        <header>
            {/* Navigation */}
            <h1>
                <Link className="home" to={'/'}>
                    GamesPlay
                </Link>
            </h1>
            <nav>
                <Link to={'/catalog'}>All games</Link>

                {isAuthenticated && (
                    <div id="user">
                        <Link to={'/create'}>Create Game</Link>
                        <Link to={'/logout'}>Logout</Link>
                    </div>
                )}

                {!isAuthenticated && (

                    <div id="guest">
                        <Link to={'/login'}>Login</Link>
                        <Link to={'/register'}>Register</Link>
                    </div>
                )}
            </nav>
        </header>

    );
};