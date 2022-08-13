import bodyPic from '../images/bodypic.jpg'
import Header from './Header';
import { Link } from 'react-router-dom';

export default function Home() {
    return (
        <div >
            <Header />
            <div className="home">
                <div>
                    <img className='bodyPic' alt='women holding dice' src={bodyPic}></img>
                </div>
                <div className='bodyText'>
                    <h1 className="slogan">Leading Dice Retailer</h1>
                    <h2 className="text1"> Low Quality Dice for a High Quality Price!</h2>
                    <Link to="/store">
                        <button className='storeButton'>Buy Dice Now!</button>
                    </Link>
                </div>
            </div>

        </div >
    );
}
