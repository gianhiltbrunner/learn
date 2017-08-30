import { createContainer } from 'meteor/react-meteor-data';
import React, { Component } from 'react';
import { Answers } from '../../imports/collections/answers';

/*const QuestionDetail = (props) => {
  return (
    <div className="jumbotron list-group-item">
      <li>{props.question.string}</li>

      <div className="input-group">
        <input type="text" className="form-control" onChange={} name={props.question._id} placeholder="Deine Antwort"></input>
      </div>
    </div>
  );
};
export default QuestionDetail;
*/

class QuestionDetail extends Component {
  constructor(props) {
    super(props);
  };

  render(){
    return (
      <div className="jumbotron list-group-item">
        <li>{this.props.question.string}</li>

        <div className="input-group">
          <input type="text" className="form-control" onChange={this.handleChange} name={this.props.question._id} placeholder="Deine Antwort"></input>
        </div>
      </div>
    );
  }

  handleChange(event) {
    event.preventDefault();
    console.log(event.target.value);
    console.log(event.target.name);
    /*Answers.insert({
      name: event.target.name,
      value: event.target.value
    });*/
    Meteor.call('stringUpdate', {
      value: event.target.value,
      name: event.target.name
    }, (err, res) => {
      if (err) {
        alert(err);
      } else {
        // success!
      }
    });

  }

};

export default QuestionDetail;
