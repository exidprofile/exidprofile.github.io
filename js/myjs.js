$(document).ready(function(){
		    $(".open-btn").click(function(){
		    	$(".upgate,.downgate").css("transition","all 1.5s ease-in-out");
		    	$(".upgate,.downgate").css("height","0px");
        		$('video').removeAttr("loop");
        		$(this).hide();
    			$(".video-background").fadeOut(2000);
        		$('.main').fadeIn(2000);
		    });
		     $("img").on("contextmenu",function(){
		       return false;
		    }); 
		    $(".member").click(function(){
		    	$('.slide-btn').css("display","inline-block");
		    	var clone = $(this).children("img").clone();
		    	var memberName = $(this).data('name');
		    	var fullName = $(this).data('fullname');
		    	var hangul = $(this).data('hangul');
		    	var aka = $(this).data('aka');
		    	var dob = $(this).data('dob');
		    	var role = $(this).data('role');
		    	var blood = $(this).data('blood');
		    	var wHeight = $(window).height();
		    	var pos = $(this).data('position');
		    	var modal = $('.myModal');
		    	$(this).hide();
		    	modal.modal('toggle');
		    	$('.flag').hide();
		    	$(clone).appendTo(".myModal");
		    	$(clone).css({"width":"30vw","top":"50px","animation-name":"blurIt","animation-duration":"1.5s"});
		    	$(clone).parent().css({"height":wHeight+"px","overflow":"hidden"})
				modal.find('h2').text(memberName);
				modal.find('.fullName').text(fullName);
				modal.find('.hangul').text(hangul);
				modal.find('.aka').text(aka);
				modal.find('.dob').text(dob);
				modal.find('.role').text(role);
				modal.find('.blood').text(blood);
				modal.find('.position').text(pos);
		    	modal.on('hidden.bs.modal', function (e) {
		    		$(clone).remove();
		    		$(".member").show();
		    		$(".flag").show();
		    		$('.slide-btn').css("display","none");
				});
		    });

		    $(".slide-btn").click(function(){
		    	var modal = $('.myModal');
		    	var pos = modal.find(".position").text();
		    	if($(this).hasClass("next-btn"))
		    	{var nextpos = ((parseInt(pos)+1)%5);}
		    	else{ var nextpos = ((parseInt(pos)+4)%5);}
		    	console.log(nextpos);
		    	modal.children("img").remove();
		    	modal.modal('show');
		    	var obj = $(".member[data-position='"+nextpos+"']");
		    	var clone = $(obj).clone();
		    	var cloneimg = $(obj).children("img").clone();
		    	var memberName = $(clone).data('name');
		    	var fullName = $(clone).data('fullname');
		    	var hangul = $(clone).data('hangul');
		    	var aka = $(clone).data('aka');
		    	var dob = $(clone).data('dob');
		    	var role = $(clone).data('role');
		    	var blood = $(clone).data('blood');
		    	var pos = $(clone).data('position');
		    	var wHeight = $(window).height();
		    	$(cloneimg).appendTo(".myModal");
		    	$(cloneimg).css({"width":"30vw","top":"50px","animation-name":"blurIt","animation-duration":"1.5s"});
		    	$(clone).parent().css({"height":wHeight+"px","overflow":"hidden"})
				modal.find('h2').text(memberName);
				modal.find('.fullName').text(fullName);
				modal.find('.hangul').text(hangul);
				modal.find('.aka').text(aka);
				modal.find('.dob').text(dob);
				modal.find('.role').text(role);
				modal.find('.blood').text(blood);
				modal.find('.position').text(pos);
		    	modal.on('hidden.bs.modal', function (e) {
		    		$(clone).remove();
		    		$(cloneimg).remove();
		    		$(".flag").show();
				});

		    });
		});