import React from 'react'

import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'


class AddTask extends React.Component {

    render() {
        return (
            <div>
                <h3>Add Task</h3>
                <div>

                    <TextField type="text"/>
                    <RaisedButton
                        primary={true}
                        label="Add"
                    />
                </div>
            </div>
        )
    }
}

export default AddTask