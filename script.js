$(".yuji").hide();
$(".Yuji").hide();
$(".denji").hide();
$(".Denji").hide();
$(".guts").hide();
$(".Guts").hide();
$(".tanjiro").hide();
$(".Tanjiro").hide();
$(".finput").hide();
$(".finput2").hide();
$(".krice").hide();
$(".continue").hide();
$(".sushi").hide();
$(".burger").hide();
$(".burger2").hide();
$(".jam").hide();
$(".restart").hide();
$(".fgt").hide();
$(".poop").hide();
$(".qtwo").hide();
$(".katana").hide();
$(".fivetwo").hide();
$(".fists").hide();
$(".hsword").hide();
$(".chain").hide();

$(".fiveone").click(function() {
    $(".red").hide();
    $(".blue").hide();
    $(".green").hide();
    $(".white").hide();
    $(".finput").show();
    $(".finput2").show();
    $("h1").text("Type your favorite food out of these four to see which character you are based on the food you choose!");
    $(".fiveone").hide();
    $(".fivetwo").show();
	$(".restart").show();
});

$(".finput2").click(function() {
    var input= $(".finput") .val();
	if (input==="Kelp Riceballs") {
    $("h1").text("You are Tanjiro Kamado from Demon Slayer!");
    $(".fivetwo").text("Enjoy some yummy Riceballs!");
	$(".krice").show();
	$(".continue").show();
	$(".sushi").hide();
    $(".burger").hide();
    $(".finput").hide();
    $(".burger2").hide();
    $(".finput2").hide();
        $(".jam").hide();
    }
    
    else if (input==="Sushi") {
    $("h1").text("You are Yuji Itadori from Jujutsu Kaisen!");
    $(".fivetwo").text("Enjoy some yummy Sushi!");
	$(".sushi").show();
	$(".continue").show();
    $(".krice").hide();
    $(".finput").hide();
    $(".burger2").hide();
    $(".finput2").hide();
        $(".jam").hide();
    }
    else if (input==="Burger") {
        $("h1").text("You are Guts from Berserk!");
        $(".fivetwo").text("Enjoy some yum burgers!");
        $(".burger").show();
        $(".burger2").show();
        $(".sushi").hide();
        $(".krice").hide();
        $(".continue").show();
        $(".finput").hide();
        $(".finput2").hide();
        $(".jam").hide();

                
    }

    else if (input==="Toast with Jam") {
        $("h1").text("You are Denji from Chainsaw Man!");
        $(".fivetwo").text("Enjoy your toast!");
        $(".jam").show();
        $(".finput").hide();
        $(".finput2").hide();
        $(".sushi").hide();
        $(".krice").hide();
        $(".burger").hide();
        $(".burger2").hide();
        $(".continue").show();
    }
});

$(".continue").click(function() {
    $("h1").text("Next choose your fighting method!");
    $(".fivetwo").text("This would give you the second character!");
    $(".fgt").show();
    $(".poop").show();
    $(".finput").hide();
    $(".finput2").hide();
    $(".continue").hide();
	$(".qtwo").show();    
    
});
$(".qtwo").click(function() {
    var fight =$(".poop").val();
    if (fight==="Katana") {
        $("h1").text("You are Tanjiro Kamado!");
        $(".fivetwo").text(" What a sweet mix of chatacters you got!");
        $(".katana").show();
        $(".qtwo").hide();
        $(".poop").hide();
    	$(".fgt").hide();
   	 	$(".finput").hide();
   	 	$(".finput2").hide();
    	$(".continue").hide();
        $(".fists").hide();
    }
    else if (fight==="Bare Fists") {
        $("h1").text("You are Yuji Itadori");
        $(".fivetwo").text("Frightful mix of characters!");
        $(".fists").show();
        $(".katana").hide();
        $(".qtwo").hide();
        $(".poop").hide();
    	$(".fgt").hide();
   	 	$(".finput").hide();
   	 	$(".finput2").hide();
    	$(".continue").hide();
        
    }
    else if(fight==="Huge Sword") {
        $("h1").text("You are Guts!");
        $(".fivetwo").text("Brolic mix of characters!");
        $(".hsword").show();
        $(".katana").hide();
        $(".qtwo").hide();
        $(".poop").hide();
    	$(".fgt").hide();
   	 	$(".finput").hide();
   	 	$(".finput2").hide();
    	$(".continue").hide();
        $(".fists").hide();
    }
    else if(fight==="Chainsaws") {
        $(".h1").text("You are Denji! The Chainsaw Man!");
        $(".fivetwo").text("Such a deadly duo!");
        $(".chain").show();
        $(".katana").hide();
        $(".qtwo").hide();
        $(".poop").hide();
    	$(".fgt").hide();
   	 	$(".finput").hide();
   	 	$(".finput2").hide();
    	$(".continue").hide();
        $(".fists").hide();
        $(".hsword").hide();
        
    }
});
    
    $(".restart").click(function() {
        $(".yuji").hide();
	$(".Yuji").hide();
	$(".denji").hide();
	$(".Denji").hide();
	$(".guts").hide();
	$(".Guts").hide();
	$(".tanjiro").hide();
	$(".Tanjiro").hide();
	$(".finput").hide();
	$(".finput2").hide();
	$(".krice").hide();
	$(".continue").hide();
	$(".sushi").hide();
	$(".burger").hide();
	$(".burger2").hide();
	$(".jam").hide();
	$(".restart").hide();
	$(".fgt").hide();
	$(".poop").hide();
	$(".qtwo").hide();
	$(".katana").hide();
	$(".fivetwo").hide();
	$(".fists").hide();
	$(".hsword").hide();
	$(".chain").hide();
    $(".fists").hide();
    $(".red").show();
    $(".green").show();
    $(".white").show();
    $(".blue").show();
    $(".fiveone").show();
    
                        });