import React, { Component } from 'react';
import amazon from './images/AmazonS3.png';
import metrics from './images/metrics.jpg';

class Home extends Component {
  render() {
    return (
      <div>
        <div className="content_wrapper style1">
          <div className="content_bloc amazon_bloc">
            <img src={amazon} alt="amazon" className="amazon" />{' '}
            <span>
              UTAPI is a Service Utilization API for tracking resource usage and
              metrics reporting
            </span>
          </div>
        </div>
        <div className="content_wrapper style4">
          <div className="content_bloc metric_bloc clearfix">
            <span>
              Utapi tracks metrics of a service's usage. Metrics provided by
              Utapi include the number of incoming and outgoing bytes, the
              number of objects being stored, the storage utilized in bytes, and
              a count of operations performed on a service's resources.
              Operations supported by Utapi include APIs offered by Scality's S3
              Server. Metrics can be retrieved for a given time range in a
              service's history.
            </span>
            <img src={metrics} alt="amazon" className="metrics" />{' '}
          </div>
        </div>
        <div className="content_wrapper style2">
          <div className="content_bloc">
            <p>
              The Scality S3 Connector provides a modern, highly compatible AWS
              S3 API storage server. The S3 Connector implements the core S3 API
              (Bucket & Object CRUD), Multi-Part-Upload (MPU) as well as an AWS
              Identity and Access Management (IAM) compatible REST interface. In
              conjunction with Scality RING release 6.0, this provides a
              comprehensive foundation for building petabyte scale storage
              clouds for both enterprises and service providers. While AWS S3
              has quickly emerged as the defacto standard for object storage
              APIs, there are several gaps in its functional specifications. For
              example, currently S3 does not define an API for resource
              utilization tracking and reporting for metrics such as storage
              capacity, bytes transferred in and out of the service, and number
              of operations performed on the service. AWS instead provides these
              reporting capabilities through peripheral services such as AWS
              CloudWatch monitoring and the AWS dashboard. For an on-premises
              solution such as provided by the Scality S3 Connector, an extended
              REST API is instead provided to deliver comprehensive resource
              utilization tracking and reporting functionality. This API
              provides the baseline utilization metrics required for service
              providers to enable external billing or internal chargeback
              reporting capabilities on the S3 Connector and the Scality RING.
            </p>
          </div>
        </div>
        <div className="content_wrapper style3 spec">
          <div className="content_bloc content--grid clearfix">
            <div className="grid--col4 centered">
              <i className="fa fa-calendar" />
              <h4>Time range</h4>
              <p>
                Utapi offers metrics for a time range provided by the user. For
                example, Utapi allows a user to view all actions that have
                occurred over the course of a particular month, week, or day.
                Time ranges are customizable up to a precision of fifteen
                minutes. Note: A time range precision of less than fifteen
                minutes can be supported as a feature request and could be set
                as a configurable option.
              </p>
            </div>
            <div className="grid--col4 centered">
              <i className="fa fa-clock-o" />
              <h4>Timestamps</h4>
              <p>
                Metrics provided by Utapi are set to the latest fifteen minute
                interval (i.e., 00:00:00, 00:15:00, 00:30:00, or 00:45:00). For
                example, if a user creates a bucket at 06:15:01, the operation
                will have a timestamp of 06:15:00. All timestamps are then
                formatted as a UNIX epoch expressed in milliseconds. During a
                listing of metrics, then, we can know that this operation
                occurred sometime between 06:15:00 and 06:29:59.
              </p>
            </div>
            <div className="grid--col4 centered">
              <i className="fa fa-database" />
              <h4>Data Storage</h4>
              <p>
                Utapi uses Redis as a database for storage of its metrics
                values. Accordingly, it uses three different Redis data types:
                Sorted Sets, Strings, and Lists. This document describes how
                these three data types are used by Utapi. For further
                information on data types see the Redis documentation.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
