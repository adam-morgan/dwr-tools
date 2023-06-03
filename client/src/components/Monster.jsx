import React from 'react';
import PropTypes from 'prop-types';

import styles from './styles/Monster.module.css';

const Monster = (props) => {
    const details = props.monsterDetails;

    let name;

    if (props.renderName) {
        name = details.name.split('_').map((s) => {
            return `${s.substring(0, 1).toUpperCase()}${s.substring(1).toLowerCase()}`;
        }).join(' ');
    }

    let img;

    if (props.renderImage) {
        img = (
            <img alt={details.name} src={`/api/sprites/monsters/${details.name.toLowerCase()}`} />
        );
    }

    let className = styles.monster;
    if (props.renderBorder) {
        className = `${className} ${styles.bordered}`;
    }

    return (
        <div className={className}>
            <div className={styles.monsterInner}>
                {img}
                {name}
            </div>
        </div>
    );
};

Monster.propTypes = {
    monsterDetails: PropTypes.shape({
        name: PropTypes.string
    }),
    renderName: PropTypes.bool,
    renderImage: PropTypes.bool,
    renderBorder: PropTypes.bool
};

Monster.defaultProps = {
    renderName: true,
    renderImage: true,
    renderBorder: true
};

export default Monster;
