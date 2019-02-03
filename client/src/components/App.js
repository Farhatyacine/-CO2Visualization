import React, { Component } from "react";
import { connect } from "react-redux";
import { Bubble } from "react-chartjs-2";
import * as actions from "../actions/index";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      group1Data: [],
      group2Data: [],
      group3Data: [
        {
          x: 0,
          y: 350,
          r: 10
        }
      ],
      time: 10
    };
  }

  componentDidMount() {
    setInterval(
      () =>
        this.props.fetchCarbon().then(() =>
          this.props.carbons <= 1000
            ? this.setState({
                time: this.state.time + 10,
                group3Data: this.state.group3Data.concat({
                  x: this.state.time,
                  y: this.props.carbons,
                  r: 10
                })
              })
            : this.props.carbons <= 2000
            ? this.setState({
                time: this.state.time + 10,
                group2Data: this.state.group2Data.concat({
                  x: this.state.time,
                  y: this.props.carbons,
                  r: 10
                })
              })
            : this.setState({
                time: this.state.time + 10,
                group1Data: this.state.group1Data.concat({
                  x: this.state.time,
                  y: this.props.carbons,
                  r: 10
                })
              })
        ),
      10000
    );
  }
  render() {
    const { group1Data, group2Data, group3Data } = this.state;
    const data = {
      datasets: [
        {
          label: ["C02>2000 pm"],
          backgroundColor: "white",
          borderColor: "red",
          data: group1Data
        },
        {
          label: ["2000 pm>=CO2>1000 pm"],
          backgroundColor: "white",
          borderColor: "yellow",
          data: group2Data
        },
        {
          label: ["C02<=1000pm"],
          backgroundColor: "white",
          borderColor: "green",
          data: group3Data
        }
      ]
    };
    const options = {
      title: {
        display: true,
        text: "CO2 Visualization"
      },
      scales: {
        yAxes: [
          {
            scaleLabel: {
              display: true,
              labelString: "CO2 (ppm)"
            }
          }
        ],
        xAxes: [
          {
            scaleLabel: {
              display: true,
              labelString: "Time (secondes)"
            }
          }
        ]
      }
    };
    return <Bubble data={data} options={options} />;
  }
}

function mapStateToProps({ carbons }) {
  return { carbons };
}

export default connect(
  mapStateToProps,
  actions
)(App);
