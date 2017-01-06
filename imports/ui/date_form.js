
import "./date_form.html";

import { Meteor } from 'meteor/meteor';


Template.date_form.onRendered( () => {
  $( '.datetimepicker' ).datetimepicker({
    timeZone: 'America/Chicago',
    useCurrent: true
  });
});