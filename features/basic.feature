Feature: Realizar Consulta Basica
  Como Consultor@ Digital
  Yo quiero interactuar con el ChatBot para obtener la Información consultada

@prueba_basica
Scenario Outline: Navegacion Basica
    Given Ingreso a FB con mi usuario "<Usuario>" y mi clave "<Password>"
    When Navego a traves del flujo basico
    Then Confirmo el mapeo basico completo de opciones del Bot

Examples:
| Usuario                   | Password  |
| tonoavila8@gmail.com      | qa_user   |