import React from 'react';
import * as loginActions from './../../actions/login.action';
import { connect } from 'react-redux';
import { NotificationContainer, NotificationManager } from 'react-notifications';

class Login extends React.Component {
    state = {};

    createNotification = (type, message) => {
        NotificationManager[type](message);
    }

    onSubmit = e => {
        e.preventDefault();
        const { username, password } = this.state;
        const bodyParams = {
            username,
            password
        }
        this.props.loginUser(bodyParams)
            .then(res => {
                this.createNotification('success', 'Successfuly Updated');
                this.props.history.push('/home');
            }).catch(err => {
                this.createNotification('error', 'Unknown User...')
            });
    }

    onChangValue = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render() {
        return (

            <div class="limiter">
                <NotificationContainer />
                <div class="container-login100">
                    <div class="wrap-login100">
                        <div class="login100-form-title" style={{ backgroundImage: 'url(../images/bg-01.jpg)' }}>
                            <span class="login100-form-title-1">
                                Sign In
                </span>
                        </div>

                        <form class="login100-form validate-form" onSubmit={this.onSubmit}>
                            <div class="wrap-input100 validate-input m-b-26" data-validate="Username is required">
                                <span class="label-input100">Username</span>
                                <input class="input100" type="text" name="username" onChange={this.onChangValue} value={this.state.username} placeholder="Enter username" />
                                <span class="focus-input100"></span>
                            </div>

                            <div class="wrap-input100 validate-input m-b-18" data-validate="Password is required">
                                <span class="label-input100">Password</span>
                                <input class="input100" type="password" name="password" onChange={this.onChangValue} value={this.state.password} placeholder="Enter password" />
                                <span class="focus-input100"></span>
                            </div>

                            <div class="container-login100-form-btn">
                                <button type="submit" class="login100-form-btn">
                                    Login
                    </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

        )
    }
}

const mapStateToProps = state => ({
    ...state.login
})

const mapDispatchToProps = {
    ...loginActions
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);