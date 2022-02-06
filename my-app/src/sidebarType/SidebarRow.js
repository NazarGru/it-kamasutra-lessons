import React , {Component} from 'react'
import ContentLeft from './ContentLeft';
import Sidebar from './Sidebar';

class SidebarRow extends Component {
    render(){
      return(
        <div className='sidebar_row'>
          <Sidebar/>
          <ContentLeft/>
        </div>
    
      )
    }
  }
    
  export default SidebarRow;