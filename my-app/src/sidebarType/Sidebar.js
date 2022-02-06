import React , {Component} from 'react'
import NavBar from '../components/navBar/NavBar';

class Sidebar extends Component {
    render(){
      return(
        <div className='sidebar-col'>
           <NavBar/>
 
         </div>
      )
    }
  }
    
  export default Sidebar;