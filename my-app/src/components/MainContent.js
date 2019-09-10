import React, { Component } from 'react'
import Header from './Header'
import CreateLeads from './CreateLeads'
import Leads from './Leads'
import { HashRouter as Router, Link, Route ,Redirect} from 'react-router-dom'

class MainContent extends Component {
    constructor(props) {
        super(props)

        this.state = {

        }
    }

    render() {
        return (
            <div>
                <Header></Header>
                <Router>
                    <Route path='/Leads' component={Leads} />
                    <Route path='/CreateLead' component={CreateLeads} />
                </Router>
            </div>

        )
    }
}

export default MainContent
