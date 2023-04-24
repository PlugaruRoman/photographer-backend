const CityModel = require("../models/cities-model");

class CityService {
  async getAllCities() {
    const cities = await CityModel.find();
    return cities;
  }
}

module.exports = new CityService();
