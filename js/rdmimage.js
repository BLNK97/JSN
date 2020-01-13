// plugin origin: http://www.robwalshonline.com/posts/jquery-plugin-random-image-on-page-load/

(function($){
	
	$.randomImage = {
		defaults: {
			path: './images/',
			myImages: ['logo-001.png', 'logo-002.png', 'logo-003.png' ]
			
		}			
	}
	
	$.fn.extend({
			randomImage:function(config) {
				
				var config = $.extend({}, $.randomImage.defaults, config); 
				
				 return this.each(function() {
						
						var imageNames = config.myImages;
						var imageNamesSize = imageNames.length;
						var lotteryNumber = Math.floor(Math.random()*imageNamesSize);
						var winnerImage = imageNames[lotteryNumber];
						var fullPath = config.path + winnerImage;
						
						$(this).attr( {
										src: fullPath,
										alt: winnerImage
									});
						
				});	
			}
			
	});
	
	
	
})(jQuery);