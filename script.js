function openMenu(){
  var menuIcon= document.getElementById("menu-icon");
  var menuContent = document.getElementsByClassName("menu-content")[0];
  if(menuContent.classList.length == 1){
    menuIcon.classList.remove("fa-bars");
    menuIcon.classList.add("fa-times");
    menuContent.classList.add("opened");
  } else {
    menuIcon.classList.remove("fa-times");
    menuIcon.classList.add("fa-bars");
    menuContent.classList.remove("opened");
  }
}
function toSection(id){
  var section = document.getElementById(id);
  openMenu();
  section.style.color = "lawngreen";
  setTimeout(function(){section.style.color = "mediumturquoise";}, 1000);
}