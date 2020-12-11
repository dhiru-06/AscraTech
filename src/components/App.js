import React from 'react';
import './App.css';
import {Link} from 'react-router-dom';
import {Button} from 'react-bootstrap';
import login from '../images/login.png';

const axios = require('axios');

class App extends React.Component {
   constructor(props) {
      super(props);
      
      this.state = {
         data: '',
         password:''
      }
      this.updateState = this.updateState.bind(this);
      this.updatePass = this.updatePass.bind(this);
      
   };
   updateState(e) {
       console.log(e.target.value);
      this.setState({data: e.target.value});
     
   }
   updatePass(e){
        console.log(e.target.value);
       this.setState({password: e.target.value});
   }

   async postData(e){
    e.preventDefault();
    const headers = { 
      'Authorization': 'Basic Ymhhc2thcjoxMjM0NTY=',
      'Access-Control-Allow-Origin' : '*',
      'Access-Control-Allow-Methods' : 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
    };
    axios.post('http://nikhil.faberlounge.com/users/v1/login_v1/store', JSON.stringify({
      'login[username]': 'nikhilchavan3259@gmail.com',
      'password': 'password'
    }) , { 
      headers
  })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
}
   render() {
      return (
          <div class="container"> 
            <img src={login} className='login' alt='cover'></img>
              <form>
              <div>
                 
                 <label for="uname"><b>Username</b></label>
                 <input type = "email" value = {this.state.data} 
                 onChange = { () => this.updateState} />
                 <br></br>
 
 
                 <label for="uname"><b>Password</b></label>
                 <input type = "password" value = {this.state.password} 
                  onChange = {() => this.updatePass} />  
                  <br></br>     

                    <button type="submit" onClick={ (e) => this.postData(e) }>Login</button>

                    <h2>Create account</h2> 
                    <Link to="/Registration"><Button type="button" className="btn">Register</Button></Link>
             </div>
              </form>
               
       </div>
        
      );
   }
}
export default App;