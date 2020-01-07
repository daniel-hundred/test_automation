const MyModule = require('../modules/globalFlow.module')
const MyModule_quiz = require('../modules/encuesta.module')
const assert = require('assert');

const { I } = inject();

var recuperado = 0

Given('Ingreso a FB Messenger utilizando mi usuario {string} y mi clave {string}', (Usuario,Password) => {
    MyModule.Ini();
    MyModule.loginFBChat(Usuario,Password);
    MyModule.resetFlow();
    MyModule.sesionBotmaker();
});

When('Inicio el flujo de interacción habilitado para el usuario {string} con clave {string} del pais {string}', (UsuarioConsultora,ClaveConsultora,PaisISO) =>
    MyModule.loginConsultora(PaisISO,UsuarioConsultora,ClaveConsultora)  
    // MyModule_quiz.hey()
);

Then('Realizo la encuesta enviada por el Bot al finalizar un flujo', () =>
    AsyncFunctionFix()
);

async function AsyncFunctionFix(){    
    assert.equal(true, await MyModule_quiz.IniEncuesta());   
}

Then('Se verifica la activación de encuesta luego de finalizar un flujo y estar inactivo por {string} minutos', (Minutos) => {
    MyModule_quiz.ConfirmaActivacionEncuesta(Minutos);
});