import React from 'react';

const QuestionDetail = (props) => {
  return (
    <div className="jumbotron list-group-item">
      <li>{props.question.string}</li>

      <div className="input-group">
        <input type="text" className="form-control" placeholder="Deine Antwort"></input>
      </div>
    </div>
  );
};

export default QuestionDetail;
