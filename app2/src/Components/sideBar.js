import React from 'react';
import classes from './sideBar.css';
import {connect} from 'react-redux';
const sideBar=(props)=>{
  console.log('props are ',props.userData.firstName)
  return(<div className={classes.sideBar}>
      
    <p> Welcome, {props.user.firstName} {props.user.lastName}</p>
  <img 
  className={classes.userImg} 
  src='https://image.freepik.com/free-icon/user-image-with-black-background_318-34564.jpg' 
  alt='userImage'/>

  </div>)

  }  
;

const mapStateToProps=(state)=>{
  console.log("state is ",state);
 return{
       user:state.user,
       
    }
}
export default connect(mapStateToProps)(sideBar);

