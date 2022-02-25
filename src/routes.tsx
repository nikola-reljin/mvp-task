import { NotFoundPage, ReportsPage } from "./pages";
import UnderConstructionPage from "./pages/UnderConstructionPage";

export const routes: IRoute[] = [
  {
    element: <ReportsPage />,
    path: "/reports",
  },
  {
    element: <UnderConstructionPage title="Analysis" />,
    path: "/analysis",
  },
  {
    element: <UnderConstructionPage title="Payments" />,
    path: "/payments",
  },
  {
    element: <UnderConstructionPage title="Shortcutss" />,
    path: "/shortcuts",
  },
];

interface IRoute {
  element: JSX.Element;
  path: string;
}
