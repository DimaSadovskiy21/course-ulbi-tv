import "app/styles/index.scss";
import { useTheme } from "app/providers/ThemeProvider";
import { AppRouter } from "app/providers/router";
import { Navbar } from "widgets/Navbar";
import { Sidebar } from "widgets/Sidebar";
import { classNames } from "shared/lib/classNames";

const Layout = () => {
  const { theme } = useTheme();

  return (
    <div className={classNames("app", {}, [theme])}>
      <header>
        <Navbar />
      </header>
      <main className="main">
        <Sidebar />
        <AppRouter />
      </main>
    </div>
  );
};

export default Layout;
