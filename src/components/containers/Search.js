import React, { Component } from 'react'
import { Map } from '../presentation'
import { connect } from 'react-redux'
import actions from "../../actions";

class Search extends Component {
  constructor() {
    super();
    this.state = {
      map: null,
      mapCenter: null
    }
  }

  centerChanged(center) {
    this.props.centerChanged(center);
  }

  render() {
    const items = this.props.item.all || [];
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
                this.centerChanged.bind(map.getCenter())
              }
            }}
            locationChanged={this.centerChanged.bind(this)}
            markers={items}
            zoom={14}
            center={{ lat: 40.72224017, lng: -73.9896 }}
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
    item: state.item
  }
};

const dispatchToProps = (dispatch) => {
  return {
    centerChanged: (position) => dispatch(actions.centerChanged(position))
  }
};

export default connect(stateToProps, dispatchToProps)(Search)