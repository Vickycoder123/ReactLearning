import React from "react";


class SuccessComponent extends React.Component{
    render(){
        return(
            <div>
                <h2>Login Success ..</h2>
            </div>
        )
    }
}


class ErrorComponent extends React.Component{
    render(){
        return(
            <div>
                <h2>Error  occurred...</h2>
            </div>
        )

    }
    
}

export default class LifeCycleDemo extends React.Component{
    constructor(props){
        super(props);
        this.setState = {
            userDetails: {
                UserName : 'amey',
                Password : 'pass@12323'
            },
            formDetails: {
                UserName : '',
                Password : ''
            },
            result: ''
            
        }
        this.handleUserName = this.handleUserName.bind(this);
        this.handlePassword = this.handlePassword.bind(this);
        
    }
    

    handleUserName(e){
        this.setState({
            formDetails:{
                UserName: e.target.value,
                Password: this.state.formDetails.Password
            }
        })
    }

    handlePassword(e){
        this.setState({
            formDetails: {
                UserName: this.state.formDetails.UserName,
                Password: e.target.value
            }
        })
    }

    handle


    render(){
        return(
            <div className="container-fluid">
                <dl>
                    <dt>User Name</dt>
                    <dd><input onChange={this.handleUserName} type="text" /></dd>
                    <dt>Password</dt>
                    <dd><input onChange={this.handlePassword} type="password" /></dd>
                </dl>
                <button>Login</button>
                <div>
                    {
                        this.state.result
                    }
                </div>
            </div>
        )
    }
}