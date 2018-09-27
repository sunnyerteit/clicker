import React, { Component } from "react";

class Item extends Component {
  state = {};
  Get_hidden() {
    let hidden_class = "m-2 ";
    hidden_class += this.props.Item.hidden === true ? "d-none" : "";
    return hidden_class;
  }
  render() {
    return (
      <div className={this.Get_hidden()}>
        <p>
          <button
            type="button"
            className="btn btn-primary"
            onClick={() => this.props.On_buy(this.props.Item)}
          >
            {this.props.Item.name}{" "}
            <span className="badge badge-light">{this.props.Item.number}</span>
          </button>
          <button
            type="button"
            className="btn btn-danger m-2"
            onClick={() => this.props.On_upgrade(this.props.Item)}
          >
            {(
              (1 + this.props.Item.upgrades ** 2) *
              this.props.Item.cost_0 *
              10
            ).toFixed(0)}{" "}
            <span className="badge badge-light">
              {this.props.Item.upgrades}
            </span>
          </button>
        </p>
        <span className="badge badge-secondary">
          Cost{" "}
          <span className="badge badge-light">
            {this.props.Item.cost.toFixed(1)}
          </span>
        </span>
        <span className="badge badge-warning m-2">
          Rate{" "}
          <span className="badge badge-light">
            {(
              this.props.Item.rate *
              (1 + 1.2 * this.props.Item.upgrades)
            ).toFixed(1)}
          </span>
        </span>
        <span className="badge badge-info m-2">
          Total{" "}
          <span className="badge badge-light">
            {this.props.Item.total.toFixed(1)}
          </span>
        </span>
        <span className="badge badge-dark m-2">
          Poopy revenue{" "}
          <span className="badge badge-light">
            {this.props.Item.revenue.toFixed(1)}
          </span>
        </span>
      </div>
    );
  }
}

export default Item;
