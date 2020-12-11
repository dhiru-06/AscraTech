import React from 'react';
import './Reg.css';
import register from '../images/register.png';

class Reg extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            Username: '',
            data: '',
            password: ''
        }
        this.updateUsername = this.updateUsername.bind(this);
        this.updateState = this.updateState.bind(this);
        this.updatePass = this.updatePass.bind(this);

    };
    updateUsername(e) {

        this.setState({ Username: e.target.value });
    }
    updateState(e) {
        console.log(e.target.value);
        this.setState({ data: e.target.value });
    }
    updatePass(e) {
        console.log(e.target.value);
        this.setState({ password: e.target.value });

    }
    

    render() {
        return (
            <div className="container">
                <img src={register} className='register' alt='regis'></img>
                <form>
                    <div>

                        <label for="uname"><b>Username</b></label>
                        <input type="text" value={this.state.Username}
                            onChange={this.updateUsername} />
                        <br></br>

                        <label for="email"><b>E-mail</b></label>
                        <input type="email" value={this.state.Username}
                            onChange={this.updateState} />
                        <br></br>

                        <label for="password"><b>Password</b></label>
                        <input type="password" value={this.state.password}
                            onChange={this.updatePass} />
                        <br></br>

                        <button type="submit" >Register</button>
                    </div>
                </form>

            </div>

        );
    }
}
export default Reg;