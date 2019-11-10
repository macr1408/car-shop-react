import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Card from '../../Card/Card.js';

export default class Step2 extends Component {
    render() {
        const { className, clickHandler, currChoice } = this.props;
        const step2Class = `step-wrapper step2-wrapper ${className}`;
        return (
            <div className={step2Class}>
                <div className="row container spaced-medium">
                    <div className="col l12 text-center">
                        <h2>How big is your family?</h2>
                    </div>
                    <div onClick={(e) => clickHandler(2, 'alone')} className="col l4">
                        <Card header="Only me" className={currChoice === 'alone' ? 'active' : ''}></Card>
                    </div>
                    <div onClick={(e) => clickHandler(2, 'family')} className="col l4">
                        <Card header="I have a lovely family" className={currChoice === 'family' ? 'active' : ''}></Card>
                    </div>
                    <div onClick={(e) => clickHandler(2, 'family-plus')} className="col l4">
                        <Card header="I have a lovely family AND a dog!" className={currChoice === 'family-plus' ? 'active' : ''}></Card>
                    </div>
                </div>
            </div>
        );
    }
}

Step2.propTypes = {
    className: PropTypes.string,
    clickHandler: PropTypes.func,
    currChoice: PropTypes.string.isRequired
};
Step2.defaultProps = {
    className: ''
}