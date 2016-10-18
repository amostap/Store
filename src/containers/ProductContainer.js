import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { addToCart } from '../actions';
import { getVisibleProducts } from '../reducers/products';
import ProductPage from '../components/ProductPage';

const ProductContainer = ({ params, products, addToCart }) => {
  const product = products[params.id - 1];
  return (
    <ProductPage
      product={product}
      onAddToCartClicked={() => addToCart(product.id)}
    />
);
};

ProductContainer.propTypes = {
  addToCart: PropTypes.func,
  params: PropTypes.number,
  products: PropTypes.array.isRequired,
};

const mapStateToProps = state => ({
  products: getVisibleProducts(state.products),
});

export default connect(
  mapStateToProps,
  { addToCart }
)(ProductContainer);
