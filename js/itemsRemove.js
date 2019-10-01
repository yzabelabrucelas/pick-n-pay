/* $( "button" ).click(function() {
    $( "p" ).remove();
  });
 */
  $(document).on('click','#removeButton',function() {
    $(this).closest("#divItem").remove();
});