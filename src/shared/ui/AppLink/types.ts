import { LinkProps } from "react-router-dom";

export enum EAppLinkTheme {
  PRIMARY = "primary",
  SECONDARY = "secondary",
}

export interface IAppLinkProps extends LinkProps {
  className?: string;
  theme?: EAppLinkTheme;
}
