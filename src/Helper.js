export default class Helper {
    static formatToCurrency(number) {
        return (number).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
    }
}