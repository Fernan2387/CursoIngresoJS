/*
Fernando Aguirre
Division x
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	
	let numero1;
	let numero2;
	let suma;
	numero1=parseInt(document.getElementById("txtIdNumeroUno").value);
	numero2=parseInt(document.getElementById("txtIdNumeroDos").value);
	suma = numero1 + numero2;
	alert ("la suma es " + suma);	
}

function restar()
{
	let num;
	let num1;
	let resta;
	num = parseInt(document.getElementById("txtIdNumeroUno").value);
	num1 = parseInt(document.getElementById("txtIdNumeroDos").value);
	resta = num - num1;

	alert("Su resultado es " + resta);
}

function multiplicar()
{ 
	let num;
	let num1;
	let mult;
	num = parseInt(document.getElementById("txtIdNumeroUno").value);
	num1 = parseInt(document.getElementById("txtIdNumeroDos").value);
	mult = num * num1;

	alert("Su resultado es " + mult);
}

function dividir()
{
	let num;
	let num1;
	let divi;
	num = parseInt(document.getElementById("txtIdNumeroUno").value);
	num1 = parseInt(document.getElementById("txtIdNumeroDos").value);
	divi = num / num1;

	alert("Su resultado es " + divi);
}

