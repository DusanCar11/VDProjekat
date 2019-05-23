function check() {
	if ('localStorage' in window && window.localStorage!=null) {
		return true;
	}
	return false;
}

function sortComp(a, b) {
	return b.grade - a.grade;
}

function loadRestaurants() {
	localStorage.clear();
	if (!check)
		return;
	if (localStorage.getItem("restaurant1")!=null) {
		return;
	}
	var array = new Array();
	var restaurant1 = {};
	restaurant1.name = "Pile i Prase";
	restaurant1.locationArea = "Zvezdara";
	restaurant1.street = "Bulevar Kralja Aleksandra";
	restaurant1.num_of_grades = 3249;
	restaurant1.grade = 4.4;
	restaurant1.type_of_food = "Rostilj"
	restaurant1.description = "Rostilj, palacinke, srpska hrana, piletina. Jela od pileceg ili svinjskog mesa na rostilju - i sve je na cumuru! Brza dostava i povoljne cene! Uzivajte!";		
	restaurant1.meal1 = "Pljeskavica 200g";
	restaurant1.meal2 = "Pileci batak";
	restaurant1.meal3 = "Cevapi";
	restaurant1.meal4 = "Dimljeni batak";
	restaurant1.meal5 = "Vesalica";
	restaurant1.meal1_price = 280;
	restaurant1.meal2_price = 300;
	restaurant1.meal3_price = 280;
	restaurant1.meal4_price = 330;
	restaurant1.meal5_price = 300;
	array[0]=restaurant1;
	var restaurant2 = {};
	restaurant2.name = "Haos Food";
	restaurant2.locationArea = "Savski Venac";
	restaurant2.street = "Nemanjina";
	restaurant2.num_of_grades = 1169;
	restaurant2.grade = 4.4;
	restaurant2.type_of_food = "Pica"
	restaurant2.description = "Italijanska hrana, pice. Na vratima vaseg stana, Haos Food nema mana!";		
	restaurant2.meal1 = "Havaji 42cm";
	restaurant2.meal2 = "Peperoni 42cm";
	restaurant2.meal3 = "Kapricoza 42cm";
	restaurant2.meal4 = "Piroska 42cm";
	restaurant2.meal5 = "Vegetarijana 42cm";
	restaurant2.meal1_price = 850;
	restaurant2.meal2_price = 1000;
	restaurant2.meal3_price = 900;
	restaurant2.meal4_price = 900;
	restaurant2.meal5_price = 700;
	array[1]=restaurant2;
	var restaurant3 = {};
	restaurant3.name = "Collina - Burgers";
	restaurant3.locationArea = "Cukarica";
	restaurant3.street = "Pozeska";
	restaurant3.num_of_grades = 1911;
	restaurant3.grade = 4.6;
	restaurant3.type_of_food = "Burger"
	restaurant3.description = "Burgeri, Americka hrana. Riznica najrazlicitijih slanih ukusa i ponuda u kojoj ce svako lako pronaci svoju omiljenu kombinaciju!";
	restaurant3.meal1 = "Burger collina XL";
	restaurant3.meal2 = "Double cheeseburger XL";
	restaurant3.meal3 = "Burger classic L";
	restaurant3.meal4 = "Chilli burger XL";
	restaurant3.meal5 = "Big burger Collina";
	restaurant3.meal1_price = 575;
	restaurant3.meal2_price = 595;
	restaurant3.meal3_price = 575;
	restaurant3.meal4_price = 510;
	restaurant3.meal5_price = 355;
	array[2]=restaurant3;
	var restaurant4 = {};
	restaurant4.name = "Ela Giros";
	restaurant4.locationArea = "Palilula";
	restaurant4.street = "Ruzveltova";
	restaurant4.num_of_grades = 2208;
	restaurant4.grade = 4.3;
	restaurant4.type_of_food = "Giros"
	restaurant4.description = "Mediteranska hrana, grcka hrana, ukusni giros po originalnoj recepturi. Ukusno, toplo i brzo na Vasoj adresi!";
	restaurant4.meal1 = "Giros dzambo";
	restaurant4.meal2 = "Giros velika porcija";
	restaurant4.meal3 = "Giros dzambo porcija";
	restaurant4.meal4 = "Pomfrit";
	restaurant4.meal5 = "Sok";
	restaurant4.meal1_price = 350;
	restaurant4.meal2_price = 370;
	restaurant4.meal3_price = 470;
	restaurant4.meal4_price = 120;
	restaurant4.meal5_price = 90;
	array[3]=restaurant4;
	var restaurant5 = {};
	restaurant5.name = "Walter";
	restaurant5.locationArea = "Palilula";
	restaurant5.street = "27. marta";
	restaurant5.num_of_grades = 572;
	restaurant5.grade = 4.3;
	restaurant5.type_of_food = "Rostilj"
	restaurant5.description = "Rostilj, srpska hrana, sarajevski tradicionalni specijaliteti sa rostilja od sada i na Vasoj trpezi! Isprobajte cevape, pljeskavice, biftek, piletinu. Uzivajte!";
	restaurant5.meal1 = "Sarajevski cevapi";
	restaurant5.meal2 = "Pileci file";
	restaurant5.meal3 = "Pljeskavica";
	restaurant5.meal4 = "Raznjici";
	restaurant5.meal5 = "Biftek";
	restaurant5.meal1_price = 220;
	restaurant5.meal2_price = 300;
	restaurant5.meal3_price = 220;
	restaurant5.meal4_price = 520;
	restaurant5.meal5_price = 920;
	array[4]=restaurant5;
	var restaurant6= {};
	restaurant6.name = "Grill 51";
	restaurant6.locationArea = "Zvezdara";
	restaurant6.street = "Vojislava Ilica";
	restaurant6.num_of_grades = 2962;
	restaurant6.grade = 4.7;
	restaurant6.type_of_food = "Rostilj"
	restaurant6.description = "Rostilj i srpska hrana. Ukusno, toplo i povoljno! Specijaliteti sa rostilja, pohovana jela i jos mnogo toga. Prijatno!";
	restaurant6.meal1 = "Rolovani cevapi";
	restaurant6.meal2 = "Susam pljeskavica";
	restaurant6.meal3 = "Leskovacki ustipak";
	restaurant6.meal4 = "Punjena bela vesalica";
	restaurant6.meal5 = "Pljeskavica Grill 51";
	restaurant6.meal1_price = 310;
	restaurant6.meal2_price = 260;
	restaurant6.meal3_price = 330;
	restaurant6.meal4_price = 350;
	restaurant6.meal5_price = 370;
	array[5]=restaurant6;
	var restaurant7 = {};
	restaurant7.name = "Brooklyn pasta bar";
	restaurant7.locationArea = "Zvezdara";
	restaurant7.street = "Kraljice Marije 15";
	restaurant7.num_of_grades = 1618;
	restaurant7.grade = 4.3;
	restaurant7.type_of_food = "Pasta"
	restaurant7.description = "Mediteranska hrana, italijanska hrana, paste. Posle 12 godina rada u Italiji Brooklyn pasta donosi autenticne paste pravo iz mesta njihovog porekla!";
	restaurant7.meal1 = "Aglio e olio";
	restaurant7.meal2 = "Pollo chicken";
	restaurant7.meal3 = "Napoletana";
	restaurant7.meal4 = "Boscaiola";
	restaurant7.meal5 = "Sorrentina";
	restaurant7.meal1_price = 260;
	restaurant7.meal2_price = 370;
	restaurant7.meal3_price = 260;
	restaurant7.meal4_price = 370;
	restaurant7.meal5_price = 370;
	array[6]=restaurant7;
	var restaurant8 = {};
	restaurant8.name = "Kasper Le Mesko";
	restaurant8.locationArea = "Zvezdara";
	restaurant8.street = "Dimitrija Tucovica";
	restaurant8.num_of_grades = 1877;
	restaurant8.grade = 4.6;
	restaurant8.type_of_food = "Pica"
	restaurant8.description = "Italijanska hrana, pice, velika interesantna ponuda za sve ljubitelje ove hrane! Specijalitete prave vrhunski kuvari svakodnevno!";
	restaurant8.meal1 = "Kapricoza";
	restaurant8.meal2 = "Sufle";
	restaurant8.meal3 = "Quattor stagioni";
	restaurant8.meal4 = "Gurmanska pica";
	restaurant8.meal5 = "Piroska";
	restaurant8.meal1_price = 350;
	restaurant8.meal2_price = 300;
	restaurant8.meal3_price = 590;
	restaurant8.meal4_price = 670;
	restaurant8.meal5_price = 270;
	array[7]=restaurant8;
	var restaurant9 = {};
	restaurant9.name = "Manufaktura";
	restaurant9.locationArea = "Savski Venac";
	restaurant9.street = "Kralja Petra";
	restaurant9.num_of_grades = 117;
	restaurant9.grade = 4.0;
	restaurant9.type_of_food = "Rostilj"
	restaurant9.description = "Rostilj, srpska hrana, autenticna balkanska hrana nastala iz zelje da spremljena hrana donosi srecu u kuhinji i na tanjiru. Dobra hrana za dobro raspolozenje samo za Vas!";
	restaurant9.meal1 = "Punjena vesalica";
	restaurant9.meal2 = "Rolovana pileca dzigerica";
	restaurant9.meal3 = "Dimljena svinjska rebra";
	restaurant9.meal4 = "Pirotska ovcija pljeskavica";
	restaurant9.meal5 = "Cevapi sa jogurtom";
	restaurant9.meal1_price = 660;
	restaurant9.meal2_price = 470;
	restaurant9.meal3_price = 780;
	restaurant9.meal4_price = 550;
	restaurant9.meal5_price = 490;
	array[8]=restaurant9;
	var restaurant10 = {};
	restaurant10.name = "Burrito Madre";
	restaurant10.locationArea = "Savski Venac";
	restaurant10.street = "Karadjordjeva";
	restaurant10.num_of_grades = 623;
	restaurant10.grade = 4.4;
	restaurant10.type_of_food = "Meksicka hrana"
	restaurant10.description = "Meksicka hrana, latinoamericka hrana. Brza i zdrava meksicka hrana uz burito koji mozete kreirati po svom ukusu i potpuno drugacije limunade, probudice vam sva kulinarska cula i otvorice vam nove gastro vidike!";
	restaurant10.meal1 = "Madre obrok";
	restaurant10.meal2 = "Burito Achiote piletina";
	restaurant10.meal3 = "Burito Carnitas";
	restaurant10.meal4 = "Burito Barbacoa";
	restaurant10.meal5 = "Burito Fajitas povrce";
	restaurant10.meal1_price = 620;
	restaurant10.meal2_price = 390;
	restaurant10.meal3_price = 450;
	restaurant10.meal4_price = 470;
	restaurant10.meal5_price = 350;
	array[9]=restaurant10;
	var restaurant11 = {};
	restaurant11.name = "Monument";
	restaurant11.locationArea = "Savski Venac";
	restaurant11.street = "Admirala Geprata";
	restaurant11.num_of_grades = 462;
	restaurant11.grade = 4.3;
	restaurant11.type_of_food = "Pasta"
	restaurant11.description = "Italijanska hrana, paste, posna i vegetarijanska hrana, ribe i plodovi mora, internacionalna hrana!";
	restaurant11.meal1 = "Karbonara";
	restaurant11.meal2 = "Biftek pasta";
	restaurant11.meal3 = "Bolonjeze";
	restaurant11.meal4 = "Pasta sa piletinom";
	restaurant11.meal5 = "Pasta sa curetinom";
	restaurant11.meal1_price = 560;
	restaurant11.meal2_price = 790;
	restaurant11.meal3_price = 490;
	restaurant11.meal4_price = 690;
	restaurant11.meal5_price = 720;
	array[10]=restaurant11;
	var restaurant12 = {};
	restaurant12.name = "Cevabdzinica Kastel";
	restaurant12.locationArea = "Cukarica";
	restaurant12.street = "Ratka Mitrovica";
	restaurant12.num_of_grades = 167;
	restaurant12.grade = 4.8;
	restaurant12.type_of_food = "Rostilj"
	restaurant12.description = "Rostilj, srpska hrana, piletina, cevapi izuzetnog kvaliteta i ukusa napravljeni po originalnom receptu na tradicionalan nacin i jos puno speijclaiteta od mesa!";
	restaurant12.meal1 = "Rolovani pileci raznjic";
	restaurant12.meal2 = "Banjalucki cevap";
	restaurant12.meal3 = "Sarajevski cevap";
	restaurant12.meal4 = "Domace kobasice";
	restaurant12.meal5 = "Sis cevap";
	restaurant12.meal1_price = 350;
	restaurant12.meal2_price = 390;
	restaurant12.meal3_price = 390;
	restaurant12.meal4_price = 400;
	restaurant12.meal5_price = 410;
	array[11]=restaurant12;
	var restaurant13 = {};
	restaurant13.name = "Toffee";
	restaurant13.locationArea = "Cukarica";
	restaurant13.street = "Beogradskog bataljona";
	restaurant13.num_of_grades = 30;
	restaurant13.grade = 4.6;
	restaurant13.type_of_food = "Palacinke"
	restaurant13.description = "Palacinke zanimljivih ukusa, najoriginalnije slatke palacinke koje ste ikad jeli i jos puno, puno zanimljivih specijaliteta.";
	restaurant13.meal1 = "Toffee slatka palacinka";
	restaurant13.meal2 = "Svarcvald palacinka";
	restaurant13.meal3 = "Jafa palacinka";
	restaurant13.meal4 = "Apple pie palacinka";
	restaurant13.meal5 = "Tuti fruti palacinka";
	restaurant13.meal1_price = 370;
	restaurant13.meal2_price = 350;
	restaurant13.meal3_price = 350;
	restaurant13.meal4_price = 350;
	restaurant13.meal5_price = 350;
	array[12]=restaurant13;
	var restaurant14 = {};
	restaurant14.name = "Fit Stop";
	restaurant14.locationArea = "Cukarica";
	restaurant14.street = "Surcinski put";
	restaurant14.num_of_grades = 774;
	restaurant14.grade = 4.3;
	restaurant14.type_of_food = "Salata"
	restaurant14.description = "Dorucak, posna i vegetarijanska hrana, fit hrana, veganska hrana. Lagana, zdrava i ukusno pripremljena hrana od svezeg voca i povrca!";
	restaurant14.meal1 = "Pure protein senior salata";
	restaurant14.meal2 = "Spring salata";
	restaurant14.meal3 = "Cheef salata";
	restaurant14.meal4 = "Fit4u salata";
	restaurant14.meal5 = "Healthy salata";
	restaurant14.meal1_price = 390;
	restaurant14.meal2_price = 340;
	restaurant14.meal3_price = 330;
	restaurant14.meal4_price = 360;
	restaurant14.meal5_price = 360;
	array[13]=restaurant14;
	var restaurant15 = {};
	restaurant15.name = "Paste & Salate Centar";
	restaurant15.locationArea = "Palilula";
	restaurant15.street = "Kicevska 3";
	restaurant15.num_of_grades = 500;
	restaurant15.grade = 3.8;
	restaurant15.type_of_food = "Pasta"
	restaurant15.description = "Mediteranska hrana, italijanska hrana, paste. Nadaleko poznate paste, salate i potazi. Prepoznatljiv ukus uz povoljne cene i vrhunsku uslugu!";
	restaurant15.meal1 = "Pasta Arrabiata";
	restaurant15.meal2 = "Pasta Funghi";
	restaurant15.meal3 = "Pasta Pollo e Pesto";
	restaurant15.meal4 = "Pasta Alla Carbonara";
	restaurant15.meal5 = "Pasta Bolognese";
	restaurant15.meal1_price = 230;
	restaurant15.meal2_price = 200;
	restaurant15.meal3_price = 280;
	restaurant15.meal4_price = 250;
	restaurant15.meal5_price = 270;
	array[14]=restaurant15;
	var restaurant16 = {};
	restaurant16.name = "Baza";
	restaurant16.locationArea = "Palilula";
	restaurant16.street = "Vladimira Gacinovica 32";
	restaurant16.num_of_grades = 33;
	restaurant16.grade = 4.2;
	restaurant16.type_of_food = "Dorucak"
	restaurant16.description = "Sendvici, srpska hrana, dorucak i napici. Veliki broj internacionalnih specijaliteta spremanih samo za vas. Izaberite omiljeni i narucite!";
	restaurant16.meal1 = "French croissants";
	restaurant16.meal2 = "Przenice";
	restaurant16.meal3 = "Slim & health breakfast";
	restaurant16.meal4 = "Domaca popara";
	restaurant16.meal5 = "Baza dorucak";
	restaurant16.meal1_price = 340;
	restaurant16.meal2_price = 390;
	restaurant16.meal3_price = 360;
	restaurant16.meal4_price = 280;
	restaurant16.meal5_price = 410;
	array[15]=restaurant16;
	for (i=0; i<16; i++) {
		var string = JSON.stringify(array[i]);
		localStorage.setItem("restaurant"+i, string);
	}
	array.sort(sortComp);
	document.getElementById("picture1").src ="images/"+ array[0].name + "/profile.jpg";
	document.getElementById("name1").innerHTML = array[0].name;
	document.getElementById("grade1").innerHTML = array[0].grade;
	document.getElementById("picture2").src ="images/"+ array[1].name + "/profile.jpg";
	document.getElementById("name2").innerHTML = array[1].name;
	document.getElementById("grade2").innerHTML = array[1].grade;
	document.getElementById("picture3").src ="images/"+ array[2].name + "/profile.jpg";
	document.getElementById("name3").innerHTML = array[2].name;
	document.getElementById("grade3").innerHTML = array[2].grade;
}

function ispisi() {
	for (i=0; i<16; i++) {
		var obj = localStorage.getItem("restaurant"+i);
		var obj2 = JSON.parse(obj);
		document.write( obj2.name+ "<br>");
	}
}

var map, infoWindow;
function initMap() {
	map = new google.maps.Map(document.getElementById('map'), {
	  center: {lat: -34.397, lng: 150.644},
	  zoom: 6
	});
	infoWindow = new google.maps.InfoWindow;

	// Try HTML5 geolocation.
	if (navigator.geolocation) {
	  navigator.geolocation.getCurrentPosition(function(position) {
		var pos = {
		  lat: position.coords.latitude,
		  lng: position.coords.longitude
		};

		infoWindow.setPosition(pos);
		infoWindow.setContent('Location found.');
		infoWindow.open(map);
		map.setCenter(pos);
	  }, function() {
		handleLocationError(true, infoWindow, map.getCenter());
	  });
	} else {
	  // Browser doesn't support Geolocation
	  handleLocationError(false, infoWindow, map.getCenter());
	}
}

function handleLocationError(browserHasGeolocation, infoWindow, pos) {
	infoWindow.setPosition(pos);
	infoWindow.setContent(browserHasGeolocation ?
						  'Error: The Geolocation service failed.' :
						  'Error: Your browser doesn\'t support geolocation.');
	infoWindow.open(map);
}

function rememberPageIndex(index) {
	if (check()) {
		localStorage.setItem("from", index);
	}
}

function nameSort(side) {
	localStorage.setItem("sortSide",side);
	localStorage.removeItem("sortSideGrade");
	document.getElementById("third").checked=false;
	document.getElementById("fourth").checked=false;
	fillRestaurantPage();
}

function nameSortOrder(side) {
	localStorage.setItem("sortSide",side);
	localStorage.removeItem("sortSideGrade");
	localStorage.setItem("from", -1);
	document.getElementById("third").checked=false;
	document.getElementById("fourth").checked=false;
	window.location.reload();
}

function gradeSort(side) {
	localStorage.setItem("sortSideGrade",side);
	localStorage.removeItem("sortSide");
	document.getElementById("first").checked=false;
	document.getElementById("second").checked=false;
	fillRestaurantPage();
}

function gradeSortOrder(side) {
	localStorage.setItem("sortSideGrade",side);
	localStorage.setItem("from", -1);
	localStorage.removeItem("sortSide");
	document.getElementById("first").checked=false;
	document.getElementById("second").checked=false;
	window.location.reload();
}

function fillRestaurantPage() {
	if (!check()) {
		return;
	}
	else if (localStorage.getItem("from")==-1) {
		from=0;
	}
	else {
		from=localStorage.getItem("from");
		from-=1;
	}
	var nameSort=0;
	if (localStorage.getItem("sortSide")!=null) {
		nameSort=localStorage.getItem("sortSide");
	}
	var gradeSort=0;
	if (localStorage.getItem("sortSideGrade")!=null) {
		gradeSort=localStorage.getItem("sortSideGrade");
	}
	var chosenArray = new Array();
	var community = localStorage.getItem("community");
	var k=0;
	for (i=0; i<16; i++) {
		var restaurant = JSON.parse(localStorage.getItem("restaurant"+i));
		if (restaurant.locationArea == community) {
			chosenArray[k++]=restaurant;
		}
		else if (community=="Sve") {
			chosenArray[k++]=restaurant;
		}
	}
	if (nameSort==1) {
		chosenArray.sort(nameSortCompUp);
		document.getElementById("first").checked =true;
	}
	else if (nameSort==2) {
		chosenArray.sort(nameSortCompUp);
		chosenArray.reverse();
		document.getElementById("second").checked =true;
	}
	if (gradeSort==1) {
		chosenArray.sort(gradeSortComp);
		document.getElementById("third").checked=true;
	}
	else if (gradeSort==2) {
		chosenArray.sort(gradeSortComp);
		chosenArray.reverse();
		document.getElementById("fourth").checked=true;
	}
	var place=0;
	for (i=from*4; i<from*4+4; i++) {
		document.getElementById("picR"+place).src ="images/" + chosenArray[i].name + "/profile.jpg";
		document.getElementById("nameR"+place).innerHTML = chosenArray[i].name;
		document.getElementById("gradeR"+place).innerHTML = chosenArray[i].grade;
		document.getElementById("descriptionR"+place).innerHTML = chosenArray[i].description;
		place++;
	}
	var string="";
	if (chosenArray.length>4) {
		for (i=0; i<chosenArray.length/4; i++) {
			var kk=i+1;
			string+="<a href=\"restorani.html\" onClick=\"rememberPageIndex("+kk+")\">" + kk + "</a>&nbsp;";
		}
		document.getElementById("pages").innerHTML = string;
	}
}

function whichRestaurantPage(index) {
	
	var community;
	switch (index) {
		case 1: community="Cukarica"; break;
		case 2: community="Palilula"; break;
		case 3: community="Savski Venac"; break;
		case 4: community="Zvezdara"; break;
		case 5: community="Sve"; break;
	}
	if (check) {
		localStorage.setItem("community", community);
		localStorage.setItem("from",-1);
		localStorage.removeItem("sortSideGrade");
		localStorage.removeItem("sortSide");
	}
}

function nameSortCompUp(a,b) {
	var until;
	if (a.name.length > b.name.length) {
		until=b.name.length;
	}
	else {
		until=a.name.length;
	}
	for (i=0; i<until; i++) {
		if (a.name.charAt(i) < b.name.charAt(i)) {return -1;}
		if (a.name.charAt(i) > b.name.charAt(i)) {return 1;}
	}
	return 0;
}

function gradeSortComp(a,b) {
	if (a.grade > b.grade) {return 1;}
	if (a.grade < b.grade) {return -1;}
	return 0;
}

function foodFilter(which) {
	if (!check()) {
		return;
	}
	switch(which) {
		case 1: if (document.getElementById("Rostilj").checked == true) {
			localStorage.setItem("Rostilj", "Rostilj");
			}
			else {
				localStorage.removeItem("Rostilj");
			}
			break;
		case 2: if (document.getElementById("Pasta").checked == true) {
			localStorage.setItem("Pasta", "Pasta");
			}
			else {
				localStorage.removeItem("Pasta");
			}
			break;
		case 3: if (document.getElementById("Burger").checked == true) {
			localStorage.setItem("Burger", "Burger");
			}
			else {
				localStorage.removeItem("Burger");
			}
			break;
		case 4: if (document.getElementById("Giros").checked == true) {
			localStorage.setItem("Giros", "Giros");
			}
			else {
				localStorage.removeItem("Giros");
			}
			break;
		case 5: if (document.getElementById("Pica").checked == true) {
			localStorage.setItem("Pica", "Pica");
			}
			else {
				localStorage.removeItem("Pica");
			}
			break;
		case 6: if (document.getElementById("Meksicka hrana").checked == true) {
			localStorage.setItem("Meksicka hrana", "Meksicka hrana");
			}
			else {
				localStorage.removeItem("Meksicka hrana");
			}
			break;
		case 7: if (document.getElementById("Palacinke").checked == true) {
			localStorage.setItem("Palacinke", "Palacinke");
			}
			else {
				localStorage.removeItem("Palacinke");
			}
			break;
		case 8: if (document.getElementById("Salata").checked == true) {
			localStorage.setItem("Salata", "Salata");
			}
			else {
				localStorage.removeItem("Salata");
			}
			break;
		case 9: if (document.getElementById("Dorucak").checked == true) {
			localStorage.setItem("Dorucak", "Dorucak");
			}
			else {
				localStorage.removeItem("Dorucak");
			}
			break;
	}
	window.location.reload();
}

function openOrderingPage(whichR) {
	localStorage.setItem("orderingRestaurant", whichR);
}

function loadOrderingContent() {
	if (!check()) {
		return;
	}
	else if (localStorage.getItem("from")==-1) {
		from=0;
	}
	else {
		from=localStorage.getItem("from");
		from-=1;
	}
	var nameSort=0;
	if (localStorage.getItem("sortSide")!=null) {
		nameSort=localStorage.getItem("sortSide");
	}
	var gradeSort=0;
	if (localStorage.getItem("sortSideGrade")!=null) {
		gradeSort=localStorage.getItem("sortSideGrade");
	}
	var foodType = new Array();
	var foodTypeCnt=0;
	if (localStorage.getItem("Rostilj") == "Rostilj") {
		foodType[foodTypeCnt++]="Rostilj";
	}
	if (localStorage.getItem("Pasta") == "Pasta") {
		foodType[foodTypeCnt++]="Pasta";
	}
	if (localStorage.getItem("Burger") == "Burger") {
		foodType[foodTypeCnt++]="Burger";
	}
	if (localStorage.getItem("Giros") == "Giros") {
		foodType[foodTypeCnt++]="Giros";
	}
	if (localStorage.getItem("Pica") == "Pica") {
		foodType[foodTypeCnt++]="Pica";
	}
	if (localStorage.getItem("Meksicka hrana") == "Meksicka hrana") {
		foodType[foodTypeCnt++]="Meksicka hrana";
	}
	if (localStorage.getItem("Palacinke") == "Palacinke") {
		foodType[foodTypeCnt++]="Palacinke";
	}
	if (localStorage.getItem("Salata") == "Salata") {
		foodType[foodTypeCnt++]="Salata";
	}
	if (localStorage.getItem("Dorucak") == "Dorucak") {
		foodType[foodTypeCnt++]="Dorucak";
	}
	var chosenArray = new Array();
	var community = localStorage.getItem("community");
	var k=0;
	for (i=0; i<16; i++) {
		var restaurant = JSON.parse(localStorage.getItem("restaurant"+i));
		if (foodType.length==0) {
			chosenArray[k++]=restaurant;
		}
		else {
			for (iter=0; iter<foodType.length; iter++) {
				if (restaurant.type_of_food == foodType[iter]) {
					chosenArray[k++]=restaurant;
				}
			}
		}
	}
	if (nameSort==1) {
		chosenArray.sort(nameSortCompUp);
	}
	else if (nameSort==2) {
		chosenArray.sort(nameSortCompUp);
		chosenArray.reverse();
	}
	if (gradeSort==1) {
		chosenArray.sort(gradeSortComp);
	}
	else if (gradeSort==2) {
		chosenArray.sort(gradeSortComp);
		chosenArray.reverse();
	}
	var id = parseInt(localStorage.getItem("orderingRestaurant"),10);
	var restaurant = chosenArray[id];
	document.getElementById("profilePic").src = "images/" + restaurant.name + "/profile.jpg"
	document.getElementById("name").innerHTML = restaurant.name;
	document.getElementById("description").innerHTML = restaurant.description;
	for (i=1; i<6; i++) {
		document.getElementById("Pic"+i).src = "images/" + restaurant.name + "/meal" + i +".jpg";
		document.getElementById("Name"+i).innerHTML = restaurant["meal"+i];
		document.getElementById("Price"+i).innerHTML = restaurant["meal"+i+"_price"] + "RSD";
	}
}

function fillOrderPage() {
	if (!check()) {
		return;
	}
	else if (localStorage.getItem("from")==-1) {
		from=0;
	}
	else {
		from=localStorage.getItem("from");
		from-=1;
	}
	var nameSort=0;
	if (localStorage.getItem("sortSide")!=null) {
		nameSort=localStorage.getItem("sortSide");
	}
	var gradeSort=0;
	if (localStorage.getItem("sortSideGrade")!=null) {
		gradeSort=localStorage.getItem("sortSideGrade");
	}
	var foodType = new Array();
	var foodTypeCnt=0;
	if (localStorage.getItem("Rostilj") == "Rostilj") {
		foodType[foodTypeCnt++]="Rostilj";
	}
	if (localStorage.getItem("Pasta") == "Pasta") {
		foodType[foodTypeCnt++]="Pasta";
	}
	if (localStorage.getItem("Burger") == "Burger") {
		foodType[foodTypeCnt++]="Burger";
	}
	if (localStorage.getItem("Giros") == "Giros") {
		foodType[foodTypeCnt++]="Giros";
	}
	if (localStorage.getItem("Pica") == "Pica") {
		foodType[foodTypeCnt++]="Pica";
	}
	if (localStorage.getItem("Meksicka hrana") == "Meksicka hrana") {
		foodType[foodTypeCnt++]="Meksicka hrana";
	}
	if (localStorage.getItem("Palacinke") == "Palacinke") {
		foodType[foodTypeCnt++]="Palacinke";
	}
	if (localStorage.getItem("Salata") == "Salata") {
		foodType[foodTypeCnt++]="Salata";
	}
	if (localStorage.getItem("Dorucak") == "Dorucak") {
		foodType[foodTypeCnt++]="Dorucak";
	}
	var chosenArray = new Array();
	var community = localStorage.getItem("community");
	var k=0;
	for (i=0; i<16; i++) {
		var restaurant = JSON.parse(localStorage.getItem("restaurant"+i));
		if (foodType.length==0) {
			chosenArray[k++]=restaurant;
		}
		else {
			for (iter=0; iter<foodType.length; iter++) {
				if (restaurant.type_of_food == foodType[iter]) {
					chosenArray[k++]=restaurant;
				}
			}
		}
	}
	if (nameSort==1) {
		chosenArray.sort(nameSortCompUp);
		document.getElementById("first").checked =true;
	}
	else if (nameSort==2) {
		chosenArray.sort(nameSortCompUp);
		chosenArray.reverse();
		document.getElementById("second").checked =true;
	}
	if (gradeSort==1) {
		chosenArray.sort(gradeSortComp);
		document.getElementById("third").checked=true;
	}
	else if (gradeSort==2) {
		chosenArray.sort(gradeSortComp);
		chosenArray.reverse();
		document.getElementById("fourth").checked=true;
	}
	for (i=0; i<foodType.length; i++) {
		document.getElementById(foodType[i]).checked=true;
	}
	var place=0;
	var fillStringAll="";
	for (i=from*4; i<from*4+4; i++) {
		if (i>=chosenArray.length) {
			break;
		}
		var rest = chosenArray[i];
		var fillString = "<div class=\"row border border-warning\">\
			<div class=\"col-xs-12 col-md-3\">\
			<a href=\"naruciti.html\"><img class=\"py-2\" onClick=\"openOrderingPage("+i+")\" src=\"images/"+rest.name+"/profile.jpg\" style=\"width:100%; height:100%;\"></a>\
			</div>\
			<div class=\"col-xs-12 col-md-9 py-2\"><a href=\"naruciti.html\" onClick=\"openOrderingPage("+i+")\">\
				<label><b>"+rest.name+"</b></label></a>\
				<br>\
				<img src=\"images/starImg.png\" style=\"width:30px; height:30px;\">&nbsp; <label><b>"+rest.grade+"</b></label>\
				<br>\
				<label>"+rest.description+"</label>\
			</div>\
		</div>\
		<br>";
		fillStringAll+=fillString;
	}
	document.getElementById("toBeFilled").innerHTML = fillStringAll;
	var string="";
	if (chosenArray.length>4) {
		for (i=0; i<chosenArray.length/4; i++) {
			var kk=i+1;
			string+="<a href=\"dostava.html\" onClick=\"rememberPageIndex("+kk+")\">" + kk + "</a>&nbsp;";
		}
		document.getElementById("pages").innerHTML = string;
	}
}

function whichOrderPage() {
	if (check()) {
		localStorage.setItem("from", -1);
	}
}

function deductFoodFromCart(index) {
	if (!check()) {
		return;
	}
	var whichR = document.getElementById("name").innerHTML;
	var buyString = whichR+ ":meal" +index;
	if (localStorage.getItem(buyString)!=null) {
		var quantity = localStorage.getItem(buyString);
		var quanInt = parseInt(quantity,10);
		quanInt -=1;
		if (quanInt != 0) {
			localStorage.setItem(buyString, quanInt);
		}
		else {
			localStorage.removeItem(buyString);
		}
		alert("Izbaceno iz korpe!");
	}
}

function addFoodToCart(index) {
	if (!check()) {
		return;
	}
	var whichR = document.getElementById("name").innerHTML;
	var buyString= whichR+":meal"+index;
	if (localStorage.getItem(buyString) == null) {
		localStorage.setItem(buyString,1);
	}
	else {
		var quantity = localStorage.getItem(buyString);
		var quanInt = parseInt(quantity,10);
		quanInt+=1;
		localStorage.setItem(buyString, quanInt);
	}
	alert("Dodato u korpu!");
}

function fillCartPage() {
	if (!check()) {
		return;
	}
	var chosenArray = new Array();
	for (i=0; i<16; i++) {
		chosenArray[i]=JSON.parse(localStorage.getItem("restaurant"+i));
	}
	var mealNames = new Array();
	var mealPrice = new Array();
	var mealQuan = new Array();
	var k=0;
	for (i=0; i<16; i++) {
		for (j=1; j<6; j++) {
			if (localStorage.getItem(chosenArray[i].name+":meal"+j)!=null) {
				var restaurant = chosenArray[i];
				mealNames[k]=restaurant["meal"+j];
				mealPrice[k]=parseInt(restaurant["meal"+j+"_price"],10);
				mealQuan[k++]=parseInt(localStorage.getItem(restaurant.name+":meal"+j),10);
			}
		}
	}
	var fillString="";
	for (i=0; i<mealNames.length; i++) {
		fillString+=mealNames[i]+": <br>&nbsp;&nbsp;&nbsp;" +mealPrice[i] + " RSD x " + mealQuan[i] + " = " + mealQuan[i]*mealPrice[i] + " RSD<br>";
	}
	var total=0;
	for (i=0; i<mealPrice.length; i++) {
		total+=mealPrice[i]*mealQuan[i];
	}
	fillString+="----------------------------<br>"
	fillString+="TOTAL: " + total + " RSD";
	document.getElementById("cartFillLabel").innerHTML = fillString;
}

function remember() {
	var i=0;
	while (true) {
		if (localStorage.getItem("order"+i) == null) {
			break;
		}
		i++;
	}
	localStorage.setItem("order"+i, document.getElementById("cartFillLabel").innerHTML);
}

function checkData() {
	var nameRegex = /^[A-Za-z]{2,30}$/;
	var name = document.forma.ime.value;
	if (nameRegex.test(name)!=true) {
		alert("Uneto ime nije ispravno");
		window.location.reload();
		return;
	}
	var lastNameRegex = /^[A-Za-z]{2-50}$/;
	var lastName = document.forma.prezime.value;
	if (lastNameRegex.test(lastName)!=true) {
		alert("Uneto prezime nije ispravno");
		window.location.reload();
		return;
	}
	var phoneRegex = /^(\d{9,10}|\d{3}-\d{3}-\d{4}|\(\d{3}\)\d{3}-\d{4})$/;
	var phoneNum = document.forma.brojTelefona.value;
	if (phoneRegex.test(phoneNum)!=true) {
		alert("Unet neispravan broj telefona");
		window.location.reload();
		return;
	}
	var mailRegex=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
	var mail = document.forma.mail.value;
	if (mailRegex.test(mail)!=true) {
		alert("Uneti mail je neispravan");
		window.location.reload();
		return;
	}
	var adressRegex=/[A-Za-z]+ [0-9]*[A-Za-z]{1};
	var adresa = document.forma.adresa.value;
	if (adressRegex.test(adresa)!=true) {
		alert("Uneta adresa nije dobra");
		window.location.reload();
		return;
	}
}