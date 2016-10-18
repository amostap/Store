import React, { PropTypes } from 'react';
import { Row, Col, Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import { checkout } from '../actions';
import { getTotal, getCartProducts } from '../reducers';

const CheckOutContainer = ({ products, checkout, total }) => {
  return (
    <Row>
      <Col>
        <p>{`Total: ${total}$`}</p>
      </Col>
      <Col>
        <Button onClick={checkout}>Check Out</Button>
      </Col>
    </Row>
  );
};

CheckOutContainer.propTypes = {
  products: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    price: PropTypes.number,
    quantity: PropTypes.number,
    image: PropTypes.string,
  })),
  total: PropTypes.string,
  checkout: PropTypes.func,
};

const mapStateToProps = state => ({
  products: getCartProducts(state),
  total: getTotal(state),
});

export default connect(
  mapStateToProps,
  { checkout }
)(CheckOutContainer);
