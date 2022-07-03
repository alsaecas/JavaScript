let lista=['Agua', 'Pan', 'Leche', 'Mantequilla', 'Lechuga'];
lista.push('Aceite de Girasol');
lista.pop();

let peliculas=[
    {titulo: 'Matrix', director: 'Hermanas Wachowski', fecha: 1999},
    {titulo: 'Resident Evil', director: 'Paul W.S. Anderson', fecha: 2002},
    {titulo: 'Mad Max: Furia en la carretera', director: 'George Miller', fecha: 2015}
];
let peliculasNuevas=peliculas.filter(obj => obj.fecha>2009);
let directores=peliculas.map(obj => obj.director);
let titulos=peliculas.map(obj => obj.titulo);
let listaConcat=directores.concat(titulos);
let listaPropag=[...directores,...titulos];