var check = document.getElementById("check");
var star = document.getElementsByClassName("star");
var getmail = document.getElementById("get");
var messages = document.getElementById("messages");
var text = document.getElementsByClassName("text");
var element = document.getElementsByClassName("element");
var trash = document.getElementById("delete");
var message = document.getElementsByClassName("message");
var actions = document.getElementsByClassName("radius");
var inputlist = ["dev", "personal"];


function removeLabel(tag){
  for (var box = 0; box < element.length; box++) {
    if (element[box].checked){
      (element[box].parentNode).removeChild(tag);
    }
  }
}

$('#rlabel').on("change", function(){
  var txt = this.options[this.selectedIndex].value;
  var tags = document.getElementsByClassName('tags');
  for (var tag in tags){
    if(tags[tag].innerHTML === txt){
      removeLabel(tags[tag]);
    }
  }
});

$('#alabel').on("change", function(){
  if (this.options[this.selectedIndex].value !== "create"){
    var txt = this.options[this.selectedIndex].value;
    var tag = document.createElement("div");
    tag.innerHTML = txt;
    tag.className = "tags";
    addLabel(tag);
  }
  else {
    var input = prompt("Enter new tag name:");
    if (inputlist.indexOf(input) === -1){
      var txt = input;
      $('#alabel').append('<option '+ 'value="' + txt +'">'+ txt +'</option>');
      $('#rlabel').append('<option '+ 'value="' + txt +'">'+ txt +'</option>');
      inputlist.push(input);
      var tag = document.createElement("div");
      tag.innerHTML = txt;
      tag.className = "tags";
      addLabel(tag);
    }
  }
});

function addLabel(tag){
  for (var box = 0; box < element.length; box++) {
    if (element[box].checked){
       tag.style.width = tag.innerHTML.length*11 + "px";
      element[box].parentNode.insertBefore(tag, element[box].parentNode.lastChild.previousSibling);
    }
  }
}

function unreadCount(){
  var count = document.getElementById("count");
  var un = document.getElementsByClassName("un");
  count.innerHTML = un.length;
}

unreadCount();

function changeSelectedBack(event){
  var target = event.target;
  (target.parentNode).style.backgroundColor = (target.checked) ? "#FFFFCA" : "white";
}

$('.element').on("click", changeSelectedBack);

function markasRead(){
  for (var box = 0; box < element.length; box++) {
  if (element[box].checked){
    (element[box].parentNode).classList.remove("un");
    (element[box].parentNode).classList.add("re");
    }
  }
  unreadCount();
}

function markasUnread(){
  for (var box = 0; box < element.length; box++) {
  if (element[box].checked){
    (element[box].parentNode).classList.remove("re");
    (element[box].parentNode).classList.add("un");
    }
  }
  unreadCount();
}

$('#read').on("click", markasRead);
$('#notread').on('click', markasUnread);

function deselectAll(){
  for (var box = 0; box < element.length; box++) {
    element[box].checked = false;
    (element[box].parentNode).style.backgroundColor = "white";
  }
}

function selectAll(){
  for (var box = 0; box < element.length; box++) {
    element[box].checked = true;
    (element[box].parentNode).style.backgroundColor = "#FFFFCA";
  }
}

function enableButtons(){
  for (var box in element){
    if (!element[box].checked){
      actions.disabled = true;
    }
    else {$(actions).removeAttr("disabled");
  }
}
}

$(window).on("click", enableButtons);

function deleteMessage(){
  for (var box = 0; box < element.length; box++) {
  if (element[box].checked){
    (element[box].parentNode).parentNode.removeChild(element[box].parentNode);
  }
 }
 unreadCount();
}

trash.addEventListener("click", deleteMessage);

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
  more.classList.add("un");
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
  unreadCount();
});

check.addEventListener("click",function(){
  if (check.innerHTML === '<i class="fa fa-square-o" aria-hidden="true"></i>'){
    check.innerHTML = '<i class="fa fa-check-square-o" aria-hidden="true"></i>';
    selectAll();
  }
  else {
    check.innerHTML = '<i class="fa fa-square-o" aria-hidden="true"></i>';
    deselectAll();
  }

});

$('.text').on("click",function(event){
  var target = event.target;
  (target.parentNode).parentNode.classList.remove("un");
  (target.parentNode).parentNode.classList.add("re");
  unreadCount();
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
  else {target.className = 'fa fa-star-o';}
});
