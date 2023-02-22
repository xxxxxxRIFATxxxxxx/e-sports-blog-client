import "./App.css";

// React Router
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Home/Home";
import PostDetails from "./components/PostDetails/PostDetails";
import Category from "./components/Category/Category";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Advertise from "./components/Advertise/Advertise";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },

  {
    path: "/postDetails",
    element: <PostDetails />,
  },

  {
    path: "/category",
    element: <Category />,
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
    path: "/advertise",
    element: <Advertise />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
