let usersDb = [];
let idCounter = 0;

const getAll = () => {
  return usersDb;
};

const get = (id) => {
  return usersDb.find((user) => {
    return user.id === id;
  });
};

const create = (params) => {
  let user = {id: idCounter, username: params.username};
  usersDb.push(user);
  idCounter++;
  return user;
};

const destroy = (id) => {
  let user = get(id);
  let index = usersDb.indexOf(user);
  usersDb.splice(index, 1);
  return user;
};

module.exports = {
  getAll: getAll,
  get: get,
  create: create,
  destroy: destroy
};
