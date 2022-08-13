import bodyPic from '../images/bodypic.jpg'
import Header from './Header';
import { Link } from 'react-router-dom';
import ShoppingCart from './ShoppingCart';
import { useState } from 'react';
import { globalItems } from './Store';

let homeItems = []
export default function Home() {
    const [showCart, toggleCart] = useState(false)
    homeItems = globalItems
    return (
        <div >
            <Header items={globalItems} show={showCart} toggleCart={toggle => toggleCart(toggle)} />
            <div className="home">
                <div>
                    <img className='bodyPic' alt='women holding dice' src={bodyPic}></img>
                </div>
                <div className='bodyText'>
                    <div>
                        <h1 className="slogan">Sneak with Style</h1>
                        <h2 className="text1"> I believe sneakers are wearable art. They tell a story, and their purpose is to support your whole body and carry you through life.</h2>
                    </div>
                    <div>
                        <Link to="/store">
                            <button className='storeButton'>Buy Sneakers!</button>
                        </Link>
                    </div>
                    <h2 className="text1"> A Fake Store by Minimise</h2>
                </div>
                {showCart ? <ShoppingCart items={globalItems} /> : null}
            </div>
        </div >
    );
}

export { homeItems }