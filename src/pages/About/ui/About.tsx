import { FC } from "react";
import { useTranslation } from "react-i18next";

import { classNames } from "shared/lib/classNames";

import { IAboutProps } from "./types";
import styles from "./About.module.scss";

const About: FC<IAboutProps> = ({ className }) => {
  const { t } = useTranslation("about");

  return (
    <div className={classNames(styles.aboutWrapper, {}, [className])}>
      {t("about us")}
    </div>
  );
};

export default About;
