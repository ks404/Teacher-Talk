
Template.addAppointment.events({
  'submit form' ( event, template ) {
    event.preventDefault();

    let picker   = $( '.datetimepicker' ),
        dateTime = picker.data( 'DateTimePicker' ).date();

    if ( dateTime ) {
      let appointment = dateTime.format();

      Meteor.call( 'addAppointment', appointment, ( error, response ) => {
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