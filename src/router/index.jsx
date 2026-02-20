import { createBrowserRouter } from "react-router";
import { lazy, Suspense } from "react";
import Layout from "../components/Layout";

const Hero = lazy(() => import("../pages/Hero"));
const About = lazy(() => import("../pages/About"));
const Skills = lazy(() => import("../pages/Skills"));
const Portfolio = lazy(() => import("../pages/Portfolio"));
const Contact = lazy(() => import("../pages/Contact"));
const Services = lazy(() => import("../pages/Services"));

const withSuspense = (Component) => (
    <Suspense fallback={<div>Loading...</div>}>
      <Component />
    </Suspense>
);

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children : [
      {
        path : "/",
        element : withSuspense(Hero),
      },
      {
        path : "/about",
        element : withSuspense(About)
      },
      {
        path : "/skills",
        element : withSuspense(Skills)
      },
      {
        path : "/services",
        element : withSuspense(Services)
      },
      {
        path : "/portfolio",
        element : withSuspense(Portfolio)
      },
      {
        path : "/contact",
        element : withSuspense(Contact)
      }
    ]
  },
]);
export default router;

