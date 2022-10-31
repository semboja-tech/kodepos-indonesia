const express = require('express');
const zipCodeController = require('../../controllers/zipCode.controller');

const router = express.Router();

router.route('/:zipCode').get(zipCodeController.getZipCodeDetails);

module.exports = router;

/**
 * @swagger
 * tags:
 *   name: ZipCode
 *   description: Zip Code retrieval
 */

/**
 * @swagger
 * /zip-code/{zipCode}:
 *   get:
 *     summary: Decode a zip code
 *     description: Decode a zip code to get details about Province, City/Regency, District and Sub-District.
 *     tags: [ZipCode]
 *     parameters:
 *       - in: path
 *         name: zipCode
 *         required: true
 *         schema:
 *           type: string
 *         description: a 5 digits zip code
 *     responses:
 *       "200":
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 results:
 *                   type: array
 *                   items:
 *                     $ref: '#/components/schemas/KeyValuePair'
 */
