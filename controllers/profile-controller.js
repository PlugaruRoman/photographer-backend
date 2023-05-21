const countryService = require("../service/country-service");
const profileService = require("../service/profile-service");

class ProfileController {
  async getProfiles(req, res, next) {
    try {
      const page = parseInt(req.query.page) - 1 || 0;
      const limit = parseInt(req.query.limit) || 10;
      const search = req.query.search || "";
      let sort = req.query.sort || "price";
      let country = req.query.country || "All";

      const countryOptions = await countryService.getAllCountries();
      const countryNames = countryOptions.map((country) => country.label);

      country === "All"
        ? (country = [...countryNames])
        : (country = req.query.country.split(","));
      req.query.sort ? (sort = req.query.sort.split(",")) : (sort = [sort]);

      let sortBy = {};
      if (sort[1]) {
        sortBy[sort[0]] = sort[1];
      } else {
        sortBy[sort[0]] = "asc";
      }

      const profiles = await profileService.getAllProfiles(
        page,
        limit,
        search,
        country,
        sortBy,
        countryNames
      );
      return res.json(profiles);
    } catch (e) {
      next(e);
    }
  }
  async createProfiles(req, res, next) {
    try {
      const profiles = await profileService.createProfiles(req.body);
      return res.json(profiles);
    } catch (e) {
      next(e);
    }
  }

  async getOneProfile(req, res, next) {
    try {
      const profile = await profileService.getOneProfile(req.params.id);
      return res.json(profile);
    } catch (e) {
      next(e);
    }
  }
  async updateProfile(req, res, next) {
    try {
      const updateProfile = await profileService.updateProfile(req.body);
      return res.json(updateProfile);
    } catch (e) {
      next(e);
    }
  }
  async deleteProfile(req, res, next) {
    try {
      const deleteProfile = await profileService.deleteProfile(req.params.id);
      return res.json(deleteProfile);
    } catch (e) {
      next(e);
    }
  }
}

module.exports = new ProfileController();
