import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './NavBar.scss';

export default class NavBar extends Component {
    render() {
        const { isTransparent } = this.props;
        const navWrapperClass = `nav-bar-wrapper ${(isTransparent ? 'transparent' : '')}`;
        return (
            <div className={navWrapperClass}>
                <div className="row nav-bar container">
                    <div className="col l6">
                        <img src="logo" />
                    </div>
                    <div className="col l6">
                        <div className="nav-item"><a href="#">Models</a></div>
                        <div className="nav-item"><a href="#">Shop</a></div>
                        <div className="nav-item"><a href="#">About us</a></div>
                        <div className="nav-item"><a href="#">Contact</a></div>
                    </div>
                </div >
            </div>
        );
    }
}

NavBar.propTypes = {
    isTransparent: PropTypes.bool,
};
NavBar.defaultProps = {
    isTransparent: false
};