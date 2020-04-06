import React from 'react';

class FetchTest extends React.Component {
  state = {
    things: []
  }

  componentDidMount() {
    fetch('https://gist.githubusercontent.com/robpwatkins/3fddbada918e592e3901a474b0953df9/raw/ebe834bcd812e7849fa15fdf7573f010dbf93fc5/test.json')
    .then(response => response.json())
    .then(json => {
      this.setState({ things: [...json] })
      console.log(this.state.things)
    })
  }

  render() {
    return(
      <div>
        {this.state.things.map((thing, i) => {
          return (
            <div key={i}>
              <h1>{thing.thing}</h1>
              <h3>{thing.description}</h3>
              <img src={thing.imgUrl} alt=""></img>
            </div>
          )
        })}
      </div>
    )
  }
}

export default FetchTest;