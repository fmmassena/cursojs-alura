
var tabela = document.querySelector("table");

tabela.addEventListener("dblclick",function(event){
	event.target.parentNode.classList.add("fadeOut");

	setTimeout(function(){
		event.target.parentNode.remove(); // forma enxuta

	},500) // parâmetro do setTimeout: espera o meio segundo (500 milissegundos) do fadeout definido na classe no CSS para realizar a ação definida dentro da function
	
});
	