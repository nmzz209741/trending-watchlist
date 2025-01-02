import { createBrowserRouter } from "react-router-dom";
import BaseLayout from "../components/layouts/BaseLayout";
import ErrorLayout from "../components/layouts/ErrorLayout";
import Home from "../components/pages/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <BaseLayout />,
    errorElement: <ErrorLayout />,
    children: [{ index: true, element: <Home /> }],
  },
]);
export default router;
