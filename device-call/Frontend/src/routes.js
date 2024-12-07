import { createBrowserRouter } from "react-router-dom";
import Home from './views/Home';
import K12 from './views/K12';
import App from './App';
import HigherEd from "./views/HigherEd";
import UnderMaintaince from "./views/UnderMaintaince";
import ExpandedCard from "./views/ExapandedCard";
import Modals from "./views/Modals";
import Login from "./views/auth/login/Login";
import ProtectedRoute from './routeprotection/routeProtection'

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
        element:  <ProtectedRoute element={<Home />} /> 
      },
      {
        path: '/k12',
        element: <ProtectedRoute element={<K12 />} />
      },
      {
        path: '/higher-ed',
        element: <ProtectedRoute element={<HigherEd />} />
      },
      {
        path: '/enterprises',
        element: <ProtectedRoute element={<UnderMaintaince />} />
      },
      {
        path: '/virtual-tour',
        element: <ProtectedRoute element={<UnderMaintaince />} />
      },
      {
        path: ':particularComponent/:expandedCard',
        element: <ProtectedRoute element={<ExpandedCard />} />
      },
      {
        path: ':r1/:r2/videoplayer/:videoUrl',
        element: <ProtectedRoute element={<Modals />} />
      }
    ]
  }
]);

export default router;


