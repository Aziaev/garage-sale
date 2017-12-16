import React, { Component } from 'react'
import { Item } from '../presentation'
import { connect } from 'react-redux'
import actions from '../../actions'

class Results extends Component {
  constructor() {
    super();
    this.state = {
      item: {
        // position: { lat: 40.708703, lng: -73.999974 }
      }
    }
  }

  updateItem(attr, event) {
    let updated = Object.assign({}, this.state.item);
    updated[attr] = event.target.value;
    this.setState({
      item: updated
    })
  }

  addItem() {
    let newItem = Object.assign({}, this.state.item);
    newItem['id'] = this.props.item.all.length + 1;
    newItem['key'] = `${this.props.item.all.length + 1}`;
    newItem['defaultAnimation'] = 2;
    newItem['position'] = this.props.map.currentLocation;
    this.props.addItem(newItem);
  }

  render() {
    const items = this.props.item.all || [];
    return (
      <div className="content">
        <div className="container-fluid">
          <div className="row">
            {
              items.map((item, i) => {
                return <Item key={item.id} item={item}/>
              })
            }
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="card">
                <div className="card-header text-center" data-background-color="purple">
                  <h4 className="title">New item</h4>
                </div>
                <div className="card-content">
                  <div className="table-responsive table-upgrade">
                    <div className="card-content">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="item name"
                        onChange={this.updateItem.bind(this, 'label')}
                      />
                      <input
                        type="text"
                        className="form-control"
                        placeholder="item price"
                        onChange={this.updateItem.bind(this, 'price')}
                      />
                      <button className="btn btn-success" onClick={this.addItem.bind(this)}>Add item</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
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
    addItem: (item) => dispatch(actions.addItem(item))
  }
};

export default connect(stateToProps, dispatchToProps)(Results)