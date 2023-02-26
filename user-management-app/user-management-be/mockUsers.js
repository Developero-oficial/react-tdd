const { faker } = require("@faker-js/faker");

const mockAdminUser = {
  email: "john.doe@mail.com",
  password: "123456",
  role: "admin",
};

const mockMemberUser = {
  email: "jason.doe@mail.com",
  password: "123456",
  role: "member",
};

module.exports.mockLoginUsers = {
  "john.doe@mail.com": mockAdminUser,
  "jason.doe@mail.com": mockMemberUser,
};

const createRandomUser = () => ({
  uid: faker.datatype.uuid(),
  fullName: faker.internet.userName(),
  email: faker.internet.email(),
  avatar: faker.image.avatar(),
  accessStatus: true,
  role: "member",
  lastLogin: faker.date.past(),
});

module.exports.generateListUsers = (usersNum = 10) => {
  const listUsers = [];

  for (let i = 0; i < usersNum; i++) {
    listUsers.push(createRandomUser());
  }

  return listUsers;
};
