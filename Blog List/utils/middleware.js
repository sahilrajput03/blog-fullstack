const tokenExtractor = (request, response,next) => {
  const authorization = request.get("authorization");
  if (authorization && authorization.toLowerCase().startsWith("bearer ")) {
    request.token = authorization.substring(7);
    console.log(request.token);
  }
  next();
};

module.exports = { tokenExtractor };
