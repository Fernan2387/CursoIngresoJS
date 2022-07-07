/*

Fernando Aguirre
Division x
  
TP 1 Entrada y salida

1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
let pUno;
let pDos;
let pTres;
let total;

   pUno = parseInt(document.getElementById("txtIdPrecioUno").value);
   pDos = parseInt(document.getElementById("txtIdPrecioDos").value);
   pTres = parseInt(document.getElementById("txtIdPrecioTres").value);
   total = pUno + pDos + pTres;
alert("Su total es " + total);
}
function Promedio () 
{
let pUno;
let pDos;
let pTres;
let suma;
let division;

   pUno = parseInt(document.getElementById("txtIdPrecioUno").value);
   pDos = parseInt(document.getElementById("txtIdPrecioDos").value);
   pTres = parseInt(document.getElementById("txtIdPrecioTres").value);
   suma = pUno + pDos + pTres;
   division = suma / 3;
alert("Su promedio es " + division);
	
}
function PrecioFinal () 
{
let pUno;
let pDos;
let pTres;
let suma;
let iva;
let total;
 pUno = parseInt(document.getElementById("txtIdPrecioUno").value);
 pDos = parseInt(document.getElementById("txtIdPrecioDos").value);
 pTres = parseInt(document.getElementById("txtIdPrecioTres").value);
suma = pUno + pDos + pTres;
iva = suma * 21 / 100
total = suma + iva 
alert(" Precio final " + total);
}