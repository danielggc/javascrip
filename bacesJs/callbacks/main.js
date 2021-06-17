setTimeout(function(){
    console.log("hala despues de 3 segundos")
},3000);


setTimeout(()=>{
    console.log("hola despues de 2 segundos funcion de flecah")
},1000);


const getUSsauarui=(id,holaMundo)=>{
    const datosDd7={
        id:id,
        nombre:"dggc7"

    };
     
    setTimeout(()=>{
        holaMundo(datosDd7);
    },1500)
};

getUSsauarui(77,(usuario)=>{
    console.log(usuario.id)
    console.log(usuario.nombre.toUpperCase()) // toUPPERCAse convierte  un string a mayusculas
});