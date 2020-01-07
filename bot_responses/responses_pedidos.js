const objvar = require('../endpoints/endpoint_login')

async function interaccionPedidos(paisISO,documento) {
    var session = await login(documento,paisISO)    
    //--------------------------------------------
    var lvl_menu =   {send: "MENU", respuesta: []}    
    lvl_menu.respuesta.push({tipo: 'texto', linea: 'Estas son las opciones en las que puedo ayudarte 😊 Elige una👇'})
    lvl_menu.respuesta.push({tipo: 'opcion', linea: 'PEDIDOS'})
    lvl_menu.respuesta.push({tipo: 'opcion', linea: 'MI NEGOCIO'})
    lvl_menu.respuesta.push({tipo: 'opcion', linea: 'BENEFICIOS'})

    //--------------------------------------------
    var lvl_pedidos =   {send: "PEDIDOS", respuesta: []}    
    lvl_pedidos.respuesta.push({tipo: 'texto', linea: 'Estas son las opciones de *PEDIDOS* que tengo para ti 👇'})
    lvl_pedidos.respuesta.push({tipo: 'opcion', linea: 'Pasar pedido'})
    lvl_pedidos.respuesta.push({tipo: 'opcion', linea: 'Seguir pedido'})
    lvl_pedidos.respuesta.push({tipo: 'opcion', linea: 'Deuda'})
    lvl_pedidos.respuesta.push({tipo: 'texto', linea: 'También te puedo ayudar con estas opciones 👇'})
    lvl_pedidos.respuesta.push({tipo: 'opcion', linea: 'Cambios y devoluci..'})

    //--------------------------------------------
    var lvl_pedidos_pasarpedido =   {send: "Pasar pedido", respuesta: []}    
    lvl_pedidos_pasarpedido.respuesta.push({tipo: 'texto', linea: 'Estas son las opciones de *PASAR PEDIDO* que tengo para ti 👇'})
    lvl_pedidos_pasarpedido.respuesta.push({tipo: 'opcion', linea: 'Cuándo pasar pedido'})
    lvl_pedidos_pasarpedido.respuesta.push({tipo: 'opcion', linea: 'Agregar producto'})
    lvl_pedidos_pasarpedido.respuesta.push({tipo: 'opcion', linea: 'Preguntas frecuentes'})

    //--------------------------------------------
    //PENDIENTEEEEEE
    var lvl_pedidos_pasarpedido_cuandopasarpedido =   {send: "Cuándo pasar pedido", respuesta: []}    
    lvl_pedidos_pasarpedido_cuandopasarpedido.respuesta.push({tipo: 'texto', linea: ''})
    lvl_pedidos_pasarpedido_cuandopasarpedido.respuesta.push({tipo: 'opcion', linea: ''})

   //--------------------------------------------
    var lvl_pedidos_pasarpedido_agregarprod =   {send: "Agregar producto", respuesta: []}    
    lvl_pedidos_pasarpedido_agregarprod.respuesta.push({tipo: 'texto', linea: 'Esto puede demorar un poco, se paciente vamos a agregar tu producto.'})
    lvl_pedidos_pasarpedido_agregarprod.respuesta.push({tipo: 'texto', linea: 'Ingresa el código del producto o su nombre'})

    //--------------------------------------------
    var lvl_pedidos_pasarpedido_preguntasfreq=   {send: "Preguntas frecuentes", respuesta: []}    
    lvl_pedidos_pasarpedido_preguntasfreq.respuesta.push({tipo: 'texto', linea: 'Estas son las opciones de *PREGUNTAS FRECUENTES DE PASAR PEDIDO* que tengo para ti 👇'})
    lvl_pedidos_pasarpedido_preguntasfreq.respuesta.push({tipo: 'opcion', linea: 'No llego el producto'})
    lvl_pedidos_pasarpedido_preguntasfreq.respuesta.push({tipo: 'opcion', linea: 'Recibir pedido'})
    lvl_pedidos_pasarpedido_preguntasfreq.respuesta.push({tipo: 'opcion', linea: 'Como pasar pedido'})
    lvl_pedidos_pasarpedido_preguntasfreq.respuesta.push({tipo: 'texto', linea: 'También te puedo ayudar con estas opciones 👇'})
    lvl_pedidos_pasarpedido_preguntasfreq.respuesta.push({tipo: 'opcion', linea: 'Cuando llega pedido'})
    lvl_pedidos_pasarpedido_preguntasfreq.respuesta.push({tipo: 'opcion', linea: 'Pedido rechazado'})

    //--------------------------------------------
    var lvl_pedidos_pasarpedido_preguntasfreq_nollegoprod=   {send: "No llego el producto", respuesta: []}    
    lvl_pedidos_pasarpedido_preguntasfreq_nollegoprod.respuesta.push({tipo: 'texto', linea: '¿Te cobramos el producto faltante?'})
    lvl_pedidos_pasarpedido_preguntasfreq_nollegoprod.respuesta.push({tipo: 'opcion', linea: 'SI'})
    lvl_pedidos_pasarpedido_preguntasfreq_nollegoprod.respuesta.push({tipo: 'opcion', linea: 'NO'})
    lvl_pedidos_pasarpedido_preguntasfreq_nollegoprod.respuesta.push({tipo: 'texto', linea: 'Si tienes más consultas escribe la palabra *MENÚ*, si finalizaste tus consultas por ahora escribe la palabra *FIN*, o escribe *AYUDA* para hablar con un Ejecutivo de Atención.'})

    //--------------------------------------------
    var lvl_pedidos_pasarpedido_preguntasfreq_nollegoprod_no=   {send: "NO", respuesta: []}    
    lvl_pedidos_pasarpedido_preguntasfreq_nollegoprod_no.respuesta.push({tipo: 'texto', linea: 'Asegúrate que no te aparezca en el detalle del paquete documentario como producto agotado 😞'})
    lvl_pedidos_pasarpedido_preguntasfreq_nollegoprod_no.respuesta.push({tipo: 'texto', linea: 'Si tienes más consultas escribe la palabra *MENÚ*, si finalizaste tus consultas por ahora escribe la palabra *FIN*, o escribe *AYUDA* para hablar con un Ejecutivo de Atención.'})

    //--------------------------------------------
    var lvl_pedidos_pasarpedido_preguntasfreq_recibirpedido=   {send: "Recibir pedido", respuesta: []}    
    lvl_pedidos_pasarpedido_preguntasfreq_recibirpedido.respuesta.push({tipo: 'texto', linea: 'Puedes dejar encargado a tu portero o alguna persona de tu confianza'})
    lvl_pedidos_pasarpedido_preguntasfreq_recibirpedido.respuesta.push({tipo: 'texto', linea: 'Si tienes más consultas escribe la palabra *MENÚ*, si finalizaste tus consultas por ahora escribe la palabra *FIN*, o escribe *AYUDA* para hablar con un Ejecutivo de Atención.'})


    //--------------------------------------------
    var lvl_pedidos_seguirpedido =   {send: "Seguir pedido", respuesta: []}    
    lvl_pedidos_seguirpedido.respuesta.push({tipo: 'texto', linea: 'Estas son las opciones de *SEGUIMIENTO AL PEDIDO* que tengo para ti 👇'})
    lvl_pedidos_seguirpedido.respuesta.push({tipo: 'opcion', linea: 'Pedido ingresado'})
    lvl_pedidos_seguirpedido.respuesta.push({tipo: 'opcion', linea: 'Historial de pedido'})
    lvl_pedidos_seguirpedido.respuesta.push({tipo: 'opcion', linea: 'Cuándo llega mi pe..'})

    //--------------------------------------------
    var lvl_pedidos_deuda =   {send: "Deuda", respuesta: []}    
    lvl_pedidos_deuda.respuesta.push({tipo: 'texto', linea: 'Estas son las opciones de DEUDA que tengo para ti 👇'})
    lvl_pedidos_deuda.respuesta.push({tipo: 'opcion', linea: 'Monto de la deuda'})
    lvl_pedidos_deuda.respuesta.push({tipo: 'opcion', linea: 'Fecha límite de pago'})
    lvl_pedidos_deuda.respuesta.push({tipo: 'opcion', linea: 'Preguntas frecuentes'})

    //--------------------------------------------
    var lvl_pedidos_devoluciones =   {send: "devoluciones", respuesta: []}    
    lvl_pedidos_devoluciones.respuesta.push({tipo: 'texto', linea: 'Estas son las opciones de *CAMBIO Y DEVOLUCIONES* que tengo para ti 👇'})
    lvl_pedidos_devoluciones.respuesta.push({tipo: 'opcion', linea: 'Hacer un cambio o ..'})
    lvl_pedidos_devoluciones.respuesta.push({tipo: 'opcion', linea: 'Política de postve..'})



    ArrayInteracciones = [];
    //SECUENCIA DE MAPEO
    ArrayInteracciones.push(lvl_menu);

    ArrayInteracciones.push(lvl_pedidos);
    ArrayInteracciones.push(lvl_pedidos_pasarpedido);
    ArrayInteracciones.push(lvl_pedidos_pasarpedido_cuandopasarpedido);
    ArrayInteracciones.push(lvl_pedidos_pasarpedido_agregarprod);
    ArrayInteracciones.push(lvl_pedidos_pasarpedido_preguntasfreq);
    ArrayInteracciones.push(lvl_pedidos_pasarpedido_preguntasfreq_nollegoprod);    
    ArrayInteracciones.push(lvl_pedidos_pasarpedido_preguntasfreq_nollegoprod_no)
    ArrayInteracciones.push(lvl_pedidos_pasarpedido_preguntasfreq_recibirpedido); 
    

    ArrayInteracciones.push(lvl_pedidos);
    ArrayInteracciones.push(lvl_pedidos_seguirpedido);


    ArrayInteracciones.push(lvl_pedidos);
    ArrayInteracciones.push(lvl_pedidos_deuda);


    ArrayInteracciones.push(lvl_pedidos);
    ArrayInteracciones.push(lvl_pedidos_devoluciones);

    return ArrayInteracciones

}
//exportar la funcion para ser llamada desde otro archivo
module.exports.interaccionPedidos = interaccionPedidos


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