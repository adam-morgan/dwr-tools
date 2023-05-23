import React from 'react';
import PropTypes from 'prop-types';

import styles from './styles/Button.module.css';

const Button = (props) => {
    return (
        <div
            className={styles.button}
            onClick={() => {
                props.onAction();
            }}
        >
            {props.text}
        </div>
    );
};

Button.propTypes = {
    text: PropTypes.string,
    onAction: PropTypes.func
};

export default Button;
