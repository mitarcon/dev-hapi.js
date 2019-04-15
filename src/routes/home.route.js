module.exports = {
  method: "GET",
  path: "/home",
  handler: (request, h) => {
    return h.file('index.html');
  }
};