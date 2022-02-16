import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import store from './redux/store'

let renderEntaireTree = (state) => {

  ReactDOM.render(
    <React.StrictMode>
      <BrowserRouter>
        <App state={state} dispatch={store.dispatch.bind(store)} store={store} />
      </BrowserRouter>

    </React.StrictMode>,
    document.getElementById('root')
  );
  reportWebVitals();
}

renderEntaireTree(store.getState());
store.subscribe(() => {
  let state = store.getState();
  renderEntaireTree(state);
})