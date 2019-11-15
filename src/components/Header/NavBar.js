import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './NavBar.scss';
import Logo from '../../images/logo.png';
import { Link, NavLink } from 'react-router-dom';
import { connect } from 'react-redux';


class NavBar extends Component {
    render() {
        const { isTransparent, cartItems } = this.props;
        const navWrapperClass = `nav-bar-wrapper ${(isTransparent ? 'transparent' : 'blue')}`;
        return (
            <div className={navWrapperClass}>
                <div className="row nav-bar container">
                    <div className="col l6">
                        <Link to="/"><img src={Logo} className="logo" /></Link>
                    </div>
                    <div className="col l6">
                        <div className="nav-item"><Link to="/">Home</Link></div>
                        <div className="nav-item"><NavLink to="/shop">Shop</NavLink></div>
                        <div className="nav-item"><NavLink to="/cart">{cartItems.length} Products in Cart</NavLink></div>
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

const mapStateToProps = (state, ownProps) => {
    return {
        cartItems: state.cart
    };
};

export default connect(mapStateToProps)(NavBar);
