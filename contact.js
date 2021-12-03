function validateForm() {
  var name = document.getElementById("NAME").value
  var email = document.getElementById("EMAIL").value
  var message = document.getElementById("MESSAGE").value
 // alert(message)
  if ((!name ) || (!email))
      {
    alert("please input name and email!!");
  }
 
//  else if ((month.value <= 0) || (month.value> 12))
//       {
//     alert("month is out of range");
//   }
  else 
  {
    alert(name+"  we have received your message,Thank you for contacting us")
  } }