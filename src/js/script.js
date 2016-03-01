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
					
					

					//IF VISIBLE SHOW CONTENT
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
			
			});