import { Meteor } from 'meteor/meteor';
import { Questions } from '../imports/collections/questions';
import { Mongo } from 'meteor/mongo';

Meteor.startup(() => {
  console.log(Questions.find().fetch());

  Meteor.publish('questions',function(){
    return Questions.find({});
  });
});
