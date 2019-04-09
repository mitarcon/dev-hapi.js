module.exports = {
  method: "GET",
  path: "/static",
  handler: {
    directory: {
      path: ".",
      index: ["index.html"]
    }
  }
};
