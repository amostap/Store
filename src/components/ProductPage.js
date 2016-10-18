import React from 'react';
import { Col, Row, Button, Image } from 'react-bootstrap';

const ProductPage = ({ product, onAddToCartClicked }) => (
  <Row>
    <Col lg={6} md={6} sm={12} xs={12}>
      <Image src={require(`../data/images/${product.title.toLowerCase()}.png`)} responsive />
    </Col>
    <Col lg={6} md={6} sm={12} xs={12}>
      <h2>{product.title}</h2>
      <h3>{product.price}</h3>
      <p>{product.description}</p>
      <Button
        onClick={onAddToCartClicked}
        disabled={product.inventory > 0 ? false : true}
      >
        {product.inventory > 0 ? 'ADD TO CART' : 'SOLD OUT'}
      </Button>
    </Col>
  </Row>
);

export default ProductPage;
