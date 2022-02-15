import React , {Component} from 'react'
import { NavLink } from 'react-router-dom';

class NavBar extends Component {
    render(){
      return(
        <div>
            <NavLink className="navLink" exact  to="/pofile">
                Profile
            </NavLink>
            <br/>
            <NavLink className="navLink" exact to="/dialog">
            Mesages
            </NavLink>

 
         </div>
      )
    }
  }
    
  export default NavBar;