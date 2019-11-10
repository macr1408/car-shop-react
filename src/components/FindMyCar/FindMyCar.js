import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Step1 from './Steps/Step1';
import Step2 from './Steps/Step2';
import Step3 from './Steps/Step3';
import Step4 from './Steps/Step4';
import { connect } from 'react-redux';
import './FindMyCar.scss';
import Zoom from 'react-reveal/Zoom'

class FindMyCar extends Component {
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
        this.goBackChoice = this.goBackChoice.bind(this);
        this.resetForm = this.resetForm.bind(this);
        this.findIdealCar = this.findIdealCar.bind(this);
    }

    updateChoice(step, newChoice) {
        this.setState((prevState) => {
            return {
                stepChoices: prevState.stepChoices.map(function (stepChoice) {
                    if (stepChoice.step === step) {
                        return { step: step, choice: newChoice };
                    }
                    return stepChoice;
                }),
                currentStep: step + 1
            }
        });
    }

    resetForm() {
        this.setState({
            currentStep: 1,
            stepChoices: [
                { step: 1, choice: '' },
                { step: 2, choice: '' },
                { step: 3, choice: '' },
            ]
        });
    }

    goBackChoice() {
        this.setState((prevState) => {
            return {
                currentStep: --prevState.currentStep
            };
        });
    }

    findIdealCar() {
        let key = '';
        const length = this.state.stepChoices.length;
        for (let i = 0; i < length; i++) {
            if (i === 0) {
                key += this.state.stepChoices[i].choice;
            } else {
                key += '-' + this.state.stepChoices[i].choice;
            }
        }
        const cars = {
            'sport-alone-bronze': 'honda-civic',
            'sport-alone-silver': 'porsche-cayenne',
            'sport-alone-gold': 'ferrari-italia',
            'sport-family-bronze': 'porsche-cayenne',
            'sport-family-silver': 'porsche-cayenne',
            'sport-family-gold': 'porsche-cayenne',
            'sport-family-plus-bronze': 'porsche-cayenne',
            'sport-family-plus-silver': 'porsche-cayenne',
            'sport-family-plus-gold': 'ferrari-italia',
            'classic-alone-bronze': 'volkswagen-golf',
            'classic-alone-silver': 'porsche-cayenne',
            'classic-alone-gold': 'ferrari-italia',
            'classic-family-bronze': 'ferrari-italia',
            'classic-family-silver': 'porsche-cayenne',
            'classic-family-gold': 'ferrari-italia',
            'classic-family-plus-bronze': 'ferrari-italia',
            'classic-family-plus-silver': 'porsche-cayenne',
            'classic-family-plus-gold': 'ferrari-italia',
            'any-alone-bronze': 'volkswagen-golf',
            'any-alone-silver': 'porsche-cayenne',
            'any-alone-gold': 'ferrari-italia',
            'any-family-bronze': 'volkswagen-golf',
            'any-family-silver': 'honda-civic',
            'any-family-gold': 'honda-civic',
            'any-family-plus-bronze': 'volkswagen-golf',
            'any-family-plus-silver': 'honda-civic',
            'any-family-plus-gold': 'porsche-cayenne'
        };
        return this.props.cars.find((value, index) => value.slug === cars[key]);
    }

    render() {
        const { className } = this.props;
        const findMyCarClass = `findmycar-wrapper row container card ${className}`;
        let step = <Step1 clickHandler={this.updateChoice} currChoice={this.state.stepChoices[0].choice}></Step1>;
        if (this.state.currentStep === 2) {
            step = <Step2 clickHandler={this.updateChoice} currChoice={this.state.stepChoices[1].choice}></Step2>;
        } else if (this.state.currentStep === 3) {
            step = <Step3 clickHandler={this.updateChoice} currChoice={this.state.stepChoices[2].choice}></Step3>;
        } else if (this.state.currentStep === 4) {
            const idealCar = this.findIdealCar();
            step = <Step4 resetHandler={this.resetForm} result={idealCar}></Step4>;
        }
        return (
            <div className={findMyCarClass}>
                <div className="col l12">
                    <Zoom>
                        {step}
                    </Zoom>
                    {this.state.currentStep !== 1 &&
                        <div className="text-center">
                            <button className="go-back-btn" onClick={this.goBackChoice}>Go back</button>
                        </div>
                    }
                    {this.state.currentStep !== 4 &&
                        <div className="text-center">
                            <span className={`bullet ${this.state.currentStep === 1 ? 'active' : ''}`}></span>
                            <span className={`bullet ${this.state.currentStep === 2 ? 'active' : ''}`}></span>
                            <span className={`bullet ${this.state.currentStep === 3 ? 'active' : ''}`}></span>
                        </div>
                    }
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

const mapStateToProps = (state, ownProps) => {
    return {
        cars: state.cars
    };
}

export default connect(mapStateToProps)(FindMyCar);