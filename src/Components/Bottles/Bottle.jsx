import './Bottle.css'
const Bottle = ({ bottle, handelAddCard }) => {
    const { name, img, price } = bottle
    return (
        <div className="bottle-card">
            <h4>Name: {name} </h4>
            <img src={img} alt="" />
            <p> Price: ${price}</p>
            <button onClick={()=> handelAddCard(bottle)}>Purchase</button>
        </div>
    );
};


export default Bottle;