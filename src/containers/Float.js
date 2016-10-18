import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { getTotal, getCartProducts } from '../reducers';
import { checkout } from '../actions';

const floatStyles = {
  position: 'fixed',
  top: '70px',
  right: '10px',
  zIndex: '100',
  textAlign: 'center',
  color: '#74806D',
};

const linkStyle = {
  color: '#74806D',
  textDecoration: 'underline',
  marginTop: '5px',
};

const Float = ({ total }) => {
  let temp;
  if (total === '0.00') {
    temp = null;
  } else {
    temp = (
      <div style={floatStyles}>
        <h4>Shop Cart</h4>
        <p>{`$${total}`}</p>
        <Link style={linkStyle} to="/checkout">Checkout</Link>
        <br />
        <Link style={linkStyle} to="/cart">View</Link>
      </div>
    );
  }
  return temp;
};

Float.propTypes = {
  total: PropTypes.string,
};

const mapStateToProps = state => ({
  total: getTotal(state),
  products: getCartProducts(state),
});

export default connect(mapStateToProps, { checkout })(Float);
