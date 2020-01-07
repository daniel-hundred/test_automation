const config= require('../locators/ChatFlow.locator')
let locator=config.locator;


const { I } = inject();
let wait = { retries: 3, minTimeout: 2000 };

module.exports={
  
  Ini() {
    I.amOnPage('/');
  },

  loginChat(usuario, password){
    I.retry(wait).fillField(locator.fieldUsuario, usuario);
    I.retry(wait).fillField(locator.fieldPassword, password);
    I.retry(wait).click(locator.clickLogin);
    // I.retry(wait).waitForVisible(locator.lblchatHeader);
  },

  metodo2(){
    I.say('I am on WHEN step'); 
  },

  metodo3(id){
    if(variable.respuesta1==id){
      return true;
    }else{
      I.say('¡FALLÓ TEST!: '+variable.respuesta1+ '<>' +id);
      return false;
    }
  },

  metodo4(){
    I.say('I am on THEN step');
  },

  async resetFlow2(){

    I.wait(2)
    I.retry(wait).click('SOY CONSULTORA');
    I.wait(2)
    I.say('SOY CONSULTORA')

    // I.amAcceptingPopups();

    I.wait(3)
    I.retry(wait).click('Con SomosBelcorp');
    I.wait(2)
    I.say('Con SomosBelcorp')
    I.wait(3)

    // I.acceptPopup();

    I.waitForVisible('//iframe[@name="facebook_ref"]',10);
    I.say('espere y encontre elemento xpath : //iframe[@name="facebook_ref"] ')

    let results = await I.retry(wait).grabAttributeFrom('//iframe[@name="facebook_ref"]','src')
    I.retry(wait).say(results)

    // within({frame: ["#IF1"]}, () => {   
    
    // I.seeElementInDOM('#ddlPais')

    let pageSource = await I.grabSource();
    I.say(pageSource)
    

    within({frame: ["//iframe[@name='facebook_ref']"]}, () => {    
        // I.retry(wait).click('//select[@id="ddlPais"]');
        I.wait(3)
        // I.retry(wait).fillField("//*[@id='txtUsuario']",'yesssssss');
        // I.see('Elige tu País')
        I.wait(3)
    });

    // I.cancelPopup();

   },


  async resetFlow_iframe(){

    // within({frame: ["#IF1"]}, () => {
    within({frame: ["//iframe[@name='iframe1']"]}, () => {    
        I.retry(wait).click('//*[contains(text(),"LambdaTest Tool Panel in Real Time Testing")]');
        I.wait(5)
    });
  

        // I.wait(1);
    // I.pressKey("Tab");
    // I.wait(1);
    // I.pressKey("Escape");
    // I.retry(wait).moveCursorTo(locator.lblChatSection);
    // I.retry(wait).click(locator.btnChatOptions);    
    // I.retry(wait).click(locator.lblOptEliminar);
    // I.retry(wait).click(locator.btnConfirmEliminar);
    // I.wait(1);
    // I.retry(wait).fillField(locator.fieldSearchChat,'Esika cyzone lbel');
    // I.wait(3);
    // I.retry(wait).click('Esika cyzone lbel');
    // I.wait(1);
    // I.retry(wait).click(locator.btnEmpezar);
    // //temp wait
    // I.waitForVisible('//*[contains(text(),"CÓMO SER CONSULTORA")]',10);
    // I.wait(3);

    // //Acceso formulario con el usuario somos belcorp
    // I.wait(5)
    // I.retry(wait).fillField(locator.fieldChat, 'SALIR');
    // I.wait(2)
    // I.pressKey("Enter");
    // I.say('SALIR')

    // I.wait(3)
    // I.retry(wait).fillField(locator.fieldChat, 'SI');
    // I.wait(2)
    // I.pressKey("Enter");
    // I.say('SI')

    // I.wait(3)
    // I.retry(wait).fillField(locator.fieldChat, 'SOY CONSULTORA');
    // I.wait(2)
    // I.pressKey("Enter");
    // I.say('SOY CONSULTORA')

    I.wait(2)
    I.retry(wait).click('SOY CONSULTORA');
    I.wait(2)
    I.say('SOY CONSULTORA')

    I.wait(3)
    I.retry(wait).click('Con SomosBelcorp');
    I.wait(2)
    I.say('Con SomosBelcorp')
    I.wait(3)
    I.waitForVisible('//iframe[@name="facebook_ref"]',10);
    I.say('espere y encontre elemento xpath : //iframe[@name="facebook_ref"] ')

    let results = await I.retry(wait).grabAttributeFrom('//iframe[@name="facebook_ref"]','src')
    I.retry(wait).say(results)

    // I.executeScript(function() {      
    //   // document.getElementsByName('facebook_ref')[0].setAttribute("id", "myIFrame");
    //   document.getElementsByName('facebook_ref')[0].removeAttribute("style");
    //   // document.getElementsByName('facebook_ref')[0].setAttribute
    //   // document.getElementsByName('facebook_ref')[0].setAttribute("id", "myXIFrame");
    // });

    // I.wait(3)
    // I.executeScript(function() {      
    //   document.getElementsByName('facebook_ref')[0].setAttribute("style", "background-color:blue");
    // })
    
    I.wait(3)
    I.executeScript(function() {   
        // document.getElementsByName('facebook_ref')[0].removeAttribute("style")
        document.getElementsByName('facebook_ref')[0].id = "myXIFrame"
        // document.getElementById('myXIFrame').setAttribute("style", "background-color:blue")

        var iframe = document.getElementById('myXIFrame');
        var innerDoc = iframe.contentDocument || iframe.contentWindow.document;

        innerDoc.getElementById('txtUsuario').style.backgroundColor = "blue";



        // var iframe = document.getElementById('myXIFrame');
        // // var iframe = document.querySelector('iframe[id="myXIFrame"]');

        // iframe.contentWindow.document.querySelector("#txtUsuario").style.backgroundColor = "blue";
        // // var element = iframe.contentWindow.document.querySelector('input[id="checkbox"]');


        // function iframeRef( frameRef ) {
        //   return frameRef.contentWindow
        //       ? frameRef.contentWindow.document
        //       : frameRef.contentDocument
        // }
      
        // var inside = iframeRef( document.getElementsByName('facebook_ref')[0])
        // var x = inside.getElementById("txtPassword").textContent;
        // console.log(x)

        // var inside = iframeRef( document.getElementById('myXIFrame') )
        // inside.getElementById('//*[@id="txtPassword"]').setAttribute("style", "background-color:red")

        // var inside = $('#one').contents();

      // var text = top.window.main.document.getElementById('myXIFrame');
    });

    // within({ frame: 'Esika cyzone lbel' }, () => {
    //     I.waitForText('Esika cyzone lbel', 6);
    // });



    // within({frame: "#myXIFrame"}, () => {    
    //     I.see("Esika cyzone lbel") 
    //     I.retry(wait).fillField('//*[@id="txtUsuario"]', 'biennnnnnn')
    // });




    // // I.switchTo("//iframe[@id='myIFrame']");
    // // I.switchTo('#myIFrame');
    // // I.wait(1)
    // // I.click(locator.slctPais)

    // // within({frame: "#myIFrame"}, () => {
    // //   I.wait(1)
    // //   I.click(locator.slctPais)
    // // });

    // I.wait(10)
  },

  resetUser(){
    I.wait(1);
    I.retry(wait).fillField(locator.fieldSearchChat, '@reset_user');
    I.wait(1);
  },

  resetFlow(){

    I.wait(1);
    I.amOnPage('/');
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
    //temp wait
    I.waitForVisible('SOY CONSULTORA',10);
    // I.wait(2);





  },

  sesionBotmaker(){
    
    // session('resetChat', () => {
      I.wait(1);
      I.amOnPage('https://go.botmaker.com/#/');
      I.waitForVisible('//*[@class="md-card-title--title md-text--secondary"]',10);
      I.retry(wait).click('Sign in with email')
      I.wait(1);
      I.pressKey("Tab"); 
      I.retry(wait).fillField('//input[@class="mdl-textfield__input firebaseui-input firebaseui-id-email"]', 'sergio.silva@hundred.com.pe');
      I.pressKey("Enter"); 
      I.wait(1);
      I.pressKey("Tab"); 
      I.retry(wait).fillField('//input[@class="mdl-textfield__input firebaseui-input firebaseui-id-password"]', '@Sebas50pl1n');
      I.pressKey("Enter"); 
      I.waitForVisible('//*[contains(text(),"Información adicional")]',10);
      I.wait(1);
      I.pressKey("Tab");
      I.retry(wait).click('//input[contains(@class,"md-text-field md-text-field--margin md-full-width md-text searchBarInput")]')        
      I.retry(wait).fillField('//input[contains(@class,"md-text-field md-text-field--margin md-full-width md-text searchBarInput")]', 'QA chatbot');
      I.wait(1)
      I.retry(wait).click('(.//*[normalize-space(text()) and normalize-space(.)="person"])[1]/following::span[1]')  
      I.wait(5)
      I.retry(wait).click('(.//*[normalize-space(text()) and normalize-space(.)="QA Chatbot"])[1]/following::div[1]')
      I.wait(5);


      I.retry(wait).click('(//i[@class="md-icon material-icons"][contains(.,"mode_edit")])[1]')
      I.retry(wait).click('//input[@id="variable"]')
      I.retry(wait).fillField('//input[@id="variable"]', 'paisISO'); 
      I.retry(wait).fillField('//input[@placeholder="un valor"]', 'PE');
      I.wait(1)
      I.retry(wait).click('//i[@class="md-icon material-icons"][contains(.,"done")]')
      I.wait(3)


      I.retry(wait).click('(//i[@class="md-icon material-icons"][contains(.,"mode_edit")])[1]')
      I.retry(wait).click('//input[@id="variable"]')
      I.retry(wait).fillField('//input[@id="variable"]', 'NumeroDocumento'); 
      I.retry(wait).fillField('//input[@placeholder="un valor"]', '0009031571');
      I.wait(1)
      I.retry(wait).click('//i[@class="md-icon material-icons"][contains(.,"done")]')
      I.wait(3)


      I.retry(wait).click('(//i[@class="md-icon material-icons"][contains(.,"mode_edit")])[1]')
      I.retry(wait).click('//input[@id="variable"]')
      I.retry(wait).fillField('//input[@id="variable"]', 'CodigoConsultora'); 
      I.retry(wait).fillField('//input[@placeholder="un valor"]', '001248170');
      I.wait(1)
      I.retry(wait).click('//i[@class="md-icon material-icons"][contains(.,"done")]')
      I.wait(3)

      I.retry(wait).click('(//i[@class="md-icon material-icons"][contains(.,"mode_edit")])[2]')
      I.retry(wait).click('//input[contains(@id,"edit-user-tag-add")]')
      I.wait(1)
      I.retry(wait).fillField('//input[contains(@id,"edit-user-tag-add")]', 'authenticated');
      I.wait(1) 
      I.retry(wait).click('//div[@class="md-tile-text--primary md-text"][contains(.,"authenticated")]')
      I.wait(1)
      I.retry(wait).click('//i[@class="md-icon material-icons"][contains(.,"done")]')


      I.retry(wait).click('(//i[@class="md-icon material-icons"][contains(.,"mode_edit")])[2]')
      I.retry(wait).click('//input[contains(@id,"edit-user-tag-add")]')
      I.wait(1)
      I.retry(wait).fillField('//input[contains(@id,"edit-user-tag-add")]', 'Perú');
      I.wait(1) 
      I.retry(wait).click('//div[@class="md-tile-text--primary md-text"][contains(.,"Perú")]')
      I.wait(1)
      I.retry(wait).click('//i[@class="md-icon material-icons"][contains(.,"done")]')


      // });
  }


}

