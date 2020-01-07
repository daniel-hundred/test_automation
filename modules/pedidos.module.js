require('events').EventEmitter.defaultMaxListeners = 100
const config= require('../locators/ChatFlow.locator')
let locator=config.locator;


const { I } = inject();
let wait = { retries: 3, minTimeout: 2000 };

module.exports={
  
  Init() {
    I.amOnPage('/');
  },

  ingresarChat(usuario, password){
    I.retry(wait).fillField(locator.fieldUsuario, usuario);
    I.retry(wait).fillField(locator.fieldPassword, password);
    I.retry(wait).click(locator.clickLogin);
    I.retry(wait).waitForVisible(locator.lblchatHeader);
  },

  enviarTexto(PalabraClave) {      
    I.wait(3)
    I.retry(wait).fillField(locator.fieldChat, PalabraClave);
    I.wait(2)
    I.pressKey("Enter");
  },

  async confirmarRespuesta(ExpectedResult,MultiResponse,takeLats,Response1,Response2,Response3) { 

    I.wait(4)
    let results = await I.retry(wait).grabAttributeFrom(locator.txtBotResponse,'aria-label')
    var countresults = 0;
    var arrresults = []
    for(var res of results){
      ++countresults;      
      I.retry(wait).say(countresults + '. Respuesta > ' + res)  
      arrresults.push(res)
    }  
    // I.retry(wait).say('>>>>> Ultima respuesta ('+count+'): ' + arrresults[arrresults.length-1])   
    
    var evaluate = false;
    if(MultiResponse=='true'){
      //Evaluamos usamos cantidad takeLats y comparamos por posicion takeLast ultimos
      for(i = 0; i < takeLats; i++){
        botresponseindex = (arrresults.length - takeLats + i);

        // I.say('Esperado : ('+ i + ')'+ ExpectedResult[i]);
        // I.say('Obtenido : ('+ i + ')'+ arrresults[botresponseindex]);
        
        if(ExpectedResult[i]==arrresults[botresponseindex]){
            I.say('Respuesta Coincide!');
            evaluate = true;
        }else{
            I.say('No coinciden...');
            evaluate = false;
        }
      }
    }else if(MultiResponse=='false'){
      //Evaluamos solo ultima respuesta
      if(ExpectedResult[0]==arrresults[arrresults.length-1]){
          I.say('El ultimo resultado es igual!!!');
          evaluate = true;
      }else{
          I.say('No coincide...');
          evaluate = false;
      }
    }
    else{
      i.say('Variable MultiResponse invalida!');
    }

    return evaluate;
    
  },

  async obtenerOpciones(){
    I.wait(1)
    let resoptions = await I.retry(wait).grabTextFrom(locator.txtOption)
    var countopts = 0;
    var arrops = []
    for(var op of resoptions){
      ++countopts;
      // I.retry(wait).say(countopts + '. Opcion - ' + op)  
      arrops.push(op)
    }  
    // I.retry(wait).say('---- Ultima Opcion ('+countopts+'): ' + arrops[arrops.length-1])
  },

  async obtenerEnviados(){
    I.wait(1)
    let resopt = await I.retry(wait).grabTextFrom(locator.txtSent)
    var count = 0;
    var arrsents = []
    for(var sent of resopt){
      ++count;
      // I.retry(wait).say(count + '. Enviado * ' + sent)  
      arrsents.push(sent)
    }  
    // I.retry(wait).say('***** Ultimo enviado ('+count+'): ' + arrsents[arrsents.length-1])
  },

  async reiniciarChat(){
    I.wait(1);
    I.pressKey("Tab");
    I.wait(1);
    I.pressKey("Escape");
    I.retry(wait).moveCursorTo(locator.lblChatSection);
    I.retry(wait).click(locator.btnChatOptions);    
    I.retry(wait).click(locator.lblOptEliminar);
    I.retry(wait).click(locator.btnConfirmEliminar);
    I.wait(1);
    I.retry(wait).fillField(locator.fieldSearchChat,'Esika cyzone lbel');
    I.wait(3);
    I.retry(wait).click('Esika cyzone lbel');
    I.wait(1);
    I.retry(wait).click(locator.btnEmpezar);

    I.wait(5)
    I.retry(wait).fillField(locator.fieldChat, 'SALIR');
    I.wait(2)
    I.pressKey("Enter");

    I.wait(3)
    I.retry(wait).fillField(locator.fieldChat, 'SI');
    I.wait(2)
    I.pressKey("Enter");

    I.wait(3)
    I.retry(wait).fillField(locator.fieldChat, 'SOY CONSULTORA');
    I.wait(2)
    I.pressKey("Enter");

    I.amAcceptingPopups();


    I.wait(3)
    I.retry(wait).click('Con SomosBelcorp');
    I.wait(2)
    I.retry(wait).waitForVisible(locator.modalConsultora);
    I.retry(wait).waitForElement(locator.modalConsultora);

    // I.executeScript(function() {
    //   // now we are inside browser context
    //   alert("Hello! I am an alert box!!");
    //   // $('date').datetimepicker('setDate', new Date());
    //   // let recaptcha_frame_name = 'recaptcha-frame';
    //   // $('._4eb- _3o_l iframe').attr('name', recaptcha_frame_name);
    // });

    I.acceptPopup();
    within({frame: "[src]"}, () => {
      I.say('ooooooooooooooooooooooooooooo');
      // I.retry(wait).click(locator.btnLoginConsultora);
      I.retry(wait).click('INGRESA A TU CUENTA');
    });

    // I.moveCursorTo(locator.frameConsultoralogin);

    // I.retry(wait).switchTo(locator.frameConsultoralogin);
    // I.wait(1)
    // I.retry(wait).click(locator.frameConsultoralogin);

    // let results = await I.retry(wait).grabAttributeFrom(locator.frameConsultoralogin,'style');

    // let titulo = await I.retry(wait).grabTextFrom(locator.btnLoginConsultora);
    // I.say(titulo);


    // I.wait(2)
    // I.pressKey("Tab");
    // I.wait(1)
    // I.retry(wait).click('INGRESA A TU CUENTA');
    // I.retry(wait).click(locator.slctPais);
    // I.wait(1)
    // I.selectOption(locator.slctPais,'PE');
    
    I.wait(2)
    // I.retry(wait).waitForVisible(locator.lblchatHeader);
  },

  sesionIncognito(){
    
    // session('resetChat', () => {
    //   I.wait(1);
    //   I.amOnPage('/');

    //   I.retry(wait).fillField(locator.fieldUsuario, usuario);
    //   I.retry(wait).fillField(locator.fieldPassword, password);
    //   I.retry(wait).click(locator.clickLogin);
    //   I.retry(wait).waitForVisible(locator.lblchatHeader);

    //   I.pressKey("Tab");
    //   I.wait(1);
    //   I.pressKey("Escape");
    //   I.retry(wait).moveCursorTo(locator.lblChatSection);
    //   I.retry(wait).click(locator.btnChatOptions);    
    //   I.retry(wait).click(locator.lblOptEliminar);
    //   I.retry(wait).click(locator.btnConfirmEliminar);
    //   I.wait(1);
    // });
  }


}

