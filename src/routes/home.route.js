module.exports = {
  method: "GET",
  path: "/",
  handler: (request, h) => {
    return h.view('index', {
      title: 'home'
    })
  }
};