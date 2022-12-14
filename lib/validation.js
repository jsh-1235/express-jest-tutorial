module.exports = {
  isEmail: (email) => {
    const regExpr = /[a-zA-Z0-9-_]+@\w+.\w{3}/gm;

    if (regExpr.test(email)) {
      return true;
    } else {
      return false;
    }
  },
};
