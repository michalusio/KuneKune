import { ReactNode } from 'react';
import styles from './Button.module.scss';

const Button = ({ children, onClick, extraClass }: { children: ReactNode, onClick: () => void, extraClass?: string }) => {
    return (
        <button className={styles.button + " " + extraClass} onClick={onClick}>
            {children}
        </button>
    );
}

export default Button;