import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Product.scss';

export default class Product extends Component {
    render() {
        const { product } = this.props;
        const wrapperClass = `product-wrapper`;
        return (
            <div className={wrapperClass}>
                {product.image && <img src={product.image} />}
                {product.brand && <span className="product-brand">{product.brand}</span>}
                {product.name && <span className="product-title">{product.name}</span>}
                {product.price && <span className="product-price">${product.price} USD</span>}
            </div>
        );
    }
}

Product.propTypes = {
    product: PropTypes.object.isRequired,
};