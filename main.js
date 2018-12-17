$(()=>{
	const nav = document.getElementById('nav');
	$('.icon').click(()=>{
		if(nav.className == "top-nav"){
			nav.className += " responsive";
			$(".icon").toggleClass("change");
		}else{
			nav.className = "top-nav"
			$(".icon").removeClass('change');
		}
	})
})