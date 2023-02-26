# Admin Story | Actions

## As admin, I want to search users by name and email so I can find quickly an user

### Acceptance Criteria:

- When should display a loading state when is fetching the users
- When the admin type in the search field, the app should filter the users by name and email following the search field value and update the table with the results
- If there are not users matching with the search, then the app should show the message "There are not users that match with that search"

## As admin, I want to invite users to my group members so I can grow my group

### Acceptance Criteria:

- When the admin click on "invite user" button, then the app should display a modal with a form with the fields:
  - first name.
  - last name.
  - email.
  - role (admin or member).

And a submit button.

- All the fields are required. Display the error message bellow the field as: "the [input name] is required".
- The submit button is disabled until the form is valid
- When the user is invited successfully, there should display a toast element with a success message
- When the form is valid, the user clicks on submit button and there is a BE error, there should display a toast element with the message error "There was an error"

## As admin, I want to update the current users in my group so I can have the info updated

### Acceptance Criteria:

- When the admin click on "update user" button, then the app should display a modal with a form with the fields:
  - first name.
  - last name.
  - email.
  - role (admin or member).

And a submit button.

- The fields should pre populate with the current user information
- All the fields are required. Display the error message bellow the field as: "the [input name] is required".
- The submit button is disabled until the form is valid
- When the user is invited successfully, there should display a toast element with a success message
- When the form is valid, the user clicks on submit button and there is a BE error, there should display a toast element with the message error "There was an error"

## As admin, I want to disable an user access when is necessary, so I can manage properly my group

### Acceptance Criteria:

- When the admin click on "disable user access" button, then the app should display a confirmation dialog the text "Are you sure to disable user access?", a cancel and a confirm buttons
- When the admin click on cancel or outside of the dialog, then the app should close the dialog without affectation
- When the admin click on confirm button, then the user selected should appear as innactive status
- When there is an innactive user, then there should be an "activate" user button.
- When the admin clicks on "activate" button, then the app should show display a confirmation dialog with the text "Are you sure to activate this user?", a cancel and confirm buttons.
