import React, { Component } from 'react';
import './Shop.scss';
import NavBar from '../components/Header/NavBar';
import Footer from '../components/Footer/Footer';
import Gap from '../components/Gap/Gap';
import ProductCard from '../components/Product/ProductCard/ProductCard';
import { connect } from 'react-redux';

class Shop extends Component {
    render() {
        const { products } = this.props;

        let printableProducts = [];
        const productsLength = products.length;
        for (let i = 0; i < productsLength - 4; i = i + 4) {

            printableProducts.push(
                <div className="row" style={{ marginBottom: '20px' }} key={i}>
                    <div className="col l3 s12">
                        <ProductCard product={products[i]}></ProductCard>
                    </div>
                    <div className="col l3 s12">
                        <ProductCard product={products[i + 1]}></ProductCard>
                    </div>
                    <div className="col l3 s12">
                        <ProductCard product={products[i + 2]}></ProductCard>
                    </div>
                    <div className="col l3 s12">
                        <ProductCard product={products[i + 3]}></ProductCard>
                    </div>
                </div>
            );
        }
        return (
            <div className="shop-page">
                <NavBar></NavBar>
                <Gap height="40px"></Gap>
                <div className="row container">
                    <div className="col l12">
                        <h2 className="text-center card shop-page-title">Shop page</h2>
                        <Gap height="40px"></Gap>
                    </div>
                    <div className="col l2 sidebar">
                        Sort Products
                    </div>
                    <div className="col l10">
                        <div className="row container spaced-small">
                            {printableProducts}
                        </div>
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
        products: state.cars
    };
}

export default connect(mapStateToProps)(Shop);