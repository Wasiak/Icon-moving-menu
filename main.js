	// new div for testing WebFonts
var titleBox = document.createElement('div');
document.body.appendChild(titleBox);
titleBox.classList.add('titleBox');
	// creating new paragraph in div
var firstP = document.createElement('p');	
	// class title with WebFont family...
firstP.classList.add('title');
titleBox.appendChild(firstP);	
firstP.innerHTML = 'Bazingaaa';

var secondP = document.createElement('p');
	//class shadow contains text-shadow
secondP.classList.add('title','shadow');
titleBox.appendChild(secondP);
secondP.innerHTML = 'Bazingaaa';

	// creating new div
var box = document.createElement('div');
document.body.appendChild(box);
box.classList.add('titleBox');
	// div inside box
var redSquare = document.createElement('div');
box.appendChild(redSquare);
	// for testing transition when hover
redSquare.classList.add('red');		