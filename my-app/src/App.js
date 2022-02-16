import './app.scss';
import React, { Component } from 'react'
import Header from './layout/Header';
import Body from './layout/Body';
import Footer from './layout/Footer';

class App extends Component {
  render() {
    return (
      <div className="wraper">
      <Header />
      <Body data={this.props.data} />
      <Footer />
    </div>
    );
  }
}


export default App;
