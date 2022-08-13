import logo from '../images/logo.svg'
import cart from '../images/cart.svg'
import { Link } from 'react-router-dom';

export default function Header(props) {
    return (
        <div className="header">
            <nav className='nav'>
                <Link to="/" className='homeLink'>Home</Link>
                <Link to="/store" className='homeLink'>Store</Link>
            </nav>
            <Link to="/">
                <div className='middleText' >

                    <img className='logo' src={logo} alt='logo'></img>
                    <h1 className='logotext'>flips</h1>

                </div>
            </Link>
            <Link to="/store">
                <div className='rightText'>
                    <img className='logo' src={cart} alt='cart' onClick={() => props.toggleCart(!props.show)}
                    ></img>
                    <h2>({props.items.length})</h2>
                </div>
            </Link>
        </div>
    );
}
