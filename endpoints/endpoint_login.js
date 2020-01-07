var request = require('request');
const jwt = require('jsonwebtoken');

const SECRET_login = 'kjsfg!)=)4diof25sfdg302dfg57438)!#$#70dfgf234asdnan';

function doRequest_Login(documento,paisISO) {

    let token_user = jwt.sign({"Documento": documento}, SECRET_login, { algorithm: 'HS256'});

    var url = 'https://wsqa.somosbelcorp.com/api/Login';

    var headers = {
    'Content-Type' : 'text/plain'
    };

    var form = {
        grant_type : "password",
        username : token_user,
        pais : paisISO,
        tipoAutenticacion : "3"
    };

    return new Promise(function (resolve, reject) {
    
        request.post({ url: url, form: form, headers: headers }, function (error, res, body) {
            if (!error && res.statusCode == 200) {
                resolve(body);
              } else {
                reject(error);
              }
        });    

    });
  }

  //exportar la funcion para ser llamada desde otro archivo
  module.exports.doRequest_Login = doRequest_Login
