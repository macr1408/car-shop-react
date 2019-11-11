import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './NavBar.scss';
import { Link, NavLink } from 'react-router-dom';

export default class NavBar extends Component {
    render() {
        const { isTransparent } = this.props;
        const navWrapperClass = `nav-bar-wrapper ${(isTransparent ? 'transparent' : 'blue')}`;
        return (
            <div className={navWrapperClass}>
                <div className="row nav-bar container">
                    <div className="col l6">
                        <img src="logo" />
                    </div>
                    <div className="col l6">
                        <div className="nav-item"><Link to="/">Home</Link></div>
                        <div className="nav-item"><NavLink to="/shop">Shop</NavLink></div>
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