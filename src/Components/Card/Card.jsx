import PropTypes from 'prop-types'

import './Card.css'
const Card = ({ card, handelRemoveFromCard }) => {
    return (
        <div>
            <h4>Card Selected: {card.length} </h4>
            <div className="cart-container">
                {
                    card.map(bottle => <div key={bottle.id} >
                        <img src={bottle.img}></img>
                        <button onClick={() => handelRemoveFromCard (bottle.id)}>Remove</button>
                    </div>)
                }
            </div>
        </div>
    );
};

Card.propTypes = {
    card: PropTypes.array.isRequired,
    handelRemoveFromCard: PropTypes.func.isRequired
}
export default Card;