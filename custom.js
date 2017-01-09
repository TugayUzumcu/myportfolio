


var Tugay = function()
{
	
	
	 var myString = ("Welkom, " + localStorage.getItem("name"));
			var myArray = myString.split("");
			var loopTimer;
			var timespeeddefault ="800";
	
	
var greet = function(timespeed){
	
	timespeeddefault = timespeed || timespeeddefault;
	
    name = localStorage.getItem("name");
    if (name == null || name == "null"){ 
      alert("Hallo, Bezoeker!");
      name = prompt("Wat is jouw naam?");
      localStorage.setItem("name", name);//De ingevoerde tekst wordt in localstorage gezet
    } else {
      
		alert ("Hi, " + name + "!");
		this.frameLooper();
    } // end greet
	
	
	
  }; // end function



			var frameLooper = function()
			 {	
				
				 
				 
				 console.log(timespeeddefault);
			 	if (myArray.length > 0) 
			 	{
			 		document.getElementById("myTypingText").innerHTML += myArray.shift();
			 		console.log(myArray);
			 		loopTimer = setTimeout(frameLooper, timespeeddefault);

			 	}
			 	else
			 	{
			 		clearTimeout(loopTimer);
			 		console.log("stop!");
			 	}
			 	
			 };
			//frameLooper(); 
	return {
        frameLooper:frameLooper,
		greet:greet
	};
};
	
//	
//	var Bounce = function () {
//
//  
//    var defaultSettings = {
//        selector: '.bounce',
//        gravity: 9.81,
//        updateSpeed: 1 //In milliseconds
//    };
//
//  
//    var element;
//
//  
//    var speedY;
//
//    var timer;
//
//    var position = {
//        x: 0,
//        y: 0
//    };
//
//    var updateElement = function() {
//        element.style.marginLeft = position.x + 'px';
//        element.style.marginTop = position.y + 'px';
//    };
//
//
//    var move = function(xChange, yChange) {
//
//        position.x += xChange;
//        position.y += yChange;
//
//        if(element.parentElement.clientHeight <= position.y + element.clientHeight) {
//            speedY = -speedY;
//            console.log(speedY);
//        }
//
//        updateElement();
//    };
//
//    var update = function() {
//        move(0, speedY);
//        speedY += defaultSettings.gravity * (defaultSettings.updateSpeed/1000);
//    };
//
//    var mergeObjects  = function(object1, object2) {
//        for (var attrname in object1) {
//            if(object2.hasOwnProperty(attrname)) {
//                object1[attrname] = object2[attrname];
//            }
//        }
//    };
//
//    var init = function(selector, settings) {
//        mergeObjects(defaultSettings, settings || {});
//        selector = selector || defaultSettings.selector;
//        element = document.querySelector(selector);
//        speedY = 0;
//        timer = setInterval(update, defaultSettings.updateSpeed);
//    };
//
//   
//    return {
//        init: init
//    };
//};
//
//
//
//
//
//
//