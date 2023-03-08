const fs = require('fs');

const archivo = './db/data.json';

const guardarDB = ( data ) => {
    fs.writeFileSync( archivo, JSON.stringify(data) );
}

const leerDB = () => {
    //Si no existe
    if( !fs.existsSync(archivo) ){
        return null;
    }
    //Si existe
    const info = fs.readFileSync(archivo, { encoding: 'utf-8' });
    // Regresar arreglo --> desearizarlo, parsearlo (objetos)
    const data = JSON.parse( info );

    // console.log(data);

    return data;
}

module.exports = {
    guardarDB,
    leerDB 
}