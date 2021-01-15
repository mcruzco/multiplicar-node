const fs = require('fs');
const colors = require('colors');


let crearArchivo = (base, limite = 10) => {

   

    return new Promise ( (resolve,reject ) => {

      if(!Number(base)){
        reject(`El valor introducido "${ base }" no es un número`);
        return;
      }

      let data = '';

      for(let i=1;i <=limite;i++){
      
          data += `${base} x ${i} = ${base * i} \n`;
      }
      
      
      fs.writeFile(`tablas/tabla-${base}-al-${limite}.txt`, data, (err) => {
      
        if(err) 
         reject(err);
        else
          resolve(`tabla-${base}-al-${limite}.txt`);
        
      
      });


    });



}

let listarTabla = (base, limite) => {

  return new Promise ( (resolve,reject ) => {

    if(!Number(base)){
      reject(`El valor introducido "${ base }" no es un número`);
      return;
    }

    let data = '';

    for(let i=1;i <=limite;i++){
    
        data += `${base} x ${i} = ${base * i} \n`;
    }
    
    
    resolve(data);


  });


}

//Forma 1
 module.exports = {
   crearArchivo,
   listarTabla
 }