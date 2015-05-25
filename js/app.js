$(function(){

	$("li a").click(function(event){
		var id = $(this)[0].id;
		var url = "http://swapi.co/api/" + id + "/"
		getData(id, url);
	});

});

var getData = function(text, url){
	var result = $.ajax({
		url: url,
		dataType: "json",
		type: "GET",
	}).done(function(results){
		$(".menu a").removeClass("active");		
		$("#data").empty();
		$("#count").empty();
		$("#buttons").empty();
		$("#count").append("There are " + results.count + " " + text);			
		if (results.previous != null)
			addPrevButton(text, results.previous);
		if (results.next != null)
			addNextButton(text, results.next);
		if (text == "films"){
			$("#films").addClass("active");			
			$.each(results.results, addFilm);
		} else if (text == "people"){
			$("#people").addClass("active");
			$.each(results.results, addPerson);
		} else if (text == "planets"){
			$("#planets").addClass("active");
			$.each(results.results, addPlanet);
		} else if (text == "species"){
			$("#species").addClass("active");
			$.each(results.results, addSpecies);
		} else if (text == "starships"){
			$("#starships").addClass("active");
			$.each(results.results, addStarship);
		} else if (text == "vehicles"){
			$("#vehicles").addClass("active");
			$.each(results.results, addVehicle);
		}
	}).fail(function(jqXHR, error, errorThrown){
		console.log(error);
	});
}

function addFilm(index, film){
	// clone our result template code
	var div = $('.template.film').clone().removeClass("template");
	
	// Set the title
	div.find(".title").text(film.title);

	// Set the episode ID
	div.find(".epID").text(film.episode_id);

	// Set the director
	div.find(".director").text(film.director);

	// Set the producer
	div.find(".producer").text(film.producer);	

	// set the release date 
	div.find(".date").text(film.release_date);	

	$("#data").append(div);
}

function addPerson(index, person){
	// clone our result template code
	var div = $('.template.person').clone().removeClass("template");
	
	div.find(".name").text(person.name);

	div.find(".height").text(person.height + " cm");

	div.find(".hair").text(person.hair_color);

	div.find(".skin").text(person.skin_color);	

	div.find(".eye").text(person.eye_color);	

	$("#data").append(div);	
}

function addPlanet(index, planet){
	// clone our result template code
	var div = $('.template.planet').clone().removeClass("template");
	
	div.find(".name").text(planet.name);

	div.find(".diameter").text(planet.diameter + " km");

	div.find(".rotation_period").text(planet.rotation_period);

	div.find(".orbital_period").text(planet.orbital_period);	

	div.find(".gravity").text(planet.gravity + "G");	

	div.find(".population").text(planet.population);	

	div.find(".climate").text(planet.climate);	

	div.find(".terrain").text(planet.terrain);	

	div.find(".surface_water").text(planet.surface_water + "%");	

	$("#data").append(div);	
}

function addSpecies(index, species){
	// clone our result template code
	var div = $('.template.species').clone().removeClass("template");
	
	div.find(".name").text(species.name);

	div.find(".language").text(species.language);

	div.find(".average_height").text(species.average_height + " cm");

	div.find(".hair_colors").text(species.hair_colors);

	div.find(".skin_colors").text(species.skin_colors);	

	div.find(".eye_colors").text(species.eye_colors);	

	div.find(".classification").text(species.classification);	

	div.find(".average_lifespan").text(species.average_lifespan + " years");	

	div.find(".designation").text(species.designation);	

	$("#data").append(div);		
}

function addStarship(index, starship){
	// clone our result template code
	var div = $('.template.starship').clone().removeClass("template");
	
	div.find(".name").text(starship.name);

	div.find(".model").text(starship.model);

	div.find(".manufacturer").text(starship.manufacturer);

	div.find(".cost_in_credits").text(starship.cost_in_credits + " credits");

	div.find(".length").text(starship.length + " meters");

	div.find(".max_atmosphering_speed").text(starship.max_atmosphering_speed);	

	div.find(".crew").text(starship.crew);	

	div.find(".passengers").text(starship.passengers);	

	div.find(".starship_class").text(starship.starship_class);	
	
	$("#data").append(div);		
}

function addVehicle(index, vehicle){
	// clone our result template code
	var div = $('.template.vehicle').clone().removeClass("template");
	
	div.find(".name").text(vehicle.name);

	div.find(".model").text(vehicle.model);

	div.find(".manufacturer").text(vehicle.manufacturer);

	div.find(".cost_in_credits").text(vehicle.cost_in_credits + " credits");

	div.find(".length").text(vehicle.length + " meters");

	div.find(".max_atmosphering_speed").text(vehicle.max_atmosphering_speed);	

	div.find(".crew").text(vehicle.crew);	

	div.find(".passengers").text(vehicle.passengers);	

	div.find(".vehicle_class").text(vehicle.vehicle_class);	
	
	div.find(".consumables").text(vehicle.consumables);	
	
	$("#data").append(div);	
}

function addNextButton(text, url){
	$("#buttons").append($("<button />", { text: "Next", click: function(){
		getData(text, url);
	}}));	
}

function addPrevButton(text, url){
	console.log(url);
	$("#buttons").append($("<button />", { text: "Previous", click: function(){
		getData(text, url);
	}}));	
}