import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Product from '../Product.js';
import Card from '../../Card/Card.js';

export default class ProductCard extends Component {
    render() {
        const { product } = this.props;
        return (
            <Card textCenter={false} >
                <Product product={product}></Product>
            </Card>
        );
    }
}

ProductCard.propTypes = {
    product: PropTypes.object.isRequired,
};