import React, { PropTypes } from 'react';
import { Thumbnail, Button } from 'react-bootstrap';
import { Link } from 'react-router';
import styles from './styles.css';

const buttonStyles = {
  width: '100%',
  border: '1px solid #74806D',
  outline: 'none',
  marginBottom: '10px',
  borderRadius: '1px',
  color: '#74806D',
};

const linkStyle = {
  color: '#74806D',
};

const ProductThumbnail = ({ id, inventory, onAddToCartClicked, price, quantity, title, shortDescription }) => (
  <Thumbnail src={require(`../data/images/${title.toLowerCase()}.png`)} style={styles}>
    <Link className="link" style={linkStyle} to={`/product/${id}`}>
      <h4 style={{ color: 'black' }}>{title}</h4>
      <p>{`$${price}`}</p>
      <p>{shortDescription}</p>
      {quantity ? ` x ${quantity}` : null}
    </Link>
    <Button
      style={buttonStyles}
      onClick={onAddToCartClicked}
      disabled={inventory > 0 ? false : true}
    >
      {inventory > 0 ? 'ADD TO CART' : 'SOLD OUT'}
    </Button>
  </Thumbnail>
);

ProductThumbnail.propTypes = {
  price: PropTypes.number,
  quantity: PropTypes.number,
  title: PropTypes.string,
  shortDescription: PropTypes.string,
  onAddToCartClicked: PropTypes.function,
  inventory: PropTypes.number,
  id: PropTypes.number,
};

export default ProductThumbnail;
