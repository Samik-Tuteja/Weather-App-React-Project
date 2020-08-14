import React, { Component } from "react";

export default class Current extends Component {
  render() {
    return (
      <div className="current-temp">
        {this.props.hidden ? (
          <h2>Today: {this.props.getDay(this.props.today)}</h2>
        ) : (
          ""
        )}
        {this.props.icon && (
          <p>
            <img
              src={`https://www.weatherbit.io/static/img/icons/${this.props.icon}.png`}
              alt="Weather-icon"
              className="icon"
            />{" "}
          </p>
        )}
        {this.props.temperature && (
          <p>
            {" "}
            Current Temperature:
            <span> {this.props.temperature}°C </span>
          </p>
        )}
        {this.props.max_temp && (
          <p className="weather__key">
            {" "}
            Maximum Temperature:
            <span className="weather__value"> {this.props.max_temp}°C </span>
          </p>
        )}
        {this.props.min_temp && (
          <p>
            {" "}
            Minimum Temperature:
            <span> {this.props.min_temp}°C </span>
          </p>
        )}
        {this.props.humidity && (
          <p>
            {" "}
            Humidity:
            <span> {this.props.humidity}% </span>
          </p>
        )}
        {this.props.description && (
          <p>
            {" "}
            Conditions:
            <span> {this.props.description} </span>
          </p>
        )}
        {this.props.error && <p className="error">{this.props.error}</p>}
      </div>
    );
  }
}
