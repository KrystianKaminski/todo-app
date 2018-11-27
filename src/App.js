import React from 'react';

import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'


class App extends React.Component {

  state = {
    tasks: [
      {
        taskName: 'Odkurzanie',
        completed: false
    },
      {
        taskName: 'Nakarmić kota',
        completed: false
    }
    ],
    taskName: ''
  }

  handleChange = (event) => {
    this.setState({taskName: event.target.value})
  }

  handleClick = (event) => {
    let tasks = this.state.tasks
    tasks.push({ taskName: this.state.taskName, completed: false})
    this.setState({ tasks: tasks})
  }

  render() {
    return (
      <div className="App">
        <TextField
            onChange={this.handleChange}
            type="text"
        />
        <RaisedButton
            primary={true}
            label="Add"
            onClick={this.handleClick}
            />
        <div>
          {this.state.tasks.map((task, index) => (
            <div>{task.taskName}</div>
          ))}
        </div>
      </div>
    )
  }
}
export default App;
