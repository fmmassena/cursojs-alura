var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista"; // forma pela qual consigo trocar um conteúdo já exibido na página pelo HTML

var pacientes = document.querySelectorAll(".paciente"); // o array com todos os pacientes no plural

for (var i = 0; i < pacientes.length; i++) {
	
	var paciente = pacientes[i]; // a variável que recebe cada paciente da iteração do "for" no singular
								// com isso o código que havia sido escrito para um único paciente foi aproveitado na íntegra

	var tdPeso = paciente.querySelector(".info-peso");
	var peso = tdPeso.textContent;

	var tdAltura = paciente.querySelector(".info-altura");
	var altura = tdAltura.textContent;

	// selecionando a coluna do IMC
	var tdImc = paciente.querySelector(".info-imc");

	var imc = peso / (altura * altura);

	tdImc.textContent = imc;

	var pesoEhValido = validaPeso(peso);
	var alturaEhValida = validaAltura(altura);



	if (!pesoEhValido) {
	    console.log("Peso inválido!");
	    pesoEhValido = false;
	    tdImc.textContent = "Peso inválido!";
	    paciente.classList.add("paciente-invalido");
	    // ou na forma hardcoded: paciente.style.backgroundColor = "lightcoral";
	}

	if (!alturaEhValida) {
	    console.log("Altura inválida!");
	    alturaEhValida = false;
	    tdImc.textContent = "Altura inválida!";
	    paciente.classList.add("paciente-invalido");
	}

	if (alturaEhValida && pesoEhValido){
	    var imc = calculaImc(peso,altura);
	    tdImc.textContent = imc;
	}

}	

function validaPeso(peso) {
	if (peso >=0 && peso < 1000){
		return true;
	}else{
		return false;
	}
}

function validaAltura(altura) {
	if (altura >=0 && altura < 3.0){
		return true;
	}else{
		return false;
	}
}


function calculaImc(peso,altura) {
	var imc = 0;

	imc = peso / (altura * altura);

	return imc.toFixed(2);


}  
