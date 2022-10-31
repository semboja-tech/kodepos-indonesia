const express = require('express');
const zipCodeController = require('../../controllers/zipCode.controller');

const router = express.Router();

router.route('/:zipCode').get(zipCodeController.getZipCodeDetails);

module.exports = router;
