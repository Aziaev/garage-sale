import React, { Component } from 'react'

export default (props) => {
  const item = props.item;

  return (
    <div className="col-lg-3 col-md-6 col-sm-6">
      <div className="card card-stats">
        <div className="card-header" data-background-color="orange">
          <i className="material-icons">content_copy</i>
        </div>
        <div className="card-content">
          <p className="category">{item.label}</p>
          <h3 className="title">{item.price}
            <small>$</small>
          </h3>
        </div>
        <div className="card-footer">
          <div className="stats">
            <i className="material-icons text-danger">warning</i>
            <a href="#pablo">Get More Space...</a>
          </div>
        </div>
      </div>
    </div>
  )
}