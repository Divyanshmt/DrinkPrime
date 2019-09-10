import React, { PureComponent } from 'react'
import style from './css/Option.module.css'

class Option extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            
        }
    }

    render() {
        return (
              <li><a href={'#/' + this.props.route}>{this.props.name}</a></li>
        )
    }
}

export default Option