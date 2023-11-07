import { Link } from 'react-router-dom'
import styles from './navigation.module.css'

export const Navigation = () => {
    return (
        <ul className={styles.navigation}>
            <li><Link to={'/'}>Home</Link></li>
            <li><Link to={'/about'}>About</Link></li>
            <li><Link to={'/characters'}>Characters</Link></li>
        </ul>
    );
};