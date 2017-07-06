$(document).ready(function(){
  $("#formOne").submit(function(event){
    var name = $("input#name").val();
    var address = $("input#address").val();
    var phone = $("input#phone").val();
    var email = $("input#email").val();

   $(".output").prepend("<div class='container panel-primary'><li class='responsename panel-heading'>"+ name + "</li><div class='panel-body'><li class='responseaddress'><span>"+ address +"</span></li><li class='responsephone'><span>"+ phone +"</span></li><li class='responseemail'><span>"+ email +"</span></li></div></div>");
  //  $(".address").prepend(address);
  //  $(".phone").prepend(phone);
  //  $(".email").prepend(email);

   $(".output").show();
   $(".panel-body").hide();

   $(".panel-primary").first().click(function() {
     $(this).find(".panel-body").toggle();
   });

    event.preventDefault();
  });
});
