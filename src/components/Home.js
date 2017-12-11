import React, { Component } from 'react'
import { Footer, Nav } from './presentation'
import { Results, Search } from "./containers";

class Home extends Component {
  constructor() {
    super();
    this.state = {}
  }

  render() {

    return (
      <div className="wrapper">
        <Search/>
        <div className="main-panel">
          <Nav/>
          <Results/>
          <Footer/>
        </div>
      </div>
    )
  }
}

export default Home

