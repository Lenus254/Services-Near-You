var entry=document.getElementById("addentry");
addentry.addEventListener("click",Displaydetails);

var row=1;
function Displaydetails(e){
    e.preventDefault()
    var name=document.getElementById("name").value;
    var profession=document.getElementById("service").value;
    var contact=document.getElementById("contact").value;
    var location=document.getElementById("location").value;
      // alert(location)
    if(!name || !profession || !contact || !location){
        alert("please enter all details");
        return;
    }
    var display=document.getElementById("display");
    var newrow=display.insertRow(row);
    var cell1=newrow.insertCell(0);
    var cell2=newrow.insertCell(1);
    var cell3=newrow.insertCell(2);
    var cell4=newrow.insertCell(3);

    cell1.innerHTML =name;
    cell2.innerHTML =profession;
    cell3.innerHTML =contact;
    cell4.innerHTML =location;

    row++


}