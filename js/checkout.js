// terms and conditions
$(document).ready(function(){
  $('#targets').submit(function() {
      var error = 0;
      if (!($('#terms').is(':checked'))) 
      {
          error = 1
          alert("Please Tick the Agree to Terms of Use");
      }

      if (error) {
          return false;
      } else {
          return true;
      }

  });
});