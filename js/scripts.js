$(document).ready(function() {
 
  $("#formOne").submit(function() {
    var userNameInput = $("input#userName").val();
    $(".userName").append(userNameInput);
     $("#letter").show();
     
     event.preventDefault();

  });
});