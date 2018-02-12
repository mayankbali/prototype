import "./main_navbar.html"
import { Accounts } from 'meteor/accounts-base';

Template.main_navbar.events({
"click.logout": function(event){
  Meteor.logout(function(err){
    if(err){
      Bert.alert(err.reason,"danger","growl-top-right");

}else {
  Router.go('/');
  Bert.alert("You are now logged out","success","growl-top-right");
}

  });
},

});
