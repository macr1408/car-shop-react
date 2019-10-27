import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Footer.scss';

export default class Footer extends Component {
    render() {
        const { className } = this.props;
        const footerClass = `footer-wrapper ${className}`;
        return (
            <div className={footerClass}>
                <div className="row container">
                    <div className="col l4">
                        <ul className="nav-links">
                            <a href="#">Home</a> | <a href="#">Shop</a> | <a href="#">My cart</a>
                        </ul>
                    </div>
                    <div className="col l8">
                        <div className="copyright-wrapper">
                            <span className="copyright">Made with ♥ by Marcos</span>
                        </div>
                    </div>
                </div>
            </div >
        );
    }
}

Footer.propTypes = {
    className: PropTypes.string,
};
Footer.defaultProps = {
    className: ''
};