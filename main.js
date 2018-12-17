$(()=>{
	const nav = document.getElementById('nav'), 
		  menu = document.getElementById('menu');
	$('.icon').click(()=>{
		if(nav.className == "top-nav"){
			nav.className += " responsive";
			menu.className += " menu";
			menu.style.display = "flex"

			$(".icon").toggleClass("change");
		}else{
			nav.className = "top-nav"
			menu.style.display ="none";
			menu.className = "none"
			$(".icon").removeClass('change');
		}
	})
})