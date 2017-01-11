


var Tugay = function()
{
	
	
			var myArray; //Ik heb hier een variable "myArray" aangemaakt
			var loopTimer; //ik heb hier een variable "loopTimer" gemaakt.
			var timespeeddefault ="800"; //Ik heb hier de variable timespeeddefault aangemaakt en een standaard waarde van 800 toegewezen.
	
	
var greet = function(timespeed){ //Hier heb ik een variable greet gemaakt 
	//Hierboven zie je timespeed, Timespeed is de snelheid die wordt aangegeven
	
	timespeeddefault = timespeed || timespeeddefault;//timespeeddefault wordt boven standaard op 800 gezet maar
	//als er in de html greet wordt opgeroepen en een waarde wordt toegewezen veranderd de speeddefault want timespeeddefault is timespeed dus wat je invuld maar als het leeg wordt gelaten neemt hij 800 mee
	
    var name = localStorage.getItem("name"); //variable name krijgt de data in de HTML5 Api localstorage 
    if (name == null || name == "null"){ //Als name leeg is gaat de if-statement aan de slag :)  
      alert("Hallo, Bezoeker!"); //Ja.. Alert.
      name = prompt("Wat is jouw naam?"); // Wat je hier invoert komt in de variable name.
      localStorage.setItem("name", name);//De ingevoerde tekst wordt in localstorage gezet

		
    } 
      	var myString = ("Welkom, " + localStorage.getItem("name")); //in variable mystring komt de ingevoerde tekst en de tekst welkom
		myArray = myString.split(""); //wordt gesplit
		alert ("Hi, " + name + "!"); // een alert met de "name"
		this.frameLooper();
	
	
	
  }; // end function



			var frameLooper = function()
			 {	
				
				 
				 
				 console.log(timespeeddefault);//Hiermee kan je zien in je console(browser) wat de timespeeddefault is
			 	if (myArray.length > 0) 
			 	{
			 		document.getElementById("myTypingText").innerHTML += myArray.shift();
			 		console.log(myArray);//Is weer een console log
			 		loopTimer = setTimeout(frameLooper, timespeeddefault);//looptime wordt hier timesetout 

			 	}
			 	else
			 	{
			 		clearTimeout(loopTimer);//Stoppen
			 		console.log("stop!");
			 	}
			 	
			 };
			//frameLooper(); 
	return {
        frameLooper:frameLooper,//Return
		greet:greet//Return
	};
};
	