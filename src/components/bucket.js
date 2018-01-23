import React, { Component } from 'react';
import { Doughnut, Bar, Line } from 'react-chartjs-2';

class BucketC extends Component {
  constructor(props) {
    super(props);
    this.state = {
      datas1: []
    };
  }
  render() {
    const { bucket } = this.props;

    const dataLineInOutBytes = {
      labels: ['Incoming', 'Outcoming'],
      datasets: [
        {
          label: 'Bytes',
          backgroundColor: 'rgba(0,0,0,0.6)',
          borderColor: 'rgba(0,0,0,0.8)',
          borderWidth: 1,
          hoverBackgroundColor: 'rgba(0,0,0,0.8)',
          hoverBorderColor: 'rgba(0,0,0,0.6)',
          data: [65000, 59000, 80]
        }
      ]
    };

    const dataLineInOutBytes3 = {
      labels: ['1', '2', '3', '4', '5', '6', '7'],
      datasets: [
        {
          label: 'Bytes',
          backgroundColor: 'rgba(0,0,0,0.6)',
          borderColor: 'rgba(0,0,0,0.8)',
          borderWidth: 1,
          hoverBackgroundColor: 'rgba(0,0,0,0.8)',
          hoverBorderColor: 'rgba(0,0,0,0.6)',
          data: [65000, 59000, 40000, 6000, 5900, 80000, 1034]
        }
      ]
    };
    const dataLineInOutBytes2 = {
      labels: ['data', 'meta'],
      datasets: [
        {
          label: 'Number of objects',
          backgroundColor: 'rgba(0,0,0,0.6)',
          borderColor: 'rgba(0,0,0,0.8)',
          borderWidth: 1,
          hoverBackgroundColor: 'rgba(0,0,0,0.8)',
          hoverBorderColor: 'rgba(0,0,0,0.6)',
          data: [100, 900, 80]
        }
      ]
    };
    const dataStorage = {
      labels: ['storage 1', 'storage 2'],
      datasets: [
        {
          data: [300, 50],
          backgroundColor: ['#f44443', '#4d5360'],
          hoverBackgroundColor: ['#f44443', '#4d5360']
        }
      ]
    };
    const dataStorage2 = {
      labels: ['storage 1', 'storage 2'],
      datasets: [
        {
          data: [67000, 45329],
          backgroundColor: ['#f44443', '#4d5360'],
          hoverBackgroundColor: ['#f44443', '#4d5360']
        }
      ]
    };
    const dataStorage3 = {
      labels: ['storage 1', 'storage 2'],
      datasets: [
        {
          data: [6000, 429, 987],
          backgroundColor: ['#f44443', '#4d5360', '#3fbebd'],
          hoverBackgroundColor: ['#f44443', '#4d5360', '#3fbebd']
        }
      ]
    };
    const dataLine = {
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
      datasets: [
        {
          label: 'Sales',
          type: 'line',
          data: [51, 65, 40, 49, 60, 37, 40],
          fill: false,
          borderColor: '#EC932F',
          backgroundColor: '#EC932F',
          pointBorderColor: '#EC932F',
          pointBackgroundColor: '#EC932F',
          pointHoverBackgroundColor: '#EC932F',
          pointHoverBorderColor: '#EC932F',
          yAxisID: 'y-axis-2'
        },
        {
          type: 'bar',
          label: 'Visitor',
          data: [200, 185, 590, 621, 250, 400, 95],
          fill: false,
          backgroundColor: '#71B37C',
          borderColor: '#71B37C',
          hoverBackgroundColor: '#71B37C',
          hoverBorderColor: '#71B37C',
          yAxisID: 'y-axis-1'
        }
      ]
    };

    const datLineTest = {
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
      datasets: [
        {
          label: 'Deleted objects',
          fill: false,
          lineTension: 0.1,
          backgroundColor: 'rgba(75,192,192,0.4)',
          borderColor: 'rgba(75,192,192,1)',
          borderCapStyle: 'butt',
          borderDash: [],
          borderDashOffset: 0.0,
          borderJoinStyle: 'miter',
          pointBorderColor: 'rgba(75,192,192,1)',
          pointBackgroundColor: '#fff',
          pointBorderWidth: 1,
          pointHoverRadius: 5,
          pointHoverBackgroundColor: 'rgba(75,192,192,1)',
          pointHoverBorderColor: 'rgba(220,220,220,1)',
          pointHoverBorderWidth: 2,
          pointRadius: 1,
          pointHitRadius: 10,
          data: [65, 59, 80, 81, 56, 55, 40]
        }
      ]
    };

    const chartOptions = {
      responsive: true,
      maintainAspectRatio: false,
      legend: {
        display: false,
        position: 'bottom',
        labels: {
          fontSize: 8,
          fontColor: '#000'
        }
      },
      layout: {
        padding: {
          left: 15,
          right: 0,
          top: 10,
          bottom: 15
        }
      },
      cutoutPercentage: 75
    };

    return (
      <div>
        <div className="content_wrapper style5">
          <div className="content_bloc">
            <h2 className="no-margin">> {bucket.bucketName}</h2>
          </div>
        </div>
        <div className="content_wrapper style2">
          <div className="content_bloc">
            <h2>Metrics</h2>
            <div className="content--grid clearfix">
              <div className="grid--col4">
                <h3>Incoming - Outcoming Bytes</h3>
                <Bar height={230} data={dataLineInOutBytes} />
              </div>
              <div className="grid--col4">
                <h3>Number of objects</h3>
                <Bar height={230} data={dataLineInOutBytes2} />
              </div>
              <div className="grid--col4">
                <h3>Storage Utilized</h3>
                <Doughnut
                  height={130}
                  data={dataStorage}
                  options={chartOptions}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="content_wrapper style4">
          <div className="content_bloc">
            <div className="content--grid clearfix">
              <div className="grid--col4">
                <h3>Number of objects</h3>
                <Doughnut data={dataStorage2} options={chartOptions} />
              </div>
              <div className="grid--col8">
                <h3>Storage Utilized</h3>
                <Bar height={130} data={dataLineInOutBytes3} />
              </div>
            </div>
          </div>
        </div>
        <div className="content_wrapper style2">
          <div className="content_bloc">
            <div className="content--grid clearfix">
              <div className="grid--col12">
                <h3>Storage Utilized</h3>
                <Line height={100} data={datLineTest} />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default BucketC;
