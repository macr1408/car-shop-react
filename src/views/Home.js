import React, { Component } from 'react';
import './Home.scss';
import NavBar from '../components/Header/NavBar.js';
import Banner from '../components/Banner/Banner.js';
import Card from '../components/Card/Card.js';
import Slider1 from '../images/home/slider-01.jpg';
import suvCar from '../images/home/suv-car.svg';
import classicCar from '../images/home/classic-car.svg';
import sportCar from '../images/home/sport-car.svg';
import ProductCard from '../components/Product/ProductCard/ProductCard.js';
import Gap from '../components/Gap/Gap.js'
import Title from '../components/Title/Title.js'

export default class Home extends Component {
    constructor(props) {
        super(props);
        this.products = [
            { id: 1, name: 'Volkswagen Golf', brand: 'Volkswagen', price: 14200 },
            { id: 2, name: 'Porsche Cayenne', brand: 'Porsche', price: 114000 },
            { id: 3, name: 'Ferrari Italia 458', brand: 'Ferrari', price: 410000 },
            { id: 4, name: 'Honda Civic', brand: 'Honda', price: 9000 }
        ];
    }
    render() {
        return (
            <div className="home">
                <NavBar isTransparent={true} />
                <Banner image={Slider1} height={330} position={'center top'} />
                <div className="row container spaced-medium" style={{ marginTop: '-40px' }}>
                    <div className="col l4">
                        <Card iconSrc={classicCar}
                            iconClass="classic-car"
                            header="The Classic and reliable car">
                        </Card>
                    </div>
                    <div className="col l4">
                        <Card iconSrc={suvCar}
                            iconClass="suv-car"
                            header="The SUV comfy car for the family">
                        </Card>
                    </div>
                    <div className="col l4">
                        <Card iconSrc={sportCar}
                            iconClass="sport-car"
                            header="The Sports car you always dreamed with">
                        </Card>
                    </div>
                </div>
                <Gap height="50px"></Gap>
                <div className="container"><Title>Best Selling Cars</Title></div>
                <div className="row container spaced-large">
                    {this.products.map((product, index) => {
                        return (
                            <div className="col l3" key={index}>
                                <ProductCard product={product} ></ProductCard>
                            </div>);
                    })}
                </div>
            </div>
        );
    }
}