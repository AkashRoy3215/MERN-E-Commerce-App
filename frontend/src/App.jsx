import "./App.css";
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
    path: "/Signup",
    element: <SignUpPage />,
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
