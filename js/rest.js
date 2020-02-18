$('.owl-carousel-demo').owlCarousel({
    loop:true,
    margin:10,
	nav:false,
	autoplay: 1500,
	 lazyLoad:true,
	responsiveClass:true,
    responsive:{
        0:{
            items:1
        },
		480:{
			items:2
		},
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})

$('.owl-demo-2').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
	autoplay: 1500,
	 lazyLoad:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})

/*function showini(){
	
}

function hideini(){
	b = document.getElementsByClassName("ini-desc-back").innerHTML();
		b.style.display = "none";
	console.log("working hide");
}*/
document.getElementById("demo01").addEventListener("click", function(){
	var b = document.getElementById("test1");
	b.style.display="block";
});
document.getElementById("demo02").addEventListener("click", function(){
	var b = document.getElementById("test2");
	b.style.display="block";
});
document.getElementById("demo03").addEventListener("click", function(){
	var b = document.getElementById("test3");
	b.style.display="block";
});
document.getElementById("demo04").addEventListener("click", function(){
	var b = document.getElementById("test4");
	b.style.display="block";
});
document.getElementById("demo05").addEventListener("click", function(){
	var b = document.getElementById("test5");
	b.style.display="block";
});
document.getElementById("demo06").addEventListener("click", function(){
	var b = document.getElementById("test6");
	b.style.display="block";
});
document.getElementById("demo07").addEventListener("click", function(){
	var b = document.getElementById("test7");
	b.style.display="block";
});
document.getElementById("demo08").addEventListener("click", function(){
	var b = document.getElementById("test8");
	b.style.display="block";
});
document.getElementById("demo09").addEventListener("click", function(){
	var b = document.getElementById("test9");
	b.style.display="block";
});
document.getElementById("demo010").addEventListener("click", function(){
	var b = document.getElementById("test10");
	b.style.display="block";
});
document.getElementById("demo010").addEventListener("click", function(){
	var b = document.getElementById("test10");
	b.style.display="block";
});document.getElementById("demo011").addEventListener("click", function(){
	var b = document.getElementById("test11");
	b.style.display="block";
});
	
document.getElementById("btn-close-modal1").addEventListener("click", function(){
	var b = document.getElementById("test1");
	b.style.display="none";
});
document.getElementById("btn-close-modal2").addEventListener("click", function(){
	var b = document.getElementById("test2");
	b.style.display="none";
});
document.getElementById("btn-close-modal3").addEventListener("click", function(){
	var b = document.getElementById("test3");
	b.style.display="none";
});
document.getElementById("btn-close-modal4").addEventListener("click", function(){
	var b = document.getElementById("test4");
	b.style.display="none";
});
document.getElementById("btn-close-modal5").addEventListener("click", function(){
	var b = document.getElementById("test5");
	b.style.display="none";
});
document.getElementById("btn-close-modal6").addEventListener("click", function(){
	var b = document.getElementById("test6");
	b.style.display="none";
});
document.getElementById("btn-close-modal7").addEventListener("click", function(){
	var b = document.getElementById("test7");
	b.style.display="none";
});
document.getElementById("btn-close-modal8").addEventListener("click", function(){
	var b = document.getElementById("test8");
	b.style.display="none";
});
document.getElementById("btn-close-modal9").addEventListener("click", function(){
	var b = document.getElementById("test9");
	b.style.display="none";
});
document.getElementById("btn-close-modal10").addEventListener("click", function(){
	var b = document.getElementById("test10");
	b.style.display="none";
});
document.getElementById("btn-close-modal11").addEventListener("click", function(){
	var b = document.getElementById("test11");
	b.style.display="none";
});

var swiper = new Swiper('.swiper-container', {
  effect: 'cube',
  grabCursor: true,
  cubeEffect: {
	shadow: true,
	slideShadows: true,
	shadowOffset: 20,
	shadowScale: 0.94,
  },
  pagination: {
	el: '.swiper-pagination',
  },
});

	$("#demo01").animatedModal1();
 $("#demo02").animatedModal2();
 $("#demo03").animatedModal3();
 $("#demo04").animatedModal4();
 $("#demo05").animatedModal5();
 $("#demo06").animatedModal6();
 $("#demo07").animatedModal7();
 $("#demo08").animatedModal8();
 $("#demo09").animatedModal9();
$("#demo010").animatedModal10();