import { useState } from 'react';
import './Bottles.css';
import { useEffect } from 'react';
import Bottle from './Bottle';
import './Bottles.css'
import { addToLS, getStoreCard, removeFromLS } from '../../utilities/localstorage';
import Card from '../Card/Card';
const Bottles = () => {
    const [bottles, setBottles] = useState([])
    const [card, setCard] = useState([])

    useEffect(() => {
        fetch('Bottles.json')
            .then(res => res.json())
            .then(data => setBottles(data))

    }, [])

    // load card from local data 

    useEffect(() => {
        if (bottles.length) {
            const storeCard = getStoreCard()
            // console.log(storeCard,bottles);

            const saveCard = []

            for (const id of storeCard) {
                console.log(id);
                const bottle = bottles.find(bottle => bottle.id === id)
                if (bottle) {
                    saveCard.push(bottle)
                }
            }
            console.log('save card', saveCard);
            setCard(saveCard)

        }
    }, [bottles])

    const handelAddCard = (bottle) => {
        const newCard = [...card, bottle]
        setCard(newCard);
        addToLS(bottle.id)
    }

    const handelRemoveFromCard = id => {
        const remainingCard = card.filter(bottle => bottle.id !== id)
        setCard(remainingCard);
        removeFromLS(id)
    }

    //console.log(bottles);
    return (
        <div>
            <h3> Water Bottle:{bottles.length} </h3>
            <Card card={card}
                handelRemoveFromCard={handelRemoveFromCard}
            ></Card>



            <div className='card-container'>
                {
                    bottles.map(bottle => <Bottle
                        key={bottle.id}
                        handelAddCard={handelAddCard}
                        bottle={bottle}></Bottle>)
                }
            </div>
        </div>
    );
};

export default Bottles;