import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Card from '../../Card/Card';

export default class Step3 extends Component {
    render() {
        const { className, clickHandler, currChoice } = this.props;
        const step3Class = `step-wrapper step3-wrapper ${className}`;
        return (
            <div className={step3Class}>
                <div className="row container spaced-medium">
                    <div className="col l12 text-center">
                        <h2>How much do you plan to spend?</h2>
                    </div>
                    <div onClick={(e) => clickHandler(3, 'bronze')} className="col l4">
                        <Card header="I got some savings" className={currChoice === 'bronze' ? 'active' : ''}></Card>
                    </div>
                    <div onClick={(e) => clickHandler(3, 'silver')} className="col l4">
                        <Card header="I'm very wealthy" className={currChoice === 'silver' ? 'active' : ''}></Card>
                    </div>
                    <div onClick={(e) => clickHandler(3, 'gold')} className="col l4">
                        <Card header="I'm the richest man on earth" className={currChoice === 'gold' ? 'active' : ''}></Card>
                    </div>
                </div>
            </div>
        );
    }
}

Step3.propTypes = {
    className: PropTypes.string,
    clickHandler: PropTypes.func,
    currChoice: PropTypes.string.isRequired
};
Step3.defaultProps = {
    className: ''
}