const cityService = require("../service/city-service");

class CityController {
  async getCities(req, res, next) {
    try {
      const cities = await cityService.getAllCities();
      return res.json(cities);
    } catch (e) {
      next(e);
    }
  }
}

module.exports = new CityController();
