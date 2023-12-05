setGame("1200x600");
game.folder = "assets";
//file gambar yang dipakai dalam game
var gambar = {
	logo:"logo-1.png",
	startBtn:"tombolStart.png",
	cover:"cover.jpg",
	playBtn:"btn-play.png",
	maxBtn:"maxBtn.png",
	minBtn: "minBtn.png",	
	// latar permainan
	latar: "Terrain_latar.png",
	bg:"Pink.png",
	// tambahan dalam game
	idle: "Idle_player.png",
	jump: "Jump_player.png",
	run: "Run_player.png",
	guling: "Double.png",
	fall: "Fall_player.png"
	// Musuh
}
//file suara yang dipakai dalam game
var suara = {
}

//load gambar dan suara lalu jalankan startScreen
loading(gambar, suara, startScreen);

function startScreen(){	
	hapusLayar("#67d2d6");
	tampilkanGambar(dataGambar.logo, 600, 250);
	var startBtn = tombol(dataGambar.startBtn, 600, 350);
	if (tekan(startBtn)){
		jalankan(halamanCover);
	}
}
function halamanCover(){
	hapusLayar("#00b100");
	gambarFull(dataGambar.cover);
	var playBtn = tombol(dataGambar.playBtn, 1100, 500);
	if (tekan(playBtn)){
		setAwal();
		jalankan(gameLoop);
	}	
	resizeBtn(1150,50);
}

function setAwal() {
	game.hero = setSprite(dataGambar.idle, 32, 32); // Player idle
	game.hero.x = 800;
	game.hero.y = 268;
	game.skalaSprite = 2;
	game.lantai = 300;
	game.lompat = false;

}

function gameLoop(){
	hapusLayar();	
	if (!game.lompat) {
		if (game.kanan) {  // kontrol kanan kiri
			game.hero.img = dataGambar.run;
			game.hero.skalaX = 1;
			game.hero.x += 3;
		} else if (game.kiri) {
			game.hero.img = dataGambar.run;
			game.hero.skalaX = -1;
			game.hero.x -= 3;
		} else {
			game.hero.img = dataGambar.idle; // kalau tidak ada tombol di tekan
			
		} 
		if (game.atas) {
			game.lompat = true;
			game.hero.img = dataGambar.jump;
			game.lompatY = -10;
		}
	} else {
		game.lompatY += 0.5;
		if (game.lompatY > 0) game.hero.img = dataGambar.jump;
		game.hero.y += game.lompatY;
		if (game.kanan) {
			game.hero.skalaX = 1;
			game.hero.x += 3;

		} else if (game.kiri) {
			game.hero.skalaX = -1;
			game.hero.x -= 3;
		}
		if (game.hero.y >= game.lantai - 32) {
			game.hero.y = game.lantai - 32;
			game.lompat = false;
		}
	}
	loopSprite(game.hero);
}