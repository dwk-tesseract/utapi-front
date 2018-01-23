import React, { Component } from 'react';
import * as moment from 'moment';
import { Line, Doughnut, HorizontalBar, Bar } from 'react-chartjs-2';

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
          backgroundColor: 'rgba(255,99,132,0.2)',
          borderColor: 'rgba(255,99,132,1)',
          borderWidth: 1,
          hoverBackgroundColor: 'rgba(255,99,132,0.4)',
          hoverBorderColor: 'rgba(255,99,132,1)',
          data: [65000, 59000, 80]
        }
      ]
    };
    const dataStorage = {
      labels: ['test1', 'test2'],
      datasets: [
        {
          data: [300, 50],
          backgroundColor: ['#36A2EB', '#FFCE56'],
          hoverBackgroundColor: ['#36A2EB', '#FFCE56']
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
        <div className="content_wrapper style3">
          <div className="content_bloc">
            <h2 className="no-margin">Bucket Name: {bucket.bucketName}</h2>
          </div>
        </div>
        <div className="content_wrapper style2">
          <div className="content_bloc">
            <h2>Metrics</h2>
            <div className="content--grid clearfix">
              <div className="grid--col8">
                <h3>Incoming - Outcoming Bytes</h3>
                <Bar data={dataLineInOutBytes} />
              </div>
              <div className="grid--col4">
                <h3>Storage Utilized</h3>
                <Doughnut data={dataStorage} options={chartOptions} />
              </div>
            </div>
          </div>
        </div>
        <div className="content_wrapper style2">
          <div className="content_bloc">
            <h2>Metrics</h2>
            <div className="content--grid clearfix">
              <div className="grid--col3">
                <h3>Number of objects</h3>
                <Doughnut data={dataStorage} options={chartOptions} />
              </div>
              <div className="grid--col3">
                <h3>Storage Utilized</h3>
                <Doughnut data={dataStorage} options={chartOptions} />
              </div>
              <div className="grid--col3">
                <h3>Storage Utilized</h3>
                <Doughnut data={dataStorage} options={chartOptions} />
              </div>
              <div className="grid--col3">
                <h3>Storage Utilized</h3>
                <Doughnut data={dataStorage} options={chartOptions} />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default BucketC;
