const { load } = require('cheerio');
const catchAsync = require('../utils/catchAsync');
const { decodeZipcode } = require('../connectors/zipcode');

const getZipCodeDetails = catchAsync(async (req, res) => {
  const { zipCode } = req.params;

  const result = [];

  const response = await decodeZipcode(zipCode);
  const $ = load(response.data);

  // Table Head
  const tHeader = $('.table > thead > tr > th');
  tHeader.toArray().forEach(({ children }) => {
    result.push({ key: children[0].data.split('\n')[1].trim() });
  });

  // Table Body
  const tBody = $('.table > tbody > tr > td > a');
  tBody.toArray().forEach((col, index) => {
    col.children.forEach(({ data }) => {
      result[index].value = data;
    });
  });

  res.send(result);
});

module.exports = {
  getZipCodeDetails,
};
