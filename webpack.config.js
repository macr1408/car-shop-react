module.exports = () => {
    let env = 'dev';
    return require(`./webpack.config.${env}.js`);
}