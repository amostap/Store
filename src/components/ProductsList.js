import React, { PropTypes } from 'react';
import { Row } from 'react-bootstrap';

const ProductsList = ({ children }) => (
  <Row>
    {children}
  </Row>
);

ProductsList.propTypes = {
  children: PropTypes.node,
};

export default ProductsList;
