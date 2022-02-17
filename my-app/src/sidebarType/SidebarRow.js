import React , {Component} from 'react'
import ContentLeft from './ContentLeft';
import Sidebar from './Sidebar';

const SidebarRow = (props) =>{
  return(
    <div className='sidebar_row'>
      <Sidebar/>
      <ContentLeft state={props.state} dispatch={props.dispatch}/>
    </div>

  )
  }
    
  export default SidebarRow;