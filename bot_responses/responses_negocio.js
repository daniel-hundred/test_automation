const objvar = require('../endpoints/endpoint_login')

async function interaccionNegocio(paisISO,documento) {
    var session = await login(documento,paisISO)
    //--------------------------------------------
    var lvl_menu =   {send: "MENU", respuesta: []}    
    lvl_menu.respuesta.push({tipo: 'texto', linea: 'Estas son las opciones en las que puedo ayudarte 😊 Elige una👇'})
    lvl_menu.respuesta.push({tipo: 'opcion', linea: 'PEDIDOS'})
    lvl_menu.respuesta.push({tipo: 'opcion', linea: 'MI NEGOCIO'})
    lvl_menu.respuesta.push({tipo: 'opcion', linea: 'BENEFICIOS'})

    //--------------------------------------------
    var lvl_negocio =   {send: "MI NEGOCIO", respuesta: []}    
    lvl_negocio.respuesta.push({tipo: 'texto', linea: 'Estas son las opciones de *MI NEGOCIO* que tengo para ti 👇'})
    lvl_negocio.respuesta.push({tipo: 'opcion', linea: 'Actualizar Datos'})
    lvl_negocio.respuesta.push({tipo: 'opcion', linea: 'Datos de campaña'})
    lvl_negocio.respuesta.push({tipo: 'opcion', linea: 'Herramientas'})
    lvl_negocio.respuesta.push({tipo: 'texto', linea: 'También te puedo ayudar con estas opciones 👇'})
    lvl_negocio.respuesta.push({tipo: 'opcion', linea: 'Comprar en tienda'})

    //--------------------------------------------
    var lvl_negocio_actualizardatos =   {send: "Actualizar Datos", respuesta: []}    
    lvl_negocio_actualizardatos.respuesta.push({tipo: 'texto', linea: 'Estas son las opciones de *ACTUALIZAR DATOS* que tengo para ti 👇'})
    lvl_negocio_actualizardatos.respuesta.push({tipo: 'opcion', linea: 'Datos personales'})
    lvl_negocio_actualizardatos.respuesta.push({tipo: 'opcion', linea: 'Mi dirección'})
    lvl_negocio_actualizardatos.respuesta.push({tipo: 'opcion', linea: 'Preguntas frecuentes'})

    //--------------------------------------------

    // var lvl_negocio_actualizardatos_datospersonales = {send: "Datos personales",opciones: []};
    // if(TipoFlujo == 'DETALLADO' || TipoFlujo == 'OPCIONES'){
    //     //lvl_negocio_actualizardatos_datospersonales es una accion con clic para abrir modal, no muestra opciones
    // }

    var lvl_negocio_actualizardatos_midireccion =   {send: "Mi dirección", respuesta: []}    
    lvl_negocio_actualizardatos_midireccion.respuesta.push({tipo: 'texto', linea: '¿Deseas escribirle a tu asesora digital? 🤖'})
    lvl_negocio_actualizardatos_midireccion.respuesta.push({tipo: 'opcion', linea: 'Sí'})
    //--------------------------------------------

    var lvl_negocio_actualizardatos_preguntas =   {send: "Preguntas frecuentes", respuesta: []}    
    lvl_negocio_actualizardatos_preguntas.respuesta.push({tipo: 'texto', linea: 'Estas son las opciones de *PREGUNTAS FRECUENTES DE ACTUALIZAR DATOS* que tengo para ti 👇'})
    lvl_negocio_actualizardatos_preguntas.respuesta.push({tipo: 'opcion', linea: 'Cambiar mi dirección'})
    lvl_negocio_actualizardatos_preguntas.respuesta.push({tipo: 'opcion', linea: 'Bloquear mi cuenta'})
    //--------------------------------------------

    //punto con datos de ISOpais
    var lvl_negocio_actualizardatos_preguntas_cambiardireccion =   {send: "Cambiar mi dirección", respuesta: []}    
    lvl_negocio_actualizardatos_preguntas_cambiardireccion.respuesta.push({tipo: 'opcion', linea: 'Puedes cambiar de dirección llamando al 2113614 o enviando una carta simple firmada con copia de tu *DNI* y tu *nuevo recibo de servicio* a esikaperu@esika.biz'})
    lvl_negocio_actualizardatos_preguntas_cambiardireccion.respuesta.push({tipo: 'opcion', linea: 'Si tienes más consultas escribe la palabra *MENÚ*, si finalizaste tus consultas por ahora escribe la palabra *FIN*, o escribe *AYUDA* para hablar con un Ejecutivo de Atención.'})
    //--------------------------------------------

    //punto con datos de ISOpais
    var lvl_negocio_actualizardatos_preguntas_bloquearcuenta =   {send: "Bloquear mi cuenta", respuesta: []}    
    lvl_negocio_actualizardatos_preguntas_bloquearcuenta.respuesta.push({tipo: 'opcion', linea: 'Puedes bloquear tu cuenta llamando al Call center 2113614 o enviando una carta simple con copia DNI a correoesikaperu@esika.biz'})
    lvl_negocio_actualizardatos_preguntas_bloquearcuenta.respuesta.push({tipo: 'opcion', linea: 'Si tienes más consultas escribe la palabra *MENÚ*, si finalizaste tus consultas por ahora escribe la palabra *FIN*, o escribe *AYUDA* para hablar con un Ejecutivo de Atención.'})


    //--------------------------------------------
    var lvl_negocio_datoscampania =   {send: "Datos de campaña", respuesta: []}    
    lvl_negocio_datoscampania.respuesta.push({tipo: 'texto', linea: 'Estas son las opciones de *MIS DATOS DE CAMPAÑA* que tengo para ti 👇'})
    lvl_negocio_datoscampania.respuesta.push({tipo: 'opcion', linea: 'Mi código consultora'})
    lvl_negocio_datoscampania.respuesta.push({tipo: 'opcion', linea: 'Datos de campaña'})
    lvl_negocio_datoscampania.respuesta.push({tipo: 'opcion', linea: 'Fecha facturación'})
    
    //--------------------------------------------
    var lvl_negocio_datoscampania_codigoconsultora =   {send: "Mi código consultora", respuesta: []}    
    lvl_negocio_datoscampania_codigoconsultora.respuesta.push({tipo: 'opcion', linea: 'Tu código de consultora es : ' + session.codigoConsultora})
    lvl_negocio_datoscampania_codigoconsultora.respuesta.push({tipo: 'opcion', linea: 'Si tienes más consultas escribe la palabra *MENÚ*, si finalizaste tus consultas por ahora escribe la palabra *FIN*, o escribe *AYUDA* para hablar con un Ejecutivo de Atención.'})

    //--------------------------------------------
    var lvl_negocio_datoscampania_datoscampania =   {send: "Datos de campaña", respuesta: []}    
    lvl_negocio_datoscampania_datoscampania.respuesta.push({tipo: 'opcion', linea: 'Estas en la Campaña '+(session.campania).substr(4)+', tienes hasta el '+getDate(session.fechaInicioFacturacion).dia_semana+' '+getDate(session.fechaInicioFacturacion).dia_num+' de '+getDate(session.fechaInicioFacturacion).mes+' a las '+getTime(session.horaFin).hora+' para que puedas ingresar tu pedido.'})
    lvl_negocio_datoscampania_datoscampania.respuesta.push({tipo: 'opcion', linea: 'Si tienes más consultas escribe la palabra *MENÚ*, si finalizaste tus consultas por ahora escribe la palabra *FIN*, o escribe *AYUDA* para hablar con un Ejecutivo de Atención.'})

    //--------------------------------------------
    var lvl_negocio_datoscampania_fechafacturacion =   {send: "Fecha facturación", respuesta: []}    
    lvl_negocio_datoscampania_fechafacturacion.respuesta.push({tipo: 'opcion', linea: 'El '+getDate(session.fechaInicioFacturacion).dia_semana+' '+getDate(session.fechaInicioFacturacion).dia_num+' de '+getDate(session.fechaInicioFacturacion).mes+' debes de ingresar tu pedido para que pueda ser facturado.'})
    lvl_negocio_datoscampania_fechafacturacion.respuesta.push({tipo: 'opcion', linea: 'Si tienes más consultas escribe la palabra *MENÚ*, si finalizaste tus consultas por ahora escribe la palabra *FIN*, o escribe *AYUDA* para hablar con un Ejecutivo de Atención.'})

    //--------------------------------------------
    var lvl_negocio_herramientas =   {send: "Herramientas", respuesta: []}    
    lvl_negocio_herramientas.respuesta.push({tipo: 'texto', linea: 'Estas son las opciones de *HERRAMIENTAS DE NEGOCIO* que tengo para ti 👇'})
    lvl_negocio_herramientas.respuesta.push({tipo: 'opcion', linea: 'Aprende como vender'})
    lvl_negocio_herramientas.respuesta.push({tipo: 'opcion', linea: 'Catálogos'})


    //--------------------------------------------
    var lvl_negocio_herramientas_aprendeavender =   {send: "Aprende como vender", respuesta: []}    
    lvl_negocio_herramientas_aprendeavender.respuesta.push({tipo: 'texto', linea: 'Estas son las opciones de *APRENDE COMO VENDER* que tengo para ti 👇'})
    lvl_negocio_herramientas_aprendeavender.respuesta.push({tipo: 'opcion', linea: 'Conseguir clientes'})
    lvl_negocio_herramientas_aprendeavender.respuesta.push({tipo: 'opcion', linea: 'Vender mas fácil'})
    lvl_negocio_herramientas_aprendeavender.respuesta.push({tipo: 'opcion', linea: 'Cobrar para ganar'})
    lvl_negocio_herramientas_aprendeavender.respuesta.push({tipo: 'texto', linea: 'Si tienes más consultas escribe la palabra *MENÚ*, si finalizaste tus consultas por ahora escribe la palabra *FIN*, o escribe *AYUDA* para hablar con un Ejecutivo de Atención.'})

    //--------------------------------------------

    var lvl_negocio_comprarentienda =   {send: "Comprar en tienda", respuesta: []}    
    lvl_negocio_comprarentienda.respuesta.push({tipo: 'texto', linea: 'Estas son las opciones de *COMPRAR EN TIENDA* que tengo para ti 👇'})
    lvl_negocio_comprarentienda.respuesta.push({tipo: 'opcion', linea: 'Belcenter'})
    lvl_negocio_comprarentienda.respuesta.push({tipo: 'opcion', linea: 'Tiendas Ésika'})



    ArrayInteracciones = [];
    //SECUENCIA DE MAPEO
    // ArrayInteracciones.push(lvl_menu);

    ArrayInteracciones.push(lvl_negocio);
    ArrayInteracciones.push(lvl_negocio_actualizardatos);
    ArrayInteracciones.push(lvl_negocio_actualizardatos_midireccion); 
    ArrayInteracciones.push(lvl_negocio);
    ArrayInteracciones.push(lvl_negocio_actualizardatos);
    ArrayInteracciones.push(lvl_negocio_actualizardatos_preguntas); 
    ArrayInteracciones.push(lvl_negocio_actualizardatos_preguntas_cambiardireccion);//ISOpais
    ArrayInteracciones.push(lvl_negocio);
    ArrayInteracciones.push(lvl_negocio_actualizardatos);
    ArrayInteracciones.push(lvl_negocio_actualizardatos_preguntas); 
    ArrayInteracciones.push(lvl_negocio_actualizardatos_preguntas_bloquearcuenta);//ISOpais

    ArrayInteracciones.push(lvl_negocio);
    ArrayInteracciones.push(lvl_negocio_datoscampania);
    ArrayInteracciones.push(lvl_negocio_datoscampania_codigoconsultora); 
    ArrayInteracciones.push(lvl_negocio);
    ArrayInteracciones.push(lvl_negocio_datoscampania);
    ArrayInteracciones.push(lvl_negocio_datoscampania_datoscampania);
    ArrayInteracciones.push(lvl_negocio);
    ArrayInteracciones.push(lvl_negocio_datoscampania);   
    ArrayInteracciones.push(lvl_negocio_datoscampania_fechafacturacion);      

    ArrayInteracciones.push(lvl_negocio);
    ArrayInteracciones.push(lvl_negocio_herramientas);
    ArrayInteracciones.push(lvl_negocio_herramientas_aprendeavender);

    ArrayInteracciones.push(lvl_negocio);
    ArrayInteracciones.push(lvl_negocio_comprarentienda);

    return ArrayInteracciones

}

//exportar la funcion para ser llamada desde otro archivo
module.exports.interaccionNegocio = interaccionNegocio



// ADITIONAL UTIL FUNCTIONS
async function login(documento,paisISO){
    let response_login = await objvar.doRequest_Login(documento,paisISO);
    var result_login = JSON.parse(response_login); //Need to parse
    return result_login
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
