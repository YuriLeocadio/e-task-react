import styles from './header.module.css';

export function Header() {
    return (
        <header className={styles.header}>
            <div className={styles.description}>
                <h1 className={styles.title}>e-Tasks</h1>
                <p className={styles.subtitle}>Transforme suas listas em conquistas: organize, priorize e realize!</p>
            </div>
        </header>
    )
}