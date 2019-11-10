import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ProductCard from '../../Product/ProductCard/ProductCard';

export default class Step4 extends Component {
    render() {
        const { className, resetHandler, result } = this.props;
        const step4Class = `step-wrapper step4-wrapper ${className}`;
        return (
            <div className={step4Class}>
                <div className="row container spaced-medium">
                    <div className="col l3"></div>
                    <div className="col l6 text-center">
                        <h2>The best car for you is: </h2>
                        <ProductCard header={result} product={result}></ProductCard>
                        <button className="start-again-button" onClick={resetHandler}>Start again</button>
                    </div>
                    <div className="col l3"></div>
                </div>
            </div >
        );
    }
}

Step4.propTypes = {
    className: PropTypes.string,
    resetHandler: PropTypes.func.isRequired,
    result: PropTypes.object.isRequired
};
Step4.defaultProps = {
    className: '',
}