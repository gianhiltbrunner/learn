import { Mongo } from 'meteor/mongo';

export const Questions = new Mongo.Collection('questions');
export const Answers = new Mongo.Collection('answers');
//export const Users = new Mongo.Collection('users');
