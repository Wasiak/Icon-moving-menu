	//create navigation part ofsite
var menu = document.createElement('nav');
menu.classList.add('menu');
document.body.appendChild(menu);
 	// creat list of categories to menu
 var list =  document.createElement('ul');
 menu.appendChild(list);
 var listItem = [];
 listItem[0] = document.createElement('li');
 list.appendChild(listItem[0]);
 listItem[0].innerHTML = 'category 1';
 listItem[1] = document.createElement('li');
 list.appendChild(listItem[1]);
 listItem[1].innerHTML = 'category 2';
 listItem[2] = document.createElement('li');
 list.appendChild(listItem[2]);
 listItem[2].innerHTML = 'category 3';
 	//creating links for categories
 var cat1Links = [];	
 for (i = 0; i < 6; i++){
 	cat1Links[i] = document.createElement('a');
 	listItem[0].appendChild(cat1Links[i]);
 	cat1Links[i].innerHTML = 'link ' + i;
 	cat1Links[i].href = '#';
 }
  var cat1Links = [];	
 for (i = 0; i < 4; i++){
 	cat1Links[i] = document.createElement('a');
 	listItem[1].appendChild(cat1Links[i]);
 	cat1Links[i].innerHTML = 'link ' + i;
 	cat1Links[i].href = '#';
 }
  var cat1Links = [];	
 for (i = 0; i < 7; i++){
 	cat1Links[i] = document.createElement('a');
 	listItem[2].appendChild(cat1Links[i]);
 	cat1Links[i].innerHTML = 'link ' + i;
 	cat1Links[i].href = '#';
 }			


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
	//another div in box
var blueSquare = document.createElement('div');
box.appendChild(blueSquare);
blueSquare.classList.add('blue');	