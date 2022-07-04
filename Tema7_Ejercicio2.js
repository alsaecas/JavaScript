const obj= {
    nombre: 'Alejandro',
    apellidos: 'Saez Castells',
    edad: 33,
    altura: 1.72,
    eresDesarrollador: true
};
const miEdad=obj.edad;
const lista = [
    {
        ...obj
    },{
        nombre: "Yuliia",
        apellido: "Loba",
        edad: 28,
        altura: 1.77,
        eresDesarrollador: false
    },{
        nombre: "Luis",
        apellido: "Perez Lopex",
        edad: 35,
        altura: 1.70,
        eresDesarrollador: false
    }
];

const listaOrdenada = lista.sort((a, b) => b.edad - a.edad);
