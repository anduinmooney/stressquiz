$(document).ready(function(){
  $("form#stress_test").submit(function(){
    event.preventDefault();
    $("#output").empty();
    var warning = [];
    var health = [];
    var coping =[];
    $("input:checkbox[name=warning_signs]:checked").each(function(){
      warning.push($(this).val());
    })
    $("input:checkbox[name=health_signs]:checked").each(function(){
      health.push($(this).val());
    })
    $("input:checkbox[name=coping_methods]:checked").each(function(){
      coping.push($(this).val());
    })
    if (warning.length + health.length > coping.length) {
      $("#output").append("You ARE stressed.")
    }
    else if (warning.length + health.length === coping.length) {
      $("#output").append("You are kinda stressed.")
    }
    else {
      $("#output").append("You are NOT stressed!")

    }
  });
});
