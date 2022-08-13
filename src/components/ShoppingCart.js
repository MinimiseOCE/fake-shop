import exit from '../images/exit.svg'
import add from '../images/add.svg'
import minus from '../images/minus.svg'

function ShoppingItem({ name, quantity, price }) {
    return (
        <p>{name} {quantity}x total:${price.toFixed(2)}</p>
    )

}

export default function ShoppingCart(props) {
    let total = 0;
    function addItem(tag) {
        const objIndex = props.items.findIndex((item => item.id === tag));
        const updatedArray = props.items.map((item, i) => {
            if (i === objIndex) {
                // Increment the clicked counter
                item.quantity++;
                return item;
            } else {
                // The rest haven't changed
                return item;
            }
        });
        props.updateItem(updatedArray);
    }
    function subtractItem(tag) {
        const objIndex = props.items.findIndex((item => item.id === tag));
        const updatedArray = props.items.map((item, i) => {
            if (i === objIndex) {
                // Increment the clicked counter
                item.quantity--;
                return item;
            } else {
                // The rest haven't changed
                return item;
            }
        });
        props.updateItem(updatedArray);
    }
    function removeItem(tag) {
        const filteredItems = props.items.filter((item) => item.id !== tag);
        props.updateItem(filteredItems);
    }
    console.log(props.items.length)
    if (props.items.length > 0) {
        props.items.forEach(item => {
            total += item.price * item.quantity
        });
        return (
            <div className='shoppingCart'>
                <h1>Shopping Cart</h1>
                {props.items.map(item => (
                    <div className='shoppingItem' key={item.id}>
                        <ShoppingItem
                            name={item.id} quantity={item.quantity} price={(item.quantity) * (item.price)}
                        />
                        <img className='exitIcon' alt='add icon' src={add} onClick={() => addItem(item.id)} />
                        <img className='exitIcon' alt='subtract icon' src={minus} onClick={() => subtractItem(item.id)} />
                        <img className='exitIcon' alt='exit icon' src={exit} onClick={() => removeItem(item.id)} />
                    </div>
                ))}

                <h1 className='price'>Total Price: <br></br>${total.toFixed(2)}</h1>
            </div>
        )
    }
    else {
        return (
            <div className='shoppingCart'>
                <h1>Shopping Cart</h1>
                <h1>Total Price: ${total}</h1>
            </div>
        )
    }
}