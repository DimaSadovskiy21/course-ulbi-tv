import { RouteProps } from "react-router-dom";

import { Main } from "pages/Main";
import { About } from "pages/About";
import { NotFound } from "pages/NotFound";

export enum EAppRoutes {
  MAIN = "main",
  ABOUT = "about",
  NOT_FOUND = "not_found",
}

export const RoutePath: Record<EAppRoutes, string> = {
  [EAppRoutes.MAIN]: "/",
  [EAppRoutes.ABOUT]: "/about",
  [EAppRoutes.NOT_FOUND]: "*",
};

export const routeConfig: Record<EAppRoutes, RouteProps> = {
  [EAppRoutes.MAIN]: {
    path: RoutePath.main,
    element: <Main />,
  },
  [EAppRoutes.ABOUT]: {
    path: RoutePath.about,
    element: <About />,
  },
  [EAppRoutes.NOT_FOUND]: {
    path: RoutePath.not_found,
    element: <NotFound />,
  },
};
