const express = require("express");
const bodyParser = require("body-parser");
const graphqlHttp = require("express-graphql");
const morgan = require("morgan");
const mongoose = require("mongoose");
const cors = require("cors");
const schema = require("./graphql/schema");
const { authUserMiddleware } = require("./functions/middlewares");
const Models = require("./models");

const { SECRET, MONGO_PASSWORD, NODE_ENV, PORT, LOCAL_DATABASE } = process.env;
const port = PORT || 3003;
const development = NODE_ENV === "development";
const graphiql = development;
const dbName = "challenge";

const DATABASE = `mongodb+srv://firstUser:${MONGO_PASSWORD}@cluster0-w51h9.mongodb.net/${dbName}?retryWrites=true&w=majority`;

// const database = development ? LOCAL_DATABASE : DATABASE;
const database = DATABASE;

mongoose
  .connect(database, { useNewUrlParser: true, useUnifiedTopology: true })
  .then((_) => console.log("mongoose.connect: authentication working"))
  .catch((err) => console.log("mongoose.connect", err));

mongoose.connection.on("error", (err) => {
  console.error(`CONNECTION ERROR → ${err}`);
});

const app = express();

app.use(authUserMiddleware);

app.use(morgan("dev"));
app.use(cors("*"));
app.use(bodyParser.json());

app.use(
  "/graphql",
  graphqlHttp((req) => ({
    schema,
    context: {
      ...Models,
      SECRET,
      authUser: req.user,
    },
    graphiql,
  }))
);

app.listen(port);
console.log(`App running on port ${port}`);
