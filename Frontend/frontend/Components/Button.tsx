import React from 'react';
import styles from './../Moduels/Button.module.scss';

// MAGDALEAN WHY DOESN'T THIS WORK? PELASE EPXLAIN. 

const Button = ({ children, onClick }) => {
    return (
        <button className={styles.button} onClick={onClick}>
            {children}
        </button>
    );
}

export default Button;