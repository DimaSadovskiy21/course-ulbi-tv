import { FC } from "react";
import { useTranslation } from "react-i18next";

import { classNames } from "shared/lib/classNames";

import { IMainProps } from "./types";
import styles from "./Main.module.scss";

const Main: FC<IMainProps> = ({ className }) => {
  const { t } = useTranslation("main");

  return (
    <div className={classNames(styles.mainWrapper, {}, [className])}>
      {t("main page")}
    </div>
  );
};

export default Main;
