import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import Contact from "./components/Contact";
import RestaurentMenu from "./components/RestaurentMenu";
import { createBrowserRouter, RouterProvider,Outlet} from "react-router-dom";
import { Provider } from "react-redux";
import appStore from "./Utils/appStore";
import CartPage from "./components/cartPage";


// const About = lazy(() => import("./components/About"));

const AppLayout = () => {
  return (
    <Provider store={appStore}>
    <div className="app">
      <Header />
      <Outlet />
    </div>
    </Provider>
  );
};

const approuter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
      path: "/restaurents/:resId",
      element: <RestaurentMenu />,
      },
      {
        path: "/cartPage",
        element: <CartPage />,
        }
    ]
  }
]
)

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={approuter}/>);
