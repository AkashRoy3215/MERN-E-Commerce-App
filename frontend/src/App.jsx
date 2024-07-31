import "./App.css";
import CartPage from "./pages/CartPage";
import Home from "./pages/Home";
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/signup",
    element: <SignUpPage />,
  },
  {
    path: "/cart",
    element: <CartPage />,
  },
]);

const App = () => {
  return (
    <div>
      <RouterProvider router={router} />
      {/* <SignUpPage /> */}
      {/* <LoginPage/> */}
      {/* <Home/> */}
    </div>
  );
};

export default App;
