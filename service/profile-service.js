const ProfileModel = require("../models/profile-model");

class ProfileService {
  async getAllProfiles() {
    const profiles = await ProfileModel.find();
    return profiles;
  }
  async createProfiles(profile) {
    const createdProfile = await ProfileModel.create(profile);
    return createdProfile;
  }
  async getOneProfile(user) {
    if (!user) {
      throw new Error("id undefined");
    }
    const profile = await ProfileModel.findOne({ user });
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
