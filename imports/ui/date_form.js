
import "./date_form.html";

import { Meteor } from 'meteor/meteor';


Template.date_form.onRendered( () => {
  $( '.datetimepicker' ).datetimepicker({
    timeZone: 'America/Chicago',
    useCurrent: true
  });
});



Template.date_form.events({
  'submit form' ( event, template ) {
    event.preventDefault();

    let picker   = $( '.datetimepicker' ),
        dateTime = picker.data( 'DateTimePicker' ).date();

    let timepicker = $( '.timepicker'),
        durationString = timepicker.val(),
        duration = durationString.replace(/[^0-9]/g, '');

      console.log(duration);


    if ( dateTime ) {
      let appointment = dateTime.format();


      console.log(duration);      

      let endtime = moment(appointment).add(duration, 'minutes').format();

      Meteor.call( 'addAppointment', appointment, endtime, ( error, response ) => {
        if ( error ) {
          Bert.alert( error.reason, 'danger' );
        } else {
          picker.val( '' );
          Bert.alert( 'Appointment added!', 'success' );
        }
      });
    } else {
      Bert.alert( 'Make sure to pick an appointment time!', 'danger' );
    }
  }
});