import React from 'react';

class FetchTest extends React.Component {
  state = {
    pups: []
  }

  componentDidMount() {
    fetch('https://gist.githubusercontent.com/robpwatkins/3fddbada918e592e3901a474b0953df9/raw/da884d19b47bbcc25115578c95106ffd5b8d9af5/test.json')
    .then(response => response.json())
    .then(json => {
      this.setState({ pups: [...json] })
      console.log(this.state.pups)
    })
  }

  render() {
    return(
      <div>
        {this.state.pups.map((pup, i) => {
          return (
            <div key={i}>
              <h1>{pup.Name}</h1>
              <h3>{pup.Breed}</h3>
              <h3>{pup.Hometown}</h3>
            </div>
          )
        })}
      </div>
    )
  }
}

export default FetchTest;