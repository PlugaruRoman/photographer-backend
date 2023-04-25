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
