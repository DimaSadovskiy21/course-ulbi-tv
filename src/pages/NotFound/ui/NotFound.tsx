import { FC } from "react";
import { useTranslation } from "react-i18next";

import { classNames } from "shared/lib/classNames";

import { INotFoundProps } from "./types";
import styles from "./NotFound.module.scss";

const NotFound: FC<INotFoundProps> = ({ className }) => {
  const { t } = useTranslation();

  return (
    <div className={classNames(styles.notFoundWrapper, {}, [className])}>
      {t("page not found")}
    </div>
  );
};

export default NotFound;
