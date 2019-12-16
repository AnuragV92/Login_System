import React from 'react'
import Header from './../Header/Header'
import {connect} from 'react-redux';
import './Home.scss'
class Home extends React.Component{
    onLogout = () => {
        this.props.history.push('/login');
    }
    render(){
        return(
            <>
                <Header onLogout={this.onLogout}/>

                <div className="home_container">
                    <h2>{this.props.message}</h2>
                    <p className="mt-2">
                        <b>Current-time :</b> {this.props.currentTime}
                    </p>
                    <p className="mt-2">
                        <b>Current-Directory Path :</b> {this.props.path}
                    </p>
                </div>
            </>
        )
    }
}

const mapStateToProps = state => ({
    ...state.login.data
})
export default connect(mapStateToProps)(Home);