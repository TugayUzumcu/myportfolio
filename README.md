# Welcome Message with LocalStorage

#### Wat kan je er mee doen?
* Naam van de bezoeker opslaan in localstorage
* Naam van de bezoeker letter voor letter weergeven op het scherm

## Waarom heb ik dit gemaakt?
Ik heb een website gemaakt voor een schoolproject. Op deze website wil ik de bezoekers het gevoel geven dat zij iets persoonlijks hebben met de website. De bezoeker vult zijn/haar naam in. Deze naam verschijnt letter voor letter op het scherm. Dit moet de bezoeker het gevoel geven dat de website voor hun is gemaakt.

## Demo
(http://athena.fhict.nl/users/i333757/framework/ "Demo Framework")

#### Installatie
Je kan het best als volgt gebruiken:
* download de library
* Pak de zip file uit
* Verplaats de bestanden naar je root map

#### voeg de volgende HTML code toe binnen je body tag 
```HTML
<section id="myTypingText"></section>
			
<script src="custom.js"></script>
```

#### Prompt tekst aanpassen?
Dat doe je via het javascript document.
Je kunt de "wat is jouw naam?" gedeelte aanpassen. 
Alles wat daarin wordt geschreven word opgeslagen in de localstorage
```javascript
name = prompt("Wat is jouw naam?");
```
#### snelheid van tekst aanpassen
```javascript
loopTimer = setTimeout('frameLooper()',80);
```
Door de "80" aan te passen kan je de tekst versnellen of langzamer laten lopen.

#### testen of je tekst wordt gedeeld in een array
Via je webbrowser (google chrome of firefox) kan je naar developerstool. Vervolgens in console kan je zien of de tekst is geplaatst in de array. 

#### Contact
tuuzinli@student.fontys.nl
