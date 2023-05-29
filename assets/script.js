


// Insertion des images

// TABLEAU D'OBJETS d'images

const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

	// Nombre de slides 4 images
	let nbSlide = slides.length;
	console.log(nbSlide);

	// partie recuperation des classe depuis html

	// On récupère la classe arrow_right qui va nous permettre de faire suivant
	let next = document.querySelector(".arrow_right");
			console.log(next);

	let previous = document.querySelector(".arrow_left");
	const bannerImg = document.querySelector('.banner-img');
	const dots = document.querySelectorAll(".dot");
	console.log(dots);


	// On crée un compteur qui va nous permettre de slider !

	let count = 0;

	// Quand on va cliquer sur nextSlide sa va changer d'image
	function nextSlide (){

	if(count < nbSlide -1){ // count est < nbSlide -1, donc cela va permet de compter a partir de 0
		
		  count++      // ++ permet de compter contineullement
		  
		
	}else{
		count = 0 // 0 permet de revenir l'image 1 apres avoir monté jusque a 3
	}
	console.log(count);

	// afficher les images - les images devrait etre apres if et else pour que ca affiche bien
	bannerImg.src = `./assets/images/slideshow/${slides[count].image}`

	// inserer les dots ici apres les images
	dots.forEach((dot) => {
		// enlevé les dots remplies (selected)
		dot.classList.remove("dot_selected")
	})
	// dots slide
	dots[count].classList.add('dot_selected')

	}


next.addEventListener("click", nextSlide)

// PREVIOUS SLIDES

function previousSlide(){

	if(count > 0){
		count--
		
		
	}else{
		count = nbSlide - 1
	}
	bannerImg.src = `./assets/images/slideshow/${slides[count].image}`
	

	dots.forEach((dot) => {
		dot.classList.remove("dot_selected")
	})
	dots[count].classList.add('dot_selected')
}
previous.addEventListener("click", previousSlide)