import React, { PropTypes } from 'react';
import { Grid } from 'react-bootstrap';
import { Link } from 'react-router';
import CartProduct from './CartProduct';

const Cart = ({ products, total, onCheckoutClicked }) => {
  const hasProducts = products.length > 0;
  const nodes = hasProducts ? (
    products.map(product =>
      <CartProduct
        title={product.title}
        price={product.price}
        quantity={product.quantity}
        key={product.id}
      />
    )
  ) : (
    <em>Please add some products to cart.</em>
  );

  return (
    <Grid>
      <h3>Your Cart</h3>
      {nodes}
      <h4>Total: &#36;{total}</h4>
      <Link bsClass="link" to="/">
      Continue Shopping
      </Link>
      <span style={{ margin: '0 10px' }}>or</span>
      <Link bsClass="link" to="/checkout">
      Go To Checkout
      </Link>
    </Grid>
  );
};

Cart.propTypes = {
  products: PropTypes.array,
  total: PropTypes.string,
  onCheckoutClicked: PropTypes.func,
};

export default Cart;
