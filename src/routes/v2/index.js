const express = require('express');
const zipCodeRoute = require('./zipCode.route');

const router = express.Router();

const defaultRoutes = [
  {
    path: '/zip-code',
    route: zipCodeRoute,
  },
];

defaultRoutes.forEach((route) => {
  router.use(route.path, route.route);
});

module.exports = router;
