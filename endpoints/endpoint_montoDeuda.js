var request = require('request');

function doRequest_Deuda(access_token,paisISO,ConsultoraID,CodigoUsuario) {

    var Auth = "Bearer "

    return new Promise(function (resolve, reject) {
    
      request.post('https://wsqa.somosbelcorp.com/api/EstadoCuenta/GetMontoDeuda', {
        json: {
          PaisISO : paisISO,
          ConsultoraID : ConsultoraID,
          CodigoUsuario : CodigoUsuario
        },
        headers: {
          Authorization : Auth.concat(access_token)
        }
      }, (error, res, body) => {
        if (error) {
          reject(error);
        }else{
          resolve(body);
        }
      })  

    });
  }

  //exportar la funcion para ser llamada desde otro archivo
  module.exports.doRequest_Deuda = doRequest_Deuda
