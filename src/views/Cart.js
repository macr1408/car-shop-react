import React, { Component } from 'react';
import './Cart.scss';
import { connect } from 'react-redux';
import NavBar from '../components/Header/NavBar';
import Footer from '../components/Footer/Footer';
import Gap from '../components/Gap/Gap';
import ProductCard from '../components/Product/ProductCard/ProductCard';

class Cart extends Component {
    render() {
        const { cartItems } = this.props;
        const cartItemsLength = cartItems.length;
        let printProducts = [];
        if (cartItemsLength > 0) {
            for (let i = 0; i < cartItemsLength; i++) {
                printProducts.push(
                    <div className="col l3 s11" key={i}>
                        <ProductCard product={cartItems[i]}></ProductCard>
                    </div>
                )
            }
        } else {
            printProducts.push(<h2 key={1}>Oops! there are no items in your cart yet</h2>);
        }
        return (
            <div className="cart-page">
                <NavBar></NavBar>
                <Gap height="40px"></Gap>
                <div className="row container">
                    <div className="col l12">
                        <h2 className="text-center card cart-page-title">My Cart</h2>
                        <Gap height="40px"></Gap>
                    </div>
                    <div className="col l12">
                        <div className="row container spaced-small">
                            {printProducts}
                        </div>
                    </div>
                </div>
                <Gap height="40px"></Gap>
                <Footer></Footer>
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        cartItems: state.cart
    };
};

export default connect(mapStateToProps)(Cart);
