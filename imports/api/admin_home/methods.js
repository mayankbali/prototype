import { Meteor } from 'meteor/meteor';
import { ValidatedMethod } from 'meteor/mdg:validated-method';
import _ from 'lodash';

import { Admin_home } from './admin_home.js';
import { Admin_homeSchema } from './schema.js';

export const insertAdmin_home = new ValidatedMethod({
          name: 'Admin_home.methods.insert',
          validate: null,
          run(newAdmin_home){

              Admin_home.insert({newAdmin_home, createdAt: new Date()});

              return newAdmin_home;
          }
});
