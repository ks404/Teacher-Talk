Meteor.methods({
  addAppointment( appointment ) {
    check( appointment, String );

    try {
      return Appointments.insert( { timestamp: appointment } );
    } catch( exception ) {
      return exception;
    }
  }
});