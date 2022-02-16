import React , {Component} from 'react'
import SidebarRow from './../sidebarType/SidebarRow';

const Body = (props) => {
  return(
    <div className='container white'>
       <SidebarRow s={props.s} />
     </div>
  )
  }
    
  export default Body;