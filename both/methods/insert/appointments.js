Meteor.methods({
  addAppointment( appointment ) {
    check( appointment, String );

    try {
      return "method exception1" + Appointments.insert( { timestamp: appointment } );
    } catch( exception ) {
      return "method exception2" + exception;
    }
  }
});