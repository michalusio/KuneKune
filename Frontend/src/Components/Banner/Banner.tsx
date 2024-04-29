import styles from './Banner.module.scss';
import Button from '../Button/Button';
// import React from 'react';

const Banner = () => {
    return (
        <div className={styles.containerHoldingImageAsBackground}>
        <div className={styles.containerGivingTheBackgroundThisBlackShade}>
            <div className={styles.containerKeepingH1H2andButtonComponent}>
                <h1>Round And Fat</h1>
                <p>No, we are not fatshain them. Kune kune means exactly that in the lanaguage of maro!!!</p>
                <Button onClick={() => console.log("Button clicked")}>Find out why</Button>
                <p> Join live feed </p>
            </div>
        </div>
        </div>
    );
}

export default Banner;
