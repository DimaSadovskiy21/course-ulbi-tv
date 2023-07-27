import { ButtonHTMLAttributes } from "react";

export enum EThemeButton {
  CLEAR = "clear",
}

export interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  theme?: EThemeButton;
}
