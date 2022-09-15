const data = {
	home: {
		h1: "Hai. Saya Andy Eka Mulya seorang Mahasiswa.",
		p: "Selama masuk kuliah di jurusan Informatika, saya jadi tertarik dalam bidang dunia IT, banyak sekali ilmu yang saya pelajari khususnya di dunia IT. Salah satu ilmu yang saya pelajari adalah mobile dev, dengan menggunakan UI kit tools Flutter dengan bahasa pemprograman dart, dan saat ini saya ingin mempelajari tentang web dev."
	},
}

const nav = document.querySelector('header nav ul');
const resultNav = nav.getElementsByTagName('span');


for(const span of resultNav){
	span.addEventListener("click",function(){
		if(span.innerHTML == "home"){
			document.querySelector('.content article h1').innerHTML = data.home.h1;
			document.querySelector('.content article p').innerHTML = data.home.p;


		}
	});
}

