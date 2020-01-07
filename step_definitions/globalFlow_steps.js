const MyModule = require('../modules/globalFlow.module')
const assert = require('assert');

const { I } = inject();

Given('Ingreso a Facebook Messenger utilizando mi usuario {string} y mi clave {string}', (Usuario,Password) => {
    MyModule.Ini();
    MyModule.loginFBChat(Usuario,Password);
    MyModule.resetFlow();
    MyModule.sesionBotmaker();
});

When('Inicio el flujo de comunicación habilitado para el usuario {string} con clave {string} del pais {string}', (UsuarioConsultora,ClaveConsultora,PaisISO) =>
    MyModule.loginConsultora(PaisISO,UsuarioConsultora,ClaveConsultora)
);

Then('Realizo la compararación de opciones y respuestas considerando su documento {string} y pais {string} para la categoria {string}', (Documento,PaisISO,Categoria) =>
    //AsyncFunctionFix : solucion para poder recuperar el return de un metodo asincrono y poder realizar el assert
    AsyncFunctionFix(Categoria,Documento,PaisISO)
);

async function AsyncFunctionFix(Categoria,Documento,paisISO){    
    
    assert.equal(true, await MyModule.flowResponseCompare(Categoria,Documento,paisISO));  

}


// When('Navego a traves del flujo Interaccion con el Bot en la categoria {string} habilitado para el usuario {string} con clave {string} del pais {string}', (Categoria,UsuarioConsultora,ClaveConsultora,PaisISO) =>
//     MyModule.loginConsultora(PaisISO,UsuarioConsultora,ClaveConsultora),
//     //AsyncFunctionFix : solucion para poder recuperar el return de un metodo asincrono y poder realizar el assert
//     AsyncFunctionFix(Categoria,Documento,Pais)
// );

// async function AsyncFunctionFix(Categoria,Documento,paisISO){    
    
//     assert.equal(true, await MyModule.flowResponseCompare(Categoria,Documento,paisISO));  

// }

// Then('Confirmo el mapeo completo de opciones del Bot', () => {
//     MyModule.closeTestFlow();
// });

