import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Main extends Component {
  render() {
    return (
      <div>
        <div className="box-flex">
          <div className="box">
            <Link to={"/" + this.props.getDay(this.props.day1)}>
              {this.props.getDay(this.props.day1)}
            </Link>
            <p>Max Temperature: 35°C</p>
            <p>Min Temperature: 30°C</p>
            <p>Conditions: Partly Cloudy</p>
          </div>
          <div className="box">
            <Link to={"/" + this.props.getDay(this.props.day2)}>
              {this.props.getDay(this.props.day2)}
            </Link>
            <p>Max Temperature: 35&deg;C</p>
            <p>Min Temperature: 30&deg;C</p>
            <p>Conditions: Partly Cloudy</p>
          </div>
          <div className="box">
            <Link to={"/" + this.props.getDay(this.props.day3)}>
              {this.props.getDay(this.props.day3)}
            </Link>
            <p>Max Temperature: 35&deg;C</p>
            <p>Min Temperature: 30&deg;C</p>
            <p>Conditions: Partly Cloudy</p>
          </div>
          <div className="box">
            <Link to={"/" + this.props.getDay(this.props.day4)}>
              {this.props.getDay(this.props.day4)}
            </Link>
            <p>Max Temperature: 35&deg;C</p>
            <p>Min Temperature: 30&deg;C</p>
            <p>Conditions: Partly Cloudy</p>
          </div>
          <div className="box">
            <Link to={"/" + this.props.getDay(this.props.day5)}>
              {this.props.getDay(this.props.day5)}
            </Link>
            <p>Max Temperature: 35&deg;C</p>
            <p>Min Temperature: 30&deg;C</p>
            <p>Conditions: Partly Cloudy</p>
          </div>
          <div className="box">
            <Link to={"/" + this.props.getDay(this.props.day6)}>
              {this.props.getDay(this.props.day6)}
            </Link>
            <p>Max Temperature: 35&deg;C</p>
            <p>Min Temperature: 30&deg;C</p>
            <p>Conditions: Partly Cloudy</p>
          </div>
        </div>
      </div>
    );
  }
}
