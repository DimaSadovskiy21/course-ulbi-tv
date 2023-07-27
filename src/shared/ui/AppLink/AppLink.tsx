import { FC } from "react";
import { Link } from "react-router-dom";

import { classNames } from "shared/lib/classNames";

import { EAppLinkTheme, IAppLinkProps } from "./types";
import styles from "./AppLink.module.scss";

const AppLink: FC<IAppLinkProps> = ({
  to,
  children,
  className,
  theme = EAppLinkTheme.PRIMARY,
  ...otherProps
}) => (
  <Link
    className={classNames(styles.appLink, {}, [className, styles[theme]])}
    to={to}
    {...otherProps}
  >
    {children}
  </Link>
);

export default AppLink;
