import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import store from './redux/state';

let renderEntaireTree = (state) => {
  ReactDOM.render(
    <React.StrictMode>
      <BrowserRouter>
        <App state={store.getState()} />
      </BrowserRouter>

    </React.StrictMode>,
    document.getElementById('root')
  );
  reportWebVitals();
}

renderEntaireTree(store.getState());
store.subscribe(renderEntaireTree)