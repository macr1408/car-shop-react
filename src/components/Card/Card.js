import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Card.scss';

export default class Card extends Component {
    render() {
        const { textCenter, iconSrc, header, children, iconClass } = this.props;
        let iconElem;
        if (iconSrc) {
            if (iconSrc.indexOf('<svg') !== -1) {
                iconElem = <span className={iconClass} dangerouslySetInnerHTML={{ __html: iconSrc }} />;
            } else {
                iconElem = <img className={iconClass} src={iconSrc} />;
            }
        }
        const cardClass = `card card-wrapper${(textCenter ? ' text-center' : '')}`;
        return (
            <div className={cardClass}>
                {iconSrc && iconElem}
                {header && <span className="header">{header}</span>}
                <span className="text-content">{children}</span>
            </div>
        );
    }
}

Card.propTypes = {
    textCenter: PropTypes.bool,
    iconSrc: PropTypes.string,
    header: PropTypes.string,
    iconClass: PropTypes.string,
    roundedCorners: PropTypes.number,
};
Card.defaultProps = {
    textCenter: true
};