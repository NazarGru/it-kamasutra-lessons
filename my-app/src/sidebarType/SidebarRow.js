import React , {Component} from 'react'
import ContentLeft from './ContentLeft';
import Sidebar from './Sidebar';

const SidebarRow = (props) =>{
  return(
    <div className='sidebar_row'>
      <Sidebar/>
      <ContentLeft  store={props.store}/>
    </div>

  )
  }
    
  export default SidebarRow;