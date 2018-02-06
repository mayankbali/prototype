import { Accounts } from 'meteor/accounts-base';

 var emails =  ['s@s.com','v@v.com','d@d.com','m@m.com'];

Accounts.onCreateUser((options, user) => {

var email = user.emails[0].address;


  if (options.profile){
    user.profile = options.profile;
  }

  if(emails.indexOf(email) > -1){
  if(!user.profile) user.profile = {};
    user.profile.admin = true;
  }


  return user;
});
