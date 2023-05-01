import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Register from "./pages/register/Register";
import Login from "./pages/login/Login";

function App() {
  const router = createBrowserRouter([
    {
      path: 'login',
      element: <Login></Login>
    },
    {
      path: 'register',
      element: <Register></Register>
    }
  ]);
  
  return (
    <RouterProvider router={router} />
  );
}

export default App;
