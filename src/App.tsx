import { Navigate, Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import LeftBar from "./components/leftbar/LeftBar";
import NavBar from "./components/navbar/NavBar";
import RightBar from "./components/rightbar/RightBar";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Profile from "./pages/profile/Profile";
import Register from "./pages/register/Register";

function App() {
  const isLoggedIn = true;

  const Layout = () => {
    return (
      <div className="layout">
        <NavBar></NavBar>
        <div className="page-content">
          <LeftBar></LeftBar>
          <Outlet></Outlet>
          <RightBar></RightBar>
        </div>
      </div>
    );
  }

  const ProtectedRoute = ({children}: any) => {
    if (!isLoggedIn) return <Navigate to={'/login'}></Navigate>
     
    return children;
  }

  const router = createBrowserRouter([
    {
      path: '',
      element: <ProtectedRoute>
          <Layout></Layout>
        </ProtectedRoute>,
      children: [
        {
          path: '',
          element: <Home></Home>
        },
        {
          path: 'profile/:id',
          element: <Profile></Profile>
        }
      ]
    },
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
