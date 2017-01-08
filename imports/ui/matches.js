import "./matches.html";

import { Meteor } from 'meteor/meteor';

Template.matches.onCreated( () => {
  let template = Template.instance();
  template.subscribe( 'appointments' );
});

Template.matches.helpers({
  appointments() {
    let appointments = Appointments.find( {}, { sort: { timestamp: 1 } } );
    if ( appointments ) {
      return appointments;
    }
  }
});