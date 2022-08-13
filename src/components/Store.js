import Header from './Header';
import b4 from '../images/products/black4.png'
import b4alt from '../images/products/black4alt.png'
import b6 from '../images/products/black6.png'
import b6alt from '../images/products/black6alt.png'
import b10 from '../images/products/black10.png'
import b10alt from '../images/products/black10alt.png'
import b12 from '../images/products/black12.png'
import b12alt from '../images/products/black12alt.png'
import bb4 from '../images/products/blue4.png'
import bb4alt from '../images/products/blue4alt.png'
import bb6 from '../images/products/blue6.png'
import bb6alt from '../images/products/blue6alt.png'
import bb10 from '../images/products/blue10.png'
import bb10alt from '../images/products/blue10alt.png'
import bb12 from '../images/products/blue12.png'
import bb12alt from '../images/products/blue12alt.png'
import addCart from '../images/addCart.svg'
import { homeItems } from './Home'
import { useState } from 'react';
import ShoppingCart from './ShoppingCart';

function Item({ title, id, idAlt, price }) {
    const [pic, setPic] = useState(id)
    return (
        <div className='cardInfo' onMouseEnter={() => setPic(idAlt)} onMouseLeave={() => setPic(id)}>
            <h2>{title}</h2>
            <img className='product'
                src={pic}
                alt='diceItem'
            />
            <p>${price.toFixed(2)}</p>
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
                            <Item id={b4} idAlt={b4alt} title={'AJ1 Retro'} price={445.00} />
                            <img className='cart' alt='Add to Cart' src={addCart} onClick={() => handleClick('Air Jordan 1 Retro', 445.00)} />
                        </div>
                        <div className='card'>
                            <Item id={b6} idAlt={b6alt} title={'AJ1 Blue Heels'} price={422.99} />
                            <img className='cart' alt='Add to Cart' src={addCart} onClick={() => handleClick('AJ1 Blue Heels', 422.99)} />
                        </div>
                        <div className='card'>
                            <Item id={b10} idAlt={b10alt} title={'AJ1 Leather'} price={455.99} />
                            <img className='cart' alt='Add to Cart' src={addCart} onClick={() => handleClick('AJ1 Leather', 455.99)} />
                        </div>
                        <div className='card'>
                            <Item id={b12} idAlt={b12alt} title={'AJ1 Crim'} price={369.99} />
                            <img className='cart' alt='Add to Cart' src={addCart} onClick={() => handleClick('AJ1 Crim', 369.99)} />
                        </div>
                    </div>
                    <div className='blueDice'>
                        <div className='card'>
                            <Item id={bb4} idAlt={bb4alt} title={'AJ1 Sneak'} price={249.99} />
                            <img className='cart' alt='Add to Cart' src={addCart} onClick={() => handleClick('AJ1 Sneak', 249.99)} />
                        </div>
                        <div className='card'>
                            <Item id={bb6} idAlt={bb6alt} title={'AJ1 Bumble'} price={414.99} />
                            <img className='cart' alt='Add to Cart' src={addCart} onClick={() => handleClick('AJ1 Bumble', 414.99)} />
                        </div>
                        <div className='card'>
                            <Item id={bb10} idAlt={bb10alt} title={'AJ1 Sly'} price={484.99} />
                            <img className='cart' alt='Add to Cart' src={addCart} onClick={() => handleClick('10 Sided Blue Dice', 484.99)} />
                        </div>
                        <div className='card'>
                            <Item id={bb12} idAlt={bb12alt} title={'AJ1 High Shadow'} price={494.99} />
                            <img className='cart' alt='Add to Cart' src={addCart} onClick={() => handleClick('AJ1 High Shadow', 494.99)} />
                        </div>
                    </div>
                </div>
                {showCart ? <ShoppingCart items={items} updateItem={id => setItems(id)} /> : null}
            </div>

        </div>
    );
}

export { globalItems }