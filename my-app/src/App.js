import './app.scss';
import React , {Component} from 'react'
import Header from './layout/Header';
import Body from './layout/Body';
import Footer from './layout/Footer';
import { BrowserRouter } from 'react-router-dom';

class App extends Component {
  render(){
    return(
      <BrowserRouter>
          <div className="wraper">
              <Header/>
              <Body/>
              <Footer/>
          </div>
      </BrowserRouter>

    )
  }
}
  
export default App;
