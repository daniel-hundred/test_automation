
async function interaccionEncuesta() {

    var PD_ENCUESTA_PREGUNTA_01 = '*¿Te sientes satisfecha con el servicio brindado por este canal?*\nCalifica de 1 a 5 el nivel de satisfacción, siendo 1 "Muy Insatisfecha" y 5 "Muy Satisfecha"'
    var PD_ENCUESTA_PREGUNTA_02 = '*¿Resolvimos tu solicitud?*'
    // var PD_ENCUESTA_PREGUNTA_03 = ''
    var CUALITATIVO_P1 = '¿Cual fue el motivo de esta calificación?'
    var CUALITATIVO_P2 = '¿Cual fue el motivo de esta calificación?'
    var PD_ENCUESTA_FIN = 'Muchas gracias por tu opinión.'

    var quizflow_01 =   {flujo: []}    
    quizflow_01.flujo.push({tipo: 'pregunta_inicial', linea: PD_ENCUESTA_PREGUNTA_01})
    quizflow_01.flujo.push({tipo: 'enviar_respuesta', linea: '5'})
    quizflow_01.flujo.push({tipo: 'pregunta_siguiente', linea: PD_ENCUESTA_PREGUNTA_02})
    quizflow_01.flujo.push({tipo: 'enviar_respuesta', linea: 'Si'})
    quizflow_01.flujo.push({tipo: 'encuesta_fin', linea: PD_ENCUESTA_FIN})

    var quizflow_02 =   {flujo: []}    
    quizflow_02.flujo.push({tipo: 'pregunta_inicial', linea: PD_ENCUESTA_PREGUNTA_01})
    quizflow_02.flujo.push({tipo: 'enviar_respuesta', linea: '5'})
    quizflow_02.flujo.push({tipo: 'pregunta_siguiente', linea: PD_ENCUESTA_PREGUNTA_02})
    quizflow_02.flujo.push({tipo: 'enviar_respuesta', linea: 'No'})
    quizflow_02.flujo.push({tipo: 'encuesta_fin', linea: CUALITATIVO_P2})
    quizflow_02.flujo.push({tipo: 'enviar_respuesta', linea: 'La informacion no fue tan clara'})
    quizflow_02.flujo.push({tipo: 'encuesta_fin', linea: PD_ENCUESTA_FIN})

    var quizflow_03 =   {flujo: []}    
    quizflow_03.flujo.push({tipo: 'pregunta_inicial', linea: PD_ENCUESTA_PREGUNTA_01})
    quizflow_03.flujo.push({tipo: 'enviar_respuesta', linea: '4'})
    quizflow_03.flujo.push({tipo: 'pregunta_siguiente', linea: PD_ENCUESTA_PREGUNTA_02})
    quizflow_03.flujo.push({tipo: 'enviar_respuesta', linea: 'Si'})
    quizflow_03.flujo.push({tipo: 'encuesta_fin', linea: PD_ENCUESTA_FIN})

    var quizflow_04 =   {flujo: []}    
    quizflow_04.flujo.push({tipo: 'pregunta_inicial', linea: PD_ENCUESTA_PREGUNTA_01})
    quizflow_04.flujo.push({tipo: 'enviar_respuesta', linea: '4'})
    quizflow_04.flujo.push({tipo: 'pregunta_siguiente', linea: PD_ENCUESTA_PREGUNTA_02})
    quizflow_04.flujo.push({tipo: 'enviar_respuesta', linea: 'No'})
    quizflow_04.flujo.push({tipo: 'encuesta_fin', linea: CUALITATIVO_P2})
    quizflow_04.flujo.push({tipo: 'enviar_respuesta', linea: 'La informacion no fue clara'})
    quizflow_04.flujo.push({tipo: 'encuesta_fin', linea: PD_ENCUESTA_FIN})

    var quizflow_05 =   {flujo: []}    
    quizflow_05.flujo.push({tipo: 'pregunta_inicial', linea: PD_ENCUESTA_PREGUNTA_01})
    quizflow_05.flujo.push({tipo: 'enviar_respuesta', linea: '3'})
    quizflow_05.flujo.push({tipo: 'pregunta_siguiente', linea: PD_ENCUESTA_PREGUNTA_02})
    quizflow_05.flujo.push({tipo: 'enviar_respuesta', linea: 'Si'})
    quizflow_05.flujo.push({tipo: 'encuesta_fin', linea: PD_ENCUESTA_FIN})

    var quizflow_06 =   {flujo: []}    
    quizflow_06.flujo.push({tipo: 'pregunta_inicial', linea: PD_ENCUESTA_PREGUNTA_01})
    quizflow_06.flujo.push({tipo: 'enviar_respuesta', linea: '3'})
    quizflow_06.flujo.push({tipo: 'pregunta_siguiente', linea: PD_ENCUESTA_PREGUNTA_02})
    quizflow_06.flujo.push({tipo: 'enviar_respuesta', linea: 'No'})
    quizflow_06.flujo.push({tipo: 'pregunta_siguiente', linea: CUALITATIVO_P2})
    quizflow_06.flujo.push({tipo: 'enviar_respuesta', linea: 'La informacion no respondio mi duda'})
    quizflow_06.flujo.push({tipo: 'encuesta_fin', linea: PD_ENCUESTA_FIN})

    var quizflow_07 =   {flujo: []}    
    quizflow_07.flujo.push({tipo: 'pregunta_inicial', linea: PD_ENCUESTA_PREGUNTA_01})
    quizflow_07.flujo.push({tipo: 'enviar_respuesta', linea: '2'})
    quizflow_07.flujo.push({tipo: 'pregunta_siguiente', linea: CUALITATIVO_P1})
    quizflow_07.flujo.push({tipo: 'enviar_respuesta', linea: 'La informacion no respondio mi duda'})
    quizflow_07.flujo.push({tipo: 'pregunta_siguiente', linea: PD_ENCUESTA_PREGUNTA_02})
    quizflow_07.flujo.push({tipo: 'enviar_respuesta', linea: 'Si'})
    quizflow_07.flujo.push({tipo: 'encuesta_fin', linea: PD_ENCUESTA_FIN})

    var quizflow_08 =   {flujo: []}    
    quizflow_08.flujo.push({tipo: 'pregunta_inicial', linea: PD_ENCUESTA_PREGUNTA_01})
    quizflow_08.flujo.push({tipo: 'enviar_respuesta', linea: '2'})
    quizflow_08.flujo.push({tipo: 'pregunta_siguiente', linea: CUALITATIVO_P1})
    quizflow_08.flujo.push({tipo: 'enviar_respuesta', linea: 'La informacion no respondio mi duda'})
    quizflow_08.flujo.push({tipo: 'pregunta_siguiente', linea: PD_ENCUESTA_PREGUNTA_02})
    quizflow_08.flujo.push({tipo: 'enviar_respuesta', linea: 'No'})
    quizflow_08.flujo.push({tipo: 'pregunta_siguiente', linea: CUALITATIVO_P2})
    quizflow_08.flujo.push({tipo: 'enviar_respuesta', linea: 'Que la informacion no respondio mi duda :('})
    quizflow_08.flujo.push({tipo: 'encuesta_fin', linea: PD_ENCUESTA_FIN})


    ArrayInteracciones = [];    
    ArrayInteracciones.push(quizflow_01);
    // ArrayInteracciones.push(quizflow_02);
    // ArrayInteracciones.push(quizflow_03);
    // ArrayInteracciones.push(quizflow_04);
    // ArrayInteracciones.push(quizflow_05);
    // ArrayInteracciones.push(quizflow_06);
    // ArrayInteracciones.push(quizflow_07);
    // ArrayInteracciones.push(quizflow_08);


    return ArrayInteracciones

}

//exportar la funcion para ser llamada desde otro archivo
module.exports.interaccionEncuesta = interaccionEncuesta
