import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Card from '../../Card/Card';

export default class Step1 extends Component {
    render() {
        const { className, clickHandler, currChoice } = this.props;
        const step1Class = `step-wrapper step1-wrapper ${className}`;
        return (
            <div className={step1Class}>
                <div className="row container spaced-medium">
                    <div className="col l12 text-center">
                        <h2>What kind of user are you?</h2>
                    </div>
                    <div onClick={(e) => clickHandler(1, 'sport')} className="col l4">
                        <Card header="I like really fast cars" className={currChoice === 'sport' ? 'active' : ''}></Card>
                    </div>
                    <div onClick={(e) => clickHandler(1, 'classic')} className="col l4">
                        <Card header="I just love classic cars" className={currChoice === 'classic' ? 'active' : ''}></Card>
                    </div>
                    <div onClick={(e) => clickHandler(1, 'any')} className="col l4">
                        <Card header="I have no idea" className={currChoice === 'any' ? 'active' : ''}></Card>
                    </div>
                </div>
            </div>
        );
    }
}

Step1.propTypes = {
    className: PropTypes.string,
    clickHandler: PropTypes.func,
    currChoice: PropTypes.string.isRequired
};
Step1.defaultProps = {
    className: ''
}