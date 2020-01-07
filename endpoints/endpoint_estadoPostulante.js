var request = require('request');

function doRequest_Postulante(documento,paisISO) {

    return new Promise(function (resolve, reject) {
    
      request.post('http://lideres.somosbelcorp.com/WSLideres/Contratos/UneteService.svc/ExistePostulante', {
        json: {
          pais: paisISO,
          documento: documento
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
  module.exports.doRequest_Postulante = doRequest_Postulante
