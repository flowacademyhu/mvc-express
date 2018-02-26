let rolesDb = [];
let idCounter = 0;

const getAll = () => {
  return rolesDb;
};

const get = (id) => {
  return rolesDb.find((role) => {
    return role.id === id;
  });
};

const create = (params) => {
  let role = {id: idCounter, rolename: params.rolename};
  rolesDb.push(role);
  idCounter++;
  return role;
};

const destroy = (id) => {
  let role = get(id);
  let index = rolesDb.indexOf(role);
  rolesDb.splice(index, 1);
  return role;
};

module.exports = {
  getAll: getAll,
  get: get,
  create: create,
  destroy: destroy
};
