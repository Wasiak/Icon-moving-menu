	//create navigation part ofsite
var menu = document.createElement('nav');
menu.classList.add('menu');
menu.classList.add('navbar-fixed-top');
document.body.appendChild(menu);
 	// create list of categories to menu
 	// list is ol - main list
 var list =  document.createElement('ol');
 menu.appendChild(list);
 	// listItem are children of ol, they are li 
 var listItem = [];
 	// listItem[0] is first li in main ol
 listItem[0] = document.createElement('li');
 list.appendChild(listItem[0]);
 	// link1 is a child of first listItem is a 'link' which is visible in listItem[0]
 var link1 = document.createElement('a');
 listItem[0].appendChild(link1);
 link1.href = '#'
 link1.innerHTML = 'category 1';

 listItem[1] = document.createElement('li');
 list.appendChild(listItem[1]);
 var link2 = document.createElement('a');
 listItem[1].appendChild(link2);
 link2.href = '#'
 link2.innerHTML = 'category 2';

 listItem[2] = document.createElement('li');
 list.appendChild(listItem[2]);
 var link3 = document.createElement('a');
 listItem[2].appendChild(link3);
 link3.href = '#'
 link3.innerHTML = 'category 3';
 	//creating links for categories
 var cat1Links = [];
 	// cat1list is children of li from main list. is new list inside li of main list
 var cat1list = document.createElement('ul');
 listItem[0].appendChild(cat1list);
 	// for creating cat1Links which are li, children of ul list named cat1list	
 for (i = 0; i < 6; i++){
 	cat1Links[i] = document.createElement('li');
 	cat1list.appendChild(cat1Links[i]);
 	cat1Links[i].classList.add('links');
 		// creating link for every li inside ul list 
 		var link = document.createElement('a');
 		cat1Links[i].appendChild(link);
 		link.innerHTML = 'link ' + i;
 		link.href = '#';
 }
 	// creating elements for second li in main list ( category 2)
 var cat2Links = [];
 var  cat2list = document.createElement('ul');
 listItem[1].appendChild(cat2list);	
 for (i = 0; i < 4; i++){
 	cat2Links[i] = document.createElement('li');
 	cat2list.appendChild(cat2Links[i]);
 	cat2Links[i].classList.add('links');
 		var link = document.createElement('a');
	 	cat2Links[i].appendChild(link);
	 	link.innerHTML = 'link ' + i;
	 	link.href = '#';
 }

  var cat3Links = [];
  var cat3list =  document.createElement('ul');
  listItem[2].appendChild(cat3list);	
 for (i = 0; i < 7; i++){
 	cat3Links[i] = document.createElement('li');
 	cat3list.appendChild(cat3Links[i]);
 	cat3Links[i].classList.add('links');
 		var link = document.createElement('a');
	 	cat3Links[i].appendChild(link);
	 	link.innerHTML = 'link ' + i;
	 	link.href = '#';
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

var text = document.createElement('div');
document.body.appendChild(text);
text.innerHTML = 'dupa<br>dupa<br>dupa<br>dupa<br>'

var container = document.createElement('div');
document.body.appendChild(container);
container.classList.add('main');
container.classList.add('container');