$(document).ready(function(){
  $("#formOne").submit(function(event){
    var name = $("input#name").val();
    var address = $("input#address").val();
    var phone = $("input#phone").val();
    var email = $("input#email").val();

    (".name").text(name);
    (".hat").text(hat);
    (".address").text(address);


    $(".receipt").show();
  

     event.preventDefault();
   });
 });
