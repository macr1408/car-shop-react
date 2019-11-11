import React, { Component } from 'react';
import './Product.scss';
import { connect } from 'react-redux';
import NavBar from '../components/Header/NavBar';
import Gap from '../components/Gap/Gap';
import Footer from '../components/Footer/Footer';


class Product extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const { product } = this.props;
        console.log(product);
        return (
            <div className="product-page">
                <NavBar></NavBar>
                <Gap height="40px"></Gap>
                <div className="row container card">
                    <div className="col l4">
                        <img src={product.image} className="product-image" />
                    </div>
                    <div className="col l8 product-summary">
                        <h5 className="brand">{product.brand}</h5>
                        <h1 className="title">{product.name}</h1>
                        <h3 className="description">This may look like a regular car but it isn't! it is an ideal car for you, for your family and for your life. Buy it ASAP!</h3>
                        <p className="price">Only for ${product.price} <span className="old-price">${product.price * 1.3}</span></p>
                        <p className="stock">Stock available, only {product.stock} units left!!</p>
                        <button className="buy-btn">Buy Now</button>
                        <p className="safe-message">Safe purchase, refund available within the first 7 days after purchase</p>
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
        product: state.cars.find((value, index) => value.slug === ownProps.match.params.car_slug)
    };
};

export default connect(mapStateToProps)(Product);