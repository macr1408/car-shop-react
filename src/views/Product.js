import React, { Component, Fragment } from 'react';
import './Product.scss';
import { connect } from 'react-redux';
import NavBar from '../components/Header/NavBar';
import Gap from '../components/Gap/Gap';
import Footer from '../components/Footer/Footer';


class Product extends Component {
    constructor(props) {
        super(props);
        this.buyProduct = this.buyProduct.bind(this);
    }

    buyProduct() {
        const { product, addToCart, reduceStock } = this.props;
        addToCart(product.id);
        reduceStock(product.id);
    }

    render() {
        const { product } = this.props;
        let stockMsg = '';
        if (product.stock > 0) {
            stockMsg = (<Fragment>
                <p className="stock">Stock available, only <span className="stock-qty">{product.stock}</span> units left!!</p>
                <button className="buy-btn" onClick={this.buyProduct}>Buy Now</button>
            </Fragment>);
        } else {
            stockMsg = (<p className="stock">We are out of Stock :( come back soon</p>);
        }
        return (
            <div className="product-page">
                <NavBar></NavBar>
                <Gap height="40px"></Gap>
                <div className="row container card">
                    <div className="col l4" style={{
                        backgroundImage: `url("${product.image}")`,
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat',
                        backgroundSize: 'cover'
                    }}>
                    </div>
                    <div className="col l8 product-summary">
                        <h5 className="brand">{product.brand}</h5>
                        <h1 className="title">{product.name}</h1>
                        <h3 className="description">This may look like a regular car but it isn't! it is an ideal car for you, for your family and for your life. Buy it ASAP!</h3>
                        <p className="price">Only for ${product.price} <span className="old-price">${product.price * 1.3}</span></p>
                        {stockMsg}
                        <p className="safe-message">Safe buy, refund available within the first 7 days after purchase</p>
                    </div>
                </div>
                <Gap height="30px"></Gap>
                <Footer></Footer>
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        product: state.cars.find((value, index) => value.slug === ownProps.match.params.car_slug),
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        addToCart: (id) => { dispatch({ type: 'ADD_TO_CART', payload: id }) },
        reduceStock: (id) => { dispatch({ type: 'REDUCE_STOCK', payload: id }) }
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Product);