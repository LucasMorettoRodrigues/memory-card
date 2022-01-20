import Container from './Container';
import GameCards from './GameCards'
import ScoreBoard from './ScoreBoard'

import styles from './Section.module.css'

function Section() {
    return(
        <section className={styles.section}>
            <Container customClass='column'>
                <ScoreBoard />
                <GameCards />
            </Container>
        </section>
    )
}

export default Section