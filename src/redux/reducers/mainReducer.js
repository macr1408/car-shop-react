import GolfImage from '../../images/products/volkswagen-golf.jpg';
import CayenneImage from '../../images/products/porsche-cayenne.jpg';
import Ferrari458Image from '../../images/products/ferrari-458.jpg';
import CivicImage from '../../images/products/honda-civic.jpg';

const initState = {
    cars: [
        { id: 1, slug: 'volkswagen-golf', name: 'Volkswagen Golf', brand: 'Volkswagen', price: 14200, stock: 3, image: GolfImage },
        { id: 2, slug: 'porsche-cayenne', name: 'Porsche Cayenne', brand: 'Porsche', price: 114000, stock: 3, image: CayenneImage },
        { id: 3, slug: 'ferrari-italia', name: 'Ferrari Italia 458', brand: 'Ferrari', price: 410000, stock: 3, image: Ferrari458Image },
        { id: 4, slug: 'honda-civic', name: 'Honda Civic', brand: 'Honda', price: 9000, stock: 3, image: CivicImage },
        { id: 5, slug: 'honda-civic2', name: 'Honda Civic clone', brand: 'Honda', price: 9000, stock: 3, image: CivicImage },
        { id: 6, slug: 'honda-civic3', name: 'Honda Civic iconic clone', brand: 'Honda', price: 9000, stock: 3, image: CivicImage },
        { id: 7, slug: 'honda-civic4', name: 'Honda Civic master clone', brand: 'Honda', price: 9000, stock: 3, image: CivicImage },
        { id: 8, slug: 'honda-civic5', name: 'Honda Civic best clone', brand: 'Honda', price: 9000, stock: 3, image: CivicImage },
        { id: 9, slug: 'honda-civic6', name: 'Honda Civic supreme clone', brand: 'Honda', price: 9000, stock: 3, image: CivicImage }
    ]
}

const mainReducer = (state = initState, action) => {
    return state;
}

export default mainReducer;
