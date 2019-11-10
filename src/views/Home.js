import React, { Component } from 'react';
import './Home.scss';
import NavBar from '../components/Header/NavBar';
import Banner from '../components/Banner/Banner';
import Card from '../components/Card/Card';
import Slider1 from '../images/home/slider-01.jpg';
import suvCar from '../images/home/suv-car.svg';
import classicCar from '../images/home/classic-car.svg';
import sportCar from '../images/home/sport-car.svg';
import ProductCard from '../components/Product/ProductCard/ProductCard';
import Gap from '../components/Gap/Gap';
import Title from '../components/Title/Title';
import NewsletterForm from '../components/NewsletterForm/NewsletterForm';
import FindMyCar from '../components/FindMyCar/FindMyCar';
import Footer from '../components/Footer/Footer';
import { connect } from 'react-redux';

class Home extends Component {
    constructor(props) {
        super(props);
        this.products = props.products;
        this.state = {
            isSubscribedToNewsletter: false,
            emailsSubscribed: []
        }
        this.addEmailToNewsletter = this.addEmailToNewsletter.bind(this);
        this.enableResubscribe = this.enableResubscribe.bind(this);
    }

    enableResubscribe() {
        return this.setState({
            isSubscribedToNewsletter: false
        });
    }

    addEmailToNewsletter(email) {
        return this.setState((prevState) => {
            return {
                emailsSubscribed: [...prevState.emailsSubscribed, email],
                isSubscribedToNewsletter: true
            };
        });
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
                <Gap height="20px"></Gap>
                <div className="row newsletter-row">
                    <div className="container" style={{ padding: '20px 0' }}>
                        <NewsletterForm
                            emailHandler={this.addEmailToNewsletter}
                            reSubscribeHandler={this.enableResubscribe}
                            isSubscribedToNewsletter={this.state.isSubscribedToNewsletter}
                        >
                            Don't miss our best deals, subscribe now to get the latest deals directly in your email
                        </NewsletterForm>
                    </div>
                </div>
                <Gap height="20px"></Gap>
                <div className="container"><Title>Find the right car for you</Title></div>
                <FindMyCar></FindMyCar>
                <Gap height="20px"></Gap>
                <Footer></Footer>
            </div >
        );
    }
}

const mapStateToProps = (state) => {
    return {
        products: state.cars
    }
}

export default connect(mapStateToProps)(Home);