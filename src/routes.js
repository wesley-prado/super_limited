import React from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

// Pages
import Home from './pages/home'
import Market from './pages/market/Market'
import Activity from './pages/activity/Activity'
import Buy from './pages/buy/Buy'
import Faq from './pages/faq/Faq'

const Routes = ()=>(
    <Router>
        <Switch>
            <Route exact path='/' component={Home}/>
            <Route path='/market' component={Market}/>
            <Route  path='/activity' component={Activity}/>
            <Route  path='/buy/:name' component={Buy}/>
            <Route  path='/faq' component={Faq}/>
        </Switch>
    </Router>
)

export default Routes
