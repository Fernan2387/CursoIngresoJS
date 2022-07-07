/*
Fernando Aguirre
Division x
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{
	let num;
	let num1;
	let res
	num = parseInt(document.getElementById("txtIdNumeroUno").value);
	num1 = parseInt(document.getElementById("txtIdNumeroDos").value);
	res = num + num1;

	alert("La suma es " + res);
}