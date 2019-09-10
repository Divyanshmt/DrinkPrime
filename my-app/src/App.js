import React, { Component } from 'react'
import './App.css';
import MainContent from './components/MainContent';
import SideNav from './components/SideNav'


class App extends Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }

  /*async fun() {
    var result = await  fetch('http://localhost:3001/isLogin').then(response=> response.text())
    if(result){
      alert(result)
      window.location.replace("http://localhost:3001")
    }
  }

  componentWillMount(){
    this.fun()
  }
*/
  

  render() {
    return (
      <div className="content">
      <div className="SideNav"><SideNav /></div>
      <div className="MainContent"><MainContent /></div>
      </div>
    )
  }
}


export default App;
