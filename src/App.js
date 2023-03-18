import React from "react";
// eslint-disable-next-line no-unused-vars
import ErrorBoundary from "./ErrorBoundary";
import { createBrowserRouter, RouterProvider, useNavigate } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Hobbies from "./Hobbies";
import Experience from "./Experience";


const routes = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
  {
    path: "/hobbies",
    element: <Hobbies />,
  },
  {
    path: "/experience",
    element: <Experience />,
  },
];

const router = createBrowserRouter(routes);

const App = () => {


  return (
    <div>
      
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
