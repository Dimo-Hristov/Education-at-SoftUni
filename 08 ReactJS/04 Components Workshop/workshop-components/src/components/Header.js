import styles from './Header.module.css'

export default function Header() {
    return (
        <header className={styles['header']} >
            <div className={styles['logo']}>
                <span className="course">React Course - June 2022</span>
                <span className="description">User List Demo</span>
            </div>
        </header>
    )
}