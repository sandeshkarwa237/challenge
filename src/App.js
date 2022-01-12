import { BrowserRouter, useRoutes } from "react-router-dom";

import Landing from "./Landing/landing";

const Routes = () =>
  useRoutes([
    {
      path: "/",
      element: <Landing />,
      index: true,
    },
  ]);

const AppWrapper = () => (
  <BrowserRouter>
    <Routes />
  </BrowserRouter>
);

export default AppWrapper;
