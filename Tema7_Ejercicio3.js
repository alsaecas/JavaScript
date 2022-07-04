const hoy = new Date();
const nacimiento = new Date(1988, 8, 23);
const comparacion = hoy.getTime() > nacimiento.getTime();
const diaNacimiento = nacimiento.getDate();
const mesNacimiento = nacimiento.getMonth() + 1;
const añoNacimiento = nacimiento.getFullYear();