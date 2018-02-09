import './home.html';

import '../../components/hello/hello.js';
import '../../components/info/info.js';
import { Accounts } from 'meteor/accounts-base';
import { Tracker } from 'meteor/tracker'

// Template.App_home.events({
//      'submit form': function(event) {
//         event.preventDefault();
//
//         var registerData = {
//            email: event.target.registerEmail.value,
//            password: event.target.registerPassword.value
//         }
//
//         Accounts.createUser(registerData, function(error) {
//
//            if (Meteor.user()) {
//               console.log(Meteor.userId());
//            } else {
//               console.log("ERROR: " + error.reason);
//            }
//         });
//      }
//   });

  Deps.autorun(function(){
    if(Meteor.user()){
      FlowRouter.go("/login");
    console.log("User is logged  in");
  }
    else {
        console.log("User is not logged in");
    }
  });

  // Accounts.onLogin(function () {
  //   if (Meteor.user.profile.admin == true) {
  //     FlowRouter.go('dashboard')
  //   }
  // })
