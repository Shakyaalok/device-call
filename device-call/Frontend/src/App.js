import { Outlet,useLocation } from "react-router-dom";
import './assets/scss/style.scss';
import Header from "./containers/Header";
import { Provider } from "react-redux";
import store from './store';
import { useState, useEffect } from "react";

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './views/Css/toaster.css'

function App() {
  const location = useLocation();
  const [showNavbar, setShowNavbar] = useState(false);
  const user_info = localStorage.getItem('user_info')

  useEffect(() => {

    if (location.pathname !== '/login' && user_info) {
      setShowNavbar(true);
    } else {
      setShowNavbar(false);
    }
  }, [location.pathname]);


  return (
    <Provider store={store}>
      {showNavbar && <Header />}
      <Outlet />
      <ToastContainer
      position="top-right"
      autoClose={3000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss={true}
      draggable
      pauseOnHover={true}
      theme="colored"
       bodyClassName="toastBody"
      />
    </Provider>
  );
}

export default App;
