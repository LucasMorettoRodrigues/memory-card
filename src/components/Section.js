import Container from './Container';
import GameCards from './GameCards'

import styles from './Section.module.css'

function Section() {
    return (
        <section className={styles.section}>
            <Container customClass='column'>
                <p className={styles.instructions}>
                    Instructions: Choose a character and click it, don't repeat the same character.
                </p>
                <GameCards />
            </Container>
        </section>
    )
}

export default Section