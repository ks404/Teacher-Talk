Meteor.methods({
  addAppointment( appointment, endtime ) {
    //check( appointment, String endtime, String );

    try {
      return Appointments.insert( { timestamp: appointment, timeend: endtime } );
    } catch( exception ) {
      return exception;
    }
  }
});