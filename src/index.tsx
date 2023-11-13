import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { store } from './redux/store';
import { Provider } from 'react-redux'; 
import {RouterProvider,   createBrowserRouter} from 'react-router-dom';


const router=createBrowserRouter([{path:'/', element: <div>Home</div>}])


ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router}/>
    </Provider>
  </React.StrictMode>
);


