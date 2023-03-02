require('colors');

const { inquirerMenu,
         pausa,
        leerInput, 
    } = require('./helpers/inquirer');
// const Tarea = require('./models/tarea');
const Tareas = require('./models/tareas');

// console.clear();

const main = async() => {
    console.log('Hola mundo');

    let opt = '';
    const tareas = new Tareas();

    do {
        opt = await inquirerMenu();
        console.log({opt});
        // const tareas = new Tareas();
        // const tarea = new Tarea('comprar comida');
        // tareas._listado[tarea.id] = tarea;
        // console.log(tareas);

        switch (opt) {
            case '1':
                // crear opcion
                const desc = await leerInput('Descripción:');
                tareas.crearTarea( desc );
            break;

            case '2':
                console.log(tareas._listado);
            break;
            
        
        }

        await pausa();

    } while (opt !== '0');


    
}

main();



