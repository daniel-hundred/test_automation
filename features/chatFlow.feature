Feature: Realizar Consulta Fecha Pase de Pedido
  Como Consultor@ Digital
  Yo quiero interactuar con el ChatBot para obtener la Información consultada
  @asd @FechaPasePedido_ok
  Scenario Outline: Consulta Fecha Pase Pedido Exitosa
    Given Ingreso al Chat a traves de mi usuario y mi clave
    When Ingreso palabras las Palabras claves
    # Then Obtengo la Respuesta Tipo simple
    Then Obtengo la Respuesta Tipo "<id>"
  Examples:
      | id |
      | 10 |

  @asd @FechaPasePedido_fail
    Scenario Outline: Consulta Fecha Pase Pedido Exitosa
      Given Ingreso al Chat a traves de mi usuario y mi clave
      When Ingreso palabras las Palabras claves
      Then Obtengo la Respuesta Tipo "<id>"
    Examples:
        | id |
        | 20 |