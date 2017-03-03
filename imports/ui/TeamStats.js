import React, { Component } from 'react';
import { Radar } from 'react-chartjs-2';
import Divider from 'material-ui/Divider';

const data = {
  labels: ['Eating', 'Drinking', 'Sleeping', 'Designing', 'Coding', 'Cycling', 'Running'],
  datasets: [
    {
      label: 'My First dataset',
      backgroundColor: 'rgba(179,181,198,0.2)',
      borderColor: 'rgba(179,181,198,1)',
      pointBackgroundColor: 'rgba(179,181,198,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(179,181,198,1)',
      data: [65, 59, 90, 81, 56, 55, 40]
    },
    {
      label: 'My Second dataset',
      backgroundColor: 'rgba(255,99,132,0.2)',
      borderColor: 'rgba(255,99,132,1)',
      pointBackgroundColor: 'rgba(255,99,132,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(255,99,132,1)',
      data: [28, 48, 40, 19, 96, 27, 100]
    }
  ]
};

export default class TeamStats extends Component {
  render() {
    return (
      <div>
        <h2>Team Stats</h2>
        <div className='row'>
          <div className="col s12 m7">
            <Radar
              data={data}
              width={500}
              height={500}
              option={{
                maintainAspectRatio: false
              }}
            />
          </div>
          <div className="col s12 m5">
            <h4>Scores in % of max possible</h4>
            <Divider />
            <h4>Team's offense: 45%</h4>
            <h4>Team's defense: 45%</h4>
            <h4>Team's total
              : 45%</h4>
            <Divider />
            <h4>Number of players: 9</h4>
          </div>
        </div>
      </div>
    );
  }
}
