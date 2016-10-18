import { Col } from 'react-bootstrap';
import React, { PropTypes } from 'react';
import ProductThumbnail from './ProductThumbnail';

const ProductItem = ({ product, onAddToCartClicked }) => (
  <Col xs={6} sm={6} md={4} lg={3}>
    <ProductThumbnail
      id={product.id}
      image={product.image}
      title={product.title}
      price={product.price}
      shortDescription={product.shortDescription}
      onAddToCartClicked={onAddToCartClicked}
      inventory={product.inventory}
    />
  </Col>
);

ProductItem.propTypes = {
  product: PropTypes.shape({
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    inventory: PropTypes.number.isRequired,
  }).isRequired,
  onAddToCartClicked: PropTypes.func.isRequired,
};

export default ProductItem;
