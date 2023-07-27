import { FC } from "react";
import { useTranslation } from "react-i18next";

import { classNames } from "shared/lib/classNames";
import { RoutePath } from "shared/config/routeConfig";
import { AppLink, EAppLinkTheme } from "shared/ui/AppLink";

import { INavbarProps } from "./types";
import styles from "./Navbar.module.scss";

const Navbar: FC<INavbarProps> = ({ className }) => {
  const { t } = useTranslation();

  return (
    <div className={classNames(styles.navbar, {}, [className])}>
      <AppLink theme={EAppLinkTheme.SECONDARY} to={RoutePath.main}>
        {t("main")}
      </AppLink>
      <AppLink theme={EAppLinkTheme.SECONDARY} to={RoutePath.about}>
        {t("about")}
      </AppLink>
    </div>
  );
};

export default Navbar;
