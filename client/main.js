import React from 'react';
import ReactDOM from 'react-dom';
import Blaze from 'meteor/gadicc:blaze-react-component';

import Question from './components/question';

const App = (probs) => {

  return (
    <div>
      <Blaze template="loginButtons" />
      <Question />
    </div>
  );
};
Meteor.startup(() => {
  ReactDOM.render(<App />, document.querySelector('.container'));
});
