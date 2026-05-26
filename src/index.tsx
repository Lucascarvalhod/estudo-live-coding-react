import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from "react-router-dom"
import { Provider } from 'react-redux';
import { store } from './store';
import { ProductsProviderWrapper } from "./products-provider-wrapper";

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
 <BrowserRouter>
  <React.StrictMode>
    <Provider store={store}>
      <ProductsProviderWrapper>
        <App />
      </ProductsProviderWrapper>
    </Provider>
  </React.StrictMode>
 </BrowserRouter>
);

reportWebVitals();
