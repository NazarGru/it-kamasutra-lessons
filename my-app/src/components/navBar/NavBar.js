import React , {Component} from 'react'
import { NavLink } from 'react-router-dom';

class NavBar extends Component {
    render(){
      return(
        <div>
            <NavLink className="navLink" to="/pofile">
                Profile
            </NavLink>
            <br/>
            <NavLink className="navLink" to="/dialog">
            Mesages
            </NavLink>

 
         </div>
      )
    }
  }
    
  export default NavBar;