import React, { Component } from "react";


class TemperatureConverter extends Component {
  constructor(props) {
    super(props);
    this.state = { celsius: "", fahrenheit: "" };
  }


  convertToFahrenheit = (e) => {
    const celsius = e.target.value;
    this.setState({ celsius, fahrenheit: (celsius * 9/5 + 32).toFixed(2) });
  };


  convertToCelsius = (e) => {
    const fahrenheit = e.target.value;
    this.setState({ fahrenheit, celsius: ((fahrenheit - 32) * 5/9).toFixed(2) });
  };


  render() {
    return (
      <div>
        <input type="number" value={this.state.celsius} onChange={this.convertToFahrenheit} placeholder="Celsius" /> °C =
        <input type="number" value={this.state.fahrenheit} onChange={this.convertToCelsius} placeholder="Fahrenheit" /> °F
      </div>
    );
  }
}


export default TemperatureConverter;
