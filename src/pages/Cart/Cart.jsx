import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import './Cart.css'

function Cart( {cart, setCart} ) {
    return ( 
    <div className='cart-container'>
        <div className='cart-items-container'>
            {cart.map((carts) => {
                return (<Card style={{ width: '18rem' }} key={carts.id}>
            <Card.Img variant="top" src={carts.thumbnailUrl} />
            <Card.Body>
                <Card.Title>{carts.title}</Card.Title>
                <Card.Text><b>${carts.price.toFixed(2)}</b></Card.Text>
                <Button variant="outline-danger" onClick={() => setCart(cart.filter((c) =>  c.id !== carts.id))}>
                    Remove from Cart
                </Button>
            </Card.Body>
        </Card>
        )
            } )}
        </div>
        <h4>Items: {cart.length} items - Total Price: ${cart.reduce((prev, carts) =>{ return prev + carts.price}, 0).toFixed(2)}</h4>
        <button className='btn btn-warning'>Checkout&nbsp;<span className='bi bi-credit-card'></span></button>
    </div> );
}

export default Cart;