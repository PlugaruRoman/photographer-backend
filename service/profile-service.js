const ProfileModel = require("../models/profile-model");
const ProfileDto = require("../dtos/profile-dto");

class ProfileService {
  async getAllProfiles() {
    const profiles = await ProfileModel.find();
    return profiles;
  }
  async createProfiles(profile) {
    const createdProfile = await ProfileModel.create(profile);
    return createdProfile;
  }
  async getOneProfile(id) {
    if (!id) {
      throw new Error("id undefined");
    }
    const profile = await ProfileModel.findById(id);
    return profile;
  }
  async updateProfile(post) {
    if (!post._id) {
      throw new Error("id undefined");
    }
    const updateProfile = await ProfileModel.findByIdAndUpdate(post._id, post, {
      new: true,
    });
    return updateProfile;
  }
  async deleteProfile(id) {
    if (!id) {
      throw new Error("id undefined");
    }
    const profile = await ProfileModel.findByIdAndDelete(id);
    return profile;
  }
}

module.exports = new ProfileService();
