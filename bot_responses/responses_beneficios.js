const objvar = require('../endpoints/endpoint_login')
const objvar_concursos = require('../endpoints/endpoint_concursos')

async function interaccionBeneficios(paisISO,documento) {
    var session = await login(documento,paisISO)
    //--------------------------------------------
    var lvl_menu =   {send: "MENU", respuesta: []}    
    lvl_menu.respuesta.push({tipo: 'texto', linea: 'Estas son las opciones en las que puedo ayudarte 😊 Elige una👇'})
    lvl_menu.respuesta.push({tipo: 'opcion', linea: 'PEDIDOS'})
    lvl_menu.respuesta.push({tipo: 'opcion', linea: 'MI NEGOCIO'})
    lvl_menu.respuesta.push({tipo: 'opcion', linea: 'BENEFICIOS'})

    //--------------------------------------------

    var lvl_beneficios =   {send: "BENEFICIOS", respuesta: []}    
    lvl_beneficios.respuesta.push({tipo: 'texto', linea: 'Estas son las opciones de *BENEFICIO* que tengo para ti 👇'})
    if(paisISO == 'CO'){
        lvl_beneficios.respuesta.push({tipo: 'opcion', linea: 'Incentivosy Concu..'})
        lvl_beneficios.respuesta.push({tipo: 'opcion', linea: 'Descuentos'})
        lvl_beneficios.respuesta.push({tipo: 'opcion', linea: 'Ofertas exclusivas'})
    }else{
        lvl_beneficios.respuesta.push({tipo: 'opcion', linea: 'Incentivos'})
        lvl_beneficios.respuesta.push({tipo: 'opcion', linea: 'Descuentos'})
        lvl_beneficios.respuesta.push({tipo: 'opcion', linea: 'Ofertas exclusivas'})
    }

    //--------------------------------------------

    var lvl_beneficios_incentivos =   {send: "Incentivos", respuesta: []}
    if(paisISO == 'CO'){
        lvl_beneficios_incentivos.respuesta.push({tipo: 'texto', linea: 'Estas son las opciones de *INCENTIVOS Y CONCURSOS* que tengo para ti 👇'})
        lvl_beneficios_incentivos.respuesta.push({tipo: 'opcion', linea: 'Concurso de Ventas'})
        lvl_beneficios_incentivos.respuesta.push({tipo: 'opcion', linea: 'Regalo por pedido'})
    }else{
        lvl_beneficios_incentivos.respuesta.push({tipo: 'texto', linea: 'Estas son las opciones de *INCENTIVOS* que tengo para ti 👇'})
        lvl_beneficios_incentivos.respuesta.push({tipo: 'opcion', linea: 'Constancias'})
        lvl_beneficios_incentivos.respuesta.push({tipo: 'opcion', linea: 'Regalo por pedido'})
        lvl_beneficios_incentivos.respuesta.push({tipo: 'opcion', linea: 'Preguntas frecuentes'})
    }
    
    //--------------------------------------------
    if(paisISO == 'CO'){
        var lvl_beneficios_incentivos_constancia =   {send: "Concurso de Ventas", respuesta: []}
    }else{
        var lvl_beneficios_incentivos_constancia =   {send: "Constancias", respuesta: []}
    }
    var session_constancias = await getConcursos('K',documento,paisISO)
    lvl_beneficios_incentivos_constancia.respuesta.push({tipo: 'texto', linea: session_constancias.texto})    
    if(session_constancias.result == true){
        for (let j = 0; j < session_constancias.concurso.length; j++) {                      
            lvl_beneficios_incentivos_constancia.respuesta.push({tipo: 'opcion', linea: session_constancias.concurso[j]})
            // lvl_beneficios_incentivos_constancia.respuesta.push({tipo: 'opcion', linea: 'Constancia C15-C17'})              
        }        
    }

    //--------------------------------------------
    var lvl_beneficios_incentivos_regaloporpedido =   {send: "Regalo por pedido", respuesta: []}
    var session_regalos = await getConcursos('X',documento,paisISO)
    lvl_beneficios_incentivos_regaloporpedido.respuesta.push({tipo: 'texto', linea: session_regalos.texto})
    if(session_regalos.result == true){
        for (let j = 0; j < session_regalos.concurso.length; j++) {                      
            lvl_beneficios_incentivos_regaloporpedido.respuesta.push({tipo: 'opcion', linea: session_regalos.concurso[j]})
            // lvl_beneficios_incentivos_regaloporpedido.respuesta.push({tipo: 'opcion', linea: 'Constancia C15-C17'})              
        }        
    }

    //--------------------------------------------

    var lvl_beneficios_incentivos_preguntasfreq =   {send: "Preguntas frecuentes", respuesta: []}    
    lvl_beneficios_incentivos_preguntasfreq.respuesta.push({tipo: 'texto', linea: 'Estas son las opciones de *PREGUNTAS FRECUENTES DE BONIFICACIONES* que tengo para ti 👇'})
    lvl_beneficios_incentivos_preguntasfreq.respuesta.push({tipo: 'opcion', linea: 'Cuando llega premio?'})
    lvl_beneficios_incentivos_preguntasfreq.respuesta.push({tipo: 'opcion', linea: 'Bonificaciones'})

    //--------------------------------------------

    var lvl_beneficios_descuentos =   {send: "Descuentos", respuesta: []}    
    lvl_beneficios_descuentos.respuesta.push({tipo: 'texto', linea: 'Estas son las opciones de *DESCUENTO* que tengo para ti 👇'})
    lvl_beneficios_descuentos.respuesta.push({tipo: 'opcion', linea: 'Escala de descuento'})
   
    //--------------------------------------------

    var lvl_beneficios_descuentos_escala =   {send: "Escala de descuento", respuesta: []}    
    //Pendiente de validar el PDF adjunto por Pais
    lvl_beneficios_descuentos_escala.respuesta.push({tipo: 'texto', linea: 'Si tienes más consultas escribe la palabra *MENÚ*, si finalizaste tus consultas por ahora escribe la palabra *FIN*, o escribe *AYUDA* para hablar con un Ejecutivo de Atención.'})
    
    //--------------------------------------------

    var lvl_beneficios_ofertas =   {send: "Ofertas exclusivas", respuesta: []}    
    if(paisISO == 'PE'){
        lvl_beneficios_ofertas.respuesta.push({tipo: 'texto', linea: 'Estas son las opciones de *OFERTAS EXCLUSIVAS* que tengo para ti 👇'})
        lvl_beneficios_ofertas.respuesta.push({tipo: 'opcion', linea: 'Gana +'})
        lvl_beneficios_ofertas.respuesta.push({tipo: 'texto', linea: 'Si tienes más consultas escribe la palabra *MENÚ*, si finalizaste tus consultas por ahora escribe la palabra *FIN*, o escribe *AYUDA* para hablar con un Ejecutivo de Atención.'})    
    }else{
        lvl_beneficios_ofertas.respuesta.push({tipo: 'texto', linea: 'Estas son las opciones de *OFERTAS EXCLUSIVAS* que tengo para ti 👇'})
        lvl_beneficios_ofertas.respuesta.push({tipo: 'opcion', linea: 'Solo x Hoy'})
        lvl_beneficios_ofertas.respuesta.push({tipo: 'opcion', linea: 'Ofertas para ti'})
        lvl_beneficios_ofertas.respuesta.push({tipo: 'opcion', linea: 'Gana +'})
        lvl_beneficios_ofertas.respuesta.push({tipo: 'texto', linea: 'Si tienes más consultas escribe la palabra *MENÚ*, si finalizaste tus consultas por ahora escribe la palabra *FIN*, o escribe *AYUDA* para hablar con un Ejecutivo de Atención.'})    
    }

    //--------------------------------------------

    ArrayInteracciones = [];
    //SECUENCIA DE MAPEO
    ArrayInteracciones.push(lvl_menu);
    
    ArrayInteracciones.push(lvl_beneficios);
    ArrayInteracciones.push(lvl_beneficios_incentivos);    
    ArrayInteracciones.push(lvl_beneficios_incentivos_constancia);
    ArrayInteracciones.push(lvl_beneficios);
    ArrayInteracciones.push(lvl_beneficios_incentivos);
    ArrayInteracciones.push(lvl_beneficios_incentivos_regaloporpedido);    
    ArrayInteracciones.push(lvl_beneficios);
    ArrayInteracciones.push(lvl_beneficios_incentivos);
    ArrayInteracciones.push(lvl_beneficios_incentivos_preguntasfreq);

    ArrayInteracciones.push(lvl_beneficios);
    ArrayInteracciones.push(lvl_beneficios_descuentos);    
    ArrayInteracciones.push(lvl_beneficios_descuentos_escala);

    ArrayInteracciones.push(lvl_beneficios);
    ArrayInteracciones.push(lvl_beneficios_ofertas);

    return ArrayInteracciones

}

//exportar la funcion para ser llamada desde otro archivo
module.exports.interaccionBeneficios = interaccionBeneficios




// ADITIONAL UTIL FUNCTIONS
async function login(documento,paisISO){
    let response_login = await objvar.doRequest_Login(documento,paisISO);
    var result_login = JSON.parse(response_login); //Need to parse
    return result_login
}

async function getConcursos(ConcursoTipo,documento,paisISO){
    let response_login = await objvar.doRequest_Login(documento,paisISO);
    var result_login = JSON.parse(response_login); //Need to parse
    var token = result_login.access_token
    var campania = result_login.campania
    var paisISO = result_login.paisISO
    let response_concursos = await objvar_concursos.doRequest_Concursos(token, campania);
    var result_concursos = JSON.parse(response_concursos); //Need to parse
    

    var arr_concursosobtenidos = {result: false,texto: '', concurso: []}
    var mensaje = ''
    var existedesc = false
    if(result_concursos.Code == '0000'){
        if(result_concursos.Data.length > 0){
            //verificar existe objeto del tipo ConcursoTipo en el array Data dentro del response
            for (let i = 0; i < result_concursos.Data.length; i++) {
                if(result_concursos.Data[i].TipoConcurso = ConcursoTipo){                    
                    arr_concursosobtenidos.concurso.push(result_concursos.Data[i].Descripcion)
                    existedesc = true
                }
            }

            if(existedesc == true){
                var tipo = ''
                if(ConcursoTipo =='K'){
                    // parametrizado por paisISO para descripcion de tipo cuando sea K
                    if(paisISO == 'CO'){
                        tipo = 'CONCURSO DE VENTAS'
                    }else{
                        tipo = 'CONSTANCIAS'
                    }
                }else if(ConcursoTipo =='X'){
                    tipo = 'REGALO POR PEDIDO'     
                }

                mensaje = 'Estas son las opciones de '+tipo+' que tengo para ti'

            }else{
                //confirmar si luego de mostrar que no se tiene  consuros se muestra el menu principal
                mensaje = 'No tienes concursos vigentes para mostrar en este momento.'            
                existedesc = false
            }
            
        }else{
            //confirmar si luego de mostrar que no se tiene  consuros se muestra el menu principal
            mensaje = 'No tienes concursos vigentes para mostrar en este momento.'            
            existedesc = false
        }

    }else{
        mensaje = 'Error al consumir servicio api/Incentivo/ListConcursosVigentes'
        existedesc = false
    }

    arr_concursosobtenidos.result = existedesc
    arr_concursosobtenidos.texto = mensaje
    return arr_concursosobtenidos
}


function getDate(fechaInicioFacturacion) {
    const moment = require('moment')
    moment.locale('es');
    return {dia_semana: moment(fechaInicioFacturacion).format('dddd'),dia_num: moment(fechaInicioFacturacion).format('D'), mes: moment(fechaInicioFacturacion).format('MMMM')}
}

function getTime(horaFin){
    let GetFechaFormato = (time) => {
        let resultado = '';
          var timeString = time;
        var H = +timeString.substr(0, 2);
        var h = H % 12 || 12;
        var ampm = (H < 12 || H === 24) ? " AM" : " PM";
        resultado = h + timeString.substr(2, 3) + ampm;
        return resultado;
      };
    // 11:00 PM
    return {hora: GetFechaFormato(horaFin)}
}