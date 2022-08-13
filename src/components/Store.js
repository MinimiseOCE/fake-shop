import Header from './Header';
import b4 from '../images/products/black4.jpg'
import b6 from '../images/products/black6.jpg'
import b10 from '../images/products/black10.jpg'
import b12 from '../images/products/black12.jpg'
import bb4 from '../images/products/blue4.jpg'
import bb6 from '../images/products/blue6.jpg'
import bb10 from '../images/products/blue10.jpg'
import bb12 from '../images/products/blue12.jpg'
import addCart from '../images/addCart.svg'
import { homeItems } from './Home'
import { useState } from 'react';
import ShoppingCart from './ShoppingCart';

function Item({ title, id, price }) {
    return (
        <div className='cardInfo'>
            <h2>{title}</h2>
            <img
                src={id}
                alt='diceItem'
            />
            <p>${price}</p>
        </div>
    )
}

let globalItems = []

export default function Store(props) {
    console.log(homeItems)
    const [items, setItems] = useState(globalItems)
    const [showCart, toggleCart] = useState(false)
    function handleClick(id, price) {
        if (!showCart) {
            toggleCart(!showCart)
        }
        if (!items.some(item => item.id === id)) {
            setItems([
                ...items,
                { id: id, price: price, quantity: 1 }
            ]);
        }
        else {
            items[items.findIndex((item => item.id === id))].quantity++;
            setItems([...items]);
        }
    }
    globalItems = items
    return (
        <div>
            <Header items={items} show={showCart} toggleCart={toggle => toggleCart(toggle)} />
            <div className='body'>
                <div className="store">
                    <div className='storeText'>
                        <h1 className="slogan">Store</h1>
                    </div>
                    <div className='blackDice'>
                        <div className='card'>
                            <Item id={b4} title={'4 Sided Black Dice'} price={4.00} />
                            <img className='cart' alt='Add to Cart' src={addCart} onClick={() => handleClick('4 Sided Black Dice', 4.00)} />
                        </div>
                        <div className='card'>
                            <Item id={b6} title={'6 Sided Black Dice'} price={4.50} />
                            <img className='cart' alt='Add to Cart' src={addCart} onClick={() => handleClick('6 Sided Black Dice', 4.50)} />
                        </div>
                        <div className='card'>
                            <Item id={b10} title={'10 Sided Black Dice'} price={5.00} />
                            <img className='cart' alt='Add to Cart' src={addCart} onClick={() => handleClick('10 Sided Black Dice', 5.00)} />
                        </div>
                        <div className='card'>
                            <Item id={b12} title={'12 Sided Black Dice'} price={5.50} />
                            <img className='cart' alt='Add to Cart' src={addCart} onClick={() => handleClick('12 Sided Black Dice', 5.50)} />
                        </div>
                    </div>
                    <div className='blueDice'>
                        <div className='card'>
                            <Item id={bb4} title={'4 Sided Black Dice'} price={4.00} />
                            <img className='cart' alt='Add to Cart' src={addCart} onClick={() => handleClick('4 Sided Blue Dice', 4.00)} />
                        </div>
                        <div className='card'>
                            <Item id={bb6} title={'6 Sided Black Dice'} price={4.50} />
                            <img className='cart' alt='Add to Cart' src={addCart} onClick={() => handleClick('6 Sided Blue Dice', 4.50)} />
                        </div>
                        <div className='card'>
                            <Item id={bb10} title={'10 Sided Black Dice'} price={5.00} />
                            <img className='cart' alt='Add to Cart' src={addCart} onClick={() => handleClick('10 Sided Blue Dice', 5.00)} />
                        </div>
                        <div className='card'>
                            <Item id={bb12} title={'12 Sided Black Dice'} price={5.50} />
                            <img className='cart' alt='Add to Cart' src={addCart} onClick={() => handleClick('12 Sided Blue Dice', 5.50)} />
                        </div>
                    </div>
                </div>
                {showCart ? <ShoppingCart items={items} updateItem={id => setItems(id)} /> : null}
            </div>

        </div>
    );
}

export { globalItems }