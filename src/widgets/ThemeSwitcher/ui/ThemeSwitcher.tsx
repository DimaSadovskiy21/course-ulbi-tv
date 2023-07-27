import { FC } from "react";

import { Theme, useTheme } from "app/providers/ThemeProvider";
import { Button, EThemeButton } from "shared/ui/Button";
import { classNames } from "shared/lib/classNames";
import LightIcon from "shared/assets/icons/theme-light.svg";
import DarkIcon from "shared/assets/icons/theme-dark.svg";

import { IThemeSwitcherProps } from "./types";

const ThemeSwitcher: FC<IThemeSwitcherProps> = ({ className }) => {
  const { theme, toggleTheme } = useTheme();

  return (
    <Button
      onClick={toggleTheme}
      className={classNames("", {}, [className])}
      theme={EThemeButton.CLEAR}
    >
      {theme === Theme.DARK ? <DarkIcon /> : <LightIcon />}
    </Button>
  );
};

export default ThemeSwitcher;
