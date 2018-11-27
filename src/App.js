import React from 'react';
import AddTask from './AddTask';


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

  render() {
    return (
      <div className="App">
        <AddTask/>
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
