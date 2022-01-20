import Card from './Card'

import goku from '../img/goku.png'

import styles from './GameCards.module.css'

function GameCards() {
    return (
        <div className={styles.game_cards}>
            <Card source={goku} alt={'goku'} text='Goku'/>
            <Card source={goku} alt={'goku'} text='Goku'/>
            <Card source={goku} alt={'goku'} text='Goku'/>
            <Card source={goku} alt={'goku'} text='Goku'/>
            <Card source={goku} alt={'goku'} text='Goku'/>
            <Card source={goku} alt={'goku'} text='Goku'/>
            <Card source={goku} alt={'goku'} text='Goku'/>
            <Card source={goku} alt={'goku'} text='Goku'/>
            <Card source={goku} alt={'goku'} text='Goku'/>
            <Card source={goku} alt={'goku'} text='Goku'/>
            <Card source={goku} alt={'goku'} text='Goku'/>
            <Card source={goku} alt={'goku'} text='Goku'/>
            <Card source={goku} alt={'goku'} text='Goku'/>
            <Card source={goku} alt={'goku'} text='Goku'/>
            <Card source={goku} alt={'goku'} text='Goku'/>
            <Card source={goku} alt={'goku'} text='Goku'/>
            <Card source={goku} alt={'goku'} text='Goku'/>
            <Card source={goku} alt={'goku'} text='Goku'/>
        </div>
    )
}

export default GameCards