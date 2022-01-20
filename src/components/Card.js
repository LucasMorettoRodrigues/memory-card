import styles from './Card.module.css'

function Card({ source, alt, text }) {
    return (
        <div className={styles.card}>
            <img src={source} alt={alt}>
            </img>
            <p>
                {text}
            </p>
        </div>
    )
}

export default Card