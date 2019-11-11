import React, { Component } from 'react';

class Error404 extends Component {
    constructor(props) {
        super(props);
        setTimeout(() => {
            this.props.history.push('/');
        }, 2000);
    }
    render() {
        return (
            <h2>You are going home Sherlock, this page does not exist</h2>
        );
    }
}

export default Error404;