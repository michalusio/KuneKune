import { ReactNode } from 'react';
import styles from './Button.module.scss';
// import { BUTTON_SIZES, BUTTON_VARIANTS } from './enums';

// interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> 
// {
// variant?: BUTTON_VARIANTS,
// size?: BUTTON_SIZES
// }

// const Button = ({ children,
//      variant = BUTTON_VARIANTS.Primary, 
//      size = BUTTON_SIZES.Small
//      }: ButtonProps ) => {

//     return (
//         <button className={`${styles.btn} ${styles[variant]} ${styles[size]}`}>
//             {children}
//         </button>
//     );
// }

const Button = ({ children, onClick, extraClass }: { children: ReactNode, onClick: () => void, extraClass?: string }) => {
    return (
        <button className={styles.button + " " + extraClass} onClick={onClick}>
            {children}
        </button>
    );
}

export default Button;