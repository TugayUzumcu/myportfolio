


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

	var frameLooper = function(){	
		
		console.log(timespeeddefault);//Hiermee kan je zien in je console(browser) wat de timespeeddefault is
		if (myArray.length > 0){
			document.getElementById("myTypingText").innerHTML += myArray.shift(); 
//			Alle letters worden in een array gestopt, en dan haalt hij de element uit de array en stopt het in die myTypingText
//en verwijderd het uit de array
			console.log(myArray);//Is weer een console log
			loopTimer = setTimeout(frameLooper, timespeeddefault);//voert functie uit na het wachten

		}else{
			clearTimeout(loopTimer);//cleared de timer in settimeout.
			console.log("stop!");
		}
			 	
	};
			//frameLooper(); 
	return {
        frameLooper:frameLooper,  
		greet:greet
//		dit betekent dat alle functie een aparte intance hebben
//		dus stel dat jij iets wilt beschermen van de buiten wereld zodat je van buiten af geen rare fratsen gebeurt kun je closures gebruiken
//		de logica gebeurt binnen in die functie
//		en de gebruiker kan dan geen globale variabelen zomaar aanpassen om waarden te laten zien wat ze niet zijn
//		in een closure is dat zo afgehandeld dat de variabelen binnen in een functie worden gedeclareerd en daarom kun jij niet erbij of ze beinvloeden , Javascript is een functie based taal, geen scope based taal	
	};
};
	