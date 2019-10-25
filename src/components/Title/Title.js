import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Style from './Title.module.scss';

export default class Title extends Component {
    render() {
        const { children } = this.props;
        return (
            <h2 className={Style.h2} >{children}</h2>
        );
    }
}

Title.propTypes = {
    children: PropTypes.string,
};