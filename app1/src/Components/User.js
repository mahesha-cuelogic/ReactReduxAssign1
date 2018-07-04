import React from 'react';
import { Route,Link } from 'react-router-dom'
const user=(props)=> (
<div>
    
     <p>name : {props.data.name}</p>
        <p>Friends : {props.data.friends.map(fname=>{
          return  <li><Link to={`/${fname}`} className="link">{fname}</Link></li>;
       })}</p> 
</div>

)

export default user;