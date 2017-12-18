var curStatement = 0;

var statements = [
	{
		"msg": " I recently graduated from UC Berkeley with a B.F.A in Art Practice. California born and raised, I got into Berkeley in 2013 but was unsure of what I wanted to pursue. By 2014, I ended up choosing art. I was not too sure what I was getting myself into, but at the least, I knew I desired a space where trial and error would be welcomed and constant creation and re-creation would be encouraged.",
		"img": "grad.svg",
		"bgColor": "#eeebe0"

	},
	{
		"msg": "Since that very day I made my choice, it's been a journey adapting to the Bay Area's cultural landscape and core values of Berkeley. My practice mainly had to do with exposing myself to different mediums and recognizing when and why to use them. ",
		"img": "2nd grad.svg",
		"bgColor": "#95a6aa"

	},
	{
		"msg": "In the beginning, I gravitated towards installation work that was very personalized and catered towards my fellow peers and professors. I felt that connection and genuine relationships could be fostered and appreciated more through interactive pieces.",
		"bgColor": "#ffffff"
	},
	{
		"msg": "My practice then sort of took on a bit of a social experiment quality. I made works that made people interact with each other and would in turn bring out characteristics and traits that were unique to each individual. Along the way, I also spent time allowing pieces to take on their own shape and be in control of the process more so than me trying to steer them towards an end goal.",
		"bgColor": "#ffffff"
	},
	{
		"msg": "I think the most pivotal point in my practice has been when I decided I wanted to hear more about how art was affecting communities and it still continues to be something I'm interested in. It came to my attention that art actually meant so many different things to different people and I continued to want to hear and share these type of stories with others whether that meant through video or drawing. Currently I am looking for a job and shall keep you all updated on the hopefully many future art projects I shall be working on!",
		"bgColor": "#ffffff"
	},
	
	

];


setTimeout(function () {
	$("#loading-container").fadeOut(300)// jQuery Function Number 1;

	setTimeout(function () {
		$("#main-container").fadeIn(300)// jQuery Function Number 2;
		changeStatement(curStatement);
	}, 500);
}, 3000);



$(document).keydown(function(e) {
	if (e.which == 37 || e.which == 39) {
		newStatement = (e.which == 37) ? curStatement-1: curStatement+1;

		if (newStatement < statements.length && newStatement >= 0) {
			changeStatement(newStatement);
			e.preventDefault();
		}
	}


});

function changeStatement(index) {
	curStatement = index;
	$("#statement-image").attr("src", "assets/img/" + statements[index].img)// jQuery Function Number 3;
	$(".statement").text(statements[index].msg)// jQuery Function Number 4;
	$("body").css("background-color", statements[index].bgColor)// jQuery Function Number 5;


}

$("#topnav").hide();

$("#lightbox").hide();// jQuery Function Number 6;


$("#overlay").click(function() {
  console.log("hide");
  $("body").css("overflow", "scroll");
  $("#lightbox").hide();
})

$(".img2").click(function() {
  
  $("#popup-image-container img").attr("src", "assets/img/Mother Earth 2.jpg");
  
  $("body").css("overflow", "hidden");
  $("#popup-text").text("I made this piece during a very hard time in my life. Although it doesn't translate through the piece, it means a lot to me because it serves as a reminder of my own fragility and strength. I was on medication for anxiety at the time. I chose to work on this piece to ground myself. I left Berkeley for a semester soon after this piece because I suddenly had schizophrenia and depression from all the stress I was putting on myself to be a 'better artist.' I felt like all hope was lost and that life was meaningless for the first time. I was suicidal and held onto this piece dearly like a lifeline back to Berkeley. I purged everything in my room and hung this on a white wall hoping one day I would recover and graduate. I suppose this raises questions on what does art mean to an individual artist at a certain point of their life? When is it okay for an artist to create for themselves versus for an audience? What happens when a piece doesn't convey certain feelings? Does it deem the piece unsuccessful?");
  $("#lightbox").show()
})

$("#overlay").click(function() {
  console.log("hide");
  $("body").css("overflow", "scroll");
  $("#lightbox").hide();
})

$(".img5").click(function() {
  
  $("#popup-image-container img").attr("src", "assets/img/Sculpture 2.jpg");

  $("body").css("overflow", "hidden");
  $("#popup-text").text("This piece involved a hefty amount of welding and measuring, which was definitely not something I was accustomed to. A study on material, space, scale, color, and structure, this was a basic exploration on the idea of translating an idea into a sculpture and how much one can push the boundaries to take up space in a gallery setting. How does a viewer interact with the piece? How does the creator decide on where to place the object(s)? And how does the sculpture overall interact with its environment? Here I chose to allow the abstract sculpture to interact with the fractures of light. The two pieces are in conjunction with one another. Albeit, a tad imperfect, it neither flows nor resides into the background but rather invites you in with its ascent and descent.")
  $("#lightbox").show()
})

$("#overlay").click(function() {
  console.log("hide");
  $("body").css("overflow", "scroll");
  $("#lightbox").hide();
})

$(".img3").click(function() {
  
  $("#popup-image-container img").attr("src", "assets/img/eyes 2.jpg");
  $("body").css("overflow", "hidden");
  $("#popup-text").text("Untitled 2016; Canon 70D, 60mm lens.")
   $("#lightbox").show()
})

$("#overlay").click(function() {
  console.log("hide");
  $("body").css("overflow", "scroll");
  $("#lightbox").hide();
})

$(".img4").click(function() {
  
  $("#popup-image-container img").attr("src", "assets/img/figure 2.jpg");
  $("body").css("overflow", "hidden");
  $("#popup-text").text("I was doubtful about this figure drawing process, but by the end of the semester I was able to draw figures like this with charcoal and mixed media. In class, we ranged from doing three quick poses in several seconds to 30 minute extended studies. It was definitely a learning experience and I would go to a figure drawing session again.")
   $("#lightbox").show()
})

$("#overlay").click(function() {
  console.log("hide");
  $("body").css("overflow", "scroll");
  $("#lightbox").hide();
})
$(".img7").click(function() {
  
  $("#popup-image-container img").attr("src", "assets/img/figure 2.jpg");
  $("body").css("overflow", "hidden");
  $("#popup-text").text("Day to Day, 2017. Variou Sketchbook Papers, fine point black pen,pen, water color,pencil, colored pencils. 72 inches by 24 inches. I was inspired by New York Sketchbook Project to incorporate frequent sketching into my everyday routine. Doing so caused me to reflect on how non monumental yet important sketching can be to an artist's personal growth.")
   $("#lightbox").show()
})

$("#overlay").click(function() {
  console.log("hide");
  $("body").css("overflow", "scroll");
  $("#lightbox").hide();
})