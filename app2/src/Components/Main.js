import React, { Component } from 'react';
import classes from  './main.css';
import {connect} from 'react-redux';

class Main extends Component{
    state={
        makeEditable:false,
        form:{
           ...this.props.user
        }
    }

    inputHandler=(attr, event)=>{
        console.log(attr + '== '+event.target.value)
        const updateduser =Object.assign({},this.state.form)
        updateduser[attr]=event.target.value;
        this.setState({
          form:updateduser
        })
    }
  

    editHandler=()=>{

        this.setState({makeEditable:!this.state.makeEditable})
    }
    render(){
        return(
            <div>
                 <h3> Users Information</h3>
                {
                    this.state.makeEditable ? 
                    (<div>
                         <h2> Please update your info here</h2>    
                       <p>  First Name : <input type='text' className={classes.TextInput} value={this.state.form.firstName}  onChange={this.inputHandler.bind(this,'firstName')}/> </p>
                       <p>  Last Name :<input type='text' className={classes.TextInput} value={this.state.form.lastName} onChange={this.inputHandler.bind(this,'lastName')} /> </p>
                       <p>    Email :<input type='text' className={classes.TextInput} value={this.state.form.email}  onChange={this.inputHandler.bind(this,'email')}/></p>
                       <p>   Address : <input type='text' className={classes.TextInput} value={this.state.form.address} onChange={this.inputHandler.bind(this,'address')}/> </p>
                        <button className={classes.button} onClick={()=>this.props.UpdateInfoHandler(this.state.form) } > Update</button>         
                        <button className={classes.button} onClick={this.editHandler}> View info</button>         
                        
                    </div>)
                    :
                    (<div className={classes.info}>
                      <p>  First Name : {this.props.user.firstName}  </p>
                      <p> Last Name : {this.props.user.lastName} </p>
                      <p>  Email : {this.props.user.email} </p>
                      <p> Address : {this.props.user.address} </p>
                        <button className={classes.button} onClick={this.editHandler}> Edit</button>      

                    </div>)
                }
          
         
            </div>
        );
    }
}
const mapStateToProps= (state) =>{
    return{
    user:state.user
    }
}

const mapDispatchtoProps=(dispatch)=>{
    return{
        UpdateInfoHandler:(formObject)=> dispatch({type:'REGISTER',formObject:formObject}),
    }
}
export default connect(mapStateToProps,mapDispatchtoProps)(Main);