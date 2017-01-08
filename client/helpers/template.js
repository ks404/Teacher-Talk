Template.registerHelper( 'dateTime', ( timestamp ) => {
  if ( timestamp ) {
    let momentToFormat = moment( timestamp ),
        date           = momentToFormat.format( 'MMMM Do, YYYY' ),
        time           = momentToFormat.format( 'hh:mm a' );

    return `${ date } at ${ time }`;
  }

});


Template.registerHelper( 'tillTime', (timeend ) => {
  if ( timeend ) {
    let momentToFormat = moment( timeend ),
        date           = momentToFormat.format( 'MMMM Do, YYYY' ),
        time           = momentToFormat.format( 'hh:mm a' );

    return ` till ${ time }`;
  }

});