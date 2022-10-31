const { load } = require('cheerio');
const catchAsync = require('../utils/catchAsync');
const { decodeZipcode } = require('../connectors/zipcode');

const getZipCodeDetails = catchAsync(async (req, res) => {
  const { zipCode } = req.params;

  const results = [];

  const response = await decodeZipcode(zipCode);
  const $ = load(response.data);

  // Table Head
  const tHeader = $('.table > thead > tr > th');
  tHeader.toArray().forEach(({ children }) => {
    results.push({ key: children[0].data.split('\n')[1].trim() });
  });

  // Table Body
  const tBody = $('.table > tbody > tr > td > a');
  tBody.toArray().forEach((col, index) => {
    col.children.forEach(({ data }) => {
      results[index].value = data;
    });
  });

  res.send({ results });
});

module.exports = {
  getZipCodeDetails,
};
