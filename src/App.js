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
      </div>
    )
  }
}
export default App;
