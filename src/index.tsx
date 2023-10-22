import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import { RouterProvider } from 'react-router-dom';
import routes from './routes/routes';
import { store } from './redux/store';
import './index.css';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={routes}/>
    <App />
    </Provider>
  </React.StrictMode>
);

reportWebVitals();
