let nobre ="ddgc7"
console.log(nobre)
const pato ={
    nombre:"luka",
    apellido:"carl",
    tipo:"ave",
    getNombre(){
        return this.nombre + this.apellido + this.tipo;
    }
}
function imprimirAve({nombre,apellido,tipo}){
    nombre = "saidog"
    console.log(nombre,apellido,tipo)
}
imprimirAve(pato)
const {nombre,apellido,tipo} =pato
console.log(nombre,apellido,tipo);
const miembros = ["dd7","jj5", "ss"];
const [d1,d2,d3]=miembros
console.log(d1)