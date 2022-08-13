import logo from '../images/logo.svg'
import cart from '../images/cart.svg'
import { Link } from 'react-router-dom';

export default function Header() {
    let items = 0;
    return (
        <div className="header">
            <nav className='nav'>
                <Link to="/" className='homeLink'>Home</Link>
                <Link to="/store" className='homeLink'>Store</Link>
            </nav>
            <Link to="/">
                <div className='middleText' >

                    <img className='logo' src={logo} alt='logo'></img>
                    <h1 className='logotext'>dice</h1>

                </div>
            </Link>
            <div className='rightText'>
                <img className='cart' src={cart} alt='cart'></img>
                <h2>({items})</h2>
            </div>
        </div>
    );
}
