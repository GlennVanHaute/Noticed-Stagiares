$(function(){

				// Trigger ON SCROLL
				$(window).scroll(function () {
					
					// Select the detection type.
					var detectPartial = $('#detect_type').val() == 'partial';
					
					// CHECK IF ELEMENT IS VISIBLE
					var pizza   = $('.pizza').visible(detectPartial);
					var cactus  = $('.cactus').visible(detectPartial);
					var kitchen = $('.kitchen').visible(detectPartial);
					var monkey  = $('.aap').visible(detectPartial);
					var eiland  = $('.eiland').visible(detectPartial);
					var fifa    = $('.fifa').visible(detectPartial);
					var beans   = $('.beans').visible(detectPartial);
					var bets    = $('.bets').visible(detectPartial);
					
					

					//IF VISIBLE ADD ACTIVE CLASS TO PLAY ANIMATION
					if (pizza == true) {
						$(".pizza").addClass("active");

					};

					if (cactus == true) {
						$(".cactus").addClass("active");

					};

					if (kitchen == true) {
						$(".kitchen").addClass("active");

					};

					if (monkey == true) {
						$(".aap").addClass("active");

					};

					if (eiland == true) {
						$(".eiland").addClass("active");

					};

					if (fifa == true) {
						$(".fifa").addClass("active");

					};


					if (beans == true) {
						$(".beans").addClass("active");

					};

					if (bets == true) {
						$(".bets").addClass("active");

					};
					
						
				});

				   /* - - - - - - - - - - Social Icons - - - - - - - - - - */
   $( "a.instagram" ).hover(
     function() {
       $( "#instagram-svg" ).css({ fill: "#F6F6F6" });
     }, function() {
       $( "#instagram-svg" ).css({ fill: "#0FB8A4" });
     }
   );

   $( "a.instagram svg" ).hover(
     function() {
       $( "#instagram-svg" ).css({ fill: "#F6F6F6" });
     }, function() {

     }
   );

   $( "a.facebook" ).hover(
     function() {
       $( "#facebook-svg" ).css({ fill: "#F6F6F6" });
     }, function() {
       $( "#facebook-svg" ).css({ fill: "#0FB8A4" });
     }
   );

   $( "a.facebook svg" ).hover(
     function() {
       $( "#facebook-svg" ).css({ fill: "#F6F6F6" });
     }, function() {
     }
   );

   $( "a.twitter" ).hover(
     function() {
       $( "#twitter-svg" ).css({ fill: "#F6F6F6" });
     }, function() {
       $( "#twitter-svg" ).css({ fill: "#0FB8A4" });
     }
   );

   $( "a.twitter svg" ).hover(
     function() {
       $( "#twitter-svg" ).css({ fill: "#F6F6F6" });
     }, function() {
     }
   );

    $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });

			
			});