import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import styles from './styles/Card.module.css';

const Card = (props) => {
    let imgElement;
    if (props.sprite) {
        let url = `/api/sprites/${props.sprite.type}/${props.sprite.id}`;
        url += '?height=150';

        imgElement = (
            <img className={styles.image} alt={props.sprite.id} src={url} />
        );
    }

    let className = styles.card;
    if (props.link) {
        className = `${className} ${styles.withLink}`;
    }

    if (props.className) {
        className = `${className} ${props.className}`;
    }

    let ele = (
        <div className={className}>
            {imgElement}
            {props.title ?
                (
                    <header className={styles.title}>
                        {props.title}
                    </header>
                ) :
                null}
            {props.description ?
                (
                    <header className={styles.description}>
                        {props.description}
                    </header>
                ) :
                null}
        </div>
    );

    if (props.link) {
        ele = (
            <Link to={props.link}>
                {ele}
            </Link>
        );
    }

    return ele;
};

Card.propTypes = {
    className: PropTypes.string,
    sprite: PropTypes.shape({
        type: PropTypes.oneOf(['monsters']),
        id: PropTypes.string
    }),
    title: PropTypes.string,
    description: PropTypes.string,
    link: PropTypes.string
};

export default Card;
