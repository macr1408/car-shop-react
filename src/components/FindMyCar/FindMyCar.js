import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Step1 from './Step1.js';
import './FindMyCar.scss';

export default class FindMyCar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentStep: 1,
            stepChoices: [
                { step: 1, choice: '' },
                { step: 2, choice: '' },
                { step: 3, choice: '' },
            ]
        }
        this.updateChoice = this.updateChoice.bind(this);
    }

    updateChoice(step, newChoice) {
        this.setState((prevState) => {
            this.state.stepChoices = prevState.stepChoices.map(function (stepChoice) {
                if (stepChoice.step === step) {
                    return { step: step, choice: newChoice };
                }
                return stepChoice;
            });
        });
    }
    render() {
        const { className } = this.props;
        const findMyCarClass = `findmycar-wrapper row container card ${className}`;
        return (
            <div className={findMyCarClass}>
                <div className="col l4 sidebar"></div>
                <div className="col l8">
                    <Step1></Step1>
                    <div className="text-center">
                        <span className="bullet active"></span>
                        <span className="bullet"></span>
                        <span className="bullet"></span>
                    </div>
                </div>
            </div>
        );
    }
}

FindMyCar.propTypes = {
    className: PropTypes.string,
};
FindMyCar.defaultProps = {
    className: ''
}