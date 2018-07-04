import React, { Component } from 'react';
import classes from  './App.css';
import SideBar from './Components/sideBar';
import {connect} from 'react-redux';
import Main from './Components/Main'

class App extends Component {
  state={
    form:{
      firstName:'',
      lastName:'',
      email:'',
      address:''
    },
    registered:false
  }
  inputHandler=(attr, event)=>{
      console.log(attr + '== '+event.target.value)
      const updateduser =Object.assign({},this.state.form)
      updateduser[attr]=event.target.value;
      this.setState({
        form:updateduser
      })
  }

  render() {
    return (
      <div className="App">
        <div className={classes.header}> <h1>Welcome</h1></div>
        {
          this.props.registeredFlag===false ? (
            <div className={classes.main}>
            <h2> No user has Registered</h2> 
             <form>
               <input className={classes.TextInput} type='text'  onChange={this.inputHandler.bind(this,'firstName')} placeholder='First Name'/>
               <br/>
               <input className={classes.TextInput} type='text'  onChange={this.inputHandler.bind(this,'lastName')} placeholder='Last Name'/>
               <br/>
               <input className={classes.TextInput} type='text'  onChange={this.inputHandler.bind(this,'email')} placeholder='Email'/>
               <br/>
               <input className={classes.TextInput} type='text'  onChange={this.inputHandler.bind(this,'address')} placeholder='Address'/>
                <br/>
                <input className={classes.button} type='submit' value='Register' onClick={()=>this.props.updateUserinfo(this.state.form)}/>
             </form>
            </div>
          ):(
            <div>
            <div className={classes.sidebar}>
             <SideBar userData={this.state.form}/>
           </div>

           <div className={classes.main}> 

            <Main/ >
        
             </div>
             </div>
          )
        }
         
      </div>
    );
  }
}

const mapStateToProps=(state)=>{
  console.log("state is ",state);
 return{
       user:state.user,
       registeredFlag:state.registered
    }
}
const mapDispatchToProps=(dispatch)=>{
   return{
    updateUserinfo: (formObject) => dispatch({type:'REGISTER',formObject:formObject}),
   }
}

export default connect(mapStateToProps,mapDispatchToProps)(App)
