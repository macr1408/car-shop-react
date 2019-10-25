import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Banner.scss';

export default class Banner extends Component {
    render() {
        const { image, height, coverType, position } = this.props;
        const wrapperClass = `banner-wrapper`;
        return (
            <div className={wrapperClass}>
                <img src={image} className='banner-img' style={{
                    height: height,
                    objectFit: coverType,
                    objectPosition: position
                }} />
            </div>
        );
    }
}

Banner.propTypes = {
    image: PropTypes.string.isRequired,
    height: PropTypes.number,
    coverType: PropTypes.string,
    position: PropTypes.string
};
Banner.defaultProps = {
    coverType: 'cover',
    height: 300
};