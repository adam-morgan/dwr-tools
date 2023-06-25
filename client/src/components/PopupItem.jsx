import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { v4 as uuid } from 'uuid';

import { usePopper } from 'react-popper';

import popupStyles from './styles/PopupItem.module.css';

const PopupItem = (props) => {
    const [showPopup, setShowPopup] = useState(null);
    const [referenceElement, setReferenceElement] = useState(null);
    const [popperElement, setPopperElement] = useState(null);
    const [arrowElement, setArrowElement] = useState(null);
    const { styles, attributes } = usePopper(referenceElement, popperElement, {
        modifiers: [{ name: 'arrow', options: { element: arrowElement } }]
    });

    useEffect(() => {
        const handleClickOutside = (e) => {
            if (e.popupId !== showPopup && popperElement?.contains && !popperElement.contains(e.target)) {
                setShowPopup(null);
            }
        };

        /* global document */
        document.addEventListener('click', handleClickOutside);
        return () => document.removeEventListener('click', handleClickOutside);
    }, [popperElement]);

    return (
        <>
            <span
                ref={setReferenceElement}
                onClick={(e) => {
                    e.nativeEvent.popupId = uuid();
                    setShowPopup(e.nativeEvent.popupId);
                }}
            >
                {props.children}
            </span>
            {showPopup ?
                (
                    <div
                        ref={setPopperElement}
                        className={popupStyles.popup}
                        style={styles.popper}
                        {...attributes.popper}
                    >
                        <div className={popupStyles.content}>
                            {props.renderPopup()}
                        </div>
                        <div
                            ref={setArrowElement}
                            className={popupStyles.arrow}
                            style={styles.arrow}
                            {...attributes.arrow}
                        />
                        <div
                            className={popupStyles.close}
                            onClick={() => setShowPopup(null)}
                        >
                            ×
                        </div>
                    </div>
                ) :
                null}
        </>
    );
};

PopupItem.propTypes = {
    renderPopup: PropTypes.func,
    children: PropTypes.element
};

export default PopupItem;
