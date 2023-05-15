const CountryService = require("../service/country-service");

class CountryController {
  async getCountries(req, res, next) {
    try {
      const countries = await CountryService.getAllCountries();
      return res.json(countries);
    } catch (e) {
      next(e);
    }
  }
}

module.exports = new CountryController();
