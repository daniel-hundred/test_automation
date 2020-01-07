Feature: Validar Flujo de Encuesta
  Como Consultor@ Digital
  Yo quiero realizar la encuesta enviada por el Bot

@TestEncuesta @MapearEncuesta
Scenario Outline: Validacion Flujo Encuesta Bot Facebook
    Given Ingreso a FB Messenger utilizando mi usuario "<UsuarioFB>" y mi clave "<PasswordFB>"
    When Inicio el flujo de interacción habilitado para el usuario "<UsuarioConsultora>" con clave "<ClaveConsultora>" del pais "<PaisISO>"
    Then Realizo la encuesta enviada por el Bot al finalizar un flujo

Examples:
| UsuarioFB             | PasswordFB| UsuarioConsultora | ClaveConsultora | PaisISO |
| tonoavila8@gmail.com  | qa_user   | 001248170         | a1234567        | PE      |

@TestEncuesta @ActivacionEncuesta
Scenario Outline: Validacion Activacion Automatica de Encuesta Bot Facebook
    Given Ingreso a FB Messenger utilizando mi usuario "<UsuarioFB>" y mi clave "<PasswordFB>"
    When Inicio el flujo de interacción habilitado para el usuario "<UsuarioConsultora>" con clave "<ClaveConsultora>" del pais "<PaisISO>"
    Then Se verifica la activación de encuesta luego de finalizar un flujo y estar inactivo por "<Minutos>" minutos

Examples:
| UsuarioFB             | PasswordFB| UsuarioConsultora | ClaveConsultora | PaisISO | Minutos | 
| tonoavila8@gmail.com  | qa_user   | 001248170         | a1234567        | PE      | 5       | 
| tonoavila8@gmail.com  | qa_user   | 0176299           | a1234567        | SV      | 5       |
| tonoavila8@gmail.com  | qa_user   | 0020824715        | 0020824715      | CO      | 5       | 