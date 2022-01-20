import Container from './Container';
import GameCards from './GameCards'

import styles from './Section.module.css'

function Section() {
    return(
        <section className={styles.section}>
            <Container customClass='column'>
                <GameCards />
            </Container>
        </section>
    )
}

export default Section