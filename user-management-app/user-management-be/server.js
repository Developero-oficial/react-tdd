const express = require("express");
const jwt = require("jsonwebtoken");
const faker = require("@faker-js/faker");
const cors = require("cors");

const { mockLoginUsers, generateListUsers } = require("./mockUsers");

const secret =
  process.env.JWT_SECRET || "thisIsJustAMockServerForEducationalPurpose";

const app = express();

app.use(cors());
app.use(express.json());

function chunk(arr, chunkSize) {
  if (chunkSize <= 0) throw "Invalid chunk size";
  var R = [];
  for (var i = 0, len = arr.length; i < len; i += chunkSize)
    R.push(arr.slice(i, i + chunkSize));
  return R;
}

const usersPaginated = [
  generateListUsers(),
  generateListUsers(),
  generateListUsers(),
  generateListUsers(),
  generateListUsers(),
];

const verifyIsAuthenticatedHandler = (req, res, next) => {
  try {
    const token = req.headers.authorization;

    if (!token) {
      return res.status(401).send({ errorMessage: "The token is required" });
    }

    jwt.verify(token, secret);
    next();
  } catch (ex) {
    res.send(401, { errorMessage: "The token is not valid" });
  }
};

const verifyIsAuthorizedHandler = (req, res, next) => {
  try {
    const token = req.headers.authorization;

    if (!token) {
      return res.status(401).send({ errorMessage: "The token is required" });
    }

    const { role } = jwt.verify(token, secret);

    if (role !== "Admin") {
      return res.status(401).send({
        errorMessage:
          "You Don't have the permissions required for this operation",
      });
    }
    next();
  } catch (ex) {
    res.send(401, { errorMessage: "The token is not valid" });
  }
};

app.post("/login", (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).send({
        errorMessage: "email and password are required",
      });
    }

    const user = mockLoginUsers[email];

    if (!user || user?.password !== password) {
      return res.status(400).send({
        errorMessage: "email or password incorrect",
      });
    }

    const token = jwt.sign(
      {
        name: user.name,
        email: user.email,
        role: user.role,
      },
      secret
    );

    return res.status(200).send({ token });
  } catch (e) {
    console.log(e);
    return res.status(500).send({ error: e.message });
  }
});

app.get("/users", verifyIsAuthenticatedHandler, (req, res) => {
  try {
    const { pageNumber = 0, search } = req.query;

    const parsedPageNumer = Number(pageNumber);

    let currentUsersPaginated = usersPaginated;

    if (search) {
      const usersFiltered = [];

      for (let i = 0; i < usersPaginated.length; i++) {
        const usersPage = currentUsersPaginated[i];

        let tempUsers = usersPage.filter(
          ({ fullName, email }) => fullName === search || email === search
        );

        usersFiltered.push([...tempUsers]);
      }

      currentUsersPaginated = chunk(usersFiltered, 10);
    }

    const nextUsersUrl =
      parsedPageNumer < 5
        ? `localhost:8080/users?pageNumber=${parsedPageNumer + 1}`
        : null;

    const prevUsersUrl =
      parsedPageNumer > 0
        ? `localhost:8080/users?pageNumber=${parsedPageNumer - 1}`
        : null;

    return res.status(200).send({
      paginatedUsers: currentUsersPaginated[parsedPageNumer],
      nextUsersUrl,
      prevUsersUrl,
    });
  } catch (e) {
    console.log(e);
    return res.status(500).send({ error: e.message });
  }
});

app.patch(
  "/users",
  verifyIsAuthenticatedHandler,
  verifyIsAuthorizedHandler,
  (req, res) => {
    try {
      const { userUid, accessStatus } = req.body;

      if (!userUid || !accessStatus) {
        return res
          .status(400)
          .send({ errorMessage: "userUid and accessStatus are required" });
      }

      res.status(200).send();
    } catch (e) {
      console.log(e);
      return res.status(500).send({ error: e.message });
    }
  }
);

app.post(
  "/users",
  verifyIsAuthenticatedHandler,
  verifyIsAuthorizedHandler,
  (req, res) => {
    try {
      const { fullName, email, role } = req.body;

      if (!fullName || !email || !role) {
        return res
          .status(400)
          .send({ errorMessage: "fullName, email and role are required" });
      }

      return res.status(200).send({
        userInvited: {
          userId: faker.datatype.uuid(),
          fullName,
          email,
          role,
          avatar: faker.image.avatar(),
          accessStatus: true,
          lastLogin: null,
        },
      });
    } catch (e) {
      console.log(e);
      return res.status(500).send({ error: e.message });
    }
  }
);

app.put(
  "/users/:uid",
  verifyIsAuthenticatedHandler,
  verifyIsAuthorizedHandler,
  (req, res) => {
    try {
      const { fullName, email, role } = req.body;

      if (!fullName || !email || !role) {
        return res
          .status(400)
          .send({ errorMessage: "fullName, email and role are required" });
      }

      return res.status(200).send();
    } catch (e) {
      console.log(e);
      return res.status(500).send({ error: e.message });
    }
  }
);

app.delete(
  "/users/:uid",
  verifyIsAuthenticatedHandler,
  verifyIsAuthorizedHandler,
  (req, res) => {
    try {
      return res.status(200).send();
    } catch (e) {
      console.log(e);
      return res.status(500).send({ error: e.message });
    }
  }
);

app.listen(8080, () => console.log("running localhost:8080"));
