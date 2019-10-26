import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './NewsletterForm.scss';
import Icon from './submit-icon.svg';

export default class NewsletterForm extends Component {
    handleSubmit(e) {
        e.preventDefault();
        console.log(e);
    }
    render() {
        const { className, children } = this.props;
        const newsletterformClass = `newsletterform-wrapper ${className}`;
        return (
            <div className={newsletterformClass}>
                <form onSubmit={this.handleSubmit} className="text-center">
                    <h2 className="form-title">{children}</h2>
                    <div className="row">
                        <div className="col l3 s12"></div>
                        <div className="col l6 s12">
                            <input type="email" name="email" placeholder="Your e-mail" />
                            <button type="submit" dangerouslySetInnerHTML={{ __html: Icon }}></button>
                        </div>
                        <div className="col l3 s12"></div>
                    </div>
                </form>
            </div >
        );
    }
}

NewsletterForm.propTypes = {
    iconSrc: PropTypes.string,
    header: PropTypes.string,
    iconClass: PropTypes.string,
    roundedCorners: PropTypes.number
};
NewsletterForm.defaultProps = {
    className: ''
};