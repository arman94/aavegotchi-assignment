import { FC, ButtonHTMLAttributes } from 'react';

import styles from '../styles/button.module.css';

type ColorVariants = 'purple' | 'pink' | 'cyan';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  color?: ColorVariants;
}

export const Button: FC<ButtonProps> = ({ color = 'cyan', ...props }) => {
  return (
    <button
      {...props}
      className={`${styles.button} ${styles[`button__${color}`]}`}
    >
      <div>{props.children}</div>
    </button>
  );
};
