import React, { Component } from 'react'
import { getProfile } from './UserFunctions'

export default class Profile extends Component {

    constructor(){
        super()
        this.state = {
            name : "",
            email: ""
        }
    }

    componentDidMount(){
        if (localStorage.getItem('usertoken')) {
            getProfile().then(res => {
                if (res !== undefined && res !== "") {
                    this.setState({
                        name: res.customer.name ? res.customer.name: '',
                        email: res.customer.email ? res.customer.email: ''
                    })
                }else{
                    this.props.history.push('/login')
                }
            })
        }else{
            this.props.history.push('/login')
        }
    }

    render() {
        return (
            <div className="container">
                <div className="jumbotron mt-5">
                    <div className="col-sm-4 mx-auto">
                        <h1 className="text-center">
                            Profile
                        </h1>
                    </div>
                    <table className="table col-md-4 mx-auto">
                        <tbody>
                            <tr>
                                <td>Name</td>
                                <td>{this.state.name}</td>
                            </tr>
                            <tr>
                                <td>Email</td>
                                <td>{this.state.email}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}
