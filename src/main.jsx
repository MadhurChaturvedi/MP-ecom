import { createRoot } from "react-dom/client";
import "./index.css";
// import App from "./App.jsx";
import Nav from "./Components/Nav.jsx";
import Footer from "./Components/Footer.jsx";
import Body from "./page/Body.jsx";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router";
import About from "./page/About.jsx";
import Contact from "./page/Contact.jsx";
import Error from "./page/Error.jsx";

const AppLayout = () => {
  return (
    <div className="bg-white">
      <Nav />
      <Outlet />
      <Footer />
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/",
        element: <Body />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={appRouter} />
);
