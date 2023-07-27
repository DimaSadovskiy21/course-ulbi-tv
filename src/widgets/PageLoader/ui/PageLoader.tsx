import { FC } from "react";

import { classNames } from "shared/lib/classNames";
import { Loader } from "shared/ui/Loader";

import { IPageLoaderProps } from "./types";
import styles from "./PageLoader.module.scss";

const PageLoader: FC<IPageLoaderProps> = ({ className }) => {
  return (
    <div className={classNames(styles.pageLoaderWrapper, {}, [className])}>
      <Loader />
    </div>
  );
};

export default PageLoader;
