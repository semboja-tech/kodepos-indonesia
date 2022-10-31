const axios = require('axios');
const client = require('../client');

const instance = axios.create({
  baseURL: 'https://kodeposresmi.com',
});

module.exports = {
  decodeZipcode: (zipCode) => client(instance, `/${zipCode}`, null, 'GET'),
};
