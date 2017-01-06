
import "./appointments.html";

import { Meteor } from 'meteor/meteor';

Template.appointments.onCreated( () => {
  let template = Template.instance();
  template.subscribe( 'appointments' );
});

Template.appointments.helpers({
  appointments() {
    let appointments = Appointments.find( {}, { sort: { timestamp: 1 } } );
    if ( appointments ) {
      return appointments;
    }
  }
});