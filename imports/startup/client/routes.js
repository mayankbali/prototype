import { FlowRouter } from 'meteor/kadira:flow-router';
import { BlazeLayout } from 'meteor/kadira:blaze-layout';

// Import needed templates
import '../../ui/layouts/body/body.js';
import '../../ui/pages/home/home.js';
import '../../ui/pages/not-found/not-found.js';
import '../../ui/pages/login/login.js';
import '../../ui/pages/admin_home/admin_home.js';


import '../../ui/components/navbar/navbar.js';
import '../../ui/components/main_navbar/main_navbar.js';

// Set up all routes in the app
FlowRouter.route('/', {
  // FlowRouter.route('/login' {
  triggersEnter: [function(context, redirect) {
  if(Meteor.user().profile.admin == 'true'){
    redirect('/login');
  }
  }],
  name: 'App.home',
  action() {
    BlazeLayout.render('App_body', { main: 'App_home' });
  },
});

FlowRouter.notFound = {
  action() {
    BlazeLayout.render('App_body', { main: 'App_notFound' });
  },
};



FlowRouter.route('/login', {
  name: 'App.home',
  action() {
    BlazeLayout.render('App_body', { main: 'login' });
  },
});

//=================== ADMIN ROUTES ======================================//
// Start the admin routes definitions
var adminRoutes = FlowRouter.group({
  prefix: '/admin',
  name: 'admin'
});

adminRoutes.route('/', {
  action() {
    BlazeLayout.render('App_body', { main : 'admin_home'});
  }
});

// adminRoutes.route('/restaurants_add', {
//   action() {
//     BlazeLayout.render('App_body', { main : 'restaurants_add'});
//   }
// });
