import React, { PropTypes } from 'react';
import { Row, Col, Image } from 'react-bootstrap';

const cartRowStyle = {
  border: '1px solid lightgray',
  borderRadius: '5px',
  padding: '20px 10px',
  marginTop: '20px',
  fontSize: '20px',
  backgroundColor: 'white',
};

const CartProduct = ({ price, quantity, title }) => (
  <Row style={cartRowStyle}>
    <Col lg={1} md={1} sm={2} xs={2}>
      <Image src={require(`../data/images/${title.toLowerCase()}.png`)} alt={title} responsive />
    </Col>
    <Col lg={3} md={3} sm={5} xs={5} style={{ marginTop: '11px' }}>
      <span>{title}</span>
    </Col>
    <Col lg={3} md={3} sm={5} xs={5} style={{ marginTop: '11px' }}>
      <span>{`$${price}`}</span>
      {quantity ? ` x ${quantity}` : null}
    </Col>
  </Row>
);

CartProduct.propTypes = {
  price: PropTypes.number,
  quantity: PropTypes.number,
  title: PropTypes.string,
};

export default CartProduct;
