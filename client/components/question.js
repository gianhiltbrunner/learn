import React, { Component } from 'react';
import QuestionDetail from './question_detail'
import { Meteor } from 'meteor/meteor'
import { Questions } from '../../imports/collections/questions';
import { compose } from 'react-komposer';
import { createContainer } from 'meteor/react-meteor-data';

class Question extends Component {
  constructor(props) {
    super(props);
  };

  componentWillReceiveProps(props){

  };

  render(){
    console.log(Meteor.userId());
    return (
        <form id="questionnaire">
          <ul className="media-list list-group">
            {this.props.questions.map(function(question){
                return <QuestionDetail key={question.string} question={question}/>
            })}
          </ul>

          <button type="button" className="btn btn-primary">Absenden</button>
        </form>
    );
  }

};

export default createContainer(() => {
  const subscription = Meteor.subscribe('questions');

  const questions = Questions.find().fetch();

  return { questions };
}, Question);
