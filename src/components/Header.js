import styles from './Header.module.css'

import Container from './Container'

function Header() {
    return (
        <nav className={styles.header}>
            <Container>
                <h1>Dragon Ball Memory</h1> 
            </Container> 
        </nav>
    )
}

export default Header