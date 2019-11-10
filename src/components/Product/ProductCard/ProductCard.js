import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Card from '../../Card/Card';
import './ProductCard.scss';
import Helper from '../../../Helper';

export default class ProductCard extends Component {
    render() {
        const { product } = this.props;
        return (
            < Card textCenter={false} className="product-wrapper no-padding" >
                {product.image && <img src={product.image} className="product-image" />}
                <div className="product-description" >
                    {product.brand && <span className="product-brand">{product.brand}</span>}
                    {product.name && <span className="product-title">{product.name}</span>}
                    {product.price && <span className="product-price">${Helper.formatToCurrency(product.price)} USD</span>}
                </div>
            </Card >
        );
    }
}

ProductCard.propTypes = {
    product: PropTypes.object.isRequired,
};