// $(document).ready(function() {
//     $("form").submit(function(event){
//         var name=$("input#NAME").val();
//         var email=$("input#EMAIL").val();
//          var message=$("textarea#MESSAGE").val();
//          alert(name)
//             if($("input#NAME").val() && $("input#EMAIL").val()){
//          alert(name+",we have recieved your message.Thank you for reaching out to us.")
            
//             }
//              else{
//                  alert("please enter your name and email");
//              }
         
//             });
//         });

        $(document).ready(function(){
            $("form").submit(function(event){
              var name = $("input#NAME").val();
              var email = $("input#EMAIL").val();
              var message = $("textarea#MESSAGE").val();
              if ($("input#NAME").val() && $("input#EMAIL").val()){
                alert (name + ", we have received your message. Thank you for reaching out to us.");
              }
              else {
                alert("Please enter your name and email!");
              }
            });
          });