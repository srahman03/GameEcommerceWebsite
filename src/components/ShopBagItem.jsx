import React, { useContext } from 'react';
import './shopBagItem.css';
import { AppContext } from '../App';

function ShopBagItem({ game, index }) {
    const { bag, setBag } = useContext(AppContext);

    const handleRemoveFromBag = (game) => {
        // Remove the item from the bag state
        setBag(bag.filter(item => item._id !== game._id));
        // Remove the item from local storage
        localStorage.setItem('bag', JSON.stringify(bag.filter(item => item._id !== game._id)));
    };

    // Check if game.discount is a valid number, otherwise default to 0
    const discountPercentage = typeof game.discount === 'number' ? game.discount * 100 : 0;

    return (
        <tr className="shopBagItem">
            <th scope='row'>{index + 1}</th>
            <td>
                <img src={game.img} alt="" className='img-fluid' />
            </td>

            <td>{game.title}</td>
            <td>£{game.price.toFixed(2)}</td>
            <td>{discountPercentage}%</td>
            <td>£{(game.price * (1 - (game.discount || 0))).toFixed(2)}</td>
            {/* Use 'game.discount || 0' to handle cases where game.discount is undefined */}
            <td>
                <a href="#" onClick={() => { handleRemoveFromBag(game); }}>
                    <i className="bi bi-trash"></i>
                </a>
            </td>
        </tr>
    )
}

export default ShopBagItem;
