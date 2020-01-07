Feature: Realizar interaccion en ChatBot
  Como Consultor@ Digital
  Yo quiero interactuar con el ChatBot para obtener las opciones disponibles

@MapearFlow
Scenario Outline: Navegacion Mapa de Opciones
    Given Ingreso a Facebook Messenger utilizando mi usuario "<UsuarioFB>" y mi clave "<PasswordFB>"
    When Inicio el flujo de comunicación habilitado para el usuario "<UsuarioConsultora>" con clave "<ClaveConsultora>" del pais "<PaisISO>"
    Then Realizo la compararación de opciones y respuestas considerando su documento "<Documento>" y pais "<PaisISO>" para la categoria "<Categoria>"

Examples:
| UsuarioFB             | PasswordFB| Categoria | UsuarioConsultora | ClaveConsultora | PaisISO | Documento |
| tonoavila8@gmail.com  | qa_user   | PEDIDOS   | 001248170         | a1234567        | PE      | 0009031571|
# | tonoavila8@gmail.com  | qa_user   | MI NEGOCIO| 001248170         | a1234567        | PE      | 0009031571|
# | tonoavila8@gmail.com  | qa_user   | BENEFICIOS| 001248170         | a1234567        | PE      | 0009031571|