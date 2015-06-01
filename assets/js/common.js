$(function() {
  $( ".datepicker" ).datepicker();
  var input = document.getElementById('InputDestination');
  autocomplete = new google.maps.places.Autocomplete(input, {types: ['(regions)']});
});

