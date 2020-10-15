// Identifying letter from mouse click
var drumButtonNumber = document.querySelectorAll(".drum").length;
for (var i = 0; i < drumButtonNumber; i++) {

  document.querySelectorAll(".drum")[i].addEventListener("click", function() {
    selectSound(this.innerHTML);
    buttonAnimation(this.innerHTML);
  });
}
// Identifying letter from key pressed
document.addEventListener("keydown", function(event) {
  selectSound(event.key);
  buttonAnimation(event.key);

});
// Matching letters to sounds
function selectSound(key) {
  switch (key) {
    case "w":
      var tom1 = new Audio('sounds/tom-1.mp3');
      tom1.play();
      break;
    case "a":
      var tom2 = new Audio('sounds/tom-2.mp3');
      tom2.play();
      break;
    case "s":
      var tom3 = new Audio('sounds/tom-3.mp3');
      tom3.play();
      break;
    case "d":
      var tom4 = new Audio('sounds/tom-4.mp3');
      tom4.play();
      break;
    case "j":
      var snare = new Audio('sounds/snare.mp3');
      snare.play();
      break;
    case "k":
      var kick = new Audio('sounds/kick-bass.mp3');
      kick.play();
      break;
    case "l":
      var crash = new Audio('sounds/crash.mp3');
      crash.play();
    default:
      console.log(event.key);

  }
}
// Adding button animation
function buttonAnimation(currentKey){
  var activeButton = document.querySelector("."+ currentKey);
  activeButton.classList.add("pressed");
  setTimeout(function(){
  activeButton.classList.remove("pressed");
},100);

}
// Shorter version with no loop
// document.querySelector(".set").addEventListener("click",function(){
// var audio = new Audio('sounds/tom-1.mp3');
//     audio.play();
// });
