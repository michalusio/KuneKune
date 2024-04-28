import styles from './Banner.module.scss';
import React from 'react';

const Banner = () => {
    return (
        <div className={styles['hero-banner']}>
            <div className={styles['banner-content']}>
                <h1>Round And Fat</h1>
                <p>No, we are not fatshain them. Kune kune means exactly that in the lanaguage of maro.!</p>
                <button className={styles.button}>Find out why</button>
            </div>
        </div>
    );
}

export default Banner;
