const jwt = require("jsonwebtoken");
const { SECRET } = process.env;

const authUserMiddleware = async (req) => {
  const token = req.headers["x-token"];
  console.log("[addUserMiddleware] token:", token);
  const message = req.headers.referer;
  console.log("[addUserMiddleware] referer:", message);

  if (!token) {
    console.log("No token sent");
    req.user = undefined;
  } else {
    try {
      console.log("SECRET:", SECRET);
      const { user } = await jwt.verify(token, SECRET);
      console.log("[addUserMiddleware] user:", user);

      if (!user) {
        console.log("No user found!");
      }
      
      req.user = user;
    } catch (err) {
      console.log(`Error: ${err.name}`);
    }
  }

  req.next();
};

module.exports = {
  authUserMiddleware,
};
