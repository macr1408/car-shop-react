import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './NewsletterForm.scss';
import Icon from './submit-icon.svg';

export default class NewsletterForm extends Component {
    constructor(props) {
        super(props);
        this.emailRef = React.createRef();
        this.handleSubmit = this.handleSubmit.bind(this);
        this.allowResubscribe = this.allowResubscribe.bind(this);
    }
    handleSubmit(e) {
        const { emailHandler } = this.props;
        e.preventDefault();
        return emailHandler(this.emailRef.current.value);
    }

    allowResubscribe() {
        const { reSubscribeHandler } = this.props;
        reSubscribeHandler();
    }
    render() {
        const { className, children, isSubscribedToNewsletter } = this.props;
        const newsletterformClass = `newsletterform-wrapper ${className}`;
        let form = '';
        if (isSubscribedToNewsletter) {
            form = <React.Fragment>
                <h2 className="subscribed-msg">Nice! You will start receiving deals in your mail soon.</h2>
                <h2 className="resubscribe-link-offer" onClick={this.allowResubscribe}>Want to subscribe again? Click here</h2>
            </React.Fragment>
        } else {
            form = <React.Fragment>
                <input type="email" name="email" placeholder="Your e-mail" ref={this.emailRef} required />
                <button type="submit" dangerouslySetInnerHTML={{ __html: Icon }}></button>
            </React.Fragment>
        }
        return (
            <div className={newsletterformClass}>
                <form onSubmit={this.handleSubmit} className="text-center">
                    <h2 className="form-title">{children}</h2>
                    <div className="row">
                        <div className="col l3 s12"></div>
                        <div className="col l6 s12">
                            {form}
                        </div>
                        <div className="col l3 s12"></div>
                    </div>
                </form>
            </div >
        );
    }
}

NewsletterForm.propTypes = {
    emailHandler: PropTypes.func.isRequired,
    reSubscribeHandler: PropTypes.func.isRequired,
    className: PropTypes.string,
};
NewsletterForm.defaultProps = {
    className: ''
};