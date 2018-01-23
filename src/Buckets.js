import React, { Component } from 'react';
import Bucket from './components/bucket.js';

class BucketClass extends Component {
  constructor(props) {
    super(props);

    this.state = {
      buckets: []
    };
  }

  getStartTimestamp(t) {
    const time = new Date(t);
    const minutes = time.getMinutes();
    const timestamp = time.setMinutes(minutes - minutes % 15, 0, 0);
    return timestamp;
  }

  getEndTimestamp(t) {
    const time = new Date(t);
    const minutes = time.getMinutes();
    const timestamp = time.setMinutes(minutes - minutes % 15 + 15, 0, -1);
    return timestamp;
  }

  componentDidMount() {
    var myHeaders = new Headers();
    var data = {
      buckets: ['test bucket'],
      timeRange: [
        this.getStartTimestamp(new Date()),
        this.getEndTimestamp(new Date())
      ]
    };
    var myInit = {
      method: 'POST',
      headers: myHeaders,
      cache: 'default',
      body: JSON.stringify(data)
    };
    fetch(`http://localhost:8100/buckets?Action=ListMetrics`, myInit)
      .then(response => response.json())
      .then(data => this.setState({ buckets: data }));
  }

  render() {
    const { buckets } = this.state;
    return (
      <div>
        <div>
          {buckets.map(item => {
            return <Bucket key={item.bucketName} bucket={item} />;
          })}
        </div>
      </div>
    );
  }
}

export default BucketClass;
