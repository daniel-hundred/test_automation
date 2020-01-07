Feature: Realizar Consulta Fecha Pase de Pedido
  Como Consultor@ Digital
  Yo quiero interactuar con el ChatBot para obtener la Información consultada
   
@Pedido @FechaPasePedido
Scenario Outline:  Consulta Fecha Pase Pedido
   Given Ingreso al Chat a traves de mi usuario "<Usuario>" y mi clave "<Password>"
   When Ingreso palabras las Palabras claves "<Hint1>","<Hint2>","<Hint3>","<Hint4>","<Hint5>","<Hint6>"
   Then Obtengo la Respuesta multiple "<MultiResponse>" "<takeLats>" : "<Response1>", "<Response2>", "<Response3>"

Examples:
| Usuario                   | Password  | Hint1   | Hint2         | Hint3               |Hint4|Hint5|Hint6| MultiResponse|takeLats | Response1 | Response2 | Response3 |
| tonoavila8@gmail.com      | qa_user   | PEDIDOS | Pasar Pedido  | Cuándo pasar pedido |  .  |  .  |  .  | true        |2         | .|.|.|