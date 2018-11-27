import React from 'react';

import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'


const API_URL = 'https://krystian-kaminski.firebaseio.com/'

class App extends React.Component {

  state = {
    tasks: [],
    taskName: ''
  }

  handleChange = (event) => {
    this.setState({taskName: event.target.value})
  }

  componentWillMount() {
    fetch(`${API_URL}/tasks.json`)
      .then(response => response.json())
      .then(data =>  {
        console.log('Mam dane: ', data)
      })
  }
  handleClick = (event) => {
    if (this.state.taskName !== '') {
      let tasks = this.state.tasks
      const newTask = { taskName: this.state.taskName, completed: false}
      fetch(`${API_URL}/tasks.json`, {
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
