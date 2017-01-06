Appointments = new Mongo.Collection( 'appointments' );


//requires all database actions to come from methods on the server, for security or whatever

Appointments.allow({
  insert: () => false,
  update: () => false,
  remove: () => false
});



Appointments.deny({
  insert: () => true,
  update: () => true,
  remove: () => true
});