import React , {Component} from 'react'
import SidebarRow from './../sidebarType/SidebarRow';

const Body = (props) => {
  return(
    <div className='container white'>
       <SidebarRow state={props.state} dispatch={props.dispatch} />
     </div>
  )
  }
    
  export default Body;