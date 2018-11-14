var panelWidth=document.getElementById("top-panel").clientWidth;
document.getElementById("top-panel").innerHTML;
console.log("this is the screen width", panelWidth);

var phoneNumber = document.getElementById("num");
//console.log("this is the phone number", phoneNumber);

var number="+44 (0) 7920 2077 41";

var myTelephone = document.getElementById("my-tel");
//console.log("this is the telephone tag", myTelephone);

var newTag = document.createElement("a");

newTag.href="tel: " + number;

newTag.className="panel";

var newTag_content = document.createTextNode(number);

newTag.appendChild(newTag_content);

var oldTag=document.getElementById("num");

if (panelWidth<400){
    myTelephone.replaceChild(newTag, oldTag);
}


