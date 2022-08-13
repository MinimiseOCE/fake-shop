import Header from "./Header";
import { globalItems } from "./Store";

function ShoppingItem({ name, quantity, price }) {
    return (
        <p>{name} {quantity}x total:${price.toFixed(2)}</p>
    )

}

export default function Checkout() {
    let total = 0;
    globalItems.forEach(item => {
        total += item.price * item.quantity
    });

    return (
        <div>
            <Header items={globalItems} />
            <div className="checkoutBackground">
                {globalItems.map(item => (
                    <div className='checkoutItem' key={item.id}>
                        <ShoppingItem
                            name={item.id} quantity={item.quantity} price={(item.quantity) * (item.price)}
                        />
                    </div>
                ))}
                <h1 className='checkoutItem'>Total Price: <br></br>${total.toFixed(2)}</h1>
            </div>
            <div className='checkoutButton'>
                <button className='checkoutButton' onClick={() => alert('This is a fake store, thanks for coming by!')}>Checkout</button>
            </div>
        </div>
    )
}