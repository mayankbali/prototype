import { Meteor } from 'meteor/meteor';
import { Admin_home } from '../admin_home.js';

Meteor.publish('admin_home.all', function(){
        return Admin_home.find();
});

Meteor.publish('admin_home.one', function(id){
          return Admin_home.find({
            _id: id
          });
});
