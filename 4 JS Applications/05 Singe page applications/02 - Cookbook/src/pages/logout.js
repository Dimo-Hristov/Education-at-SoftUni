import { logout, updateAuth } from '../auth.js';

export function renderLogout() {
    logout()
    updateAuth()

    alert('Successful logout')
}