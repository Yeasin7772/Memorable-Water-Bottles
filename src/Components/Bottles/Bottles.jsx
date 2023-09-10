import { useState } from 'react';
import './Bottles.css';
import { useEffect } from 'react';
import Bottle from './Bottle';
import './Bottles.css'
const Bottles = () => {
    const [bottles, setBottles] = useState([])
    const [card, setCard] = useState([])

    useEffect(() => {
        fetch('Bottles.json')
            .then(res => res.json())
            .then(data => setBottles(data))

    }, [])
    const handelAddCard = (bottle) => {
       const  newCard = [...card, bottle]
       setCard(newCard);
    }
    
    console.log(bottles);
    return (
        <div>
            <h3> Water Bottle:{bottles.length} </h3>
            <h4>Card Selected: {card.length} </h4>
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