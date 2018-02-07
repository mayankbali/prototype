import "./admin_home.html";

import "../../components/navbar/navbar.js";
import "../../components/main_navbar/main_navbar.js";

import "../../../api/admin_home/admin_home.js";
import "../../../api/admin_home/methods.js";

Template.booking.onRendered(function(){
        this.subscribe("admin_home.all");
});

Template.booking.helpers({
      admin_home: function(){
        return Admin_home.find();
      }
});

Template.booking.events({
          'click .cta': function(event){
              event.preventDefault();
              var resrname = $("#rname").val();
              var resaddress = $("#address").val();
              var resauthpname = $("#authpname").val();
              var resauthpcon = $("#authpcon").val();

              Meteor.call('Admin_home.methods.insert',{
                  hjg: resrname,
                  hjk: resaddress,
                  hjd: resauthpname,
                  hje: resauthpcon
              }, function(err, res){
                  console.log(res);
              });
                return false;
          }
});
