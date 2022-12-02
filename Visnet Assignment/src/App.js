import {Route, Switch} from 'react-router-dom'

import Header from './components/Header'
import ResetPage from './components/ResetPage'
import SignUp from './components/SignUp'
import Login from './components/Login'

import './App.css'

const App = () => (
  <div className="app-container">
    <div className="responsive-container">
      <Header />
      <div className="app-body">
        <Switch>
          
          <Route exact path="/" component={Login} />
          <Route exact path="/signup" component={SignUp} />
          <Route exact path="/reset" component={ResetPage} />
        </Switch>
      </div>
    </div>
  </div>
)

export default App
