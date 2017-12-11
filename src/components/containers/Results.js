import React, { Component } from 'react'
import { Item } from '../presentation'

class Results extends Component {
  constructor() {
    super()
    this.state = {}
  }

  render() {
    const items = [
      { id: 1, key: '1', defaultAnimation: 2, label: 'Nike Jordans', price: 100, position: { lat: 40.7224017, lng: -73.9896719 } },
      { id: 2, key: '2', defaultAnimation: 2, label: 'Adidas Sport', price: 150, position: { lat: 40.7245014, lng: -73.9957715 } },
      { id: 3, key: '3', defaultAnimation: 2, label: 'Asics', price: 40, position: { lat: 40.726602, lng: -73.996873 } },
      { id: 4, key: '4', defaultAnimation: 2, label: 'Puma', price: 70, position: { lat: 40.728703, lng: -73.999974 } }
    ];
    return (
      <div className="content">
        <div className="container-fluid">
          <div className="row">
            {
              items.map((item, i) => {
                return <Item key={item.id} item={item} />
              })
            }
          </div>
        </div>
      </div>
    )
  }
}

export default Results