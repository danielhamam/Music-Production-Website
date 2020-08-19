import React from 'react';
import ReactDOM from 'react-dom';
import './css/project_layout.css';
import './css/project_style.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import App from './App';

// redux setup
import { Provider } from "react-redux";
import configureStore from "./store";
const store = configureStore();

ReactDOM.render(
    <Provider store={store}>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </Provider>,
    document.getElementById('root')
  );
