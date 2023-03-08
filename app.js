require('colors');

const { guardarDB, leerDB } = require('./helpers/guardarArchivo');
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

    const tareasDB = leerDB();

    if ( tareasDB ) { // cargar tareas
        tareas.cargarTareasFromArray( tareasDB );
    }
    
    do {
        //Imprimir Menu
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

        guardarDB( tareas.listadoArr );
        await pausa();

    } while (opt !== '0');


    
}

main();



