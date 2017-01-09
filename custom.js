


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
	