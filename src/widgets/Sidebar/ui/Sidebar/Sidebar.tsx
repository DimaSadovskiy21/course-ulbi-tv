import { FC, useState } from "react";
import { useTranslation } from "react-i18next";

import { classNames } from "shared/lib/classNames";
import { ThemeSwitcher } from "widgets/ThemeSwitcher";
import { ELangSwitcherTheme, LangSwitcher } from "widgets/LangSwitcher";

import { ISidebarProps } from "./types";
import styles from "./Sidebar.module.scss";

const Sidebar: FC<ISidebarProps> = ({ className }) => {
  const [collapsed, setCollapsed] = useState(true);
  const { t } = useTranslation();

  const onToggleHandler = () => setCollapsed((prev) => !prev);

  return (
    <div
      className={classNames(styles.sidebar, { [styles.collapsed]: collapsed }, [
        className,
      ])}
    >
      <button onClick={onToggleHandler}>{t("toggle")}</button>
      <div className={styles.swithersBlock}>
        <ThemeSwitcher />
        <LangSwitcher theme={ELangSwitcherTheme.SECONDARY} />
      </div>
    </div>
  );
};

export default Sidebar;
