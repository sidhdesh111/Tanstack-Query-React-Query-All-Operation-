import { createBrowserRouter } from "react-router-dom";
import MainLayout from "./Component/MainLayout";
import Home from "./Component/Home";
import About from "./Component/About";
import Fetchhold from "./Component/Fetchhold";
import Fetchrq from "./Component/Fetchrq";
import FetchrqIndi from "./Component/FetchrqIndi";
import App from "./App";
import Pagination_with_control from "./Component/Pagination_with_control";
import Pagination_without_control from "./Component/Pagination_without_control";
import InfiniteScroll from "./Component/InfiniteScroll";
import Intersection_Observer from "./Component/Intersection_Observer.Jsx";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/about", element: <About /> },
      { path: "/Fetchhold", element: <Fetchhold /> },
      { path: "/fetchrq", element: <Fetchrq /> },
      { path: "/fetchrq/:id", element: <FetchrqIndi /> },
      { path: "/pagination_1", element: <Pagination_with_control /> },
      { path: "/pagination_2", element: <Pagination_without_control /> },
      { path: "/fetchrq/:id", element: <FetchrqIndi /> },
      { path: "/Infinite", element: <InfiniteScroll /> },
        { path: "/Intersection", element: <Intersection_Observer /> },
      { path: "/app", element: <App /> },
      { path: "/app", element: <App /> },
    ],
  },
]);

export default Router;
