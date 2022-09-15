// Data untuk konten
const data = {
	home: {
		h1: "Hai. Saya Andy Eka Mulya seorang Mahasiswa.",
		p: "Saya seorang mahasiswa yang senang mengasah skill atau menambah skill dalam dunia IT terutama dalam pengembangan web dan mobile apps."
	},
	about:{
		h1: "About",
		p: "Selama masuk kuliah di jurusan Informatika, saya jadi tertarik dalam bidang dunia IT, banyak sekali ilmu yang bisa saya pelajari khususnya di dunia IT. Salah satu ilmu yang saya pelajari adalah mobile dev, dengan menggunakan UI kit tools Flutter dengan bahasa pemprograman dart, dan saat ini saya ingin mempelajari tentang web dev. I Love Coding"
	},
	contacts:{
		h1: "Contacts",
		facebook: "facebook.png",
		instagram: "instagram.png"
	}
}

const nav = document.querySelector('header nav ul');
const resultNav = nav.getElementsByTagName('span');

for(const span of resultNav){
	selectedNav(span);
}

// Fungsi Untuk mengupdate konten ketika menekan tombol di salah satu navigasi
function selectedNav(value){
	const judul = document.querySelector('.content article h1');
	const paragraf = document.querySelector('.content article p');

	value.addEventListener("click",function(){
		if(value.innerHTML == "home"){
			
			judul.innerHTML = data.home.h1;
			paragraf.innerHTML = data.home.p;
		}else if(value.innerHTML == "about"){
			
			judul.innerHTML = data.about.h1;
			paragraf.innerHTML = data.about.p;
		}else if(value.innerHTML == "contacts"){

			//membuat tag elemen figure
			const createElementFigure = document.createElement('figure');

			//membuat tag elemen a untuk instagram dan facebook
			const createElementAFacebook = document.createElement('a');
			const createElementAInstagram = document.createElement('a');

			//membuat tag elemen img untuk facebook dan instagram
			const createElementImgFacebook = document.createElement('img');
			const createElementImgInstagram = document.createElement('img');

			// menambahkan tag a kedalam tag figure
			createElementFigure.appendChild(createElementAFacebook);
			createElementFigure.appendChild(createElementAInstagram);

			// menambahkan tag img kedalam tag a
			createElementAFacebook.appendChild(createElementImgFacebook);
			createElementAInstagram.appendChild(createElementImgInstagram);

			// membuat attribute href kedalam tag a
			createElementAFacebook.setAttribute('href', 'https://web.facebook.com/grd.pendopo');
			createElementAInstagram.setAttribute('href', 'https://www.instagram.com/andy.mulyaa/');

			//membuat attribute src kedalam tag img
			createElementImgFacebook.setAttribute('src', data.contacts.facebook);
			createElementImgInstagram.setAttribute('src', data.contacts.instagram);

			//membuat attribute class kedalam tag img
			createElementImgFacebook.setAttribute('class', 'icon');
			createElementImgInstagram.setAttribute('class', 'icon');

			//membuat attribute class kedalam tag img
			createElementAFacebook.setAttribute('target', '_blank');
			createElementAInstagram.setAttribute('target', '_blank');

			//membuat attribute alt kedalam tag img
			createElementImgFacebook.setAttribute('alt', 'My Account Facebook');
			createElementImgInstagram.setAttribute('alt', 'My Account Instagram');

			judul.innerHTML = data.contacts.h1;
			paragraf.innerHTML = '';
			paragraf.appendChild(createElementFigure);

		}
	});
}

