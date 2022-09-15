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

			judul.innerHTML = data.contacts.h1;
			paragraf.innerHTML = 
			`
				<figure>
					<a><img class='icon'  src='${data.contacts.facebook}'></a>
					<a><img class='icon'  src='${data.contacts.instagram}'></a>
				</figure>
			`;

		}
	});
}

