import React, { Component } from 'react';
import { Line } from 'react-chartjs-2';

class User extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {},
      datas: []
    };
  }

  componentDidMount() {
    const id = this.props.match.params.name;
    fetch(`http://localhost:3006/users/?uuid=` + id)
      .then(response => response.json())
      .then(data =>
        this.setState({
          user: data[0],
          datas: Array.from({ length: 7 }, () => Math.floor(Math.random() * 40))
        })
      );
  }

  /*componentWillMount() {
    fetch(`http://localhost:3006/users/?uuid=` + this.props.match.params.name)
      .then(response => response.json())
      .then(data => this.setState({ user: data[0] }));
  }*/

  componentWillReceiveProps(nextProps) {
    const { category } = nextProps;
    const id = nextProps.match.params.name;
    if (!category) {
      fetch(`http://localhost:3006/users/?uuid=` + id)
        .then(response => response.json())
        .then(data =>
          this.setState({
            user: data[0],
            datas: Array.from({ length: 7 }, () =>
              Math.floor(Math.random() * 40)
            )
          })
        );
    }
  }

  render() {
    const { user, datas } = this.state;

    const data = {
      labels: [
        'Label Group 1',
        'Label Group 2',
        'Label Group 3',
        'Label Group 4',
        'Label Group 5',
        'Label Group 6',
        'Label Group 7'
      ],
      datasets: [
        {
          label: user.name,
          backgroundColor: '#ebce5b',
          borderColor: '#ebce5b',
          data: datas,
          fill: false
        },
        {
          label: 'Dashed',
          backgroundColor: '#56b3d5',
          borderColor: '#56b3d5',
          data: [10, 7, 6, 3, 4, 10, 1],
          fill: false,
          borderDash: [3, 3]
        },
        {
          label: 'Filled and Dashed',
          backgroundColor: 'rgba(255, 99, 132, 0.25)',
          borderColor: 'rgba(255, 99, 132, 0.75)',
          data: [2, 6, 8, 4, 7, 8, 3],
          fill: true,
          borderDash: [10, 10]
        }
      ]
    };

    return (
      <div>
        <h2>{this.props.match.params.name}</h2>
        <h3>{user.name}</h3>
        <div className="content">
          <Line data={data} />
          <p>
            eget arcu dictum varius duis. Mauris rhoncus aenean vel elit
            scelerisque. Ullamcorper malesuada proin libero nunc consequat. Et
            tortor consequat id porta nibh venenatis cras. Pharetra sit amet
            aliquam id diam maecenas ultricies mi. Porta nibh venenatis cras sed
            felis. Vitae semper quis lectus nulla at volutpat diam. Purus ut
            faucibus pulvinar elementum integer enim. Suscipit tellus mauris a
            diam maecenas sed enim ut. Massa massa ultricies mi quis hendrerit
            dolor magna. Eget sit amet tellus cras adipiscing. Ac tortor
            dignissim convallis aenean et tortor at risus viverra. In ante metus
            dictum at tempor commodo ullamcorper. Porttitor leo a diam
            sollicitudin tempor. Enim nec dui nunc mattis enim ut tellus.
          </p>
        </div>
      </div>
    );
  }
}

export default User;
