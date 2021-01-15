const opts = {
  base: {
    demand: true,
    alias: 'b'
  },
  limite : {
      alias: 'l',
      default: 10
    }

}



const argv = require('yargs')
.command('listar','Imprime en consola la tabla de multi',opts)
.command('Crear','Genera un archivo con el limite enviado',opts)
.help()
.argv;

module.exports = {
  argv
}