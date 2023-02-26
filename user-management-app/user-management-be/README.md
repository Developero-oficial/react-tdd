# User Management BE

This is just a mock BE created for the user management FE development as a part of React JS TDD Udemy course.

Please don't use this code for production environment.

## Manual tests

You can use Postman or whatever you want in order to test this mock server.

I'll show you some examples using curl command in the terminal.

### Login

Admin user:

```
curl --header "Content-Type: application/json" \
  --request POST \
  --data '{"email":"john.doe@mail.com","password":"123456"}' \
  http://localhost:8080/login
```
