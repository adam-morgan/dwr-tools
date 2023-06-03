import React from 'react';
import PropTypes from 'prop-types';

import Collapsible from 'react-collapsible';

import styles from './styles/CollapsiblePanel.module.css';

const CollapsiblePanel = (props) => {
    const title = (
        <div className={styles.collapsibleTitleContents}>
            <span />
            {props.title}
        </div>
    );

    return (
        <Collapsible
            classParentString={styles.collapsible}
            className={props.className}
            openedClassName={props.className}
            triggerClassName={`${styles.collapsibleTitle} ${styles.collapsibleTitleClosed}`}
            triggerOpenedClassName={`${styles.collapsibleTitle} ${styles.collapsibleTitleOpened}`}
            contentInnerClassName={styles.collapsibleContent}
            transitionTime={250}
            trigger={title}
            open={props.open}
        >
            {props.children}
        </Collapsible>
    );
};

CollapsiblePanel.propTypes = {
    title: PropTypes.string,
    className: PropTypes.string,
    children: PropTypes.element,
    open: PropTypes.bool
};

export default CollapsiblePanel;
