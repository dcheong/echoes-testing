import React from 'react';
import { Component } from 'react';

import { Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

import Step from './step'
import InputStep from './input'

const propTypes = {
  steps: React.PropTypes.array.isRequired,
  addStep: React.PropTypes.func.isRequired,
  removeStep: React.PropTypes.func.isRequired
}

export default class App extends Component {

  render() {
    console.log(this.props.removeStep)
    const titleStyle = {
      fontSize: 30
    }

    const self = this;

    return (
      <div className="content">
        <Card>
          <CardHeader
            titleStyle={titleStyle}
            title="New Recipe"
          />
        </Card>
        { this.props.steps.map((step, i) => 
            <Step removeStep={self.props.removeStep} id={i} content={step.content} />)
        }
        <InputStep addStep={self.props.addStep} />
      </div>
    );
  }
}

App.propTypes = propTypes;
