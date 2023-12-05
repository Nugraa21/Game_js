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
	fall: "Fall_player.png",
	// Player di serang
	// Musuh
	hit: "Hit (32x32).png",
	map: "map.png"
	

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
	// game.hero.x = 800;
	// game.hero.y = 268;
	game.skalaSprite = 2;
	// game.lantai = 300;
	// game.lompat = false;
	game.hero.animDiam = dataGambar.idle;
	game.hero.animLompat = dataGambar.jump;
	game.hero.animJalan = dataGambar.run;
	game.hero.animJatuh = dataGambar.fall;
	game.hero.animMati = dataGambar.hit;
	setPlatform(map_1, dataGambar.map, 32, game.hero);
	game.gameOver = ulangpermainan

} function ulangpermainan() {
	game.aktif = true;
	setAwal();
	jalankan(gameLoop);
}

function gameLoop(){
	hapusLayar();	
	if (game.kanan) {
		gerakLevel(game.hero, 3, 0);
	} else if (game.kiri) {
		gerakLevel(game.hero, -3, 0);

	}
	if (game.atas) {
		gerakLevel(game.hero, 0,-10);
		
	}
	buatLevel();
}