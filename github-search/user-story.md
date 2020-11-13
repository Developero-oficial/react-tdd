# US - github repositories list

As a developer, I want to take a quick look at the github repositories as a way
of inspiring me to be better professional.

## Acceptance Criteria:

- There must be a github repositories list page.

- The page should contain the next filters:

  - An input text in order to filter by repository name. This is an optional
    field in order to do the search.
  - The Search Button.

- The results section should contain:
  - Before the first search, show the initial state message “Please provide a
    search option and click in the search button”.
  - The search button should be disabled until the search is done.
  - The data should be displayed as a sticky table.
  - The header table should contain: Repository, stars, forks, open issues and
    updated at
  - Each result should have: owner avatar image, name, stars, updated at, forks,
    open issues. It should have a link that opens in a new tab the github
    repository selected.
  - Total results number of the search and the current number of results.
    Example: 1-10 of 100.
  - A results size per page select/combobox with the options: 30, 50, 100. The
    default is 30.
  - Next and previous pagination when the context applies to them, example: on
    the first page, the previous page should be disabled.
  - If there is no results, then show a empty state message “You search has no
    results”
- Handling filter:
  - If the developer types "ruby" in the filter by repository name input and
    clicks on search, the app should return repositories with the "ruby" word
    associated.
- Size per page:
  - If the developer clicks on search button and then selects 50 per page value,
    the app should show 50 repositories on the table
- Pagination:
  - If the developer clicks on search and then on next page button, the app
    should show the next repositories.
  - If the developer clicks on search and then on next page button and then
    clicks on previous button, the app should show the previous repositories.
- Handling errors:
  - If there is an unexpected error from the frontend app, the app should show a
    message “There is an unexpected error” and a reload button.
  - If there is an unexpected error from the backend, the app should display an
    alert message error with the message from the service if any, if not show
    the generic “there is an unexpected error”.

---

# US - Lista de repositorios de github

Como desarrollador, quiero echar un vistazo rápido a los repositorios de github
como una forma de inspirarme a ser mejor profesional contribuyendo a proyectos
open source.

## Criterios de aceptación:

- Debe haber una página de lista de repositorios de github.
- La página debe contener los siguientes filtros:
  - Un input text para filtrar por nombre de repositorio. Esta es un campo
    opcional para realizar la búsqueda.
- La sección de resultados debe contener:
  - Antes de la primera búsqueda, muestre el mensaje de estado inicial
    "Proporcione una opción de búsqueda y haga clic en el botón de búsqueda ”.
  - El botón de Search debe estar deshabilitado hasta que se termine la
    búsqueda.
  - Los datos deben mostrarse como una tabla adhesiva.
  - La cabecera de la tabla debe contener: Repository, stars, forks, open issues
    and updated at y open issues.
  - Cada resultado debe tener: imagen de avatar del propietario, nombre,
    estrellas, actualizado en, bifurcaciones, problemas abiertos. Debería tener
    un enlace que se abre en una nueva pestaña en github del repositorio
    seleccionado.
  - Número total de resultados de la búsqueda y número actual de resultados.
    Ejemplo: 1-10 de 100.
  - Un select/combobox para modificar el tamaño de resultados por selección de
    página con las opciones: 30, 50, 100. El valor predeterminado es 30.
  - Paginación siguiente y anterior cuando el contexto aplica, ejemplo: en la
    primera página, la página anterior debe estar desactivada.
  - Si no hay resultados, muestre un mensaje de estado vacío "Tu búsqueda no
    tiene resultados "
- Manejo de filtros:
  - Si el desarrollador escribe "ruby" en el filtro por la entrada del nombre
    del repositorio y hace clic en la búsqueda, la aplicación debería devolver
    repositorios con la palabra "ruby" asociado.
- Tamaño por página
  - Si el desarrollador hace clic en el botón de búsqueda y luego selecciona 50
    por valor de página, la aplicación debería mostrar 50 repositorios en la
    tabla
- Paginación:
  - Si el desarrollador hace clic en buscar y luego en el botón de la página
    siguiente, la aplicación debería mostrar los próximos repositorios.
  - Si el desarrollador hace clic en buscar y luego en el botón de la página
    siguiente y luego hace clic en el botón anterior, la aplicación debería
    mostrar los repositorios anteriores.
- Manejo de errores:
  - Si hay un error inesperado de la aplicación de frontend, la aplicación
    debería mostrar un mensaje "Hay un error inesperado" y un botón de recarga.
  - Si hay un error inesperado del backend, la aplicación debería mostrar un
    error de mensaje de alerta con el mensaje del servicio si lo hay, si no se
    muestra el genérico "hay un error inesperado".
