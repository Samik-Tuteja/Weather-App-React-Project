import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import "./App.css";
import Main from "./Components/Main";
import Current from "./Components/Current";

export default class App extends Component {
  state = {
    city: undefined,
    country: undefined,
    temperature: undefined,
    max_temp: undefined,
    min_temp: undefined,
    humidity: undefined,
    description: undefined,
    icon: undefined,
    error: undefined,
    hidden: false,
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    const city = e.target.elements.city.value;
    await fetch(
      `https://api.weatherbit.io/v2.0/forecast/daily?city=${city}&days=8&key=d91055f5b0584b3ea18523bbae504c9f`
    )
      .then((response) => response.json())
      .then((data) => {
        this.setState({
          today: data.data[0].valid_date,
          day1: data.data[1].valid_date,
          day2: data.data[2].valid_date,
          day3: data.data[3].valid_date,
          day4: data.data[4].valid_date,
          day5: data.data[5].valid_date,
          day6: data.data[6].valid_date,
          city: data.city_name,
          country: data.country_code,
          temperature: data.data[0].temp,
          max_temp: data.data[0].max_temp,
          min_temp: data.data[0].min_temp,
          humidity: data.data[0].rh,
          description: data.data[0].weather.description,
          icon: data.data[0].weather.icon,
          error: "",
          hidden: true,
        });
      })
      .catch((error) => {
        this.setState({
          city: undefined,
          country: undefined,
          temperature: undefined,
          max_temp: undefined,
          min_temp: undefined,
          humidity: undefined,
          description: undefined,
          icon: undefined,
          error: "Please enter the correct city name.",
          hidden: false,
        });
      });
  };
  getDay = (date) => {
    let weekday = new Array(7);
    weekday[0] = "Sunday";
    weekday[1] = "Monday";
    weekday[2] = "Tuesday";
    weekday[3] = "Wednesday";
    weekday[4] = "Thursday";
    weekday[5] = "Friday";
    weekday[6] = "Saturday";

    return weekday[new Date(date).getDay()];
  };

  render(data) {
    const Page404 = ({ location }) => (
      <div>
        <Link to="/">Back to Home Page</Link>
        <h1 className="heading">Error 404</h1>
        <h2>
          Oops!! We cannot find any match for <code>{location.pathname}</code>
        </h2>
      </div>
    );
    const Day1 = () => (
      <div>
        <Link className="page-link" to="/">
          Back
        </Link>
        <div className="big-day">
          <div className="day">
            <h1>{this.getDay(this.state.day1)}</h1>
            <p>Maximum Temperature: 35&deg;C</p>
            <p>Minimum Temperature: 30&deg;C</p>
            <p>Humidity: 50%</p>
            <p>Conditions: Partly Cloudy</p>
          </div>
        </div>
      </div>
    );
    const Day2 = () => (
      <div>
        <Link className="page-link" to="/">
          Back
        </Link>
        <div className="big-day">
          <div className="day">
            <h1>{this.getDay(this.state.day2)}</h1>
            <p>Maximum Temperature: 35&deg;C</p>
            <p>Minimum Temperature: 30&deg;C</p>
            <p>Humidity: 50%</p>
            <p>Conditions: Partly Cloudy</p>
          </div>
        </div>
      </div>
    );
    const Day3 = () => (
      <div>
        <Link className="page-link" to="/">
          Back
        </Link>
        <div className="big-day">
          <div className="day">
            <h1>{this.getDay(this.state.day3)}</h1>
            <p>Maximum Temperature: 35&deg;C</p>
            <p>Minimum Temperature: 30&deg;C</p>
            <p>Humidity: 50%</p>
            <p>Conditions: Partly Cloudy</p>
          </div>
        </div>
      </div>
    );
    const Day4 = () => (
      <div>
        <Link className="page-link" to="/">
          Back
        </Link>
        <div className="big-day">
          <div className="day">
            <h1>{this.getDay(this.state.day4)}</h1>
            <p>Maximum Temperature: 35&deg;C</p>
            <p>Minimum Temperature: 30&deg;C</p>
            <p>Humidity: 50%</p>
            <p>Conditions: Partly Cloudy</p>
          </div>
        </div>
      </div>
    );
    const Day5 = () => (
      <div>
        <Link className="page-link" to="/">
          Back
        </Link>
        <div className="big-day">
          <div className="day">
            <h1>{this.getDay(this.state.day5)}</h1>
            <p>Maximum Temperature: 35&deg;C</p>
            <p>Minimum Temperature: 30&deg;C</p>
            <p>Humidity: 50%</p>
            <p>Conditions: Partly Cloudy</p>
          </div>
        </div>
      </div>
    );
    const Day6 = () => (
      <div>
        <Link className="page-link" to="/">
          Back
        </Link>
        <div className="big-day">
          <div className="day">
            <h1>{this.getDay(this.state.day6)}</h1>
            <p>Maximum Temperature: 35&deg;C</p>
            <p>Minimum Temperature: 30&deg;C</p>
            <p>Humidity: 50%</p>
            <p>Conditions: Partly Cloudy</p>
          </div>
        </div>
      </div>
    );

    return (
      <Router>
        <div>
          <h1 className="header">Weather App</h1>
          <Route exact path="/">
            <form onSubmit={this.handleSubmit}>
              <input type="text" placeholder="Enter a city..." name="city" />
              <input type="submit" value="Submit" />
            </form>
          </Route>
          {this.state.hidden ? (
            <h1 className="header">
              {this.state.city}, {this.state.country}
            </h1>
          ) : (
            ""
          )}
          <Route
            exact
            path="/"
            render={(props) => (
              <React.Fragment>
                <div className="main-flex">
                  <Current
                    hidden={this.state.hidden}
                    getDay={this.getDay}
                    today={this.state.today}
                    city={this.state.city}
                    country={this.state.country}
                    temperature={this.state.temperature}
                    max_temp={this.state.max_temp}
                    min_temp={this.state.min_temp}
                    humidity={this.state.humidity}
                    description={this.state.description}
                    icon={this.state.icon}
                    error={this.state.error}
                  />
                  <div className="vertical"></div>
                  {this.state.hidden ? (
                    <Main
                      getDay={this.getDay}
                      day1={this.state.day1}
                      day2={this.state.day2}
                      day3={this.state.day3}
                      day4={this.state.day4}
                      day5={this.state.day5}
                      day6={this.state.day6}
                    />
                  ) : (
                    ""
                  )}
                </div>
              </React.Fragment>
            )}
          />
          <Switch>
            <Route exact path="/" />
            <Route path={"/" + this.getDay(this.state.day1)} component={Day1} />
            <Route path={"/" + this.getDay(this.state.day2)} component={Day2} />
            <Route path={"/" + this.getDay(this.state.day3)} component={Day3} />
            <Route path={"/" + this.getDay(this.state.day4)} component={Day4} />
            <Route path={"/" + this.getDay(this.state.day5)} component={Day5} />
            <Route path={"/" + this.getDay(this.state.day6)} component={Day6} />
            <Route component={Page404} />
          </Switch>
        </div>
      </Router>
    );
  }
}
