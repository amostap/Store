import React, { PropTypes } from 'react';

const Product = ({ id, price, quantity, title, shortDescription, description, image, largeImage, inventory, category }) => (
  <div>
    <img src={image} alt={title} />
    <h4 style={{ textAlign: 'center' }}>{title}</h4>
    <p>{price}</p>
    <p>{shortDescription}</p>
    {quantity ? ` x ${quantity}` : null}
  </div>
);

Product.propTypes = {
  id: PropTypes.number,
  price: PropTypes.number,
  quantity: PropTypes.number,
  title: PropTypes.string,
  shortDescription: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
  largeImage: PropTypes.string,
  inventory: PropTypes.number,
  category: PropTypes.string,
};

export default Product;
