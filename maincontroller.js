
app.controller("MainController", function($scope) {

	$scope.szoveg = 'Most már értem, hogy hogyan működnek a változók!';

	$scope.emberek = [
	  { nev: 'Ancsi', eletkor: 42, kedvencek: ['Opel','piros','cica','mákostészta'] },
	  { nev: 'Bence', eletkor: 16, kedvencek: ['Ferrari','zöld','Mike','rántotthús'] },
	  { nev: 'Dalma', eletkor: 14, kedvencek: ['bicikli','kék','mikka-makka','spagetti'] },
	  { nev: 'Áron', eletkor: 9, kedvencek: ['roller','barna','álmodozó','műzli'] },
	  { nev: 'Zsolt', eletkor:46, kedvencek: ['vw','ezüst','stafford','babgúlyás'] }
	];

});
