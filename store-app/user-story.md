# Store Form App

## Store product

As a merchandise manager, I want to store new products as a way of
administrating my products.

**Acceptance Criteria (AC):**

- There must be a create product form page.
- The form must have the following fields: name, size, type (electronic,
  furniture, clothing) and a submit button.
- All the fields are required.
  - If the user leaves empty fields and clicks the submit button, the form page
    must display required messages as the format: _“The [field name] is
    required”_ aside of the proper field.
  - If the user blurs a field that is empty, then the form must display the
    required message for that field.
- The form must send the data to a backend endpoint service.
  - The submit button should be disabbled while the form page is fetching the
    data. After fetching, the submit button does not have to be disabled.
  - In the success path, the form page must display the success message
    _“Product stored”_ and clean the fields values.
  - In a server error, the form page must display the error message _“Unexpected
    error, please try again”_.
  - In the invalid request path, the form page must display the error message
    _“The form is invalid, the fields [field1...fieldN] are required”_.
  - In the not found service path, the form page must display the message
    _“Connection error, please try later”_.

---

# Aplicación de formulario de tienda

## Almacenar producto

Como gerente de mercadería, quiero almacenar nuevos productos como una forma de
poder administrarlos.

** Criterios de aceptación (AC): **

- Debe haber una página de formulario de creación de producto.
- El formulario debe tener los siguientes campos: nombre, talla, tipo
  (electrónico, mobiliario, ropa) y un botón de envío.
- Todos los campos son obligatorios.
  - Si el usuario deja campos vacíos y hace clic en el botón enviar, la página
    del formulario debe mostrar los mensajes obligatorios con el formato: _ “El
    [nombre del campo] es obligatorio” _ al lado del campo correspondiente.
  - Si el usuario desenfoca un campo que está vacío, entonces el formulario debe
    mostrar el mensaje requerido para ese campo.
- El formulario debe enviar los datos a un servicio de punto final de backend.
  - El botón de envío debe estar desactivado mientras la página del formulario
    está recuperando los datos. Después de la recuperación, no es necesario
    deshabilitar el botón de envío.
  - En la ruta de éxito, la página del formulario debe mostrar el mensaje de
    éxito _ "Producto almacenado" _ y limpiar los valores de los campos.
  - En un error del servidor, la página del formulario debe mostrar el mensaje
    de error _ "Error inesperado, inténtelo de nuevo" _.
  - En la ruta de solicitud no válida, la página del formulario debe mostrar el
    mensaje de error _ “El formulario no es válido, los campos [campo1 ...
    campoN] son ​​obligatorios” _.
  - En la ruta del servicio no encontrado, la página del formulario debe mostrar
    el mensaje _ "Error de conexión, intente más tarde" _.
