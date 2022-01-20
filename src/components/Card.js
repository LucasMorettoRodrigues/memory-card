import styles from './Card.module.css'

function Card({ source, name, handleOnClick }) {

    function onClick() {
        handleOnClick(name)
    }

    return (
        <div className={styles.card} onClick={onClick}>
            <img src={source} alt={name}></img>
            <p>{name}</p>
        </div>
    )
}

export default Card