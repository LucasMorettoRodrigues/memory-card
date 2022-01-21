import Card from './Card'
import ScoreBoard from './ScoreBoard'

import { useState } from 'react'

import android17 from '../img/android17.png'
import android18 from '../img/android18.png'
import boo from '../img/boo.png'
import broly from '../img/broly.png'
import bulma from '../img/bulma.png'
import cell from '../img/cell.png'
import chichi from '../img/chichi.png'
import freeza from '../img/freeza.png'
import gohan from '../img/gohan.png'
import goku from '../img/goku.png'
import goten from '../img/goten.png'
import krillin from '../img/krillin.png'
import masterroshi from '../img/masterroshi.png'
import mrsatan from '../img/mrsatan.png'
import piccolo from '../img/piccolo.png'
import tien from '../img/tien.png'
import trunks from '../img/trunks.png'
import vegeta from '../img/vegeta.png'

import styles from './GameCards.module.css'

function GameCards() {

    const [score, setScore] = useState([0])
    const [bestScore, setBestScore] = useState([0])
    const [memory, setMemory] = useState([])
    const [cards, setCards] = useState([  
                    {source: android17, name:'Android 17'},
                    {source: android18, name:'Android 18'},
                    {source: boo, name:'Majin Boo'},
                    {source: broly, name:'Broly'},
                    {source: bulma, name:'Bulma'},
                    {source: cell, name:'Cell'},
                    {source: chichi, name:'Chi Chi'},
                    {source: freeza, name:'Freeza'},
                    {source: gohan, name:'Gohan'},
                    {source: goku, name:'Goku'},
                    {source: goten, name:'Goten'},
                    {source: krillin, name:'Krillin'},
                    {source: masterroshi, name:'Master Roshi'},
                    {source: mrsatan, name:'Mr. Satan'},
                    {source: piccolo, name:'Piccolo'},
                    {source: tien, name:'Tien'},
                    {source: trunks, name:'Trunks'},
                    {source: vegeta, name:'Vegeta'}
                ])

    function shuffleArray(arr) {
        // Loop em todos os elementos
        for (let i = arr.length - 1; i > 0; i--) {
            // Escolhendo elemento aleatório
        const j = Math.floor(Math.random() * (i + 1));
        // Reposicionando elemento
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    // Retornando array com aleatoriedade
    return arr;
}

    function select(name) {
        if (memory.some((item) => item === name)) {
            if (score[0] > bestScore[0]) {
                setBestScore([score[0]])
            }
            setScore([0])
            setMemory([])
            setCards(shuffleArray(cards))
        } else {
            setMemory([...memory, name])
            setScore([score[0]+1])
            setCards(shuffleArray(cards))
        }
    }

    return (
        <div>
            <ScoreBoard currentScore={score[0]} currentBestScore={bestScore[0]}/>
            <div className={styles.game_cards}>
                {cards.map((card, index) => (
                    <Card 
                        source={card.source} 
                        name={card.name} 
                        handleOnClick={select}
                        key={index}
                    />
                ))}            
            </div>
        </div>
    )
}

export default GameCards