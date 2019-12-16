import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Provider } from 'react-redux'
import store from './store'
import { Route, BrowserRouter as Router, Switch, Redirect } from 'react-router-dom'
import Login from './components/Login/Login';
import Home from './components/Home/Home'

const PrivateRoute = ({ component: Component, ...rest }) =>  {
  //TODO: implement login based on userProfile
  const appState = store.getState();
  const data = appState && appState.login.data;
  return <Route {...rest} render={(props) => (
    data
        ? <Component {...props} />
        : <Redirect to='/login' />
    )} />
  }

const App = () => {
  return (
    <div className="App">
        <Provider store={ store }>
          {/* <Header /> */}
          <div className="ete-main">
              <Router>
                <Switch>
                  <Route exact path="/login" component={Login}/>
                  <PrivateRoute path="/home" component={Home}/>
                  <Redirect to = "/login" />
                </Switch>
              </Router>
          </div>
        </Provider>
      </div>
  );
}

export default App;
