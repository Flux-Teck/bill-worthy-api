Express & ES6 REST API Boilerplate
==================================

This is a straightforward boilerplate for building REST APIs with ES6 and Express.

- ES6 support via [bBbel](https://babeljs.io)
- REST resources as middleware via [resource-router-middleware](https://github.com/developit/resource-router-middleware)
- CORS support via [CORS](https://github.com/troygoode/node-cors)
- Body Parsing via [Body Parser](https://github.com/expressjs/body-parser)
- Database via [MongoDB](https://www.mongodb.com/) + [Mongoose](https://github.com/Automattic/mongoose)



Getting Started
---------------

```sh
# clone it
git clone git@github.com:developit/express-es6-rest-api.git
cd express-es6-rest-api

# Make it your own
rm -rf .git && git init && npm init

# Install dependencies
npm install

# Start development live-reload server
PORT=8080 npm run dev

# Start production server:
PORT=8080 npm start
```

License
-------

MIT
