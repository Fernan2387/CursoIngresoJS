/*
Fernando Aguirre
Division x
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
	let numero;

	let num1;

	let des;

	numero = parseInt(document.getElementById("txtIdImporte").value);
	
	num1 = numero * 25 /100;
	
	des = numero - num1;
	
	document.getElementById("txtIdResultado").value = des;
}