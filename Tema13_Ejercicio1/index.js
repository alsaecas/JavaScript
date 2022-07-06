let nombre="Alejandro"
let apellidos="Saez Castells"
let estudiante=nombre + " " + apellidos
let estudianteMayus=estudiante.toUpperCase()
let estudianteMinus=estudiante.toLowerCase()
let nLetras=estudiante.length
let primeraLetra=nombre.slice(0,1)
let ultimaLetra=apellidos.slice(apellidos.length-1,apellidos.length)
let sinEspacios=estudiante.replaceAll(" ","")
let aparece=estudiante.includes(nombre)

console.log(estudianteMayus)
console.log(estudianteMinus)
console.log(nLetras)
console.log(primeraLetra)
console.log(ultimaLetra)
console.log(sinEspacios)
console.log(aparece)