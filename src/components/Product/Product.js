import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Product.scss';

export default class Product extends Component {
    render() {
        const { product } = this.props;
        const wrapperClass = `product-wrapper`;
        return (
            <div className={wrapperClass}>

            </div>
        );
    }
}

Product.propTypes = {
    product: PropTypes.object.isRequired,
};