import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import QuestionDetail from './question_detail'
import { Meteor } from 'meteor/meteor'
import { Questions } from '../../imports/collections/questions';
import { Answers } from '../../imports/collections/answers';
import { compose } from 'react-komposer';
import { createContainer } from 'meteor/react-meteor-data';

class Question extends Component {
  constructor(props) {
    super(props);
  };

  //componentWillReceiveProps(props){};

  render(){
    return (
      <form id="questionnaire" onSubmit={this.handleSubmit.bind(this)}>
          {this.props.questions.map(function(question){
              return <QuestionDetail key={question._id} question={question}/>
          })}
        <button type="submit" className="btn btn-primary">Absenden</button>
      </form>
    );
  }

  handleSubmit(event) {
    event.preventDefault();
    //console.log(event.target.children);
    /*Answers.insert({
      name: "test"
    });*/
  }

};

export default createContainer(() => {
  const subscription = Meteor.subscribe('questions');
  const questions = Questions.find().fetch();
  return { questions };
}, Question);
