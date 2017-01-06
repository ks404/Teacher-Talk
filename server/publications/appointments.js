Meteor.publish( 'appointments', function() {
  return Appointments.find();
});