import React, { Component } from 'react'
import { Map } from '../presentation'
import { connect } from 'react-redux'
import actions from "../../actions";

class Search extends Component {
  constructor() {
    super();
    this.state = {
      map: null,
    }
  }

  centerChanged(center) {
    this.props.locationChanged(center);
  }

  render() {
    const items = this.props.item.all || [];
    console.log(`props = ${JSON.stringify(this.props)}`);
    return (
      <div className="sidebar" data-color="purple" data-image="/img/sidebar-1.jpg">
        <div className="logo">
          <a href="http://www.google.com" className="simple-text">
            Items on map
          </a>
        </div>
        <div className="sidebar-wrapper" style={{ height: 100 + '%' - 70 }}>
          <Map
            onMapReady={(map) => {
              if (this.state.map != null) {
                return
                console.log('OnMapReady: ' + JSON.stringify(map.getCenter()))
                this.setState({
                  map: map
                });
              }
            }}
            locationChanged={this.centerChanged.bind(this)}
            markers={items}
            zoom={14}
            center={this.props.map.currentLocation}
            containerElement={<div style={{ height: 100 + '%' }}/>}
            mapElement={<div style={{ height: 100 + '%' }}/>}
          />
        </div>
      </div>
    )
  }
}

const stateToProps = (state) => {
  return {
    item: state.item,
    map: state.map
  }
};

const dispatchToProps = (dispatch) => {
  return {
    locationChanged: (location) => dispatch(actions.locationChanged(location))
  }
};

export default connect(stateToProps, dispatchToProps)(Search)