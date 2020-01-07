const MyModule = require('../modules/chatFlow.module')
const assert = require('assert');

const { I } = inject();

Given('Ingreso a FB con mi usuario {string} y mi clave {string}', (Usuario,Password) => {
  MyModule.Ini();  
  MyModule.loginChat(Usuario,Password);
  MyModule.resetUser();
  MyModule.sesionBotmaker();
  // MyModule.resetFlow();
  MyModule.resetFlow2();
  
  
  // MyModule.resetFlow_iframe();
});

When('Navego a traves del flujo basico', () => {
  MyModule.metodo2(); 
});

// Then('Obtengo la Respuesta Tipo {string}', (id) => {
//   assert.equal(true,MyModule.metodo3(id));

// });

Then('Confirmo el mapeo basico completo de opciones del Bot', () => {
  MyModule.metodo4();
});
