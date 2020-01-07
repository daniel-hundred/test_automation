require('events').EventEmitter.defaultMaxListeners = 400
const config= require('../locators/ChatFlow.locator')
let locator=config.locator;

const Encuesta = require('../bot_responses/responses_encuesta')

const { I } = inject();
let wait = { retries: 3, minTimeout: 3000 };

module.exports={

  CierreFlujoConsulta(){
    I.say("\nCerrando Flujo para iniciar encuesta"); 
    I.retry(wait).click(locator.fieldChat);
    I.retry(wait).fillField(locator.fieldChat, 'DEUDA');
    I.pressKey("Enter");
    I.waitForVisible('//*[contains(text(),"Fecha límite de pago")]',10);
    I.retry(wait).fillField(locator.fieldChat, 'Fecha limite de pago');
    I.pressKey("Enter");
    I.waitForVisible('//*[contains(text(),"Tu fecha límite de pago es el")]|//*[contains(text(),"No tienes fecha límite de pago.")]',10);

  },

  IniciaEncuesta(){
    I.waitForVisible('//div[@aria-label="Si tienes más consultas escribe la palabra *MENÚ*, si finalizaste tus consultas por ahora escribe la palabra *FIN*, o escribe *AYUDA* para hablar con un Ejecutivo de Atención."]',10);
    I.retry(wait).fillField(locator.fieldChat, 'FIN');
    I.pressKey("Enter");
    I.waitForVisible('//*[contains(text(),"😄")]',10)
  },

  async IniEncuesta(){
       
    var arr_interacciones = await Encuesta.interaccionEncuesta();
    var cant_flows = arr_interacciones.length;
    // var respuesta_bot = "";

    var temp_count = 0;
    for(i = 0; i < cant_flows; i++){

      this.resetFlow();
      this.CierreFlujoConsulta();
      this.IniciaEncuesta();

      I.wait(3);
      
      var cant_lines = arr_interacciones[i].flujo.length
      var temp_subcount = 0;

      for (let j = 0; j < cant_lines; j++) { 

        if(arr_interacciones[i].flujo[j].tipo == "pregunta_inicial"){
            //comparar ultima respuesta de bot debe ser la pregunta inicial de la encuesta

            var respuesta_bot = await this.obtnerUltimaRespuestaBot()
            if(respuesta_bot == this.formatResponse(arr_interacciones[i].flujo[j].linea)){
              ++temp_subcount;
            }else{
              I.say("ERROR! Diferencia Mensaje de Inicio de Encuesta");
            }
        }else{
          if(arr_interacciones[i].flujo[j].tipo == "enviar_respuesta"){
           
            I.say("> Responder : " + arr_interacciones[i].flujo[j].linea); 
            I.retry(wait).fillField(locator.fieldChat, arr_interacciones[i].flujo[j].linea);
            I.pressKey("Enter");
            I.wait(4)
            var respuesta_bot = await this.obtnerUltimaRespuestaBot()
            if(arr_interacciones[i].flujo[j+1].tipo == "pregunta_siguiente" || arr_interacciones[i].flujo[j+1].tipo == "encuesta_fin"){
 
              if(respuesta_bot == this.formatResponse(arr_interacciones[i].flujo[j+1].linea)){
                temp_subcount = temp_subcount +2;
              }else{
                I.say("ERROR! Diferencia encontrada : " + respuesta_bot + " !== " + arr_interacciones[i].flujo[j+1].linea )
              }
            }else{
              I.say("!!!No hay respuesta esperada del bot...")
            }
          }
        }

      }
      if(temp_subcount == cant_lines ){
        ++temp_count
      }
  
    }
    return (temp_count == cant_flows)?true : false

  },

  async obtnerUltimaRespuestaBot(){

    var resultOptions = await I.retry(wait).grabTextFrom(locator.txtResultadoBot);

    var arr_optobtenidos = []
    for(var response of resultOptions){
      arr_optobtenidos.push(response)
    }

    var last_response = arr_optobtenidos[arr_optobtenidos.length-1];

    I.say("\nBOT : " + last_response)
    return last_response
  },
  
  hey() {
    I.say('Hey!');
  },

  formatResponse(response){

    var new_response = response.replace(/[\u1000-\uFFFF]+/g, "");
    new_response = new_response.replace(/[*]/g, "");
    return new_response

  },  

  resetFlow(){
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
    I.waitForVisible('//*[contains(text(),"SOY CONSULTORA")]',10);   
  },

  async hey2() {
   
    I.amOnPage('/');
    var anios = await I.retry(wait).grabTextFrom('//td[contains(@id, "td-anio-")]');
    var cluster = await I.retry(wait).grabTextFrom('//span[@ng-reflect-ng-class="[object Object]"]');

    
    //----------
    var arr_anios = []
    for(var response of anios){
      arr_anios.push(response)
    }

    var arr_cluster = []
    for(var response of cluster){
      arr_cluster.push(response)
    }
    //----------

    I.say("cantidad de anios : " + arr_anios.length)
    I.say("cantidad de cluster : " + arr_cluster.length)

    if(arr_anios.length == arr_cluster.length){ //para confirmar que las columnas cluster y años tienen la misma cant de filas

      for (let i = 0; i < arr_anios.length; i++) {
        I.say(arr_cluster[i] + '\t'+ arr_anios[i])   
      }

    }


  },

  async ConfirmaActivacionEncuesta(StandByTime){

    this.CierreFlujoConsulta();
    // var wait_mins = StandByTime * 60
    I.waitForVisible('//*[contains(text(),"😄")]',StandByTime);
 
  }


}

