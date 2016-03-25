var init = function() {
  var card = document.getElementById('card');
  var numFlips = 0;
  var currentImage = 0;
  //change this 4 to however many images get made.
  //they should all be named like side0.png, side1.png, side2.png, etc
  var totalImages = 9;
  var currentlyFront = true;
  var flipInProgress = false;
  document.getElementById('flip-button').addEventListener( 'click', function(){
    if(flipInProgress) {
       return;
    }
    flipInProgress = true;
    setTimeout(function(){ flipInProgress = false;}, 1000);
    numFlips++;
    currentImage++;
    
    if (currentImage >= totalImages) {
       currentImage = 1; // just keep cycling through the back images
    }
    var imgToChange;
    if (currentlyFront) {
       imgToChange = document.getElementById('backimg');
       currentlyFront = false;
    } else {
       imgToChange = document.getElementById('frontimg');
       currentlyFront = true;
    }
    imgToChange.src = "side" + currentImage + ".png";
    
    card.style = "transform: rotateY(" + (numFlips * -180) + "deg);";
  }, false);
};

window.addEventListener('DOMContentLoaded', init, false);