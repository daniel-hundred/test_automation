var request = require('request');

function doRequest_Concursos(token, campania) {

    var url = 'https://wsqa.somosbelcorp.com/api/Incentivo/ListConcursosVigentes?codigoCampania='+campania;

    var headers = {
        'Authorization' : 'Bearer '+token
    };

    var form = {
    };

    return new Promise(function (resolve, reject) {
    
        request.get({ url: url, form: form, headers: headers }, function (error, res, body) {
            if (!error && res.statusCode == 200) {
                resolve(body);
              } else {
                reject(error);
              }
        });    

    });
  }

  //exportar la funcion para ser llamada desde otro archivo
  module.exports.doRequest_Concursos = doRequest_Concursos
