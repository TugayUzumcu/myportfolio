window.onload=greet();		 

function greet(){
    name = localStorage.getItem("name");
    if (name == null || name == "null"){
      alert("Hi, Stranger!");
      name = prompt("What is your name?");
      localStorage.setItem("name", name);
    } else {
      
		alert ("Hi, " + name + "!");
    } // end greet
  } // end function 

 var myString = ("Welkom, " + localStorage.getItem("name"));
			 var myArray = myString.split("");
			 var loopTimer;

			 function frameLooper()
			 {
			 	if (myArray.length > 0) 
			 	{
			 		document.getElementById("myTypingText").innerHTML += myArray.shift();
			 		console.log(myArray);
			 		loopTimer = setTimeout('frameLooper()',80);

			 	}
			 	else
			 	{
			 		clearTimeout(loopTimer);
			 		console.log("stop!");
			 	}
			 	

			 }
			frameLooper();