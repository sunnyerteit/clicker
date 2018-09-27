import React, { Component } from "react";
import Item from "./item";

class Count extends Component {
  state = {
    count: 0,
    rate: 0,
    poopy_doggy: 0,
    poopy_car: 0,
    Items: [
      {
        name: "Poopy doggy",
        id: 0,
        number: 0,
        cost: 10,
        cost_0: 10,
        rate: 0.1,
        total: 0,
        revenue: 0,
        upgrades: 0,
        hidden: false
      },
      {
        name: "Poopy garage sale",
        id: 1,
        number: 0,
        cost: 100,
        cost_0: 100,
        rate: 1.0,
        total: 0,
        revenue: 0,
        upgrades: 0,
        hidden: true
      },
      {
        name: "Museum of fine poop",
        id: 2,
        number: 0,
        cost: 1000,
        cost_0: 1000,
        rate: 4.0,
        total: 0,
        revenue: 0,
        upgrades: 0,
        hidden: true
      },
      {
        name: "University of Technical Doo-doo",
        id: 3,
        number: 0,
        cost: 10000,
        cost_0: 10000,
        rate: 16.0,
        total: 0,
        revenue: 0,
        upgrades: 0,
        hidden: true
      },
      {
        name: "Gunde Swan",
        id: 4,
        number: 0,
        cost: 100000,
        cost_0: 100000,
        rate: 64.0,
        total: 0,
        revenue: 0,
        upgrades: 0,
        hidden: true
      },
      {
        name: "Poopdorado",
        id: 5,
        number: 0,
        cost: 1000000,
        cost_0: 1000000,
        rate: 256.0,
        total: 0,
        revenue: 0,
        upgrades: 0,
        hidden: true
      },
      {
        name: "Planet poop",
        id: 6,
        number: 0,
        cost: 10000000,
        cost_0: 10000000,
        rate: 1024.0,
        total: 0,
        revenue: 0,
        upgrades: 0,
        hidden: true
      },
      {
        name: "Black hole",
        id: 7,
        number: 0,
        cost: 100000000,
        cost_0: 100000000,
        rate: 4096.0,
        total: 0,
        revenue: 0,
        upgrades: 0,
        hidden: true
      },
      {
        name: "Schrödinger's shart",
        id: 8,
        number: 0,
        cost: 1000000000,
        cost_0: 1000000000,
        rate: 16384.0,
        total: 0,
        revenue: 0,
        upgrades: 0,
        hidden: true
      }
    ]
  };

  On_increment = () => {
    this.state.count += 1 + this.state.rate * 0.1;
    let audio = document.getElementById("audio");
    audio.play();
    this.setState(this);
  };

  On_buy = Item => {
    const Items = [...this.state.Items];
    const index = Items.indexOf(Item);
    this.state.count >= Items[index].cost
      ? ((this.state.count -= Items[index].cost),
        (Items[index].cost = Items[index].cost * 1.2),
        Items[index].number++)
      : null;
    Items[index].revenue =
      Items[index].number *
      Items[index].rate *
      (1 + 1.2 * Items[index].upgrades);
    this.setState({ Items });
  };

  On_upgrade = Item => {
    const Items = [...this.state.Items];
    const index = Items.indexOf(Item);
    this.state.count >=
    (1 + Items[index].upgrades ** 2) * Items[index].cost_0 * 10
      ? ((this.state.count -=
          (1 + Items[index].upgrades ** 2) * Items[index].cost_0 * 10),
        Items[index].upgrades++)
      : null;
    Items[index].revenue =
      Items[index].number *
      Items[index].rate *
      (1 + 1.2 * Items[index].upgrades);
    this.setState({ Items });
  };

  On_poopy_doggy = () => {
    this.state.count >= 10
      ? (this.state.poopy_doggy++, (this.state.count -= 10))
      : null;
    this.setState(this);
  };

  On_poopy_car = () => {
    this.state.count >= 100
      ? (this.state.poopy_car++, (this.state.count -= 100))
      : null;
    this.setState(this);
  };

  componentDidMount() {
    let income = 0;
    setInterval(() => {
      this.state;
      for (var index in this.state.Items) {
        income +=
          (this.state.Items[index].number *
            this.state.Items[index].rate *
            (1 + this.state.Items[index].upgrades * 1.2)) /
          50.0;
        this.state.Items[index].total +=
          (this.state.Items[index].number *
            this.state.Items[index].rate *
            (1 + this.state.Items[index].upgrades * 1.2)) /
          50.0;
        if (income * 50.0 * 1000.0 >= this.state.Items[index].cost) {
          this.state.Items[index].hidden = false;
        }
      }
      this.state.rate = income * 50;
      this.state.count += income;
      income = 0;
      this.setState(this);
    }, 20);
  }


  render() {
    const ITEMS = this.state.Items;
    const listItems = ITEMS.map(ITEMS => (
      <Item
        Item={this.state.Items[ITEMS.id]}
        On_buy={this.On_buy}
        On_upgrade={this.On_upgrade}
      />
    ));
    return (
      <div>
        <main className="container">
          <audio
            id="audio"
            src="https://www.freesfx.co.uk/rx2/mp3s/6/18660_1464810669.mp3"
          />
          <nav className="navbar navbar-light bg-light">
            <h1>Poopy click click</h1>
            <span className="navbar-text">
              Poopy poop per [s]: {this.state.rate.toFixed(1)}
            </span>
          </nav>
          <div className="m-2">
            <div>
              <button onClick={this.On_increment} className="btn btn-lg">
              POOP!
              </button>
            </div>
            <div>
              Poopy:{" "}
              <span className="badge m-2 badge-primary">
                {Number(this.state.count.toFixed(0))}
              </span>
            </div>
          </div>
          {listItems}
        </main>
      </div>
    );
  }
}

export default Count;
