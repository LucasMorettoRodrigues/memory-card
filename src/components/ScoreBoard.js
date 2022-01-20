import styles from './Score.module.css'

function ScoreBoard({ currentScore, currentBestScore }) {
    return (
        <div className={styles.score}>
            <h1><span>Score:</span> {currentScore}</h1>
            <h1><span>Best Score:</span> {currentBestScore}</h1>
        </div>       
    )
}

export default ScoreBoard