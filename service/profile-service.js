const ProfileModel = require("../models/profile-model");
const ProfileDto = require("../dtos/profile-dto");

class ProfileService {
  async getAllProfiles() {
    const profiles = await ProfileModel.find();
    return profiles;
  }
  async createProfiles() {
    const profile = await ProfileModel.create({
      firstname,
      lastname,
      email,
      phone,
      city,
      company,
      price,
      about,
      facebook,
      instagram,
      web,
    });

    const profileDto = new ProfileDto(profile);

    return { profile: profileDto };
  }
}

module.exports = new ProfileService();
