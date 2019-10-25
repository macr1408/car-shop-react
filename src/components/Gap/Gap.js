import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Gap extends Component {
    render() {
        const { height } = this.props;
        return (
            <div style={{ paddingBottom: height }} ></div>
        );
    }
}

Gap.propTypes = {
    height: PropTypes.string,
};
Gap.defaultProps = {
    height: '10px'
}