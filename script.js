var check = document.getElementById("check");
var star = document.getElementsByClassName("star");
var getmail = document.getElementById("get");
var messages = document.getElementById("messages");
var text = document.getElementsByClassName("text");
var element = document.getElementsByClassName("element");
var trash = document.getElementById("delete");
var message = document.getElementsByClassName("message");
var actions = document.getElementsByClassName("radius");

function enableButtons(){
  for (var box in element){
    if (!element[box].checked){
      actions.disabled = true;
    }
    else {$(actions).removeAttr("disabled")};
}
}

$(window).on("click", enableButtons);


trash.addEventListener("click", function(){
for (var box in element){
  if (element[box].checked){
    (element[box].parentNode).parentNode.removeChild(element[box].parentNode);
  }
}
});

function randomEmailtext(){
  var getmessage = ["You can’t input the protocol without calculating the mobile RSS protocol!",
  "Connecting the system won’t do anything, we need to input the mobile AI panel!",
  "Use the 1080p HTTP feed, then you can parse the cross-platform hard drive!",
  "We need to program the primary TCP hard drive!",
  "If we override the interface, we can get to the HTTP feed through the virtual EXE interface!",
  "We need to back up the wireless GB driver!",
  "We need to index the mobile PCI bus!",
  "If we connect the sensor, we can get to the HDD port through the redundant IB firewall!"];
  return getmessage[Math.floor(Math.random()*getmessage.length)];
}

function addbefore(parent, newfirst) {
    parent.insertBefore(newfirst, parent.firstChild);
}

getmail.addEventListener("click", function(){
  var more = document.createElement("div");
  more.className = "message";
  var check = document.createElement("input");
  check.className = "element";
  check.type = "checkbox";
  var star = document.createElement("button");
  star.className = "star";
  star.innerHTML = '<i class="fa fa-star-o" aria-hidden="true"></i>';
  star.style.marginLeft = "1.5%";
  var textdiv = document.createElement("div");
  textdiv.className = "text";
  var text = document.createElement("p");
  text.innerHTML = randomEmailtext();
  textdiv.appendChild(text);
  more.appendChild(check);
  more.appendChild(star);
  more.appendChild(textdiv);
  addbefore(messages, more);
});

check.addEventListener("click",function(){
  if (check.innerHTML === '<i class="fa fa-square-o" aria-hidden="true"></i>'){
    check.innerHTML = '<i class="fa fa-check-square-o" aria-hidden="true"></i>';}
  else check.innerHTML = '<i class="fa fa-square-o" aria-hidden="true"></i>';
});


$(document).on("click", ".star", function(event){
  var target = event.target;
  if (target.innerHTML === '<i class="fa fa-star-o" aria-hidden="true"></i>'){
    target.innerHTML = '<i class="fa fa-star" aria-hidden="true"></i>'; }
  else if (target.innerHTML === '<i class="fa fa-star" aria-hidden="true"></i>'){
    target.innerHTML = '<i class="fa fa-star-o" aria-hidden="true"></i>';}
  else if (target.className === 'fa fa-star-o') {
    target.className = 'fa fa-star';
  }
  else {target.className = 'fa fa-star-o'};
});
