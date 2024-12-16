
import React from 'react';
import ReactDOM from 'react-dom';
import { RouterProvider } from 'react-router-dom';
import router from './routes'
import { icons } from './assets/icons'
React.icons = icons


// const root = createRoot(document.getElementById('root'));
ReactDOM.render(
  <RouterProvider router={router}/>,
  document.getElementById('root')
);



// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA

