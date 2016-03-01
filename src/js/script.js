$(function(){
			

				// Trigger the 
				$(window).scroll(function () {
					
					// Select the detection type.
					var detectPartial = $('#detect_type').val() == 'partial';
					
					// vars elementen
					//MONKEY
					var monkey = $('.aap').visible(detectPartial);
					var eiland = $('.eiland').visible(detectPartial);
					

					if (monkey == true) {
						console.log ('done');
						$(".aap").addClass("active");

					};

					if (eiland == true) {
						console.log ('done');
						$(".eiland").addClass("active");

					};
					
						
				});
			
			});