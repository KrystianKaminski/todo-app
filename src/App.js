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
        const array = Object.entries(data) // index 0 - klucze, index 1 - obiekty zadan
        const tasksList = array.map(([id, values]) => {
          values.id = id // stworzenie nowej właściwości w obiekcie zadania
          return values
        })
        
        this.setState({ tasks: tasksList})
      })
  }
  handleClick = (event) => {
    if (this.state.taskName !== '') {
      let tasks = this.state.tasks
      let newTask = { taskName: this.state.taskName, completed: false}
      fetch(`${API_URL}/tasks.json`, {
        method: 'POST',
        body: JSON.stringify(newTask)
      }).then(response => response.json())
        .then(data => {
          newTask.id = data.name
          tasks.push(newTask)
          this.setState({tasks,taskName: ''})
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
          {this.state.tasks.map(task => (
            <div key={task.id}>{task.taskName}</div>
          ))}
        </div>
      </div>
    )
  }
}
export default App;
