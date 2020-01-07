const sql = require("mssql");

const config = {
    user: 'usr_mobile',
    password: 'Belcorp2020$',
    server: 'AWNTS74', 
    database: 'BelcorpPeru'
}

let myquery = "select top 10 DocumentoIdentidad,Nombre from Usuario"

resultado = []
sql.connect(config).then((conn) => 
    conn.query(myquery)
        .then((v) => {            

            for (let i = 0; i < v.recordset.length; i++) {
                var obj = {Nombre: v.recordset[i].Nombre, DocumentoIdentidad: v.recordset[i].DocumentoIdentidad}    
                resultado.push(obj)              
            }

            MycallbackFix(null, resultado);

        }).then(() => conn.close())
)

function MycallbackFix(err, result) {
    
    for (let i = 0; i < result.length; i++) {
        console.log(result[i].Nombre + ' > ' + result[i].DocumentoIdentidad);        
    }

}








// for (let i = 0; i < arr.recordset.length; i++) {
//     // arr.push(v.recordset[i].Nombre)
//     console.log(arr.recordset[i].DocumentoIdentidad+ ' ' +arr.recordset[i].Nombre)                
// }


// // cantidad interacciones = MyModule.ArrayInteracciones.length
// var cant_interacciones = MyModule.ArrayInteracciones.length;
// for(i = 0; i < cant_interacciones; i++){

//     //primer elemento de cada interaccion[i] es la variable "send"
//     console.log(MyModule.ArrayInteracciones[i].send);

//     //cantidad elementos sub array opciones
//     var cant_opts_subarray = MyModule.ArrayInteracciones[i].opciones.length
//     for(j = 0; j < cant_opts_subarray; j++){
//         console.log(MyModule.ArrayInteracciones[i].opciones[j]);
//     }

// }

// let esperado_formateado = 'Estas son las opciones de *PEDIDOS* que tengo para ti 👇'
// esperado_formateado = esperado_formateado.replace(/[\u1000-\uFFFF]+/g, "");
// esperado_formateado = esperado_formateado.replace(/[*]/g, "");
// console.log(esperado_formateado);

