import React, { PureComponent } from 'react'
import Option from './Option'
import styles from './css/SideNavOptions.module.css'
import { BrowserRouter as Router, Link, Route } from 'react-router-dom'


class SideNavOptions extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {

        }
        this.optionsRef = React.createRef();
    }

    showOption() {

        if (this.optionsRef.current.style.display != "block") {
            this.optionsRef.current.style.display = "block"
        } else {
            this.optionsRef.current.style.display = "none"
        }

    }


    render() {
        return (
            <div>
                <div onClick={() => this.showOption()} className={styles.optionsHeader}>
                    <p>&#36; Sales</p>
                    <p>&#8964;</p>
                </div>
                <ul ref={this.optionsRef}>
                    <Option route='Leads' name="New Lead" />
                    <Option route='CreateLead' name="Create New Lead" />
                </ul>
            </div>
        )
    }
}

export default SideNavOptions