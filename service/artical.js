/*
 * @Author: your name
 * @Date: 2021-07-09 17:41:00
 * @LastEditTime: 2021-07-09 18:34:43
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \blogApi\service\artical.js
 */

const app = require('../app.js');

const graphqlHTTP = require("express-graphql");

const schema = require("./schema");

app.use( "/graphql",
  graphqlHTTP({
  schema,
  graphiql: true
  })
);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));