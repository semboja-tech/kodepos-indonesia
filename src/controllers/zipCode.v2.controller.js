const catchAsync = require('../utils/catchAsync');
const zipcodes = require('../models/address/zipcodes.json');
const subdistricts = require('../models/address/subdistricts.json');
const districts = require('../models/address/districts.json');
const cities = require('../models/address/cities.json');
const provinces = require('../models/address/provinces.json');

const getZipCodeDetails = catchAsync(async (req, res) => {
  const { zipCode } = req.params;
  const result = [];

  // find zipcode
  const zipcode = zipcodes.find((item) => item.code === zipCode);

  if (zipcode) {
    // find subdistrict
    result.push(zipcode);
    const subdistrict = subdistricts.find((item) => item.id === zipcode.subDistrictId);

    if (subdistrict) {
      // find district
      result.push(subdistrict);
      const district = districts.find((item) => item.id === subdistrict.districtId);

      if (district) {
        // find city
        result.push(district);
        const city = cities.find((item) => item.id === district.cityId);

        if (city) {
          // find province
          result.push(city);
          const province = provinces.find((item) => item.id === city.provinceId);

          if (province) {
            result.push(province);
          }
        }
      }
    }
  }

  res.send(result);
});

module.exports = {
  getZipCodeDetails,
};
