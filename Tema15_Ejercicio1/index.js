const nombre = 'Alejandro'
const apellidos = 'Saez Castells'
const completo = { nombre, apellidos}
//sessionStorage.setItem("Nombre completo", JSON.stringify(completo))
//localStorage.setItem("Nombre completo", JSON.stringify(completo))
const expiration = (new Date().getTime())  + 2 * 60000
//document.cookie = `datos=${JSON.stringify(completo)};expires=${new Date(expiration)}`