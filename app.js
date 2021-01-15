
const argv = require('./config/yargs').argv;
const colors = require('colors');

const {crearArchivo,listarTabla} = require('./multiplicar/multiplicar');

const fs = require('fs');

//let base = 'abc';


// let data = '';

// for(let i=1;i <=10;i++){

//     data += `${base} x ${i} = ${base * i} \n`;
// }


// fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {

//   if(err) throw err;

//   console.log(`El archivo tabla-${base}.txt ha sido creado`);

// });

// console.log(process.argv)


let comando = argv._[0];

switch(comando){

  case 'listar':
    listarTabla(argv.base,argv.limite)
      .then(dato => {
        console.log('==============='.green);
        console.log(`tabla de ${argv.base} de limite ${argv.limite}`.green);
        console.log('==============='.green);
        console.log(dato.green);
      })
      .catch(e => console.log(e));
    break;
  case 'crear':
    
    crearArchivo(argv.base,argv.limite)
      .then(archivo => console.log(`archivo creado: `+`${archivo}`.greeng))
      .catch(e => console.log(e));
    break;
  default:
  console.log('Comando no reconocido');

}


//let argv2 = process.argv;

//console.log(argv.base);
//console.log('Limite',argv.limite)
//console.log(argv2);
// let param = argv[2];

// let base = param.split('=')[1];


