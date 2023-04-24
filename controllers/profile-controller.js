const profileService = require("../service/profile-service");

class ProfileController {
  async getProfiles(req, res, next) {
    try {
      const profiles = await profileService.getAllProfiles();
      return res.json(profiles);
    } catch (e) {
      next(e);
    }
  }
  async createProfiles(req, res, next) {
    try {
      const profiles = await profileService.getAllProfiles();
      return res.json(profiles);
    } catch (e) {
      next(e);
    }
  }
}

module.exports = new ProfileController();
