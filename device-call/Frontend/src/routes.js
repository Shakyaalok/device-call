import { createBrowserRouter } from "react-router-dom";
import Home from './views/Home';
// import K12 from './views/K12';
import App from './App';
import Login from "./views/auth/login/Login";
import ProtectedRoute from './routeprotection/routeProtection';
import Launch from "./Pages/Launch";
import DashBoard from "./Pages/DashBoard";


const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/login',
        element: <Login />
      },
      {
        path: '',
        element:  <ProtectedRoute element={<DashBoard />} /> 
      },
      {
        path: '/devices',
        element:  <ProtectedRoute element={<Home />} /> 
      },
      {
        path: '/stream',
        element:  <ProtectedRoute element={<Launch />} /> 
      },
    ]
  }
]);

export default router;


