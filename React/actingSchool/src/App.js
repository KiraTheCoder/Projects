import "./App.css";
import { createBrowserRouter, Outlet } from "react-router-dom";
import { FaMoon } from "react-icons/fa";
import { FiSun } from "react-icons/fi";
import Home from "./components/Home/Home";
import Contact from "./components/Contact/Contact";
import About from "./components/About/About";
import Blog from "./components/Blog/Blog";
import Error from "./components/Error/Error";
import Navbar from "./components/header/Navbar";
import Ourclients from "./components/Ourclients/Ourclients";
import { useState } from "react";
function App() {
  const [color, setColor] = useState("transparent");

  function myfun() {
    if (color === "transparent") {
      setColor("#0f0f10");
    } else {
      setColor("transparent");
    }
  }

  return (
    <>
      <div className="p-0 m-0 " style={{ background: `${color}` }}>
        <button className=" absolute z-30 top-10 left-[95%] " onClick={myfun}>
          {color==="transparent" ? <FaMoon className="text-xl"/> :<FiSun className="text-yellow-400 text-xl"/>
          }
        </button>
        <Navbar />
        <Outlet />
        {/* <Footer/> */}
        {/* <Home/> */}
        {/* <footer/> */}
      </div>
    </>
  );
}

export const route = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/blog",
        element: <Blog />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/ourclients",
        element: <Ourclients />,
      },
    ],
    errorElement: <Error />,
  },
]);
export default App;
