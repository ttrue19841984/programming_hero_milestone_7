
import './Bottle.css';
const Bottle = ({bottle, handleAddToCart}) => {
    // console.log(bottle)
    const {img, name, price} = bottle;
    return (
        <div className="bottle bottle-img">
            <h3>Bottle:{name}</h3>
            <img src={img} alt="" />
            <p>Price: {price}</p>
            <button onClick={()=> handleAddToCart(bottle)}>Purchase</button>
        </div>
    );
};

export default Bottle;