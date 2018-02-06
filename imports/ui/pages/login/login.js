import './login.html';

Template.login.events({

   'submit form': function(event) {
      event.preventDefault();
      var myEmail = event.target.loginEmail.value;
      var myPassword = event.target.loginPassword.value;

      Meteor.loginWithPassword(myEmail, myPassword, function(error) {

         if (Meteor.user()) {
            console.log(Meteor.userId());
         } else {
            console.log("ERROR: " + error.reason);
         }
      });
   }
});
