import React,{Component} from 'react'
import { Route,Link } from 'react-router-dom'
import User from './User';
class Users extends Component{

    state={
        users:[
          {
            name:'A',friends:['B','C']
          },
          {
            name:'B',friends:['D','A']
          },
          {
            name:'C',friends:['A','B','D']
          },
          {
            name:'D',friends:['A']
          }
        ]
    }
 
render(){
    return(
        <div>
      
         
        <Route  strict path='/' render={() => <User data={this.state.users[0]} />}></Route>
        <Route  path='/A' render={() => <User data={this.state.users[0]} />}></Route>
        <Route  path='/B' render={() => <User data={this.state.users[1]} />}></Route>
        <Route  path='/C' render={() => <User data={this.state.users[2]} />}></Route>
        <Route  path='/D' render={() => <User data={this.state.users[3]} />}></Route>
        
        </div>
        
    );
}
}


export default Users;

  