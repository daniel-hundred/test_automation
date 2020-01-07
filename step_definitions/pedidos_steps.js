require('events').EventEmitter.defaultMaxListeners = 100
const MyModule = require('../modules/pedidos.module')

const assert = require('assert');

const { I } = inject();

Given('Ingreso al Chat a traves de mi usuario {string} y mi clave {string}', (Usuario,Password) => {
    MyModule.Init();
    MyModule.ingresarChat(Usuario, Password);
    // MyModule.reiniciarChat();
});

When('Ingreso palabras las Palabras claves {string},{string},{string},{string},{string},{string}', (Hint1,Hint2,Hint3,Hint4,Hint5,Hint6) => {    
    MyModule.enviarTexto(Hint1);
    MyModule.enviarTexto(Hint2);
    MyModule.enviarTexto(Hint3);
});

Then('Obtengo la Respuesta multiple {string} {string} : {string}, {string}, {string}', (MultiResponse,takeLats,Response1,Response2,Response3) =>
    //AsyncFunctionFix : solucion para poder recuperar el return de un metodo asincrono y poder realizar el assert
    AsyncFunctionFix(MultiResponse,takeLats,Response1,Response2,Response3)
);

async function AsyncFunctionFix(MultiResponse,takeLats,Response1,Response2,Response3){

    MyModule.obtenerEnviados();
    MyModule.obtenerOpciones();
    //Se arma array con resultado(s) esperado(s) - Debe coincidir con parametro takeLasts del feature y el orden del chat
    var arrExpected = [];
    arrExpected.push(variable.res_cliente_fechapasepedido);
    arrExpected.push(variable.res_menu_cierre);
    //Se ejecuta método de comparación
    assert.equal(true,await MyModule.confirmarRespuesta(arrExpected,MultiResponse,takeLats,Response1,Response2,Response3));

}