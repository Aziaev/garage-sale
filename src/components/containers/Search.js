import React, { Component } from 'react'
import { Map } from '../presentation'

class Search extends Component {
  constructor() {
    super();
    this.state = {
      map: null
    }
  }

  render() {
    const markers = [
      { id: 1, key: '1', defaultAnimation: 2, label: 'Nike Jordans', position: { lat: 40.7224017, lng: -73.9896719 } },
      { id: 2, key: '2', defaultAnimation: 2, label: 'Adidas Sport', position: { lat: 40.7245014, lng: -73.9957715 } },
      { id: 3, key: '3', defaultAnimation: 2, label: 'Asics', position: { lat: 40.726602, lng: -73.996873 } },
      { id: 4, key: '4', defaultAnimation: 2, label: 'Puma', position: { lat: 40.728703, lng: -73.999974 } }
    ];
    return (
      <div className="sidebar" data-color="purple" data-image="/img/sidebar-1.jpg">
        <div className="logo">
          <a href="http://www.google.com" className="simple-text">
            Logo
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
                })
              }
            }}
            markers={markers}
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

export default Search