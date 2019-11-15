import React, { Component } from 'react';
import './Shop.scss';
import NavBar from '../components/Header/NavBar';
import Footer from '../components/Footer/Footer';
import Gap from '../components/Gap/Gap';
import ProductCard from '../components/Product/ProductCard/ProductCard';
import { connect } from 'react-redux';
import queryString from 'query-string';

class Shop extends Component {

    constructor(props) {
        super(props);
        this.state = {
            sortedProducts: this.props.products.concat()
        }
        this.props.history.listen((location, action) => {
            this.checkProductsSort(location);
        });
    }

    filterProductsBy(sortBy) {
        const currentPath = this.props.match.path;
        this.props.history.push({
            pathname: currentPath,
            search: '?sort=' + sortBy
        });
    }

    componentDidMount() {
        this.checkProductsSort(this.props.location);
    }

    checkProductsSort(location) {
        const queryParams = queryString.parse(location.search);
        if (queryParams.sort !== undefined && queryParams.sort !== 'default') {
            let newSortedProducts = this.state.sortedProducts.concat();
            newSortedProducts.sort((a, b) => {
                if (a[queryParams.sort] > b[queryParams.sort]) {
                    return 1;
                } else if (a[queryParams.sort] < b[queryParams.sort]) {
                    return -1;
                }
                return 0;
            });
            newSortedProducts.sort((a, b) => {
                if (a[queryParams.sort] > b[queryParams.sort]) {
                    return 1;
                } else if (a[queryParams.sort] < b[queryParams.sort]) {
                    return -1;
                }
                return 0;
            });
            this.setState({
                sortedProducts: newSortedProducts
            });
        } else {
            this.setState({
                sortedProducts: this.props.products
            });
        }
    }

    render() {
        const products = this.state.sortedProducts;

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
                        <h4>Sort Products by</h4>
                        <ul className="filter-list">
                            <li className="filter-link" onClick={() => this.filterProductsBy('default')}>Default</li>
                            <li className="filter-link" onClick={() => this.filterProductsBy('price')}>Price</li>
                            <li className="filter-link" onClick={() => this.filterProductsBy('name')}>Name</li>
                            <li className="filter-link" onClick={() => this.filterProductsBy('brand')}>Brand</li>
                        </ul>
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