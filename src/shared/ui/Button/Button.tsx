import { FC } from "react";

import { classNames } from "shared/lib/classNames";

import { IButtonProps } from "./types";
import styles from "./Button.module.scss";

const Button: FC<IButtonProps> = ({ className, theme, children, ...otherProps }) => (
  <button className={classNames(styles.button, {}, [className, styles[theme]])} {...otherProps}>{children}</button>
);

export default Button;
