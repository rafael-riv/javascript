//FUNCION BASICO I
//Ejercicio 1
function a(){
	return 35;
}
console.log(a())
//Por consola Imprime: 35
//Ejercicio 2
function a(){
	return 4;
}
console.log(a()+a());
//Por consola Imprime: 8
//Ejercicio 3
function a(b){
	return b;
}
console.log(a(2)+a(4));
//Por consola Imprime: 6
//Ejercicio 4
function a(b){
	console.log(b);
	return b*3;
}
console.log(a(3));
//Por consola Imprime: 3 luego 9
//Ejercicio 5
function a(b){
	return b*4;
	console.log(b);
}
console.log(a(10));
//Por consola Imprime: 40
//Ejercicio 6
function a(b){
	if(b<10) {
		return 2;
	}
	else     {
		return 4;
	}
	console.log(b);
}
console.log(a(15));
//Por consola Imprime: 4
//Ejercicio 7
function a(b,c){
	return b*c;
}
console.log(10,3);
console.log( a(3,10) );
//Por consola Imprime: 10,3 luego 30
//Ejercicio 8
function a(b){
	for(var i=0; i<10; i++){
		console.log(i);
	}
	return i;
}
console.log(3);
console.log(4);
//Por consola Imprime: 3 luego 4
//Ejercicio 9
function a(){
	for(var i=0; i<10; i++){
		i = i +2;
		console.log(i);
	}
}
a();
//Por consola Imprime: 
//2 5 8 11
//Ejercicio 10
function a(b,c){
	for(var i=b; i<c; i++) {
		console.log(i);
	}
	return b*c;
}
a(0,10);
console.log(a(0,10));
//Por consola Imprime:  0 1 2 3 4 5 6 7 8 9
//luego imprime 0 1 2 3 4 5 6 7 8 9 0
//Ejercicio 11
function a(){
	for(var i=0; i<10; i++){
		for(var j=0; j<10; j++){
			console.log(j);
		}
		console.log(i);
	}
}
//la funcion no es llamada por tanto no registra resultado
//Ejercicio 12
function a(){
	for(var i=0; i<10; i++){
		for(var j=0; j<10; j++){
			console.log(i,j);
		}
		console.log(j,i);
	}
}
//la funcion no es llamada por tanto no registra resultado
//Ejercicio 13
var z = 10;
function a(){
	var z = 15;
	console.log(z);
}
console.log(z);
//como no se llama a funcion la consola entrega el valor de z global es decir 10
//ejercicio 14
var z = 10;
function a(){
	var z = 15;
	console.log(z);
}
a();
console.log(z);
//en consola se imprime: 15 luego 10 pues cuando se llama a la consola se activa la variable locar y la funcion no tiene un retorno
//ejercicio 15

var z = 10;
function a(){
	var z = 15;
	console.log(z);
	return z;
}
z = a();
console.log(z);
//la consola imprime 15 y luego 15