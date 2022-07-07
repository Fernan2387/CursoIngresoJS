/*
Fernando Aguirre
Division x

Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{
	let numero;

	let num1;

	let aum;

	numero = parseInt(document.getElementById("txtIdSueldo").value);
	
	num1 = numero * 10 / 100;
	
	aum = numero + num1;
	
	document.getElementById("txtIdResultado").value = aum;
}
