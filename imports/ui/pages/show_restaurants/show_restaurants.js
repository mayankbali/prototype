import "./show_restaurants.html";
import "../../components/navbar/navbar.js";
import "../../components/main_navbar/main_navbar.js";

import "../../../api/admin_home/admin_home.js";
import "../../../api/admin_home/methods.js";
import { Template } from 'meteor/templating';
import { Admin_home } from '../../../api/admin_home/admin_home.js';

Template.show_restaurants.onRendered(function(){
        this.subscribe("admin_home.all");
});

 Template.show_restaurants.helpers({
      admin_home: function(){
      return Admin_home.find({}, { sort: { createdAt: -1 } });

      }

 });
