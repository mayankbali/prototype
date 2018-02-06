import './home.html';

import '../../components/hello/hello.js';
import '../../components/info/info.js';


Template.App_home.events({
     'submit form': function(event) {
        event.preventDefault();

        var registerData = {
           email: event.target.registerEmail.value,
           password: event.target.registerPassword.value
        }

        Accounts.createUser(registerData, function(error) {

           if (Meteor.user()) {
              console.log(Meteor.userId());
           } else {
              console.log("ERROR: " + error.reason);
           }
        });
     }
  });

  // Accounts.onLogin(function () {
  //   if (Meteor.user.profile.admin == true) {
  //     FlowRouter.go('dashboard')
  //   }
  // })
