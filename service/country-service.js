const CountryModel = require("../models/countries-model");

class CountryService {
  async getAllCountries() {
    const countries = await CountryModel.find();
    return countries;
  }
}

module.exports = new CountryService();
