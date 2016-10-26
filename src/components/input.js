import React from 'react';
import { Component } from 'react';

import { Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import TextField from 'material-ui/TextField'
import FlatButton from 'material-ui/FlatButton';

const propTypes = {
    addStep: React.PropTypes.func.isRequired
}

export default class InputStep extends Component {
    constructor(props) {
        super(props)
        this.handleTextChange = this.handleTextChange.bind(this)
        this.submitStep = this.submitStep.bind(this)
        this.state = { text: '' }
    }
    handleTextChange(e) {
        this.setState({ text: e.target.value })
    }
    submitStep(e) {
        e.preventDefault()
        this.props.addStep(this.state.text)
        this.setState({ text: '' })
    }
    render() {
        return (
            <div className="block">
                <Card>
                    <CardText>
                        <TextField
                            hintText="Preheat oven to 350 degrees..."
                            floatingLabelText="Add New Step"
                            floatingLabelFixed
                            value={this.state.text}
                            onChange={this.handleTextChange}
                            multiLine
                            fullWidth
                        />
                    </CardText>
                    <CardActions>
                        <FlatButton
                            primary
                            label="Add"
                            onClick={this.submitStep}
                        />
                    </CardActions>
                </Card>
            </div>
        )
    }
}

InputStep.propTypes = propTypes