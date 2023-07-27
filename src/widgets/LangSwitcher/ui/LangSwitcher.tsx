import { FC } from "react";
import { useTranslation } from "react-i18next";

import { Button, EThemeButton } from "shared/ui/Button";
import { classNames } from "shared/lib/classNames";

import { ELangSwitcherTheme, ILangSwitcherProps } from "./types";
import styles from "./LangSwitcher.module.scss";

const LangSwitcher: FC<ILangSwitcherProps> = ({
  className,
  theme = ELangSwitcherTheme.PRIMARY,
}) => {
  const { t, i18n } = useTranslation();

  const handleChangeLanguage = () =>
    i18n.changeLanguage(i18n.language === "ru" ? "en" : "ru");

  return (
    <Button
      className={classNames(styles.langSwitcher, {}, [
        className,
        styles[theme],
      ])}
      theme={EThemeButton.CLEAR}
      onClick={handleChangeLanguage}
    >
      {t("language")}
    </Button>
  );
};

export default LangSwitcher;
