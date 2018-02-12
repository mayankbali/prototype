import "./show_restaurants.html";
import "../../components/navbar/navbar.js";
import "../../components/main_navbar/main_navbar.js";

import { Admin_home } from '../../../api/admin_home/admin_home.js';



Template.show_restaurants.onRendered(function(){
        this.subscribe("admin_home.all");
});

 Template.show_restaurants.helpers({
      content19: function(){
          console.log("hello");
      return Admin_home.find({}, { sort: { createdAt: -1 } });

      }

 });
