// import styles from './../Moduels/Banner.module.scss';
import styles from './../Moduels/Button.module.scss'

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
