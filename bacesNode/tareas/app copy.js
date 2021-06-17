const { menu, pausa } = require("./opciones/menu")
main = async() => { 
   
    do {
        option   = await menu();
        await pausa();
    } while (  option !== '0');
  
    pausa();
};
main();