import './app.scss';
import React, { Component } from 'react'
import Header from './layout/Header';
import Body from './layout/Body';
import Footer from './layout/Footer';

const App = (props) => {

  return (
    <div className="wraper">
    <Header />
    <Body state={props.state} dispatch={props.dispatch} />
    <Footer />
  </div>
  );

}


export default App;
