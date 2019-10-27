import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Card from '../Card/Card.js';

export default class Step1 extends Component {
    render() {
        const { className } = this.props;
        const step1Class = `step-wrapper step1-wrapper ${className}`;
        return (
            <div className={step1Class}>
                <div className="row container spaced-medium">
                    <div className="col l12 text-center">
                        <h2>What kind of user are you?</h2>
                    </div>
                    <div className="col l4">
                        <Card header="I like really fast cars"></Card>
                    </div>
                    <div className="col l4">
                        <Card header="I just love classic cars"></Card>
                    </div>
                    <div className="col l4">
                        <Card header="I have no idea"></Card>
                    </div>
                </div>
            </div>
        );
    }
}

Step1.propTypes = {
    className: PropTypes.string,
};
Step1.defaultProps = {
    className: ''
}