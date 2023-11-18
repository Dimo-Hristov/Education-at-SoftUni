import { Navigate } from "react-router";
import { authContext } from '../contexts/authContext';
import { useContext, useEffect } from "react";

export const Logout = () => {
    const { onLogout } = useContext(authContext);

    useEffect(() => {
        onLogout();

    }, [onLogout])

    return < Navigate to="/" />
}