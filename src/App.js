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
    if (this.state.taskName !== '') {
      let tasks = this.state.tasks
      const newTask = { taskName: this.state.taskName, completed: false}
      fetch('https://krystian-kaminski.firebaseio.com/tasks.json', {
        method: 'POST',
        body: JSON.stringify(newTask)
      }).then(() => {
        tasks.push(newTask)
        this.setState({ tasks, taskName: ''})
      })
    } else {
      alert(`You can't add empty value!`)
    }
  }

  render() {
    return (
      <div className="App">
        <TextField
            hintText="Enter your task here"
            value={this.state.taskName}
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
