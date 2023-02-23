# Login | Authentication

### As User Management App user, I want a login page as a way of have a protected access to the app.

##### Acceptance Criteria (AC):

- There must be a login page.
- The login page must have a form with the following fields: email, password and
  a submit button.
- The email and password inputs are required.
- If the user leaves empty fields and clicks the submit button, the login page
  should display required messages as the format: “The [field name] is required”
  aside of the proper field.
- The email value should contain the proper email format (the “@”, domain value,
  etc).
- The submit button should be disabbled while the form page is fetching the
  data. After fetching, the submit button does not have to be disabled.
- There should be a loading indicator at the top of the form while it is
  fetching.
- In a unexpected server error, the form page must display the error message
  “Unexpected error, please try again” from the api.
- In the invalid credentials response, the form page must display the error
  message “The email or password are not correct” from the api.

---

# Inicio de sesión

### Como usuario de la aplicación de la empresa, quiero una página de inicio de sesión como una forma de tener un acceso protegido a la aplicación.

##### Criterios de aceptación (AC):

- Debe haber una página de inicio de sesión.
- La página de inicio de sesión debe tener un formulario con los siguientes
  campos: correo electrónico, contraseña y un botón de envío.
- Se requieren las entradas de correo electrónico y contraseña.
- Si el usuario deja campos vacíos y hace clic en el botón enviar, la página de
  inicio de sesión debe mostrar los mensajes obligatorios con el formato: "El
  [nombre del campo] es obligatorio" al lado del campo correspondiente.
- Se validan las entradas de correo electrónico y contraseña.
- El valor del correo electrónico debe contener el formato de correo electrónico
  adecuado ("@", valor de dominio, etc.).
- La entrada de la contraseña debe contener al menos: 8 caracteres, una letra
  mayúscula, un número y un carácter especial.
- El formulario debe enviar los datos a un servicio de punto final de backend.
- El botón de envío debe estar desactivado mientras la página del formulario
  está recuperando los datos. Después de la recuperación, no es necesario
  deshabilitar el botón de envío.
- Debe haber un indicador de carga en la parte superior del formulario mientras
  se está recuperando.
- En un error inesperado del servidor, la página del formulario debe mostrar el
  mensaje de error "Error inesperado, inténtelo de nuevo" de la API.
- En la respuesta de credenciales no válidas, la página del formulario debe
  mostrar el mensaje de error "El correo electrónico o la contraseña no son
  correctos" de la API.
- Los usuarios no autenticados deben ser redirigidos a la página de inicio de
  sesión al ingresar a páginas privadas (páginas de empleados y administrador).
