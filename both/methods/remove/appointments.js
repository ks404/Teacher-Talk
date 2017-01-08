Meteor.methods({
  delAppointment( appId ) {
    //check( appointment, String endtime, String );

    console.log(appId);

    Appointments.remove( _id = appId  )


}});