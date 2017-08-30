import { Meteor } from 'meteor/meteor';
import { Questions } from '../imports/collections/questions';
import { Answers } from '../imports/collections/answers';
import { Mongo } from 'meteor/mongo';

Meteor.startup(() => {
  Meteor.publish('questions',function(){
    return Questions.find({});
  });
});

Meteor.methods({
  'stringUpdate'({ value, name }) {
    Answers.upsert(
      { "_id" : name, "user": Meteor.userId()},
      { "_id": name, "user": Meteor.userId(), "value" : value}
    );
  }
});
